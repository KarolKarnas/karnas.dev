---
author_name: "Karol Karnas"
title: "Dive Into Design Patterns by Alexander Shvets"
sub_title: "Why the Refactoring.Guru book is the architecture primer I reach for in the AI era"
content_title: "Design patterns as a vocabulary for talking to yourself, your team, and your AI"
main_image: "https://res.cloudinary.com/djadfridw/image/upload/v1777055380/Design_Patterns_Shvets_Karnas_dev_o7gg1n.png"
category: "Books"
tags: ["Design Patterns", "Architecture", "OOP", "SOLID", "Refactoring", "AI"]
icons_stack:
  - "python"
date: "2025-02-14T10:00:00.322Z"
fields:
  - title: "The overview"
    content: "Dive Into Design Patterns is Alexander Shvets's book version of the Refactoring.Guru catalog. It walks through the 22 classic Gang of Four patterns plus 8 design principles (the three object-oriented ones - encapsulate what varies, program to an interface, favor composition over inheritance - and the five SOLID principles). It is 409 pages, 225 illustrations, code samples in ten languages, and it is sold as an e-book - I read it as a PDF. The whole thing is the polished book version of the free website I have been linking people to for years."
    links:
      - link: "https://refactoring.guru/design-patterns/book"
        short_link: "refactoring.guru/design-patterns/book"
      - link: "https://refactoring.guru/design-patterns"
        short_link: "refactoring.guru/design-patterns"

  - title: "Why I picked it up now"
    content: "I have known Refactoring.Guru for years - it is one of those sites that quietly shows up on the first page every time you search for a pattern by name. What pushed me to buy the actual book was the shift in how I work. I code with AI every day, I generate more code than I used to, and I spend more of my thinking time on *shape* than on *syntax*. The question I increasingly ask is not 'how do I write this' - the assistant can write it - but 'what is this thing, how does it want to be composed, where are the seams.' That is pattern thinking. I wanted the vocabulary sharpened, and I wanted it in a form I could keep open and revisit - less a book you power through end to end and more a shelf you pull from when the question comes up."

  - title: "The author and the project behind it"
    content: "Alexander Shvets has been running Refactoring.Guru since 2014 and has spent a decade iterating on these explanations. The book credits Dmitry Zhart for the illustrations, and it shows - the diagrams are the best I have seen in any patterns book, and the analogies (the burger builder, the social network proxy, the airport ATC mediator) are tight enough to actually stick. Shvets is also the author of Dive Into Refactoring, a sibling course, and the design vocabulary is shared between the two. It is one person's opinionated, well-edited view - not a committee-produced reference."
    list:
      - "Refactoring.Guru has been live and maintained since 2014"
      - "225 custom illustrations - the book is as much visual as textual"
      - "Code samples in C#, C++, Go, Java, PHP, Python, Ruby, Rust, Swift, and TypeScript"
      - "Sister project: Dive Into Refactoring (the course)"

  - title: "Structure - a real textbook, not a reference"
    content: "The book opens with an Introduction to OOP (basics, pillars, relations between objects), then a chapter on Software Design Principles that covers the three core OO principles and then SOLID, and only then does it enter the Catalog of Design Patterns. The catalog is split the classic way - Creational, Structural, Behavioral. Every pattern chapter follows the same rhythm: real-world problem → solution → structure → pseudocode → applicability → implementation steps → pros and cons → relations with other patterns. That consistent shape is why the book works as a textbook. You are not just learning twenty-two patterns - you are learning a template for *analyzing* any pattern you meet later."
    image: "https://res.cloudinary.com/djadfridw/image/upload/v1777055380/Design_Patterns_Shvets_Karnas_dev_o7gg1n.png"
    list:
      - "Part 1 - OOP foundations (encapsulation, inheritance, polymorphism, abstraction)"
      - "Part 2 - Design principles (OO trio + SOLID)"
      - "Part 3 - Creational (Factory Method, Abstract Factory, Builder, Prototype, Singleton)"
      - "Part 4 - Structural (Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy)"
      - "Part 5 - Behavioral (Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor)"
      - "Conclusion with onward reading (Kerievsky's Refactoring To Patterns is recommended)"

  - title: "Why this is the best modern GoF alternative"
    content: "The original Gang of Four book is a landmark and it is also, frankly, a slog. C++ and Smalltalk examples, dense prose, minimal illustrations. Shvets's book is what you reach for when you want the same canon in a form a working developer in 2026 can actually absorb. Reviewers on Goodreads and dev.to consistently single out the same two things: the illustrations make abstract concepts click, and the problem-first framing stops patterns from feeling like solutions in search of problems. That matches my experience exactly. I have bounced off GoF twice. With Shvets I have read the principles chapter closely and dipped into the pattern chapters I needed - and unlike with GoF, every return trip has actually paid off."
    list:
      - "Problem → solution framing on every chapter - you feel the motivation before the mechanism"
      - "Pseudocode instead of a single language - keeps the focus on the pattern, not the ceremony"
      - "Pros and cons section is honest - patterns have costs and the book says so"
      - "'Relations with other patterns' section at the end of every chapter - teaches you the map, not just the pins"

  - title: "The principles chapter is worth the price on its own"
    content: "Before the catalog even starts, the book spends ~40 pages on principles. That section is the one I expect to come back to the most. The three OO principles - encapsulate what varies, program to an interface not an implementation, favor composition over inheritance - are the lens that makes the whole catalog make sense afterwards. Once you internalize 'find what varies and isolate it,' half the patterns stop being mysterious and start being obvious consequences. The SOLID section is a clean, short treatment - Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion - with small examples and the usual counter-arguments acknowledged. If someone only ever read chapters 1 through 3 and never opened the catalog, they would still get enormous value."
    list:
      - "Encapsulate What Varies - the meta-principle behind most patterns"
      - "Program to an Interface, Not an Implementation"
      - "Favor Composition Over Inheritance"
      - "SOLID - the five principles, each in its own short chapter with a counter-example"

  - title: "Patterns I now see in my own code"
    content: "The surprise was not learning new patterns - it was the 'oh, that is what that is called' effect on things I had already been writing, sometimes well and sometimes awkwardly. Every time I skimmed a chapter I ended up recognizing the shape in my own code before I finished reading it. The creational chapters were the loudest case - Factory Method, Abstract Factory, Builder, Prototype, Singleton - I had variants of all of those already scattered through my codebases, just without the names. My day job is Python with a lot of Django and async work, and I saw Strategy hiding in most of my service-layer code, Factory Method behind half my 'build the right client for this env' helpers, Observer in every event bus I have ever bolted on, and Decorator lurking inside every retry wrapper. Naming them did not change the code - but it changed how I talk about the code, and that has downstream effects."
    image: "https://res.cloudinary.com/djadfridw/image/upload/v1777055535/Desing_patterns_shvets_karnas_dev_2_xipmm3.png"
    list:
      - "Strategy - anywhere I pass in a 'how to' function or class"
      - "Factory Method - env-aware client builders, test doubles, plugin loaders"
      - "Observer - event buses, signal handlers, domain-event dispatch"
      - "Decorator - retry, timeout, caching, logging wrappers"
      - "Adapter - every time I wrap a third-party SDK behind our own interface"
      - "Facade - the single import that hides a messy subsystem from the rest of the app"

  - title: "Why this matters more, not less, in the AI era"
    content: "The cheap take is that design patterns are less relevant now because AI can generate the scaffolding. The opposite is true. When you can produce code quickly, the bottleneck moves from typing to *deciding* - deciding boundaries, deciding abstractions, deciding which variation to make easy and which to make hard. Patterns are the shortest shared vocabulary for that deciding. When I prompt Claude with 'use a Strategy so the payment provider is pluggable' instead of 'make the payment logic flexible,' I get an order-of-magnitude better result, because the model knows the shape of a Strategy pattern and it also knows what *not* to do (coupling, hard-coded branching, leaking provider specifics). Pattern vocabulary is prompt leverage. It also makes the assistant's output easier to review - once you see Factory Method, you know what to check for."
    list:
      - "Patterns are a shared vocabulary - you, your team, your assistant, all on the same page"
      - "Better prompts - 'wrap this in an Adapter' beats 'make this flexible' every time"
      - "Faster code review of AI output - you recognize the shape before reading every line"
      - "Better judgement on when *not* to apply a pattern - the book is explicit that YAGNI still wins"

  - title: "The illustrations and analogies - why they stick"
    content: "Every pattern opens with a real-world analogy, illustrated. Builder is a burger with optional toppings. Proxy is a magazine subscription you do not want to handle directly. Mediator is airport air traffic control. Composite is a box containing smaller boxes containing products. These are the kind of analogies that survive being retold at a whiteboard a year later, and that is the test that matters. Pattern names are forgettable on their own - 'Chain of Responsibility' is a long mouthful - but 'the tech-support escalation ladder' is not. The book gives each pattern a hook you can actually hold onto."

  - title: "How I am using it day to day"
    content: "Honest truth - I am not reading this book cover to cover and I do not think that is how it wants to be read. I have it as a PDF in my BookFusion library - usually on my trusty Boox Palma via the BookFusion Android app, sometimes on my phone, and straight in the browser when I am at the desk on Linux - and the way it actually fits into my work is as a reference I pull from in short bursts. Before starting a non-trivial feature I read the relevant chapter - Strategy before a new pluggable-provider feature, Observer before a new event-driven flow, State before anything with a non-trivial state machine. After a PR, if I named a pattern, I re-read the pros/cons section to double-check I am not paying for flexibility I will not use. The 'Relations with Other Patterns' sections are the single most useful part for a working developer - they answer the question 'I have a Strategy, should it also be a Command' faster than any Stack Overflow thread."
    list:
      - "Read the relevant chapter *before* a feature, not after"
      - "Re-read pros/cons after a PR to audit yourself"
      - "'Relations with Other Patterns' - the sections I hit the most"
      - "Keep the cheat sheets open on a second monitor during architecture conversations"
    links:
      - link: "https://refactoring.guru/design-patterns/cheatsheets"
        short_link: "refactoring.guru/design-patterns/cheatsheets"

  - title: "What I would change or watch out for"
    content: "Two mild caveats. First, the book is unapologetically object-oriented - if you live in a strictly functional world, several chapters will feel like solutions to problems you do not have (Strategy is a function, Command is a closure, Observer is a subscription). Second, a handful of patterns - Singleton in particular - are presented more even-handedly than they deserve in a modern codebase; treat them as history, not as endorsement. Neither of these is a reason not to read the book, but both are worth keeping in mind. The principles chapter travels well across paradigms; the catalog is firmly OO."

  - title: "Who it is for"
    content: "Anyone who writes code professionally and has not yet sat down with a real patterns book. Mid-level developers will get the most from it - you will recognize things you have already built and finally have names for them. Senior developers will get a refresher and a shared-vocabulary upgrade. Juniors can read it too, but I would put the Odin Project or a language course first - you need enough code under your belt to have opinions before the pros/cons sections land. It is also the book I would hand to someone on my team who is starting to make architecture calls and needs a baseline we can argue from."

  - title: "Summary"
    content: "Dive Into Design Patterns is the version of the Gang of Four book I wish I had opened first. Shvets's illustrations, analogies, and problem-first framing turn a dry canon into something you can actually absorb a chapter at a time. I am not pretending I have read every word of it - I have read the principles chapter closely and kept returning to the pattern chapters that fit whatever I am building that week, and that is exactly the use it rewards. In an era where AI writes more of my code than I do, the book's real value is not teaching me patterns - it is giving me the vocabulary to decide architecture, prompt assistants, and review generated code faster. It is the best $20ish I have spent on a developer book in years, and it is the one I am going to keep open in a split pane for the next decade of work."
    links:
      - link: "https://refactoring.guru/design-patterns/book"
        short_link: "refactoring.guru/design-patterns/book"
      - link: "https://refactoring.guru/design-patterns"
        short_link: "refactoring.guru/design-patterns"
      - link: "https://refactoring.guru/design-patterns/cheatsheets"
        short_link: "refactoring.guru/design-patterns/cheatsheets"
---

I have been sending people to Refactoring.Guru for years. This year I finally bought the book version and actually started using it - not as a novel to finish, but as a shelf I pull from when the question comes up. Below is the honest review of what has landed for me so far, plus the reason I now think a solid grip on design patterns matters more in the AI era, not less.
