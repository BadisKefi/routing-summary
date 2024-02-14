"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  console.log("pathname : " + pathname);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      {[...Array(4)].map((_, index) => (
        <Link
          className={buttonVariants({ variant: "link" })}
          href={`button/${index + 1}`}
          key={index + 1}
        >
          Button {index + 1}
        </Link>
      ))}
      <Link
        className={buttonVariants({ variant: "link" })}
        href={"dashboard/settings#bottom"}
        scroll={false}
      >
        Button Dashboard Settings Bottom
      </Link>
    </main>
  );
}
