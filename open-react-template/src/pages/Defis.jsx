import React from "react";

import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import "../css/additional-styles/challenges-table.css";
import Footer from "../partials/Footer";

function Defis() {
  const tableData = [
    {
      id: 1,
      col1: "trouver tous les noms du staff du wan",
      col2: "95",
      col3: "Valentin",
      col4: "",
      col5: "",
    },
    {
      id: 2,
      col1: "conduire 91.06 encore deux arrêts",
      col2: "220",
      col3: "Melinda",
      col4: "Validé et posté",
      col5: "X",
    },
    {
      id: 3,
      col1: "faire pousser le plus de moustaches fin 26",
      col2: "80/moustache",
      col3: "Melinda",
      col4: "",
      col5: "",
    },
    {
      id: 4,
      col1: "faire une tiers listes des plus gros golems de telecom",
      col2: "100",
      col3: "Melinda",
      col4: "",
      col5: "",
    },
    {
      id: 5,
      col1: "plan séquence imitation de Tazs le diable de Tasmanie pendant au moins 3 minutes dans le patio",
      col2: "150",
      col3: "Melinda",
      col4: "",
      col5: "",
    },
    {
      id: 6,
      col1: "trouver le Pokémon",
      col2: "7000",
      col3: "Melinda",
      col4: "",
      col5: "",
    },
    {
      id: 7,
      col1: "flashmob",
      col2: "200",
      col3: "Melinda",
      col4: "",
      col5: "",
    },
    {
      id: 8,
      col1: "mettre une frappe dans la vraie lucarne d'evry",
      col2: "300+ 100 si ça rentre",
      col3: "Melinda",
      col4: "",
      col5: "",
    },
    {
      id: 9,
      col1: "Vendre un NFT de votre logo de liste à Oussama Ammar ",
      col2: "1000",
      col3: "Melinda",
      col4: "",
      col5: "",
    },
    {
      id: 10,
      col1: "Organiser un Fallen Kingdom sur Minecraft entre listes retransmis en live Twitch",
      col2: "500",
      col3: "Melinda",
      col4: "",
      col5: "",
    },
    {
      id: 11,
      col1: "Coussin péteur sur la chaise d'un prof",
      col2: "100",
      col3: "Melinda",
      col4: "",
      col5: "",
    },
    {
      id: 12,
      col1: "refaire le clip des johns burgers",
      col2: "400",
      col3: "Melinda",
      col4: "",
      col5: "",
    },
    {
      id: 13,
      col1: "mettre maxime delis sur des lits (ou des lits sur maxime delis)",
      col2: "50",
      col3: "Melinda",
      col4: "",
      col5: "",
    },
    // Ajoutez les nouveaux défis
  ];
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        {/* Table component */}
        <div className="mx-auto my-4">
          <table className="table-challenges">
            <table
              style={{
                position: "relative",
                top: "160px",
                left: "50px",
                buttom: "160px",
              }}
            >
              <thead>
                <tr>
                  <th className="px-4 py-2">Id</th>
                  <th className="px-4 py-2">Défis</th>
                  <th className="px-4 py-2">Points</th>
                  <th className="px-4 py-2">Attribué à</th>
                  <th className="px-4 py-2">Validé/posté ?</th>
                  <th className="px-4 py-2">fait?</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id}>
                    <td className="border px-4 py-2">{row.id}</td>
                    <td className="border px-4 py-2">{row.col1}</td>
                    <td className="border px-4 py-2">{row.col2}</td>
                    <td className="border px-4 py-2">{row.col3}</td>
                    <td className="border px-4 py-2">{row.col4}</td>
                    <td className="border px-4 py-2">{row.col5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Defis;
