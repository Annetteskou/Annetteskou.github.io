import { useState } from "react";
import { Routes, Route, useLocation } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetail";
import Navigation from "./component/Navigation";
import Intro from "./pages/Intro";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation();

  const showNav = location.pathname !== "/"; // ⬅️ skjul nav på forsiden

  return (
    <div>
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}
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
        </>
      )}
    </div>
  );
}
export default App;
