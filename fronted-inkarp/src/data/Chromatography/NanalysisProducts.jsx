import React, { useState } from "react";
import Nanalysis from '/src/assets/PrincipalLogos/RowOne/nanalysis.png';


import MixingMachine from "/images/products/HoshenCorp/mixing-machine.png";

import Img100Pro from "/images/products/Nanalysis/100mhz-powerful-benchtop-nmr.png";
import Img100e from "/images/products/Nanalysis/100MHz-proton-benchtop-nmr.png";

// --- 60 MHz Benchtop NMR ---
import Img60Pro from "/images/products/Nanalysis/60mhz-powerful-benchtop-nmr.jpeg";
import Img60e from "/images/products/Nanalysis/60MHz-proton-benchtop-nmr.jpeg";

// --- Accessories ---
import ImgAutoSample from "/images/products/Nanalysis/auto-sample-60.jpg";
import ImgNMReadyFlow from "/images/products/Nanalysis/nmready-flow.jpeg";

// --- Software Packages ---
import ImgConnect from "/images/products/Nanalysis/connect-diagram.png";
import ImgExperimentDesigner from "/images/products/Nanalysis/ED-software-img1.jpg";
import ImgRemoteAccess from "/images/products/Nanalysis/Remote-access-benchtopNMR-SC1.jpg";

import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";
import Banner3 from "/images/products/Banner/Banner3.jpg";

export const NanalysisProducts = {
  "100pro-multinuclear": {
    id: "100pro-multinuclear",
    name: "100Pro – Multinuclear 100 MHz Benchtop NMR",
    image: Img100Pro,
    logo: Nanalysis,
    bannerImg: Banner3,
    altText: "Nanalysis",
    videoId: "",
    meta: {
      title: "100Pro – Multinuclear 100 MHz Benchtop NMR | Nanalysis Distributor in India | Inkarp",
      description:
        "Explore the 100Pro – Multinuclear 100 MHz Benchtop NMR by Nanalysis, ideal for advanced research, teaching, and industrial applications. Inkarp Instruments is the official distributor and service provider in India offering full technical support, installation, and maintenance services.",
      keywords: [
        "100Pro Benchtop NMR",
        "Multinuclear NMR Spectrometer",
        "100 MHz NMR India",
        "Nanalysis NMR Distributor India",
        "Benchtop NMR for Research",
        "1H 13C 31P 19F NMR",
        "Inkarp Instruments NMR",
        "Compact NMR India",
        "High-resolution Benchtop NMR"
      ],
      altText: "100Pro Multinuclear NMR",
      internalLinks: ["benchtop-nmr-products", "nanalysis-nmr-solutions"],
      externalLinks: ["https://www.nanalysis.com/"]
    },
    description: `
  <div class="flex justify-center items-center text-[18px]">
    <!-- Left: Logo + Details -->
    <div class="">
      <div class="text-gray-700 space-y-4 text-[18px] font-[Roboto]">
        <p>Discover the versatility of Nanalysis' 100Pro - Multinuclear 100 MHz Benchtop NMR, distributed and serviced by Inkarp Instruments. Ideal for research, education, and industrial applications, the 100Pro provides accurate and reliable results. Inkarp Instruments ensures premium support, including installation, training, and after-sales service, to meet your NMR needs in India. Unlock the full potential of benchtop NMR with Nanalysis' innovative technology and Inkarp's dedicated support.
        </p>
        <p>
          The powerful 100PRO (download a brochure) is based on the world’s strongest compact NMR magnet platform – 2.35T (corresponding to 100 MHz for the proton NMR channel!).
        </p>
        <p>
          Multi-channel 100 MHz benchtop NMR spectrometer engineered for simple and fast acquisition of high-performance 1D and 2D NMR data.
          Inquire about nuclei options in addition to standard 1H/13C, 1H/31P, and 1H/19F configurations.
        </p>
        <ul class="list-disc list-inside space-y-2">
          <li><strong>Unparalleled resolution</strong> – improved chemical shift dispersion</li>
          <li><strong>Superior sensitivity </strong> – run samples at sub milli-molar concentrations</li>
          <li><strong>Ergonomic display</strong> – large, maneuverable, user-friendly external touchscreen computer</li>
          <li><strong>Unmatched stability</strong> – e.g., vibrational feet, extra thermal regulation</li>
        </ul>
      </div>
    </div>
  </div>
`,
    features: [
      { overview: "", },
      { name: "Kinetics package capabilities for reaction monitoring", },
      { name: "Signal suppression", },
      { name: "Experiment designer to allow you to write your pulse programs", },
      { name: "Applications Programmatic Interface (API) for developing your own applications: see NMReady-CONNECT", },
      { name: "Remote control of instrument from computer, smartphone, tablet, etc.", },
      { name: "Deuterium lock", },
      { name: "Secure login and user profiles with custom project settings", },
      { name: "IQ/OQ/PQ Protocols", },

    ],

  },

  "100e-single-nuclei": {
    id: "100e-single-nuclei",
    name: "100e – Single Nuclei 100 MHz Benchtop NMR",
    image: Img100e,
    logo: Nanalysis,
    bannerImg: Banner3,
    altText: "Nanalysis",
    videoId: "",
    meta: {
      title: "100e – Single Nuclei 100 MHz Benchtop NMR | Nanalysis Distributor in India | Inkarp",
      description:
        "Explore the 100e – Single Nuclei 100 MHz Benchtop NMR by Nanalysis, designed for fast, accurate 1H NMR screening in academic and industrial labs. Distributed and supported across India by Inkarp Instruments.",
      keywords: [
        "100e Benchtop NMR",
        "Single Nuclei NMR Spectrometer",
        "100 MHz NMR India",
        "1H NMR Spectrometer",
        "Compact NMR for research",
        "Nanalysis India Distributor",
        "Benchtop NMR Supplier India",
        "Routine NMR Screening",
        "Inkarp NMR Sales Support"
      ],
      altText: "100e Benchtop NMR Spectrometer",
      internalLinks: ["benchtop-nmr-products", "nanalysis-100e-specs"],
      externalLinks: ["https://www.nanalysis.com/"]
    },
    description: `
    <div class="flex justify-center items-start">
      <!-- Left: Logo + Details -->
      <div class="space-y-6">
        <div class="text-gray-700 space-y-4 text-[18px] font-[Roboto]">
          <p>
            The powerful 100e (download a brochure) is based on the world’s strongest compact NMR magnet platform – 2.35T (corresponding to 100 MHz for the proton NMR channel!).
          </p>
          <p>
            Single-channel 100 MHz benchtop NMR spectrometer engineered for high-performance routine screening of 1H NMR spectra.
          </p>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Unparalleled resolution</strong> – improved chemical shift dispersion</li>
            <li><strong>Superior sensitivity</strong> – run samples at sub milli-molar concentrations</li>
            <li><strong>Ergonomic display</strong> – large, maneuverable, user-friendly external touchscreen computer</li>
            <li><strong>Unmatched stability</strong> – e.g., vibrational feet, extra thermal regulation</li>
          </ul>
        </div>
      </div>
    </div>
  `,
    features: [{ overview: "", },
    { name: "Kinetics package capabilities for reaction monitoring", },
    { name: "Signal suppression", },
    { name: "Experiment designer to allow you to write your pulse programs", },
    { name: "Applications Programmatic Interface (API) for developing your own applications: see NMReady-CONNECT", },
    { name: "Remote control of instrument from computer, smartphone, tablet, etc.", },
    { name: "Deuterium lock", },
    { name: "Secure login and user profiles with custom project settings", },
    { name: "IQ/OQ/PQ Protocols", },

    ]
  },

  "60pro-multinuclear": {
    id: "60pro-multinuclear",
    name: "60Pro – Multinuclear 60 MHz Benchtop NMR",
    image: Img60Pro,
    logo: Nanalysis,
    bannerImg: Banner3,
    altText: "Nanalysis",
    videoId: "",
    meta: {
      title: "60Pro – Multinuclear 60 MHz Benchtop NMR | Nanalysis Distributor in India | Inkarp",
      description:
        "Discover the 60Pro – Multinuclear 60 MHz Benchtop NMR from Nanalysis, designed for high-performance multinuclear spectral acquisition. Distributed and supported in India by Inkarp Instruments.",
      keywords: [
        "60Pro Benchtop NMR",
        "Multinuclear 60 MHz NMR India",
        "Compact NMR India",
        "Nanalysis 60 MHz Distributor",
        "1H 13C 31P 19F NMR India",
        "NMR Spectrometer India",
        "Benchtop NMR Inkarp",
        "60 MHz NMR spectrometer",
        "NMR for education and research"
      ],
      altText: "60Pro Nanalysis Benchtop NMR",
      internalLinks: ["benchtop-nmr-products", "nanalysis-60pro-specs"],
      externalLinks: ["https://www.nanalysis.com/"]
    },
    description: `
    <div class="flex justify-center items-start">
      <!-- Description and Highlights -->
      <div class="space-y-6">
        <div class="text-gray-700 space-y-4 text-[18px] font-[Roboto]">
          <p>
            The Nanalysis 60PRO is the next generation of compact 60 MHz NMR spectrometers from Nanalysis (download brochure). This dual-channel spectrometer was designed to improve workflow for customers that require:
          </p>
          <p> Discover the power of benchtop NMR with
           Nanalysis'
            60Pro - Multinuclear 60 MHz Benchtop NMR, distributed and serviced by Inkarp Instruments. Ideal for research, education, and industrial applications, the 60Pro provides accurate and reliable results. Inkarp Instruments ensures premium support, including installation, training, and after-sales service, to meet your NMR needs in India.
          </p>
          <ul class="list-disc list-inside space-y-2">
            <li>High performance, multinuclear spectral acquisition</li>
            <li>Advanced features and experiments</li>
            <li>Market-leading compact size and weight</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  `,
    features: [{ overview: "", },
    { name: "Kinetics package capabilities for reaction monitoring", },
    { name: "Signal suppression", },
    { name: "Experiment designer to allow you to write your pulse programs", },
    { name: "Applications Programmatic Interface (API) for developing your own applications: see NMReady-CONNECT", },
    { name: "Remote control of instrument from computer, smartphone, tablet, etc.", },
    { name: "Deuterium lock", },
    { name: "Secure login and user profiles with custom project settings", },
    { name: "IQ/OQ/PQ Protocols", },
    ],
    techSpecs: {
      specs: {
        "Operating Frequency": "60 MHz (1.40 T)",
        "Magnet": "Permanent, no cryogens",
        "User Interface": "Built-in Touchscreen or Windows, Mac or Linux compatible",
        "Nuclei": "Dual-tuned: e.g., 1H/19F/13C, 1H/19F/31P",
        "Lock": "Internal 1H and 2H options",
        "Sample": "Standard 5 mm NMR tubes or flow options",
        "File Compatibility": "JCAMP-DX and CSV",
        "Software": "Mnova, ACD/Labs, Delta, TopSpin, MATLAB, SPINit, NMRfx, etc.",
        "Monitoring Software": "LabVIEW (NMReadyCONNECT API), Mestrelab MNova SMA",
        "Resolution": "LW(50%) < 1.0 Hz (<0.017 ppm)",
        "Sensitivity (SNR)": "100:1 (1% Ethylbenzene, 1 scan)",
        "Stray Field": "2 Gauss line contained within enclosure",
        "Operating Temperature": "18–26°C",
        "Power": "100–240 VAC, 50–60 Hz",
        "Dimensions": "30 x 28 x 49 cm (11.8\" x 11.0\" x 19.2\")",
        "Weight": "26.3 kg (58 lbs)",
        "Networking": "Ethernet, Wi-Fi",
        "Note": "Specifications subject to change without notice."
      },

    }

  },

  "60e-single-nuclei": {
    id: "60e-single-nuclei",
    name: "60e – Single Nuclei 60 MHz Benchtop NMR",
    image: Img60e,
    logo: Nanalysis,
    bannerImg: Banner3,
    altText: "Nanalysis",
    videoId: "",
    meta: {
      title: "60e – Single Nuclei 60 MHz Benchtop NMR | Nanalysis Distributor in India | Inkarp",
      description:
        "Explore the 60e – Single Nuclei 60 MHz Benchtop NMR from Nanalysis, designed for routine 1D & 2D NMR experiments with superior resolution. Distributed and supported across India by Inkarp Instruments.",
      keywords: [
        "60e Benchtop NMR",
        "Single Nuclei NMR Spectrometer",
        "1H NMR Benchtop India",
        "Compact NMR Spectrometer",
        "Nanalysis NMR Distributor India",
        "Affordable NMR spectrometer",
        "Inkarp NMR sales support",
        "Routine NMR analysis",
        "High resolution benchtop NMR"
      ],
      altText: "60e Benchtop NMR",
      internalLinks: ["benchtop-nmr-products", "nanalysis-60e-specs"],
      externalLinks: ["https://www.nanalysis.com/"]
    },
    description: `
    <div class="flex justify-center items-center items-start">
      <!-- Description and Highlights -->
      <div class="space-y-6">
        <div class="text-gray-700 space-y-4 text-[18px] font-[Roboto]">
          <p>
            Nanalysis 60 MHz benchtop NMR spectrometer (download brochure) is a market-leading compact, single-channel NMR spectrometer. 
            As Nanalysis’ flagship compact NMR spectrometer, the Nanalysis 60e is a cost-effective tool for customers that require:
          </p>
          <ul class="list-disc list-inside space-y-2">
            <li>Superior resolution and sensitivity</li>
            <li>Easy acquisition of 1D & 2D NMR experiments</li>
            <li>Market-leading compact size and weight</li>
          </ul>
        </div>
      </div>
    </div>
  `,
    features: [{ overview: "", },
    { name: "Kinetics package capabilities for reaction monitoring", },
    { name: "Signal suppression", },
    { name: "Experiment designer to allow you to write your pulse programs", },
    { name: "Applications Programmatic Interface (API) for developing your own applications: see NMReady-CONNECT", },
    { name: "Remote control of instrument from computer, smartphone, tablet, etc.", },
    { name: "Deuterium lock", },
    { name: "Secure login and user profiles with custom project settings", },
    { name: "IQ/OQ/PQ Protocols", },
    ],
    techSpecs: {
      specs: {
        "Operating Frequency": "60 MHz (1.40 T)",
        "Magnet": "Permanent, no cryogens",
        "User Interface": "Built-in Touchscreen or Windows, Mac or Linux compatible",
        "Nuclei": "<sup>1</sup>H",
        "Lock": "Internal <sup>1</sup>H and <sup>2</sup>H options",
        "Sample": "Standard 5mm NMR tubes or flow options",
        "Output File Compatibility": "JCAMP-DX and CSV, Mestrelab MNova, Bruker TopSpin, ACD/Labs, JEOL Delta, Spinworks, SPINit, NMRFx (see more details)",
        "Monitoring Software Compatibility": "LabVIEW (NMReadyCONNECT API), Mestrelab MNova SMA",
        "Resolution": "LW(50%) < 1.0 Hz (<0.0017 ppm)",
        "Sensitivity (SNR)": "100:1 (1% EtBz single scan)",
        "Stray Field": "2 Gauss line contained within enclosure",
        "Operating Temperature": "18–26°C",
        "Power": "100–240 VAC, 50–60 Hz",
        "Dimensions": "11.8\" x 11.0\" x 19.2\" (30 x 28 x 49 cm)",
        "Weight": "58 lbs (26.3 kg)",
        "Networking": "Ethernet, Wi-Fi"
      },

    }

  },

  "autosample-60": {
    id: "autosample-60",
    name: "AUTOsample-60 Accessories",
    image: ImgAutoSample,
    logo: Nanalysis,
    bannerImg: Banner3,
    altText: "Nanalysis",
    videoId: "",
    meta: {
      title: "AUTOsample-60 Accessories for Nanalysis Benchtop NMR | Inkarp India Distributor",
      description:
        "Boost your NMR lab's efficiency with AUTOsample-60 Accessories for 60 MHz NMR. Inkarp Instruments provides full support, service, and installation across India.",
      keywords: [
        "AUTOsample-60 Accessories",
        "Nanalysis NMR Autosampler",
        "Benchtop NMR automation",
        "AUTOsample 60 distributor India",
        "NMR autosampler India",
        "Nanalysis benchtop NMR",
        "Inkarp Nanalysis accessories",
        "Automated NMR sampling system",
        "AUTOsample-60 technical specs",
        "60 MHz NMR automation tool"
      ],
      altText: "AUTOsample-60 NMR Autosampler",
      internalLinks: ["nmr-accessories", "benchtop-nmr-products"],
      externalLinks: ["https://www.nanalysis.com/"]
    },
    description: `
    <div class="flex flex-col lg:flex-row gap-8 items-start">
      <!-- Description and Highlights -->
      <div class="space-y-6">
        <div class="text-gray-700 space-y-4 text-[18px] font-[Roboto]">
          <p>
            Streamline your NMR sampling process with Nanalysis' AUTOsample-60 Accessories, distributed and serviced by Inkarp Instruments. Ideal for high-volume NMR laboratories, the AUTOsample-60 Accessories provide convenience and reliability. Inkarp Instruments Pvt Ltd ensures premium support, including installation, training, and after-sales service, to meet your NMR automation needs in India. Enhance your laboratory productivity with Nanalysis' innovative technology and Inkarp's dedicated support.
          </p>
          <p>
            The AUTOsample-60 (download brochure) is a top-mounted autosampler compatible with all Nanalysis 60 MHz benchtop NMR spectrometers.
            It enables seamless switching between autosampler and manual modes without compromising the compact footprint.
            Control of data acquisition and processing is fully integrated into the onboard software.
          </p>
          <ul class="list-disc list-inside space-y-2">
            <li>Maximize efficiency by improving throughput during or after work hours</li>
            <li>Run a series of 1D experiments or set up basic structural elucidation routines (e.g., 1H, COSY, HSQC, DEPT-135, 13C{1H} etc.)</li>
            <li>Acquire and save data automatically</li>
            <li>Integrate NMReady with a centralized lab system</li>
          </ul>
        </div>
      </div>
    </div>
  `,
    techSpecs: {
      specs: {
        "System Requirements": "Nanalysis 60e or 60PRO",
        "Dimensions": "10.3 x 10.3 x 14.2” / 26 x 26 x 36 cm",
        "Weight": "12 lbs / 5.5 kg",
        "Voltage": "24 V",
        "Time per Tube Change": "~10 sec",
        "Carousels": "2"
      },

    }

  },

  "nmready-flow": {
    id: "nmready-flow-",
    name: "NMReady-Flow Accessories",
    image: ImgNMReadyFlow,
    logo: Nanalysis,
    bannerImg: Banner3,
    altText: "Nanalysis",
    videoId: "",
    meta: {
      title: "NMReady-Flow Accessories for Benchtop NMR | Flow Chemistry Integration | Inkarp India",
      description:
        "NMReady-Flow Accessories from Nanalysis enable real-time monitoring in flow chemistry. Inkarp Instruments provides full service, installation, and training across India.",
      keywords: [
        "NMReady-Flow Accessories",
        "Benchtop NMR flow chemistry",
        "Nanalysis Flow NMR India",
        "Online NMR detector",
        "NMR real-time reaction monitoring",
        "NMR flow cell kit distributor India",
        "Flow chemistry detector",
        "NMR inline monitoring",
        "Inkarp Nanalysis accessories",
        "NMR automation India"
      ],
      altText: "NMReady-Flow NMR Flow Cell Accessories",
      internalLinks: ["nmr-accessories", "benchtop-nmr-products"],
      externalLinks: ["https://www.nanalysis.com/"]
    },
    description: `
    <div class="flex flex-col lg:flex-row gap-8 items-start">
        <div class="text-gray-700 space-y-4 text-[18px] font-[Roboto]">
          <p>
            Unlock the full potential of flow chemistry with Nanalysis' NMReady-Flow Accessories, distributed and serviced by Inkarp Instruments. Ideal for research and industrial applications, NMReady-Flow Accessories provide a streamlined flow chemistry experience. Inkarp Instruments Pvt Ltd ensures premium support, including installation, training, and after-sales service, to meet your flow chemistry needs in India. Experience the benefits of Nanalysis' cutting-edge technology and Inkarp's dedicated support.
          </p>
          <p>
            The NMReady-flow NMR flow cell kit (download a brochure) allows easy inter-conversion of any Nanalysis 60e or 60PRO benchtop spectrometer into an NMR online detector either as a stand-alone tool or in conjunction with other analytical techniques. Request a quote for the Nanalysis flow NMR kit.
          </p>
          <ul class="list-disc list-inside space-y-2">
            <li>Understand and optimize chemical reactions in real time</li>
            <li>Improve reaction yield and process safety</li>
            <li>Automate repetitive syntheses in lab or production</li>
            <li>Integrate NMReady into centralized Laboratory Information Systems (LIS)</li>
          </ul>
        </div>
      </div>
    </div>
  `,
    techSpecs: {
      specs: {
        "Configuration": "Bottom-to-top",
        "Material": "Mixed medium glass / PTFE",
        "Internal Diameter": "4.8 mm",
        "Outer Diameter": "5.0 mm",
        "Flow Mode": "Continuous or stopped flow",
        "Flow Rate": "< 4.0 mL per minute"
      },

    }
  },

  "nmready-connect": {
    id: "nmready-connect",
    name: "NMReady-CONNECT Software Packages",
    image: ImgConnect,
    logo: Nanalysis,
    bannerImg: Banner3,
    altText: "Nanalysis",
    videoId: "",
    meta: {
      title: "NMReady-CONNECT Software API for NMR Automation | Nanalysis | Inkarp India",
      description:
        "Programmatically control NMReady NMR spectrometers using the CONNECT software API from Nanalysis. Distributed and supported by Inkarp Instruments in India.",
      keywords: [
        "NMReady-CONNECT software",
        "Nanalysis API software",
        "NMR automation software India",
        "NMR spectrometer control API",
        "Inkarp Nanalysis software",
        "NMR remote monitoring",
        "LabVIEW NMR integration",
        "NMR software packages distributor India",
        "JCAMP-DX data retrieval",
        "Benchtop NMR software India"
      ],
      altText: "NMReady-CONNECT NMR Software",
      internalLinks: ["nmr-software", "nanalysis-products"],
      externalLinks: ["https://www.nanalysis.com/"]
    },
    description: `
<div class="flex flex-col lg:flex-row gap-8 items-start">
  <!-- Description and Highlights -->
  <div class="space-y-6">
    <div class="text-gray-700 space-y-4 text-[18px] font-[Roboto]">
      <p>
        Unlock the full potential of your NMR data with Nanalysis' NMReady-CONNECT Software Packages, distributed and serviced by Inkarp Instruments in India. These innovative software solutions offer Advanced data analysis and processing, Simplified workflow and automation, Enhanced collaboration and data sharing, Customizable to meet your laboratory needs. Experience the benefits of Nanalysis' cutting-edge technology and Inkarp's dedicated support.
      </p>
      <p>
        Customers can now programmatically interact with NMReady spectrometers via an open application programmatic interface (API). There are currently two ways to communicate with a spectrometer: using Microsoft .NET or the JSON data-interchange format.
      </p>
      <p>The NMReady-CONNECT NMR spectrometer API provides the capability to:</p>
      <ul class="list-disc list-inside space-y-2">
        <li>Programmatically set up, launch, and monitor NMR experiments</li>
        <li>Retrieve spectral data in JCAMP-DX format</li>
        <li>Monitor instrument performance and diagnostics</li>
        <li>Automate routine tasks like auto-shimming and maintenance</li>
        <li>Support for LabVIEW, flow systems, QA/QC workflows</li>
      </ul>

      <!-- Technical Specifications -->
      <div class="mt-10">
        <h3 class="text-xl sm:text-2xl s text-[#E63946] mb-4 font-[MaxOT]">TECHNICAL SPECIFICATIONS</h3>
        <p>
          The NMReady-CONNECT NMR spectrometer API provides valuable data about an instrument’s performance and allows the user to setup, launch, and monitor spectroscopy experiments automatically. Results are delivered in JCAMP-DX format for easy interpretation of infrared spectra data and cross-application usability. NMR machine maintenance is also managed with the NMReady-CONNECT, making routine upkeep simple and automated.
        </p>
        <p class="mt-4">Some completed examples of NMReady-CONNECT NMR API:</p>
        <ul class="list-disc list-inside space-y-2 mt-2">
          <li>Integrate and run NMReady spectrometers through <a href="https://www.labview.com" target="_blank" class="text-blue-600 underline">LabVIEW</a></li>
          <li>Create customized teaching tools</li>
          <li>Setup reaction monitoring with our <a href="/flow-product" class="text-blue-600 underline">flow product</a></li>
          <li>Create custom red light/green light QA/QC inquiries</li>
        </ul>
        <p class="mt-4 italic text-gray-600">
          If you would like further information about using NMReady-CONNECT spectrometer API, please contact your account representative.
        </p>
      </div>
    </div>
  </div>
</div>
`

  },

  "experiment-designer": {
    id: "experiment-designer-",
    name: "Experiment Designer Software Packages",
    image: ImgExperimentDesigner,
    logo: Nanalysis,
    bannerImg: Banner3,
    altText: "Nanalysis",
    videoId: "",
    meta: {
      title: "Experiment Designer NMR Software by Nanalysis | Distributor & Service Provider in India | Inkarp",
      description:
        "Optimize your NMR workflow with Nanalysis' Experiment Designer Software, distributed and supported by Inkarp Instruments in India. Simplify pulse sequence customization and improve data analysis productivity.",
      keywords: [
        "Experiment Designer NMR software",
        "Nanalysis software distributor India",
        "Pulse sequence customization",
        "JSON NMR software",
        "NMR automation tool",
        "Inkarp Nanalysis support",
        "Benchtop NMR control software",
        "Academic NMR software",
        "Industrial NMR designer",
        "NMR optimization software"
      ],
      altText: "Experiment Designer Software for NMR",
      internalLinks: ["nmr-software", "nanalysis-products"],
      externalLinks: ["https://www.nanalysis.com/"]
    },
    description: `
    <div class="flex flex-col lg:flex-row gap-8 items-start">
      <!-- Left: Description -->
      <div class="space-y-6">
        <div class="text-gray-700 space-y-4 text-[18px] font-[Roboto]">
          <p>
        Optimize your NMR experiments with Nanalysis' Experiment Designer Software Packages, distributed and serviced by Inkarp Instruments in India. This intuitive software offers Automated experiment setup and optimization, Simplified pulse sequence design, Enhanced data analysis and visualization, Streamlined workflow and increased productivity. Experience the benefits of Nanalysis' innovative technology and Inkarp's dedicated support, perfect for your laboratory requirements.
          </p>
          <p>
           Every instrument comes standard with basic pulse programs depending on the model that is purchased (e.g., 1D, COSY, HSQC). For expert users that want to modify pulse programs or generate their own we offer the experiment designer.
          </p>
         
          <p class="font-semibold text-gray-900">Customize:</p>
          <ul class="list-disc list-inside space-y-2">
            <li>Number of pulses on up to two channels simultaneously</li>
            <li>Timing between pulses</li>
            <li>Phase cycling</li>
          </ul>
          <p>
            Currently uses JSON-based interface. Please contact for more information.
          </p>
        </div>
      </div>

      <!-- Right Column: (optional) placeholder for future use -->
      <div></div>
    </div>
  `
  },

  "remote-access": {
    id: "remote-access",
    name: "Remote Access Software Packages",
    image: ImgRemoteAccess,
    logo: Nanalysis,
    bannerImg: Banner3,
    altText: "Nanalysis",
    videoId: "uajnoN1Vdyk",
    meta: {
      title: "Remote Access NMR Software by Nanalysis | Distributor & Service Provider in India | Inkarp",
      description:
        "Enable secure and real-time control of your NMR instruments with Nanalysis' Remote Access Software Packages. Distributed and supported in India by Inkarp Instruments.",
      keywords: [
        "Remote NMR software",
        "Nanalysis remote access software India",
        "NMR instrument VNC control",
        "Benchtop NMR monitoring",
        "Remote data acquisition NMR",
        "Inkarp Nanalysis support India",
        "NMR remote teaching tools",
        "Collaborative NMR analysis",
        "Remote lab NMR software",
        "Online NMR control software"
      ],
      altText: "Remote Access Software for NMR",
      internalLinks: ["nmr-software", "nanalysis-products"],
      externalLinks: ["https://www.nanalysis.com/"]
    },
    description: `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <!-- Left Column -->
      <div class="space-y-6">
        <div class="text-gray-700 space-y-4 text-[18px] font-[Roboto]">
          <p>
            Access and control your NMR instruments remotely with Nanalysis' Remote Access Software Packages, distributed and serviced by Inkarp Instruments in India. This secure and user-friendly software offers Real-time instrument monitoring and control, Remote data acquisition and analysis, Collaborative research and training capabilities, Increased productivity and flexibility. Experience the benefits of Nanalysis' innovative technology and Inkarp's dedicated support.
          </p>
          <p>
           To control the instrument directly from an external computer, tablet or phone, one be given VNC access.
          </p>
    
        </div>
      </div>
    <!-- Right Column: Responsive YouTube embed (tailwind) -->
    <div class="mt-6 lg:mt-0">
      <div class="aspect-video w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm">
        <iframe
          class="w-full h-full"
          src="https://www.youtube-nocookie.com/embed/uajnoN1Vdyk?rel=0"
          title="Teaching Remote Undergrad Labs with Nanalysis Benchtop NMR Spectrometers"
          frameborder="0"
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </div>
    </div>

    </div>
  `
  },

};

