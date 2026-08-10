"use client";

import { useState } from "react";

import { identityModules, moduleLabels, projects, type ModuleKey } from "@/data/site";

type Filter = "all" | Exclude<ModuleKey, "life">;

const filters: readonly { key: Filter; label: string }[] = [
  { key: "all", label: "All work" },
  ...identityModules
    .filter((module) => module.key !== "life")
    .map((module) => ({ key: module.key as Filter, label: module.title })),
];

export function WorkIndex({ initialFilter = "all" }: { initialFilter?: Filter }) {
  const [filter, setFilter] = useState<Filter>(initialFilter);

  const visibleProjects = projects.filter((project) => filter === "all" || project.primaryCategory === filter);

  function selectFilter(nextFilter: Filter) {
    setFilter(nextFilter);
    const nextUrl = nextFilter === "all" ? "/work" : `/work?module=${nextFilter}`;
    window.history.replaceState({}, "", nextUrl);
  }

  return (
    <>
      <nav className="work-filters" aria-label="Filter projects by identity module">
        {filters.map((item) => (
          <button
            key={item.key}
            type="button"
            className={filter === item.key ? "is-active" : undefined}
            aria-pressed={filter === item.key}
            onClick={() => selectFilter(item.key)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="work-projects" aria-live="polite">
        {visibleProjects.map((project, index) => (
          <article className={`work-project work-project-${project.primaryCategory}`} key={project.slug}>
            <div className="work-project-index">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{project.status}</span>
            </div>
            <div className="work-project-main">
              <p>{moduleLabels[project.primaryCategory]} · {project.crossTags.map((tag) => moduleLabels[tag]).join(" + ")}</p>
              <h2>{project.title}</h2>
              <p className="work-project-summary">{project.longDescription}</p>
              <dl>
                <div><dt>The question</dt><dd>{project.problem}</dd></div>
                <div><dt>The artifact</dt><dd>{project.artifact}</dd></div>
              </dl>
              <div className="work-project-links">
                {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer">Repository ↗</a>}
                {project.paperUrl && <a href={project.paperUrl} target="_blank" rel="noreferrer">Paper ↗</a>}
                {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Demo ↗</a>}
                {!project.repoUrl && <span>Public artifact forthcoming</span>}
              </div>
            </div>
            <div className="work-project-tech" role="list" aria-label="Technologies">
              {project.technologies.map((technology) => <span role="listitem" key={technology}>{technology}</span>)}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
