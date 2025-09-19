// ========================================
// INTRO ANIMATION KOMPONENT - Intro.jsx
// ========================================
// Dette er intro animationen der vises når applikationen starter
// Den viser portfolie navnet i 3 sekunder og kalder derefter onFinish

// Importerer React hooks til state management og side effekter
import { useEffect, useState } from "react";
// Importerer CSS styles for intro animationen
import styles from "./Intro.module.css";

// Intro komponenten der tager onFinish callback som prop
export default function Intro({ onFinish }) {
  // ========================================
  // STATE MANAGEMENT
  // ========================================

  // State til at kontrollere om intro animationen skal vises
  const [visible, setVisible] = useState(true);

  // ========================================
  // SIDE EFFECTS
  // ========================================

  // useEffect hook der kører når komponenten loader
  useEffect(() => {
    // Opretter en timer der kører efter 3 sekunder
    const timer = setTimeout(() => {
      // Skjuler intro animationen
      setVisible(false);
      // Kalder onFinish callback hvis den eksisterer
      onFinish?.();
    }, 3000); // 3 sekunder delay

    // Cleanup funktion der rydder op i timer
    return () => clearTimeout(timer);
  }, [onFinish]); // Dependency array med onFinish

  // ========================================
  // CONDITIONAL RENDERING
  // ========================================

  // Hvis visible er false, returner null (renders ingenting)
  if (!visible) return null;

  // ========================================
  // RENDER LOGIC
  // ========================================

  return (
    <div className={styles.intro}>
      {/* Centreret container for intro indhold */}
      <div className={styles.center}>
        {/* Portfolie titel */}
        <h1 className={styles.title}>Annette Skou Portfolie</h1>
      </div>
    </div>
  );
}
