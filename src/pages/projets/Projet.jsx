/* eslint-disable no-unused-vars */
// @ts-nocheck
import React from "react";
import ProjetsData from "../../projets.json";
import Text from "../../components/text/Text.jsx";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Competences from "../../components/competences/Competences.jsx";

function Projets() {
  const { projetId } = useParams();
  console.log("Projet ID reçu:", projetId);
  const projet = ProjetsData.find((p) => p.projetId === projetId);
  console.log("Projet trouvé:", projet);
  if (!projet) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div className="projet">
      <h1 className="projet_titre"> Projet : {projetId}</h1>
      <section className="Projet_carrousel">
        carrousel<img src={projet.cover}></img>
      </section>
      <Text title="Scenario" content={projet.scenario} />
      <Text title="Objectifs" content={projet.objectifs} />
      <Text title="Informations sur le projet" content={projet.infos} />
      {/* <Text title="Les technologies utilisées" content={projet.technologies} /> */}
      <Competences competences={projet.technologies} />

      <button>Repository Github</button>
      <button>Projet en ligne</button>
    </div>
  );
}
Projets.propTypes = {
  projetId: PropTypes.string.isRequired,
};

export default Projets;
