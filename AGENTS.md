# AGENTS.md

## Project
Personal portfolio for Jiaping Liu.

Read docs/website-brief.md before making major UI changes.

## Product principles
- Recruiting is the primary goal.
- Professional + fashion-forward, not academic.
- Editorial Tech × Interactive Photography × Scientific Precision.
- Avoid generic AI-generated portfolio aesthetics.
- Do not use purple gradients, card soup, excessive pills, glowing AI visuals.
- Prefer asymmetric editorial layouts.
- Photography and typography should carry the visual identity.

## Engineering
- Next.js App Router
- TypeScript
- Tailwind CSS
- Motion for React
- Use server components unless client interaction is needed.
- Reuse existing components before adding dependencies.
- Ask before adding a major dependency.

## Quality
After meaningful changes:
- run lint
- run typecheck
- run build

## Git
- Never work directly on main.
- One feature per branch.
- Keep commits focused.
- Do not merge automatically.