import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { Share2, Download, CheckCircle, ZoomIn } from "lucide-react";
import { HiOutlineClipboardList } from "react-icons/hi";
import RotaryFaqs from "../SynthesisAndFlowChemistry/RotaryFaqs";

import { WeighingBalance } from '../../../../data/AnalyticalChemistry/WeighingBalance';
import { MoistureAnalyzer } from '../../../../data/AnalyticalChemistry/MoistureAnalyzer';
import { AnalyticalInstruments } from '../../../../data/AnalyticalChemistry/AnalyticalInstruments';
import EnquiryForm from "../../../EnquiryFrom";

// Merge all product objects into one
const AllSynthesisProductDetails = {
  ...WeighingBalance,
  ...AnalyticalInstruments,
  ...MoistureAnalyzer,

};

const productLinks = {
  mettlertoledo: "https://www.mt.com/in/en/home.html",
}

// Sample Product Data
export default function ProductDetails() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const { productSlug } = useParams();
  const product = AllSynthesisProductDetails[productSlug];
  const meta = product?.meta;
  const [showModal, setShowModal] = useState(false);

  if (!product) {
    return (
      <div className="p-10 text-center bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-red-600 font-[MaxOT]">Product Not Found</h2>
        <p className="text-gray-600 mt-2 font-[Roboto]">The product you are looking for does not exist.</p>
      </div>
    );
  }

  const waHref = `https://wa.me/918125580808?text=${encodeURIComponent(
    `Hi Inkarp team, I'm interested in "${product.name}"`
  )}`;

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

      <div className="bg-white px-2 sm:px-5 py-4">
        {/* --- Header --- */}
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
              `Check out this product: https://www.inkarp.co.in/verticals/analytical-chemistry-and-weighing/weighing-balance/${productSlug}`
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

        {/* Main Section */}
        <div className="w-full mx-auto p-4  space-y-12">
          {/* Overview */}
          <div className="flex flex-col items-center w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 font-[MaxOT] border-b-2 border-[#E63946] pb-2 w-full">Overview</h2>
            <div className="space-y-6 w-full mx-auto">
              {product.description?.map((section, index) => (
                <div key={index}>
                  {/* Render heading only if it exists */}
                  {section.heading && (
                    <h2 className="text-lg text-[#E63946] font-[MaxOT] mb-1">
                      {section.heading}
                    </h2>
                  )}

                  {/* Render description */}
                  <p className="text-base font-[Roboto]  leading-relaxed">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>

            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4" onClick={() => setShowModal(false)}>
                <div className="relative flex flex-col items-center bg-white p-4 rounded-lg shadow-xl w-full max-w-2xl" onClick={e => e.stopPropagation()}>
                  <img
                    src={product.image}
                    alt={product.altText}
                    className="w-full h-auto object-contain max-h-[80vh]"
                  />
                  <button
                    className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full font-semibold shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                    onClick={() => setShowModal(false)}
                    aria-label="Close image viewer"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="py-8 w-full w-[90%] mx-auto space-y-6">
           {/* Key Advantages */}
          {product?.benefits?.length > 1 && (
            <div className="bg-[#F5F5F5] p-6 rounded-3xl shadow-xl border border-gray-200">
              <h2 className="text-2xl sm:text-3xl  text-center text-[#E63946] font-[MaxOT] mb-6">
                Key Benefits of {product.name}
              </h2>
             
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {product.benefits.slice(0).map((benefit, i) => (
                  <div key={i} className="flex bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition hover:scale-105 hover:bg-red-50">
                    <div className="w-10 h-10 p-3 rounded-full bg-gradient-to-tr from-red-400 to-red-600 text-white mr-4 shadow-md flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="">
                      <p className="font-[MaxOT] text-gray-800">{benefit.name}</p>
                      <p className="text-sm font-[Roboto] text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {product?.specs && Object.keys(product.specs).length > 0 && (
            <div className="bg-[#F5F5F5] overflow-hidden rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-200">
              <h2 className="text-2xl sm:text-3xl  text-[#E63946] text-center font-[MaxOT] mb-6">
                Technical Specifications of {product.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {Object.entries(product.specs).map(([key, value], index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-xl shadow-md p-4 bg-white transition hover:bg-red-50"
                  >
                    <HiOutlineClipboardList className="text-[#E63946] w-6 h-6 mt-1 flex-shrink-0" />
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-1">
                      <p className="text-base font-bold font-[MaxOT] text-gray-800">{key}</p>
                      <p className="text-sm sm:text-base whitespace-pre-line font-[Roboto] text-gray-600 sm:text-right">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
           {product?.faqs?.length > 0 && (
                    <div className="bg-white ">
                      <RotaryFaqs faqs={product.faqs} />
                    </div>
                  )}
        </div>
      </div>
    </>
  );
}