import styles from "./Toggler.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { THEME } from "@/constants/themeMode";

export const Toggler = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={mode === THEME.light ? styles.ballLeft : styles.ballRight}
      />
    </div>
  );
};

// export default Toggler;
