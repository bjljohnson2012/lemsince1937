import type { Metadata } from "next";
import {
  email,
  midwinter,
  phoneDisplay,
  phoneTel,
  registerUrl,
} from "@/lib/site";
import styles from "../content.module.css";

export const metadata: Metadata = {
  title: "Events",
  description: `LEM Midwinter Arizona Retreat, ${midwinter.dates}. Theme: ${midwinter.theme}.`,
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return (
    <>
      <header className="pageHead">
        <div className="pageHeadInner">
          <p className="pageKicker">Conferences</p>
          <h1>Events</h1>
          <p>Friends of LEM are welcome. Come and hear the Word.</p>
        </div>
      </header>
      <div className="wrap">
        <article className={styles.feature} id="midwinter">
          <p className={styles.kicker}>{midwinter.name}</p>
          <h2 className={styles.theme}>{midwinter.theme}</h2>
          <p className={styles.dates}>
            {midwinter.dates} · {midwinter.place}
          </p>
          <p>
            Registration and meals are free. Your RSVP helps us plan the week
            well.
          </p>
          <dl className={styles.venues}>
            <div>
              <dt>Mornings</dt>
              <dd>
                <a href={midwinter.morningsMap} target="_blank" rel="noopener noreferrer">
                  {midwinter.mornings}
                  <span className="sr-only"> (map, opens in a new tab)</span>
                </a>
              </dd>
            </div>
            <div>
              <dt>Evenings</dt>
              <dd>
                <a href={midwinter.eveningsMap} target="_blank" rel="noopener noreferrer">
                  {midwinter.evenings}
                  <span className="sr-only"> (map, opens in a new tab)</span>
                </a>
              </dd>
            </div>
          </dl>
          <div className={styles.actions}>
            <a className="btn" href={registerUrl} target="_blank" rel="noopener noreferrer">
              Register online
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <p className="note">
            Questions: <a href={`tel:${phoneTel}`}>{phoneDisplay}</a>
            {" · "}
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </article>

        <div className={`prose ${styles.aside}`}>
          <h2>For pastors</h2>
          <p>
            LEM also holds regional conferences for pastors and church leaders.
            To ask about a gathering near you, call or email Pastor Jim Johnson.
          </p>
          <h2>Canada</h2>
          <p>
            Friends of the movement gather in Canada as well, including
            disciple-making conferences in Camrose, Alberta. Call or email for
            the next date.
          </p>
        </div>

        <figure className={styles.history}>
          <img
            src="/images/conference.jpg"
            alt="The Eagle Grove conference in 1939"
            width={1920}
            height={500}
          />
          <figcaption className={styles.caption}>Eagle Grove conference, 1939.</figcaption>
        </figure>
      </div>
    </>
  );
}
