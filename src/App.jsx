import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetail";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
import Intro from "./pages/Intro";
import AOS from 'aos';
import 'https://unpkg.com/aos@2.3.1/dist/aos.css';

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    // Only show the intro if it hasn't been seen in this session
    return !sessionStorage.getItem("introSeen");
  });

  const location = useLocation();
  const showNav = true; // Always show navigation

  const handleIntroFinish = () => {
    setShowIntro(false);
    sessionStorage.setItem("introSeen", "true");
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      {showIntro && <Intro onFinish={handleIntroFinish} />}
      {!showIntro && (
        <>
          {showNav && <Navigation />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}
export default App;
