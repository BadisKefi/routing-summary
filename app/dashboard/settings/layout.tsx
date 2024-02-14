"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("dashboard settings layout is a client component!");
  }, []);
  return (
    <>
      <Link href={"/dashboard"}>go to dashboard from settings page</Link>
      <div>dashboard settings layout</div>
      {children}
    </>
  );
}
