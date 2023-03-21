import React from "react";

import Header from "../partials/Header";
import Footer from "../partials/Footer";
import PageIllustration from "../partials/PageIllustration";
import agenda from "../images/poles/agenda.png";
import alumni from "../images/poles/alumni.png";
import campagne from "../images/poles/campagne.png";
import com from "../images/poles/com.png";
import courrier from "../images/poles/courrier.png";
import deco from "../images/poles/deco.png";
import environnement from "../images/poles/environnement.png";
import foyer from "../images/poles/foyer.png";
import info from "../images/poles/info.png";
import infographie from "../images/poles/infographie.png";
import internationaux from "../images/poles/internationaux.png";
import ipp from "../images/poles/ipp.png";
import mail from "../images/poles/mail.png";
import maxiMardi from "../images/poles/maxiMardi.png";
import parrainage from "../images/poles/parrainage.png";
import pots from "../images/poles/pots.png";
import prevention from "../images/poles/prevention.png";
import RE from "../images/poles/RE.png";
import re2 from "../images/poles/re2.png";
import rec from "../images/poles/rec.png";
import repasPromo from "../images/poles/repasPromo.png";
import reserve from "../images/poles/reserve.png";
import securite from "../images/poles/securite.png";
import textile from "../images/poles/textile.png";
import wee from "../images/poles/wee.png";
import wefa from "../images/poles/wefa.png";
import wes from "../images/poles/wes.png";
import wei from "../images/poles/wei.png";

function FeatureRight(props) {
  return (
    <section>
      <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
        {/* Image */}
        <div
          className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
          data-aos="fade-up"
        >
          <img
            className="max-w-full mx-auto md:max-w-none h-auto"
            src={props.image}
            width="540"
            height="405"
            alt="Features 02"
          />
        </div>
        {/* Content */}
        <div
          className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
          data-aos="fade-left"
        >
          <div className="md:pl-4 lg:pl-12 xl:pl-16">
            <h3 className="h3 mb-3">Pôle {props.name}</h3>
            <p className="text-xl text-gray-400 mb-4">
              orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              feugiat quis libero in dignissim. Aenean suscipit nisi vitae est
              eleifend, congue viverra erat blandit. Pellentesque mollis, urna
              nec vestibulum convallis, turpis velit placerat ante, sit amet
              efficitur diam nunc non arcu. Nullam ac risus lacinia, ullamcorper
              mi nec, laoreet odio. Quisque imperdiet orci quis turpis tristique
              cursus. Mauris pulvinar, ex id scelerisque ultrices, risus velit
              malesuada nibh, vitae viverra tellus tortor eget ante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureLeft(props) {
  return (
    <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
      {/* Image */}
      <div
        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
        data-aos="fade-up"
      >
        <img
          className="max-w-full mx-auto md:max-w-none h-auto"
          src={props.image}
          width="540"
          height="405"
          alt="Features 03"
        />
      </div>
      {/* Content */}
      <div
        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
        data-aos="fade-right"
      >
        <div className="md:pr-4 lg:pr-12 xl:pr-16">
          <h3 className="h3 mb-3">Pôle {props.name}</h3>
          <p className="text-xl text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            feugiat quis libero in dignissim. Aenean suscipit nisi vitae est
            eleifend, congue viverra erat blandit. Pellentesque mollis, urna nec
            vestibulum convallis, turpis velit placerat ante, sit amet efficitur
            diam nunc non arcu. Nullam ac risus lacinia, ullamcorper mi nec,
            laoreet odio. Quisque imperdiet orci quis turpis tristique cursus.
            Mauris pulvinar, ex id scelerisque ultrices, risus velit malesuada
            nibh, vitae viverra tellus tortor eget ante.
          </p>
        </div>
      </div>
    </div>
  );
}

function Objectifs() {
  var objectives = {
    Agenda: {
      description: "On prépare un super WEI !",
      image: agenda,
    },
    Alumni: {
      description: "On prépare un super WES !",
      image: alumni,
    },
    Campagne: {
      description: "On prépare un super WEE !",
      image: campagne,
    },
    "Com / Insta": {
      description: "On prépare un super WEA !",
      image: com,
    },
    Courrier: {
      description: "On prépare un super WEA !",
      image: courrier,
    },
    Déco: {
      description: "On prépare un super WEA !",
      image: deco,
    },
    Environnement: {
      description: "On prépare un super WEA !",
      image: environnement,
    },
    Foyer: {
      description: "On prépare un super WEA !",
      image: foyer,
    },
    Informatique: {
      description: "On prépare un super WEA !",
      image: info,
    },
    Infographie: {
      description: "On prépare un super WEA !",
      image: infographie,
    },
    Internationaux: {
      description: "On prépare un super WEA !",
      image: internationaux,
    },
    IPP: {
      description: "On prépare un super WEA !",
      image: ipp,
    },
    "Com Mail": {
      description: "On prépare un super WEA !",
      image: mail,
    },
    "Maxi Mardi": {
      description: "On prépare un super WEA !",
      image: maxiMardi,
    },
    Parrainage: {
      description: "On prépare un super WEA !",
      image: parrainage,
    },
    Pots: {
      description: "On prépare un super WEA !",
      image: pots,
    },
    "Prévention Alcool": {
      description: "On prépare un super WEA !",
      image: prevention,
    },
    REC: {
      description: "On prépare un super WEA !",
      image: rec,
    },
    "Relations Extérieurs": {
      description: "On prépare un super WEA !",
      image: RE,
    },
    "Relation Entreprises": {
      description: "On prépare un super WEA !",
      image: re2,
    },
    "Repas de promo": {
      description: "On prépare un super WEA !",
      image: repasPromo,
    },
    "Réserve alcool": {
      description: "On prépare un super WEA !",
      image: reserve,
    },
    Sécurité: {
      description: "On prépare un super WEA !",
      image: securite,
    },
    Textile: {
      description: "On prépare un super WEA !",
      image: textile,
    },
    WEE: {
      description: "On prépare un super WEA !",
      image: wee,
    },
    WEFA: {
      description: "On prépare un super WEA !",
      image: wefa,
    },
    WEI: {
      description: "On prépare un super WEA !",
      image: wei,
    },
    WES: {
      description: "On prépare un super WEA !",
      image: wes,
    },
  };

  var objectivesList = [];
  var i = 0;
  for (var objective in objectives) {
    if (i++ % 2 == 0) {
      objectivesList.push(
        <FeatureLeft
          name={objective}
          description={objectives[objective].description}
          image={objectives[objective].image}
        />
      );
    } else {
      objectivesList.push(
        <FeatureRight
          name={objective}
          description={objectives[objective].description}
          image={objectives[objective].image}
        />
      );
    }
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      <main className="grow">
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
                <h1 className="h1">Nos objectifs</h1>
              </div>

              <div
                className="grid gap-20"
                style={{
                  "justify-content": "space-around",
                  "flex-direction": "row",
                  "flex-wrap": "wrap",
                }}
              >
                {objectivesList}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
export default Objectifs;
