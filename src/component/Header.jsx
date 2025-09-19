// ========================================
// HEADER KOMPONENT - Header.jsx
// ========================================
// Dette er en simpel header komponent der viser portfolie titlen
// Den bruges ikke aktivt i den nuværende applikation

// Importerer CSS styles for header komponenten
import styles from "./Header.module.css";

// Header komponenten der viser portfolie titlen
export default function Header() {
  return <header className={styles.header}>Mit Portfolio</header>;
}
