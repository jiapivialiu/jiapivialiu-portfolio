import type { Metadata } from "next";

import { ProjectList } from "@/components/project-list";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "ML Systems",
  description: "Machine learning systems, recommender systems, multimodal AI, and AI evaluation work by Jiaping (Olivia) Liu.",
  alternates: { canonical: "/ml-systems" },
};

const projectOrder = new Map([
  "ai-native-research-workflow",
  "recforge",
  "vela-ai",
  "ai-text-detector",
].map((slug, index) => [slug, index]));
const mlProjects = projects
  .filter((project) => projectOrder.has(project.slug))
  .toSorted((a, b) => (projectOrder.get(a.slug) ?? 0) - (projectOrder.get(b.slug) ?? 0));

export default function MlSystemsPage() {
  return (
    <main className="domain-page ml-systems-page">
      <header className="route-hero container">
        <p className="section-label">01 / ML Systems</p>
        <h1>Build the system.<br /><em>Evaluate the behavior.</em></h1>
        <p>Recommendation, ranking, multimodal workflows, and AI evaluation treated as connected system-design problems—not isolated model demos.</p>
      </header>

      <section className="domain-section" id="projects" aria-label="ML systems projects">
        <div className="container">
          <ProjectList items={mlProjects} indexPrefix="01" />
        </div>
      </section>
    </main>
  );
}
