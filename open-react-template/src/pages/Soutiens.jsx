import React from "react";

import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import Footer from "../partials/Footer";

import alois from "../images/PP/alois.jpg";
import anna from "../images/PP/anna.jpg";
import antoine from "../images/PP/antoine.jpg";
import arthurw from "../images/PP/arthurw.jpg";
import celine from "../images/PP/celine.jpg";
import chems from "../images/PP/chems.jpg";
import clement from "../images/PP/clement.jpg";
import elio from "../images/PP/elio.jpg";
import emma from "../images/PP/emma.jpg";
import enguerrand from "../images/PP/enguerrand.jpg";
import ghislaine from "../images/PP/ghislaine.jpg";
import giulia from "../images/PP/giulia.jpg";
import ines from "../images/PP/ines.jpg";
import jacques from "../images/PP/jacques.jpg";
import joseph from "../images/PP/joseph.jpg";
import loic from "../images/PP/loic.jpg";
import lucasS from "../images/PP/lucasS.jpg";
import mael from "../images/PP/mael.jpg";
import martin from "../images/PP/martin.jpg";
import octave from "../images/PP/octave.jpg";
import pedro from "../images/PP/pedro.jpg";
import philippe from "../images/PP/philippe.jpg";
import pierina from "../images/PP/pierina.jpg";
import quentin from "../images/PP/quentin.jpg";
import raphaelB from "../images/PP/raphaelB.jpg";
import raphaelY from "../images/PP/raphaelY.jpg";
import romain from "../images/PP/romain.jpg";
import sara from "../images/PP/sara.jpg";
import selyan from "../images/PP/selyan.jpg";
import seo from "../images/PP/seo.jpg";
import telo from "../images/PP/telo.jpg";
import theo from "../images/PP/theo.jpg";
import thomas from "../images/PP/thomas.jpg";
import yufei from "../images/PP/yufei.jpg";

function Soutiens() {
  let soutiensProfiles = {
    Aloïs: {
      role: "", //TODO:
      image: alois,
    },
    Anna: {
      role: "Soutien de kalité",
      image: anna,
    },
    Antoine: {
      role: "Khalass tout le monde avec son four",
      image: antoine,
    },
    "Arthur W.": {
      role: "", //TODO:
      image: arthurw,
    },
    Céline: {
      role: "✨Sympa mais un peu inutile✨",
      image: celine,
    },
    Chems: {
      role: "", //TODO:
      image: chems,
    },
    Clément: {
      role: "", //TODO:
      image: clement,
    },
    Elio: {
      role: "", //TODO:
      image: elio,
    },
    Emma: {
      role: "Accro à Just Dance depuis qu'elle sait marcher",
      image: emma,
    },
    Enguerrand: {
      role: "", //TODO:
      image: enguerrand,
    },
    Ghislaine: {
      role: "", //TODO:
      image: ghislaine,
    },
    Giulia: {
      role: "", //TODO:
      image: giulia,
    },
    Inès: {
      role: "", //TODO:
      image: ines,
    },
    Jacques: {
      role: "Informatique",
      image: jacques,
    },
    Joseph: {
      role: "", //TODO:
      image: joseph,
    },
    Loïc: {
      role: "", //TODO:
      image: loic,
    },
    "Lucas S.": {
      role: "", //TODO:
      image: lucasS,
    },
    Maël: {
      role: "A envoyé un mail anonyme avec son adresse perso",
      image: mael,
    },
    Martin: {
      role: "", //TODO:
      image: martin,
    },
    Octave: {
      role: "", //TODO:
      image: octave,
    },
    Pedro: {
      role: "", //TODO:
      image: pedro,
    },
    "Philippe AKA Planeur": {
      role: "Notre rappeur préféré",
      image: philippe,
    },
    Pierina: {
      role: "", //TODO:
      image: pierina,
    },
    Quentin: {
      role: "", //TODO:
      image: quentin,
    },
    "Raphaël B.": {
      role: "", //TODO:
      image: raphaelB,
    },
    "Raphaël Y.": {
      role: "", //TODO:
      image: raphaelY,
    },
    Romain: {
      role: "", //TODO:
      image: romain,
    },
    Sara: {
      role: "", //TODO:
      image: sara,
    },
    Selyan: {
      role: "Un grand poète",
      image: selyan,
    },
    Seo: {
      role: "", //TODO:
      image: seo,
    },
    Telo: {
      role: "", //TODO:
      image: telo,
    },
    Théo: {
      role: "", //TODO:
      image: theo,
    },
    Thomas: {
      role: "", //TODO:
      image: thomas,
    },
    Yufei: {
      role: "", //TODO:
      image: yufei,
    },
  };
  let soutiens = [];
  for (let key in soutiensProfiles) {
    soutiens.push(
      <div
        className="flex flex-col h-full p-6 bg-gray-800"
        data-aos="fade-up"
        style={{ "min-width": "20rem", "max-width": "21rem", margin: "0.5em" }}
      >
        <div>
          <div className="relative inline-flex flex-col mb-4">
            <img
              src={soutiensProfiles[key]["image"]}
              style={{ width: "100%", height: "auto" }}
              alt={key}
            />
          </div>
          <div className="text-gray-200 font-medium mt-6 pt-5 border-t border-gray-700">
            <cite className="text-gray-200 not-italic">
              <b style={{ color: "gold" }}>{key}</b>
            </cite>{" "}
            - {soutiensProfiles[key]["role"]}
          </div>
        </div>
      </div>
    );
  }

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
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Nos soutiens</h1>
              </div>

              {/* Form */}
              <div className="max-w-7xl mx-auto mb-20">
                <div
                  className="flex flex-row bd-highlight mb-3 items-start lg:max-w-none"
                  style={{
                    "justify-content": "space-around",
                    "flex-direction": "row",
                    "flex-wrap": "wrap",
                  }}
                >
                  {soutiens}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Banner /> */}
      <Footer />
    </div>
  );
}

export default Soutiens;
