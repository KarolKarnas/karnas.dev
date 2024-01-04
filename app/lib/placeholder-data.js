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
    author_id: users[0].id,
    title: "My first article",
    short_title: 'myFirstArticle.ts', //truncate
    sub_title: "Subtitle",
    slug: "my-first-article",
    content: "test content 0",
    main_image: "/public/next0.svg",
    fields: [
      {
        title: "field title 1",
        content: "field content 1",
        image: "/public/next1.svg",
      },
      {
        title: "field title 2",
        content: "field content 2",
        image: "/public/next2.svg",
      },
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
    main_image: "/public/next0.svg",
    fields: [
      {
        title: "field title 1",
        content: "field content 1",
        image: "/public/next1.svg",
      },
      {
        title: "field title 2",
        content: "field content 2",
        image: "/public/next2.svg",
      },
    ],
    date: "2024-01-01",
  },
]

module.exports = {
  users,
  posts
}
