import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link, useNavigate } from "react-router-dom";
import Luzchem from '/src/assets/PrincipalLogos/RowThree/Luzchem.png';
import Blixer2 from "/images/products/Robotcoupe/Blixer-2.webp";
import Ledblue from '/images/products/Luzchem/LEDiblue.webp'
import WPI1 from '/images/products/Luzchem/WPIBlue.webp'
import LFPImg from "/images/products/Luzchem/LaserFlash.webp";
import Xenon from "/images/products/Luzchem/XenonIlluminator.webp"
import SolarSimulator from '/images/products/Luzchem/SolarSimulator.png'
import LzcPhotoReactor from '/images/products/Luzchem/LzcPhotoreactor.webp'
import LEDPhotoReactor from '/images/products/Luzchem/LEDPhotoreactor.webp'
import ICHPhotoReactor from '/images/products/Luzchem/ICHPhotoreactor.webp'
import CCPhotoreactor from '/images/products/Luzchem/ComputerControlledPR.webp'
import XenonPR from '/images/products/Luzchem/XenonPR.webp'
import ExtraPR from '/images/products/Luzchem/ExtraPR.png'
export const RobotcoupeData = {
  'blixer': {
    models: [

      {
        name: "Blixer",
        slug: "blixer",
        image: Blixer2,
      },

      //     name: "Blixer® 3",
      //     slug: "blixer-3",
      //     image: Blixer3,

    ],
    meta: {
      title:
        "Robot Coupe Blixer® Food Processors – Authorized Distributor & Service Provider in India | Inkarp",
      description:
        "Discover Robot Coupe Blixer® models (2, 3, 4-1V, 4-2V, 4 V.V., 5-1V) for texture-modified diets and fine emulsions. Inkarp supplies, installs, and services Blixer® machines across India for hospitals, central kitchens, and R&D.",
      keywords: [
        "Robot Coupe Blixer",
        "Blixer 2",
        "Blixer 3",
        "Blixer 4 1V",
        "Blixer 4 2V",
        "Blixer 4 VV",
        "Blixer 5 1V",
        "Texture modified diet processor",
        "Emulsifying food processor India",
        "Robot Coupe distributor India",
        "Robot Coupe service provider India",
        "Commercial food processor for hospitals",
      ],
      altText: "Robot Coupe Blixer® range – commercial emulsifying food processors",
      internalLinks: ["Robot Coupe product pages", "Service & Spares"],
      externalLinks: ["Robot Coupe Official Website"],
    },
  },

  'led-illuminator': {
    models: [
      {
        name: "LED Illuminator",
        slug: "led-illuminator",
        image: Ledblue,
      },
    ],
    meta: {
      title:
        "LED Microscope Illuminator – High-Intensity, Long-Life & Cool Light Source | Inkarp India",
      description:
        "Compact LED illuminator for microscopes with high intensity, low heat, and long lifetime. Dimmable output, silent operation, and options for white, blue (≈470 nm), green (≈530 nm), red (≈625 nm), and UV (365/395 nm). Compatible with stereo and compound microscopes. Inkarp supplies, installs, and services across India.",
      keywords: [
        "LED microscope illuminator",
        "microscope lighting India",
        "blue LED illuminator 470 nm",
        "UV LED illuminator 365 nm",
        "white LED cold light source",
        "dimmable microscope light",
        "fiber-coupled illuminator",
        "epi-fluorescence LED light",
        "long-life microscope LED",
        "Inkarp service and support",
      ],
      altText:
        "LED microscope illuminator with adjustable intensity and cool, uniform lighting",
      internalLinks: ["Microscopy Products", "Service & Spares", "Contact Inkarp"],
      externalLinks: ["Manufacturer Website"],
    },
  },

  "well-plate-illuminator": {
    models: [
      {
        name: "Well Plate Illuminator (WPI)",
        slug: "well-plate-illuminator",
        image: WPI1,
      },
    ],
    meta: {
      title:
        "Luzchem Well Plate Illuminator (WPI) – LED Reactor for 24-Well Plates & Vials | Inkarp India",
      description:
        "Luzchem’s Well Plate Illuminator (WPI) is a benchtop LED photoreactor designed for use with 24-well plates or vials. Available wavelengths include 400 nm, Cool White 4000K, Blue, Green, Broad Green (Lime GR2), Amber, Red, and 720 nm (Deep Red). Each well has a dedicated LED with focusing optics and sub-wells to reduce cross exposure, with low thermal transfer to the sample. Supplied, installed, and serviced across India by Inkarp.",
      keywords: [
        "Well Plate Illuminator",
        "Luzchem WPI",
        "24 well plate LED reactor",
        "photochemistry reactor India",
        "multi-wavelength LED irradiation",
        "benchtop LED photoreactor",
        "reduced cross exposure wells",
        "sample irradiation system",
        "Luzchem distributor India",
        "Inkarp service and support",
      ],
      altText:
        "Luzchem Well Plate Illuminator (WPI) with multi-wavelength LED array for 24-well plates and vials",
      internalLinks: ["Microscopy & Photochemistry", "Service & Spares", "Contact Inkarp"],
      externalLinks: ["Luzchem Official Website"],
    },
  },

  "laser-flash-photolysis": {
    models: [
      {
        name: "Laser Flash Photolysis (LFP-412)",
        slug: "laser-flash-photolysis",
        image: LFPImg,
      },
    ],
    meta: {
      title:
        "Laser Flash Photolysis (LFP-412) – Luzchem Patented Miniaturized System | Inkarp India",
      description:
        "The Luzchem LFP-412 is a patented turn-key miniaturized laser flash photolysis system that simplifies time-resolved kinetic and spectroscopic measurements. Compact, computer-controlled, and designed without bulky optical benches, it enables transient absorption and diffuse reflectance studies with ease. Distributed, installed, and serviced in India by Inkarp.",
      keywords: [
        "Laser flash photolysis",
        "LFP-412 Luzchem",
        "time resolved spectroscopy India",
        "transient absorption spectroscopy",
        "diffuse reflectance measurement",
        "miniaturized photolysis system",
        "turnkey laser flash photolysis",
        "Luzchem distributor India",
        "photochemistry research equipment",
        "Inkarp service and support",
      ],
      altText:
        "Luzchem LFP-412 Laser Flash Photolysis system for time-resolved spectroscopy",
      internalLinks: ["Photochemistry Products", "Service & Spares", "Contact Inkarp"],
      externalLinks: ["Luzchem Official Website"],
    },
  },

  "xenon-illuminator": {
    models: [
      {
        name: "Xenon",
        slug: "xenon-illuminator",
        image: Xenon,
      },
    ],
    meta: {
      title:
        "Laser Flash Photolysis (LFP-412) – Luzchem Patented Miniaturized System | Inkarp India",
      description:
        "The Luzchem LFP-412 is a patented turn-key miniaturized laser flash photolysis system that simplifies time-resolved kinetic and spectroscopic measurements. Compact, computer-controlled, and designed without bulky optical benches, it enables transient absorption and diffuse reflectance studies with ease. Distributed, installed, and serviced in India by Inkarp.",
      keywords: [
        "Laser flash photolysis",
        "LFP-412 Luzchem",
        "time resolved spectroscopy India",
        "transient absorption spectroscopy",
        "diffuse reflectance measurement",
        "miniaturized photolysis system",
        "turnkey laser flash photolysis",
        "Luzchem distributor India",
        "photochemistry research equipment",
        "Inkarp service and support",
      ],
      altText:
        "Luzchem LFP-412 Laser Flash Photolysis system for time-resolved spectroscopy",
      internalLinks: ["Photochemistry Products", "Service & Spares", "Contact Inkarp"],
      externalLinks: ["Luzchem Official Website"],
    },
  },

  "solar-simulators-300-800nm": {
    models: [
      {
        name: "solar-simulators-300-800nm",
        slug: "solar-simulators-300-800nm",
        image: SolarSimulator,
      },
    ],
    meta: {
      title:
        "Luzchem Solar Simulators (300–800 nm) – SolSim2 & CCP-SolSim | Inkarp India",
      description:
        "Luzchem Solar Simulators provide UVA & visible solar-spectrum matching from ~300–800 nm. Choose SolSim2 (manual, ozone-free lamp) or CCP-SolSim (computer-controlled) for photostability, materials research, and solar-matching studies. Distributed, installed, and serviced in India by Inkarp.",
      keywords: [
        "Luzchem Solar Simulator",
        "SolSim2",
        "CCP-SolSim",
        "300–800 nm",
        "UVA visible simulator",
        "photostability testing",
        "ICH Q1B option 2",
        "materials photochemistry",
        "xenon solar simulator",
        "Inkarp India distributor"
      ],
      altText:
        "Luzchem solar simulator matching UVA/visible spectrum (300–800 nm)",
      internalLinks: ["Photochemistry Products", "Service & Spares", "Contact Inkarp"],
      externalLinks: ["Luzchem Official Website"],
    },
  },

  "extra-large-photoreactor-with-heating-capabilities": {
    models: [
      {
        name: "Extra Large Photoreactor with heating capabilities",
        slug: "extra-large-photoreactor",
        image: ExtraPR,
      },
    ],
    meta: {
      title:
        "Luzchem Extra Large Photoreactor with Heating (LPD) – UV & Thermal Cycles | Inkarp India",
      description:
        "The Luzchem Extra Large Photoreactor (LPD) supports sequential or concurrent UV and thermal processing in one chamber. Features a UV-safe viewing window (420 nm cut-off), magnetic interlock, programmable exposure time, and a carousel for uniform irradiation. Compatible with LZC fluorescent and LED lamps. Distributed, installed & serviced in India by Inkarp.",
      keywords: [
        "Extra large photoreactor",
        "Luzchem LPD",
        "UV photoreactor with heating",
        "dual photothermal cycles",
        "UV-safe viewing window",
        "magnetic interlock",
        "programmable exposure",
        "sample carousel",
        "LZC fluorescent LED lamps",
        "Inkarp India distributor"
      ],
      altText:
        "Luzchem extra-large photoreactor chamber with heating and UV-protected viewing window",
      internalLinks: ["Photochemistry Products", "Service & Spares", "Contact Inkarp"],
      externalLinks: ["Luzchem Official Website"],
    },
  },

  "photo-reactors-and-exposure-tools": {
    models: [
      {
        name: "Photoreactors and Exposure Tools",
        slug: "photoreactor-and-exposure-tools",
        image: LzcPhotoReactor,
      },
      // {
      //   name: "LZC Photoreactor",
      //   slug: "lzc-photoreactor",
      //   image: LzcPhotoReactor,
      // },
      // {
      //   name: "LED Photoreactor",
      //   slug: "led-photoreactor",
      //   image: LEDPhotoReactor,
      // },
      // {
      //   name: "ICH Photoreactor",
      //   slug: "ich-photoreactor",
      //   image: ICHPhotoReactor,
      // },
      // {
      //   name: "Computer Controlled Photoreactors",
      //   slug: "computer-controlled-photoreactors",
      //   image: CCPhotoreactor,
      // },
      // {
      //   name: "Xenon Photoreactor",
      //   slug: "xenon-photoreactor",
      //   image: XenonPR,
      // },
    ],
    meta: {
      title:
        "Luzchem Photoreactors & Exposure Tools – Fluorescent, LED & Xenon | Inkarp India",
      description:
        "Luzchem’s portfolio includes top/side irradiation chambers and bench systems with fluorescent UV-Visible (and LED), narrow-band LED, and xenon broadband sources. Air-cooled designs, safety accessories, optional USB computer control, and ICH-compliant options. Distributed & serviced in India by Inkarp.",
      keywords: [
        "Luzchem photoreactor",
        "UV-Visible photoreactor",
        "LED photoreactor",
        "xenon exposure system",
        "top irradiation",
        "side irradiation",
        "Rayonet compatible RPR-100 RPR-200 RMR-600",
        "computer controlled irradiation",
        "ICH compliance",
        "Inkarp India distributor"
      ],
      altText:
        "Range of Luzchem photoreactors and exposure tools with fluorescent, LED and xenon illumination",
      internalLinks: ["Photochemistry Products", "Service & Spares", "Contact Inkarp"],
      externalLinks: ["Luzchem Official Website"],
    },
  },

};
