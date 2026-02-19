import PolyscienceLogo from '/src/assets/PrincipalLogos/RowOne/Polyscience.png';
// Product images (public/)
import ImgBenchtopGroup from "/images/products/PolyScience/Benchtop_Group.jpg";
import ImgDurachill from "/images/products/PolyScience/chiller-cover-render4-low-res.png";
import ImgGPWB from "/images/products/PolyScience/GPWB_Category.png";
import ImgViscosity from "/images/products/PolyScience/Viscosity_MX.png";
import ImgRCCategory from "/images/products/PolyScience/RC_Category.png";
import ImgHeatedCategory from "/images/products/PolyScience/Heated_Category.png";

const Polyscience = {
  // Pick the vertical you use for temperature control gear
  vertical: "Synthesis and Flow Chemistry", // change if you group it elsewhere
  principal: "PolyScience",
  logo: PolyscienceLogo,
  products: [
    {
      name: "chillers-coolers",
      slug: "chillers-coolers",
      models: [
        {
          name: "Benchtop Chillers",
          slug: "benchtop-chillers",
          image: ImgBenchtopGroup,
          keywords:["recirculating chiller", "laboratory chiller", "process cooling system", "benchtop chiller","immersion cooler", "rapid cooling system", "low temperature bath","custom temperature control", "application specific cooling"]
        },
        {
          name: "Durachill Portable Chillers",
          slug: "durachill-portable-chillers",
          image: ImgDurachill,
           keywords:["recirculating chiller", "laboratory chiller", "process cooling system", "benchtop chiller","immersion cooler", "rapid cooling system", "low temperature bath","custom temperature control", "application specific cooling"]
        },
      ],
    },
    {
      name: "water-baths",
      slug: "water-baths",
      models: [
        {
          name: "Digital General Purpose Water Baths",
          slug: "digital-general-purpose-water-baths",
          image: ImgGPWB,
          keywords:["laboratory water bath", "digital water bath", "constant temperature bath","heat transfer fluid", "temperature bath accessories"]
        },
        {
          name: "Viscosity Baths",
          slug: "viscosity-baths",
          image: ImgViscosity,
          keywords:["laboratory water bath", "digital water bath", "constant temperature bath","heat transfer fluid", "temperature bath accessories"]
        },
      ],
    },
    {
      name: "circulating-baths",
      slug: "circulating-baths",
      models: [
        {
          name: "Refrigerated/Heated Circulating Baths",
          slug: "refrigerated-heated-circulating-baths",
          image: ImgRCCategory,
          keywords:["circulating water bath", "heated circulator", "laboratory temperature control", "constant temperature bath"]
        },
        {
          name: "Heated Circulating Baths",
          slug: "heated-circulating-baths",
          image: ImgHeatedCategory,
          keywords:["circulating water bath", "heated circulator", "laboratory temperature control", "constant temperature bath","heat transfer fluid", "temperature bath accessories"]
        },
      ],
    },
  ],
};

export { Polyscience };
