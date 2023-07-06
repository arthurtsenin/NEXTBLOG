import Image from "next/image";
import FacebookImg from "public/1.png";
import InstagramImg from "public/2.png";
import TwitterImg from "public/3.png";
import YouTubeImg from "public/4.png";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 NEXTBLOG. All rights reserved.</div>
      <div className={styles.social}>
        <Image src={FacebookImg} alt="Facebook account" />
        <Image src={InstagramImg} alt="Instagram account" />
        <Image src={TwitterImg} alt="Twitter account" />
        <Image src={YouTubeImg} alt="YouTube account" />
      </div>
    </div>
  );
};
