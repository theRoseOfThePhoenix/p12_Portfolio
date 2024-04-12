// @ts-nocheck
import { Link } from "react-router-dom";
import Git from "../../assets/gitlogo.png";
import Linkedin from "../../assets/linkedin.webp";

function Navigation() {
  return (
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
            <img src={Linkedin} id="linkedin-logo-black" alt="Logo Linkedin" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
