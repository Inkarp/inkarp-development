import React from 'react';
import { Link } from 'react-router-dom';

import Maccor from '/src/assets/PrincipalLogos/RowTwo/Maccor.jpg';
import HohsenCorp from '/src/assets/PrincipalLogos/RowTwo/header.png';
import LabStation from '/src/assets/PrincipalLogos/RowTwo/labstation.svg';

// Slug function
const slugify = (str) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const synthesisData = [
  {
    principal: "Hohsen Corp",
    logo: HohsenCorp,
    products: [
      "Equipment for Battery",
    ],
  },
  {
    principal: "Maccor",
    logo: Maccor,
    products: [
      "Battery and Cell Test Equipment",
    ],
  },
  {
    principal: "Labstation",
    logo: LabStation,
    products: [
      "Glovebox workstations",
      "Solvent Purifiers",
    ],
  }
];

export default function MaterialScienceAndBattery() {
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
                {/* Optional: show principal name */}
                {/* <h3 className="text-lg font-[MaxOT] text-[#0a2540]">{group.principal}</h3> */}
              </div>

              <ul className="space-y-2">
                {group.products.map((item, idx) => (
                  <li key={`principal-${i}-item-${idx}`}>
                    <Link
                      to={`/verticals/material-science-and-battery/${slugify(item)}`}
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
