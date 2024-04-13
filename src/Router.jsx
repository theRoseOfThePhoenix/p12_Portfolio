// @ts-nocheck
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Projet from "./pages/projets/Projet.jsx";

function Router() {
  return (
    <Routes>
      <Route path="/projets/:projetId" element={<Projet />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/*" element={<Error />} />  */}
    </Routes>
  );
}

export default Router;
