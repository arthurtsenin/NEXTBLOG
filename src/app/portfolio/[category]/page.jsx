import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import { ButtonBack } from "@/components/ButtonBack/ButtonBack";
import { items } from "./data";

const getData = (cat) => {
  const data = items[cat];

  if (data) return data;

  return notFound();
};

export async function generateMetadata({ params }) {
  return {
    title: `NEXTBLOG | Portfolio | ${params.category}`,
  };
}

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <ButtonBack />
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <ButtonLink text="See More" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={item.image}
              alt={item.title}
              sizes="100vh"
              fill
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
