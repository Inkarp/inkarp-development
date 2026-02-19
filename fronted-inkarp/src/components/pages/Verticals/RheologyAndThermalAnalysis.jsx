import React from 'react';
import { Link } from 'react-router-dom';

import ThermoFisher from '/src/assets/PrincipalLogos/RowFive/thermofisher.png';
import Hitachi from '/src/assets/PrincipalLogos/RowSix/hitachi.png';

// Slug function
const slugify = (str) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Data (unchanged)
const synthesisData = [
  {
    principal: "ThermoFisher",
    logo: ThermoFisher,
    // name: "Life Sciences Lab Equipment",
    products: ["Rheometers and Viscometers"],
  },
  {
    principal: "Hitachi",
    logo: Hitachi,
    // name: "Analytical Systems",
    products: ["Thermal Analysis"],
  },
];

export default function RheologyAndThermalAnalysis() {
  return (
    <div className="px-5 max-w-screen-xl mx-auto space-y-12">
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {synthesisData.map((group, i) => (
            <div
              key={`principal-${i}`}
              className="rounded-2xl border border-[#F5F5F5] bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={group.logo}
                  alt={group.principal}
                  className="w-28 h-10 object-contain"
                />
              </div>
              {/* Optional subtitle under logo */}
              {group.name && (
                <div className="mb-4 text-sm font-[MaxOT] text-[#0a2540] opacity-80">
                  {group.name}
                </div>
              )}

              <ul className="space-y-2">
                {group.products.map((item, idx) => (
                  <li key={`principal-${i}-item-${idx}`}>
                    <Link
                      to={`/verticals/rheology-and-thermal-analysis/${slugify(item)}`}
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
