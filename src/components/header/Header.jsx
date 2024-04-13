// @ts-nocheck
import Photo from "../../assets/profil.webp";
import Navigation from "../navigation/Navigation";
// import { Link } from "react-router-dom";
// import Git from "../../assets/gitlogo.png";
// import Linkedin from "../../assets/linkedin.webp";
import "./_header.scss";

function Header() {
  return (
    <header className="header" id="header">
      <Navigation />
      <div className="header_container">
        <div className="header_left">
          <h1 className="header_titre">
            PORTFOLIO <br />
            <span className="header_titreNoir">SANDRINE RAVAUD</span>
          </h1>
          <h2>Développeur Frontend & Illustratrice</h2>
        </div>
        <div className="header_rigth">
          <img
            id="photo"
            src={Photo}
            alt="photo de profil de sandrine ravaud"
          ></img>
        </div>
      </div>
    </header>
  );
}

export default Header;
