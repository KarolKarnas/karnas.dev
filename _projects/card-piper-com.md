---
author_name: "Karol Karnas"
title: "CardPiper.com"
sub_title: "A full-stack discovery platform connecting a React interface to a NestJS API and an experimental recommendation model."
content_title: "Building a personalized discovery experience"
main_image: "https://res.cloudinary.com/djadfridw/image/upload/v1740336869/oyczalwjlk3qkcwvmvqx.png"
main_icon: "nestJs"
icons_stack:
  - "typeScript"
  - "javaScript"
  - "nestJs"
  - "react"
  - "redux"
  - "postgres"
  - "sass"
  - "prisma"
  - "puppeteer"
live_demo: "https://www.cardpiper.karnas.dev/"
repo: "https://github.com/KarolKarnas/card-piper-be"
fields:
  - title: "What I built"
    content: "Card Piper was an independent project spanning frontend, backend, data collection, and recommendation logic. The idea was a feed of books, authors, quotes, films, games, and characters that changes as a user reacts to it. It gave me a concrete product to design and build across the whole stack."
  - title: "The application stack"
    content: "React and Redux handle the interface and client state. A NestJS API connects it to PostgreSQL through Prisma, with TypeScript across both sides. I worked on the flow from a user interaction in the feed to the stored preference and the recommendations returned by the backend."
    links:
      - link: "https://nestjs.com/"
  - title: "Preparing the content"
    content: "I used JavaScript and Puppeteer to collect and structure sample content, with BrightData supporting the collection workflow. The task involved more than gathering pages: the resulting books, people, quotes, and other entities needed relationships and consistent fields before the application could use them."
    links:
      - link: "https://pptr.dev/"
      - link: "https://brightdata.com/"
  - title: "Modeling the domain"
    content: "I designed Prisma models for users, books, authors, quotes, characters, films, and games, including the relationships between them and user interactions. That schema shaped the API and the feed. Thinking through the interface and persistence together helped expose where a relationship or response needed to be clearer."
    image: "https://res.cloudinary.com/djadfridw/image/upload/v1740337880/jozjtodjdhq3zuhzqtlx.png"
    links:
      - link: "https://www.prisma.io/"
  - title: "The recommendation experiment"
    content: "The first approach represented preferences with ten personality-inspired dimensions and used Euclidean distance to compare them. I used it as an experimental similarity model and explored how its assumptions affected the recommendations. Those limitations became part of the motivation for Brain, where I moved to semantic embeddings."
    links:
      - link: "https://en.wikipedia.org/wiki/Euclidean_distance"
      - link: "https://www.16personalities.com/"
  - title: "What carried into the next project"
    content: "Card Piper gave me practice connecting a stateful React interface to a structured API and relational database. It also showed how much a recommendation product depends on its modeling assumptions. Brain is the follow-up exploration of that problem, using Django, embeddings, and a different frontend architecture. The lesson was to evaluate the whole experience rather than treating the recommendation formula as the product."
category: "FullStack"
tags:
  - "TypeScript"
  - "React"
  - "NestJS"
  - "Prisma"
  - "PostgreSQL"
  - "Recommendations"
date: "2025-01-15"
nav_title: "cardpiper.com"
nav_icon: "nestJs"
stack:
  - "TypeScript"
  - "React"
  - "Redux"
  - "NestJS"
  - "Prisma"
  - "PostgreSQL"
---

A personalized discovery feed built with TypeScript, React, Redux, NestJS, Prisma, and PostgreSQL. I developed the interface, API, data model, and recommendation experiment together, following each interaction from the browser to the stored preferences and back to the next suggestion.
