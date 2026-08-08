import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <p className="footer-statement">Build. Evaluate. Learn.</p>
        <div className="footer-meta">
          <span>{siteConfig.name}</span>
          <span>{siteConfig.location}</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
