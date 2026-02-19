// ThalesNano images (from public/)
import ImgHcubeMiniPlus from "/images/products/ThalesNano/HcubeMiniPlus.jpg";
import ImgHcubePro from "/images/products/ThalesNano/HcubePro.jpg";
import ImgHGenieLite from "/images/products/ThalesNano/HGeneLite.jpg";
import ImgHGenie2 from "/images/products/ThalesNano/HGene2.jpg";
import ImgPhoenixII from "/images/products/ThalesNano/PhoenixFlowMeter.jpg"; 
import ImgPhoenixPlatform from "/images/products/ThalesNano/PhoenixPlatform.jpg";
import ImgPhotoCube from "/images/products/ThalesNano/PhotCube.jpg";


const Thalesnano = {
  vertical: "Synthesis and Flow Chemistry",
  principal: "ThalesNano",
  // logo: ThalesNanoLogo,
  products: [
    {
      name: "H-Cube® Systems",
      slug: "h-cube-systems",
      models: [
        { name: "H-Cube® Mini Plus", slug: "h-cube-mini-plus", image: ImgHcubeMiniPlus,keywords:['flow hydrogenation reactor', "catalytic hydrogenation system", 'safe hydrogenation'] },
        { name: "H-Cube® Pro", slug: "h-cube-pro", image: ImgHcubePro ,keywords:['advanced flow reactor', "gas flow chemistry", 'continuous hydrogenation']}
      ],
    },
    {
      name: "Hydrogen Gas Generators",
      slug: "hydrogen-gas-generators",
      models: [
        { name: "H-Genie® Lite", slug: "h-genie-lite", image: ImgHGenieLite ,keywords:['laboratory hydrogen generator', 'on demand hydrogen system']},
        { name: "H-Genie® II", slug: "h-genie-ii", image: ImgHGenie2 ,keywords:['laboratory hydrogen generator', 'on demand hydrogen system']},
      ],
    },
    {
      name: "Phoenix Flow Systems",
      slug: "phoenix-flow-systems",
      models: [
        { name: "Phoenix™ II Flow Reactor", slug: "phoenix-ii-flow-reactor", image: ImgPhoenixII,keywords:['high pressure flow reactor', 'high temperature flow chemistry'] },
        { name: "Phoenix – H-Genie® Platform", slug: "phoenix-h-genie-platform", image: ImgPhoenixPlatform },
      ],
    },
    {
      name: "PhotoCube™",
      slug: "photocube",
      models: [
        { name: "PhotoCube™", slug: "photocube", image: ImgPhotoCube, keywords:["photochemistry reactor", "photo flow chemistry"] },
      ],
    },
  ],
};

export { Thalesnano };
