import React from "react";

// Row One Imports
import Heidolph from '/src/assets/PrincipalLogos/RowOne/Heidolph.svg';
import Polyscience from '/src/assets/PrincipalLogos/RowOne/Polyscience.png';
import Radley from '/src/assets/PrincipalLogos/RowOne/radley.svg';
import Rotzmeier from '/src/assets/PrincipalLogos/RowOne/Rotzmeier.gif';
import ThalesNano from '/src/assets/PrincipalLogos/RowOne/ThalesNano.jpg';
import Nanalysis from '/src/assets/PrincipalLogos/RowOne/nanalysis.png';
import Advion from '/src/assets/PrincipalLogos/RowOne/advion.png';

// Row Two Imports
import ECom from '/src/assets/PrincipalLogos/RowTwo/ECom.png';
import Labomatic from '/src/assets/PrincipalLogos/RowTwo/Labomatic.svg';
import Waters from '/src/assets/PrincipalLogos/RowTwo/waters.svg';
import Metller from '/src/assets/PrincipalLogos/RowTwo/Metller.svg';
import Header from '/src/assets/PrincipalLogos/RowTwo/header.png';
import Maccor from '/src/assets/PrincipalLogos/RowTwo/Maccor.jpg';
import Labstation from '/src/assets/PrincipalLogos/RowTwo/labstation.svg';

// Row Three Imports
import Bandelin from '/src/assets/PrincipalLogos/RowThree/bandelin.jpg';
import Kubota from '/src/assets/PrincipalLogos/RowThree/Kubota.png';
import Jeiotch from '/src/assets/PrincipalLogos/RowThree/Jeiotch.png';
import Luzchem from '/src/assets/PrincipalLogos/RowThree/Luzchem.png';
import Robot from '/src/assets/PrincipalLogos/RowThree/robot.png';
import Sonics from '/src/assets/PrincipalLogos/RowThree/sonics-logo.svg';
import Being from '/src/assets/PrincipalLogos/RowThree/Being.svg';

// Row Four Imports
import Brookfield from '/src/assets/PrincipalLogos/RowFour/Brookfield.webp';
import DaraLyo from '/src/assets/PrincipalLogos/RowOne/dara-lyo.svg';
import Rhotochrome from '/src/assets/PrincipalLogos/RowFour/Rotochrome.png';
import Sartorius from '/src/assets/PrincipalLogos/RowFour/sartorius.svg';
import Implen from '/src/assets/PrincipalLogos/RowFour/Implen.jpg';
import NanoSurf from '/src/assets/PrincipalLogos/RowFour/NanoSurf.svg';
import Anvajo from '/src/assets/PrincipalLogos/RowFour/Anvajo.svg';
import BWB from '/src/assets/PrincipalLogos/RowFour/BWB.png';

// Row Five Imports
import Nenovision from '/src/assets/PrincipalLogos/RowFive/Nenovision.svg';
import Reichert from '/src/assets/PrincipalLogos/RowFive/reichert.png';
import Photon from '/src/assets/PrincipalLogos/RowFive/Photon.jpeg';
import GEA from '/src/assets/PrincipalLogos/RowFive/GEA.png';
import Proscientific from '/src/assets/PrincipalLogos/RowFive/Proscientific.png';
import Evonik from '/src/assets/PrincipalLogos/RowFive/Evonik.png';
import Thermofisher from '/src/assets/PrincipalLogos/RowFive/thermofisher.png';

// Row Six Imports
import Hitachi from '/src/assets/PrincipalLogos/RowSix/hitachi.png';
import AP from '/src/assets/PrincipalLogos/RowSix/AP.png';
import Chemspeed from '/src/assets/PrincipalLogos/RowSix/Chemspeed.jpg';
import Zeiss from '/src/assets/PrincipalLogos/RowSix/zeiss.png';
import LUMICKS from '/src/assets/PrincipalLogos/RowSix/LUMICKS.png';
import Azenta from '/src/assets/PrincipalLogos/RowSix/Azenta.jpg';
import Imina from '/src/assets/PrincipalLogos/RowSix/Imina.svg';

// Row Seven Imports
import Hawk from '/src/assets/PrincipalLogos/RowSeven/hawk.png';
import Affinite from '/src/assets/PrincipalLogos/RowSeven/Affinite.webp';
import Bruker from '/src/assets/PrincipalLogos/RowSeven/Bruker.svg';
import KhiMod from '/src/assets/PrincipalLogos/RowSeven/KhiMod.svg';
import Hermle from '/src/assets/PrincipalLogos/RowSeven/hermle.jpg';
import BUCHI from '/src/assets/PrincipalLogos/RowSeven/BUCHI.svg';

const logoRings = [
  [
    { name: "Heidolph", src: Heidolph, link: "/verticals/synthesis-and-flow-chemistry" },
    { name: "Polyscience", src: Polyscience, link: "/verticals/synthesis-and-flow-chemistry" },
    { name: "Radley", src: Radley, link: "/verticals/synthesis-and-flow-chemistry" },
    { name: "Rotzmeier", src: Rotzmeier, link: "/verticals/synthesis-and-flow-chemistry" },
    { name: "ThalesNano", src: ThalesNano, link: "/verticals/synthesis-and-flow-chemistry" },
    { name: "Nanalysis", src: Nanalysis, link: "/verticals/analytical-and-chromatography-solutions" },
    { name: "Advion", src: Advion, link: "/verticals/analytical-and-chromatography-solutions" },
  ],
  // Row Two
  [
    { name: "ECom", src: ECom, link: "/verticals/analytical-and-chromatography-solutions" },
    { name: "Labomatic", src: Labomatic, link: "/verticals/analytical-and-chromatography-solutions" },
    { name: "Waters", src: Waters, link: "/verticals/analytical-and-chromatography-solutions" },
    { name: "Metller", src: Metller, link: "/verticals/analytical-chemistry-and-weighing" },
    { name: "Header", src: Header, link: "/verticals/material-science-and-battery" },
    { name: "Maccor", src: Maccor, link: "/verticals/material-science-and-battery" },
    { name: "Labstation", src: Labstation, link: "/verticals/material-science-and-battery" },
  ],
  // Row Three
  [
    { name: "Bandelin", src: Bandelin, link: "/verticals/general-laboratory-instrument" },
    { name: "Kubota", src: Kubota, link: "/verticals/general-laboratory-instrument" },
    { name: "Jeiotch", src: Jeiotch, link: "/verticals/general-laboratory-instrument" },
    { name: "Luzchem", src: Luzchem, link: "/verticals/general-laboratory-instrument" },
    { name: "Robot", src: Robot, link: "/verticals/general-laboratory-instrument" },
    { name: "Sonics", src: Sonics, link: "/verticals/general-laboratory-instrument" },
    { name: "Being", src: Being, link: "/verticals/general-laboratory-instrument" },
  ],
  // Row Four
  [
    { name: "Daralyo", src: DaraLyo,link:"/" }, 
    { name: "BrookfieldAmetek", src: Brookfield,link:"/" }, 
    { name: "Rhotochrome", src: Rhotochrome ,link:"/" },
    { name: "Sartorius", src: Sartorius, link: "/verticals/general-laboratory-instrument" },
    { name: "Implen", src: Implen, link: "/verticals/lifesciences" },
    { name: "NanoSurf", src: NanoSurf, link: "/verticals/lifesciences" },
    { name: "BWB", src: BWB, link: "/verticals/lifesciences" },
  ],
  // Row Five
  [
    { name: "Nenovision", src: Nenovision, link: "/verticals/lifesciences" },
    { name: "Reichert", src: Reichert, link: "/verticals/lifesciences" },
    { name: "Photon", src: Photon, link: "/verticals/lifesciences" },
    { name: "GEA", src: GEA, link: "/verticals/extrusion-and-homogenization" },
    { name: "Proscientific", src: Proscientific, link: "/verticals/extrusion-and-homogenization" },
    { name: "Evonik", src: Evonik, link: "/verticals/extrusion-and-homogenization" },
    { name: "Thermofisher", src: Thermofisher, link: "/verticals/rheology-and-thermal-analysis" },
  ],
  // Row Six
  [
    { name: "Hitachi", src: Hitachi, link: "/verticals/rheology-and-thermal-analysis" },
    { name: "Chemspeed", src: Chemspeed, link: "/verticals/pilot-plants-and-automation" },
    { name: "Zeiss", src: Zeiss },  
    { name: "LUMICKS", src: LUMICKS }, 
  ],
  // Row Seven
  [  
    { name: "Affinite", src: Affinite, link: "/verticals/lifesciences" },
    { name: "Bruker", src: Bruker, link: "/verticals/synthesis-and-flow-chemistry" },
    { name: "KhiMod", src: KhiMod },    
    // { name: "Hermle", src: Hermle, link: "/verticals/general-laboratory-instrument" },
    { name: "BUCHI", src: BUCHI, link: "/verticals/general-laboratory-instrument" },
  ],
];

export default function PrincipalsTab() {
  const logos = logoRings.flat(); // single continuous set

  return (
    <section className="w-full bg-gray-50 py-10 px-4">
      {/* Headings in your theme */}
      <div className="text-center flex flex-col justify-center items-center gap-3">
        <span
          className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
          style={{
            borderImage: "linear-gradient(90deg,#BE0010,#E63946) 1",
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          Our Principals
        </span>
        <h2 className="text-xl sm:text-2xl font-[MaxOT] text-[#E63946] leading-tight">
          Strategic Alliances with Global Scientific Leaders
        </h2>
      </div>

      {/* Static grid of all logos - now clickable */}
      <div className="mt-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-5 md:gap-8">
          {logos.map((logo, idx) => (
            <a
              key={idx}
              href={logo.link || "#"}
              className="group relative bg-white rounded-xl border border-gray-200 p-3 h-20 md:h-24 flex items-center justify-center shadow-sm hover:shadow-md hover:border-[#E63946]/60 transition"
              title={logo.name}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
