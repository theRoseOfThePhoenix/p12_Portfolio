/* eslint-disable no-unused-vars */
// @ts-nocheck
import React from "react";
import ProjetsData from "../../projets.json";
import Text from "../../components/text/Text.jsx";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Competences from "../../components/competences/Competences.jsx";
import Navigation from "../../components/navigation/Navigation.jsx";
import Bouton from "../../components/bouton/Bouton.jsx";
import Footer from "../../components/footer/footer.jsx";

function Projets() {
  const { projetId } = useParams();
  const projet = ProjetsData.find((p) => p.projetId === projetId);
  if (!projet) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div className="projet">
      <Navigation />
      <h1 className="projet_titre"> Projet : {projet.titre}</h1>
      <section className="projet_carrousel">
        <div className="projet_container">
          <img
            src={projet.cover}
            alt={`apercu du projet ${projet.titre} selectionné`}
          ></img>
        </div>
      </section>
      <Text title="Scenario" content={projet.scenario} />
      <Text title="Objectifs" content={projet.objectifs} />
      <Text title="Informations sur le projet" content={projet.infos} />
      <Competences
        titreTech="Les technos utilisées"
        competences={projet.technologies}
      />
      <div className="bouton">
        <Bouton texte="Repository Github" url={projet.repository} />
        <Bouton texte="Projet en ligne" url={projet.page} />
      </div>
      <Footer />
    </div>
  );
}
Projets.propTypes = {
  projetId: PropTypes.string.isRequired,
};

export default Projets;
