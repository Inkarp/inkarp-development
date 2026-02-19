import React from "react";
import { Linkedin } from "lucide-react"; // 👈 LinkedIn icon
import Balu from '/src/assets/Team/BaluFullImage.jpg';
import Natesh from '/src/assets/Team/NateshFullImage.jpg';
import { FaLinkedin } from "react-icons/fa";

export default function EmpathyTeam() {
  const people = [
    {
      id: 1,
      image: Balu, // person on LEFT
      side: "right", // text goes on RIGHT
      quote: `“When I started this journey, I knew it was not enough to build a company. We had to build trust, values, and people who could carry them forward. Every milestone we reached came from holding firm to integrity, nurturing relationships, and believing that lasting success belongs to everyone together.”`,
      author: "S. Balu, Chairman & Managing Director",
      link: "https://www.linkedin.com/in/balu-s-9b870b26/",
    },
    {
      id: 2,
      image: Natesh, // person on RIGHT
      side: "left", // text goes on LEFT
      quote: `“I was entrusted with a vision built on strong values. My responsibility has been to shape it into a company that could endure, expand, and deliver greater impact. Growth has meaning only when it strengthens the foundation, empowers every department, and keeps us relentlessly focused on serving customers better.”`,
      author: "K. Natesh, Executive Director",
      link: "https://www.linkedin.com/in/natesh-krishnamurthy-75054518/",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto space-y-12 py-5 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center gap-3">
        <span
          className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase bg-white"
          style={{
            borderImage: 'linear-gradient(90deg,#BE0010,#E63946) 1',
            borderWidth: 1,
            borderStyle: 'solid',
          }}
        >
          Meet Our Leadership
        </span>
      </div>

      {people.map(({ id, image, side, quote, author, link }) => {
        const isTextRight = side === "right";
        return (
          <div
            key={id}
            className="relative w-full overflow-hidden rounded-2xl shadow-sm"
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]">
              {/* Image */}
              <img
                src={image}
                alt={author}
                className={`absolute inset-0 w-full h-full object-cover   ${isTextRight ? "object-left" : "object-right"
                  }`}
              />

              {/* Gradient */}
              <div
                className={`absolute inset-0 pointer-events-none ${isTextRight
                    ? "bg-gradient-to-l from-black/60 via-black/25 to-transparent"
                    : "bg-gradient-to-r from-black/60 via-black/25 to-transparent"
                  }`}
              />
              {/* Text block */}
              <div
                className={`absolute inset-0 flex items-end sm:items-center p-3 ${isTextRight ? "justify-end" : "justify-start"
                  }`}
              >
                <div className="w-full sm:max-w-[60%] lg:bg-white/80 rounded-xl lg:max-w-[45%] p-4 sm:p-6 lg:p-8 text-white lg:text-black">

                  <p className="text-white lg:text-black font-[Roboto] text-base sm:text-lg lg:text-xl leading-relaxed drop-shadow-sm">
                    {quote}
                  </p>

                  <p className="mt-3 text-[#E63946] font-[MaxOT] text-2xl font-bold">
                    {author}
                  </p>

                  {/* Linked Icon */}
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 text-blue-600 hover:text-blue-800 shadow-sm hover:shadow transition"
                    >

                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Mask */}
              <div className="absolute inset-0 ring-1 ring-black/5 rounded-2xl pointer-events-none" />
            </div>
          </div>
        );
      })}
    </section>
  );
}
