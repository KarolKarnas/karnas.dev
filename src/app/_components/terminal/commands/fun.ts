import { Command, getAllCommands } from "./index"

const FORTUNES = [
  "\"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.\" — Martin Fowler",
  "\"First, solve the problem. Then, write the code.\" — John Johnson",
  "\"Experience is the name everyone gives to their mistakes.\" — Oscar Wilde",
  "\"Code is like humor. When you have to explain it, it's bad.\" — Cory House",
  "\"Fix the cause, not the symptom.\" — Steve Maguire",
  "\"Simplicity is the soul of efficiency.\" — Austin Freeman",
  "\"Make it work, make it right, make it fast.\" — Kent Beck",
  "\"Clean code always looks like it was written by someone who cares.\" — Robert C. Martin",
  "\"Programs must be written for people to read, and only incidentally for machines to execute.\" — Harold Abelson",
  "\"The best error message is the one that never shows up.\" — Thomas Fuchs",
]

const help: Command = {
  name: "help",
  description: "List all available commands",
  usage: "help",
  execute: () => {
    const commands = getAllCommands()
    const maxLen = Math.max(...commands.map((c) => c.name.length))
    const lines = commands.map(
      (c) => `  ${c.name.padEnd(maxLen + 2)}${c.description}`
    )
    return ["Available commands:", "", ...lines, "", "Type 'help' for this list."].join("\n")
  },
}

const clear: Command = {
  name: "clear",
  description: "Clear terminal output",
  usage: "clear",
  execute: (_args, context) => {
    context.clearTerminal()
    return ""
  },
}

const history: Command = {
  name: "history",
  description: "Show command history",
  usage: "history",
  execute: (_args, context) => {
    if (context.commandHistory.length === 0) return "No commands in history."
    return context.commandHistory
      .map((cmd, i) => `  ${String(i + 1).padStart(4)}  ${cmd}`)
      .join("\n")
  },
}

const joke: Command = {
  name: "joke",
  description: "Fetch a random Chuck Norris joke",
  usage: "joke",
  execute: async () => {
    try {
      const res = await fetch("https://api.chucknorris.io/jokes/random")
      const data = await res.json()
      return data.value
    } catch {
      return "Failed to fetch joke. Chuck Norris must have broken the internet."
    }
  },
}

const fortune: Command = {
  name: "fortune",
  description: "Random programming quote",
  usage: "fortune",
  execute: () => {
    return FORTUNES[Math.floor(Math.random() * FORTUNES.length)]
  },
}

const matrix: Command = {
  name: "matrix",
  description: "Brief Matrix-style rain effect",
  usage: "matrix",
  execute: () => {
    const chars = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ01234567890"
    const lines: string[] = []
    for (let i = 0; i < 8; i++) {
      let line = ""
      for (let j = 0; j < 50; j++) {
        line += chars[Math.floor(Math.random() * chars.length)]
      }
      lines.push(line)
    }
    return lines.join("\n")
  },
}

// Easter eggs
const sudoHireMe: Command = {
  name: "sudo",
  description: "Run command as superuser",
  usage: "sudo <command>",
  execute: (args) => {
    if (args.join(" ").toLowerCase() === "hire-me") {
      return [
        "🎉 PERMISSION GRANTED!",
        "",
        "Karol Karnas has been successfully hired!",
        "",
        "Reach out:",
        "  📧 karol@karnas.dev",
        "  🔗 linkedin.com/in/KarolKarnas",
        "  🐙 github.com/KarolKarnas",
      ].join("\n")
    }
    return `sudo: ${args[0] ?? ""}: command not found`
  },
}

const rm: Command = {
  name: "rm",
  description: "Remove files",
  usage: "rm [options] [file]",
  execute: (args) => {
    if (args.join(" ").includes("-rf /")) {
      return "Nice try! 😏 This portfolio is rm-proof."
    }
    return "rm: permission denied"
  },
}

const exit: Command = {
  name: "exit",
  description: "Exit the terminal",
  usage: "exit",
  execute: () => {
    return "You can check out any time you like, but you can never leave... 🎸"
  },
}

const vim: Command = {
  name: "vim",
  description: "Open vim editor",
  usage: "vim [file]",
  execute: () => {
    return "How do I exit this?! 😱 (Hint: try :q!)"
  },
}

export const funCommands: Command[] = [
  help,
  clear,
  history,
  joke,
  fortune,
  matrix,
  sudoHireMe,
  rm,
  exit,
  vim,
]
