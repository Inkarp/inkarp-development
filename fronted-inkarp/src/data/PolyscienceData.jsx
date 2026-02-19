// src/data/PolyScience.js
import Polyscience from "/src/assets/PrincipalLogos/RowOne/Polyscience.png";

// Product images (public/)
import ImgBenchtopGroup from "/images/products/PolyScience/Benchtop_Group.jpg";
import ImgDurachill from "/images/products/PolyScience/chiller-cover-render4-low-res.png";
import ImgGPWB from "/images/products/PolyScience/GPWB_Category.png";
import ImgViscosity from "/images/products/PolyScience/Viscosity_MX.png";
import ImgRCCategory from "/images/products/PolyScience/RC_Category.png";
import ImgHeatedCategory from "/images/products/PolyScience/Heated_Category.png";


export const PolyscienceData = {
  "chillers-coolers": {
    models: [
      // { heading: "Chillers & Coolers" },
      {
        name: "Benchtop Chillers",
        slug: "benchtop-chillers",
        image: ImgBenchtopGroup,
      },
      {
        name: "Durachill Portable Chillers",
        slug: "durachill-portable-chillers",
        image: ImgDurachill,
      },
    ],
  
    meta: {
      title: "PolyScience Chillers & Coolers | Inkarp India",
      description:
        "PolyScience benchtop and Durachill portable chillers for precise temperature control. Distributed & serviced by Inkarp India.",
      keywords: [
        "PolyScience chillers",
        "benchtop chillers",
        "Durachill portable chiller",
        "laboratory chillers",
        "Inkarp India",
      ],
      altText: "PolyScience Chillers & Coolers",
      internalLinks: ["water-baths", "circulating-baths"],
      externalLinks: ["https://www.polyscience.com/"],
    },
    logo: Polyscience,
  },

  "water-baths": {
    models: [
      // { heading: "Water Baths" },
      {
        name: "Digital General Purpose Water Baths",
        slug: "digital-general-purpose-water-baths",
        image: ImgGPWB,
      },
      {
        name: "Viscosity Baths",
        slug: "viscosity-baths",
        image: ImgViscosity,
      },
    ],
    pageData: {
      
    },
    meta: {
      title: "PolyScience Water Baths | Inkarp India",
      description:
        "Digital general purpose and viscosity water baths from PolyScience for dependable temperature control.",
      keywords: [
        "PolyScience water bath",
        "general purpose water bath",
        "viscosity bath",
        "laboratory baths",
        "Inkarp India",
      ],
      altText: "PolyScience Water Baths",
      internalLinks: ["chillers-and-coolers", "circulating-baths"],
      externalLinks: ["https://www.polyscience.com/"],
    },
    logo: Polyscience,
  },

  "circulating-baths": {
    models: [
      // { heading: "Circulating Baths" },
      {
        name: "Refrigerated/Heated Circulating Baths",
        slug: "refrigerated-heated-circulating-baths",
        image: ImgRCCategory,
      },
      {
        name: "Heated Circulating Baths",
        slug: "heated-circulating-baths",
        image: ImgHeatedCategory,
      },
    ],
  
    meta: {
      title: "PolyScience Circulating Baths | Inkarp India",
      description:
        "PolyScience refrigerated/heated and heated circulating baths for precise temperature control across applications.",
      keywords: [
        "circulating bath",
        "refrigerated circulating bath",
        "heated circulating bath",
        "PolyScience",
        "Inkarp India",
      ],
      altText: "PolyScience Circulating Baths",
      internalLinks: ["chillers-and-coolers", "water-baths"],
      externalLinks: ["https://www.polyscience.com/"],
    },
    logo: Polyscience,
  },
};

