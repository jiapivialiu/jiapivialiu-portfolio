type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="container page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <div className="intro-grid">
        <h1>{title}</h1>
        <p className="intro-copy">{description}</p>
      </div>
      <p className="status-line">Section in development</p>
    </section>
  );
}
