"use client";
"use client";
import dynamic from "next/dynamic";
const SoftconUnifiedApp = dynamic(() => import("../peges/index.js"), { ssr: false });

export default function Home() {
  return <SoftconUnifiedApp />;
}
