import React, { useState } from "react";
import Waters from '/src/assets/PrincipalLogos/RowTwo/waters.svg';
import Labomatic from '/src/assets/PrincipalLogos/RowTwo/Labomatic.svg';

import ImgBreezeQS from "/images/products/Waters/Breeze-QS-HPLC-System.jpg";
import ImgAllianceHPLC from "/images/products/Waters/alliance-hplc-system-2695-2489-angle.jpg";
import ImgAllianceIS from "/images/products/Waters/alliance-is-system-with-bottles-angled.jpg";
import ImgArcHPLC from "/images/products/Waters/arc-hplc-QSm-pda-ftnr.jpg";

import Indutrial from "/images/products/Labomatic/Image1.jpg";
import Liquid1 from "/images/products/Labomatic/LiquidImage1.jpg";

import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";
import Banner3 from "/images/products/Banner/Banner3.jpg";


export const WatersProducts = {
  "breeze-qs-hplc": {
    id: "breeze-qs-hplc",
    name: "Breeze QS HPLC Chromatography and LC-MS Systems",
    image: ImgBreezeQS,
    logo: Waters,
    bannerImg: Banner3,
    altText: "Waters",
    videoId: "",
    meta: {
      title: "Breeze QS HPLC System | Waters Chromatography & LC-MS | Inkarp India",
      description:
        "Explore the Breeze QS HPLC Chromatography and LC-MS System from Waters, distributed and serviced by Inkarp Instruments in India. Discover reliable performance, precise results, and customized configurations for any laboratory setting.",
      keywords: [
        "Breeze QS HPLC",
        "Waters HPLC India",
        "Chromatography System",
        "LC-MS System Distributor India",
        "HPLC Service Provider India",
        "Inkarp Waters Instruments",
        "HPLC Pump Detector Injector",
        "Routine HPLC Analysis",
        "UV PDA RI Detector"
      ],
      altText: "Waters Breeze QS HPLC System",
      internalLinks: ["analytical-and-chromatography-solutions"],
      externalLinks: [""]
    },
    description: `
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
    <div class="space-y-6">
      <div class="text-gray-700 space-y-4 text-base leading-relaxed font-[Roboto]">
        <p>
          Breeze QS HPLC Chromatography and LC-MS Systems, setting a new standard for laboratory efficiency and productivity. This innovative system combines the power of chromatography and mass spectrometry, delivering unparalleled accuracy, speed, and sensitivity. With 
          Waters' cutting-edge technology and Inkarp Instruments' expertise, we provide comprehensive support, including installation, training, and after-sales service.
        </p>
        <p>Reliable, precise results – simple HPLC at its best.</p>
        <p>The Breeze QS HPLC System delivers routine analyses and robust performance day after day, providing the confidence you need to get the job done. Used in laboratories worldwide, chromatographers know that they’ll get reliable data in an easy-to-use platform.</p>
        <p>With a choice of multiple components to build your own liquid chromatography system, and software that allows you to simplify the complete management of your chromatographic data, the Breeze QS HPLC System delivers consistent performance and fits when budgets are tight.</p>
      </div>
    </div>

    <div class="bg-[#F5F5F5] p-6 rounded-2xl shadow-md border border-gray-200">
      <h3 class="text-xl sm:text-2xl font-bold text-[#E63946] font-[MaxOT] mb-4">Specifications</h3>
      <div class="text-gray-700 font-[Roboto] text-base leading-relaxed space-y-4">
        <p>Build your Breeze QS HPLC System to fit your application and workload. Choose at least one pump, detector, and injector (shown below). You can also enhance the functionality of your Breeze QS HPLC System by choosing an optional component or an additional detector.</p>

        <p><strong>Pumps</strong></p>
        <ul class="list-disc list-inside space-y-2">
          <li>Waters 1525 Binary Pump</li>
          <li>1515 Isocratic Pump</li>
          <li>1525µ and 1525EF Pumps</li>
        </ul>

        <p><strong>Detectors</strong></p>
        <ul class="list-disc list-inside space-y-2">
          <li>2489 UV/Visible (UV/Vis) Detector</li>
          <li>2998 Photodiode Array (PDA) Detector</li>
          <li>2414 Refractive Index (RI) Detector</li>
          <li>2475 Fluorescence (FLR) Detector</li>
          <li>2424 Evaporative Light Scattering (ELS) Detector</li>
        </ul>

        <p><strong>Injectors</strong></p>
        <ul class="list-disc list-inside space-y-2">
          <li>Manual injectors</li>
          <li>2707 Autosampler</li>
          <li>2707 Autosampler with sample cooling</li>
        </ul>

        <p><strong>Optional Components</strong></p>
        <ul class="list-disc list-inside space-y-2">
          <li>1500 Series Column Heaters</li>
          <li>Extended Temperature Range Column Heater</li>
          <li>eSAT/IN to add third-party detectors</li>
          <li>1500 Series Vacuum Degassers</li>
        </ul>
      </div>
    </div>
  </div>
  `
  },

  "alliance-hplc-system": {
    id: "alliance-hplc-system",
    name: "Alliance HPLC System Chromatography and LC-MS Systems",
    image: ImgAllianceHPLC,
    logo: Waters,
    bannerImg: Banner3,
    altText: "Waters",
    videoId: "",
    meta: {
      title: "AAlliance HPLC System Chromatography and LC-MS Systems Distributor & Service Provider In India - Waters - Inkarp Instruments Pvt Ltd",
      description:
        "Discover the advantages of Alliance HPLC System Chromatography and LC-MS Systems from Waters at Inkarp Instruments. Enhance your analytical capabilities today, backed by extensive distribution and service networks across India.",
      keywords: [
        "Alliance HPLC System, Alliance HPLC System Chromatography and LC-MS Systems, Chromatography and LC-MS Systems,Waters, Inkarp",
        "Alliance HPLC System",
        "Waters HPLC India",
        "Chromatography LC-MS Systems",
        "Inkarp Waters Distributor",
        "Pharmaceutical HPLC System",
        "HPLC for Research Labs",
        "LC-MS Service Provider India",
        "Waters Alliance HPLC Specifications"
      ],
      altText: "Waters Alliance HPLC System",
      internalLinks: ["analytical-and-chromatography-solutions"],
      externalLinks: ["https://www.waters.com/nextgen/us/en.html"]
    },
    description: `
  <div class="flex justify-center items-start">
    <div class="space-y-6">
      <div class="text-gray-800 space-y-4 text-[18px] leading-relaxed font-[Roboto]">
        <p>
          The Alliance HPLC System, a robust and versatile chromatography solution, and LC-MS Systems in India. This advanced system delivers exceptional performance, precision, and reliability, making it ideal for pharmaceutical, biotech, and research applications. With 
          Waters' innovative technology and Inkarp Instruments' expertise, we provide comprehensive support, including installation, training, and after-sales service, to help laboratories streamline their workflows.
        </p>
        <p>Reliably achieve quality, compliant data. Every time, in every lab.</p>
        <p>Liquid chromatography (LC) systems must deliver unequivocal results that give you confidence in your scientific and business decisions. Waters LC commitment continues to succeed with the latest Alliance HPLC System – trusted by scientists worldwide for the data to drive informed decisions.</p>
        <p>Building on industry-standard performance and reliability, the Alliance HPLC System provides the capabilities to meet today’s business challenges. With its proven performance history, the Alliance HPLC is the industry’s analytical HPLC system of choice, ideally suited for methods development and routine analysis.</p>
      </div>
    </div>
  </div>
  `,
    techSpecs: {
      specs: {
        "Maximum operating pressure": "5,000 psi",
        "Front panel display": "Easy to use control panel",
        "Mobile phases": "Up to 4 with Auto-Blend Technology",
        "Flow rate range": "Up to 10 mL/min",
        "Sample carryover": "≤0.0025% (Caffeine) under specified conditions",
        "Sample compartment": "4–40 °C",
        "Pump options": "Quaternary",
        "Solvent conditioning": "Vacuum Degas",
        "Detector options": "Tunable UV, Photo Diode Array, Fluorescence, Refractive Index, Evaporative Light Scattering, Electrochemical, Conductivity, Mass Spectrometry",
        "Physical specifications": "Width: 45.7 cm (18.0 in.) or 58.4 cm (23.0 in.) with column heater; Height: 57.1 cm (22.5 in.); Depth: 57.1 cm (22.5 in.) or 64.8 cm (25.5 in.) with sample heater/cooler",
        "Maximum sample capacity": "120",
        "Column capacity": "Standard up to 3 columns",
      }
    }

  },

  "alliance-is-hplc-system": {
    id: "alliance-is-hplc-system",
    name: "Alliance iS HPLC System Chromatography and LC-MS Systems",
    image: ImgAllianceIS,
    logo: Waters,
    bannerImg: Banner3,
    altText: "Waters",
    videoId: "",
    meta: {
      title: "Alliance iS HPLC System Chromatography and LC-MS Systems Distributor & Service Provider In India - Waters - Inkarp Instruments Pvt Ltd",
      description:
        "Explore the Alliance iS HPLC System Chromatography and LC-MS Systems by Waters. Enhance your analytical precision with top-tier instrumentation from Inkarp, backed by extensive distribution and service networks across India.",
      keywords: [
        "Alliance iS HPLC System, Alliance iS HPLC System Chromatography and LC-MS Systems , Chromatography and LC-MS Systems,Waters, Inkarp",
        "Alliance iS HPLC System",
        "Waters Alliance iS India",
        "Chromatography LC-MS Systems",
        "HPLC for QC Labs",
        "Inkarp Waters Distributor",
        "Intelligent HPLC System",
        "Waters Empower Software",
        "Waters LC-MS India"
      ],
      altText: "Waters Alliance iS HPLC System",
      internalLinks: ["analytical-and-chromatography-solutions"],
      externalLinks: ["https://www.waters.com/nextgen/us/en.html"]
    },
    description: `
  <div class="flex justify-center items-start">
    <div class="space-y-6">
      <div class="text-gray-800 space-y-4 text-[18px] leading-relaxed font-[Roboto]">
        <p>The Alliance iS HPLC System, a cutting-edge chromatography solution, and LC-MS Systems in India. This intuitive and robust system offers unparalleled flexibility, precision, and reliability, catering to the evolving needs of pharmaceutical, biotech, and research laboratories. With 
         Waters' innovative technology and Inkarp Instruments' expertise, we deliver comprehensive support, including installation, training, and after-sales service.
        </p>
        <p>A new era of intuitive simplicity</p>
        <p>Quality Control (QC) labs face stringent, ever-evolving compliance and data quality requirements to release products within tighter timelines and budgets. These problems become exaggerated due to staff turnover and training requirements.</p>
        <p>To address these problems, the Alliance iS HPLC System elevates your QC lab with first-time right results, shortened release cycles, and fewer investigations by:</p>
        <ul class="list-disc list-inside space-y-2 pl-4">
          <li>Reducing human errors by up to 40%* through innovative system intelligence that addresses errors before they can occur</li>
          <li>Enhancing productivity and asset management with safeguards to ensure correct system performance</li>
          <li>Maximizing system uptime and minimizing service intervention</li>
        </ul>
        <p class="text-sm italic">*based on Waters’ market research in 2022, surveying 56 global Pharma QC labs running &gt;25 systems.</p>
      </div>
    </div>
  </div>
  `,
    techSpecs: {
      specs: {
        "Maximum operating pressure": "10,000 psi",
        "pH range": "1 to 13",
        "Operating flow rate range": "0.001 to 10.000 mL/min",
        "Injection type": "Flow-through needle",
        "Sample flow path": "Stainless steel",
        "Sample carryover": "≤0.002% [Caffeine] under UV conditions",
        "Sample compartment": "4 to 40 °C",
        "Pump options": "Quaternary",
        "Solvent conditioning": "Passive pre-heating",
        "Column tracking": "Yes, with RFID enabled eConnect Waters Columns",
        "Column capacity": "1 column up to 300 mm length, up to 8 mm internal diameter (I.D)",

        "Detector options": "TUV Detector",
        "Informatics compatibility": "Empower Chromatography Data System (CDS) (Feature Release 4 with Windows 10 and later)",
        "Physical Specifications": "Height: 74.2 cm (29.23 in.); Width: 49.9 cm (19.64 in.); Depth: 63.5 cm (24.99 in.); Weight: 72.5 kg (160.0 lbs.)",
        "Maximum sample capacity (any three of the following)": "48-position, 2.00-mL vial holder; 54-position, 2.00-mL vial holder; 96-well plate; 384-well plate; 48-position, 0.65-mL micro-centrifuge tube plate; 24-position, 1.50-mL micro-centrifuge plate",
      }
    }
  },

  "arc-hplc-system": {
    id: "arc-hplc-system",
    name: "Arc HPLC System Chromatography and LC-MS Systems",
    image: ImgArcHPLC,
    logo: Waters,
    bannerImg: Banner3,
    altText: "Waters",
    videoId: "",
    meta: {
      title: "Arc HPLC System Chromatography and LC-MS Systems Distributor & Service Provider In India - Waters - Inkarp Instruments Pvt Ltd",
      description:
        "Discover the Arc HPLC System Chromatography and LC-MS Systems from Waters. Enhance precision and efficiency in your laboratory with our advanced solutions, backed by extensive distribution and service networks across India.",
      keywords: [
        "Arc HPLC System, Arc HPLC System Chromatography and LC-MS Systems, Chromatography and LC-MS Systems,Waters, Inkarp",
        "Arc HPLC System",
        "Waters Arc HPLC India",
        "LC-MS Chromatography System",
        "HPLC for QC Labs",
        "Waters Distributor India",
        "Arc HPLC Specifications",
        "Method Transfer HPLC",
        "Inkarp Waters India"
      ],
      altText: "Waters Arc HPLC System",
      internalLinks: ["analytical-and-chromatography-solutions"],
      externalLinks: ["https://www.waters.com/nextgen/us/en.html"]
    },
    description: `
  <div class="flex justify-center items-start">
    <div class="space-y-6">
      <div class="text-gray-800 space-y-4 text-[18px] leading-relaxed font-[Roboto]">
        <p>The Arc HPLC System, a versatile and robust chromatography solution, and LC-MS Systems in India. Designed for simplicity, flexibility, and reliability, this system meets the diverse needs of pharmaceutical, biotech, and research laboratories. With 
        Waters' innovative technology and Inkarp Instruments' expertise, we provide comprehensive support, including installation, training, and after-sales service.
        </p>
        <p>Highly reliable, low complexity, accurate routine analysis for all</p>
        <p>Ever-evolving regulations are impacting liquid chromatography (LC) method approaches for product quality control and beyond. With the Waters Arc HPLC System, you can count on high-efficiency separations and quality data to meet your regulatory requirements with confidence.</p>
        <p>With Arc HPLC System, you can easily replicate and improve the performance of your existing LC methods without compromising data quality, eliminating the burdens of older, less efficient LC systems. Rugged and dependable, Arc HPLC System delivers the ideal balance of performance and value for right-the-first-time analysis.</p>
      </div>
    </div>
  </div>
  `,
    techSpecs: {
      specs: {
        "Maximum operating pressure": "9500 psi",
        "pH range": "1–12.5",
        "Operating flow rate range": "Up to 5.000 mL/min",
        "Sample flow path": "Stainless-steel",
        "Sample carryover": "≤0.002% (Caffeine) under UV conditions",
        "Sample compartment": "4–40 °C",
        "Sample capacity": "768 [2x 384-well plate]; or 96 [2mL vial holders]",
        "Pump options": "Quaternary",
        "Solvent conditioning": "Passive and active pre-heating",
        "Column tracking": "eCord Technology tracks column usage and history",
        "Column capacity": "1 to 3 columns, up to 7.8 mm ID and 300 mm length",
        "External control": "Empower Chromatography Data System",
        "Physical specifications (QSM-R, SM-FTN-R, 30cm CH)": "Width: 57.4 cm (22.6 in.); Height: 57.1 cm (22.5 in.); Depth: 62.8 cm (24.7 in.)",
        "Detector options": "Tunable UV Detector (TUV), Photodiode Array Detector (PDA), Fluorescence Detector (FLR), Refractive Index Detector (RI), Evaporative Light Scattering Detector (ELSD), Conductivity Detector (CD), Electrochemical Detector (ECD), ACQUITY QDa Mass Detector (QDa)",
      }
    }

  },

  "industrial-liquid-chromatography": {
    id: "industrial-liquid-chromatography",
    name: "Industrial-liquid-Chromatography",
    image: Indutrial,
    logo: Labomatic,
    bannerImg: Banner3,
    altText: "labomatic",
    videoId: "",
    meta: {
      title: "Arc HPLC System | Chromatography & LC-MS | Waters Distributor India | Inkarp",
      description:
        "The Arc HPLC System offers dependable performance and simple method transfer for regulated labs. Inkarp Instruments is the authorized Waters distributor in India, offering full service and installation.",
      keywords: [
        "Arc HPLC System",
        "Waters Arc HPLC India",
        "LC-MS Chromatography System",
        "HPLC for QC Labs",
        "Waters Distributor India",
        "Arc HPLC Specifications",
        "Method Transfer HPLC",
        "Inkarp Waters India"
      ],
      altText: "Waters Arc HPLC System",
      internalLinks: ["analytical-and-chromatography-solutions"],
      externalLinks: ["https://www.waters.com/nextgen/us/en.html"]
    },
    description: `
<div class="text-[18px] leading-7 text-gray-700 font-[Roboto]">
  <!-- Intro -->
  <div class="max-w-6xl mx-auto">
    <div class="">
      <p class="mb-3">
       Inkarp in partnership with Labomatic, offers a comprehensive range of Industrial Liquid Chromatography solutions in India. Our portfolio includes cutting-edge systems, columns, and accessories designed to meet the demanding needs of pharmaceutical, biotech, and chemical manufacturing industries. With Labomatic's expertise in liquid chromatography and Inkarp Instruments' dedication to customer support, we provide turnkey solutions, including installation, training, and after-sales service.
      </p>
      <p class="mb-3">
        We offer outstanding products of the highest quality for made-to-measure solutions and devices – without compromising product flexibility and dimensions for laboratories within the pharmaceutical and chemical sectors.
      </p>
      <p class="font-medium mb-1">High performance Columns with biaxial compression</p>
      <p class="mb-0">
       Columns Separchrom PC01 correspond to the highest requirements of preparative liquid chromatography. PC01 columns are designed to be used in a mode of axial (or biaxial) compression. Columns can be packed by dynamic slurry technique or by sedimentation method. They are equipped with identical pistons on input and output. Pistons are provided by Poremet® 2 stainless steel (AISI 316 L) frits with porosity 3 µm and minimum hydraulic resistance. New developed patented liquid distributing system is installed under each frit. The design guarantees perfect piston flow, high efficiency even for high injection volume and simple accessibility of frit for cleaning.
      </p>
    </div>
  </div>

  <!-- SYSTEM TABS -->
  <section class="max-w-6xl mx-auto mt-10">
    <h2 class="font-[MaxOT] text-2xl md:text-3xl text-[#E63946] text-center mb-6">System</h2>

    <!-- Tab buttons (keep your existing tab logic; these are just styled) -->
    <ul class="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-6">
      <li class="tab-btn active-btn" data-tab="#tab-1">
        <button class="px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 shadow-sm">
          Standard design
        </button>
      </li>
      <li class="tab-btn" data-tab="#tab-2">
        <button class="px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 shadow-sm">
          Customer-specific designs
        </button>
      </li>
      <li class="tab-btn" data-tab="#tab-3">
        <button class="px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 shadow-sm">
          ATEX compliant GMP system solutions
        </button>
      </li>
    </ul>

    <div class="tabs-content">
      <!-- tab 1 -->
      <div class="tab active-tab" id="tab-1">
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 class="font-[MaxOT] text-[#E63946] text-2xl mb-3 text-center">Standard design</h3>
            <ul class="list-disc ml-5 space-y-2">
              <li>LABOMATIC HD 5000 triple piston pumps
                <ul class="list-disc ml-5 mt-1 space-y-1">
                  <li>Flow rate: 5 – 2000 ml/min.</li>
                  <li>Pressure up to 600 bar</li>
                </ul>
              </li>
              <li>Binary to quaternary high- and low-pressure gradient elution</li>
              <li>LABOPORT switch valve system</li>
              <li>LABOPORT autosampler system</li>
              <li>LABOCORD detectors
                <ul class="list-disc ml-5 mt-1 space-y-1">
                  <li>UV/VIS, DAD, RI, MS</li>
                </ul>
              </li>
              <li>LABOCOL Vario 4000 fraction collection series</li>
              <li>LABOCHROM 5 software</li>
              <li>Instrument layout systems</li>
            </ul>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
            <img src="/images/products/Labomatic/Image1.jpg" alt="Standard design" class="w-full h-auto rounded-lg">
          </div>
        </div>
      </div>

      <!-- tab 2 -->
      <div class="tab" id="tab-2">
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 class="font-[MaxOT] text-[#E63946] text-2xl mb-3 text-center">Customer-specific designs</h3>
            <ul class="list-disc ml-5 space-y-2">
              <li>Mobile system trolley</li>
              <li>Integrated autosampler</li>
              <li>Safety solvents cabinet with extraction device</li>
            </ul>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
            <img src="assets/images/products/HPLCunitbig1.jpg" alt="Customer specific designs" class="w-full h-auto rounded-lg">
          </div>
        </div>
      </div>

      <!-- tab 3 -->
      <div class="tab" id="tab-3">
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 class="font-[MaxOT] text-[#E63946] text-2xl mb-3 text-center">ATEX compliant GMP system solutions</h3>
            <ul class="list-disc ml-5 space-y-2">
              <li>Flow rates up to 5,000 ml/min. and pressures up to 600 bar</li>
              <li>Binary to quaternary gradient elution</li>
              <li>Diverse autosampler solutions</li>
              <li>Explosion-proof overpressure cabinet with integrated cooling system</li>
              <li>Explosion-proof system switch valve</li>
              <li>Continuous pressure, flow and temperature monitoring</li>
              <li>Fibre optic cable photometer</li>
              <li>Management and data processing system</li>
              <li>System-integrated computer</li>
            </ul>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
            <img src="assets/images/products/ATEX-HPLC-Anlage.jpg" alt="ATEX compliant system" class="w-full h-auto rounded-lg">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- DEVICES TABS -->
  <section class="max-w-6xl mx-auto mt-12">
    <h2 class="font-[MaxOT] text-2xl md:text-3xl text-[#E63946] text-center mb-6">Devices</h2>

    <ul class="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-6">
      <li class="tab-btn active-btn" data-tab="#tab-4">
        <button class="px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 shadow-sm">Pump systems</button>
      </li>
      <li class="tab-btn" data-tab="#tab-5">
        <button class="px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 shadow-sm">Sample injection</button>
      </li>
      <li class="tab-btn" data-tab="#tab-6">
        <button class="px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 shadow-sm">Columns</button>
      </li>
      <li class="tab-btn" data-tab="#tab-7">
        <button class="px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 shadow-sm">Detectors</button>
      </li>
      <li class="tab-btn" data-tab="#tab-8">
        <button class="px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 shadow-sm">Fractions collectors</button>
      </li>
    </ul>

    <div class="tabs-content">
      <!-- Pump systems -->
      <div class="tab active-tab" id="tab-4">
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 class="font-[MaxOT] text-[#E63946] text-2xl text-center mb-3">
              LABOMATIC HD-5000 triple-piston HPLC gradient pump
            </h3>
            <p class="mb-3">
              With integrated system controller for method programming and control of the complete HPLC system…
            </p>
            <h4 class="font-semibold mb-2 text-center">Special features</h4>
            <ul class="list-disc ml-5 space-y-1">
              <li>Versions: Standard or GMP</li>
              <li>Flow rates of 5 to 4,920 ml/min.</li>
              <li>Three-piston system with primary and secondary pistons</li>
              <li>Five different pump heads (combinable)</li>
              <li>Pressures up to 600 bar (8,700 psi)</li>
              <li>Active piston back rinse; quaternary HP/LP gradients</li>
              <li>Active mixing system for low-pressure gradients</li>
              <li>Control of 12+ pump mechanics &amp; up to 20 valves</li>
              <li>Flow or constant pressure operation</li>
              <li>Programmable flow gradient; μL precision dosing</li>
            </ul>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
            <img src="assets/images/products/Labomatic_002d.jpg" alt="HD-5000 pump" class="w-full h-auto rounded-lg">
          </div>
        </div>
      </div>

      <!-- Sample injection -->
      <div class="tab" id="tab-5">
        <div class="space-y-6">
          <!-- Block 1 -->
          <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 class="font-[MaxOT] text-[#E63946] text-2xl text-center mb-3">LABOPORT Sample injection</h3>
            <h4 class="font-semibold mb-2 text-center">LABOPORT valves for manual sample delivery</h4>
            <h4 class="font-semibold mb-2 text-center">LABOPORT Single Sample Delivery System</h4>
            <h5 class="font-semibold mb-2 text-center">Special features</h5>
            <ul class="list-disc ml-5 space-y-1">
              <li>Sample delivery valve and panel diluter</li>
              <li>Deliver a single or multiple samples</li>
              <li>Mounted on LABOMATIC system panels</li>
            </ul>
          </div>

          <!-- Block 2: AS-5000 -->
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 class="font-[MaxOT] text-[#E63946] text-2xl text-center mb-3">LABOMAT AS-5000 AutoSampler</h3>
              <p class="mb-3">
                The instrument size is determined by the customer’s application… The Z-axis moves up to 600 mm so tall sample vessels can be used.
              </p>
              <h4 class="font-semibold mb-2 text-center">Special features</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li>Freely programmable XYZ system</li>
                <li>Unlimited sample volume (μL to L)</li>
                <li>Double needle cleaning to prevent carryover</li>
                <li>Custom racks / round-bottom flask fixtures</li>
                <li>Touchscreen or LABOCHROM 5 software control</li>
                <li>Easily combinable with a fraction collector</li>
              </ul>
            </div>
            <div class="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
              <img src="assets/images/products/LabocolAS-3000cmyk.jpg" alt="AS-5000 AutoSampler" class="w-full h-auto rounded-lg">
            </div>
          </div>
        </div>
      </div>

      <!-- Columns -->
      <div class="tab" id="tab-6">
        <div class="space-y-8">
          <!-- AMC -->
          <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 class="font-[MaxOT] text-[#E63946] text-2xl text-center mb-3">
              LABOCHROM AMC axially compressible chromatography columns (MPLC/HPLC)
            </h3>
            <p class="mb-3">Axially compressible, maintained at constant user-specified pressure…</p>
            <h4 class="font-semibold mb-2 text-center">Special features</h4>
            <ul class="list-disc ml-5 space-y-1">
              <li>Axially compressible; automatic packing/emptying</li>
              <li>Adjustable seal (±500 mm), 20 sizes up to 65 bar</li>
              <li>Spring-supported seals; reduced wall effects</li>
              <li>Stainless steel / borosilicate precision tubes</li>
              <li>Cartridge system lowers operating costs</li>
              <li>No external power source required</li>
            </ul>
          </div>

          <!-- ACSC -->
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 class="font-[MaxOT] text-[#E63946] text-2xl text-center mb-3">
                LABOCHROM ACSC axially compressible HPLC steel columns
              </h3>
              <p class="mb-3">Constant pressure, independent of system operating pressure…</p>
              <h4 class="font-semibold mb-2 text-center">Special features</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li>Axially compressible; automatic packing/emptying</li>
                <li>Adjustable seal (±500 mm), 20 sizes up to 150 bar</li>
                <li>Precision stainless tubes prevent wall effects</li>
                <li>Cartridge system reduces operating costs</li>
              </ul>
            </div>
            <div class="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
              <img src="assets/images/products/ASCSStahlsaeule.jpg" alt="ACSC steel column" class="w-full h-auto rounded-lg">
            </div>
          </div>

          <!-- HDSC -->
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 class="font-[MaxOT] text-[#E63946] text-2xl text-center mb-3">
                LABOCHROM HDSC HPLC steel chromatography columns
              </h3>
              <h4 class="font-semibold mb-1 text-center">Area of application</h4>
              <p class="mb-3 text-center">HPLC for research, development &amp; production.</p>
              <h4 class="font-semibold mb-2 text-center">Special features</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li>ID from 10 to 50 mm</li>
                <li>Lengths up to 250 mm</li>
                <li>Empty or packed columns</li>
              </ul>
            </div>
            <div class="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
              <img src="assets/images/products/HDSC_2_sw_H-grau.jpg" alt="HDSC column" class="w-full h-auto rounded-lg">
            </div>
          </div>

          <!-- MPGC -->
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 class="font-[MaxOT] text-[#E63946] text-2xl text-center mb-3">
                LABOCHROM MPGC glass columns for MPLC &amp; flash chromatography
              </h3>
              <p class="mb-3">Only glass column with seal adjustable under pressure…</p>
              <h4 class="font-semibold mb-2 text-center">Special features</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li>No dead volume; adjustable pressurized seal (40 mm)</li>
                <li>Up to 20 bar; 38 sizes; precolumns for all IDs</li>
                <li>Inert materials (PTFE, glass); visual packing status</li>
                <li>Conical inlet for even sample distribution</li>
                <li>Couplings for mixed-ID connections</li>
              </ul>
            </div>
            <div class="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
              <img src="assets/images/products/Laboschrom_MPGC-001.jpg" alt="MPGC glass column" class="w-full h-auto rounded-lg">
            </div>
          </div>
        </div>
      </div>

      <!-- Detectors -->
      <div class="tab" id="tab-7">
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 class="font-[MaxOT] text-[#E63946] text-2xl text-center mb-3">
              LABOCORD-5000 DAD &amp; UV/VIS spectrophotometer
            </h3>
            <p class="mb-3">
              Combines the attractive and functional LABOMATIC design with high-performance photometer technology. Its specifications, robustness and high flexibility are impressive.
            </p>
            <h4 class="font-semibold mb-2 text-center">Special features</h4>
            <ul class="list-disc ml-5 space-y-1">
              <li>Versions: Standard or GMP</li>
              <li>Large range of measuring cells</li>
              <li>Preparative cells with 0.05 mm layer thickness</li>
              <li>Flow rate up to 10 L/min</li>
              <li>Measuring cells with optical fibres (ATEX)</li>
            </ul>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
            <img src="assets/images/products/LABOCORD5000_Montage.jpg" alt="LABOCORD 5000" class="w-full h-auto rounded-lg">
          </div>
        </div>
      </div>

      <!-- Fraction collectors -->
      <div class="tab" id="tab-8">
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 class="font-[MaxOT] text-[#E63946] text-2xl text-center mb-3">
              LABOMATIC Vario-4000 fraction collection series
            </h3>
            <h4 class="font-semibold text-center mb-1">Small-sized instruments for a large number of fractions</h4>
            <p class="mb-3 text-center">
              Compact size with optimal space utilisation — ideal where space is limited.
            </p>
            <p class="mb-2 font-semibold">Series</p>
            <ul class="list-disc ml-5 space-y-1">
              <li>Vario-4000: three racks of one type</li>
              <li>Vario-4000 Plus: five racks of one type</li>
              <li>Vario-4000 X-Plus: custom base up to 49 × 57 cm</li>
            </ul>
            <p class="mt-3 mb-2 font-semibold">Special features</p>
            <ul class="list-disc ml-5 space-y-1">
              <li>Standard or GMP</li>
              <li>Removable, freely programmable XY system</li>
              <li>Height-adjustable collection arm; touchscreen console</li>
              <li>Time or volume-based fractionation</li>
              <li>Stainless construction for solvent robustness</li>
              <li>Flow interruption &amp; delay/waste valve integrated</li>
              <li>Up to 1 L fraction volume; multiple chromatography</li>
            </ul>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
            <img src="assets/images/products/LABOCOL_V_4000_mit_Plus-001.jpg" alt="Vario 4000" class="w-full h-auto rounded-lg">
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
`,

  },

  "liquid-handling": {
    id: "liquid-handling",
    name: "Liquid Handling",
    image: Liquid1,
    logo: Labomatic,
    bannerImg: Banner3,
    altText: "labomatic",
    videoId: "",
    meta: {
      title: "Arc HPLC System | Chromatography & LC-MS | Waters Distributor India | Inkarp",
      description:
        "The Arc HPLC System offers dependable performance and simple method transfer for regulated labs. Inkarp Instruments is the authorized Waters distributor in India, offering full service and installation.",
      keywords: [
        "Arc HPLC System",
        "Waters Arc HPLC India",
        "LC-MS Chromatography System",
        "HPLC for QC Labs",
        "Waters Distributor India",
        "Arc HPLC Specifications",
        "Method Transfer HPLC",
        "Inkarp Waters India"
      ],
      altText: "Waters Arc HPLC System",
      internalLinks: ["analytical-and-chromatography-solutions"],
      externalLinks: ["https://www.waters.com/nextgen/us/en.html"]
    },
    description: `
  
         <div class="col-lg-7 col-md-12 col-sm-12 content-column">
                            <div class="product-details p_relative d_block ml_20">                                
                                    <figure class="image p_relative d_block prod-logo"><a href="analytical-chemistry-and-weighing.html"><img src="assets/images/principals/seperlab.png" alt=""></a></figure>                                                                                        
                                <h2 class="d_block fs_29 lh_40 fw_sbold font_family_inter mb_10">Liquid Handling Labomatic <br> <span class="subHeading">Distributor & Service Provider In India </span></h2>                                                                  
                                <div class="text p_relative d_block mb_10">
                                    <p>Labomatic, offers a wide range of Liquid Handling solutions in India, catering to the needs of pharmaceutical, biotech, and research laboratories. Our portfolio includes precision pipetting systems, automated liquid handlers, and accessories, designed to enhance accuracy, speed, and reproducibility in liquid handling tasks. With Labomatic's expertise in liquid handling technology and Inkarp Instruments' commitment to customer support, we provide comprehensive solutions, including installation, training, and after-sales service, to streamline your laboratory workflow and improve overall productivity and efficiency.</p>
                                <p>User-friendly liquid-handling solutions designed to help you eliminate tedious manual sample preparation and increase system reproducibility and retention time.&nbsp;</p>
                                    <p class="font_family_poppins mb_10">We offer outstanding products of the highest quality for made-to-measure solutions and devices – without compromising product flexibility and dimensions for laboratories within the pharmaceutical and chemical sectors.</p>                                  
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-discription p_relative d_block mb_80">
                <section class="service-20 p_relative sec-pad">
            <div class="auto-container">
                <h3 class="text-center">System Solutions</h3> <br>
                <div class="tabs-box">
                    <div class="tab-btn-box p_relative d_block mb_60">
                        <ul class="tab-btns tab-buttons clearfix centred">
                            <li class="tab-btn active-btn" data-tab="#tab-1">                                
                                <h6 class="fs_18 fw_medium tran_5 z_1">System solutions for analytical and preparative applications</h6>
                            </li>
                            <li class="tab-btn" data-tab="#tab-2">                                
                                <h6 class="fs_18 fw_medium tran_5 z_1">System solutions for fraction collectors</h6>
                            </li>
                        </ul>
                    </div>
                    <div class="tabs-content">
                        <div class="tab active-tab" id="tab-1">
                            <div class="inner-box p_relative">
                                <div class="row clearfix">
                                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                                <div class="sec-title-six p_relative d_block mb_25">
                                                    <h2 class="d_block fs_40 lh_50 fw_bold">System solutions for analytical and preparative applications</h2>
                                                </div>
                                                <ul class="prod-det"><li>The new giant among liquid handling platforms</li><li>Flexible sizing of the XY units:<ul><li>Width up to 3000 mm</li><li>Depth up to 1200 mm</li></ul></li><li>Up to four Z axes and two Y axes</li><li>Up to five simultaneous applications possible</li><li>High speed, high precision</li><li>Resistant to aggressive solvents</li><li>RFID identification system (optional) </li></ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div class="image_block_24">
                                            <div class="image-box p_relative d_block ml_30">
                                                <div class="shape">
                                                    <div class="float-bob-x shape-1 p_absolute w_95 h_95" style="background-image: url(assets/images/shape/shape-193.png);"></div>
                                                    <div class="shape-2 p_absolute b_20 float-bob-y" style="background-image: url(assets/images/shape/shape-194.png);"></div>
                                                    <div class="shape-3 p_absolute w_170 h_170 bg-color-1 b_radius_50"></div>
                                                </div> 
                                                <figure class="image p_relative d_block b_radius_10"><img src="assets/images/products/Laborport_CL_5000-004.jpg" alt=""></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab" id="tab-2">
                            <div class="inner-box p_relative">
                                <div class="row clearfix">
                                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                                <div class="sec-title-six p_relative d_block mb_25">
                                                    <h2 class="d_block fs_40 lh_50 fw_bold">System solutions for fraction collectors</h2>
                                                </div>
                                                <ul class="prod-det"><li>Open, height-adjustable system for an unlimited number of fractions</li><li>Compatible with many different flask and test tube sizes</li><li>Convenient racks for every possible application</li><li>Unlimited capacity</li><li>Freely programmable XY-axis</li><li>Collection of up to 625 fractions</li><li>Touchscreen system (optional)</li><li>Automatic rack recognition (optional)</li></ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div class="image_block_24">
                                            <div class="image-box p_relative d_block ml_30">
                                                <div class="shape">
                                                    <div class="float-bob-x shape-1 p_absolute w_95 h_95" style="background-image: url(assets/images/shape/shape-193.png);"></div>
                                                    <div class="shape-2 p_absolute b_20 float-bob-y" style="background-image: url(assets/images/shape/shape-194.png);"></div>
                                                    <div class="shape-3 p_absolute w_170 h_170 bg-color-1 b_radius_50"></div>
                                                </div> 
                                                <figure class="image p_relative d_block b_radius_10"><img src="assets/images/products/HPLCunitbig1.jpg" alt=""></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                                           
                    </div>
                </div>
            </div>
        </section>
        <section class="service-20 p_relative ">
            <div class="auto-container">
                <h3 class="text-center">Devices</h3> <br>
                <div>
                <ul class="accordion-box">
                                    <li class="accordion block active-block p_relative d_block">
                                        <div class="acc-btn active p_relative d_block tran_5 pt_16 pr_80 pb_16 pl_30">
                                            <div class="icon-outer p_absolute fs_10 tran_5 z_1"><i class="icon-29"></i></div>
                                            <h5 class="p_relative d_block fs_18 lh_28 fw_medium font_family_poppins">LABOMAT LH-5000 Liquid Handling Platform</h5>
                                        </div>
                                        <div class="acc-content current p_relative pt_25 pr_50 pb_25 pl_30">
                                            <div class="text p_relative d_block">
                                                <h4>No compromises in flexibility and dimension!</h4>
                                                <p class="font_family_poppins color_black">Customized solutions for LABOMATIC's liquid handling systems have practically no limitations in size, sample number, or sample volume, and offer a high degree of variability for all applications. Different applications can be combined, and of course, the systems are freely programmable.</p>
                                                <p>Thanks to the modular construction system, the basic device is available in over 1000 variations due to the X and Y elements that can be assembled together. The effective travel distance is up to 2800 mm on the X-axis, up to 800 mm on the Y-axis, and up to 500 mm on the Z-axis. The height of the X/Y axes can be adjusted to suit the customer's application. The combinable application modules increase flexibility even more.</p>
                                                <ul class="prod-det"><li>LABOCOL FS-3000 fraction collector module</li><li>LABOCOL DS-5000 data storage module</li><li>LABOCOL CL-5000 cleaning module</li><li>LABOPORT AS-5000 autosampler module</li><li>LABOPORT AL-5000 aliquot module</li><li>LABOPORT PO-3000 pooling module</li></ul>
                                                <br>
                                                <h4>Special features</h4>
                                                <ul class="prod-det"><li>Modular system, no compromises in dimension and flexibility</li><li>Size can be adapted to customer requirements</li><li>More than 1000 different sizes and variants can be combined</li><li>Combinable application modules</li><li>Travel distances:<br>X-axis from 160 to 2800 mm<br>Y-axis from 70 to 800 mm<br>Z-axis up to 500 mm</li><li>Multi-axis system, 2 Y-axes each with up to 2 Z-axes</li><li>Freely programmable</li><li>Touchscreen programming and parameter display</li><li>Control also by the LaboChrom 5 software.</li></ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="accordion block p_relative d_block">
                                        <div class="acc-btn p_relative d_block tran_5 pt_16 pr_80 pb_16 pl_30">
                                            <div class="icon-outer p_absolute fs_10 tran_5 z_1"><i class="icon-29"></i></div>
                                            <h5 class="p_relative d_block fs_18 lh_28 fw_medium font_family_poppins">LABOPORT AS-5000 Autosampler-Module</h5>
                                        </div>
                                        <div class="acc-content p_relative pt_25 pr_50 pb_25 pl_30">
                                            <div class="text p_relative d_block">
                                            <h4>Application area</h4>
                                            <p class="font_family_poppins color_black">The AS-5000 module enables the LH-5000 to be used as an autosampler. The device size is determined by the customer's application, with a limitation in the number of samples given by the travel distance of 2800 mm x 800 mm. The sample volume is virtually unlimited and can range from 1 ml to several liters. The Z-axis, with a travel distance of up to 500 mm, allows for high sample vessels to be used.</p>
                                            <p>The sample is sucked into a sample loop with a corresponding diluter. A sample pump is available for larger quantities. A corresponding washing station with a double cleaning function ensures absolutely no sample contamination during the cleaning of the sample needle.</p> <br>
                                            <h4>Special features</h4>
                                            <ul class="prod-det">
                                            <li>Available as a stand-alone device or as an expansion to LABOMATIC HPLC system panels.</li>
                                            <li>Expandable with additional modules such as:</li>
                                                <ul class="prod-det">
                                                    <li>Fraction collector (LABOCOL FS-5000 module)</li>
                                                    <li>Aliquot collection of fractions in microtiter plates (LABOPORT AL-5000 module)</li>
                                                </ul>
                                            <li>Freely programmable XYZ system</li>
                                            <li>Sample introduction through diluter and sample loop, or sample pump</li>
                                            <li>Double, contamination-free cleaning function of the needle</li>
                                            <li>Customized racks or round-bottom flask fixation</li>
                                            <li>Touchscreen programming and parameter display surface or control through LaboChrom 5 software.</li>
                                            </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="accordion block p_relative d_block">
                                        <div class="acc-btn p_relative d_block tran_5 pt_16 pr_80 pb_16 pl_30">
                                            <div class="icon-outer p_absolute fs_10 tran_5 z_1"><i class="icon-29"></i></div>
                                            <h5 class="p_relative d_block fs_18 lh_28 fw_medium font_family_poppins">LABOCOL FS-5000 Fraction Collector Module</h5>
                                        </div>
                                        <div class="acc-content p_relative pt_25 pr_50 pb_25 pl_30">
                                        <div class="row clearfix">
                                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                            <h4>Application</h4>
                                            <p class="font_family_poppins color_black">With this module, the LABOMAT LH-5000 can be used as a fraction collector. It is an open system without limitation on the number of fractions, size of test tubes, number of columns, and the appropriate rack for each application. The device size is determined by the customer's application, with the XY system's travel range up to 2800 mm wide and 800 mm deep. The corresponding test tube racks are also customized to meet customer needs.</p>
                                            <br>
                                            <h4>Special features</h4>
                                            <ul class="prod-det">                                            
<li>Freely programmable XY system</li>
<li>Touchscreen programming and parameter display surface or control by LaboChrom 5 software</li>
<li>Expandable to a 2-axis XYZ device</li>
<ul class="prod-det">
            <li>Autosampler (LABOCOL FS-5000)</li>
        <li>Aliquot removal of fractions into microtiter plates (LABOPORT AL-5000)</li>
        <li>Automatic peak pooling</li>
        </ul>
<li>Freely programmable step sequence</li>
<li>No dead volume due to the installation of the flow interruption and waste valves directly on the Y-arm</li>
<li>Automatic rack recognition</li>
<li>Infinite number of fractions through the repeat function and the replacement of filled racks</li>
<li>Continuous operation</li>
<li>Unlimited fraction volume through various drainage racks.</li>
</ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div class="image_block_24">
                                            <div class="image-box p_relative d_block ml_30">
                                                <div class="shape">
                                                    <div class="float-bob-x shape-1 p_absolute w_95 h_95" style="background-image: url(assets/images/shape/shape-193.png);"></div>
                                                    <div class="shape-2 p_absolute b_20 float-bob-y" style="background-image: url(assets/images/shape/shape-194.png);"></div>
                                                    <div class="shape-3 p_absolute w_170 h_170 bg-color-1 b_radius_50"></div>
                                                </div> 
                                                <figure class="image p_relative d_block b_radius_10"><img src="assets/images/products/Laborport_CL_5000-001.jpg" alt=""></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                            
                                        </div>
                                    </li>

                                    <li class="accordion block p_relative d_block">
                                        <div class="acc-btn p_relative d_block tran_5 pt_16 pr_80 pb_16 pl_30">
                                            <div class="icon-outer p_absolute fs_10 tran_5 z_1"><i class="icon-29"></i></div>
                                            <h5 class="p_relative d_block fs_18 lh_28 fw_medium font_family_poppins">LABOCOL DS-5000 Data Storage Module</h5>
                                        </div>
                                        <div class="acc-content p_relative pt_25 pr_50 pb_25 pl_30">
                                        <div class="row clearfix">
                                    <div class="col-lg-12 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                            <h4>Data storage directly on fraction glasses and bottles</h4>
                                            <p class="font_family_poppins color_black">The LABOCORD DS-5000 is a system for electronic storage of relevant information directly on individual fraction glasses or bottles. All necessary information about the content of an individual fraction is stored on a data chip attached directly to the container. The chip can be read using a reader.</p>
                                            <br>
                                            <h4>Special features</h4>
                                            <ul class="prod-det"><li>Data storage chip directly on individual fraction glasses or bottles</li><li>Automatic storage of relevant information about the individual fraction on the chip of the respective container</li><li>Reading of the stored information on the individual fraction possible after removal at any location</li><li>Individual fractions and associated information are always firmly linked (common transport)</li><li>No more manual labeling necessary</li><li>Detection of incorrect positions possible</li><li>Electronic transfer to a DMS.</li></ul>
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>
                                            
                                        </div>
                                    </li>

                                    <li class="accordion block p_relative d_block">
                                        <div class="acc-btn p_relative d_block tran_5 pt_16 pr_80 pb_16 pl_30">
                                            <div class="icon-outer p_absolute fs_10 tran_5 z_1"><i class="icon-29"></i></div>
                                            <h5 class="p_relative d_block fs_18 lh_28 fw_medium font_family_poppins">LABOCOL CL-5000 Cleaning Module</h5>
                                        </div>
                                        <div class="acc-content p_relative pt_25 pr_50 pb_25 pl_30">
                                        <div class="row clearfix">
                                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                            
                                            <p class="font_family_poppins color_black">The LABOCOL CL-5000 allows for easy and fast emptying of unwanted fraction collector vessels without the need to remove them from the device. A spray lance mounted on the Z-axis moves into the predetermined fraction collector vessels and, in a first step, draws the liquid into a waste container. In a second step, the lance sprays rinse fluid onto the vessel walls for cleaning and immediately draws the fluid back up. This step can be repeated as needed.</p>
                                            <br>
                                            <h4>Special features</h4>
                                            <ul class="prod-det"><li>Automatic cleaning of fraction collector vessels directly on the LH-5000</li><li>No laborious transport and emptying of vessels</li><li>Time savings through automatic cleaning</li><li>Compatible with LABOCOL FS-5000 fraction collector</li><li>Controlled by LaboChrom 5 software.</li></ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div class="image_block_24">
                                            <div class="image-box p_relative d_block ml_30">
                                                <div class="shape">
                                                    <div class="float-bob-x shape-1 p_absolute w_95 h_95" style="background-image: url(assets/images/shape/shape-193.png);"></div>
                                                    <div class="shape-2 p_absolute b_20 float-bob-y" style="background-image: url(assets/images/shape/shape-194.png);"></div>
                                                    <div class="shape-3 p_absolute w_170 h_170 bg-color-1 b_radius_50"></div>
                                                </div> 
                                                <figure class="image p_relative d_block b_radius_10"><img src="assets/images/products/Laborport_CL_5000-001.jpg" alt=""></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                            
                                        </div>
                                    </li>
                                    <li class="accordion block p_relative d_block">
                                        <div class="acc-btn p_relative d_block tran_5 pt_16 pr_80 pb_16 pl_30">
                                            <div class="icon-outer p_absolute fs_10 tran_5 z_1"><i class="icon-29"></i></div>
                                            <h5 class="p_relative d_block fs_18 lh_28 fw_medium font_family_poppins">LABOPORT AL-5000 Aliquot Extraction Module</h5>
                                        </div>
                                        <div class="acc-content p_relative pt_25 pr_50 pb_25 pl_30">
                                        <div class="row clearfix">
                                    <div class="col-lg-12 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                            <h4>Application area</h4>
                                            <p class="font_family_poppins color_black">The AL-5000 module is used in combination with the FS-5000 fraction collector module and is designed to extract aliquots of the collected fractions for additional analysis purposes (HPLC, etc.). The probe needle of the AL-5000 module automatically moves to each fraction and takes a sample that is transferred to a microtiter plate. The sample extraction rate is automatically adjusted to match the fraction collection rate. Like the AS-5000 module, the AL-5000 module has a washing station for internal and external cleaning of the probe needle. The height of the fraction vessels is limited to 400 mm.</p>
                                            <br>
                                            <h4>Special features</h4>
                                            <ul class="prod-det"><li>Automatic sample extraction into microtiter plates</li><li>Freely programmable step sequence</li><li>Double contamination-free cleaning function of the needle</li><li>Controlled by LaboChrom 5 software</li></ul>
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>
                                            
                                        </div>
                                    </li>

                                    <li class="accordion block p_relative d_block">
                                        <div class="acc-btn p_relative d_block tran_5 pt_16 pr_80 pb_16 pl_30">
                                            <div class="icon-outer p_absolute fs_10 tran_5 z_1"><i class="icon-29"></i></div>
                                            <h5 class="p_relative d_block fs_18 lh_28 fw_medium font_family_poppins">LABOPORT PO-5000 Pooling Module</h5>
                                        </div>
                                        <div class="acc-content p_relative pt_25 pr_50 pb_25 pl_30">
                                        <div class="row clearfix">
                                    <div class="col-lg-12 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                            <h4>Application area</h4>
                                            <p class="font_family_poppins color_black">The PO-5000 Pooling Module is used in combination with the FS-5000 Fraction Collector Module for automatic sample pooling from different fractions. The fractions marked by the software are automatically collected in a corresponding container using a suction device. The pooled fractions can be automatically fed into a solid phase extraction or an automatic evaporator system. This system is only offered in conjunction with our LaboChrom 5 software.</p>
                                            <br>
                                            <h4>Special features</h4>
                                            <ul class="prod-det"><li>Automatic pooling system</li><li>Unlimited pooling volume</li><li>Double drag-free cleaning function of the suction device</li><li>Controlled by LaboChrom 5 software</li></ul>
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>
                                            
                                        </div>
                                    </li>
                                    
                                </ul>
                </div>
            </div>
        </section>
                </div>  `
  },
}              