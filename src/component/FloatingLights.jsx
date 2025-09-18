import styles from "./FloatingLights.module.css";

export default function FloatingLights() {
  return (
    <div className={styles.floatingLights}>
      <div
        className={styles.lightOrb}
        style={{
          "--delay": "0s",
          "--duration": "8s",
          "--x": "10%",
          "--y": "20%",
          "--color": "rgba(30, 58, 138, 0.15)",
          "--color2": "rgba(30, 58, 138, 0.08)",
          "--color3": "rgba(30, 58, 138, 0.2)",
          "--color4": "rgba(30, 58, 138, 0.12)",
          "--color5": "rgba(30, 58, 138, 0.3)",
          "--color6": "rgba(30, 58, 138, 0.15)",
        }}
      ></div>
      <div
        className={styles.lightOrb}
        style={{
          "--delay": "2s",
          "--duration": "12s",
          "--x": "80%",
          "--y": "15%",
          "--color": "rgba(37, 99, 235, 0.15)",
          "--color2": "rgba(37, 99, 235, 0.08)",
          "--color3": "rgba(37, 99, 235, 0.2)",
          "--color4": "rgba(37, 99, 235, 0.12)",
          "--color5": "rgba(37, 99, 235, 0.3)",
          "--color6": "rgba(37, 99, 235, 0.15)",
        }}
      ></div>
      <div
        className={styles.lightOrb}
        style={{
          "--delay": "4s",
          "--duration": "10s",
          "--x": "20%",
          "--y": "70%",
          "--color": "rgba(37, 99, 235, 0.08)",
          "--color2": "rgba(37, 99, 235, 0.03)",
          "--color3": "rgba(37, 99, 235, 0.12)",
          "--color4": "rgba(37, 99, 235, 0.06)",
          "--color5": "rgba(37, 99, 235, 0.2)",
          "--color6": "rgba(37, 99, 235, 0.08)",
        }}
      ></div>
      <div
        className={styles.lightOrb}
        style={{
          "--delay": "1s",
          "--duration": "14s",
          "--x": "70%",
          "--y": "60%",
          "--color": "rgba(30, 58, 138, 0.08)",
          "--color2": "rgba(30, 58, 138, 0.03)",
          "--color3": "rgba(30, 58, 138, 0.12)",
          "--color4": "rgba(30, 58, 138, 0.06)",
          "--color5": "rgba(30, 58, 138, 0.2)",
          "--color6": "rgba(30, 58, 138, 0.08)",
        }}
      ></div>
      <div
        className={styles.lightOrb}
        style={{
          "--delay": "3s",
          "--duration": "9s",
          "--x": "50%",
          "--y": "40%",
          "--color": "rgba(30, 58, 138, 0.08)",
          "--color2": "rgba(30, 58, 138, 0.03)",
          "--color3": "rgba(30, 58, 138, 0.12)",
          "--color4": "rgba(30, 58, 138, 0.06)",
          "--color5": "rgba(30, 58, 138, 0.2)",
          "--color6": "rgba(30, 58, 138, 0.08)",
        }}
      ></div>
      <div
        className={styles.lightOrb}
        style={{
          "--delay": "5s",
          "--duration": "11s",
          "--x": "90%",
          "--y": "80%",
          "--color": "rgba(37, 99, 235, 0.08)",
          "--color2": "rgba(37, 99, 235, 0.03)",
          "--color3": "rgba(37, 99, 235, 0.12)",
          "--color4": "rgba(37, 99, 235, 0.06)",
          "--color5": "rgba(37, 99, 235, 0.2)",
          "--color6": "rgba(37, 99, 235, 0.08)",
        }}
      ></div>
      <div
        className={styles.lightOrb}
        style={{
          "--delay": "1.5s",
          "--duration": "13s",
          "--x": "5%",
          "--y": "50%",
          "--color": "rgba(37, 99, 235, 0.15)",
          "--color2": "rgba(37, 99, 235, 0.08)",
          "--color3": "rgba(37, 99, 235, 0.2)",
          "--color4": "rgba(37, 99, 235, 0.12)",
          "--color5": "rgba(37, 99, 235, 0.3)",
          "--color6": "rgba(37, 99, 235, 0.15)",
        }}
      ></div>
      <div
        className={styles.lightOrb}
        style={{
          "--delay": "3.5s",
          "--duration": "7s",
          "--x": "60%",
          "--y": "10%",
          "--color": "rgba(37, 99, 235, 0.08)",
          "--color2": "rgba(37, 99, 235, 0.03)",
          "--color3": "rgba(37, 99, 235, 0.12)",
          "--color4": "rgba(37, 99, 235, 0.06)",
          "--color5": "rgba(37, 99, 235, 0.2)",
          "--color6": "rgba(37, 99, 235, 0.08)",
        }}
      ></div>
    </div>
  );
}
