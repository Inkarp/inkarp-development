// ---------- Logos ----------
import Chemspeed from "/src/assets/PrincipalLogos/RowSix/Chemspeed.png";
import AP from "/src/assets/PrincipalLogos/RowSix/AP.png";

// ---------- Chemspeed ----------
import ImgCrystalPowerDose from "/images/products/Chemspeed/crystal-powderdose.png";
import ImgCrystalSwile from "/images/products/Chemspeed/crystal-swile.png";
import ImgFlexIsynth from "/images/products/Chemspeed/flex-isynth-innovative-medicines.jpg";
import ImgFlexAutoplant from "/images/products/Chemspeed/Flex-autoplant.png";
import ImgSwingSp from "/images/products/Chemspeed/SwingSp.png"

// ---------- AP ----------
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


export const Plants = {
  vertical: "pilot plants and automation",
  principal: "Chemspeed / APMiniPlant",
  logo: Chemspeed,
  products: [
    {
      name: "crystal-benchtop-solution",
      slug: "crystal-benchtop-solution",
      logo: Chemspeed,
      models: [
        { name: "Crystal Power Dose", slug: "crystal-power-dose", image: ImgCrystalPowerDose },

      ],
    },

    {
      name: "automated-synthesis-for-innovative-medicines",
      slug: "automated-synthesis-for-innovative-medicines",
      logo: Chemspeed,
      models: [
        { name: "Flex iSynth", slug: "flex-isynth", image: ImgFlexIsynth },
        {
          name: "Flex Autoplant",
          slug: "flex-autoplant",
          image: ImgFlexAutoplant,
          keywords: [
            "FLEX AUTOPLANT, FLEX AUTOPLANT Distributor And Service Provider In India, Chemspeed FLEX AUTOPLANT, automated process development workstation, process R&D automation, QbD process development, PAR driven process R&D, chemical development automation, parallel synthesis reactors, high pressure reactor automation, preparative synthesis workstation, automated scale up systems, Chemspeed India"
          ],
        },
        {
          name: "Swing Sp",
          slug: "swing-sp",
          image: ImgSwingSp,
          keywords: [
            "SWING SP Distributor And Service Provider In India, SWING SP India, SWING SP gravimetric dispensing system, high throughput sample preparation India, automated dosing system India, gravimetric liquid handling India, Chemspeed SWING SP distributor, automated sample preparation system, laboratory automation India, AUTOSUITE software India"
          ],
        },
      ],
    },

  
  ],
};
