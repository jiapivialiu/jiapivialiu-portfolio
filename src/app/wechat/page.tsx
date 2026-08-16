import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WeChat",
  description: "Connect with Jiaping Liu on WeChat.",
  robots: { index: false, follow: false },
};

export default function WeChatPage() {
  return (
    <main className="wechat-page">
      <section className="container wechat-page-layout" aria-labelledby="wechat-page-title">
        <div className="wechat-page-copy">
          <p className="section-label">Stay in touch</p>
          <h1 id="wechat-page-title">Add me on<br /><em>WeChat.</em></h1>
          <p>Scan the QR code with WeChat to connect with me.</p>
          <Link href="/life">← Back to Life</Link>
        </div>
        <figure className="wechat-page-qr">
          <Image
            src="/wechat.JPG"
            alt="WeChat QR code for Jiaping Liu"
            width={888}
            height={1131}
            priority
          />
        </figure>
      </section>
    </main>
  );
}
