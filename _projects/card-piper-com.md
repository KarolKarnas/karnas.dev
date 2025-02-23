---
author_name: Karol Karnas
title: "CardPiper.com"
sub_title: "I set out to build something different - a platform that truly understands its users at a psychological level."
content_title: "Core concept"
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
live_demo: "https://www.cardpiper.com/"
repo: "https://github.com/KarolKarnas/card-piper-be"
fields:
  - title: "About"
    content: "I was looking for a new project to build. I wanted something engaging, something that would challenge both my backend and frontend skills. Eventually, I landed on an idea: a social platform centered around personalized recommendations, where user interactions would shape their experience in real time."
    list:
  - title: "Technologies"
    content: "To bring this to life, I needed a solid backend and a reliable dataset. I chose NestJS + Prisma + Postgres for the backend, ensuring scalability and efficiency. For data, I leveraged Puppeteer to scrape and collect relevant content. The biggest challenge came when designing how user preferences would be processed."
    links:
      - link: "https://nestjs.com/"

  - title: "Data Scraping"
    content: "I started by gathering sample data through web scraping, utilizing vanilla JavaScript and Puppeteer for automation and BrightData for reliable proxy management. My goal was to collect a diverse dataset of books, authors, quotes, movie characters, films, and games to serve as the foundation for a dynamic recommendation system. By leveraging Puppeteer, I was able to automate interactions with various websites, extracting structured data efficiently. BrightData ensured that my scraping process remained uninterrupted and scalable, allowing me to bypass rate limits and access geo-restricted content. This initial data collection phase was crucial in shaping the platform’s ability to personalize user feeds based on their preferences and interactions."
    links:
      - link: "https://pptr.dev/"
      - link: "https://brightdata.com/"

  - title: "Building data schema"
    content: "Designing data schemas in Prisma and defining relationships between different models was a critical step that shaped the entire development process. A well-structured database was essential for ensuring seamless data retrieval, efficient queries, and a scalable architecture. I carefully mapped out the relationships between core entities—Users, Books, Authors, Quotes, Characters, Films, and Games—establishing many-to-many connections where needed, such as users interacting with multiple entities and entities being linked through common themes. Prisma’s intuitive schema definition allowed me to enforce data integrity, streamline migrations, and optimize queries for performance. This foundational work not only improved the efficiency of backend operations but also made implementing personalized recommendations and real-time feed adjustments significantly more manageable."
    links:
      - link: "https://www.prisma.io/"
    image: "https://res.cloudinary.com/djadfridw/image/upload/v1740337880/jozjtodjdhq3zuhzqtlx.png"

  - title: "Euclidean distance and 16 Personalities"
    content: "I decided to model user profiles based on psychological traits—ten opposing characteristics like introversion vs. extroversion. The system would then map users to one of the 16 Personalities and use Euclidean distance to determine content similarity. This approach allowed for a nuanced recommendation system, capable of suggesting not only books and films but even specific characters or other users with similar tastes."
    links:
      - link: "https://en.wikipedia.org/wiki/Euclidean_distance"
      - link: "https://www.16personalities.com/"

  - title: "Next steps"
    content: "Through this project, I discovered NestJS, which, in my opinion, is the best TypeScript backend framework available today. It’s incredibly straightforward, efficient, and a joy to work with, making backend development both intuitive and scalable.
    
    More importantly, the project planted the seed for building a platform like this. Since then, in my professional work, I’ve been using Python, Django, and Pandas, diving deeper into AI embeddings and data analysis. Subconsciously, as I explored these technologies, I kept thinking about how Card Piper could benefit from greater precision—how machine learning, improved embeddings, and deeper analytical models could make recommendations even more accurate and insightful. That’s why I’m now actively working on integrating these advancements to take the platform to the next level."

category: "FullStack"
tags:
  - "Puppeteer"
  - "TypeScript"
  - "JavaScript"
date: "2025-01-15"
---

The core concept was simple but ambitious—a feed that dynamically adapts based on user preferences. Instead of generic content, users would see books, authors, quotes, movie characters, films, games, and more, all tailored to their tastes to create a dynamic, personalized feed. Every reaction—whether liking a quote or engaging with a book—would refine their profile, adjusting future recommendations
