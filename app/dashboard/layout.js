"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Layout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    console.log("dashboard layout is a client component!");
  }, []);
  return (
    <>
      <Link href={"/dashboard/settings"}>
        go to settings from dashboard layout
      </Link>
      {pathname === "/dashboard" ? "pathnameD" : "pathnameElse"}

      <div>dashboard layout</div>
      {children}
    </>
  );
}
