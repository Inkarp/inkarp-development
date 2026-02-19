import React from 'react';
import { Link } from 'react-router-dom';
import AP from '/src/assets/PrincipalLogos/RowSix/AP.png';
import Chemspeed from '/src/assets/PrincipalLogos/RowSix/Chemspeed.jpg';

// Slug function
const slugify = (str) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const synthesisData = [

  {
    principal: "Chemspeed",
    logo: Chemspeed,
    products: [
      "Crystal Benchtop Solution",
      "Automated Synthesis for Innovative Medicines",
    ],
  }
];

export default function PilotlantsAndAutomation() {
  return (
    <div className="px-5 max-w-screen-xl mx-auto space-y-12">
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {synthesisData.map((group, i) => (
            <div
              key={`col-${i}`}
              className="rounded-2xl border border-[#F5F5F5] bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={group.logo}
                  alt={group.principal}
                  className="w-28 h-10 object-contain"
                />
                {/* Optional: principal name display */}
                {/* <div>
                  <h3 className="text-lg font-[MaxOT] text-[#0a2540]">{group.principal}</h3>
                </div> */}
              </div>
              <ul className="space-y-2">
                {group.products.map((item, idx) => (
                  <li key={`col-item-${i}-${idx}`}>
                    <Link
                      to={`/verticals/pilot-plants-and-automation/${slugify(item)}`}
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
