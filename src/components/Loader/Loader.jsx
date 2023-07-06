import styles from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
