import React from "react";
import { Link } from "react-router-dom";

import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import Footer from "../partials/Footer";

import logo from "../images/logo.png";
import apero from "../images/events/Apero Party.png";
import maxiDiscoMardi from "../images/events/maxiMardi.png";
import maxiMercredi from "../images/events/maxiMercredi.png";
import paintingApero from "../images/events/paintingApero.png";
import venteCrepes from "../images/events/venteCrepes.jpg";
import alloDisco from "../images/events/alloDisco.png";

var events = {
  "Paiting apéro": {
    description:
      "Le Mercredi 22 mars à 19h, Vous l'attendiez ! Et il est là !!! Le fameux deuxième apéro des raining BED ! En espérant vous régaler autant qu'avec le premier… ",
    image: paintingApero,
  },
  "Maxi Mercredi": {
    description:
      "Le mercredi 22/03 à 19h, venez peindre ou vous trahir au loup-garou.",
    image: maxiMercredi,
  },
  "It's drinking BDI": {
    description:
      "Le jeudi 23 mars de 19h à 21h, Votre liste préférée a organisé une collab de fou : It's raining BED x BDI !!!! L'idée : des stands de boissons typiques de chaque pays proposées dans le patio, avec formule dégustation ou au verre. De plus le foyer sera aménagé (merci TSM meilleure asso) afin que nous puissions nous déhancher sur le dancefloor !! Il y aura également le filet de volley et le spike pour sympathiser pendant les sports d'équipe.",
    image: logo,
  },
};

var eventsPast = {
  "Vente de crèpes": {
    description:
      "Le Vendredi 17 mars de 16h45 à 17h45. Parce que tous les Télécommiens sont affamés à l'heure du goûter et ont besoin d'une petite pause sucrée aux alentours de 16h, nous vous avons proposé un stand de crêpes pour vous régaler ! Petit plus : Les crêpes étaient jaunes et roses parce que It's raining BED évidemment. ",
    image: venteCrepes,
  },
  "Disco Allô ???": {
    description:
      "Le Mercredi 15 mars de 21h à 1h. Alors là on a frappé fort ! Ce concept déjanté a été crée pour vous faire KIFFER !!! En effet la liste s'est rendue disponible de 21h à 1h, en parallèle de la Binouze, pour décrocher à 8 lignes téléphoniques. Chacune de ses ligne était attribuée à un concept différent et nécessitait donc une réponse personnalisée. Je vous conseille de checker l'affiche pour mieux cerner le délire. ",
    image: alloDisco,
  },
  "Maxi Disco Mardi": {
    description:
      "Le mardi 14/03 à 19h, ca va bouger avec du twister et du just dance !",
    image: maxiDiscoMardi,
  },
  "Dancing apéro": {
    description:
      "Le mardi 14 mars à 19h. Le premier d'une longue série d'apéro supervisés par It's raining BED. L'occasion de se régaler en jouant à just dance et au Twister Géant ! ",
    image: apero,
  },
};

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
            width="300"
            height="200"
            alt="Features 02"
          />
        </div>
        {/* Content */}
        <div
          className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
          data-aos="fade-left"
        >
          <div className="md:pl-4 lg:pl-12 xl:pl-16">
            <h3 className="h3 mb-3">{props.name}</h3>
            <p className="text-xl text-gray-400 mb-4">{props.description}</p>
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
          width="300"
          height="200"
          alt="Features 03"
        />
      </div>
      {/* Content */}
      <div
        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
        data-aos="fade-right"
      >
        <div className="md:pr-4 lg:pr-12 xl:pr-16">
          <h3 className="h3 mb-3">{props.name}</h3>
          <p className="text-xl text-gray-400 mb-4">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

var eventsList = [];
var i = 0;
for (var event in events) {
  if (i++ % 2 == 0) {
    eventsList.push(
      <FeatureLeft
        name={event}
        description={events[event].description}
        image={events[event].image}
      />
    );
  } else {
    eventsList.push(
      <FeatureRight
        name={event}
        description={events[event].description}
        image={events[event].image}
      />
    );
  }
}
var eventsPastList = [];
var i = 0;
for (var event in eventsPast) {
  if (i++ % 2 == 0) {
    eventsPastList.push(
      <FeatureLeft
        name={event}
        description={eventsPast[event].description}
        image={eventsPast[event].image}
      />
    );
  } else {
    eventsPastList.push(
      <FeatureRight
        name={event}
        description={eventsPast[event].description}
        image={eventsPast[event].image}
      />
    );
  }
}

function Events() {
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
                <h1 className="h1">Nos évenements à venir</h1>
              </div>
              <div
                className="grid gap-20"
                style={{
                  "justify-content": "space-around",
                  "flex-direction": "row",
                  "flex-wrap": "wrap",
                }}
              >
                {eventsList}
              </div>
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1" style={{ "margin-top": "70px" }}>
                  Nos évenements déjà passés
                </h1>
              </div>
              <div
                className="grid gap-20"
                style={{
                  "justify-content": "space-around",
                  "flex-direction": "row",
                  "flex-wrap": "wrap",
                }}
              >
                {eventsPastList}
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

export default Events;
