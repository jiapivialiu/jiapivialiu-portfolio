import type { Metadata } from "next";
import Image from "next/image";

import { experiences, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Olivia Liu: Statistics PhD candidate, machine learning systems builder, and AI evaluation researcher in Vancouver.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <header className="route-hero container about-hero">
        <p className="section-label">03 / About</p>
        <h1>Statistician by training.<br />Builder by practice.<br /><em>Evaluator by instinct.</em></h1>
        <p>I’m Jiaping (Olivia) Liu, a Statistics PhD candidate at UBC in Vancouver. I care about the full arc from a careful question, through an implemented system, to evidence that tells us whether it is useful and reliable.</p>
      </header>

      <section className="about-narrative container" aria-labelledby="about-narrative-title">
        <p className="section-label">The connecting thread</p>
        <div>
          <h2 id="about-narrative-title">I build intelligent systems and evaluate how well they work.</h2>
          <p>Statistics taught me to look for uncertainty, assumptions, and the difference between a signal and a story. Engineering taught me that a model is only one part of a living system: data, constraints, interfaces, feedback loops, and people shape the outcome. AI evaluation brings those habits together.</p>
          <p>My work has moved through statistical methodology and computational research, production recommendation at JD.com, large-scale risk modeling at RBC, multimodal and language-model prototypes, and a growing focus on how LLM and agentic systems should be compared, calibrated, and released.</p>
        </div>
      </section>

      <section className="about-experience" aria-labelledby="about-experience-title">
        <div className="container">
          <p className="section-label">Selected experience</p>
          <h2 id="about-experience-title">Three contexts.<br />One way of thinking.</h2>
          <div className="about-experience-grid">
            {experiences.map((experience, index) => (
              <article key={experience.organization}>
                <span>0{index + 1}</span>
                <h3>{experience.organization}</h3>
                <p>{experience.label}</p>
                <p>{experience.detail}</p>
              </article>
            ))}
          </div>
          <p className="experience-note">Descriptions of employer work intentionally remain high-level to respect confidentiality.</p>
        </div>
      </section>

      <section className="about-values container" aria-labelledby="about-values-title">
        <p className="section-label">Working principles</p>
        <h2 id="about-values-title">How I approach the work.</h2>
        <ol>
          <li><span>01</span><div><h3>Make assumptions inspectable.</h3><p>A method becomes more useful when someone else can see what it depends on.</p></div></li>
          <li><span>02</span><div><h3>Treat evaluation as design.</h3><p>Metrics, datasets, reviewers, and release thresholds encode product judgment.</p></div></li>
          <li><span>03</span><div><h3>Build for contact with reality.</h3><p>Latency, data quality, behavior shifts, and human workflows are part of the technical problem.</p></div></li>
          <li><span>04</span><div><h3>Stay curious after the result.</h3><p>The most interesting question is often why a system failed differently than expected.</p></div></li>
        </ol>
      </section>

      <section className="about-life" id="life" aria-labelledby="about-life-title">
        <div className="container about-life-layout">
          <div className="about-life-image">
            <Image src="/images/main-mall.jpg" alt="A view down UBC Main Mall in Vancouver" fill sizes="(max-width: 768px) 100vw, 52vw" />
          </div>
          <div>
            <p className="section-label">Life / Vancouver</p>
            <h2 id="about-life-title">The landscape is part of the practice.</h2>
            <p>Outside work, I return to movement and observation: hiking, strength training, photography, trying food with friends, watching Vancouver weather change the same familiar view, and noticing the small details that make a day specific.</p>
            <div className="life-words"><span>UBC</span><span>mountains</span><span>food</span><span>fitness</span><span>photography</span><span>community</span></div>
          </div>
        </div>
      </section>

      <section className="about-contact container">
        <p className="section-label">Contact</p>
        <h2>Interested in the same questions?</h2>
        <div>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email} ↗</a>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={siteConfig.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </section>
    </div>
  );
}
