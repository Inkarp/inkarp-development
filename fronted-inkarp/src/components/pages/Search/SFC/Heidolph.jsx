
import HeidolphLogo from '/src/assets/PrincipalLogos/RowOne/Heidolph.svg';

import HeiVapCore from "/images/products/heidolph/Hei-VAP-HL-G3.webp";
import HeiVapExpert from "/images/products/heidolph/Hei-VAP-Expert.webp";
import HeiVapUltimate from "/images/products/heidolph/Hei-VAP-Ultimate.webp";
import HeiVapUltimateControl from "/images/products/heidolph/Hei-VAP-Ultimate-Control.webp";
import HeiVapExpertControl from "/images/products/heidolph/Hei-VAP-Expert-Control.webp";

import HeiVacValveControl from "/images/products/heidolph/hei-vac-valve-control.webp";
import HeiVacValveTec from "/images/products/heidolph/hei-vac-valve-tec.webp";
import HeiVacVarioControl from "/images/products/heidolph/hei-vac-vario-control.webp";
import HeiVacVarioStation from "/images/products/heidolph/hei-vac-vario-station.webp";

import HeiVapIndustrial from "/images/products/heidolph/Hei-VAP-Industrial.webp";
import HeiVapIndustrialBasic from "/images/products/heidolph/Hei-VAP-Industrial-Basic.webp"

import LabScaleHeiVapDismatic from "/images/products/heidolph/Lab-Scale-Hei-Vol-Distimatic.webp"
import LabScaleHeiVapDismaticPro from "/images/products/heidolph/Lab-Scale-Hei-Vol-Distimatic-Pro.webp"

import HeiConnect from "/images/products/heidolph/Hei-Connect.webp"
import HeiMixS from "/images/products/heidolph/Hei-Mix-S.webp"
import HeiPlateMix from "/images/products/heidolph/Hei-PLATE-Mix-20.webp"
import HeiPlateMixHeatCore from "/images/products/heidolph/Hei-PLATE-MixnHeat-Core.webp"
import HeiPlateMixHeatCorePlus from "/images/products/heidolph/Hei-PLATE-MixnHeat-Core-Plus.webp"
import HeiPlateMixHeatCoreUltimate from "/images/products/heidolph/hei-plate-mix-n-heat-ultimate.webp"
import HeiPlateMixHeatCoreExpert from "/images/products/heidolph/hei-plate-mix-n-heat-expert.webp"

import HeiTorqueCore from "/images/products/heidolph/Hei-TORQUE-Core.webp"
import HeiTorqueExpert100 from "/images/products/heidolph/Hei-TORQUE-Expert-100.webp"
import HeiTorqueExpert200 from "/images/products/heidolph/Hei-TORQUE-Expert-200.webp"
import HeiTorqueExpert400 from "/images/products/heidolph/Hei-TORQUE-Expert-400.webp"
import HeiTorqueUltimate100 from "/images/products/heidolph/Hei-TORQUE-Ultimate-100.webp"
import HeiTorqueUltimate200 from "/images/products/heidolph/Hei-TORQUE-Ultimate-200.webp"
import HeiTorqueUltimate400 from "/images/products/heidolph/Hei-TORQUE-Ultimate-400.webp"

import HeiFLowCore600 from "/images/products/heidolph/Hei-FLOW-Core-600.webp"
import HeiFLowExpert600 from "/images/products/heidolph/Hei-FLOW-Expert-600.webp"
import HeiFLowUltimate600 from "/images/products/heidolph/Hei-FLOW-Ultimate-600.webp"
import HeiFLowCore120 from "/images/products/heidolph/Hei-FLOW-Core-120.webp"
import HeiFLowExpert120 from "/images/products/heidolph/Hei-FLOW-Expert-120.webp"
import HeiFLowUltimate120 from "/images/products/heidolph/Hei-FLOW-Ultimate-120.webp"

import HeiProcessCore from "/images/products/heidolph/Hei-PROCESS-Core.webp"
import HeiProcessExpert from "/images/products/heidolph/Hei-PROCESS-Expert.webp"
import HeiProcessUltimate from "/images/products/heidolph/Hei-PROCESS-Ultimate.webp"
import HeiProcessCustomise from "/images/products/heidolph/Hei-PROCESS-Customized.webp"

import SphericalPlate from "/images/products/heidolph/Sphericalplate-5D.webp"

import ReaxTop from "/images/products/heidolph/Reax-top.webp"
import ReaxControl from "/images/products/heidolph/Reax-control.webp"
import MultiReax from "/images/products/heidolph/Multi-Reax2.webp"
import TitraMax101 from "/images/products/heidolph/Titramax-101.webp"
import TitraMax100 from "/images/products/heidolph/Titramax-100.webp"
import TitraMax1000 from "/images/products/heidolph/Titramax-1000.webp"
import Rotamax120 from "/images/products/heidolph/Rotamax-120.webp"
import Unimax1010 from "/images/products/heidolph/Unimax-1010.webp"
import Unimax2010 from "/images/products/heidolph/Unimax-2010.webp"
import DuoMax from "/images/products/heidolph/Duomax-1030.webp"
import ProMax1020 from "/images/products/heidolph/Promax-1020.webp"
import ProMax2020 from "/images/products/heidolph/Promax-2020.webp"
import PolyMax1040 from "/images/products/heidolph/Polymax-1040.webp"
import PolyMax2040 from "/images/products/heidolph/Polymax-2040.webp"
import Vibramax100 from "/images/products/heidolph/Vibramax-100.webp"
import Reax20 from "/images/products/heidolph/Reax-20.webp"
import Reax20New from "/images/products/heidolph/Reax-20-1-16.webp"
import Reax2 from "/images/products/heidolph/Reax2-with-Adapter.webp"
import TitramaxPackage from "/images/products/heidolph/titramax-package.webp"

const Heidolph = {
  vertical: "Synthesis and Flow Chemistry",
  principal: "Heidolph",
  logo: HeidolphLogo,
  products: [
    {
      name: "Rotary Evaporators",
      slug: "rotary-evaporators",
      models: [
        { heading: "Standard Models" },
        { name: "Hei-VAP Core", slug: "hei-vap-core", image: HeiVapCore, 
          keywords: ["rotary evaporator", "lab rotary evaporator", "evaporation system", "solvent removal", "distillation apparatus"] },
        { name: "Hei-VAP Expert", slug: "hei-vap-expert", image: HeiVapExpert,keywords: ["rotary evaporator", "lab rotary evaporator", "evaporation system", "solvent removal", "distillation apparatus"]   },
        { name: "Hei-VAP Ultimate", slug: "hei-vap-ultimate", image: HeiVapUltimate ,keywords: ["rotary evaporator", "lab rotary evaporator", "evaporation system", "solvent removal", "distillation apparatus"]  },
        { heading: "Control Models" },
        { name: "Hei-VAP Expert Control", slug: "hei-vap-expert-control", image: HeiVapExpertControl },
        { name: "Hei-VAP Ultimate Control", slug: "hei-vap-ultimate-control", image: HeiVapUltimateControl },
        { name: "Hei-VAP Industrial Basic", slug: "hei-vap-industrial-basic", image: HeiVapIndustrialBasic },
         { name: "Hei-VAP Industrial", slug: "hei-vap-industrial", image: HeiVapIndustrial, keywords: ["industrial rotary evaporator", "large scale solvent evaporation", "pilot scale evaporation system"] },
      ]
    },
    {
      name: "Accessories",
      slug: "accessories",
      models: [
        { heading: "Vacuum Pumps" },
        { name: "Hei-VAC Valve Control", slug: "hei-vac-valve-control", image: HeiVacValveControl },
        { name: "Hei-VAC Valve Tec", slug: "hei-vac-valve-tec", image: HeiVacValveTec },
        { heading: "RPM-Regulated Vacuum Pumps" },
        { name: "Hei-VAC Vario Station", slug: "hei-vac-vario-station", image: HeiVacVarioStation },
        { name: "Hei-VAC Vario Control", slug: "hei-vac-vario-control", image: HeiVacVarioControl }
      ]
    },
    {
      name: "Magnetic Stirrers",
      slug: "magnetic-stirrers",
      models: [
      
        { name: "Hei-Mix S", slug: "hei-mix-s", image: HeiMixS, keywords:["magnetic stirrer hotplate", "laboratory hotplate stirrer", "safety hotplate", "chemical stirring heating","magnetic stirrer", "lab stirrer", "chemical mixing stirrer"] },
        { name: "Hei-Plate Mix 20 L", slug: "hei-plate-mix-20-l", image: HeiPlateMix, keywords:["magnetic stirrer hotplate", "laboratory hotplate stirrer", "safety hotplate", "chemical stirring heating","magnetic stirrer", "lab stirrer", "chemical mixing stirrer"]},
        { name: "Hei-Plate Mix 'n' Heat Core", slug: "hei-plate-mix-n-heat-core", image: HeiPlateMixHeatCore, keywords:["magnetic stirrer hotplate", "laboratory hotplate stirrer", "safety hotplate", "chemical stirring heating","magnetic stirrer", "lab stirrer", "chemical mixing stirrer"] },
        { name: "Hei-Plate Mix 'n' Heat Core +", slug: "hei-plate-mix-n-heat-core-+", image: HeiPlateMixHeatCorePlus , keywords:["magnetic stirrer hotplate", "laboratory hotplate stirrer", "safety hotplate", "chemical stirring heating","magnetic stirrer", "lab stirrer", "chemical mixing stirrer"] },
        { name: "Hei-Plate Mix 'n' Heat Core Ultimate", slug: "hei-plate-mix-n-heat-core-ultimate", image: HeiPlateMixHeatCoreUltimate , keywords:["magnetic stirrer hotplate", "laboratory hotplate stirrer", "safety hotplate", "chemical stirring heating","magnetic stirrer", "lab stirrer", "chemical mixing stirrer"] },
        { name: "Hei-Plate Mix 'n' Heat Core Expert", slug: "hei-plate-mix-n-heat-core-expert", image: HeiPlateMixHeatCoreExpert, keywords:["magnetic stirrer hotplate", "laboratory hotplate stirrer", "safety hotplate", "chemical stirring heating","magnetic stirrer", "lab stirrer", "chemical mixing stirrer"]  }
      ]
    },
    {
      name: "Peristaltic Pumps",
      slug: "peristaltic-pumps",
      models: [
        { heading: "Single Channel Pumps" },
        { name: "Hei-Flow Core 600", slug: "hei-flow-core-600", image: HeiFLowCore600 ,keywords:["peristaltic pump", "laboratory dosing pump", "chemical transfer pump"]},
        { name: "Hei-Flow Expert 600", slug: "hei-flow-expert-600", image: HeiFLowExpert600,keywords:["peristaltic pump", "laboratory dosing pump", "chemical transfer pump"]  },
        { name: "Hei-Flow Ultimate 600", slug: "hei-flow-ultimate-600", image: HeiFLowUltimate600,keywords:["peristaltic pump", "laboratory dosing pump", "chemical transfer pump"]  },
        { heading: "Multi Channel Pumps" },
        { name: "Hei-Flow Core 120", slug: "hei-flow-core-120", image: HeiFLowCore120 ,keywords:["peristaltic pump", "laboratory dosing pump", "chemical transfer pump"] },
        { name: "Hei-Flow Expert 120", slug: "hei-flow-expert-120", image: HeiFLowExpert120,  keywords:["peristaltic pump", "laboratory dosing pump", "chemical transfer pump"]   },
        { name: "Hei-Flow Ultimate 120", slug: "hei-flow-ultimate-120", image: HeiFLowUltimate120,keywords:["peristaltic pump", "laboratory dosing pump", "chemical transfer pump"]  }
      ]
    },

    {
      name: "Continuous Automatic Distillation Module",
      slug: "continuous-automatic-distillation-module",
      models: [
        { name: "Lab Scale Hei-Volume Dismatic", slug: "lab-scale-hei-volume-dismatic", image: LabScaleHeiVapDismatic, keywords:["automated rotary evaporator", "unattended evaporation","high throughput evaporation", "solvent recovery automation"] },
        { name: "Lab Scale Hei-Volume Dismatic Pro", slug: "lab-scale-hei-volume-dismatic-pro", image: LabScaleHeiVapDismaticPro, keywords:["automated rotary evaporator", "unattended evaporation","high throughput evaporation", "solvent recovery automation"]  }
      ]
    },
    {
      name: "Overhead Stirrers",
      slug: "overhead-stirrers",
      models: [
        { name: "Hei-Torque Core", slug: "hei-torque-core", image: HeiTorqueCore ,keywords:["overhead stirrer", "high viscosity stirring", "chemical reactor stirring", "torque controlled stirrer"] },
        { name: "Hei-Torque Expert-100", slug: "hei-torque-expert-100", image: HeiTorqueExpert100,keywords:["overhead stirrer", "high viscosity stirring", "chemical reactor stirring", "torque controlled stirrer"]  },
        { name: "Hei-Torque Expert-200", slug: "hei-torque-expert-200", image: HeiTorqueExpert200 ,keywords:["overhead stirrer", "high viscosity stirring", "chemical reactor stirring", "torque controlled stirrer"] },
        { name: "Hei-Torque Expert-400", slug: "hei-torque-expert-400", image: HeiTorqueExpert400,keywords:["overhead stirrer", "high viscosity stirring", "chemical reactor stirring", "torque controlled stirrer"]  },
        { name: "Hei-Torque Ultimate-100", slug: "hei-torque-ultimate-100", image: HeiTorqueUltimate100 ,keywords:["overhead stirrer", "high viscosity stirring", "chemical reactor stirring", "torque controlled stirrer"] },
        { name: "Hei-Torque Ultimate-200", slug: "hei-torque-ultimate-200", image: HeiTorqueUltimate200,keywords:["overhead stirrer", "high viscosity stirring", "chemical reactor stirring", "torque controlled stirrer"]  },
        { name: "Hei-Torque Ultimate-400", slug: "hei-torque-ultimate-400", image: HeiTorqueUltimate400,keywords:["overhead stirrer", "high viscosity stirring", "chemical reactor stirring", "torque controlled stirrer"]  }
      ]
    },
    {
      name: "Processing Solutions",
      slug: "processing-solutions",
      models: [
        { name: "Hei-Process Core", slug: "hei-process-core", image: HeiProcessCore,keywords:["laboratory automation", "process control modules", "automated chemistry systems"] },
        { name: "Hei-Process Expert", slug: "hei-process-expert", image: HeiProcessExpert,keywords:["laboratory automation", "process control modules", "automated chemistry systems"] },
        { name: "Hei-Process Ultimate", slug: "hei-process-ultimate", image: HeiProcessUltimate ,keywords:["laboratory automation", "process control modules", "automated chemistry systems"]},
        { name: "Hei-Process Customized", slug: "hei-process-customized", image: HeiProcessCustomise,keywords:["laboratory automation", "process control modules", "automated chemistry systems"] }
      ]
    },
    {
      name: "Shakers & Mixers",
      slug: "shakers-mixers",
      models: [
        { heading: "Voretx Mixers" },
        { name: "Reax top", slug: "reax-top", image: ReaxTop ,keywords:["orbital shaker", "laboratory shaker", "incubated shaker", "sample mixing shaker", "chemical shaker"]},
        { name: "Reax control", slug: "reax-control", image: ReaxControl,keywords:["orbital shaker", "laboratory shaker", "incubated shaker", "sample mixing shaker", "chemical shaker"]  },
        { name: "Multi Reax", slug: "multi-reax", image: MultiReax ,keywords:["orbital shaker", "laboratory shaker", "incubated shaker", "sample mixing shaker", "chemical shaker"] },
        { heading: "Vibrating Platform Shakers" },
        { name: "Titrimax 101", slug: "titrimax-101", image: TitraMax101,keywords:["orbital shaker", "laboratory shaker", "incubated shaker", "sample mixing shaker", "chemical shaker"]  },
        { name: "Titrimax 100", slug: "titrimax-100", image: TitraMax100,keywords:["orbital shaker", "laboratory shaker", "incubated shaker", "sample mixing shaker", "chemical shaker"] },
        { name: "Titrimax 1000", slug: "titrimax-1000", image: TitraMax1000,keywords:["orbital shaker", "laboratory shaker", "incubated shaker", "sample mixing shaker", "chemical shaker"] },
        { heading: "Orbital Platform Shakers" },
        { name: "Rotamax 120", slug: "rotmax-120", image: Rotamax120,keywords:["orbital shaker", "laboratory shaker", "incubated shaker", "sample mixing shaker", "chemical shaker"] },
        { name: "Unimax 1010", slug: "unimax-1010", image: Unimax1010,keywords:["orbital shaker", "laboratory shaker", "incubated shaker", "sample mixing shaker", "chemical shaker"] },
        { name: "Duomax 1030", slug: "duomax-1030", image: DuoMax,keywords:["orbital shaker", "laboratory shaker", "incubated shaker", "sample mixing shaker", "chemical shaker"] },
        { name: "Promax 1020", slug: "promax-1020", image: ProMax1020,keywords:["orbital shaker", "laboratory shaker", "incubated shaker", "sample mixing shaker", "chemical shaker"] },   
        { name: "Polymax 1040", slug: "polymax-1040", image: PolyMax1040 ,keywords:["orbital shaker", "laboratory shaker", "incubated shaker", "sample mixing shaker", "chemical shaker"]  },
        { name: "Polymax 2040", slug: "polymax-2040", image: PolyMax2040,keywords:["orbital shaker", "laboratory shaker", "incubated shaker", "sample mixing shaker", "chemical shaker"] },
        { name: "Vibramax 100", slug: "vibramax-100", image: Vibramax100,keywords:["orbital shaker", "laboratory shaker", "incubated shaker", "sample mixing shaker", "chemical shaker"] },
        { name: "Reax 20(2-32rpm)", slug: "reax-20-2-32", image: Reax20,keywords:["orbital shaker", "laboratory shaker", "incubated shaker", "sample mixing shaker", "chemical shaker"] },
        { name: "Reax 20(1-16rpm)", slug: "reax-20-1-16", image: Reax20New,keywords:["orbital shaker", "laboratory shaker", "incubated shaker", "sample mixing shaker", "chemical shaker"] },
        { heading: "Orbital Platform Shakers" },
        { name: "Titramax package", slug: "titramax-package", image: TitramaxPackage,keywords:["orbital shaker", "laboratory shaker", "incubated shaker", "sample mixing shaker", "chemical shaker"] }
      ]
    },
    {
      name: "Smart Cell Cultivation",
      slug: "smart-cell-cultivation",
      models: [
        {
          name: "Kugelmeiers Sphericalplate 5D (SP5D)",
          slug: "sphericalplate-5d",
          image: SphericalPlate,
          description: "3D cell culture plate enabling fast, uniform spheroid and organoid formation without hydrogels—designed for gentle handling and high reproducibility across assays."
        }
      ]
    },
    
    
  ]
};

export { Heidolph };
