import Implen from '/src/assets/PrincipalLogos/RowFour/Implen.jpg';
import Avanjo from '/src/assets/PrincipalLogos/RowFour/Anvajo.svg';
import Nenovision from '/src/assets/PrincipalLogos/RowFive/Nenovision.svg';
import Reichert from '/src/assets/PrincipalLogos/RowFive/reichert.png';
import Nanosurf from '/src/assets/PrincipalLogos/RowFour/NanoSurf.svg';
import Affinite from '/src/assets/PrincipalLogos/RowSeven/Affinite.webp';
import Bwb from '/src/assets/PrincipalLogos/RowFour/BWB.png';
import Photon from '/src/assets/PrincipalLogos/RowFive/Photon.jpeg';

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

import ImgReichert4SPR from "/images/products/Reichert/reichert-4spr.jpg";
import ImgReichert2SPR from "/images/products/Reichert/reichert-2spr.jpg";

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

import ImgP4pro from "/images/products/Affinite/P4pro.avif"
import ImgP4spr from "/images/products/Affinite/P4SPR.avif"
import ImgP4proplus from "/images/products/Affinite/p4proplus.avif"
import ImgEzControl from "/images/products/Affinite/ezControlSoftware.avif"


import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";
import Banner3 from "/images/products/Banner/Banner3.jpg";


export const NanosurfProducts = {
  "nanophotometer-n120": {
    id: "nanophotometer-n120",
    name: "NanoPhotometer® N120",
    image: ImgN120,
    logo: Implen,
    bannerImg: Banner3,
    altText: "Implen",
    videoId: "",
    meta: {
      title: "Implen NanoPhotometer® N120 | Inkarp India",
      description:
        "12-channel microvolume spectrophotometer with 20 s full run and 200–900 nm scan range. Preprogrammed life-science apps, REST API, and 21 CFR Part 11 option.",
      keywords: [
        "Implen",
        "NanoPhotometer N120",
        "microvolume spectrophotometer",
        "DNA RNA protein quantification",
        "UV-Vis 200–900 nm",
        "21 CFR Part 11",
        "Inkarp India"
      ],
      altText: "NanoPhotometer N120 (12-channel, 200–900 nm)",
      internalLinks: ["nanophotometer", "od600"],
      externalLinks: ["https://www.implen.de/"]
    },
    description: `
      <section class="w-full bg-white">
  <div class="max-w-6xl mx-auto px-4 py-8">
    <div class="grid items-start gap-8 md:grid-cols-2">
      <!-- Left: Copy -->
      <div class="space-y-4 text-xl leading-relaxed md:text-lg ">
        <p class="text-[20px]">
          Inkarp Instruments, a trusted Implen partner, offers the NanoPhotometer® N120 in India — a cutting-edge spectrophotometer for laboratory and research applications.
        </p>

        <h3 class="text-[24px] font-[MaxOT] text-[#E63946] font-semibold">
          High Throughput Champion
        </h3>

        <p class="text-gray-800">
         | 12-Channel Microvolume Spectrophotometer
        </p>
         <p class="text-gray-800">
          | 20 seconds per full run
        </p>
         <p class="text-gray-800">
         | Scan Range 200–900
        </p>

      </div>

      <!-- Right: Image -->
      <div class="flex justify-center md:justify-end">
        <img
          src="/images/products/Implen/NanoPhotometer-N120-2.jpg"
          alt="NanoPhotometer N120 microvolume spectrophotometer"
          class="w-full max-w-md h-auto object-contain rounded-xl shadow-sm"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>

`,

    features: [
      {
        name: "Nucleic Acids Measurement",
        description: "Accurately analyze DNA, RNA, mRNA, and oligos with integrated QC ratios (260/280 and 260/230) for precise quality assessment."
      },
      {
        name: "Protein UV Analysis",
        description: "Perform protein UV measurements with reliable QC ratio (260/280) detection to ensure purity and consistency."
      },
      {
        name: "Fluorescent Dye-Labeled Samples",
        description: "Measure nucleic acids and proteins labeled with fluorescent dyes using absorbance for enhanced application versatility."
      },
      {
        name: "Contaminant Identification",
        description: "Detect potential contaminants during analysis, improving accuracy and reliability of sample data."
      },
      {
        name: "Life Science Applications",
        description: "Support for OD600 measurements, protein assays (Bradford, BCA, Biuret), and kinetics in a drop for comprehensive life science workflows."
      },
      {
        name: "UV-Vis Spectroscopy",
        description: "Perform wavelength scans with formula editor, wavescan, standard curve generation, concentration analysis, and absorbance ratio measurements."
      }
    ],

    advantages: [
      {
        name: "Time-Saving & Accuracy",
        description: "Saves valuable time in laboratory workflows while eliminating manual dilution errors, ensuring precise and consistent results."
      },
      {
        name: "Seamless LIMS Integration",
        description: "Effortlessly integrates into any Laboratory Information Management System (LIMS) for smooth data handling and process automation."
      },
      {
        name: "Flexible Data Access",
        description: "Provides flexible unit control with the ability to access and manage data from anywhere, enhancing operational efficiency."
      },
      {
        name: "Versatile Deployment",
        description: "Designed to be used in multiple environments, from glove boxes and under the hood setups to lab benches and field applications."
      },
      {
        name: "Regulatory Compliance",
        description: "Ensures full laboratory compliance with industry standards like GMP, GLP, and GxP, giving peace of mind to researchers and labs."
      },
      {
        name: "Expert Support",
        description: "Backed by expert knowledge and dedicated support, available whenever you need assistance to keep workflows running smoothly."
      }
    ],
    techSpecs: {
      BroadDetectionRange: "dsDNA: 2 – 8,000 ng/µl; BSA: 0.06 – 230 mg/ml",
      WebApplicationServer: "Built-in Web Application Server with REST API",
      OperationMode: "Standalone or Remote Operated (Windows, Mac, Android, iOS)",
      Portability: "Portable with Battery Option; Only 20 × 20 × 12 cm footprint",
      Compliance: "GMP, GLP, GxP Ready; 21 CFR Part 11 and IQOQ option",
      Support: "5-Star Customer Support; Live application support 24/5"
    }

  },
  "nanophotometer-np80": {
    id: "nanophotometer-np80",
    name: "NanoPhotometer® NP80",
    image: ImgNP80,
    bannerImg: Banner3,
    logo: Implen,
    altText: "Implen",
    videoId: "",

    meta: {
      title:
        "NanoPhotometer® NP80 – Microvolume & Cuvette Spectrophotometer | Inkarp India",
      description:
        "Implen NanoPhotometer® NP80: 0.3 µl starting volume, 200–900 nm scan range, microvolume + cuvette in one compact device. Distributed and serviced by Inkarp in India.",
      keywords: [
        "Implen NP80",
        "NanoPhotometer NP80",
        "microvolume spectrophotometer",
        "cuvette spectrophotometer",
        "DNA RNA protein quantification",
        "UV-Vis 200-900 nm",
        "Inkarp India"
      ],
      altText: "NanoPhotometer NP80 microvolume + cuvette",
      internalLinks: [],
      externalLinks: ["https://www.implen.de/"]
    },

    description: `
<section class="w-full bg-white">
  <div class="max-w-6xl mx-auto px-4 py-8">
    <div class="grid items-start gap-8 md:grid-cols-2">
      <!-- Left: Copy -->
      <div class="space-y-4 text-base leading-relaxed md:text-lg">
        <p class="text-[20px]">
          Inkarp Instruments, a trusted Implen partner, offers the NanoPhotometer® NP80 in India, a compact and versatile spectrophotometer for laboratory and research applications.
        </p>

        <h3 class="text-[24px] font-[MaxOT] text-[#E63946] font-semibold">
          Microvolume and Cuvette Functionality
        </h3>

        <p class="text-gray-800">| Starting at 0.3 µl</p>
        <p class="text-gray-800">| Scan Range 200–900 nm</p>
      </div>

      <!-- Right: Image -->
      <div class="flex justify-center md:justify-end">
        <img
          src="/images/products/Implen/np80_stand_alone.jpg"
          alt="Implen NanoPhotometer NP80"
          class="w-full max-w-md h-auto object-contain rounded-xl shadow-sm"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>
`,

    features: [
      {
        name: "Nucleic Acids (QC Ratios)",
        description: "Nucleic Acids (DNA, RNA, mRNA, Oligos, etc.) with QC Ratios (260/280 and 260/230)"
      },
      {
        name: "Protein UV (QC Ratio)",
        description: "Protein UV with QC Ratio (260/280)"
      },
      {
        name: "Fluorescent Dye-Labeled Samples",
        description: "Measure fluorescent dye-labeled Nucleic Acids and Proteins using absorbance"
      },
      {
        name: "Contaminant Identification",
        description: "Potential contaminant identification"
      },
      {
        name: "Further Life Science Applications",
        description: "Further Life Science applications: OD600, Protein Assays (Bradford, BCA, Biuret), Kinetics in a drop"
      },
      {
        name: "UV-Vis Spectroscopy",
        description: "UV-Vis Spectroscopy applications: Wavelength (including formula editor), Wavescan, Standard Curve, Concentration, Absorbance Ratio"
      }
    ],

    advantages: [
      {
        name: "Time-Saving",
        description: "Saves time and avoids manual dilution errors"
      },
      {
        name: "Pharma-Ready & Dynamic Range",
        description: "Ready for pharmaceutical applications and full dynamic range (e.g., OD600 readings)"
      },
      {
        name: "Zero Cost of Ownership",
        description: "Zero cost of ownership"
      },
      {
        name: "Flexible Access",
        description: "Flexible unit control and access to data from anywhere"
      },
      {
        name: "Versatile Deployment",
        description: "Ready to go into a glove box, under the hood, from lab bench to lab bench, or into the field"
      },
      {
        name: "Expert Knowledge",
        description: "Expert knowledge when you need it"
      },
      {
        name: "Compliance Peace of Mind",
        description: "Full laboratory compliance with a peace of mind"
      }
    ],

    techSpecs: {
      BroadDetectionRange: "dsDNA: 1 – 16,500 ng/µl; BSA: 0.03 – 478 mg/ml",
      BandwidthAndPhotometricRange: "Bandwidth better than 1.5 nm and full photometric range up to 2.6 A for cuvette readings",
      RobustDesign: "Robust instrument design without the need for routine calibration checks",
      OperationMode: "Standalone or Remote Operated (Windows, Mac, Android, and iOS)",
      Portability: "Portable with Battery Option; Only 20 × 20 × 12 cm footprint",
      Support: "5-Star Customer Support; Live application support 24/5",
      Compliance: "GMP, GLP, GxP Ready; 21 CFR Part 11 and IQOQ option*"
    }

  },
  "nanophotometer-n60-n50": {
    id: "nanophotometer-n60-n50",
    name: "NanoPhotometer® N60/N50",
    image: ImgN60N50,
    bannerImg: Banner3,
    logo: Implen,
    altText: "Implen",

    meta: {
      title: "NanoPhotometer® N60/N50 – Compact Microvolume Spectrophotometer | Inkarp India",
      description:
        "Implen NanoPhotometer® N60/N50: compact, affordable UV-Vis spectrophotometers for nucleic acids, protein assays, OD600, and general spectroscopy (200–900 nm). Distributed & serviced by Inkarp in India.",
      keywords: [
        "Implen N60",
        "Implen N50",
        "NanoPhotometer N60",
        "NanoPhotometer N50",
        "microvolume spectrophotometer",
        "UV-Vis 200-900 nm",
        "DNA RNA protein quantification",
        "Inkarp India"
      ],
      altText: "NanoPhotometer N60/N50",
      externalLinks: ["https://www.implen.de/"]
    },

    description: `
<section class="w-full bg-white">
  <div class="max-w-6xl mx-auto px-4 py-8">
    <div class="grid items-start gap-8 md:grid-cols-2">
      <!-- Left: Copy -->
      <div class="space-y-4 text-base leading-relaxed md:text-lg">
        <p class="text-[20px]">
          Inkarp Instruments, a trusted Implen partner, offers the NanoPhotometer® N60/N50 in India, compact and affordable spectrophotometers ideal for laboratory and research applications.
        </p>

        <h3 class="text-[24px] font-[MaxOT] text-[#E63946] font-semibold">
          Nucleic Acid & Protein UV-Assay Measurements, plus much more
        </h3>

        <p class="text-gray-800">| Starting from 0.3 µl</p>
        <p class="text-gray-800">| Scan Range 200–900 nm*</p>
      </div>

      <!-- Right: Image -->
      <div class="flex justify-center md:justify-end">
        <img
          src="/images/products/Implen/imple-n50-2.png"
          alt="Implen NanoPhotometer N60/N50"
          class="w-full max-w-md h-auto object-contain rounded-xl shadow-sm"
          loading="lazy"
        />
      </div>
    </div>
    <p class="text-xs text-gray-500 mt-4">*Option dependent &nbsp;&nbsp; **With appropriate mode/measurement setup</p>
  </div>
</section>
`,

    features: [
      {
        name: "Nucleic Acids (QC Ratios)",
        description: "Nucleic Acids (DNA, RNA, mRNA, Oligos, etc.) with QC Ratios (260/280 and 260/230)"
      },
      {
        name: "Protein UV (QC Ratio)",
        description: "Protein UV with QC Ratio (260/280)"
      },
      {
        name: "Fluorescent Dye-Labeled Samples",
        description: "Measure fluorescent dye-labeled Nucleic Acids and Proteins using absorbance"
      },
      {
        name: "Contaminant Identification",
        description: "Potential contaminant identification"
      },
      {
        name: "Further Life Science Applications",
        description: "Further Life Science applications: OD600, Protein Assays (Bradford, BCA, Biuret), Kinetics in a drop"
      },
      {
        name: "UV-Vis Spectroscopy",
        description: "UV-Vis Spectroscopy applications: Wavelength (including formula editor), Wavescan, Standard Curve, Concentration, Absorbance Ratio"
      }
    ],

    advantages: [
      {
        name: "Time-Saving",
        description: "Saves time and avoids manual dilution errors"
      },
      {
        name: "Improved Sample Homogeneity",
        description: "Improved sample homogeneity for more accurate readings"
      },
      {
        name: "Flexible Access",
        description: "Flexible unit control and access to data from anywhere"
      },
      {
        name: "Versatile Deployment",
        description: "Ready to go into a glove box, under the hood, from lab bench to lab bench, or into the field"
      },
      {
        name: "Expert Knowledge",
        description: "Expert knowledge when you need it"
      },
      {
        name: "Compliance Peace of Mind",
        description: "Full laboratory compliance with a peace of mind"
      }
    ],

    techSpecs: {
      BroadDetectionRange: "dsDNA: 1 – 16,500 ng/µl**; BSA: 0.03 – 478 mg/ml**",
      BuiltInVortex: "Built-in Vortex* with low vibration and low energy vortex",
      OperationMode: "Standalone or Remote Operated (Windows, Mac, Android, iOS)",
      Portability: "Portable with Battery Option*; Only 20 × 20 × 12 cm footprint",
      Support: "5-Star Customer Support; Live application support 24/5",
      Compliance: "GMP, GLP, GxP Ready; 21 CFR Part 11 and IQOQ option*"
    }

  },
  "nanophotometer-c40": {
    id: "nanophotometer-c40",
    name: "NanoPhotometer® C40",
    image: ImgC40,
    bannerImg: Banner3,
    logo: Implen,
    altText: "Implen",

    meta: {
      title:
        "NanoPhotometer® C40 – Temperature-Controlled Cuvette Spectrophotometer | Inkarp India",
      description:
        "Implen NanoPhotometer® C40: compact, temperature-controlled UV-Vis cuvette spectrophotometer for nucleic acid & protein quantification (200–900 nm). Distributed & serviced by Inkarp in India.",
      keywords: [
        "Implen C40",
        "NanoPhotometer C40",
        "cuvette spectrophotometer",
        "temperature controlled cuvette",
        "UV-Vis 200-900 nm",
        "DNA RNA protein quantification",
        "Inkarp India"
      ],
      altText: "NanoPhotometer C40",
      externalLinks: ["https://www.implen.de/"]
    },
    description: `
<section class="w-full bg-white">
  <div class="max-w-6xl mx-auto px-4 py-8">
    <div class="grid items-start gap-8 md:grid-cols-2">
      <!-- Left: Copy -->
      <div class="space-y-4 text-base leading-relaxed md:text-lg">
        <p class="text-[20px]">
          Inkarp Instruments, a trusted Implen partner, offers the NanoPhotometer® C40 in India, a cutting-edge, compact spectrophotometer for nucleic acid and protein quantification.
        </p>

        <h3 class="text-[24px] font-[MaxOT] text-[#E63946] font-semibold">
          Standard / Microvolume Cuvette Spectrophotometer
        </h3>

        <p class="text-gray-800">| Temperature Controlled</p>
        <p class="text-gray-800">| Scan Range 200–900 nm</p>
      </div>

      <!-- Right: Image -->
      <div class="flex justify-center md:justify-end">
        <img
          src="/images/products/Implen/c40-2.png"
          alt="Implen NanoPhotometer C40"
          class="w-full max-w-md h-auto object-contain rounded-xl shadow-sm"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>
`,

    features: [
      {
        name: "Nucleic Acids (QC Ratios)",
        description: "Nucleic Acids (DNA, RNA, mRNA, Oligos, etc.) with QC Ratios (260/280 and 260/230)"
      },
      {
        name: "Protein UV (QC Ratio)",
        description: "Protein UV with QC Ratio (260/280)"
      },
      {
        name: "Fluorescent Dye-Labeled Samples",
        description: "Measure fluorescent dye-labeled Nucleic Acids and Proteins using absorbance"
      },
      {
        name: "Contaminant Identification",
        description: "Potential contaminant identification"
      },
      {
        name: "Life Science Applications",
        description: "Further Life Science applications: OD600, Protein Assays (Bradford, BCA, Biuret), and Kinetics"
      },
      {
        name: "UV-Vis Spectroscopy",
        description: "UV-Vis Spectroscopy applications: Wavelength (including formula editor), Wavescan, Standard Curve, Concentration, and Absorbance Ratio"
      }
    ],

    advantages: [
      {
        name: "Universal Cuvette Compatibility",
        description: "No need for manufacturer-specific cuvettes, works with quartz, glass, or plastic cuvettes."
      },
      {
        name: "Pharma Ready",
        description: "Ready for pharmaceutical applications and regulatory compliance needs."
      },
      {
        name: "Flexible Data Access",
        description: "Provides flexible unit control and access to data from anywhere."
      },
      {
        name: "Versatile Deployment",
        description: "Designed for glove boxes, under the hood, lab-to-lab, or even field use."
      },
      {
        name: "Effortless LIMS Integration",
        description: "Seamlessly integrates into any Laboratory Information Management System (LIMS)."
      },
      {
        name: "Regulatory Compliance",
        description: "Full laboratory compliance with a peace of mind."
      },
      {
        name: "Expert Support",
        description: "Access expert knowledge whenever you need it."
      }
    ],

    techSpecs: {
      CuvetteCompatibility: "Optimized for All Standard & Micro Cuvettes – Quartz, glass, or plastic (z-height of 8.5 mm)",
      Bandwidth: "Bandwidth better than 1.5 nm",
      OperationMode: "Standalone or Remote Operated (Windows, Mac, Android, iOS)",
      Portability: "Portable with Battery Option; Only 20 × 20 × 12 cm footprint",
      WebApplicationServer: "Built-in Web Application Server with REST API",
      Compliance: "GMP, GLP, GxP Ready; 21 CFR Part 11 and IQOQ option",
      Support: "5-Star Customer Support; Live, application support 24/5"
    }

  },
  "nanophotometer-n30": {
    id: "nanophotometer-n30",
    name: "NanoPhotometer® N30-Touch",
    image: ImgC30,
    bannerImg: Banner3,
    logo: Implen,
    altText: "Implen",
    videoId: "",
    meta: {
      title: "NanoPhotometer® N30-Touch | Implen | Inkarp India",
      description:
        "Microvolume UV/Vis spectrophotometer for DNA/RNA/protein/OD600 with 0.3 µl samples, True Path Technology™, fast full scans (2.5–4 s), and optional PERFORMANCE/APPLICATIONS/CONNECTIVITY packages.",
      keywords: [
        "Implen N30",
        "NanoPhotometer N30-Touch",
        "microvolume spectrophotometer",
        "DNA RNA protein quantification",
        "True Path Technology",
        "Inkarp India",
      ],
      altText: "NanoPhotometer N30-Touch",
      internalLinks: [],
      externalLinks: ["https://www.implen.de/"],
    },

    description: `
<style>
  /* ---- NanoPhotometer N30 responsiveness helpers (no markup changes required) ---- */
  .np-content img, .np-content video { max-width: 100%; height: auto; display: block; }
  .np-content table { width: 100%; border-collapse: collapse; }
  .np-content th, .np-content td { word-break: break-word; hyphens: auto; }

  /* Smooth horizontal scroll for wide tables on mobile */
  .np-content .w-full.overflow-x-auto,
  .np-content .min-w-\\[720px\\],
  .np-content .min-w-\\[640px\\] {
    -webkit-overflow-scrolling: touch;
  }

  /* Prevent layout jump on very small screens */
  @media (max-width: 640px) {
    .np-content .px-6 { padding-left: 16px; padding-right: 16px; }
    .np-content .py-4 { padding-top: 12px; padding-bottom: 12px; }
    .np-content .py-3 { padding-top: 10px; padding-bottom: 10px; }
    .np-content .text-xl { font-size: 1.125rem; line-height: 1.5rem; }
    .np-content .text-lg { font-size: 1rem; line-height: 1.5rem; }
    .np-content .grid { gap: 14px; }
    /* Ensure complex spec tables don’t squish */
    .np-content .w-full.overflow-x-auto > table,
    .np-content .min-w-\\[720px\\],
    .np-content .min-w-\\[680px\\] {
      min-width: 640px;
    }
  }

  /* Improve medium tablet readability */
  @media (min-width: 641px) and (max-width: 768px) {
    .np-content .text-xl { font-size: 1.2rem; }
    .np-content .text-lg { font-size: 1.05rem; }
  }
</style>

<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 np-content">

  <p class="text-[18px] mb-5">
    The <b class="text-[#E63946] font-[MaxOT]">NanoPhotometer® N30-Touch</b> is a cutting-edge UV/Vis spectrophotometer designed for precise DNA, RNA, protein, and cell density analysis using microvolume samples. Known for its reliability, speed, and accuracy, this instrument is ideal for laboratories across research, clinical, pharmaceutical, and academic sectors.
     With flexible upgrade options and recalibration-free performance, the N30-Touch ensures long-term scalability without requiring frequent hardware replacements.
  </p>
  <section class="py-10 sm:py-12 lg:py-16">
  <header class="mb-6">
    <h2 class="text-xl  text-[#E63946] tracking-tight">NanoPhotometer® N30-Touch — Specification Comparison</h2>
  </header>

  <!-- Desktop table -->
  <div class="hidden md:block">
    <div class="rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden bg-white">
      <div class="bg-neutral-50 px-6 py-4 border-b">
        <div class="grid grid-cols-3 gap-4 font-medium">
          <div>Specification</div>
          <div>Standard N30-Touch</div>
          <div class="flex items-center gap-2">
            <span>With PERFORMANCE Package</span>
            <span class="inline-flex items-center rounded-full border px-2 py-0.5 text-xs">Boosted</span>
          </div>
        </div>
      </div>
      <div role="table" class="divide-y">
        <div role="row" class="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-neutral-50/70 transition">
          <div class="font-medium">dsDNA Detection Range</div>
          <div>5 – 1,500 ng/µl</div>
          <div>1 – 16,500 ng/µl</div>
        </div>
        <div role="row" class="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-neutral-50/70 transition">
          <div class="font-medium">BSA Detection Range</div>
          <div>0.15 – 44 mg/ml</div>
          <div>0.03 – 478 mg/ml</div>
        </div>
        <div role="row" class="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-neutral-50/70 transition">
          <div class="font-medium">Wavelength Range</div>
          <div>200 – 650 nm</div>
          <div>200 – 900 nm</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile cards -->
  <div class="md:hidden space-y-4">
    <div class="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-4">
      <div class="text-sm text-neutral-500">Specification</div>
      <div class="font-semibold text-lg">dsDNA Detection Range</div>
      <div class="mt-3 grid grid-cols-1 gap-3">
        <div class="rounded-xl border p-3">
          <div class="text-xs uppercase tracking-wide text-neutral-500">Standard N30-Touch</div>
          <div class="font-medium">5 – 1,500 ng/µl</div>
        </div>
        <div class="rounded-xl border p-3">
          <div class="text-xs uppercase tracking-wide text-neutral-500 flex items-center gap-2">
            With PERFORMANCE Package
            <span class="inline-flex items-center rounded-full border px-2 py-0.5 text-[10px]">Boosted</span>
          </div>
          <div class="font-medium">1 – 16,500 ng/µl</div>
        </div>
      </div>
    </div>

    <div class="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-4">
      <div class="text-sm text-neutral-500">Specification</div>
      <div class="font-semibold text-lg">BSA Detection Range</div>
      <div class="mt-3 grid grid-cols-1 gap-3">
        <div class="rounded-xl border p-3">
          <div class="text-xs uppercase tracking-wide text-neutral-500">Standard N30-Touch</div>
          <div class="font-medium">0.15 – 44 mg/ml</div>
        </div>
        <div class="rounded-xl border p-3">
          <div class="text-xs uppercase tracking-wide text-neutral-500 flex items-center gap-2">
            With PERFORMANCE Package
            <span class="inline-flex items-center rounded-full border px-2 py-0.5 text-[10px]">Boosted</span>
          </div>
          <div class="font-medium">0.03 – 478 mg/ml</div>
        </div>
      </div>
    </div>

    <div class="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-4">
      <div class="text-sm text-neutral-500">Specification</div>
      <div class="font-semibold text-lg">Wavelength Range</div>
      <div class="mt-3 grid grid-cols-1 gap-3">
        <div class="rounded-xl border p-3">
          <div class="text-xs uppercase tracking-wide text-neutral-500">Standard N30-Touch</div>
          <div class="font-medium">200 – 650 nm</div>
        </div>
        <div class="rounded-xl border p-3">
          <div class="text-xs uppercase tracking-wide text-neutral-500 flex items-center gap-2">
            With PERFORMANCE Package
            <span class="inline-flex items-center rounded-full border px-2 py-0.5 text-[10px]">Boosted</span>
          </div>
          <div class="font-medium">200 – 900 nm</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Applications Package -->
  <div class="mt-10 relative overflow-hidden rounded-2xl ring-1 ring-black/5 bg-white">
    <div class="absolute inset-y-0 left-0 w-1.5 bg-[#BE0010]" aria-hidden></div>
    <div class="p-6 sm:p-8">
      <div class="flex flex-wrap items-start gap-3">
        <span class="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xl font-medium">APPLICATIONS Package</span>
     
      </div>
      <h3 class="mt-3 text-xl text-[#E63946]">Unlock Full Analytical Power with the APPLICATIONS Package</h3>
      <p class="mt-3 leading-relaxed">
        Unlock the full analytical power of your NanoPhotometer® N30-Touch with the <b>APPLICATIONS Package</b>—a versatile software upgrade designed to support a wide range of laboratory workflows with precision and ease. Whether you're working with nucleic acids, proteins, or microbial cultures, this package empowers researchers with intuitive tools and advanced analytical features.
      </p>
      
    </div>
  </div>
</section>
<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
  <!-- Included Applications -->
  <div>
    <h3 class="text-xl font-[MaxOT] text-[#E63946] mb-6">Included Applications</h3>
    <div class="grid sm:grid-cols-2 gap-6">
      <div class="rounded-2xl border shadow-sm ring-1 ring-black/5 bg-white p-6 hover:shadow-md transition">
        <h4 class="text-lg font-semibold mb-2">Protein Assays</h4>
        <p class="text-sm leading-relaxed">
          Perform colorimetric protein quantification using preprogrammed
          methods such as <strong>BCA, Bradford, and Lowry™</strong>.
        </p>
      </div>
      <div class="rounded-2xl border shadow-sm ring-1 ring-black/5 bg-white p-6 hover:shadow-md transition">
        <h4 class="text-lg font-semibold mb-2">Kinetics</h4>
        <p class="text-sm leading-relaxed">
          Measure real-time changes in absorbance at fixed wavelengths to
          study enzymatic reactions and sample behavior over time.
        </p>
      </div>
      <div class="rounded-2xl border shadow-sm ring-1 ring-black/5 bg-white p-6 hover:shadow-md transition">
        <h4 class="text-lg font-semibold mb-2">OD600 Cell Density</h4>
        <p class="text-sm leading-relaxed">
          Estimate bacterial or cell concentrations at 600 nm with built-in
          calculations converting OD values to cells/ml.
        </p>
      </div>
      <div class="rounded-2xl border shadow-sm ring-1 ring-black/5 bg-white p-6 hover:shadow-md transition">
        <h4 class="text-lg font-semibold mb-2">Wavescan</h4>
        <p class="text-sm leading-relaxed">
          Capture the full absorbance spectrum (200–650 nm, expandable to 900 nm*)
          and automatically identify peak heights and positions.
        </p>
      </div>
      <div class="rounded-2xl border shadow-sm ring-1 ring-black/5 bg-white p-6 hover:shadow-md transition">
        <h4 class="text-lg font-semibold mb-2">Standard Curve</h4>
        <p class="text-sm leading-relaxed">
          Generate multi-point calibration curves (200–650 nm, up to 900 nm*) for
          accurate quantification of unknown samples.
        </p>
      </div>
    </div>
  </div>

  <!-- Additional Smart Features -->
  <div>
    <h3 class="text-xl font-[MaxOT] text-[#E63946] mb-6">Additional Smart Features</h3>
    <div class="grid sm:grid-cols-2 gap-6">
      <div class="rounded-2xl border shadow-sm ring-1 ring-black/5 bg-white p-6 hover:shadow-md transition">
        <h4 class="text-lg font-semibold mb-2">Dye Label Detection</h4>
        <p class="text-sm leading-relaxed">
          Analyze dye-conjugated samples with high sensitivity.
        </p>
      </div>
      <div class="rounded-2xl border shadow-sm ring-1 ring-black/5 bg-white p-6 hover:shadow-md transition">
        <h4 class="text-lg font-semibold mb-2">Sample Control™ Technology</h4>
        <p class="text-sm leading-relaxed">
          Automatically detects impurities, turbidity, bubbles, or lint contamination—
          ensuring reliable data quality.
        </p>
      </div>
    </div>
  </div>

  <!-- Connectivity Package -->
  <div>
    <h2 class="text-2xl font-[MaxoT] text-[#E63946] mb-4">
      CONNECTIVITY Package – Smarter Control and Seamless Data Management
    </h2>
    <p class="leading-relaxed mb-3">
      Take full control of your workflows with the <b>CONNECTIVITY Package</b>
      for the NanoPhotometer® N30-Touch. This upgrade enhances your device with
      advanced data sharing, remote access, and system integration capabilities.
    </p>
    <p class="leading-relaxed">
      As the authorized <b>NanoPhotometer® N30 distributor and service provider in India,</b>
      Inkarp provides complete upgrade solutions and support for maximizing connectivity.
    </p>

    <h3 class="text-xl font-[MaxOT] text-[#E63946] mt-8 mb-4">Key Features</h3>
    <div class="grid sm:grid-cols-2 gap-6">
      <div class="rounded-2xl border shadow-sm ring-1 ring-black/5 bg-white p-6">
        <h4 class="text-lg font-semibold mb-2">Multi-Port Connectivity</h4>
        <p class="text-sm leading-relaxed">Wi-Fi, USB A/B, HDMI, and LAN ports.</p>
      </div>
      <div class="rounded-2xl border shadow-sm ring-1 ring-black/5 bg-white p-6">
        <h4 class="text-lg font-semibold mb-2">Remote Device Access</h4>
        <p class="text-sm leading-relaxed">
          Operate from PC, tablet, or smartphone across the lab.
        </p>
      </div>
      <div class="rounded-2xl border shadow-sm ring-1 ring-black/5 bg-white p-6">
        <h4 class="text-lg font-semibold mb-2">Network Printing</h4>
        <p class="text-sm leading-relaxed">
          Print results directly from the instrument via network printers.
        </p>
      </div>
      <div class="rounded-2xl border shadow-sm ring-1 ring-black/5 bg-white p-6">
        <h4 class="text-lg font-semibold mb-2">LIMS Integration</h4>
        <p class="text-sm leading-relaxed">
          Integrate with your lab’s LIMS using REST API and Push Service.
        </p>
      </div>
      <div class="rounded-2xl border shadow-sm ring-1 ring-black/5 bg-white p-6">
        <h4 class="text-lg font-semibold mb-2">Enhanced Storage</h4>
        <p class="text-sm leading-relaxed">64 GB onboard storage for results and protocols.</p>
      </div>
    </div>

    <p class="mt-6 font-[MaxoT]">
      With the CONNECTIVITY Package, your NanoPhotometer® N30-Touch becomes a
      <b> future-proof, fully integrated lab workstation</b>—backed by Inkarp’s
      trusted support across India.
    </p>
  </div>

  <!-- Technical Specifications -->
  <div>
    <h3 class="text-xl font-[MaxOT] text-[#E63946] mb-6">Technical Specifications</h3>

    <!-- NanoVolume Performance -->
    <div class="overflow-hidden rounded-2xl border ring-1 ring-black/5 bg-white mb-8">
      <div class="bg-neutral-50 px-6 py-3 font-medium border-b">
        NanoVolume Performance
      </div>
      <div class="w-full overflow-x-auto">
      <table class="w-full text-sm">
        <thead class="bg-neutral-100">
          <tr>
            <td class="px-6 py-2 font-medium">Specification</td>
            <td class="px-6 py-2 font-medium">Value</td>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr><td class="px-6 py-2">Detection Range (dsDNA, BSA)</td><td class="px-6 py-2">5 – 1500 ng/µl, 0.15 – 44 mg/ml</td></tr>
          <tr><td class="px-6 py-2">Detection Range (PERFORMANCE)</td><td class="px-6 py-2">1 – 16,500 ng/µl, 0.03 – 478 mg/ml</td></tr>
          <tr><td class="px-6 py-2">Minimum Sample Volume</td><td class="px-6 py-2">0.3 µl</td></tr>
          <tr><td class="px-6 py-2">Photometric Range (10 mm eq.)</td><td class="px-6 py-2">0.1 – 30 A</td></tr>
          <tr><td class="px-6 py-2">Photometric Range (PERFORMANCE)</td><td class="px-6 py-2">0.02 – 330 A</td></tr>
          <tr><td class="px-6 py-2">Path Length</td><td class="px-6 py-2">0.67 and 0.07 mm</td></tr>
          <tr><td class="px-6 py-2">Dilution Factor</td><td class="px-6 py-2">15 and 140</td></tr>
        </tbody>
      </table>
      </div>
    </div>

    <!-- Optical Specifications -->
    <div class="overflow-hidden rounded-2xl border ring-1 ring-black/5 bg-white">
      <div class="bg-neutral-50 px-6 py-3 font-medium border-b">
        Optical Specifications
      </div>
      <div class="w-full overflow-x-auto">
      <table class="w-full text-sm">
        <thead class="bg-neutral-100">
          <tr>
            <td class="px-6 py-2 font-medium">Specification</td>
            <td class="px-6 py-2 font-medium">Value</td>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr><td class="px-6 py-2">Wavelength Scan Range</td><td class="px-6 py-2">200 – 650 nm</td></tr>
          <tr><td class="px-6 py-2">Wavelength Scan Range (PERFORMANCE)</td><td class="px-6 py-2">200 – 900 nm</td></tr>
          <tr><td class="px-6 py-2">Measure Time (Full Scan)</td><td class="px-6 py-2">2.5 – 4.0 sec</td></tr>
          <tr><td class="px-6 py-2">Wavelength Reproducibility</td><td class="px-6 py-2">± 0.2 nm</td></tr>
          <tr><td class="px-6 py-2">Wavelength Accuracy</td><td class="px-6 py-2">± 0.75 nm</td></tr>
          <tr><td class="px-6 py-2">Bandwidth</td><td class="px-6 py-2">&lt; 1.5 nm</td></tr>
          <tr><td class="px-6 py-2">Stray Light</td><td class="px-6 py-2">&lt; 0.5% @ 240 nm (NaI)</td></tr>
          <tr><td class="px-6 py-2">Absorbance Reproducibility</td><td class="px-6 py-2">&lt; 0.002 A @ 0.5 A @ 280 nm; CV &lt; 1%</td></tr>
          <tr><td class="px-6 py-2">Absorbance Accuracy</td><td class="px-6 py-2">&lt; 1.75% @ 0.7 A @ 280 nm</td></tr>
          <tr><td class="px-6 py-2">Optical Arrangement</td><td class="px-6 py-2">1x 4096 CMOS Array</td></tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
</section>
<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

  <!-- ========== TECH SPECS: LAMP ========== -->
  <div>
    <h4 class="text-lg font-[MaxOT] text-[#E63946] mb-4">Lamp</h4>
    <div class="overflow-hidden rounded-2xl border bg-white ring-1 ring-black/5">
      <div class="bg-neutral-50 px-6 py-3 font-medium border-b">Lamp Specifications</div>
      <div class="w-full overflow-x-auto">
      <table class="w-full text-sm">
        <thead class="bg-neutral-100">
          <tr>
            <td class="px-6 py-2 font-medium w-[45%]">Specification</td>
            <td class="px-6 py-2 font-medium">Value</td>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr><td class="px-6 py-3">Lamp</td><td class="px-6 py-3">Xenon flash lamp</td></tr>
          <tr><td class="px-6 py-3">Lifetime</td><td class="px-6 py-3">10⁸ flashes, up to 10 years</td></tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>

  <!-- ========== TECH SPECS: PROCESSING & COMPATIBILITY ========== -->
  <div>
    <h4 class="text-lg font-[MaxOT] text-[#E63946] mb-4">Processing Power &amp; Compatibility</h4>
    <div class="overflow-hidden rounded-2xl border bg-white ring-1 ring-black/5">
      <div class="bg-neutral-50 px-6 py-3 font-medium border-b">System &amp; Control</div>
      <div class="w-full overflow-x-auto">
      <table class="w-full text-sm">
        <thead class="bg-neutral-100">
          <tr>
            <td class="px-6 py-2 font-medium w-[45%]">Specification</td>
            <td class="px-6 py-2 font-medium">Value</td>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr><td class="px-6 py-3">Operating System</td><td class="px-6 py-3">Linux-based NPOS</td></tr>
          <tr><td class="px-6 py-3">Onboard Processor</td><td class="px-6 py-3">Intel Celeron dual core 2.4 GHz</td></tr>
          <tr><td class="px-6 py-3">Internal Data Storage</td><td class="px-6 py-3">CONNECTIVITY Package: 64 GB</td></tr>
          <tr><td class="px-6 py-3">Control Options</td><td class="px-6 py-3">Onboard touchscreen, PC/Tablet/Smartphone*</td></tr>
          <tr><td class="px-6 py-3">Software Compatibility</td><td class="px-6 py-3">Windows 8/10/11 (32 &amp; 64-bit), OS X (Intel &amp; Apple M1), iOS, Android</td></tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>

  <!-- ========== TECH SPECS: GENERAL ========== -->
  <div>
    <h4 class="text-lg font-[MaxOT] text-[#E63946] mb-4">General Specifications</h4>
    <div class="overflow-hidden rounded-2xl border bg-white ring-1 ring-black/5">
      <div class="bg-neutral-50 px-6 py-3 font-medium border-b">Instrument Details</div>
      <div class="w-full overflow-x-auto">
      <table class="w-full text-sm">
        <thead class="bg-neutral-100">
          <tr>
            <td class="px-6 py-2 font-medium w-[45%]">Specification</td>
            <td class="px-6 py-2 font-medium">Value</td>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr><td class="px-6 py-3">Main Body Size</td><td class="px-6 py-3">200 x 200 x 120 mm</td></tr>
          <tr><td class="px-6 py-3">Weight</td><td class="px-6 py-3">3.8 – 5.2 kg depending on configuration</td></tr>
          <tr><td class="px-6 py-3">Operating Voltage</td><td class="px-6 py-3">90 – 250 V ±10%, 50/60 Hz, 90 W, 19 VDC</td></tr>
          <tr><td class="px-6 py-3">Display</td><td class="px-6 py-3">1024 x 600 pixels, glove-compatible touchscreen</td></tr>
          <tr><td class="px-6 py-3">Certification</td><td class="px-6 py-3">CE, IEC 61010-1:2012, EN 61326-1:2013</td></tr>
          <tr><td class="px-6 py-3">Additional Data Input</td><td class="px-6 py-3">Mouse &amp; keyboard options</td></tr>
          <tr><td class="px-6 py-3">Security</td><td class="px-6 py-3">Slot for Kensington lock</td></tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>

  <!-- ========== ORDERING INFO ========== -->
  <div>
    <h4 class="text-lg font-[MaxOT] text-[#E63946] mb-4">Ordering Information</h4>
    <div class="overflow-hidden rounded-2xl border bg-white ring-1 ring-black/5">
      <div class="bg-neutral-50 px-6 py-3 font-medium border-b">Articles</div>
      <div class="w-full overflow-x-auto">
      <table class="w-full text-sm">
        <thead class="bg-neutral-100">
          <tr>
            <td class="px-6 py-2 font-medium w-[28%]">Article Number</td>
            <td class="px-6 py-2 font-medium">Product Description</td>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr><td class="px-6 py-3">N30-Touch</td><td class="px-6 py-3">Implen NanoPhotometer® N30-Touch UV/Vis Spectrophotometer</td></tr>
          <tr><td class="px-6 py-3">UP-N30-PER</td><td class="px-6 py-3">Performance Upgrade Package for N30-Touch</td></tr>
          <tr><td class="px-6 py-3">UP-N30-APP</td><td class="px-6 py-3">Applications Upgrade Package for N30-Touch</td></tr>
          <tr><td class="px-6 py-3">UP-N30-CON</td><td class="px-6 py-3">Connectivity Upgrade Package for N30-Touch</td></tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>

  <!-- ========== VALUE PROP / COPY ========== -->
  <div class="space-y-6">
    <h2 class="text-xl font-semibold font-[MaxOT] text-[#E63946] leading-8">NanoPhotometer® N30-Touch – Trusted Microvolume Spectrophotometry for Modern Labs</h2>
    <p class="leading-relaxed text-[18px]">
      The NanoPhotometer® N30-Touch is a high-performance microvolume UV/Vis spectrophotometer designed to deliver
      unmatched precision, reliability, and speed in nucleic acid, protein, and cell density quantification. With over
      <strong>10,000 units installed worldwide</strong> and cited in more than <strong>15,000 peer-reviewed publications</strong>,
      this German-engineered system sets the global standard for microvolume analysis.
    </p>
    <p class="leading-relaxed">
      As an authorized NanoPhotometer® N30 distributor and service provider in India, Inkarp ensures seamless access,
      installation, and support for this innovative technology.
    </p>

    <h2 class="text-xl font-semibold font-[MaxOT] text-[#E63946] leading-8">Why Choose the NanoPhotometer® N30-Touch?</h2>

    <div class="grid sm:grid-cols-2 gap-6">
      <div class="rounded-2xl border bg-white p-6 ring-1 ring-black/5">
        <h3 class="text-lg font-semibold mb-2">Trusted Technology</h3>
        <p class="text-sm leading-relaxed">
          Backed by global adoption across leading <strong>biotech, pharma, academic, and clinical labs</strong>, the
          NanoPhotometer® series is a proven choice for consistent, reproducible results in life science applications.
        </p>
      </div>
      <div class="rounded-2xl border bg-white p-6 ring-1 ring-black/5">
        <h3 class="text-lg font-semibold mb-2">High-Quality German Engineering</h3>
        <p class="text-sm leading-relaxed">
          Built with precision in Germany, the N30-Touch offers durable construction, seamless operation, and long-term
          performance with minimal maintenance—ideal for high-throughput labs.
        </p>
      </div>
      <div class="rounded-2xl border bg-white p-6 ring-1 ring-black/5">
        <h3 class="text-lg font-semibold mb-2">Future-Proof Investment</h3>
        <p class="text-sm leading-relaxed">
          The N30-Touch supports modular upgrades through optional <strong>PERFORMANCE, APPLICATIONS, and CONNECTIVITY</strong>
          packages—letting you expand capabilities as your lab’s needs evolve.
        </p>
      </div>
      <div class="rounded-2xl border bg-white p-6 ring-1 ring-black/5">
        <h3 class="text-lg font-semibold mb-2">Recalibration-Free Operation</h3>
        <p class="text-sm leading-relaxed">
          <strong>Sealed optics</strong> and fixed pathlengths eliminate recalibration downtime and costs. Its
          <strong> scratch-resistant quartz surfaces</strong> are easy to clean and maintenance-free.
        </p>
      </div>
      <div class="rounded-2xl border bg-white p-6 ring-1 ring-black/5">
        <h3 class="text-lg font-semibold mb-2">Instant Results</h3>
        <p class="text-sm leading-relaxed">
          No warm-up required—just power on and begin. Achieve <strong>full-spectrum scans (200–650 nm, expandable to 900 nm)
          in 2.5–4 seconds</strong>. Auto Sample Lid enables fast placement with automated pathlength detection and historical tracking.
        </p>
      </div>
      <div class="rounded-2xl border bg-white p-6 ring-1 ring-black/5">
        <h3 class="text-lg font-semibold mb-2">Unmatched Accuracy</h3>
        <p class="text-sm leading-relaxed">
          Patented <strong>Sample Compression Technology™</strong> ensures lifetime accuracy with stable pathlengths that
          eliminate variability from evaporation and surface tension.
        </p>
      </div>
      <div class="rounded-2xl border bg-white p-6 ring-1 ring-black/5">
        <h3 class="text-lg font-semibold mb-2">Easy-to-Use Interface</h3>
        <p class="text-sm leading-relaxed">
          Built on the <strong>NPOS Operating System</strong>, the touchscreen interface offers intuitive navigation with secure
          onboard software—no external PC required.
        </p>
      </div>
      <div class="rounded-2xl border bg-white p-6 ring-1 ring-black/5">
        <h3 class="text-lg font-semibold mb-2">Convenient Data Management</h3>
        <p class="text-sm leading-relaxed">
          Export results in <strong>PDF, Excel, or Implen IDS</strong> directly to USB. Stay organized with built-in
          sample history and file storage.
        </p>
      </div>
    </div>

   
  </div>

  <!-- ========== TECHNOLOGIES ========== -->
  <div class="space-y-8 ">
 
    <h2 class="text-xl font-semibold font-[MaxOT] text-[#E63946] text-center">Precision Technologies Behind the NanoPhotometer® N30-Touch</h2>
 <div class="grid sm:grid-cols-2 gap-6 bg-[#F5F5F5] p-6 rounded-2xl">
    <div>
      <h3 class="text-lg font-[MaxOT] text-[#E63946] mb-2">Sample Compression Technology™</h3>
      <p class="leading-relaxed">
        The <strong>NanoPhotometer® N30-Touch</strong> is built with innovative <strong>Sample Compression Technology™</strong>,
        delivering highly accurate results even with ultra-low sample volumes.
      </p>
      <ul class="mt-3 space-y-2 list-decimal list-inside">
        <li>Forms a capillary film between <strong>scratch-resistant, metal-free quartz surfaces</strong></li>
        <li>Precise measurements with as little as <strong>0.3 µl</strong></li>
        <li><strong>No reliance on surface tension</strong> for stable readings</li>
        <li>Creates a <strong>sealed environment</strong> preventing evaporation</li>
        <li>Compatible with <strong>organic solvents, detergent buffers</strong>, and sensitive protein assays</li>
      </ul>
      <p class="mt-3 leading-relaxed">This ensures <strong>repeatable, high-quality readings</strong>, even in demanding applications.</p>
    </div>

    <div>
      <h2 class="text-xl font-[MaxOT] text-[#E63946]">True Path Technology™ – Recalibration-Free Accuracy for Life</h2>
      <p class="mt-2 leading-relaxed">With <strong>True Path Technology™</strong>, the N30-Touch guarantees long-term reliability:</p>
      <ul class="mt-3 space-y-2 list-decimal list-inside">
        <li><strong>Sealed optics &amp; fixed anchor points</strong> maintain pathlengths</li>
        <li>Prevents drift over time; no performance degradation</li>
        <li><strong>Recalibration-free for life</strong>, saving service cycles</li>
        <li>Backed by Implen’s <strong>lifetime accuracy guarantee</strong></li>
      </ul>
      <p class="mt-3 leading-relaxed">A <b>maintenance-free, lab-ready solution</b> for long-term use.</p>
    </div>
    </div>
  </div>

  <!-- ========== EXTENSION PACKAGES OVERVIEW ========== -->
  <div class="space-y-4">
    <h2 class="text-xl font-semibold font-[MaxOT] text-[#E63946]">NanoPhotometer® N30-Touch Extension Packages – Scalable &amp; Cost-Effective</h2>
    <p class="leading-relaxed">
      The <strong>NanoPhotometer® N30-Touch</strong> offers flexible <strong>extension packages</strong> designed to grow with your research:
    </p>
    <ul class="grid sm:grid-cols-3 gap-4">
      <li class="rounded-xl border bg-white p-4 ring-1 ring-black/5">
        <h3 class="font-medium"><strong>PERFORMANCE Package</strong></h3>
        <p class="text-sm mt-1">Expand detection range and scan up to 900 nm</p>
      </li>
      <li class="rounded-xl border bg-white p-4 ring-1 ring-black/5">
        <h3 class="font-medium"><strong>APPLICATIONS Package</strong></h3>
        <p class="text-sm mt-1">Unlock advanced analysis (protein assays, kinetics, OD600, etc.)</p>
      </li>
      <li class="rounded-xl border bg-white p-4 ring-1 ring-black/5">
        <h3 class="font-medium"><strong>CONNECTIVITY Package</strong></h3>
        <p class="text-sm mt-1">Enable Wi-Fi, remote control, LIMS integration, storage</p>
      </li>
    </ul>
    <p class="mt-2 leading-relaxed">Upgrade anytime to match your workflow and budget.</p>
  </div>

  <!-- ========== FEATURE MATRIX (N30 vs PACKAGES) ========== -->
  <div>
    <div class="overflow-hidden rounded-2xl border bg-white ring-1 ring-black/5">
      <div class="bg-neutral-50 px-6 py-3 font-medium border-b">Feature Matrix</div>
      <div class="w-full overflow-auto">
        <table class="min-w-[720px] w-full text-sm">
          <thead class="bg-neutral-100">
            <tr>
              <td class="px-4 py-2 font-medium w-[30%]">Feature</td>
              <td class="px-4 py-2 font-medium">N30-Touch</td>
              <td class="px-4 py-2 font-medium">PERFORMANCE</td>
              <td class="px-4 py-2 font-medium">APPLICATIONS</td>
              <td class="px-4 py-2 font-medium">CONNECTIVITY</td>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr><td class="px-4 py-3">Sample Volume</td><td class="px-4 py-3">0.3 – 2 µl</td><td></td><td></td><td></td></tr>
            <tr><td class="px-4 py-3">Bandwidth</td><td class="px-4 py-3">&lt; 1.5 nm</td><td></td><td></td><td></td></tr>
            <tr><td class="px-4 py-3">Absorbance Accuracy</td><td class="px-4 py-3">&lt; 0.002 Abs</td><td></td><td></td><td></td></tr>
            <tr><td class="px-4 py-3">Wavelength Accuracy</td><td class="px-4 py-3">± 0.75 nm</td><td></td><td></td><td></td></tr>
            <tr><td class="px-4 py-3">Optical Arrangement</td><td class="px-4 py-3">1x 4096 CMOS Array</td><td></td><td></td><td></td></tr>
            <tr><td class="px-4 py-3">Recalibration Free</td><td class="px-4 py-3">&check;</td><td></td><td></td><td></td></tr>
            <tr><td class="px-4 py-3">Measure Time (Full Scan)</td><td class="px-4 py-3">2.5 – 4.0 sec</td><td></td><td></td><td></td></tr>
            <tr><td class="px-4 py-3">Warranty</td><td class="px-4 py-3">12 months</td><td></td><td></td><td></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- ========== EXPANDED RANGES (PERFORMANCE) ========== -->
  <div>
    <h4 class="text-lg font-semibold font-[MaxOT] text-[#E63946] mb-4">EXPANDED RANGES (with PERFORMANCE package)</h4>
    <div class="overflow-hidden rounded-2xl border bg-white ring-1 ring-black/5">
      <div class="bg-neutral-50 px-6 py-3 font-medium border-b">Range Enhancements</div>
      <table class="w-full text-sm">
        <thead class="bg-neutral-100">
          <tr>
            <td class="px-6 py-2 font-medium w-[40%]">Feature/Parameter</td>
            <td class="px-6 py-2 font-medium">N30-Touch</td>
            <td class="px-6 py-2 font-medium">PERFORMANCE</td>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr><td class="px-6 py-3">Detection Range (dsDNA)</td><td class="px-6 py-3">5 – 1,500 ng/µl</td><td class="px-6 py-3">1 – 16,500 ng/µl</td></tr>
          <tr><td class="px-6 py-3">Detection Range (BSA)</td><td class="px-6 py-3">0.15 – 44 mg/ml</td><td class="px-6 py-3">0.03 – 478 mg/ml</td></tr>
          <tr><td class="px-6 py-3">Wavelength Scan Range</td><td class="px-6 py-3">200 – 650 nm</td><td class="px-6 py-3">200 – 900 nm</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- ========== APPLICATIONS (APPLICATIONS package) ========== -->
  <div>
    <h4 class="text-lg font-semibold font-[MaxOT] text-[#E63946] mb-4">APPLICATIONS (with APPLICATIONS package)</h4>
    <div class="overflow-hidden rounded-2xl border bg-white ring-1 ring-black/5">
      <div class="bg-neutral-50 px-6 py-3 font-medium border-b">Included Modules</div>
      <table class="w-full text-sm">
        <thead class="bg-neutral-100">
          <tr>
            <td class="px-6 py-2 font-medium w-[28%]">Category</td>
            <td class="px-6 py-2 font-medium">Details</td>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr>
            <td class="px-6 py-3">Applications</td>
            <td class="px-6 py-3">
              <ul class="list-disc list-inside space-y-1">
                <li>Nucleic Acid, Protein UV</li>
                <li>Protein Assays, Kinetics, OD600 Cell Density, Wavescan, Wavelength</li>
                <li>Concentration, Absorbance Ratio, Custom Curve</li>
                <li>Air Bubble Recognition, Dye Labels</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- ========== DATA STORAGE & MANAGEMENT (CONNECTIVITY) ========== -->
  <div>
    <h4 class="text-lg font-semibold font-[MaxOT] text-[#E63946] mb-4">Data Storage &amp; Management (CONNECTIVITY package)</h4>
    <div class="overflow-hidden rounded-2xl border bg-white ring-1 ring-black/5">
      <div class="bg-neutral-50 px-6 py-3 font-medium border-b">Connectivity &amp; Data</div>
      <table class="w-full text-sm">
        <thead class="bg-neutral-100">
          <tr>
            <td class="px-6 py-2 font-medium w-[28%]">Category</td>
            <td class="px-6 py-2 font-medium">Details</td>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr>
            <td class="px-6 py-3">Data Storage</td>
            <td class="px-6 py-3">
              <ul class="list-disc list-inside space-y-1">
                <li>USB Data Storage (N30-Touch)</li>
                <li>Wi-Fi Control via PC/Tablet/Smartphone</li>
                <li>LAN Control via PC/Tablet/Smartphone</li>
                <li>USB for Network Storage or Printer</li>
                <li>64 GB Internal Onboard Storage</li>
                <li>Stored Results in Various File Formats</li>
                <li>LIMS Integration via REST API &amp; Push Service</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
</div>
`,


    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null,
  },
  "od600": {
    id: "implen-od600",
    name: "New Implen OD600®",
    image: ImgOD600,
    bannerImg: Banner3,
    logo: Implen,
    altText: "Implen",
    videoId: "",
    meta: {
      title: "New Implen OD600® | Optical Density at 600 nm | Inkarp India",
      description:
        "Next-generation OD600 meter for microbial/cell growth analysis. Preprogrammed OD600 & McFarland modes, glove-friendly touchscreen, USB/LIMS export, Wi-Fi/LAN connectivity. Available via Inkarp Instruments in India.",
      keywords: [
        "Implen OD600",
        "OD600 meter",
        "McFarland turbidity",
        "cell density measurement",
        "optical density 600 nm",
        "DiluPhotometer OD600",
        "Inkarp India"
      ],
      altText: "Implen OD600",
      internalLinks: [],
      externalLinks: ["https://www.implen.de/"]
    },

    // HTML kept verbatim + themed table borders & heading color
    description: `

    
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:16px;">
  <div class="product-details p_relative d_block ml_20">
    <div class="text p_relative d_block mb_10">
      <p>
        Upgrade your microbial and cell growth analysis with the New
        <a href="https://www.implen.de/" class="d_iblock heidolph color_black">Implen</a> OD600®, the next-generation solution designed to simplify Optical Density (OD) measurements. As the enhanced evolution of the DiluPhotometer™️ OD600, this advanced device combines cutting-edge technology with user-friendly functionality, making it an indispensable tool for modern laboratories.
      </p>
      <p>
        The New Implen OD600® delivers unmatched accuracy in sample optical density measurements at approximately 600 nm, making it perfect for applications such as:
      </p>
      <p><strong>Cell Growth Rate Analysis:</strong> Precisely monitor and quantify bacterial and yeast culture growth.</p>
      <p><strong>McFarland Turbidity Measurements: </strong> Achieve standardized microbial suspension levels for reproducible results.</p>
    </div>
  </div>

  <div class="product-discription p_relative d_block">
    <div class="my-4">
      <p>
        Now available in India through
        <a href="https://www.inkarp.co.in/" class="d_iblock heidolph color_black">Inkarp Instruments</a>, an authorized Implen distributor and service provider, the New Implen OD600® sets a new standard in cell density measurement technology.
      </p>
    </div>
    </div>
  </div>
</div>
  `,

    features: [
      {
        name: "Accuracy & Reproducibility",
        description:
          "Achieve consistent, precise results with a higher absorbance range, ensuring reliable cell density measurements across different samples and conditions.",
      },
      {
        name: "Pre-Programmed Applications",
        description:
          "Intuitive OD600 and McFarland modes simplify operation, allowing users to run common assays effortlessly without complex setup.",
      },
      {
        name: "Unmatched Compatibility",
        description:
          "Works seamlessly with DiluCell, cuvettes, and tubes—eliminating the need for adapters and offering broad flexibility for sample handling.",
      },
      {
        name: "Effortless Data Export",
        description:
          "Save measurement data directly in .xls or .csv formats via USB for straightforward transfer and analysis.",
      },
      {
        name: "Streamlined LIMS Integration",
        description:
          "Easily connect to laboratory information management systems with WiFi or LAN/Ethernet through a REST API PUSH, ensuring smooth digital workflows.",
      },
      {
        name: "Versatile Mobility",
        description:
          "Designed for fieldwork, safety cabinets, and anaerobic incubation chambers, offering reliable performance in diverse working environments.",
      },
      {
        name: "Glove-Friendly Touchscreen",
        description:
          "3.5″ touchscreen interface allows easy operation in lab settings, even when wearing protective gloves.",
      },
      {
        name: "Long-Lasting Battery",
        description:
          "Enjoy uninterrupted performance with a battery that supports over 8 hours of continuous operation.",
      },
      {
        name: "High-Precision Measurements",
        description:
          "Delivers accurate readings up to 4 A, ensuring dependable results even at high optical densities.",
      },
      {
        name: "Intuitive Multilingual Interface",
        description:
          "User-friendly design with multilingual support, making the device accessible to diverse laboratory teams worldwide.",
      },
      {
        name: "Robust Data Storage",
        description:
          "Capable of storing large datasets locally, providing universal functionality for extended experimental use.",
      },
      {
        name: "Portable & Lightweight",
        description:
          "Compact design makes it easy to transport, supporting both in-lab and on-the-go applications.",
      },
      {
        name: "Maintenance-Free",
        description:
          "Engineered for reliability with no recalibration required, reducing downtime and long-term maintenance costs.",
      },
    ],

    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: {
      "Wavelength": "600 nm",
      "Photometric Range": "OD600: 0 – 4 A; McFarland: 0 – 16 MFU",
      "Accuracy": "OD600: @ 1A: < ±0.01 A | McFarland: @ 0 – 8 MFU: ≤ ±0.1 MFU",
      "Reproducibility": "OD600: @ 1A: < ±0.002 A | McFarland: @ 0 – 8 MFU: ≤ ±0.05 MFU",
      "Cuvettes/Tubes": "DiluCells; 10 mm macro- and semi-micro cuvettes; 10, 12, 16, 18 mm glass/falcon tubes – Without the need for adapters. Wipeable sample compartment – fixed with drain hole.",
      "Instrument Size": "140 (L) x 110 (W) x 70 (H) mm",
      "Weight": "0.6 kg",
      "Display Size": "3.5″ glove compatible touchscreen, 480 x 320 pixels",
      "Memory": "4 GB internal memory, access to all previously measured sample data in sample list feature",
      "Time and Date Data": "Manual or automatic time setting",
      "Connectivity": "USB A port for data export; USB C for charging; LIMS integration via WiFi, Ethernet/LAN (Rest API PUSH)",
      "Battery Life": "Rechargeable, continuous use for ~8 hours",
      "Certification": "CE, IEC61010-1:2012 and EN 61326-1:2013",
      "Data Format": ".xls and .csv format exportable. For LIMS: JSON"
    }
  },

  "fluidlab-r300": {
    id: "fluidlab-r300",
    name: "Fluidlab R-300 | Cell Counter & Spectrometer",
    image: ImgFluidlabR300,
    bannerImg: Banner3,
    logo: Avanjo,
    altText: "Avanjo",
    videoId: "",
    meta: {
      title: "Fluidlab R-300 | Cell Counter & Spectrometer | Anvajo | Inkarp India",
      description:
        "The Fluidlab R-300 combines automated cell counting and a full spectrometer in one compact device. Features include label-free viability via digital holographic microscopy, absorbance and scatterlight measurements, time-series analysis, and portable operation. Distributed in India by Inkarp Instruments.",
      keywords: [
        "Fluidlab R-300",
        "Anvajo Fluidlab",
        "cell counter spectrometer",
        "digital holographic microscopy",
        "automated cell counter",
        "label-free viability",
        "spectrometer 375-700 nm",
        "Inkarp India"
      ],
      altText: "Fluidlab R-300",
      internalLinks: [],
      externalLinks: ["https://anvajo.com/"]
    },

    description: `
<section class="w-full">
  <div class="max-w-7xl mx-auto px-4 md:px-6">
    <div class="bg-white border border-[#E3E8F5] rounded-xl p-6 md:p-8 shadow-sm">
      <p class="text-lg leading-relaxed">
        Inkarp Instruments, a trusted Anvajo partner, presents the <b>Fluidlab R-300</b> in India, a revolutionary cell counter and spectrometer.
      </p>
      <p class="mt-3 text-lg leading-relaxed">
        Combining a full-fledged spectrometer with an automated cell counter, a variety of analyses such as absorbance, scatterlight and time-series measurements, automated cell counting and staining-free viability measurements can be performed. The intuitive handling and precise measurements make the Fluidlab R-300 the laboratory instrument of the future.
      </p>

      <!-- Feature bullets -->
      <div class="grid sm:grid-cols-2 gap-6 mt-6">
        <div>
          <h3 class="text-lg font-semibold font-[MaxOT] text-[#E63946]">Cell Counter</h3>
          <ul class="mt-2 list-disc pl-5 space-y-1 text-lg">
            <li>Label-free viability measurements via holographic microscopy</li>
            <li>Large FoV for high statistical significance</li>
            <li>Small sample volume needed (4–20 µl)</li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold font-[MaxOT] text-[#E63946]">Spectrometer</h3>
          <ul class="mt-2 list-disc pl-5 space-y-1 text-lg">
            <li>Full spectral graphs recorded from 375 to 700 nm</li>
            <li>No maintenance and re-calibration needed</li>
            <li>Portable and small</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Technical Data Title -->
    <div class="mt-8 flex items-center justify-center">
      <h2 class="text-[#E63946] text-2xl font-[MaxOT] font-semibold">Technical Data</h2>
    </div>

    <!-- Technical Data Cards -->
    <div class="grid gap-6 md:grid-cols-2 mt-4">
      <!-- Device Card -->
      <article class="bg-white border border-[#E3E8F5] rounded-xl p-6 md:p-7 shadow-sm">
        <h4 class="text-lg font-semibold text-[#E63946] font-[MaxOT]">Device</h4>
        <p class="mt-3 text-gray-800 leading-relaxed">
          <b>The Fluidlab R-300 uses the label-free technique of digital holographic microscopy (DHM)</b>
          to analyze cell number and viability directly in the cell culture environment. Contrary to brightfield
          microscopy, DHM does not use optical lenses but generates so-called ‘holograms’ of the cells, which are
          analyzed by a computer.
        </p>

        <!-- Rows -->
        <div class="mt-4 divide-y divide-gray-200 border-t border-gray-200">
          <!-- Row -->
          <div class="flex flex-wrap items-start py-3">
            <dt class="w-full sm:w-1/2 pr-4 ">Dimensions</dt>
            <dd class="w-full sm:w-1/2 font-medium text-gray-900">128 mm × 94 mm × 33 mm</dd>
          </div>
          <div class="flex flex-wrap items-start py-3">
            <dt class="w-full sm:w-1/2 pr-4 text-gray-600">Weight</dt>
            <dd class="w-full sm:w-1/2 font-medium text-gray-900">240 g</dd>
          </div>
          <div class="flex flex-wrap items-start py-3">
            <dt class="w-full sm:w-1/2 pr-4 text-gray-600">Display</dt>
            <dd class="w-full sm:w-1/2 font-medium text-gray-900">3.5&quot; Color Touch Screen</dd>
          </div>
          <div class="flex flex-wrap items-start py-3">
            <dt class="w-full sm:w-1/2 pr-4 text-gray-600">Connectivity</dt>
            <dd class="w-full sm:w-1/2 font-medium text-gray-900">802.11 b/g/n Wireless LAN</dd>
          </div>
          <div class="flex flex-wrap items-start py-3">
            <dt class="w-full sm:w-1/2 pr-4 text-gray-600">Battery</dt>
            <dd class="w-full sm:w-1/2 font-medium text-gray-900">Rechargeable Li-Ion battery</dd>
          </div>
          <div class="flex flex-wrap items-start py-3">
            <dt class="w-full sm:w-1/2 pr-4 text-gray-600">Battery Runtime</dt>
            <dd class="w-full sm:w-1/2 font-medium text-gray-900">5 hours</dd>
          </div>
          <div class="flex flex-wrap items-start py-3">
            <dt class="w-full sm:w-1/2 pr-4 text-gray-600">Input Voltage</dt>
            <dd class="w-full sm:w-1/2 font-medium text-gray-900">5 V DC via USB-C Power Adapter</dd>
          </div>
          <div class="flex flex-wrap items-start py-3">
            <dt class="w-full sm:w-1/2 pr-4 text-gray-600">Power Adapter</dt>
            <dd class="w-full sm:w-1/2 font-medium text-gray-900">100 – 240 V AC 50/60 Hz</dd>
          </div>
          <div class="flex flex-wrap items-start py-3">
            <dt class="w-full sm:w-1/2 pr-4 text-gray-600">Data Storage</dt>
            <dd class="w-full sm:w-1/2 font-medium text-gray-900">Internal Flash Memory</dd>
          </div>
        </div>

        <p class="mt-3 text-xs text-gray-500">
          * Battery claims depend on network configuration and other factors. Battery has limited recharge cycles and may eventually need replacement.
        </p>
      </article>

      <!-- Cell Counter + Spectrometer Card -->
      <article class="bg-white border border-[#E3E8F5] rounded-xl p-6 md:p-7 shadow-sm">
        <h4 class="text-lg font-semibold text-[#E63946] font-[MaxOT]">Cell Counter</h4>

        <div class="mt-3 divide-y divide-gray-200 border-t border-gray-200">
          <div class="flex flex-wrap items-start py-3">
            <dt class="w-full sm:w-1/2 pr-4 text-gray-600">Imaging Method</dt>
            <dd class="w-full sm:w-1/2 font-medium text-gray-900">Digital Holography</dd>
          </div>
          <div class="flex flex-wrap items-start py-3">
            <dt class="w-full sm:w-1/2 pr-4 text-gray-600">Analysis Method</dt>
            <dd class="w-full sm:w-1/2 font-medium text-gray-900">Machine Learning Classifier</dd>
          </div>
          <div class="flex flex-wrap items-start py-3">
            <dt class="w-full sm:w-1/2 pr-4 text-gray-600">Field of View</dt>
            <dd class="w-full sm:w-1/2 font-medium text-gray-900">2.3 mm × 2.3 mm (5.3 mm²)</dd>
          </div>
          <div class="flex flex-wrap items-start py-3">
            <dt class="w-full sm:w-1/2 pr-4 text-gray-600">Cell Size Limits</dt>
            <dd class="w-full sm:w-1/2 font-medium text-gray-900">3 – 80 µm (cell count), 8 – 80 µm (viability)</dd>
          </div>
        </div>

        <h4 class="mt-6 text-lg font-semibold text-[#E63946] font-[MaxOT]">Spectrometer</h4>
        <div class="mt-3 divide-y divide-gray-200 border-t border-gray-200">
          <div class="flex flex-wrap items-start py-3">
            <dt class="w-full sm:w-1/2 pr-4 text-gray-600">Light Source</dt>
            <dd class="w-full sm:w-1/2 font-medium text-gray-900">Multiwavelength LED Module</dd>
          </div>
          <div class="flex flex-wrap items-start py-3">
            <dt class="w-full sm:w-1/2 pr-4 text-gray-600">Wavelength Range</dt>
            <dd class="w-full sm:w-1/2 font-medium text-gray-900">375 – 700 nm</dd>
          </div>
          <div class="flex flex-wrap items-start py-3">
            <dt class="w-full sm:w-1/2 pr-4 text-gray-600">Spectral Bandwidth</dt>
            <dd class="w-full sm:w-1/2 font-medium text-gray-900">2 nm</dd>
          </div>
          <div class="flex flex-wrap items-start py-3">
            <dt class="w-full sm:w-1/2 pr-4 text-gray-600">Photometric Measuring Range</dt>
            <dd class="w-full sm:w-1/2 font-medium text-gray-900">0 – 2.5</dd>
          </div>
          <div class="flex flex-wrap items-start py-3">
            <dt class="w-full sm:w-1/2 pr-4 text-gray-600">Compatible Sample Carriers</dt>
            <dd class="w-full sm:w-1/2 font-medium text-gray-900">Standard 10 mm cuvettes</dd>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

        `,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

  "litescope": {
    id: "litescope-afm-in-sem",
    name: "LiteScope AFM-in-SEM",
    image: ImgLitescope1,          // TODO: import your image
    bannerImg: Banner3,    // TODO: optional banner import
    logo: Nenovision,              // make sure Nenovision logo is imported
    altText: "NenoVision",
    videoId: "",
    meta: {
      title: "LiteScope AFM-in-SEM | NenoVision | Inkarp India",
      description:
        "LiteScope AFM-in-SEM merges AFM and SEM for correlative nanoscale imaging and in-situ analysis. High-resolution 3D topography with nanometer-precise data correlation for materials science, semiconductors, life science, and more.",
      keywords: [
        "LiteScope",
        "AFM-in-SEM",
        "NenoVision",
        "correlative microscopy",
        "AFM SEM integration",
        "nanometer correlation",
        "Inkarp India"
      ],
      altText: "LiteScope AFM-in-SEM",
      internalLinks: [],
      externalLinks: ["https://www.nenovision.com/"]
    },

    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:16px;">
  <style>
    /* Theme */
    h2, h3, h4, dt { color:#E63946; }
    .technical-data { color:#E63946; }
    /* Bordered table */
    table.table-bordered { border:1px solid #e5e7eb; border-collapse:collapse; width:100%; }
    table.table-bordered td, table.table-bordered th { border:1px solid #e5e7eb; padding:10px; vertical-align:top; color:#333; }
    table.table-bordered thead td, table.table-bordered thead th { background:#fafafa; font-weight:700; }
    /* Image strip */
    .tri-img { display:flex; gap:16px; justify-content:center; align-items:center; margin:18px 0 8px; }
    .tri-img img { display:block; width:100%; max-width:320px; aspect-ratio:16/10; object-fit:cover; border:1px solid #e5e7eb; border-radius:8px; }
  </style>

  <div class="">
    <div class="text-[18px] font-[Roboto]">
      <p>
        Inkarp Instruments, a trusted
       NenoVision partner,
        introduces the LiteScope Atomic Force Microscope (AFM)-in-SEM in India, revolutionizing nanoscale imaging.
      </p>
      <p class="">
        Unique Atomic Force Microscope LiteScope is designed to merge the strengths of AFM and SEM techniques,
        resulting in effective workflow and extending the possibilities of correlative microscopy and in-situ
        analysis that were difficult or almost impossible by conventional instrumentation.
      </p>
      <p>
        Simultaneous AFM and SEM measurement allows nanometer precise data correlation, making LiteScope a powerful
        tool for a variety of fields such as Material science, Nanotechnology, Semiconductors, Life science and other
        areas of research and industry.
      </p>
    </div>

    <!-- Three centered images (replace src with your real images) -->
    <div class="tri-img">
      <img src="/images/products/Nanovision/litescope.png" alt="LiteScope image 1 (placeholder)">
      <img src="/images/products/Nanovision/litescope-2.jpg" alt="LiteScope image 2 (placeholder)">
      <img src="/images/products/Nanovision/litescope-3.gif" alt="LiteScope image 3 (placeholder)">
    </div>
  </div>

  <div class="product-discription p_relative d_block mb_80">
    <div class="tabs-box">
      <div class="flex justify-center items-center py-3">
          <h2 class="text-[#E63946] font-semibold font-[MaxOT] text-[24px]">
            Technical Data
          </h2>
      </div>

      <div class="tabs-content">
        <div class="tab active-tab" id="tab-1">
          <div class="content-box">
            <table class="table table-striped table-bordered">
              <tbody>
                <tr>
                  <td class="font-[Roboto] text-lg">Dimensions XYZ</td><td>118 mm x 84 mm x 35.7–48.4 mm</td>
                  <td>Scan range in open loop XYZ (±10%)</td><td>100 μm x 100 μm x 20 μm</td>
                </tr>
                <tr>
                  <td class="font-[Roboto] text-lg">Total weight</td><td>460 g</td>
                  <td>Scan range in closed loop XYZ</td><td>80 μm x 80 μm x 16 μm</td>
                </tr>
                <tr>
                  <td class="font-[Roboto] text-lg">Vacuum working range</td>
                  <td>10<sup>5</sup> Pa to 10<sup>-5</sup> Pa</td>
                  <td>Resolution XYZ up to</td><td>0.2 nm x 0.2 nm x 0.04 nm</td>
                </tr>
                <tr>
                  <td class="font-[Roboto] text-lg">Operating temperature</td><td>+10 °C to +35 °C</td>
                  <td>Maximum sample height</td><td>8 mm</td>
                </tr>
                <tr>
                  <td class="font-[Roboto] text-lg">Maximal scanned sample area XYZ</td><td>21 mm x 11 mm x 8 mm</td>
                  <td>Maximum sample weight</td><td>100 g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>                            
      </div>
    </div>
  </div>
</div>
  `,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },
  "reichert-4spr": {
    id: "reichert-4spr",
    name: "Reichert® 4SPR",
    image: ImgReichert4SPR,
    logo: Reichert,
    bannerImg: Banner3,
    altText: "Reichert",
    videoId: "",
    meta: {
      title: "Reichert® 4SPR | Surface Plasmon Resonance | Inkarp India",
      description:
        "Reichert 4SPR is a flexible 4-channel Surface Plasmon Resonance (SPR) system delivering high-quality data with lower cost of ownership. Featuring autosampler up to 768 samples, built-in degasser, wide kinetic range, and CFR Part 11 compliance.",
      keywords: [
        "Reichert 4SPR",
        "Surface Plasmon Resonance",
        "SPR system",
        "biomolecular interaction",
        "kinetics and affinity analysis",
        "label-free detection",
        "Inkarp India"
      ],
      altText: "Reichert 4SPR instrument",
      internalLinks: ["reichert-spr"],
      externalLinks: ["https://www.reichertspr.com/"]
    },

    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:16px;">
  <style>
    h2, h3, h4, dt { color:#E63946; }
    table.table-bordered { border:1px solid #ccd6eb; border-collapse:collapse; width:100%; }
    table.table-bordered td { border:1px solid #ccd6eb; padding:8px; vertical-align:top; }
    table.table-bordered th { border:1px solid #ccd6eb; padding:8px; background:#f9fafb; }
  </style>

  <div class="product-details">
    <p><strong>The More Flexible, More Powerful, More Affordable 4-Channel SPR.</strong></p>
    <p>
      With Reichert, you get a four-channel surface plasmon resonance (SPR) system that provides outstanding data,
      with a 30-70% lower total cost of ownership over five years compared to equivalent systems.
    </p>
    <p><strong>Reichert Gives You:</strong></p>
    <ul>
      <li>High-quality, publication-ready data</li>
      <li>More flexibility (analyze crude samples, interface with other equipment)</li>
      <li>Easy-to-use software with guided workflows</li>
      <li>Best performance-to-cost ratio for labs</li>
      <li>A proven SPR leader since 1997</li>
    </ul>
    <p>Contact us today to schedule a demo in your lab.</p>
  </div>

  <h3>Technical Data</h3>
  <table class="table table-bordered">
    <tbody>
      <tr><td>Measurement Channels</td><td>Four</td></tr>
      <tr><td>Sample Loading</td><td>Autosampler. Up to 768 samples</td></tr>
      <tr><td>Injection Volume</td><td>1 µL to 4,500 µL</td></tr>
      <tr><td>Buffer Degasser</td><td>Built-in</td></tr>
      <tr><td>Temperature Range</td><td>10°C below ambient to 70°C</td></tr>
      <tr><td>Sample Storage</td><td>4°C or ambient</td></tr>
      <tr><td>21 CFR Part 11</td><td>Compliant</td></tr>
    </tbody>
  </table>

  <h3>Measurement Sensitivity</h3>
  <table class="table table-bordered">
    <tbody>
      <tr><td>Baseline Noise</td><td>0.05 uRIU (RMS)</td></tr>
      <tr><td>Baseline Drift</td><td>< 0.1 uRIU/min</td></tr>
      <tr><td>Min Molecular Weight Detection</td><td>No lower limit for organic molecules</td></tr>
    </tbody>
  </table>

  <h3>Kinetic and Equilibrium Constant Ranges</h3>
  <table class="table table-bordered">
    <tbody>
      <tr><td>Association Rate Constant</td><td>10³ to 10⁸ M⁻¹s⁻¹</td></tr>
      <tr><td>Dissociation Rate Constant</td><td>10⁻¹ to 10⁻⁶ s⁻¹</td></tr>
      <tr><td>Equilibrium Dissociation Constant</td><td>10⁻³ to 10⁻¹² M</td></tr>
    </tbody>
  </table>

  <h3>Comparison: Reichert 4SPR vs Cytiva Biacore™ T200</h3>
  <table class="table table-bordered">
    <tbody>
      <tr>
        <th></th><th>Reichert 4SPR</th><th>Biacore™ T200</th>
      </tr>
      <tr><td>Number of Channels</td><td>4</td><td>4</td></tr>
      <tr><td>DIY Fluidics</td><td>Yes</td><td>No</td></tr>
      <tr><td>Autosampler Capacity</td><td>768 samples</td><td>462 samples</td></tr>
      <tr><td>Baseline Drift</td><td>0.1 RU/min</td><td><0.3 RU/min</td></tr>
      <tr><td>Baseline Noise</td><td>0.05 RU (RMS)</td><td>0.03 RU (RMS)</td></tr>
      <tr><td>Specialized Flow Cells</td><td>Electrochemistry, Photochemistry, Fluorescence, Mass Spec</td><td>None</td></tr>
      <tr><td>Temperature Range</td><td>10°C below ambient to 70°C</td><td>4–45°C</td></tr>
      <tr><td>Flow Rate Range</td><td>0.1 – 3000 µL/min</td><td>1 – 100 µL/min</td></tr>
      <tr><td>Minimum MW Detection</td><td>No lower limit</td><td>No lower limit</td></tr>
    </tbody>
  </table>
</div>
  `,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },
  "reichert-2spr": {
    id: "reichert-2spr",
    name: "Reichert® 2SPR",
    image: ImgReichert2SPR,
    logo: Reichert,
    bannerImg: Banner3,
    altText: "Reichert",
    videoId: "",
    meta: {
      title: "Reichert® 2SPR | Surface Plasmon Resonance | Inkarp India",
      description:
        "Reichert 2SPR is a highly sensitive and affordable 2-channel Surface Plasmon Resonance (SPR) system for label-free biomolecular interaction analysis. Designed for universities, academic facilities, and biotech startups worldwide. Distributed in India by Inkarp Instruments.",
      keywords: [
        "Reichert 2SPR",
        "Surface Plasmon Resonance",
        "SPR system",
        "biomolecular interaction",
        "kinetics analysis",
        "2-channel SPR",
        "label-free detection",
        "Inkarp India"
      ],
      altText: "Reichert 2SPR instrument",
      internalLinks: ["reichert-spr"],
      externalLinks: ["https://www.reichertspr.com/"]
    },

    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:16px;">
  <style>
    h2, h3, h4, dt { color:#E63946; }
    table.table-bordered { border:1px solid #ccd6eb; border-collapse:collapse; width:100%; }
    table.table-bordered td { border:1px solid #ccd6eb; padding:8px; vertical-align:top; }
    table.table-bordered th { border:1px solid #ccd6eb; padding:8px; background:#f9fafb; }
  </style>

  <div class="product-details">

    <p><strong>The Best 2-Channel SPR Value You Can Buy.</strong></p>
    <p>
      Choose the 2-channel surface plasmon resonance (SPR) system that lets you do more — and costs up to 30% less
      than the leading competitor. The Reichert2SPR pushes the limits of detection and sensitivity, making it ideal
      for universities, biotech startups, and academic facilities worldwide.
    </p>
    <p><strong>With Reichert, you get more, including:</strong></p>
    <ul>
      <li>High-quality, publication-ready data</li>
      <li>The most sensitive, flexible and affordable 2-channel system available</li>
      <li>Best performance-to-cost ratio for individual labs</li>
      <li>A proven SPR leader since 1997</li>
    </ul>
    <p>Contact us today to schedule a demo in your lab.</p>
  </div>

  <h3>Technical Data</h3>
  <table class="table table-bordered">
    <tbody>
      <tr><td>Transducer Principle</td><td>Kretschmann prism, multiple angles; Two channels (parallel or series)</td></tr>
      <tr><td>Sample Loading</td><td>Autosampler / semi-auto injector, HPLC tubing, external syringe pump</td></tr>
      <tr><td>Sample Capacity</td><td>Up to 2 trays: 12×10 mL, 48×2 mL, 96-well, 384-well plates</td></tr>
      <tr><td>Sample Storage</td><td>4°C or ambient</td></tr>
      <tr><td>Flow Cell Volume</td><td>0.18 µL per channel</td></tr>
      <tr><td>Flow Cell Surface Area</td><td>4.5 mm² (reference value)</td></tr>
      <tr><td>Aspect Ratio</td><td>>25 (width/height)</td></tr>
      <tr><td>Fluid Contact Materials</td><td>Teflon™, Acetal Copolymer, PEEK™, Kalrez™, ETFE</td></tr>
      <tr><td>Sample Volume</td><td>20–4500 µL (depends on loop volume)</td></tr>
      <tr><td>System Fluid Volume</td><td>28 µL (0.01" tubing) / 7.5 µL (0.005" tubing)</td></tr>
      <tr><td>Temperature Range</td><td>10°C below ambient to 70°C</td></tr>
    </tbody>
  </table>

  <h3>Measurement Sensitivity</h3>
  <table class="table table-bordered">
    <tbody>
      <tr><td>Refractive Index Resolution</td><td>< 10⁻⁷ RIU (<0.1 µRIU)</td></tr>
      <tr><td>Refractive Index Range</td><td>1.33 – 1.40 (@780nm)</td></tr>
      <tr><td>Analyte Concentration Range</td><td>1 mM to 1 pM</td></tr>
      <tr><td>Min Molecular Weight Detection</td><td>< 100 Daltons</td></tr>
      <tr><td>Baseline Noise</td><td>0.1 µRIU p-p; 0.05 µRIU RMS @ 25 mL/min</td></tr>
      <tr><td>Baseline Drift</td><td>< 0.1 µRIU/min</td></tr>
    </tbody>
  </table>

  <h3>Kinetic and Equilibrium Constant Ranges</h3>
  <table class="table table-bordered">
    <tbody>
      <tr><td>Association Rate Constant</td><td>10³ – 10⁷ M⁻¹s⁻¹</td></tr>
      <tr><td>Dissociation Rate Constant</td><td>10⁻¹ – 10⁻⁵ s⁻¹</td></tr>
      <tr><td>Equilibrium Dissociation Constant</td><td>0.1 mM – 1 pM</td></tr>
      <tr><td>Electrical</td><td>AC, 100–240 V; 50/60 Hz</td></tr>
      <tr><td>Regulatory</td><td>Meets EMC Directive & IEC lab safety standards</td></tr>
      <tr><td>Product Safety</td><td>IEC 61010-1 compliance; CE certified (Class A, Type II)</td></tr>
    </tbody>
  </table>

  <h3>Comparison: Reichert 2SPR vs Cytiva Biacore™ X100</h3>
  <p>The Reichert2SPR (SR7500DC) is a smart choice for sensitive biomolecular interaction studies with lower maintenance and flexible autosampling.</p>
  <table class="table table-bordered">
    <tbody>
      <tr><th></th><th>Reichert 2SPR</th><th>Biacore™ X100</th></tr>
      <tr><td>Number of Channels</td><td>2</td><td>2</td></tr>
      <tr><td>DIY Fluidics</td><td>Yes</td><td>No</td></tr>
      <tr><td>Autosampler Capacity</td><td>768 samples</td><td>15 samples</td></tr>
      <tr><td>Baseline Drift</td><td>0.1 RU/min</td><td><0.3 RU/min</td></tr>
      <tr><td>Baseline Noise</td><td>0.05 RU (RMS)</td><td><0.1 RU (RMS)</td></tr>
      <tr><td>Specialized Flow Cells</td><td>Electrochemistry, Photochemistry, Fluorescence, MS</td><td>None</td></tr>
      <tr><td>Sample Compartment Temp</td><td>4°C or Ambient</td><td>Ambient</td></tr>
      <tr><td>Flow Rate Range</td><td>0.1 – 3000 µL/min</td><td>1 – 100 µL/min</td></tr>
    </tbody>
  </table>
</div>
  `,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

  "driveafm": {
    id: "driveafm",
    name: "DriveAFM Research",
    image: ImgDriveAFM,
    logo: Nanosurf, // optional – you already show the logo inside the HTML below
    bannerImg: Banner3,
    altText: "Nanosurf",
    videoId: "",
    meta: {
      title: "DriveAFM Research | Nanosurf AFM | Inkarp India",
      description:
        "DriveAFM is Nanosurf’s flagship tip-scanning AFM delivering atomic resolution, fast scanning/force spectroscopy, and large scan sizes up to 100 µm—ideal for advanced materials and life science research.",
      keywords: [
        "Nanosurf DriveAFM",
        "DriveAFM Research",
        "atomic force microscope",
        "AFM",
        "photothermal actuation",
        "CleanDrive",
        "large scan range AFM",
        "Inkarp India"
      ],
      altText: "DriveAFM by Nanosurf",
      internalLinks: ["nanosurf-research"],
      externalLinks: ["https://www.nanosurf.com/en/"]
    },

    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:16px;">
  <style>
    h2, h3, h4, dt { color:#E63946; }
    .technical-data { color:#E63946; }
    table.table-bordered { border:1px solid #e5e7eb; border-collapse:collapse; width:100%; }
    table.table-bordered td, table.table-bordered th { border:1px solid #e5e7eb; padding:10px; vertical-align:top; color:#333; }
    table.table-bordered thead td, table.table-bordered thead th { background:#fafafa; font-weight:700; }
  </style>

  <div class="product-details p_relative d_block ml_20">
    <div class="text p_relative d_block mb_10">
      <p>Inkarp Instruments, a trusted Nanosurf partner, offers the DriveAFM Research in India, a versatile and high-performance Atomic Force Microscope (AFM) for advanced research applications.</p>
      <p class="font_family_poppins mb_10">Performance without compromise</p>
      <p>The DriveAFM is Nanosurf’s novel flagship AFM platform: a tip-scanning atomic force microscope (AFM) that combines, for the first time, several capabilities in one instrument to enable novel measurements in materials and life sciences. The DriveAFM overcomes drawbacks of other tip-scanning instruments and provides atomic resolution together with fast scanning, fast force spectroscopy, and large scan sizes up to 100 µm. Thanks to Nanosurf’s innovations in optical beam path engineering and scanner design, the Drive scan head features photothermal actuation and full motorization for superior research performance and is easy to use for researchers at all levels of experience.</p>
      <ul class="prod-det">
        <li>CleanDrive: stable excitation in air and liquid</li>
        <li>Ultra-low noise</li>
        <li>Direct drive: high-resolution imaging and large scan area</li>
        <li>Fully motorized system: full control via software</li>
      </ul>
    </div>
  </div>

  <div class="product-discription p_relative d_block mb_80">
    <div class="tabs-box">
      <div class="tab-btn-box p_relative d_block mb_35">
        <div class="py-3 font-[MaxOT] text-xl">
          <h2 class="">Technical Data</h2>
        </div>
      </div>

      <div class="tabs-content">
        <div class="tab active-tab" id="tab-1">
          <div class="content-box">
            <div class="eighty">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th width="50%"><b>Scan head</b></th>
                    <th width="50%">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><b>Scan size</b></td><td>typ. 100 µm x 100 µm x 20 µm<br>min. 95 µm x 95 µm x 18 µm</td></tr>
                  <tr><td><b>Read-out light source</b></td><td>840 nm low-coherence SLD</td></tr>
                  <tr><td><b>CleanDrive light source</b></td><td>785 nm laser</td></tr>
                  <tr><td><b>Photodetector bandwidth</b></td><td>≥ 8 MHz</td></tr>
                  <tr><td><b>Standard / maximum sample size</b></td><td>100 mm / 150 mm</td></tr>
                  <tr><td><b>Z-height noise dynamic</b></td><td>&lt; 30 pm (RMS)</td></tr>
                  <tr><td><b>Z-height noise static</b></td><td>&lt; 30 pm (RMS)</td></tr>
                  <tr><td><b>DC detector noise<sup>*</sup></b></td><td>&lt; 5 pm (RMS, 0.1 Hz – 10 kHz)</td></tr>
                  <tr><td><b>AC detector noise<sup>*</sup></b></td><td>&lt; 25 fm/√(Hz) above 100 kHz</td></tr>
                  <tr><td><b>Approach</b></td><td>10 mm motorized, parallel</td></tr>
                  <tr><td colspan="2">(*) measured with a USC-F1.2-k7.3 cantilever</td></tr>
                </tbody>
              </table>

              <div style="height:50px"></div>

              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th width="50%"><b>CX Controller specifications</b></th>
                    <th width="50%">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><b>High resolution outputs (DAC)</b></td><td>12× 28 bit, 1 MHz/sampling; thereof 4× user DAC (optional)</td></tr>
                  <tr><td><b>Fast outputs (DAC)</b></td><td>4× 16 bit, 100 MHz/sampling; thereof 1× user DAC (optional)</td></tr>
                  <tr><td><b>High resolution inputs (ADC)</b></td><td>12× 20 bit, 1 MHz/sampling; thereof 4× user ADC (optional)</td></tr>
                  <tr><td><b>Fast inputs (ADC)</b></td><td>3× 16 bit, 100 MHz/sampling; thereof 1× user ADC (optional)</td></tr>
                  <tr><td><b>Signal analyzers</b></td><td>2 function blocks configurable as dual-channel lock-in</td></tr>
                  <tr><td><b>FPGA module & embedded processor</b></td><td>SoC with low-latency FPGA @100 MHz and dual-core ARM, 2 GB RAM, 1.5 GHz</td></tr>
                  <tr><td><b>Scan control</b></td><td>28-bit X/Y/Z-DAC</td></tr>
                  <tr><td><b>Detector inputs</b></td><td>Deflection/lateral signals each 20 bit</td></tr>
                  <tr><td><b>Digital sync, Spike-Guard</b></td><td>2-bit line/frame sync out 5 V/TTL (isolated), Spike-Guard input</td></tr>
                  <tr><td><b>Clock sync</b></td><td>10 MHz / 3 V clock input for synchronized DAQ & processing</td></tr>
                  <tr><td><b>Communication to PC</b></td><td>Galvanically isolated Gigabit Ethernet</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>                            
      </div>
    </div>
  </div>
</div>
  `,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

  "flexafm": {
    id: "flexafm",
    name: "FlexAFM Research",
    image: ImgFlexAFM,
    bannerImg: Banner3,
    logo: Nanosurf,
    altText: "Nanosurf",
    videoId: "",
    meta: {
      title: "FlexAFM Research | Nanosurf AFM | Inkarp India",
      description:
        "FlexAFM is a compact, versatile AFM platform for advanced research—offering ultra-low noise, stable excitation in air/liquid, high-resolution imaging, and full motorization.",
      keywords: [
        "Nanosurf FlexAFM",
        "FlexAFM Research",
        "atomic force microscope",
        "AFM",
        "CleanDrive",
        "large scan range AFM",
        "Inkarp India"
      ],
      altText: "FlexAFM by Nanosurf",
      internalLinks: ["nanosurf-research"],
      externalLinks: ["https://www.nanosurf.com/en/"]
    },

    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:16px;">
  <style>
    h2, h3, h4, dt { color:#E63946; }
    .technical-data { color:#E63946; }
    table.table-bordered { border:1px solid #e5e7eb; border-collapse:collapse; width:100%; }
    table.table-bordered td, table.table-bordered th { border:1px solid #e5e7eb; padding:10px; vertical-align:top; color:#333; }
    table.table-bordered thead td, table.table-bordered thead th { background:#fafafa; font-weight:700; }
  </style>

  <div class="product-details p_relative d_block ml_20">
    <div class="text p_relative d_block mb_10">
      <p>Inkarp Instruments, a trusted Nanosurf partner, offers the FlexAFM Research in India, a compact and versatile Atomic Force Microscope (AFM) for advanced research applications.</p>
      <p class="font_family_poppins mb_10">Performance without compromise</p>
      <p>The <b>FlexAFM</b> is a tip-scanning atomic force microscope that brings high performance and ease of use to a wide range of materials and life science measurements. Building on Nanosurf’s innovations in optical beam path engineering and scanner design, FlexAFM delivers atomic-scale resolution together with fast scanning, fast force spectroscopy, and large scan sizes up to 100 µm. The scan head provides photothermal actuation and full motorization for superior research performance that’s accessible to users at all experience levels.</p>
      <ul class="prod-det">
        <li>CleanDrive: stable excitation in air and liquid</li>
        <li>Ultra-low noise</li>
        <li>Direct drive: high-resolution imaging and large scan area</li>
        <li>Fully motorized system: full control via software</li>
      </ul>
    </div>
  </div>

  <div class="product-discription p_relative d_block mb_80">
    <div class="tabs-box">
      <div class="font-[MaxOT] text-xl py-3">
     <h2>Technical Data</h2></div>
      </div>

      <div class="tabs-content">
        <div class="tab active-tab" id="tab-1">
          <div class="content-box">
            <div class="eighty">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th width="50%"><b>Scan head</b></th>
                    <th width="50%">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><b>Scan size</b></td><td>typ. 100 µm x 100 µm x 20 µm<br>min. 95 µm x 95 µm x 18 µm</td></tr>
                  <tr><td><b>Read-out light source</b></td><td>840 nm low-coherence SLD</td></tr>
                  <tr><td><b>CleanDrive light source</b></td><td>785 nm laser</td></tr>
                  <tr><td><b>Photodetector bandwidth</b></td><td>≥8 MHz</td></tr>
                  <tr><td><b>Standard / maximum sample size</b></td><td>100 mm / 150 mm</td></tr>
                  <tr><td><b>Z-height noise dynamic</b></td><td>&lt;30 pm (RMS)</td></tr>
                  <tr><td><b>Z-height noise static</b></td><td>&lt;30 pm (RMS)</td></tr>
                  <tr><td><b>DC detector noise<sup>*</sup></b></td><td>&lt;5 pm (RMS, 0.1 Hz – 10 kHz)</td></tr>
                  <tr><td><b>AC detector noise<sup>*</sup></b></td><td>&lt;25 fm/√(Hz) above 100 kHz</td></tr>
                  <tr><td><b>Approach</b></td><td>10 mm motorized, parallel</td></tr>
                  <tr><td colspan="2">(*) measured with a USC-F1.2-k7.3 cantilever</td></tr>
                </tbody>
              </table>

              <div style="height:50px"></div>

              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th width="50%"><b>CX Controller specifications</b></th>
                    <th width="50%">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><b>High resolution outputs (DAC)</b></td><td>12× 28 bit, 1 MHz/sampling; thereof 4× user DAC (optional)</td></tr>
                  <tr><td><b>Fast outputs (DAC)</b></td><td>4× 16 bit, 100 MHz/sampling; thereof 1× user DAC (optional)</td></tr>
                  <tr><td><b>High resolution inputs (ADC)</b></td><td>12× 20 bit, 1 MHz/sampling; thereof 4× user ADC (optional)</td></tr>
                  <tr><td><b>Fast inputs (ADC)</b></td><td>3× 16 bit, 100 MHz/sampling; thereof 1× user ADC (optional)</td></tr>
                  <tr><td><b>Signal analyzers</b></td><td>2 signal-analyzer blocks configurable as dual-channel lock-in</td></tr>
                  <tr><td><b>FPGA module and embedded processor</b></td><td>SoC with low-latency FPGA @100 MHz and dual-core ARM processor, 2 GB RAM, 1.5 GHz</td></tr>
                  <tr><td><b>Scan control</b></td><td>28-bit X/Y/Z-DAC</td></tr>
                  <tr><td><b>Detector inputs</b></td><td>Deflection/lateral signals each 20 bit</td></tr>
                  <tr><td><b>Digital sync, Spike-Guard</b></td><td>2-bit line/frame sync out 5 V/TTL (isolated), Spike-Guard input</td></tr>
                  <tr><td><b>Clock sync</b></td><td>10 MHz / 3 V clock input to synchronize data acquisition and processing</td></tr>
                  <tr><td><b>Communication to PC</b></td><td>Gigabit Ethernet, galvanically isolated</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>                            
      </div>
    </div>
  </div>
</div>
  `,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

  "coreafm": {
    id: "coreafm",
    name: "CoreAFM Research",
    image: ImgCoreAFM,
    bannerImg: Banner3,
    logo: Nanosurf,
    altText: "Nanosurf",
    videoId: "",
    meta: {
      title: "CoreAFM Research | Nanosurf AFM | Inkarp India",
      description:
        "CoreAFM is an integrated, compact research AFM with 33 modes, easy handling, and a fully digital 24-bit controller—ideal for advanced materials and life science applications.",
      keywords: [
        "Nanosurf CoreAFM",
        "CoreAFM Research",
        "atomic force microscope",
        "AFM",
        "compact AFM",
        "flexure-guided scanner",
        "Inkarp India"
      ],
      altText: "CoreAFM by Nanosurf",
      internalLinks: ["nanosurf-research"],
      externalLinks: ["https://www.nanosurf.com/en/"]
    },

    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:16px;">
  <style>
    h2, h3, h4, dt { color:#E63946; }
    .technical-data { color:#E63946; }
    table.table-bordered { border:1px solid #e5e7eb; border-collapse:collapse; width:100%; }
    table.table-bordered td, table.table-bordered th { border:1px solid #e5e7eb; padding:10px; vertical-align:top; color:#333; }
    table.table-bordered thead td, table.table-bordered thead th { background:#fafafa; font-weight:700; }
  </style>

  <div class="product-details p_relative d_block ml_20">
    <div class="text p_relative d_block mb_10">
      <p>Inkarp Instruments, a trusted Nanosurf partner, offers the CoreAFM Research in India, a powerful and versatile Atomic Force Microscope (AFM) for advanced research applications.</p>
      <ul class="prod-det">
        <li>Research AFM with a competitive price tag</li>
        <li>Integrated system with small footprint</li>
        <li>33 modes and functions</li>
        <li>Easy handling</li>
      </ul>
      <p>The CoreAFM is the result of intelligently combining the core components of AFM to achieve maximum versatility and user-friendliness. Due to this fundamental design approach, the CoreAFM is equipped to perform AFM at its best.</p>
      <p>The fusion of a modern flexure-guided scanner, XYZ sample stage, camera, active vibration isolation table, and airflow shielding in a single all-in-one unit results in a complete AFM system with an unparalleled compact footprint. The system comes with a fully digital 24-bit controller developed specifically for the CoreAFM scanhead. All the essential functions of modern AFM are integral components of the CoreAFM system; all you need to do to take the CoreAFM into operation is connect the controller, and plug in power and USB.</p>
    </div>
  </div>

  <div class="product-discription p_relative d_block mb_80">
    <div class="tabs-box">
      <div class="tab-btn-box p_relative d_block mb_35">
     <div class="font-[MaxOT] text-xl py-3">
     <h2>Technical Data</h2></div>
      </div>

      <div class="tabs-content">
        <div class="tab active-tab" id="tab-1">
          <div class="content-box">
            <div class="eighty">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th width="50%"><b>Scanner</b></th>
                    <th width="25%">&nbsp;</th>
                    <th width="25%">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><b>Max. scan range (XY)</b></td><td>100 µm<sup>(1)</sup></td><td>&lt; 5 nm flatness</td></tr>
                  <tr><td><b>Max. height range (Z)</b></td><td>12 µm<sup>(2)</sup></td><td>closed loop</td></tr>
                  <tr><td><b>Detector noise (RMS)</b></td><td>typ. 60 pm</td><td>max. 100 pm</td></tr>
                  <tr><td><b>Sensor noise (RMS)</b></td><td>typ. 180 pm</td><td>max. 250 pm</td></tr>
                  <tr><td><b>Dynamic noise (RMS)</b></td><td>typ. 40 pm</td><td>max. 70 pm</td></tr>
                  <tr><td><b>Static noise (RMS)</b></td><td>typ. 100 pm</td><td>max. 200 pm</td></tr>
                  <tr>
                    <td colspan="3">
                      (1) Manufacturing tolerances ± 5%<br>
                      (2) Manufacturing tolerances ± 10%
                    </td>
                  </tr>
                </tbody>
              </table>

              <div style="height:50px"></div>

              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th width="50%"><b>Controller</b></th>
                    <th width="25%">&nbsp;</th>
                    <th width="25%">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><b>Scan control and inputs</b></td><td>24-bit ADC/DAC</td><td>200 kHz</td></tr>
                  <tr><td><b>Digital lock-in (2×)</b></td><td>16-bit ADC/DAC</td><td>20 MHz</td></tr>
                  <tr><td><b>User in/out, Excitation in</b></td><td>24-bit ADC/DAC</td><td>5 MHz, 10 V</td></tr>
                  <tr><td><b>Digital sync</b></td><td>2-bit line/frame sync out</td><td>5 V, TTL</td></tr>
                  <tr><td><b>Thermal tuning</b></td><td>10 Hz – 2 MHz</td><td>&nbsp;</td></tr>
                  <tr><td><b>FPGA, 32-bit CPU, 256 MB RAM</b></td><td>programmable</td><td>USB 2.0</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>                            
      </div>
    </div>
  </div>
</div>
  `,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

  "lensafm": {
    id: "lensafm",
    name: "LensAFM Integration",
    image: ImgLensAFM,
    bannerImg: Banner3,
    logo: Nanosurf,
    altText: "Nanosurf",
    videoId: "",
    meta: {
      title: "LensAFM Integration | Nanosurf | Inkarp India",
      description:
        "LensAFM extends the resolution of optical microscopes by up to 100×, combining AFM with optical imaging. Mountable like an objective and powered by the C3000i controller.",
      keywords: [
        "Nanosurf LensAFM",
        "LensAFM Integration",
        "AFM on optical microscope",
        "objective-mounted AFM",
        "C3000i controller",
        "Inkarp India"
      ],
      altText: "LensAFM AFM objective",
      internalLinks: ["nanosurf-integration"],
      externalLinks: ["https://www.nanosurf.com/en/"]
    },

    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:16px;">
  <style>
    h2, h3, h4, dt { color:#E63946; }
    .technical-data { color:#E63946; }
    table.table-bordered { border:1px solid #e5e7eb; border-collapse:collapse; width:100%; }
    table.table-bordered td, table.table-bordered th { border:1px solid #e5e7eb; padding:10px; vertical-align:top; color:#333; }
    table.table-bordered thead td, table.table-bordered thead th { background:#fafafa; font-weight:700; }
  </style>

  <div class="product-details p_relative d_block ml_20">
    <div class="text p_relative d_block mb_10">
      <p>Inkarp Instruments, a trusted Nanosurf partner, offers LensAFM Integration in India, seamlessly combining Atomic Force Microscopy (AFM) with optical microscopy. </p>
      <p class="font_family_poppins mb_10"><b>Extend the resolution of your optical microscope</b></p>
      <ul class="prod-det">
        <li>Mountable on virtually any optical microscope or 3D optical profilometer</li>
        <li>Extend your resolution capabilities by a factor of up to 100</li>
        <li>Combine optical and AFM techniques</li>
      </ul>
      <p>The Nanosurf LensAFM is an atomic force microscope that continues where optical microscopes and profilometers reach their resolution limits. It is mounted like a normal objective lens, thus extending the resolution and measuring capabilities of these instruments. The LensAFM not only provides 3D surface topography information, but can be used to analyze various physical properties of a measurement sample as well.</p>
    </div>
  </div>

  <div class="product-discription p_relative d_block mb_80">
    <div class="tabs-box">
       <div class="font-[MaxOT] text-xl py-3">
     <h2>Technical Data</h2></div>
      </div>

      <div class="tabs-content">
        <div class="tab active-tab" id="tab-1">
          <div class="content-box">

            <div style="height:8px"></div>
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th width="50%"><strong>LensAFM scan head specifications</strong></th>
                  <th width="25%" style="text-align:center;padding-right:20px">110-µm scan head</th>
                  <th width="25%" style="text-align:center;padding-right:20px">70-µm scan head</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Maximum scan range (XY)<sup>(1,2)</sup></strong></td><td style="text-align:center">110 µm</td><td style="text-align:center">70 µm</td></tr>
                <tr><td><strong>Maximum Z-range<sup>(1)</sup></strong></td><td style="text-align:center">22 µm</td><td style="text-align:center">14 µm</td></tr>
                <tr><td><strong>XY-linearity mean error</strong></td><td style="text-align:center">&lt; 0.6%</td><td style="text-align:center">&lt; 1.2%</td></tr>
                <tr><td><strong>Z-measurement noise level (RMS, static mode)<sup>(3)</sup></strong></td><td colspan="2" style="text-align:center">typ. 350 pm (max. 500 pm)</td></tr>
                <tr><td><strong>Z-measurement noise level (RMS, dynamic mode)<sup>(3)</sup></strong></td><td colspan="2" style="text-align:center">typ. 90 pm (max. 150 pm)</td></tr>
                <tr><td><strong>Automatic sample approach</strong></td><td colspan="2" style="text-align:center">Built-in motorized parallel approach with 4.5 mm travel</td></tr>
                <tr><td><strong>Cantilever alignment</strong></td><td colspan="2" style="text-align:center">Automatic self-adjustment through alignment chip technology</td></tr>
                <tr><td><strong>Sample observation<sup>(4)</sup></strong></td><td colspan="2" style="text-align:center">Built-in 8× objective lens with 45 or 60 mm parfocal distance</td></tr>
                <tr><td><strong>AFM measurement repositioning precision</strong></td><td colspan="2" style="text-align:center">±10 µm (including cantilever exchange, scan head remounting and approach)</td></tr>
                <tr>
                  <td colspan="3">
                    (1) Manufacturing tolerances are ±10% for 110-µm scan heads and ±15% for 70-µm scan heads<br>
                    (2) Maximum scan range at 45° rotation of the AFM scan direction<br>
                    (3) Measured using the C3000i controller, with active vibration isolation on a stable desk, and in a low-noise laboratory environment (no air conditioning)<br>
                    (4) Adapters with a correct parfocal distance are available for the different optical microscope types
                  </td>
                </tr>
              </tbody>
            </table>

            <div style="height:8px"></div>
            <table class="table table-striped table-bordered">
              <thead>
                <tr><th colspan="2"><strong>C3000i controller — Core hardware specifications</strong></th></tr>
              </thead>
              <tbody>
                <tr><td width="50%"><strong>X/Y/Z-axis scan and position controller</strong></td><td width="50%">3× 24-bit DAC (200 kHz)</td></tr>
                <tr><td><strong>X/Y/Z-axis position measurement</strong></td><td>1× 24-bit ADC (200 kHz)</td></tr>
                <tr><td><strong>Excitation &amp; modulation outputs</strong></td><td>2× 16-bit DAC (20 MHz)</td></tr>
                <tr><td><strong>Analog signal input bandwidth</strong></td><td>0–5 MHz</td></tr>
                <tr><td><strong>Main input signal capturing</strong></td><td>2× 16-bit ADC (20 MHz)<br>2× 24-bit ADC (200 kHz)</td></tr>
                <tr><td><strong>Additional user signal outputs</strong></td><td>1× 24-bit DAC (200 kHz)</td></tr>
                <tr><td><strong>Digital synchronization</strong></td><td>Sync Out 1/2: digital outputs, signal range 0/5V TTL pulses</td></tr>
                <tr>
                  <td style="vertical-align: middle"><strong>FPGA module and embedded processor</strong></td>
                  <td>ALTERA FPGA,<br>32-bit NIOS-CPU,<br>80 MHz, 256 MB RAM,<br>multitasking OS</td>
                </tr>
                <tr><td><strong>Communication</strong></td><td>USB 2.0 Hi-Speed to PC and scan head interface</td></tr>
                <tr><td><strong>System clock</strong></td><td>Internal quartz (10 MHz) or external clock</td></tr>
                <tr><td><strong>Power</strong></td><td>90–240 V AC, 70 W, 50/60Hz</td></tr>
              </tbody>
            </table>

            <div style="height:8px"></div>
            <table class="table table-striped table-bordered">
              <thead>
                <tr><th colspan="2"><b>Cantilever requirements</b></th></tr>
              </thead>
              <tbody>
                <tr><td width="50%"><b>Width</b></td><td width="50%">min. 28 μm</td></tr>
                <tr><td><b>Length</b></td><td>min. 225 μm or XY corrected</td></tr>
                <tr><td><b>Reflective coating</b></td><td>Required on complete cantilever</td></tr>
                <tr><td><b>Liquid measurements</b></td><td>Not possible</td></tr>
                <tr><td><b>Alignment grooves</b></td><td>Required</td></tr>
                <tr><td><b>Resonance frequency dynamic mode</b></td><td>15 kHz to 350 kHz</td></tr>
                <tr><td><b>Cantilever shape</b></td><td>Single rectangular cantilevers only</td></tr>
                <tr><td><b>Chip thickness</b></td><td>300 μm</td></tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

  "naniteafm": {
    id: "naniteafm",
    name: "NaniteAFM Integration",
    image: ImgNaniteAFM,
    bannerImg: Banner3,
    logo: Nanosurf,
    altText: "Nanosurf",
    videoId: "",
    meta: {
      title: "NaniteAFM Integration | Nanosurf | Inkarp India",
      description:
        "NaniteAFM is the smallest AFM for custom integration—ideal for automating serial measurements and handling large, heavy, or curved samples. Includes dual cameras and onboard approach motor.",
      keywords: [
        "Nanosurf NaniteAFM",
        "NaniteAFM Integration",
        "custom AFM integration",
        "AFM with optical microscope",
        "C3000i controller",
        "Inkarp India"
      ],
      altText: "NaniteAFM integrated AFM",
      internalLinks: ["nanosurf-integration"],
      externalLinks: ["https://www.nanosurf.com/en/"]
    },

    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:16px;">
  <style>
    /* Theme colors */
    h2, h3, h4, dt { color:#E63946; }
    .technical-data { color:#E63946; }
    /* Bordered tables */
    table.table-bordered { border:1px solid #e5e7eb; border-collapse:collapse; width:100%; }
    table.table-bordered td, table.table-bordered th { border:1px solid #e5e7eb; padding:10px; vertical-align:top; color:#333; }
    table.table-bordered thead td, table.table-bordered thead th { background:#fafafa; font-weight:700; }
  </style>

  <div class="product-details p_relative d_block ml_20">                                                                                                                                                                                                                    
    <div class="text p_relative d_block mb_10">
      <p>Inkarp Instruments, a trusted Nanosurf partner, offers NaniteAFM Integration in India, revolutionizing Atomic Force Microscopy (AFM) by seamlessly integrating with optical microscopes. </p>
      <p class="font_family_poppins mb_10"><b>The smallest AFM for custom integration</b></p>
      <ul class="prod-det">
        <li>Ideal for custom integration</li>
        <li>Automate serial measurements</li>
        <li>Copes with large, heavy, or curved samples</li>
      </ul>
      <p>The surface morphology is an important property for many high-tech surfaces with features that can go down to a few nanometers and surface roughness below the nanometer. With AFM such features can be readily analyzed under ambient conditions. Most AFMs are limited in the type and size of samples they can handle. The NaniteAFM by Nanosurf is the market leading solution for AFM integration with least restriction to the sample dimensions.</p>
      <p>The NaniteAFM has a tip-scanner, two inspection video cameras and an on-board approach motor in an exceptionally small footprint. It contains everything needed to operate independently, paving the way for easy integration: All you need is 300 cm3 in space and a stable docking site to mount the AFM.</p>
    </div>
  </div>

  <div class="product-discription p_relative d_block mb_80">
    <div class="tabs-box">
      <div class="font-[MaxOT] text-xl py-3">
     <h2>Technical Data</h2></div>
      </div>

      <div class="tabs-content">
        <div class="tab active-tab" id="tab-1">
          <div class="content-box">

            <div style="height:8px"></div>
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th width="40%" style="text-align:left;text-transform:none;"><strong>NaniteAFM scan head specifications</strong></th>
                  <th width="20%" style="text-align:left;text-transform:none;"><strong>110 µm</strong></th>
                  <th width="20%" style="text-align:left;text-transform:none;"><strong>70 µm</strong></th>
                  <th width="20%" style="text-align:left;text-transform:none;"><strong>25 µm</strong></th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Maximum scan range (XY)<sup>(1)</sup></strong></td><td>110 µm</td><td>70 µm</td><td>25 µm</td></tr>
                <tr><td><strong>Maximum Z-range<sup>(1)</sup></strong></td><td>22 µm</td><td>14 µm</td><td>5 µm</td></tr>
                <tr><td><strong>XY-linearity mean error</strong></td><td>&lt; 0.6%</td><td>&lt; 1.2%</td><td>&lt; 0.7%</td></tr>
                <tr><td><strong>Z-measurement noise level (RMS, static mode)</strong></td><td>typ. 350 pm (max. 500 pm)</td><td>typ. 350 pm (max. 500 pm)</td><td>typ. 80 pm (max. 150 pm)</td></tr>
                <tr><td><strong>Z-measurement noise level (RMS, dynamic mode)</strong></td><td>typ. 90 pm (max. 150 pm)</td><td>typ. 90 pm (max. 150 pm)</td><td>typ. 30 pm (max. 50 pm)</td></tr>
                <tr><td><strong>Mounting</strong></td><td colspan="3">Removable scan head (86 × 45 × 61 mm) with 3-point quick-lock mounting plate, mountable to Nanosurf or custom stages</td></tr>
                <tr><td><strong>Alignment of cantilever</strong></td><td colspan="3">Automatic self-alignment for cantilevers with alignment grooves</td></tr>
                <tr><td><strong>Automatic approach range</strong></td><td colspan="3">4.5 mm (1.5 mm below focal plane of internal optics)</td></tr>
                <tr>
                  <td><strong>Sample observation</strong></td>
                  <td colspan="3">Dual USB video camera system (simultaneous top and side view):<br>
                  5 MP, 1.4 mm × 1 mm, color top view and<br>
                  5 MP, 3.1 mm × 3.5 mm, color side view of sample and cantilever
                  </td>
                </tr>
                <tr><td><strong>Sample illumination</strong></td><td colspan="3">White LEDs (brightness 0–100%); Axial illumination for top view</td></tr>
                <tr>
                  <td colspan="4">
                    (1) Manufacturing tolerances are ±10% for the 110-µm scan head and ±15% for the 70- and 25-µm scan heads<br>
                    (2) Maximum scan range at 45° scan rotation
                  </td>
                </tr>
              </tbody>
            </table>

            <div style="height:8px"></div>
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th width="50%"><strong>C3000i controller — Core hardware specifications</strong></th>
                  <th width="50%">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>X/Y/Z-axis scan and position controller</strong></td><td>3× 24-bit DAC (200 kHz)</td></tr>
                <tr><td><strong>X/Y/Z-axis position measurement</strong></td><td>1× 24-bit ADC (200 kHz)</td></tr>
                <tr><td><strong>Excitation &amp; modulation outputs</strong></td><td>2× 16-bit DAC (20 MHz)</td></tr>
                <tr><td><strong>Analog signal input bandwidth</strong></td><td>0–5 MHz</td></tr>
                <tr><td><strong>Main input signal capturing</strong></td><td>2× 16-bit ADC (20 MHz)<br>2× 24-bit ADC (200 kHz)</td></tr>
                <tr><td><strong>Additional user signal outputs</strong></td><td>1× 24-bit DAC (200 kHz)</td></tr>
                <tr><td><strong>Digital synchronization</strong></td><td>2× digital out, 2× digital in, 2× I2C Bus</td></tr>
                <tr>
                  <td style="vertical-align: middle"><strong>FPGA module and embedded processor</strong></td>
                  <td>ALTERA FPGA,<br>32-bit NIOS-CPU,<br>80 MHz, 256 MB RAM,<br>multitasking OS</td>
                </tr>
                <tr><td><strong>Communication</strong></td><td>USB 2.0 Hi-Speed to PC and scan head interface</td></tr>
                <tr><td><strong>System clock</strong></td><td>Internal quartz (10 MHz) or external clock</td></tr>
                <tr><td><strong>Power</strong></td><td>90–240 V AC, 70 W, 50/60Hz</td></tr>
              </tbody>
            </table>

            <div style="height:8px"></div>
            <table class="table table-striped table-bordered">
              <thead>
                <tr><th colspan="2"><b>Cantilever requirements</b></th></tr>
              </thead>
              <tbody>
                <tr><td width="50%"><b>Width</b></td><td width="50%">min. 28 μm</td></tr>
                <tr><td><b>Length</b></td><td>min. 225 μm or XY corrected</td></tr>
                <tr><td><b>Reflective coating</b></td><td>Required on complete cantilever</td></tr>
                <tr><td><b>Liquid measurements</b></td><td>Not possible</td></tr>
                <tr><td><b>Alignment grooves</b></td><td>Required</td></tr>
                <tr><td><b>Resonance frequency dynamic mode</b></td><td>15 kHz to 350 kHz</td></tr>
                <tr><td><b>Cantilever shape</b></td><td>Single rectangular cantilevers only</td></tr>
                <tr><td><b>Chip thickness</b></td><td>300 μm</td></tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

  "flex-mount": {
    id: "flex-mount",
    name: "Flex-Mount Integration",
    image: ImgFlexMount,
    bannerImg: Banner3,
    logo: Nanosurf,
    altText: "Nanosurf",
    videoId: "",
    meta: {
      title: "Flex-Mount Integration | Nanosurf | Inkarp India",
      description:
        "Flex-Mount combines the high-resolution FlexAFM scan head with the integrability of NaniteAFM—ideal for large, non-planar, and demanding samples with customizable motorized stages.",
      keywords: [
        "Nanosurf Flex-Mount",
        "Flex-Mount Integration",
        "custom AFM integration",
        "large sample AFM",
        "C3000i controller",
        "Inkarp India"
      ],
      altText: "Flex-Mount AFM",
      internalLinks: ["nanosurf-integration"],
      externalLinks: ["https://www.nanosurf.com/en/"]
    },

    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:16px;">
  <style>
    /* Theme */
    h2, h3, h4, dt { color:#E63946; }
    .technical-data { color:#E63946; }
    /* Bordered table */
    table.table-bordered { border:1px solid #e5e7eb; border-collapse:collapse; width:100%; }
    table.table-bordered td, table.table-bordered th { border:1px solid #e5e7eb; padding:10px; vertical-align:top; color:#333; }
    table.table-bordered thead td, table.table-bordered thead th { background:#fafafa; font-weight:700; }
  </style>

  <div class="product-details p_relative d_block ml_20">                                                                                                                               
    <div class="text p_relative d_block mb_10">
      <p>Inkarp Instruments, a trusted Nanosurf partner, presents the Flex-Mount Integration in India, enhancing atomic force microscopy (AFM) capabilities.</p>
      <p class=" mb_10"><b>The essential AFM for custom integration</b></p>
      <p>Flex-Mount is a unique AFM that can be configured to acquire high-resolution information on large, non-planar and demanding samples. The Flex-Mount solution combines the superior resolution and performance of the Nanosurf FlexAFM scan head with the integrability of the Nanosurf NaniteAFM. The result is an AFM that can easily be attached to one of Nanosurf’s large, custom-built motorized translation stages and is thus able to characterize the surface of samples with weights and dimensions virtually no other AFM system can handle.</p>
      <ul class="prod-det">
        <li>Proven performance and reliability</li>
        <li>Automated measurements for additional ease of use</li>
        <li>Customizable stages to handle large samples of any shape and size</li>
      </ul>
    </div>
  </div>

  <div class="product-discription p_relative d_block mb_80">
    <div class="tabs-box">
      <div class="font-[MaxOT] text-xl py-3">
     <h2>Technical Data</h2></div>
      </div>

      <div class="tabs-content">
        <div class="tab active-tab" id="tab-1">
          <div class="content-box">

            <div style="height:15px"></div>
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th style="text-align: left; text-transform:none;" colspan="2"><strong>Flex-Mount scan head features</strong></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td width="35%"><strong>General design</strong></td>
                  <td width="65%" style="text-align:center">Mountable scan head with tip scanner; Flexure-based electro-magnetically actuated XY-scanner with superb linearity; Piezo-based Z-actuator; Optical Z-position sensor; Closed loop Z-control</td>
                </tr>
                <tr>
                  <td><b>Laser / detector</b></td>
                  <td style="text-align:center">High-speed, low-noise 4-quadrant photodiode detector; near-infrared SLD; laser on/off through software and scan head tilting; optical filters for use with optical microscope phase contrast and fluorescence</td>
                </tr>
                <tr>
                  <td><b>Approach</b></td>
                  <td style="text-align:center">50 mm z-stage with step-by-step approach; software-driven motorized coarse movement and automated final approach</td>
                </tr>
                <tr>
                  <td><b>Cantilever holder</b></td>
                  <td style="text-align:center">Automatic self-alignment for cantilevers with alignment grooves. Manual laser adjustment possible for special cantilevers.</td>
                </tr>
                <tr>
                  <td><b>Sample observation</b></td>
                  <td style="text-align:center">Top and side view in air and liquid; White LEDs (brightness 0–100%); Axial illumination for top view</td>
                </tr>
                <tr>
                  <td><b>Operating modes</b></td>
                  <td style="text-align:center">Static Force, Lateral Force, Dynamic Force, Phase Contrast, MFM, EFM, KPFM, Piezo Force, Force Modulation, Scanning Thermal, Spreading Resistance, Multiple Spectroscopy modes, Lithography and Manipulation modes. Some modes may require additional hardware and/or activating of the respective C3000 controller options.</td>
                </tr>
                <tr>
                  <td><b>Security out option (for stage controllers)</b></td>
                  <td style="text-align:center">Security mechanism to prevent severe scan head crash and to protect the sample. Includes table-top operating unit with emergency kill switch and manual security override for 3rd party stage control units by LSTEP or SmarAct.</td>
                </tr>
              </tbody>
            </table>

            <div style="height:15px"></div>
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th colspan="2" style="text-align: left; text-transform:none;"><strong>Flex-Mount scan head specifications</strong></th>
                </tr>
              </thead>
              <tbody>
                <tr><td width="65%"><strong>Sample size</strong></td><td width="35%" style="text-align:center">Stage-dependent</td></tr>
                <tr><td><b>Motorized approach range (at tip position; standard Z-stage)</b></td><td style="text-align:center">50 mm</td></tr>
                <tr><td><b>Max. scan range (XY)</b></td><td style="text-align:center">100 µm<sup>(1)</sup></td></tr>
                <tr><td><b>Max. height range (Z)</b></td><td style="text-align:center">10 µm<sup>(2)</sup></td></tr>
                <tr><td><b>XY-linearity mean error</b></td><td style="text-align:center">&lt; 0.1%</td></tr>
                <tr><td><b>XY-flatness at maximum scan range</b></td><td style="text-align:center">typ. 5 nm</td></tr>
                <tr><td><b>Detector bandwidth</b></td><td style="text-align:center">DC - 4 MHz</td></tr>
                <tr><td><b>Detector noise level (RMS)</b></td><td style="text-align:center">typ. 60 pm / max. 100 pm <sup>(3, 4)</sup></td></tr>
                <tr><td><b>Z-sensor noise level (RMS)</b></td><td style="text-align:center">typ. 180 pm / max. 200 pm <sup>(3)</sup></td></tr>
                <tr><td><b>Z-measurement noise level (RMS, static mode in air)</b></td><td style="text-align:center">typ. 100 pm / max. 200 pm</td></tr>
                <tr><td><b>Z-measurement noise level (RMS, dynamic mode in air)</b></td><td style="text-align:center">typ. 35 pm / max. 50 pm</td></tr>
                <tr><td><b>Scan head dimensions incl. Z-stage</b></td><td style="text-align:center">181 mm x 130 mm x 171 mm</td></tr>
                <tr><td><b>Scan head weight</b></td><td style="text-align:center">1.25 kg</td></tr>
                <tr>
                  <td colspan="2">
                    (1) Manufacturing tolerances ± 5%<br>
                    (2) Manufacturing tolerances ± 10%<br>
                    (3) Measured at 2 kHz<br>
                    (4) Measured with XYContr cantilever
                  </td>
                </tr>
              </tbody>
            </table>

            <div style="height:15px"></div>
            <table class="table table-striped table-bordered">
              <thead>
                <tr><th colspan="2"><strong>C3000i controller — Core hardware specifications</strong></th></tr>
              </thead>
              <tbody>
                <tr><td width="65%"><strong>X/Y/Z-axis scan and position controller</strong></td><td width="35%">3× 24-bit DAC (200 kHz)</td></tr>
                <tr><td><strong>X/Y/Z-axis position measurement</strong></td><td>1× 24-bit ADC (200 kHz)</td></tr>
                <tr><td><strong>Excitation &amp; modulation outputs</strong></td><td>2× 16-bit DAC (20 MHz)</td></tr>
                <tr><td><strong>Analog signal input bandwidth</strong></td><td>0–5 MHz</td></tr>
                <tr>
                  <td style="vertical-align: middle"><strong>Main input signal capturing</strong></td>
                  <td>2× 16-bit ADC (20 MHz)<br>2× 24-bit ADC (200 kHz)</td>
                </tr>
                <tr><td><strong>Additional user signal outputs</strong></td><td>1× 24-bit ADC (200 kHz)</td></tr>
                <tr><td><strong>Digital synchronization</strong></td><td>Sync Out 1/2: digital outputs, signal range 0/5V TTL pulses</td></tr>
                <tr>
                  <td style="vertical-align: middle"><strong>FPGA module and embedded processor</strong></td>
                  <td>ALTERA FPGA, 32-bit NIOS-CPU, 80 MHz, 256 MB RAM, multitasking OS</td>
                </tr>
                <tr><td><strong>Communication</strong></td><td>USB 2.0 Hi-Speed to PC and scan head interface</td></tr>
                <tr><td><strong>System clock</strong></td><td>Internal quartz (10 MHz) or external clock</td></tr>
                <tr><td><strong>Power</strong></td><td>90–240 V AC, 70 W, 50/60Hz</td></tr>
              </tbody>
            </table>

            <div style="height:15px"></div>
            <table class="table table-striped table-bordered">
              <thead>
                <tr><th colspan="2"><b>Cantilever specifications and requirements</b></th></tr>
              </thead>
              <tbody>
                <tr><td width="65%"><b>Width</b></td><td width="35%">min. 20 μm</td></tr>
                <tr><td><b>Length</b></td><td>min. 40 μm</td></tr>
                <tr><td><b>Reflective coating</b></td><td>Reflective coating recommended</td></tr>
                <tr><td><b>Liquid measurements</b></td><td>Yes, with gold coating</td></tr>
                <tr><td><b>Alignment grooves</b></td><td>Required by default<br>Special cantilever holders without alignment grooves are available</td></tr>
                <tr><td><b>Resonance frequency dynamic mode Easyscan 2 Controller</b></td><td>15 kHz to 350 kHz</td></tr>
                <tr><td><b>Resonance frequency dynamic mode C3000 Controller</b></td><td>&lt; 4 MHz</td></tr>
                <tr><td><b>Cantilever shape</b></td><td>Single rectangular cantilevers and multilever cantilevers (depending on scan head version and cantilever holder)</td></tr>
                <tr><td><b>Chip thickness</b></td><td>300 μm, 500 μm or 600 μm depending on cantilever holder</td></tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

  "industrial-solutions": {
    id: "industrial-solutions",
    name: "Industrial Solutions",
    image: ImgIndustrialSolutions,
    bannerImg: Banner3,        // optional; reuse or set a dedicated banner
    logo: Nanosurf,
    altText: "Nanosurf",
    videoId: "",
    meta: {
      title: "Nanosurf Industrial Solutions | Custom AFM Systems | Inkarp India",
      description:
        "Custom-designed Nanosurf AFM solutions for production, QA/QC, and large or complex samples—engineered and integrated to your process by Inkarp India.",
      keywords: [
        "Nanosurf Industrial Solutions",
        "custom AFM",
        "AFM integration",
        "quality control AFM",
        "production AFM",
        "large sample AFM",
        "Inkarp India"
      ],
      altText: "Industrial AFM Solutions",
      internalLinks: ["nanosurf-integration"],
      externalLinks: ["https://www.nanosurf.com/en/"]
    },

    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:18px;">
  <style>
    /* Theme */
    h2, h3, h4, dt { color:#E63946; }
  </style>

  <div class="product-details p_relative d_block ml_20">                                
    <figure class="image p_relative d_block prod-logo">
      <a href="lifesciences.html"><img src="/images/products/Nanosurf/Customization-process-flowchart.webp" alt="Nanosurf"></a>
    </figure>                                                                                                                   <p class="py-5 text-xl font-[MaxOT] text-[#E63946]">About our process<p>                                                      
    <div class="text p_relative d_block mb_10">
     
      <p>As atomic force microscopes continue to enter more and more areas of applications, especially in industry, production processes and quality control, standard AFM systems are often not suitable for the task at hand. For these cases, when you need the AFM to be fully integrated in a process, or your samples are too large for standard setups, Nanosurf offers the unique service of designing and developing custom AFM systems and stages that will allow you to perform your measurements with minimal disruption of your established process.</p>                                    
    </div>
  </div>

  <div class="col-lg-12 col-md-12 col-sm-12 content-column">
    <div class="product-details p_relative d_block ml_20">                                                                    
      <p>In close cooperation and in continuous dialog with you, our instrument development team will design and construct a system tailored to your exact needs. Contact us with a first description of your needs and we'll be happy to get back to you to discuss your project in depth.</p>                                    
      <p>After you first contact us with a request for a customization project, we organize a kick-off meeting with your project team and our engineers to fully understand your requirements. Based on this, Nanosurf develops a solution concept and prepares a quotation. The next step is a joint discussion of our solution concept. When you place your order based on the concept and quotation, our engineers develop your solution and build it in close collaboration with our partners. Finally, we test the system, deliver and install it at your facility.</p>
      <p>Over the years of designing custom AFM-based systems, Nanosurf has now has unparalleled experience when it comes to highly complex solutions. The Industrial Solutions business unit has grown to a team of 12 highly skilled engineers, physicists, AFM experts and software developers. Example: Motorized XYZΦ translation stage.</p>
      <p><strong>Engineered to your requirements</strong></p>
      <p>Engineered for the quality control of large glass samples, this custom stage keeps all movement below the sample, mitigating the risk of contamination by abrasions in moving components. The manual change of the scan head position in two defined positions keeps the overall dimensions of the stage small while still allowing access to the whole sample under the same relative orientation.</p>
    </div>  
  </div>
</div>
  `,

    // keep arrays for UI .map()
    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

  "alphacen-300": {
    id: "alphacen-300",
    name: "Alphacen 300",
    image: ImgAlphacen300,
    bannerImg: Banner3, // optional banner
    logo: Nanosurf,
    altText: "Nanosurf",
    videoId: "",
    meta: {
      title: "Alphacen 300 | Large & Heavy Sample AFM | Nanosurf | Inkarp India",
      description:
        "Tip-scanning AFM with 300 × 300 mm stage and up to 45 kg samples. Active vibration isolation, motorized XY, and high-resolution imaging for industrial and research QA/QC.",
      keywords: [
        "Alphacen 300",
        "Nanosurf Alphacen",
        "large sample AFM",
        "heavy sample AFM",
        "300 mm wafer AFM",
        "industrial AFM",
        "Inkarp India"
      ],
      altText: "Alphacen 300 AFM",
      internalLinks: [],
      externalLinks: ["https://www.nanosurf.com/en/"]
    },

    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:18px;">
  <style>
    /* Theme */
    h2, h3, h4, dt { color:#E63946; }
    .technical-data { color:#E63946; }
    /* Bordered tables */
    table.table-bordered { border:1px solid #e5e7eb; border-collapse:collapse; width:100%; }
    table.table-bordered td, table.table-bordered th { border:1px solid #e5e7eb; padding:10px; vertical-align:top; color:#333; }
    table.table-bordered thead td, table.table-bordered thead th { background:#fafafa; font-weight:700; }
  </style>

  <div class="product-details p_relative d_block ml_20">                                
    <figure class="image p_relative d_block prod-logo">
      <a href="lifesciences.html"><img src="/images/products/Nanosurf/Customization-process-flowchart.webp" alt="Nanosurf"></a>
    </figure>                                                                                                                                                                                      
    <div class="text p_relative d_block mb_10">
      <p class="">The tip-scanning AFM for heavy and large samples up to 300 mm</p>
      <ul class="prod-det">
        <li>Standard AFM system</li>
        <li>300 mm x 300 mm sample stage</li>
        <li>Ideal for samples up to 45 kg</li>
      </ul>
      <p>Nanosurf is the market leader for custom developed systems for large and heavy samples. Over the past years our team has built a substantial knowledge base developing these custom stages for various customers.</p>                                    
      <p>Utilizing this vast body of knowledge, we have now developed a standard product for large samples up to 300 mm or heavy samples up to 45 kg. The Alphacen 300 reduces the price and the delivery time compared to a custom system.</p>
    </div>
  </div>

  <div class="product-discription p_relative d_block mb_80">
    <div class="tabs-box">
       <div class="font-[MaxOT] text-xl py-3">
     <h2>Technical Data</h2></div>
      </div>

      <div class="tabs-content">
        <div class="tab active-tab" id="tab-1">
          <div class="content-box">

            <div style="height:8px"></div>
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th width="45%"><b>Scanner</b></th>
                  <th width="30%">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><b>Scan head type</b></td><td>Tip scanner</td></tr>
                <tr><td><b>Max. scan range (XY)</b></td><td>100 µm<sup>(1)</sup></td></tr>
                <tr><td><b>Max. Z-range</b></td><td>10 µm<sup>(1)</sup></td></tr>
                <tr><td><b>XY linearity mean error</b></td><td>&lt; 0.1%</td></tr>
                <tr><td><b>XY flatness at max. scan range</b></td><td>typ. 5 nm</td></tr>
                <tr><td><b>Z-sensor noise-level (RMS)</b></td><td>typ. 150 pm / max. 200 pm</td></tr>
                <tr><td><b>Z-measurement noise level<br>(RMS, static mode in air)</b></td><td>typ. 100 pm / max. 200 pm</td></tr>
                <tr><td><b>Z-sensor noise level<br>(RMS, dynamic mode in air)</b></td><td>typ. 25 pm / max. 35 pm</td></tr>
                <tr><td><b>Optical detection light source</b></td><td>850 nm low coherence SLD</td></tr>
                <tr><td><b>DC Detector noise</b></td><td>&lt; 10 pm RMS (0.1 Hz to 1 kHz)</td></tr>
                <tr><td><b>AC Detector noise</b></td><td>&lt; 60 fm Hz<sup>-1/2</sup> above 100 kHz</td></tr>
                <tr><td><b>Detector bandwidth</b></td><td>DC to 4 MHz</td></tr>
                <tr><td>(1) Manufacturing tolerances ± 10%</td></tr>
              </tbody>
            </table>

            <div style="height:8px"></div>
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th width="45%"><b>Stage</b></th>
                  <th width="30%">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><b>Top view field of view</b></td><td>5 MP, 1.5 mm x 1.1 mm</td></tr>
                <tr><td><b>Side view field of view</b></td><td>5 MP, 3.2 mm x 3.2 mm</td></tr>
                <tr><td><b>Max. sample size</b></td><td>300 mm x 300 mm x 45 mm</td></tr>
                <tr><td><b>Max. sample weight </b></td><td>40 kg </td></tr>
                <tr><td><b>Vacuum chuck for </b></td><td>4’’ / 6’’ / 8’’ / 12’’ wafers </td></tr>
                <tr><td><b>Motorized XY travel range </b></td><td>300 mm x 300 mm </td></tr>
                <tr><td><b>Motorized approach range </b></td><td>50 mm </td></tr>
                <tr><td><b>System dimensions </b></td><td>1008 mm x 1887 mm x 1208 mm (fits through 800 mm door prior to assembling the acoustic enclosure)</td></tr>
                <tr><td><b>System weight </b></td><td>833 kg </td></tr>
                <tr><td><b>Stage XY resolution </b></td><td>&lt; 1 µm </td></tr>
                <tr><td><b>Unilateral repositioning accuracy </b></td><td>2 µm</td></tr>
                <tr><td><b>Acoustic isolation </b></td><td>~30 dB above 250 Hz </td></tr>
                <tr><td><b>Vibration isolation </b></td><td>Active vibration isolation </td></tr>
              </tbody>
            </table>

            <div style="height:8px"></div>
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th width="45%"><b>Controller</b></th>
                  <th width="30%">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><b>High resolution outputs (DAC)</b></td><td>12x 28 bit, 1 MHz/sampling; thereof 4x user DAC, ±10V/3dB@200kHz</td></tr>
                <tr><td><b>Fast outputs (DAC)</b></td><td>4x 16 bit, 100 MHz/sampling; thereof 1x user DAC, ±1V/3dB@10MHz</td></tr>
                <tr><td><b>High resolution inputs (ADC)</b></td><td>10x 20 bit, 1 MHz/sampling; thereof 4x user ADC, ±10V/3dB@200kHz</td></tr>
                <tr><td><b>Fast inputs (ADC)</b></td><td>3x 16 bit, 100 MHz/sampling; thereof 1x user ADC, ±1V/3dB@10MHz</td></tr>
                <tr><td><b>Signal analyzer</b></td><td>2 signal analyzer function blocks that can be configured as dual channel lock-in</td></tr>
                <tr><td><b>FPGA module and embedded processor</b></td><td>System-on-chip module with low-latency FPGA signal processing at 100MHz and dual-core ARM processor, 2GB RAM, 1.5GHz clock</td></tr>
                <tr><td><b>Scan control</b></td><td>28Bit X/Y/Z-DAC with ±10V/3dB@200kHz</td></tr>
                <tr><td><b>Detector inputs</b></td><td>Deflection/lateral signals each 16 bit/3dB@10MHz and 28 bit/3dB@200kHz</td></tr>
                <tr><td><b>Digital sync, Spike-Guard</b></td><td>2-bit line/frame sync out 5 V/TTL galvanically isolated, Spike-Guard input</td></tr>
                <tr><td><b>Clock sync</b></td><td>10MHz/3V clock input to synchronize data acquisition and processing</td></tr>
                <tr><td><b>Communication to PC</b></td><td>Gigabit Ethernet, galvanically isolated</td></tr>
              </tbody>
            </table>

            <div style="height:30px"></div>
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th width="50%"><b>Cantilever</b></th>
                  <th width="50%">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><b>Width</b></td><td>min. 20 μm</td></tr>
                <tr><td><b>Length</b></td><td> min. 40 μm</td></tr>
                <tr><td><b>Reflective coating</b></td><td>Reflective coating recommended</td></tr>
                <tr><td><b>Liquid measurements</b></td><td>Yes, with gold coating</td></tr>
                <tr><td><b>Alignment grooves</b></td><td>Required by default<br>Special cantilever holders without alignment grooves are available</td></tr>
                <tr><td><b>Cantilever shape</b></td><td>Single rectangular cantilevers and multilever cantilevers (depending on scan head version and cantilever holder)</td></tr>
                <tr><td><b>Chip thickness</b></td><td>300 μm, 500 μm or 600 μm depending on cantilever holder</td></tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,

    // keep arrays for safe .map()
    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

  "naioafm": {
    id: "naioafm-compact",
    name: "NaioAFM Compact",
    image: ImgNaioAFM,
    bannerImg: Banner3, // optional
    logo: Nanosurf,
    altText: "Nanosurf",
    videoId: "",
    meta: {
      title: "NaioAFM Compact | Nanosurf | Inkarp India",
      description:
        "All-in-one plug-and-play AFM for nanoeducation and basic research. Easy to use, compact footprint, and all standard operating modes.",
      keywords: [
        "NaioAFM",
        "NaioAFM Compact",
        "Nanosurf AFM",
        "compact AFM",
        "education AFM",
        "entry level AFM",
        "Inkarp India"
      ],
      altText: "NaioAFM Compact",
      internalLinks: [],
      externalLinks: ["https://www.nanosurf.com/en/"]
    },

    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:18px;">
  <style>
    /* Theme */
    h2, h3, h4, dt { color:#E63946; }
    .technical-data { color:#E63946; }
    /* Bordered tables */
    table.table-bordered { border:1px solid #e5e7eb; border-collapse:collapse; width:100%; }
    table.table-bordered td, table.table-bordered th { border:1px solid #e5e7eb; padding:10px; vertical-align:top; color:#333; }
    table.table-bordered thead td, table.table-bordered thead th { background:#fafafa; font-weight:700; }
  </style>

  <div class="product-details p_relative d_block ml_20">                                                                                                                               
    <div class="text p_relative d_block mb_10"> 
      <p>Inkarp Instruments, a trusted Nanosurf partner, presents the NaioAFM Compact in India, a revolutionary, compact Atomic Force Microscope (AFM) ideal for research and industrial applications.</p>                                   
      <ul class="prod-det">
        <li>All-in-one plug-and-play AFM system</li>
        <li>Famously easy to use</li>
        <li>All standard operating modes available</li>
      </ul>
      <p>The NaioAFM is the ideal atomic force microscope for nanoeducation and basic research on small samples. This all-in-one AFM system provides solid performance and easy handling, with a price tag and footprint that fit anyone and any place.</p>
    </div>
  </div>

  <div class="product-discription p_relative d_block mb_80">
    <div class="tabs-box">
      <div class="font-[MaxOT] text-xl py-3">
     <h2>Technical Data</h2></div>
      </div>

      <div class="tabs-content">
        <div class="tab active-tab" id="tab-1">
          <div class="content-box">

            <div style="height:15px"></div>
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th width="50%"><strong>Scanner</strong></th>
                  <th width="50%">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Max. scan range / scan height (resolution) <sup>(1)</sup></strong></td>
                  <td>70 μm (1.0 nm) / 14 μm (0.2 nm)</td>
                </tr>
                <tr>
                  <td><strong>Static / Dynamic RMS Z-noise</strong></td>
                  <td>typ. 0.4 nm (max. 0.8 nm) / typ. 0.3 nm (max. 0.8 nm)</td>
                </tr>
                <tr>
                  <td><strong>Max. sample size / height</strong></td>
                  <td>12 mm / 3.5 mm</td>
                </tr>
                <tr>
                  <td><strong>Max. sample stage positioning range</strong></td>
                  <td>12 mm travel in each direction (6 mm from center to all sides)</td>
                </tr>
                <tr>
                  <td><strong>Top view camera</strong></td>
                  <td>1.5 × 1 mm FOV, 4× digital zoom, 2 μm optical resolution, 2048 × 1536 px, in-axis LED illumination</td>
                </tr>
                <tr>
                  <td><strong>Side view observation</strong></td>
                  <td>5 × 5 mm FOV, variable LED illumination (optional side view camera: 2 × 2 mm FOV, 1280 × 1024 px)</td>
                </tr>
                <tr>
                  <td><strong>Approach</strong></td>
                  <td>4 mm linear motor, continuous or step-by-step approach</td>
                </tr>
                <tr>
                  <td colspan="2">(1) Manufacturing tolerances are ±10%</td>
                </tr>
              </tbody>
            </table>

            <div style="height:15px"></div>
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th width="50%"><b>Cantilever requirements</b></th>
                  <th width="50%">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><b>Width</b></td><td>min. 28 μm</td></tr>
                <tr><td><b>Length</b></td><td>min. 225 μm or XY corrected</td></tr>
                <tr><td><b>Reflective coating</b></td><td>Required on complete cantilever</td></tr>
                <tr><td><b>Liquid measurements</b></td><td>Not possible</td></tr>
                <tr><td><b>Alignment grooves</b></td><td>Required</td></tr>
                <tr><td><b>Resonance frequency dynamic mode</b></td><td>15 kHz to 350 kHz</td></tr>
                <tr><td><b>Cantilever shape</b></td><td>Single rectangular cantilevers only</td></tr>
                <tr><td><b>Chip thickness</b></td><td>300 μm</td></tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,

    // keep arrays for safe .map()
    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

  "naiostm": {
    id: "naiostm",
    name: "NaioSTM Compact",
    image: ImgNaioSTM,
    bannerImg: Banner3, // optional
    logo: Nanosurf,
    altText: "Nanosurf",
    videoId: "",
    meta: {
      title: "NaioSTM Compact | Nanosurf | Inkarp India",
      description:
        "All-in-one scanning tunneling microscope for easy entry into atomic-scale imaging. Tiny footprint, fast setup, and atomic resolution in minutes.",
      keywords: [
        "NaioSTM",
        "NaioSTM Compact",
        "Nanosurf STM",
        "scanning tunneling microscope",
        "atomic resolution",
        "education STM",
        "Inkarp India"
      ],
      altText: "NaioSTM Compact",
      internalLinks: [],
      externalLinks: ["https://www.nanosurf.com/en/"]
    },

    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:18px;">
  <style>
    /* Theme */
    h2, h3, h4, dt { color:#E63946; }
    .technical-data { color:#E63946; }
    /* Bordered tables */
    table.table-bordered { border:1px solid #e5e7eb; border-collapse:collapse; width:100%; }
    table.table-bordered td, table.table-bordered th { border:1px solid #e5e7eb; padding:10px; vertical-align:top; color:#333; }
    table.table-bordered thead td, table.table-bordered thead th { background:#fafafa; font-weight:700; }
  </style>

  <div class="product-details p_relative d_block ml_20">                                                                                                                                
    <div class="text p_relative d_block mb_10">   
      <p>Inkarp Instruments, a trusted Nanosurf partner, introduces the NaioSTM Compact in India, a cutting-edge Scanning Tunneling Microscope (STM) ideal for research and industrial applications.</p>                                 
      <p class="font_family_poppins mb_10">The all-in-one STM microscope for easy entry into the world of atoms</p>
      <ul class="prod-det">
        <li>Small mechanical loop provides excellent stability</li>
        <li>Atomic resolution in 5 minutes</li>
        <li>Tiny footprint, easy to store and transport</li>
      </ul>
      <p>The first scanning tunneling microscope (STM) was developed in 1981 by Gerd Binnig and Heinrich Rohrer at the IBM Research Laboratory in Rüschlikon, Switzerland, making individual atoms directly visible. They were awarded the Nobel Prize in Physics in 1986. In 1997, Nanosurf brought single atoms to the classroom.</p>
      <p>The NaioSTM combines scan head and controller into one instrument for simpler installation, maximized ease of use, and straightforward transportability. Robust against vibrations, it achieves atomic resolution on HOPG in standard classroom situations. With its 204 × 204 mm footprint it hardly takes up any workbench space.</p>
    </div>
  </div>

  <div class="product-discription p_relative d_block mb_80">
    <div class="tabs-box">
      <div class="tab-btn-box p_relative d_block mb_35">
        <ul class="tab-btns tab-buttons clearfix">
          <h2 class="tab-btn active-btn p_relative d_iblock technical-data fs_20 font_family_inter lh_20 float_left fw_medium z_1 mr_35 tran_5" data-tab="#tab-1">Technical Data</h2>                                
        </ul>
      </div>

      <div class="tabs-content">
        <div class="tab active-tab" id="tab-1">
          <div class="content-box">
            <div style="height:15px"></div>
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th width="50%"><strong>NaioSTM Specifications</strong></th>
                  <th width="50%">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Max. scan range (XYZ)<sup>(1)</sup></strong></td>
                  <td>500 nm × 500 nm × 200 nm</td>
                </tr>
                <tr>
                  <td><strong>Scan resolution (XYZ) <sup>(2)</sup></strong></td>
                  <td>7.6 pm × 7.6 pm × 3.1 pm</td>
                </tr>
                <tr>
                  <td><strong>Current amplifier</strong></td>
                  <td>0.1–100 nA in 25 pA steps</td>
                </tr>
                <tr>
                  <td><strong>Sample approach</strong></td>
                  <td>Stick-slip motor</td>
                </tr>
                <tr>
                  <td><strong>Sample size</strong></td>
                  <td>Max. 10 mm diameter, max. 3 mm thickness</td>
                </tr>
                <tr>
                  <td><strong>Data points</strong></td>
                  <td>Imaging: up to 2048 × 2048, Spectroscopy: up to 65,535</td>
                </tr>
                <tr>
                  <td><strong>Imaging speed</strong></td>
                  <td>Up to 10 Hz</td>
                </tr>
                <tr>
                  <td><strong>Computer requirements</strong></td>
                  <td>USB 2.0, Windows 7 or higher (32- or 64-bit)</td>
                </tr>
                <tr>
                  <td><strong>Power supply</strong></td>
                  <td>90–240 V AC, 50/60 Hz, 30 W</td>
                </tr>
                <tr>
                  <td><strong>Size (W × D × H), Weight</strong></td>
                  <td>204 × 204 × 104 mm, 3.45 kg</td>
                </tr>
                <tr>
                  <td colspan="2">(1) Typical values.<br>(2) Calculated by dividing the maximum range by 16 bits.</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>                            
      </div>
    </div>
  </div>
</div>
  `,

    // keep arrays for safe .map()
    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

  "p4pro-and-affipump": {
    id: "p4pro-and-affipump",
    name: "P4PRO and Affipump",
    image: ImgP4pro,
    bannerImg: Banner3, // optional
    logo: Affinite,
    altText: "Affinite Instruments",
    videoId: "",
    meta: {
      title: "P4PRO & Affipump Distributor and Service Provider in India | Affinite Instruments | Inkarp",
      description:
        "Inkarp Instruments is the official distributor and service provider of the P4PRO & Affipump benchtop SPR system in India. Discover high-accuracy biomolecular interaction analysis for protein research, drug discovery, biosensing, and environmental testing.",
      keywords: [
        "P4PRO India",
        "Affipump India",
        "Benchtop SPR India",
        "Surface Plasmon Resonance",
        "Biomolecular Interaction Analysis",
        "P4PRO & Affipump Distributor in India",
        "P4PRO & Affipump Service Provider in India"
      ],
      altText: "P4PRO & Affipump_Affinite Instruments_Inkarp",
      internalLinks: ["Related Products"],
      externalLinks: ["https://www.affiniteinstruments.com/pro-and-pump"]
    },

    description: `
  <div class="text-[18px] leading-7 text-gray-700 font-[Roboto] space-y-4">
    <!-- Intro -->
    <p>
      The P4PRO &amp; Affipump by Affinité Instruments is not your average benchtop SPR system. Designed to deliver real-time, high-accuracy biomolecular interaction analysis, it empowers researchers across protein science, drug discovery, biosensing, and environmental testing. With its compact design and powerful flow-control technology, P4PRO brings the accuracy of advanced SPR systems directly to your laboratory bench — making it affordable, easy-to-use, and highly reliable.
    </p>
    <p>
      The P4PRO &amp; Affipump is a 4-channel benchtop Surface Plasmon Resonance (SPR) device designed for studying biomolecular interactions quickly and accurately. It enables scientists to characterize binding affinity, specificity, and kinetics without the need for labels or dyes. Whether you are analyzing protein–protein interactions, developing new drug candidates, or building advanced biosensors, P4PRO delivers precise and reproducible data in minutes.
    </p>

    <!-- Perfect For -->
    <section class="mt-6">
      <h2 class="font-[MaxOT] text-xl text-[#E63946] mb-3">P4PRO &amp; Affipump Perfect For</h2>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Protein Research</strong> – Gain deeper insights into how proteins interact.</li>
        <li><strong>Drug Discovery</strong> – Accelerate therapeutic development with real-time binding kinetics.</li>
        <li><strong>Biosensing</strong> – Detect biological changes in real-world samples without labels.</li>
        <li><strong>Environmental Testing</strong> – Monitor pollutants, toxins, and chemicals in complex matrices.</li>
      </ul>
    </section>

    <!-- Affipump Section -->
    <section class="mt-8">
      <h2 class="font-[MaxOT] text-xl text-[#E63946] mb-2">Meet the Affipump – High Accuracy Dual-Syringe Pump</h2>
      <p class="mb-4">
        At the core of the system is the Affipump, a dual-syringe pump engineered for unparalleled precision and flow control. It ensures smooth liquid delivery with ultra-low pulsation, making it the ultimate companion for flow-based SPR analysis.
      </p>

      <h2 class="font-semibold text-gray-900 text-lg mb-2">Key Highlights:</h2>
      <ul class="list-disc ml-6 space-y-2">
        <li>Ultra-low pulsation for stable flow and reliable results</li>
        <li>High-speed control for dynamic kinetic studies</li>
        <li>Extended flow rate range from 5 nL/s up to 5 mL/s</li>
        <li>Flexible operation – run individually or in tandem for higher throughput</li>
      </ul>
    </section>
  </div>
`,

    features: [
      { overview: "The P4PRO & Affipump combines advanced Surface Plasmon Resonance (SPR) technology with powerful flow-control precision to deliver fast, reliable, and label-free biomolecular interaction analysis. Designed for protein research, drug discovery, biosensing, and environmental testing, it offers unmatched flexibility, ease of use, and affordability in a compact benchtop system." },

      {
        name: "Semi-automated sample delivery",
        description: "Reduces hands-on time and increases efficiency."
      },
      {
        name: "Minimal sample processing artifacts",
        description: "Ensures reproducible and reliable results."
      },
      {
        name: "Direct, real-time inline controls",
        description: "Multi-channel capability for precise monitoring."
      },
      {
        name: "Compact benchtop design",
        description: "Saves lab space while maintaining high performance."
      },
      {
        name: "Multi-channel (4) parallel analysis",
        description: "Enables higher throughput and reference subtraction."
      },
      {
        name: "Dual mode flexibility",
        description: "Switch seamlessly between static and flow analysis for immobilization and kinetic studies."
      }


    ],

    advantages: [

      {

        name: "Precise Kinetics",
        description: "High-precision Affipump ensures accurate on-rate, off-rate, affinity, and specificity measurements."
      },
      {
        name: "Time-Saving",
        description: "Run assays directly at your bench without waiting for shared instruments."
      },
      {
        name: "Affordable",
        description: "Brings advanced Surface Plasmon Resonance performance at a cost-effective benchtop price."
      },
      {
        name: "User-Friendly",
        description: "Intuitive software and assay kits make setup and operation simple, even for new users."
      },
      {
        name: "Versatile Applications",
        description: "Supports biophysical characterization, biosensing, and bioanalytical research, making it suitable for a wide range of scientific fields."
      },
      {
        name: "Reliable Support in India",
        description: "With Inkarp Instruments as the authorized distributor and service provider, you gain expert installation, calibration, training, and fast technical service across India."
      },

    ],

    //     Applications Of P4PRO & Affipump
    // The P4PRO & Affipump is a versatile benchtop SPR system designed to meet the needs of diverse research and industrial sectors. From protein research and drug discovery to biosensing, diagnostics, environmental monitoring, and academic training, it provides real-time, label-free insights that enhance precision, accelerate workflows, and support innovative scientific breakthroughs.
    // Protein Research – Study protein–protein and protein–ligand interactions with real-time kinetics and affinity data.
    // Drug Discovery – Accelerate hit identification, lead optimization, and biologics development with precise binding analysis.
    // Biosensing & Diagnostics – Detect biomarkers and pathogens in complex samples without labels or dyes.
    // Environmental Testing & Food Safety – Monitor pollutants, toxins, pesticides, and allergens in real-world samples.
    // Bioanalytical Research – Perform yes/no binding, concentration analysis, and specificity testing with ease.
    // Academic Research & Training – Affordable benchtop platform for teaching, proof-of-concept, and applied SPR studies.

    // highlights: [
    //   { overview: "The Hei-VAC Valve Tec Vacuum Pump stands out as a premier choice for laboratories seeking efficient, reliable, and precise vacuum solutions. Its fast evacuation capabilities, seamless integration with Hei-VAP systems, and user-friendly design make it ideal for a variety of solvent-based applications. With enhanced safety features, low operational costs, and environmentally conscious options, it delivers exceptional value for research and industrial labs alike." },
    //   { name: "Fast Evacuation for Improved Workflow",
    //     description: "Quickly reduces pressure in rotary evaporation setups, minimizing wait times and enhancing overall lab efficiency." },
    //   { name: "Optimized for Low to Medium Boiling Point Solvents",
    //     description: "Specifically designed to handle common laboratory solvents, ensuring reliable performance in standard evaporation tasks." },
    // ],

    // overview: "The P4PRO & Affipump is engineered for precision and versatility in Surface Plasmon Resonance analysis. With a compact benchtop design, it features 4-channel simultaneous readings, flexible flow rates, semi-automated sample delivery, and rapid run cycles. Offering femtomolar detection limits and a wide kinetic range, it ensures accurate measurement of affinity, association, and dissociation rates. Reliable, user-friendly, and efficient, it meets the needs of modern research labs.",

    techSpecs: {

      Weight: "4.7 kg and 2.5 kg",
      Dimensions: "25 × 25 × 13.5 cm and 20 × 9.5 × 27 cm",
      Mode: "Flow",
      "Number of Channels": "4 channels (simultaneous reading, 2 active)",
      "Flow Rate Range": "1–200 µL/min (0.3–60,000 µL/min outside)",
      "Injection Volume Required": "50–150 µL",
      "Detection Rate": "1 or 5 Hz",
      "Sample Introduction Mode": "Semi-automated",
      "Run Time per Cycle": "Minimum 30 seconds",
      "Operating Temperature": "Ambient",
      "Power Requirement": "24V",
      "Performance – Detection Limit": "fM (assay dependent)",
      "Performance – Association Rate (kon)": "10³ – 10⁷ M⁻¹s⁻¹",
      "Performance – Dissociation Rate (koff)": "10⁻⁵ – 10⁻¹ s⁻¹",
      "Performance – Affinity Constant (KD)": "≥ pM"
    },

    faqs: [

      {
        question: "What is P4PRO & Affipump and how does it work?",
        answer:
          "The P4PRO & Affipump is a benchtop Surface Plasmon Resonance (SPR) system designed to study biomolecular interactions in real time. It measures binding affinity, kinetics, and specificity without labels or dyes. With its high-precision dual-syringe Affipump, it ensures ultra-low pulsation flow, delivering accurate kinetic data for applications in protein research, drug discovery, biosensing, and environmental analysis."
      },
      {
        question: "Why use P4PRO & Affipump instead of traditional SPR systems?",
        answer:
          "Unlike bulky and costly traditional SPR instruments, the P4PRO & Affipump offers compact, benchtop accessibility without compromising accuracy. It provides multi-channel, real-time data at a fraction of the cost, making advanced SPR affordable for both academic and industrial labs. Its dual-mode flexibility allows researchers to switch between static and flow analysis, saving time while ensuring reproducibility and reliability."
      },
      {
        question: "What are the key applications of P4PRO & Affipump?",
        answer:
          "The P4PRO & Affipump is widely used in protein research, drug discovery, biosensing, diagnostics, and environmental testing. It enables rapid analysis of molecular interactions, pollutant monitoring, biomarker validation, and biosensor development. Its versatility makes it suitable for pharmaceutical R&D, academic research, and bioanalytical studies, delivering real-time, label-free data critical for innovation and quality control."
      },
      {
        question: "How does the Affipump improve kinetic analysis?",
        answer:
          "The Affipump is a dual-syringe pump engineered for precise flow control during SPR experiments. It ensures ultra-low pulsation and smooth liquid delivery, preventing data artifacts and enhancing reproducibility. With an extended flow rate range from 5 nL/s to 5 mL/s, it supports both low-volume and high-throughput assays. This precision makes the P4PRO & Affipump ideal for capturing accurate on-rate, off-rate, and affinity constants."
      },
      {
        question: "Why is SPR important in drug discovery?",
        answer:
          "SPR is critical in pharmaceutical R&D because it provides real-time data on drug–target binding. The P4PRO & Affipump helps researchers measure association and dissociation rates, affinity constants, and specificity of drug candidates. This accelerates hit-to-lead optimization, reduces false positives, and ensures reliable therapeutic selection. By replacing time-consuming labeled assays, SPR delivers faster, more accurate results for drug discovery pipelines."
      },
      {
        question: "Is the P4PRO & Affipump suitable for academic research?",
        answer:
          "Yes. The P4PRO & Affipump is designed to be affordable, user-friendly, and compact, making it ideal for universities and training institutes. It allows students and researchers to study real-time molecular interactions, perform proof-of-concept experiments, and learn SPR principles without the need for large-scale systems. Its intuitive software and assay kits simplify workflows, making advanced research accessible to academic environments."
      },
      {
        question: "How does P4PRO & Affipump support biosensing and diagnostics?",
        answer:
          "The P4PRO & Affipump enables the detection of biomarkers, pathogens, and analytes in complex media such as blood or saliva. Its real-time, label-free detection provides faster and more reliable data compared to traditional assays. Researchers can use it to validate diagnostic biomarkers, develop next-generation biosensors, and test clinical samples with high sensitivity, making it a valuable tool for healthcare and life sciences innovation."
      },
      {
        question: "Can P4PRO & Affipump be used for environmental testing?",
        answer:
          "Yes. The P4PRO & Affipump extends SPR technology into environmental and food safety applications. It can detect pollutants, toxins, pesticides, and allergens in complex matrices such as water, soil, or food extracts. With high sensitivity and reproducibility, it delivers rapid results, supporting regulatory compliance, quality control, and sustainability research. This makes it an essential solution for laboratories focused on environmental monitoring."
      },
      {
        question: "Why choose Inkarp Instruments for P4PRO & Affipump in India?",
        answer:
          "Inkarp Instruments is the authorized distributor and service provider of Affinité Instruments’ SPR solutions in India. With decades of expertise, Inkarp provides end-to-end support, including installation, calibration, training, preventive maintenance, and application support. Researchers benefit from fast service, nationwide coverage, and expert guidance, ensuring maximum uptime, reproducibility, and performance from the P4PRO & Affipump system."
      },
      {
        question: "What support services are available for P4PRO & Affipump in India?",
        answer:
          "Inkarp Instruments offers comprehensive after-sales service for the P4PRO & Affipump. This includes expert installation, operator training, performance calibration, and preventive maintenance contracts. Our application specialists provide ongoing research support, while nationwide service teams ensure rapid troubleshooting and minimal downtime. With Inkarp, laboratories receive reliable technical assistance, ensuring consistent accuracy and efficiency in their SPR experiments."
      }
    ],


  },

  "p4spr": {
    id: "P4SPR",
    name: "P4SPR (Portable Surface Plasmon Resonance)",
    image: ImgP4spr,
    bannerImg: Banner3, // optional
    logo: Affinite,
    altText: "Affinite Instruments",
    videoId: "",
    meta: {
      title: "P4SPR (Portable Surface Plasmon Resonance) Distributor and Service Provider in India | Affinite Instruments | Inkarp",
      description:
        "Discover the P4SPR Portable SPR Analyzer—an ultra-compact, four-channel, label-free Surface Plasmon Resonance system designed for real-time biomolecular interaction analysis. Portable, laptop-powered, and ideal for protein research, biosensor development, environmental monitoring, and field applications. Distributed and supported by Inkarp Instruments in India.",
      keywords: [
        "P4SPR Portable SPR Analyzer",
        "Portable Surface Plasmon Resonance",
        "Label-free biomolecular interaction analysis",
        "Multi-channel SPR device",
        "Real-time binding analysis system",
        "P4SPR distributor in India",
        "P4SPR service provider in India",
        "Portable biosensor analyzer",
        "Protein affinity interaction tool",
        "Compact SPR instrument",
        "SPR for field applications",
        "Inkarp Instruments SPR",
        "Biosensing and affinity characterization",
        "Real-time molecular interaction monitoring"
      ]
      ,
      altText: "P4SPR_Portable Surface Plasmon Resonance_Affinite Instruments_ Inkarp",
      internalLinks: ["Related Products"],
      externalLinks: ["https://www.affiniteinstruments.com/pro-and-pump"]
    },

    description: `
    <div class="text-[18px] leading-7 text-gray-700 font-[Roboto] space-y-4">
      <!-- Intro -->
      <p>
      The P4SPR Portable Surface Plasmon Resonance (SPR) System is an ultra-compact, high-precision analytical platform engineered for real-time biomolecular interaction studies. Designed for researchers who need reliable results both in the lab and in the field, the P4SPR delivers label-free, sensitive, and quantitative analysis with unmatched portability. Its multi-channel detection, manual sample handling, and laptop-powered design make it a powerful yet accessible tool for protein research, biosensing, environmental monitoring, education, and on-site diagnostics. Built for simplicity, performance, and mobility, the P4SPR enables fast assay development and confident decision-making—anytime, anywhere.
      </p>
    </div>
  `,

    features: [
      {
        overview:
          "The P4SPR has been purpose-built to combine the analytical strength of Surface Plasmon Resonance with a compact, user-friendly design. Every feature is optimized to help researchers develop assays faster, analyze binding interactions more accurately, and perform high-throughput comparison studies without complex workflows. Below is an overview of the capabilities that make the P4SPR a trusted instrument for rapid, label-free interaction analysis."
      },

      {
        name: "Multi-Four Channel Capability",
        description:
          "The P4SPR offers four independent analysis channels, enabling simultaneous comparison, control validation, and interaction ranking within a single experiment. This significantly reduces assay time and ensures higher data reliability for biomolecular interaction screening."
      },

      {
        name: "Fast Assay Development",
        description:
          "With simplified workflows and real-time visualization, researchers can quickly optimize conditions, troubleshoot interactions, and accelerate development cycles. The P4SPR is ideal for early-stage research, teaching labs, and rapid prototyping of biosensing methods."
      },

      {
        name: "Ultra-Compact & Portable Design",
        description:
          "Specifically engineered for mobility, the P4SPR features a compact footprint that fits easily in any lab or field kit. Its lightweight design allows researchers to carry out high-performance SPR analysis during fieldwork, environmental sampling, or on-site diagnostics."
      },

      {
        name: "Manual Sample Delivery",
        description:
          "The system features manual injection for enhanced flexibility, making it suitable for rapid experiments, small-volume samples, and educational demonstrations without relying on complex fluidic systems."
      },

      {
        name: "Laptop Powered – No External Power Required",
        description:
          "Powered directly through a USB connection, the P4SPR eliminates the need for bulky external power supplies.This makes the device ideal for remote locations, resource-limited environments, or portable laboratory setups."
      },
      {
        name: "Engineered for Simplicity",
        description:
          "With intuitive software, minimal maintenance, and straightforward operation, the P4SPR enables users of any skill level to achieve high-quality results. Its user-friendly design removes complexity while retaining analytical precision."
      }
    ],


    applications: [
      // {
      //   overview:
      //     "The versatility of the P4SPR makes it a powerful tool across a wide range of scientific and industrial applications. From biotechnology and life sciences to environmental monitoring and quality control, its label-free, real-time detection capabilities support precise and actionable insights. Below are the key areas where the P4SPR delivers maximum value."
      // },

      { name: "Affinity Characterization", 
        description: "Perform detailed kinetic and affinity studies to understand molecular interactions, including antibody–antigen binding, protein–protein interactions, and receptor–ligand analysis" },
      {
        name: "Specificity Screening & Ranking",
        description:
          "Rank and compare binding responses across multiple analytes to determine selectivity, biosensor performance, or cross-reactivity in a single run."
      },
      {
        name: "Yes/No Binding Confirmation",
        description:
          "Quickly validate whether an interaction occurs between two biomolecules—ideal for preliminary screening, assay validation, and teaching demonstrations."
      },
      {
        name: "Concentration Analysis",
        description:
          "Quantify biomolecules such as proteins, peptides, antibodies, and contaminants with high sensitivity using label-free, real-time measurements."
      },
      {
        name: "Live Binding Data Visualization",
        description:
          "Monitor binding events as they happen, enabling dynamic analysis of kinetics, saturation levels, and stability for research and development."
      }
    ],

    techSpecs: {
      "Weight": "1.4 kg",
      "Dimensions": "17.5 × 15.5 × 5.5 cm",
      "Mode": "Static",
      "Simultaneous Channels": "4",
      "Flow Rate Range": "N/A",
      "Injection Volume Required": "200 µL",
      "Detection Rate": "1 or 5 Hz",
      "Sample Introduction Mode": "Manual Injection",
      "Run Time per Cycle": "≤ 10 minutes",
      "Operating Temperature": "–10°C to 40°C",
      "Power Requirement": "Powered by PC/Laptop (USB)",
      "Performance – Detection Limit": "fM (assay dependent)",
      "Performance – Association Rate (kon)": "N/A",
      "Performance – Dissociation Rate (koff)": "N/A",
      "Performance – Affinity Constant (KD)": "≥ pM"
    },

    faqs: [
      {
        question: "What is the P4SPR and how does it work?",
        answer:
          "The P4SPR is a Portable Surface Plasmon Resonance Analyzer designed for label-free, real-time analysis of biomolecular interactions. Unlike traditional detection methods that require fluorescent or chemical labels, the P4SPR measures changes in refractive index when biomolecules bind to the surface of its sensor chip. This allows researchers to study affinity, specificity, and concentration without additional reagents. Featuring a four-channel layout, a static detection mode, and manual sampling, the P4SPR is ideal for rapid screening, assay development, and biosensor validation. It can perform on-site or in-lab analysis because it is small enough to carry and runs directly from a laptop USB port. Researchers rely on the P4SPR for applications like protein–protein interactions, antibody screening, environmental monitoring, and teaching demonstrations due to its accuracy, simplicity, and mobility."
      },
      {
        question: "What makes the P4SPR different from traditional SPR instruments?",
        answer:
          "The P4SPR stands out because it combines high-performance SPR technology with true portability. Traditional SPR systems are bulky, expensive, and require a controlled laboratory environment with complex fluidics. In contrast, the P4SPR has an ultra-compact footprint (17.5 × 15.5 × 5.5 cm), weighs only 1.4 kg, and operates entirely on USB power from a laptop. It uses manual sample injection, which removes the need for pumps or flow systems, making it ideal for field research or resource-limited settings. The four-channel design supports simultaneous measurements, control validation, and comparative studies. Its simplicity allows non-experts, academic students, or early-stage researchers to perform high-quality SPR analysis without specialized training. This balance of mobility, affordability, and accuracy makes the P4SPR uniquely suited for on-the-go biosensing and exploratory R&D."
      },
      {
        question: "What applications can the P4SPR be used for?",
        answer:
          "The P4SPR is widely used across biotechnology, life science research, diagnostics, and environmental testing. Its primary applications include affinity characterization, where users measure binding strength between biomolecules such as antibodies and antigens. It is also ideal for specificity screening and ranking, allowing researchers to evaluate cross-reactivity or compare multiple ligands. The system supports yes/no binding confirmation, which is useful for rapid screening, assay validation, or educational training. Additionally, the P4SPR can perform concentration analysis of proteins or contaminants in samples, making it valuable for quality control and biosensor development. Thanks to its rugged design and laptop-powered operation, it is widely used for fieldwork, remote environmental monitoring, and portable diagnostics."
      },
      {
        question: "How accurate and sensitive is the P4SPR?",
        answer:
          "The P4SPR delivers extremely high sensitivity, capable of reaching femtomolar (fM) detection limits depending on the assay. The four channels ensure repeatability and internal referencing to improve accuracy in kinetic and affinity measurements. While it operates in a static mode rather than a flow-based system, the optical design still allows researchers to monitor binding interactions in real time with detection rates of 1 or 5 Hz. The affinity constant (KD) range extends to picomolar (pM) levels, making the instrument well-suited for detecting low-abundance analytes, weak interactions, or early-stage diagnostic markers. Even though the association (kon) and dissociation (koff) ranges are not fixed due to manual injection, the system provides reliable qualitative and semi-quantitative insights, especially when assessing binding strength, specificity, and concentration."
      },
      {
        question: "How portable is the P4SPR for field or on-site work?",
        answer:
          "Portability is one of the key strengths of the P4SPR. Weighing only 1.4 kg and measuring 17.5 × 15.5 × 5.5 cm, it fits easily into backpacks or field kits. The device operates solely on laptop USB power, eliminating the need for external adapters or laboratory infrastructure. Because it requires only manual sample injection (no pumps), it works reliably even in outdoor or remote environments. The operating temperature tolerance of –10°C to 40°C makes it suitable for environmental monitoring, agricultural studies, pathogen screening, or educational outreach programs. Researchers can bring high-quality biomolecular analysis directly to the field instead of transporting sensitive samples back to the lab."
      },
      {
        question: "What sample types can be analyzed using the P4SPR?",
        answer:
          "The P4SPR is highly versatile and supports a broad range of biological and chemical samples, including proteins, peptides, antibodies, nucleic acids, cell extracts, environmental contaminants, and biosensor test materials. Its label-free detection capability means samples do not need fluorescent or enzymatic tags, reducing preparation time. Because manual injection is used, small sample volumes (as low as 200 µL) are sufficient. While it performs best with filtered, low-viscosity samples, it can also handle complex mixtures depending on the assay design. Researchers working in life sciences, diagnostics, material sciences, and environmental monitoring can use the P4SPR for interaction screening, specificity ranking, and concentration analysis."
      },
      {
        question: "Can the P4SPR perform kinetic analysis?",
        answer:
          "Although the P4SPR is primarily optimized for qualitative and semi-quantitative assays, it can still provide kinetic insights using real-time binding curves. The detection rates of 1 or 5 Hz capture interaction profiles during the binding and dissociation phases. While it does not offer a fully automated flow-based kinetic system, the static configuration is well-suited for evaluating trends such as binding strength, saturation behavior, surface stability, or comparative screening. Users can infer kinetic tendencies from the data generated, especially when comparing different analytes or concentrations across the four channels. It is an excellent tool for rapid prototyping of assays, biosensor evaluation, or preliminary R&D where mobility and flexibility matter."
      },
      {
        question: "What makes the P4SPR easy to use for beginners?",
        answer:
          "The P4SPR is intentionally designed for simplicity. With manual injection, no fluidics, no pumps, and minimal maintenance, new users can begin analysis quickly. Its compact form factor and intuitive software interface allow students, technicians, and early-career researchers to perform SPR experiments without intensive training. Because it is laptop-powered, it eliminates the need for complex installation or infrastructure. The four-channel layout makes it easy to set up controls, references, and test samples in parallel. This simplicity, combined with high-quality results, makes the P4SPR ideal for academic teaching labs, research training programs, and rapid feasibility studies."
      },
      {
        question: "What is the sample volume and typical run time for a P4SPR experiment?",
        answer:
          "Each experiment requires only 200 µL of sample, which is ideal for precious or limited-availability materials such as antibodies or biomarkers. The system’s static mode and simplified workflow allow a complete run to finish within 10 minutes or less, depending on the assay protocol. This short assay cycle is extremely beneficial for high-throughput screening, field testing, or multiple repeat measurements. Since no buffer flow or tubing stabilization is needed, researchers can perform several assays back-to-back with minimal downtime. This performance efficiency makes the P4SPR suitable for biosensor optimization, binding confirmation, and immediate-response screening applications."
      },
      {
        question: "Who should use the P4SPR and in what research environments is it most valuable?",
        answer:
          "The P4SPR is designed for life science researchers, biotechnology labs, biosensor developers, educators, environmental scientists, and diagnostic innovators. It is particularly valuable for teams that need rapid, accurate interaction data without depending on large laboratory systems. Academic institutions use it for teaching and research practicals, while R&D teams rely on it for assay development and protein interaction screening. Environmental monitoring groups benefit from its field portability, and product developers use it to validate biosensor prototypes. Whether you need affinity characterization, binding validation, concentration analysis, or portable biosensing, the P4SPR offers a powerful combination of mobility, simplicity, and analytical performance."
      }
    ]



  },

  "p4proplus": {
    id: "P4PROplus",
    name: "P4PRO+",
    image: ImgP4proplus,
    bannerImg: Banner3,
    logo: Affinite,
    altText: "Affinite Instruments",
    videoId: "",
    meta: {
      title: "P4PRO+ Distributor And Service Provider In India | Affinite Instruments | Inkarp",
      description:
        "P4PRO+ is a high-precision flow-based Surface Plasmon Resonance (SPR) analyzer engineered for real-time binding kinetics, affinity characterization, concentration analysis, and multi-step interaction studies. Featuring dual-channel loops, semi-automated injection, true reference subtraction, and adjustable flow rates (5–200 µL/min), the P4PRO+ delivers accurate, reproducible, and artifact-free data for advanced biosensing, drug discovery, and molecular research.",
      keywords: [
        "P4PRO+ SPR Analyzer",
        "Flow-based Surface Plasmon Resonance",
        "Real-time binding kinetics",
        "Multi-channel SPR system",
        "Biosensor development tools",
        "High-sensitivity interaction analysis",
        "True reference subtraction SPR",
        "Inkarp Instruments P4PRO+",
        "Dual-channel flow SPR",
        "Label-free molecular binding analyzer",
        "Concentration and affinity characterization",
        "Kinetic rate measurement system",
        "fM sensitivity SPR",
        "Semi-automated flow injection SPR"
      ]

      ,
      altText: "P4PRO+_Affinite Instruments_Inkarp",
      internalLinks: ["Related Products"],
      externalLinks: ["https://www.affiniteinstruments.com/pro-and-pump"]
    },

    description: `
  <div class="text-[18px] leading-7 text-gray-700 font-[Roboto] space-y-4">
    <!-- Intro -->
    <p>
     The P4PRO+ is a next-generation flow-based Surface Plasmon Resonance (SPR) analyzer engineered for high-precision kinetic characterization, real-time interaction monitoring, and advanced biosensing research. Designed to deliver unmatched analytical accuracy, the P4PRO+ features integrated dual-channel loops, standard pump control, and true reference subtraction, ensuring clean, reliable, and reproducible data even in complex biological workflows. With its multi-channel architecture and semi-automated sample delivery, the P4PRO+ is ideal for researchers who require deeper insights into binding mechanisms, concentration dependencies, multi-step pathways, and kinetic behavior. Built for efficiency, accuracy, and minimal hands-on time, the P4PRO+ elevates flow-based SPR analysis to a new level of scientific performance.
    </p>
  </div>
`,

    features: [
      {
        overview:
          "The P4PRO+ is designed to combine advanced flow-based SPR technology with workflow simplicity, ensuring that researchers can perform detailed kinetic studies without the complexity of traditional systems. Each feature has been engineered to provide high-quality data, improve experimental efficiency, and enable deeper molecular understanding. Below is an overview of the key features and advantages that make the P4PRO+ a leading choice for high-performance biomolecular interaction analysis."
      },

      {
        name: "Multi-Four Channel Capability",
        description:
          "The P4PRO+ provides four simultaneous measurement channels, allowing direct comparison, real-time referencing, and multi-analyte screening within a single experiment. This improves throughput and enables comprehensive analysis across multiple conditions."
      },
      {
        name: "Minimal Sample Processing Artifacts",
        description:
          "Flow-based delivery and optimized fluidics reduce noise, eliminate injection inconsistencies, and minimize artifacts. This ensures a clean signal and highly reproducible data — essential for sensitive kinetic and affinity studies."
      },
      {
        name: "Direct, Real-Time Inline Controls",
        description:
          "Built-in inline controls allow users to validate reference and sample channels continuously and simultaneously. This improves reliability, accuracy, and confidence when analyzing complex biological samples and multi-component systems."
      },
      {
        name: "Semi-Automated Sample Delivery",
        description:
          "The P4PRO+ integrates standard pumps with dual-channel injection loops, offering a semi-automated workflow that reduces manual handling. This not only saves time but also enhances consistency and reduces user-induced variability."
      },
      {
        name: "True Reference Subtraction",
        description:
          "With dual reference channels and synchronized flow, the P4PRO+ supports true baseline correction, eliminating non-specific signals, drift, and background noise. The result is accurate, high-resolution binding curves ideal for detailed kinetic analysis.."
      },
      {
        name: "Minimal Hands-On Time",
        description:
          "Engineered for efficiency, the system automates much of the flow and measurement process, allowing researchers to run multiple experiments without constant supervision. Ideal for busy laboratories, multi-run workflows, and longer kinetic studies."
      },
      {
        name: "Real-Time Binding Kinetics",
        description:
          "The P4PRO+ is optimized to deliver high-quality kinetic data, allowing precise determination of association rates, dissociation rates, and affinity constants. This enables deep mechanistic insight into molecular behavior and biosensor performance."
      }
    ],

    applications: [

      { name: "Affinity Characterization",
         description: "Measure binding strength between molecules such as antibody–antigen pairs, protein–protein interactions, or small molecule ligands with high sensitivity and precision." },
      {
        name: "Specificity Screening & Ranking",
        description:
          "Simultaneously compare multiple analytes to understand selectivity, cross-reactivity, and binding preference — essential for biosensor development and molecular screening."
      },
      {
        name: "Yes/No Binding Confirmation",
        description:
          "Useful for rapid biological screening, assay validation, and preliminary detection studies, enabling fast decisions and efficient workflow progression."
      },
      {
        name: "Concentration Analysis",
        description:
          "Determine analyte concentration based on real-time response levels, suitable for protein quantification, quality control, or environmental testing."
      },
      {
        name: "Live Binding Data Visualization",
        description:
          "Monitor molecular interactions in real time and observe binding profiles as they occur, helping researchers understand kinetics, stability, and dynamic behavior."
      },
      {
        name: "Multi-Step Binding Interactions",
        description:
          "Track sequential binding events, cooperative interactions, or multi-component pathways — ideal for advanced mechanistic and systems biology studies."
      },
      {
        name: "Kinetics Characterization",
        description:
          "Obtain detailed kinetic parameters — kon, koff, and KD — through high-precision flow-based measurements, enabling deeper insight into molecular mechanisms, drug candidates, and biosensor performance."
      }
    ],

    techSpecs: {
      "Weight": "4.7 kg",
      "Dimensions (L × W × H)": "25 cm × 25 cm × 13.5 cm",
      "Mode": "Flow",
      "Simultaneous Channels": "2 (total of 4 channels)",
      "Flow Rate Range": "5–200 µL/min",
      "Injection Volume Required": "5–100 µL",
      "Detection Rate": "1 or 5 Hz",
      "Sample Introduction Mode": "Semi-automated",
      "Run Time per Cycle": "2–15 minutes",
      "Operating Temperature": "Ambient",
      "Power Requirement": "24 V",
      "Detection Limit": "fM (assay dependent)",
      "Association Rate (kon) Range": "10⁻³ to 10⁷ s⁻¹",
      "Dissociation Rate (koff) Range": "10⁻⁵ to 10⁻¹ s⁻¹",
      "Affinity Constant (KD) Range": "≥ pM"
    },

    faqs: [
      {
        question: "What is the P4PRO+ and what makes it different from other SPR analyzers?",
        answer:
          "The P4PRO+ is a next-generation flow-based Surface Plasmon Resonance (SPR) analyzer designed for detailed kinetic and affinity analysis of biomolecular interactions. Unlike static SPR systems, the P4PRO+ uses controlled flow, dual-channel loops, and synchronized pump-based sampling to deliver highly accurate and reproducible interaction data. It features true reference subtraction, significantly reducing noise and artifacts while enhancing signal clarity. With its 2 simultaneous reading channels (4 channels total), semi-automated injection, and adjustable flow rates of 5–200 µL/min, the P4PRO+ supports advanced kinetic studies such as association/dissociation profiling and multi-step binding. Its ability to generate real-time kinetic curves with femtomolar sensitivity makes it ideal for drug discovery, biosensor development, and molecular research."
      },
      {
        question: "What types of experiments can be performed using the P4PRO+?",
        answer:
          "The P4PRO+ supports a wide range of biomolecular interaction studies, including affinity characterization, specificity ranking, yes/no binding confirmation, concentration analysis, and multi-step pathway interaction mapping. One of its major strengths is the ability to measure real-time binding kinetics, providing precise values for association rate (kon), dissociation rate (koff), and affinity constant (KD). Additionally, the flow-based architecture makes it ideal for studying interactions under controlled shear, environmental conditions, or sequential binding events. Researchers working in immunology, receptor–ligand studies, diagnostic development, environmental biosensing, and small molecule screening will find the P4PRO+ highly versatile and reliable."
      },
      {
        question: "How sensitive is the P4PRO+ in detecting molecular interactions?",
        answer:
          "The P4PRO+ delivers exceptional sensitivity with a detection limit in the femtomolar (fM) range, depending on the assay and sample type. The combination of high-quality optics, dual reference channels, and flow-based delivery significantly reduces signal noise and enhances detection accuracy. The kinetic measurement ranges are also impressive: kon from 10⁻³ to 10⁷ s⁻¹ and koff from 10⁻⁵ to 10⁻¹ s⁻¹, making it suitable for both fast and slow interactions. These performance characteristics allow the P4PRO+ to detect low-abundance analytes, weak interactions, and multi-step binding pathways with high clarity, making it ideal for high-end molecular research and biosensor development."
      },
      {
        question: "What role does flow-based analysis play in improving data quality?",
        answer:
          "Flow-based SPR analysis ensures that samples reach the sensor uniformly and consistently, eliminating variability caused by manual injection or diffusion limitations. The P4PRO+ uses standard pumps and dual injection loops to control flow rates precisely, reducing data artifacts and ensuring consistent surface exposure. This enhances reproducibility, sensitivity, and baseline stability, all of which are critical for kinetic modeling. Flow mode also allows for rapid buffer exchange, enabling detailed dissociation analysis and multi-step binding experiments. For high-accuracy studies such as drug–target binding or biosensor validation, flow-based SPR provides significantly more reliable and detailed insights compared to static systems."
      },
      {
        question: "What is true reference subtraction and why is it important?",
        answer:
          "True reference subtraction is the process of removing non-specific signals, background drift, and environmental variations from binding data to improve accuracy. In the P4PRO+, this is achieved through dual reference channels and synchronized flow, ensuring that every sample measurement is accompanied by a real-time reference reading. This eliminates interference from temperature changes, refractive index fluctuations, or non-specific binding. By producing clean, corrected sensorgrams, true reference subtraction enables precise determination of kinetic rates and affinity constants, making the P4PRO+ highly reliable for sensitive experiments like biomarker detection or receptor–ligand studies."
      },
      {
        question: "How does semi-automated injection help in experimental workflows?",
        answer:
          "Semi-automated injection in the P4PRO+ reduces manual workload while maintaining flexibility. With pump-controlled flow and programmable injection volumes (5–100 µL), users can run multiple experiments reliably with minimal hands-on time. This reduces human-induced variability and enhances repeatability. Researchers can also conduct long kinetic runs or multi-step assays without continuously monitoring the system. Semi-automation balances precision and convenience, making the P4PRO+ ideal for high-throughput labs, teaching environments, and complex kinetic studies where timing and consistency are critical."
      },
      {
        question: "What is the typical experiment duration using the P4PRO+?",
        answer:
          "A single run on the P4PRO+ typically takes 2–15 minutes, depending on the experiment type, flow rate, and binding kinetics being measured. Rapid screening or yes/no binding assays can be completed in just a few minutes, while more detailed kinetic studies may require longer dissociation phases. The fast cycle time, combined with minimal setup and automated flow, allows users to perform multiple high-quality experiments in a short period. This makes the P4PRO+ ideal for time-sensitive workflows, multi-sample comparisons, and R&D environments that require high throughput."
      },
      {
        question: "What sample types can the P4PRO+ analyze?",
        answer:
          "The P4PRO+ supports a wide range of biological and chemical samples, including proteins, antibodies, peptides, nucleic acids, cell extracts, environmental analytes, small molecules, and biosensor materials. The 5–100 µL injection volume requirement makes it suitable for precious or limited sample availability. Since the P4PRO+ uses label-free detection, samples do not require fluorescent, enzymatic, or radioactive labeling, preserving sample integrity. Additionally, the controlled flow environment allows it to handle diverse sample viscosities and complex matrices, making it ideal for diagnostics, purity analysis, biosensor prototyping, and environmental contaminant assessment."
      },
      {
        question: "How does the P4PRO+ support real-time kinetic characterization?",
        answer:
          "The P4PRO+ is designed specifically for kinetic studies, capturing real-time interaction curves at 1 or 5 Hz detection rates. The controlled flow ensures uniform analyte exposure, allowing accurate measurement of association and dissociation phases. Its ability to estimate kon, koff, and KD values with high precision enables researchers to understand binding speed, stability, and strength. This capability is crucial for fields like drug discovery, receptor–ligand modeling, antibody development, and biosensor optimization. The instrument’s stability, flow performance, and reference subtraction all contribute to generating high-quality kinetic sensorgrams."
      },
      {
        question: "Who should use the P4PRO+ and in which industries is it most valuable?",
        answer:
          "The P4PRO+ is ideal for biotechnology companies, pharmaceutical R&D labs, academic institutions, diagnostic developers, environmental monitoring agencies, and biosensor research groups. Its advanced flow architecture and sensitivity make it valuable for applications involving complex molecular interactions, dynamic binding pathways, and high-precision biochemical analysis. Industries focused on therapeutics, antibody engineering, environmental biosensing, food safety, and biochemical assay development gain tremendous value from its kinetic capabilities. Whether for early-stage research or production-level validation, the P4PRO+ provides the accuracy, reliability, and flexibility needed to make informed scientific decisions."
      }
    ]
  },

  "ez-control-software": {
    id: "ez-control-software",
    name: "ezControl Software",
    image: ImgEzControl,
    bannerImg: Banner3,
    logo: Affinite,
    altText: "Affinite Instruments",
    videoId: "",
    meta: {
      title: "ezControl Software | Affinite Instruments | Inkarp",
      description:
        "ezControl is an intuitive, high-performance SPR data analysis software designed for rapid kinetic and affinity evaluation. With real-time processing, 5-minute setup, timestamped record tracking, accurate KD/Kon/Koff calculations, and CSV export compatible with TraceDrawer, ezControl simplifies SPR workflow management and enhances experimental decision-making.",
      keywords: [
        "ezControl SPR software",
        "Surface Plasmon Resonance data analysis",
        "Kinetic and affinity calculation tool",
        "SPR KD Kon Koff analysis",
        "Real-time binding data processing",
        "TraceDrawer compatible software",
        "Biosensor data analysis platform",
        "SPR method development tool",
        "Label-free interaction analysis software",
        "SPR concentration analysis software",
        "Inkarp Instruments software solutions",
        "Molecular interaction data analysis",
        "SPR experiment visualization tool"
      ],
      altText: "ezControl Software_Affinite Instruments_Inkarp",
      internalLinks: ["Related Products"],
      externalLinks: ["https://www.affiniteinstruments.com/pro-and-pump"]
    },

    description: `
  <div class="text-[18px] leading-7 text-gray-700 font-[Roboto] space-y-4">
    <!-- Intro -->
    <p>
     ezControl is a powerful, intuitive data analysis software built to complement and enhance your SPR (Surface Plasmon Resonance) workflows. Designed for researchers who need fast, accurate, and reliable insights, ezControl transforms raw SPR output into meaningful kinetic and affinity information with ease. The software simplifies complex data interpretation—whether you’re analyzing KD, Kon/Koff values, concentration curves, or multi-step interactions—while maintaining exceptional accuracy and reproducibility. With real-time visualization, rapid data processing, and seamless export options, ezControl is engineered to support efficient method development, biosensor evaluation, and molecular interaction research across academic, industrial, and biotechnology environments.
    </p>
  </div>
`,

    features: [
      {
        overview:
          ""
      },

      {
        name: "Easy 5-Minute Setup with an Intuitive Interface",
        description:
          "ezControl is designed with simplicity at its core. The clean, intuitive interface allows users to begin analyzing SPR data within minutes, eliminating steep learning curves and enabling rapid onboarding for new researchers. Whether you're running quick screening experiments or comprehensive kinetic studies, the software ensures a seamless workflow from start to finish."
      },
      {
        name: "Real-Time Data Processing for Fast Method Development",
        description:
          "With built-in real-time processing, ezControl allows you to visualize binding interactions instantly, monitor assay performance, and make immediate adjustments during method optimization. This speed is invaluable for biosensor development, troubleshooting interaction issues, and refining kinetic protocols."
      },
      {
        name: "Automatic Record Tracking with Timestamped Details",
        description:
          "Every experiment is automatically logged with timestamped metadata—improving traceability, accuracy, and documentation quality. This ensures robust data management for regulated environments, collaborative projects, academic publications, and long-term experiment tracking."
      },
      {
        name: "Apparent KD Calculation & Concentration Analysis",
        description:
          "ezControl provides precise analysis of apparent KD, Kon/Koff, and concentration-dependent response curves, supporting confident interpretation of affinity and kinetic behavior. The software applies appropriate models to help users extract reliable constants for a wide variety of biomolecular interactions."
      },
      {
        name: "CSV Export for Flexible Data Processing (Compatible with TraceDrawer)",
        description:
          "Users can export SPR data with a single click in CSV format, enabling flexible offline processing, collaboration, and integration with leading third-party analysis tools such as TraceDrawer. This ensures complete compatibility with existing data workflows and enhances long-term analytical flexibility."
      },

    ],


    faqs: [
      {
        question: "What is ezControl software and what is it used for?",
        answer:
          "ezControl is a powerful, user-friendly software designed specifically for analyzing data generated from Surface Plasmon Resonance (SPR) experiments. It helps researchers visualize sensorgrams, calculate kinetic parameters such as KD, Kon, and Koff, and interpret binding interactions with precision. Unlike generic data tools, ezControl is purpose-built for biosensor and molecular interaction studies, offering targeted analysis functions that improve the accuracy of affinity and concentration measurements. Its intuitive interface allows even new users to process complex datasets quickly, while its advanced features enable detailed method development, pathway analysis, and multi-step interaction interpretation. Whether used in academia, biotech R&D, or product development, ezControl streamlines the entire SPR data workflow."
      },
      {
        question: "How does ezControl help in analyzing kinetic and affinity constants like KD, Kon, and Koff?",
        answer:
          "ezControl includes powerful mathematical modeling tools that make it easy to extract precise kinetic and affinity constants from SPR datasets. The software automatically fits experimental data to appropriate binding models, generating accurate values for KD (affinity), Kon (association rate), and Koff (dissociation rate). Researchers can visualize both the raw data and the fitted curves, ensuring transparency and reliability in parameter estimation. The system reduces the complexity involved in manual curve fitting and eliminates user-dependent variation. This allows experts and beginners alike to generate publication-ready kinetic data quickly, accurately, and consistently—making ezControl invaluable for biosensor characterization, drug design studies, and advanced interaction research."
      },
      {
        question: "Is ezControl suitable for beginners who are new to SPR technology?",
        answer:
          "Yes. ezControl is specifically designed to be beginner-friendly. Its interface requires no advanced computational knowledge, making it ideal for students, technicians, and researchers new to SPR. The 5-minute setup, clean visualization tools, and guided data-fitting options help users learn SPR interpretation naturally. Despite its ease of use, ezControl still offers the analytical depth required by experienced scientists. This dual design—simple for beginners, powerful for experts—makes it a perfect fit for teaching laboratories, biosensor startups, and multi-user facilities where training time must be minimized without compromising scientific accuracy."
      },
      {
        question: "Does ezControl offer real-time processing and how does it help researchers?",
        answer:
          "Yes. ezControl offers real-time data processing, allowing users to monitor binding interactions as they occur during SPR experiments. This capability helps researchers make quick decisions while optimizing assay conditions, sample concentrations, or surface immobilization strategies. Real-time visualization ensures early identification of issues such as unexpected noise, non-specific binding, or incomplete regeneration. As a result, users can refine their methods immediately, saving time and preventing experimental repetition. For biosensor development and method screening, real-time analytics dramatically accelerates workflow efficiency and improves data quality."
      },
      {
        question: "What record-tracking features does ezControl provide?",
        answer:
          "ezControl includes automatic timestamped record tracking, ensuring every experiment, modification, and data capture is logged accurately. This feature is essential for regulated environments, GLP/GMP workflows, academic documentation, and multi-researcher projects. Researchers can easily trace experiment history, compare data across multiple runs, and maintain accurate digital records for audits or publications. The built-in tracking also reduces errors caused by manual note-taking, improves reproducibility, and strengthens the overall reliability of SPR data interpretation."
      },
      {
        question: "How does ezControl support concentration analysis and apparent KD determination?",
        answer:
          "ezControl provides specialized tools for analyzing concentration-dependent responses, enabling users to calculate apparent KD values even when full kinetic profiles are not required. This type of evaluation is important for screening assays, comparative studies, and early-stage biosensor development. By plotting binding response versus analyte concentration, the software helps determine affinity strength, saturation behavior, and detection performance. These insights assist researchers in understanding molecular interactions more comprehensively and optimizing assay sensitivity and dynamic range."
      },
      {
        question: "Can ezControl export data to external tools like TraceDrawer?",
        answer:
          "Yes. ezControl supports CSV export, which is compatible with third-party tools such as TraceDrawer, Excel, or any data-processing platform. This allows researchers to integrate ezControl data into broader workflows, perform custom curve fitting, or collaborate with partners using different analysis systems. The flexibility ensures long-term accessibility and enhances the overall usability of SPR data across teams, publications, or regulatory submissions."
      },
      {
        question: "What makes ezControl more efficient compared to traditional manual data processing?",
        answer:
          "Traditional manual SPR data processing is slow, error-prone, and often inconsistent. ezControl automates many of these steps—real-time visualization, model fitting, record tracking, parameter extraction, and data integrity management—resulting in dramatically faster and more reliable analysis. The intuitive interface reduces cognitive load, while automated curve-fitting prevents misinterpretation. This makes ezControl not only more efficient but also scientifically stronger than spreadsheet-based or manual workflows, especially for high-throughput environments and multi-run experiments."
      },
      {
        question: "Is ezControl compatible with all SPR instruments?",
        answer:
          "ezControl is designed to work seamlessly with SPR instruments that support standard data export formats such as CSV or sensorgram files. It is fully compatible with P4SPR, P4SPR 2.0, P4PRO+, and other similar platforms. Its flexible import system allows users to analyze SPR outputs from various systems without requiring proprietary converters. This adaptability makes ezControl a powerful universal solution for laboratories running multiple SPR models or collaborating across research institutions."
      },
      {
        question: "Who should use ezControl software and what industries benefit most?",
        answer:
          "ezControl is ideal for life science researchers, biotechnology companies, academic laboratories, biosensor developers, healthcare innovators, pharmaceutical R&D teams, and environmental monitoring agencies. Industries focused on molecular diagnostics, antibody development, food safety, drug discovery, and quality control benefit significantly from its advanced analysis capabilities. With accurate kinetic modeling, real-time processing, traceability, and easy data export, ezControl enhances productivity and scientific confidence across any workflow involving molecular interaction analysis."
      }
    ]
  }
}