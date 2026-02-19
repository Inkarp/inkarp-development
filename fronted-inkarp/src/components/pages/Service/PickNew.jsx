import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Dexter from "/Dexter.gif";

import BannerAlpha from "/images/products/Bruker/banner-alpha.png";
import ImgMya4Stations from "/images/products/radleys/mya-4.png";
import LabstationIGlovebox from "/images/products/Labstation/labstation.png";
import HeiVapExpertControl from "/images/products/heidolph/Hei-VAP-Expert-Control.webp";
import ImgAllianceHPLC from "/images/products/Waters/hpcl.png";
import ImgAriumComfortII from "/images/products/Sotorius/comfort-II.png";
import ImgLyovaporL300 from "/images/products/Buchi/L-300-2.png";

const productData = [
  {
    name: "Bruker ALPHA II Compact FT-IR Spectrometer",
    image: BannerAlpha,
    heading: "Bruker ALPHA II Compact FT-IR Spectrometer",
    description: `Best Water Distillation for your Lab`,
    details: {},
    link:
      "",
    dos: [
      "Keep the Bruker ALPHA II in a clean, dry, vibration-free space.",
      "Handle the ATR crystals and modules gently and clean them with wipes.",
      "Always use a grounded power supply for safe operation.",
      "After moving the spectrometer, let it settle before starting work.",
      "Run regular background checks and maintenance to keep performance sharp."
    ],
    donts: [
      "Never expose the ALPHA II to dust, humidity, or harsh fumes.",
      "Don’t force the ATR pressure arm—treat it carefully.",
      "Avoid spraying solvents directly on the instrument.",
      "Don’t block the air vents—I need to breathe!",
      "Never tamper with the internal parts or optics—leave that to experts."
    ],
  },
  {
    name: "Threaded pin screw M5x16",
    image: ImgMya4Stations,
    heading: "Threaded pin screw M5x16",
    description: `High-Performance Distillation with Automation`,
    details: { Capacity: "200 ml", Voltage: "110V", Weight: "2.0 kg" },
    link:
      "/verticals/synthesis-and-flow-chemistry/automated-reaction-stations/mya-4-reaction-station",
    dos: [
      "Use compatible vessels and secure clamps before heating.",
      "Set ramp rates and safety limits for temp/flow.",
      "Log parameters for reproducibility.",
      "Wear PPE when handling hot vessels or solvents.",
      "Inspect tubing and joints for leaks before each run."
    ],
    donts: [
      "Do not exceed recommended temperature/pressure limits.",
      "Avoid dry running circulators or pumps.",
      "Don’t move the unit while in operation.",
      "Do not mix incompatible chemicals in the same loop.",
      "Avoid blocking airflow around electronics."
    ],
  },
  {
    name: "Screw K30x8 A2 Torx",
    image: ImgAllianceHPLC,
    heading: "Screw K30x8 A2 Torx",
    description: `Alliance HPLC System`,
    details: {},
    link:
      "/verticals/analytical-and-chromatography-solutions/chromatography-and-lc-ms-systems/alliance-hplc-system",
    dos: [
      "Filter and degas mobile phases; label bottles clearly.",
      "Use correct fittings; tighten to spec to avoid leaks.",
      "Prime lines after solvent change; purge air.",
      "Schedule routine seal/washer replacement.",
      "Flush columns with appropriate solvent after use."
    ],
    donts: [
      "Do not run buffers in columns not rated for them.",
      "Avoid sudden gradient jumps without equilibration.",
      "Do not let reservoirs run dry.",
      "Don’t overtighten PEEK fittings (risk of cracking).",
      "Avoid strong solvents on non-compatible tubing."
    ],
  },
  {
    name: "Screw M3x8-A2 DIN34805-2 Torx",
    image: LabstationIGlovebox,
    heading: "Screw M3x8-A2 DIN34805-2 Torx",
    description: `Advanced Control with Safety Features`,
    details: { Capacity: "250 ml", Voltage: "220V" },
    link:
      "/verticals/material-science-and-battery/glovebox-workstations/labstation-glovebox-analyzer",
    dos: [
      "Purge and maintain inert atmosphere per SOP.",
      "Use antechamber cycles for all transfers.",
      "Log O₂/H₂O ppm; service purifier as recommended.",
      "Wear nitrile gloves; inspect glove integrity routinely.",
      "Store moisture-sensitive samples in sealed containers."
    ],
    donts: [
      "Do not open main door without proper purge.",
      "Avoid sharp tools that could puncture gloves.",
      "Do not bring wet/contaminated items inside.",
      "Avoid running purifier past capacity limits.",
      "Do not block circulation vents inside the box."
    ],
  },
  {
    name: "Hei-VAP Ultimate Control",
    image: HeiVapExpertControl,
    heading: "Hei-VAP Ultimate Control Rotary Evaporator",
    description: `Fully Automated Rotary Evaporator for Complex Workflows`,
    details: { Capacity: "300 ml", Voltage: "220V" },
    link:
      "/verticals/synthesis-and-flow-chemistry/rotary-evaporators/hei-vap-ultimate-control",
    dos: [
      "Check glassware integrity; secure clamps before run.",
      "Use appropriate bath level and temperature.",
      "Match rotation speed and vacuum to solvent BP.",
      "Use bump trap and anti-foam if needed.",
      "Vent to atmosphere before stopping rotation."
    ],
    donts: [
      "Do not overfill flasks or exceed load capacity.",
      "Avoid thermal shock to hot glassware.",
      "Don’t run vacuum without coolant flow to condenser.",
      "Do not handle glass joints with greasy hands.",
      "Avoid touching hot bath surfaces."
    ],
  },
  {
    name: "Arium Comfort II",
    image: ImgAriumComfortII,
    heading: "Arium Comfort II",
    description: `Fully Automated Rotary Evaporator for Complex Workflows`,
    details: { Capacity: "300 ml", Voltage: "220V" },
    link:
      "/verticals/general-laboratory-instrument/arium-comfort/arium-comfort-ii",
    dos: [
      "Replace cartridges as per usage indicators.",
      "Use prefilters for high particulate feed water.",
      "Sanitize per schedule to prevent biofilm.",
      "Record conductivity/TOC to verify quality.",
      "Use sterile dispensing protocols for cell culture."
    ],
    donts: [
      "Do not run the unit dry or with closed outlet.",
      "Avoid non-rated chemicals in feed line.",
      "Do not bypass sanitization cycles.",
      "Avoid storing water in open containers.",
      "Do not block ventilation inlets/outlets."
    ],
  },
  {
    name: "Freeze Dryer Lyovapor™ L-300",
    image: ImgLyovaporL300,
    heading: "Freeze Dryer Lyovapor™ L-300",
    description: `Fully Automated Rotary Evaporator for Complex Workflows`,
    details: { Capacity: "300 ml", Voltage: "220V" },
    link:
      "/verticals/general-laboratory-instrument/freeze-dryers/lyovapor-l-300",
    dos: [
      "Pre-freeze samples to appropriate temperature.",
      "Use compatible vials/trays; avoid overfilling.",
      "Monitor condenser temperature and vacuum level.",
      "Defrost and clean condenser after cycles.",
      "Label samples and log cycle parameters."
    ],
    donts: [
      "Do not lyophilize solvents that damage the pump.",
      "Avoid sealing wet samples; risk of blowout.",
      "Do not open chamber to atmosphere mid-cycle.",
      "Avoid touching cold surfaces without gloves.",
      "Don’t exceed heat input beyond protocol."
    ],
  },
];

function TipsSlider({ selectedProduct }) {
  const slides = useMemo(() => {
    const { name, image, dos = [], donts = [] } = selectedProduct;

    return [
      {
        id: "image",
        type: "image",
        title: ` ${name}`,
        content: (
          <div className="relative w-full h-[250px] rounded-2xl bg-gradient-to-br from-white to-white/60 flex items-center justify-center overflow-hidden">
            {/* <div className="absolute -inset-10 bg-[radial-gradient(500px_220px_at_50%_20%,rgba(230,57,70,0.10),transparent)]" /> */}
            <img
              src={image}
              alt={name}
              className="relative z-10 object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.15)]"
            />
          </div>

        ),
      },
      {
        id: "dos",
        type: "dos",
        title: "✅ Do’s",
        content: (
          <ul className="list-disc pl-5 space-y-2 text-gray-800 text-sm sm:text-base">
            {dos.map((d, i) => (
              <li key={`do-${i}`}>{d}</li>
            ))}
          </ul>
        ),
      },
      {
        id: "donts",
        type: "donts",
        title: "❌ Don’ts",
        content: (
          <ul className="list-disc pl-5 space-y-2 text-gray-800 text-sm sm:text-base">
            {donts.map((d, i) => (
              <li key={`dont-${i}`}>{d}</li>
            ))}
          </ul>
        ),
      },
    ];
  }, [selectedProduct]);

  const [idx, setIdx] = useState(0);
  const total = slides.length;

  const next = () => setIdx((i) => (i + 1) % total);
  const prev = () => setIdx((i) => (i - 1 + total) % total);

  // Auto-advance every 6s
  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  // Reset to first slide when product changes
  useEffect(() => {
    setIdx(0);
  }, [selectedProduct]);

  return (
    <div className="relative rounded-2xl bg-white border border-gray-200 shadow-sm p-4 md:p-6">
      {/* Title */}
      <div className="mb-3">
        <h3 className="font-[MaxOT] text-[#E63946] text-base sm:text-lg leading-snug">
          {slides[idx].title}
        </h3>
      </div>

      {/* Slide body (animated) */}
      <div className="relative">
        <motion.div
          key={slides[idx].id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.35 }}
          className="min-h-[240px] flex items-center"
        >
          {slides[idx].content}
        </motion.div>
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-around">
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="px-3 py-1.5 text-xs sm:text-sm rounded-md border border-gray-300 hover:border-[#E63946] hover:text-[#E63946] transition"
          >
            Prev
          </button>
          <button
            onClick={next}
            className="px-3 py-1.5 text-xs sm:text-sm rounded-md bg-[#E63946] text-white hover:bg-[#BE0010] transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}


export default function PickNew() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedProduct = productData[selectedIndex];

  return (
    <div className="relative overflow-hidden w-[95%] mx-auto py-5">
      {/* Header */}
      <div className="text-center flex flex-col justify-center items-center gap-3">
        <span
          className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
          style={{
            borderImage: "linear-gradient(90deg,#BE0010,#E63946) 1",
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          BEST PRACTICES
        </span>
        <h1 className="text-xl sm:text-2xl font-[MaxOT] text-[#E63946] leading-tight">
          Product Handling Guidelines
        </h1>
        <p className="font-[Roboto] text-sm sm:text-base ">
          Clear, reliable, and safe handling practices designed to protect your
          equipment, your team, and your research outcomes.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative w-[98%] mx-auto rounded-3xl overflow-hidden"
      >
        {/* Grid: left rail + right content */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch border border-gray-200 bg-white shadow-sm p-6">
          {/* LEFT: Dropdown (mobile/tablet) / Sticky rail (desktop) */}
          <div className="lg:col-span-3 flex">
            {/* Mobile & Tablet dropdown (<lg visible) */}
            <div className="lg:hidden px-2 w-full">
              <label className="block text-sm font-[Roboto] text-black/70 mb-2">
                Select a product
              </label>
              <div
                className="p-[1.5px] rounded-xl"
                style={{ background: "linear-gradient(90deg,#BE0010,#E63946)" }}
              >
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
              <div className="h-full rounded-3xl border border-gray-200 shadow-sm p-2">
                <div className="sticky top-4">
                  <ul className="space-y-2 pr-1 overflow-y-auto max-h-[50vh]">
                    {productData.map((item, idx) => {
                      const isActive = idx === selectedIndex;
                      return (
                        <li key={item.name}>
                          <button
                            onClick={() => setSelectedIndex(idx)}
                            className={`w-full text-left p-3 rounded-xl border transition group ${isActive
                                ? "bg-[#E63946]/5 text-[#E63946] border-[#E63946]/30 shadow-sm"
                                : "bg-white text-gray-900 border-gray-200 hover:border-[#E63946]/30 hover:bg-[#E63946]/5"
                              }`}
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={`h-2.5 w-2.5 rounded-full transition ${isActive
                                    ? "bg-[#E63946]"
                                    : "bg-gray-300 group-hover:bg-[#E63946]/60"
                                  }`}
                              />
                              <div className="min-w-0">
                                <p className="text-sm font-[Roboto] truncate">
                                  {item.name}
                                </p>

                              </div>
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Dr. Dexter + Sliding Product Tips */}
          <div className="lg:col-span-9">
            <motion.div
              key={selectedProduct.image}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="relative w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Dr. Dexter (left of slider) */}
                <div className="lg:col-span-4">
                  <div className="w-full h-full rounded-2xl border border-gray-200 bg-white shadow-sm p-4 flex flex-col items-center justify-center">
                    <img
                      src={Dexter}
                      alt="Dr. Dexter"
                      className="w-full  h-auto rounded-lg bg-white object-contain"
                    />
                    <div className="mt-3 text-center">
                      <p className="font-[MaxOT] text-[#E63946] text-sm sm:text-base">
                        Dr. Dexter’s
                      </p>
                      <p className="italic text-gray-800 text-sm sm:text-base">
                        Product Handling Tips
                      </p>
                    </div>
                  </div>
                </div>

                {/* Slider (right) */}
                <div className="lg:col-span-8">
                  <TipsSlider selectedProduct={selectedProduct} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
