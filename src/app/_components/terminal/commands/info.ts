import { Command } from "./index"

const whoami: Command = {
  name: "whoami",
  description: "Display developer info",
  usage: "whoami",
  execute: () => {
    return [
      "Karol Karnas",
      "Backend Engineer · Data Analysis · Agentic AI",
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
      "Backend:        Python, Django, FastAPI, Celery, Pandas, pytest, Jupyter",
      "Cloud & Infra:  AWS, Azure, Docker, PostgreSQL, pgvector, Redis, Linux",
      "AI / LLM:       sentence-transformers, RAG, LLM API Integration,",
      "                Agentic Pipelines, Vision-Language Models",
      "Observability:  Sentry, Datadog, Grafana, Langfuse, Flower",
      "Frontend:       TypeScript, React, Next.js, Redux",
      "Tools:          Git, GitHub, VS Code, Jira, Confluence",
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
      "  Framework:   Next.js 16 (App Router)",
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
      "        ██╔═██╗ ██╔═██╗        Framework: Next.js 16",
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
