import styles from "./Header.module.css";
import Link from "next/link";
import { Navbar } from "@/components/Navbar/Navbar";
import { LINKS } from "@/constants/links";
import { SiNextdotjs } from "react-icons/si";

export const Header = () => {
  return (
    <header className={styles.container}>
      <Link href={LINKS.home.url} className={styles.logo}>
        <SiNextdotjs />
        <div className={styles.logoText}>
          NEXT<span>BLOG</span>
        </div>
      </Link>
      <Navbar />
    </header>
  );
};
