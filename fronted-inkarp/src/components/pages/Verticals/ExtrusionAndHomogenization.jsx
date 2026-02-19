import React from 'react';
import { Link } from 'react-router-dom';
import Gea from '/src/assets/PrincipalLogos/RowFive/GEA.png';
import Proscientific from '/src/assets/PrincipalLogos/RowFive/Proscientific.png';
import Evonik from '/src/assets/PrincipalLogos/RowFive/Evonik.png';
// Slug function
const slugify = (str) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const synthesisData = [
  {
    principal: "GEA",
    logo: Gea,
    name: "Homogenizers",
    products: [
      "Industrial Homogenizers",
      "Laboratory Homogenizers",
      "Skid-Mounted Homogenizers",
    ],
  },
  {
    principal: "Proscientific",
    logo: Proscientific,
    name: "Homogenizers",
    products: [
      "Hand Held Homogenizer",
      "Digital Benchtop Homogenizer",
      "Automated Homogenizer",
      "Digital Homogenizer",
      "Programmable Benchtop Homogenizers",
    ],
  },
  {
    principal: "Evonik",
    logo: Evonik,
    name: "",
    products: [
      "Drug delivery-Parental Drug Delivery",
    ],
  }
];

export default function ExtrusionAndHomogenization() {
  return (
    <div className="px-5 max-w-screen-xl mx-auto space-y-12">
      {/* LAYOUT 1: Principal Cards (logo header + products grid) */}
      {/* <section>
        <h2 className="text-2xl font-[MaxOT] text-[#E63946] mb-6">Extrusion & Homogenization — Principal Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {synthesisData.map((group, i) => (
            <div key={`card-${i}`} className="rounded-2xl border border-[#F5F5F5] bg-white shadow-sm overflow-hidden hover:shadow-md transition">
              <div className="p-4 flex items-center gap-4 border-b border-[#F5F5F5]">
                <img src={group.logo} alt={group.principal} className="w-28 h-10 object-contain" />
                <div>
                  <p className="text-sm font-[Roboto] text-[#6b7280]">Principal</p>
                  <h3 className="text-lg font-[MaxOT] text-[#0a2540]">{group.principal}</h3>
                  {group.name && <p className="text-sm font-[MaxOT] text-[#E63946]">{group.name}</p>}
                </div>
              </div>
              <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {group.products.map((item, idx) => (
                  <Link
                    key={`card-prod-${i}-${idx}`}
                    to={`/verticals/extrusion-and-homogenization/${slugify(item)}`}
                    className="w-full rounded-lg bg-[#F5F5F5] hover:bg-gray-200 px-3 py-2 text-sm font-[Roboto] text-[#0a2540] hover:text-[#E63946] transition"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* LAYOUT 2: Media Rows (logo left, content right with product pills) */}
      {/* <section>
        <h2 className="text-2xl font-[MaxOT] text-[#E63946] mb-6">Principal Media Rows</h2>
        <div className="space-y-4">
          {synthesisData.map((group, i) => (
            <div key={`row-${i}`} className="flex flex-col sm:flex-row gap-4 rounded-2xl border border-[#F5F5F5] bg-white p-4 shadow-sm hover:shadow-md transition">
              <div className="shrink-0 flex items-center justify-center sm:justify-start">
                <img src={group.logo} alt={group.principal} className="w-40 h-12 object-contain" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-[MaxOT] text-[#0a2540]">{group.principal}</h3>
                  {group.name && <span className="text-xs font-[MaxOT] text-white px-2 py-0.5 rounded-full" style={{backgroundImage:'linear-gradient(90deg,#BE0010,#E63946)'}}>{group.name}</span>}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.products.map((item, idx) => (
                    <Link
                      key={`row-pill-${i}-${idx}`}
                      to={`/verticals/extrusion-and-homogenization/${slugify(item)}`}
                      className="inline-flex items-center rounded-full border border-[#e5e7eb] bg-[#F5F5F5] hover:bg-gray-200 px-3 py-1.5 text-xs font-[Roboto] text-[#0a2540] hover:text-[#E63946] transition"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* LAYOUT 3: Three Columns (each principal = one column) */}
      <section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {synthesisData.map((group, i) => (
            <div key={`col-${i}`} className="rounded-2xl border border-[#F5F5F5] bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <img src={group.logo} alt={group.principal} className="w-28 h-10 object-contain" />
                {/* <div>
                  <h3 className="text-lg font-[MaxOT] text-[#0a2540]">{group.principal}</h3>
                  {group.name && <p className="text-sm font-[MaxOT] text-[#E63946]">{group.name}</p>}
                </div> */}
              </div>
              <ul className="space-y-2">
                {group.products.map((item, idx) => (
                  <li key={`col-item-${i}-${idx}`}>
                    <Link
                      to={`/verticals/extrusion-and-homogenization/${slugify(item)}`}
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
