
import ImgN120 from "/images/products/Implen/nanophotometer-n120.jpg";
import ImgNP80 from "/images/products/Implen/nanophotometer-np80.jpg";
import ImgN60N50 from "/images/products/Implen/nanophotometer-n60-n50.jpg";
import ImgC40 from "/images/products/Implen/nanophotometer-c40.jpg";
import ImgC30 from "/images/products/Implen/nanophotometer-c30.jpg";
import ImgOD600 from "/images/products/Implen/diluphotometer-od600-new.jpg";

import ImgFluidlabR300 from "/images/products/Avanjo/R-300_PDP_center.png"

import ImgLitescope2 from "/images/products/Nanovision/litescope-2.jpg";
import ImgLitescope3 from "/images/products/Nanovision/litescope-3.gif";
import ImgLitescope1 from "/images/products/Nanovision/litescope.png";

// images (from public/)
import ImgReichert4SPR from "/images/products/Reichert/reichert-4spr.jpg";
import ImgReichert2SPR from "/images/products/Reichert/reichert-2spr.jpg";

// Nanosurf images (from public/)
import ImgDriveAFM from "/images/products/Nanosurf/driveafm.jpg";
import ImgFlexAFM from "/images/products/Nanosurf/flexafm.jpg";
import ImgCoreAFM from "/images/products/Nanosurf/coreafm-the-essence-of-atomic-force-microscopy.jpg";
import ImgIndustrialSolutions from "/images/products/Nanosurf/industrial-solutions.png";
import ImgAlphacen300 from "/images/products/Nanosurf/alphacen-300.jpg";
import ImgLensAFM from "/images/products/Nanosurf/lensafm-afm-for-optical-microscopes.webp";
import ImgNaniteAFM from "/images/products/Nanosurf/naniteafm-zoom.jpg";
import ImgFlexMount from "/images/products/Nanosurf/Flex-Mount_overview.png";
import ImgNaioAFM from "/images/products/Nanosurf/naioafm-the-leading-compact-afm.webp";
import ImgNaioSTM from "/images/products/Nanosurf/naiostm-stm-for-nanoeducation.jpg";

import ImgBWBXP from "/images/products/BWB/bwb-xp-flame-photometer.webp";
import ImgBWBXPPlus from "/images/products/BWB/bwb-xp-flame-photometer.webp"; // re-using XP image until XP Plus asset is available
import ImgBWBFlash from "/images/products/BWB/bwb-flash-flame-photometer.webp";
import ImgBWBBio from "/images/products/BWB/bio-cut0out0rgb.png";
import ImgBWBBioAV from "/images/products/BWB/BWB-BIO-AV-Flame-Photometer.png";
import ImgBWBLI from "/images/products/BWB/bwb-li-flame-photometer.png";
import ImgBWBSoil from "/images/products/BWB/soil-flame-photometer.png";
import ImgBWBSugar from "/images/products/BWB/sugar-flame-photometer.png";

// ✅ Photon etc. images
import ImgIRVIVO from "/images/products/Photon/ir-vivo.jpg";
import ImgGrandEOS from "/images/products/Photon/photon-etc-grand-eos.jpg";
import ImgRIMA from "/images/products/Photon/photon-etc-rima-closed.jpg";
import ImgLIMA from "/images/products/Photon/LIMA_upright.jpg";
import ImgIMA from "/images/products/Photon/photon-etc-ima-inverted.jpg";
import ImgZephIR17 from "/images/products/Photon/photon-etc-zephir-1-7.jpg";
import ImgZephIR25 from "/images/products/Photon/photon-etc-zephir-2-5.jpg";
import ImgZephIR29 from "/images/products/Photon/photon-etc-zephir-2-9.jpg";
import ImgCLAIR from "/images/products/Photon/Sans-titre-68.jpg";
import ImgLEOS from "/images/products/Photon/Sans-titre-68.jpg";

import ImgP4pro from "/images/products/Affinite/P4pro.avif"
import ImgP4spr from "/images/products/Affinite/P4SPR.avif"
import ImgP4proplus from "/images/products/Affinite/p4proplus.avif"
import ImgEzControl from "/images/products/Affinite/ezControlSoftware.avif"

export const LifescienceData = {
  "nanophotometer": {
    models: [

      {
        name: "NanoPhotometer® N120",
        slug: "nanophotometer-n120",
        image: ImgN120,
      },
      {
        name: "NanoPhotometer® NP80",
        slug: "nanophotometer-np80",
        image: ImgNP80,
      },
      {
        name: "NanoPhotometer® N60/N50",
        slug: "nanophotometer-n60-n50",
        image: ImgN60N50,
      },
      {
        name: "NanoPhotometer® C40",
        slug: "nanophotometer-c40",
        image: ImgC40,
      },
      {
        name: "NanoPhotometer® N30",
        slug: "nanophotometer-n30",
        image: ImgC30,
      },

    ],
    // pageData: {
    //   title: "Implen NanoPhotometer®",
    //   intro:
    //     "Trusted microvolume spectrophotometers for DNA, RNA, protein, and more—compact, fast, and maintenance-free.",
    //   modelHeading: "Explore Models",
    // },
    meta: {
      title: "Implen NanoPhotometer® Series | Inkarp India",
      description:
        "Compare Implen NanoPhotometer models (N120, NP80, N60/N50, C40, N30, C30). Accurate microvolume UV/VIS spectrophotometry for life science labs.",
      keywords: [
        "Implen NanoPhotometer",
        "microvolume spectrophotometer",
        "NP80",
        "N120",
        "N60",
        "N50",
        "C40",
        "N30",
        "C30",
        "Inkarp India",
      ],
      altText: "Implen NanoPhotometer product range",
      internalLinks: ["od600"],
      externalLinks: ["https://www.implen.de/"],
    },
  },

  "od600": {
    models: [

      {
        name: "New Implen OD600®",
        slug: "od600",
        image: ImgOD600,
      },
    ],

    meta: {
      title: "Implen OD600® | Inkarp India",
      description:
        "New Implen OD600® for fast, accurate optical density measurements at 600 nm. Ideal for bacterial growth curves and QC.",
      keywords: [
        "Implen OD600",
        "OD600 meter",
        "cell density",
        "bacterial growth",
        "spectrophotometer",
        "Inkarp India",
      ],
      altText: "Implen OD600 instrument",
      internalLinks: ["nanophotometer"],
      externalLinks: ["https://www.implen.de/"],
    },
  },

  "fluidlab-r-300": {
    models: [
      { heading: "Cell Counter & Spectrometer" },
      {
        name: "Fluidlab R-300",
        slug: "fluidlab-r300",
        image: ImgFluidlabR300, // import this in your file
      },
    ],
    // pageData: {
    //   title: "Fluidlab R-300 | Cell Counter & Spectrometer",
    //   intro:
    //     "The Fluidlab R-300 combines an automated cell counter with a full spectrometer. Perform absorbance, scatterlight, and time-series measurements with label-free viability analysis via holographic microscopy.",
    //   modelHeading: "Explore Models",
    // },
    meta: {
      title: "Fluidlab R-300 | Cell Counter & Spectrometer | Inkarp India",
      description:
        "Fluidlab R-300 by Anvajo is a compact device combining automated cell counting and spectrophotometry (375–700 nm). Features include digital holographic microscopy, staining-free viability, portable design, and wireless connectivity. Available in India via Inkarp Instruments.",
      keywords: [
        "Fluidlab R-300",
        "Anvajo Fluidlab",
        "cell counter spectrometer",
        "digital holographic microscopy",
        "label-free viability",
        "portable spectrometer",
        "automated cell counter",
        "Inkarp India",
      ],
      altText: "Anvajo Fluidlab R-300 instrument",
      internalLinks: ["lifesciences"],
      externalLinks: ["https://anvajo.com/"],
    },
  },

  "litescope": {
    models: [

      {
        name: "Litescope",
        slug: "litescope",
        image: ImgLitescope1, // import this in your file
      },
    ],

    meta: {
      title: "Fluidlab R-300 | Cell Counter & Spectrometer | Inkarp India",
      description:
        "Fluidlab R-300 by Anvajo is a compact device combining automated cell counting and spectrophotometry (375–700 nm). Features include digital holographic microscopy, staining-free viability, portable design, and wireless connectivity. Available in India via Inkarp Instruments.",
      keywords: [
        "Fluidlab R-300",
        "Anvajo Fluidlab",
        "cell counter spectrometer",
        "digital holographic microscopy",
        "label-free viability",
        "portable spectrometer",
        "automated cell counter",
        "Inkarp India",
      ],
      altText: "Anvajo Fluidlab R-300 instrument",
      internalLinks: ["lifesciences"],
      externalLinks: ["https://anvajo.com/"],
    },
  },
  "reichert-spr-systems": {
    models: [
      { heading: "Reichert SPR Systems" },
      {
        name: "Reichert® 4SPR",
        slug: "reichert-4spr",
        image: ImgReichert4SPR,
      },
      {
        name: "Reichert® 2SPR",
        slug: "reichert-2spr",
        image: ImgReichert2SPR,
      },
    ],
    // pageData: {
    //   title: "Reichert Surface Plasmon Resonance (SPR) Systems",
    //   intro:
    //     "Label-free, real-time interaction analysis for kinetics, affinity, and concentration measurements. Choose from 2-channel or 4-channel configurations.",
    //   modelHeading: "Explore Models",
    // },
    meta: {
      title: "Reichert SPR Systems | 2SPR & 4SPR | Inkarp India",
      description:
        "Reichert’s 2SPR and 4SPR platforms deliver precise label-free interaction analysis with flexible throughput and robust performance.",
      keywords: [
        "Reichert SPR",
        "Reichert 2SPR",
        "Reichert 4SPR",
        "surface plasmon resonance",
        "label-free interaction analysis",
        "biomolecular kinetics",
        "Inkarp India",
      ],
      altText: "Reichert SPR instruments",
      internalLinks: ["lifesciences"],
      externalLinks: ["https://www.reichertspr.com/"],
    },
  },
  "research": {
    models: [
      { heading: "Research" },
      { name: "DriveAFM", slug: "driveafm", image: ImgDriveAFM },
      { name: "FlexAFM", slug: "flexafm", image: ImgFlexAFM },
      { name: "CoreAFM", slug: "coreafm", image: ImgCoreAFM },
    ],

    meta: {
      title: "Nanosurf Research AFM | DriveAFM, FlexAFM, CoreAFM | Inkarp India",
      description: "Compare DriveAFM, FlexAFM, and CoreAFM for advanced research applications.",
      keywords: ["Nanosurf", "DriveAFM", "FlexAFM", "CoreAFM", "research AFM", "Inkarp India"],
      altText: "Nanosurf Research AFM range",
      internalLinks: ["lifesciences"],
      externalLinks: ["https://www.nanosurf.com/"],
    },
  },

  "industry": {
    models: [
      // { heading: "Industry" },
      { name: "Industrial Solutions", slug: "industrial-solutions", image: ImgIndustrialSolutions },
      { name: "Alphacen 300", slug: "alphacen-300", image: ImgAlphacen300 },
    ],

    meta: {
      title: "Nanosurf Industrial AFM | Alphacen 300 & Custom Solutions | Inkarp India",
      description: "Industrial AFM platforms for automation, throughput, and reliability.",
      keywords: ["Nanosurf", "Industrial AFM", "Alphacen 300", "automation AFM", "Inkarp India"],
      altText: "Nanosurf Industrial AFM range",
      internalLinks: ["lifesciences"],
      externalLinks: ["https://www.nanosurf.com/"],
    },
  },

  "integration": {
    models: [
      // { heading: "Integration" },
      { name: "LensAFM", slug: "lensafm", image: ImgLensAFM },
      { name: "NaniteAFM", slug: "naniteafm", image: ImgNaniteAFM },
      { name: "Flex-Mount", slug: "flex-mount", image: ImgFlexMount },
    ],

    meta: {
      title: "Nanosurf Integration AFM | LensAFM, NaniteAFM, Flex-Mount | Inkarp India",
      description: "Integrated AFM solutions for optical microscopes and custom instrumentation.",
      keywords: ["Nanosurf", "LensAFM", "NaniteAFM", "Flex-Mount", "integration AFM", "Inkarp India"],
      altText: "Nanosurf Integration AFM range",
      internalLinks: ["lifesciences"],
      externalLinks: ["https://www.nanosurf.com/"],
    },
  },

  "compact": {
    models: [
      { heading: "Compact" },
      { name: "NaioAFM", slug: "naioafm", image: ImgNaioAFM },
      { name: "NaioSTM", slug: "naiostm", image: ImgNaioSTM },
    ],

    meta: {
      title: "Nanosurf Compact AFM/STM | NaioAFM & NaioSTM | Inkarp India",
      description: "Portable, easy-to-use AFM/STM systems ideal for teaching and routine measurements.",
      keywords: ["Nanosurf", "NaioAFM", "NaioSTM", "compact AFM", "education AFM", "Inkarp India"],
      altText: "Nanosurf Compact AFM/STM range",
      internalLinks: ["lifesciences"],
      externalLinks: ["https://www.nanosurf.com/"],
    },
  },
  "bwb-flame-photometer": {
    models: [
      { heading: "Flame Photometers" },
      { name: "BWB XP Flame Photometer", slug: "bwb-xp-flame-photometer", image: ImgBWBXP },
      { name: "BWB XP Plus Flame Photometer", slug: "bwb-xp-plus-flame-photometer", image: ImgBWBXPPlus },
      { name: "BWB Flash Flame Photometer", slug: "bwb-flash-flame-photometer", image: ImgBWBFlash },
      { name: "BWB BIO Flame Photometer", slug: "bwb-bio-flame-photometer", image: ImgBWBBio },
      { name: "BWB BIO AV Flame Photometer", slug: "bwb-bio-av-flame-photometer", image: ImgBWBBioAV },
      { name: "BWB LI Flame Photometer", slug: "bwb-li-flame-photometer", image: ImgBWBLI },
      { name: "BWB SOIL Flame Photometer", slug: "bwb-soil-flame-photometer", image: ImgBWBSoil },
      { name: "BWB SUGAR Flame Photometer", slug: "bwb-sugar-flame-photometer", image: ImgBWBSugar },
    ],

    // pageData: {
    //   title: "BWB Flame Photometers",
    //   intro:
    //     "Reliable multi-application flame photometers for Na, K, Li, Ca and more—covering general lab, clinical, soil, sugar and industrial workflows.",
    //   modelHeading: "Explore Models",
    // },

    meta: {
      title: "BWB Flame Photometers | XP, XP Plus, Flash, BIO, BIO AV, LI, SOIL, SUGAR | Inkarp India",
      description:
        "Explore BWB Technologies flame photometer range—XP, XP Plus, Flash, BIO, BIO AV, LI, SOIL and SUGAR. Accurate, robust instruments for routine and specialized applications.",
      keywords: [
        "BWB flame photometer",
        "BWB XP",
        "BWB XP Plus",
        "BWB Flash",
        "BWB BIO",
        "BWB BIO AV",
        "BWB LI",
        "BWB SOIL",
        "BWB SUGAR",
        "Inkarp India",
      ],
      altText: "BWB Flame Photometer range",
      internalLinks: ["lifesciences"],
      externalLinks: ["https://www.bwbtech.com/"],
    },
  },

  "photon-products": {
    models: [
      { heading: "Photon Products" },
      { name: "IR VIVO™", slug: "ir-vivo", image: ImgIRVIVO },
      { name: "ClaIR™", slug: "clair", image: ImgCLAIR },
      { name: "L-EOS™", slug: "l-eos", image: ImgLEOS },
      { name: "IMA™", slug: "ima", image: ImgIMA },
      { name: "GRAND-EOS™", slug: "grand-eos", image: ImgGrandEOS },
      { name: "ZephIR™ 2.5", slug: "zephir-2-5", image: ImgZephIR25 },
      { name: "ZephIR™ 1.7", slug: "zephir-1-7", image: ImgZephIR17 },
      { name: "ZephIR™ 2.9", slug: "zephir-2-9", image: ImgZephIR29 },
      { name: "RIMA™", slug: "rima", image: ImgRIMA },
      { name: "LIMA™", slug: "lima", image: ImgLIMA },
    ],

    meta: {
      title:
        "Photon etc. Hyperspectral & IR Imaging Systems | IR VIVO, GRAND-EOS, RIMA, LIMA, ZephIR | Inkarp India",
      description:
        "Explore Photon etc. systems: IR VIVO, GRAND-EOS, RIMA, LIMA, ClaIR, L-EOS, IMA and ZephIR (1.7/2.5/2.9) for hyperspectral, Raman and infrared imaging.",
      keywords: [
        "Photon etc",
        "IR VIVO",
        "GRAND-EOS",
        "RIMA",
        "LIMA",
        "ClaIR",
        "L-EOS",
        "IMA",
        "ZephIR 1.7",
        "ZephIR 2.5",
        "ZephIR 2.9",
        "hyperspectral imaging",
        "infrared imaging",
        "Raman imaging",
        "Inkarp India",
      ],
      altText: "Photon etc. product range",
      internalLinks: ["lifesciences"],
      externalLinks: ["https://www.photonetc.com/"],
    },
  },

  "surface-plasmon-resonance": {
    models: [
      {
        name: "p4pro and affipump",
        slug: "p4pro-and-affipump",
        image: ImgP4pro, // import this in your file
      },

       {
        name: "P4SPR",
        slug: "p4spr",
        image: ImgP4spr, // import this in your file
      },

      {
        name: "P4PRO+",
        slug: "p4proplus",
        image: ImgP4proplus, // import this in your file
      },

       {
        name: "ezControl Software",
        slug: "ez-control-software",
        image: ImgEzControl, // import this in your file
      },
    ],

    meta: {
      title:
        "Surface Plasmon Resonance Distributors and Service Providers in India | Affinité Instruments | Inkarp",
      description:
        "Inkarp Instruments is the official distributor and service provider of Affinité Instruments’ SPR systems in India, including P4PRO & Affipump, P4SPR, P4SPR 2.0, and P4PRO+. Discover advanced SPR solutions for biomolecular interaction studies.",
      keywords: [
        "Surface Plasmon Resonance (SPR) Distributor In India",
        "Surface Plasmon Resonance (SPR) Service Provider In India",
        "P4PRO Affipump India",
        "P4SPR India",
        "P4SPR 2.0 India",
        "P4PRO+"
      ],
      altText: "Surface Plasmon Resonance_Affinite Instruments_Inkarp",
      internalLinks: ["Related Products"],
      externalLinks: ["https://www.affiniteinstruments.com/"]
    },

    pageData: {
      highlight: `
  <div class="text-[18px] leading-7 text-gray-700 font-[Roboto]">
    <p class="mb-4">
      Surface Plasmon Resonance (SPR) is a powerful, label-free optical technique that allows researchers to study biomolecular interactions in real time. By detecting subtle changes in the refractive index near a sensor surface, SPR provides critical insights into binding kinetics, affinity constants, concentration, and specificity—all without the need for dyes or secondary labeling. This makes SPR a cornerstone technology for applications in drug discovery, diagnostics, biosensing, protein research, and environmental testing.
    </p>

    <p class="mb-4">
     To meet the growing demand for fast, precise, and reliable interaction analysis, Affinité Instruments has developed a range of compact, benchtop SPR systems that combine high sensitivity with intuitive operation. Their models are designed to make advanced SPR technology accessible for both academic laboratories and industrial research environments.
    </p>  
  </div>
`,

      content: ` <div class="text-[18px] leading-7 text-gray-700 font-[Roboto]">
<p class="mb-4">
     As SPR technology continues to transform the fields of life sciences, pharmaceuticals, and biotechnology, having a reliable partner is essential to maximize research outcomes. Inkarp Instruments is proud to be the official distributor and service provider of Affinité Instruments’ Surface Plasmon Resonance solutions in India.
    </p>

     <p class="mb-4">
With decades of experience supporting scientists across the country, Inkarp Instruments provides comprehensive end-to-end services for Surface Plasmon Resonance systems, including installation and system setup, user training and application support, calibration and performance verification, as well as preventive maintenance and technical servicing. Serving universities, research institutes, and biopharma R&D laboratories, our expert team ensures that every SPR instrument delivers maximum uptime, reproducibility, and accuracy for mission-critical studies. Partner with Inkarp Instruments — your trusted choice for Surface Plasmon Resonance Distributors and Service Providers in India.
    </p>

    <!-- H2 -->
    <h2 class="font-[MaxOT] text-2xl text-[#E63946] mt-8 mb-3 text-center">
      Features and Advantages of Surface Plasmon Resonance
    </h2>
    <p class="mb-6 text-center">
     Surface Plasmon Resonance (SPR) technology offers unmatched precision in analyzing biomolecular interactions across industries. From pharmaceuticals and biotechnology to diagnostics, environmental monitoring, and academia, SPR delivers real-time, label-free data that accelerates research, reduces costs, and ensures reliable results. Each sector benefits from tailored features and advantages that enhance discovery and innovation.
    </p>

    <!-- Pharma & Drug Discovery -->
    <section class="mb-8">
      <h3 class="font-[MaxOT] text-xl text-[#E63946] mb-4 text-center">Pharmaceutical &amp; Drug Discovery</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h4 class="font-semibold text-gray-900 mb-2 text-center">Key Features</h4>
          <ul class="list-disc ml-5 space-y-1">
            <li>High-sensitivity detection of drug–target interactions</li>
            <li>Real-time kinetic analysis (association/dissociation rates, KD values)</li>
            <li>Multi-channel measurement for parallel testing</li>
            <li>Flow-based system for reproducible binding curves</li>
          </ul>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h4 class="font-semibold text-gray-900 mb-2 text-center">Advantages</h4>
          <ul class="list-disc ml-5 space-y-1">
            <li>Faster lead optimization with rapid kinetics</li>
            <li>Lower cost and time vs. labeled assays</li>
            <li>Accurate affinity ranking improves hit-to-lead decisions</li>
            <li>Supports biologics: antibodies, peptides, biosimilars</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Biotechnology & Protein Research -->
    <section class="mb-8">
      <h3 class="font-[MaxOT] text-xl text-[#E63946] mb-4 text-center">Biotechnology &amp; Protein Research</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h4 class="font-semibold text-gray-900 mb-2 text-center">Key Features</h4>
          <ul class="list-disc ml-5 space-y-1">
            <li>Label-free protein–protein / protein–ligand analysis</li>
            <li>Static and flow-based options</li>
            <li>Dual-reference subtraction (P4PRO+) for higher accuracy</li>
            <li>Compact benchtop design</li>
          </ul>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h4 class="font-semibold text-gray-900 mb-2 text-center">Advantages</h4>
          <ul class="list-disc ml-5 space-y-1">
            <li>Detailed characterization without dyes</li>
            <li>Binding specificity and cross-reactivity insights</li>
            <li>Enables biosensor development and validation</li>
            <li>Reproducible data for publications and translation</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Diagnostics & Biosensing -->
    <section class="mb-8">
      <h3 class="font-[MaxOT] text-xl text-[#E63946] mb-4 text-center">Diagnostics &amp; Biosensing</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h4 class="font-semibold text-gray-900 mb-2 text-center">Key Features</h4>
          <ul class="list-disc ml-5 space-y-1">
            <li>Real-time biomarker detection in complex samples</li>
            <li>High sensitivity (down to femtomolar)</li>
            <li>Multi-channel analysis for parallel studies</li>
            <li>Rapid assay cycle (≈ 2–15 minutes)</li>
          </ul>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h4 class="font-semibold text-gray-900 mb-2 text-center">Advantages</h4>
          <ul class="list-disc ml-5 space-y-1">
            <li>Speeds up point-of-care development</li>
            <li>Improved accuracy with reference subtraction</li>
            <li>Shorter development time using label-free methods</li>
            <li>Suitable for clinical research and early validation</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Environmental Testing & Food Safety -->
    <section class="mb-8">
      <h3 class="font-[MaxOT] text-xl text-[#E63946] mb-4 text-center">Environmental Testing &amp; Food Safety</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h4 class="font-semibold text-gray-900 mb-2 text-center">Key Features</h4>
          <ul class="list-disc ml-5 space-y-1">
            <li>Detection of pollutants, toxins, and contaminants</li>
            <li>Rugged, reproducible measurements</li>
            <li>Flow-based operation adaptable to assays</li>
            <li>Handles complex matrices (water, soil, food)</li>
          </ul>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h4 class="font-semibold text-gray-900 mb-2 text-center">Advantages</h4>
          <ul class="list-disc ml-5 space-y-1">
            <li>Rapid on-site analysis</li>
            <li>Higher sensitivity vs. conventional assays</li>
            <li>Enables biosensor-based monitoring</li>
            <li>Less reliance on lengthy sample prep</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Academic Research & Teaching -->
    <section class="mb-8">
      <h3 class="font-[MaxOT] text-xl text-[#E63946] mb-4 text-center">Academic Research &amp; Teaching</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h4 class="font-semibold text-gray-900 mb-2 text-center">Key Features</h4>
          <ul class="list-disc ml-5 space-y-1">
            <li>Cost-effective platforms (P4SPR, P4SPR 2.0)</li>
            <li>Simple static-mode for demonstrations</li>
            <li>Easy-to-use software for training</li>
            <li>Compact footprint for teaching labs</li>
          </ul>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h4 class="font-semibold text-gray-900 mb-2 text-center">Advantages</h4>
          <ul class="list-disc ml-5 space-y-1">
            <li>Makes advanced SPR accessible</li>
            <li>Teaches real-time interaction analysis</li>
            <li>Affordable for proof-of-concept work</li>
            <li>Supports publishable, reproducible data</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- H2 Applications -->
    <h2 class="font-[MaxOT] text-2xl text-[#E63946] mt-2 mb-3 text-center">
      Applications of Surface Plasmon Resonance (SPR)
    </h2>
    <ul class="list-disc ml-5 space-y-1">
      <li><strong>Drug Discovery &amp; Development</strong> – Analyze drug–target kinetics and affinities</li>
      <li><strong>Protein Research</strong> – Study protein–protein and protein–ligand interactions</li>
      <li><strong>Diagnostics &amp; Biosensing</strong> – Detect biomarkers in clinical and biosensor studies</li>
      <li><strong>Environmental Testing</strong> – Monitor pollutants/analytes in complex matrices</li>
      <li><strong>Biomanufacturing &amp; QC</strong> – Ensure reproducibility and accuracy in biologics</li>
    </ul>
</div>`,
      faqs: [
        {
          question: "What is Surface Plasmon Resonance (SPR) and how does it work?",
          answer:
            "Surface Plasmon Resonance (SPR) is a label-free optical technique that measures biomolecular interactions in real time. It works by detecting refractive index changes on a sensor surface when molecules bind. This shift is converted into binding data such as kinetics (association/dissociation), affinity, and concentration. Unlike labeled assays, SPR provides direct, sensitive, and reproducible results, making it ideal for life sciences and diagnostics."
        },
        {
          question: "Why is SPR important in pharmaceutical drug discovery?",
          answer:
            "SPR is vital in drug discovery as it provides real-time data on drug–target binding. It reveals association/dissociation rates and affinity constants, helping identify strong and stable interactions. Unlike endpoint assays, it delivers complete kinetic profiles, reducing false positives. This accelerates hit-to-lead optimization, improves candidate selection, and reduces costs, making SPR a trusted tool in pharmaceutical R&D pipelines."
        },
        {
          question: "What industries benefit from SPR technology?",
          answer:
            "SPR benefits multiple industries. In pharma, it supports drug discovery and biologics development. In biotech, it enables protein and ligand interaction studies. In diagnostics, it validates biomarkers and develops biosensors. In environmental testing, SPR detects pollutants and toxins. In food safety, it monitors allergens and pathogens. Academic labs also use compact SPR systems for training and proof-of-concept experiments."
        },
        {
          question: "What are the differences between P4PRO, P4SPR, P4SPR 2.0, and P4PRO+?",
          answer:
            "The P4SPR is an affordable entry-level static system for teaching and proof-of-concept studies. P4SPR 2.0 adds better sensitivity for extended research. P4PRO, paired with the Affipump, is a 4-channel flow-based system for advanced biomolecular interaction analysis. The P4PRO+ is the most advanced, featuring dual-loop reference subtraction and high sensitivity, ideal for pharma R&D and complex kinetic studies."
        },
        {
          question: "How does SPR compare to traditional labeled techniques?",
          answer:
            "Traditional methods like ELISA require labels or dyes, which can alter molecules and only provide endpoint data. SPR, on the other hand, is label-free and captures full binding kinetics in real time, ensuring results are biologically relevant. It also detects interactions at very low concentrations (femtomolar level). This makes SPR more accurate, sensitive, and efficient, saving researchers time and ensuring reproducibility in experiments."
        },
        {
          question: "What are the key applications of SPR in diagnostics and biosensing?",
          answer:
            "SPR is widely used in diagnostics to detect disease biomarkers directly from samples like blood or saliva. Its high sensitivity enables early detection and validation of clinical markers. In biosensing, SPR helps develop and validate sensors for pathogens, toxins, and allergens. With real-time monitoring and multi-channel capability, it accelerates the design of reliable point-of-care diagnostic tools and next-generation biosensors."
        },
        {
          question: "How is SPR used in environmental monitoring and food safety?",
          answer:
            "SPR detects pollutants, toxins, and contaminants in water, soil, and other environmental samples with high sensitivity. In food safety, it monitors allergens, pathogens, and residues in agricultural and processed foods. Unlike traditional tests, SPR delivers rapid, label-free, and reproducible results in complex matrices. This makes it an essential technology for quality control, environmental safety, and regulatory compliance worldwide."
        },
        {
          question: "Why choose Inkarp Instruments for SPR solutions in India?",
          answer:
            "Inkarp Instruments is the official distributor of Affinité Instruments SPR systems in India. With decades of expertise, we provide end-to-end support including installation, calibration, training, preventive maintenance, and application assistance. Serving universities, research institutes, and pharma R&D, we ensure systems deliver maximum uptime and accuracy. Our commitment to service excellence makes us the trusted SPR partner in India."
        },
        {
          question: "What support services are available for SPR instruments in India?",
          answer:
            "Inkarp offers complete after-sales services for SPR systems, including installation, system setup, training, and calibration. Preventive maintenance ensures instruments remain accurate and reliable, while troubleshooting support minimizes downtime. With service centers and experts across India, Inkarp ensures labs achieve maximum performance and reproducibility. This full-service approach allows researchers to focus on science while we handle technical reliability."
        },
        {
          question: "How can SPR contribute to future research and innovation?",
          answer:
            "SPR is driving innovation across industries. In pharma, it supports biologics, vaccines, and antibody development. In biotech, it reveals protein stability and conformational changes. In diagnostics, SPR underpins next-gen biosensors and early disease detection. Environmental labs use it for rapid pollutant testing. With ongoing improvements in sensitivity and integration with AI, SPR will remain central to advancing life sciences and healthcare."
        }
      ]
    },

  },

};
