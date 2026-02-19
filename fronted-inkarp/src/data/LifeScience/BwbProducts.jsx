import Implen from '/src/assets/PrincipalLogos/RowFour/Implen.jpg';
import Avanjo from '/src/assets/PrincipalLogos/RowFour/Anvajo.svg';
import Nenovision from '/src/assets/PrincipalLogos/RowFive/Nenovision.svg';
import Reichert from '/src/assets/PrincipalLogos/RowFive/reichert.png';
import Nanosurf from '/src/assets/PrincipalLogos/RowFour/NanoSurf.svg';
import Bwb from '/src/assets/PrincipalLogos/RowFour/BWB.png';
import Photon from '/src/assets/PrincipalLogos/RowFive/Photon.jpeg';

import ImgBWBFlash from "/images/products/BWB/bwb-flash-flame-photometer.webp";
import ImgBWBBio from "/images/products/BWB/bio-cut0out0rgb.png";
import ImgBWBBioAV from "/images/products/BWB/BWB-BIO-AV-Flame-Photometer.png";
import ImgBWBLI from "/images/products/BWB/bwb-li-flame-photometer.png";
import ImgBWBSoil from "/images/products/BWB/soil-flame-photometer.png";
import ImgBWBSugar from "/images/products/BWB/sugar-flame-photometer.png";


import ImgIRVIVO from "/images/products/Photon/ir-vivo.jpg";
import ImgGrandEOS from "/images/products/Photon/photon-etc-grand-eos.jpg";
import ImgRIMA from "/images/products/Photon/photon-etc-rima-closed.jpg";
import ImgLIMA from "/images/products/Photon/LIMA_upright.jpg";
import ImgIMA from "/images/products/Photon/photon-etc-ima-inverted.jpg";
import ImgZephIR17 from "/images/products/Photon/photon-etc-zephir-1-7.jpg";
import ImgZephIR25 from "/images/products/Photon/photon-etc-zephir-2-5.jpg";
import ImgZephIR29 from "/images/products/Photon/photon-etc-zephir-2-9.jpg";
// (Placeholders until dedicated artwork is added)
import ImgCLAIR from "/images/products/Photon/Sans-titre-68.jpg";
import ImgLEOS from "/images/products/Photon/Sans-titre-68.jpg";

import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";
import Banner3 from "/images/products/Banner/Banner3.jpg";



export const BwbProducts = {
  "bwb-xp-flame-photometer": {
    id: "bwb-xp-flame-photometer",
    name: "BWB XP Flame Photometer",
    image: ImgBWBLI,
    bannerImg: Banner3,
    logo: Bwb,
    altText: "BWBTechnologies",
    videoId: "",
    meta: {
      title: "BWB XP Flame Photometer | BWB Technologies | Inkarp India",
      description:
        "Ready-to-use general purpose flame photometer with simultaneous 5-ion detection, built-in air compressor, intuitive UI, and USB/PC connectivity.",
      keywords: [
        "BWB XP",
        "BWB flame photometer",
        "flame photometer India",
        "Na K Li Ca Ba",
        "elemental analysis",
        "BWB Technologies",
        "Inkarp India"
      ],
      altText: "BWB XP Flame Photometer",
      internalLinks: [],
      externalLinks: ["https://www.bwbtech.com/"]
    },

    description: `
<div class="font-[Roboto] text-[18px]">
  <div>
    BWB Technologies, in partnership with Inkarp Instruments, introduces the BWB XP Flame Photometer in India — a cutting-edge instrument for advanced elemental analysis and simultaneous 5-ion measurement.
  </div>
  <p class="mt-2">
    Ready to use straight out of the box! <br>
    <strong>General Purpose Flame Photometer!</strong>
  </p>
</div>
`,

    features: [
      {
        name: "Simultaneous Five-Ion Detection",
        description: "Measures and displays all five elements of interest — Na, K, Li, Ca, and Ba — simultaneously for faster, more comprehensive elemental analysis."
      },
      {
        name: "Built-in Air Compressor",
        description: "Integrated air compressor eliminates external equipment needs, simplifying setup and improving operational reliability."
      },
      {
        name: "User-Friendly Interface",
        description: "An intuitive interface with step-by-step display prompts guides operators through setup, calibration, and measurement seamlessly."
      },
      {
        name: "Complete Laboratory Package",
        description: "Comes ready with all essential solutions and labware, ensuring effortless installation and immediate operation from day one."
      },
      {
        name: "PC Connectivity",
        description: "Enables direct USB connection for data export, .csv and .pdf report generation, and integration with FP-PC software for data management."
      },
      {
        name: "Operator-Independent Accuracy",
        description: "Automated and standardized operation minimizes human error, delivering consistent and reliable quantitative results."
      },
      {
        name: "Customizable Units and Precision",
        description: "Supports five user-selectable measurement units and adjustable decimal places to match specific analytical requirements."
      },
      {
        name: "Optional Integrated Printer",
        description: "Optional onboard printer enables immediate data printing using easily available paper rolls for convenient record keeping."
      },
      {
        name: "IQ/OQ/PQ Certification",
        description: "Supports web-based IQ, OQ, and PQ validation in multiple languages for compliance with GLP and GMP requirements."
      },
      {
        name: "Interference Correction",
        description: "Built-in correction for calcium readings compensates for high sodium interference, improving analytical accuracy in complex samples."
      }
    ],

    faqs: [],

    techSpecs: {
      SampleRate: "2–3.5 mL/min",
      TubingMaterials: "Silicone and Tygon®",
      RequiredDeskSpace: "50 cm (H) × 45 cm (W) × 45 cm (D); allow 1 m unobstructed space above for chimney heat dissipation",
      InstrumentSize: "XP Flame Photometer — 51 cm (H) × 39 cm (W) × 35 cm (D) (20 in × 15 in × 14 in)",
      ShippingDimensions: "65 cm (H) × 49 cm (W) × 43 cm (D) (25 in × 19 in × 17 in)",
      Weight: "XP Flame Photometer — 14 kg (30.8 lbs); Shipping — 25 kg (55.1 lbs)",
      OptimalRange: "Single-point calibration: Na 0.1–60 ppm; K 0.05–100 ppm; Li 0.05–50 ppm; Ca 1.0–100 ppm; Ba 1.6–100 ppm | Multi-point calibration: Na 0.1–1000 ppm; K 0.05–1000 ppm; Li 0.05–1000 ppm; Ca 1.0–1000 ppm; Ba 5.0–3000 ppm",
      Reproducibility: "1% coefficient of variability for 20 consecutive samples over ten minutes at ≤100 ppm (after stabilisation)",
      Specificity: "Na/K/Li < 1% to each other when equal in concentration at < 100 ppm",
      LOD: "Na – 0.03 ppm; K – 0.02 ppm; Li – 0.02 ppm; Ca – 0.3 ppm; Ba – 1.6 ppm",
      LOQ: "Na – 0.1 ppm; K – 0.05 ppm; Li – 0.05 ppm; Ca – 1 ppm; Ba – 5.0 ppm",
      TimeToStability: "< 15 s after sample enters flame",
      IonsMeasured: "Simultaneous Na, K, Li, Ca, Ba",
      Interfaces: "USB; 0–2.5 V analog output (linked to chosen element); optional 4–20 mA output; optional integrated printer; .csv & .pdf via FP-PC software",
      RecommendedWarmUp: "21 °C — 25 minutes",
      PowerRequirements: "100–250 V AC at 50/60 Hz (auto-select)",
      FuelRequirement: "Propane, Butane or Natural Gas* regulated to 19 Bar; flow 0.4 L/min (*BWB recommends Propane or Butane for optimum results.)",
      Readout: "LCD, four-line, alphanumeric, backlit"
    }
  },

  "bwb-bio-flame-photometer": {
    id: "bwb-bio-flame-photometer",
    name: "BWB BIO Flame Photometer",
    image: ImgBWBBio,
    bannerImg: Banner3,
    logo: Bwb,
    altText: "BWBTechnologies",
    videoId: "",
    meta: {
      title: "BWB BIO Flame Photometer | BWB Technologies | Inkarp India",
      description:
        "Purpose-built BIO flame photometer for biomedical and clinical laboratories, featuring specialized firmware, IRS (Cs/Li) option, multi-point calibration for serum and urine, and integrated printer.",
      keywords: [
        "BWB BIO",
        "BIO flame photometer",
        "clinical flame photometer",
        "serum urine Na K Li Ca",
        "BWB Technologies",
        "Inkarp India"
      ],
      altText: "BWB BIO Flame Photometer",
      internalLinks: [],
      externalLinks: ["https://www.bwbtech.com/"]
    },

    description: `
<div class="font-[Roboto] text-[18px]">
  <div>
    Inkarp Instruments, a trusted partner of BWB Technologies, proudly presents the <strong>BWB BIO Flame Photometer</strong> — a purpose-built instrument engineered for biomedical and clinical laboratory applications. 
  </div>
  <p class="mt-2">
    Specifically designed for biological matrices like serum and urine, it offers advanced automation, internal reference standards, and a dedicated calibration system for reliable, repeatable results in medical diagnostics.
  </p>
</div>
`,

    features: [
      {
        name: "Purpose-Built for Biomedical Applications",
        description: "Engineered specifically for clinical and biomedical laboratories, the BWB BIO is designed to accurately measure sodium, potassium, calcium, and lithium in serum and urine samples with high reproducibility and precision."
      },
      {
        name: "Internal Reference Standard (IRS)",
        description: "Offers IRS options with caesium or lithium to enhance flame stability, compensate for fluctuations, and ensure long-term measurement consistency."
      },
      {
        name: "Advanced Multi-Point Calibration",
        description: "Provides both 5-point (serum) and 6-point (urine) calibration standards for Na, K, Li, and Ca, ensuring superior linearity and accuracy across diverse concentration ranges."
      },
      {
        name: "Specialized Firmware and Software",
        description: "Features purpose-designed software and firmware that optimize workflows for biomedical testing, offering automatic correction algorithms and data logging."
      },
      {
        name: "Integrated Printer",
        description: "Comes with an integrated environmentally friendly printer, enabling quick documentation of results without the need for external devices."
      },
      {
        name: "Operator-Independent Determination",
        description: "Fully automated operation minimizes user dependency, reduces errors, and ensures consistent analytical performance across repeated tests."
      },
      {
        name: "Comprehensive Certification Support",
        description: "Includes IQ, OQ, and PQ web-based certification options, ensuring compliance with GMP, GLP, and other laboratory quality standards."
      },
      {
        name: "Ca Interference Correction",
        description: "Built-in algorithms correct calcium readings when high sodium concentrations are present, delivering improved analytical reliability."
      },
      {
        name: "Multi-Matrix Compatibility",
        description: "Capable of analyzing both serum and urine samples with independent calibration curves for each, supporting diverse biomedical testing workflows."
      },
      {
        name: "Plug-and-Play Design",
        description: "Delivered as a fully configured laboratory unit complete with all required tubing, standards, and consumables for immediate deployment."
      }
    ],

    faqs: [],

    techSpecs: {
      SampleRate: "2–3.5 mL/min",
      TubingMaterials: "Silicone and Tygon®",
      Specificity: "Na/K/Li < 1% to each other when equal in concentration at < 100 ppm",
      RequiredDeskSpace: "50 cm (H) × 45 cm (W) × 45 cm (D); allow 1 m unobstructed space above for chimney heat dissipation",
      InstrumentSize: "51 cm (H) × 39 cm (W) × 35 cm (D) (20 in × 15 in × 14 in)",
      ShippingDimensions: "65 cm (H) × 49 cm (W) × 43 cm (D) (25 in × 19 in × 17 in)",
      Weight: "BIO Flame Photometer — 14 kg (30.8 lbs); Shipping — 25 kg (55.1 lbs)",
      OptimalRange: "Multi-point calibration with dilution ratios: Na 0.0043–300 mmol/L; K 0.0013–200 mmol/L; Li 0.0072–20 mmol/L; Ca 0.025–20 mmol/L",
      Reproducibility: "< 1% coefficient of variability for 20 consecutive samples over ten minutes at ≤100 ppm equivalent (after stabilization)",
      LOD: "Na – 0.0013 mmol/L; K – 0.0005 mmol/L; Li – 0.003 mmol/L; Ca – 0.0075 mmol/L",
      LOQ: "Na – 0.0043 mmol/L; K – 0.0013 mmol/L; Li – 0.0072 mmol/L; Ca – 0.025 mmol/L",
      TimeToStability: "< 15 s after sample enters flame",
      IonsMeasured: "Serum Na & K or Li & Ca; Urine Na & K or Li & Ca",
      CalibrationConcentrations: "Urine (Na: 25–300 mmol/L, K: 25–200 mmol/L, Li: 2.5–20 mmol/L, Ca: 2.5–20 mmol/L); Serum (Na: 120–160 mmol/L, K: 3–7 mmol/L, Li: 0.25–2 mmol/L, Ca: 1.5–3.5 mmol/L)",
      RecommendedWarmUp: "21 °C — 25 minutes",
      PowerRequirements: "100–250 V AC at 50/60 Hz",
      FuelRequirement: "Propane, Butane or Natural Gas* regulated to 19 Bar; flow 0.4 L/min (*BWB recommends Propane or Butane for optimum results.)",
      Readout: "LCD, four-line, alphanumeric, backlit"
    }
  },

  "bwb-soil-flame-photometer": {
    id: "bwb-soil-flame-photometer",
    name: "BWB SOIL Flame Photometer",
    image: ImgBWBSoil,
    bannerImg: Banner3,
    logo: Bwb,
    altText: "BWBTechnologies",
    videoId: "",
    meta: {
      title: "BWB SOIL Flame Photometer | BWB Technologies | Inkarp India",
      description:
        "Specialised flame photometer for soil/environmental labs. Simultaneous Na/K/Ca, IRS option, integrated printer, USB/analog outputs, and robust field-ready operation.",
      keywords: [
        "BWB SOIL",
        "soil flame photometer",
        "environmental flame photometer",
        "Na K Ca",
        "BWB Technologies",
        "Inkarp India"
      ],
      altText: "BWB SOIL Flame Photometer",
      internalLinks: [],
      externalLinks: ["https://www.bwbtech.com/"]
    },

    description: `
<div class="font-[Roboto] text-[18px]">
  <div>
    Inkarp Instruments, a trusted partner of BWB Technologies, presents the <strong>BWB SOIL Flame Photometer</strong> — a specialised instrument for soil and environmental analysis, delivering fast and reliable measurement of Na, K, and Ca.
  </div>
  <p class="mt-2">
    Highly accurate and cost-effective operation in the lab or <em>on the road</em>, with built-in compressor, IRS option, and integrated printing.
  </p>
</div>
`,

    features: [
      {
        name: "Simultaneous Three-Ion Measurement",
        description: "Measures and displays sodium, potassium, and calcium at the same time, enabling rapid fertility assessments and salinity profiling for soil and environmental samples."
      },
      {
        name: "Internal Reference Standard (IRS) Option",
        description: "Supports internal reference standards to stabilize readings and compensate for flame and aspiration fluctuations, improving long-term repeatability in the field."
      },
      {
        name: "Intuitive Step-by-Step UI",
        description: "Guided on-screen prompts simplify setup, calibration, and measurement, reducing training overhead and ensuring consistent workflows across operators."
      },
      {
        name: "Built-In Air Compressor",
        description: "Integrated compressor removes the need for external air supply, simplifying deployment for mobile or remote testing sites."
      },
      {
        name: "Complete Starter Kit",
        description: "Shipped with solutions and labware so teams can begin measurements immediately, minimizing downtime and procurement steps."
      },
      {
        name: "PC Connectivity & Data Export",
        description: "Connect via USB for data sharing and reporting; generate .CSV and .PDF outputs through FP-PC software for traceability."
      },
      {
        name: "Operator-Independent Determination",
        description: "Automated processing minimizes user variability, supporting reproducible results across batches and locations."
      },
      {
        name: "Custom Units & Precision Control",
        description: "Four user-selectable units and user-selectable decimal places allow labs to match reporting standards and agronomic guidelines."
      },
      {
        name: "Integrated Printer",
        description: "Onboard printer uses readily available paper for immediate hard-copy records during field campaigns or audits."
      },
      {
        name: "Sample Handling Compatibility",
        description: "Works with the BWB collection cup or the AFHS automated sample handler for higher throughput and consistent sample presentation."
      },
      {
        name: "Calcium Interference Correction",
        description: "Includes correction of Ca readings in the presence of high sodium, improving analytical reliability for saline soils and extracts."
      }
    ],

    faqs: [],

    techSpecs: {
      SampleRate: "2–3.5 mL/min",
      TubingMaterials: "Silicone and Tygon®",
      RequiredDeskSpace: "50 cm (H) × 45 cm (W) × 45 cm (D); allow 1 m unobstructed space above for chimney heat dissipation",
      InstrumentSize: "SOIL Flame Photometer — 51 cm (H) × 39 cm (W) × 35 cm (D) (20 in × 15 in × 14 in)",
      ShippingDimensions: "65 cm (H) × 49 cm (W) × 43 cm (D) (25 in × 19 in × 17 in)",
      Weight: "SOIL Flame Photometer — 14 kg (30.8 lbs); Shipping — 25 kg (55.1 lbs)",
      OptimalRange: "Single-point calibration: Na 0.1–60 ppm; K 0.05–100 ppm | Multi-point calibration: Na 0.1–1000 ppm; K 0.05–1000 ppm; Ca 1.0–1000 ppm",
      Reproducibility: "< 1% coefficient of variability for 20 consecutive samples over ten minutes at 100 ppm equivalent or less (after stabilisation)",
      Specificity: "Na/K/Li < 1% to each other when equal in concentration at < 100 ppm",
      LOD: "Na – 0.03 ppm; K – 0.02 ppm; Ca – 0.3 ppm",
      LOQ: "Na – 0.1 ppm; K – 0.05 ppm; Ca – 1 ppm",
      TimeToStability: "< 15 s after sample is introduced into the flame",
      IonsMeasured: "Simultaneous measurement of Na, K, and Ca",
      Interfaces: "USB; 0–2.5 V analog output (linked to chosen element); optional 4–20 mA output; optional integrated printer; .CSV & .PDF via FP-PC software",
      RecommendedWarmUp: "21 °C — 25 minutes",
      PowerRequirements: "100–250 V AC at 50/60 Hz",
      FuelRequirement: "Propane, Butane or Natural Gas* regulated to 19 Bar; flow 0.4 L/min (*BWB recommends Propane or Butane for optimum results.)",
      Readout: "LCD, four-line, alphanumeric, backlit"
    }
  },

  "bwb-xp-plus-flame-photometer": {
    id: "bwb-xp-plus-flame-photometer",
    name: "BWB XP Plus Flame Photometer",
    image: ImgBWBLI,
    bannerImg: Banner3, // optional
    logo: Bwb,
    altText: "BWBTechnologies",
    videoId: "",
    meta: {
      title: "BWB XP Plus Flame Photometer Distributor & Service Provider In India - BWB Technologies - Inkarp Instruments Pvt Ltd",
      description:
        "Discover the BWB XP Plus Flame Photometer by BWB Technologies. Perfect for precise analytical measurement. Enhance your lab's performance today, backed by extensive distribution and service networks across India.",
      keywords: [
        "BWB XP Plus Flame Photometer BWB Technologies",
        "BWB XP Plus",
        "BWB flame photometer",
        "flame photometer India",
        "Na K Li Ca",
        "elemental analysis",
        "BWB Technologies",
        "Inkarp India"
      ],
      altText: "BWB XP Plus Flame Photometer",
      internalLinks: [],
      externalLinks: ["https://www.bwbtech.com/"]
    },

    description: `
<div class="font-[Roboto] text-[18px]">
  <div>
    BWB Technologies, in partnership with Inkarp, introduces the BWB XP Plus Flame Photometer in India — a cutting-edge instrument for advanced elemental analysis.
  </div>
  <p class="mt-2">
    Ready to use straight out of the box! <br>
    <strong>Enhanced Purpose Flame Photometer!</strong>
  </p>
</div>

  `,

    features: [
      {
        name: "Simultaneous Multi-Ion Detection",
        description: "Simultaneous detection and display of four ions of interest, allowing rapid and precise elemental analysis across multiple parameters in a single run."
      },
      {
        name: "Internal Reference Standard (IRS)",
        description: "Built-in IRS option using caesium or lithium ensures enhanced accuracy, stability, and correction of flame fluctuations during measurements."
      },
      {
        name: "Intuitive User Interface",
        description: "User-friendly interface with step-by-step prompts simplifies operation and reduces training time, making it ideal for laboratories of all expertise levels."
      },
      {
        name: "Integrated Air Compressor",
        description: "Comes with a built-in air compressor, eliminating the need for external sources and reducing setup complexity."
      },
      {
        name: "Complete Laboratory Package",
        description: "Delivered with all necessary solutions and labware, enabling immediate use straight out of the box for reliable performance."
      },
      {
        name: "Seamless Data Sharing",
        description: "Enables easy data export and sharing via PC link (USB) for traceability and record-keeping through .csv or .pdf formats."
      },
      {
        name: "Operator-Independent Results",
        description: "Automated system ensures consistent results by minimizing operator influence, enhancing reproducibility and quality assurance."
      },
      {
        name: "Customizable Measurement Units",
        description: "Offers four user-selectable units of measure for flexibility across different laboratory requirements."
      },
      {
        name: "Adjustable Precision Control",
        description: "User-selectable decimal places allow for precise result presentation and control over displayed data resolution."
      },
      {
        name: "Optional Integrated Printer",
        description: "Supports optional integrated printer that uses readily available paper, providing convenient on-site result documentation."
      },
      {
        name: "IQ/OQ/PQ Certification Support",
        description: "IQ/OQ/PQ web-based certification available in multiple languages to meet GMP and quality compliance standards."
      }
    ],

    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: {
      SampleRate: "2–3.5 mL/min",
      TubingMaterials: "Silicone and Tygon®",
      RequiredDeskSpace: "50 cm (H) × 45 cm (W) × 45 cm (D); allow 1 m unobstructed space above for chimney heat dissipation",
      InstrumentSize: "XP Plus — 51 cm (H) × 39 cm (W) × 35 cm (D) (20 in × 15 in × 14 in)",
      ShippingDimensions: "65 cm (H) × 49 cm (W) × 43 cm (D) (25 in × 19 in × 17 in)",
      Weight: "XP Plus — 14 kg (30.8 lbs); Shipping — 25 kg (55.1 lbs)",
      OptimalRange: "Single-point calibration: Na 0.1–60 ppm; K 0.05–100 ppm; Li 0.05–50 ppm; Ca 1.0–100 ppm | Multi-point calibration: Na 0.1–1000 ppm; K 0.05–1000 ppm; Li 0.05–1000 ppm; Ca 1.0–1000 ppm",
      Reproducibility: "< 1% CV for 20 consecutive samples over 10 minutes at ≤100 ppm (after stabilisation)",
      Specificity: "Na/K/Li < 1% to each other when equal in concentration at < 100 ppm",
      LOD: "Na – 0.03 ppm; K – 0.02 ppm; Li – 0.02 ppm; Ca – 0.3 ppm",
      LOQ: "Na – 0.1 ppm; K – 0.05 ppm; Li – 0.05 ppm; Ca – 1 ppm",
      TimeToStability: "< 15 s after sample enters flame",
      IonsMeasured: "Simultaneous Na, K, Li, Ca",
      Interfaces: "USB; 0–2.5 V analog output (linked to chosen element); optional 4–20 mA output; optional integrated printer; .csv & .pdf via FP-PC software",
      RecommendedWarmUp: "21 °C — 25 minutes",
      PowerRequirements: "100–250 V AC at 50/60 Hz (auto-select)",
      FuelRequirement: "Propane, Butane or Natural Gas* regulated to 19 Bar; flow 0.4 L/min (*BWB recommends Propane or Butane for optimum results.)",
      Readout: "LCD, four line, alphanumeric, backlit"
    }

  },

  "bwb-bio-av-flame-photometer": {
    id: "bwb-bio-av-flame-photometer",
    name: "BWB BIO AV Flame Photometer",
    image: ImgBWBBioAV,
    bannerImg: Banner3,
    logo: Bwb,
    altText: "BWBTechnologies",
    videoId: "",
    meta: {
      title: "BWB BIO AV Flame Photometer | BWB Technologies | Inkarp India",
      description:
        "Purpose-built flame photometer for clinical and biomedical applications, featuring IRS option (Cs/Li), integrated printer, and automated Na, K, Li determination. Distributed and serviced by Inkarp Instruments across India.",
      keywords: [
        "BWB BIO AV",
        "clinical flame photometer",
        "biomedical flame photometer",
        "serum urine electrolytes",
        "Na K Li",
        "BWB Technologies",
        "Inkarp India"
      ],
      altText: "BWB BIO AV Flame Photometer",
      internalLinks: [],
      externalLinks: ["https://www.bwbtech.com/"]
    },

    description: `
<div class="font-[Roboto] text-[18px]">
  <div>
    Inkarp Instruments, in collaboration with <strong>BWB Technologies</strong>, introduces the <strong>BWB BIO AV Flame Photometer</strong> — a precision-engineered solution tailored for biomedical and clinical laboratories. 
  </div>
  <p class="mt-2">
    Designed for accuracy, consistency, and ease of operation, it delivers simultaneous analysis of Na, K, and Li with advanced automation, internal referencing, and integrated data recording.
  </p>
</div>
`,

    features: [
      {
        name: "Clinical-Grade Analytical Precision",
        description: "Specifically designed for biomedical and clinical applications, the BIO AV provides high-accuracy measurement of sodium, potassium, and lithium, ensuring reliable results for serum and urine testing."
      },
      {
        name: "Internal Reference Standard (IRS)",
        description: "Features an IRS option using caesium or lithium, offering superior flame stability and consistent measurement accuracy by automatically correcting for instrumental drift and environmental variation."
      },
      {
        name: "Advanced Calibration System",
        description: "Supports single-point correction and 10,000 ppm multi-ion calibration standards for each element, guaranteeing reliable quantification over a broad dynamic range."
      },
      {
        name: "Dedicated Firmware and Software",
        description: "Custom-built firmware and software streamline biomedical workflows, automating routine analyses and simplifying reporting while maintaining high reproducibility."
      },
      {
        name: "Integrated Environmentally Friendly Printer",
        description: "Built-in thermal printer provides instant result documentation without the need for external accessories, using eco-friendly ink for sustainable laboratory operation."
      },
      {
        name: "Operator-Independent Measurement",
        description: "Automated operation ensures precise results regardless of operator skill level, improving repeatability and minimizing manual intervention."
      },
      {
        name: "GMP-Compliant Certification",
        description: "Comes with IQ/OQ/PQ web-based certification support across all BWB FES units, ensuring full traceability and compliance with regulatory standards."
      },
      {
        name: "Compact and Robust Design",
        description: "Engineered for durability and compactness, offering consistent performance in both centralized laboratories and decentralized testing environments."
      },
      {
        name: "Optimized for Electrolyte Analysis",
        description: "Calibrated to measure sodium, potassium, and lithium concentrations critical to diagnostic applications like electrolyte balance, renal function, and therapeutic monitoring."
      },
      {
        name: "Plug-and-Play Operation",
        description: "Delivered fully configured for immediate use, minimizing setup time and providing a reliable, user-friendly analytical platform for biomedical testing."
      }
    ],

    faqs: [],

    techSpecs: {
      SampleRate: "2–3.5 mL/min",
      TubingMaterials: "Silicone and Tygon®",
      Specificity: "Na/K/Li < 1% to each other when equal in concentration at < 100 ppm",
      RequiredDeskSpace: "50 cm (H) × 45 cm (W) × 45 cm (D); allow 1 m unobstructed space above for heat dissipation",
      InstrumentSize: "BIO AV Flame Photometer — 51 cm (H) × 39 cm (W) × 35 cm (D) (20 in × 15 in × 14 in)",
      ShippingDimensions: "65 cm (H) × 49 cm (W) × 43 cm (D) (25 in × 19 in × 17 in)",
      Weight: "BIO AV Flame Photometer — 14 kg (30.8 lbs); Shipping — 25 kg (55.1 lbs)",
      OptimalRange: "Multi-point calibration with dilution ratios: Na 0.0043–300 mmol/L; K 0.0013–200 mmol/L; Li 0.0072–20 mmol/L",
      LOD: "Na – 0.0013 mmol/L; K – 0.0005 mmol/L; Li – 0.003 mmol/L",
      LOQ: "Na – 0.0043 mmol/L; K – 0.0013 mmol/L; Li – 0.0072 mmol/L",
      Reproducibility: "< 1% coefficient of variability for 20 consecutive samples over ten minutes at 100 ppm equivalent or less (after stabilisation)",
      TimeToStability: "< 15 s after sample is introduced into the flame",
      IonsMeasured: "Na, K, and Li",
      RecommendedWarmUp: "21 °C — 25 minutes",
      PowerRequirements: "100–250 V AC at 50/60 Hz",
      FuelRequirement: "Propane, Butane or Natural Gas* regulated to 19 Bar; flow 0.4 L/min (*BWB recommends Propane or Butane for optimum results.)",
      Readout: "LCD, four-line, alphanumeric, backlit"
    }
  },

  "bwb-sugar-flame-photometer": {
    id: "bwb-sugar-flame-photometer",
    name: "BWB SUGAR Flame Photometer",
    image: ImgBWBSugar,
    bannerImg: Banner3,
    logo: Bwb,
    altText: "BWBTechnologies",
    videoId: "",
    meta: {
      title: "BWB SUGAR Flame Photometer | BWB Technologies | Inkarp India",
      description:
        "Purpose-built flame photometer for sugar and beverage refining—high-accuracy Na/K measurement, SCADA 4–20 mA output, and live online monitoring. Distributed and serviced across India by Inkarp Instruments Pvt Ltd.",
      keywords: [
        "BWB SUGAR",
        "sugar flame photometer",
        "beverage analysis",
        "sodium potassium analyzer",
        "SCADA 4-20 mA",
        "BWB Technologies",
        "Inkarp India"
      ],
      altText: "BWB SUGAR Flame Photometer",
      internalLinks: [],
      externalLinks: ["https://www.bwbtech.com/"]
    },

    description: `
<div class="font-[Roboto] text-[18px]">
  <div>
    Inkarp Instruments, in partnership with <strong>BWB Technologies</strong>, brings to India the <strong>BWB SUGAR Flame Photometer</strong> — a dedicated analytical system optimized for the sugar and beverage industries.
  </div>
  <p class="mt-2">
    Designed for high-accuracy sodium and potassium determination, it supports continuous process monitoring, SCADA connectivity, and rapid online feedback for quality assurance in sugar refining and beverage production.
  </p>
</div>
`,

    features: [
      {
        name: "High-Precision Na/K Measurement",
        description: "Purpose-built for sugar and beverage applications, the system delivers precise and reproducible sodium and potassium readings even in complex syrup or condensate matrices."
      },
      {
        name: "4–20 mA SCADA Connectivity",
        description: "Industrial-grade 2-wire 4–20 mA output enables seamless integration with SCADA and process control systems for real-time monitoring and automated adjustments."
      },
      {
        name: "Dual-Channel Flame System",
        description: "Equipped with a hybridized dual-channel configuration allowing simultaneous measurement of Na and K, ensuring fast throughput and consistent data accuracy."
      },
      {
        name: "Internal Reference Standard (IRS)",
        description: "Optional IRS stabilization enhances accuracy and compensates for flame and aspiration fluctuations — critical for consistent performance in demanding process environments."
      },
      {
        name: "Live Online Monitoring",
        description: "Continuous operation mode with real-time display and output ensures uninterrupted process control, ideal for 24/7 refinery or bottling line environments."
      },
      {
        name: "Built-In Air Compressor",
        description: "Self-contained air source proven across 1000+ deployed units, removing the need for external compressors and ensuring plug-and-play setup in industrial settings."
      },
      {
        name: "Automatic Sampling via BWB Collection Cup",
        description: "Maintains a constant condensate stream feed for reliable, automated measurements directly from process lines or sample loops."
      },
      {
        name: "Complete Labware & Solutions Included",
        description: "Delivered as a complete operational package with all necessary reagents, solutions, and accessories — simply connect gas and begin testing."
      },
      {
        name: "User-Friendly Interface",
        description: "Step-by-step guided interface minimizes training requirements, allowing operators to perform calibration, measurement, and reporting with minimal supervision."
      },
      {
        name: "Data Management via FP-PC Software",
        description: "USB-enabled connectivity and PC software allow easy data logging, export, and reporting in .CSV and .PDF formats for compliance and traceability."
      }
    ],

    faqs: [],

    techSpecs: {
      SampleRate: "2–3.5 mL/min",
      TubingMaterials: "Silicone and Tygon®",
      RequiredDeskSpace: "50 cm (H) × 45 cm (W) × 45 cm (D); allow 1 m unobstructed space above for chimney heat dissipation",
      InstrumentSize: "SUGAR Flame Photometer — 51 cm (H) × 39 cm (W) × 35 cm (D) (20 in × 15 in × 14 in)",
      ShippingDimensions: "65 cm (H) × 49 cm (W) × 43 cm (D) (25 in × 19 in × 17 in)",
      Weight: "SUGAR Flame Photometer — 14 kg (30.8 lbs); Shipping — 25 kg (55.1 lbs)",
      OptimalRange: "Single-point calibration: Na 0.1–60 ppm; K 0.05–100 ppm | Multi-point calibration: Na 0.1–1000 ppm; K 0.05–1000 ppm",
      Reproducibility: "< 1% coefficient of variability for 20 consecutive samples over 10 minutes at ≤100 ppm (after stabilisation)",
      Specificity: "Na/K < 1% to each other when equal in concentration at < 100 ppm",
      LOD: "Na – 0.03 ppm; K – 0.02 ppm",
      LOQ: "Na – 0.1 ppm; K – 0.05 ppm",
      TimeToStability: "< 15 s after sample is introduced into the flame",
      IonsMeasured: "Potassium, Sodium",
      Interfaces: "USB; 4–20 mA SCADA output; optional integrated printer; .CSV & .PDF via FP-PC software; automatic sampling via Collection Cup",
      RecommendedWarmUp: "21 °C — 25 minutes",
      PowerRequirements: "100–250 V AC at 50/60 Hz (auto-selecting)",
      FuelRequirement: "Propane, Butane or Natural Gas* regulated to 19 Bar; flow 0.4 L/min (*BWB recommends Propane or Butane for optimum results.)",
      Readout: "LCD, four-line, alphanumeric, backlit"
    }
  },

  "bwb-flash-flame-photometer": {
    id: "bwb-flash-flame-photometer",
    name: "BWB Flash Flame Photometer",
    image: ImgBWBFlash,
    bannerImg: Banner3,
    logo: Bwb,
    altText: "BWBTechnologies",
    videoId: "",
    meta: {
      title: "BWB Flash Flame Photometer | BWB Technologies | Inkarp India",
      description:
        "Next-generation flame photometer with a 5-inch touchscreen interface, built-in compressor and gas regulator, configurable element setup, and pre-supplied 10,000 ppm calibration standards. Distributed and serviced across India by Inkarp Instruments Pvt Ltd.",
      keywords: [
        "BWB Flash",
        "Flash Flame Photometer",
        "flame photometer India",
        "Na K Li Ca",
        "elemental analysis",
        "BWB Technologies",
        "Inkarp India"
      ],
      altText: "BWB Flash Flame Photometer",
      internalLinks: [],
      externalLinks: ["https://www.bwbtech.com/"]
    },

    description: `
<div class="font-[Roboto] text-[18px]">
  <div>
    Inkarp Instruments, in collaboration with <strong>BWB Technologies</strong>, introduces the <strong>BWB Flash Flame Photometer</strong> — a revolutionary instrument redefining speed, accuracy, and usability in elemental analysis.
  </div>
  <p class="mt-2">
    Engineered with a 5-inch touchscreen, integrated air compressor, and customizable element configurations, it is the world’s first simultaneous flame photometer designed for unmatched user convenience and laboratory flexibility.
  </p>
</div>
`,

    features: [
      {
        name: "5-Inch Touchscreen Interface",
        description: "Features an intuitive, glove-compatible 5-inch capacitive touchscreen with large icons and simplified navigation, allowing seamless operation even in high-throughput lab environments."
      },
      {
        name: "Built-In Compressor and Gas Regulator",
        description: "Incorporates a fully integrated air compressor and gas regulation system, eliminating the need for external connections and minimizing setup time."
      },
      {
        name: "Configurable Element Sets",
        description: "Offers flexible configuration options allowing users to select and measure only the required elements (Na, K, Li, Ca), optimizing precision and efficiency for diverse analytical needs."
      },
      {
        name: "High-Purity Calibration Standards",
        description: "Supplied with 10,000 ppm calibration standards as part of the standard package, ensuring consistent calibration and precise multi-ion analysis from the very first run."
      },
      {
        name: "Auto-Read Technology",
        description: "Utilizes automated stability detection to capture readings only when optimal flame conditions are achieved, guaranteeing operator-independent reproducibility."
      },
      {
        name: "Advanced Data Management",
        description: "USB connectivity with .CSV and .PDF export options via FP-PC software allows streamlined data logging, traceability, and compliance-ready record generation."
      },
      {
        name: "Multi-Language Certification Support",
        description: "Includes IQ/OQ/PQ web-based validation in multiple languages, meeting global laboratory compliance and quality management standards."
      },
      {
        name: "Plug-and-Play Design",
        description: "All essential labware and reagents are supplied, enabling immediate use upon installation — simply add gas and power to begin measurement."
      },
      {
        name: "Compact, Lightweight Construction",
        description: "Weighing just 10 kg, the Flash model’s compact footprint and built-in systems make it ideal for both laboratory and mobile analysis environments."
      },
      {
        name: "Enhanced Visual Feedback",
        description: "Bright, color-coded visual interface provides real-time analytical progress, flame stability indicators, and element status for improved user confidence and control."
      }
    ],

    faqs: [],

    techSpecs: {
      SampleRate: "2–3.5 mL/min",
      TubingMaterials: "Silicone and Tygon®",
      RequiredDeskSpace: "101 cm (H) × 45 cm (W) × 35 cm (D); allow 1 m unobstructed space above for heat dissipation",
      InstrumentSize: "Flash — 51 cm (H) × 33 cm (W) × 35 cm (D) (20 in × 13 in × 14 in)",
      ShippingDimensions: "65 cm (H) × 49 cm (W) × 43 cm (D) (25 in × 19 in × 17 in)",
      Weight: "Flash — 10 kg (22.1 lbs); Shipping — 18 kg (39.7 lbs)* (subject to accessories)",
      OptimalRange: "Single-point calibration: Na 0.1–60 ppm; K 0.05–100 ppm; Li 0.05–50 ppm; Ca 1.0–100 ppm | Multi-point calibration: Na 0.1–1000 ppm; K 0.05–1000 ppm; Li 0.05–1000 ppm; Ca 1.0–1000 ppm",
      Reproducibility: "< 1% coefficient of variability for 20 consecutive samples over 10 minutes at ≤100 ppm (after stabilisation)",
      Specificity: "Na/K/Li < 1% to each other when equal in concentration at < 100 ppm",
      LOD: "Na – 0.03 ppm; K – 0.02 ppm; Li – 0.02 ppm; Ca – 0.3 ppm",
      LOQ: "Na – 0.1 ppm; K – 0.05 ppm; Li – 0.05 ppm; Ca – 1 ppm",
      TimeToStability: "< 15 s after sample is introduced into the flame",
      IonsMeasured: "Model-specific simultaneous multi-element analysis (Na, K, Li, Ca)",
      Interfaces: "USB; 0–2.5 V analog output (linked to chosen element); optional 4–20 mA output; optional integrated printer; .CSV & .PDF via FP-PC software",
      RecommendedWarmUp: "21 °C — 25 minutes",
      PowerRequirements: "100–250 V AC at 50/60 Hz (auto-selecting)",
      FuelRequirement: "Propane, Butane or Natural Gas regulated to 19 Bar; flow 0.4 L/min (BWB recommends Propane or Butane for optimum results.)",
      Readout: "5-inch color capacitive touchscreen display"
    }
  },

  "bwb-li-flame-photometer": {
    id: "bwb-li-flame-photometer",
    name: "BWB LI Flame Photometer",
    image: ImgBWBLI,
    bannerImg: Banner3,
    logo: Bwb,
    altText: "BWBTechnologies",
    videoId: "",
    meta: {
      title: "BWB LI Flame Photometer | BWB Technologies | Inkarp India",
      description:
        "Lithium-dedicated flame photometer with multiple Li channels, built-in compressor, supplied solutions/labware, and FP-PC connectivity. Distributed and serviced across India by Inkarp Instruments.",
      keywords: [
        "BWB LI",
        "lithium flame photometer",
        "Li analysis",
        "BWB Technologies",
        "flame photometer India",
        "Inkarp India"
      ],
      altText: "BWB LI Flame Photometer",
      internalLinks: [],
      externalLinks: ["https://www.bwbtech.com/"]
    },

    description: `
<div class="font-[Roboto] text-[18px]">
  <div>
    Inkarp Instruments, in partnership with <strong>BWB Technologies</strong>, presents the <strong>BWB LI Flame Photometer</strong> — a lithium-dedicated system engineered for unmatched accuracy and repeatability in Li quantification.
  </div>
  <p class="mt-2">
    Featuring multiple lithium channels, integrated compressor, and FP-PC connectivity, it’s delivered ready to run with standards and labware included.
  </p>
</div>
`,

    features: [
      {
        name: "Lithium-Dedicated Architecture",
        description: "Purpose-built optical and electronic design focused solely on lithium delivers exceptional sensitivity, linearity, and low noise performance for Li assays in research, QC, and process labs."
      },
      {
        name: "Multiple Li Detection Channels",
        description: "Four independent Li channels allow parallel methods or ranges, each supporting up to ten calibration points for robust quantification across dilute and concentrated samples."
      },
      {
        name: "Built-In Air Compressor",
        description: "Self-contained air supply simplifies installation, reduces bench clutter, and enables consistent flame conditions without external compressors."
      },
      {
        name: "Complete ‘Out-of-Box’ Package",
        description: "Supplied with solutions and labware so teams can begin calibration and analysis immediately, minimizing setup delays and procurement cycles."
      },
      {
        name: "Intuitive Guided UI",
        description: "Clear on-screen prompts walk users through setup, calibration, and reading, lowering the training curve and standardizing workflows across operators."
      },
      {
        name: "Precision Control of Readout",
        description: "User-selectable decimal places provide flexible reporting and consistency with internal SOPs and regulatory templates."
      },
      {
        name: "PC Connectivity & Reporting",
        description: "USB link with FP-PC software enables secure data logging and export to .CSV/.PDF for traceability, audits, and external analysis."
      },
      {
        name: "Operator-Independent Results",
        description: "Stability-based auto-read routines reduce operator bias and improve reproducibility across shifts and sites."
      },
      {
        name: "IQ/OQ/PQ Certification",
        description: "Web-based validation support helps laboratories document installation, operation, and performance qualification for quality systems."
      },
      {
        name: "Rugged, Lab-Ready Build",
        description: "Proven mechanical layout and flame system offer dependable performance under routine high-throughput operation."
      }
    ],

    faqs: [],

    techSpecs: {
      SampleRate: "2–3.5 mL/min",
      TubingMaterials: "Silicone and Tygon®",
      RequiredDeskSpace: "50 cm (H) × 45 cm (W) × 45 cm (D); allow 1 m unobstructed space above for chimney heat dissipation",
      InstrumentSize: "LI Flame Photometer — 51 cm (H) × 39 cm (W) × 35 cm (D) (20 in × 15 in × 14 in)",
      ShippingDimensions: "65 cm (H) × 49 cm (W) × 43 cm (D) (25 in × 19 in × 17 in)",
      Weight: "LI Flame Photometer — 14 kg (30.8 lbs); Shipping — 25 kg (55.1 lbs)",
      OptimalRange: "Multi-point calibration: Li 0.05–1000 ppm",
      Reproducibility: "< 1% coefficient of variability for 20 consecutive samples over ten minutes at ≤100 ppm (after stabilisation)",
      Specificity: "Na/K/Li < 0.5% interference to each other when equal in concentration at < 100 ppm",
      LOD: "Li — 0.02 ppm",
      LOQ: "Li — 0.05 ppm",
      TimeToStability: "< 15 s after sample is introduced into the flame",
      IonsMeasured: "Four independent Li channels, each supporting up to 10 calibration points",
      Interfaces: "USB; 0–2.5 V analog output (linked to chosen element); optional 4–20 mA output; optional integrated printer; .CSV & .PDF via FP-PC software",
      RecommendedWarmUp: "21 °C — 25 minutes",
      PowerRequirements: "100–250 V AC at 50/60 Hz",
      FuelRequirement: "Propane, Butane or Natural Gas regulated to 19 Bar; flow 0.4 L/min (*BWB recommends Propane or Butane for optimum results.)",
      Readout: "LCD, four-line, alphanumeric, backlit"
    }
  },

  "ir-vivo": {
    id: "ir-vivo",
    name: "IR VIVO™",
    image: ImgIRVIVO,
    bannerImg: Banner3,
    logo: Photon,
    altText: "Photon",
    videoId: "",
    meta: {
      title: "IR VIVO™ NIR-II Preclinical Imager | Photon etc. | Inkarp India",
      description:
        "Infrared multispectral imager for small-animal studies. Real-time in-vivo visualization with ultra-low-noise InGaAs camera, homogeneous illumination, and powerful analysis software.",
      keywords: [
        "IR VIVO",
        "Photon etc",
        "NIR-II imaging",
        "SWIR imaging",
        "preclinical imager",
        "multispectral",
        "hyperspectral",
        "small animal imaging",
        "InGaAs camera",
        "Inkarp India"
      ],
      altText: "IR VIVO™ NIR-II Preclinical Imager",
      internalLinks: [],
      externalLinks: ["https://www.photonetc.com/"]
    },

    description: `
<div class="ink-wrap" style="--ink-red:#BE0010;--ink-orange:#FF6D22;--ink-indigo:#240078;--ink-black:#000;--ink-white:#fff;--ink-gray:#f6f7fb;font-family:Roboto,Arial,Helvetica,sans-serif;color:#333;line-height:1.7;font-size:18px;">
  <style>
    .ink-wrap .ink-section{background:#fff;border:1px solid #e6e8ef;border-radius:14px;padding:20px 20px 10px;margin:12px 0;box-shadow:0 2px 10px rgba(0,0,0,.04)}
    .ink-wrap .ink-lead p{margin:.3rem 0}
    .ink-wrap .ink-h2{display:flex;align-items:center;justify-content:center;gap:10px;margin:18px 0 10px}
    .ink-wrap .ink-h2 .badge{display:inline-block;border:1px solid var(--ink-indigo);color:var(--ink-indigo);border-radius:999px;font-size:12px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;background:#fff;padding:6px 12px}
    .ink-wrap .ink-h2 .title{font-family:MaxOT,Roboto,Arial,Helvetica,sans-serif;font-weight:800;font-size:22px;line-height:1.3;color:var(--ink-black);margin:0}
    .ink-wrap .ink-table-wrap{background:#fff;border:1px solid #e6e8ef;border-radius:14px;padding:8px;overflow-x:auto}
    .ink-wrap table.ink-table{width:100%;border-collapse:separate;border-spacing:0;min-width:720px}
    .ink-wrap .ink-table th,
    .ink-wrap .ink-table td{padding:10px 12px;border:1px solid #e6e8ef;text-align:left;vertical-align:top}
    .ink-wrap .ink-table thead th{background:linear-gradient(0deg, rgba(190,0,16,.08), rgba(190,0,16,.08)), #fff;color:#111;font-weight:800}
    .ink-wrap .ink-table tbody tr:nth-child(odd){background:#fff}
    .ink-wrap .ink-table tbody tr:nth-child(even){background:var(--ink-gray)}
    .ink-wrap .ink-table tbody tr:hover{background:#fff6f6}
    .ink-wrap .ink-kicker{font-weight:700;color:var(--ink-red)}
    .ink-wrap ul.prod-det{padding-left:18px;margin:6px 0 0}
    .ink-wrap ul.prod-det li{margin:.25rem 0}
    /* small screens */
    @media (max-width:768px){
      .ink-wrap{font-size:16px}
      .ink-wrap .ink-section{padding:16px}
      .ink-wrap .ink-h2 .title{font-size:18px}
    }
  </style>

  <div class="product-details ink-section ml_20" style="margin-left:20px;">
    <div class="text ink-lead">
      <p class="ink-kicker"><strong>NIR-II Preclinical Imager</strong></p>
      <p class="font_family_poppins mb_10" style="margin:4px 0 10px 0;">Imaging in the Second Biological Window</p>
      <p>IR VIVO is an infrared multispectral imager for small animal studies. This system benefits from reduced light scattering, absorption and auto-fluorescence by using a detection system in the near and short-wave infrared. Visualize your biomarkers in vivo and in real-time with optimized contrast resolution and sensitivity. IR VIVO takes advantage of the most recent developments in SWIR imaging with an ultra-low-noise InGaAs camera (Alizé 1.7 or ZephIR 1.7), novel homogeneous illumination and powerful analytical software to provide an unprecedented combination of fast, high resolution and deep imaging.</p>
      <p class="ink-kicker"><strong>NIR-II Imaging properties</strong></p>
      <ul class="prod-det">
        <li>High spatial resolution</li>
        <li>High temporal resolution (real-time dynamics)</li>
        <li>Non-ionizing &amp; non-invasive</li>
        <li>Good penetration depth (10× greater than traditional visible optical systems)</li>
      </ul>
    </div>
  </div>

  <div class="ink-section">
    <div class="ink-h2">
      <h2 class="title">Technical Data</h2>
    </div>

    <div class="ink-table-wrap" role="region" aria-label="Technical Data table" tabindex="0">
      <table class="table table-striped table-bordered border ink-table">
        <thead>
          <tr>
            <th scope="col" style="min-width:180px;">&nbsp;</th>
            <th scope="col">Multispectral</th>
            <th scope="col">Hyperspectral</th>
            <th scope="col">Essence</th>
            <th scope="col">SynIRgy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Emission spectral range</th>
            <td>900–1600 nm</td>
            <td>900–1600 nm</td>
            <td>900–1600 nm</td>
            <td>400–1000 nm (Visible camera)<br>900–1600 nm (NIR-II camera)</td>
          </tr>
          <tr>
            <th scope="row">Filtering</th>
            <td>Filter wheel with up to 6 emission channels</td>
            <td>HyperCube™ (&lt;4 nm spectral resolution (FWHM))</td>
            <td>Filter wheel with up to 6 emission channels</td>
            <td>Filter wheel with up to 6 emission channels</td>
          </tr>
          <tr>
            <th scope="row">Illumination source</th>
            <td>Laser at 670, 760, 808 and 890 nm with adjustable power density</td>
            <td>760 nm or 808 nm laser at 1 mW/mm²</td>
            <td>Laser at 808 and 890 nm with adjustable power density</td>
            <td>Laser at 670, 760, 808 and 890 nm with adjustable power density</td>
          </tr>
          <tr>
            <th scope="row">Lens</th>
            <td>50 mm f/1.4 lens</td>
            <td>50 mm f/5.0 lens</td>
            <td>50 mm f/1.4 lens</td>
            <td>VIS: 35 mm f/0.95<br>NIR-II: 50 mm f/1.4</td>
          </tr>
          <tr>
            <th scope="row">Field of view</th>
            <td>80 × 64 mm to 50 × 40 mm — variable FOV for 1 mouse or organ view</td>
            <td>8 × 4 cm to 15.6 × 12.5 cm — variable FOV for 1 mouse or organ view</td>
            <td>Fixed FOV for 1 mouse imaging: 80 × 64 mm</td>
            <td>80 × 64 mm to 50 × 40 mm — variable FOV for 1 mouse or organ view</td>
          </tr>
          <tr>
            <th scope="row">Stage</th>
            <td>Manual XY and motorized Z</td>
            <td>Manual XY and motorized Z</td>
            <td>Fixed sample stage</td>
            <td>Motorized XYZ</td>
          </tr>
          <tr>
            <th scope="row">Dimensions</th>
            <td>Tabletop: 77 × 60 × 98 cm</td>
            <td>Tabletop: 77 × 60 × 98 cm</td>
            <td>Tabletop: 77 × 60 × 98 cm</td>
            <td>TBC</td>
          </tr>
          <tr>
            <th scope="row">Camera type</th>
            <td>InGaAs (Alizé™ 1.7)</td>
            <td>InGaAs (ZephIR™ 1.7)</td>
            <td>InGaAs (Alizé™ 1.7)</td>
            <td>EMCCD &amp; InGaAs (Alizé™ 1.7)</td>
          </tr>
        </tbody>
      </table>
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

  "grand-eos": {
    id: "grand-eos",
    name: "GRAND-EOS™",
    image: ImgGrandEOS,   // e.g. imported from "/images/products/Photon/photon-etc-grand-eos.jpg"
    bannerImg: Banner3,   // optional (Banner2/3 also fine)
    logo: Photon,         // principal logo import
    altText: "Photon",
    videoId: "",
    meta: {
      title: "GRAND-EOS™ Hyperspectral Visible & Infrared Camera | Photon etc. | Inkarp India",
      description:
        "Continuously tunable hyperspectral imaging from 400–1620 nm using Photon etc.’s volume Bragg grating technology. Global-imaging data-cubes for reflectance, transmittance and luminescence — ideal for PV, forensic work, counterfeit detection, food & plant sorting.",
      keywords: [
        "GRAND-EOS",
        "hyperspectral camera",
        "visible infrared hyperspectral",
        "400–1620 nm",
        "volume Bragg grating",
        "global imaging",
        "Photon etc",
        "Inkarp India"
      ],
      altText: "GRAND-EOS™ hyperspectral camera",
      internalLinks: [],
      externalLinks: ["https://www.photonetc.com/"]
    },

    description: `
<div class="ink-wrap" style="--ink-red:#BE0010;--ink-indigo:#240078;--ink-gray:#f8fafc;font-family:Roboto,Arial,Helvetica,sans-serif;color:#333;line-height:1.7;font-size:16px;">
  <style>
    .ink-wrap .ink-section{background:#fff;border-radius:14px;padding:20px 0;margin:12px 0}
    .ink-wrap h2{font-family:MaxOT,;font-weight:800;font-size:26px;line-height:1.3;color:var(--ink-black);margin:0 0 10px}
    .ink-wrap h2 .subHeading{font-size:14px;font-weight:500;color:var(--ink-indigo)}
    .ink-wrap .ink-kicker{font-weight:700;color:var(--ink-red)}
    .ink-wrap ul.prod-det{padding-left:18px;margin:6px 0}
    .ink-wrap ul.prod-det li{margin:.25rem 0}
    .ink-wrap .tab-header{display:flex;align-items:center;gap:8px;margin:20px 0 12px}
    .ink-wrap .tab-header .badge{display:inline-block;border:1px solid var(--ink-indigo);color:var(--ink-indigo);border-radius:999px;font-size:12px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;background:#fff;padding:6px 12px}
    .ink-wrap .tab-header .title{font-weight:800;font-size:20px;color:var(--ink-red)}
    .ink-wrap .ink-table-wrap{overflow-x:auto;padding:8px 0}
    .ink-wrap table.ink-table{width:100%;border-collapse:collapse;min-width:500px}
    .ink-wrap table.ink-table th,
    .ink-wrap table.ink-table td{padding:10px 12px;border-bottom:1px solid #e6e8ef;text-align:left;vertical-align:top}
    .ink-wrap table.ink-table thead th{background:#fff;color:var(--ink-red);font-weight:800;border-bottom:2px solid #e6e8ef}
    .ink-wrap table.ink-table tbody tr:nth-child(even){background:var(--ink-gray)}
    @media (max-width:768px){
      .ink-wrap{font-size:15px}
      .ink-wrap h2{font-size:20px}
    }
  </style>

  <div class="ink-section">
    <div class="product-details ml_20" style="margin-left:20px;">
      <div class="text">
        <p class="ink-kicker"><strong>Hyperspectral Visible and Infrared Camera</strong></p>
        <p>GRAND-EOS is a global hyperspectral camera that is continuously tunable from 400 to 1620 nm. This system combines micro and macro modalities. It provides non-polarized wavelength selection with high throughput and efficiency, enabled by Photon etc.’s patented volume Bragg grating filtering technology.</p>
        <p>GRAND-EOS generates a hyperspectral data-cube with spatial information along X–Y and spectral information along Z. Photon etc.’s global-imaging approach extracts the data-cube from a handful of monochromatic images without reconstruction. The field of view can be adjusted to the application and sample size. Designed for reflectance, transmittance and luminescence imaging, GRAND-EOS suits both fundamental research and industrial use.</p>
        <p class="ink-kicker"><strong>GRAND-EOS opens the door to</strong></p>
        <ul class="prod-det">
          <li>Photovoltaic characterization</li>
          <li>Counterfeit examination</li>
          <li>Forensic research</li>
          <li>Food and plant sorting</li>
        </ul>
      </div>
    </div>

    <div class="product-discription">
      <div class="tab-header">
        <span class="title">Technical Data</span>
      </div>
      <div class="ink-table-wrap" role="region" aria-label="Technical Data table" tabindex="0">
        <table class="ink-table">
          <thead>
            <tr><th scope="col">&nbsp;</th><th scope="col">GRAND-EOS</th></tr>
          </thead>
          <tbody>
            <tr><th scope="row">Spectral range</th><td>400–1620 nm</td></tr>
            <tr><th scope="row">Spectral resolution (FWHM)</th><td>&lt; 4 nm</td></tr>
            <tr><th scope="row">Camera</th><td>sCMOS + Photon etc.’s InGaAs camera</td></tr>
            <tr><th scope="row">Spectral channels</th><td>Continuously tunable</td></tr>
            <tr><th scope="row">Entrance slit size</th><td>No slit / full field of view measured for each wavelength</td></tr>
            <tr><th scope="row">Standard field of view (customizable)</th><td>20 × 20 mm to 160 × 160 mm (others on request)</td></tr>
            <tr><th scope="row">Options &amp; accessories</th><td>Absolute photometric calibration, micro-imaging modality, white-light illumination, laser excitation</td></tr>
          </tbody>
        </table>
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

  "rima": {
    id: "rima",
    name: "RIMA™",
    image: ImgRIMA,      // e.g. imported from "/images/products/Photon/photon-etc-rima-closed.jpg"
    bannerImg: Banner3,  // optional
    logo: Photon,
    altText: "Photon",
    videoId: "",
    meta: {
      title: "RIMA™ Global Hyperspectral Raman Microscope | Photon etc. | Inkarp India",
      description:
        "RIMA delivers fast megapixel-scale Raman mapping using high-throughput global-imaging filters. Continuously tunable spectral channels with sub-micron spatial resolution for materials and bio applications.",
      keywords: [
        "RIMA",
        "Raman microscope",
        "hyperspectral Raman",
        "global imaging",
        "Raman mapping",
        "Photon etc",
        "Inkarp India"
      ],
      altText: "RIMA hyperspectral Raman microscope",
      internalLinks: [],
      externalLinks: ["https://www.photonetc.com/"]
    },

    description: `
<div class="ink-wrap" style="--ink-red:#BE0010;--ink-indigo:#240078;--ink-gray:#f8fafc;font-family:Roboto,Arial,Helvetica,sans-serif;color:#333;line-height:1.7;font-size:16px;">
  <style>
    .ink-wrap .ink-section{background:#fff;border-radius:14px;padding:20px 0;margin:12px 0}
    .ink-wrap h2{font-family:MaxOT,Roboto,Arial,Helvetica,sans-serif;font-weight:800;font-size:26px;line-height:1.3;color:var(--ink-black);margin:0 0 10px}
    .ink-wrap h2 .subHeading{font-size:14px;font-weight:500;color:var(--ink-indigo)}
    .ink-wrap .ink-kicker{font-weight:700;color:var(--ink-red)}
    .ink-wrap ul.prod-det{padding-left:18px;margin:6px 0}
    .ink-wrap ul.prod-det li{margin:.25rem 0}
    .ink-wrap .tab-header{display:flex;align-items:center;gap:8px;margin:20px 0 12px}
    .ink-wrap .tab-header .badge{display:inline-block;border:1px solid var(--ink-indigo);color:var(--ink-indigo);border-radius:999px;font-size:12px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;background:#fff;padding:6px 12px}
    .ink-wrap .tab-header .title{font-weight:800;font-size:20px;color:var(--ink-red)}
    .ink-wrap .ink-table-wrap{overflow-x:auto;padding:8px 0}
    .ink-wrap table.ink-table{width:100%;border-collapse:collapse;min-width:500px}
    .ink-wrap table.ink-table th,
    .ink-wrap table.ink-table td{padding:10px 12px;border-bottom:1px solid #e6e8ef;text-align:left;vertical-align:top}
    .ink-wrap table.ink-table thead th{background:#fff;color:var(--ink-red);font-weight:800;border-bottom:2px solid #e6e8ef}
    .ink-wrap table.ink-table tbody tr:nth-child(even){background:var(--ink-gray)}
    @media (max-width:768px){
      .ink-wrap{font-size:15px}
      .ink-wrap h2{font-size:20px}
    }
  </style>

  <div class="ink-section">
    <div class="product-details ml_20" style="margin-left:20px;">
   
      <div class="text">
        <p class="ink-kicker"><strong>Global Hyperspectral Raman Microscope</strong></p>
        <p>RIMA is a hyperspectral global microscope delivering spectral and spatial information. This system rapidly provides Raman maps over large megapixel-scale fields of view. Based on high-throughput global-imaging filters, RIMA is faster and more efficient than standard point-by-point or line-scan systems.</p>
        <p class="ink-kicker"><strong>RIMA Applications Overview</strong></p>
        <ul class="prod-det">
          <li>Low-dimensional material analyses (graphene, carbon nanotubes)</li>
          <li>Non-invasive monitoring and analysis of biological tissues</li>
          <li>Intraoperative cancer imaging with SERS nanoparticles</li>
          <li>Material identification (plastics, metals) and structural characterization (crystallinity, phase, bonds, strain, stress)</li>
        </ul>
      </div>
    </div>

    <div class="product-discription">
      <div class="tab-header">
        <span class="title">Technical Data</span>
      </div>
      <div class="ink-table-wrap" role="region" aria-label="Technical Data table" tabindex="0">
        <table class="ink-table">
          <thead>
            <tr>
              <th scope="col">&nbsp;</th>
              <th scope="col">RIMA 532 / RIMA 660</th>
              <th scope="col">RIMA 785</th>
            </tr>
          </thead>
          <tbody>
            <tr><th scope="row">Excitation wavelengths</th><td>532&nbsp;nm, 660&nbsp;nm</td><td>785&nbsp;nm</td></tr>
            <tr><th scope="row">Spectral range</th><td>190–4000&nbsp;cm⁻¹</td><td>190–2700&nbsp;cm⁻¹</td></tr>
            <tr><th scope="row">Spectral resolution</th><td>&lt; 7&nbsp;cm⁻¹</td><td>&lt; 7&nbsp;cm⁻¹</td></tr>
            <tr><th scope="row">Spectral channels</th><td>Continuously tunable</td><td>Continuously tunable</td></tr>
            <tr><th scope="row">Spatial resolution</th><td>Sub-micron — limited by microscope NA</td><td>Sub-micron — limited by microscope NA</td></tr>
            <tr><th scope="row">Camera</th><td>Back-illuminated CCD</td><td>Back-illuminated deep-depletion CCD</td></tr>
            <tr><th scope="row">Microscope</th><td>Upright or inverted</td><td>Upright or inverted</td></tr>
          </tbody>
        </table>
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

  "clair": {
    id: "clair",
    name: "ClaIR™",
    image: ImgCLAIR,
    bannerImg: Banner3,         // optional
    logo: Photon,               // your Photon etc. logo import
    altText: "Photon",
    videoId: "",
    meta: {
      title: "ClaIR™ NIR-II Infrared Microplate Reader | Photon etc. | Inkarp India",
      description:
        "ClaIR captures full fluorescence spectra from 900–1600 nm and transmittance from 500–1600 nm. Laser-based excitation with optional tunable source and benchtop probe for in vivo work.",
      keywords: [
        "ClaIR",
        "NIR-II microplate reader",
        "infrared plate reader",
        "900–1600 nm fluorescence",
        "Photon etc",
        "Inkarp India"
      ],
      altText: "ClaIR NIR-II microplate reader",
      internalLinks: [],
      externalLinks: ["https://www.photonetc.com/"]
    },

    description: `
<div class="ink-wrap" style="--ink-red:#BE0010;--ink-indigo:#240078;--ink-gray:#f8fafc;font-family:Roboto,Arial,Helvetica,sans-serif;color:#333;line-height:1.7;font-size:16px;">
  <style>
    .ink-wrap .ink-section{background:#fff;border-radius:14px;padding:20px 0;margin:12px 0}
    .ink-wrap h2{font-family:MaxOT,Roboto,Arial,Helvetica,sans-serif;font-weight:800;font-size:26px;line-height:1.3;color:var(--ink-black);margin:0 0 10px}
    .ink-wrap h2 .subHeading{font-size:14px;font-weight:500;color:var(--ink-indigo)}
    .ink-wrap .ink-kicker{font-weight:700;color:var(--ink-red)}
    .ink-wrap ul.prod-det{padding-left:18px;margin:6px 0}
    .ink-wrap ul.prod-det li{margin:.25rem 0}
    .ink-wrap .tab-header{display:flex;align-items:center;gap:8px;margin:20px 0 12px}
    .ink-wrap .tab-header .badge{display:inline-block;border:1px solid var(--ink-indigo);color:var(--ink-indigo);border-radius:999px;font-size:12px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;background:#fff;padding:6px 12px}
    .ink-wrap .tab-header .title{font-weight:800;font-size:20px;color:var(--ink-red)}
    .ink-wrap .ink-table-wrap{overflow-x:auto;padding:8px 0}
    .ink-wrap table.ink-table{width:100%;border-collapse:collapse;min-width:500px}
    .ink-wrap table.ink-table th,
    .ink-wrap table.ink-table td{padding:10px 12px;border-bottom:1px solid #e6e8ef;text-align:left;vertical-align:top}
    .ink-wrap table.ink-table thead th{background:#fff;color:var(--ink-red);font-weight:800;border-bottom:2px solid #e6e8ef}
    .ink-wrap table.ink-table tbody tr:nth-child(even){background:var(--ink-gray)}
    @media (max-width:768px){
      .ink-wrap{font-size:15px}
      .ink-wrap h2{font-size:20px}
    }
  </style>

  <div class="ink-section">
    <div class="product-details ml_20" style="margin-left:20px;">
      <div class="text">
        <p class="ink-kicker"><strong>Infrared Microplate Reader</strong></p>
        <p class="font_family_poppins mb_10" style="margin:6px 0 12px 0;">Excite your probes at any wavelength to validate their NIR-II emissions</p>
        <p>The ClaIR NIR-II microplate reader captures full fluorescence spectra from 900–1600&nbsp;nm and transmittance from 500–1600&nbsp;nm. With the included software, ClaIR performs a range of endpoint and kinetic applications. The instrument ships with laser-based excitation sources and can be complemented by a high-power tunable light source. An optional benchtop probe extends capabilities to in vivo measurements.</p>
      </div>
    </div>

    <div class="product-discription">
      <div class="tab-header">
        <span class="title">Technical Data</span>
      </div>

      <div class="ink-table-wrap" role="region" aria-label="Technical Data table" tabindex="0">
        <table class="ink-table">
          <tbody>
            <tr><th scope="row">Detection modes</th><td>Absorbance and fluorescence spectroscopy</td></tr>
            <tr><th scope="row">Microplate formats</th><td>1 to 1536-well plates, user definable</td></tr>
            <tr><th scope="row">Absorbance light sources</th><td>Halogen white lamp</td></tr>
            <tr><th scope="row">Absorbance spectral range</th><td>500–1600&nbsp;nm</td></tr>
            <tr><th scope="row">Fluorescence light sources</th><td>650&nbsp;nm and 735&nbsp;nm laser diodes; fiber entry for optional tunable source</td></tr>
            <tr><th scope="row">Fluorescence spectral range</th><td>900–1600&nbsp;nm</td></tr>
            <tr><th scope="row">Detection</th><td>High-sensitivity VIS and IR spectrometer</td></tr>
            <tr><th scope="row">Z-adjustment</th><td>Focal height adjustment (0.1&nbsp;nm resolution)</td></tr>
            <tr><th scope="row">Read height</th><td>Adjustable bottom to mid-well height</td></tr>
            <tr><th scope="row">Software</th><td>PC (Windows 10, 64-bit) with PHySpec™ control &amp; analysis (computer included)</td></tr>
            <tr><th scope="row">Data format</th><td>CSV</td></tr>
            <tr><th scope="row">Computer interface</th><td>USB</td></tr>
            <tr><th scope="row">Line voltage</th><td>120–230&nbsp;VAC</td></tr>
            <tr><th scope="row">Dimensions</th><td>690 × 535 × 275&nbsp;mm</td></tr>
            <tr><th scope="row">Weight</th><td>40&nbsp;kg</td></tr>
          </tbody>
        </table>
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

  "zephir-2-5": {
    id: "zephir-2-5",
    name: "ZephIR™ 2.5",
    image: ImgZephIR25,
    bannerImg: Banner3,          // optional (Banner1/3 also fine)
    logo: Photon,                // your Photon etc. logo import
    altText: "Photon",
    videoId: "",
    meta: {
      title: "ZephIR™ 2.5 SWIR Camera (850–2500 nm) | Photon etc. | Inkarp India",
      description:
        "Deep-cooled extended-SWIR camera (850–2500 nm) with USB 3.0/CameraLink, high frame rates and low noise. Thermoelectric cooling for maintenance-free operation.",
      keywords: [
        "ZephIR 2.5",
        "SWIR camera",
        "850–2500 nm",
        "HgCdTe",
        "deep cooled",
        "USB 3.0",
        "CameraLink",
        "Photon etc",
        "Inkarp India"
      ],
      altText: "ZephIR 2.5 extended SWIR camera",
      internalLinks: [],
      externalLinks: ["https://www.photonetc.com/"]
    },

    description: `
<div class="ink-wrap" style="--ink-red:#BE0010;--ink-indigo:#240078;--ink-gray:#f8fafc;font-family:Roboto,Arial,Helvetica,sans-serif;color:#333;line-height:1.7;font-size:16px;">
  <style>
    .ink-wrap .ink-section{background:#fff;border-radius:14px;padding:20px 0;margin:12px 0}
    .ink-wrap h2{font-family:MaxOT,Roboto,Arial,Helvetica,sans-serif;font-weight:800;font-size:26px;line-height:1.3;color:var(--ink-black);margin:0 0 10px}
    .ink-wrap h2 .subHeading{font-size:14px;font-weight:500;color:var(--ink-indigo)}
    .ink-wrap .ink-kicker{font-weight:700;color:var(--ink-red)}
    .ink-wrap .tab-header{display:flex;align-items:center;gap:8px;margin:20px 0 12px}
    .ink-wrap .tab-header .badge{display:inline-block;border:1px solid var(--ink-indigo);color:var(--ink-indigo);border-radius:999px;font-size:12px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;background:#fff;padding:6px 12px}
    .ink-wrap .tab-header .title{font-weight:800;font-size:20px;color:var(--ink-red)}
    .ink-wrap .ink-table-wrap{overflow-x:auto;padding:8px 0}
    .ink-wrap table.ink-table{width:100%;border-collapse:collapse;min-width:500px}
    .ink-wrap table.ink-table th,
    .ink-wrap table.ink-table td{padding:10px 12px;border-bottom:1px solid #e6e8ef;text-align:left;vertical-align:top}
    .ink-wrap table.ink-table thead th{background:#fff;color:var(--ink-red);font-weight:800;border-bottom:2px solid #e6e8ef}
    .ink-wrap table.ink-table tbody tr:nth-child(even){background:var(--ink-gray)}
    @media (max-width:768px){
      .ink-wrap{font-size:15px}
      .ink-wrap h2{font-size:20px}
    }
  </style>

  <div class="ink-section">
    <div class="product-details ml_20" style="margin-left:20px;">
      <div class="text">
        <p class="ink-kicker"><strong>SWIR Camera</strong></p>
        <p>The ZephIR 2.5 is a deep-cooled, extended SWIR camera sensitive from 850 to 2500 nm. By deep-cooling the infrared sensor, ZephIR 2.5 acquires more signal with minimized noise. The extended spectral range enables broader wavelength coverage for advanced IR detection systems. Thermoelectric cooling removes the need for water or LN₂ chillers and avoids limited-lifetime Stirling coolers—boosting usability and integration flexibility.</p>
        <p>With high frame rates over USB 3.0 or CameraLink™, ZephIR 2.5 suits demanding industrial applications and precision scientific experiments. Control with Photon etc.’s PHySpec software or develop with the Python/C++ SDK.</p>
      </div>
    </div>

    <div class="product-discription">
      <div class="tab-header">

        <span class="title">Technical Data</span>
      </div>

      <div class="ink-table-wrap" role="region" aria-label="Technical Data table" tabindex="0">
        <table class="ink-table">
          <tbody>
            <tr><th scope="row">Focal plane array (FPA)</th><td>HgCdTe</td></tr>
            <tr><th scope="row">FPA size (px)</th><td>320 × 256</td></tr>
            <tr><th scope="row">Pixel size (µm)</th><td>30</td></tr>
            <tr><th scope="row">Spectral range (QE &gt; 10%)</th><td>0.85–2.5 µm</td></tr>
            <tr><th scope="row">FPA operating temperature</th><td>−80 °C</td></tr>
            <tr><th scope="row">Dark current (sensor at −80 °C)</th><td>Target at 21 °C: &lt; 30 (typ. ~20) Mē/px/s</td></tr>
            <tr><th scope="row">Typical gain setting (ē/ADU)</th><td>High: 10.3 | Low: 216</td></tr>
            <tr><th scope="row">Typical readout noise (ē)</th><td>High: 150 | Low: 980</td></tr>
            <tr><th scope="row">Digitization (bits)</th><td>14</td></tr>
            <tr><th scope="row">Frame rate (CameraLink™)</th><td>Up to 340 full frame; 2000 for a 64×64 ROI</td></tr>
            <tr><th scope="row">Frame rate (USB 3.0)</th><td>Up to 340 full frame; 2000 for a 64×64 ROI</td></tr>
            <tr><th scope="row">Quantum efficiency</th><td>Up to 85%</td></tr>
            <tr><th scope="row">Computer interface</th><td>CameraLink™ or USB 3.0</td></tr>
            <tr><th scope="row">Dimensions</th><td>169 mm × 130 mm × 97.25 mm</td></tr>
            <tr><th scope="row">Weight</th><td>2.9 kg</td></tr>
          </tbody>
        </table>
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

  "lima": {
    id: "lima",
    name: "LIMA™",
    image: ImgLIMA,
    bannerImg: Banner3,          // optional (Banner2/3 also fine)
    logo: Photon,                // your Photon etc. logo import
    altText: "Photon",
    videoId: "",
    meta: {
      title: "LIMA™ Hyperspectral Microscope | Photon etc. | Inkarp India",
      description:
        "Wide-tunable laser hyperspectral microscope for VIS, NIR and SWIR. Full-field monochromatic illumination, high spectral and near-diffraction-limited spatial resolution for fast mapping.",
      keywords: [
        "LIMA",
        "hyperspectral microscope",
        "tunable laser",
        "VIS NIR SWIR",
        "darkfield",
        "PLE",
        "Photon etc",
        "Inkarp India"
      ],
      altText: "LIMA hyperspectral microscope",
      internalLinks: [],
      externalLinks: ["https://www.photonetc.com/"]
    },

    description: `
<div class="ink-wrap" style="--ink-red:#BE0010;--ink-indigo:#240078;--ink-gray:#f8fafc;font-family:Roboto,Arial,Helvetica,sans-serif;color:#333;line-height:1.7;font-size:16px;">
  <style>
    .ink-wrap .ink-section{background:#fff;border-radius:14px;padding:20px 0;margin:12px 0}
    .ink-wrap h2{font-family:MaxOT,Roboto,Arial,Helvetica,sans-serif;font-weight:800;font-size:26px;line-height:1.3;color:var(--ink-black);margin:0 0 10px}
    .ink-wrap h2 .subHeading{font-size:14px;font-weight:500;color:var(--ink-indigo)}
    .ink-wrap .ink-kicker{font-weight:700;color:var(--ink-red)}
    .ink-wrap .ink-table-wrap{overflow-x:auto;padding:8px 0}
    .ink-wrap .tab-header{display:flex;align-items:center;gap:8px;margin:20px 0 12px}
    .ink-wrap .tab-header .badge{display:inline-block;border:1px solid var(--ink-indigo);color:var(--ink-indigo);border-radius:999px;font-size:12px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;background:#fff;padding:6px 12px}
    .ink-wrap .tab-header .title{font-weight:800;font-size:20px;color:var(--ink-red)}
    .ink-wrap table.ink-table{width:100%;border-collapse:collapse;min-width:640px}
    .ink-wrap table.ink-table th,
    .ink-wrap table.ink-table td{padding:10px 12px;border-bottom:1px solid #e6e8ef;text-align:left;vertical-align:top}
    .ink-wrap table.ink-table thead th{background:#fff;color:var(--ink-red);font-weight:800;border-bottom:2px solid #e6e8ef}
    .ink-wrap table.ink-table tbody tr:nth-child(even){background:var(--ink-gray)}
    @media (max-width:768px){
      .ink-wrap{font-size:15px}
      .ink-wrap h2{font-size:20px}
    }
  </style>

  <div class="ink-section">
    <div class="product-details ml_20" style="margin-left:20px;">
      <div class="text">
        <p>LIMA™ is a hyperspectral microscope based on a widely tunable laser source. It uses Photon etc.’s filtering technology to illuminate the full field of view of a research-grade microscope with a continuously tunable monochromatic, high power density laser light.</p>
        <p>The system provides high spectral resolution in the VIS, NIR, and SWIR with near-diffraction-limited spatial resolution. Ideal for darkfield, PLE, and standard brightfield reflectance/transmittance imaging, it maps the full spectral response of a sample much faster than point-by-point or line-scan systems.</p>
      </div>
    </div>

    <div class="product-discription">
      <div class="tab-header">
        <span class="title">Technical Data</span>
      </div>

      <div class="ink-table-wrap" role="region" aria-label="Technical Data table" tabindex="0">
        <table class="ink-table">
          <thead>
            <tr>
              <th scope="col">&nbsp;</th>
              <th scope="col">VIS</th>
              <th scope="col">SWIR</th>
              <th scope="col">eSWIR</th>
              <th scope="col">VIS-SWIR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Excitation spectral range</th>
              <td>400–1000 nm</td><td>900–1620 nm</td><td>1000–2500 nm</td><td>400–1620 nm</td>
            </tr>
            <tr>
              <th scope="row">Excitation spectral resolution (FWHM)</th>
              <td>1.5–2.5 nm</td><td>3.0–5.0 nm</td><td>&lt; 5.0 nm</td><td>1.5–5.0 nm</td>
            </tr>
            <tr>
              <th scope="row">Excitation wavelength</th>
              <td>Continuously tunable</td><td>Continuously tunable</td><td>Continuously tunable</td><td>Continuously tunable</td>
            </tr>
            <tr>
              <th scope="row">Out-of-band rejection</th>
              <td>&lt; −60 dB @ ±40 nm</td><td>&lt; −60 dB @ ±80 nm</td><td>&lt; −60 dB @ ±80 nm</td><td>&lt; −60 dB @ ±40 nm (VIS) or ±80 nm (SWIR)</td>
            </tr>
            <tr>
              <th scope="row">TLS output power</th>
              <td>2–4 mW</td><td>3–9 mW</td><td>0.5–8.0 mW</td><td>2–9 mW</td>
            </tr>
            <tr>
              <th scope="row">Illumination</th>
              <td colspan="4">High-efficiency homogeneous illumination; Dia or Epi; Brightfield; Darkfield (oil and dry)</td>
            </tr>
            <tr>
              <th scope="row">Spatial resolution</th>
              <td colspan="4">Sub-micron — limited by the microscope objective NA</td>
            </tr>
            <tr>
              <th scope="row">Camera</th>
              <td>sCMOS (optionally CCD, EMCCD)</td>
              <td>ZephIR™ 1.7 or Alizé™ 1.7 (InGaAs)</td>
              <td>ZephIR™ 2.5 (HgCdTe)</td>
              <td>sCMOS and ZephIR™ 1.7 or Alizé™ 1.7</td>
            </tr>
            <tr>
              <th scope="row">Microscope</th>
              <td colspan="4">Upright or inverted, scientific grade</td>
            </tr>
            <tr>
              <th scope="row">White light illumination</th>
              <td colspan="4">Diascopic, episcopic, Hg, halogen</td>
            </tr>
          </tbody>
        </table>
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

  "l-eos": {
    id: "l-eos",
    name: "L-EOS™",
    image: ImgLEOS,
    bannerImg: Banner3,            // optional (Banner1/Banner3 also fine)
    logo: Photon,                  // your Photon etc. logo import
    altText: "Photon",
    videoId: "",
    meta: {
      title: "L-EOS™ Push-Broom Hyperspectral Scanner | Photon etc. | Inkarp India",
      description:
        "Infrared push-broom hyperspectral system (0.9–2.8 µm) with reflective spectrometer, deep TE cooling (−50/−80 °C), and Photon etc. IR cameras. Customizable for geology, sorting, recycling and more.",
      keywords: [
        "L-EOS",
        "push broom hyperspectral",
        "SWIR hyperspectral",
        "NIR hyperspectral",
        "Photon etc",
        "industrial hyperspectral",
        "recycling",
        "geology",
        "Inkarp India"
      ],
      altText: "L-EOS hyperspectral push-broom scanner",
      internalLinks: [],
      externalLinks: ["https://www.photonetc.com/"]
    },
    description: `
<div class="ink-wrap" style="--ink-red:#BE0010;--ink-indigo:#240078;--ink-gray:#f8fafc;font-family:Roboto,Arial,Helvetica,sans-serif;color:#333;line-height:1.7;font-size:16px;">
  <style>
    .ink-wrap .ink-section{background:#fff;border-radius:14px;padding:20px 0;margin:12px 0}
    .ink-wrap h2{font-family:MaxOT,Roboto,Arial,Helvetica,sans-serif;font-weight:800;font-size:26px;line-height:1.3;color:var(--ink-black);margin:0 0 10px}
    .ink-wrap h2 .subHeading{font-size:14px;font-weight:500;color:var(--ink-indigo)}
    .ink-wrap .ink-kicker{font-weight:700;color:var(--ink-red)}
    .ink-wrap .ink-table-wrap{overflow-x:auto;padding:8px 0}
    .ink-wrap .tab-header{display:flex;align-items:center;gap:8px;margin:20px 0 12px}
    .ink-wrap .tab-header .badge{display:inline-block;border:1px solid var(--ink-indigo);color:var(--ink-indigo);border-radius:999px;font-size:12px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;background:#fff;padding:6px 12px}
    .ink-wrap .tab-header .title{font-weight:800;font-size:20px;color:var(--ink-red)}
    .ink-wrap table.ink-table{width:100%;border-collapse:collapse;min-width:640px}
    .ink-wrap table.ink-table th,
    .ink-wrap table.ink-table td{padding:10px 12px;border-bottom:1px solid #e6e8ef;text-align:left;vertical-align:top}
    .ink-wrap table.ink-table thead th{background:#fff;color:var(--ink-red);font-weight:800;border-bottom:2px solid #e6e8ef}
    .ink-wrap table.ink-table tbody tr:nth-child(even){background:var(--ink-gray)}
    @media (max-width:768px){
      .ink-wrap{font-size:15px}
      .ink-wrap h2{font-size:20px}
    }
  </style>

  <div class="ink-section">
    <div class="product-details ml_20" style="margin-left:20px;">
      <div class="text">
        <p class="ink-kicker"><strong>Push-broom Hyperspectral Scanner</strong></p>
        <p>The L-EOS is an infrared push-broom hyperspectral system optimized from 0.9 to 2.8 µm. Using a totally reflective spectrometer at its core, it has fewer interfaces—resulting in lower light losses, no chromatism, and minimal aberrations. It pairs with Photon etc.’s scientific-grade infrared cameras and IR objectives designed for spectroscopy.</p>
        <p>The system is highly customizable for specific applications such as geology, material sorting, and recycling. Its 4-stage TE cooling (−50 °C / −80 °C) extends lifetime and minimizes maintenance, while the robust design is ready for industrial environments.</p>
      </div>
    </div>

    <div class="product-discription">
      <div class="tab-header">
        <span class="title">Technical Data</span>
      </div>

      <div class="ink-table-wrap" role="region" aria-label="Technical Data table" tabindex="0">
        <table class="ink-table">
          <thead>
            <tr>
              <th scope="col">&nbsp;</th>
              <th scope="col">L-EOS 1.7</th>
              <th scope="col">L-EOS 2.5</th>
              <th scope="col">L-EOS 2.8</th>
            </tr>
          </thead>
          <tbody>
            <tr><th scope="row">Spectral range</th><td>900–1650 nm</td><td>900–2500 nm</td><td>1000–2800 nm</td></tr>
            <tr><th scope="row">Photon etc. camera</th><td>InGaAs (ZephIR™ 1.7 / Alizé™ 1.7)</td><td>MCT (ZephIR™ 2.5)</td><td>MCT (ZephIR™ 2.9)</td></tr>
            <tr><th scope="row">Spatial resolution (RMS spot radius)</th><td>22 µm (1.5 px)</td><td>30 µm (1 px)</td><td>30 µm (1 px)</td></tr>
            <tr><th scope="row">Dispersion – Spectral sampling (nm/px)</th><td>1.3</td><td>5</td><td>5.6</td></tr>
            <tr><th scope="row">Standard slit width (µm)</th><td>30</td><td>30</td><td>30</td></tr>
            <tr><th scope="row">Slit length (mm)</th><td>7.7</td><td>7.7</td><td>7.7</td></tr>
            <tr><th scope="row">Spectral channels **</th><td>640</td><td>320</td><td>320</td></tr>
            <tr><th scope="row">Spatial channels **</th><td>512</td><td>256</td><td>256</td></tr>
            <tr><th scope="row">Spectral resolution (FWHM)</th><td>3 nm (2 px)</td><td>7.5 nm (1.5 px)</td><td>9 nm (1.5 px)</td></tr>
            <tr><th scope="row">Aperture</th><td>f/2.1</td><td>f/2.1</td><td>f/2.1</td></tr>
            <tr><th scope="row">Aberrations corrected</th><td>Yes</td><td>Yes</td><td>Yes</td></tr>
            <tr><th scope="row">Sensor resolution (px)</th><td>512 × 640</td><td>256 × 320</td><td>256 × 320</td></tr>
            <tr><th scope="row">Sensor dimensions (mm)</th><td>7.7 × 9.6</td><td>7.7 × 9.6</td><td>7.7 × 9.6</td></tr>
            <tr><th scope="row">Pixel pitch (µm)</th><td>15</td><td>30</td><td>30</td></tr>
            <tr><th scope="row">Sensor temperature (°C)</th><td>−80 or −50</td><td>−80</td><td>−80</td></tr>
            <tr><th scope="row">Max frame rate (full window, fps)</th><td>250</td><td>340</td><td>340</td></tr>
            <tr><th scope="row">Smile (px)</th><td>&lt; 0.66</td><td>&lt; 0.33</td><td>&lt; 0.33</td></tr>
            <tr><th scope="row">Keystone (px)</th><td>&lt; 0.66</td><td>&lt; 0.33</td><td>&lt; 0.33</td></tr>
            <tr><th scope="row">Dimensions (L × W × H cm)</th><td>33 × 33 × 23</td><td>33 × 33 × 23</td><td>33 × 33 × 23</td></tr>
            <tr><th scope="row">Weight (kg)</th><td>10</td><td>10</td><td>10</td></tr>
            <tr><th scope="row">Operating temperature (°C)</th><td>10–30</td><td>10–30</td><td>10–30</td></tr>
            <tr><th scope="row">Camera control / Digital output</th><td>C-Link / USB 3.0</td><td>C-Link / USB 3.0</td><td>C-Link / USB 3.0</td></tr>
            <tr><th scope="row">Mechanical shutter</th><td>Yes</td><td>Yes</td><td>Yes</td></tr>
            <tr><th scope="row">Harmonic suppression</th><td>Yes</td><td>Yes</td><td>Yes</td></tr>
            <tr><th scope="row">Power consumption @ 12 VDC (W)</th><td>33.1 (typ. 20.4)</td><td>30.6 (typ. 26.0)</td><td>46.2 (typ. 32.4)</td></tr>
            <tr>
              <th scope="row">Lens options (AFOV)</th>
              <td>HypIRia 11 mm 37.8° × 0.15° | 15 mm 27.8° × 0.11° | 25 mm 17.5° × 0.07°</td>
              <td>HypIRia 11 mm 37.8° × 0.15° | 15 mm 27.8° × 0.11° | 25 mm 17.5° × 0.07°</td>
              <td>HypIRia 11 mm 37.8° × 0.15° | 15 mm 27.8° × 0.11° | 25 mm 17.5° × 0.07°</td>
            </tr>
            <tr>
              <th scope="row">Minimum working distance</th>
              <td>15 cm (HypIRia) | 5 cm (macro lens option)</td>
              <td>15 cm (HypIRia) | 5 cm (macro lens option)</td>
              <td>15 cm (HypIRia) | 5 cm (macro lens option)</td>
            </tr>
          </tbody>
        </table>
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
  "zephir-1-7": {
    id: "zephir-1.7",
    name: "ZephIR™ 1.7",
    image: ImgZephIR17,
    bannerImg: Banner3,            // optional (Banner2/Banner3 also fine)
    logo: Photon,                  // your Photon etc. logo import
    altText: "Photon",
    videoId: "",
    meta: {
      title: "ZephIR™ 1.7 Deeply Cooled InGaAs Camera | Photon etc. | Inkarp India",
      description:
        "Scientific-grade 640×512 InGaAs camera with ultra-low noise, high QE, and −80 °C 4-stage TE cooling. USB 3.0 / CameraLink, external trigger, and fast frame rates.",
      keywords: [
        "ZephIR 1.7",
        "InGaAs camera",
        "SWIR camera",
        "deep cooled camera",
        "Photon etc",
        "NIR camera",
        "scientific camera",
        "Inkarp India"
      ],
      altText: "ZephIR 1.7 deep-cooled InGaAs camera",
      internalLinks: [],
      externalLinks: ["https://www.photonetc.com/"]
    },

    description: `
<div class="ink-wrap" style="--ink-red:#BE0010;--ink-indigo:#240078;--ink-gray:#f8fafc;font-family:Roboto,Arial,Helvetica,sans-serif;color:#333;line-height:1.7;font-size:16px;">
  <style>
    .ink-wrap .ink-section{background:#fff;border-radius:14px;padding:20px 0;margin:12px 0}
    .ink-wrap h2{font-family:MaxOT,Roboto,Arial,Helvetica,sans-serif;font-weight:800;font-size:26px;line-height:1.3;color:#111;margin:0 0 10px}
    .ink-wrap h2 .subHeading{font-size:14px;font-weight:500;color:var(--ink-indigo)}
    .ink-wrap .ink-kicker{font-weight:700;color:var(--ink-red)}
    .ink-wrap .ink-table-wrap{overflow-x:auto;padding:8px 0}
    .ink-wrap .tab-header{display:flex;align-items:center;gap:8px;margin:20px 0 12px}
    .ink-wrap .tab-header .badge{display:inline-block;border:1px solid var(--ink-indigo);color:var(--ink-indigo);border-radius:999px;font-size:12px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;background:#fff;padding:6px 12px}
    .ink-wrap .tab-header .title{font-weight:800;font-size:20px;color:var(--ink-red)}
    .ink-wrap table.ink-table{width:100%;border-collapse:collapse;min-width:640px}
    .ink-wrap table.ink-table th,
    .ink-wrap table.ink-table td{padding:10px 12px;border-bottom:1px solid #e6e8ef;text-align:left;vertical-align:top}
    .ink-wrap table.ink-table thead th{background:#fff;color:var(--ink-red);font-weight:800;border-bottom:2px solid #e6e8ef}
    .ink-wrap table.ink-table tbody tr:nth-child(even){background:var(--ink-gray)}
    @media (max-width:768px){
      .ink-wrap{font-size:15px}
      .ink-wrap h2{font-size:20px}
    }
  </style>

  <div class="ink-section">
    <div class="product-details ml_20" style="margin-left:20px;">
      <div class="text">
        <p class="ink-kicker"><strong>Deeply Cooled InGaAs Camera</strong></p>
        <p>The ZephIR 1.7 is a high-end, scientific-grade InGaAs camera (640 × 512 px) that combines ultra-low noise, high quantum efficiency and rapid frame rates with external triggering.</p>
        <p>Its four-stage thermoelectric cooler (TEC) maintains operating temperatures as low as −80&nbsp;°C using forced-air cooling—no water or LN₂ maintenance—delivering dependable performance for demanding SWIR/NIR imaging.</p>
        <p>The ZephIR 1.7 is one of the most sensitive and dependable InGaAs cameras on the market.</p>
      </div>
    </div>

    <div class="product-discription">
      <div class="tab-header">
        <span class="title">Technical Data</span>
      </div>

      <div class="ink-table-wrap" role="region" aria-label="Technical Data table" tabindex="0">
        <table class="ink-table">
          <thead>
            <tr>
              <th scope="col">&nbsp;</th>
              <th scope="col">ZephIR 1.7x</th>
              <th scope="col">ZephIR 1.7s</th>
            </tr>
          </thead>
          <tbody>
            <tr><th scope="row">Focal plane array (FPA)</th><td>InGaAs</td><td>InGaAs</td></tr>
            <tr><th scope="row">FPA size (px)</th><td>640 × 512</td><td>640 × 512</td></tr>
            <tr><th scope="row">Pixel size (µm)</th><td>15</td><td>15</td></tr>
            <tr>
              <th scope="row">Spectral range (QE &gt; 10%)</th>
              <td>0.45–1.70 µm @ 25&nbsp;°C; ~0.50–1.63 µm @ −80&nbsp;°C</td>
              <td>0.95–1.70 µm @ 25&nbsp;°C; 0.90–1.61 µm @ −80&nbsp;°C</td>
            </tr>
            <tr><th scope="row">FPA operating temperature</th><td>−80&nbsp;°C</td><td>−80&nbsp;°C</td></tr>
            <tr>
              <th scope="row">Dark current (sensor @ −80&nbsp;°C)</th>
              <td>Target @ 21&nbsp;°C: &lt; 300 (typ. ~225) ē/px/s</td>
              <td>Target @ 21&nbsp;°C: &lt; 400 (typ. ~300) ē/px/s</td>
            </tr>
            <tr>
              <th scope="row">Typical gain setting (ē/ADU)</th>
              <td>High: 2.67 | Low: 47.5</td>
              <td>High: 2.2 | Med: 7.4 | Low: 89</td>
            </tr>
            <tr>
              <th scope="row">Typical readout noise (ē)</th>
              <td>High: 22 | Low: 135</td>
              <td>High: 28 | Med: 75 | Low: 315</td>
            </tr>
            <tr>
              <th scope="row">Frame rate (CameraLink™)</th>
              <td>High: 105 | Low: 210</td>
              <td>Up to 240 full frame; 1900 @ 128×128 ROI</td>
            </tr>
            <tr>
              <th scope="row">Frame rate (USB 3.0)</th>
              <td>High: 110 | Low: 220</td>
              <td>Up to 250 full frame; 1900 @ 128×128 ROI</td>
            </tr>
            <tr><th scope="row">Digitization (bits)</th><td>13</td><td>14</td></tr>
            <tr>
              <th scope="row">Quantum efficiency</th>
              <td>&gt; 70% 0.95–1.67 µm @ 25&nbsp;°C; &gt; 70% 0.87–1.60 µm @ −80&nbsp;°C</td>
              <td>&gt; 70% 1.00–1.65 µm @ 25&nbsp;°C; &gt; 70% 0.95–1.56 µm @ −80&nbsp;°C</td>
            </tr>
            <tr><th scope="row">Computer interface</th><td>CameraLink™ or USB 3.0</td><td>CameraLink™ or USB 3.0</td></tr>
            <tr><th scope="row">Dimensions</th><td>169 × 130 × 97 mm</td><td>169 × 130 × 97 mm</td></tr>
            <tr><th scope="row">Weight</th><td>2.9 kg</td><td>2.9 kg</td></tr>
          </tbody>
        </table>
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

  "ima": {
    id: "ima",
    name: "IMA™",
    image: ImgIMA,
    bannerImg: Banner3,            // optional (Banner1/Banner3 also fine)
    logo: Photon,                  // your Photon etc. logo import
    altText: "Photon",
    videoId: "",
    meta: {
      title: "IMA™ Global Hyperspectral Microscope | Photon etc. | Inkarp India",
      description:
        "Global hyperspectral microscope (400–1620 nm) for rapid PL/EL/fluorescence/reflectance/transmittance mapping. High-throughput filters for fast, efficient imaging.",
      keywords: [
        "IMA",
        "hyperspectral microscope",
        "global hyperspectral imaging",
        "VIS NIR SWIR microscope",
        "Photon etc",
        "Inkarp India"
      ],
      altText: "IMA hyperspectral microscope",
      internalLinks: [],
      externalLinks: ["https://www.photonetc.com/"]
    },

    description: `
<div class="ink-wrap" style="--ink-red:#BE0010;--ink-indigo:#240078;--ink-gray:#f8fafc;font-family:Roboto,Arial,Helvetica,sans-serif;color:#333;line-height:1.7;font-size:16px;">
  <style>
    .ink-wrap .ink-section{background:#fff;border-radius:14px;padding:20px 0;margin:12px 0}
    .ink-wrap h2{font-family:MaxOT,Roboto,Arial,Helvetica,sans-serif;font-weight:800;font-size:26px;line-height:1.3;color:#111;margin:0 0 10px}
    .ink-wrap h2 .subHeading{font-size:14px;font-weight:500;color:var(--ink-indigo)}
    .ink-wrap .ink-kicker{font-weight:700;color:var(--ink-red)}
    .ink-wrap ul.prod-det{padding-left:18px;margin:6px 0}
    .ink-wrap ul.prod-det li{margin:.25rem 0}
    .ink-wrap .tab-header{display:flex;align-items:center;gap:8px;margin:20px 0 12px}
    .ink-wrap .tab-header .badge{display:inline-block;border:1px solid var(--ink-indigo);color:var(--ink-indigo);border-radius:999px;font-size:12px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;background:#fff;padding:6px 12px}
    .ink-wrap .tab-header .title{font-weight:800;font-size:20px;color:var(--ink-red)}
    .ink-wrap .ink-table-wrap{overflow-x:auto;padding:8px 0}
    .ink-wrap table.ink-table{width:100%;border-collapse:collapse;min-width:560px}
    .ink-wrap table.ink-table th,
    .ink-wrap table.ink-table td{padding:10px 12px;border-bottom:1px solid #e6e8ef;text-align:left;vertical-align:top}
    .ink-wrap table.ink-table thead th{background:#fff;color:var(--ink-red);font-weight:800;border-bottom:2px solid #e6e8ef}
    .ink-wrap table.ink-table tbody tr:nth-child(even){background:var(--ink-gray)}
    @media (max-width:768px){
      .ink-wrap{font-size:15px}
      .ink-wrap h2{font-size:20px}
    }
  </style>

  <div class="ink-section">
    <div class="product-details ml_20" style="margin-left:20px;">
      <div class="text">
        <p class="ink-kicker"><strong>Global Hyperspectral Microscope</strong></p>
        <p>IMA is a hyperspectral microscope delivering spectral and spatial information in the VIS, NIR, and SWIR range (400–1620&nbsp;nm). This system rapidly maps photoluminescence, electroluminescence, fluorescence, reflectance, and transmittance. Based on high-throughput global-imaging filters, IMA is faster and more efficient than standard point-by-point or line-scan systems.</p>

        <p class="ink-kicker"><strong>IMA Applications Overview</strong></p>
        <ul class="prod-det">
          <li>Perform complex material analyses such as solar cell characterization and semiconductor quality control.</li>
          <li>Study IR markers in complex environments including live cells and tissue.</li>
          <li>Retrieve darkfield images and obtain contrast of transparent and unstained samples such as polymers, crystals, or live cells.</li>
        </ul>
      </div>
    </div>

    <div class="product-discription">
      <div class="tab-header">
        <span class="title">Technical Data</span>
      </div>

      <div class="ink-table-wrap" role="region" aria-label="Technical Data table" tabindex="0">
        <table class="ink-table">
          <thead>
            <tr>
              <th scope="col">&nbsp;</th>
              <th scope="col">VIS</th>
              <th scope="col">SWIR</th>
            </tr>
          </thead>
          <tbody>
            <tr><th scope="row">Spectral range</th><td>400–1000&nbsp;nm</td><td>900–1620&nbsp;nm</td></tr>
            <tr><th scope="row">Spectral resolution (FWHM)</th><td>&lt; 2&nbsp;nm</td><td>&lt; 4&nbsp;nm</td></tr>
            <tr><th scope="row">Spectral channels</th><td>Continuously tunable</td><td>Continuously tunable</td></tr>
            <tr><th scope="row">Spatial resolution</th><td>Sub-micron — limited by the microscope objective NA</td><td>Sub-micron — limited by the microscope objective NA</td></tr>
            <tr><th scope="row">Camera</th><td>CCD, EMCCD, sCMOS</td><td>Photon etc. InGaAs (ZephIR™ 1.7 or Alizé™ 1.7)</td></tr>
            <tr>
              <th scope="row">Excitation wavelengths (up to 3 lasers)</th>
              <td colspan="2">405, 447, 532, 561, 660, 730, 785, 808&nbsp;nm (other wavelengths on request)</td>
            </tr>
            <tr><th scope="row">Microscope</th><td>Upright or inverted, scientific grade</td><td>Upright or inverted, scientific grade</td></tr>
            <tr><th scope="row">White light illumination</th><td>Diascopic, episcopic, Hg, halogen</td><td>Diascopic, episcopic, Hg, halogen</td></tr>
            <tr><th scope="row">Illumination options</th><td>Epifluorescence module; darkfield module (oil or dry)</td><td>Epifluorescence module; darkfield module (oil or dry)</td></tr>
          </tbody>
        </table>
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

  "zephir-2-9": {
    id: "zephir-2.9",
    name: "ZephIR™ 2.9",
    image: ImgZephIR17,
    bannerImg: Banner3,                 // optional (Banner1/Banner2 also fine)
    logo: Photon,                       // your Photon etc. logo import
    altText: "Photon",
    videoId: "",
    meta: {
      title: "ZephIR™ 2.9 eSWIR Camera | Photon etc. | Inkarp India",
      description:
        "Deep-cooled extended SWIR camera (850–2900 nm) with high frame rates via USB 3.0 or CameraLink. Low noise, high QE, and maintenance-free TE cooling.",
      keywords: [
        "ZephIR 2.9",
        "eSWIR camera",
        "extended SWIR",
        "0.85–2.9 µm",
        "HgCdTe camera",
        "Photon etc",
        "Inkarp India"
      ],
      altText: "ZephIR 2.9 eSWIR camera",
      internalLinks: [],
      externalLinks: ["https://www.photonetc.com/"]
    },

    description: `
<div class="ink-wrap" style="--ink-red:#BE0010;--ink-indigo:#240078;--ink-gray:#f8fafc;font-family:Roboto,Arial,Helvetica,sans-serif;color:#333;line-height:1.7;font-size:16px;">
  <style>
    .ink-wrap .ink-section{background:#fff;border-radius:14px;padding:20px 0;margin:12px 0}
    .ink-wrap h2{font-family:MaxOT,Roboto,Arial,Helvetica,sans-serif;font-weight:800;font-size:26px;line-height:1.3;color:#111;margin:0 0 10px}
    .ink-wrap h2 .subHeading{font-size:14px;font-weight:500;color:var(--ink-indigo)}
    .ink-wrap .ink-kicker{font-weight:700;color:var(--ink-red)}
    .ink-wrap .prod-logo{max-width:520px;margin:0 0 10px}
    .ink-wrap .prod-logo img{width:100%;height:auto;border-radius:12px;border:1px solid #e6e8ef;box-shadow:0 2px 10px rgba(0,0,0,.05)}
    .ink-wrap .tab-header{display:flex;align-items:center;gap:8px;margin:20px 0 12px}
    .ink-wrap .tab-header .badge{display:inline-block;border:1px solid var(--ink-indigo);color:var(--ink-indigo);border-radius:999px;font-size:12px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;background:#fff;padding:6px 12px}
    .ink-wrap .tab-header .title{font-weight:800;font-size:20px;color:var(--ink-red)}
    .ink-wrap .ink-table-wrap{overflow-x:auto;padding:8px 0}
    .ink-wrap table.ink-table{width:100%;border-collapse:collapse;min-width:560px}
    .ink-wrap table.ink-table th,
    .ink-wrap table.ink-table td{padding:10px 12px;border-bottom:1px solid #e6e8ef;text-align:left;vertical-align:top}
    .ink-wrap table.ink-table tbody tr:nth-child(even){background:var(--ink-gray)}
    .ink-wrap table.ink-table thead th{background:#fff;color:var(--ink-red);font-weight:800;border-bottom:2px solid #e6e8ef}
    @media (max-width:768px){
      .ink-wrap{font-size:15px}
      .ink-wrap h2{font-size:20px}
      .ink-wrap .prod-logo{max-width:100%}
    }
  </style>

  <div class="ink-section">
    <div class="product-details ml_20" style="margin-left:20px;">
      <div class="text">
        <p class="ink-kicker"><strong>eSWIR Camera</strong></p>
        <p>The ZephIR 2.9 is a deep-cooled, extended SWIR camera sensitive from 850 to 2900&nbsp;nm. Deep cooling maximizes signal while minimizing noise, and the extended range enables broader wavelength coverage for advanced IR detection systems. Thermoelectric cooling (no water or LN₂) also avoids the limited lifetime of Stirling coolers, improving usability and integration flexibility.</p>
        <p>With high frame rates over USB&nbsp;3.0 or CameraLink™, ZephIR 2.9 suits demanding industrial applications and precision scientific experiments. Control with Photon etc.’s PHySpec software or develop via Python/C++ SDK—ideal for detecting black plastics and carbonates in mining and sorting workflows.</p>
      </div>
    </div>

    <div class="product-discription">
      <div class="tab-header">
        <span class="title">Technical Data</span>
      </div>

      <div class="ink-table-wrap" role="region" aria-label="Technical Data table" tabindex="0">
        <table class="ink-table">
          <tbody>
            <tr><th scope="row">Focal plane array (FPA)</th><td>HgCdTe</td></tr>
            <tr><th scope="row">FPA size (px)</th><td>320 × 256</td></tr>
            <tr><th scope="row">Pixel size (µm)</th><td>30</td></tr>
            <tr><th scope="row">Spectral range (QE &gt; 10%)</th><td>0.85–2.9&nbsp;µm</td></tr>
            <tr><th scope="row">FPA operating temperature</th><td>−80&nbsp;°C</td></tr>
            <tr><th scope="row">Dark current (sensor at −80&nbsp;°C)</th><td>Target at 21&nbsp;°C: &lt; 240 (typ. ~160)&nbsp;Mē/px/s</td></tr>
            <tr><th scope="row">Typical gain setting (ē/ADU)</th><td>High: 10.3 | Low: 216</td></tr>
            <tr><th scope="row">Typical readout noise (ē)</th><td>High: 165 | Low: 1050</td></tr>
            <tr><th scope="row">Digitization (bits)</th><td>14</td></tr>
            <tr><th scope="row">Frame rate (CameraLink™)</th><td>Up to 340 full frame; 2200 at 64×64&nbsp;ROI</td></tr>
            <tr><th scope="row">Frame rate (USB 3.0)</th><td>Up to 340 full frame; 2200 at 64×64&nbsp;ROI</td></tr>
            <tr><th scope="row">Quantum efficiency</th><td>Up to 85%</td></tr>
            <tr><th scope="row">Computer interface</th><td>CameraLink™ or USB 3.0</td></tr>
            <tr><th scope="row">Dimensions</th><td>169 × 130 × 97.25&nbsp;mm</td></tr>
            <tr><th scope="row">Weight</th><td>2.9&nbsp;kg</td></tr>
          </tbody>
        </table>
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


}