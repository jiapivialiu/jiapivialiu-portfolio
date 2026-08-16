import type { Note } from "@/data/site";

export function ThinkingList({ items, showPrinciple = false }: { items: readonly Note[]; showPrinciple?: boolean }) {
  return (
    <>
      <div className="thinking-index">
        {items.map((note, index) => (
          <article key={note.title}>
            <span>0{index + 1}</span>
            <div>
              <p>{note.category}</p>
              <h3>{note.title}</h3>
            </div>
            <p>{note.description}</p>
            <small>Working note</small>
          </article>
        ))}
      </div>
      {showPrinciple && (
        <aside className="thinking-principle">
          <p>Editorial principle</p>
          <blockquote>Write to make the assumptions visible—not to make the work sound finished.</blockquote>
        </aside>
      )}
    </>
  );
}
