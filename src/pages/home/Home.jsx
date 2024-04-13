// @ts-nocheck
import Loader from "../../components/loader/Loader.jsx";
import { useEffect, useState } from "react";
import ProjetsData from "../../projets.json";
import Gallery from "../../components/gallery/Gallery.jsx";
import Header from "../../components/header/Header.jsx";
import Competences from "../../components/competences/Competences.jsx";
import Footer from "../../components/footer/footer.jsx";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  const technos =
    ProjetsData && ProjetsData[4] && ProjetsData[4].techno
      ? ProjetsData[4].techno
      : [];
  if (!technos) {
    return <div>Projet non trouvé</div>;
  }
  return (
    <section className="home">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <article></article>
          <Header />
          <Gallery />
          <Competences competences={technos} />

          <Footer />
        </>
      )}
    </section>
  );
}

export default Home;
