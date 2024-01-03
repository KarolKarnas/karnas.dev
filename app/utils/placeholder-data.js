const users = [
  {
    id: "422111b1-4001-4271-9855-fec4b6a6442a",
    name: "Admin",
    email: "admin@email.com",
    password: "123",
  },
]

const articles = [
  {
    author_id: users[0].id,
    title: "My first article",
    content: "test content",
    date: "2022-12-06",
  },
]

module.exports = {
  users,
  articles,
}
