import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link, useNavigate } from "react-router-dom";
import Nanalysis from '/src/assets/PrincipalLogos/RowOne/nanalysis.png';
import Advion from '/src/assets/PrincipalLogos/RowOne/advion.png';
import Ecom from '/src/assets/PrincipalLogos/RowTwo/ECom.png';
import Waters from '/src/assets/PrincipalLogos/RowTwo/waters.svg';
import Labomatic from '/src/assets/PrincipalLogos/RowTwo/Labomatic.svg';
import ME204 from "/images/products/Mettler/ME204.jpg";
import ME204T from "/images/products/Mettler/ME204t.jpg";
import ME1002 from "/images/products/Mettler/ME1002.jpg";

import { Chromatography } from "../../../../data/Chromatography";



const synthesisData = [
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
    principal: "Ecom",
    logo: Ecom,
    products: [
      "Columns for Preparative Chromatography",
      "PLC Industrial Systems",
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
    principal: "Waters",
    logo: Waters,
    products: [
      "Chromatography and LC MS Systems",
    ],
  },
   {
    principal: "Advion",
    logo: Advion,
    products: [
      "Express CMS",
      "Solation ICP MS",
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

const synthesisProducts = {
  ...Chromatography

};


export default function ChromatographyProducts() {
  const navigate = useNavigate();
  const { type = "weighing-balance" } = useParams();
  const selectedData = synthesisProducts[type];
  const meta = selectedData?.meta;
  const pageData = selectedData?.pageData || {};
  const products = Array.isArray(selectedData?.models)
    ? selectedData.models
    : Array.isArray(selectedData)
      ? selectedData
      : [];


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
              alt="Synthesis Partner Logo"
              className="w-32 h-32 object-contain rounded"
            />
          </div>

          {/* Now load dynamic content here */}
          <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center font-[MaxOT]">{pageData.title}</h1>
            <p className="mb-6">{pageData.intro}</p>
            <p>{pageData.highlight}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-3 justify-items-center">
              {products.map((product, index) =>
                product.slug ? (
                  <Link
                    key={product.slug || index}
                    to={`/verticals/analytical-and-chromatography-solutions/${type}/${product.slug}`}
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

            {/* FAQs */}
            {faqs.length > 0 && (
              <>
                <h2 className="text-2xl font-semibold text-center mb-1 font-[MaxOT] mt-10">Frequently Asked Questions</h2>
                <div className="w-full mx-auto p-4 md:p-8 rounded-xl">
                  <div id="accordion-collapse" data-accordion="collapse" className="space-y-0">
                    {faqs.map((faq, index) => (
                      <div key={index}>
                        <h2 id={`accordion-collapse-heading-${index}`}>
                          <button
                            type="button"
                            className={`flex items-center justify-between w-full p-5 font-medium text-left border-l-2 border border-[#E63946] ${index === 0 ? 'rounded-t-xl' : ''} ${openIndex === index ? 'text-black bg-gray-100' : 'text-gray-800 hover:bg-gray-100'}`}
                            onClick={() => toggleFAQ(index)}
                            aria-expanded={openIndex === index}
                            aria-controls={`accordion-collapse-body-${index}`}
                          >
                            <span className="text-xl font-semibold font-[MaxOT]">{faq.question}</span>
                            <svg
                              data-accordion-icon
                              className={`w-6 h-6 shrink-0 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
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
                          className={`${openIndex === index ? '' : 'hidden'}`}
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

