import React from "react";

import Header from "../partials/HomeHeader";
import Footer from "../partials/Footer";
import Background from "../images/background.mp4";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <video autoPlay muted loop id="myVideo">
        <source src={Background} type="video/mp4" />
      </video>

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */
        /*
        TODO: Adapter la vidéo pour affichage sur mobile : descendre la vidéo en dessous du header
        */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        ></div>

        {/*  Page sections */}
      </main>

      {/* <Banner /> */}

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
