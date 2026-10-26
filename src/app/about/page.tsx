import type { Metadata } from "next";
import Link from "next/link";
import { email, phoneDisplay, phoneTel } from "@/lib/site";
import styles from "../content.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Lutheran Evangelistic Movement has pointed people to Jesus since 1937 through prayer, preaching, and Bible conferences.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <header className="pageHead">
        <div className="pageHeadInner">
          <p className="pageKicker">Lutheran Evangelistic Movement</p>
          <h1>About</h1>
          <p>Pointing people to Jesus since 1937.</p>
        </div>
      </header>
      <div className="wrap">
        <div className={styles.split}>
          <div className="prose">
            <p>
              The Lutheran Evangelistic Movement serves pastors and churches by
              prayer, preaching, and Bible conferences. Our aim is simple: lives
              changed by the gospel, making disciples and being disciples.
            </p>
            <h2>From the 1951 constitution</h2>
            <blockquote>
              <p>
                The Lutheran Evangelistic Movement has as its purpose by God&apos;s
                grace to revive and deepen the spiritual life and fellowship of
                believers, to save the lost, and to encourage the use of spiritual
                gifts for the extension of Christ&apos;s kingdom.
              </p>
            </blockquote>
            <p className="note">Renewing. Repenting. Returning.</p>
            <h2>The work today</h2>
            <p>
              A board of directors guides the movement. Volunteer evangelists,
              along with preachers and teachers who serve part of the time, help
              Lutheran churches cultivate a living faith.
            </p>
            <p>
              Pastor Jim Johnson is serving as interim director. Call him at{" "}
              <a href={`tel:${phoneTel}`}>{phoneDisplay}</a> or write{" "}
              <a href={`mailto:${email}`}>{email}</a>.
            </p>
            <p>
              Vern Baardson, in the Fargo–Moorhead area, is available for preaching
              and music. Casey Baardson speaks at women&apos;s retreats, conferences,
              and Bible workshops. Prayer and worship leaders include Joel Kangas,
              Dean Hedlund, Erik Rust, and James Rostad.
            </p>
            <h2>Board and historian</h2>
            <ul className="people">
              <li>Kurt Linn, director</li>
              <li>Peter Churness, board</li>
              <li>Tom Hilpert, board</li>
              <li>Jim Johnson, board and interim director</li>
              <li>Dick Klawitter, board</li>
              <li>Bob Mabry, board</li>
              <li>Jonathan Anderson, historian</li>
            </ul>
            <p>
              <Link href="/events">See the next conference</Link>
              {" · "}
              <Link href="/give">Support the ministry</Link>
            </p>
          </div>
          <figure>
            <img
              className={styles.portrait}
              src="/images/preacher.jpg"
              alt="A pastor preaching at an LEM gathering"
              width={1600}
              height={1086}
            />
          </figure>
        </div>
      </div>
    </>
  );
}
