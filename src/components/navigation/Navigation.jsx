// @ts-nocheck
import { Link } from "react-router-dom";
import Git from "../../assets/logos/gitlogo.png";
import Linkedin from "../../assets/logos/linkedin.webp";
import Logo from "../../assets/srlogo.gif";
import "./_navigation.scss";

function Navigation() {
  return (
    <div className="navigation">
      <span className="navigation_logo">
        <Link to="/">
          <img src={Logo} alt="logo de Sandrine Ravaud animé"></img>
        </Link>
      </span>
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
    </div>
  );
}

export default Navigation;
