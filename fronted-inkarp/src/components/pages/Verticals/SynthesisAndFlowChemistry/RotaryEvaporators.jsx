import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link, useNavigate } from "react-router-dom";

import Heidolph from "/src/assets/PrincipalLogos/RowOne/Heidolph.svg";
import Polyscience from "/src/assets/PrincipalLogos/RowOne/Polyscience.png";
import Radleys from "/src/assets/PrincipalLogos/RowOne/radley.svg";
import Rotzmeier from "/src/assets/PrincipalLogos/RowOne/Rotzmeier.gif";
import ThalesNano from "/src/assets/PrincipalLogos/RowOne/ThalesNano.jpg";
import Bruker from "/src/assets/PrincipalLogos/RowSeven/Bruker.svg";
import ProductDistributorSection from "../ProductDistributorSection";

import { RotaryProducts } from "../../../../data/RotaryProducts";
import { BrukerData } from "../../../../data/BrukerData";
import { PolyscienceData } from "../../../../data/PolyscienceData";
import { ThalesNanoData } from "../../../../data/ThalesNanoData";
import { RotzemeirData } from "../../../../data/RotzemeirData";
import { RadleysData } from "../../../../data/RadleysData";
import RotaryFaqs from "./RotaryFaqs";

import ChristmasLamp from "/ChristmasLamp.svg";
import ChristmasTree from "/ChristmasTree.svg";

// 🔧 Helper to normalize strings for matching (ignores spaces, dashes, etc.)
const normalizeKey = (str = "") =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ""); // remove everything except a-z0-9

const getDisplayNameByType = (type) => {
  const normalizedType = normalizeKey(type);

  for (let principal of synthesisData) {
    for (let p of principal.products) {
      const label = typeof p === "string" ? p : p.label;
      const slug = typeof p === "string" ? null : p.slug;

      const normalizedLabel = normalizeKey(label);
      const normalizedSlug = normalizeKey(slug || "");

      if (
        normalizedType === normalizedSlug ||
        normalizedType === normalizedLabel ||
        normalizedLabel.includes(normalizedType) ||
        normalizedType.includes(normalizedLabel)
      ) {
        return label; // return pretty name
      }
    }
  }

  return type.replaceAll("-", " "); // fallback
};


const synthesisData = [
  {
    principal: "Heidolph",
    logo: Heidolph,
    products: [
      "Rotary Evaporators",
      "Large Scale Rotary Evaporators",
      "Continuous Automatic Distillation Module",
      "Magnetic Stirrers",
      "Overhead Stirrers",
      "Shakers Mixers",
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
      // 👇 display name vs slug (for routing + matching)
      { label: "FT-IR Spectrometer", slug: "ft-ir-spectrometer" },
      { label: "FT-IR Research Spectrometer", slug: "ft-ir-research-spectrometer" },
      { label: "FT-NIR Spectrometer", slug: "ft-nir-spectrometer" },
      { label: "Raman Spectrometer", slug: "raman-spectrometer" },
      { label: "FT-IR Microscopes", slug: "ft-ir-microscopes" },
      { label: "Process Monitoring", slug: "process-monitoring" },
      { label: "Raman Microscopes", slug: "raman-microscopes" },
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

const AllSynthesisProducts = {
  ...RotaryProducts,
  ...BrukerData,
  ...PolyscienceData,
  ...ThalesNanoData,
  ...RotzemeirData,
  ...RadleysData,
};

export default function RotaryEvaporators() {
  const navigate = useNavigate();
  const { type = "rotary-evaporators" } = useParams();
  const selectedData = AllSynthesisProducts[type];
  const meta = selectedData?.meta;
  const pageData = selectedData?.pageData || {};
  const products = selectedData?.models || selectedData || [];

  const [openIndex, setOpenIndex] = useState(null);
  const faqs = pageData?.faqs || [];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getPrincipalLogoByType = (type) => {
    const normalizedType = normalizeKey(type);

    for (let principal of synthesisData) {
      for (let product of principal.products) {
        const source =
          typeof product === "string" ? product : product.slug || product.label;
        const normalizedProduct = normalizeKey(source);

        if (
          normalizedProduct === normalizedType ||
          normalizedProduct.includes(normalizedType) ||
          normalizedType.includes(normalizedProduct)
        ) {
          return principal.logo;
        }
      }
    }

    return null;
  };

  const logo = getPrincipalLogoByType(type);

  return (
    <>
      <div className="flex w-full h-full overflow-hidden">
        {meta && (
          <Helmet>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords?.join(", ")} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta name="robots" content="index, follow" />
          </Helmet>
        )}

        {/* Main Content */}
        <main className="w-full h-full overflow-y-auto py-2 px-5 font-[Roboto]">
          <div className="flex items-center justify-around mb-6 bg-gray-100 rounded-lg shadow-xl">
            <h2 className="text-4xl font-bold text-[#0a2540] font-[MaxOT]">
              {getDisplayNameByType(type)}
            </h2>

            {logo && (
              <img
                src={logo}
                alt="Synthesis Partner Logo"
                className="w-32 h-32 object-contain rounded"
              />
            )}
          </div>

          <div className="p-6 max-w-6xl mx-auto">
            {pageData.title && (
              <h1 className="text-3xl font-bold mb-4 text-center text-[#E63946] font-[MaxOT]">
                {pageData.title}
              </h1>
            )}

            {pageData.intro && <p className="mb-6">{pageData.intro}</p>}
            {pageData.highlight && <p>{pageData.highlight}</p>}

            {pageData.modelHeading && (
              <h2 className="text-2xl font-semibold font-[MaxOT] mt-4">
                {pageData.modelHeading}
              </h2>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-3 justify-items-center">
              {products.map((product, index) =>
                product.slug ? (
                  <Link
                    key={product.slug || index}
                    to={`/verticals/synthesis-and-flow-chemistry/${type}/${product.slug}`}
                    className="bg-[#F5F5F5] w-[250px] h-[300px] rounded-2xl shadow-md hover:shadow-xl border border-gray-200 overflow-hidden hover:scale-[1.06] transition-transform duration-300"
                  >

                    <div className="relative h-[80%] w-full p-4">
                      {/* <img src={ChristmasLamp} className="absolute bottom-0 left-4 h-10 w-10" />
                      <img src={ChristmasTree} className="absolute top-0 right-4 h-10 w-10" /> */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />

                    </div>
                    <div className="h-[20%] w-full px-4 pb-4 flex items-center justify-center text-center">
                      <h3 className="text-base text-[#0a2540] font-[MaxOT] line-clamp-2">
                        {product.name}
                      </h3>
                    </div>
                  </Link>
                ) : (
                  <div key={`heading-${index}`} className="col-span-full">
                    {product.heading && (
                      <h3 className="text-xl font-semibold text-[#E63946] mt-8 mb-2 font-[MaxOT]">
                        {product.heading}
                      </h3>
                    )}
                  </div>
                )
              )}
            </div>

            {pageData.infoSection?.title && (
              <>
                <h2 className="text-2xl font-semibold mt-8 mb-2 font-[MaxOT]">
                  {pageData.infoSection.title}
                </h2>
                <p className="mb-6 whitespace-pre-line">
                  {pageData.infoSection.description}
                </p>
              </>
            )}

            {pageData.subSection?.title && (
              <>
                <h2 className="text-2xl font-semibold mt-8 mb-2 font-[MaxOT]">
                  {pageData.subSection.title}
                </h2>
                <p className="mb-6">{pageData.subSection.description}</p>
              </>
            )}

            {pageData.industries && (
              <section className="mt-16">
                <h2 className="text-3xl font-semibold mb-4 text-[#0a2540] font-[MaxOT]">
                  Industries We Serve
                </h2>

                {pageData.industriesIntro && (
                  <p className="mb-8 text-gray-700 font-[Roboto]">
                    {pageData.industriesIntro}
                  </p>
                )}

                <div className="space-y-8">
                  {pageData.industries.map((item, idx) => (
                    <div key={idx}>
                      {item.title && (
                        <h3 className="text-xl font-bold text-[#E63946] mb-2 font-[MaxOT]">
                          {item.title}
                        </h3>
                      )}
                      {item.description && (
                        <p className="text-gray-700 font-[Roboto]">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-semibold mt-16 mb-6 text-[#0a2540] font-[MaxOT]">
                  Key Advantages of Rotary Evaporators – Industry-wise Benefits
                </h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pageData.industries.map((industry, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300 p-6"
                    >
                      <h3 className="text-lg font-bold text-[#E63946] mb-3 font-[MaxOT]">
                        {industry.title}
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 text-sm font-[Roboto] space-y-2">
                        {industry.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {faqs.length > 0 && <RotaryFaqs faqs={faqs} />}
          </div>
        </main>
      </div>
    </>
  );
}
