import Link from "next/link";

export default function HomePage() {
  return (
    <section className="foundation-hero">
      <p className="eyebrow">Statistics · Machine Learning · AI Systems</p>
      <h1>
        I build models.
        <br />
        <em>I evaluate intelligence.</em>
      </h1>
      <div className="foundation-meta">
        <p>Statistician by training. Builder by practice. Evaluator by instinct.</p>
        <Link className="text-link" href="/work">
          View selected work <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
