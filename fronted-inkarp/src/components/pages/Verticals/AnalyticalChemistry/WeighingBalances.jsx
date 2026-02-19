import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link, useNavigate } from "react-router-dom";
import Mettler from '/src/assets/PrincipalLogos/RowTwo/Metller.png';
import Densito from "/images/products/Mettler/densito.jpg";
import DensityMeterExcellenceD4 from "/images/products/Mettler/density-meter-excellence-d4.jpg";
import EasyKfv from "/images/products/Mettler/easy-kfv.jpg";
import EasyPh from "/images/products/Mettler/easy-ph.jpg";
import EasyPro from "/images/products/Mettler/easy-pro.jpg";
import ExcellenceR4 from "/images/products/Mettler/Rrefractometer-excellence-r4.jpg";
import HandheldRefractometerMybrix from "/images/products/Mettler/handheld-refractometer-mybrix.jpg";
import Hc103 from "/images/products/Mettler/hc103.jpg";
import He53 from "/images/products/Mettler/he53.jpg";

import Hx204 from "/images/products/Mettler/hx204.jpg";

import MeltingPointSystemMp80 from "/images/products/Mettler/melting-point-System-mp80.jpg";
import MeltingPointSystemMp30 from "/images/products/Mettler/melting-point-System-mp30.jpg";

import Ms205du from "/images/products/Mettler/ms205du.jpg";
import S400bio from "/images/products/Mettler/s400bio.jpg";
import S470StdKit from "/images/products/Mettler/s470-std-kit.jpg";
import S700StdKit from "/images/products/Mettler/s700-std-kit.jpg";
import Sd20Kit from "/images/products/Mettler/sd20-kit.jpg";
import Sd23 from "/images/products/Mettler/sd23.jpg";
import Sd30Kit from "/images/products/Mettler/sd30-kit.jpg";
import Sd50Kit from "/images/products/Mettler/sd50-kit.jpg";

import TitratorExcellenceT5 from "/images/products/Mettler/titrator-excellence-t5.jpg";

import Xpr2u from "/images/products/Mettler/xpr2u.jpg";

import Xpr3 from "/images/products/Mettler/xpr3.jpg";
import Xpr205due from "/images/products/Mettler/xpr205due.jpg";

import Fp20biokit from "/images/products/Mettler/FP20-bio-kit.jpg";
import Fp30stdkit from "/images/products/Mettler/FP30-std-kit.jpg";

import Hs153 from "/images/products/Mettler/hs153.jpg";

import EasyUV from "/images/products/Mettler/easy-uv.jpg";

import EvaV1 from "/images/products/Mettler/eva-v1.jpg";
import EvaC1 from "/images/products/Mettler/eva-c1.jpg";

import MA204 from "/images/products/Mettler/MA204.jpg";
import LA204 from "/images/products/Mettler/LA204.jpg";
import MA1002 from "/images/products/Mettler/MA1002.jpg";
import LA2002 from "/images/products/Mettler/LA2002.jpg";
import MA6002 from "/images/products/Mettler/MA6002.jpg";
import MR204 from "/images/products/Mettler/MR204.jpg";
import MX204 from "/images/products/Mettler/MX204.jpg";
import MA503 from "/images/products/Mettler/MA503.jpg";
import MX205DU from "/images/products/Mettler/MX205DU.jpg";

const synthesisData = [
  {
    principal: "MettlerTodlo",
    logo: Mettler,
    products: [
      "Weighing Balance",
      "Moisture Analyzer",
      "Analytical Instruments",
    ],
  }
];

const synthesisProducts = {
  "weighing-balance": {
    models: [
      { heading: "Laboratory Balances" },
      {
        name: "Analytical Balance MS205DU",
        slug: "analytical-balance-ms205du",
        image: Ms205du,
      },
      {
        name: "Analytical Balance MA204",
        slug: "analytical-balance-ma204",
        image: MA204,
      },
      {
        name: "Analytical Balance LA204",
        slug: "analytical-balance-la204",
        image: LA204,
      },
       {
        name: "Analytical Balance MR204",
        slug: "analytical-balance-mr204",
        image: MR204,
      },
      {
        name: "Analytical Balance MX204",
        slug: "analytical-balance-mx204",
        image: MX204,
      },
      
      {
        name: "Analytical Balance MX205DU",
        slug: "analytical-balance-mx205du",
        image: MX205DU,
      },
      {
        name: "Precision Balance MA1002",
        slug: "precision-balance-ma1002",
        image: MA1002,
      },
      {
        name: "Precision Balance LA2002",
        slug: "precision-balance-la2002",
        image: LA2002,
      },

      {
        name: "Precision Balance MA6002",
        slug: "precision-balance-ma6002",
        image: MA6002,
      },
      {
        name: "Precision Balance MA503",
        slug: "precision-balance-ma503",
        image: MA503,
      },
    
      { heading: "Weighing Solutions" },

      {
        name: "Balance XPR2U",
        slug: "balance-xpr2u",
        image: Xpr2u,
      },
      {
        name: "Balance XPR3",
        slug: "balance-xpr3",
        image: Xpr3,
      },
      {
        name: "Balance XPR205DUE",
        slug: "balance-xpr205due",
        image: Xpr205due,
      },
    ],

    meta: {
      title: "Best Rotary Evaporator – Water Distillation & Solvent Recovery Unit Distributor And Service Provider In India | Inkarp",
      description: "Explore Heidolph Rotary Evaporators for precise water distillation and solvent recovery in laboratories. Distributed by Inkarp – India's trusted scientific equipment partner.",
      keywords: [
        "Rotary Evaporator",
        "Rotary evaporator for water distillation",
        "Pharmaceutical rotary evaporator",
        "Best Heidolph Rotary Evaporator In India",
        "Rotary Evaporator Service Provider In India",
        "Rotary Evaporator Distributor In India",
        "Water Distillation Unit For Laboratory",
        "Solvent Recovery Unit Distributor In India",
        "Solvent Recovery Unit Service Provider In India",
        "Water Distillation and Solvent Recovery Unit"
      ],
      altText: "Best Rotary Evaporator In India",
      internalLinks: ["Internal Product Pages Links"],
      externalLinks: ["Heidolph Website"]
    },

  },
  "moisture-analyzer": {
    models: [
      { heading: "Moisture Analyzers" },
      {
        name: "Halogen Moisture Analyzer HE53 (230V)",
        slug: "halogen-moisture-analyzer-he53-230v",
        image: He53,
      },

      {
        name: "Halogen Moisture Analyzer HC103 (230V)",
        slug: "halogen-moisture-analyzer-hc103-230v",
        image: Hc103,
      },
      {
        name: "Halogen Moisture Analyzer HX204",
        slug: "halogen-moisture-analyzer-hx204",
        image: Hx204,
      },
      {
        name: "Halogen Moisture Analyzer HS153",
        slug: "halogen-moisture-analyzer-hs153",
        image: Hs153,
      },
    ],


    meta: {
      title: "Best Rotary Evaporator – Water Distillation & Solvent Recovery Unit Distributor And Service Provider In India | Inkarp",
      description: "Explore Heidolph Rotary Evaporators for precise water distillation and solvent recovery in laboratories. Distributed by Inkarp – India's trusted scientific equipment partner.",
      keywords: [
        "Rotary Evaporator",
        "Rotary evaporator for water distillation",
        "Pharmaceutical rotary evaporator",
        "Best Heidolph Rotary Evaporator In India",
        "Rotary Evaporator Service Provider In India",
        "Rotary Evaporator Distributor In India",
        "Water Distillation Unit For Laboratory",
        "Solvent Recovery Unit Distributor In India",
        "Solvent Recovery Unit Service Provider In India",
        "Water Distillation and Solvent Recovery Unit"
      ],
      altText: "Best Rotary Evaporator In India",
      internalLinks: ["Internal Product Pages Links"],
      externalLinks: ["Heidolph Website"]
    },


  },
  "analytical-instruments": {
    models: [
      { heading: "SevenDirect Series" },
      {
        name: "pH meter SevenDirect SD20 Kit",
        slug: "ph-meter-sevendirect-sd20-kit",
        image: Sd20Kit,
      },
      {
        name: "Cond meter SevenDirect SD30 Kit",
        slug: "cond-meter-sevendirect-sd30-kit",
        image: Sd30Kit,
      },
      {
        name: "pH/Cond meter SevenDirect SD23 Kit",
        slug: "ph-cond-meter-sevendirect-sd23-kit",
        image: Sd23,
      },
      {
        name: "pH/Ion meter SevenDirect SD50 Kit",
        slug: "ph-ion-meter-sevendirect-sd50-kit",
        image: Sd50Kit,
      },

      { heading: "SevenExcellence Series" },
      {
        name: "SevenExcellence pH meter S400-Bio-Kit",
        slug: "seven-excellence-ph-meter-s400-bio-kit",
        image: S400bio,
      },
      {
        name: "SevenExcellence Cond meter S700-Std-Kit",
        slug: "seven-excellence-ph-cond-meter-s700-std-kit",
        image: S700StdKit,
      },
      {
        name: "SevenExcellence pH/Cond meter S470-Std-K",
        slug: "seven-excellence-ph-cond-meter-s470-std-k",
        image: S470StdKit,
      },

      { heading: "Five Easy Series" },
      {
        name: "pH meter FP20-Bio-Kit",
        slug: "pH-meter-fp20-bio-Kit",
        image: Fp20biokit,
      },
      {
        name: "Cond meter FP30-Std-Kit",
        slug: "cond-meter-fp30-std-kit",
        image: Fp30stdkit,
      },

      { heading: "Titrators" },
      {
        name: "Titrator EasyPlus Easy pH",
        slug: "titrator-easyplus-easy-ph",
        image: EasyPh,
      },
      {
        name: "Titrator EasyPlus Easy Pro",
        slug: "titrator-easyplus-easy-pro",
        image: EasyPro,
      },
      {
        name: "Titrator EasyPlus Easy KFV",
        slug: "titrator-easyplus-easy-kfv",
        image: EasyKfv,
      },
      {
        name: "Titrator Excellence T5",
        slug: "titrator-excellence-t5",
        image: TitratorExcellenceT5,
      },
      {
        name: "Volumetric KF Titrator EVA V1",
        slug: "titrator-eva-v1",
        image: EvaV1,
      },
      {
        name: "Coulometric KF Titrator Base EVA C1",
        slug: "titrator-eva-c1",
        image: EvaC1,
      },

      { heading: "Density Meter" },
      {
        name: "Handheld Density Meter Densito",
        slug: "handheld-density-meter-densito",
        image: Densito,
      },
      {
        name: "Density meter Excellence D4",
        slug: "density-meter-excellence-d4",
        image: DensityMeterExcellenceD4,
      },

      { heading: "Refractometer" },
      {
        name: "Refractometer Excellence R4",
        slug: "refractometer-excellence-r4",
        image: ExcellenceR4,
      },
      {
        name: "Handheld Refractometer MyBrix",
        slug: "handheld-refractometer-mybrix",
        image: HandheldRefractometerMybrix,
      },

      { heading: "Spectrometer" },
      {
        name: "Spectrometer Easy UV",
        slug: "spectrometer-easy-uv",
        image: EasyUV,
      },

      { heading: "Melting Point Apparatus" },
      {
        name: "Melting Point System MP30",
        slug: "melting-point-system-mp30",
        image: MeltingPointSystemMp30,
      },
      {
        name: "Melting Point System MP80",
        slug: "melting-point-system-mp80",
        image: MeltingPointSystemMp80,
      },
    ],




    meta: {
      title: "Best Rotary Evaporator – Water Distillation & Solvent Recovery Unit Distributor And Service Provider In India | Inkarp",
      description: "Explore Heidolph Rotary Evaporators for precise water distillation and solvent recovery in laboratories. Distributed by Inkarp – India's trusted scientific equipment partner.",
      keywords: [
        "Rotary Evaporator",
        "Rotary evaporator for water distillation",
        "Pharmaceutical rotary evaporator",
        "Best Heidolph Rotary Evaporator In India",
        "Rotary Evaporator Service Provider In India",
        "Rotary Evaporator Distributor In India",
        "Water Distillation Unit For Laboratory",
        "Solvent Recovery Unit Distributor In India",
        "Solvent Recovery Unit Service Provider In India",
        "Water Distillation and Solvent Recovery Unit"
      ],
      altText: "Best Rotary Evaporator In India",
      internalLinks: ["Internal Product Pages Links"],
      externalLinks: ["Heidolph Website"]
    },
  },

};


export default function RotaryEvaporators() {
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

    return null;
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
                    to={`/verticals/analytical-chemistry-and-weighing/${type}/${product.slug}`}
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

