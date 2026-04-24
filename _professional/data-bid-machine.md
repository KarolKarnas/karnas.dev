---
author_name: Karol Karnas
title: "Data Bid Machine"
sub_title: "AI-driven bid management and campaign intelligence for Google Ads - Django, Celery, OpenAI, sentence-transformers on AWS."
content_title: "What it is"
main_image: "/aws.svg"
main_icon: "python"
stack:
  - "Python"
  - "Django"
  - "Celery"
  - "OpenAI"
  - "Pandas"
icons_stack:
  - "python"
  - "django"
  - "celery"
  - "postgres"
  - "redis"
  - "openai"
  - "pandas"
  - "pytest"
  - "docker"
  - "aws"
live_demo: "https://databidmachine.com/"
fields:
  - title: "Role"
    content: "Python Backend Engineer on a long-running client engagement. I contribute across the whole backend - data pipelines, Celery orchestration, LLM-powered recommendations, and performance analytics - with a focus on keyword reporting, budget pacing, and the AI recommendation layer."
    list:
      - "Designed and shipped the budget-pacing monitoring pipeline that flags campaigns trending over or under spend thresholds"
      - "Modernised the keyword reporting stack - performance tiers, dominator logic, action columns, confidence levels, funnel-aware attribution"
      - "Integrated funnel-waste and expensive-converter detection, wiring keyword → lead → MQL → SQL attribution into the recommendation engine"
      - "Owned performance-critical query optimisations on time-series campaign/keyword trend services"
      - "Built LLM recommendation pipelines - Gemini 2.5-flash / GPT-4o with Pydantic-validated JSON outputs and deterministic temperature settings"
      - "Hardened the AI recommendation scoping, null-guards, and campaign-status synchronisation across multi-tenant accounts"

  - title: "The problem"
    content: "Paid-search teams managing dozens to hundreds of Google Ads accounts cannot manually monitor every campaign, spot anomalies, and prune underperforming keywords at scale. Budget pacing slips unnoticed, bad keywords burn spend for weeks, and strategic insight gets lost in dashboards. Data Bid Machine is the engine that watches every account continuously - detecting anomalies, proposing bid and keyword changes, and pushing approved mutations back to Google - so human strategists stay focused on strategy rather than triage."

  - title: "Architecture"
    content: "A Django 4.1 + DRF backend running in AWS ECS, with Celery workers processing the scheduled engine on a Redis broker and a PostgreSQL 17 data layer. The service talks to the Google Ads API v14 in both directions - pulling daily metrics and pushing bid, pause, and keyword mutations back. The system is sharded per-customer with encrypted OAuth tokens, and the engine runs as a set of cron-scheduled Celery beat jobs that rollup, analyse, and alert nightly. The frontend (a separate React + TypeScript dashboard) consumes a REST API exposing 40+ endpoints for analytics, recommendations, keywords, bidding, audit, and a conversational LLM chat."

  - title: "Data and AI pipeline"
    content: "The recommendation pipeline is the heart of the product. Each weekly run extracts 30-day and 14-day performance windows per campaign, aggregates daily metrics, keyword performance, and conversion funnel data into a Pandas frame, and sends a structured prompt to Gemini 2.5-flash (with GPT-4o fallback). The LLM returns a typed JSON payload - anomaly list, root causes, keyword pause/monitor/add actions, and new keyword ideas with estimated first-month value - validated with Pydantic, persisted as AiCampaignRecommendation rows, and fed into the dashboard. A parallel keyword-planner path uses sentence-transformers (all-MiniLM-L6-v2) to compute semantic similarity between proposed keywords and the customer's top performers, filtering noise before it reaches the user. Alongside the LLM layer, a conventional rules engine handles runaway keywords, duplicate and negative conflicts, single-broad-match pruning, and bidding recommendations."

  - title: "Scale and orchestration"
    content: "Celery beat publishes ten-plus scheduled jobs per day - engine runs, rollup alerts, pacing monitors, hourly keyword resync to Google, weekly AI recommendations, weekly asset recommendations. Each task runs per-customer and fans out across thousands of campaigns and keywords. The keyword planner embeds similarity in-memory on CPU; heavy analytical queries are cached in Redis. Deployments are tag-driven: push a git tag to trigger the staging ECS rollout, and a manual GitHub Actions workflow dispatch for production."

  - title: "What I own day-to-day"
    content: "Keyword report services, campaign trend analytics, funnel-aware recommendation logic, budget-pacing monitoring, and the AI recommendation scoping and safety layer. Most of my work sits at the intersection of Django ORM optimisation, Celery task design, multi-dimensional data aggregation, and careful LLM integration - schema validation, null-safety, retry policy, and keeping the recommendations grounded in the customer's actual data rather than the model's priors."

  - title: "Tech stack"
    list:
      - "Python 3.10, Django 4.1, Django REST Framework"
      - "Celery 5 with Redis broker, celery-beat scheduler"
      - "PostgreSQL 17"
      - "OpenAI SDK (Gemini, GPT-4o) with Pydantic response parsing"
      - "sentence-transformers (all-MiniLM-L6-v2) for semantic similarity"
      - "Pandas / NumPy for time-series aggregation"
      - "Google Ads API v14"
      - "Docker, AWS ECS, GitHub Actions CI/CD"
      - "pytest, Ruff, pre-commit hooks"

category: "Backend"
tags:
  - "Python"
  - "Django"
  - "Celery"
  - "OpenAI"
  - "Pandas"
  - "AWS"
  - "AI Pipelines"
date: "2024-09-01"
nav_title: "data_bid_machine.py"
nav_icon: "python"
---

Data Bid Machine is a production SaaS platform that turns Google Ads accounts into a continuously-monitored, AI-advised system. It combines rules-based detection, LLM-generated insight, and semantic filtering - running on Django, Celery, and AWS - to surface the campaigns and keywords that need attention without asking a human to look at them first.
