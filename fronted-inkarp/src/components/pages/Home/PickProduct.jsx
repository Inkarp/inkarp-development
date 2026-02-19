import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Dexter from "/Dexter-2.0.gif";
import DexterSanta from "/DexterSanta.gif";

import BannerAlpha from "/images/products/Bruker/banner-alpha.png";
import ImgMya4Stations from "/images/products/radleys/mya-4.png";
import LabstationIGlovebox from "/images/products/Labstation/labstation.png";
import HeiVapExpertControl from "/images/products/heidolph/Hei-VAP-Expert-Control.webp";
import ImgAllianceHPLC from "/images/products/Waters/hpcl.png";
import ImgAriumComfortII from "/images/products/Sotorius/comfort-II.png";
import ImgLyovaporL300 from "/images/products/Buchi/L-300-2.png";

const productData = [
  {
    name: "ALPHA II Compact FT-IR Spectrometer",
    image: BannerAlpha,
    heading: "Hei-VAP Expert Rotary Evaporator",
    description: `Best Water Distillation for your Lab`,
    details: {},
    link: "/verticals/synthesis-and-flow-chemistry/ftir-spectrometer/alpha-ii-compact-ft-ir-spectrometer",
  },
  {
    name: "Mya 4 Reaction Station",
    image: ImgMya4Stations,
    heading: "Hei-VAP Ultimate Rotary Evaporator",
    description: `High-Performance Distillation with Automation`,
    details: { Capacity: "200 ml", Voltage: "110V", Weight: "2.0 kg" },
    link: "/verticals/synthesis-and-flow-chemistry/automated-reaction-stations/mya-4-reaction-station",
  },
  {
    name: "Alliance HPLC System",
    image: ImgAllianceHPLC,
    heading: "Alliance HPLC System",
    description: `Alliance HPLC System`,
    details: {},
    link: "/verticals/analytical-and-chromatography-solutions/chromatography-and-lc-ms-systems/alliance-hplc-system",
  },
  {
    name: "Labstation I ",
    image: LabstationIGlovebox,
    heading: "Hei-VAP Expert Control Rotary Evaporator",
    description: `Advanced Control with Safety Features`,
    details: { Capacity: "250 ml", Voltage: "220V" },
    link: "/verticals/material-science-and-battery/glovebox-workstations/labstation-glovebox-analyzer",
  },
  {
    name: "Hei-VAP Ultimate Control",
    image: HeiVapExpertControl,
    heading: "Hei-VAP Ultimate Control Rotary Evaporator",
    description: `Fully Automated Rotary Evaporator for Complex Workflows`,
    details: { Capacity: "300 ml", Voltage: "220V" },
    link: "/verticals/synthesis-and-flow-chemistry/rotary-evaporators/hei-vap-ultimate-control",
  },
  {
    name: "Arium Comfort II",
    image: ImgAriumComfortII,
    heading: "Arium Comfort II",
    description: `Fully Automated Rotary Evaporator for Complex Workflows`,
    details: { Capacity: "300 ml", Voltage: "220V" },
    link: "/verticals/general-laboratory-instrument/arium-comfort/arium-comfort-ii",
  },
  {
    name: "Freeze Dryer Lyovapor™ L-300",
    image: ImgLyovaporL300,
    heading: "Freeze Dryer Lyovapor™ L-300",
    description: `Fully Automated Rotary Evaporator for Complex Workflows`,
    details: { Capacity: "300 ml", Voltage: "220V" },
    link: "/verticals/general-laboratory-instrument/freeze-dryers/lyovapor-l-300",
  },
];

export default function PickProduct() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedProduct = productData[selectedIndex];

  // keyboard navigation (←/→ or ↑/↓)
  useEffect(() => {
    const onKey = (e) => {
      if (["ArrowRight", "ArrowDown"].includes(e.key)) {
        setSelectedIndex((i) => (i + 1) % productData.length);
      } else if (["ArrowLeft", "ArrowUp"].includes(e.key)) {
        setSelectedIndex((i) => (i - 1 + productData.length) % productData.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // 3D tilt for the main product image
  const cardRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-40, 40], [10, -10]);
  const ry = useTransform(mx, [-40, 40], [-10, 10]);
  const glare = useTransform(mx, [-40, 40], ["0%", "100%"]);

  const onMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mx.set(Math.max(-40, Math.min(40, x / 6)));
    my.set(Math.max(-40, Math.min(40, y / 6)));
  };
  const onMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const pills = useMemo(
    () => [
      { label: "Precision", value: "±0.1°C" },
      { label: "Automation", value: "Smart Lift" },
      { label: "Safety", value: "Dry-Run Protection" },
    ],
    []
  );

  // ===== Scroll-after-4 logic (DESKTOP LEFT LIST) =====
  const listRef = useRef(null);
  const firstItemRef = useRef(null);
  const [maxListHeight, setMaxListHeight] = useState(null);

  useEffect(() => {
    // compute exact height for 4 items + 3 gaps from Tailwind's space-y-2 (8px each)
    const compute = () => {
      const item = firstItemRef.current;
      if (!item) return;
      const itemRect = item.getBoundingClientRect();
      const itemHeight = itemRect.height;
      const gap = 8; // space-y-2 => 0.5rem => 8px
      const h = itemHeight * 4 + gap * 3;
      setMaxListHeight(`${Math.ceil(h)}px`);
    };

    compute();

    // update on resize and when fonts/images settle
    const ro = new ResizeObserver(compute);
    if (firstItemRef.current) ro.observe(firstItemRef.current);
    window.addEventListener("resize", compute);
    const id = requestAnimationFrame(compute);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
      cancelAnimationFrame(id);
    };
  }, []);
  // ====================================================

  return (
    <div className="relative overflow-hidden w-[98%] mx-auto py-10 md:px-10 lg:px-5">
      {/* Header */}
      <div className="text-center flex flex-col justify-center items-center gap-3">
        <span
          className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
          style={{ borderImage: "linear-gradient(90deg,#BE0010,#E63946) 1", borderWidth: 1, borderStyle: "solid" }}
        >
          Precision Picks
        </span>
        <h1 className="text-xl sm:text-2xl font-[MaxOT] text-[#E63946] leading-tight">
          Explore Our Top Lab Solutions
        </h1>
        <p className="font-[Roboto] text-sm sm:text-base text-gray-700">
          Expert-curated equipment engineered for accuracy, reliability, and ease.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative w-[98%] mx-auto rounded-3xl overflow-hidden"
      >
        {/* Switch grid to start at lg so tablets use single-column with dropdown */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* LEFT: Dropdown (mobile & tablet) / Sticky rail (desktop) */}
          <div className="lg:col-span-3 flex">
            {/* Mobile & Tablet dropdown (<lg visible) */}
            <div className="lg:hidden px-2 w-full">
              <label className="block text-sm font-[Roboto] text-black/70 mb-2">Select a product</label>
              <div className="p-[1.5px] rounded-xl" style={{ background: "linear-gradient(90deg,#BE0010,#E63946)" }}>
                <select
                  value={selectedIndex}
                  onChange={(e) => setSelectedIndex(Number(e.target.value))}
                  className="w-full rounded-[10px] bg-white/95 backdrop-blur border border-white/60 px-4 py-3 text-sm font-[MaxOT] text-[#0f1b33] focus:outline-none focus:ring-2 focus:ring-[#E63946]"
                >
                  {productData.map((item, idx) => (
                    <option key={item.name} value={idx}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Desktop sticky rail (≥lg) */}
            <div className="hidden lg:block w-full">
              <div className="h-full min-h-[250px] sm:min-h-[360px] rounded-3xl border border-gray-200 shadow-sm p-5 flex flex-col">
                <ul
                  ref={listRef}
                  className="space-y-2 pr-1 overflow-y-auto flex-1"
                  style={maxListHeight ? { maxHeight: maxListHeight } : undefined}
                >
                  {productData.map((item, idx) => (
                    <li key={idx} ref={idx === 0 ? firstItemRef : undefined}>
                      <button
                        onClick={() => setSelectedIndex(idx)}
                        className={`w-full text-left p-3 rounded-xl border transition group ${
                          idx === selectedIndex
                            ? "bg-[#E63946]/5 text-[#E63946] border-[#E63946]/30 shadow-sm"
                            : "bg-white text-gray-900 border-gray-200 hover:border-[#E63946]/30 hover:bg-[#E63946]/5"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`h-2.5 w-2.5 rounded-full transition ${
                              idx === selectedIndex ? "bg-[#E63946]" : "bg-gray-300 group-hover:bg-[#E63946]/60"
                            }`}
                          />
                          <span className="text-sm font-[Roboto]">{item.name}</span>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT: Product spotlight */}
          <div className="lg:col-span-9">
            <motion.div
              key={selectedProduct.image}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="relative backdrop-blur px-4 sm:px-7 py-2 h-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-full">
                {/* Image + 3D tilt */}
                <div
                  className="lg:col-span-3 relative lg:min-h-[360px]"
                  onMouseMove={onMouseMove}
                  onMouseLeave={onMouseLeave}
                  ref={cardRef}
                >
                  <motion.div
                    style={{ rotateX: rx, rotateY: ry }}
                    className="relative w-full h-[280px] sm:h-[360px] lg:h-[360px] rounded-2xl bg-gradient-to-br from-white to-white/50 border border-gray-200 flex items-center justify-center overflow-hidden"
                  >
                    <div className="absolute -inset-10 bg-[radial-gradient(500px_200px_at_50%_20%,rgba(230,57,70,0.10),transparent)]" />
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="relative z-10 max-h-[78%] w-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.15)]"
                    />
                    {/* moving glare */}
                    <motion.div
                      style={{ left: glare }}
                      className="pointer-events-none absolute top-0 left-0 h-full w-[20%] bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      animate={{ left: ["-20%", "120%"] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                </div>

                {/* Details + CTA */}
                <div className="lg:col-span-2 flex flex-col justify-center space-y-4 px-5">
                  <div className="w-[80%] flex items-center justify-center mx-auto">
                    <img src={Dexter} alt="Dr Dexter" className="w-full h-auto rounded-lg bg-white" />
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <a href={selectedProduct.link}>
                      <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 bg-[#E63946] text-white font-semibold px-5 py-2.5 rounded-full shadow hover:bg-red-700"
                      >
                        Explore <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
