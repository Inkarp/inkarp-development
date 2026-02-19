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


// Optional logo
// import GLILogo from "/src/assets/PrincipalLogos/RowOne/gli.png";

const GLI = {
  vertical: "General Laboratory Instrument",
  principal: "",
  // logo: GLILogo,
  products: [
    {
      name: "Ultrasonic Baths",
      slug: "ultrasonic-baths",
      models: [
        { name: "SONOREX DIGITEC DT", slug: "sonorex-digitec-dt", image: ImgSonorexDigitEC_DT },
        { name: "SONOREX SUPER RK", slug: "sonorex-super-rk", image: ImgSonorexSuperRK },
        { name: "SONOREX DIGIPLUS DL", slug: "sonorex-digiplus-dl", image: ImgSonorexDigiplusDL },
      ],
    },
    {
      name: "Ultrasonic Cleaner",
      slug: "ultrasonic-cleaner",
      models: [
        { name: "Ultrasonic Cleaner", slug: "ultrasonic-cleaner", image: ImgUltrasonicCleaner },
      ],
    },
    {
      name: "Ultrasonic Bath",
      slug: "ultrasonic-bath",
      models: [
        { name: "Ultrasonic Bath", slug: "ultrasonic-bath", image: ImgUltrasonicBath },
      ],
    },
    {
      name: "Biosafety Cabinets",
      slug: "bio-saftey-cabinet",
      models: [
        { name: "Biosafety Cabinet-01/02IIA2", slug: "biosafety-cabinet-01-02iia2", image: ImgBiosafety01_02IIA2 },
        { name: "Biosafety Cabinet-04IIB2", slug: "biosafety-cabinet-04iib2", image: ImgBiosafety04IIB2 },
      ],
    },
    {
      name: "Arium mini",
      slug: "arium-mini-plus",
      models: [
        { name: "Arium mini plus", slug: "arium-mini", image: ImgAriumMini },
      ],
    },
    {
      name: "Arium pro",
      slug: "arium-pro",
      models: [
        { name: "Arium pro", slug: "arium-pro", image: ImgAriumPro },
      ],
    },
    {
      name: "Arium comfort",
      slug: "arium-comfort",
      models: [
        { name: "Arium comfort-I", slug: "arium-comfort-i", image: ImgAriumComfortI },
        { name: "Arium comfort-II", slug: "arium-comfort-ii", image: ImgAriumComfortII },
      ],
    },
    {
      name: "Arium advance",
      slug: "arium-advance",
      models: [
        { name: "Arium advance - EDI", slug: "arium-advance-edi", image: ImgAriumAdvanceEDI },
        { name: "Arium advance - RO", slug: "arium-advance-ro", image: ImgAriumAdvanceRO },
      ],
    },
    {
      name: "Freeze Dryers",
      slug: "lyovapours",
      models: [
        { name: "Freeze Dryer – Lyovapor™ L-200", slug: "lyovapor-l-200", image: ImgLyovaporL200 },
        { name: "Freeze Dryer – Lyovapor™ L-250", slug: "lyovapor-l-250", image: ImgLyovaporL250 },
        { name: "Freeze Dryer Lyovapor™ L-300", slug: "lyovapor-l-300", image: ImgLyovaporL300 },
      ],
    },
    {
      name: "Kjel Line",
      slug: "kjel-line",
      models: [
        { name: "Kjel Line", slug: "kjel-line", image: ImgKjelMasterK375 },
      ],
    },
  ],
};

export { GLI };
