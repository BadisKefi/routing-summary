"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    console.log("dashboard page is a client component!");
  }, []);
  return (
    <>
      <Link href={"/dashboard/settings"}>
        go to settings from dashboard page
      </Link>
      <div>dashboard page</div>
    </>
  );
}
