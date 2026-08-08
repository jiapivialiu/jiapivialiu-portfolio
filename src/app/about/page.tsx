import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return <PageIntro eyebrow="03 / About" title="Statistics is the foundation, not the destination." description="Jiaping Liu builds and evaluates intelligent systems across machine learning, recommendation, experimentation, and human judgment." />;
}
