import React from "react";
import { Link } from "react-router-dom";

import Inkarp from "/inkarpOld.svg";
import Bandelin from "/src/assets/PrincipalLogos/RowThree/bandelin.jpg";
import Jeiotech from "/src/assets/PrincipalLogos/RowThree/Jeiotch.png";
import Being from "/src/assets/PrincipalLogos/RowThree/Being.svg";
import Kubota from "/src/assets/PrincipalLogos/RowThree/Kubota.png";
import Luzchem from "/src/assets/PrincipalLogos/RowThree/Luzchem.png";
import RobotCoupe from "/src/assets/PrincipalLogos/RowThree/robot.png";
import Sonics from "/src/assets/PrincipalLogos/RowThree/sonics-logo.svg";
import Airtech from "/src/assets/PrincipalLogos/RowFour/Airtech.png";
import Innova from "/src/assets/PrincipalLogos/RowFour/Innova.png";
import Sarotius from "/src/assets/PrincipalLogos/RowFour/sartorius.svg";
import Hermle from "/src/assets/PrincipalLogos/RowSeven/hermle.jpg";
import Buchi from "/src/assets/PrincipalLogos/RowSeven/BUCHI.svg";
import DaraLyo from '/src/assets/PrincipalLogos/RowOne/dara-lyo.svg';

const slugify = (str) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const synthesisData = [

  { principal: "Sarotius", logo: Sarotius, products: ["Arium mini plus", "Arium pro", "Arium comfort", "Arium advance"] },
  { principal: "Buchi", logo: Buchi, products: ["Lyovapours", "Kjel Line"] },
  { principal: "Inkarp", logo: Inkarp, products: ["Ultrasonic Cleaner", "Ultrasonic Bath"] },
  { principal: "Bandelin", logo: Bandelin, products: ["Ultrasonic Baths"] },
  { principal: "Innova", logo: Innova, products: ["Ice Flaker", "Glassware Washer"] },
  { principal: "Robotcoupe", logo: RobotCoupe, products: ["Blixer"] },
  {
    principal: "Jeiotech", logo: Jeiotech, products: [
      "Environmental Chambers",
      "Shaker",
      "Ovens",
      "Bath Circulators",
      "Storages",
      "Autoclaves",
    ]
  },
  // {
  //   principal: "Hermle",
  //   logo: Hermle,
  //   products: [
  //     "Compact Centrifuge",
  //     "High Speed Centrifuge",
  //     "Microliter Centrifuge",
  //     "Universal Centrifuge",
  //     "Oil Test Centrifuge",
  //     "Large Volume Centrifuges",
  //     "Filtration Centrifuge",
  //   ],
  // },
  {
    principal: "Luzchem",
    logo: Luzchem,
    products: [
      "LED Illuminator",
      "Well Plate Illuminator",
      "Laser Flash Photolysis",
      "Photo reactors and exposure tools",
      "Extra Large Photoreactor with heating capabilities",
      "Solar Simulators (300-800nm)",
      "Xenon Illuminator",
    ],
  },
  {
    principal: "Sonics",
    logo: Sonics,
    products: [
      "Laboratory Scale Models (Volumn 0.2ml-1L)",
      "Laboratory Scale Models (Volumn 0.2ml-0.5ml)",
      "Production Scale Models (Volumn 10L-50L)",
      "Atomizer",
      "Accessories",
    ],
  },

  {
    principal: "Kubota",
    logo: Kubota,
    products: [
      "General Purpose Centrifuges",
      "Laboratory Centrifuges",
      "Large Laboratory Centrifuges", 
    ],
  },

  { principal: "Daralyo", logo: DaraLyo, products: ["Laboratory Freeze Dryers and Pilot"] },
  {
    principal: "Being",
    logo: Being,
    products: [    
      "Sample Preparation and Processing",
      "Temperature Control Storage Chambers",
      'Cell Culture and Microbiology',
    ],
  },

];

export default function GeneralLaboratoryInstruments() {
  return (
    <div className="px-5 max-w-screen-xl mx-auto space-y-12">
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {synthesisData.map((group, i) => (
            <div
              key={`principal-${i}`}
              className="rounded-2xl border border-[#F5F5F5] bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={group.logo}
                  alt={group.principal}
                  className="w-32 h-10 object-contain"
                />
                {/* Optional: show principal name */}
                {/* <h3 className="text-lg font-[MaxOT] text-[#0a2540]">{group.principal}</h3> */}
              </div>

              {/* Products list with support for headings */}
              <ul className="space-y-2">
                {group.products.map((item, idx) => {
                  if (typeof item === "string") {
                    return (
                      <li key={`p-${i}-item-${idx}`}>
                        <Link
                          to={`/verticals/general-laboratory-instrument/${slugify(item)}`}
                          className="block rounded-lg bg-[#F5F5F5] hover:bg-gray-200 px-3 py-2 text-sm font-[Roboto] text-[#0a2540] hover:text-[#E63946] transition"
                        >
                          {item}
                        </Link>
                      </li>
                    );
                  }
                  if (item?.heading) {
                    return (
                      <li
                        key={`p-${i}-heading-${idx}`}
                        className="pt-3 first:pt-0"
                      >
                        <div className="rounded-md bg-[#fff0f0] text-[#E63946] px-3 py-2 font-[MaxOT] font-semibold">
                          {item.heading}
                        </div>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
