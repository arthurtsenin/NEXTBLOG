import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://next-blog-tsenin.vercel.app//api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata = {
  title: "NEXTBLOG | Blog",
};

export default async function Blog() {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data
        .map((item) => (
          <Link
            href={`/blog/${item._id}`}
            className={styles.container}
            key={item._id}
          >
            <div className={styles.imageContainer}>
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={250}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </Link>
        ))
        .reverse()}
    </div>
  );
}
