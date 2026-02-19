// Rotzemeir images (from public/)
import ImgSafetyCans from "/images/products/Rotzemeir/banner_safetycans.jpg";
import ImgSafetyCanisters from "/images/products/Rotzemeir/banner_safetycanister.jpg";
import ImgSafetyBarrels from "/images/products/Rotzemeir/banner_safetybarrels.jpg";
import ImgTransportContainers from "/images/products/Rotzemeir/banner_safetycansfortransport.jpg";
import ImgFunnel from "/images/products/Rotzemeir/banner_funnel.jpg";
import ImgAccessories from "/images/products/Rotzemeir/banner_accessories.jpg";

// (Optional) add logo when available
// import RotzemeirLogo from "/src/assets/PrincipalLogos/RowOne/Rotzemeir.png";

const Rotzemeir = {
  vertical: "Synthesis and Flow Chemistry",
  principal: "Rotzemeir",
  // logo: RotzemeirLogo,
  products: [
    {
      name: "Safety Cans",
      slug: "safety-cans-for-in-plant-use",
      models: [
        { name: "Safety cans – for in-plant use", slug: "safety-cans", image: ImgSafetyCans ,keywords:["flammable liquid container", "solvent safety can", "chemical storage container"]},
      ],
    },
    {
      name: "Safety Canisters",
      slug: "safety-canisters-for-in-plant-use",
      models: [
        { name: "Safety canisters – for in-plant use", slug: "safety-canisters", image: ImgSafetyCanisters,keywords:["flammable liquid container", "solvent safety can", "chemical storage container"] },
      ],
    },
    {
      name: "Safety Barrels",
      slug: "safety-barrels-for-in-plant-use",
      models: [
        { name: "Safety barrels – for in-plant use", slug: "safety-barrels", image: ImgSafetyBarrels,keywords:["flammable liquid container", "solvent safety can", "chemical storage container"] },
      ],
    },
    {
      name: "Transportation Containers & UN Approval",
      slug: "transportation-containers-and-un-approval",
      models: [
        { name: "Transportation containers with UN-approval", slug: "transportation-containers", image: ImgTransportContainers ,keywords:["UN approved container", "hazardous goods transport container"]},
      ],
    },
    {
      name: "Funnels",
      slug: "funnels",
      models: [
        { name: "Funnel", slug: "funnels", image: ImgFunnel ,keywords:["safety funnel", "flame arrestor funnel", "solvent filling funnel"]},
      ],
    },
    {
      name: "Accessories",
      slug: "accessories",
      models: [
        { name: "Accessories", slug: "accessories", image: ImgAccessories ,keywords:["chemical safety accessories", "solvent handling accessories"] },
      ],
    },
  ],
};

export { Rotzemeir };
