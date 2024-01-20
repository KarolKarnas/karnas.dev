const users = [
  {
    id: "422111b1-4001-4271-9855-fec4b6a6442a",
    name: "Karol Karnas",
    email: "admin@email.com",
    password: "123456",
  },
]

const posts = [
  {
    author_id: users[0].id,
    author_name: users[0].name,
    title: "Building Bridges",
    short_title: "FigmaAndTDD.ts", //truncate
    sub_title:
      "Exploring Philosophical Analogies in Test-Driven Development (TDD) and Figma Prototyping",
    slug: "tdd-and-figma",
    content_title: "In the ever-evolving landscape of software development",
    content:
      "Two methodologies stand out as pillars of efficiency and innovation: Test-Driven Development (TDD) and Figma prototyping. While on the surface, these two practices may seem worlds apart, a closer examination reveals profound philosophical analogies that bridge the gap between the meticulous coding process of TDD and the creative design realm of Figma.",
    main_image: "/tddFigma.jpg",
    fields: [
      {
        title: "TDD as the Stoic Craftsman",
        content:
          "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code. This approach echoes the Stoic philosophy, where practitioners focus on what they can control and accept what they cannot. The TDD practitioner, much like a Stoic craftsman, meticulously plans and tests every component of their code, anticipating challenges and embracing the iterative nature of development. In the world of design, Figma prototyping serves as a canvas where ideas take shape and evolve. This process finds resonance with Plato's theory of Forms, where he posited that abstract, ideal forms exist beyond the tangible world. In Figma, designers create prototypes that represent the idealized version of the final product before it materializes, emphasizing the pursuit of perfection in design.",
        image: "/tdd_16_9.jpg",
      },
      {
        title: "TDD's Red-Green-Refactor and the Buddhist Path",
        content: `Both TDD and Figma prototyping share a fundamental principle – iteration. In TDD, developers iteratively write tests and refine code, while in Figma, designers iterate through prototypes to refine the user experience. This iterative nature aligns with Nietzsche's concept of eternal recurrence, where the cyclical nature of existence invites continual refinement and improvement. TDD's mantra of "Red-Green-Refactor" mirrors the Buddhist path of enlightenment. The "Red" phase represents identifying the problem, the "Green" phase symbolizes the solution, and the "Refactor" phase embodies continuous improvement. This cyclic process aligns with the Buddhist pursuit of self-discovery and refinement on the path to enlightenment.`,
      },
      {
        title: "Conclusion",
        content:
          "Figma's collaborative design environment fosters collective creativity, drawing parallels with social contract theory. Just as individuals in a society agree to abide by certain rules for mutual benefit, designers in Figma collaborate within a framework, adhering to a shared design system that ensures coherence and efficiency. In the marriage of Test-Driven Development and Figma prototyping, we discover a rich tapestry of philosophical analogies that underscore the interconnectedness of seemingly disparate practices. The Stoic craftsman, Platonic ideal forms, Nietzschean eternal recurrence, Buddhist enlightenment, and social contract theory all find expression in the realms of TDD and Figma, offering developers and designers alike a holistic perspective on their crafts. As we build bridges between philosophy and technology, we find that the pursuit of excellence and innovation transcends disciplinary boundaries.",
        image: "/tdd_16_9.jpg",
      },
    ],
    category: "Technology",
    tags: ["JavaScript", "TypeScript", "Figma"],
    date: "2022-12-06",
  },
  {
    author_id: users[0].id,
    author_name: users[0].name,
    title: "Is Odin Project Good for a Beginner?",
    short_title: "OdinProjectFoundations.ts",
    sub_title: "Honest review of the Foundation Path from The Odin Project",
    slug: "the-odin-project-foundations",
    content_title: "The most important part of the house",
    content: "test content 0",
    main_image: "/odinProject.svg",
    fields: [
      {
        title: "field title 1",
        content: "field content 1",
        image: "/tdd_16_9.jpg",
      },
      {
        title: "field title 2",
        content: "field content 2",
        image: "/tdd_16_9.jpg",
      },
    ],
    category: "Philosophy",
    tags: ["JavaScript", "TypeScript", "Figma"],
    date: "2024-01-01",
  },
  {
    author_id: users[0].id,
    author_name: users[0].name,
    title: "My third article",
    short_title: "myThirdArticle.ts",
    sub_title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    slug: "my-third-article",
    content_title: "Development is the king",
    content: "test content 0",
    main_image: "/tddFigma.jpg",
    fields: [
      {
        title: "field title 1",
        content: "field content 1",
        image: "/tdd_16_9.jpg",
      },
      {
        title: "field title 2",
        content: "field content 2",
        image: "/tdd_16_9.jpg",
      },
    ],
    category: "Philosophy",
    tags: ["JavaScript", "TypeScript", "Figma"],
    date: "2024-01-01",
  },
  {
    author_id: users[0].id,
    author_name: users[0].name,
    title: "My fourth article lorem ipsum",
    short_title: "myFourthArticle.ts",
    sub_title: "Lorem ipsum dolor sit amet.",
    slug: "my-fourth-article",
    content_title: "Development is the king",
    content: "test content 0",
    main_image: "/tddFigma.jpg",
    fields: [
      {
        title: "field title 1",
        content: "field content 1",
        image: "/tdd_16_9.jpg",
      },
      {
        title: "field title 2",
        content: "field content 2",
        image: "/tdd_16_9.jpg",
      },
    ],
    category: "Philosophy",
    tags: ["JavaScript", "TypeScript", "Figma"],
    date: "2024-01-01",
  },
  {
    author_id: users[0].id,
    author_name: users[0].name,
    title: "Lorem ipsum dolor same My fifth article",
    short_title: "myFifthArticle.ts",
    sub_title: "Subtitle",
    slug: "my-fifth-article",
    content_title: "Development is the king",
    content: "test content 0",
    main_image: "/tddFigma.jpg",
    fields: [
      {
        title: "field title 1",
        content: "field content 1",
        image: "/tdd_16_9.jpg",
      },
      {
        title: "field title 2",
        content: "field content 2",
        image: "/tdd_16_9.jpg",
      },
    ],
    category: "Philosophy",
    tags: ["JavaScript", "Confluence", "Jira"],
    date: "2024-01-01",
  },
]

const projects = [
  {
    author_id: users[0].id,
    author_name: users[0].name,
    title: "ilustrografia.com",
    short_title: "ilustrografia.com",
    sub_title: "React fullstack eCommerce platform",
    slug: "ilustrografia",
    content_title: "In the ever-evolving landscape of software development",
    content:
      "Beautifully styled and responsive e-commerce platform designed for an artist, for selling prints purpose, promote art and more.",
    main_image:
      "https://raw.githubusercontent.com/KarolKarnas/ilustrografia.com/main/frontend/public/images/github-screens/ilustrografia-fullstack-app-1.jpg",
    main_icon: "react",
    stack: ["React", "TypeScript"],
    icons_stack: [
      "react",
      "redux",
      "typeScript",
      "nodeJs",
      "express",
      "mongo",
      "postman",
      "cypress",
      "jest",
      "rtl",
      "tailwind",
    ],
    json_stack: [
      {
        title: "Stack",
        value: [
          {
            title: "Frontend",
            value: "React, Typescript, JavaScript ES6+, Redux",
          },
          { title: "Backend", value: "Node.js, Express, MongoDB, Mongoose" },
          { title: "CSS", value: "CSS3, TailwindCSS" },
          {
            title: "Testing",
            value: "JEST, React Testing Library, Cypress",
          },
          {
            title: "Environment",
            value: "Linux, Git, Github, Photoshop",
          },
        ],
      },
      {
        title: "About",
        value: [
          {
            title: "Title",
            value: "Ilustrografia",
          },
          { title: "Subtitle", value: "Reality Full of Magic" },
          { title: "Client", value: "Meggie.M Art" },
          { title: "Develop Time", value: "3 Months" },
        ],
      },
      {
        title: "Requirements",
        value: [
          {
            title: "1",
            value: "Fully functional eCommerce platform",
          },
          { title: "2", value: "Products with variations" },
          { title: "3", value: "Real time update of price when changing variants (print size, print material)" },
          { title: "4", value: "Well presents artwork" },
          { title: "5", value: "Ability to add new products" },
          { title: "5", value: "Full user journey" },
        ],
      },
    ],
    live_demo: "https://www.ilustrografia.com/",
    repo: "https://github.com/KarolKarnas/ilustrografia.com",
    fields: [
      {
        title: "Selling prints",
        content:
          "This is a beautifully styled and responsive e-commerce platform designed for an artist who sells prints of her digital paintings. The website offers a variety of print sizes, materials, and prices. To manage this diversity, the database was carefully structured to accommodate different product variants, including size, material, stock count, prices, names, descriptions, images of the digital paintings, and visualization images for each material.",
        image:
          "https://raw.githubusercontent.com/KarolKarnas/ilustrografia.com/main/frontend/public/images/github-screens/ilustrografia-fullstack-app-2.jpg",
        links: [
          {
            link: "https://www.ilustrografia.com/shop",
            short_link: "ilustrografia.com/shop",
          },
          {
            link: "https://www.ilustrografia.com/about",
            short_link: "ilustrografia.com/about",
          },
        ],
      },
      {
        title: "Hardest code part",
        content: `To ensure a clean and user-friendly interface, Product Variants were created, allowing users to easily select the size or material they prefer while dynamically updating the price and images.`,
      },
      {
        title: "Greatest feature",
        content:
          "For each product, there is an illustration page featuring the main image, various product variants, and a description of the illustrated creature. The shop page enables users to filter products by category, while the illustrations page provides filtering options for illustrations by category.",
        image:
          "https://raw.githubusercontent.com/KarolKarnas/ilustrografia.com/main/frontend/public/images/github-screens/ilustrografia-fullstack-app-2.jpg",
      },
    ],
    category: "Technology",
    tags: ["JavaScript", "TypeScript", "Figma"],
    date: "2023-11-11",
  },
  {
    author_id: users[0].id,
    author_name: users[0].name,
    title: "karnas.dev",
    short_title: "karnas.dev",
    sub_title: "VSC design inspired, Next.js Fullstack portfolio with blog",
    slug: "karnas",
    content_title: "Karnas dev is very well designed portfolio blog",
    content:
      "Fullstack personal portfolio + blog. VSC design inspired",
    main_image: "/karnas.jpg",
    main_icon: "nextjs",
    stack: ["React", "TypeScript, Next.js, PostgreSQL, SQL"],
    icons_stack: [
      "react",
      "typeScript",
      "nextJs",
      "postgres",
      "sql",
      "sass",
      "cssModules",
      // "playWright",
      "jira",
      "confluence",
      "figma",
    ],
    json_stack: [
      {
        title: "Stack",
        value: [
          {
            title: "Frontend",
            value: "React, Next.js, Typescript, JavaScript ES6+",
          },
          { title: "Backend", value: "Next.js, PostgreSQL, NextAuth.js, " },
          { title: "CSS", value: "CSS3, SCSS, CSS Modules" },
          {
            title: "Testing",
            value: "Playwright, React Testing Library",
          },
          {
            title: "Environment",
            value: "Linux, Git, Github, Jira, Confluence, Figma, Gimp",
          },
        ],
      },
      {
        title: "About",
        value: [
          {
            title: "Title",
            value: "Karnas.dev",
          },
          { title: "Subtitle", value: "Fullstack Developer" },
          { title: "Client", value: "Myself" },
          { title: "Develop Time", value: "1 Month" },
        ],
      },
      {
        title: "Requirements",
        value: [
          {
            title: "1",
            value: "VSC inspired design",
          },
          { title: "2", value: "Well presents known technology stack" },
          { title: "3", value: "Ability to write blog posts" },
          { title: "4", value: "Best SEO practices" },
          { title: "5", value: "Ability to add new projects" },
        ],
      },
    ],
    live_demo: "https://www.karnas.dev/",
    repo: "https://github.com/KarolKarnas/karnas.dev",
    fields: [
      {
        title: "introduction",
        content:
          "Introducing karnas.dev – a cutting-edge, full-stack portfolio application that showcases the pinnacle of modern web development. Crafted with precision and innovation, this dynamic platform is built on a robust tech stack comprising Next.js, PostgreSQL, React, TypeScript, Sass, CSS modules, and more.",
        image: "/tdd_16_9.jpg",
        link: "https://www.karnas.dev/",
      },
      {
        title: "The foundation",
        content: `The foundation of karnas.dev lies in Next.js, offering unparalleled performance and seamless navigation. Leveraging the power of React, the application boasts a responsive and user-friendly interface, ensuring a smooth and engaging experience for visitors. The integration of TypeScript enhances code quality, providing a strongly-typed and maintainable codebase.`,
      },
      {
        title: "Few words about styling",
        content:
          "The styling of karnas.dev is a testament to meticulous design, employing Sass and CSS modules to create visually stunning and consistent layouts. The combination of these technologies allows for modular and maintainable styles, ensuring a polished aesthetic across the entire application",
        image: "/tdd_16_9.jpg",
      },
    ],
    category: "Fullstack",
    tags: ["NextJs", "TypeScript", "Figma"],
    date: "2024-01-06",
  },
]

module.exports = {
  users,
  posts,
  projects,
}
