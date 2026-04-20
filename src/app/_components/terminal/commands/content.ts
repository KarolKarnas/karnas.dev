import { Command } from "./index"

const cat: Command = {
  name: "cat",
  description: "Display a blog post or project summary",
  usage: "cat <slug>",
  execute: (args, context) => {
    if (args.length === 0) return "Usage: cat <slug>"

    const slug = args[0].toLowerCase()

    if (slug === "about") {
      return [
        "Karol Karnas - Backend Engineer · AI Pipelines · Agentic Systems",
        "",
        "I love the moment when a well-built backend quietly powers",
        "AI that actually works.",
        "",
        "Stack: Python, Django, FastAPI, Celery, PostgreSQL/pgvector,",
        "       Redis, Docker - on AWS and Azure.",
        "Location: Poland",
        "Site: https://www.karnas.dev",
      ].join("\n")
    }

    const post = context.posts.find((p) => p.slug === slug)
    if (post) {
      const lines = post.content.split("\n").slice(0, 20)
      return [
        `Title: ${post.title}`,
        `Date: ${post.date}`,
        `Tags: ${post.tags.join(", ")}`,
        "",
        ...lines,
        lines.length >= 20 ? "\n... (truncated - visit the full page)" : "",
      ].join("\n")
    }

    const project =
      context.projects.find((p) => p.slug === slug) ??
      context.professional.find((p) => p.slug === slug)
    if (project) {
      const lines = project.content.split("\n").slice(0, 20)
      return [
        `Title: ${project.title}`,
        `Date: ${project.date}`,
        `Stack: ${project.stack?.join(", ") ?? "N/A"}`,
        project.live_demo ? `Live: ${project.live_demo}` : null,
        project.repo ? `Repo: ${project.repo}` : null,
        "",
        ...lines,
        lines.length >= 20 ? "\n... (truncated - visit the full page)" : "",
      ]
        .filter((line): line is string => line !== null)
        .join("\n")
    }

    return `cat: ${slug}: No such file or directory`
  },
}

const head: Command = {
  name: "head",
  description: "Show first 5 lines of a post",
  usage: "head <slug>",
  execute: (args, context) => {
    if (args.length === 0) return "Usage: head <slug>"

    const slug = args[0].toLowerCase()

    const post = context.posts.find((p) => p.slug === slug)
    if (post) {
      return [
        `Title: ${post.title}`,
        `Date: ${post.date}`,
        `Tags: ${post.tags.join(", ")}`,
        `Subtitle: ${post.sub_title}`,
        "",
      ].join("\n")
    }

    const project =
      context.projects.find((p) => p.slug === slug) ??
      context.professional.find((p) => p.slug === slug)
    if (project) {
      return [
        `Title: ${project.title}`,
        `Date: ${project.date}`,
        `Stack: ${project.stack?.join(", ") ?? "N/A"}`,
        project.live_demo ? `Live: ${project.live_demo}` : null,
        project.repo ? `Repo: ${project.repo}` : null,
      ]
        .filter((line): line is string => line !== null)
        .join("\n")
    }

    return `head: ${slug}: No such file or directory`
  },
}

const find: Command = {
  name: "find",
  description: "Search across post/project titles and content",
  usage: "find <keyword>",
  execute: (args, context) => {
    if (args.length === 0) return "Usage: find <keyword>"

    const keyword = args.join(" ").toLowerCase()
    const results: string[] = []

    for (const post of context.posts) {
      if (
        post.title.toLowerCase().includes(keyword) ||
        post.content.toLowerCase().includes(keyword)
      ) {
        results.push(`  blog/${post.slug}  - ${post.title}`)
      }
    }

    for (const project of context.projects) {
      if (
        project.title.toLowerCase().includes(keyword) ||
        project.content.toLowerCase().includes(keyword)
      ) {
        results.push(`  side-projects/${project.slug}  - ${project.title}`)
      }
    }

    for (const pro of context.professional) {
      if (
        pro.title.toLowerCase().includes(keyword) ||
        pro.content.toLowerCase().includes(keyword)
      ) {
        results.push(`  professional-projects/${pro.slug}  - ${pro.title}`)
      }
    }

    if (results.length === 0) return `No results found for '${keyword}'`
    return `Found ${results.length} result(s):\n${results.join("\n")}`
  },
}

export const contentCommands: Command[] = [cat, head, find]
