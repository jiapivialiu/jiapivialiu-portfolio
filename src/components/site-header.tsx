import Link from "next/link";

import { siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="wordmark" href="/" aria-label={`${siteConfig.name}, home`}>
          <span>JL</span>Olivia&apos;s Site
        </Link>
      </div>
    </header>
  );
}
