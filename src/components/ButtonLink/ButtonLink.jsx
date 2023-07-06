import Link from "next/link";
import styles from "./ButtonLink.module.css";

export const ButtonLink = ({ text, url = "#" }) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};
