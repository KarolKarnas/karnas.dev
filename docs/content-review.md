# Portfolio content review

## Positioning

**Full-stack Engineer**

**From client requirements to production.**

**Backend systems · Modern interfaces · AI integrations**

The profile covers client conversations, interface and backend implementation,
integration work, testing, and delivery. Python and Django remain a strong
foundation alongside TypeScript, React, and Next.js. Data analysis is retained
where relevant to a project or skill rather than presented as a separate service
in the primary headline.

`src/utils/profile.ts` holds shared role and profile copy. Home, About, Skills,
Contact, sidebar, author footer, metadata, project lists, and terminal responses
have been brought into alignment.

## Evidence and boundaries

The scope is based on the author's description of their work and a review of
their local commit history and representative changes in the client workspace.
Examples include connected Next.js portal and Django questionnaire work,
document-upload behavior, reporting, integration mappings, regression tests,
and supporting Docker and pipeline configuration.

- DMS now describes the verified full-stack scope. The team platform and the
  author's contribution are separate subjects.
- Data Bid Machine retains its backend role. A full-stack profile does not
  mean every engagement needs to be described as full-stack work.
- C# and .NET are not presented as the author's skills. AI-assisted changes in
  that ecosystem do not establish language proficiency.
- No seniority, performance gains, client outcomes, or delivery metrics have
  been invented. Unsupported scale and psychological-understanding claims
  have been removed from the independent recommendation projects.
- AI assistance is mentioned briefly in About, with decisions, review, and
  verification remaining the engineer's responsibility. Herdr and the custom
  orchestrator are reserved for a possible separate article.

## Projects reviewed

| File | Editorial focus |
| --- | --- |
| `_professional/dms-housing-authority.md` | Resident portal, Django rules and APIs, document flows, integration work, and verification across the feature |
| `_professional/data-bid-machine.md` | Backend contribution connected to reporting and strategist workflows; clear boundary around the role |
| `_projects/brain-karolkarnas-com.md` | Product ownership across recommendations, data, interface, localization, and background work; qualified similarity claims |
| `_projects/card-piper-com.md` | React and NestJS application work; recommendation model described as an experiment |
| `_projects/ilustrografia-com.md` | Storefront, product variants, checkout, API, administration, and testing; concise project language |
| `_projects/karnas-dev.md` | Current workspace behavior, content pipeline, accessibility, and maintenance; historical screenshots identified |

## Posts reviewed

Technical subjects and the original learning history remain intact. Personal
introductions and conclusions connect each subject to the author's wider scope
without turning every review into a services pitch.

| File | Editorial focus |
| --- | --- |
| `_posts/claude-code-in-action.md` | Context, scoped implementation, and verification across an application |
| `_posts/coding-with-ai-traversy.md` | Requirements, product concerns, and delivery around an AI-assisted build |
| `_posts/design-patterns-shvets.md` | Shared design vocabulary across Python and TypeScript; judgment about abstractions |
| `_posts/designing-data-intensive-applications-kleppmann.md` | Data guarantees connected to interface behavior and user expectations |
| `_posts/exercism.md` | Python, JavaScript, and TypeScript practice alongside full-stack work |
| `_posts/fluent-python-ramalho.md` | Python depth within a broader engineering role |
| `_posts/full-stack-open-core.md` | Historical course experience connected to the first complete e-commerce application |
| `_posts/full-stack-open-supplementary.md` | TypeScript contracts and relational data across frontend and backend |
| `_posts/hands-on-large-language-models-alammar.md` | Model foundations and product integration; distinct roles for coding assistance and application AI |
| `_posts/odin-foundation-course.md` | Early learning stage preserved; enduring investigation and implementation habits |
| `_posts/pentester-course.md` | Security awareness in application development, without claiming a pentesting specialization |
| `_posts/soft-skills-sonmez.md` | Client communication, scope, expectations, and engineering responsibility |

Original publication dates, slugs, navigation labels, certificates, image URLs,
and external links are preserved. This is an editorial and positioning review;
older course instructions and third-party book details have not been rechecked
against their latest editions or tool releases.

## Validation

- All 18 content files pass their Zod schemas. Comparison with the previous
  commit confirms the original dates, navigation identifiers, author names,
  covers, image links, certificates, and external links are retained.
- The production build generates all 56 routes. Copy checks cover Home, About,
  Skills, Contact, both professional projects, and representative embedded pages.
- Terminal `whoami`, `skills`, and `cat about` return the updated profile.
- All 11 existing tests pass. TypeScript and lint for the 16 modified TypeScript
  files pass without errors or warnings.
- Live browser inspection was unavailable during this review. Generated HTML
  checks confirm content, rather than visual layout or interactive behavior.
