import React from "react";
import { Link } from "react-router-dom";

// Logos
import Heidolph from "/src/assets/PrincipalLogos/RowOne/Heidolph.svg";
import Polyscience from "/src/assets/PrincipalLogos/RowOne/Polyscience.png";
import Radleys from "/src/assets/PrincipalLogos/RowOne/radley.svg";
import Rotzmeier from "/src/assets/PrincipalLogos/RowOne/Rotzmeier.gif";
import ThalesNano from "/src/assets/PrincipalLogos/RowOne/ThalesNano.jpg";
import Bruker from "/src/assets/PrincipalLogos/RowSeven/Bruker.svg";
import { Helmet } from "react-helmet";

const slugify = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
// Data (unchanged)
const synthesisData = [
  {
    principal: "Heidolph",
    logo: Heidolph,
    products: [
      "Rotary Evaporators",
      "Large-Scale Rotary Evaporators",
      "Continuous Automatic Distillation Module",
      "Magnetic Stirrers",
      "Overhead Stirrers",
      "Shakers & Mixers",
      "Peristaltic Pumps",
      "Processing Solutions",
      "Smart cell cultivation",
      "Accessories",
    ],
  },
  {
    principal: "Bruker",
    logo: Bruker,
    products: [
      "FT-IR Spectrometer",
      "FT-IR Research Spectrometer",
      "FT-NIR Spectrometer",
      "Raman Spectrometer",
      "Raman Microscopes",
      "FT-IR Microscopes",
      "Process Monitoring",

    ],
  },
  {
    principal: "Polyscience",
    logo: Polyscience,
    products: ["Circulating Baths", "Water Baths", "Chillers & Coolers"],
  },
  {
    principal: "Radleys",
    logo: Radleys,
    products: [
      "Automated Reaction Stations",
      "Jacketed Lab Reactors",
      "AVA Lab Control Software",
      "Benchtop and Hotplate Tools",
      "Parallel Reaction Stations",
    ],
  },
  {
    principal: "Rotzmeier",
    logo: Rotzmeier,
    products: [
      "Saftey cans -for in-plant use",
      "Safety canisters -for in-plant use",
      "Safety barrels -for in-plant use",
      "Transportation containers and UN-approval",
      "Funnels",
      "Accessorie",
    ],
  },
  {
    principal: "ThalesNano",
    logo: ThalesNano,
    products: [
      "H Cube Systems",
      "Hydrogen Gas Generators",
      "Phoenix Flow Systems",
      "PhotoCube",
    ],
  },
];

export default function SynthesisAndFlowChemistry() {
  return (
    <div className="px-5 max-w-screen-xl mx-auto space-y-12">
      <Helmet>
        <title>Synthesis and Flow Chemistry - Inkarp Instruments Private Ltd</title>
        <meta name="keywords" content='default, keywords' />
        <meta name="description" content="Discover Inkarp Instruments Pvt Ltd. Learn about our mission, values, and commitment to quality. Explore our journey in the industry. About Us!" />
      </Helmet>
      {/* Grid of principal cards (matches target UI) */}
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
                      to={`/verticals/synthesis-and-flow-chemistry/${slugify(item)}`}
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
