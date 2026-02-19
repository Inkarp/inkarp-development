// ---------- Images for Ultrasonics ----------
import ImgUltrasonicBath from "/images/products/inkarp/ultrasonic-bath.png";
import ImgUltrasonicCleaner from "/images/products/inkarp/ultrasonic-cleaner.png";
import ImgSonorexSuperRK from "/images/products/Bandalin/produkte-sonorexrk.jpg";
import ImgSonorexDigiplusDL from "/images/products/Bandalin/sammel-sonorex-digiplus-bandelin.jpg";
import ImgSonorexDigitEC_DT from "/images/products/Bandalin/sonorex-dt-digitec-group-bandelin-electronic-berlin.jpg";

// ---------- Biosafety ----------
import ImgBiosafety01_02IIA2 from "/images/products/Airtech/biosafety-cabinet-01-02iia2.jpg";
import ImgBiosafety04IIB2 from "/images/products/Airtech/biosafety-cabinet-04iib2.jpg";

// ---------- Sartorius Arium ----------
import ImgAriumMini from "/images/products/Sotorius/arium-mini.png";
import ImgAriumPro from "/images/products/Sotorius/arium-pro.png";
import ImgAriumComfortI from "/images/products/Sotorius/arium-comfort-I.png";
import ImgAriumComfortII from "/images/products/Sotorius/arium-comfort-II.png";
import ImgAriumAdvanceEDI from "/images/products/Sotorius/arium-advance-ed.png";
import ImgAriumAdvanceRO from "/images/products/Sotorius/arium-advance-ro.png";

// ---------- Buchi ----------
import ImgLyovaporL200 from "/images/products/Buchi/L-200-pro.webp";
import ImgLyovaporL250 from "/images/products/Buchi/L-250.webp";
import ImgLyovaporL300 from "/images/products/Buchi/L-300.webp";
import ImgKjelMasterK375 from "/images/products/Buchi/K-375.webp";

// ---------- Innova ----------
import ImgIceFLaker from "/images/products/Innova/stainless-steel-shell-ice-maker.jpg";
import ImgGlasswareWasher from "/images/products/Innova/glassware-washer.jpg";
import ImgFloorStandGlasswareWasher from "/images/products/Innova/floor-stand-glassware-washer.jpg";
import ImgBenchTopGlasswareWasher from "/images/products/Innova/heavy-duty-glassware-washer.jpg";


import ImgLyoMicron from "/images/products/Daralyo/LyoMicron.jpg";
import ImgLyoEpic from "/images/products/Daralyo/LyoEpic.jpg";
import ImgTriEpic from "/images/products/Daralyo/TriEpic.jpg";
import ImgLyoLabMini from "/images/products/Daralyo/LyoLabMini.webp";
import ImgLyoLab from "/images/products/Daralyo/LyoLab.jpg";
import ImgLyoLabPlus from "/images/products/Daralyo/LyoLabPlus.jpg";


export const gli = {
  vertical: "General Laboratory Instrument",
  principal: "Bandelin, Airtech, Sartorius, Buchi, Innova, Daralyo",

  products: [-
    {
      name: "ultrasonic-baths",
      slug: "ultrasonic-baths",
      models: [
        { name: "SONOREX DIGITEC DT", slug: "sonorex-digitec-dt", image: ImgSonorexDigitEC_DT },
        { name: "SONOREX SUPER RK", slug: "sonorex-super-rk", image: ImgSonorexSuperRK },
        { name: "SONOREX DIGIPLUS DL", slug: "sonorex-digiplus-dl", image: ImgSonorexDigiplusDL }
      ]
    },
  {
    name: "ultrasonic-cleaner",
    slug: "ultrasonic-cleaner",
    models: [
      { name: "Ultrasonic Cleaner", slug: "ultrasonic-cleaner", image: ImgUltrasonicCleaner }
    ]
  },

  {
    name: "ultrasonic-bath",
    slug: "ultrasonic-bath",
    models: [
      { name: "Ultrasonic Bath", slug: "ultrasonic-bath", image: ImgUltrasonicBath }
    ]
  },

  {
    name: "biosafety-cabinets",
    slug: "biosafety-cabinets",
    models: [
      { name: "Biosafety Cabinet 01/02IIA2", slug: "biosafety-cabinet-01-02iia2", image: ImgBiosafety01_02IIA2 },
      { name: "Biosafety Cabinet 04IIB2", slug: "biosafety-cabinet-04iib2", image: ImgBiosafety04IIB2 }
    ]
  },

  {
    name: "arium-mini",
    slug: "arium-mini",
    models: [
      { name: "Arium mini plus", slug: "arium-mini-plus", image: ImgAriumMini }
    ]
  },

  {
    name: "arium-pro",
    slug: "arium-pro",
    models: [
      { name: "Arium pro", slug: "arium-pro", image: ImgAriumPro }
    ]
  },

  {
    name: "arium-comfort",
    slug: "arium-comfort",
    models: [
      { name: "Arium comfort-I", slug: "arium-comfort-i", image: ImgAriumComfortI },
      { name: "Arium comfort-II", slug: "arium-comfort-ii", image: ImgAriumComfortII }
    ]
  },


  {
    name: "arium-advance",
    slug: "arium-advance",
    models: [
      { name: "Arium advance – EDI", slug: "arium-advance-edi", image: ImgAriumAdvanceEDI },
      { name: "Arium advance – RO", slug: "arium-advance-ro", image: ImgAriumAdvanceRO }
    ]
  },

  {
    name: "freeze-dryers",
    slug: "freeze-dryers",
    models: [
      { name: "Freeze Dryer Lyovapor™ L-200", slug: "lyovapor-l-200", image: ImgLyovaporL200 },
      { name: "Freeze Dryer Lyovapor™ L-250", slug: "lyovapor-l-250", image: ImgLyovaporL250 },
      { name: "Freeze Dryer Lyovapor™ L-300", slug: "lyovapor-l-300", image: ImgLyovaporL300 }
    ]
  },

  {
    name: "kjel-line",
    slug: "kjel-line",
    models: [
      { name: "Kjel Line – K-375", slug: "kjel-line", image: ImgKjelMasterK375 }
    ]
  },

  {
    name: "ice-flaker",
    slug: "ice-flaker",
    models: [
      { name: "Stainless Steel Ice Flaker", slug: "ice-flaker", image: ImgIceFLaker }
    ]
  },

  {
    name: "glassware-washers",
    slug: "glassware-washers",
    models: [
      { name: "Heavy Duty Glassware Washer", slug: "heavy-duty-glassware-washer", image: ImgGlasswareWasher },
      { name: "Floor Stand Glassware Washer", slug: "floor-stand-glassware-washer", image: ImgFloorStandGlasswareWasher },
      { name: "Bench Top Glassware Washer", slug: "bench-top-glassware-washer", image: ImgBenchTopGlasswareWasher }
    ]
  },

  {
    name: "laboratory-freeze-dryers-and-pilot", slug: "laboratory-freeze-dryers-and-pilot",
    models: [
      {
        name: "LyoMicron",
        slug: "lyo-micron",
        image: ImgLyoMicron,
        keywords: [
          "Daralyo, LyoMicron Distributor And Service Provider In India", "LyoMicron laboratory freeze dryer", "laboratory freeze dryers India", "lyophilizer distributor India", "freeze dryer supplier India", " LyoMicron freeze drying system", "laboratory lyophilization equipment India", "LyoMicron service support India", "pilot scale freeze dryer India", "laboratory freeze dryer with accessories"

        ],
      },
      {
        name: "LyoEpic",
        slug: "lyo-epic",
        image: ImgLyoEpic,
        keywords: [
          "Daralyo,LyoEpic Distributor And Service Provider In India, LyoEpic laboratory freeze dryer, LyoEpic pilot freeze dryer, pilot scale freeze dryer India, laboratory lyophilizer India, freeze dryer for pharma R&D India, LyoEpic freeze drying system, pilot lyophilization equipment India, LyoEpic service support India, laboratory and pilot freeze dryer supplier India"

        ],
      },

      {
        name: "TriEpic",
        slug: "tri-epic",
        image: ImgTriEpic,
        keywords: [
          "Daralyo,TriEpic Distributor And Service Provider In India, TriEpic laboratory freeze dryer, TriEpic pilot freeze dryer, infinite freeze drying system India, dual condenser freeze dryer India, pilot scale lyophilizer India, laboratory freeze dryer for multiple users, TriEpic freeze drying equipment, continuous freeze dryer India, high capacity laboratory freeze dryer India"
        ],
      },

      {
        name: "LyoLab Mini",
        slug: "lyo-lab-mini",
        image: ImgLyoLabMini,
        keywords: [
          "Daralyo,LyoLab Mini Pilot Freeze Dryers Distributor and Service Provider in India, LyoLab Mini freeze dryer India, pilot freeze dryer distributor India, laboratory lyophilizer supplier India, compact freeze dryer for scale up India, Dara-Lyo LyoLab Mini India distributor, -85°C condenser freeze dryer India, small batch freeze drying system India, lyophilization equipment for pharma India, freeze dryer with SCADA software India, pilot lyophilizer for R&D India, freeze dryer installation and service India, freeze dryer for biotech labs India, vial stoppering freeze dryer India, cleanroom freeze dryer integration India"
        ],
      },

      {
        name: "LyoLab",
        slug: "lyo-lab",
        image: ImgLyoLab,
        keywords: [
          "Daralyo,LyoLab Pilot Freeze Dryers Distributor and Service Provider in India, LyoLab pilot freeze dryer India, pilot lyophilizer for scale up India, freeze dryer for recipe development India, pilot scale lyophilization equipment India, freeze dryer with FDA 21 CFR Part 11 software India, Dara-Lyo LyoLab India distributor, pilot freeze dryer for pharma R&D India, freeze dryer for CRO CDMO India, -85°C condenser pilot freeze dryer India, freeze dryer with data logging India, pilot freeze dryer installation and service India"
        ],
      },

      {
        name: "LyoLab+",
        slug: "lyo-lab+",
        image: ImgLyoLabPlus,
        keywords: [
          "Daralyo,LyoLab+ Pilot Freeze Dryers Distributor And Service Provider In India, LyoLab plus pilot freeze dryer India, pilot lyophilizer for vials and bulk India, high capacity pilot freeze dryer India,freeze dryer for scale up India, non aseptic pilot lyophilization India, Dara-Lyo LyoLab+ India distributor, pilot freeze dryer with SCADA India, -85°C condenser pilot freeze dryer India, pilot freeze dryer installation and service India, freeze dryer for CRO CDMO India, freeze dryer for pharma pilot batches India"
        ],
      },
    ],
  },

  ]
};
