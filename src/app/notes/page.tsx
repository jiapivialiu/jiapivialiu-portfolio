import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Notes" };

export default function NotesPage() {
  return <PageIntro eyebrow="02 / How I think" title="Notes on evidence, feedback, and evaluation." description="Writing on statistical reasoning, recommender systems, and how we know an intelligent system is actually good." />;
}
