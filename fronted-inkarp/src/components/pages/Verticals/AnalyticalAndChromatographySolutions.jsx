import React from 'react';
import { Link } from 'react-router-dom';

import Nanalysis from '/src/assets/PrincipalLogos/RowOne/nanalysis.png';
import Advion from '/src/assets/PrincipalLogos/RowOne/advion.png';
import Ecom from '/src/assets/PrincipalLogos/RowTwo/ECom.png';
import Waters from '/src/assets/PrincipalLogos/RowTwo/waters.svg';
import Labomatic from '/src/assets/PrincipalLogos/RowTwo/Labomatic.svg';

// Slug function
const slugify = (str) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const synthesisData = [
  {
    principal: "Waters",
    logo: Waters,
    products: [
      "Chromatography and LC-MS Systems",
    ],
  },

  {
    principal: "Labomatic",
    logo: Labomatic,
    products: [
      "Industrial Liquid Chromatography",
      "Liquid Handling",
    ],
  },
  {
    principal: "Ecom",
    logo: Ecom,
    products: [
      "Columns for Preparative Chromatography",
      "PLC Industrial Systems",
    ],
  },
  {
    principal: "Nanalysis",
    logo: Nanalysis,
    products: [
      "100 MHZ Benchtop NMR",
      "60 MHZ Benchtop NMR",
      "Accessories",
      "Software Packages"
    ],
  },
  {
    principal: "Advion",
    logo: Advion,
    products: [
      "Express CMS",
      "Solation ICP-MS",
      "Preperative Purification Systems",
      "Plate Express",
      "TriVersa NanoMate",
      "Peripheral Production Devices",
      "AVANT (U)HPCL",
      "Flash Purification Systems",
      "Peripheral Detection Devices",
    ],
  },
];

export default function ExtrusionAndHomogenization() {
  return (
    <div className="px-5 max-w-screen-xl mx-auto space-y-12">
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {synthesisData.map((group, i) => (
            <div
              key={`principal-${i}`}
              className="rounded-2xl border border-[#F5F5F5] bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={group.logo}
                  alt={group.principal}
                  className="w-28 h-10 object-contain"
                />
                {/* Optional principal title:
                <h3 className="text-lg font-[MaxOT] text-[#0a2540]">{group.principal}</h3> */}
              </div>

              <ul className="space-y-2">
                {group.products.map((item, idx) => (
                  <li key={`principal-${i}-item-${idx}`}>
                    <Link
                      to={`/verticals/analytical-and-chromatography-solutions/${slugify(item)}`}
                      className="block rounded-lg bg-[#F5F5F5] hover:bg-gray-200 px-3 py-2 text-sm font-[Roboto] text-[#0a2540] hover:text-[#E63946] transition"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
