// ---------- Implen ----------
import ImgN120 from "/images/products/Implen/nanophotometer-n120.jpg";
import ImgNP80 from "/images/products/Implen/nanophotometer-np80.jpg";
import ImgN60N50 from "/images/products/Implen/nanophotometer-n60-n50.jpg";
import ImgC40 from "/images/products/Implen/nanophotometer-c40.jpg";
import ImgC30 from "/images/products/Implen/nanophotometer-c30.jpg";
import ImgOD600 from "/images/products/Implen/diluphotometer-od600-new.jpg";

// ---------- Anvajo ----------
import ImgFluidlabR300 from "/images/products/Avanjo/R-300_PDP_center.png";

// ---------- Nanovision ----------
import ImgLitescope1 from "/images/products/Nanovision/litescope.png";

// ---------- Reichert ----------
import ImgReichert4SPR from "/images/products/Reichert/reichert-4spr.jpg";
import ImgReichert2SPR from "/images/products/Reichert/reichert-2spr.jpg";

// ---------- Nanosurf ----------
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

// ---------- BWB ----------
import ImgBWBXP from "/images/products/BWB/bwb-xp-flame-photometer.webp";
import ImgBWBXPPlus from "/images/products/BWB/bwb-xp-flame-photometer.webp";
import ImgBWBFlash from "/images/products/BWB/bwb-flash-flame-photometer.webp";
import ImgBWBBio from "/images/products/BWB/bio-cut0out0rgb.png";
import ImgBWBBioAV from "/images/products/BWB/BWB-BIO-AV-Flame-Photometer.png";
import ImgBWBLI from "/images/products/BWB/bwb-li-flame-photometer.png";
import ImgBWBSoil from "/images/products/BWB/soil-flame-photometer.png";
import ImgBWBSugar from "/images/products/BWB/sugar-flame-photometer.png";

// ---------- Photon Etc ----------
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

// ---------- Affinité Instruments ----------
import ImgP4pro from "/images/products/Affinite/P4pro.avif";
import ImgP4spr from "/images/products/Affinite/P4SPR.avif";
import ImgP4proplus from "/images/products/Affinite/p4proplus.avif";
import ImgEzControl from "/images/products/Affinite/ezControlSoftware.avif";


// ======================================================================
//                ⭐ UNIFIED LIFE SCIENCE DATA COMPONENT
// ======================================================================

export const Life = {
  vertical: "Lifesciences",
  principal: "Multiple",
  logo: null, // optional

  products: [
    // ---------------------------------------------------------
    //                   IMPLEN
    // ---------------------------------------------------------
    {
      name: "nanophotometer-series",
      slug: "nanophotometer-series",
      models: [
        { name: "NanoPhotometer® N120", slug: "nanophotometer-n120", image: ImgN120 },
        { name: "NanoPhotometer® NP80", slug: "nanophotometer-np80", image: ImgNP80 },
        { name: "NanoPhotometer® N60/N50", slug: "nanophotometer-n60-n50", image: ImgN60N50 },
        { name: "NanoPhotometer® C40", slug: "nanophotometer-c40", image: ImgC40 },
        { name: "NanoPhotometer® N30", slug: "nanophotometer-n30", image: ImgC30 }
      ]
    },
    {
      name: "implen-od600",
      slug: "implen-od600",
      models: [
        { name: "New Implen OD600®", slug: "od600", image: ImgOD600 }
      ]
    },

    // ---------------------------------------------------------
    //                   ANVAJO
    // ---------------------------------------------------------
    {
      name: "fluidlab-r300",
      slug: "fluidlab-r300",
      models: [
        { name: "Fluidlab R-300", slug: "fluidlab-r300", image: ImgFluidlabR300 }
      ]
    },

    // ---------------------------------------------------------
    //                   NANOVISION
    // ---------------------------------------------------------
    {
      name: "litescope",
      slug: "litescope",
      models: [
        { name: "Litescope", slug: "litescope", image: ImgLitescope1 }
      ]
    },

    // ---------------------------------------------------------
    //                   REICHERT SPR
    // ---------------------------------------------------------
    {
      name: "reichert-spr-systems",
      slug: "reichert-spr-systems",
      models: [
        { name: "Reichert® 4SPR", slug: "reichert-4spr", image: ImgReichert4SPR },
        { name: "Reichert® 2SPR", slug: "reichert-2spr", image: ImgReichert2SPR }
      ]
    },

    // ---------------------------------------------------------
    //                   NANOSURF AFM
    // ---------------------------------------------------------
    {
      name: "research-afm",
      slug: "research-afm",
      models: [
        { name: "DriveAFM", slug: "driveafm", image: ImgDriveAFM },
        { name: "FlexAFM", slug: "flexafm", image: ImgFlexAFM },
        { name: "CoreAFM", slug: "coreafm", image: ImgCoreAFM }
      ]
    },
    {
      name: "industrial-afm",
      slug: "industrial-afm",
      models: [
        { name: "Industrial Solutions", slug: "industrial-solutions", image: ImgIndustrialSolutions },
        { name: "Alphacen 300", slug: "alphacen-300", image: ImgAlphacen300 }
      ]
    },
    {
      name: "integration-afm",
      slug: "integration-afm",
      models: [
        { name: "LensAFM", slug: "lensafm", image: ImgLensAFM },
        { name: "NaniteAFM", slug: "naniteafm", image: ImgNaniteAFM },
        { name: "Flex-Mount", slug: "flex-mount", image: ImgFlexMount }
      ]
    },
    {
      name: "compact-afm",
      slug: "compact-afm",
      models: [
        { name: "NaioAFM", slug: "naioafm", image: ImgNaioAFM },
        { name: "NaioSTM", slug: "naiostm", image: ImgNaioSTM }
      ]
    },

    // ---------------------------------------------------------
    //                   BWB FLAME PHOTOMETERS
    // ---------------------------------------------------------
    {
      name: "bwb-flame-photometers",
      slug: "bwb-flame-photometers",
      models: [
        { name: "BWB XP Flame Photometer", slug: "bwb-xp", image: ImgBWBXP },
        { name: "BWB XP Plus Flame Photometer", slug: "bwb-xp-plus", image: ImgBWBXPPlus },
        { name: "BWB Flash Flame Photometer", slug: "bwb-flash", image: ImgBWBFlash },
        { name: "BWB BIO Flame Photometer", slug: "bwb-bio", image: ImgBWBBio },
        { name: "BWB BIO AV Flame Photometer", slug: "bwb-bio-av", image: ImgBWBBioAV },
        { name: "BWB LI Flame Photometer", slug: "bwb-li", image: ImgBWBLI },
        { name: "BWB SOIL Flame Photometer", slug: "bwb-soil", image: ImgBWBSoil },
        { name: "BWB SUGAR Flame Photometer", slug: "bwb-sugar", image: ImgBWBSugar }
      ]
    },

    // ---------------------------------------------------------
    //                   PHOTON ETC.
    // ---------------------------------------------------------
    {
      name: "photon-products",
      slug: "photon-products",
      models: [
        { name: "IR VIVO™", slug: "ir-vivo", image: ImgIRVIVO },
        { name: "ClaIR™", slug: "clair", image: ImgCLAIR },
        { name: "L-EOS™", slug: "l-eos", image: ImgLEOS },
        { name: "IMA™", slug: "ima", image: ImgIMA },
        { name: "GRAND-EOS™", slug: "grand-eos", image: ImgGrandEOS },
        { name: "ZephIR™ 2.5", slug: "zephir-2-5", image: ImgZephIR25 },
        { name: "ZephIR™ 1.7", slug: "zephir-1-7", image: ImgZephIR17 },
        { name: "ZephIR™ 2.9", slug: "zephir-2-9", image: ImgZephIR29 },
        { name: "RIMA™", slug: "rima", image: ImgRIMA },
        { name: "LIMA™", slug: "lima", image: ImgLIMA }
      ]
    },

    // ---------------------------------------------------------
    //                   AFFINITÉ SPR
    // ---------------------------------------------------------
    {
      name: "surface-plasmon-resonance",
      slug: "surface-plasmon-resonance",
      models: [
        { name: "P4PRO & Affipump", slug: "p4pro-and-affipump", image: ImgP4pro },
        { name: "P4SPR", slug: "p4spr", image: ImgP4spr },
        { name: "P4PRO+", slug: "p4proplus", image: ImgP4proplus },
        { name: "ezControl Software", slug: "ez-control-software", image: ImgEzControl }
      ]
    }
  ]
};
