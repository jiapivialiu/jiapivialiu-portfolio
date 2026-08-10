import type { Metadata } from "next";

import { notes } from "@/data/site";

export const metadata: Metadata = {
  title: "Notes",
  description: "Working notes by Olivia Liu on statistical reasoning, machine learning systems, recommender systems, and AI evaluation.",
  alternates: { canonical: "/notes" },
};

export default function NotesPage() {
  return (
    <div className="notes-page container">
      <header className="route-hero">
        <p className="section-label">02 / Notes</p>
        <h1>Evidence, feedback,<br /><em>and better questions.</em></h1>
        <p>Short writing on how models meet data, systems, people, and judgment. This collection is being developed in public; topics below are the first editorial tracks.</p>
      </header>
      <div className="notes-index">
        {notes.map((note, index) => (
          <article key={note.title}>
            <span>0{index + 1}</span>
            <div>
              <p>{note.category}</p>
              <h2>{note.title}</h2>
            </div>
            <p>{note.description}</p>
            <small>Working note</small>
          </article>
        ))}
      </div>
      <aside className="notes-principle">
        <p>Editorial principle</p>
        <blockquote>Write to make the assumptions visible—not to make the work sound finished.</blockquote>
      </aside>
    </div>
  );
}
