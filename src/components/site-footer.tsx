import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <p className="footer-statement">Reason carefully.<br />Build boldly. Evaluate honestly.</p>
        <div className="footer-meta">
          <span>{siteConfig.fullName}</span>
          <a href={siteConfig.github} target="_blank" rel="noreferrer">{siteConfig.handle} ↗</a>
          <span>{siteConfig.location}</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
