import ImgUltrasonicBath from "/images/products/inkarp/ultrasonic-bath.png";
import ImgUltrasonicCleaner from "/images/products/inkarp/ultrasonic-cleaner.png";
import ImgSonorexSuperRK from "/images/products/Bandalin/produkte-sonorexrk.jpg";
import ImgSonorexDigiplusDL from "/images/products/Bandalin/sammel-sonorex-digiplus-bandelin.jpg";
import ImgSonorexDigitEC_DT from "/images/products/Bandalin/sonorex-dt-digitec-group-bandelin-electronic-berlin.jpg";
import ImgBiosafety01_02IIA2 from "/images/products/Airtech/biosafety-cabinet-01-02iia2.jpg";
import ImgBiosafety04IIB2 from "/images/products/Airtech/biosafety-cabinet-04iib2.jpg";

// --- Sartorius Arium images (as per /public/images/products/Sotorius) ---
import ImgAriumMini from "/images/products/Sotorius/arium-mini.png";
import ImgAriumPro from "/images/products/Sotorius/arium-pro.png";
import ImgAriumComfortI from "/images/products/Sotorius/arium-comfort-I.png";
import ImgAriumComfortII from "/images/products/Sotorius/arium-comfort-II.png"; // file name uses "ll"
import ImgAriumAdvanceEDI from "/images/products/Sotorius/arium-advance-ed.png";
import ImgAriumAdvanceRO from "/images/products/Sotorius/arium-advance-ro.png";

// --- BÜCHI images (as per /public/images/products/Buchi) ---
import ImgLyovaporL200 from "/images/products/Buchi/L-200-pro.webp";
import ImgLyovaporL250 from "/images/products/Buchi/L-250.webp";
import ImgLyovaporL300 from "/images/products/Buchi/L-300.webp";
import ImgKjelMasterK375 from "/images/products/Buchi/K-375.webp";

import ImgIceFLaker from "/images/products/Innova/stainless-steel-shell-ice-maker.jpg";
import ImgGlasswareWasher from "/images/products/Innova/glassware-washer.jpg";
import ImgFloorStandGlasswareWasher from "/images/products/Innova/floor-stand-glassware-washer.jpg";
import ImgBenchTopGlasswareWasher  from "/images/products/Innova/heavy-duty-glassware-washer.jpg";



export const GLIData = {
  "ultrasonic-baths": {
    models: [
      { heading: "Ultrasonic Baths" },
      {
        name: "SONOREX DIGITEC DT",
        slug: "sonorex-digitec-dt",
        image: ImgSonorexDigitEC_DT,
      },
      {
        name: "SONOREX SUPER RK",
        slug: "sonorex-super-rk",
        image: ImgSonorexSuperRK,
      },
      {
        name: "SONOREX DIGIPLUS DL",
        slug: "sonorex-digiplus-dl",
        image: ImgSonorexDigiplusDL,
      },
    ],
    meta: {
      title: "Bandelin SONOREX Ultrasonic Baths – DT, RK, DL | Inkarp India",
      description:
        "Explore Bandelin SONOREX Ultrasonic Baths: DIGITEC DT for precise digital control, SUPER RK for robust analog operation, and DIGIPLUS DL for advanced workflows. Distributed and serviced by Inkarp across India.",
      keywords: [
        "Bandelin ultrasonic bath",
        "SONOREX DT",
        "SONOREX RK",
        "SONOREX DL",
        "Ultrasonic cleaner India",
        "Laboratory ultrasonic bath",
        "Inkarp Bandelin"
      ],
      altText: "Bandelin SONOREX Ultrasonic Baths (DT, RK, DL)",
      internalLinks: ["ultrasonic-baths"],
      externalLinks: ["https://www.bandelin.com/"],
    },
  },

  "ultrasonic-cleaner": {
    models: [
      { heading: "Ultrasonic Systems" },
      {
        name: "Ultrasonic Cleaner",
        slug: "ultrasonic-cleaner",
        image: ImgUltrasonicCleaner,
      },

    ],
    meta: {
      title: "Inkarp Ultrasonic Cleaner & Bath | Inkarp India",
      description:
        "Inkarp Ultrasonic Cleaner and Ultrasonic Bath provide powerful, reliable ultrasonic technology for laboratory and industrial cleaning applications. Distributed and serviced by Inkarp in India.",
      keywords: [
        "Inkarp ultrasonic cleaner",
        "Inkarp ultrasonic bath",
        "Ultrasonic systems",
        "Laboratory ultrasonic cleaner",
        "Ultrasonic cleaning bath",
        "Inkarp India"
      ],
      altText: "Inkarp Ultrasonic Cleaner and Ultrasonic Bath",
      internalLinks: ["inkarp-ultrasonics"],
      externalLinks: ["https://www.inkarp.co.in/"], // adjust if you have a dedicated ultrasonic page
    },
  },

  "ultrasonic-bath": {
    models: [
      { heading: "Ultrasonic Systems" },

      {
        name: "Ultrasonic Bath",
        slug: "ultrasonic-bath",
        image: ImgUltrasonicBath,
      },
    ],
    meta: {
      title: "Inkarp Ultrasonic Cleaner & Bath | Inkarp India",
      description:
        "Inkarp Ultrasonic Cleaner and Ultrasonic Bath provide powerful, reliable ultrasonic technology for laboratory and industrial cleaning applications. Distributed and serviced by Inkarp in India.",
      keywords: [
        "Inkarp ultrasonic cleaner",
        "Inkarp ultrasonic bath",
        "Ultrasonic systems",
        "Laboratory ultrasonic cleaner",
        "Ultrasonic cleaning bath",
        "Inkarp India"
      ],
      altText: "Inkarp Ultrasonic Cleaner and Ultrasonic Bath",
      internalLinks: ["inkarp-ultrasonics"],
      externalLinks: ["https://www.inkarp.co.in/"], // adjust if you have a dedicated ultrasonic page
    },
  },

  "bio-saftey-cabinet": {
    models: [
      { heading: "Biosafety Cabinets" },
      {
        name: "Biosafety Cabinet-01/02IIA2",
        slug: "biosafety-cabinet-01-02iia2",
        image: ImgBiosafety01_02IIA2,
      },
      {
        name: "Biosafety Cabinet-04IIB2",
        slug: "biosafety-cabinet-04iib2",
        image: ImgBiosafety04IIB2,
      },
    ],
    meta: {
      title: "Airtech Biosafety Cabinets – IIA2 & IIB2 | Inkarp India",
      description:
        "Airtech Biosafety Cabinets distributed and serviced by Inkarp in India. Explore models 01/02IIA2 and 04IIB2, offering safe and reliable protection for laboratory and clinical environments.",
      keywords: [
        "Airtech biosafety cabinet",
        "Biosafety Cabinet IIA2",
        "Biosafety Cabinet IIB2",
        "Inkarp Airtech",
        "Laboratory biosafety cabinet",
        "Cleanroom safety cabinets"
      ],
      altText: "Airtech Biosafety Cabinets",
      internalLinks: ["biosafety-cabinets"],
      externalLinks: ["https://www.airtech.com.sg/"],
    },
  },

  "arium-mini-plus": {
    models: [
      { heading: "Arium mini" },
      { name: "Arium mini plus", slug: "arium-mini", image: ImgAriumMini }
    ],
    meta: {
      title: "Sartorius Arium mini – Lab Water System | Inkarp India",
      description:
        "Arium mini by Sartorius for on-demand ultrapure water in compact labs. Distributed and serviced by Inkarp across India.",
      keywords: [
        "Sartorius Arium mini",
        "ultrapure water system",
        "lab water purifier",
        "Inkarp India"
      ],
      altText: "Sartorius Arium mini laboratory water system",
      internalLinks: ["arium-mini"],
      externalLinks: ["https://www.sartorius.com/"]
    }
  },

  "arium-pro": {
    models: [
      { heading: "Arium pro" },
      { name: "Arium pro", slug: "arium-pro", image: ImgAriumPro }
    ],
    meta: {
      title: "Sartorius Arium pro – Ultrapure Water System | Inkarp India",
      description:
        "Arium pro delivers consistent Type 1 ultrapure water for analytical workflows. Authorized distribution and service by Inkarp in India.",
      keywords: [
        "Sartorius Arium pro",
        "Type 1 water",
        "ultrapure water",
        "Inkarp India"
      ],
      altText: "Sartorius Arium pro ultrapure water system",
      internalLinks: ["arium-pro"],
      externalLinks: ["https://www.sartorius.com/"]
    }
  },

  "arium-comfort": {
    models: [
      { heading: "Arium comfort" },
      { name: "Arium comfort-I", slug: "arium-comfort-i", image: ImgAriumComfortI },
      { name: "Arium comfort-II", slug: "arium-comfort-ii", image: ImgAriumComfortII }
    ],
    meta: {
      title: "Sartorius Arium comfort-I / comfort-II | Inkarp India",
      description:
        "Arium comfort systems for reliable purified/ultrapure water supply in labs. Models I and II available via Inkarp with pan-India service.",
      keywords: [
        "Arium comfort",
        "Arium comfort-I",
        "Arium comfort-II",
        "laboratory water system",
        "Inkarp India"
      ],
      altText: "Sartorius Arium comfort-I and comfort-II systems",
      internalLinks: ["arium-comfort"],
      externalLinks: ["https://www.sartorius.com/"]
    }
  },

  "arium-advance": {
    models: [
      { heading: "Arium advance" },
      { name: "Arium advance - EDI", slug: "arium-advance-edi", image: ImgAriumAdvanceEDI },
      { name: "Arium advance - RO", slug: "arium-advance-ro", image: ImgAriumAdvanceRO }
    ],
    meta: {
      title: "Sartorius Arium advance – EDI & RO Systems | Inkarp India",
      description:
        "Arium advance water systems in EDI and RO variants for robust pre-treatment and purified water supply. Distributed and serviced by Inkarp.",
      keywords: [
        "Arium advance EDI",
        "Arium advance RO",
        "Sartorius water system",
        "Inkarp India"
      ],
      altText: "Sartorius Arium advance EDI and RO systems",
      internalLinks: ["arium-advance"],
      externalLinks: ["https://www.sartorius.com/"]
    }
  },

  "lyovapours": {
    models: [
      { heading: "Freeze Dryers" },
      {
        name: "Freeze Dryer – Lyovapor™ L-200",
        slug: "lyovapor-l-200",
        image: ImgLyovaporL200,
      },
      {
        name: "Freeze Dryer – Lyovapor™ L-250",
        slug: "lyovapor-l-250",
        image: ImgLyovaporL250,
      },
      {
        name: "Freeze Dryer Lyovapor™ L-300",
        slug: "lyovapor-l-300",
        image: ImgLyovaporL300,
      },
    ],
    meta: {
      title: "BÜCHI Lyovapor™ Freeze Dryers – L-200 / L-250 / L-300 | Inkarp India",
      description:
        "BÜCHI Lyovapor™ L-200, L-250 and L-300 freeze dryers for reliable, automated lyophilization with smart controls and robust performance. Distributed and serviced by Inkarp across India.",
      keywords: [
        "Buchi Lyovapor",
        "freeze dryer",
        "lyophilizer",
        "L-200",
        "L-250",
        "L-300",
        "Inkarp India"
      ],
      altText: "BÜCHI Lyovapor Freeze Dryers (L-200, L-250, L-300)",
      internalLinks: ["freeze-dryers"],
      externalLinks: ["https://www.buchi.com/"]
    }
  },

  "kjel-line": {
    models: [
      { heading: "Kjel Line" },
      {
        name: "Kjel Line",
        slug: "kjel-line",
        image: ImgKjelMasterK375,
      }
    ],
    meta: {
      title: "BÜCHI KjelMaster K-375 & Kjel-Sampler K-376 / K-377 | Inkarp India",
      description:
        "BÜCHI KjelMaster K-375 with Kjel-Sampler K-376/377 for fully automated Kjeldahl nitrogen and protein analysis: precise, fast, and compliant. Distributed and serviced by Inkarp in India.",
      keywords: [
        "Buchi KjelMaster",
        "K-375",
        "Kjel-Sampler K-376",
        "Kjel-Sampler K-377",
        "Kjeldahl analyzer",
        "protein nitrogen analysis",
        "Inkarp India"
      ],
      altText: "BÜCHI KjelMaster K-375 with Kjel-Sampler K-376 / K-377",
      internalLinks: ["kjelmaster"],
      externalLinks: ["https://www.buchi.com/"]
    }
  },

   "ice-flaker": {
    models: [
     
      {
        name: "Stainless steel shell Ice Flaker",
        slug: "ice-flaker",
        image: ImgIceFLaker,
      }
    ],
    meta: {
      title: "BÜCHI KjelMaster K-375 & Kjel-Sampler K-376 / K-377 | Inkarp India",
      description:
        "BÜCHI KjelMaster K-375 with Kjel-Sampler K-376/377 for fully automated Kjeldahl nitrogen and protein analysis: precise, fast, and compliant. Distributed and serviced by Inkarp in India.",
      keywords: [
        "Buchi KjelMaster",
        "K-375",
        "Kjel-Sampler K-376",
        "Kjel-Sampler K-377",
        "Kjeldahl analyzer",
        "protein nitrogen analysis",
        "Inkarp India"
      ],
      altText: "BÜCHI KjelMaster K-375 with Kjel-Sampler K-376 / K-377",
      internalLinks: ["kjelmaster"],
      externalLinks: ["https://www.buchi.com/"]
    }
  },

  "glassware-washer": {
    models: [
     
      {
        name: "Heavy Duty Glassware Washer",
        slug: "heavy-duty-glassware-washer",
        image: ImgGlasswareWasher,
      },
      {
        name: "Floor Stand Glassware Washer",
        slug: "floor-stand-glassware-washer",
        image: ImgFloorStandGlasswareWasher,
      },
      {
        name: "Bench Top Glassware Washer",
        slug: "bench-top-glassware-washer",
        image: ImgBenchTopGlasswareWasher,
      }
    ],
    meta: {
      title: "Glassware Washer Distributor & Service Provider In India - Innova - Inkarp Instruments Pvt Ltd",
      description:
        "Discover the advanced Glassware Washer from Innova by Inkarp Instruments Pvt Ltd. Efficiently clean your glassware with our top-rated solutions, backed by extensive distribution and service networks across India.",
      keywords: [
        "Glassware Washer Innova",
      ],
      
    }
  },
};
