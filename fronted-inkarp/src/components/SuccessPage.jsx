import React from "react";

export default function SuccessPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden px-4">

      {/* Beautiful Gradient Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] bg-[#BE0010]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-20%] w-[500px] h-[500px] bg-[#E63946]/10 rounded-full blur-3xl" />
        <div className="absolute top-[30%] right-[20%] w-[350px] h-[350px] bg-[#2B7EC2]/10 rounded-full blur-3xl" />
      </div>

      {/* Card Container */}
      <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl px-10 py-14 max-w-xl w-full text-center">

        {/* Animated Circle Checkmark */}
        <div className="mx-auto mb-8 flex items-center">
          <div className="mx-auto mb-8 flex items-center justify-center">
            <div className="w-28 h-28 rounded-full border-4 border-[#E63946]/40 flex items-center justify-center animate-[pulse_1.8s_ease-in-out_infinite]">
              <svg
                className="block"     // ✨ ensures no extra SVG padding
                width="70"
                height="70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#gradSuccess)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <defs>
                  <linearGradient id="gradSuccess" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#BE0010" />
                    <stop offset="100%" stopColor="#E63946" />
                  </linearGradient>
                </defs>
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-[MaxOT] text-black mb-3 leading-tight">
          Your Submission is Successful!
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 font-[Roboto] mb-8 text-sm md:text-base">
          Thank you for reaching out. Our team has received your message and will contact you shortly.
        </p>

        {/* Button */}
        <button
          onClick={() => (window.location.href = "/")}
          className="px-10 py-3.5 rounded-full text-white font-semibold text-base 
          shadow-lg transition-all duration-300 hover:scale-105
          bg-gradient-to-r from-[#BE0010] to-[#E63946]"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
}
