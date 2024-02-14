import Link from "next/link";
import { redirect } from "next/navigation";
export const metadata = {
  title: "settings page title",
};
export default function Page() {
  /* redirect("https://www.google.com");
  redirect("/login"); */
  return (
    <>
      <Link href={"/dashboard"}>go to dashboard from settings page</Link>
      <Link href={"dashboard/extra"}>
        test leaf replacement from settings page
      </Link>
      <div>dashboard settings page</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div id="bottom">bottom</div>
    </>
  );
}
