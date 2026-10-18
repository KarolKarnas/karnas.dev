import { FakeJson } from "./types"
import { PROFILE } from "./profile"

export const ABOUT: FakeJson[] = [
  {
    title: "Role",
    value: `${PROFILE.role}. I work with clients to turn requirements into working software, across the interface, backend, integrations, testing, and deployment.`,
  },
  {
    title: "Stack",
    value: [
      {
        title: "Frontend",
        value: "TypeScript, React, Next.js, Redux, HTMX, Tailwind, Sass",
      },
      {
        title: "Backend",
        value:
          "Python, Django (incl. multi-tenant), FastAPI, Celery, Pandas, pytest",
      },
      {
        title: "Data & Infrastructure",
        value: "PostgreSQL, pgvector, Redis, Docker, AWS, Azure, Linux",
      },
      {
        title: "AI / LLM",
        value:
          "sentence-transformers, RAG, LLM API Integration, Agentic Pipelines, Vision-Language Models",
      },
      {
        title: "Observability",
        value: "Sentry, Datadog, Grafana, Langfuse, Flower",
      },
      {
        title: "Testing",
        value: "pytest, Playwright, Jest, React Testing Library",
      },
    ],
  },
  {
    title: "Approach",
    value:
      "I stay involved from the client conversation through implementation and release. I clarify how a feature should work, connect the interface to the data and business rules, and check the result through tests and real user flows. I bring a strong backend foundation and stay accountable for how the finished feature works.",
  },
  {
    title: "AI-assisted development",
    value:
      "I use coding assistants for implementation, exploration, and review. I define the scope, make the technical decisions, review changes, and verify behavior. Responsibility for the delivered software stays with me.",
  },
  {
    title: "Background",
    value:
      "I enjoy the practical and visual sides of building software. Experience with photography, composition, 2D animation, and UI/UX shapes how I approach interfaces. System design and data analysis help me connect those interfaces to the workflows behind them.",
  },
]

export const CONTACT: FakeJson[] = [
  {
    title: "Contact Info",
    value: [
      {
        title: "E-mail",
        value: "karol.karnas@gmail.com",
      },
      {
        title: "Phone",
        value: "+48 784 034 778",
      },
    ],
  },
]
