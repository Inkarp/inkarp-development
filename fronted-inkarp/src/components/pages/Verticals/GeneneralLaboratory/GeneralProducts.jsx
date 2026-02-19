import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link, useNavigate } from "react-router-dom";

import Inkarp from "/src/assets/PrincipalLogos/InkarpNotation.svg";
import Bandelin from "/src/assets/PrincipalLogos/RowThree/bandelin.png";
import Jeiotech from "/src/assets/PrincipalLogos/RowThree/Jeiotch.png";
import Being from "/src/assets/PrincipalLogos/RowThree/Being.svg";
import Kubota from "/src/assets/PrincipalLogos/RowThree/Kubota.png";
import Luzchem from "/src/assets/PrincipalLogos/RowThree/Luzchem.png";
import RobotCoupe from "/src/assets/PrincipalLogos/RowThree/robot.png";
import Sonics from "/src/assets/PrincipalLogos/RowThree/sonics-logo.svg";
import Airtech from "/src/assets/PrincipalLogos/RowFour/Airtech.jpg";
import Innova from "/src/assets/PrincipalLogos/RowFour/Innova.png";
import Sarotius from "/src/assets/PrincipalLogos/RowFour/sartorius.svg";
import Hermle from "/src/assets/PrincipalLogos/RowSeven/hermle.jpg";
import Buchi from "/src/assets/PrincipalLogos/RowSeven/BUCHI.svg";
import DaraLyo from '/src/assets/PrincipalLogos/RowOne/dara-lyo.svg';

import { GLIData } from "../../../../data/GLIData";
import { HermelData } from "../../../../data/HermleData";
import { JiotechData } from "../../../../data/JiotechData";
import { RobotcoupeData } from "../../../../data/RobotcoupeData";
import { SonicsData } from "../../../../data/SonicsData";
import { KubotaData } from "../../../../data/KubotaData";
import { DaralyoData } from "../../../../data/DaralyoData";


const synthesisData = [
  {
    principal: "Kubota",
    logo: Kubota,
    name: "",
    products: [
      { heading: "General Purpose Centrifuges" },
      "Benchtop Centrifuge (Model S300T)",
      "Benchtop Centrifuge (Model S500T)",
      "Benchtop Centrifuge (Model S700T)",
      "Benchtop Refrigerated Centrifuge (Model S300TR)",
      "Benchtop Refrigerated Centrifuge (Model S700TR)",
      "Tabletop Refrigerated Centrifuge (Model 5500)",
      "Floor Standing Refrigerated Centrifuge (M S300FR)",
      "Floor Standing Refrigerated Centrifuge (M S700FR)",

      { heading: "Laboratory Centrifuges" },
      "Tabletop Micro Centrifuge (Model M3300)",
      "Tabletop Micro Refigerated Centrifuge (Model M3520)",
      "Micro Refigerated Centrifuge (Model M3700)",
      "Micro Refigerated Centrifuge (Model M3740)",
      "High Speed Refigerated Centrifuge (Model M6000)",
      "High Speed Refigerated Centrifuge (Model M7000)",
      "Benchtop Centrifuge (Plate Spin 3)",
      "Hybrid High Speed Refigerated Centrifuge (Model M6200)",

      { heading: "Large Laboratory Centrifuge" },
      "High Capacity Refrigerated Centrifuge (Model 8730)",
      "Large Capacity Refrigerated Centrifuge (Model 9940)",
      "Large Capacity Refrigerated Centrifuge (Model 9920)",
    ],
  },
  {
    principal: "Being",
    logo: Being,
    products: [
      { heading: "Sample Preparation and Processing" },
      "Vaccum Oven",
      "Vaccum Pump(Oil)",
      "Vaccum Pump(Dry)",
      "Drying Oven",
      "Muffle Furnance",
      "Rotary Evaporator",
      "Diaphragm Pump",
      "Smart Vaccum Chamber",
      { heading: "Temperature Control Storage Chambers" },
      "Ultra Low Temperature Freezer",
      "Low Temperature Freezer",
      "Laboratory Refrigrator (2-8' C)",
      "Combined Freezer and Refrigrator (-20 C) & (2 C to 8 C)",
      "Recirculating Chiller",
      "Heating Incubator",
      "Natural Convection/Air forced Heating Incubator",
      "Cooling Incubator",
      "Water Bath",
      { heading: "Mixing & Stirring" },
      "Orbital Shakers",
      "Magnetic Stirrer",
      "Plant Growth Chamber",
      "Humidity Chamber",
      { heading: "Cell Culture and Microbiology" },
      "CO2 Incubator",
      "Trigas Incubator",
      "Shaking Incubator",
      "Stackable Shaking Incubator",
      "Large Vertical Shaking Incubator",
      "Biosaftey Cabinet",
      "Laminar Air Flow",
      "Stackable Incubated & Refrigerated Shaker",
      "Stackable CO2 Incubated & Refrigerated Shaker",
    ],
  },
  {
    principal: "Bandelin",
    logo: Bandelin,
    products: ["Ultrasonic Baths"],
  },
  {
    principal: "Sonics",
    logo: Sonics,
    products: [
      { heading: "Ultrasonic Processors" },
      "Laboratory Scale Modals (Volumn 0.2ml-1L)",
      "Laboratory Scale Modals (Volumn 0.2ml-0.5ml)",
      "Production Scale Modals (Volumn 10L-50L)",
      "Chillers",
      "Atomizer",
      { heading: "Accessories" },
      "VCX 750-500 W SYSTEMS",
      "VCX 130-50 W SYSTEMS",
      "VCX 1500",
      "VCX 2500",
      "OEM",
    ],
  },
  {
    principal: "Inkarp",
    logo: Inkarp,
    products: ["Ultrasonic Cleaner", "Ultrasonic Bath"],
  },
  {
    principal: "Sarotius",
    logo: Sarotius,
    products: ["Arium mini plus", "Arium pro", "Arium comfort", "Arium advance"],
  },
  {
    principal: "Buchi",
    logo: Buchi,
    products: ["Lyovapours", "Kjel Line"],
  },
  {
    principal: "Innova",
    logo: Innova,
    products: ["Ice Flaker", "Glassware Washer"],
  },
  {
    principal: "Airtech",
    logo: Airtech,
    products: ["Bio saftey cabinet"],
  },
  {
    principal: "Robotcoupe",
    logo: RobotCoupe,
    products: ["Blixer"],
  },
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
    principal: "Jeiotech",
    logo: Jeiotech,
    products: ["Autoclaves", "Environmental Chambers", "Shakers", "Ovens", "Bath & Circulators", "Storages"]
  },
  {
    principal: "Hermle",
    logo: Hermle,
    products: [
      "Compact Centrifuge",
      "High Speed Centrifuge",
      "Microliter Centrifuge",
      "Universal Centrifuge",
      "Oil Test Centrifuge",
      "Large Volume Centrifuges",
      "Filtration Centrifuge",
    ],
  },

  { principal: "Daralyo", logo: DaraLyo, products: ["Laboratory Freeze Dryers and Pilot"] },
];

const synthesisProducts = {
  ...GLIData,
  ...HermelData,
  ...JiotechData,
  ...RobotcoupeData,
  ...SonicsData,
  ...KubotaData,
  ...DaralyoData
};

export default function GeneralProducts() {
  const navigate = useNavigate();
  const { type = "weighing-balance" } = useParams();

  const selectedData = synthesisProducts?.[type];
  const meta = selectedData?.meta;
  const pageData = selectedData?.pageData || {};
  // Keep products strictly an array to avoid accidental object rendering
  const products = Array.isArray(selectedData?.models) ? selectedData.models : [];

  const [openIndex, setOpenIndex] = useState(null);
  const faqs = pageData?.faqs || [];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // --- Robust normalization (like the Homogenizers component)
  const normalize = (s) =>
    (s || "")
      .toString()
      .toLowerCase()
      .replaceAll("-", " ")
      .replace(/\s+/g, " ")
      .trim();

  // Flexible principal logo detection:
  // - Works when items are strings or { heading }
  // - Allows partial includes both ways
  const getPrincipalLogoByType = (t) => {
    const readableType = normalize(t);
    for (const p of synthesisData) {
      const list = p.products || [];
      for (const item of list) {
        const text = typeof item === "string" ? item : item?.heading;
        const n = normalize(text);
        if (!n) continue;
        if (n.includes(readableType) || readableType.includes(n)) {
          return p.logo;
        }
      }
      // fallback check on principal name
      if (normalize(p.principal).includes(readableType)) return p.logo;
    }
    return Inkarp; // safe fallback
  };

  return (
    <>
      <div className="flex w-full h-full overflow-hidden">
        {meta && (
          <Helmet>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta
              name="keywords"
              content={
                Array.isArray(meta.keywords) ? meta.keywords.join(", ") : meta.keywords
              }
            />
            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta name="robots" content="index, follow" />
          </Helmet>
        )}

        {/* Main Content — aligned to the improved Homogenizers layout */}
        <main className="w-full h-full overflow-y-auto py-2 px-5 font-[Roboto]">
          <div className="flex items-center justify-around mb-6 bg-gray-100 rounded-lg shadow-xl">
            <h2 className="text-4xl font-bold text-[#0a2540] capitalize font-[MaxOT]">
              {type.replaceAll("-", " ")}
            </h2>
            <img
              src={getPrincipalLogoByType(type)}
              alt="Principal Logo"
              className="w-32 h-32 object-contain rounded"
            />
          </div>

          {/* Dynamic content */}
          <div className="p-6 max-w-6xl mx-auto">
            {pageData.title && (
              <h1 className="text-4xl font-bold mb-4 text-center font-[MaxOT]">
                {pageData.title}
              </h1>
            )}
            {pageData.intro && <p className="mb-6">{pageData.intro}</p>}
            {pageData.highlight && <p>{pageData.highlight}</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3 justify-items-center">
              {products.map((product, index) =>
                product.slug ? (
                  <Link
                    key={product.slug || index}
                    to={`/verticals/general-laboratory-instrument/${type}/${product.slug}`}
                    className="bg-[#F5F5F5] w-[300px] h-[350px] rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition-transform duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    {/* 80%: Image area */}
                    <div className="h-[80%] w-full p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    {/* 20%: Text area at the bottom */}
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

            {pageData.infoSection && (
              <>
                <h2 className="text-2xl font-semibold mt-8 mb-2 font-[MaxOT]">
                  {pageData.infoSection.title}
                </h2>
                <p className="mb-6 whitespace-pre-line">
                  {pageData.infoSection.description}
                </p>
              </>
            )}

            {pageData.subSection && (
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
                      <h3 className="text-xl font-bold text-[#E63946] mb-2 font-[MaxOT]">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 font-[Roboto]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                {Array.isArray(pageData.industries) &&
                  pageData.industries.length > 0 && (
                    <>
                      <h2 className="text-3xl font-semibold mt-16 mb-6 text-[#0a2540] font-[MaxOT]">
                        Key Advantages – Industry-wise Benefits
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
                              {industry.benefits?.map((benefit, i) => (
                                <li key={i}>{benefit}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
              </section>
            )}

            {pageData.distributor && (
              <section className="mt-20">
                <h2 className="text-3xl font-semibold mb-3 text-[#0a2540] font-[MaxOT]">
                  {pageData.distributor.title}
                </h2>
                <p className="text-gray-700 font-[Roboto] whitespace-pre-line leading-relaxed">
                  {pageData.distributor.text}
                </p>
              </section>
            )}

            {/* FAQs */}
            {faqs.length > 0 && (
              <>
                <h2 className="text-2xl font-semibold text-center mb-1 font-[MaxOT] mt-10">
                  Frequently Asked Questions
                </h2>
                <div className="w-full mx-auto p-4 md:p-8 rounded-xl">
                  <div id="accordion-collapse" data-accordion="collapse" className="space-y-0">
                    {faqs.map((faq, index) => (
                      <div key={index}>
                        <h2 id={`accordion-collapse-heading-${index}`}>
                          <button
                            type="button"
                            className={`flex items-center justify-between w-full p-5 font-medium text-left border-l-2 border border-[#E63946] ${index === 0 ? "rounded-t-xl" : ""
                              } ${openIndex === index ? "text-black bg-gray-100" : "text-gray-800 hover:bg-gray-100"}`}
                            onClick={() => toggleFAQ(index)}
                            aria-expanded={openIndex === index}
                            aria-controls={`accordion-collapse-body-${index}`}
                          >
                            <span className="text-xl font-semibold font-[MaxOT]">
                              {faq.question}
                            </span>
                            <svg
                              data-accordion-icon
                              className={`w-6 h-6 shrink-0 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </h2>
                        <div
                          id={`accordion-collapse-body-${index}`}
                          aria-labelledby={`accordion-collapse-heading-${index}`}
                          className={`${openIndex === index ? "" : "hidden"}`}
                        >
                          <div className="p-5 border border-gray-200 border-t-0 bg-gray-50 text-gray-700 font-[Roboto]">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

