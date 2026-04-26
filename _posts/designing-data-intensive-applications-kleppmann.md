---
author_name: "Karol Karnas"
title: "Designing Data-Intensive Applications by Martin Kleppmann"
sub_title: "Why the Wild Boar book is the system-design primer I keep open beside my AI assistant"
content_title: "Kleppmann's DDIA as the vocabulary for deciding architecture, not just generating code"
main_image: "https://res.cloudinary.com/djadfridw/image/upload/v1777054010/Designing_Data-Intensive_Applications_Kleppmann_Karnas_Dev_nqs5wh.png"
category: "Books"
tags: ["Distributed Systems", "Databases", "Architecture", "Scalability", "Reliability", "AI"]
icons_stack:
  - "postgres"
  - "redis"
  - "sql"
date: "2025-10-21T12:00:00.322Z"
nav_title: "designing_data_intensive_apps.epub"
nav_icon: "epub"
fields:
  - title: "The overview"
    content: "Designing Data-Intensive Applications - DDIA, or 'the wild boar book' after its O'Reilly cover animal - is Martin Kleppmann's now-classic tour of how modern data systems actually work underneath the marketing. It covers reliability, scalability, maintainability, storage engines, encoding and evolution, replication, partitioning, transactions, consistency and consensus, batch and stream processing, and closes with a chapter on the future of data systems. The first edition shipped in 2017 and the heavily updated second edition - co-authored with Chris Riccomini - is now in O'Reilly's Early Release programme, folding in a decade of hard-won lessons from the cloud, streaming, and now AI era. It is roughly 600 pages, dense but unusually readable, and it is probably the single most recommended book in backend engineering."
    links:
      - link: "https://dataintensive.net/"
        short_link: "dataintensive.net"
      - link: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321"
        short_link: "amazon.com/Designing-Data-Intensive-Applications"

  - title: "Why I picked it up now"
    content: "I have had DDIA in my ebook library for years and dipped into it the way most people do - a chapter before a migration, a section the night before a system design interview. What changed recently is how much of the *code* in my life is written by an assistant. I spend far less time writing SQL and Python and far more time deciding what data flows where, which store owns what invariant, how much staleness a read can tolerate, whether an outbox is worth the complexity. Those are the exact questions DDIA is about. I have been working through the chapters that map to what I am actually building, not front-to-back - the bottleneck in my work has moved from implementation to architectural judgement, and DDIA is the closest thing we have to a canonical textbook for that kind of judgement."

  - title: "The author and why he is worth reading"
    content: "Martin Kleppmann is a researcher at the University of Cambridge and previously an engineer at LinkedIn (where he worked on Samza and Kafka-adjacent infrastructure) and before that at Rapportive and Go Test It. He does not write from the position of a vendor evangelist - he writes from the position of someone who has read the papers, built the systems, and then spent years translating between those two worlds. The second-edition Early Release adds Chris Riccomini, formerly of WePay and LinkedIn, who brings a modern take on data platforms, lakehouses, and the cloud-native reality most of us now ship into. The combined voice is exactly what you want - academic rigor plus production scar tissue."
    list:
      - "Martin Kleppmann - Cambridge researcher, ex-LinkedIn distributed-systems engineer"
      - "Chris Riccomini - ex-LinkedIn, ex-WePay, data platforms author and co-author of the 2nd edition"
      - "The book credits an enormous cast of reviewers - this is one of the most peer-reviewed tech books in the last decade"
      - "Website: dataintensive.net - with the famous map of distributed-systems terrain on the cover"

  - title: "Structure - three parts, each worth the price"
    content: "The book is split into three big parts and a conclusion. Part I - Foundations of Data Systems - sets the conceptual baseline: what reliability, scalability and maintainability actually mean, how storage engines work, how encoding formats evolve, and how data models map to queries. Part II - Distributed Data - is the hard middle: replication, partitioning/sharding, transactions, the limits of distributed systems, consistency and consensus. Part III - Derived Data - unifies batch and stream processing into a single mental model (every database is a kind of cache of a stream of events) and closes on a genuinely philosophical chapter on the future of data. The Early Release of the second edition threads cloud-native architectures, lakehouses, and AI-assisted systems through all three parts, but the bones are the same."
    image: "https://res.cloudinary.com/djadfridw/image/upload/v1777054010/Designing_Data-Intensive_Applications_Kleppmann_Karnas_Dev_nqs5wh.png"
    list:
      - "Part I - Foundations - reliability/scalability/maintainability, storage engines, encoding, data models"
      - "Part II - Distributed Data - replication, partitioning, transactions, consistency, consensus"
      - "Part III - Derived Data - batch processing, stream processing, the unifying view"
      - "Conclusion - 'the future of data systems' - the most opinionated chapter and the one I reread most"

  - title: "Why this is *the* architecture book for backend engineers"
    content: "There are plenty of system design books. Most of them teach you how to draw boxes on a whiteboard that will pass an interview. DDIA teaches you why the boxes are shaped the way they are. It is the only book I know that takes you all the way from 'how does a B-tree page split' up to 'why is exactly-once delivery a lie without idempotent consumers' without losing the thread. Reviewers on Goodreads, the Pragmatic Engineer newsletter, and basically every 'books every backend engineer should read' list land on the same praise: Kleppmann makes consistency models, replication strategies and stream processing paradigms feel obvious in retrospect, and he is honest about the trade-offs. That honesty is the thing. DDIA is not a sales pitch for any technology - it is a tour of the trade-off space with the prices written clearly on each option."
    list:
      - "Problem → model → trade-offs framing on every chapter - no silver bullets"
      - "Dense with references to the original papers - treats you like an adult who might want to read further"
      - "'Literature review' sections end each chapter - the curated reading list alone is gold"
      - "Opinionated but not preachy - Kleppmann takes positions and tells you where reasonable people disagree"

  - title: "The reliability/scalability/maintainability chapter is worth the price on its own"
    content: "Before any databases or distributed systems, the book spends the first chapter defining three words that get thrown around constantly: reliable, scalable, maintainable. Reliable means 'continues to work correctly, even when things go wrong' - and Kleppmann is careful to distinguish faults from failures, and hardware faults from software faults from human error. Scalable is not a property a system has - it is a conversation about load parameters, throughput, and tail latency percentiles (you will never write p95 casually again after this chapter). Maintainable is split into operability, simplicity and evolvability. If someone read only Chapter 1 of DDIA and never went further, they would already argue about systems more precisely than most engineers do. It is the vocabulary chapter, and the whole rest of the book depends on it."
    list:
      - "Reliability - fault vs failure, fault-tolerance as a property you design for, not hope for"
      - "Scalability - 'load parameters' and tail latency, not a hand-wavy adjective"
      - "Maintainability - operability, simplicity (managing complexity), evolvability"
      - "These three words become the axes you compare every architecture on for the rest of your career"

  - title: "Concepts I now see in the systems I build"
    content: "Like the best textbooks, DDIA works as a giant 'oh, that is what that is called' experience. I had built things that were implicitly log-structured storage, accidentally event-sourced, haphazardly idempotent - and the chapters I worked through gave me the names and the boundaries. My day-to-day is Django with Postgres, Celery with Redis, some Kafka-shaped event flow for the AI pipelines. With the vocabulary in hand, I can finally name the shapes we have assembled: an outbox pattern stitched on top of a transactional DB, read replicas producing eventual-consistency anomalies we had been handling by hope, a retry pipeline that is only safe because every consumer happens to be idempotent. Naming these did not change the systems - but it changed the conversations about them, which is the first step to changing them well."
    list:
      - "Log-structured storage - the mental model behind every append-only pipeline I have written"
      - "Outbox pattern - the only sane way to keep a DB write and a published event in sync"
      - "Idempotency and effectively-once - the thing that actually saves you, not 'exactly-once delivery'"
      - "Read-your-writes and monotonic reads - the anomaly classes your users will report as 'it is broken'"
      - "CDC / change data capture - how to treat a database as a stream without bolting on a second system"
      - "Lambda / Kappa (now just 'unified batch+stream') - the shape most modern data pipelines converge on"

  - title: "Why this matters more, not less, in the AI era"
    content: "Wittgenstein wrote 'the limits of my language mean the limits of my world,' and nothing I have read about AI-assisted development has made that feel more concrete. The naive take is that architecture books matter less now because an AI can scaffold a service in minutes. The exact opposite is true. When the cost of generating code collapses, the residual cost is entirely in *deciding what to generate*: where the boundaries are, which invariants the database owns, which ones the application owns, what staleness is acceptable, what happens on partial failure. Those are DDIA questions. When I prompt Claude with 'put the outbox in the same transaction as the order write and use CDC to publish to the bus' instead of 'make sure the event gets sent,' I get a dramatically better result - because the model has the same vocabulary Kleppmann is teaching me. Architectural vocabulary is prompt leverage. It also makes review tractable: once you see 'this is a read-your-writes problem on a replica,' you stop re-reading the whole diff and you go check the one thing that matters. Kleppmann has been public about another AI-era angle too - giving agents a database as common ground, with well-defined APIs as the surface the AI is allowed to touch, so humans and agents can cooperate safely. That framing is going to shape a lot of systems in the next few years."
    image: "https://res.cloudinary.com/djadfridw/image/upload/v1777054446/DDIA_Karnas_dev_wpqivi.png"
    list:
      - "Shared vocabulary for you, your team, and your assistant - one prompt instead of three"
      - "Better prompts - 'idempotent consumer with an outbox' beats 'make it reliable' every time"
      - "Faster review of AI output - you check the consistency and failure modes, not the line noise"
      - "A database as a safe surface for AI agents - defined APIs, clear invariants, auditable changes"

  - title: "The diagrams and the map on the cover"
    content: "DDIA is not as visually lush as Shvets's patterns book, but it has its own style. Every chapter opens with a fragment of a hand-drawn map of the 'distributed systems landscape' - the wild boar book cover extended inward - and every tricky concept gets a clean, minimal diagram. Replication topologies, partitioning strategies, serializable isolation levels, the happens-before relation - these are the kinds of things that live or die on a good diagram, and Kleppmann's are excellent. The map metaphor matters too: the book is explicit that the point is to give you a *map* of the terrain, not a set of directions, so that when a new database or stream processor shows up in five years you can place it somewhere you already understand."

  - title: "How I am using it day to day"
    content: "Honest truth - I am not reading DDIA cover to cover, and I do not think it wants to be read that way. It lives as an EPUB in my BookFusion library - usually on my trusty Boox Palma via the BookFusion Android app, sometimes on my phone, and straight in the browser when I am at the desk on Linux - and I treat it as a reference I pull from when the question matches a chapter. Before a non-trivial backend feature I read the relevant chapter - the transactions chapter before anything touching money or inventory, the replication chapter before a read-replica rollout, the stream processing chapter before I design a new pipeline. After a PR that touches data semantics I re-read the consistency sections to double-check which anomaly class I am paying for. The 'Summary' and 'Further Reading' sections at the end of each chapter are the densest parts - I often open those first to remember which trade-offs I should be thinking about before I even open the code."
    list:
      - "Read the relevant chapter *before* a feature, not after the outage"
      - "Use the consistency chapter as a checklist during PR review on replicated systems"
      - "Treat Chapter 1 (reliability/scalability/maintainability) as the vocabulary for all system-design conversations"
      - "Open the 'Further Reading' list whenever a new datastore shows up - it places it on the map"

  - title: "What I would watch out for"
    content: "Two caveats. First, DDIA is genuinely dense - this is a textbook, not a beach read, and certain sections (consensus, serializable isolation) reward a second and third pass with a notebook open. If you expect the ergonomics of a blog post, you will bounce. Second, the book is paradigm-broad but still biased toward the data world Kleppmann came out of - LinkedIn-era Kafka, log-structured everything, event-centric architectures. That bias is mostly a feature in 2025 (the industry bent his way) but if you work in a domain where request/response and a single Postgres are genuinely enough, some of the middle of the book will read as 'problems you do not have yet.' Read it anyway - the foundations chapters and the final 'future of data systems' chapter travel perfectly across contexts."

  - title: "Who it is for"
    content: "Any backend, platform, or data engineer who has not yet read it. Mid-level engineers get the biggest single jump - you will recognize half of what your production systems are doing and finally have vocabulary for it. Senior engineers get a calibration check and a shared language with the rest of their team. Junior engineers can start it, but I would pair it with at least one production outage under the belt - the trade-offs hit harder when you have watched one bite you. It is also the book I hand to anyone starting to make architecture calls on AI-adjacent systems: pipelines, agent memory stores, retrieval layers, evaluation stores. Those are all data-intensive applications, and they all live or die on the trade-offs DDIA teaches."

  - title: "Summary"
    content: "Designing Data-Intensive Applications is the architecture textbook I keep going back to. Kleppmann (and now Riccomini) built something genuinely rare - a book that survives a decade of industry churn because it teaches the trade-off space, not the tools. I am not pretending to have finished every page - I have worked through the chapters that fit what I was building and come back for the next one when the next question showed up, and that is exactly how DDIA pays off. In an era where AI writes more of my code than I do, the real value is not teaching me databases - it is giving me the vocabulary to decide architecture, prompt assistants precisely, and review generated systems where it counts. It is the most load-bearing backend book I own, and the single most useful reference in my 'how should this be shaped' decisions."
    links:
      - link: "https://dataintensive.net/"
        short_link: "dataintensive.net"
      - link: "https://martin.kleppmann.com/"
        short_link: "martin.kleppmann.com"
      - link: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321"
        short_link: "amazon.com/Designing-Data-Intensive-Applications"
---

I have had DDIA in my ebook library for years, but I only really *started using* it this year - working through the chapters that fit what I was actually building, once the bottleneck in my work stopped being 'write the code' and started being 'decide the shape.' Below is the honest review of what has landed for me so far, plus why I think Kleppmann's book matters more in an AI-assisted workflow, not less.
