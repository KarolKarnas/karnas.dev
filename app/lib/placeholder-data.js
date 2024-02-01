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
    title: "From Zero to Pentester Course",
    short_title: "PentesterCourse.ts", //truncate
    sub_title: "10 hours of exercises",
    slug: "pentester-course",
    content_title: "Not only for aspiring pentesters",
    content:
      "Cybersecurity is one of the most critical aspects of modern web development. Often, aspiring developers don't receive enough educational emphasis on this subject. As an aspiring developer, it was fascinating to explore 'the other side'.",
    // Bridging this gap is essential to constructing a safe online world and empowering new developers.
    main_image:
      "https://res.cloudinary.com/djadfridw/image/upload/v1706706030/hdkryzyzvhdv867niz04.png",
    fields: [
      {
        title: "The overview",
        content:
          "It was a very valuable experience for me and undoubtedly for each of the participants as well. The lecturer is a great enthusiast and practitioner of cybersecurity, additionally possessing educational talents. During the training, we learned about numerous potential vulnerabilities of web applications, as well as methods of conducting attacks and the tools used for that purpose.",
        image:
          "https://res.cloudinary.com/djadfridw/image/upload/v1706706030/hdkryzyzvhdv867niz04.png",
        links: [
          {
            link: "https://blog.szurek.tv/",
            short_link: "blog.szurek.tv",
          },
        ],
      },
      {
        title: "The exercises",
        content:
          "The course lasted for 10 days, with nearly 3 hours each day and included 10 exercises daily. All of these exercises were from the PortSwigger page, the creators of Burp. While solving the exercises, Kacper translated all the concepts and discussed the nuances associated with them, for example what is URL encoding, basic syntax of: SQL, JavaScript, Linux commands",
        list: [
          "Access control vulnerabilities",
          "Cross-site scripting (XSS)",
          "SQL injection",
          "Server-side request forgery (SSRF)",
          "OS command injection",
          "Path traversal",
          "Information disclosure",
          "Web LLM attacks",
        ],
        links: [
          {
            link: "https://portswigger.net/web-security/all-labs",
            short_link: "portswigger.net/web-security/all-labs",
          },
        ],
      },
      {
        title: "The sources",
        content:
          "During the course, Kacper generously shared an extensive list of reliable cybersecurity knowledge sources. These resources cover a wide range of topics to enhance our understanding and skills in the field. Here are some of the recommended sources",
        links: [
          {
            link: "https://otwartezrodla.pl/",
            short_link: "otwartezrodla.pl",
          },
          {
            link: "https://highon.coffee/blog/ssrf-cheat-sheet/",
            short_link: "highon.coffee/blog/ssrf-cheat-sheet/",
          },
          {
            link: "https://owasp.org/www-project-juice-shop/",
            short_link: "owasp.org/www-project-juice-shop",
          },
          {
            link: "https://www.vulnhub.com/",
            short_link: "vulnhub.com",
          },
          {
            link: "https://portswigger.net/web-security/sql-injection/cheat-sheet",
            short_link:
              "portswigger.net/web-security/sql-injection/cheat-sheet",
          },
          {
            link: "https://docs.projectdiscovery.io/tools/nuclei/overview",
            short_link: "docs.projectdiscovery.io/tools/nuclei/overview",
          },
        ],
      },
      {
        title: "The developers packages",
        content:
          "Particularly valuable for me was the package for DOM sanitization - Dompurify - recommended by Kacper. Additionally, the emphasis on avoiding the use of innerHTML and the method name that should serve as a warning for any developer considering its use in React: 'dangerouslySetInnerHTML.'",
        links: [
          {
            link: "https://www.npmjs.com/package/dompurify?activeTab=readme",
            short_link: "npmjs.com/package/dompurify?activeTab=readme",
          },
          {
            link: "https://blog.logrocket.com/using-dangerouslysetinnerhtml-react-application/",
            short_link:
              "blog.logrocket.com/using-dangerouslysetinnerhtml-react-application/",
          },
        ],
      },
      {
        title: "Summary",
        content:
          "This is just a brief overview of the course. It's difficult to convey the extent of knowledge Kacper shared with the group. After the course, participants who completed the necessary exercises and confirmed their completion received certificates acknowledging their participation in the course. Once again, thank you! Hopefully I'll be a better developer thanks to this course. I highly recommend such a course to developers, pentesters, cybersecurity specialists, or anyone else. Given the inherent dangers of the web, understanding the threats is crucial for everyone's online safety.",
        // I would definitely recommend such a course to every aspiring developer, pentester, or cybersecurity specialist.
        image:
          "https://res.cloudinary.com/djadfridw/image/upload/v1706712819/wvnl4zouggh6z2jhbc9a.png",
        links: [
          {
            link: "https://blog.szurek.tv/",
            short_link: "blog.szurek.tv",
          },
        ],
      },
    ],
    category: "CyberSecurity",
    tags: ["Burp", "PortSwigger"],
    date: "2024-01-30",
  },
  {
    author_id: users[0].id,
    author_name: users[0].name,
    title: "Odin Project Foundation Course",
    short_title: "OdinProjectFoundation.ts", //truncate
    sub_title:
      "A hands-on introduction to all of the essential tools you'll need to build real, working websites",
    slug: "odin-foundation-course",
    content_title: "A great place to start learning web development",
    content:
      "The Odin Project Foundation Course provides an excellent jumpstart into the world of web development, immersing you in hands-on experience right from the beginning. ",
    main_image:
      "https://res.cloudinary.com/djadfridw/image/upload/v1706779139/hlgvdwlnsipqtv7t0sco.svg",
    fields: [
      {
        title: "Tutorial hell medicine",
        content:
          "The Odin Project is effective medicine for the tutorial hell problem. I have been there many times, watching another YT video, thinking that I can replicate the process easily. The Odin Project is not about procrastinating by watching videos or reading extensively about web development; it's about actively engaging in the process. The course encourages practical learning using essential tools like IDE (Visual Studio Code), Linux, Terminal, Git, and Github. Throughout the program, you'll delve into extensive documentation, draw your own conclusions, and apply your knowledge by building simple projects.",
        links: [
          {
            link: "https://www.theodinproject.com/paths/foundations/courses/foundations",
            short_link:
              "theodinproject.com/paths/foundations/courses/foundations",
          },
        ],
      },
      {
        title: "The internal system",
        content:
          "The entire process is documented in the internal system of the Odin Project. It gives you sense of progress and motivate to progress. The scope of the course is divided in chapters. After some of them you have to make real projects in pure HTML, CSS, JavaScript. For me was very important to learn about the basics before jump start into React, Next.js or Object Oriented Programming",
        list: [
          "Introduction (How This Course Will Work,Introduction to Web Development, Motivation and Mindset, Asking For Help, Join the Odin Community)",
          "Prerequisites(Computer Basics, How Does the Web Work?, Installation Overview, Installations, Text Editors, Command Line Basics, Setting up Git)",
          "Git Basics (Introduction to Git, Git Basics)",
          "HTML Foundations (Introduction to HTML and CSS, Elements and Tags, HTML Boilerplate, Working with Text, Lists, Links and Images, Commit Messages, Project: Recipes)",
          "CSS Foundations (Intro to CSS, The Cascade, Inspecting HTML and CSS, The Box Model, Block and Inline)",
          "Flexbox (Introduction to Flexbox, Growing and Shrinking, Axes, Alignment, Project: Landing Page)",
          "JavaScript Basics (Fundamentals Part 1, Fundamentals Part 2, JavaScript Developer Tools, Fundamentals Part 3, Problem Solving, Understanding Errors, Project: Rock Paper Scissors, Clean Code, Installing Node.js, Fundamentals Part 4, DOM Manipulation and Events, Revisiting Rock Paper Scissors, Project: Etch-a-Sketch, Fundamentals Part 5, Project: Calculator)",
          "Conclusion (Choose Your Path Forward)",
        ],
      },
      {
        title: "The sources",
        content:
          "In almost every lesson, we are provided with knowledge and instructions from the course authors. Additionally, we are introduced to valuable knowledge sources. These sources often lead us to places where the concepts were born and developed. Following these sources gives us an idea of the complex and lengthy journey that has led to the way web apps are written today. This is not just a simple concept; it is a long story of constant improvement of imperfect languages, tools, and methods.",
        second_content:
          "Someone who believes that this is a fully organized world with a strict way of doing things should quickly reassess their position. This is a very complex world where one idea gives rise to another, and this cycle continues. It is not inherently negative, it is an evolutionary process. However, gaining a holistic understanding of this complexity is very challenging",
      },
      {
        title: "The environment",
        content:
          "I highly value knowledge on how to learn. The Odin Project emphasizes avoiding distractions, such as social media. The Linux environment can help mitigate this issue if we treat it as a dedicated space for learning, without logging into our social media accounts here. Noise distractions can be minimized by using headphones with ANC - an excellent solution. Pomodoro technique is also recommended – learning in sequences of 25 minutes of study followed by 5 minutes of break – significantly enhances efficiency. The Linux Ubuntu has a good Pomodoro app",
        links: [
          {
            link: "https://gnomepomodoro.org/",
            short_link: "gnomepomodoro.org",
          },
        ],
      },
      {
        title: "Summary",
        content:
          "After completing all 8 chapters of The Odin Project Foundation, equipped with the right tools, we are poised to embark on a deep dive into the vast world of web development. Thankfully you are now prepared to avoid beginner's mistakes and navigate the tutorial hell confidently. Our journey continues within The Odin Project, where we can choose one of the remaining paths:",
        list: ["Full Stack Ruby on Rails", "Full Stack JavaScript"],
        second_content: "I have chosen the Full Stack JavaScript...",
        image:
          "https://res.cloudinary.com/djadfridw/image/upload/v1706787624/sqn863dldracoznxnpgj.jpg",
        links: [
          {
            link: "https://www.theodinproject.com/",
            short_link: "theodinproject.com/",
          },
        ],
      },
    ],
    category: "WebDevelopment",
    tags: ["HTML", "CSS", "JavaScript"],
    date: "2023-07-20",
  },
  {
    author_id: users[0].id,
    author_name: users[0].name,
    title: "Full Stack Open Core Course",
    short_title: "FSO_PARTS_0_7.ts", //truncate
    sub_title: "Parts 0-7 Full Stack Web Development",
    slug: "full-stack-open-parts-0-7",
    content_title: "Deep Dive Into Modern Web Development",
    content:
      "Creating comprehensive applications, complete with features such as an administration panel, users and products, requires us to operate as full-stack developers. I had always wanted to create such an application myself, and actively participating in this course allowed me to do just that. It wasn't easy, and it wasn't enough to build my first eCommerce platform, but it was a significant milestone in achieving that goal.",
    main_image:
      "https://res.cloudinary.com/djadfridw/image/upload/v1706793659/viaex6ouox8wy6lr3tlp.png",
    fields: [
      {
        title: "The Prerequisites",
        content:
          "The Full Stack Open requires us to have good programming skills, a basic knowledge of web programming and databases, and familiarity with the basics of the Git version control system. Additionally, perseverance and the ability to solve problems and seek information independently are expected. That's why I highly recommend completing The Odin Project course before starting FSO, unless you already possess such skills, in which case you can begin with FSO directly.",
        links: [
          {
            link: "https://fullstackopen.com/en/part0/general_info",
          },
        ],
      },
      {
        title: "The course content",
        content:
          "The course content is exceptionally comprehensive and well-structured. It provides a robust foundation for web development. Though the journey is not a walk in the woods, the knowledge gained is undoubtedly worth the effort.",
        list: [
          "PART 0 - Fundamentals of Web apps (a. General Info, b. Fundamentals of Web apps)",
          "PART 1 - Introduction to React (a. Introduction to React, b. JavaScript, c. Component state, event handlers, d. A more complex state, debugging React apps)",
          "PART 2 - Communicating with server (a. Rendering a collection, modules, b. Forms, c. Getting data from server, d. Altering data in server, e. Adding styles to React app)",
          "PART 3 - Programming a server with NodeJS and Express (a. Node.js and Express, b. Deploying app to the internet, c. Saving data to MongoDB, d. Validation and ESLint)",
          "PART 4 - Testing Express servers, user administration (a. Structure of backend application, introduction to testing, b. Testing the backend, c. User administration, d. Token authentication)",
          "PART 5 - Testing React apps (a. Login in frontend, b. props.children and PropTypes, c. Testing React apps, d. End-to-end testing)",
          "PART 6 - Advanced state management (a. Flux architecture and Redux, b. Many reducers, c. Communicating with the server in a Redux application, d. React Query, useReducer, and the context)",
          "PART 7 - React router, custom hooks, styling app with CSS and webpack (a. React Router, b. Custom hooks, c. More about styles, d. Webpack, e. Class components, Miscellaneous, f. Exercises: extending the bloglist)",
        ],
      },
      {
        title: "The exercises",
        content:
          "Each part of the course includes approximately 20 exercises (except for Part 0, which has only 6), which we solve in real-time. It's not a scenario where we read the theory and do exercises only at the end. Here, we solve exercises literally every few paragraphs. This approach allows us to reinforce the knowledge we acquire while reading by immediately applying it through exercises. The difficulty of the exercises is remarkably well-balanced; they are neither too easy nor too challenging. This balance is beneficial as it keeps us motivated without causing discouragement. The exercises differ sufficiently from the examples provided in the source material, requiring effort and allowing for better retention of knowledge. Some exercises are marked with an asterisk, indicating that they are optional. However, I recommend completing all available exercises.",
        // links: [
        //   {
        //     link: "https://studies.cs.helsinki.fi/stats/courses/fullstackopen",
        //   },
        // ],
      },
      {
        title: "The submission system",
        content:
          "To submit exercise solutions, follow the specified process and submit them to a GitHub repository. After completing a specific number of exercises, mark your progress in the submission system, and remember, you can do this only once for each part. Be sure to use an appropriate naming system for directories when submitting exercises from different parts to the same repository. Plagiarism is monitored, and the University of Helsinki's policy on plagiarism is enforced if violations are detected",
          image: "https://res.cloudinary.com/djadfridw/image/upload/v1706800611/drrpqlkra1dltkanizc5.jpg",
          links: [
            {
              link: "https://fullstackopen.com/en/part0/general_info#submitting-exercises",
            },
            {
              link: "https://studies.cs.helsinki.fi/stats/courses/fullstackopen",
            },
          ],
      },
      {
        title: "Summary",
        content:
          "The course doesn't particularly emphasize styling applications. The majority of time is dedicated to programming both the frontend and backend, as well as testing our code. This is not a criticism but rather a strength. Contemporary CSS frameworks are introduced in a sufficient manner. However, if someone masters the main programming aspects of the course, they can refine styling on their own. It's not a drawback but an advantage.",
          image:
            "https://res.cloudinary.com/djadfridw/image/upload/v1706801466/t0i49afg2uk0ztoe7tly.jpg",
        second_content: "Upon completion of each exercise, you will receive an accessible online certificate!",
        links: [
          {
            link: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/26a9bc441296f05e655e5526eac6494c",
          },
        ],
      },
    ],
    category: "WebDevelopment",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Testing"],
    date: "2023-10-27",
  },
  // {
  //   author_id: users[0].id,
  //   author_name: users[0].name,
  //   title: "Building Bridges",
  //   short_title: "FigmaAndTDD.ts", //truncate
  //   sub_title:
  //     "Exploring Philosophical Analogies in Test-Driven Development (TDD) and Figma Prototyping",
  //   slug: "tdd-and-figma",
  //   content_title: "In the ever-evolving landscape of software development",
  //   content:
  //     "Two methodologies stand out as pillars of efficiency and innovation: Test-Driven Development (TDD) and Figma prototyping. While on the surface, these two practices may seem worlds apart, a closer examination reveals profound philosophical analogies that bridge the gap between the meticulous coding process of TDD and the creative design realm of Figma.",
  //   main_image: "/tddFigma.jpg",
  //   fields: [
  //     {
  //       title: "TDD as the Stoic Craftsman",
  //       content:
  //         "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code. This approach echoes the Stoic philosophy, where practitioners focus on what they can control and accept what they cannot. The TDD practitioner, much like a Stoic craftsman, meticulously plans and tests every component of their code, anticipating challenges and embracing the iterative nature of development. In the world of design, Figma prototyping serves as a canvas where ideas take shape and evolve. This process finds resonance with Plato's theory of Forms, where he posited that abstract, ideal forms exist beyond the tangible world. In Figma, designers create prototypes that represent the idealized version of the final product before it materializes, emphasizing the pursuit of perfection in design.",
  //       image: "/tdd_16_9.jpg",
  //       list: ["li 1", "li 2", "li 3"],
  //       second_content:
  //         "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code.",
  //       links: [
  //         {
  //           link: "https://www.ilustrografia.com/shop",
  //           short_link: "ilustrografia.com/shop",
  //         },
  //         {
  //           link: "https://www.ilustrografia.com/about",
  //           short_link: "ilustrografia.com/about",
  //         },
  //       ],
  //     },
  //     {
  //       title: "TDD's Red-Green-Refactor and the Buddhist Path",
  //       content: `Both TDD and Figma prototyping share a fundamental principle – iteration. In TDD, developers iteratively write tests and refine code, while in Figma, designers iterate through prototypes to refine the user experience. This iterative nature aligns with Nietzsche's concept of eternal recurrence, where the cyclical nature of existence invites continual refinement and improvement. TDD's mantra of "Red-Green-Refactor" mirrors the Buddhist path of enlightenment. The "Red" phase represents identifying the problem, the "Green" phase symbolizes the solution, and the "Refactor" phase embodies continuous improvement. This cyclic process aligns with the Buddhist pursuit of self-discovery and refinement on the path to enlightenment.`,
  //       links: [
  //         {
  //           link: "https://www.ilustrografia.com/shop",
  //           short_link: "ilustrografia.com/shop",
  //         },
  //         {
  //           link: "https://www.ilustrografia.com/about",
  //           short_link: "ilustrografia.com/about",
  //         },
  //       ],
  //       second_content:
  //         "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code.",
  //       list: [
  //         "Exploring Philosophical Analogies in Test-Driven Development 1",
  //         "li 2",
  //         "li Exploring Philosophical Analogies in Test 3",
  //       ],
  //     },
  //     {
  //       title: "Conclusion",
  //       content:
  //         "Figma's collaborative design environment fosters collective creativity, drawing parallels with social contract theory. Just as individuals in a society agree to abide by certain rules for mutual benefit, designers in Figma collaborate within a framework, adhering to a shared design system that ensures coherence and efficiency. In the marriage of Test-Driven Development and Figma prototyping, we discover a rich tapestry of philosophical analogies that underscore the interconnectedness of seemingly disparate practices. The Stoic craftsman, Platonic ideal forms, Nietzschean eternal recurrence, Buddhist enlightenment, and social contract theory all find expression in the realms of TDD and Figma, offering developers and designers alike a holistic perspective on their crafts. As we build bridges between philosophy and technology, we find that the pursuit of excellence and innovation transcends disciplinary boundaries.",
  //       second_content:
  //         "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code.",
  //       image: "/tdd_16_9.jpg",
  //     },
  //   ],
  //   category: "Philosophy",
  //   tags: ["TDD"],
  //   date: "2024-01-29",
  // },
  // {
  //   author_id: users[0].id,
  //   author_name: users[0].name,
  //   title: "Is Odin Project Good for a Beginner?",
  //   short_title: "OdinProjectFoundations.ts",
  //   sub_title: "Honest review of the Foundation Path from The Odin Project",
  //   slug: "the-odin-project-foundations",
  //   content_title: "The most important part of the house",
  //   content: "test content 0",
  //   main_image: "/odinProject.svg",
  //   fields: [
  //     {
  //       title: "field title 1",
  //       content: "field content 1",
  //       image: "/tdd_16_9.jpg",
  //     },
  //     {
  //       title: "field title 2",
  //       content: "field content 2",
  //       image: "/tdd_16_9.jpg",
  //     },
  //   ],
  //   category: "Philosophy",
  //   tags: ["JavaScript", "TypeScript", "Figma"],
  //   date: "2024-01-01",
  // },
  // {
  //   author_id: users[0].id,
  //   author_name: users[0].name,
  //   title: "My third article",
  //   short_title: "myThirdArticle.ts",
  //   sub_title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  //   slug: "my-third-article",
  //   content_title: "Development is the king",
  //   content: "test content 0",
  //   main_image: "/tddFigma.jpg",
  //   fields: [
  //     {
  //       title: "TDD as the Stoic Craftsman",
  //       content:
  //         "Test-Driven Development, at its core, emphasizes the  pursuit of perfection in design.",
  //       image: "/tdd_16_9.jpg",
  //       list: ["li 1", "li 2", "li 3"],
  //       second_content:
  //         "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code.",
  //       links: [
  //         {
  //           link: "https://www.ilustrografia.com/shop",
  //           short_link: "ilustrografia.com/shop",
  //         },
  //         {
  //           link: "https://www.ilustrografia.com/about",
  //           short_link: "ilustrografia.com/about",
  //         },
  //       ],
  //     },
  //     {
  //       title: "TDD's Red-Green-Refactor and the Buddhist Path",
  //       content: `Both TDD and Figma prototyping share a fundamental continuous improvement. This cyclic process aligns with the Buddhist pursuit of self-discovery and refinement on the path to enlightenment.`,
  //       links: [
  //         {
  //           link: "https://www.ilustrografia.com/shop",
  //           short_link: "ilustrografia.com/shop",
  //         },
  //         {
  //           link: "https://www.ilustrografia.com/about",
  //           short_link: "ilustrografia.com/about",
  //         },
  //       ],
  //       second_content:
  //         "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code.",
  //       list: [
  //         "Exploring Philosophical Analogies in Test-Driven Development 1",
  //         "li 2",
  //         "li Exploring Philosophical Analogies in Test 3",
  //       ],
  //     },
  //     {
  //       title: "Conclusion",
  //       content:
  //         "Figma's collaborative design environment fosters collective creativity, drawing parallels with social contract",
  //       second_content:
  //         "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code.",
  //       image: "/tdd_16_9.jpg",
  //     },
  //   ],
  //   category: "Philosophy",
  //   tags: ["JavaScript", "TypeScript", "Figma"],
  //   date: "2024-01-01",
  // },
  // {
  //   author_id: users[0].id,
  //   author_name: users[0].name,
  //   title: "My fourth article lorem ipsum",
  //   short_title: "myFourthArticle.ts",
  //   sub_title: "Lorem ipsum dolor sit amet.",
  //   slug: "my-fourth-article",
  //   content_title: "Development is the king",
  //   content: "test content 0",
  //   main_image: "/tddFigma.jpg",
  //   fields: [
  //     {
  //       title: "TDD as the Stoic Craftsman",
  //       content:
  //         "Test-Driven Development, at its core, emphasizes the  pursuit of perfection in design.",
  //       image: "/tdd_16_9.jpg",
  //       list: ["li 1", "li 2", "li 3"],
  //       second_content:
  //         "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code.",
  //       links: [
  //         {
  //           link: "https://www.ilustrografia.com/shop",
  //           short_link: "ilustrografia.com/shop",
  //         },
  //         {
  //           link: "https://www.ilustrografia.com/about",
  //           short_link: "ilustrografia.com/about",
  //         },
  //       ],
  //     },
  //     {
  //       title: "TDD's Red-Green-Refactor and the Buddhist Path",
  //       content: `Both TDD and Figma prototyping share a fundamental continuous improvement. This cyclic process aligns with the Buddhist pursuit of self-discovery and refinement on the path to enlightenment.`,
  //       links: [
  //         {
  //           link: "https://www.ilustrografia.com/shop",
  //           short_link: "ilustrografia.com/shop",
  //         },
  //         {
  //           link: "https://www.ilustrografia.com/about",
  //           short_link: "ilustrografia.com/about",
  //         },
  //       ],
  //       second_content:
  //         "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code.",
  //       list: [
  //         "Exploring Philosophical Analogies in Test-Driven Development 1",
  //         "li 2",
  //         "li Exploring Philosophical Analogies in Test 3",
  //       ],
  //     },
  //     {
  //       title: "Conclusion",
  //       content:
  //         "Figma's collaborative design environment fosters collective creativity, drawing parallels with social contract",
  //       second_content:
  //         "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code.",
  //       image: "/tdd_16_9.jpg",
  //     },
  //   ],
  //   category: "Philosophy",
  //   tags: ["JavaScript", "TypeScript", "Figma"],
  //   date: "2024-01-01",
  // },
  // {
  //   author_id: users[0].id,
  //   author_name: users[0].name,
  //   title: "Lorem ipsum dolor same My fifth article",
  //   short_title: "myFifthArticle.ts",
  //   sub_title: "Subtitle",
  //   slug: "my-fifth-article",
  //   content_title: "Development is the king",
  //   content: "test content 0",
  //   main_image: "/tddFigma.jpg",
  //   fields: [
  //     {
  //       title: "TDD as the Stoic Craftsman",
  //       content:
  //         "Test-Driven Development, at its core, emphasizes the  pursuit of perfection in design.",
  //       image: "/tdd_16_9.jpg",
  //       list: ["li 1", "li 2", "li 3"],
  //       second_content:
  //         "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code.",
  //       links: [
  //         {
  //           link: "https://www.ilustrografia.com/shop",
  //           short_link: "ilustrografia.com/shop",
  //         },
  //         {
  //           link: "https://www.ilustrografia.com/about",
  //           short_link: "ilustrografia.com/about",
  //         },
  //       ],
  //     },
  //     {
  //       title: "TDD's Red-Green-Refactor and the Buddhist Path",
  //       content: `Both TDD and Figma prototyping share a fundamental continuous improvement. This cyclic process aligns with the Buddhist pursuit of self-discovery and refinement on the path to enlightenment.`,
  //       links: [
  //         {
  //           link: "https://www.ilustrografia.com/shop",
  //           short_link: "ilustrografia.com/shop",
  //         },
  //         {
  //           link: "https://www.ilustrografia.com/about",
  //           short_link: "ilustrografia.com/about",
  //         },
  //       ],
  //       second_content:
  //         "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code.",
  //       list: [
  //         "Exploring Philosophical Analogies in Test-Driven Development 1",
  //         "li 2",
  //         "li Exploring Philosophical Analogies in Test 3",
  //       ],
  //     },
  //     {
  //       title: "Conclusion",
  //       content:
  //         "Figma's collaborative design environment fosters collective creativity, drawing parallels with social contract",
  //       second_content:
  //         "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code.",
  //       image: "/tdd_16_9.jpg",
  //     },
  //   ],
  //   category: "Philosophy",
  //   tags: ["JavaScript", "Confluence", "Jira"],
  //   date: "2024-01-01",
  // },
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
        content:
          "Your eyes will never get used to the Light Theme again! Experience ilustrografia.com with our dynamic Dark/Light theme feature. Accessible from the top menu on every page, users can effortlessly switch between themes. Crafted with Tailwind CSS, the implementation ensures a cohesive and visually pleasing design across product pages and the admin panel. The transition is seamless, offering enhanced user comfort and adaptability to various devices. Tailor your visual experience with ilustrografia.com's versatile Dark/Light theme.",
        image:
          "https://res.cloudinary.com/djadfridw/image/upload/v1706618784/nj3vnnzod6hjbc6asw6p.jpg",
        second_content:
          "I find the Dark Theme particularly appealing on Project Page, where an advanced visual design is implemented. The inclusion of moving lineart pictures on mouse movement adds an interesting dynamic to the composition. The overall look in the Dark Theme is especially pleasing on this page. However, I must note that both the Dark and Light themes contribute to an attractive appearance across the entire application.",
        links: [
          {
            link: "https://www.ilustrografia.com/projects/fantasy-illustrations",
            short_link: "ilustrografia.com/projects/fantasy-illustrations",
          },
        ],
      },
      {
        title: "Testing (backend, frontend, e2e)",
        content:
          "The application undergoes rigorous testing to ensure robust functionality and reliability. Here's an overview of the testing approach:",
        list: [
          "- **Backend Testing:** Backend functionalities are rigorously tested using JEST and Supertest, ensuring the reliability and correctness of server-side operations.",
          "- **Frontend Integration Testing:** The frontend is subjected to thorough integration tests leveraging JEST and React Testing Library. This ensures seamless collaboration between different components and a smooth user experience.",
          "- **End-to-End (E2E) Testing:** Comprehensive end-to-end testing is conducted with Cypress, covering all aspects of the application. This helps identify and address potential issues that may arise from user interactions.",
          "- **API Testing:** The REST API of the application is systematically tested using Postman, ensuring that each API endpoint functions as expected.",
        ],
        image:
          "https://res.cloudinary.com/djadfridw/image/upload/v1706779937/xejqxj7xrgb1lvpzvlma.jpg",
        second_content:
          "I find the Dark Theme particularly appealing on Project Page, where an advanced visual design is implemented. The inclusion of moving lineart pictures on mouse movement adds an interesting dynamic to the composition. The overall look in the Dark Theme is especially pleasing on this page. However, I must note that both the Dark and Light themes contribute to an attractive appearance across the entire application.",
        second_content:
          "This testing strategy prioritizes the most comprehensive E2E testing, guaranteeing a robust and reliable application across all layers.",
      },

      {
        title: "Summary",
        image:
          "https://res.cloudinary.com/djadfridw/image/upload/v1706625286/yuopmrtlimeahqzxhcw3.jpg",
        content:
          "The ilustrografia.com has many more interesting design/functionality aspects. I look forward to tell about them.",

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
    main_image:
      "https://res.cloudinary.com/djadfridw/image/upload/v1706788999/djmiq1n04nxzmcabod4l.png",
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
