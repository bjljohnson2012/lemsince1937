"use client";

import { FormEvent, useState } from "react";
import { email } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const from = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = `LEM note from ${name || "a friend"}`;
    const body = [message, "", from ? `Reply email: ${from}` : "", name ? `Name: ${name}` : ""]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(
      `Your email program should open with this note addressed to ${email}. If it does not, write that address directly.`,
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        Your email
        <input name="email" type="email" autoComplete="email" />
      </label>
      <label>
        Message
        <textarea name="message" rows={6} required />
      </label>
      <button className="btn" type="submit">
        Email this note
      </button>
      <p className="note">
        This opens your email program. Nothing is stored on this website.
        {status ? ` ${status}` : ""}
      </p>
    </form>
  );
}
