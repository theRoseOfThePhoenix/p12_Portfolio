// @ts-nocheck
import { Link } from "react-router-dom";
import Photo from "../../assets/profil.webp";
import Git from "../../assets/gitlogo.png";
import Linkedin from "../../assets/linkedin.webp";
import "./_header.scss";

function Header() {
  return (
    <header className="header" id="header">
      <div className="header_container">
        <div className="header_left">
          <h1 className="header_titre">
            PORTFOLIO <br />
            <span className="header_titreNoir">SANDRINE RAVAUD</span>
          </h1>
          <h2>Développeur Frontend & Illustratrice</h2>
        </div>
        <div className="header_rigth">
          <nav className="header_nav">
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>

              <li>
                <a href="mailto:ravaudraw@gmail.com">contact</a>
              </li>
              <li>
                <a
                  href="https://github.com/theRoseOfThePhoenix"
                  rel="noopener"
                  target="_blank"
                  className="github-link"
                >
                  <img src={Git} id="github-icone-white" alt="Logo github" />
                </a>
              </li>
              <li>
                <a
                  href="www.linkedin.com/in/sandrine-becaert-41b38a194 "
                  rel="noopener"
                  target="_blank"
                  className="linkedin-link"
                >
                  <img
                    src={Linkedin}
                    id="linkedin-logo-black"
                    alt="Logo Linkedin"
                  />
                </a>
              </li>
            </ul>
          </nav>
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
