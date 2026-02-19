// src/components/pages/Verticals/ProductDetail.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { Share2, Download, CheckCircle, ZoomIn } from "lucide-react";
import { HiOutlineClipboardList } from "react-icons/hi";
import RotaryFaqs from "../SynthesisAndFlowChemistry/RotaryFaqs";
import { GeaProducts } from "../../../../data/ExtrusionAndHomo/GeaProducts";
import EnquiryForm from "../../../EnquiryFrom";

const productLinks = {
  gea: "https://www.gea.com/en/",
  proscientific: "https://proscientific.com/index.php?p=home",
  evonik: "https://healthcare.evonik.com/en",
};
const SynthesisProductDetails = {
  ...GeaProducts,
};

export default function ExtrusionProductDetails() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const { productSlug } = useParams();
  const product = SynthesisProductDetails[productSlug];
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

  const waHref = `https://wa.me/918125580808?text=${encodeURIComponent(
    `Hi Inkarp team, I'm interested in "${product.name}"`
  )}`;

  const shareUrl = `${window.location.origin}/verticals/extrusion-and-homogenization/${productSlug}`;

  return (
    <>
      {meta && (
        <Helmet>
          <title>{product.name} Distributor and Service Provider In India|{product.altText}|Inkarp</title>
          <meta name="description" content={meta.description} />
          <meta name="keywords" content={meta.keywords?.join(", ")} />
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

      {/* ===== Header/Overview rewritten to match RheologyProductDetails ===== */}
      <div className="bg-white px-2 sm:px-5 py-4">
        {/* Mobile Header */}
        <div className="block md:hidden bg-gray-50 p-4 rounded-xl border">
          <div className="flex items-center gap-4">
            <div className="w-1/3 shrink-0">
              <img
                src={product?.image}
                alt={`${product?.name ?? 'Product'}_${product?.altText ? product.altText + '_' : ''}Inkarp`}
              />
            </div>
            <div className="w-2/3 space-y-2">
              <img src={product.logo} alt="Logo" className="w-24 h-auto" />

              {/* Dynamic external link */}
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
          <img
            src={product.bannerImg}
            alt="Banner"
            className="w-full h-auto object-cover rounded-md"
          />
          <div className="absolute inset-0 flex flex-row items-center justify-around p-4">
            <div className="w-1/2 flex justify-start">
              <img
                src={product.image}
                alt={`${product?.name ?? 'Product'}_${product?.altText ? product.altText + '_' : ''}Inkarp`}
                className="w-[60%] h-auto object-cover rounded-lg"
              />
            </div>
            <div className="w-1/2 text-center">
              <img
                src={product.logo}
                alt="Logo"
                className="w-48 h-auto mb-4 bg-white p-4 rounded-lg shadow-lg inline-block"
              />

              <h1 className="text-4xl font-extrabold tracking-tight font-[MaxOT] text-black drop-shadow-md">
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

        {/* Overview - HTML content + buttons (Share / Show Image) */}
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-12">
          <div className="flex flex-col items-center w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 font-[MaxOT] border-b-2 border-[#E63946] pb-2 w-full">
              Overview
            </h2>

            {/* Render HTML from your data */}
            <div
              dangerouslySetInnerHTML={{ __html: product.description }}
              className="prose max-w-none"
            />

            {/* Image Modal */}
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
                    className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full font-semibold shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ===== Everything below stays from your original file ===== */}

      {/* Key Features */}
      {Array.isArray(product.features) && product.features.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="bg-[#F5F5F5] p-8 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300">
            <h2 className="text-3xl font-bold text-center text-[#E63946] font-[MaxOT] mb-8">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {product.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start bg-white/60 backdrop-blur-lg p-4 rounded-xl shadow-sm hover:shadow-md transition hover:scale-103 hover:bg-gray-200"
                >
                  <div className="p-3 rounded-full bg-gradient-to-tr from-red-400 to-red-600 flex items-center justify-center mr-4">
                    <CheckCircle color="white" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{feature.name}</p>
                    <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Advantages */}
          {Array.isArray(product.advantages) && product.advantages.length > 0 && (
            <div className="bg-[#F5F5F5] p-8 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300">
              <h2 className="text-3xl font-bold text-center text-[#E63946] font-[MaxOT] mb-8">
                Key Advantages
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {product.advantages.map((advantage, i) => (
                  <div
                    key={i}
                    className="flex items-start bg-white/60 backdrop-blur-lg p-4 rounded-xl shadow-sm hover:shadow-md transition hover:scale-103 hover:bg-gray-200"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-400 to-red-600 text-white flex items-center justify-center mr-4 shadow-md">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{advantage.name}</p>
                      <p className="text-sm text-gray-600 mt-1">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Technical Specifications */}
      {product.techSpecs && (
        <div className="py-5 sm:px-6 lg:px-16 w-full max-w-7xl mx-auto">
          <div className="bg-[#F5F5F5] shadow-xl overflow-hidden rounded-3xl px-2 border border-gray-200">
            <h2 className="text-3xl font-bold mt-5 text-center font-[MaxOT]">
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 px-10 py-5">
              {Object.entries(product.techSpecs).map(([key, value], index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl shadow-md px-3 py-5 bg-white/60 hover:scale-103 transition hover:bg-gray-100"
                >
                  <HiOutlineClipboardList className="text-red-500 mt-1" size={24} />
                  <div className="flex justify-between gap-5 w-full">
                    <p className="text-md text-gray-800">{key}</p>
                    <p className="text-sm text-gray-800 mt-1">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Distributor Info */}
      {/* {product.distributorInfo && (
        <div className="bg-[#F5F5F5] rounded-3xl">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-10 px-16">
            <div className="text-center mb-5">
              <h2 className="text-2xl font-extrabold font-[MaxOT] text-gray-900 tracking-tight">
                {product.distributorInfo.title}
              </h2>
              <p className="mt-4 mx-auto text-lg text-gray-600 leading-relaxed">
                {product.distributorInfo.summary}
              </p>
            </div>

            {Array.isArray(product.highlights) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {product.highlights.map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-start p-6 bg-white/60 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-red-400 to-red-600 text-white shadow-md group-hover:scale-105 transition-transform">
                        {item.icon}
                      </div>
                    </div>
                    <div className="ml-5">
                      <p className="text-lg font-semibold text-gray-800">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {product.closingLine && (
              <p className="text-center text-xl font-semibold text-gray-800 mt-16">
                {product.closingLine}
              </p>
            )}
          </div>
        </div>
      )} */}

      {/* Video */}
      {product?.videoId && (
        <div className="w-[90%] md:w-[60%] mx-auto mt-5 rounded-xl">
          <iframe
            className="rounded-xl"
            width="100%"
            height="360"
            src={`https://www.youtube.com/embed/${product.videoId}?rel=0`}
            title={`${product.name} Video`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {/* FAQs */}
      {Array.isArray(product.faqs) && product.faqs.length > 0 && (
        <div className="bg-white">
          <RotaryFaqs faqs={product.faqs} />
        </div>
      )}
    </>
  );
}
