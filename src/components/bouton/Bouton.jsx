/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import "./_bouton.scss";

function Bouton({ texte, url }) {
  return (
    <a className="bouton_link" href={url}>
      <button className="bouton_style">{texte}</button>
    </a>
  );
}

Bouton.propTypes = {
  texte: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Bouton;
