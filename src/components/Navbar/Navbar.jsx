"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Toggler } from "@/components/Toggler/Toggler";
import { LINKS } from "@/constants/links";
import { AUTH_STATUS } from "@/constants/authStatus";

export const Navbar = () => {
  const session = useSession();
  const segment = useSelectedLayoutSegment();

  return (
    <nav className={styles.links}>
      <Toggler />
      {Object.values(LINKS).map((link) => {
        const isActive = link.url === `/${segment || ""}`;

        return (
          <Link
            key={link.id}
            href={link.url}
            className={isActive ? styles.activelink : styles.link}
          >
            {link.title}
          </Link>
        );
      })}
      {session.status === AUTH_STATUS.authenticated && (
        <button className={styles.logout} onClick={signOut}>
          Logout
        </button>
      )}
    </nav>
  );
};
