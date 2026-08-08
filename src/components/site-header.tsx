import Link from "next/link";

import { siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="wordmark" href="/" aria-label="Jiaping Liu, home">
          Jiaping Liu
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link className="nav-link" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a className="nav-link nav-resume" href="/resume.pdf" target="_blank" rel="noreferrer">
                Résumé <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
