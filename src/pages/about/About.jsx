/* eslint-disable react/no-unescaped-entities */
// @ts-nocheck
import Loader from "../../components/loader/Loader.jsx";
import { useEffect, useState } from "react";
import Photo from "../../assets/sandrine.jpg";
import Navigation from "../../components/navigation/Navigation.jsx";
import Footer from "../../components/footer/footer.jsx";

function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);
  return (
    <section className="home">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <main className="about">
            <Navigation />
            <div className="about_container">
              <h2 className="about_titre">Qui suis-je ?</h2>
              <img
                className="about_img"
                src={Photo}
                alt="Sandrine Ravaud en Noir et Blanc"
              ></img>
              <p className="about_paragraphe">
                Passionnée d'apprentissage continu, ma soif de connaissance m'a
                naturellement guidée vers une reconversion professionnelle.
                Curieuse et polyvalente, je m'intéresse particulièrement à
                l'informatique et à la programmation. Mon enthousiasme pour
                comprendre le fonctionnement des choses m'incite constamment à
                élargir mes horizons. Entre deux lectures captivantes sur
                l'astrophysique et l'astronomie, je trouve le temps de jouer de
                la guitare et de dessiner, pratiquant l'illustration lors de mes
                moments de détente. Récemment, j'ai complété une formation
                d'intégrateur web chez OpenClassrooms, ajoutant ainsi une
                nouvelle corde à mon arc. Les neurosciences et l'éducation de
                mon jeune fils occupent également une place centrale dans ma
                vie. Ouverte à la collaboration, je serais ravie d'échanger avec
                vous sur des opportunités potentielles. N'hésitez pas à me
                contacter pour plus d'informations. À très bientôt ! Sandrine
                Ravaud.{" "}
              </p>
            </div>
          </main>
          <Footer />
        </>
      )}
    </section>
  );
}

export default About;
