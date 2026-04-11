import { Command } from "./index"

const whoami: Command = {
  name: "whoami",
  description: "Display developer info",
  usage: "whoami",
  execute: () => {
    return [
      "Karol Karnas",
      "Full Stack Developer",
      "",
      "GitHub:   github.com/KarolKarnas",
      "LinkedIn: linkedin.com/in/KarolKarnas",
      "Twitter:  twitter.com/Karol_Karnas",
      "Web:      karnas.dev",
    ].join("\n")
  },
}

const skills: Command = {
  name: "skills",
  description: "Display skills as a formatted list",
  usage: "skills",
  execute: () => {
    return [
      "Programming:  Python, TypeScript, JavaScript",
      "Frontend:     React, Redux, Next.js, SASS, Tailwind",
      "Backend:      Django, Node.js, Express, NestJS, Prisma, PostgreSQL",
      "Testing:      Pytest, Jest, Cypress, RTL, Postman",
      "Tools:        Linux, VS Code, Git, GitHub, Jira, Confluence",
    ].join("\n")
  },
}

const stack: Command = {
  name: "stack",
  description: "Show the tech stack of this site",
  usage: "stack",
  execute: () => {
    return [
      "karnas.dev tech stack:",
      "",
      "  Framework:   Next.js 15 (App Router)",
      "  Language:    TypeScript",
      "  React:       React 19",
      "  Styling:     SASS + CSS Modules",
      "  Content:     Markdown + gray-matter + remark",
      "  Font:        Roboto Mono",
      "  Images:      Cloudinary CDN",
      "  Deployment:  Vercel",
      "  Theme:       Monokai",
    ].join("\n")
  },
}

const neofetch: Command = {
  name: "neofetch",
  description: "System-info style display for the portfolio",
  usage: "neofetch",
  execute: () => {
    return [
      "        ██╗  ██╗██╗  ██╗       visitor@karnas.dev",
      "        ██║ ██╔╝██║ ██╔╝       ──────────────────",
      "        █████╔╝ █████╔╝        Site: karnas.dev",
      "        ██╔═██╗ ██╔═██╗        Framework: Next.js 15",
      "        ██║  ██║██║  ██║       Language: TypeScript",
      "        ╚═╝  ╚═╝╚═╝  ╚═╝       Styling: SASS + CSS Modules",
      "                                Font: Roboto Mono",
      "                                Theme: Monokai",
      "                                Deployment: Vercel",
      "                                Uptime: since 2024",
    ].join("\n")
  },
}

export const infoCommands: Command[] = [whoami, skills, stack, neofetch]
