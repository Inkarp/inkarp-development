// GlobalBrandsMap.jsx
import React, { useState } from "react";
import Map from '/WorldMap.svg';
const MAP_SRC = "/WorldMap.svg" // TODO: set to your map image

// Row One
import Heidolph from '/src/assets/PrincipalLogos/RowOne/Heidolph.svg';
import Polyscience from '/src/assets/PrincipalLogos/RowOne/Polyscience.png';
import Radley from '/src/assets/PrincipalLogos/RowOne/radley.svg';
import Rotzmeier from '/src/assets/PrincipalLogos/RowOne/Rotzmeier.gif';
import ThalesNano from '/src/assets/PrincipalLogos/RowOne/ThalesNano.jpg';
import Nanalysis from '/src/assets/PrincipalLogos/RowOne/nanalysis.png';
import Advion from '/src/assets/PrincipalLogos/RowOne/advion.png';
// Row Two
import ECom from '/src/assets/PrincipalLogos/RowTwo/ECom.png';
import Labomatic from '/src/assets/PrincipalLogos/RowTwo/Labomatic.svg';
import Waters from '/src/assets/PrincipalLogos/RowTwo/waters.svg';
import Metller from '/src/assets/PrincipalLogos/RowTwo/Metller.png';
import Interchim from '/src/assets/PrincipalLogos/RowTwo/header.png'; // (Interchim Scientific)
import Maccor from '/src/assets/PrincipalLogos/RowTwo/Maccor.jpg';
import Labstation from '/src/assets/PrincipalLogos/RowTwo/labstation.svg';
// Row Three
import Bandelin from '/src/assets/PrincipalLogos/RowThree/bandelin.jpg';
import Kubota from '/src/assets/PrincipalLogos/RowThree/Kubota.png';
import Jeiotch from '/src/assets/PrincipalLogos/RowThree/Jeiotch.png'; // Jeio Tech
import Luzchem from '/src/assets/PrincipalLogos/RowThree/Luzchem.png';
import Robot from '/src/assets/PrincipalLogos/RowThree/robot.png'; // Robot Coupe
import Sonics from '/src/assets/PrincipalLogos/RowThree/sonics-logo.svg';
import Being from '/src/assets/PrincipalLogos/RowThree/Being.svg';
// Row Four
import Airtech from '/src/assets/PrincipalLogos/RowFour/Airtech.png';
import Innova from '/src/assets/PrincipalLogos/RowFour/Innova.png';
import Rotochrome from '/src/assets/PrincipalLogos/RowFour/Rotochrome.png';
import Sartorius from '/src/assets/PrincipalLogos/RowFour/sartorius.svg';
import Implen from '/src/assets/PrincipalLogos/RowFour/Implen.jpg';
import NanoSurf from '/src/assets/PrincipalLogos/RowFour/NanoSurf.svg';
import Anvajo from '/src/assets/PrincipalLogos/RowFour/Anvajo.svg';
import BWB from '/src/assets/PrincipalLogos/RowFour/BWB.png';
// Row Five
import Nenovision from '/src/assets/PrincipalLogos/RowFive/Nenovision.svg';
import Reichert from '/src/assets/PrincipalLogos/RowFive/reichert.png';
import Photon from '/src/assets/PrincipalLogos/RowFive/Photon.jpeg';
import GEA from '/src/assets/PrincipalLogos/RowFive/GEA.png';
import Proscientific from '/src/assets/PrincipalLogos/RowFive/Proscientific.png';
import Evonik from '/src/assets/PrincipalLogos/RowFive/Evonik.png';
import Thermofisher from '/src/assets/PrincipalLogos/RowFive/thermofisher.png';
// Row Six
import Hitachi from '/src/assets/PrincipalLogos/RowSix/hitachi.png';
import AP from '/src/assets/PrincipalLogos/RowSix/AP.png';
import Chemspeed from '/src/assets/PrincipalLogos/RowSix/Chemspeed.jpg';
import Zeiss from '/src/assets/PrincipalLogos/RowSix/zeiss.png';
import LUMICKS from '/src/assets/PrincipalLogos/RowSix/LUMICKS.png';
import Azenta from '/src/assets/PrincipalLogos/RowSix/Azenta.jpg';
// Row Seven
import RareCyte from '/src/assets/PrincipalLogos/RowSeven/RareCyte.png';
import Hawk from '/src/assets/PrincipalLogos/RowSeven/hawk.png';
import Affinite from '/src/assets/PrincipalLogos/RowSeven/Affinite.webp';
import Bruker from '/src/assets/PrincipalLogos/RowSeven/Bruker.svg';
import KhiMod from '/src/assets/PrincipalLogos/RowSeven/KhiMod.svg';
import Hermle from '/src/assets/PrincipalLogos/RowSeven/hermle.jpg';
import BUCHI from '/src/assets/PrincipalLogos/RowSeven/BUCHI.svg';
import { LoaderPinwheel, LocateIcon, MapPinHouse } from "lucide-react";


const PINS = [
  {
    country: "United States",
    top: 30, left: 22,
    logos: [Polyscience, Maccor, Sonics, Proscientific, RareCyte, Azenta, Waters, Bruker, Reichert],
  },
  {
    country: "Canada",
    top: 23, left: 20,
    logos: [Nanalysis, Luzchem, Photon, Evonik, Affinite],
  },
  {
    country: "United Kingdom",
    top: 25, left: 45,
    logos: [Radley, BWB],
  },
  {
    country: "France",
    top: 30, left: 46,
    logos: [Advion, Interchim, Robot, KhiMod],
  },
  {
    country: "Germany",
    top: 28, left: 48,
    logos: [Heidolph, Rotzmeier, Bandelin, Thermofisher, Anvajo, AP, Bruker, Sartorius, Zeiss, Hermle, Implen, NanoSurf],
  },
  {
    country: "Netherlands",
    top: 27, left: 46.5,
    logos: [LUMICKS],
  },
   {
    country: "Italy",
    top: 33, left: 50,
    logos: [GEA, KhiMod],
  },
  {
    country: "Spain",
    top: 32, left: 44,
    logos: [Hawk],
  },
  {
    country: "Switzerland",
    top: 31, left: 47,
    logos: [Labomatic, Chemspeed, Metller, BUCHI],
  },
  {
    country: "Czech Republic",
    top: 30, left: 49,
    logos: [ECom, Nenovision],
  },
  {
    country: "Hungary",
    top: 30, left: 50,
    logos: [ThalesNano],
  },
  {
    country: "India",
    top: 40, left: 68.5,
    logos: [Labstation],
  },
  {
    country: "South Korea",
    top: 35, left: 83.5,
    logos: [Jeiotch],
  },
  {
    country: "Japan",
    top: 35, left: 87,
    logos: [Kubota, Hitachi],
  },
];

// Small red pin with hoverable tooltip
function Pin({ country, top, left, logos }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="absolute"
      style={{ top: `${top}%`, left: `${left}%` }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen((s) => !s)} // tap support
    >
      {/* pin */}
      <div className="relative">
        {/* <div className="w-3 h-3 bg-[#E63946] rounded-full border-2 border-white shadow-md cursor-pointer" /> */}
        {/* <LocateIcon /> */}
        <MapPinHouse color="#BE0010" size={15} />
        {/* little drop shadow ring */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-black rounded-full blur-[2px] pointer-events-none" />
      </div>

      {/* tooltip */}
      {open && (
        <div className="absolute right-4 -top-2 z-20">
          <div className="relative bg-white rounded-xl shadow-2xl p-3 w-[200px] border border-gray-200">
            <div className="text-lg font-[MaxOT] text-[#E63946] font-bold  mb-2">{country}</div>
            <div className="grid grid-cols-2 gap-2">
              {logos.map((src, i) => (
                <div key={i} className="flex flex-row items-center justify-center p-1 rounded bg-[#F5F5F5]">
                  <img src={src} alt="" className="h-auto w-full object-contain" />
                </div>
              ))}
            </div>
            {/* arrow */}
            <div className="absolute -right-2 top-3 w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-white drop-shadow" />
          </div>
        </div>
      )}
    </div>
  );
}
function WorldMap() {
  return (
    // Hide on mobile & tablets, show on desktop and up
    <section className="hidden lg:block">
      <div className="w-[98%] px-3 py-2 h-screen">
        <div
          className="text-center flex flex-col justify-center items-center sticky"
          style={{ zIndex: 10 }}
        >
          <span
            className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
            style={{
              borderImage: 'linear-gradient(90deg,#BE0010,#E63946) 1',
              borderWidth: 1,
              borderStyle: 'solid',
            }}
          >
            Global Brands Represented by Inkarp in India
          </span>
        </div>

        {/* Map wrapper: fixed aspect so pins scale predictably */}
        <div className="relative aspect-[16/8] w-full overflow-hidden text-center">
          {/* Background map */}
          <img
            src={Map}
            alt="World map"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none opacity-95"
          />

          {/* Pins */}
          {PINS.map((p) => (
            <Pin key={p.country} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}


export default WorldMap;
