<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Dionis Nasuwa Portfolio — Agent Operating Constitution

## 1. Single Narrative Identity
- **The Core Anchor**: "A systems-minded engineer who builds infrastructure around data."
- Every component, project, and work history item must reflect this singular perspective. Dionis is neither a generic freelance UI designer nor an abstract theorist; he is an engineer focused on how data moves, how backends manage state, and how applications scale reliably.

## 2. Anti-AI Writing Rules (Zero Slop Policy)
- **Banned Words & Buzzwords**: Never use *spearheaded, leveraged, orchestrated, seamless, testament to, delve, tapestry, bespoke, cutting-edge, paradigm, myriad, holistic, paramount, robustly, tailored, elevated*.
- **Punctuation Rules**: Do NOT use em-dashes (—) for dramatic flair or artificial pauses. Use clear, simple punctuation: periods, commas, colons.
- **Voice & Tone**: 
  - Direct, grounded, and concise. First-person ("I built...", "I analyzed...").
  - Plainspoken technical nouns instead of vague corporate adjectives.
  - State the technical problem, the engineering choice, the implementation details, and the measurable outcome. No self-congratulatory praise.

## 3. Strict Source-of-Truth & Zero Hallucination
- Every metric, date, company, technology, and claim MUST be verified directly against the active files in:
  - `/home/dio/Documents/portfolio/` (Technical experience, certs, projects)
  - `/home/dio/Documents/digital_ops/` (Plaqode, Paydable, Invitte, PataSpace, Strata architecture)
  - `/home/dio/Documents/paysim/` (PaySim PostgreSQL queries, Tableau Public dashboard, fraud indicators)
  - `/home/dio/Documents/portfolio/cv_update.md` (Halotel HQ data role and graduate research positioning)
- If a detail (e.g., a link, date, or number) is not present in these sources, the agent MUST ask the user rather than guessing or making it up.

## 4. Execution Workflow (One Domain at a Time)
1. **Check State**: Always read `/home/dio/Documents/clone2/PLAN.md` and `/home/dio/Documents/clone2/LOGS.md` before taking any action.
2. **Draft & Propose**: Propose the exact wording to the user first. Await explicit approval.
3. **Implement & Test**: Write the code for that single data domain, run `pnpm build` to verify, and check the UI.
4. **Log Progress**: Record the exact changes, decisions, and next steps in `/home/dio/Documents/clone2/LOGS.md`.
