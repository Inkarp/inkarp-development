// ThalesNano images (from public/)
import ImgHcubeMiniPlus from "/images/products/ThalesNano/HcubeMiniPlus.jpg";
import ImgHcubePro from "/images/products/ThalesNano/HcubePro.jpg";
import ImgHGenieLite from "/images/products/ThalesNano/HGeneLite.jpg";
import ImgHGenie2 from "/images/products/ThalesNano/HGene2.jpg";
import ImgPhoenixII from "/images/products/ThalesNano/PhoenixFlowMeter.jpg";   // Phoenix™ II Flow Reactor
import ImgPhoenixPlatform from "/images/products/ThalesNano/PhoenixPlatform.jpg";
// NOTE: filename in your folder is 'PhotCube.jpg' (missing 'o'). Keep as-is or rename to 'PhotoCube.jpg'.
import ImgPhotoCube from "/images/products/ThalesNano/PhotCube.jpg";

// Optional: sidebar labels
export const ThalesNanoCategories = [
  { key: "h-cube-systems", label: "H-Cube® Systems" },
  { key: "hydrogen-gas-generators", label: "Hydrogen Gas Generators" },
  { key: "phoenix-flow-systems", label: "Phoenix Flow Systems" },
  { key: "photocube", label: "PhotoCube™" },
];

export const ThalesNanoData = {
  "h-cube-systems": {
    models: [
      { heading: "H-Cube® Systems" },
      { name: "H-Cube® Mini Plus", slug: "h-cube-mini-plus", image: ImgHcubeMiniPlus },
      { name: "H-Cube® Pro", slug: "h-cube-pro", image: ImgHcubePro },
    ],
    meta: {
      title: "ThalesNano H-Cube® Systems | Inkarp India",
      description:
        "Bench-top hydrogenation flow reactors for fast, safe, and scalable chemistry — H-Cube® Mini Plus and H-Cube® Pro.",
      keywords: ["ThalesNano", "H-Cube", "flow hydrogenation", "Mini Plus", "Pro", "Inkarp"],
      altText: "ThalesNano H-Cube systems",
    },
  },

  "hydrogen-gas-generators": {
    models: [
      { heading: "Hydrogen Gas Generators" },
      { name: "H-Genie® Lite", slug: "h-genie-lite", image: ImgHGenieLite },
      { name: "H-Genie® II", slug: "h-genie-ii", image: ImgHGenie2 },
    ],
    meta: {
      title: "ThalesNano H-Genie® Hydrogen Gas Generators | Inkarp India",
      description:
        "On-demand hydrogen for lab reactors and flow chemistry — H-Genie® Lite and H-Genie® II.",
      keywords: ["ThalesNano", "H-Genie", "hydrogen generator", "flow chemistry", "Inkarp"],
      altText: "ThalesNano H-Genie hydrogen generators",
    },
  },

  "phoenix-flow-systems": {
    models: [
      { heading: "Phoenix Flow Systems" },
      { name: "Phoenix™ II Flow Reactor", slug: "phoenix-ii-flow-reactor", image: ImgPhoenixII },
      { name: "Phoenix – H-Genie® Platform", slug: "phoenix-h-genie-platform", image: ImgPhoenixPlatform },
    ],
    meta: {
      title: "ThalesNano Phoenix™ Flow Systems | Inkarp India",
      description:
        "High-temperature/pressure flow chemistry platform and integrated Phoenix – H-Genie® solutions.",
      keywords: ["ThalesNano", "Phoenix II", "flow reactor", "platform", "Inkarp"],
      altText: "ThalesNano Phoenix flow systems",
    },
  },

  "photocube": {
    models: [
      { heading: "PhotoCube™" },
      { name: "PhotoCube™", slug: "photocube", image: ImgPhotoCube },
    ],
    meta: {
      title: "ThalesNano PhotoCube™ | Inkarp India",
      description:
        "Compact photochemistry reactor for controlled light-driven reactions in flow.",
      keywords: ["ThalesNano", "PhotoCube", "photochemistry", "flow", "Inkarp"],
      altText: "ThalesNano PhotoCube photochemistry reactor",
    },
  },
};
