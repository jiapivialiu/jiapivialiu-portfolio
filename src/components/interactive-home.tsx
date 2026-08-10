"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, type MouseEvent as ReactMouseEvent } from "react";

import {
  experiences,
  identityModules,
  moduleLabels,
  notes,
  projects,
  siteConfig,
  type IdentityModule,
  type Project,
} from "@/data/site";

function EvaluationLens() {
  const stage = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(-500);
  const pointerY = useMotionValue(-500);
  const x = useSpring(pointerX, { stiffness: 180, damping: 28, mass: 0.45 });
  const y = useSpring(pointerY, { stiffness: 180, damping: 28, mass: 0.45 });
  const lensClip = useMotionTemplate`circle(110px at ${x}px ${y}px)`;
  const reducedMotion = useReducedMotion();

  function move(event: ReactMouseEvent<HTMLDivElement>) {
    if (!stage.current || reducedMotion) return;
    const rect = stage.current.getBoundingClientRect();
    pointerX.set(event.clientX - rect.left);
    pointerY.set(event.clientY - rect.top);
  }

  function leave() {
    pointerX.set(-500);
    pointerY.set(-500);
  }

  return (
    <div ref={stage} className="hero-visual" onMouseMove={move} onMouseLeave={leave}>
      <Image
        className="hero-image hero-image-muted"
        src="/images/main-mall.jpg"
        alt="UBC Main Mall in Vancouver, seen along its tree-lined central axis"
        fill
        priority
        sizes="100vw"
      />
      <motion.div className="lens-reveal" style={{ clipPath: lensClip }} aria-hidden="true">
        <Image className="hero-image" src="/images/main-mall.jpg" alt="" fill priority sizes="100vw" />
      </motion.div>
      <motion.div className="evaluation-lens" style={{ x, y }} aria-hidden="true">
        <span>Evaluation lens</span>
        <small>observe · compare · decide</small>
      </motion.div>
      <div className="hero-image-wash" aria-hidden="true" />
      <p className="hero-place">49.2606° N · 123.2460° W</p>
      <a
        className="photo-credit"
        href="https://commons.wikimedia.org/wiki/File:UBC-Main-Mall.jpg"
        target="_blank"
        rel="noreferrer"
      >
        Main Mall photo · CC BY-SA 4.0 ↗
      </a>
    </div>
  );
}

function ModuleRow({ item, index }: { item: IdentityModule; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 240, damping: 28 });
  const springY = useSpring(y, { stiffness: 240, damping: 28 });
  const reducedMotion = useReducedMotion();

  function move(event: ReactMouseEvent<HTMLAnchorElement>) {
    if (reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.025);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.06);
  }

  return (
    <motion.article
      className={`identity-module module-${item.key}`}
      initial={reducedMotion ? false : { opacity: 0, y: 36 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ delay: index * 0.06, duration: 0.55 }}
    >
      <motion.div style={{ x: springX, y: springY }}>
        <Link href={item.href} onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0); }}>
          <span className="module-index">{item.index}</span>
          <div className="module-title-wrap">
            <p>{item.verb}</p>
            <h3>{item.title}</h3>
          </div>
          <p className="module-description">{item.description}</p>
          <div className="module-themes" role="list" aria-label="Related themes">
            {item.themes.map((theme) => <span role="listitem" key={theme}>{theme}</span>)}
          </div>
          <span className="module-arrow" aria-hidden="true">↗</span>
        </Link>
      </motion.div>
    </motion.article>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const href = project.repoUrl || "/work?module=evaluation";
  const external = Boolean(project.repoUrl);
  const reducedMotion = useReducedMotion();
  return (
    <motion.article
      className={`featured-project project-${project.primaryCategory}`}
      initial={reducedMotion ? false : { opacity: 0, y: 42 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      whileHover={reducedMotion ? undefined : { y: -8 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
    >
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
        <div className="project-topline">
          <span>{String(index + 1).padStart(2, "0")} / {moduleLabels[project.primaryCategory]}</span>
          <span>{project.status}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        <div className="project-artifact">
          <span>{project.artifact}</span>
          <b aria-hidden="true">↗</b>
        </div>
        <div className="project-tech" role="list" aria-label="Technologies">
          {project.technologies.slice(0, 4).map((technology) => <span role="listitem" key={technology}>{technology}</span>)}
        </div>
      </a>
    </motion.article>
  );
}

function InteractiveHomeContent() {
  const hero = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: hero, offset: ["start start", "end start"] });
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, reducedMotion ? 1 : 1.065]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : 70]);
  const progress = useTransform(scrollYProgress, [0, 0.88], ["0%", "100%"]);
  const progressWidth = useMotionTemplate`${progress}`;
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <section className="portfolio-hero" ref={hero} aria-labelledby="hero-title">
        <motion.div className="hero-media-layer" style={{ scale: visualScale, y: visualY }}>
          <EvaluationLens />
        </motion.div>
        <div className="container hero-content">
          <div className="hero-overline">
            <span>{siteConfig.name}</span>
            <span>{siteConfig.location}</span>
          </div>
          <p className="hero-role">{siteConfig.role}</p>
          <h1 id="hero-title">I build intelligent systems—and study how to know when they <em>actually work.</em></h1>
          <p className="hero-support">Working across statistical reasoning, recommender systems, machine learning engineering, and AI evaluation.</p>
          <nav className="hero-links" aria-label="Olivia Liu online">
            <Link href="/work">Selected work <span aria-hidden="true">↘</span></Link>
            <a href={siteConfig.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a>
            <a href={`mailto:${siteConfig.email}`}>Contact ↗</a>
          </nav>
        </div>
        <div className="container hero-path" aria-label="Professional progression">
          <div className="path-track"><motion.span style={{ width: progressWidth }} /></div>
          {[
            ["01", "Reason carefully"],
            ["02", "Build systems"],
            ["03", "Evaluate intelligence"],
            ["04", "Live curiously"],
          ].map(([number, label]) => <p key={number}><span>{number}</span>{label}</p>)}
        </div>
      </section>

      <section className="editorial-intro container" aria-labelledby="intro-title">
        <p className="section-label">At a glance · Vancouver / UBC</p>
        <div>
          <h2 id="intro-title">Statistics is the foundation.<br />Intelligent systems are the field.</h2>
          <p>I’m Olivia Liu, a Statistics PhD candidate at UBC working at the intersection of statistical reasoning, machine learning systems, and AI evaluation. My work spans open-source statistical software and computational research, recommender systems at JD.com, large-scale risk modeling at RBC, and emerging evaluation methods for LLM and agentic systems. I’m especially interested in ranking, retrieval, multimodal models, and evaluation pipelines that turn model behavior into trustworthy product decisions.</p>
        </div>
      </section>

      <section className="identity-section" aria-labelledby="identity-title">
        <div className="container identity-heading">
          <p className="section-label">One practice · four dimensions</p>
          <h2 id="identity-title">The way I work.</h2>
          <p>AI belongs in both building and evaluation: one asks what a system can do; the other asks what evidence should make us trust it.</p>
        </div>
        <div className="identity-list container">
          {identityModules.map((item, index) => <ModuleRow item={item} index={index} key={item.key} />)}
        </div>
      </section>

      <section className="featured-section" aria-labelledby="featured-title">
        <div className="container featured-heading">
          <p className="section-label">Selected work · verified public artifacts</p>
          <h2 id="featured-title">Methods become systems.<br />Systems produce evidence.</h2>
          <Link href="/work" className="section-link">View the complete work index ↗</Link>
        </div>
        <div className="featured-grid container">
          {featuredProjects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}
        </div>
      </section>

      <section className="experience-section" aria-labelledby="experience-title">
        <div className="container">
          <p className="section-label">Applied evidence</p>
          <h2 id="experience-title">Research depth.<br />Production context.</h2>
          <div className="experience-list">
            {experiences.map((experience, index) => (
              <article key={experience.organization}>
                <span>0{index + 1}</span>
                <h3>{experience.organization}</h3>
                <p><strong>{experience.label}</strong><span>{experience.detail}</span></p>
              </article>
            ))}
          </div>
          <p className="experience-note">Employer work is summarized at a high level and is not presented as open source.</p>
        </div>
      </section>

      <section className="notes-preview" aria-labelledby="notes-title">
        <div className="container notes-heading">
          <p className="section-label">Selected thinking</p>
          <h2 id="notes-title">Questions worth keeping open.</h2>
        </div>
        <div className="container note-list">
          {notes.map((note, index) => (
            <Link href="/notes" key={note.title}>
              <span>0{index + 1} · {note.category}</span>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
              <b aria-hidden="true">↗</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="life-preview" id="life" aria-labelledby="life-title">
        <div className="container life-layout">
          <div className="life-copy">
            <p className="section-label">04 · Life</p>
            <h2 id="life-title">Curiosity needs a landscape.</h2>
            <p>UBC’s long perspectives, Vancouver’s weather, steep trails, good food, strength training, photography, and the people who make a place feel lived in.</p>
            <Link href="/about#life" className="section-link">More beyond the work ↗</Link>
          </div>
          <div className="life-collage" aria-label="Places and interests that shape Olivia's life">
            <div className="life-orb life-orb-main"><Image src="/images/main-mall.jpg" alt="UBC Main Mall" fill sizes="(max-width: 768px) 70vw, 34vw" /></div>
            <div className="life-orb life-orb-cobalt"><span>mountains<br />after rain</span></div>
            <div className="life-orb life-orb-coral"><span>food · friends<br />small discoveries</span></div>
            <p>VANCOUVER<br />49° N</p>
          </div>
        </div>
      </section>

      <section className="contact-section" aria-labelledby="contact-title">
        <div className="container contact-layout">
          <p className="section-label">Now / next</p>
          <div>
            <h2 id="contact-title">Let’s build something<br />worth evaluating.</h2>
            <p>Open to Applied Scientist, Machine Learning Engineer, recommendation and ranking, and AI evaluation opportunities.</p>
            <div className="contact-links">
              <a href={`mailto:${siteConfig.email}`}>Start a conversation ↗</a>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function InteractiveHome() {
  return <InteractiveHomeContent />;
}
