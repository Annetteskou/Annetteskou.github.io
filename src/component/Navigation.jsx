// Importerer NavLink til navigation mellem sider
import { NavLink } from "react-router";
// Importerer CSS styles for navigation
import styles from "./Navigation.module.css";

// Navigation komponenten der viser hovedmenuen
export default function Navigation() {
  return (
    <nav className={styles.nav}>
      {/* HTML kode symbol */}
      <div className={styles.codeSymbol}>&lt;/&gt;</div>
      {/* Navigation links container */}
      <div className={styles.navLinks}>
        {/* Hjem link */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Hjem
        </NavLink>
        {/* Projekt link */}
        <NavLink
          to="/project"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Projekt
        </NavLink>
        {/* Om mig link */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Om mig
        </NavLink>
        {/* Kontakt link */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Kontakt
        </NavLink>
      </div>
    </nav>
  );
}
