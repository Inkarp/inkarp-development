// Logos
import GEA from "/src/assets/PrincipalLogos/RowFive/GEA.png";
import Proscientific from "/src/assets/PrincipalLogos/RowFive/Proscientific.png";
import Evonik from "/src/assets/PrincipalLogos/RowFive/Evonik.png";

// -------------------- GEA Homogenizers --------------------
import ImgAriete3160 from "/images/products/Gea/homogenizer-ariete-3160.jpg";
import ImgAriete5400 from "/images/products/Gea/homogenizer-Ariete-5400.jpg";
import ImgArieteSeries from "/images/products/Gea/homogenizers-ariete-series.jpg";
import ImgOneSeries from "/images/products/Gea/homogenizers-one-series.jpg";
import ImgXstreamLab from "/images/products/Gea/xstream-lab-homogenizer.jpg";
import ImgPilotPlant from "/images/products/Gea/homogenizers-pilot-plant.jpg";
import ImgTableTop from "/images/products/Gea/homogenizers-table-top.jpg";
import ImgPharmaSkid from "/images/products/Gea/homogenizers-plug-play-pharma-skid.jpg";

// -------------------- ProScientific Homogenizers --------------------
import ImgPRO200 from "/images/products/Proscientific/bio-gen-pro200-homogenizer.jpg";
import ImgPRO250 from "/images/products/Proscientific/pro250-homogenizer.jpg";
import ImgPRO25D from "/images/products/Proscientific/pro25d-digital-homogenizer.jpg";
import ImgPRO400DS from "/images/products/Proscientific/pro400ds-digital-benchtop-homogenizer.jpg";
import ImgPRO400DSEL from "/images/products/Proscientific/pro400dsel-digital-benchtop-homogenizer-extra-length.jpg";
import ImgPRO400PC from "/images/products/Proscientific/pro400pc-programmable-benchtop-homogenizer.jpg";
import ImgPRO400PCEL from "/images/products/Proscientific/pro400pcel-programmable-benchtop-homogenizer-extra-length.jpg";
import ImgMultiPrep from "/images/products/Proscientific/multi-prep-rapid-homogenizer-accessories-probes-racks.jpg";

// -------------------- Evonik (Drug Delivery) --------------------
import ImgLipexExtruders from "/images/products/Evonik/lipex-liposome-extruders.jpg";


// ======================================================================
//                ⭐ FINAL HOMOGENIZER COMPONENT (BRUKER FORMAT)
// ======================================================================

export const Homo = {
  vertical: "Extrusion and homogenization",
  principal: "GEA / ProScientific / Evonik",

  products: [
    // ---------------------------------------------------------
    //                  GEA — Industrial
    // ---------------------------------------------------------
    {
      name: "industrial-homogenizers",
      slug: "industrial-homogenizers",
      logo: GEA,
      models: [
        { name: "Gea Ariete Homogenizer 3160", slug: "gea-ariete-homogenizer-3160", image: ImgAriete3160 },
        { name: "Gea Ariete Homogenizer 5400", slug: "gea-ariete-homogenizer-5400", image: ImgAriete5400 },
        { name: "Homogenizers Ariete Series", slug: "homogenizers-ariete-series", image: ImgArieteSeries },
        { name: "Homogenizers One Series", slug: "homogenizers-one-series", image: ImgOneSeries },
      ],
    },

    // ---------------------------------------------------------
    //                  GEA — Laboratory
    // ---------------------------------------------------------
    {
      name: "laboratory-homogenizers",
      slug: "laboratory-homogenizers",
      logo: GEA,
      models: [
        { name: "Gea Xstream Lab Homogenizer", slug: "gea-xstream-lab-homogenizer", image: ImgXstreamLab },
        { name: "Homogenizers Pilot Plant", slug: "homogenizers-pilot-plant", image: ImgPilotPlant },
        { name: "Homogenizers Table-top", slug: "homogenizers-table-top", image: ImgTableTop },
      ],
    },

    // ---------------------------------------------------------
    //                  GEA — Skid Mounted
    // ---------------------------------------------------------
    {
      name: "skid-mounted-homogenizers",
      slug: "skid-mounted-homogenizers",
      logo: GEA,
      models: [
        { name: "Homogenizers Plug & Play Pharma Skid", slug: "homogenizers-plug-play-pharma-skid", image: ImgPharmaSkid },
      ],
    },

    // ---------------------------------------------------------
    //                  ProScientific — Hand Held
    // ---------------------------------------------------------
    {
      name: "hand-held-homogenizer",
      slug: "hand-held-homogenizer",
      logo: Proscientific,
      models: [
        { name: "Bio-Gen PRO200 Homogenizer", slug: "bio-gen-pro200-homogenizer", image: ImgPRO200 },
        { name: "PRO250 Homogenizer", slug: "pro250-homogenizer", image: ImgPRO250 },
      ],
    },

    // ---------------------------------------------------------
    //                  ProScientific — Digital
    // ---------------------------------------------------------
    {
      name: "digital-homogenizer",
      slug: "digital-homogenizer",
      logo: Proscientific,
      models: [
        { name: "PRO25D Digital Homogenizer", slug: "pro25d-digital-homogenizer", image: ImgPRO25D },
      ],
    },

    // ---------------------------------------------------------
    //           ProScientific — Digital Benchtop
    // ---------------------------------------------------------
    {
      name: "digital-benchtop-homogenizer",
      slug: "digital-benchtop-homogenizer",
      logo: Proscientific,
      models: [
        { name: "PRO400DS Digital Benchtop Homogenizer", slug: "pro400ds-digital-benchtop-homogenizer", image: ImgPRO400DS },
        { name: "PRO400DSEL Digital Benchtop Homogenizer (Extra Length)", slug: "pro400dsel-digital-benchtop-homogenizer-extra-length", image: ImgPRO400DSEL },
      ],
    },

    // ---------------------------------------------------------
    //        ProScientific — Programmable Benchtop
    // ---------------------------------------------------------
    {
      name: "programmable-benchtop-homogenizers",
      slug: "programmable-benchtop-homogenizers",
      logo: Proscientific,
      models: [
        { name: "PRO400PC Programmable Benchtop Homogenizer", slug: "pro400pc-programmable-benchtop-homogenizer", image: ImgPRO400PC },
        { name: "PRO400PCEL Programmable Benchtop Homogenizer (Extra Length)", slug: "pro400pcel-programmable-benchtop-homogenizer-extra-length", image: ImgPRO400PCEL },
      ],
    },

    // ---------------------------------------------------------
    //             ProScientific — Automated System
    // ---------------------------------------------------------
    {
      name: "automated-homogenizer",
      slug: "automated-homogenizer",
      logo: Proscientific,
      models: [
        {
          name: "Multi-Prep Rapid Homogenizer & Accessories – Probes & Racks",
          slug: "multi-prep-rapid-homogenizer-accessories-probes-racks",
          image: ImgMultiPrep,
        },
      ],
    },

    // ---------------------------------------------------------
    //                  Evonik — Drug Delivery
    // ---------------------------------------------------------
    {
      name: "drug-delivery-parental-drug-delivery",
      slug: "drug-delivery-parental-drug-delivery",
      logo: Evonik,
      models: [
        {
          name: "Lipex-Liposome Extruders",
          slug: "lipex-liposome-extruders",
          image: ImgLipexExtruders,
        },
      ],
    },
  ],
};
