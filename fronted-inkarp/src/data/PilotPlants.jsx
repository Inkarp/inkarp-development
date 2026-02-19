// ---------- Logos ----------
import Chemspeed from "/src/assets/PrincipalLogos/RowSix/Chemspeed.png";
import AP from "/src/assets/PrincipalLogos/RowSix/AP.png"; // already in your file
import GEA from "/src/assets/PrincipalLogos/RowFive/GEA.png"; // if still used elsewhere

// ---------- Chemspeed (public/images/products/Chemspeed) ----------
import ImgCrystalPowerDose from "/images/products/Chemspeed/crystal-powderdose.png";
import ImgCrystalSwile from "/images/products/Chemspeed/crystal-swile.png";
import ImgFlexIsynth from "/images/products/Chemspeed/flex-isynth-innovative-medicines.jpg";
import ImgFlexAutoplant from "/images/products/Chemspeed/Flex-autoplant.png";
import ImgSwingSp from "/images/products/Chemspeed/SwingSp.png"
// ---------- AP (public/images/products/AP) ----------
import ImgMicroReactorSystemWithGC from "/images/products/AP/micro-reactor-system-with-gc.png";
import ImgSynthesisPlantsInAContainer from "/images/products/AP/synthesis-plants-in-a-container.png";
import ImgKatalysatorTestanlagenVerschiedeneBauformen from "/images/products/AP/katalysatortestanlagen-verschiedene-bauformen.png";

import ImgHastelloyExchangeableVessels124L from "/images/products/AP/hastelloy-plant-with-exchangeable-vessels-1-2-4l.png";
import ImgStirredReactor50LLowTemp from "/images/products/AP/stirred-reactor-plant-50l-low-temperature-application.png";
import ImgAirTightPlantAirlockScrubber from "/images/products/AP/air-tight-plant-with-airlock-and-scrubber-column.png";
import ImgStirredReactorGlass10And2LWithCentrifuge from "/images/products/AP/stirred-reactor-plant-glass-10-and-2l-with-centrifuge.png";
import ImgHastelloyHousingCO2Extinguisher from "/images/products/AP/hastelloy-plant-in-a-housing-with-automatic-co2-fire-extinguisher.png";
import ImgPressureReactor3LGlass from "/images/products/AP/pressure-reactor-plant-with-3l-glass-vessel.png";
import Img120LPrecipitationPlant from "/images/products/AP/120l-precipitation-plant.png";
import ImgMetalFreeGlassLinedReactors from "/images/products/AP/metal-free-product-side-system-with-glass-lined-reactors.png";



export const PilotPlants = {
  // -------------------- Chemspeed --------------------
  "crystal-benchtop-solution": {
    logo: Chemspeed,
    models: [
      { heading: "CRYSTAL Benchtop Solution" },
      {
        name: "Crystal Power dose",
        slug: "crystal-power-dose",
        image: ImgCrystalPowerDose,
      },
   
    ],
    meta: {
      title: "CRYSTAL Benchtop Solution | Chemspeed | Inkarp India",
      description:
        "Chemspeed CRYSTAL benchtop solutions for automated synthesis workflows: Crystal Power dose and Crystal swile.",
      keywords: [
        "Chemspeed",
        "CRYSTAL Benchtop",
        "Crystal Power dose",
        "Crystal swile",
        "Automated synthesis",
        "Inkarp India",
      ],
      altText: "Chemspeed CRYSTAL Benchtop Solution",
    },
  },

  "automated-synthesis-for-innovative-medicines": {
    logo: Chemspeed,
    models: [
      { heading: "Automated Synthesis for Innovative Medicines" },
      {
        name: "Flex Isynth",
        slug: "flex-isynth",
        image: ImgFlexIsynth,
      },
       {
        name: "Flex Autoplant",
        slug: "flex-autoplant",
        image: ImgFlexAutoplant,
      },
       {
        name: "Swing Sp",
        slug: "swing-sp",
        image: ImgSwingSp,
      },
    ],
    meta: {
      title: "Automated Synthesis for Innovative Medicines | Chemspeed Flex Isynth | Inkarp India",
      description:
        "Chemspeed Flex Isynth platform for automated synthesis in innovative medicines development.",
      keywords: [
        "Chemspeed",
        "Flex Isynth",
        "Automated synthesis",
        "Innovative medicines",
        "Inkarp India",
      ],
      altText: "Chemspeed Flex Isynth",
    },
  },

  // -------------------- AP (Stirred Reactors & Catalyst Testing) --------------------
  "catalyst-testing-plant": {
    models: [
      { heading: "Catalyst Testing Plant" },
      {
        name: "Micro Reactor System with GC",
        slug: "micro-reactor-system-with-gc",
        image: ImgMicroReactorSystemWithGC,
      },
      {
        name: "Synthesis Plants in a Container",
        slug: "synthesis-plants-in-a-container",
        image: ImgSynthesisPlantsInAContainer,
      },
      {
        name: "Katalysatortestanlagen – verschiedene Bauformen",
        slug: "katalysatortestanlagen-verschiedene-bauformen",
        image: ImgKatalysatorTestanlagenVerschiedeneBauformen,
      },
    ],
    meta: {
      title:
        "Catalyst Testing Plant | Micro Reactor, Synthesis in Container | Inkarp India",
      description:
        "Catalyst testing pilot solutions: micro reactor system with GC, synthesis plants in a container, and various catalyst test setups.",
      keywords: [
        "catalyst testing plant",
        "micro reactor with GC",
        "synthesis plants in a container",
        "pilot plant",
        "Inkarp India",
      ],
      altText: "Catalyst Testing Pilot Plants",
    },
  },

  "stirred-reactor-plants": {
    models: [
      { heading: "Stirred Reactor Plants" },
      {
        name: "Hastelloy® Plant with Exchangeable Vessels, 1, 2, 4 L",
        slug: "hastelloy-plant-with-exchangeable-vessels-1-2-4l",
        image: ImgHastelloyExchangeableVessels124L,
      },
      {
        name: "Stirred Reactor Plant, 50 L - Low Temperature Application",
        slug: "stirred-reactor-plant-50l-low-temperature-application",
        image: ImgStirredReactor50LLowTemp,
      },
      {
        name: "Air Tight Plant with Airlock and Scrubber Column",
        slug: "air-tight-plant-with-airlock-and-scrubber-column",
        image: ImgAirTightPlantAirlockScrubber,
      },
      {
        name: "Stirred Reactor Plant, Glass, 10 and 2 L with Centrifuge",
        slug: "stirred-reactor-plant-glass-10-and-2l-with-centrifuge",
        image: ImgStirredReactorGlass10And2LWithCentrifuge,
      },
      {
        name: "Hastelloy® Plant in a Housing with Automatic CO2-Fire Extinguisher",
        slug: "hastelloy-plant-in-a-housing-with-automatic-co2-fire-extinguisher",
        image: ImgHastelloyHousingCO2Extinguisher,
      },
      {
        name: "Pressure Reactor Plant with 3 L Glass Vessel",
        slug: "pressure-reactor-plant-with-3l-glass-vessel",
        image: ImgPressureReactor3LGlass,
      },
      {
        name: "120 L Precipitation Plant",
        slug: "120l-precipitation-plant",
        image: Img120LPrecipitationPlant,
      },
      {
        name: "Metal free Product Side System with Glass Lined Reactors",
        slug: "metal-free-product-side-system-with-glass-lined-reactors",
        image: ImgMetalFreeGlassLinedReactors,
      },
    ],
    meta: {
      title: "Stirred Reactor Plants | Pilot & Process Systems | Inkarp India",
      description:
        "Stirred reactor pilot plants including Hastelloy and glass-lined systems, low-temperature applications, air-tight plants with airlock, precipitation and pressure reactor setups.",
      keywords: [
        "stirred reactor plant",
        "Hastelloy reactor system",
        "glass-lined reactor",
        "pressure reactor plant",
        "precipitation plant",
        "pilot plant",
        "Inkarp India",
      ],
      altText: "Stirred Reactor Pilot Plants",
    },
  },
};
