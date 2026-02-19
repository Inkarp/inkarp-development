// GlobalBrandsMap.jsx
import React, { useState } from "react";
import { MapPinHouse } from "lucide-react";

const MAP_SRC = "/WorldMap.svg"; // TODO: set to your map image

// Row One
import Heidolph from "/src/assets/PrincipalLogos/RowOne/Heidolph.svg";
import Polyscience from "/src/assets/PrincipalLogos/RowOne/Polyscience.png";
import Radley from "/src/assets/PrincipalLogos/RowOne/radley.svg";
import Rotzmeier from "/src/assets/PrincipalLogos/RowOne/Rotzmeier.gif";
import ThalesNano from "/src/assets/PrincipalLogos/RowOne/ThalesNano.jpg";
import Nanalysis from "/src/assets/PrincipalLogos/RowOne/nanalysis.png";
import Advion from "/src/assets/PrincipalLogos/RowOne/advion.png";
// Row Two
import ECom from "/src/assets/PrincipalLogos/RowTwo/ECom.png";
import Labomatic from "/src/assets/PrincipalLogos/RowTwo/Labomatic.svg";
import Waters from "/src/assets/PrincipalLogos/RowTwo/waters.svg";
import Metller from "/src/assets/PrincipalLogos/RowTwo/Metller.png"; // (Mettler Toledo)
import Interchim from "/src/assets/PrincipalLogos/RowTwo/header.png"; // (Interchim Scientific)
import Maccor from "/src/assets/PrincipalLogos/RowTwo/Maccor.jpg";
import Labstation from "/src/assets/PrincipalLogos/RowTwo/labstation.svg";
// Row Three
import Bandelin from "/src/assets/PrincipalLogos/RowThree/bandelin.jpg";
import Kubota from "/src/assets/PrincipalLogos/RowThree/Kubota.png";
import Jeiotch from "/src/assets/PrincipalLogos/RowThree/Jeiotch.png"; // Jeio Tech
import Luzchem from "/src/assets/PrincipalLogos/RowThree/Luzchem.png";
import Robot from "/src/assets/PrincipalLogos/RowThree/robot.png"; // Robot Coupe
import Sonics from "/src/assets/PrincipalLogos/RowThree/sonics-logo.svg";
import Being from "/src/assets/PrincipalLogos/RowThree/Being.svg";
// Row Four
import Airtech from "/src/assets/PrincipalLogos/RowFour/Airtech.png";
import Innova from "/src/assets/PrincipalLogos/RowFour/Innova.png";
import Rotochrome from "/src/assets/PrincipalLogos/RowFour/Rotochrome.png";
import Sartorius from "/src/assets/PrincipalLogos/RowFour/sartorius.svg";
import Implen from "/src/assets/PrincipalLogos/RowFour/Implen.jpg";
import NanoSurf from "/src/assets/PrincipalLogos/RowFour/NanoSurf.svg";
import Anvajo from "/src/assets/PrincipalLogos/RowFour/Anvajo.svg";
import BWB from "/src/assets/PrincipalLogos/RowFour/BWB.png";
// Row Five
import Nenovision from "/src/assets/PrincipalLogos/RowFive/Nenovision.svg";
import Reichert from "/src/assets/PrincipalLogos/RowFive/reichert.png";
import Photon from "/src/assets/PrincipalLogos/RowFive/Photon.jpeg";
import GEA from "/src/assets/PrincipalLogos/RowFive/GEA.png";
import Proscientific from "/src/assets/PrincipalLogos/RowFive/Proscientific.png";
import Evonik from "/src/assets/PrincipalLogos/RowFive/Evonik.png";
import Thermofisher from "/src/assets/PrincipalLogos/RowFive/thermofisher.png";
// Row Six
import Hitachi from "/src/assets/PrincipalLogos/RowSix/hitachi.png";
import AP from "/src/assets/PrincipalLogos/RowSix/AP.png";
import Chemspeed from "/src/assets/PrincipalLogos/RowSix/Chemspeed.jpg";
import Zeiss from "/src/assets/PrincipalLogos/RowSix/zeiss.png";
import LUMICKS from "/src/assets/PrincipalLogos/RowSix/LUMICKS.png";
import Azenta from "/src/assets/PrincipalLogos/RowSix/Azenta.jpg";
// Row Seven
import RareCyte from "/src/assets/PrincipalLogos/RowSeven/RareCyte.png";
import Hawk from "/src/assets/PrincipalLogos/RowSeven/hawk.png";
import Affinite from "/src/assets/PrincipalLogos/RowSeven/Affinite.webp";
import Bruker from "/src/assets/PrincipalLogos/RowSeven/Bruker.svg";
import KhiMod from "/src/assets/PrincipalLogos/RowSeven/KhiMod.svg";
import Hermle from "/src/assets/PrincipalLogos/RowSeven/hermle.jpg";
import BUCHI from "/src/assets/PrincipalLogos/RowSeven/BUCHI.svg";

/**
 * Helper to quickly create principal objects
 */
const P = (name, logo) => ({ name, logo });

const PINS = [
  {
    country: "United States",
    top: 52,
    left: 33,
    principals: [
      P("PolyScience", Polyscience),
      P("Maccor", Maccor),
      P("Sonics", Sonics),
      P("PRO Scientific", Proscientific),
      P("RareCyte", RareCyte),
      P("Azenta", Azenta),
      P("Waters", Waters),
      P("Bruker", Bruker),
      P("Reichert", Reichert),
    ],
  },
  {
    country: "Canada",
    top: 28,
    left: 23,
    principals: [
      P("Nanalysis", Nanalysis),
      P("Luzchem", Luzchem),
      P("Photon etc.", Photon),
      P("Evonik", Evonik),
      P("Affinite", Affinite),
    ],
  },
  {
    country: "United Kingdom",
    top: 20,
    left: 58,
    principals: [P("Radleys", Radley), P("BWB Technologies", BWB)],
  },
  {
    country: "Netherlands",
    top: 36,
    left: 60,
    principals: [P("LUMICKS", LUMICKS)],
  },
  {
    country: "Germany",
    top: 38,
    left: 62.5,
    principals: [
      P("Heidolph", Heidolph),
      P("Rotzmeier", Rotzmeier),
      P("BANDELIN", Bandelin),
      P("Thermo Fisher", Thermofisher),
      P("anvajo", Anvajo),
      P("Analytik Jena (AP)", AP),
      P("Bruker", Bruker),
      P("Sartorius", Sartorius),
      P("ZEISS", Zeiss),
      P("HERMLE", Hermle),
      P("Implen", Implen),
      P("Nanosurf", NanoSurf),
    ],
  },
  {
    country: "France",
    top: 41,
    left: 59,
    principals: [P("Advion", Advion), P("Interchim", Interchim), P("Robot Coupe", Robot), P("KhiMod", KhiMod)],
  },
  {
    country: "Spain",
    top: 46,
    left: 58,
    principals: [P("Hawk", Hawk)],
  },
  {
    country: "Italy",
    top: 45,
    left: 62.5,
    principals: [P("GEA", GEA), P("KhiMod", KhiMod)],
  },
  {
    country: "Switzerland",
    top: 43,
    left: 61.5,
    principals: [P("Labomatic", Labomatic), P("Chemspeed", Chemspeed), P("Mettler Toledo", Metller), P("BUCHI", BUCHI)],
  },
  {
    country: "Czech Republic",
    top: 39,
    left: 64,
    principals: [P("ECOM", ECom), P("NenoVision", Nenovision)],
  },
  {
    country: "Hungary",
    top: 42,
    left: 65.5,
    principals: [P("ThalesNano", ThalesNano)],
  },
  {
    country: "India",
    top: 40,
    left: 68.5,
    principals: [P("Labstation", Labstation)],
  },
  {
    country: "South Korea",
    top: 48,
    left: 83.5,
    principals: [P("Jeio Tech", Jeiotch)],
  },
  {
    country: "Japan",
    top: 45,
    left: 87,
    principals: [P("KUBOTA", Kubota), P("Hitachi", Hitachi)],
  },
];

// Small red pin with always-visible country label + hoverable tooltip
function Pin({ country, top, left, principals }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="absolute z-[1]"
      style={{ top: `${top}%`, left: `${left}%` }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen((s) => !s)} // tap support
    >
      {/* pin + shadow */}
      <div className="relative flex items-center gap-1">
        <MapPinHouse color="#BE0010" className="shrink-0" />
        <div className="absolute -bottom-1 left-2 w-4 h-1 bg-black/20 rounded-full blur-[2px] pointer-events-none" />
        {/* Always-visible country pill */}
        <span
          className="ml-1 px-2 py-0.5 rounded-full text-[11px] sm:text-xs bg-white border border-gray-200 shadow-sm font-[MaxOT]"
          style={{ color: "#BE0010" }}
        >
          {country}
        </span>
      </div>

      {/* Tooltip with row-wise principals */}
      {open && (
        <div className="absolute left-4 -top-2 z-20">
          <div className="relative bg-white rounded-xl shadow-2xl p-3 w-[280px] border border-gray-200">
            <div className="text-base sm:text-lg font-[MaxOT] text-[#E63946] font-bold mb-2">{country}</div>

            <div className="max-h-64 overflow-auto pr-1">
              <ul className="space-y-1.5">
                {principals.map((p, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 rounded-md border border-gray-100 hover:border-gray-200 bg-[#FAFAFA] px-2 py-1"
                  >
                    <div className="w-7 h-7 shrink-0 rounded bg-white border border-gray-200 grid place-items-center">
                      <img src={p.logo} alt={p.name} className="max-w-[22px] max-h-[22px] object-contain" />
                    </div>
                    <span className="text-sm leading-tight">{p.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* arrow */}
            <div className="absolute -left-2 top-3 w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-white drop-shadow" />
          </div>
        </div>
      )}
    </div>
  );
}

function GlobalMap() {
  return (
    <div className="w-[98%] px-3 py-2 h-screen">
      <div className="text-center flex flex-col justify-center items-center gap-3 sticky style={{ zIndex: 10 }}">
        <span
          className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
          style={{
            borderImage: "linear-gradient(90deg,#BE0010,#E63946) 1",
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          Global Brands Represented by Inkarp in India
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-[MaxOT] text-[#E63946] leading-tight">
          Strategic Alliances with Global Scientific Leaders
        </h2>
      </div>

      {/* Map wrapper: fixed aspect so pins scale predictably */}
      <div className="relative aspect-[16/9] w-full rounded-b-xl overflow-hidden">
        <img
          src={MAP_SRC}
          alt="World map"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none opacity-95"
        />

        {/* Pins */}
        {PINS.map((p) => (
          <Pin key={p.country} {...p} />
        ))}
      </div>
    </div>
  );
}

export default GlobalMap;
