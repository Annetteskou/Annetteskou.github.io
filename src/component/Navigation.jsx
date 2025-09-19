// ========================================
// NAVIGATION KOMPONENT - Navigation.jsx
// ========================================
// Dette er hovednavigationen der vises på alle sider
// Den indeholder links til alle hovedsider med active state styling

// Importerer NavLink fra React Router til navigation mellem sider
import { NavLink } from "react-router";
// Importerer CSS styles for navigation komponenten
import styles from "./Navigation.module.css";

// Navigation komponenten der viser hovedmenuen
export default function Navigation() {
  return (
    <nav className={styles.nav}>
      {/* ========================================
           DEKORATIVT ELEMENT
           ======================================== */}

      {/* HTML kode symbol som dekorativt element */}
      <div className={styles.codeSymbol}>&lt;/&gt;</div>

      {/* ========================================
           NAVIGATION LINKS
           ======================================== */}

      {/* Container for alle navigation links */}
      <div className={styles.navLinks}>
        {/* Hjem link - bruger 'end' prop for exact match */}
        <NavLink
          to="/"
          end // Sikrer at link kun er aktiv på exact "/" path
          className={({ isActive }) =>
            // Conditional styling: tilføjer active klasse hvis link er aktiv
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Hjem
        </NavLink>

        {/* Projekt oversigt link */}
        <NavLink
          to="/project"
          className={({ isActive }) =>
            // Conditional styling: tilføjer active klasse hvis link er aktiv
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Projekt
        </NavLink>

        {/* Om mig link */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            // Conditional styling: tilføjer active klasse hvis link er aktiv
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Om mig
        </NavLink>

        {/* Kontakt link */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            // Conditional styling: tilføjer active klasse hvis link er aktiv
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Kontakt
        </NavLink>
      </div>
    </nav>
  );
}
