import Thermofisher from "/src/assets/PrincipalLogos/RowFive/thermofisher.png";

// Thermo Fisher Rheometers & Viscometers
import FallingBallViscometer from "/images/products/Thermofisher/falling-ball-viscometers.jpg";
import OnlineRheometers from "/images/products/Thermofisher/online-rheometers.jpg";
import RotationalRheometers from "/images/products/Thermofisher/rotational-rheometers.jpg";
import RotationalViscometers from "/images/products/Thermofisher/rotational-viscometers.jpg";

// Hitachi Thermal Analysis
import DataInputAndOutputOptionalSoftware from "/images/products/Hitachi/data-input-and-output-optional-software.jpg";
import DifferentialScanningCalorimeter from "/images/products/Hitachi/differential-scanning-calorimeter-dsc-nexta-dsc-series.jpg";
import RealViewSampleObservationUnit from "/images/products/Hitachi/real-view-sample-observation-unit.jpg";
import SimultaneousThermogravimetricAnalyzer from "/images/products/Hitachi/simultaneous-thermogravimetric-analyzer-nexta-sta-series.jpg";
import SoftwareForNexta from "/images/products/Hitachi/software-for-nexta.jpg";
import ThermomechanicalAnalyzer from "/images/products/Hitachi/thermomechanical-analyzer-tma7000-series.jpg";
import UVIrradiationUnit from "/images/products/Hitachi/uv-irradiation-unit-pdc-8.jpg";


// ======================================================================
//                ⭐ FINAL RHEOLOGY COMPONENT (BRUKER FORMAT)
// ======================================================================

export const Rheology = {
  vertical: "Rheology and thermal analysis",
  principal: "Thermo Fisher / Hitachi",
  logo: Thermofisher,

  products: [
    // ---------------------------------------------------------
    //        Thermo Fisher — Rheometers & Viscometers
    // ---------------------------------------------------------
    {
      name: "rheometers-and-viscometers",
      slug: "rheometers-and-viscometers",
      models: [
        { name: "Online Rheometers", slug: "online-rheometers", image: OnlineRheometers },
        { name: "Rotational Rheometers", slug: "rotational-rheometers", image: RotationalRheometers },
        { name: "Falling Ball Viscometer", slug: "falling-ball-viscometer", image: FallingBallViscometer },
        { name: "Rotational Viscometers", slug: "rotational-viscometers", image: RotationalViscometers },
      ],
    },

    // ---------------------------------------------------------
    //                  Hitachi — Thermal Analysis
    // ---------------------------------------------------------
    {
      name: "thermal-analysis",
      slug: "thermal-analysis",
      models: [
        {
          name: "Differential Scanning Calorimeter — NEXTA DSC Series",
          slug: "nexta-dsc-series",
          image: DifferentialScanningCalorimeter,
        },
        {
          name: "Simultaneous Thermogravimetric Analyzer — NEXTA STA Series",
          slug: "nexta-sta-series",
          image: SimultaneousThermogravimetricAnalyzer,
        },
        {
          name: "Thermomechanical Analyzer — TMA7000 Series",
          slug: "tma7000-series",
          image: ThermomechanicalAnalyzer,
        },
        {
          name: "Software for NEXTA",
          slug: "software-for-nexta",
          image: SoftwareForNexta,
        },
        {
          name: "UV Irradiation Unit — PDC-8",
          slug: "uv-irradiation-unit-pdc-8",
          image: UVIrradiationUnit,
        },
        {
          name: "Real View Sample Observation Unit",
          slug: "real-view-sample-observation-unit",
          image: RealViewSampleObservationUnit,
        },
        {
          name: "Data Input & Output — Optional Software",
          slug: "data-input-and-output-optional-software",
          image: DataInputAndOutputOptionalSoftware,
        },
      ],
    },
  ],
};
