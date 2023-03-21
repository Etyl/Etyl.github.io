import React from "react";

import Header from "../partials/Header";
import Footer from "../partials/Footer";
import PageIllustration from "../partials/PageIllustration";

import { Gallery } from "react-grid-gallery";

const imageSize = 27;
const images = [];
for (let i=1; i<imageSize; i++) {
  images.push({
    src: "images/" + i + ".jpg",
  });
}

const openImage = (index, item, event) => {
  window.open(item.src, "_blank", "noopener,noreferrer");
};

function Galerie() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        ></div>

        {/*  Page sections */}

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-7xl mx-auto mb-20">
                {/*gallerieRender*/}
                <Gallery
                  images={images}
                  enableImageSelection={false}
                  onClick={openImage}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Banner /> */}

      {/*  Site footer */}
      <Footer />
    </div>
  );
}
export default Galerie;
