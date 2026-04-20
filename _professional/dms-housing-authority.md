---
author_name: Karol Karnas
title: "Document Management System"
sub_title: "Multi-tenant document intake, AI classification and OCR for a US public housing authority - Django, Celery, agentic pipelines, Azure."
content_title: "What it is"
main_image: "/azure.svg"
main_icon: "django"
stack:
  - "Python"
  - "Django"
  - "Celery"
  - "Azure OpenAI"
  - "Azure Document Intelligence"
icons_stack:
  - "python"
  - "django"
  - "celery"
  - "postgres"
  - "redis"
  - "openai"
  - "azure"
  - "docker"
  - "tailwind"
  - "pytest"
  - "playWright"
fields:
  - title: "Role"
    content: "Python Backend Engineer on a long-running client engagement for a US public housing authority. I contribute across Django apps, the agentic document-processing pipeline, caseworker-facing dashboards, and integration points - with a focus on data validation, metrics and reporting, and admin UX refinements."
    list:
      - "Owned the Yardi diff-highlighting service - detecting and surfacing field changes between our tenant records and the property-management system on import"
      - "Extended the recertification status machine with caseworker-completion states and inline approve/decline toggles"
      - "Shipped dashboard tiles and metrics for case-load distribution, validator error rates, and approved/declined month-to-date counts"
      - "Tightened validation rules across age/effective-date calculations, family-member naming, and document-type filtering"
      - "Refactored service-layer helpers to reduce duplication across recertification, document, and metric flows"
      - "Stabilised flaky tests and hardened factory patterns for metric seeding and rent calculation"

  - title: "The problem"
    content: "A US public housing authority manages the annual and interim recertification lifecycle for thousands of households - each cycle requiring income, asset, identity, and expense documentation that must be classified, read, validated, and converted into a HUD-compliant rent calculation. Done by hand, the process is slow, paperwork-heavy, and error-prone. DMS is the platform that ingests documents, classifies and extracts them with an LLM-driven agentic pipeline, validates the extracted data against domain rules, and moves households through review, sign, caseworker approval, and Yardi sync - all without losing auditability."

  - title: "Architecture"
    content: "A Django 5 monolith organised into 21 functional apps (recertifications, families, documents, document processing, metrics, actions, background checks, and so on). Multi-tenancy is schema-per-tenant via django-tenants - each housing authority lives in its own Postgres schema inside a shared database, with subdomain-based routing in middleware. A single global User is granted per-tenant permissions, so staff can access multiple authorities with distinct roles. The frontend is server-rendered Django templates with HTMX for interactivity, Tailwind for styling, and Django Unfold for the admin layer. Async work runs on Celery with a Redis broker and a tenant-aware task context, split across a main worker pool and a dedicated EIV (Enterprise Income Verification) worker."

  - title: "Agentic document pipeline"
    content: "This is the headline AI feature. Each incoming document is routed by type through one of several processing strategies - standard, Azure Document Intelligence, EIV bulk, or SSC. OCR runs as a cascade: Azure Document Intelligence for structured forms, Azure Computer Vision for unstructured images, Tesseract as a final fallback, with contrast enhancement for degraded scans. Extracted text is then passed into a multi-step LLM chain built on Azure OpenAI. The chain uses OpenAI function-calling with a registry of ~14 domain validation tools - SSN validation, date comparison, institution matching, name comparison, consecutive-paystub processing, child-support extraction - that the model can call mid-reasoning. Prompts are templated per document group, responses are parsed with Pydantic, and every call is traced through Langfuse for observability alongside Datadog APM for latency and token usage. The pipeline handles 50+ document types spanning income, assets, expenses, and identity."

  - title: "Multi-tenancy and data layer"
    content: "Schema-per-tenant PostgreSQL 16 via django-tenants and django-tenant-users. SHARED_APPS (users, companies, domains, permissions, daily metric rollups) live in the public schema; TENANT_APPS (documents, families, recertifications, processing results) live per-tenant. Routing is domain-based; the TenantMainMiddleware resolves the hostname to a CompanyDomain and sets the search_path. Celery tasks inherit the schema context via tenant-schemas-celery, so a task dispatched from one tenant cannot accidentally read or write another's data. File storage is Azure Blob with SAS-token access, and Redis is partitioned across four databases for broker, results, SSE eventstream, and general cache."

  - title: "Infrastructure and CI/CD"
    content: "The whole stack runs in Docker Compose: Django (Daphne ASGI + Gunicorn/Uvicorn), main Celery worker, dedicated EIV worker, Celery beat, Postgres 16, Redis, Langfuse (with its own Postgres schema), Flower for queue monitoring, and a Playwright server for automated background checks. The production image is built in multi-stage Docker (build, node-build, tailwind-build, production) with hash-verified dependencies through uv. Azure Pipelines runs security audits (pip-audit, safety, supply-chain checks), the test suite, and conditional deployments to Azure Container Registry. Observability is layered - Sentry for exceptions, Datadog APM for Django and Celery spans, Langfuse for every LLM call."

  - title: "Testing and quality"
    content: "pytest-django with factory-boy, Faker, and Hypothesis for property-based tests. Playwright drives browser automation for background-check flows. Pre-commit hooks run autoflake, isort, black; CI adds pylint and bandit. The test suite covers the full document-processing pipeline, the multi-tenant data model, validation rules, and dashboard aggregation queries."

  - title: "What I own day-to-day"
    content: "A blend of backend logic and the admin layer that caseworkers actually use - Django admin customisation with Unfold, template-driven UI refinements, service-layer refactoring, metric aggregation and dashboard widgets, validation flows, and test-infrastructure hardening. The work sits across Django ORM, Celery, template-driven HTMX interactivity, and data-quality plumbing for an LLM pipeline that has to be right far more often than it is wrong."

  - title: "Tech stack"
    list:
      - "Python 3.13, Django 5, Django REST Framework"
      - "PostgreSQL 16 with schema-per-tenant (django-tenants)"
      - "Celery with Redis broker, tenant-schemas-celery, Celery beat"
      - "Azure OpenAI for agentic LLM pipelines with function-calling"
      - "Azure Document Intelligence, Azure Computer Vision, Tesseract (OCR cascade)"
      - "Azure Blob Storage for documents"
      - "HTMX + Tailwind + Django Unfold admin"
      - "Langfuse for LLM observability, Datadog APM, Sentry"
      - "pytest, Playwright, Hypothesis, factory-boy"
      - "Docker, Azure Pipelines, Azure Container Registry"

category: "Backend"
tags:
  - "Python"
  - "Django"
  - "Celery"
  - "Agentic Pipelines"
  - "OCR"
  - "Azure"
  - "Multi-tenant"
date: "2025-02-01"
---

A multi-tenant SaaS platform that runs the annual and interim recertification workflow for a US public housing authority - from document intake and OCR, through an agentic LLM extraction and validation pipeline, to caseworker review, sign-off, and property-management sync. Django, Celery, Azure OpenAI, Document Intelligence, and a schema-per-tenant Postgres layer, with observability through Langfuse and Datadog.
