import BrukerLogo from '/src/assets/PrincipalLogos/RowSeven/Bruker.svg';

import AtrLibrary from "/images/products/Bruker/atr-library.jpeg";
import BannerAlpha from "/images/products/Bruker/banner-alpha.png";
import BannerFtNir from "/images/products/Bruker/banner-ft-nir.png";
import BannerFtirFtNir from "/images/products/Bruker/banner-ftir-ft-nir.png";
import BravoHandheld from "/images/products/Bruker/BRAVO-handheld.jpeg";
import DrugPille from "/images/products/Bruker/drug-pille.jpeg";
import HtsXtBanner from "/images/products/Bruker/hts-xt-banner.png";
import HyperionFtirMicroscope from "/images/products/Bruker/hyperion-FTIR-microscope.jpeg";
import InvenioFtirSpectrometer from "/images/products/Bruker/invenio-ft-ir-spectrometer.png";
import LumosMicroscope from "/images/products/Bruker/lumous-microscope.jpeg";
import MatrixFiiBannerBruker from "/images/products/Bruker/matrix-f-ii-banner-bruker.png";
import MobileIriiBannerAward from "/images/products/Bruker/mobile-ir-ii-banner-award.png";
import MpaIiAnalyzer from "/images/products/Bruker/mpa-ii-multi-purpose-analyzer.png";
import MultiRAMFTRamanSpectrometer from "/images/products/Bruker/MultiRAM-FT-Raman-Spectrometer.jpeg";
import SenterraIiRamanMicroscope from "/images/products/Bruker/senterra-ii-raman-microscope.png";
import TangoFtNirSpectrometer from "/images/products/Bruker/tango-ft-nir-spectrometer.png";
import TgFtirThermogravimetricAnalysis from "/images/products/Bruker/tg-ftir-thermogravimetric-analysis.png";
import VertexResearchFtirSpectrometer from "/images/products/Bruker/vertex-research-ft-ir-spectrometer.png";


const Bruker = {
  vertical: "Synthesis and Flow Chemistry",
  principal: "Bruker",
  logo: BrukerLogo,
  products: [
    {
      name: "ft-ir-spectrometer",
      slug: "ft-ir-spectrometer",
      models: [
        {
          name: "ALPHA II Compact FT-IR Spectrometer",
          slug: "alpha-II-compact-FT-IR-Spectrometer",
          image: BannerAlpha,
          keywords: [" FTIR spectrometer", "compact FTIR", "routine FTIR analysis", "QC FTIR", "raw material identification FTIR", "solid liquid gas FTIR", "pharmaceutical FTIR", "chemical FTIR spectroscopy", "benchtop FTIR", "ATR FTIR spectrometer"],
        },
        {
          name: "MOBILE-IR II FT-IR Spectrometer",
          slug: "mobile-ir-ii-ft-ir-spectrometer",
          image: MobileIriiBannerAward,
        },
      ],
    },
    {
      name: "ft-ir-research-spectrometer",
      slug: "ft-ir-research-spectrometer",
      models: [
        {
          name: "INVENIO® FT-IR Spectrometers",
          slug: "invenio-ft-ir-spectrometer",
          image: InvenioFtirSpectrometer,
          keywords: ["research FTIR", "advanced FTIR spectroscopy", "TG FTIR coupling", "FTIR for R&D", "regulated FTIR system", "pharmaceutical FTIR compliance", "microplate FTIR reader", "high sensitivity FTIR"],
        },
        {
          name: "VERTEX 80/80v FT-IR Spectrometers",
          slug: "vertex-80-80v-ft-ir-spectrometer",
          image: VertexResearchFtirSpectrometer,
          keywords: ["vacuum FTIR spectrometer", "high resolution FTIR", "research grade FTIR", "polymer FTIR analysis", "material science FTIR", "ultra sensitive FTIR"],
        },
        {
          name: "TG-FTIR Thermogravimetric Analysis",
          slug: "tg-ftir-thermogravimetric-analysis",
          image: TgFtirThermogravimetricAnalysis,
        },
      ],
    },
    {
      name: "ft-nir-spectrometer",
      slug: "ft-nir-spectrometer",
      models: [
        {
          name: "TANGO FT-NIR Spectrometer",
          slug: "tango-ft-nir-spectrometer",
          image: TangoFtNirSpectrometer,
          keywords: ["NIR QA QC instrument", "routine NIR analysis", "industrial NIR spectroscopy", "fast material verification", "production floor NIR"]
        },
        {
          name: "MPA III FT-NIR Spectrometer",
          slug: "mpa-iii-ft-nir-spectrometer",
          image: MpaIiAnalyzer,
          keywords:["FT NIR spectrometer", "NIR calibration development", "quantitative NIR analysis", "process NIR", "pharmaceutical NIR", "raw material NIR testing", "PAT NIR spectroscopy"]
        },
      ],
    },
    {
      name: "raman-spectrometer",
      slug: "raman-spectrometer",
      models: [
        {
          name: "BRAVO Handheld Raman Spectrometer",
          slug: "bravo-handheld-raman-spectrometer",
          image: BravoHandheld,
          keywords: ["handheld Raman spectrometer", "raw material identification Raman", "RMID Raman", "pharmaceutical Raman verification", "portable Raman analyzer", "warehouse material identification"]
        },

      
      ],
    },
    {
      name: "ftir-microscopes",
      slug: "ftir-microscopes",
      models: [
        {
          name: "Hyperion FT-IR Microscope",
          slug: "hyperion-ft-ir-microscope",
          image: HyperionFtirMicroscope,
          keywords:["research FTIR microscope", "advanced IR microscopy", "high resolution FTIR imaging", "material analysis FTIR microscope"]
        },
        {
          name: "LUMOS II - FT-IR Microscope",
          slug: "lumos-ii-ft-ir-microscope",
          image: LumosMicroscope,
          keywords:["FTIR microscope", "IR imaging microscope", "chemical imaging FTIR", "failure analysis FTIR", "micro FTIR analysis", "life science FTIR imaging"]
        },
      ],
    },
    {
      name: "process-monitoring",
      slug: "process-monitoring",
      models: [
        {
          name: "MATRIX-F II FT-NIR Process Spectrometer",
          slug: "matrix-f-ii-ft-nir-process-spectrometer",
          image: MatrixFiiBannerBruker,
          keywords:["process NIR analyzer", "PAT NIR spectrometer", "inline NIR monitoring", "reactor NIR analysis", "pharmaceutical process monitoring"]
        },
        {
          name: "MATRIX-MF FT-IR Process Reaction Monitoring",
          slug: "matrix-mf-ft-ir-process-reaction-monitoring",
          image: BannerFtirFtNir,
          keywords:["process FTIR", "inline FTIR spectroscopy", "real time reaction monitoring", "pilot plant FTIR", "chemical process FTIR"]
        },
        {
          name: "BEAM - Process FT-NIR Spectrometer",
          slug: "beam-process-ft-nir-spectrometer",
          image: BannerFtNir,
          keywords:["inline analyzer", "conveyor belt NIR", "bulk material analysis", "single point analyzer", "industrial process monitoring"]
        },
      ],
    },
    {
      name: "raman-microscopes",
      slug: "raman-microscopes",
      models: [
        {
          name: "SENTERRA II Raman Microscope",
          slug: "senterra-ii-raman-microscope",
          image: SenterraIiRamanMicroscope,
        },
      ],
    },
  ],
};

export { Bruker };
