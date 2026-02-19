// ---------- LOGOS ----------
import Maccor from "/src/assets/PrincipalLogos/RowTwo/Maccor.jpg";
import HohsenCorp from "/src/assets/PrincipalLogos/RowTwo/header.png";
import LabStation from "/src/assets/PrincipalLogos/RowTwo/labstation.svg";

// ---------- Hohsen Corp (public/images/products/HoshenCorp) ----------
import AutomaticCoinCellCrimper from "/images/products/HoshenCorp/automatic-coin-cell-crimper.png";
import ManualCoinCellCrimper from "/images/products/HoshenCorp/manual-coin-cell-crimper.png";
import MixingMachine from "/images/products/HoshenCorp/mixing-machine.png";

// ---------- Labstation ----------
import LabstationIGlovebox from "/images/products/Labstation/labstation-i-glovebox-and-accessories.jpg";
import LabstationISizeConfig from "/images/products/Labstation/labstation-i-size-configuration.jpg";
import LabstationISPS from "/images/products/Labstation/labstation-i-sps.jpeg";

// ---------- Maccor ----------
import Model4200 from "/images/products/Maccor/Model4200.png";
import Model4300 from "/images/products/Maccor/Model4300.png";
import Model4304 from "/images/products/Maccor/Model4304.png";
import Model4400 from "/images/products/Maccor/Model4400.png";
import Series4000 from "/images/products/Maccor/Series4000.png";
import Series4600 from "/images/products/Maccor/Series4600.png";


// ======================================================================
//               ⭐ UNIFIED BATTERY DATA (SAME FORMAT AS OTHERS)
// ======================================================================

export const Battery = {
  vertical: "material science and battery",
  principal: "Maccor | Hohsen Corp | Labstation",
  logo: null,

  products: [
    // ---------------------------------------------------------
    //                   HOHSEN CORP
    // ---------------------------------------------------------
    {
      name: "battery-equipment",
      slug: "battery-equipment",
      models: [
        { name: "Automatic Coin Cell Crimper", slug: "automatic-coin-cell-crimper", image: AutomaticCoinCellCrimper },
        { name: "Manual Coin Cell Crimper", slug: "manual-coin-cell-crimper", image: ManualCoinCellCrimper },
        { name: "Mixing Machine", slug: "mixing-machine", image: MixingMachine }
      ]
    },

    // ---------------------------------------------------------
    //                   MACCOR – BATTERY TEST SYSTEMS
    // ---------------------------------------------------------
    {
      name: "battery-test-systems",
      slug: "battery-test-systems",
      models: [
        { name: "Series 4000", slug: "series-4000", image: Series4000 },
        { name: "Series 4600", slug: "series-4600", image: Series4600 },
        { name: "Model 4200", slug: "model-4200", image: Model4200 },
        { name: "Model 4300", slug: "model-4300", image: Model4300 },
        { name: "Model 4304", slug: "model-4304", image: Model4304 },
        { name: "Model 4400", slug: "model-4400", image: Model4400 }
      ]
    },

    // ---------------------------------------------------------
    //                   LABSTATION – GLOVEBOXES
    // ---------------------------------------------------------
    {
      name: "glovebox-workstations",
      slug: "glovebox-workstations",
      models: [
        { name: "Labstation I Glovebox & Analyzer", slug: "labstation-glovebox-analyzer", image: LabstationIGlovebox },
        { name: "Labstation Size Configurations", slug: "labstation-size-configuration", image: LabstationISizeConfig }
      ]
    },

    // ---------------------------------------------------------
    //                   LABSTATION – SOLVENT PURIFIERS
    // ---------------------------------------------------------
    {
      name: "solvent-purifiers",
      slug: "solvent-purifiers",
      models: [
        { name: "Labstation SPS", slug: "labstation-sps", image: LabstationISPS }
      ]
    }
  ]
};
