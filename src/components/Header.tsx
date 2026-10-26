"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={styles.bar}>
      <Link href="/" className={styles.logo}>
        <img
          src="/logo.png"
          alt="LEM, Lutheran Evangelistic Movement, since 1937"
          width={1200}
          height={843}
        />
      </Link>
      <nav
        id="site-nav"
        className={open ? `${styles.nav} ${styles.open}` : styles.nav}
        aria-label="Primary"
      >
        {nav.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={active ? `${styles.link} ${styles.active}` : styles.link}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className={styles.tools}>
        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className={styles.bars} />
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
        <Link href="/give" className="btn">
          Donate
        </Link>
      </div>
    </header>
  );
}
