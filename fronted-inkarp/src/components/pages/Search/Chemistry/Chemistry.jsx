// ======================================================================
//                       ⭐  METTLER TOLEDO IMPORTS
// ======================================================================

// ---------- Principal Logo ----------
import Mettler from "/src/assets/PrincipalLogos/RowTwo/Metller.png";

// ---------- Weighing Balances ----------
import Me204 from "/images/products/Mettler/ME204.jpg";
import Me204t from "/images/products/Mettler/ME204t.jpg";
import Me1002 from "/images/products/Mettler/ME1002.jpg";
import Me2002 from "/images/products/Mettler/me2002.jpg";
import Me3022 from "/images/products/Mettler/me3022.jpg";
import Me4002 from "/images/products/Mettler/me4002.jpg";
import Ml204t from "/images/products/Mettler/ml204t.jpg";

import Ms205du from "/images/products/Mettler/ms205du.jpg";
import Xpr205du from "/images/products/Mettler/xpr205du.jpg";
import Xpr226dr from "/images/products/Mettler/xpr226dr.jpg";
import Xsr205du from "/images/products/Mettler/xsr205du.jpg";

import Xpr2 from "/images/products/Mettler/xpr2.jpg";
import Xpr2u from "/images/products/Mettler/xpr2u.jpg";

// ---------- Moisture Analyzers ----------
import He53 from "/images/products/Mettler/he53.jpg";
import He73 from "/images/products/Mettler/he73.jpg";
import Hc103 from "/images/products/Mettler/hc103.jpg";
import Hx204 from "/images/products/Mettler/hx204.jpg";

// ---------- Analytical Instruments ----------
import Sd20Kit from "/images/products/Mettler/sd20-kit.jpg";
import Sd30Kit from "/images/products/Mettler/sd30-kit.jpg";
import Sd23 from "/images/products/Mettler/sd23.jpg";
import Sd50Kit from "/images/products/Mettler/sd50-kit.jpg";

import S400bio from "/images/products/Mettler/s400bio.jpg";
import S700StdKit from "/images/products/Mettler/s700-std-kit.jpg";
import S470StdKit from "/images/products/Mettler/s470-std-kit.jpg";

import EasyPh from "/images/products/Mettler/easy-ph.jpg";
import EasyPro from "/images/products/Mettler/easy-pro.jpg";
import EasyKfv from "/images/products/Mettler/easy-kfv.jpg";
import V20s from "/images/products/Mettler/v20s.jpg";
import C10sx from "/images/products/Mettler/c10sx.jpg";
import TitratorExcellenceT5 from "/images/products/Mettler/titrator-excellence-t5.jpg";

import Densito from "/images/products/Mettler/densito.jpg";
import DensityMeterExcellenceD4 from "/images/products/Mettler/density-meter-excellence-d4.jpg";

import ExcellenceR4 from "/images/products/Mettler/Rrefractometer-excellence-r4.jpg";
import HandheldRefractometerMybrix from "/images/products/Mettler/handheld-refractometer-mybrix.jpg";

import MeltingPointSystemMp30 from "/images/products/Mettler/melting-point-System-mp30.jpg";
import MeltingPointSystemMp80 from "/images/products/Mettler/melting-point-System-mp80.jpg";


// ======================================================================
//                       ⭐  METTLER TOLEDO DATA
// ======================================================================

export const Chemistry = {
  vertical: "analytical chemistry and weighing",
  principal: "Mettler Toledo",
  logo: Mettler,

  products: [
    {
      name: "weighing-balance",
      slug: "weighing-balance",
      models: [
        { name: "Analytical Balance MS205DU", slug: "analytical-balance-ms205du", image: Ms205du },
        { name: "Balance XPR2U", slug: "balance-xpr2u", image: Xpr2u }
      ]
    },


    {
      name: "moisture-analyzer",
      slug: "moisture-analyzer",
      models: [
        { heading: "Halogen Moisture Analyzers" },

        { name: "Halogen Moisture Analyzer HE53 (230V)", slug: "halogen-moisture-analyzer-he53-230v", image: He53 },
        { name: "Halogen Moisture Analyzer HC103 (230V)", slug: "halogen-moisture-analyzer-hc103-230v", image: Hc103 },
        { name: "Halogen Moisture Analyzer HX204", slug: "halogen-moisture-analyzer-hx204", image: Hx204 }
      ]
    },

    // ---------------------------------------------------------
    //                ANALYTICAL INSTRUMENTS
    // ---------------------------------------------------------
    {
      name: "analytical-instruments",
      slug: "analytical-instruments",
      models: [
        { heading: "SevenDirect pH/Ion/Conductivity" },

        { name: "pH meter SevenDirect SD20 Kit", slug: "ph-meter-sevendirect-sd20-kit", image: Sd20Kit },
        { name: "Cond meter SevenDirect SD30 Kit", slug: "cond-meter-sevendirect-sd30-kit", image: Sd30Kit },
        { name: "pH/Cond meter SevenDirect SD23 Kit", slug: "ph-cond-meter-sevendirect-sd23-kit", image: Sd23 },
        { name: "pH/Ion meter SevenDirect SD50 Kit", slug: "ph-ion-meter-sevendirect-sd50-kit", image: Sd50Kit },

        { heading: "SevenExcellence pH/Conductivity/Ion" },

        { name: "SevenExcellence pH meter S400-Bio-Kit", slug: "seven-excellence-ph-meter-s400-bio-kit", image: S400bio },
        { name: "SevenExcellence Cond meter S700-Std-Kit", slug: "seven-excellence-ph-cond-meter-s700-std-kit", image: S700StdKit },
        { name: "SevenExcellence pH/Cond meter S470-Std-K", slug: "seven-excellence-ph-cond-meter-s470-std-k", image: S470StdKit },

        { heading: "Titrators" },

        { name: "Titrator EasyPlus Easy pH", slug: "titrator-easyplus-easy-ph", image: EasyPh },
        { name: "Titrator EasyPlus Easy Pro", slug: "titrator-easyplus-easy-pro", image: EasyPro },
        { name: "Titrator EasyPlus Easy KFV", slug: "titrator-easyplus-easy-kfv", image: EasyKfv },
        { name: "Titrator Excellence T5", slug: "titrator-excellence-t5", image: TitratorExcellenceT5 },
      

        { heading: "Density Meter" },

        { name: "Handheld Density Meter Densito", slug: "handheld-density-meter-densito", image: Densito },
        { name: "Density meter Excellence D4", slug: "density-meter-excellence-d4", image: DensityMeterExcellenceD4 },

        { heading: "Refractometer" },

        { name: "Refractometer Excellence R4", slug: "refractometer-excellence-r4", image: ExcellenceR4 },
        { name: "Handheld Refractometer MyBrix", slug: "handheld-refractometer-mybrix", image: HandheldRefractometerMybrix },

        { heading: "Melting Point Apparatus" },

        { name: "Melting Point System MP30", slug: "melting-point-system-mp30", image: MeltingPointSystemMp30 },
        { name: "Melting Point System MP80", slug: "melting-point-system-mp80", image: MeltingPointSystemMp80 }
      ]
    }
  ]
};
