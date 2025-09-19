// ========================================
// FLOATING LIGHTS KOMPONENT - FloatingLights.jsx
// ========================================
// Dette er en baggrundseffekt komponent der skaber flydende lys kugler
// med forskellige animationer og farver for at give en dynamisk baggrund

// Importerer CSS styles for floating lights effekten
import styles from "./FloatingLights.module.css";

// FloatingLights komponenten der skaber animerede lys kugler
export default function FloatingLights() {
  return (
    <div className={styles.floatingLights}>
      {/* ========================================
           LYS KUGLE 1 - Mørk blå med 8s animation
           ======================================== */}
      <div
        className={styles.lightOrb}
        style={{
          "--delay": "0s", // Starter med det samme
          "--duration": "8s", // Animation varer 8 sekunder
          "--x": "10%", // Position: 10% fra venstre
          "--y": "20%", // Position: 20% fra toppen
          // Mørk blå farvepalette med forskellige transparens niveauer
          "--color": "rgba(30, 58, 138, 0.15)",
          "--color2": "rgba(30, 58, 138, 0.08)",
          "--color3": "rgba(30, 58, 138, 0.2)",
          "--color4": "rgba(30, 58, 138, 0.12)",
          "--color5": "rgba(30, 58, 138, 0.3)",
          "--color6": "rgba(30, 58, 138, 0.15)",
        }}
      ></div>

      {/* ========================================
           LYS KUGLE 2 - Medium blå med 12s animation
           ======================================== */}
      <div
        className={styles.lightOrb}
        style={{
          "--delay": "2s", // Starter efter 2 sekunder
          "--duration": "12s", // Animation varer 12 sekunder
          "--x": "80%", // Position: 80% fra venstre
          "--y": "15%", // Position: 15% fra toppen
          // Medium blå farvepalette
          "--color": "rgba(37, 99, 235, 0.15)",
          "--color2": "rgba(37, 99, 235, 0.08)",
          "--color3": "rgba(37, 99, 235, 0.2)",
          "--color4": "rgba(37, 99, 235, 0.12)",
          "--color5": "rgba(37, 99, 235, 0.3)",
          "--color6": "rgba(37, 99, 235, 0.15)",
        }}
      ></div>

      {/* ========================================
           LYS KUGLE 3 - Medium blå med 10s animation
           ======================================== */}
      <div
        className={styles.lightOrb}
        style={{
          "--delay": "4s", // Starter efter 4 sekunder
          "--duration": "10s", // Animation varer 10 sekunder
          "--x": "20%", // Position: 20% fra venstre
          "--y": "70%", // Position: 70% fra toppen
          // Lysere medium blå farvepalette
          "--color": "rgba(37, 99, 235, 0.08)",
          "--color2": "rgba(37, 99, 235, 0.03)",
          "--color3": "rgba(37, 99, 235, 0.12)",
          "--color4": "rgba(37, 99, 235, 0.06)",
          "--color5": "rgba(37, 99, 235, 0.2)",
          "--color6": "rgba(37, 99, 235, 0.08)",
        }}
      ></div>

      {/* ========================================
           LYS KUGLE 4 - Mørk blå med 14s animation
           ======================================== */}
      <div
        className={styles.lightOrb}
        style={{
          "--delay": "1s", // Starter efter 1 sekund
          "--duration": "14s", // Animation varer 14 sekunder
          "--x": "70%", // Position: 70% fra venstre
          "--y": "60%", // Position: 60% fra toppen
          // Lysere mørk blå farvepalette
          "--color": "rgba(30, 58, 138, 0.08)",
          "--color2": "rgba(30, 58, 138, 0.03)",
          "--color3": "rgba(30, 58, 138, 0.12)",
          "--color4": "rgba(30, 58, 138, 0.06)",
          "--color5": "rgba(30, 58, 138, 0.2)",
          "--color6": "rgba(30, 58, 138, 0.08)",
        }}
      ></div>

      {/* ========================================
           LYS KUGLE 5 - Mørk blå med 9s animation
           ======================================== */}
      <div
        className={styles.lightOrb}
        style={{
          "--delay": "3s", // Starter efter 3 sekunder
          "--duration": "9s", // Animation varer 9 sekunder
          "--x": "50%", // Position: 50% fra venstre (centreret)
          "--y": "40%", // Position: 40% fra toppen
          // Lysere mørk blå farvepalette
          "--color": "rgba(30, 58, 138, 0.08)",
          "--color2": "rgba(30, 58, 138, 0.03)",
          "--color3": "rgba(30, 58, 138, 0.12)",
          "--color4": "rgba(30, 58, 138, 0.06)",
          "--color5": "rgba(30, 58, 138, 0.2)",
          "--color6": "rgba(30, 58, 138, 0.08)",
        }}
      ></div>

      {/* ========================================
           LYS KUGLE 6 - Medium blå med 11s animation
           ======================================== */}
      <div
        className={styles.lightOrb}
        style={{
          "--delay": "5s", // Starter efter 5 sekunder
          "--duration": "11s", // Animation varer 11 sekunder
          "--x": "90%", // Position: 90% fra venstre
          "--y": "80%", // Position: 80% fra toppen
          // Lysere medium blå farvepalette
          "--color": "rgba(37, 99, 235, 0.08)",
          "--color2": "rgba(37, 99, 235, 0.03)",
          "--color3": "rgba(37, 99, 235, 0.12)",
          "--color4": "rgba(37, 99, 235, 0.06)",
          "--color5": "rgba(37, 99, 235, 0.2)",
          "--color6": "rgba(37, 99, 235, 0.08)",
        }}
      ></div>

      {/* ========================================
           LYS KUGLE 7 - Medium blå med 13s animation
           ======================================== */}
      <div
        className={styles.lightOrb}
        style={{
          "--delay": "1.5s", // Starter efter 1.5 sekunder
          "--duration": "13s", // Animation varer 13 sekunder
          "--x": "5%", // Position: 5% fra venstre
          "--y": "50%", // Position: 50% fra toppen (centreret)
          // Medium blå farvepalette
          "--color": "rgba(37, 99, 235, 0.15)",
          "--color2": "rgba(37, 99, 235, 0.08)",
          "--color3": "rgba(37, 99, 235, 0.2)",
          "--color4": "rgba(37, 99, 235, 0.12)",
          "--color5": "rgba(37, 99, 235, 0.3)",
          "--color6": "rgba(37, 99, 235, 0.15)",
        }}
      ></div>

      {/* ========================================
           LYS KUGLE 8 - Medium blå med 7s animation
           ======================================== */}
      <div
        className={styles.lightOrb}
        style={{
          "--delay": "3.5s", // Starter efter 3.5 sekunder
          "--duration": "7s", // Animation varer 7 sekunder
          "--x": "60%", // Position: 60% fra venstre
          "--y": "10%", // Position: 10% fra toppen
          // Lysere medium blå farvepalette
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
