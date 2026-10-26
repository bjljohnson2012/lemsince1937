import {
  addressLine1,
  addressLine2,
  email,
  facebookGroup,
  phoneDisplay,
  phoneTel,
} from "@/lib/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <p className={styles.label}>Events</p>
          <p className={styles.lead}>
            <a href="/events">Join us at our next conference</a>
          </p>
          <a className="btn" href="/give">
            Donate
          </a>
        </div>
        <div className={styles.address}>
          <p className={styles.label}>Mailing address</p>
          <p>{addressLine1}</p>
          <p>{addressLine2}</p>
        </div>
        <div className={styles.call}>
          <img
            className={styles.logo}
            src="/logo.png"
            alt=""
            width={1200}
            height={843}
          />
          <p>Call us now at</p>
          <p>
            <a href={`tel:${phoneTel}`}>{phoneDisplay}</a>
          </p>
          <p>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <a
            className={styles.facebook}
            href={facebookGroup}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook group
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
      <div className={styles.stripe}>Lutheran Evangelistic Movement</div>
    </footer>
  );
}
