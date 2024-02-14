"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Layout({ children }) {
  useEffect(() => {
    console.log("dashboard layout is a client component!");
  }, []);
  return (
    <>
      <Link href={"/dashboard/settings"}>
        go to settings from dashboard layout
      </Link>

      <div>dashboard layout</div>
      {children}
    </>
  );
}
