import type { Metadata } from "next";

import { ProjectList } from "@/components/project-list";
import { projects, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Academics",
  description: "Statistical research, scientific software, and open research repositories by Jiaping (Olivia) Liu.",
  alternates: { canonical: "/academics" },
};

const academicProjects = projects.filter((project) => project.primaryCategory === "statistics");

export default function AcademicsPage() {
  return (
    <main className="domain-page academics-page">
      <header className="route-hero container">
        <p className="section-label">02 / Academics</p>
        <h1>Reason carefully.<br /><em>Make methods usable.</em></h1>
        <div className="route-hero-meta">
          <p>Statistical methodology, computational optimization, and open research software—built so the assumptions, implementation, and evidence can be inspected.</p>
          <a className="section-link" href={siteConfig.scholar} target="_blank" rel="noreferrer">Google Scholar ↗</a>
        </div>
      </header>

      <section className="domain-section" aria-label="Research repositories">
        <div className="container">
          <ProjectList items={academicProjects} showCategory={false} indexPrefix="02" />
        </div>
      </section>
    </main>
  );
}
