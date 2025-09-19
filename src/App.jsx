// ========================================
// HOVEDAPP KOMPONENT - App.jsx
// ========================================
// Dette er hovedkomponenten der styrer hele applikationens struktur
// og navigation mellem forskellige sider

// Importerer React hooks til state management og side-effekter
import { useState, useEffect } from "react";
// Importerer React Router komponenter til navigation og routing
import { Routes, Route, useLocation } from "react-router";
// Importerer alle side komponenter
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetail";
// Importerer UI komponenter
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
import Intro from "./pages/Intro";
// Importerer AOS (Animate On Scroll) bibliotek til animationer
import AOS from "aos";
import "aos/dist/aos.css";

// Hovedfunktion der definerer hele applikationens struktur
function App() {
  // ========================================
  // STATE MANAGEMENT
  // ========================================

  // State til at kontrollere om intro animationen skal vises
  // Bruger sessionStorage til at huske om intro allerede er vist i denne session
  const [showIntro, setShowIntro] = useState(() => {
    // Tjekker om "introSeen" er gemt i sessionStorage
    // Hvis ikke, vises intro animationen
    return !sessionStorage.getItem("introSeen");
  });

  // ========================================
  // ROUTING OG NAVIGATION
  // ========================================

  // Hook til at få den aktuelle URL sti
  const location = useLocation();
  // Konstant der bestemmer om navigation skal vises (altid true)
  const showNav = true;
  // Logik der bestemmer om footer skal skjules på bestemte sider
  const hideFooter =
    location.pathname === "/" || location.pathname === "/contact";

  // ========================================
  // EVENT HANDLERS
  // ========================================

  // Funktion der kaldes når intro animationen er færdig
  const handleIntroFinish = () => {
    // Skjuler intro animationen
    setShowIntro(false);
    // Gemmer i sessionStorage at intro er set, så den ikke vises igen
    sessionStorage.setItem("introSeen", "true");
  };

  // ========================================
  // SIDE EFFECTS
  // ========================================

  // useEffect der initialiserer AOS animationer når komponenten loader
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation varighed i millisekunder
      easing: "ease-in-out", // Animation type (glat overgang)
      once: true, // Animation kører kun én gang
      offset: 100, // Afstand fra viewport før animation starter
    });
  }, []); // Tom dependency array = kører kun ved første render

  // ========================================
  // RENDER LOGIC
  // ========================================

  return (
    <>
      {/* Conditional rendering: Vis intro hvis showIntro er true */}
      {showIntro && <Intro onFinish={handleIntroFinish} />}

      {/* Conditional rendering: Vis hovedindhold hvis intro ikke vises */}
      {!showIntro && (
        <>
          {/* Vis navigation hvis showNav er true */}
          {showNav && <Navigation />}

          {/* React Router Routes - definerer alle applikationens sider */}
          <Routes>
            {/* Hjemmeside route */}
            <Route path="/" element={<Home />} />
            {/* Om mig side route */}
            <Route path="/about" element={<About />} />
            {/* Kontakt side route */}
            <Route path="/contact" element={<Contact />} />
            {/* Projekt oversigt side route */}
            <Route path="/project" element={<Project />} />
            {/* Projekt detalje side route med dynamisk ID parameter */}
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>

          {/* Vis footer hvis hideFooter er false */}
          {!hideFooter && <Footer />}
        </>
      )}
    </>
  );
}

// Eksporterer App komponenten som default export
export default App;
