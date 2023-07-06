import styles from "./page.module.css";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import { LINKS } from "@/constants/links";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>
            Better design for your digital products.
          </h1>
          <p className={styles.desc}>
            Turning your Idea into Reality. We bring together the teams from the
            global tech industry.
          </p>
          <ButtonLink url={LINKS.portfolio.url} text="See our works" />
        </div>
        <div className={styles.item}>
          <Image
            src={Hero}
            alt="Home banner"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            className={styles.img}
            priority={true}
          />
        </div>
      </div>
    </>
  );
}
