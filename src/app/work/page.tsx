import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return <PageIntro eyebrow="01 / Selected work" title="Systems, models, and the decisions around them." description="Case studies in recommender systems, AI systems, and reliable statistical learning are being prepared." />;
}
