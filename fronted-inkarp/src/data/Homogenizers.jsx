// Logos
import GEA from "/src/assets/PrincipalLogos/RowFive/GEA.png";
import Proscientific from "/src/assets/PrincipalLogos/RowFive/Proscientific.png";
import Evonik from "/src/assets/PrincipalLogos/RowFive/Evonik.png";
// GEA Homogenizers (public/images/products/Gea)
import ImgAriete3160 from "/images/products/Gea/homogenizer-ariete-3160.jpg";
import ImgAriete5400 from "/images/products/Gea/homogenizer-Ariete-5400.jpg";
import ImgArieteSeries from "/images/products/Gea/homogenizers-ariete-series.jpg";
import ImgOneSeries from "/images/products/Gea/homogenizers-one-series.jpg";
import ImgXstreamLab from "/images/products/Gea/xstream-lab-homogenizer.jpg";
import ImgPilotPlant from "/images/products/Gea/homogenizers-pilot-plant.jpg";
import ImgTableTop from "/images/products/Gea/homogenizers-table-top.jpg";
import ImgPharmaSkid from "/images/products/Gea/homogenizers-plug-play-pharma-skid.jpg";

// ProScientific Homogenizers (public/images/products/Proscientific)
import ImgPRO200 from "/images/products/Proscientific/bio-gen-pro200-homogenizer.jpg";
import ImgPRO250 from "/images/products/Proscientific/pro250-homogenizer.jpg";
import ImgPRO25D from "/images/products/Proscientific/pro25d-digital-homogenizer.jpg";
import ImgPRO400DS from "/images/products/Proscientific/pro400ds-digital-benchtop-homogenizer.jpg";
import ImgPRO400DSEL from "/images/products/Proscientific/pro400dsel-digital-benchtop-homogenizer-extra-length.jpg";
import ImgPRO400PC from "/images/products/Proscientific/pro400pc-programmable-benchtop-homogenizer.jpg";
import ImgPRO400PCEL from "/images/products/Proscientific/pro400pcel-programmable-benchtop-homogenizer-extra-length.jpg";
import ImgMultiPrep from "/images/products/Proscientific/multi-prep-rapid-homogenizer-accessories-probes-racks.jpg";

import ImgLipexExtruders from "/images/products/Evonik/lipex-liposome-extruders.jpg";

export const Homogenizers = {
  // -------------------- GEA (Industrial) --------------------
  "industrial-homogenizers": {
    logo: GEA,
    models: [
      { heading: "Industrial Homogenizers" },
      { name: "Gea Ariete Homogenizer 3160", slug: "gea-ariete-homogenizer-3160", image: ImgAriete3160 },
      { name: "Gea Ariete Homogenizer 5400", slug: "gea-ariete-homogenizer-5400", image: ImgAriete5400 },
      { name: "Homogenizers Ariete Series", slug: "homogenizers-ariete-series", image: ImgArieteSeries },
      { name: "Homogenizers One Series", slug: "homogenizers-one-series", image: ImgOneSeries },
    ],
    meta: {
      title: "Industrial Homogenizers | GEA Ariete & One Series | Inkarp India",
      description:
        "Explore GEA industrial homogenizers including Ariete 3160, Ariete 5400, Ariete Series, and One Series—reliable performance for process-scale applications.",
      keywords: ["GEA homogenizer", "Ariete 3160", "Ariete 5400", "Ariete Series", "One Series", "Industrial Homogenizers", "Inkarp India"],
      altText: "GEA Industrial Homogenizers",
    },
  },

  // -------------------- GEA (Laboratory) --------------------
  "laboratory-homogenizers": {
    logo: GEA,
    models: [
      { heading: "Laboratory Homogenizers" },
      { name: "Gea Xstream Lab Homogenizer", slug: "gea-xstream-lab-homogenizer", image: ImgXstreamLab },
      { name: "Homogenizers Pilot Plant", slug: "homogenizers-pilot-plant", image: ImgPilotPlant },
      { name: "Homogenizers Table-top", slug: "homogenizers-table-top", image: ImgTableTop },
    ],
    meta: {
      title: "Laboratory Homogenizers | GEA Xstream Lab, Pilot Plant, Table-top | Inkarp India",
      description: "GEA lab-scale homogenizers for R&D and pilot runs, including Xstream Lab, Pilot Plant, and Table-top models.",
      keywords: ["GEA lab homogenizer", "Xstream Lab", "Pilot Plant homogenizer", "Table-top homogenizer", "Laboratory Homogenizers", "Inkarp India"],
      altText: "GEA Laboratory Homogenizers",
    },
  },

  // -------------------- GEA (Skid-Mounted) --------------------
  "skid-mounted-homogenizers": {
    logo: GEA,
    models: [
      { heading: "Skid-Mounted Homogenizers" },
      { name: "Homogenizers Plug & Play Pharma Skid", slug: "homogenizers-plug-play-pharma-skid", image: ImgPharmaSkid },
    ],
    meta: {
      title: "Skid-Mounted Homogenizers | Plug & Play Pharma Skid | Inkarp India",
      description: "GEA skid-mounted homogenizers for fast installation and pharma-ready utility integration.",
      keywords: ["GEA skid-mounted homogenizer", "Pharma Skid homogenizer", "Plug & Play homogenizer", "Skid-Mounted Homogenizers", "Inkarp India"],
      altText: "GEA Skid-Mounted Homogenizer",
    },
  },

  // ==================== PROSCIENTIFIC ====================
  // Left tab: Hand Held
  "hand-held-homogenizer": {
    logo: Proscientific,
    models: [
      { heading: "Hand Held Homogenizer" },
      { name: "Bio-Gen PRO200 Homogenizer", slug: "bio-gen-pro200-homogenizer", image: ImgPRO200 },
      { name: "PRO250 Homogenizer", slug: "pro250-homogenizer", image: ImgPRO250 },
    ],
    meta: {
      title: "Hand Held Homogenizers | PRO200, PRO250 | Inkarp India",
      description: "ProScientific handheld homogenizers for routine and advanced sample prep.",
      keywords: ["hand held homogenizer", "PRO200", "PRO250", "ProScientific homogenizer"],
      altText: "ProScientific Hand Held Homogenizers",
    },
  },

  // Digital (standalone)
  "digital-homogenizer": {
    logo: Proscientific,
    models: [
      { heading: "Digital Homogenizer" },
      { name: "PRO25D Digital Homogenizer", slug: "pro25d-digital-homogenizer", image: ImgPRO25D },
    ],
    meta: {
      title: "Digital Homogenizer | PRO25D | Inkarp India",
      description: "ProScientific PRO25D digital homogenizer with precise control for lab workflows.",
      keywords: ["digital homogenizer", "PRO25D", "ProScientific"],
      altText: "PRO25D Digital Homogenizer",
    },
  },

  // Digital Benchtop
  "digital-benchtop-homogenizer": {
    logo: Proscientific,
    models: [
      { heading: "Digital Benchtop Homogenizers" },
      { name: "PRO400DS Digital Benchtop Homogenizer", slug: "pro400ds-digital-benchtop-homogenizer", image: ImgPRO400DS },
      { name: "PRO400DSEL Digital Benchtop Homogenizer (Extra Length)", slug: "pro400dsel-digital-benchtop-homogenizer-extra-length", image: ImgPRO400DSEL },
    ],
    meta: {
      title: "Digital Benchtop Homogenizers | PRO400DS / PRO400DSEL | Inkarp India",
      description: "High-torque benchtop homogenizers for demanding applications.",
      keywords: ["digital benchtop homogenizer", "PRO400DS", "PRO400DSEL", "ProScientific"],
      altText: "ProScientific Digital Benchtop Homogenizers",
    },
  },

  // Programmable Benchtop
  "programmable-benchtop-homogenizers": {
    logo: Proscientific,
    models: [
      { heading: "Programmable Benchtop Homogenizers" },
      { name: "PRO400PC Programmable Benchtop Homogenizer", slug: "pro400pc-programmable-benchtop-homogenizer", image: ImgPRO400PC },
      { name: "PRO400PCEL Programmable Benchtop Homogenizer (Extra Length)", slug: "pro400pcel-programmable-benchtop-homogenizer-extra-length", image: ImgPRO400PCEL },
    ],
    meta: {
      title: "Programmable Benchtop Homogenizers | PRO400PC / PRO400PCEL | Inkarp India",
      description: "Programmable control for repeatable dispersions and emulsions.",
      keywords: ["programmable homogenizer", "PRO400PC", "PRO400PCEL", "ProScientific"],
      altText: "ProScientific Programmable Benchtop Homogenizers",
    },
  },

  // Automated
  "automated-homogenizer": {
    logo: Proscientific,
    models: [
      { heading: "Automated Homogenizer" },
      { name: "Multi-Prep Rapid Homogenizer & Accessories – Probes & Racks", slug: "multi-prep-rapid-homogenizer-accessories-probes-racks", image: ImgMultiPrep },
    ],
    meta: {
      title: "Automated Homogenizer | Multi-Prep Rapid | Inkarp India",
      description: "Hands-free, multi-sample homogenization with dedicated probes and racks.",
      keywords: ["automated homogenizer", "Multi-Prep", "ProScientific"],
      altText: "ProScientific Automated Homogenizer",
    },
  },

  // Drug-delivery (Evonik)
  "drug-delivery-parental-drug-delivery": {
    logo: Evonik,
    models: [
      { heading: "Drug delivery - Parental Drug Delivery" },
      {
        name: "Lipex-liposome Extruders",
        slug: "lipex-liposome-extruders",
        image: ImgLipexExtruders,
      },
    ],
    meta: {
      title: "Drug Delivery (Parenteral) | Evonik Lipex Liposome Extruders | Inkarp India",
      description:
        "Evonik Lipex–liposome extruders for controlled liposome sizing and scalable development of parenteral drug delivery systems. Distributed & serviced by Inkarp India.",
      keywords: [
        "Evonik Lipex",
        "liposome extruders",
        "parenteral drug delivery",
        "liposomal formulations",
        "Inkarp India",
      ],
      altText: "Evonik Lipex-liposome Extruders",
    },
  },

};
