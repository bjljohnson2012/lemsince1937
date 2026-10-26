import Link from "next/link";
import { preconnect, preload } from "react-dom";
import { Hero } from "@/components/Hero";
import {
  email,
  heroMediaOrigin,
  heroPoster,
  midwinter,
  registerUrl,
  storyEmbed,
} from "@/lib/site";
import styles from "./home.module.css";

export const metadata = {
  description:
    "Pointing people to Jesus since 1937. The Lutheran Evangelistic Movement welcomes pastors, churches, and friends to prayer, preaching, and Bible conferences.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  preconnect(heroMediaOrigin);
  preload(heroPoster, { as: "image", fetchPriority: "high" });

  return (
    <>
      <Hero />

      <section className={styles.welcome} aria-labelledby="welcome-heading">
        <h2 id="welcome-heading" className={styles.sectionTitle}>
          Welcome to LEM
        </h2>
        <p className={styles.vision}>
          Our vision is to see lives transformed by the power of the gospel by Making
          Disciples and Being Disciples.
        </p>
      </section>

      <section className={styles.work} aria-labelledby="work-heading">
        <h2 id="work-heading" className={styles.sectionTitle}>
          What do we do?
        </h2>
        <div className={styles.cards}>
          <article className={styles.card}>
            <img
              className={styles.photo}
              src="/images/pastors.jpg"
              alt="A speaker with the congregation at an LEM gathering"
              width={1400}
              height={894}
            />
            <h3>For pastors</h3>
            <p>Learn more about our regional conferences</p>
            <Link className="btn" href="/events">
              Register
            </Link>
          </article>
          <article className={styles.card}>
            <img
              className={`${styles.photo} ${styles.ministry}`}
              src="/images/ministry.jpg"
              alt="A pastor preaching at a lectern"
              width={1400}
              height={1600}
            />
            <h3>Our ministry</h3>
            <p>Learn more about our ministry</p>
            <Link className="btn" href="/about">
              Learn more
            </Link>
          </article>
        </div>
      </section>

      <section className={styles.band} aria-label="Upcoming conference">
        <img
          src="/images/conference.jpg"
          alt="Eagle Grove conference, 1939"
          width={1920}
          height={500}
        />
        <div className={styles.bandShade} />
        <div className={styles.bandInner}>
          <p className={styles.confKicker}>Upcoming conference</p>
          <a className="btn" href={registerUrl} target="_blank" rel="noopener noreferrer">
            Register now →
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <p className={styles.confMeta}>
            {midwinter.theme} · {midwinter.dates}
          </p>
        </div>
      </section>

      <section className={styles.story} aria-labelledby="story-heading">
        <div className={styles.storyCard}>
          <p className={styles.storyKicker}>Our story</p>
          <h2 id="story-heading">Remembering God&apos;s Mighty Works</h2>
          <p className={styles.storyLede}>
            Jonathan Anderson on the Lutheran Evangelistic Movement, from the
            2014 AFLC pastors&apos; conference.
          </p>
          <div className={styles.frame}>
            <iframe
              src={storyEmbed}
              title="Remembering God's Mighty Works"
              loading="lazy"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      <section className={styles.motto} aria-labelledby="motto-heading">
        <h2 id="motto-heading" className={styles.sectionTitle}>
          Pointing people to Jesus since 1937
        </h2>
        <p className={styles.mottoLine}>Renewing. Repenting. Returning.</p>
        <p className={styles.disciple}>Making disciples and being disciples.</p>
        <Link className="btn" href="/about">
          Learn more
        </Link>
      </section>

      <section className={styles.join} aria-labelledby="join-heading">
        <img
          src="/images/gathering.jpg"
          alt=""
          width={1600}
          height={2133}
        />
        <div className={styles.joinShade} />
        <div className={styles.joinInner}>
          <p className={styles.joinLabel}>Join us</p>
          <h2 id="join-heading">
            Take part in what the Lord is doing around the country
          </h2>
          <div className={styles.joinActions}>
            <Link className="btn btnLight" href="/give">
              Support our ministry
            </Link>
            <a
              className="btn btnLight"
              href={`mailto:${email}?subject=${encodeURIComponent("Please add me to the LEM letter")}`}
            >
              Subscribe to our letter
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
