"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("dashboard template is a client component!");
  }, []);
  return (
    <>
      <Link href={"/dashboard/settings"}>
        go to settings from dashboard template
      </Link>

      <div>dashboard template</div>
      <div>{children}</div>
    </>
  );
}
