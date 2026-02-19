import React, { useRef, useEffect, useState } from "react";
import { ArrowBigRight, Building2, MapPin, Wrench } from "lucide-react"; // ⬅️ updated
import Logo from "/inkarp.png";
import { Link } from "react-router-dom";

// CountUp logic
function useCountUp(end, start = 0, duration = 1500, inView) {
  const [value, setValue] = useState(start);
  useEffect(() => {
    if (!inView) {
      setValue(start);
      return;
    }
    let frame;
    let startTime;
    function animateCount(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setValue(Math.floor(start + (end - start) * progress));
      if (progress < 1) frame = requestAnimationFrame(animateCount);
      else setValue(end);
    }
    frame = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(frame);
  }, [end, start, duration, inView]);
  return value;
}

// In-view logic
function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

// ✅ Icons fixed to match content
const statisticsData = [
  {
    icon: <Building2 className="w-6 h-6" aria-hidden="true" />,
    number: 39,
    plus: "k+",
    label: "Installations",
    info: "Serving pharma, biotech, diagnostics, academia, and more.",
  },
  {
    icon: <Wrench className="w-6 h-6" aria-hidden="true" />,
    number: 184,
    plus: "k+",
    label: "Service",
    info: "Global leaders across instruments, automation, and workflows.",
  },
];

function StatCard({ icon, number, plus, label, info }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const value = useCountUp(number, 0, 1600, inView);

  return (
    <div className="relative flex items-center bg-white/90 backdrop-blur rounded-2xl p-1 pr-4 hover:scale-[1.015] transition-all duration-300 group border border-[#F5F5F5] shadow">
      <div
        className="w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl ml-2 mr-4 shadow-md bg-[linear-gradient(90deg,#BE0010,#E63946)] group-hover:opacity-90 transition"
        aria-hidden="true"
      >
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-1">
          <span ref={ref} className="text-2xl font-bold font-[Roboto] text-black">
            {value}
          </span>
          <span className="text-[#E63946]">{plus}</span>
        </div>
        <h3 className="uppercase text-sm md:text-base text-[#E63946] tracking-wider font-[MaxOT]">
          {label}
        </h3>
        <p className="text-xs md:text-sm text-black/70 font-light leading-tight mt-1">
          {info}
        </p>
      </div>
    </div>
  );
}

export default function ServiceAbout() {
  return (
    <div className="relative w-[95%] mx-auto py-10 md:px-10 lg:px-20">
      {/* Soft stage background (on-brand) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.08),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.08),transparent)]" />

      {/* Header – matches other sections */}
      <div className="text-center flex flex-col justify-center items-center gap-3">
        <span
          className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
          style={{
            borderImage: "linear-gradient(90deg,#BE0010,#E63946) 1",
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          Our Impact
        </span>
        <h1 className="text-xl sm:text-2xl font-[MaxOT] text-[#E63946] leading-tight text-center">
          Ensuring Consistent Results Through Proven Service
        </h1>
      </div>

      {/* Stats Grid */}
      <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
        {statisticsData.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>
    </div>
  );
}
