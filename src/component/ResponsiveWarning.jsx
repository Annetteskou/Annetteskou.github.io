// ========================================
// RESPONSIVE WARNING COMPONENT - ResponsiveWarning.jsx
// ========================================
// Dette komponent viser en advarsels popup når skærmen gøres mindre
// og fortæller at den responsive udvikling er under udvikling

import { useState, useEffect } from "react";
import styles from "./ResponsiveWarning.module.css";

// Hovedfunktion der definerer ResponsiveWarning komponenten
function ResponsiveWarning() {
  // ========================================
  // STATE MANAGEMENT
  // ========================================

  // State til at kontrollere om popup skal vises
  const [showWarning, setShowWarning] = useState(false);
  // State til at huske om brugeren allerede har set advarslen
  const [warningSeen, setWarningSeen] = useState(false);

  // ========================================
  // SCREEN SIZE DETECTION
  // ========================================

  // Funktion der tjekker om skærmen er for lille
  const checkScreenSize = () => {
    const screenWidth = window.innerWidth;
    const isSmallScreen = screenWidth < 1024; // Tablet/mobile breakpoint

    // Vis popup hvis skærmen er lille og advarslen ikke er set
    if (isSmallScreen && !warningSeen) {
      setShowWarning(true);
    } else if (!isSmallScreen) {
      // Skjul popup hvis skærmen bliver stor igen
      setShowWarning(false);
    }
  };

  // ========================================
  // EVENT HANDLERS
  // ========================================

  // Funktion der kaldes når brugeren lukker popup
  const handleCloseWarning = () => {
    setShowWarning(false);
    setWarningSeen(true);
    // Gemmer i localStorage at advarslen er set
    localStorage.setItem("responsiveWarningSeen", "true");
  };

  // ========================================
  // SIDE EFFECTS
  // ========================================

  // useEffect der initialiserer screen size detection
  useEffect(() => {
    // Tjekker om advarslen allerede er set i localStorage
    const warningSeenBefore = localStorage.getItem("responsiveWarningSeen");
    if (warningSeenBefore) {
      setWarningSeen(true);
    }

    // Initial screen size check
    checkScreenSize();

    // Event listener til resize events
    window.addEventListener("resize", checkScreenSize);

    // Cleanup function - fjerner event listener
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [warningSeen]);

  // ========================================
  // RENDER LOGIC
  // ========================================

  // Returnerer null hvis popup ikke skal vises
  if (!showWarning) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.header}>
          <h3 className={styles.title}>⚠️ Responsiv Udvikling</h3>
          <button
            className={styles.closeButton}
            onClick={handleCloseWarning}
            aria-label="Luk advarsel"
          >
            ×
          </button>
        </div>

        <div className={styles.content}>
          <p className={styles.message}>
            Denne side er optimeret til desktop visning. Den responsive
            udvikling for mobile og tablet er i øjeblikket under udvikling.
          </p>
          <p className={styles.subMessage}>
            For den bedste oplevelse, anbefaler jeg at besøge siden på en skærm
            større end 1024px bred.
          </p>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.continueButton}
            onClick={handleCloseWarning}
          >
            Fortsæt alligevel
          </button>
        </div>
      </div>
    </div>
  );
}

// Eksporterer ResponsiveWarning komponenten som default export
export default ResponsiveWarning;
