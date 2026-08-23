You are a senior design engineer and frontend engineer building a personal portfolio website for Jiaping Liu.

This is NOT a generic developer portfolio, academic homepage, SaaS landing page, or fashion portfolio.

The website should feel like a high-end digital product made for a scientist / machine-learning practitioner with unusually strong taste.

The visual direction is:

EDITORIAL TECH × INTERACTIVE PHOTOGRAPHY × SCIENTIFIC PRECISION

Keywords:
precise, intelligent, tactile, cinematic, restrained, modern, slightly experimental, confident, professional, memorable.

The website exists primarily for recruiting and professional networking, but should also reveal some personality.

======================================================================
0. IMPORTANT: DO NOT BUILD EVERYTHING FROM SCRATCH
======================================================================

Before writing new components, inspect reusable open-source code.

Preferred starter/reference:

https://github.com/magicuidesign/portfolio

Use it only as an engineering skeleton:
- Next.js
- TypeScript
- Tailwind
- responsive infrastructure
- blog/content infrastructure where useful
- shadcn primitives
- existing accessibility / SEO utilities

Do NOT preserve its existing visual design if it conflicts with this brief.

Use shadcn/ui for accessible low-level primitives where useful.

Use Motion for React for:
- scroll-linked animation
- scroll-triggered animation
- parallax
- subtle spring interactions
- section transitions

Avoid unnecessary dependencies.

Do not introduce Three.js unless there is a strong visual reason.
This website should feel interactive without becoming a 3D demo.

If the Hallmark design skill is installed, use it after implementation:

hallmark audit

Then fix the important issues manually.

Do not blindly redesign the site after the audit.

======================================================================
1. PRIMARY USER / AUDIENCE
======================================================================

Primary audience:

- machine learning hiring managers
- applied scientists
- recommender-system / ranking teams
- AI evaluation teams
- AI / ML engineers
- recruiters at technology companies
- potential research / startup collaborators

A visitor should understand within 20–30 seconds:

1. Jiaping has unusually deep statistical foundations.
2. She has worked on production machine-learning / recommendation problems.
3. She can build modern LLM / agent systems.
4. She thinks deeply about model and AI evaluation.
5. She is technical but also has strong product judgment.
6. She is transitioning from a Statistics PhD identity into a broader
   Applied Scientist / ML / AI Evaluation identity.

Do NOT make the website feel like she is only looking for an academic job.

Do NOT frame her only as an "AI Evaluation Scientist" because the site
should remain relevant for:

- Applied Scientist
- ML Engineer
- Recommendation / Ranking
- AI Evaluation
- AI Systems
- Data Science roles

======================================================================
2. CORE BRAND IDEA
======================================================================

The site has one central metaphor:

THE PATH + THE LENS

THE PATH:
Jiaping's intellectual path:

STATISTICS
→ MACHINE LEARNING
→ RECOMMENDER SYSTEMS
→ AI SYSTEMS
→ EVALUATION & JUDGMENT

THE LENS:
Statistics and evaluation are different ways of looking carefully at
intelligent systems.

This metaphor should influence the interactions but NEVER become cheesy.

Do not draw a literal cartoon path.

Use photography, perspective, fine lines, labels, grids, annotations,
reveals and motion.

======================================================================
3. HOMEPAGE HERO — MAIN MALL
======================================================================

The first viewport should be visually distinctive.

Use a full-bleed photograph of:

University of British Columbia Main Mall, Vancouver.

For development use:

/public/images/main-mall.jpg

Use a placeholder if this file does not exist.
Do not hotlink third-party images.

The final site owner will replace it with her own photograph.

IMAGE TREATMENT

The image should occupy approximately 80–100vh.

Do not place the image inside a rounded card.

Full bleed or nearly full bleed.

Desktop:
large photographic composition with editorial typography layered over it.

Mobile:
retain the image impact but crop intentionally.

Default image treatment:
- slightly desaturated
- sophisticated neutral color grade
- slightly lower contrast
- optional subtle film grain
- NEVER Instagram-like filters

Text:

JIAPING LIU

Main statement:

I build models.
I evaluate intelligence.

Alternative layout:
line 1 smaller, line 2 oversized.

Supporting text:

Statistics · Machine Learning · Recommender Systems · AI Evaluation

Vancouver, Canada

Small optional copy:

Statistician by training.
Builder by practice.
Evaluator by instinct.

Do not display all three pieces of copy at the same visual weight.

======================================================================
4. SIGNATURE INTERACTION — EVALUATION LENS
======================================================================

Create one memorable homepage interaction called the Evaluation Lens.

On pointer-capable desktop devices:

When the user moves their pointer over the Main Mall photograph,
show a restrained circular/elliptical lens around the pointer.

Approx size:
180–240 px.

OUTSIDE THE LENS:
photograph is slightly desaturated.

INSIDE THE LENS:
- reveal original richer color
- slightly increased clarity
- optionally reveal a very subtle scientific grid
- tiny data marks / coordinate points may appear
- never clutter the image

The lens should have:
- a fine 1px border
- very subtle glass / refraction feeling
- NO glowing neon
- NO giant cursor follower
- NO fake futuristic HUD

Optional tiny label:

EVALUATION LENS
observe · compare · decide

The lens should lag the cursor slightly using a spring.

It must feel like a precision instrument rather than a gimmick.

Accessibility:
disable the pointer-following interaction on touch devices.

prefers-reduced-motion:
replace with a static, offset lens-shaped treatment or remove it entirely.

======================================================================
5. SCROLL STORY — THE PATH
======================================================================

As the user scrolls through the hero:

- slowly translate / scale the Main Mall photograph
- avoid scroll hijacking
- use scroll-linked animation only
- preserve native scrolling

Introduce an extremely thin path / progress line.

As scrolling progresses, reveal:

STATISTICS
ML
RECOMMENDATION
AI SYSTEMS
EVALUATION

Do not make these look like five nav pills.

They should feel like small editorial annotations.

The progression can follow the perspective direction of Main Mall.

At the end of the hero sequence:

transition smoothly into the next visual chapter.

======================================================================
6. CHAPTER ZERO — UBC EARTH SCIENCES BUILDING
======================================================================

Use another large photograph:

/public/images/esb.jpg

This is UBC's Earth Sciences Building.

Again, use a local placeholder if absent.

Art direction:
architecture photography, strong crop, large scale.

Possible composition:

LEFT:
large photo occupying 55–65% width

RIGHT:
editorial text

Small mono label:

00 / ORIGIN

Headline:

Statistics taught me how to reason under uncertainty.

Supporting copy:

Jiaping is completing a PhD in Statistics at the University of British
Columbia.

Her research sits at the intersection of statistical modeling,
optimization, numerical algorithms and scientific computing.

Optional smaller line:

The methods change.
The habit stays: define the question, inspect the assumptions,
measure uncertainty, test what fails.

Keep this section short.

This is not an academic biography.

The purpose is to establish technical depth before transitioning into
industry work.

======================================================================
7. SELECTED WORK
======================================================================

Do NOT build a grid of six identical rounded cards.

Use a large editorial project index.

Desktop preferred structure:

project number
large project title
domain
one-line description
visual / diagram / metric
year

Use asymmetric alternating layouts.

Feature exactly THREE primary bodies of work.

----------------------------------------------------------------------
PROJECT 01
----------------------------------------------------------------------

CATEGORY:
RECOMMENDER SYSTEMS

TITLE:
Personalized Recommendation at Scale

CONTEXT:
JD.com

DESCRIPTION:
Production recommendation and ranking work for personalized push
notifications, combining user behavior, multi-interest modeling,
ranking and experimentation.

KEY IDEAS:
- recommendation ranking
- DCN-style feature interaction
- multi-interest / behavioral modeling
- pointwise and pairwise objectives
- offline → online evaluation
- active-user cohort analysis
- experimentation
- long-term user experience

VISUAL:

Do NOT use a stock AI image.

Build a minimal animated system diagram:

Recall
→ Ranking
→ Policy
→ User
→ Feedback

On hover, expose small model/evaluation annotations.

Metrics may be displayed carefully as compact evidence.
Do not turn the project into a KPI dashboard.

The case-study page should focus on:
problem
system
evaluation
tradeoffs
decision
lessons learned

----------------------------------------------------------------------
PROJECT 02
----------------------------------------------------------------------

CATEGORY:
AI SYSTEMS

TITLE:
Building and Evaluating AI Systems

Lead example:
Vela AI

DESCRIPTION:
A multimodal AI pipeline for cross-border ecommerce that transforms
Chinese product imagery into localized Canadian English/French product
listings and marketing assets.

SYSTEM ELEMENTS:
- vision-language understanding
- structured product attributes
- localization
- generation
- review / evaluation
- multi-agent workflow

VISUAL:

Create a clean animated pipeline:

PRODUCT IMAGE
↓
UNDERSTAND
↓
STRUCTURE
↓
GENERATE
↙        ↘
EN       FR
 \       /
  EVALUATE

Animations should show information flow.

Avoid robot icons and AI brains.

This project should communicate:
modern AI building capability + evaluation thinking.

----------------------------------------------------------------------
PROJECT 03
----------------------------------------------------------------------

CATEGORY:
STATISTICAL COMPUTING

TITLE:
Algorithms for Reliable Statistical Learning

Combine / link to:

A. rtestim
Time-varying reproduction number estimation using trend filtering.

B. numerical algorithms for ill-conditioned linear systems
including dynamic programming, Kalman filtering, sparse numerical
linear algebra, optimization and statistical computation.

Visual language:
mathematical / algorithmic.

Use:
- sparse lines
- small matrices
- trend-filter curves
- graph nodes
- numerical traces

Do NOT use fake code screenshots.

This section establishes mathematical depth.

======================================================================
8. EXPERIENCE
======================================================================

Build a very clean chronological experience rail.

Not cards.

Possible layout:

YEAR          ORGANIZATION                   FOCUS
2026          JD.com                         Recommendation Systems
2025          RBC                            ML / Risk Modeling
2020–2026     UBC                            PhD · Statistics
2019          Statistics Canada              Machine Learning

Individual rows can subtly expand on hover / click.

Expanded JD row:
Ranking · personalization · experimentation · user modeling

Expanded RBC row:
Risk modeling · survival analysis · large-scale data · ML

Expanded UBC row:
Statistical learning · optimization · algorithms · scientific computing

Keep descriptions short.

======================================================================
9. THINKING / NOTES
======================================================================

Title:

HOW I THINK

This section matters.

It differentiates this portfolio from a standard engineer portfolio.

Feature three intellectual themes:

01
STATISTICAL REASONING

Working title:
What does it mean to reason from data?

Topics:
distribution
uncertainty
estimation
assumptions
modeling
what ML inherits from statistics

02
RECOMMENDER SYSTEMS

Working title:
Beyond clicks.

Topics:
CTR
user experience
long-term value
feedback loops
offline/online gaps
multi-objective optimization

03
AI EVALUATION

Working title:
How do we know an intelligent system is actually good?

Topics:
evaluation design
benchmarks
LLM-as-a-judge
human evaluation
agent evaluation
failure modes
regression testing
product value vs model metrics

Use MDX for notes/articles.

On the homepage these should look like editorial article titles,
not blog cards.

======================================================================
10. NOW
======================================================================

Create a small, living section.

Title:
NOW

Suggested content:

Finishing
PhD in Statistics @ UBC

Exploring
Recommender Systems · AI Evaluation · Agentic AI

Building
AI / ML systems and personal technical projects

Thinking about
How should we evaluate systems whose outputs are no longer deterministic?

Keep this easy to edit from one data/config file.

======================================================================
11. PERSONAL / LIFE SECTION
======================================================================

The site is mainly professional.

Personal content should occupy only ~10–15%.

Do not make a generic "Hobbies" section.

Title:

OUTSIDE THE MODEL

Use a slightly freer photographic layout / contact sheet.

Allow 3–5 user photos.

Potential categories:
Vancouver
nature
travel
small creative projects
food / wine / architecture / objects / everyday observations

Do not invent hobbies not provided.

Use placeholder images and captions if actual assets are absent.

This section should humanize the site, not dilute professional identity.

======================================================================
12. ABOUT PAGE
======================================================================

The About page should be more personal than the homepage.

Structure:

short portrait / photo
+
one thoughtful biography

Tone:
confident, curious, precise, warm.

Core narrative:

Jiaping spent more than a decade studying statistics and is now moving
into the next stage of her career: building and evaluating intelligent
systems.

Statistics remains the foundation rather than the destination.

Her interests increasingly sit at the intersection of:

statistics
machine learning
recommendation
AI systems
experimentation
evaluation
human judgment

Do not write motivational clichés.

Do not describe her as "passionate about leveraging data".

Avoid:
passionate
innovative
cutting-edge
results-driven
data-driven professional
AI enthusiast

======================================================================
13. VISUAL SYSTEM
======================================================================

Avoid the generic AI aesthetic.

DO NOT USE:
- purple/pink gradients
- neon cyberpunk
- glowing blobs
- AI brain graphics
- glassmorphism everywhere
- rounded card soup
- giant pills
- excessive badges
- generic dashboard UI
- large stacks of technology logos
- random floating particles
- typewriter animation
- spinning globe
- skill progress bars

COLOR SYSTEM:

Primary background:
warm white / light stone

Example:
#F2F0EA or similar

Primary text:
near black
#111111

Muted:
warm gray

Anchor color:
deep cobalt / electric ultramarine

Example range:
#3155D9
or a slightly more sophisticated custom cobalt

Use anchor color sparingly:
< 8% of visual area.

Photography supplies most secondary color.

Optional dark section:
deep charcoal
not pure black.

TYPOGRAPHY:

Use a distinctive editorial display font paired with a highly readable
modern sans-serif.

Do not use only Inter for everything.

Avoid stereotypical luxury fashion Didot.

The typography should feel:
scientific + editorial + contemporary.

Possible strategy:

Display:
a modern grotesk or restrained editorial serif

Body:
clean sans

Metadata:
mono

Use next/font where possible.

Large headlines should be visually confident.

Do not make all content center aligned.

Favor asymmetric editorial composition.

======================================================================
14. MOTION SYSTEM
======================================================================

Motion should convey information.

Target feeling:
expensive and quiet.

Use approximately 200–700ms durations for micro interactions,
with longer scroll-linked transitions where appropriate.

Use spring motion where physicality helps.

Allowed:

- image reveal
- masked typography reveal
- subtle character/line reveal
- project image scale on hover
- directional text movement
- scroll progress
- parallax
- diagram activation
- magnetic movement of a very small number of CTA elements
- Evaluation Lens

Avoid:

- constant autonomous motion
- bouncing
- spinning
- excessive fade-up sections
- scroll hijacking
- delayed navigation
- animation that blocks reading

Every animation must have a reason.

Respect:
prefers-reduced-motion.

======================================================================
15. NAVIGATION
======================================================================

Desktop navigation:

JIAPING LIU                         Work   Notes   About

It may begin transparent over the hero and become a compact solid /
blurred nav after scroll.

Do not create a SaaS navbar in a floating rounded capsule.

Mobile:
simple menu.

Primary routes:

/
 /work
 /work/recommender-systems
 /work/ai-systems
 /work/statistical-computing
 /notes
 /notes/[slug]
 /about

======================================================================
16. PROJECT CASE STUDY DESIGN
======================================================================

Each project page should feel like a technical editorial feature.

Template:

01 / CONTEXT
02 / PROBLEM
03 / SYSTEM
04 / MY ROLE
05 / EVALUATION
06 / TRADEOFFS
07 / OUTCOME
08 / WHAT I LEARNED

Support:
- large diagrams
- selective metrics
- methodology notes
- restrained code/math snippets where useful
- sticky section index on desktop

Do not disclose confidential employer information.

Use generalized descriptions where exact production architecture,
business values or proprietary systems should not be public.

======================================================================
17. IMPLEMENTATION
======================================================================

Preferred stack:

Next.js App Router
TypeScript
Tailwind CSS
Motion for React
shadcn/ui primitives where helpful
MDX for Notes and project narratives
Vercel deployment

Use server components by default.

Only mark components "use client" when interaction requires it.

Images:
next/image

Fonts:
next/font

Content should be separated from presentation.

Create:

src/data/profile.ts
src/data/experience.ts
src/data/projects.ts

or an equivalent simple content structure.

The owner should be able to update:
- current status
- experience
- selected work
- metrics
- links
without editing layout code.

======================================================================
18. PERFORMANCE
======================================================================

This is a recruiting website.
It must load fast.

Do not sacrifice performance for visual experimentation.

Requirements:

- optimize hero images
- correct responsive sizes
- use WebP/AVIF where appropriate
- lazy load below-fold media
- no giant video background
- avoid heavy WebGL
- dynamically import expensive client components
- animation should remain smooth
- no layout shift from typography / image loading

Aim for excellent Lighthouse performance and accessibility.

======================================================================
19. RESPONSIVE DESIGN
======================================================================

Do NOT simply stack the desktop layout.

Art-direct mobile separately.

Mobile hero:
- Main Mall remains central
- large name/headline
- no pointer Evaluation Lens
- optional static lens graphic
- typography remains editorial
- project interactions simplify gracefully

Ensure:
375 px width looks intentional.

Also verify:
768
1024
1440
1728+

======================================================================
20. ACCESSIBILITY
======================================================================

Use semantic HTML.

Keyboard navigable.

Visible focus states.

Sufficient contrast.

Alt text for photography.

Respect reduced motion.

Decorative data marks should be aria-hidden.

Do not use motion as the only way information becomes available.

======================================================================
21. SEO / RECRUITING
======================================================================

Metadata should clearly describe:

Jiaping Liu
Machine Learning
Applied Scientist
Statistics
Recommender Systems
AI Evaluation

Create:
- metadata
- sitemap
- robots
- OpenGraph image
- favicon
- canonical domain: jiapivialiu.com

Homepage title example:

Jiaping Liu — Machine Learning, Statistics & AI Evaluation

Do not keyword-stuff visible content.

======================================================================
22. FOOTER
======================================================================

Keep it strong and minimal.

Possible copy:

BUILD.
EVALUATE.
LEARN.

Then:

Jiaping Liu
Vancouver, Canada

Email
LinkedIn
GitHub
Google Scholar

© current year

Optional small closing line:

Still asking better questions.

======================================================================
23. BUILD ORDER
======================================================================

Do not attempt every page immediately.

First:

PHASE 1
Create design system and homepage only.

PHASE 2
Make the hero, Main Mall scroll sequence, Evaluation Lens and ESB
transition excellent.

PHASE 3
Implement Selected Work and Experience.

PHASE 4
Build case-study pages + MDX Notes.

PHASE 5
Build About / Outside the Model.

PHASE 6
Responsive / accessibility / SEO / performance.

PHASE 7
Run Hallmark audit if available and manually fix high-value findings.

After each major phase:
run lint
run typecheck
run build

======================================================================
24. FIRST TASK
======================================================================

Before coding:

1. Inspect the existing repository.
2. Inspect any reusable pieces from the Magic UI open-source portfolio.
3. Produce a short implementation plan.
4. Produce a component tree.
5. Produce the design tokens.
6. Identify exactly which existing open-source components can be reused
   instead of regenerated.
7. Then implement PHASE 1 and PHASE 2.

Do NOT write a long design essay before implementation.

Do NOT create placeholder generic portfolio copy.

Use the supplied Jiaping Liu content.

Where information is missing, use clearly marked TODO data values instead
of inventing facts.

The result should feel intentionally art-directed and specific to
Jiaping Liu.

If the design starts resembling a generic AI-generated developer
portfolio, simplify it and return to:

EDITORIAL TECH
× INTERACTIVE PHOTOGRAPHY
× SCIENTIFIC PRECISION
