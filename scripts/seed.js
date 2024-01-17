const { db } = require("@vercel/postgres")
const bcrypt = require("bcrypt")
const { posts, users, projects } = require("../app/lib/placeholder-data.js")

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `

    console.log(`Created "users" table`)

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10)
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `
      })
    )

    console.log(`Seeded ${insertedUsers.length} users`)

    return {
      createTable,
      users: insertedUsers,
    }
  } catch (error) {
    console.error("Error seeding users:", error)
    throw error
  }
}

async function seedPosts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    // Create the "posts" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS posts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    author_id UUID NOT NULL,
    author_name text NOT NULL,
    title TEXT NOT NULL,
    short_title TEXT NOT NULL,
    sub_title TEXT NOT NULL,
    slug TEXT NOT NULL,
    content_title TEXT NOT NULL,
    content TEXT NOT NULL,
    main_image TEXT NOT NULL,
    fields JSONB NOT NULL,
    category TEXT NOT NULL,
    tags JSONB NOT NULL,
    date DATE NOT NULL
  );
`

    console.log(`Created "posts" table`)

    // Insert data into the "posts" table
    const insertedPosts = await Promise.all(
      posts.map(
        (post) => client.sql`
        INSERT INTO posts (author_id, author_name, title, short_title, sub_title, slug,content_title,  content, main_image, fields, category, tags, date)
        VALUES (${post.author_id},${post.author_name}, ${post.title}, ${post.short_title}, ${
          post.sub_title
        }, ${post.slug}, ${post.content_title}, ${post.content}, ${
          post.main_image
        }, ${JSON.stringify(post.fields)}, ${post.category}, ${JSON.stringify(post.tags)}, ${
          post.date
        })
        ON CONFLICT (id) DO NOTHING;
      `
      )
    )

    console.log(`Seeded ${insertedPosts.length} posts`)

    return {
      createTable,
      posts: insertedPosts,
    }
  } catch (error) {
    console.error("Error seeding posts:", error)
    throw error
  }
}

async function seedProjects(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    // Create the "projects" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS projects (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    author_id UUID NOT NULL,
    author_name text NOT NULL,
    title TEXT NOT NULL,
    short_title TEXT NOT NULL,
    sub_title TEXT NOT NULL,
    slug TEXT NOT NULL,
    content_title TEXT NOT NULL,
    content TEXT NOT NULL,
    main_image TEXT NOT NULL,
    main_icon TEXT NOT NULL,
    stack TEXT[] NOT NULL,
    icons_stack TEXT[] NOT NULL,
    json_stack JSONB NOT NULL,
    live_demo TEXT NOT NULL,
    repo TEXT NOT NULL,
    fields JSONB NOT NULL,
    category TEXT NOT NULL,
    tags TEXT[] NOT NULL,
    date DATE NOT NULL
  );
`

    console.log(`Created "projects" table`)

    // Insert data into the "projects" table
    const insertedProjects = await Promise.all(
      projects.map(
        (project) => client.sql`
        INSERT INTO projects (author_id, author_name, title, short_title, sub_title, slug,content_title,  content, main_image, main_icon, stack, icons_stack, json_stack, live_demo, repo, fields, category, tags, date)
        VALUES (${project.author_id}, ${project.author_name}, ${project.title}, ${
          project.short_title
        }, ${project.sub_title}, ${project.slug}, ${project.content_title}, ${
          project.content
        }, ${project.main_image}, ${project.main_icon},${project.stack}, ${
          project.icons_stack
        }, ${JSON.stringify(project.json_stack)}, ${project.live_demo}, ${
          project.repo
        }, ${JSON.stringify(project.fields)}, ${project.category}, ${
          project.tags
        }, ${project.date})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    )

    console.log(`Seeded ${insertedProjects.length} projects`)

    return {
      createTable,
      projects: insertedProjects,
    }
  } catch (error) {
    console.error("Error seeding projects:", error)
    throw error
  }
}

async function main() {
  const client = await db.connect()

  await seedUsers(client)
  await seedPosts(client)
  await seedProjects(client)

  await client.end()
}

main().catch((err) => {
  console.error("An error occurred while attempting to seed the database:", err)
})
