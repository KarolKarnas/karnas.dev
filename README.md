# karnas.dev

[**Live Demo - karnas.dev**](https://www.karnas.dev/) 👈

#### Full stack portfolio with a blog, inspired by VSC design, built using Next.js

<img src="https://res.cloudinary.com/djadfridw/image/upload/v1706878975/spp0rjysnfk30vb3rpqc.jpg" alt="screens of the karnas.dev portfolio with blog platform">

## Description

This project is a full stack portfolio crafted with a blog feature, drawing inspiration from the sleek design aesthetics of Visual Studio Code (VSC) with the Monokai Theme.

This dynamic platform is built with Next.js, Zustand, React, TypeScript, PostgreSQL, Sass, CSS modules, and more.



## Key Features

- Utilize Next.js server-side components for enhanced SEO, performance and dynamic rendering,
- Organize content with distinct grids for projects and blog posts, providing visual clarity,
- Create a secure admin panel with Next Auth for seamless authentication and management,
- Enable administrators to create, edit, and delete blog posts and portfolio items after logging in,
- Implement Zustand for efficient global state management, ensuring a consistent user experience,
- Craft a tab menu and sidebar that closely mimic Visual Studio Code (VSC) behavior, enhancing user navigation,
- Dynamically generate VSC-style menus with text and icons representing file extensions for an intuitive interface,
- Utilize Cloudinary for secure and scalable object storage, optimizing media file handling,
- Dynamically create representations of the technology stack using icons or icons with titles, providing insights into the project's architecture,
- Utilize Sass in conjunction with CSS Modules, to create a design system and modular styled components. This combination allows for a structured and scalable approach to styling, ensuring consistency and reusability across the application

<img src="https://res.cloudinary.com/djadfridw/image/upload/v1707131042/pm7f1szandr9c661l3pf.jpg" alt="desktop and mobile screen of the karnas.dev portfolio with blog platform">

## Technologies Used

- Next.js
- React
- TypeScript
- PostgreSQL
- Zustand
- Next Auth
- SASS + CSS Modules
- Postman for API testing
- Continuously deployed on Vercel.com

[**Live Demo - karnas.dev**](https://www.karnas.dev/) 👈

<img src="https://res.cloudinary.com/djadfridw/image/upload/v1707116567/anvrceff2msqke1oanep.jpg" alt="mobile screens of the karnas.dev portfolio with blog platform">

The application is designed to be fully responsive, aiming to maintain a consistent user experience across different screen sizes. The goal is to provide a practical and user-friendly interface on par with Visual Studio Code (VSC) across all devices.

## Usage

1. Create a PostgreSQL - [Vercel PostgreSQL](https://nextjs.org/learn/dashboard-app/setting-up-your-database)

2. Register on the Cloudinary - [Cloudinary](https://cloudinary.com/users/register_free)

### Environment Variables

Rename the `.env.example` file to `.env` and add the following:

```
POSTGRES_URL="ADD_YOUR_POSTGRES_URL"
POSTGRES_PRISMA_URL="ADD_YOUR_POSTGRES_PRISMA_URL"
POSTGRES_URL_NON_POOLING="ADD_YOUR_POSTGRES_URL_NON_POOLING"
POSTGRES_USER="ADD_YOUR_USER"
POSTGRES_HOST="ADD_YOUR_HOST"
POSTGRES_PASSWORD="ADD_YOUR_PASSWORD"
POSTGRES_DATABASE="ADD_YOUR_DATABASE"

AUTH_SECRET="ADD_YOUR_AUTH_SECRET"

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="ADD_YOUR_NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME"
CLOUDINARY_API_KEY="ADD_YOUR_CLOUDINARY_API_KEY"
CLOUDINARY_API_SECRET="ADD_YOUR_CLOUDINARY_API_SECRET"
```

### Install Dependencies

```
npm install

```

### Seed Database

You can use the following commands to seed the database with a sample user, portfolio projects and posts

```
npm run seed

```

```
Sample User Login

admin@email.com
123456

```

### Run

```

# start the development server
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
