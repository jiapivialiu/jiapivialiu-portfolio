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
  const href = project.repoUrl || (project.primaryCategory === "statistics" ? "/academics" : "/ml-systems#projects");
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
          <p className="hero-support">My work connects large-scale machine learning engineering for personalized recommendation with rigorous evaluation of AI agents, tools, and workflows, grounded in statistical reasoning.</p>
          <nav className="hero-links" aria-label={`${siteConfig.name} online`}>
            <div className="hero-links-primary">
              <Link href="/ml-systems">ML systems <span aria-hidden="true">↘</span></Link>
              <Link href="/academics">Research <span aria-hidden="true">↘</span></Link>
              <Link href="/life">Life ↘</Link>
            </div>
            <div className="hero-links-secondary">
              <a href={siteConfig.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a>
              <a href={`mailto:${siteConfig.email}`}>Contact ↗</a>
            </div>
          </nav>
        </div>
      </section>

      <section className="editorial-intro container" aria-labelledby="intro-title">
        <p className="section-label">At a glance · Vancouver / UBC</p>
        <div>
          <p id="intro-title">I’m Jiaping Liu. I also go by Olivia. I build machine learning systems and design rigorous ways to evaluate them, with a particular focus on personalized recommendation, ranking, and retrieval. My experience spans production recommender systems at JD.com, large-scale risk modeling at RBC, and open-source statistical software and computational research through my Statistics PhD at UBC. I’m especially interested in large-scale online ML systems, multimodal and agentic models, and evaluation pipelines that turn model behavior into reliable evidence for product decisions.</p>
        </div>
      </section>

      <section className="experience-section" aria-labelledby="experience-title">
        <div className="container">
          <div className="experience-heading">
            <p className="section-label">Applied evidence</p>
            <h2 id="experience-title">Applied at scale.</h2>
          </div>
          <p className="experience-scroll-hint">Scroll horizontally for evidence <span aria-hidden="true">→</span></p>
          <div className="experience-list" role="region" aria-label="Work experience table; scroll horizontally to view all columns" tabIndex={0}>
            <div className="experience-list-header" aria-hidden="true">
              <span>No. / Industry&nbsp;</span>
              <span>Organization&nbsp;</span>
              <span>Title&nbsp;</span>
              <span>Project&nbsp;</span>
              <span>Evidence →</span>
            </div>
            {experiences.map((experience, index) => (
              <article key={`${experience.organization}-${experience.title}`}>
                <div className="experience-index">
                  <strong>0{index + 1}</strong>
                  <span>{experience.industry}</span>
                </div>
                <h3>{experience.organization}</h3>
                <div className="experience-role">
                  <strong>{experience.title}</strong>
                </div>
                <span className="experience-project-summary">{experience.label}</span>
                <div className="experience-evidence">
                  {"bullets" in experience ? (
                    <ul className="experience-bullets">
                      {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  ) : (
                    <span className="experience-detail">{experience.detail}</span>
                  )}
                  {"href" in experience && (
                    <>
                      {"publicExample" in experience && <small>{experience.publicExample}</small>}
                      {experience.href.startsWith("/") ? (
                        <Link href={experience.href} className="experience-project-link">{experience.linkLabel} ↗</Link>
                      ) : (
                        <a href={experience.href} className="experience-project-link" target="_blank" rel="noreferrer">{experience.linkLabel} ↗</a>
                      )}
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="experience-note">Employer work is summarized at a high level. Linked public projects are independently built examples and contain no confidential information.</p>
        </div>
      </section>

      <section className="identity-section" aria-labelledby="identity-title">
        <div className="container identity-heading">
          <p className="section-label">One practice · three dimensions</p>
          <h2 id="identity-title">The way I work.</h2>
          <p>AI belongs in both building and evaluation: one asks what a system can do; the other asks what evidence should make us trust it.</p>
        </div>
        <div className="identity-list container">
          {identityModules.map((item, index) => <ModuleRow item={item} index={index} key={item.key} />)}
        </div>
      </section>

      <section className="featured-section" aria-label="Selected work · verified public artifacts">
        <div className="container featured-heading">
          <p className="section-label">Selected work · verified public artifacts</p>
        </div>
        <div className="featured-grid container">
          {featuredProjects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}
        </div>
      </section>
    </>
  );
}

export function InteractiveHome() {
  return <InteractiveHomeContent />;
}
