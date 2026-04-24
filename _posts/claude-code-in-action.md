---
author_name: "Karol Karnas"
title: "Claude Code in Action by Anthropic"
sub_title: "A short course that structurized my take on Claude Code"
content_title: "From ad-hoc prompting to an actual workflow"
main_image: "https://res.cloudinary.com/djadfridw/image/upload/v1776889684/Karol_Karnas_Claude_in_Action_Course_lg6k1y.jpg"
category: "AI"
tags: ["Claude Code", "Anthropic", "AI", "MCP", "Hooks"]
icons_stack:
  - "claude"
date: "2026-02-22T10:00:00.322Z"
nav_title: "claude_code_in_action.ai"
nav_icon: "claude"
fields:
  - title: "The overview"
    content: "Claude Code in Action is a free, official course from Anthropic Academy. It is short - 21 lessons, roughly an hour of video, one quiz, and a certificate at the end - but dense. It walks through Claude Code end-to-end across four sections: what a coding assistant is, getting hands-on, hooks and the SDK, and a wrap-up. I had already been using Claude Code daily for months, so the value for me was less about learning something brand new and more about putting my scattered, self-taught habits into a clear mental model."
    image: "https://res.cloudinary.com/djadfridw/image/upload/v1776892523/Claude_in_Action_course_alggpb.png"
    links:
      - link: "https://anthropic.skilljar.com/claude-code-in-action"
        short_link: "anthropic.skilljar.com/claude-code-in-action"
      - link: "https://claude.com/product/claude-code"
        short_link: "claude.com/product/claude-code"

  - title: "Why I took it"
    content: "I use Claude Code every day - this very blog is partly built with it. But most of what I knew came from trial and error, random Twitter threads, and the official docs read in a hurry. I wanted to see how Anthropic themselves frame the tool: what they consider the core primitives, what they call best practice, and whether my habits matched or diverged from that. A one-hour course from the people who built it felt like the fastest way to close that gap."

  - title: "How a coding assistant actually works"
    content: "The first real lesson is not about Claude Code - it's about the loop behind any coding agent. Give it a task, and it goes through three steps: gather context (which files matter, what does the error mean), formulate a plan (what to change, how to verify), and take action (edit files, run commands). The trick is that a raw language model can only process and return text - it cannot read files or run anything. Tool use bridges that gap: the harness injects instructions teaching the model how to request an action, the model returns a structured call like 'ReadFile: main.go', the harness actually runs it and feeds the result back. Everything the agent does is a tool call. Your job as a user is to shape the context so the next tool call is the right one."
    list:
      - "Language models by themselves can only handle text - tools are what make them agents"
      - "Claude's models are particularly strong at tool use, which lets Claude Code stay extensible and skip whole-codebase indexing"
      - "A prompt is not a question - it is the opening move in a loop where the model chooses what to read, what to run, and when to stop"

  - title: "Context - /init, CLAUDE.md, @ mentions"
    content: "This section was the biggest mindset shift. Context is a budget, not a bucket - too much irrelevant context actually hurts performance. The course teaches three primitives for managing it, and I was only using one of them well."
    list:
      - "/init - Claude analyzes the whole codebase and writes a CLAUDE.md summarizing purpose, architecture, key commands, and conventions"
      - "CLAUDE.md lives in three places: project-level (committed, shared with the team), CLAUDE.local.md (personal, not committed), and ~/.claude/CLAUDE.md (global across all your projects)"
      - "The # shortcut enters 'memory mode' - type `# Use comments sparingly. Only comment complex code.` and Claude merges it into the right CLAUDE.md for you"
      - "@ mentions - pull a specific file into the conversation on demand (`@auth` surfaces a picker for auth-related files). Works inside CLAUDE.md too, so a line like 'The database schema is in @prisma/schema.prisma' loads the schema into every request automatically"
    second_content: "After the course I rewrote my CLAUDE.md for this project to be leaner and more actionable, split long context into topical files under context/, and started reaching for @ mentions instead of describing files in prose."

  - title: "Making changes - screenshots, Plan Mode, Thinking Mode"
    content: "The 'Making changes' lesson surfaced a detail I had missed: you paste screenshots into Claude Code with Ctrl+V (not Cmd+V on macOS, even). That alone fixed how I communicate about UI bugs. On top of that, two modes that I had been using inconsistently finally clicked."
    list:
      - "Plan Mode (Shift+Tab twice) - Claude explores the codebase, writes a detailed plan, and waits for approval before touching anything. Best for multi-file changes or anything architectural."
      - "Thinking Mode - triggered by keywords in your prompt: 'think', 'think more', 'think a lot', 'think longer', 'ultrathink'. Each level gives the model progressively more reasoning tokens. Best for hard bugs and tricky logic, not exploration."
      - "Combine both when a task needs breadth and depth. Both cost tokens, so reach for them on purpose, not by default."

  - title: "Controlling context - Escape, /compact, /clear"
    content: "Four keyboard-level tools for steering a long session, all of which I underused."
    list:
      - "Escape - interrupts Claude mid-response. Use it the moment the agent is heading the wrong way, then correct course. Pairs perfectly with the # shortcut: Escape, then `# do X instead of Y`, locks the correction in for future sessions too."
      - "Double Escape - rewinds the conversation to any earlier message. Lets you keep Claude's hard-won understanding of the codebase while dropping the noisy debugging detour that got you there."
      - "/compact - summarizes the conversation while preserving what Claude learned. Ideal when moving to a related task after a long thread."
      - "/clear - nukes everything. Ideal only when the next task is genuinely unrelated."

  - title: "Custom slash commands"
    content: "Slash commands live as markdown files in .claude/commands/ and are just parameterized prompts. The filename becomes the command - audit.md becomes /audit. Restart Claude Code after adding one. You can take a string argument with the $ARGUMENTS placeholder, so a write_tests.md file starting with `Write comprehensive tests for: $ARGUMENTS` becomes `/write_tests the use-auth.ts hook`. This was the 'oh, that's it?' moment of the course - I had been pasting the same prompts over and over when I could have codified them once."
    list:
      - "File: .claude/commands/<name>.md - the filename is the command name"
      - "$ARGUMENTS gets replaced with whatever you pass after the slash command"
      - "Great for repetitive workflows: /audit for dependency scans, /write_tests, /review - all project-specific, all committed with the repo"

  - title: "MCP servers - extending Claude Code"
    content: "Model Context Protocol lets Claude Code call external tools through a standard interface. The course demos Playwright, and that alone was worth the hour. Install it once with `claude mcp add playwright npx @playwright/mcp@latest` and Claude gains a real browser. To stop the permission prompt every call, add `mcp__playwright` (note the double underscores) to the `allow` array in .claude/settings.local.json. I actually used the Playwright MCP to read this very course page while writing this post. The lesson also shows a nice trick: have Claude open your app, look at the generated output, and rewrite its own generation prompt based on what it sees - closing the loop between code and the visual result."
    links:
      - link: "https://modelcontextprotocol.io/"
        short_link: "modelcontextprotocol.io"

  - title: "GitHub integration"
    content: "Run /install-github-app and Claude walks you through installing the GitHub app, adding your API key, and opening a PR that drops two workflow files into .github/workflows. Once merged you get two behaviors: mention @claude in any issue or PR and it plans a task, executes it against your repo, and replies inline. Every new PR gets a detailed automatic review. The workflow YAML is customizable - you can add setup steps, pass custom_instructions (project context, localhost URLs, log file paths), wire in mcp_config for MCP servers, and list allowed_tools explicitly. One gotcha the course stresses: in GitHub Actions, every MCP tool must be listed individually in allowed_tools. There is no shortcut like there is locally."

  - title: "Hooks - the part I had never touched"
    content: "Hooks are shell commands Claude Code runs automatically around tool calls. Unlike CLAUDE.md instructions, hooks execute deterministically - the harness runs them, not the model. There are two kinds, configured in the same three locations as CLAUDE.md (global, project, project-local)."
    list:
      - "PreToolUse - runs before a tool executes, gets the pending tool call as input, and can allow it, block it, or return an error message to Claude"
      - "PostToolUse - runs after execution. Can't undo the call but can trigger follow-ups (formatters, linters, tests) or feed extra information back to Claude"
      - "Matchers target specific tools: `Read`, `Write|Edit|MultiEdit`, etc."
      - "Configure via the /hooks command inside Claude Code, or edit settings.json by hand"
    second_content: "Two real hook examples from the course that I am stealing: (1) a PostToolUse hook on Write|Edit|MultiEdit that runs `tsc --noEmit` and feeds any type errors back to Claude, which closes the gap where Claude updates a function signature but misses a caller. (2) A hook on changes inside a queries/ directory that spawns a second Claude instance via the SDK to review whether the new query duplicates an existing one - a second pair of eyes for a consistency-critical folder."

  - title: "Hook gotchas"
    content: "The course's 'Gotchas' lesson is worth a bookmark. Anthropic recommends absolute paths for hook scripts (to prevent path-interception / binary-planting attacks), but that makes .claude/settings.json impossible to share across machines where the project lives in different directories. Their workaround is a committed settings.example.json using a $PWD placeholder plus a setup script (init-claude.js) that resolves it and writes settings.local.json on first install. It is a simple pattern but one I would not have invented on my own."

  - title: "The Claude Code SDK"
    content: "The SDK lets you run Claude Code programmatically from TypeScript, Python, or the CLI. Same agent, same tools, same settings as your terminal session - just embedded into a script. By default the SDK runs read-only; opt into writes with `allowedTools: ['Edit']` in the query options, or configure it in settings. The typical use is inside another hook: one Claude instance reviews or validates what another just did. It also opens the door to git hooks that review diffs, CI/CD quality gates, and automated doc generation - any pipeline step where a deterministic script is not expressive enough but a full interactive session is too much."
    list:
      - "Package: @anthropic-ai/claude-code (TypeScript), Python SDK, and CLI bindings"
      - "Inherits settings from the .claude directory it runs in"
      - "Read-only by default - an intentional safety floor"
      - "Pairs naturally with hooks: PostToolUse hook → SDK call → feedback to main session"

  - title: "What I already knew but now use better"
    content: "Most individual pieces were not new. I knew about CLAUDE.md, slash commands, and MCP. What the course did was connect them into one coherent workflow - context in, plan first, tools in the loop, hooks for guarantees, MCP for reach, SDK for composition, slash commands for repetition. Before the course my usage was reactive: type a prompt, see what happens, correct course. After the course it is more deliberate: shape the context, pick the mode, let the loop run, and only intervene when the plan needs to change. Escape and double-Escape went from buttons I rarely pressed to the main way I steer a session."

  - title: "Summary"
    content: "An hour well spent. If you have never used Claude Code, this is the best on-ramp I know of. If you already use it daily, it is still worth the time - it gave me a vocabulary and a mental model that I was missing, and a few features (hooks, the SDK, and the $PWD trick in particular) that I had simply ignored. The course is free, the certificate is nice to have, but the real takeaway is that Claude Code rewards users who treat it as a system to configure, not a chatbot to prompt."
    image: "https://res.cloudinary.com/djadfridw/image/upload/v1776889684/Karol_Karnas_Claude_in_Action_Course_lg6k1y.jpg"
    links:
      - link: "https://anthropic.skilljar.com/claude-code-in-action"
        short_link: "anthropic.skilljar.com/claude-code-in-action"
      - link: "https://docs.claude.com/en/docs/claude-code/overview"
        short_link: "docs.claude.com/en/docs/claude-code"
---

I have spent the last few months leaning on Claude Code for nearly everything I build - this portfolio, my notes, small scripts, refactors on larger projects. At some point the tool stopped being a novelty and became part of how I work. But my habits around it were accidental, picked up one blog post and one failed prompt at a time. Anthropic's short official course gave me the structure I didn't know I needed - and a couple of features I had never even tried.
