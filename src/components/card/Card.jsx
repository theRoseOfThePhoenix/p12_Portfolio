/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ projetId, cover, title, description }) {
  return (
    <Link to={`/projets/${projetId}`}>
      <div className="galleryDesProjets_card">
        <div className="galleryDesProjets_card-content">
          <div className="galleryDesProjets_card-front">
            <h4 className="galleryDesProjets_card-titre">{title}</h4>
            <img
              src={cover}
              alt={title}
              className="galleryDesProjets_card-image"
            />
          </div>
          <div className="galleryDesProjets_card-back">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
Card.propTypes = {
  projetId: PropTypes.string.isRequired, //projetId doit être une chaîne de caractères et est obligatoire
  cover: PropTypes.string.isRequired, // cover doit être une chaîne de caractères et est obligatoire
  title: PropTypes.string.isRequired, // title doit être une chaîne de caractères et est obligatoire
  description: PropTypes.string.isRequired, // description doit être une chaîne de caractères et est obligatoire
};

export default Card;
