import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-meta">
          <span>{siteConfig.fullName}</span>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <span>{siteConfig.location}</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
