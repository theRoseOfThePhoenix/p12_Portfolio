// @ts-nocheck
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Projet from "./pages/projets/Projet.jsx";

function Router() {
  return (
    <Routes>
      <Route path="/p12_Portfolio/projets/:projetId" element={<Projet />} />
      <Route path="/p12_Portfolio/" element={<Home />} />
      <Route path="/p12_Portfolio/about" element={<About />} />
      {/* <Route path="/*" element={<Error />} />  */}
    </Routes>
  );
}

export default Router;
