/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

function Competences({ competences }) {
  const logos = {
    HTML5: "../../assets/logos/html5.png",
    CSS3: "../../assets/logos/css3.png",
    SASS: "../../assets/logos/sass.png",
    React: "../../assets/logos/react.png",
    JavaScript: "../../assets/logos/js.png",
    Figma: "../../assets/logos/figma.png",
    Lighthouse: "../../assets/logos/lighthouse.png",
    WaveTool: "../../assets/logos/WAVE-tool.png",
  };

  return (
    <div>
      {competences.map((competence) => (
        <img
          key={competence}
          src={logos[competence]}
          alt={`${competence} logo`}
          style={{ width: "50px", height: "50px" }}
        />
      ))}
    </div>
  );
}
Competences.propTypes = {
  competences: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};
//competencesdoit être une chaîne de caractères et est obligatoire
export default Competences;
