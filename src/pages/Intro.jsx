import { useEffect, useState } from "react";
import styles from "./Intro.module.css";

export default function Intro({ onFinish }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish?.();
    }, 3000); // 3 sekunder
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className={styles.intro}>
      <div className={styles.center}>
        <h1 className={styles.title}>Annette Skou Portfolie</h1>
      </div>
    </div>
  );
}
