import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "aos/dist/aos.css";
import "./css/style.css";

import AOS from "aos";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Defis from "./pages/Defis";
import Objectifs from "./pages/Objectifs";
import Soutiens from "./pages/Soutiens";
import Galerie from "./pages/Galerie";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/defis" element={<Defis />} />
        <Route path="/objectifs" element={<Objectifs />} />
        <Route path="/soutiens" element={<Soutiens />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
