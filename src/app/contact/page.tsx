import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import {
  addressLine1,
  addressLine2,
  email,
  phoneDisplay,
  phoneTel,
} from "@/lib/site";
import styles from "../content.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: `Call ${phoneDisplay}, email ${email}, or write ${addressLine1}, ${addressLine2}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <header className="pageHead">
        <div className="pageHeadInner">
          <p className="pageKicker">Lutheran Evangelistic Movement</p>
          <h1>Contact</h1>
          <p>Pastor Jim Johnson is the person to call or write.</p>
        </div>
      </header>
      <div className="wrap">
        <ul className={styles.facts}>
          <li>
            <span>Phone</span>
            <a href={`tel:${phoneTel}`}>{phoneDisplay}</a>
          </li>
          <li>
            <span>Email</span>
            <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li>
            <span>Mail</span>
            <strong>
              {addressLine1}
              <br />
              {addressLine2}
            </strong>
          </li>
        </ul>
        <ContactForm />
      </div>
    </>
  );
}
