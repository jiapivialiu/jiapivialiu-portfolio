import { moduleLabels, type Project } from "@/data/site";

export function ProjectList({
  items,
  startIndex = 0,
  showCategory = true,
  indexPrefix,
}: {
  items: readonly Project[];
  startIndex?: number;
  showCategory?: boolean;
  indexPrefix?: string;
}) {
  return (
    <div className="project-index">
      {items.map((project, index) => (
        <article
          className={`project-entry project-entry-${project.primaryCategory}`}
          id={project.slug}
          key={project.slug}
        >
          <div className="project-entry-index">
            <span>{indexPrefix ? `${indexPrefix}${String.fromCharCode(65 + index)}` : String(startIndex + index + 1).padStart(2, "0")}</span>
            <span>{project.indexLabel ?? project.status}</span>
          </div>
          <div className="project-entry-main">
            {showCategory && <p>{moduleLabels[project.primaryCategory]} · {project.crossTags.map((tag) => moduleLabels[tag]).join(" + ")}</p>}
            <h2>{project.title}</h2>
            <p className="project-entry-summary">{project.longDescription}</p>
            <dl>
              <div><dt>The question</dt><dd>{project.problem}</dd></div>
              <div><dt>The artifact</dt><dd>{project.artifact}</dd></div>
            </dl>
            <div className="project-entry-links">
              {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer">{project.repoLabel ?? "Repository"} ↗</a>}
              {project.additionalLinks?.map((link) => (
                <a href={link.url} target="_blank" rel="noreferrer" key={link.url}>{link.label} ↗</a>
              ))}
              {project.paperUrl && <a href={project.paperUrl} target="_blank" rel="noreferrer">Paper ↗</a>}
              {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Demo ↗</a>}
              {!project.repoUrl && <span>{project.repoLabel ?? "Public artifact forthcoming"}</span>}
            </div>
          </div>
          <div className="project-entry-tech" role="list" aria-label="Technologies">
            {project.technologies.map((technology) => <span role="listitem" key={technology}>{technology}</span>)}
          </div>
        </article>
      ))}
    </div>
  );
}
