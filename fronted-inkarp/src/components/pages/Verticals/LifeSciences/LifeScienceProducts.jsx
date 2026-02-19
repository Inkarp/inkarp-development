import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link, useNavigate } from "react-router-dom";
import Implen from '/src/assets/PrincipalLogos/RowFour/Implen.png';
import Nanosurf from '/src/assets/PrincipalLogos/RowFour/NanoSurf.svg';
import Avanjo from '/src/assets/PrincipalLogos/RowFour/Anvajo.svg';
import Bwb from '/src/assets/PrincipalLogos/RowFour/BWB.png';
import Photon from '/src/assets/PrincipalLogos/RowFive/Photon.jpeg';
import Nenovision from '/src/assets/PrincipalLogos/RowFive/Nenovision.svg';
import Reichert from '/src/assets/PrincipalLogos/RowFive/reichert.png';
import Affinite from '/src/assets/PrincipalLogos/RowSeven/Affinite.webp';

import { LifescienceData } from "../../../../data/LifescienceData";
import RotaryFaqs from "../SynthesisAndFlowChemistry/RotaryFaqs";



const synthesisData = [
  {
    principal: "Implen",
    logo: Implen,
    products: [
      "NanoPhotometer",
      "OD600",
    ],
  },
  {
    principal: "Nanosurf",
    logo: Nanosurf,
    products: [
      "Research",
      "Integration",
      "Industry",
      "Compact",
    ],
  },
  {
    principal: "Avanjo",
    logo: Avanjo,
    products: [
      "Fluidlab R 300",
    ],
  },
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
    principal: "Nenovision",
    logo: Nenovision,
    products: [
      "LiteScope",
    ],
  },
  { principal: "Affinite", logo: Affinite, products: ["Surface Plasmon Resonance"] },
  {
    principal: "Reichert",
    logo: Reichert,
    products: [
      "Reichert SPR Systems",
    ],
  },
  {
    principal: "Photon",
    logo: Photon,
    products: [
      "Photon Products"
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
];

const synthesisProducts = {
  ...LifescienceData

};


export default function LifeScienceProducts() {
  const navigate = useNavigate();
  const { type = "weighing-balance" } = useParams();
  const selectedData = synthesisProducts[type];
  const meta = selectedData?.meta;
  const pageData = selectedData?.pageData || {};
  const products = selectedData?.models || selectedData || [];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = pageData?.faqs || [];

  const getPrincipalLogoByType = (type) => {
    const readableType = type.replaceAll("-", " ").toLowerCase();

    for (let principal of synthesisData) {
      const match = principal.products.find((product) =>
        product.toLowerCase().includes(readableType)
      );
      if (match) return principal.logo;
    }

    return null; // fallback if no match found
  };


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
            <h2 className="text-4xl font-bold text-[#0a2540] capitalize font-[MaxOT]">
              {type.replaceAll("-", " ")}
            </h2>
            <img
              src={getPrincipalLogoByType(type)}
              alt="Partner Logo"
              className="w-32 h-32 object-contain rounded"
            />
          </div>

          {/* Now load dynamic content here */}
          <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center font-[MaxOT]">{pageData.title}</h1>
            <p className="mb-6">{pageData.intro}</p>
            {/* <p>{pageData.highlight}</p> */}
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: pageData.highlight || "" }}
            >
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-3 justify-items-center">
              {products.map((product, index) =>
                product.slug ? (
                  <Link
                    key={product.slug || index}
                    to={`/verticals/lifesciences/${type}/${product.slug}`}
                    className="bg-[#F5F5F5] w-[250px] h-[300px] rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition-transform duration-300 hover:-translate-y-1 overflow-hidden"
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

             <div
              className="prose max-w-none mt-5"
              dangerouslySetInnerHTML={{ __html: pageData.content || "" }}
            >
            </div>

            {pageData.infoSection && (
              <>
                <h2 className="text-2xl font-semibold mt-8 mb-2 font-[MaxOT]">{pageData.infoSection.title}</h2>
                <p className="mb-6 whitespace-pre-line">{pageData.infoSection.description}</p>
              </>
            )}

            {pageData.subSection && (
              <>
                <h2 className="text-2xl font-semibold mt-8 mb-2 font-[MaxOT]">{pageData.subSection.title}</h2>
                <p className="mb-6">{pageData.subSection.description}</p>
              </>
            )}

            {pageData.industries && (
              <section className="mt-16">
                <h2 className="text-3xl font-semibold mb-4 text-[#0a2540] font-[MaxOT]">Industries We Serve</h2>
                <p className="mb-8 text-gray-700 font-[Roboto]">{pageData.industriesIntro}</p>

                <div className="space-y-8">
                  {pageData.industries.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="text-xl font-bold text-[#E63946] mb-2 font-[MaxOT]">{item.title}</h3>
                      <p className="text-gray-700 font-[Roboto]">{item.description}</p>
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
                      <h3 className="text-lg font-bold text-[#E63946] mb-3 font-[MaxOT]">{industry.title}</h3>
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
            {
              faqs.length > 0 && (
                <RotaryFaqs faqs={faqs} />
              )
            }
          </div>
        </main >
      </div>
    </>
  );
}

