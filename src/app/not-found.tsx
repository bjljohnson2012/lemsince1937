import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <header className="pageHead">
        <div className="pageHeadInner">
          <h1>Page not found</h1>
          <p>That address is not on this site.</p>
        </div>
      </header>
      <div className="wrap prose">
        <p>
          <Link href="/">Back to the home page</Link>
        </p>
      </div>
    </>
  );
}
