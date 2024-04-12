// @ts-nocheck
import Card from "../card/Card.jsx";
import "../card/Card.jsx";
import Nina from "../../assets/nina/Nina.jpg";
import Kaza from "../../assets/kaza/kaza.png";
import OMF from "../../assets/ohmyfood/omf.png";
import Sophie from "../../assets/sophie/sophie-bluel.png";

import "./_gallery.scss";

function Gallery() {
  return (
    <section className="containerGallery">
      <h3 className="containerGallery_titre">Mes Projets</h3>
      <div className="galleryDesProjets">
        <Card
          projetId="nina-carducci"
          cover={Nina}
          title="Nina Carducci"
          description="Nina Carducci est un exercice SEO avec un rapport d'optimisation de référencement, performence et d'accessibilité"
        />
        <Card
          projetId="kasa"
          cover={Kaza}
          title="Kaza"
          description="Démarrer le projet React et développer l'ensemble de l'application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives !). Et ce avec un code de qualité !"
        />
        <Card
          projetId="ohmyfood"
          cover={OMF}
          title="Oh My Food"
          description="Développer le site en mobile, tablette et desktop en s'appuyant rigoureusement sur les informations déterminées dans le brief créatif !"
        />
        <Card
          projetId="sophie-bluel"
          cover={Sophie}
          title="Sophie Bluel"
          description=" Envoyé en tant que développeur front-end dans une équipe travaillant sur la conception du site portfolio d'un architecte d'intérieur."
        />
      </div>
    </section>
  );
}
export default Gallery;
