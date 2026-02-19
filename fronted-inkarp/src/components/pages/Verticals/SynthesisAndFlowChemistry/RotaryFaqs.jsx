import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function RotaryFaqs({ faqs = [], productName = "", externalLink = "" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="rounded-2xl mt-5">
      <div className="flex items-center justify-center">
        <div className="border border-[#E63946] bg-[#F5F5F5] rounded-full">
        <h2 className="lg:text-2xl text-xl  text-black p-3 text-center w-auto mx-auto font-[MaxOT]">
          Frequently Asked Questions -{" "}
          {productName && (
            <>
              {/* <span className="mx-2 text-gray-500">|</span> */}
              {externalLink ? (
                <a
                  href={externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:opacity-80 transition hover:text-[#E63946] hover:underline underline-offset-4]"
                >
                  {productName}
                </a>
              ) : (
                <span className="">{productName}</span>
              )}
            </>
          )}
        </h2>
        </div>
      </div>

      <section className="px-4 mt-3 sm:px-10 lg:px-20 overflow-hidden font-[Roboto] text-black mb-5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              key={`faq-${index}`}
              className={`transition-all duration-300 mb-4 rounded-xl border-l-[6px] 
                ${
                  isOpen
                    ? "border-[#E63946] bg-white/70 backdrop-blur-lg shadow-xl"
                    : "border-gray-200 bg-white/50 shadow-md hover:shadow-lg"
                }`}
            >
              <header
                className="flex justify-between items-center cursor-pointer p-6 sm:p-7 select-none"
                onClick={() => toggle(index)}
              >
                <h3
                  className={`text-lg font-[MaxOT] transition-colors duration-300 
                    ${isOpen ? "text-[#E63946]" : "text-gray-800"}`}
                >
                  {faq.question}
                </h3>

                <div
                  className={`w-8 h-8 flex items-center justify-center border-2 transition-all rounded-full 
                    ${isOpen ? "bg-[#E63946]/10 border-[#E63946]" : "border-gray-300"}`}
                >
                  <ChevronDown
                    className={`w-4 h-4 transform transition-transform duration-300 
                      ${isOpen ? "rotate-180 text-[#E63946]" : "rotate-0 text-gray-600"}`}
                  />
                </div>
              </header>

              <div
                className={`overflow-hidden transition-all duration-500 px-6 sm:px-8 text-sm text-gray-700 
                  ${isOpen ? "max-h-[500px] pb-6" : "max-h-0 pb-0"}`}
              >
                <p className="leading-relaxed text-lg text-black whitespace-pre-line">
                  {faq.answer}
                </p>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
