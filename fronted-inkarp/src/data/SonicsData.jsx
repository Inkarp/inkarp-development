import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link, useNavigate } from "react-router-dom";
import Luzchem from '/src/assets/PrincipalLogos/RowThree/Luzchem.png';
import vcx750 from '/images/products/Sonics/750VCX.png';
import vcx500 from '/images/products/Sonics/500VCX.png';
import vcx1500 from '/images/products/Sonics/VCX1500.jpg';
import vcx2500 from '/images/products/Sonics/VCX2500.jpg';
import automizer from '/images/products/Sonics/atomizer.png';
export const SonicsData = {
  'laboratory-scale-models-volumn-0-2ml-1l': {
    models: [
      {
        name: "VCX-750",
        slug: "vcx-750",
        image: vcx500,
      },
      {
        name: "VCX-500",
        slug: "vcx-500",
        image: vcx500,
      },
      {
        name: "VC-505",
        slug: "vc-505",
        image: vcx500,
      },
    ],
    meta: {
      title:
        "Sonics Ultrasonic Liquid Processors (VCX-500, VCX-750, VC-505) | Inkarp India",
      description:
        "Sonics ultrasonic processors (VCX-500, VCX-750, and VC-505) are high-performance liquid processors designed for applications in emulsification, cell disruption, dispersion, homogenization, and nanoparticle processing. With programmable microprocessor control and advanced safety features, these ultrasonic processors deliver consistent and reliable performance. Distributed and serviced in India by Inkarp.",
      keywords: [
        "Sonics VCX-500",
        "Sonics VCX-750",
        "Sonics VC-505",
        "Ultrasonic liquid processor",
        "Sonics ultrasonic homogenizer",
        "Nanoparticle processing India",
        "Cell disruption ultrasonic system",
        "Emulsification ultrasonic processor",
        "Sonics distributor India",
        "Sonics service provider India"
      ],
      altText:
        "Sonics Ultrasonic Liquid Processors – VCX-500, VCX-750, VC-505 for laboratory-scale applications",
      internalLinks: ["Sonics product pages", "Service & Spares"],
      externalLinks: ["Sonics & Materials Official Website"],
    },
  },
  'laboratory-scale-models-volumn-0-2ml-0-5ml': {
    models: [
      {
        name: "VCX-130",
        slug: "vcx-130",
        image: vcx500,
      },
      {
        name: "VCX-130PB",
        slug: "vcx-130pb",
        image: vcx500,
      },
      {
        name: "VC-50",
        slug: "vc-50",
        image: vcx500,
      },
    ],
    meta: {
      title:
        "Sonics Ultrasonic Liquid Processors (VCX-500, VCX-750, VC-505) | Inkarp India",
      description:
        "Sonics ultrasonic processors (VCX-500, VCX-750, and VC-505) are high-performance liquid processors designed for applications in emulsification, cell disruption, dispersion, homogenization, and nanoparticle processing. With programmable microprocessor control and advanced safety features, these ultrasonic processors deliver consistent and reliable performance. Distributed and serviced in India by Inkarp.",
      keywords: [
        "Sonics VCX-500",
        "Sonics VCX-750",
        "Sonics VC-505",
        "Ultrasonic liquid processor",
        "Sonics ultrasonic homogenizer",
        "Nanoparticle processing India",
        "Cell disruption ultrasonic system",
        "Emulsification ultrasonic processor",
        "Sonics distributor India",
        "Sonics service provider India"
      ],
      altText:
        "Sonics Ultrasonic Liquid Processors – VCX-500, VCX-750, VC-505 for laboratory-scale applications",
      internalLinks: ["Sonics product pages", "Service & Spares"],
      externalLinks: ["Sonics & Materials Official Website"],
    },
  },
  'production-scale-models-volumn-10l-50l': {
    models: [
      {
        name: "VCX-1500",
        slug: "vcx-1500",
        image: vcx500,
      },
      {
        name: "VCX-2500",
        slug: "vcx-2500",
        image: vcx500,
      },

    ],
    meta: {
      title:
        "Sonics Ultrasonic Liquid Processors (VCX-500, VCX-750, VC-505) | Inkarp India",
      description:
        "Sonics ultrasonic processors (VCX-500, VCX-750, and VC-505) are high-performance liquid processors designed for applications in emulsification, cell disruption, dispersion, homogenization, and nanoparticle processing. With programmable microprocessor control and advanced safety features, these ultrasonic processors deliver consistent and reliable performance. Distributed and serviced in India by Inkarp.",
      keywords: [
        "Sonics VCX-500",
        "Sonics VCX-750",
        "Sonics VC-505",
        "Ultrasonic liquid processor",
        "Sonics ultrasonic homogenizer",
        "Nanoparticle processing India",
        "Cell disruption ultrasonic system",
        "Emulsification ultrasonic processor",
        "Sonics distributor India",
        "Sonics service provider India"
      ],
      altText:
        "Sonics Ultrasonic Liquid Processors – VCX-500, VCX-750, VC-505 for laboratory-scale applications",
      internalLinks: ["Sonics product pages", "Service & Spares"],
      externalLinks: ["Sonics & Materials Official Website"],
    },
  },

  'accessories': {
    models: [
      {
        name: "VCX-1500",
        slug: "vcx-1500",
        image: vcx1500,
      },
      {
        name: "VCX-2500",
        slug: "vcx-2500",
        image: vcx2500,
      },

    ],
    meta: {
      title:
        "Sonics Ultrasonic Liquid Processors (VCX-500, VCX-750, VC-505) | Inkarp India",
      description:
        "Sonics ultrasonic processors (VCX-500, VCX-750, and VC-505) are high-performance liquid processors designed for applications in emulsification, cell disruption, dispersion, homogenization, and nanoparticle processing. With programmable microprocessor control and advanced safety features, these ultrasonic processors deliver consistent and reliable performance. Distributed and serviced in India by Inkarp.",
      keywords: [
        "Sonics VCX-500",
        "Sonics VCX-750",
        "Sonics VC-505",
        "Ultrasonic liquid processor",
        "Sonics ultrasonic homogenizer",
        "Nanoparticle processing India",
        "Cell disruption ultrasonic system",
        "Emulsification ultrasonic processor",
        "Sonics distributor India",
        "Sonics service provider India"
      ],
      altText:
        "Sonics Ultrasonic Liquid Processors – VCX-500, VCX-750, VC-505 for laboratory-scale applications",
      internalLinks: ["Sonics product pages", "Service & Spares"],
      externalLinks: ["Sonics & Materials Official Website"],
    },
  },

  'atomizer': {
    models: [
      {
        name: "VCX 134ATA",
        slug: "vcx-134ata",
        image: automizer,
      },


    ],
    meta: {
      title:
        "Sonics Ultrasonic Liquid Processors (VCX-500, VCX-750, VC-505) | Inkarp India",
      description:
        "Sonics ultrasonic processors (VCX-500, VCX-750, and VC-505) are high-performance liquid processors designed for applications in emulsification, cell disruption, dispersion, homogenization, and nanoparticle processing. With programmable microprocessor control and advanced safety features, these ultrasonic processors deliver consistent and reliable performance. Distributed and serviced in India by Inkarp.",
      keywords: [
        "Sonics VCX-500",
        "Sonics VCX-750",
        "Sonics VC-505",
        "Ultrasonic liquid processor",
        "Sonics ultrasonic homogenizer",
        "Nanoparticle processing India",
        "Cell disruption ultrasonic system",
        "Emulsification ultrasonic processor",
        "Sonics distributor India",
        "Sonics service provider India"
      ],
      altText:
        "Sonics Ultrasonic Liquid Processors – VCX-500, VCX-750, VC-505 for laboratory-scale applications",
      internalLinks: ["Sonics product pages", "Service & Spares"],
      externalLinks: ["Sonics & Materials Official Website"],
    },
  },

};
