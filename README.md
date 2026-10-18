# karnas.dev

[**Live Demo - karnas.dev**](https://www.karnas.dev/) 👈

#### Karol Karnas — Full-stack Engineer. From client requirements to production.

<img src="https://res.cloudinary.com/djadfridw/image/upload/v1706878975/spp0rjysnfk30vb3rpqc.jpg" alt="screens of the karnas.dev portfolio with blog platform">

## Description

My personal portfolio and journal, inspired by Visual Studio Code. It presents work across user interfaces, backend systems, AI integrations, testing, and deployment.

The site uses Next.js, React, TypeScript, and Sass modules, with local content files and validated frontmatter. The workspace includes an explorer, file tabs, split panes, theme settings, and an interactive browser terminal.

## Key Features

- Utilize Next.js server-side components for enhanced SEO, performance,
- Organize content with distinct grids for projects and blog posts, providing visual clarity,
- Craft a tab menu and sidebar that closely mimic Visual Studio Code (VSC) behavior, enhancing user navigation,
- Dynamically generate VSC-style menus with text and icons representing file extensions for an intuitive interface,
- Personalize the workspace with Monokai, Dark Modern, and Light themes, adjustable text size, and reduced motion. Appearance preferences are saved locally and synchronized with split-view panes,
- Browse redesigned project case studies, a grouped skills toolbox, and a reading-focused journal,
- Explore the same content from the terminal: working directories, clickable file listings, file previews, and Tab completion,
- Utilize Cloudinary for secure and scalable object storage, optimizing media file handling,
- Dynamically create representations of the technology stack using icons or icons with titles, providing insights into the project's architecture,
- Utilize Sass in conjunction with CSS Modules, to create a design system and modular styled components. This combination allows for a structured and scalable approach to styling, ensuring consistency and reusability across the application

<img src="https://res.cloudinary.com/djadfridw/image/upload/v1707131042/pm7f1szandr9c661l3pf.jpg" alt="desktop and mobile screen of the karnas.dev portfolio with blog platform">

## Technologies Used

- Next.js
- Markdown
- React
- TypeScript
- SASS + CSS Modules
- Postman for API testing
- Continuously deployed on Vercel.com

[**Live Demo - karnas.dev**](https://www.karnas.dev/) 👈

<img src="https://res.cloudinary.com/djadfridw/image/upload/v1707116567/anvrceff2msqke1oanep.jpg" alt="mobile screens of the karnas.dev portfolio with blog platform">

The application is designed to be fully responsive, aiming to maintain a consistent user experience across different screen sizes. The goal is to provide a practical and user-friendly interface on par with Visual Studio Code (VSC) across all devices.

### Install Dependencies

Use Node.js 22 or newer. Node.js type definitions follow the Node.js 22 runtime.

```
npm install

```

TypeScript stays on 6.x while `typescript-eslint` requires TypeScript below 6.1.
ESLint stays on 9.x while the React, import, and accessibility plugins used by
`eslint-config-next` do not declare support for ESLint 10. Recheck these peer
dependencies before upgrading either tool to its next major version.

### Run

```

# start the development server
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Verify

```bash
node --test tests/*.test.mjs
npx tsc --noEmit
NEXT_PUBLIC_BASE_URL=https://www.karnas.dev npm run build
```

The base URL is required for correct sitemap and robots URLs. Appearance settings
are available from the gear button at the bottom of the explorer.

### Explore from the terminal

Open the terminal with `Ctrl` + backtick or the explorer's Terminal button.

```text
cd blog
ls
cat fluent_python.epub
open fluent_python.epub
cd ../professional-projects
ls -l
tree ~
cd -
theme dark-modern
matrix
```

Filenames match the explorer. Click a listing to open a file, use Tab to complete
commands and paths, and run `help <command>` for usage. `open` shows a page while
keeping the terminal's working directory; `cd` changes both. `exit` closes the
terminal. The terminal session stays in memory; only its height is saved locally.
`tree` shows the directory structure, `cd -` returns to the previous directory,
and `theme` changes the same persisted appearance setting as the gear menu.
`matrix` runs digital rain for up to 18 seconds; stop it with Escape, Ctrl+C, or
the Back to terminal button. Reduced-motion settings show a still frame.

See [the visual audit and implementation notes](docs/visual-audit.md) for the
redesign decisions and browser verification.

Shared profile copy lives in `src/utils/profile.ts`. See the
[content review](docs/content-review.md) for the full-stack positioning and the
scope of the review across all posts and project descriptions.

---
