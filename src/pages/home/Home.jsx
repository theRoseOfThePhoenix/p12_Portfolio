// @ts-nocheck
import Loader from "../../components/loader/Loader.jsx";
import { useEffect, useState } from "react";
import Gallery from "../../components/gallery/Gallery.jsx";
import Header from "../../components/header/Header.jsx";

function Home() {
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
          <article></article>
          <Header />
          <Gallery />
        </>
      )}
    </section>
  );
}

export default Home;
