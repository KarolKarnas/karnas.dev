import assert from "node:assert/strict"
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs"
import { createRequire } from "node:module"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import vm from "node:vm"
import { test } from "node:test"
import ts from "typescript"
import matter from "gray-matter"

const require = createRequire(import.meta.url)
const root = fileURLToPath(new URL("../", import.meta.url))
const cache = new Map()

function load(name) {
  const filename = [name, `${name}.ts`, `${name}.tsx`, `${name}/index.ts`].find(
    (candidate) => existsSync(candidate) && statSync(candidate).isFile()
  )
  if (!filename) throw new Error(`Missing module ${name}`)
  if (cache.has(filename)) return cache.get(filename).exports
  const module = { exports: {} }
  cache.set(filename, module)
  const source = ts.transpileModule(readFileSync(filename, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
    },
  }).outputText
  vm.runInNewContext(
    source,
    {
      module,
      exports: module.exports,
      require(specifier) {
        if (specifier.endsWith(".scss"))
          return new Proxy({}, { get: (_target, key) => key })
        if (specifier.startsWith("@/"))
          return load(resolve(root, "src", specifier.slice(2)))
        if (specifier.startsWith("."))
          return load(resolve(dirname(filename), specifier))
        return require(specifier)
      },
      fetch: () => {
        throw new Error("Tests must not make network requests")
      },
    },
    { filename }
  )
  return module.exports
}

const terminal = load(
  resolve(root, "src/app/_components/terminal/commands/index.ts")
)
const filesystem = load(
  resolve(root, "src/app/_components/terminal/terminal-filesystem.ts")
)
const navigation = load(resolve(root, "src/utils/generated-nav.ts"))
const plain = (value) => JSON.parse(JSON.stringify(value))

function metadata(directory) {
  return readdirSync(resolve(root, directory))
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const { data, content } = matter(
        readFileSync(resolve(root, directory, file), "utf8")
      )
      return { ...data, content, slug: file.slice(0, -3) }
    })
}

function createSession(currentPath = "/") {
  const visited = []
  const context = {
    currentPath,
    previousPath: null,
    theme: "monokai",
    posts: metadata("_posts"),
    projects: metadata("_projects"),
    professional: metadata("_professional"),
    navigate(path) {
      visited.push(path)
    },
    changeDirectory(path) {
      if (path !== context.currentPath)
        context.previousPath = context.currentPath
      context.currentPath = path
      visited.push(path)
    },
    commandHistory: [],
    clearTerminal() {
      context.cleared = true
    },
    closeTerminal() {
      context.closed = true
    },
    setTheme(theme) {
      context.theme = theme
    },
    startMatrix() {
      context.matrix = true
    },
  }
  return {
    context,
    visited,
    run: (input) => terminal.executeCommand(input, context),
  }
}

test("cd blog then ls lists the actual explorer files instead of root folders", async () => {
  const { run, context, visited } = createSession()
  const rootListing = await run("ls")
  assert.equal(
    rootListing.entries.filter((entry) => entry.kind === "directory").length,
    3
  )
  assert(rootListing.entries.some((entry) => entry.name === "about.json"))
  assert.equal(await run("cd blog"), "")
  assert.equal(context.currentPath, "/blog")
  assert.deepEqual(visited, ["/blog"])
  const listing = await run("ls")
  assert.equal(listing.path, "/blog")
  assert.deepEqual(
    plain(listing.entries.map((entry) => entry.name)),
    plain(navigation.BLOG_NAV.map((entry) => entry.title))
  )
  assert(
    listing.entries.every(
      (entry) => entry.kind === "file" && entry.title && entry.date
    )
  )
  assert.equal(await run("pwd"), "/home/visitor/karnas.dev/blog")
  assert.equal(filesystem.formatPromptPath(context.currentPath), "~/blog")
})

test("relative, absolute, home and parent paths resolve within the portfolio", async () => {
  const { run, context } = createSession()
  await run("cd /blog/")
  await run("cd ../professional-projects")
  assert.equal(context.currentPath, "/professional-projects")
  await run("cd ..")
  assert.equal(context.currentPath, "/")
  await run("cd ~/side-projects")
  assert.equal(context.currentPath, "/side-projects")
  await run("cd /home/visitor/karnas.dev/blog")
  assert.equal(context.currentPath, "/blog")
  await run("cd ../../../../")
  assert.equal(context.currentPath, "/")
  await run("cd blog")
  await run("cd")
  assert.equal(context.currentPath, "/")
})

test("opening a listed file navigates to its route without changing the shell directory", async () => {
  const { run, context, visited } = createSession("/blog")
  const listing = await run("ls")
  const file = listing.entries[0]
  assert.match(await run(`open ${file.name}`), /^Opened /)
  assert.equal(visited.at(-1), file.href)
  assert.equal(context.currentPath, "/blog")
  assert((await run(`cat ${file.name}`)).includes(file.title))
  assert.equal(await run(`cat ${file.name}`), await run(`cat ${file.slug}`))
  assert.equal(await run(`cat ${file.name}`), await run(`cat ${file.path}`))
  assert.equal((await run(`head -n 2 ${file.name}`)).split("\n").length, 2)
})

test("all listed project files are readable and open the correct project section", async () => {
  const { run, visited } = createSession()
  for (const folder of ["side-projects", "professional-projects"]) {
    await run(`cd /${folder}`)
    const listing = await run("ls -l")
    assert.equal(listing.detailed, true)
    for (const file of listing.entries) {
      assert((await run(`cat ${file.name}`)).includes(file.title))
      await run(`open ${file.name}`)
      assert.equal(visited.at(-1), file.href)
      assert(file.href.startsWith(`/${folder}/`))
    }
  }
})

test("invalid files and cd targets never trigger navigation", async () => {
  const { run, context, visited } = createSession("/blog")
  assert.match(await run("cd does-not-exist"), /no such directory/)
  assert.match(await run("cd fluent_python.epub"), /Not a directory/)
  assert.match(await run("open missing.epub"), /no such file/)
  assert.match(await run("ls missing"), /No such file/)
  assert.match(await run("cat missing"), /No such file/)
  assert.match(await run("ls -x"), /Usage/)
  assert.match(await run("head -n banana fluent_python.epub"), /line count/)
  assert.equal(context.currentPath, "/blog")
  assert.deepEqual(visited, [])
})

test("listing a different directory or a single file does not change cwd", async () => {
  const { run, context } = createSession("/blog")
  assert.equal((await run("ls ../side-projects")).path, "/side-projects")
  assert.equal((await run("ls fluent_python.epub")).entries.length, 1)
  assert.equal(
    (await run("ls ~")).entries.filter((entry) => entry.kind === "directory")
      .length,
    3
  )
  assert.equal(context.currentPath, "/blog")
})

test("Tab completes command names, directories and files relative to cwd", () => {
  const names = terminal.getAllCommands().map((command) => command.name)
  const complete = (input, path = "/") =>
    plain(filesystem.completeCommand(input, path, names))
  assert.deepEqual(complete("pw"), ["pwd"])
  assert.deepEqual(complete("cd bl"), ["cd blog/"])
  assert.deepEqual(complete("cat fluent", "/blog"), ["cat fluent_python.epub"])
  assert.deepEqual(complete("open /blog/fluent"), [
    "open /blog/fluent_python.epub",
  ])
  assert.deepEqual(complete("ls -l ../prof", "/blog"), [
    "ls -l ../professional-projects/",
  ])
  assert.deepEqual(complete("cd fluent", "/blog"), [])
  assert.deepEqual(
    complete("open ../", "/blog").filter((value) => value.includes("blog")),
    ["open ../blog/"]
  )
})

test("root files, search and command help share the same filenames", async () => {
  const { run, context, visited } = createSession()
  assert.match(await run("cat about.json"), /Full-stack Engineer/)
  assert.match(await run("cat skills.svg"), /React, Next.js/)
  assert.match(await run("cat contact.sass"), /karol.karnas@gmail.com/)
  await run("open about.json")
  assert.equal(visited.at(-1), "/about")
  assert.equal(context.currentPath, "/")
  assert.match(await run("help open"), /Usage: open <file-or-directory>/)
  assert.match(await run("find Fluent Python"), /\/blog\/fluent_python.epub/)
  await run("clear")
  assert.equal(context.cleared, true)
  await run("exit")
  assert.equal(context.closed, true)
})

test("cd - switches between the two last distinct directories", async () => {
  const { run, context } = createSession()
  assert.equal(await run("cd -"), "cd: no previous directory")
  await run("cd blog")
  await run("cd .")
  assert.equal(await run("cd -"), "~")
  assert.equal(context.currentPath, "/")
  assert.equal(await run("cd -"), "~/blog")
  assert.equal(context.currentPath, "/blog")
})

test("tree shows the current directory and nested names without changing it", async () => {
  const { run, context } = createSession("/blog")
  const tree = await run("tree")
  assert(tree.startsWith("~/blog\n"))
  for (const file of navigation.BLOG_NAV) assert(tree.includes(file.title))
  assert.match(tree, /0 directories, 12 files/)
  const root = await run("tree ~")
  assert.match(root, /3 directories, 22 files/)
  assert.match(root, /├── blog\//)
  assert.match(await run("tree fluent_python.epub"), /Not a directory/)
  assert.equal(context.currentPath, "/blog")
})

test("theme only applies known workspace themes and supports completion", async () => {
  const { run, context } = createSession()
  assert.match(await run("theme"), /→ monokai/)
  assert.match(await run("theme dark-modern"), /Dark Modern applied/)
  assert.equal(context.theme, "dark-modern")
  assert.match(await run("stack"), /Theme: +Dark Modern/)
  assert.match(await run("neofetch"), /Theme: Dark Modern/)
  assert.match(await run("theme invalid"), /Unknown theme/)
  assert.equal(context.theme, "dark-modern")
  assert.deepEqual(plain(filesystem.completeCommand("theme da", "/", [])), [
    "theme dark-modern",
  ])
})

test("matrix launches an effect rather than generating random text", async () => {
  const { run, context } = createSession()
  assert.equal(await run("matrix invalid"), "Usage: matrix")
  assert.equal(context.matrix, undefined)
  assert.equal(await run("matrix"), "Wake up, visitor.")
  assert.equal(context.matrix, true)
})

test("file listing renders keyboard-accessible buttons, icons and dates", async () => {
  const React = require("react")
  const { renderToStaticMarkup } = require("react-dom/server")
  const Listing = load(
    resolve(root, "src/app/_components/terminal/terminal-listing.tsx")
  ).default
  const { run } = createSession("/blog")
  const listing = await run("ls -l")
  const html = renderToStaticMarkup(
    React.createElement(Listing, { listing, onSelect() {} })
  )
  assert.equal(
    (html.match(/<button/g) ?? []).length,
    navigation.BLOG_NAV.length
  )
  assert.equal((html.match(/<time/g) ?? []).length, navigation.BLOG_NAV.length)
  assert.match(html, /fluent_python.epub/)
  assert.match(html, /Files in ~\/blog/)
})
