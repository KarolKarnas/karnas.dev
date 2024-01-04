const users = [
  {
    id: "422111b1-4001-4271-9855-fec4b6a6442a",
    name: "Admin",
    email: "admin@email.com",
    password: "123",
  },
]

const posts = [
  {
    // tag/class
    author_id: users[0].id,
    title: "Building Bridges: Exploring Philosophical Analogies in Test-Driven Development (TDD) and Figma Prototyping",
    short_title: 'FigmaAndTDD.ts', //truncate
    sub_title: "Introduction",
    slug: "tdd-and-figma",
    content: "In the ever-evolving landscape of software development, two methodologies stand out as pillars of efficiency and innovation: Test-Driven Development (TDD) and Figma prototyping. While on the surface, these two practices may seem worlds apart, a closer examination reveals profound philosophical analogies that bridge the gap between the meticulous coding process of TDD and the creative design realm of Figma.",
    main_image: "/next.svg",
    fields: [
      {
        title: "TDD as the Stoic Craftsman",
        content: "Test-Driven Development, at its core, emphasizes the importance of writing tests before writing the actual code. This approach echoes the Stoic philosophy, where practitioners focus on what they can control and accept what they cannot. The TDD practitioner, much like a Stoic craftsman, meticulously plans and tests every component of their code, anticipating challenges and embracing the iterative nature of development.",
        
      },
      {
        title: "Figma Prototyping and Plato's Ideal Forms",
        content: "In the world of design, Figma prototyping serves as a canvas where ideas take shape and evolve. This process finds resonance with Plato's theory of Forms, where he posited that abstract, ideal forms exist beyond the tangible world. In Figma, designers create prototypes that represent the idealized version of the final product before it materializes, emphasizing the pursuit of perfection in design.",
        
      },
      {
        title: "Iterative Development and Nietzschean Eternal Recurrence",
        content: "Both TDD and Figma prototyping share a fundamental principle – iteration. In TDD, developers iteratively write tests and refine code, while in Figma, designers iterate through prototypes to refine the user experience. This iterative nature aligns with Nietzsche's concept of eternal recurrence, where the cyclical nature of existence invites continual refinement and improvement.",
        
      },
      {
        title: "TDD's Red-Green-Refactor and the Buddhist Path",
        content: `TDD's mantra of "Red-Green-Refactor" mirrors the Buddhist path of enlightenment. The "Red" phase represents identifying the problem, the "Green" phase symbolizes the solution, and the "Refactor" phase embodies continuous improvement. This cyclic process aligns with the Buddhist pursuit of self-discovery and refinement on the path to enlightenment.`,
        
      },
      {
        title: "Figma's Collaborative Design and Social Contract Theory",
        content: "Figma's collaborative design environment fosters collective creativity, drawing parallels with social contract theory. Just as individuals in a society agree to abide by certain rules for mutual benefit, designers in Figma collaborate within a framework, adhering to a shared design system that ensures coherence and efficiency.",
        
      },
      {
        title: "Conclusion",
        content: "In the marriage of Test-Driven Development and Figma prototyping, we discover a rich tapestry of philosophical analogies that underscore the interconnectedness of seemingly disparate practices. The Stoic craftsman, Platonic ideal forms, Nietzschean eternal recurrence, Buddhist enlightenment, and social contract theory all find expression in the realms of TDD and Figma, offering developers and designers alike a holistic perspective on their crafts. As we build bridges between philosophy and technology, we find that the pursuit of excellence and innovation transcends disciplinary boundaries.",
        image: "/next.svg",
      }
    ],
    date: "2022-12-06",
  },
  {
    author_id: users[0].id,
    title: "My second article",
    short_title: 'mySecondArticle.ts',
    sub_title: "Subtitle",
    slug: "my-second-article",
    content: "test content 0",
    main_image: "/next.svg",
    fields: [
      {
        title: "field title 1",
        content: "field content 1",
        image: "/next.svg",
      },
      {
        title: "field title 2",
        content: "field content 2",
        image: "/next.svg",
      },
    ],
    date: "2024-01-01",
  },
]

module.exports = {
  users,
  posts
}
