/* eslint-disable no-unused-vars */
// @ts-nocheck
import { HashRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Projet from "./pages/projets/Projet.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/projets/:projetId" element={<Projet />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/*" element={<Error />} />  */}
      </Routes>
    </HashRouter>
  );
}
export default App;
