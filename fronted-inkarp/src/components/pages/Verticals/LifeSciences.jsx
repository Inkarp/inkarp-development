import React from 'react';
import { Link } from 'react-router-dom';
import Implen from '/src/assets/PrincipalLogos/RowFour/Implen.jpg';
import Nanosurf from '/src/assets/PrincipalLogos/RowFour/NanoSurf.svg';
import Avanjo from '/src/assets/PrincipalLogos/RowFour/Anvajo.svg';
import Bwb from '/src/assets/PrincipalLogos/RowFour/BWB.png';
import Photon from '/src/assets/PrincipalLogos/RowFive/Photon.jpeg';
import Nenovision from '/src/assets/PrincipalLogos/RowFive/Nenovision.svg';
import Reichert from '/src/assets/PrincipalLogos/RowFive/reichert.png';
import Affinite from '/src/assets/PrincipalLogos/RowSeven/Affinite.webp';

const slugify = (str) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const synthesisData = [
  { principal: "Implen", logo: Implen, products: ["NanoPhotometer", "OD600"] },
  { principal: "Avanjo", logo: Avanjo, products: ["Fluidlab R 300"] },
  { principal: "Nenovision", logo: Nenovision, products: ["LiteScope"] },
  { principal: "Reichert", logo: Reichert, products: ["Reichert SPR Systems"] },

  {
    principal: "BWB",
    logo: Bwb,
    products: [
      "BWB Flame Photometer",
      // "BWB XP Flash Flame Photometer",
      // "BWB XP Plus Flame Photometer",
      // "BWB BIO Flame Photometer",
      // "BWB BIO AV Flame Photometer",
      // "BWB BIO LI Flame Photometer",
      // "BWB SOIL Flame Photometer",
      // "BWB SUGAR Flame Photometer",
    ],
  },
  {
    principal: "Photon",
    logo: Photon,
    products: [
      "Photon Products",
      // "IR VIVO",
      // "CIaIR",
      // "L-EOS",
      // "IMA",
      // "GRAND-EOS",
      // "ZephIR 1.7",
      // "ZephIR 2.5",
      // "ZephIR 2.9",
      // "RIMA",
      // "LIMA",
    ],
  },
  // { principal: "Implen", logo: Implen, products: ["NanoPhotometer", "OD600"] },
    { principal: "Affinite", logo: Affinite, products: [ "Surface Plasmon Resonance"] },
  { principal: "Nanosurf", logo: Nanosurf, products: ["Research", "Integration", "Industry", "Compact"] },

];

export default function ExtrusionAndHomogenization() {
  return (
    <div className="px-5 max-w-screen-xl mx-auto space-y-12">
      <section>
        <div className="grid grid-cols- md:grid-cols-3 gap-3">
          {synthesisData.map((group, i) => (
            <div
              key={`col-${group.principal}-${i}`}
              className="rounded-2xl border border-[#F5F5F5] bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={group.logo}
                  alt={group.principal}
                  className="w-28 h-10 object-contain"
                />
                {/* Show the principal name if you want text next to the logo */}
                {/* <h3 className="text-lg font-[MaxOT] text-[#0a2540]">{group.principal}</h3> */}
              </div>

              <ul className="space-y-2">
                {group.products.map((item, idx) => (
                  <li key={`col-item-${group.principal}-${idx}`}>
                    <Link
                      to={`/verticals/lifesciences/${slugify(item)}`}
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
