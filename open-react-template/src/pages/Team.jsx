import React from "react";

import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import Footer from "../partials/Footer";

import antonin from "../images/PP/antonin.jpg";
import arthur from "../images/PP/arthur.jpg";
import aurel from "../images/PP/aurel.jpg";
import aurelie from "../images/PP/aurélie.jpg";
import eliot from "../images/PP/eliot.jpg";
import eloise from "../images/PP/eloise.jpg";
import gabriel from "../images/PP/gabriel.jpg";
import hippolyte from "../images/PP/hippolyte.jpg";
import ivan from "../images/PP/ivan.jpg";
import lucas from "../images/PP/lucas.jpg";
import macha from "../images/PP/macha.jpg";
import matthieu from "../images/PP/mathieu.jpg";
import melinda from "../images/PP/melinda.jpg";
import nicolas from "../images/PP/nicolas.jpg";
import osiris from "../images/PP/osiris.jpg";
import raphaelT from "../images/PP/raphaelT.jpg";
import valentin from "../images/PP/valentin.jpg";
import zak from "../images/PP/zak.jpg";
import zohra from "../images/PP/zohra.jpg";

import Banner from "../images/banner.png";

function Team() {
  const bureauProfiles = {
    Eloïse: {
      role: "Présidente",
      image: eloise,
    },
    Osiris: {
      role: "Vice-Président",
      image: osiris,
    },
    "Raphaël T.": {
      role: "Secrétaire Général",
      image: raphaelT,
    },
    Matthieu: {
      role: "Trésorier",
      image: matthieu,
    },
    Arthur: {
      role: "Vice-Trésorier",
      image: arthur,
    },
  };

  const listeuxProfiles = {
    Antonin: {
      role: "Com'Mail, Informatique, RE, WEI",
      image: antonin,
    },
    Aurel: {
      role: "Campagne, Foyer, Parrainage, Pots",
      image: aurel,
    },
    Aurélie: {
      role: "Foyer, Parrainage, RE, WES",
      image: aurelie,
    },
    Eliot: {
      role: "Maxi Mardi, RE, REC, Repas de promo, WES",
      image: eliot,
    },
    Gabriel: {
      role: "Agenda, Maxi Mardi, Prévention alcool, WEI",
      image: gabriel,
    },
    Hippolyte: {
      role: "Environnement, Infographie, Informatique, Repas de promo, WES",
      image: hippolyte,
    },
    Ivan: {
      role: "Déco, Foyer, RE, Réserve alcool, WEE",
      image: ivan,
    },
    Lucas: {
      role: "Alumni, Campagne, Repas de promo, WEFA",
      image: lucas,
    },
    Macha: {
      role: "Com'Insta, Environnement, IPP, Parrainage",
      image: macha,
    },
    Mélinda: {
      role: "Courrier, IPP, Relations extérieures, WEE",
      image: melinda,
    },
    Nicolas: {
      role: "Alumni, Infographie, IPP, Textile, WES",
      image: nicolas,
    },
    Valentin: {
      role: "Campagne, Pots, REC, WEFA",
      image: valentin,
    },
    Zakaria: {
      role: "Déco, Informatique, Internationale, WEFA",
      image: zak,
    },
    Zohra: {
      role: "Com'Insta, Déco, Maxi Mardi, REC, WEI",
      image: zohra,
    },
  };

  let bureau = [];
  for (let key in bureauProfiles) {
    bureau.push(
      <div
        className="flex flex-col h-full p-6 bg-gray-800"
        data-aos="fade-up"
        style={{ "min-width": "20rem", "max-width": "21rem", margin: "0.5em" }}
      >
        <div>
          <div className="relative inline-flex flex-col mb-4">
            <img
              src={bureauProfiles[key]["image"]}
              style={{ width: "100%", height: "auto" }}
              alt={key}
            />
          </div>
          <div className="text-gray-200 font-medium mt-6 pt-5 border-t border-gray-700">
            <cite className="text-gray-200 not-italic">
              <b style={{ color: "gold" }}>{key}</b>
            </cite>{" "}
            - {bureauProfiles[key]["role"]}
          </div>
        </div>
      </div>
    );
  }

  let listeux = [];
  for (let key in listeuxProfiles) {
    listeux.push(
      <div
        className="flex flex-col h-full p-6 bg-gray-800"
        data-aos="fade-up"
        style={{ "min-width": "20rem", "max-width": "21rem", margin: "0.5em" }}
      >
        <div>
          <div className="relative inline-flex flex-col mb-4">
            <img
              src={listeuxProfiles[key]["image"]}
              style={{ width: "100%", height: "auto" }}
              alt={key}
            />
          </div>
          <div className="text-gray-200 font-medium mt-6 pt-5 border-t border-gray-700">
            <cite className="text-gray-200 not-italic">
              <b style={{ color: "gold" }}>{key}</b>
            </cite>{" "}
            - {listeuxProfiles[key]["role"]}
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
                <h1 className="h1">L'équipe</h1>
              </div>

              {/* Form */}
              <div className="max-w-7xl mx-auto mb-20">
                <img src={Banner} alt="Bannière" />
              </div>
              <div className="max-w-7xl mx-auto mb-20">
                <h2>Notre bureau</h2>
                <div
                  className="flex flex-row bd-highlight mb-3 items-start lg:max-w-none"
                  style={{
                    "justify-content": "space-around",
                    "flex-direction": "row",
                    "flex-wrap": "wrap",
                  }}
                >
                  {bureau}
                </div>
              </div>
              <div className="max-w-7xl mx-auto mb-20">
                <h2>Nos listeux</h2>
                <div
                  className="flex flex-row bd-highlight mb-3 items-start lg:max-w-none"
                  style={{
                    "justify-content": "space-around",
                    "flex-direction": "row",
                    "flex-wrap": "wrap",
                  }}
                >
                  {listeux}
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

export default Team;
