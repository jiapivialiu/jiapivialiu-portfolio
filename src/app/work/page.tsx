import type { Metadata } from "next";

import { WorkIndex } from "@/components/work-index";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected statistical research, machine learning systems, recommender systems, and AI evaluation work by Olivia Liu.",
  alternates: { canonical: "/work" },
};

type WorkPageProps = {
  searchParams: Promise<{ module?: string | string[] }>;
};

export default async function WorkPage({ searchParams }: WorkPageProps) {
  const requestedModule = (await searchParams).module;
  const initialFilter =
    requestedModule === "statistics" || requestedModule === "engineering" || requestedModule === "evaluation"
      ? requestedModule
      : "all";

  return (
    <div className="work-page container">
      <header className="route-hero">
        <p className="section-label">01 / Work index</p>
        <h1>What I build.<br /><em>How I know it works.</em></h1>
        <p>Public research and engineering artifacts organized by one primary module. Cross-tags show the intersections without duplicating the work.</p>
      </header>
      <WorkIndex initialFilter={initialFilter} />
    </div>
  );
}
