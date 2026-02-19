import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { Share2, Download, CheckCircle, ZoomIn, CheckCheck } from "lucide-react";
import { HiOutlineClipboardList } from "react-icons/hi";
import RotaryFaqs from "../SynthesisAndFlowChemistry/RotaryFaqs";
import { GLIProducts } from "../../../../data/GLI/GLIProducts";
import { HermeleProducts } from "../../../../data/GLI/HermleProducts";
import { JiotechProducts } from "../../../../data/GLI/JiotechProducts";
import { JiotechProductsTwo } from "../../../../data/GLI/JioProductsTwo";
import { JiotechProductsThree } from "../../../../data/GLI/JioProductsThree";
import { BuchiProducts } from "../../../../data/GLI/BuchiProducts";
import { RobotcoupeProducts } from "../../../../data/GLI/RobotcoupeProducts";
import { SonicsProducts } from "../../../../data/GLI/SonicsProducts";
import EnquiryForm from "../../../EnquiryFrom";
import { KubotaProducts } from "../../../../data/GLI/KubotaProducts";
import { InnovaProducts } from "../../../../data/GLI/InnovaProducts";
import { DaralyoProducts } from "../../../../data/GLI/DaralyoProducts";

const SynthesisProductDetails = {
  ...GLIProducts,
  ...HermeleProducts,
  ...JiotechProducts,
  ...JiotechProductsTwo,
  ...JiotechProductsThree,
  ...BuchiProducts,
  ...RobotcoupeProducts,
  ...SonicsProducts,
  ...KubotaProducts,
  ...InnovaProducts,
  ...DaralyoProducts
};

const productLinks = {
  robotcoupe: "https://www.robot-coupe.com/export/en",
  sartorius: "https://www.sartorius.com/en",
  buchi: "https://www.buchi.com/en",
  bandelin: "https://bandelin.com",
  jeiotech: "https://www.jeiotech.com/eng/",
  hermle: "https://hermle-labortechnik.de/en/",
  luzchem: "https://luzchem.com/",
  sonics: "https://www.sonics.com/",
  innova: "https://www.innovabiomed.com/our-solutions/life-science.html",
  kubota: "https://www.centrifuge.jp/",
  inkarp: "https://inkarp.co.in/contactUs",
  // daralyo: "https://dara-lyo.com/en/machinery-selector/1-laboratory-freeze-dryers-pilot/7-lyomicron",
};

export default function GeneralProductDetails() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const { productSlug } = useParams();
  const product = SynthesisProductDetails?.[productSlug];
  const meta = product?.meta;
  const [showModal, setShowModal] = useState(false);

  if (!product) {
    return (
      <div className="p-10 text-center bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-red-600 font-[MaxOT]">Product Not Found</h2>
        <p className="text-gray-600 mt-2 font-[Roboto]">
          The product you are looking for does not exist.
        </p>
      </div>
    );
  }

  // ---------------------------
  // Flexible Tech Specs Helpers
  // ---------------------------
  const isObject = (v) => v && typeof v === "object" && !Array.isArray(v);
  const toEntries = (obj = {}) => Object.entries(obj || {});
  const uniq = (arr) => Array.from(new Set(arr));

  // Build pivot for perModel (e.g., ON4-V)
  const buildPivotFromPerModel = (perModel) => {
    const modelKeys = Object.keys(perModel || {});
    const specKeys = uniq(
      modelKeys.flatMap((m) => Object.keys(perModel[m] || {}))
    );
    return { modelKeys, specKeys };
  };

  // Build pivot for specs (e.g., BS2)
  const buildFromSpecs = (specs) => {
    const modelKeys = Array.isArray(specs?.Model) ? specs.Model : [];
    const rawEntries = toEntries(specs).filter(([k]) => k !== "Model");

    const generalSpecs = {};
    const perModelSpecs = {};

    rawEntries.forEach(([k, v]) => {
      if (isObject(v)) perModelSpecs[k] = v;
      else generalSpecs[k] = v;
    });

    const specKeys = Object.keys(perModelSpecs);
    return { modelKeys, specKeys, generalSpecs, perModelSpecs };
  };

  // Card grid for list-like specs
  const CardGrid = ({ entries }) => {
    if (!entries?.length) return null;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {entries.map(([key, value], index) => (
          <div
            key={index}
            className="flex items-start gap-3 rounded-xl shadow-md p-4 bg-white hover:scale-105 transition hover:bg-red-50"
          >
            <HiOutlineClipboardList className="text-[#E63946] w-6 h-6 mt-1 flex-shrink-0" />
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-1">
              <p className="text-base font-bold font-[MaxOT] text-gray-800">
                {key}
              </p>
              <p className="text-sm sm:text-base whitespace-pre-line font-[Roboto] text-gray-600 sm:text-right">
                {String(value)}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Responsive model comparison table
  const SpecTable = ({ modelKeys, specKeys, getValue }) => {
    if (!modelKeys?.length || !specKeys?.length) return null;
    return (
      <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="sticky left-0 bg-gray-100 px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                Specification
              </th>
              {modelKeys.map((m) => (
                <th
                  key={m}
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b"
                >
                  {m}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {specKeys.map((spec) => (
              <tr key={spec} className="even:bg-gray-50">
                <td className="sticky left-0 bg-white px-4 py-3 text-sm font-medium text-gray-800 border-b">
                  {spec}
                </td>
                {modelKeys.map((m) => (
                  <td
                    key={`${spec}-${m}`}
                    className="px-4 py-3 text-sm text-gray-700 border-b whitespace-pre-line"
                  >
                    {String(getValue(m, spec) ?? "—")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // ---------------------------
  // Detect Tech Specs Shapes
  // ---------------------------
  const techSpecs = product?.techSpecs ?? {};
  const hasON4Shape = !!(techSpecs?.common || techSpecs?.perModel);
  const hasBS2Shape = !!techSpecs?.specs && typeof techSpecs.specs === "object";

  // Common entries (cards)
  let commonEntries = [];
  if (hasON4Shape) {
    commonEntries = toEntries(techSpecs.common || {});
  } else if (hasBS2Shape) {
    const built = buildFromSpecs(techSpecs.specs);
    commonEntries = toEntries(built.generalSpecs || {});
  } else if (techSpecs?.specs && typeof techSpecs.specs === "object") {
    // Legacy: specs is a flat mapping of key/value
    commonEntries = toEntries(techSpecs.specs);
  } else if (isObject(techSpecs) && Object.keys(techSpecs).length) {
    // Legacy: entire techSpecs is a flat mapping
    commonEntries = toEntries(techSpecs);
  }

  // ON4-V style pivot
  let on4Pivot = null;
  if (hasON4Shape && isObject(techSpecs.perModel)) {
    const { modelKeys, specKeys } = buildPivotFromPerModel(techSpecs.perModel);
    on4Pivot = {
      modelKeys,
      specKeys,
      getValue: (m, s) => techSpecs.perModel?.[m]?.[s],
    };
  }

  // BS2 style pivot
  let bs2Pivot = null;
  if (hasBS2Shape && isObject(techSpecs.specs)) {
    const built = buildFromSpecs(techSpecs.specs);
    bs2Pivot = {
      modelKeys: built.modelKeys,
      specKeys: built.specKeys,
      perModelSpecs: built.perModelSpecs,
    };
  }

  const showTechSpecs =
    (commonEntries && commonEntries.length > 0) ||
    (on4Pivot && on4Pivot.modelKeys.length && on4Pivot.specKeys.length) ||
    (bs2Pivot && bs2Pivot.modelKeys.length && bs2Pivot.specKeys.length);

  // ---------------------------
  // Description renderer (supports rich HTML or plain text/markdown)
  // ---------------------------
  const renderDescriptionHTML = (desc) => {
    if (desc == null) return "";
    const str = String(desc);
    // Detect if it "looks like" HTML
    const looksLikeHTML = /<\/?[a-z][\s\S]*>/i.test(str.trim());
    if (looksLikeHTML) return str; // render as-is (your styled HTML snippet)
    // Otherwise: support **bold** and newlines
    return str
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-black">$1</strong>')
      .replace(/\n/g, "<br />");
  };

  const waHref = `https://wa.me/918125580808?text=${encodeURIComponent(
    `Hi Inkarp team, I'm interested in "${product.name}"`
  )}`;

  return (
    <>
      {meta && (
        <Helmet>
          <title>{product.name} Distributor and Service Provider In India|{product.altText}|Inkarp</title>
          <meta name="description" content={meta.description} />
          <meta
            name="keywords"
            content={
              Array.isArray(meta.keywords) ? meta.keywords.join(", ") : meta.keywords
            }
          />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {meta.structuredData && (
            <script type="application/ld+json">
              {JSON.stringify(meta.structuredData)}
            </script>
          )}
        </Helmet>
      )}

      <div className="bg-white px-2 sm:px-5 py-4">
        {/* Mobile Header */}
        <div className="block md:hidden bg-gray-50 p-4 rounded-xl border">
          <div className="flex items-center gap-4">
            <div className="w-1/3 flex-shrink-0">
              <img
                src={product?.image}
                alt={`${product?.name ?? 'Product'}_${product?.altText ? product.altText + '_' : ''}Inkarp`}
              />
            </div>
            <div className="w-2/3 space-y-2">
              {product.logo && (
                <img src={product.logo} alt="Logo" className="w-24 h-auto" />
              )}
              <h1 className="text-md font-bold font-[MaxOT] text-gray-900 leading-tight">
                <a
                  href={productLinks[product.altText?.toLowerCase()] || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {product.name}
                </a>{" "}
                Distributor and Service Provider In India
              </h1>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:block relative w-full">
          {product.bannerImg && (
            <img
              src={product.bannerImg}
              alt={`${product?.name ?? 'Banner'}_${product?.altText ? product.altText + '_' : ''}Inkarp`}
              className="w-full h-auto object-cover rounded-md"
            />
          )}
          <div className="absolute inset-0 flex flex-row items-center justify-around p-4">
            <div className="w-1/2 flex justify-start">
              <img
                src={product.image}
                alt={`${product?.name ?? 'Product'}_${product?.altText ? product.altText + '_' : ''}Inkarp`}
                className="w-[60%] h-auto object-cover rounded-lg"
              />
            </div>
            <div className="w-1/2 text-center">
              {product.logo && (
                <img
                  src={product.logo}
                  alt={`${product.altText ?? 'Product'}_logo`}
                  className="w-48 h-auto mb-4 bg-white p-4 rounded-lg shadow-lg inline-block"
                />
              )}
              <h1 className="text-4xl font-extrabold tracking-tight font-[MaxOT] text-black drop-shadow-md">
                <a
                  href={productLinks[product.altText?.toLowerCase()] || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {product.name}
                </a>{" "}
                Distributor and Service Provider In India
              </h1>
            </div>
          </div>
        </div>


        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(
              `Check out this product: https://www.inkarp.co.in/verticals/synthesis-and-flow-chemistry/rotary-evaporators/${productSlug}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center justify-center gap-2 bg-[#E63946] text-white px-5 py-2.5 rounded-full hover:bg-red-700 transition-transform transform hover:scale-105 shadow-lg font-semibold font-[MaxOT]">
              <Share2 size={18} /> Share
            </button>
          </a>

          <button
            className="flex items-center justify-center gap-2 bg-[#0F2A33] text-white px-5 py-2.5 rounded-full hover:bg-[#123642] transition-transform transform hover:scale-105 shadow-lg font-semibold font-[MaxOT]"
            onClick={() => setShowModal(true)}
          >
            <ZoomIn size={20} /> Show Image
          </button>

          {/* NEW: Enquiry button */}
          <button
            className="flex items-center justify-center gap-2 bg-[#E63946] text-white px-5 py-2.5 rounded-full hover:bg-red-700 transition-transform transform hover:scale-105 shadow-lg font-semibold font-[MaxOT]"
            onClick={() => setShowEnquiry(true)}
            aria-haspopup="dialog"
          >
            Enquiry
          </button>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"

          >
            <button
              className="flex items-center justify-center gap-2 bg-[#0F2A33] text-white px-5 py-2.5 rounded-full hover:bg-[#123642] transition-transform transform hover:scale-105 shadow-lg font-semibold font-[MaxOT]"

            >
              Meet Expert
            </button>
          </a>

        </div>

        <EnquiryForm
          isOpen={showEnquiry}
          onClose={() => setShowEnquiry(false)}
          productName={product.name}
        />

        {/* Overview */}
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-12">
          <div className="flex flex-col items-center w-full">
            <h2 className="text-2xl sm:text-3xl text-center mb-4 font-[MaxOT] border-b-2 border-[#E63946] pb-2 w-full">
              Overview
            </h2>

            <div
              className="text-base sm:text-lg text-gray-700 font-[Roboto] w-full"
              dangerouslySetInnerHTML={{
                __html: renderDescriptionHTML(product.description),
              }}
            />

            {/* Modal */}
            {showModal && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
                onClick={() => setShowModal(false)}
              >
                <div
                  className="relative flex flex-col items-center bg-white p-4 rounded-lg shadow-xl w-full max-w-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={product.image}
                    alt={product.altText}
                    className="w-full h-auto object-contain max-h-[80vh]"
                  />
                  <button
                    className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full font-semibold shadow hover:bg-red-700"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Key Features */}
          {Array.isArray(product?.features) && product.features.length > 0 && (
            <div className="bg-gray-50 p-6 rounded-3xl shadow-xl border border-gray-200">
              <h2 className="text-2xl sm:text-3xl text-center text-[#E63946] font-[MaxOT] mb-6">
                Key Features of {product.name}
              </h2>
              {product.features[0]?.overview && (
                <p className="text-base sm:text-lg py-3 text-center font-[Roboto] text-gray-700">
                  {product.features[0].overview}
                </p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {(product.features[0]?.overview
                  ? product.features.slice(1)
                  : product.features
                ).map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition hover:scale-105 hover:bg-red-50"
                  >
                    <div className="flex-shrink-0 p-3 rounded-full bg-gradient-to-tr from-red-400 to-red-600 text-white mr-4">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <p className="font-[MaxOT] text-gray-800">{feature.name}</p>
                      <p className="text-sm font-[Roboto] text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {product.featuresHeading ? <p className="text-lg p-5 font-[Roboto] text-gray-800">{product.featuresHeading}</p> : ""}
            </div>
          )}

          {/* Key Advantages */}
        
          {Array.isArray(product?.advantages) && product.advantages.length > 0 && (
            <div className="bg-gray-50 p-6 rounded-3xl shadow-xl border border-gray-200">
              <h2 className="text-2xl sm:text-3xl text-center text-[#E63946] font-[MaxOT] mb-6">
                Key Advantages of {product.name}
              </h2>
              {product.advantages[0]?.overview && (
                <p className="text-base sm:text-lg py-3 text-center font-[Roboto] text-gray-700">
                  {product.advantages[0].overview}
                </p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {(product.advantages[0]?.overview
                  ? product.advantages.slice(1)
                  : product.advantages
                ).map((advantage, i) => (
                  <div
                    key={i}
                    className="flex items-start bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition hover:scale-105 hover:bg-red-50"
                  >
                    <div className="w-8 h-8 p-1 rounded-full bg-gradient-to-tr from-red-400 to-red-600 text-white mr-4 shadow-md flex items-center justify-center">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-[MaxOT] text-gray-800">{advantage.name}</p>
                      <p className="text-sm font-[Roboto] text-gray-600">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {product?.advantagesText && (
                <div className="mt-6 rounded-2xl border border-[#E63946]/20 bg-[#E63946]/5 p-4">
                  <p className="text-sm sm:text-base font-[Roboto] text-gray-700">
                    {product.advantagesText}
                  </p>
                </div>
              )}
            </div>
          )}


          {/* Key applications */}
          {Array.isArray(product?.applications) && product.applications.length > 0 && (
            <div className="bg-gray-50 p-6 rounded-3xl shadow-xl border border-gray-200">
              <h2 className="text-2xl sm:text-3xl text-center text-[#E63946] font-[MaxOT]">
                Key Applications of {product.name}
              </h2>
              {product.applications[0]?.overview && (
                <p className="text-base sm:text-lg py-3 text-center font-[Roboto] text-gray-700">
                  {product.applications[0].overview}
                </p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {(product.applications[0]?.overview
                  ? product.applications.slice(1)
                  : product.applications
                ).map((application, i) => (
                  <div
                    key={i}
                    className="flex items-start bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition hover:scale-105 hover:bg-red-50"
                  >
                    <div className="w-8 h-8 p-1 rounded-full bg-gradient-to-tr from-red-400 to-red-600 text-white mr-4 shadow-md flex items-center justify-center">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>

                    </div>
                    <div>
                      <p className="font-[MaxOT] text-gray-800">{application.name}</p>
                      <p className="text-sm font-[Roboto] text-gray-600">
                        {application.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {Array.isArray(product?.highlights) && product.highlights.length > 0 && (
            <div className="bg-gray-50 p-6 rounded-3xl shadow-xl border border-gray-200">
              <h2 className="text-2xl sm:text-3xl text-center text-[#E63946] font-[MaxOT] mb-6">
                Display Functions of {product.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {(product.highlights[0]?.overview
                  ? product.highlights.slice(1)
                  : product.highlights
                ).map((highlight, i) => (
                  <div
                    key={i}
                    className="flex items-start bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition hover:scale-105 hover:bg-red-50"
                  >
                    <div className="w-10 h-10 p-3 rounded-full bg-gradient-to-tr from-red-400 to-red-600 text-white mr-4 shadow-md flex items-center justify-center">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-[MaxOT] text-gray-800">{highlight.name}</p>
                      <p className="text-sm font-[Roboto] text-gray-600">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Technical Specs (Flexible) */}
        {showTechSpecs && (
          <div className="py-8 sm:px-4 lg:px-8 w-full max-w-7xl mx-auto">
            <div className="bg-gray-50 shadow-xl overflow-hidden rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-200">
              <h2 className="text-2xl sm:text-3xl text-[#E63946] text-center font-[MaxOT] mb-2">
                Technical Specifications of {product.name}
              </h2>

              {techSpecs?.overview && (
                <p className="py-3 px-2 sm:px-5 text-base sm:text-lg text-center font-[Roboto] text-gray-700">
                  {techSpecs.overview}
                </p>
              )}

              {/* Cards for common/general specs or legacy flat lists */}
              <CardGrid entries={commonEntries} />

              {/* ON4-V style table */}
              {on4Pivot &&
                on4Pivot.modelKeys.length > 0 &&
                on4Pivot.specKeys.length > 0 && (
                  <>
                    <h4 className="mt-8 text-xl font-semibold text-gray-800">
                      Model Comparison
                    </h4>
                    <SpecTable
                      modelKeys={on4Pivot.modelKeys}
                      specKeys={on4Pivot.specKeys}
                      getValue={on4Pivot.getValue}
                    />
                  </>
                )}

              {/* BS2 style table */}
              {bs2Pivot &&
                bs2Pivot.modelKeys.length > 0 &&
                bs2Pivot.specKeys.length > 0 && (
                  <>
                    <h4 className="mt-8 text-xl font-semibold text-gray-800">
                      Model Comparison
                    </h4>
                    <SpecTable
                      modelKeys={bs2Pivot.modelKeys}
                      specKeys={bs2Pivot.specKeys}
                      getValue={(m, s) => bs2Pivot.perModelSpecs?.[s]?.[m]}
                    />
                  </>
                )}
            </div>
          </div>
        )}
        {/* INFINITY Technology */}
        {product?.infinityTechnology?.items?.length > 0 && (
          <section className="p-5">
            <div className="rounded-3xl border border-gray-200 bg-white shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-white px-6 py-6 border-b border-gray-200">
                <h2 className="text-2xl sm:text-3xl text-center text-[#E63946] font-[MaxOT]">
                  {product.infinityTechnology.title}
                </h2>
              </div>

              <div className="p-6 sm:p-8">
                {product.infinityTechnology.description && (
                  <p className="text-sm sm:text-base font-[Roboto] text-gray-700 leading-relaxed mb-6">
                    {product.infinityTechnology.description}
                  </p>
                )}

                {product.infinityTechnology.benefitsTitle && (
                  <p className="text-lg sm:text-xl font-[MaxOT] text-gray-900 mb-4">
                    {product.infinityTechnology.benefitsTitle}
                  </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.infinityTechnology.items.map((item, i) => (
                    <div
                      key={i}
                      className="group flex gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4 hover:bg-white hover:shadow-md transition"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E63946]/10 text-[#E63946] font-bold">
                        <CheckCheck size={18} />
                      </div>

                      <p className="text-sm sm:text-base font-[MaxOT] text-gray-800 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {product.infinityTechnology.note && (
                  <div className="mt-6 rounded-2xl border border-[#E63946]/20 bg-[#E63946]/5 p-4">
                    <p className="text-sm sm:text-base font-[Roboto] text-gray-700">
                      {product.infinityTechnology.note}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        <div className=" p-8 space-y-4">
          {product?.OptionalHeading && (
            <h2 className="text-2xl sm:text-3xl text-[#E63946] font-[MaxOT] leading-tight">
              {product.OptionalHeading}
            </h2>
          )}

          {product?.OptionalContent && (
            <p className="text-base sm:text-lg font-[Roboto] text-gray-700 leading-relaxed">
              {product.OptionalContent}
            </p>
          )}
        </div>

        {/* Optional Equipment & Advanced Configurations */}
        {product?.optionalEquipmentAdvancedConfigurations?.items?.length > 0 && (
          <section className="p-5">
            <div className="rounded-3xl border border-gray-200 bg-white shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-white px-6 py-6 border-b border-gray-200">
                <h2 className="text-2xl sm:text-3xl text-center text-[#E63946] font-[MaxOT]">
                  {product.optionalEquipmentAdvancedConfigurations.title}
                </h2>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.optionalEquipmentAdvancedConfigurations.items.map((item, i) => (
                    <div
                      key={i}
                      className="group flex gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4 hover:bg-white hover:shadow-md transition"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E63946]/10 text-[#E63946] font-bold">
                        <CheckCheck size={18} />
                      </div>

                      <p className="text-sm sm:text-base font-[MaxOT] text-gray-800 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {product.optionalEquipmentAdvancedConfigurations.note && (
                  <div className="mt-6 rounded-2xl border border-[#E63946]/20 bg-[#E63946]/5 p-4">
                    <p className="text-sm sm:text-base font-[Roboto] text-gray-700">
                      {product.optionalEquipmentAdvancedConfigurations.note}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}


        <div
          className="text-base sm:text-lg space-y-4 px-5 text-gray-700 font-[Roboto]"
          dangerouslySetInnerHTML={{
            __html:
              (product?.content || "").replace(
                /\*\*(.*?)\*\*/g,
                '<strong class="font-bold text-black">$1</strong>'
              ),
          }}
        />

        {/* Video */}
        {product?.videoId && (
          <div className="max-w-4xl mx-auto my-12 px-4">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${product.videoId}?rel=0`}
                title={`${product.name} Video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* FAQs */}
        {Array.isArray(product?.faqs) && product.faqs.length > 0 && (
          <div className="bg-white">
            <RotaryFaqs
              faqs={product.faqs}
              product={product}
              productName={product?.title || product?.name || ""}
               externalLink={product?.meta?.externalLinks?.[0] || ""}
            />
          </div>
        )}

      </div>
    </>
  );
}
