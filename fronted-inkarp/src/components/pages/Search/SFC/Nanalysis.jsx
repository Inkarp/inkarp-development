import Img100Pro from "/images/products/Nanalysis/100mhz-powerful-benchtop-nmr.png";
import Img100e from "/images/products/Nanalysis/100MHz-proton-benchtop-nmr.png";

// --- 60 MHz Benchtop NMR ---
import Img60Pro from "/images/products/Nanalysis/60mhz-powerful-benchtop-nmr.jpeg";
import Img60e from "/images/products/Nanalysis/60MHz-proton-benchtop-nmr.jpeg";

// --- Accessories ---
import ImgAutoSample from "/images/products/Nanalysis/auto-sample-60.jpg";
import ImgNMReadyFlow from "/images/products/Nanalysis/nmready-flow.jpeg";

// --- Software Packages ---
import ImgConnect from "/images/products/Nanalysis/connect-diagram.png";
import ImgExperimentDesigner from "/images/products/Nanalysis/ED-software-img1.jpg";
import ImgRemoteAccess from "/images/products/Nanalysis/Remote-access-benchtopNMR-SC1.jpg";

import ImgBreezeQS from "/images/products/Waters/Breeze-QS-HPLC-System.jpg";
import ImgAllianceHPLC from "/images/products/Waters/alliance-hplc-system-2695-2489-angle.jpg";
import ImgAllianceIS from "/images/products/Waters/alliance-is-system-with-bottles-angled.jpg";
import ImgArcHPLC from "/images/products/Waters/arc-hplc-QSm-pda-ftnr.jpg";

import Indutrial from "/images/products/Labomatic/Image1.jpg";
import Liquid1 from "/images/products/Labomatic/LiquidImage1.jpg";

import ImgSeparchromPC01 from "/images/products/Ecom/separchrom-pc01.png";
import ImgSeparchromPC02 from "/images/products/Ecom/separchrom-pc02.png";
import ImgSeparchromPC04 from "/images/products/Ecom/separchrom-pc04.png";
import ImgSeparchromPC06 from "/images/products/Ecom/separchrom-pc06.png";
import ImgSeparchromPC08 from "/images/products/Ecom/separchrom-pc08.png";
import ImgSeparpress from "/images/products/Ecom/separpress.png";
import ImgSeparsys400 from "/images/products/Ecom/Separsys-400.png";

import IMG535XL from "/images/products/Advion/535-XL-scaled.jpg";
import IMG5020Pres from "/images/products/Advion/5020-pres-img.jpg";
import IMG5050Pres from "/images/products/Advion/5050-pres-img.jpg";
import IMG5250Pres from "/images/products/Advion/5250-img-presentation.jpg";
import IMG5400Pres from "/images/products/Advion/5400-img-pres-2.jpg";
import AdvionPuriFlash5015XL from "/images/products/Advion/Advion-Interchim-puriFlash-5015-XL.jpg";
import AISMassSpecPlateExpress from "/images/products/Advion/AIS-MassSpec-PlateExpress.png";
import AVANT2019FINAL from "/images/products/Advion/AVANT2019FINAL.png";
import ExpressionCMS from "/images/products/Advion/expression-cms.png";
import ICPMSSolation from "/images/products/Advion/ICPMS-Solation.png";
import PhotoProductsTriversaNanomate from "/images/products/Advion/photo_products_triversa-nanomate.png";
import PuriFlashXS520SuiteShuttle from "/images/products/Advion/PuriFlash_XS520_suite_Shuttle_AdvionInterchim-2.jpg";
import PuriFlashAS1Interchim from "/images/products/Advion/puriflash-as1-interchim.jpg";
import PuriFlashMS2 from "/images/products/Advion/puriflash-ms-2.png";
import Purivap6Goutte from "/images/products/Advion/purivap-6-goutte.jpg";
import SystemeBainEauPuriFlashXSVap from "/images/products/Advion/systeme-bain-eau-translucide-puriflash-xs-vap.jpg";

const Nanalysis = {
  vertical: "Analytical and Chromatography Solutions",
  principal: "Nanalysis",
  // logo: ChromatographyLogo,
  products: [
    {
      name: "100 MHz Benchtop NMR",
      slug: "100-mhz-benchtop-nmr",
      models: [
        { name: "100Pro – Multinuclear", slug: "100pro-multinuclear", image: Img100Pro },
        { name: "100e – Single Nuclei", slug: "100e-single-nuclei", image: Img100e },
      ],
    },
    {
      name: "60 MHz Benchtop NMR",
      slug: "60-mhz-benchtop-nmr",
      models: [
        { name: "60Pro – Multinuclear", slug: "60pro-multinuclear", image: Img60Pro },
        { name: "60e – Single Nuclei", slug: "60e-single-nuclei", image: Img60e },
      ],
    },
    {
      name: "NMR Accessories",
      slug: "accessories",
      models: [
        { name: "AUTOsample-60", slug: "autosample-60", image: ImgAutoSample },
        { name: "NMReady-Flow", slug: "nmready-flow", image: ImgNMReadyFlow },
      ],
    },
    {
      name: "NMR Software Packages",
      slug: "software-packages",
      models: [
        { name: "NMReady-CONNECT", slug: "nmready-connect", image: ImgConnect },
        { name: "Experiment Designer", slug: "experiment-designer", image: ImgExperimentDesigner },
        { name: "Remote Access", slug: "remote-access", image: ImgRemoteAccess },
      ],
    },
    {
      name: "Chromatography and LC-MS Systems",
      slug: "chromatography-and-lc-ms-systems",
      models: [
        // { name: "Breeze QS HPLC", slug: "breeze-qs-hplc", image: ImgBreezeQS },
        { name: "Alliance HPLC System", slug: "alliance-hplc-system", image: ImgAllianceHPLC },
        { name: "Alliance iS HPLC System", slug: "alliance-is-hplc-system", image: ImgAllianceIS },
        { name: "Arc HPLC System", slug: "arc-hplc-system", image: ImgArcHPLC },
      ],
    },
    {
      name: "Industrial Liquid Chromatography",
      slug: "industrial-liquid-chromatography",
      models: [
        { name: "Industrial liquid Chromatography", slug: "industrial-liquid-chromatography", image: Indutrial },
      ],
    },
    {
      name: "Liquid Handling",
      slug: "liquid-handling",
      models: [
        { name: "Liquid Handling Solutions", slug: "liquid-handling", image: Liquid1 },
      ],
    },
    {
      name: "Columns For Preparative Chromatography",
      slug: "columns-for-preparative-chromatography-dac-columns-50mm-100mm-id-columns",
      models: [
        { name: "Separchrom PC01", slug: "separchrom-pc01", image: ImgSeparchromPC01 },
        { name: "Separchrom PC02", slug: "separchrom-pc02", image: ImgSeparchromPC02 },
        { name: "Separchrom PC04", slug: "separchrom-pc04", image: ImgSeparchromPC04 },
        { name: "Separchrom PC06", slug: "separchrom-pc06", image: ImgSeparchromPC06 },
        { name: "Separchrom PC08", slug: "separchrom-pc08", image: ImgSeparchromPC08 },
        { name: "Separpress", slug: "separpress", image: ImgSeparpress },
      ],
    },
    {
      name: "PLC Industrial Systems",
      slug: "plc-industrial-systems",
      models: [
        { name: "Separsys HP 400, 800 FP, 300 DS", slug: "separsys-hp-400-800-fp-300-ds", image: ImgSeparsys400 },
      ],
    },
    {
      name: "Express CMS",
      slug: "express-cms",
      models: [
        { name: "Express CMS", slug: "express-cms", image: ExpressionCMS },
      ],
    },
    {
      name: "Plate Express™",
      slug: "plate-express",
      models: [
        { name: "Plate Express™ TLC Plate Reader", slug: "plate-express", image: AISMassSpecPlateExpress },
      ],
    },
    {
      name: "AVANT™ (U)HPLC System",
      slug: "avant-u-hpcl",
      models: [
        { name: "AVANT™ (U)HPLC System", slug: "avant-u-hpcl", image: AVANT2019FINAL },
      ],
    },
    {
      name: "SOLATION® ICP-MS",
      slug: "solation-icp-ms",
      models: [
        { name: "SOLATION® ICP-MS", slug: "solation-icp-ms", image: ICPMSSolation },
      ],
    },
    {
      name: "TriVersa NanoMate®",
      slug: "triversa-nanomate",
      models: [
        { name: "TriVersa NanoMate®", slug: "triversa-nanomate", image: PhotoProductsTriversaNanomate },
      ],
    },
    {
      name: "Flash Purification Systems",
      slug: "flash-purification-systems",
      models: [
        { name: "Puriflash® Xs 520 Plus", slug: "puriflash-xs-520-plus", image: PuriFlashXS520SuiteShuttle },
        { name: "Puriflash® 5.020", slug: "puriflash-5020", image: IMG5020Pres },
        { name: "Puriflash® 5.050", slug: "puriflash-5050", image: IMG5050Pres },
        { name: "Puriflash® 535-xl", slug: "puriflash-535-xl", image: IMG535XL },
        { name: "Puriflash® 5.015-xl", slug: "puriflash-5015-xl", image: AdvionPuriFlash5015XL },
      ],
    },
    {
      name: "Preparative Purification Systems",
      slug: "preperative-purification-systems",
      models: [
        { name: "Puriflash® 5.250", slug: "puriflash-5250", image: IMG5250Pres },
        { name: "Puriflash® 5.400uv", slug: "puriflash-5400uv", image: IMG5400Pres },
      ],
    },
    {
      name: "Peripheral Detection Devices",
      slug: "peripheral-detection-devices",
      models: [
        { name: "Mass spectrometer: puriFlash® MS", slug: "puriflash-ms", image: PuriFlashMS2 },
      ],
    },
    {
      name: "Peripheral Production Devices",
      slug: "peripheral-production-devices",
      models: [
        { name: "Mass spectrometer: puriFlash® MS", slug: "puriflash-ms", image: PuriFlashMS2 },
      ],
    },
  ],
};

export { Nanalysis };
