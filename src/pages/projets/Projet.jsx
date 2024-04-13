/* eslint-disable no-unused-vars */
// @ts-nocheck
import React from "react";
import ProjetsData from "../../projets.json";
import Text from "../../components/text/Text.jsx";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Competences from "../../components/competences/Competences.jsx";
import Navigation from "../../components/navigation/Navigation.jsx";
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
      <Footer />
    </div>
  );
}
Projets.propTypes = {
  projetId: PropTypes.string.isRequired,
};

export default Projets;
