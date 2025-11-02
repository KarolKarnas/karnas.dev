---
author_name: Karol Karnas
title: "Brain"
sub_title: "A conscious recommendation system optimizing for learning and growth, not engagement"
content_title: "Evolution from Card Piper"
main_image: "https://res.cloudinary.com/djadfridw/image/upload/v1762113535/brain_1_mfdhm0.jpg"
main_icon: "django"
icons_stack:
  - "python"
  - "django"
  - "postgres"
  - "redis"
  - "htmx"
  - "tailwind"
  - "alpine"
live_demo: "https://brain.karnas.dev/"
repo: "https://github.com/KarolKarnas/brain"
fields:
  - title: "About"
    content: "Brain is a technical evolution of Card Piper. Both projects share the same core intention—helping users discover content that genuinely matters to them. However, Brain refines this vision with more sophisticated technology: moving from psychological profiling to semantic embeddings, from Node.js to Python's ML ecosystem, and from a traditional SPA to a hypermedia-driven architecture. The goal remains the same, but the execution is dramatically improved."
    list:

  - title: "From Euclidean Distance to Vector Embeddings"
    content: "CardPiper used Euclidean distance in a 10-dimensional psychological space (based on 16 Personalities) to calculate similarity. While conceptually elegant, this approach had fundamental limitations. It assumed that personality traits map linearly to content preferences, which is reductive. Brain takes a radically different approach: 768-dimensional semantic embeddings via nomic-embed-text-v1.5. Instead of mapping users to predefined personality types, the system understands the actual semantic meaning of entities—books, films, philosophical concepts, celestial objects—and finds genuine conceptual connections across all domains. A book about Buddhist philosophy can connect to a film noir aesthetic, which connects to a specific type of jazz, which connects to existentialist thought. These aren't arbitrary associations—they're real semantic relationships discovered in high-dimensional vector space."
    links:
      - link: "https://huggingface.co/nomic-ai/nomic-embed-text-v1.5"

  - title: "PostgreSQL + pgvector: The Right Tool for the Job"
    content: "One of Brain's most crucial architectural decisions was using PostgreSQL with the pgvector extension instead of a dedicated vector database. This gives us ACID compliance, mature tooling, and the ability to combine vector similarity search with traditional relational queries in a single atomic operation. We can find semantically similar entities while respecting user reactions, filtering by categories, and maintaining referential integrity—all without the complexity of synchronizing multiple databases. The vector similarity search performs beautifully even with thousands of entities, and we have room to scale to millions."
    links:
      - link: "https://github.com/pgvector/pgvector"
    image: "https://res.cloudinary.com/djadfridw/image/upload/v1762113004/brain_2_navrw4.jpg"

  - title: "Django 5.0: Python's Mature Powerhouse"
    content: "While NestJS served Card Piper well, Brain demanded something different. Django 5.0 provides an incredibly mature ecosystem for data-heavy applications. The ORM is sophisticated enough to handle complex queries involving vector operations, content types, and polymorphic relationships. Django REST Framework made building the API trivial. The admin interface accelerated development. But most importantly, Python's rich ecosystem for data science and ML integration (Pandas, NumPy, scikit-learn) means we can experiment with recommendation algorithms without context switching. The decision to use Python wasn't about popularity—it was about having the right tool for a system where data analysis and machine learning are first-class citizens."
    links:
      - link: "https://www.djangoproject.com/"

  - title: "HTMX + Alpine.js: The Anti-Framework Stack"
    content: "This might be the most interesting architectural choice. Instead of React/Redux (which Card Piper used), Brain uses Django templates + HTMX + Alpine.js. HTMX allows server-rendered HTML to behave like a SPA without shipping megabytes of JavaScript. Need infinite scroll? An HTMX attribute. Live reactions? Server-rendered partial swaps. The entire frontend is < 50KB of JS. Alpine.js handles the minimal client-side interactivity (dropdowns, toggles, transitions) with a Vue-like syntax that stays in the HTML. No build step. No hydration. No client-side state management hell. Just hypermedia as the engine of application state—the way the web was supposed to work. Fast, accessible, and progressively enhanced."
    links:
      - link: "https://htmx.org/"
      - link: "https://alpinejs.dev/"

  - title: "Five-Dimensional Reactions"
    content: "Card Piper had binary likes. Brain has five reaction dimensions: 🧠 Mind (intellectually stimulating), ❤️ Heart (emotionally resonant), 🔥 Fire (inspiring), 🧩 Puzzle (raises questions), 🕳️ Void (misses the mark). This provides much richer data for the recommendation algorithm. Each reaction type is weighted differently in the similarity calculations, and a 'Void' reaction is as valuable as 'Mind'—it teaches the system what doesn't resonate with you. The recommendation algorithm uses these five dimensions to build a nuanced understanding of your preferences across multiple axes, not just a single like/dislike binary."

  - title: "Cross-Domain Discovery"
    content: "Card Piper was limited to a few content types. Brain has 24 entity types spanning the full spectrum of human knowledge: People, Books, Films, Music, Games, Quotes, Philosophical Concepts, Mathematical Theorems, Physical Laws, Celestial Objects, Minerals, Plants, Animals, Places, Foods, Materials, Scents, Visual Arts, Poems, Software, Programming Languages, and more. All exist in the same semantic space. This enables genuinely unexpected connections. If you resonate with Dune, Brain might suggest desert ecology, Arabic calligraphy, prescience in philosophy, and certain musical modes—not because they're tagged similarly, but because they share deep structural patterns in embedding space."
    image: "https://res.cloudinary.com/djadfridw/image/upload/v1762113006/brain_3_a0dbui.jpg"

  - title: "Redis + Celery: Async Operations at Scale"
    content: "Brain uses Redis as both a cache and a message broker for Celery. Computing 768-dimensional embeddings for new entities happens asynchronously. Batch recommendation pre-computation runs in background tasks. Real-time feed generation benefits from intelligent caching of similarity searches. This architecture keeps the user experience snappy while handling computationally expensive ML operations in the background. As the dataset grows, we can scale horizontally by adding more Celery workers without touching the core application."
    links:
      - link: "https://redis.io/"
      - link: "https://docs.celeryq.dev/"

  - title: "Internationalization: English + Polish"
    content: "Unlike Card Piper, Brain was built from day one with i18n. Every template, every UI string, every piece of content supports both English and Polish. Django's i18n framework made this straightforward—template tags for translation strings, middleware for language detection, and locale-specific formatting. The decision to prioritize it from the start meant avoiding the technical debt of retrofitting localization later."

  - title: "What I Learned"
    content: "Building Card Piper taught me backend architecture, data modeling, and the basics of recommendation systems. Building Brain taught me how to scale those concepts with production-grade tools. The move from Euclidean distance to vector embeddings showed me how much precision matters in ML applications. The Django ecosystem proved invaluable for rapid iteration—migrations, admin interface, ORM abstractions all accelerated development. HTMX + Alpine demonstrated that you don't always need a heavy frontend framework to build responsive interfaces. Most importantly, I learned that the right technology stack isn't just about performance—it's about maintainability, debuggability, and how well the tools align with the problem you're solving."

category: "FullStack"
tags:
  - "Django"
  - "PostgreSQL"
  - "Vector Embeddings"
  - "HTMX"
  - "Alpine.js"
  - "Machine Learning"
  - "pgvector"
  - "Redis"
  - "Celery"
  - "i18n"
date: "2025-01-23"
---

Brain represents everything I learned from Card Piper—and everything I wished it could have been. Where Card Piper used Euclidean distance in psychological space, Brain uses 768-dimensional semantic embeddings to understand genuine conceptual relationships. Where Card Piper relied on React for interactivity, Brain uses HTMX and Alpine.js to deliver a faster, lighter, more accessible experience. The core intention remains the same—helping users discover meaningful content—but the technical execution is dramatically improved.
