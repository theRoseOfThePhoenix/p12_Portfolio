// @ts-nocheck
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import html5Logo from "../../assets/logos/html5.png";
import css3Logo from "../../assets/logos/css3.png";
import sassLogo from "../../assets/logos/sass.png";
import reactLogo from "../../assets/logos/react.png";
import jsLogo from "../../assets/logos/js.png";
import figmaLogo from "../../assets/logos/figma.png";
import lighthouseLogo from "../../assets/logos/lighthouse.png";
import waveToolLogo from "../../assets/logos/wave.png";
import githublogo from "../../assets/logos/gitlogo.png";
import "./_competences.scss";

function Competences({ competences }) {
  const logos = {
    HTML5: html5Logo,
    CSS3: css3Logo,
    SASS: sassLogo,
    React: reactLogo,
    Javascript: jsLogo,
    Github: githublogo,
    Figma: figmaLogo,
    Lighthouse: lighthouseLogo,
    WAVE: waveToolLogo,
  };

  return (
    <section className="competences">
      <div className="competences_container">
        <h3 className="competences_title">Mes Compétences</h3>
      </div>
      <div className="competences_containersimg">
        {competences.map((competence, index) => (
          <img
            className="competences_img"
            key={`${competence}-${index}`}
            src={logos[competence]}
            alt={`${competence} logo`}
          />
        ))}
      </div>
    </section>
  );
}
Competences.propTypes = {
  competences: PropTypes.arrayOf(PropTypes.string).isRequired,
};
//competencesdoit être une chaîne de caractères et est obligatoire
export default Competences;
