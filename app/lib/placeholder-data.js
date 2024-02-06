const users = [
  {
    id: "422111b1-4001-4271-9855-fec4b6a6442a",
    name: "Admin",
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
      "https://res.cloudinary.com/djadfridw/image/upload/v1706868930/efrrljo7l7kvrx2o1vym.png",
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
    title: "Full Stack Open by The University of Helsinki",
    short_title: "FullStackOpenCore.ts", //truncate
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
          "Each part of the course includes approximately 20 exercises (except for Part 0, which has only 6), which we solve in real-time. It's not a scenario where we read the theory and do exercises only at the end. Here, we solve exercises literally every few paragraphs. This approach allows us to reinforce the knowledge we acquire while reading by immediately applying it through exercises. The difficulty of the exercises is remarkably well-balanced; they are neither too easy nor too challenging. This balance is beneficial as it keeps us motivated without causing discouragement. The exercises differ sufficiently from the examples provided in the source material, requiring effort and allowing for better retention of knowledge. Some exercises are marked with an asterisk, indicating that they are optional. However, I recommend completing all of them.",
        image:
          "https://res.cloudinary.com/djadfridw/image/upload/v1706802339/bd5qyrx6clsnig1pyl9i.jpg",
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
        image:
          "https://res.cloudinary.com/djadfridw/image/upload/v1706800611/drrpqlkra1dltkanizc5.jpg",
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
        title: "Quick Summary",
        content:
          "The course doesn't particularly emphasize styling applications. The majority of time is dedicated to programming both the frontend and backend, as well as testing our code. It's not a drawback but an advantage. Contemporary CSS frameworks are introduced in a sufficient manner. However, if someone masters the main programming aspects of the course, they can refine styling on their own.  If I could change something in the Core Course, I would prefer to learn SQL + PostgreSQL, instead of MongoDB. I would place MongoDB in the supplementary course. However, from a teaching perspective, using MongoDB in the Core Course was probably justified due to its ease of use. In that case, maybe it should stay that way.",
        image:
          "https://res.cloudinary.com/djadfridw/image/upload/v1706801466/t0i49afg2uk0ztoe7tly.jpg",
        second_content:
          "As I mentioned at the beginning of this short review, the course is just great. It is probably the best online source for learning full-stack development. And if that wasn't enough, it is officially conducted by the University of Helsinki, it's free, and you receive ECTS points. Additionally, upon completion of each exercise, you will receive an accessible online certificate!",
        links: [
          {
            link: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/26a9bc441296f05e655e5526eac6494c",
          },
        ],
      },
      {
        title: "The Practice",
        content:
          "The crucial step after completing the course is to apply the newly acquired knowledge by building a real-world project. No course can fully prepare us for solving real-world problems independently, navigating through package documentations, exploring MDN docs, or seeking solutions on Stack Overflow. I took that step and built a full-stack eCommerce platform using the MERN stack + TypeScript (I took a supplementary TypeScript course)",
        image:
          "https://res.cloudinary.com/djadfridw/image/upload/v1706625285/u2yg75ygsansmfpl6nir.jpg",
        second_content:
          "It took me about three months, and this was another milestone in my journey to becoming a full-stack developer. You can read about the project or check it live with the links below.",
        links: [
          {
            link: "https://www.karnas.dev/projects/ilustrografia",
          },
          {
            link: "https://www.ilustrografia.com/",
          },
        ],
      },
      {
        title: "This is not the end",
        content:
          "Completing the Core Course (Parts 0-7) is just the beginning of what Helsinki's Full Stack Open has to offer. Participants can also take part in many excellent supplementary courses, including:",
        list: [
          "PART 8 - GraphQL (a. GraphQL-server, b. React and GraphQL, c. Database and user administration, d. Login and updating the cache, e. Fragments and subscriptions)",
          "PART 9 - TypeScript (a. Background and introduction, b. First steps with TypeScript, c. Typing an Express app, d. React with types, e. Grande finale: Patientor)",
          "PART 10 - React Native (a. Introduction to React Native, b. React Native basics, c. Communicating with server, d. Testing and extending our application)",
          "PART 11 - CI/CD (a. Introduction to CI/CD, b. Getting started with GitHub Actions, c. Deployment, d. Keeping green, e. Expanding Further)",
          "PART 12 - Containers (a. Introduction to Containers, b. Building and configuring environments, c. Basics of Orchestration)",
          "PART 13 - Using relational databases (a. Using relational databases with Sequelize, b. Join tables and queries, c. Migrations, many-to-many relationships)",
        ],
        second_content:
          "I've completed two of them so far: PART 9 - TypeScript and PART 13 - Using relational databases. I'll share my experiences with them next time :)",
        links: [
          {
            link: "https://fullstackopen.com/en/#course-contents",
          },
        ],
      },
    ],
    category: "WebDevelopment",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Testing"],
    date: "2023-10-27",
  },
]

const projects = [
  {
    author_id: users[0].id,
    author_name: users[0].name,
    title: "ilustrografia.com",
    short_title: "ilustrografia.com",
    sub_title:
      "Full stack eCommerce platform built with the MERN stack & Redux & Typescript",
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
          "Table Layout: 'Product List' 'Users List' and 'Order List' sections provide a quick overview.",
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
    sub_title:
      "Full stack portfolio with a blog, inspired by VSC design, built using Next.js.",
    slug: "karnas",
    content_title: "What is it?",
    content:
      "This project is a full stack portfolio crafted with a blog feature, drawing inspiration from the sleek design aesthetics of Visual Studio Code (VSC) with the Monokai Theme.",
    main_image:
      "https://res.cloudinary.com/djadfridw/image/upload/v1706878975/spp0rjysnfk30vb3rpqc.jpg",
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
      "cloudinary",
      "playWright",
      "jira",
      "confluence",
      "figma",
    ],
    live_demo: "https://www.karnas.dev/",
    repo: "https://github.com/KarolKarnas/karnas.dev",
    fields: [
      {
        title: "About",
        content:
          "This dynamic platform is built with Next.js, Zustand, React, TypeScript, PostgreSQL, Sass, CSS modules, and more. The app key features:",
        list: [
          "Utilize Next.js server-side components for enhanced SEO, performance and dynamic rendering",
          "Organize content with distinct grids for projects and blog posts, providing visual clarity",
          "Create a secure admin panel with Next Auth for seamless authentication and management",
          "Enable administrators to create, edit, and delete blog posts and portfolio items after logging in",
          "Implement Zustand for efficient global state management, ensuring a consistent user experience",
          "Craft a tab menu and sidebar that closely mimic Visual Studio Code (VSC) behavior, enhancing user navigation",
          "Dynamically generate VSC-style menus with text and icons representing file extensions for an intuitive interface",
          "Utilize Cloudinary for secure and scalable object storage, optimizing media file handling",
          "Dynamically create representations of the technology stack using icons or icons with titles, providing insights into the project's architecture",
          "Utilize Sass in conjunction with CSS Modules, to create a design system and modular styled components. This combination allows for a structured and scalable approach to styling, ensuring consistency and reusability across the application"
        ],
        image: "https://res.cloudinary.com/djadfridw/image/upload/v1707131042/pm7f1szandr9c661l3pf.jpg",
      },
      {
        title: "The Responsiveness",
        content:
          "The application is designed to be fully responsive, aiming to maintain a consistent user experience across different screen sizes. The goal is to provide a practical and user-friendly interface on par with Visual Studio Code (VSC) across all devices.",
        image: "https://res.cloudinary.com/djadfridw/image/upload/v1707116567/anvrceff2msqke1oanep.jpg",
      },
      // {
      //   title: "The Code Snippets and JSON",
      //   content:
      //     "The application is designed to be fully responsive, aiming to maintain a consistent user experience across different screen sizes. The goal is to provide a practical and user-friendly interface on par with Visual Studio Code (VSC) across all devices.",
      //   image: "https://res.cloudinary.com/djadfridw/image/upload/v1707116567/anvrceff2msqke1oanep.jpg",
      // },
      {
        title: "The Process",
        content:
          "This time, I experimented with applying the Kanban methodology to my personal workflow. I utilized Jira for planning and tracked my progress using a Kanban Board. Additionally, I designed crucial elements in Figma. Subsequently, I initiated the development process, meticulously monitoring my progress, creating and managing tasks, and categorizing them as 'TO DO', 'IN PROGRESS' or 'DONE'. The application has been successfully published as an MVP. Currently, I am conducting thorough testing using Playwright, reviewing and addressing any errors, and continuously refining the design for optimal performance.",
        image: "https://res.cloudinary.com/djadfridw/image/upload/v1706875858/yvyahqv24mm0ta8s0uf1.jpg",
      },
    ],
    category: "FullStack",
    tags: ["NextJs", "TypeScript", "Figma"],
    date: "2024-01-06",
  },
]

module.exports = {
  users,
  posts,
  projects,
}
