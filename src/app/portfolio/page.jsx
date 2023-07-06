import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_LINKS } from "@/constants/portfolioLinks";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Our Works</h1>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        {Object.values(PORTFOLIO_LINKS).map((link) => (
          <Link key={link.id} href={link.url} className={styles.item}>
            <Image
              className={styles.img}
              alt={link.title}
              src={link.img}
              sizes="100vh"
              priority
              fill
            />
            <span className={styles.title}>{link.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
