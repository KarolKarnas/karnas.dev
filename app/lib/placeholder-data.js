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
        list: ["li 1", "li 2", "li 3"],
        second_content:
          "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code.",
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
        title: "TDD's Red-Green-Refactor and the Buddhist Path",
        content: `Both TDD and Figma prototyping share a fundamental principle – iteration. In TDD, developers iteratively write tests and refine code, while in Figma, designers iterate through prototypes to refine the user experience. This iterative nature aligns with Nietzsche's concept of eternal recurrence, where the cyclical nature of existence invites continual refinement and improvement. TDD's mantra of "Red-Green-Refactor" mirrors the Buddhist path of enlightenment. The "Red" phase represents identifying the problem, the "Green" phase symbolizes the solution, and the "Refactor" phase embodies continuous improvement. This cyclic process aligns with the Buddhist pursuit of self-discovery and refinement on the path to enlightenment.`,
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
        second_content:
          "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code.",
        list: [
          "Exploring Philosophical Analogies in Test-Driven Development 1",
          "li 2",
          "li Exploring Philosophical Analogies in Test 3",
        ],
      },
      {
        title: "Conclusion",
        content:
          "Figma's collaborative design environment fosters collective creativity, drawing parallels with social contract theory. Just as individuals in a society agree to abide by certain rules for mutual benefit, designers in Figma collaborate within a framework, adhering to a shared design system that ensures coherence and efficiency. In the marriage of Test-Driven Development and Figma prototyping, we discover a rich tapestry of philosophical analogies that underscore the interconnectedness of seemingly disparate practices. The Stoic craftsman, Platonic ideal forms, Nietzschean eternal recurrence, Buddhist enlightenment, and social contract theory all find expression in the realms of TDD and Figma, offering developers and designers alike a holistic perspective on their crafts. As we build bridges between philosophy and technology, we find that the pursuit of excellence and innovation transcends disciplinary boundaries.",
        second_content:
          "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code.",
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
        title: "TDD as the Stoic Craftsman",
        content:
          "Test-Driven Development, at its core, emphasizes the  pursuit of perfection in design.",
        image: "/tdd_16_9.jpg",
        list: ["li 1", "li 2", "li 3"],
        second_content:
          "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code.",
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
        title: "TDD's Red-Green-Refactor and the Buddhist Path",
        content: `Both TDD and Figma prototyping share a fundamental continuous improvement. This cyclic process aligns with the Buddhist pursuit of self-discovery and refinement on the path to enlightenment.`,
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
        second_content:
          "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code.",
        list: [
          "Exploring Philosophical Analogies in Test-Driven Development 1",
          "li 2",
          "li Exploring Philosophical Analogies in Test 3",
        ],
      },
      {
        title: "Conclusion",
        content:
          "Figma's collaborative design environment fosters collective creativity, drawing parallels with social contract",
        second_content:
          "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code.",
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
        title: "TDD as the Stoic Craftsman",
        content:
          "Test-Driven Development, at its core, emphasizes the  pursuit of perfection in design.",
        image: "/tdd_16_9.jpg",
        list: ["li 1", "li 2", "li 3"],
        second_content:
          "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code.",
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
        title: "TDD's Red-Green-Refactor and the Buddhist Path",
        content: `Both TDD and Figma prototyping share a fundamental continuous improvement. This cyclic process aligns with the Buddhist pursuit of self-discovery and refinement on the path to enlightenment.`,
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
        second_content:
          "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code.",
        list: [
          "Exploring Philosophical Analogies in Test-Driven Development 1",
          "li 2",
          "li Exploring Philosophical Analogies in Test 3",
        ],
      },
      {
        title: "Conclusion",
        content:
          "Figma's collaborative design environment fosters collective creativity, drawing parallels with social contract",
        second_content:
          "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code.",
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
        title: "TDD as the Stoic Craftsman",
        content:
          "Test-Driven Development, at its core, emphasizes the  pursuit of perfection in design.",
        image: "/tdd_16_9.jpg",
        list: ["li 1", "li 2", "li 3"],
        second_content:
          "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code.",
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
        title: "TDD's Red-Green-Refactor and the Buddhist Path",
        content: `Both TDD and Figma prototyping share a fundamental continuous improvement. This cyclic process aligns with the Buddhist pursuit of self-discovery and refinement on the path to enlightenment.`,
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
        second_content:
          "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code.",
        list: [
          "Exploring Philosophical Analogies in Test-Driven Development 1",
          "li 2",
          "li Exploring Philosophical Analogies in Test 3",
        ],
      },
      {
        title: "Conclusion",
        content:
          "Figma's collaborative design environment fosters collective creativity, drawing parallels with social contract",
        second_content:
          "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code.",
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
    sub_title:
      "Fullstack eCommerce platform built with the MERN stack & Redux & Typescript",
    slug: "ilustrografia",
    content_title: "What is it?",
    content:
      "This is a beautifully styled and responsive e-commerce platform designed for an artist who sells prints of her digital paintings. The website offers a variety of print sizes, materials, and prices.",
    main_image:
      "https://res.cloudinary.com/djadfridw/image/upload/v1706625285/u2yg75ygsansmfpl6nir.jpg",
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
    live_demo: "https://www.ilustrografia.com/",
    repo: "https://github.com/KarolKarnas/ilustrografia.com",
    fields: [
      {
        title: "About",
        content:
          "This project is the culmination of my several months of learning full stack development, it combines my passion for programming, modern technologies and good UX/UI. The platform key features:",
        list: [
          "Full-featured shopping cart",
          "Product reviews and ratings",
          "Product and illustration filtering",
          "User profiles with order history",
          "Admin panel for product and user management",
          "Admin Order details page",
          "Order tracking and status updates",
          "Checkout process with shipping and payment method selection",
          "PayPal and credit card integration",
          "Database seeding for products and users",
          "Fetching the latest YouTube animations using the YouTube API",
          "Dark/Light theme",
        ],
        second_content:
          "Clear and intuitive design. Ability to change quantity of the products. Fixed positioned cart summary, always visible for the user - desktop and mobile. To enhance sales opportunities, the addition of 'Clients also liked' section on the bottom",
      },
      {
        title: "Product Page",
        content:
          "Product page is a visual feast, thoughtfully designed to showcase each digital painting with the utmost elegance. Enjoy a clean and modern layout that highlights the beauty of MeggieM.Art's creations, allowing the art to speak for itself",
        image:
          "https://res.cloudinary.com/djadfridw/image/upload/v1706618785/qrctu4hyl91mcxq9b0sp.jpg",
        second_content:
          "product variants feature empowers you to customize your purchase effortlessly. Change the size or material of the artwork with a simple click, and watch as the product images and pricing dynamically adjust to reflect your choices. This interactive feature ensures a personalized and engaging shopping journey",
        links: [
          {
            link: "https://www.ilustrografia.com/shop/spring-nymph?material=art-print&size=s20x40",
            short_link: "https://www.ilustrografia.com/shop/spring-nymph",
          },
        ],
      },
      {
        title: "Full-featured shopping cart",
        content:
          "Discover a user-friendly shopping cart on ilustrografia.com designed for simplicity and efficiency. Easily adjust product quantities with an intuitive interface, and observe real-time price updates. The cart features a visually appealing layout, showcasing thumbnail images for easy identification. Explore related products under 'Clients Also Liked' for additional options. Seamlessly integrated into the platform, the cart ensures a consistent experience across devices. With secure checkout options and responsive design, ilustrografia.com prioritizes a straightforward shopping process.",
        image:
          "https://res.cloudinary.com/djadfridw/image/upload/v1706618784/uiqtc2luj8ckxjacuinm.jpg",
        links: [
          {
            link: "https://www.ilustrografia.com/cart",
            short_link: "ilustrografia.com/cart",
          },
        ],
      },
      {
        title: "Admin Panel Overview (write me an e-mail)",
        content:
          "The admin panel on ilustrografia.com offers a clear and intuitive interface for efficient management, please write me a e-mail to gain access to the admin panel!",
        list: [
          "Table Layout: 'Product List,' 'Users List,' and 'Order List' sections provide a quick overview.",
          "Product List: overview of all products, delete product, add new product, access to edit product page",
          "Product Update: Easily edit every aspect of a product, add/delete variations, change prices, and update images.",
          "User List: Delete users, assign admin privileges.",
          "Order List: Track payment status, and access comprehensive order details.",
          "Order Details: Mark orders as delivered",
        ],
        image:
          "https://res.cloudinary.com/djadfridw/image/upload/v1706618786/fc77iz2zqn0y0nxgvcmk.jpg",
        links: [
          {
            link: "https://www.ilustrografia.com/admin/product-list",
            short_link: "ilustrografia.com/admin/product-list",
          },
          {
            link: "https://www.ilustrografia.com/admin/user-list",
            short_link: "ilustrografia.com/admin/user-list",
          },
          {
            link: "https://www.ilustrografia.com/admin/order-list",
            short_link: "ilustrografia.com/admin/order-list",
          },
        ],
      },
      {
        title: "Dark/Light Theme",
        content: "Your eyes will never get used to the Light Theme. Experience ilustrografia.com with our dynamic Dark/Light theme feature. Accessible from the top menu on every page, users can effortlessly switch between themes. Crafted with Tailwind CSS, the implementation ensures a cohesive and visually pleasing design across product pages and the admin panel. The transition is seamless, offering enhanced user comfort and adaptability to various devices. Tailor your visual experience with ilustrografia.com's versatile Dark/Light theme.",
        image:
          "https://res.cloudinary.com/djadfridw/image/upload/v1706618784/nj3vnnzod6hjbc6asw6p.jpg",
          second_content:"I find the Dark Theme particularly appealing on Project Page, where an advanced visual design is implemented. The inclusion of moving lineart pictures on mouse movement adds an interesting dynamic to the composition. The overall look in the Dark Theme is especially pleasing on this page. However, I must note that both the Dark and Light themes contribute to an attractive appearance across the entire application.",
        links: [
          {
            link: "https://www.ilustrografia.com/projects/fantasy-illustrations",
            short_link: "ilustrografia.com/projects/fantasy-illustrations",
          },
        ],
      },

      {
        title: "Summary",
        image:
          "https://res.cloudinary.com/djadfridw/image/upload/v1706625286/yuopmrtlimeahqzxhcw3.jpg",
        content: "Summary",
        links: [
          {
            link: "https://www.ilustrografia.com/",
            short_link: "ilustrografia.com",
          },
        ],
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
    content: "Fullstack personal portfolio + blog. VSC design inspired",
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

// json_stack: [
//   {
//     title: "Stack",
//     value: [
//       {
//         title: "Frontend",
//         value: "React, Next.js, Typescript, JavaScript ES6+",
//       },
//       { title: "Backend", value: "Next.js, PostgreSQL, NextAuth.js, " },
//       { title: "CSS", value: "CSS3, SCSS, CSS Modules" },
//       {
//         title: "Testing",
//         value: "Playwright, React Testing Library",
//       },
//       {
//         title: "Environment",
//         value: "Linux, Git, Github, Jira, Confluence, Figma, Gimp",
//       },
//     ],
//   },
//   {
//     title: "About",
//     value: [
//       {
//         title: "Title",
//         value: "Karnas.dev",
//       },
//       { title: "Subtitle", value: "Fullstack Developer" },
//       { title: "Client", value: "Myself" },
//       { title: "Develop Time", value: "1 Month" },
//     ],
//   },
//   {
//     title: "Requirements",
//     value: [
//       {
//         title: "1",
//         value: "VSC inspired design",
//       },
//       { title: "2", value: "Well presents known technology stack" },
//       { title: "3", value: "Ability to write blog posts" },
//       { title: "4", value: "Best SEO practices" },
//       { title: "5", value: "Ability to add new projects" },
//     ],
//   },
// ],
