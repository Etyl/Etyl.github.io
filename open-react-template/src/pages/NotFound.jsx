import { Link } from "react-router-dom";
import React from "react";
import Banner from "../images/banner.png";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import PageIllustration from "../partials/PageIllustration";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Form */}

              <div className="max-w-7xl mx-auto mb-20">
                <h2>OUPS ! Erreur 404 !</h2>
                Tu as l'air perdu :() <br></br>
                Gabriel va t'aider à retrouver ton chemin !
              </div>
              <div className="max-w-7xl mx-auto mb-20">
                <img src={Banner} alt="Bannière" />
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Banner /> */}
      <Footer />
    </div>
  )
}