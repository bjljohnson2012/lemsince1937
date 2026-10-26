"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { heroPoster, heroVideo } from "@/lib/site";
import { BookIcon, CalendarIcon } from "./Icons";
import styles from "./Hero.module.css";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;

    const start = () => {
      const el = videoRef.current;
      if (cancelled || !el) return;
      el.muted = true;
      el.defaultMuted = true;
      el.playsInline = true;
      el.preload = "auto";
      el.src = heroVideo;
      el.addEventListener("playing", () => setPlaying(true), { once: true });
      const tryPlay = () => {
        el.play().catch(() => {});
      };
      el.addEventListener("loadeddata", tryPlay, { once: true });
      tryPlay();
    };

    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(start, { timeout: 1200 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(id);
      };
    }

    const id = window.setTimeout(start, 250);
    return () => {
      cancelled = true;
      window.clearTimeout(id);
    };
  }, []);

  return (
    <section className={styles.hero} aria-label="Introduction">
      <img
        className={styles.poster}
        src={heroPoster}
        alt=""
        width={1280}
        height={720}
        fetchPriority="high"
        decoding="async"
      />
      <video
        ref={videoRef}
        className={playing ? `${styles.video} ${styles.videoOn}` : styles.video}
        muted
        loop
        playsInline
        preload="none"
        poster={heroPoster}
        aria-hidden="true"
        tabIndex={-1}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
      />
      <div className={styles.panel}>
        <p className={styles.kicker}>Join us in serving Christ</p>
        <h1 className={styles.title}>LEM</h1>
        <p className={styles.since}>Since 1937</p>
        <div className={styles.actions}>
          <Link className={styles.pill} href="/about">
            Our history <BookIcon />
          </Link>
          <Link className={styles.pill} href="/events">
            Next event <CalendarIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
