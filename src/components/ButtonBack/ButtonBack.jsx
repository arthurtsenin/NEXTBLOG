"use client";
import styles from "./ButtonBack.module.css";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

export const ButtonBack = () => {
  const route = useRouter();

  return (
    <button className={styles.back} onClick={() => route.back()}>
      <BsArrowLeft />
      back
    </button>
  );
};
