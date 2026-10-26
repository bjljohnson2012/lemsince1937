import type { Metadata } from "next";
import {
  addressLine1,
  addressLine2,
  email,
  giveUrl,
  phoneDisplay,
  phoneTel,
} from "@/lib/site";
import styles from "../content.module.css";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Support the Lutheran Evangelistic Movement online or by check to PO Box 358, Mora, MN 55051.",
  alternates: { canonical: "/give" },
};

export default function GivePage() {
  return (
    <>
      <header className="pageHead">
        <div className="pageHeadInner">
          <p className="pageKicker">Partnership</p>
          <h1>Give</h1>
          <p>
            Gifts keep conferences, preaching, and the day-to-day work of LEM
            going.
          </p>
        </div>
      </header>
      <div className="wrap">
        <div className={styles.options}>
          <article className={styles.option}>
            <h2>Give online</h2>
            <p>
              The secure giving page is hosted by Amplify. It opens in a new tab.
            </p>
            <a className="btn" href={giveUrl} target="_blank" rel="noopener noreferrer">
              Give online
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </article>
          <article className={styles.option}>
            <h2>Give by mail</h2>
            <p>
              Make checks payable to Lutheran Evangelistic Movement and mail them
              to:
            </p>
            <p>
              {addressLine1}
              <br />
              {addressLine2}
            </p>
          </article>
        </div>
        <p className="prose follow">
          Questions about a gift: <a href={`tel:${phoneTel}`}>{phoneDisplay}</a>
          {" · "}
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </>
  );
}
