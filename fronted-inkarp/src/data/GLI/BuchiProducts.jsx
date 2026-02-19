import React, { useState } from "react";
// Logos & Images
import BUCHI from '/src/assets/PrincipalLogos/RowSeven/BUCHI.svg';
import Jeiotch from '/src/assets/PrincipalLogos/RowThree/Jeiotch.png';
import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";
import Banner3 from "/images/products/Banner/Banner3.jpg";

import ImgLyovaporL200 from "/images/products/Buchi/L-200-pro.webp";
import ImgLyovaporL250 from "/images/products/Buchi/L-250.webp";
import ImgLyovaporL300 from "/images/products/Buchi/L-300.webp";
import ImgKjelMasterK375 from "/images/products/Buchi/K-375.webp";
import S1 from "/images/products/Jiotech/S1.jpg";
import S2 from "/images/products/Jiotech/S2.jpg";
import S3 from "/images/products/Jiotech/S3.jpg";
import S4 from "/images/products/Jiotech/S4.jpg";
import S5 from "/images/products/Jiotech/S5.jpg";
import S6 from "/images/products/Jiotech/S6.jpg";
import S7 from "/images/products/Jiotech/S7.jpg";
import S8 from "/images/products/Jiotech/S8.jpg";
import S9 from "/images/products/Jiotech/S9.jpg";
import S10 from "/images/products/Jiotech/S10.jpg";
import S11 from "/images/products/Jiotech/S11.jpg";
import S12 from "/images/products/Jiotech/S12.jpg";
import S13 from "/images/products/Jiotech/S13.jpg";
import S14 from "/images/products/Jiotech/S14.jpg";



export const BuchiProducts = {
  "lyovapor-l-200": {
    id: "lyovapor-l-200",
    name: "Freeze Dryer - Lyovapor™ L-200",
    image: ImgLyovaporL200,
    bannerImg: Banner3,
    logo: BUCHI,
    altText: "BUCHI",

    meta: {
      title: "Freeze Dryer - Lyovapor™ L-200 Distributor & Service Provider in India | Inkarp |Buchi",
      description:
        "Explore the smart features of the Lyovapor™ L-200 Freeze Dryer, including sample protection, endpoint detection, and ergonomic handling. Inkarp is the trusted distributor and service provider in India.",
      keywords: [
        "Freeze Dryer - Lyovapor™ L-200 Distributor and Service Provider In India, Lyovapor L-200 Freeze Dryer Features, BUCHI Freeze Dryer with Sample Protective State, Freeze Dryer with Endpoint Determination, Lyovapor Freeze Dryer Support and Services, Inkarp Freeze Dryer Supplier India, Freeze Dryer with Adjustable Display, Lyophilizer IQ/OQ Documentation India, BUCHI Freeze Dryer Preventive Maintenance, Lyovapor Software Upgrade India.",
        "Buchi Lyovapor L-200",
        "freeze dryer",
        "lyophilizer",
        "Infinite-Control",
        "endpoint determination",
        "sample protection",
        "Inkarp India"
      ],
      altText: "Lyovapor L-200 automated freeze dryer"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="mt-4 space-y-4">
    <p>
      The <strong>Lyovapor™ L-200</strong> Freeze Dryer introduces a new era of automation and connectivity in freeze-drying.
      As the first of its kind to feature <strong>Infinite-Control™</strong> technology, it allows you to manage and monitor the
      complete sublimation process from anywhere, anytime. Easily program methods, record real-time data, and access your
      freeze-drying system remotely with full peace of mind. 
    </p>

    <h3 class="text-xl sm:text-2xl  text-[#E63946] font-[MaxOT]">Unparalleled Automation with Infinite-Control™</h3>
    <p>
      Stay connected to your lab via mobile devices, software, or desktop. Get real-time notifications, graphical monitoring,
      and intuitive method creation—while <strong>automatic sample protection</strong> safeguards sensitive samples with a dedicated
      protection mode. Inkarp proudly serves as the <strong>Lyovapor™ L-200 Distributor and Service Provider in India.</strong>
    </p>

    <h3 class="text-xl sm:text-2xl  text-[#E63946] font-[MaxOT]">Flexible Configuration for Diverse Lab Needs</h3>
    <p>
      Configure drying chambers for trays, flasks, or vials—on a bench, trolley, or under a fume hood. Optional upgrades such
      as <strong>Interface Pro</strong> enable advanced analytics and enhanced process control.
    </p>

    <h3 class="text-xl sm:text-2xl  text-[#E63946] font-[MaxOT]">Precision, Reproducibility, and Results You Can Trust</h3>
    <p>
      Achieve consistent results with tight shelf temperature variation (±1&nbsp;°C), accurate vacuum control, and dependable
      endpoint determination—ideal for pharma, biotech, and research.
    </p>

    <h3 class="text-xl sm:text-2xl  text-[#E63946] font-[MaxOT]">Remote Monitoring Made Simple</h3>
    <p>
      Monitor chamber pressure, shelf temperature, and sample conditions via a real-time graphical interface or remotely using
      BUCHI’s app. Push notifications and interactive controls keep you in command wherever you are.
    </p>
  </div>

  <!-- Features Overview (L-200) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="text-xl sm:text-2xl mb-4 text-center font-semibold text-[#E63946] font-[MaxOT]">Lyovapor™ L-200 – Features Overview</h3>
    <div class="min-w-[720px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <thead class="[&>tr>th]:border [&>tr>th]:border-gray-300 [&>tr>th]:text-black [&>tr>th]:p-3">
          <tr><th>Feature</th><th>Description</th></tr>
        </thead>
        <tbody class="[&>tr>td]:border [&>tr>td]:border-gray-300 [&>tr>td]:p-3 [&>tr]:even:bg-[#FAFAFA]">
          <tr>
            <td>Comprehensive Service</td>
            <td>End-to-end support: application guidance, user training, preventive maintenance, and full IQ/OQ documentation.</td>
          </tr>
          <tr>
            <td>End Point Determination</td>
            <td>Determine endpoint via temperature differential; optional product temperature sensors add precision.</td>
          </tr>
          <tr>
            <td>Ergonomic Handling</td>
            <td>Adjustable display mountable on front or side for optimal visibility and access.</td>
          </tr>
          <tr>
            <td>Sample Protective State</td>
            <td>Automatically reduces pressure and stops shelf heating if collapse point/pressure limits are exceeded.</td>
          </tr>
          <tr>
            <td>Second Interface</td>
            <td>Operate safely outside the fume hood; upgrade to Interface Pro for full Lyovapor™ Software features.</td>
          </tr>
          <tr>
            <td>Flexible Drying Chambers</td>
            <td>Adjust shelf distance; connect dual manifolds to expand capacity and configure modular setups.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Compare table (kept as provided) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="text-xl sm:text-2xl mb-4 font-semibold text-center text-[#E63946]">Compare the Lyovapor™ L-200</h3>
    <div class="min-w-[980px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate freeze-200" style="border-spacing:0;text-align:center">
        <thead class="[&>tr>th]:border [&>tr>th]:border-gray-300 [&>tr>th]:text-black [&>tr>td]:p-3">
          <tr>
            <td><b>Characteristics</b></td>
            <td><b>Lyovapor™ L-200 Classic</b></td>
            <td><b>Lyovapor™ L-200 Classic</b></td>
            <td><b>Lyovapor™ L-200 Classic</b></td>
            <td><b>Lyovapor™ L-200 Classic</b></td>
            <td><b>Lyovapor™ L-200 Pro</b></td>
            <td><b>Lyovapor™ L-200 Pro</b></td>
            <td><b>Lyovapor™ L-200 Classic</b></td>
            <td><b>Lyovapor™ L-200 Pro</b></td>
          </tr>
        </thead>
        <tbody class="[&>tr>td]:border [&>tr>td]:border-gray-300 [&>tr>td]:p-3 [&>tr]:even:bg-[#FAFAFA]">
          <tr><td>Condenser capacity</td><td>6Kg</td><td>6Kg</td><td>6Kg</td><td>6Kg</td><td>6Kg</td><td>6Kg</td><td>6Kg</td><td>6Kg</td></tr>
          <tr><td>Lowest condenser temperature</td><td>-55°C</td><td>-55°C</td><td>-55°C</td><td>-55°C</td><td>-55°C</td><td>-55°C</td><td>-55°C</td><td>-55°C</td></tr>
          <tr><td>Condensing capacity</td><td>≤ 6Kg/24h at 20°C ambient</td><td>≤ 6Kg/24h at 20°C ambient</td><td>≤ 6Kg/24h at 20°C ambient</td><td>≤ 6Kg/24h at 20°C ambient</td><td>≤ 6Kg/24h at 20°C ambient</td><td>≤ 6Kg/24h at 20°C ambient</td><td>≤ 6Kg/24h at 20°C ambient</td><td>≤ 6Kg/24h at 20°C ambient</td></tr>
          <tr><td>Minimum system vacuum</td><td>Typically ≤ 0.04 mbar</td><td>Typically ≤ 0.04 mbar</td><td>Typically ≤ 0.04 mbar</td><td>Typically ≤ 0.04 mbar</td><td>Typically ≤ 0.04 mbar</td><td>Typically ≤ 0.04 mbar</td><td>Typically ≤ 0.04 mbar</td><td>Typically ≤ 0.04 mbar</td></tr>
          <tr><td>Drying shelf temperature</td><td>-</td><td>-</td><td>-</td><td>-</td><td>Up to 60°C</td><td>Up to 60°C</td><td>-</td><td>Up to 60°C</td></tr>
          <tr><td>Drying shelf temperature tolerance</td><td>-</td><td>-</td><td>-</td><td>-</td><td>± 1°C</td><td>± 1°C</td><td>-</td><td>± 1°C</td></tr>
          <tr><td>User interface</td><td>4.6 in</td><td>7 in</td><td>7 in</td><td>7 in</td><td>7 in</td><td>7 in</td><td>7 in</td><td>7 in</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

  "lyovapor-l-250": {
    id: "lyovapor-l-250",
    name: "Freeze Dryer - Lyovapor™ L-250",
    image: ImgLyovaporL250,
    bannerImg: Banner3,
    logo: BUCHI,
    altText: "BUCHI",

    meta: {
      title: "Freeze Dryer - Lyovapor™ L-250 | Distributor & Service Provider in India | Inkarp |Buchi",
      description:
        "Discover the Lyovapor™ L-250 Freeze Dryer with EcoStream™ technology. Inkarp is your trusted distributor and service provider in India, offering expert support, installation, and after-sales service for sustainable freeze drying solutions.",
      keywords: [
        "Freeze Dryer - Lyovapor™ L-250 Distributor and Service Provider In India, Lyovapor L-250 Freeze Dryer, Freeze Dryer with EcoStream Technology, BUCHI Lyovapor L-250 India, Freeze Dryer Distributor in India, Lyophilizer Service Provider India, Sustainable Freeze Dryer Solution India, ACT Certified Freeze Dryer, Laboratory Freeze Drying Equipment India, Inkarp Freeze Drying Solutions.",
        "Buchi Lyovapor L-250",
        "EcoStream",
        "freeze dryer",
        "lyophilizer",
        "Infinite-Control",
        "hot gas defrost",
        "Inkarp India"
      ],
      altText: "Lyovapor L-250 eco-friendly freeze dryer"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="mt-4 space-y-4">
    <p>
      The <strong>Lyovapor™ L-250</strong> Freeze Dryer by BUCHI combines high-performance freeze-drying with an industry-first:
      <strong>EcoStream™</strong> technology. Designed for labs that demand sustainability without compromising precision, it offers
      advanced control, reduced environmental impact, and seamless integration into your workflow.
    </p>

    <h3 class="text-xl sm:text-2xl text-[#E63946] font-[MaxOT]">Eco-Friendly Innovation with EcoStream™</h3>
    <p>
      The L-250 features an innovative compressor reaching down to <strong>−85 °C</strong> while using <strong>natural refrigerants</strong>
      (GWP ≈ 4), significantly lowering its carbon footprint. Its ACT-label certification reflects BUCHI's commitment to
      sustainable lab solutions—available via the leading Freeze Dryer - Lyovapor™ L-250 Distributor and Service Provider in India.
    </p>

    <h3 class="text-xl sm:text-2xl text-[#E63946] font-[MaxOT]">Maximize Efficiency with Reduced Energy Consumption</h3>
    <p>
      Smart compressor technology means lower power usage and enhanced performance. With a <strong>4&nbsp;kg/24&nbsp;h</strong> ice condenser
      capacity (total <strong>5&nbsp;kg</strong>), Lyovapor™ L-250 ensures fast, reliable freeze-drying across sample types.
    </p>

    <h3 class="text-xl sm:text-2xl text-[#E63946] font-[MaxOT]">Precision Control with Infinite-Control™</h3>
    <p>
      Manage the process remotely via software, display, or mobile app. Features like <strong>endpoint detection</strong>,
      <strong>sample protection</strong>, and <strong>hot gas defrost</strong> boost productivity and safety.
    </p>

    <h3 class="text-xl sm:text-2xl text-[#E63946] font-[MaxOT]">Flexible Setup for Every Lab Environment</h3>
    <p>
      Whether on a bench, trolley, or under a fume hood, the L-250 fits any lab. Its modular design simplifies installation and maintenance.
      For adaptability plus expert support, choose the trusted
      <a class="underline text-[#111]" href="https://www.buchi.com/en/products/instruments?keyword=&Drying=1&Freeze%2BDryers=1" target="_blank" rel="noopener">Lyovapor™ L-250</a>
      Distributor and Service Provider in India.
    </p>
  </div>

  <!-- Features Overview -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="text-xl sm:text-2xl mb-4 text-center font-semibold text-[#E63946] font-[MaxOT]">Lyovapor™ L-250 – Features Overview</h3>
    <div class="min-w-[760px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <thead class="[&>tr>th]:bg-[#245790] [&>tr>th]:text-white [&>tr>th]:p-3">
          <tr><th>Feature</th><th>Description</th></tr>
        </thead>
        <tbody class="[&>tr>td]:border [&>tr>td]:border-gray-300 [&>tr>td]:p-3 [&>tr]:even:bg-[#FAFAFA]">
          <tr>
            <td>Modularity Meets Flexibility</td>
            <td>Multiple drying chambers support a wide range of applications. Works with unheated/heated shelves, plain and stoppering covers, and manifold racks with 12–24 connections.</td>
          </tr>
          <tr>
            <td>Basic Instrument</td>
            <td>Efficient drying of liquids and solids in flasks and trays. Stable condenser temperature ensures complete solvent collection with reliable endpoint detection.</td>
          </tr>
          <tr>
            <td>Pro Instrument</td>
            <td>Advanced vial/tray drying with precise residual moisture control, faster cycles, programmable methods, and heated shelves for temperature-sensitive work.</td>
          </tr>
          <tr>
            <td>Process Analytics</td>
            <td>Pressure and temperature differential tests for accurate endpoint determination—ideal for shelf-based and manifold drying.</td>
          </tr>
          <tr>
            <td>Sample Protection Mode</td>
            <td>Automated safety (Pro) activates if product temperature exceeds the defined collapse temperature.</td>
          </tr>
          <tr>
            <td>Process Monitoring</td>
            <td>Real-time chamber pressure, sample, and shelf temperatures via onboard interface, software, and mobile app.</td>
          </tr>
          <tr>
            <td>Lyovapor™ Software Integration</td>
            <td>Advanced logging, analysis, and reporting; create/launch methods from desktop in a few clicks.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Compare Table -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="text-xl sm:text-2xl mb-4 font-semibold text-center text-[#E63946] font-[MaxOT]">Compare the Lyovapor™ L-250</h3>
    <div class="min-w-[900px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate freeze-250" style="border-spacing:0;text-align:center">
        <thead class="[&>tr>td]:border [&>tr>td]:border-gray-300 [&>tr>td]:text-black [&>tr>td]:p-3">
          <tr>
            <td><h3 class="p_relative d_block fs_16 lh_30">Characteristics</h3></td>
            <td><b>Lyovapor™ L-250 Basic</b></td>
            <td><b>Lyovapor™ L-250 Pro</b></td>
            <td><b>Lyovapor™ L-250 Basic Defrosting</b></td>
            <td><b>Lyovapor™ L-250 Pro Defrosting</b></td>
          </tr>
        </thead>
        <tbody class="[&>tr>td]:border [&>tr>td]:border-gray-300 [&>tr>td]:p-3 [&>tr]:even:bg-[#FAFAFA]">
          <tr><td>Lowest condenser temperature</td><td>-85°C</td><td>-85°C</td><td>-85°C</td><td>-85°C</td></tr>
          <tr><td>Condensing capacity at 25°C ambient</td><td>4&nbsp;kg</td><td>4&nbsp;kg</td><td>4&nbsp;kg</td><td>4&nbsp;kg</td></tr>
          <tr><td>Defrosting by hot gas</td><td>No</td><td>No</td><td>Yes</td><td>Yes</td></tr>
          <tr><td>Drying chamber</td><td>Manifold, Unheatable Shelves</td><td>Heatable Shelves</td><td>Manifold, Unheatable Shelves</td><td>Heatable Shelves</td></tr>
          <tr><td>Advanced vacuum control</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
          <tr><td>Ultimate vacuum (no control)</td><td>Yes</td><td>No</td><td>Yes</td><td>No</td></tr>
          <tr><td>Endpoint determination</td><td>Pressure</td><td>Pressure, Temperature</td><td>Pressure</td><td>Pressure, Temperature</td></tr>
          <tr><td>Drying shelf temperature</td><td>—</td><td>Up to 60 ± 1°C</td><td>—</td><td>Up to 60 ± 1°C</td></tr>
          <tr><td>Stoppering</td><td>Optional</td><td>Optional</td><td>Optional</td><td>Optional</td></tr>
          <tr><td>Product temperature sensor</td><td>—</td><td>Optional</td><td>—</td><td>Optional</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

  "lyovapor-l-300": {
    id: "lyovapor-l-300",
    name: "Freeze Dryer Lyovapor™ L-300",
    image: ImgLyovaporL300,
    bannerImg: Banner3, // swap to your BUCHI banner if you have one
    logo: BUCHI,
    altText: "BUCHI",

    meta: {
      title: "Freeze Dryer Lyovapor™ L-300 Distributor and Service Provider in India | Inkarp | Buchi",
      description:
        "Discover the Lyovapor™ L-300 – India’s first lab freeze dryer with continuous sublimation. Contact certified distributors for support, installation, and service.",
      keywords: [
        "Freeze Dryer Lyovapor™ L-300, Lyovapor™ L-300 Distributor in India, Lyovapor™ L-300 Service Provider in India, BUCHI Freeze Dryer India, Continuous Sublimation Freeze Dryer, Laboratory Freeze Dryer for Continuous Sublimation, Lyovapor™ L-300 with Infinite-Technology™, Freeze Dryer with Automated Cleaning, Endpoint Determination in Freeze Drying, Remote Monitoring Freeze Dryer, Freeze Dryer with Flexible Drying Chambers, Lyovapor™ Interface Pro Upgrade, Best Freeze Dryer for Pharma Labs India, Advanced Lab Freeze Drying Solutions, Inkarp BUCHI Freeze Dryer India",
        "Buchi Lyovapor L-300",
        "Infinite-Technology",
        "continuous freeze drying",
        "dual condenser",
        "lyophilizer",
        "Inkarp India"
      ],
      altText: "Lyovapor L-300 continuous freeze dryer"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="mt-4 space-y-4">

    <p class="font_family_poppins mb-5">
      As the first laboratory freeze dryer equipped with Infinite-Technology™, the Lyovapor™ L-300 by BUCHI introduces continuous sublimation through dual, automatically cleaned condensers. With unmatched precision, flexibility, and remote operability, it redefines freeze-drying efficiency for scientific and industrial applications.
    </p>

    <h3 class="text-xl sm:text-2xl font-[MaxOT] text-[#E63946]">Continuous Freeze Drying with Infinite Ice Capacity</h3>
    <p class="font_family_poppins mb-5">
      Experience uninterrupted sublimation with two alternating condensers that ensure infinite ice capacity. The Lyovapor™ L-300 enables stable, reproducible parameters including:
    </p>
    <ul class="list-disc ml-6 space-y-1 prod-det items">
      <li>Consistent cooling temperature </li>
      <li>Vacuum pressure with Smart-Switch </li>
      <li>Shelf temperature control with ±1 °C accuracy </li>
    </ul>

    <h3 class="text-xl sm:text-2xl font-[MaxOT] text-[#E63946]">Flexible &amp; Remote Operation</h3>
    <p class="font_family_poppins mb-5"> Designed for convenience, the Lyovapor™ L-300 supports:  </p>
    <ul class="list-disc ml-6 space-y-1 prod-det items">
      <li>Multiple drying chamber configurations</li>
      <li>Safe fume hood installation</li>
      <li> Full control via mobile devices</li>
      <li>Optional Interface Pro upgrade for advanced process customizations</li>
    </ul>

    <h3 class="text-xl sm:text-2xl font-[MaxOT] text-[#E63946]">Energy-Efficient &amp; Cost-Effective</h3>
    <p class="font_family_poppins mb-5">
      Engineered for economical use without compromising performance, the system maintains:
    </p>
    <ul class="list-disc ml-6 space-y-1 prod-det items">
      <li>Stable shelf and cooling temperatures</li>
      <li>Efficient vacuum pressure management</li>
      <li>Optimized cycle times with built-in end-point determination tools</li>
    </ul>
  </div>

  <!-- Features Overview -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="text-xl sm:text-2xl mb-4 text-center font-semibold text-[#E63946]">Lyovapor™ L-300 – Features Overview</h3>
    <div class="min-w-[760px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <thead class="[&>tr>th]:border [&>tr>th]:border-gray-300 [&>tr>th]:text-black [&>tr>th]:p-3">
          <tr><th>Feature</th><th>Description</th></tr>
        </thead>
        <tbody class="[&>tr>td]:border [&>tr>td]:border-gray-300 [&>tr>td]:p-3 [&>tr]:even:bg-[#FAFAFA]">
          <tr>
            <td><h3 class="p_relative d_block fs_16 lh_30"> End Point Determination</h3></td>
            <td>Enhance process optimization by using temperature differences along with optional product temperature sensors to determine the freeze-drying endpoint with precision.</td>
          </tr>
          <tr>
            <td><h3 class="p_relative d_block fs_16 lh_30"> Automated Cleaning</h3></td>
            <td>The integrated steam generator melts accumulated ice and performs hygienic cleaning of the condenser—fully automatic and maintenance-friendly.</td>
          </tr>
          <tr>
            <td><h3 class="p_relative d_block fs_16 lh_30">Ergonomic Handling</h3></td>
            <td>Adjustable display allows easy monitoring of process parameters. Mount it either on the front or side of the unit based on your workspace layout.</td>
          </tr>
          <tr>
            <td><h3 class="p_relative d_block fs_16 lh_30">Flexible Drying Chambers</h3></td>
            <td>Modify shelf distances according to application requirements. For added scalability, connect up to three manifold racks.</td>
          </tr>
          <tr>
            <td><h3 class="p_relative d_block fs_16 lh_30">Infinite-Control™</h3></td>
            <td>Seamlessly manage your entire process via a unified system of interface, control software, and mobile app—enabling 24/7 remote access and monitoring.</td>
          </tr>
          <tr>
            <td><h3 class="p_relative d_block fs_16 lh_30">Upgradeability</h3></td>
            <td>Unlock advanced features and enhanced customization through a simple upgrade to Interface Pro and integration with Lyovapor™ Software.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Compare table -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="text-xl sm:text-2xl mb-4 font-semibold text-center text-[#E63946]">Compare the Lyovapor™ L-300</h3>
    <div class="min-w-[980px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate freeze-300" style="border-spacing:0;text-align:center">
        <thead class="[&>tr>th]:border [&>tr>th]:border-gray-300 [&>tr>th]:text-black [&>tr>td]:p-3">
          <tr>
            <td><b>Characteristics</b></td>
            <td><b>Lyovapor™ L-300 Continuous with 24 manifold rack</b></td>
            <td><b>Lyovapor™ L-300 Continuous with 36 manifold rack</b></td>
            <td><b>Lyovapor™ L-300 Continuous with 4 non heating shelves, 12 manifold cover</b></td>
            <td><b>Lyovapor™ L-300 Pro with 6 heating shelves</b></td>
            <td><b>Lyovapor™ L-300 Pro with 4 heating shelves</b></td>
            <td><b>Lyovapor™ L-300 Pro with 4 heating shelves, stoppering cover</b></td>
            <td><b>Lyovapor™ L-300 Pro with 6 heating shelves, manifold cover</b></td>
            <td><b>Lyovapor™ L-300 Continuous with 6 non heating shelves, 12 manifold cover</b></td>
          </tr>
        </thead>
        <tbody class="[&>tr>td]:border [&>tr>td]:border-gray-300 [&>tr>td]:p-3 [&>tr]:even:bg-[#FAFAFA]">
          <tr>
            <td>Condenser Capacity (L300)</td>
            <td>Unlimited (2 x ≤ 1 kg)</td>
            <td>Unlimited (2 x ≤ 1 kg)</td>
            <td>Unlimited (2 x ≤ 1 kg)</td>
            <td>Unlimited (2 x ≤ 1 kg)</td>
            <td>Unlimited (2 x ≤ 1 kg)</td>
            <td>Unlimited (2 x ≤ 1 kg)</td>
            <td>Unlimited (2 x ≤ 1 kg)</td>
            <td>Unlimited (2 x ≤ 1 kg)</td>
          </tr>
          <tr>
            <td>Lowest condenser temperature</td>
            <td>-105 °C</td>
            <td>-105 °C</td>
            <td>-105 °C</td>
            <td>-105 °C</td>
            <td>-105 °C</td>
            <td>-105 °C</td>
            <td>-105 °C</td>
            <td>-105 °C</td>
          </tr>
          <tr>
            <td>Characteristics</td>
            <td>Lyovapor™ L-300</td>
            <td>Lyovapor™ L-300</td>
            <td>Lyovapor™ L-300</td>
            <td>Lyovapor™ L-300</td>
            <td>Lyovapor™ L-300 Pro</td>
            <td>Lyovapor™ L-300 Pro</td>
            <td>Lyovapor™ L-300</td>
            <td>Lyovapor™ L-300 Pro</td>
          </tr>
          <tr>
            <td>Condensing capacity</td>
            <td>≤ 12 kg/24h at 25°C ambient temperature</td>
            <td>≤ 12 kg/24h at 25°C ambient temperature</td>
            <td>≤ 12 kg/24h at 25°C ambient temperature</td>
            <td>≤ 12 kg/24h at 25°C ambient temperature</td>
            <td>≤ 12 kg/24h at 25°C ambient temperature</td>
            <td>≤ 12 kg/24h at 25°C ambient temperature</td>
            <td>≤ 12 kg/24h at 25°C ambient temperature</td>
            <td>≤ 12 kg/24h at 25°C ambient temperature</td>
          </tr>
          <tr>
            <td>Minimum system vacuum</td>
            <td>≥ 0.04 mbar</td>
            <td>≥ 0.04 mbar</td>
            <td>≥ 0.04 mbar</td>
            <td>≥ 0.04 mbar</td>
            <td>≥ 0.04 mbar</td>
            <td>≥ 0.04 mbar</td>
            <td>≥ 0.04 mbar</td>
            <td>≥ 0.04 mbar</td>
          </tr>
          <tr>
            <td>Drying shelf temperature</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>up to 60°C</td>
            <td>up to 60°C</td>
            <td>up to 60°C</td>
            <td>up to 60°C</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Drying shelf temperature tolerance</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>± 1.0°C</td>
            <td>± 1.0°C</td>
            <td>± 1.0°C</td>
            <td>± 1.0°C</td>
            <td>-</td>
          </tr>
          <tr>
            <td>User interphase</td>
            <td>4.6 in</td>
            <td>4.6 in</td>
            <td>4.6 in</td>
            <td>7 in</td>
            <td>7 in</td>
            <td>7 in</td>
            <td>7 in</td>
            <td>4.6 in</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

  "kjel-line": {
    id: "kjel line",
    name: "Kjel Line",
    image: ImgKjelMasterK375,
    logo: BUCHI,
    bannerImg: Banner3,       // optional banner
    altText: "BUCHI",

    meta: {
      title: "KjelMaster K-375 & KjelSampler K-376 / K-377 Distributor and Service Provider In India | Inkarp | Buchi",
      description:
        "Authorized distributor for KjelMaster K-375 & KjelSampler K-376 / K-377 in India. Automate your nitrogen and protein analysis with flexible, high-throughput Kjeldahl systems from BUCHI.",
      keywords: [
        "KjelMaster K-375 & KjelSampler K-376 / K-377 Distributor in India, BUCHI Kjeldahl System India, Automated Kjeldahl Analyzer India, Protein and Nitrogen Analysis System India, KjelSampler K-377 Service Provider in India, Kjeldahl Nitrogen Analysis Equipment India BUCHI KjelMaster K-375 India, Kjeldahl Analyzer with Auto Sampler, Laboratory Protein Analyzer India, KjelSampler K-376 High Throughput System, BUCHI Titration System with IntelliDist, KjelLink Software Integration for Data Security, Automated Potentiometric and Colorimetric Titration, Lab Analyzer with Large Color Touch Screen, Inkarp BUCHI Distributor and Support India",
        "BUCHI KjelMaster K-375",
        "KjelSampler K-376",
        "KjelSampler K-377",
        "Kjeldahl analyzer",
        "nitrogen protein analysis",
        "automated distillation titration",
        "Inkarp India"
      ],
      altText: "Kjeldahl nitrogen/protein analyzer with autosampler"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="mt-4 space-y-4 product-details">
    <h3 class="text-xl sm:text-2xl font-semibold">
      Automated Nitrogen &amp; Protein Analysis with Maximum Efficiency and Flexibility
    </h3>
    <p class="font_family_poppins mb-5">
      The KjelMaster K-375 combined with KjelSampler K-376 or K-377 offers an advanced solution for automated Kjeldahl nitrogen and protein analysis. With full method flexibility, high sample throughput, and reliable automation, this benchtop system is designed for laboratories demanding efficiency, accuracy, and safety.
    </p>

    <!-- Key Advantages -->
    <h3 class="text-lg sm:text-xl font-[MaxOT] text-[#E63946]">Key Advantages of the KjelMaster System</h3>
    <h4 class="d_block fs_18 mb-2 lh_40 fw_sbold">High Efficiency with Automated Operation</h4>
    <ul class="list-disc ml-6 space-y-1 prod-det items">
      <li>Process up to <b>48 samples</b> with KjelSampler K-377 or <b>24 samples</b> with KjelSampler K-376</li>
      <li>Fully automated workflow from digestion to titration and sampling</li>
      <li>Remote operation capability lets you focus on other tasks while the system runs</li>
      <li>Dual independent racks in K-377 for continuous batch operation</li>
    </ul>

    <h3 class="d_block fs_18 mb-2 lh_40 fw_sbold">Flexible &amp; Space-Saving Design</h3>
    <ul class="list-disc ml-6 space-y-1 prod-det items">
      <li>Smallest benchtop footprint in its class—ideal for space-conscious labs</li>
      <li>Prioritize urgent samples with the integrated “express rack”</li>
      <li>Compatible with 100 mL, 300 mL, and 500 mL BUCHI sample tubes</li>
      <li>Switch easily between manual and automatic operation as needed</li>
    </ul>

    <h3 class="d_block fs_18 mb-2 lh_40 fw_sbold">User-Friendly &amp; Safe Operation</h3>
    <ul class="list-disc ml-6 space-y-1 prod-det items">
      <li>No glass transfer or tube cleaning required—seamless and contamination-free</li>
      <li>Automated reagent handling minimizes user exposure to hazardous chemicals</li>
      <li>Ergonomic sample rack loading for smooth, safe, and convenient operation</li>
      <li>Reduce glassware wear and extend equipment lifespan</li>
    </ul>
  </div>

  <!-- Feature highlights table -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="text-xl sm:text-2xl mb-4 text-center font-semibold text-[#E63946]">
     Feature Highlights- EasyKjel, BasicKjel &amp; MultiKjel
    </h3>
    <div class="min-w-[760px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <thead class="[&>tr>td]:border [&>tr>td]:border-gray-300 [&>tr>td]:text-black [&>tr>th]:p-3">
          <tr><th>Feature</th><th>Description</th></tr>
        </thead>
        <tbody class="[&>tr>td]:border [&>tr>td]:border-gray-300 [&>tr>td]:p-3 [&>tr]:even:bg-[#FAFAFA]">
          <tr>
            <td><h3 class="p_relative d_block fs_16 lh_30">Large Color Touch Screen</h3></td>
            <td>Intuitive full-color touchscreen interface simplifies operation and improves workflow accessibility.</td>
          </tr>
          <tr>
            <td><h3 class="p_relative d_block fs_16 lh_30">Complementary Peripherals</h3></td>
            <td>Seamless integration with balances, barcode reader, printer/network printer, KjelLink, LIMS, KjelSampler K-376/377, and Recirculating Chiller F-314.</td>
          </tr>
          <tr>
            <td><h3 class="p_relative d_block fs_16 lh_30">Data Security</h3></td>
            <td>KjelLink PC software enables advanced programming, secure bidirectional data exchange, and traceable records.</td>
          </tr>
          <tr>
            <td><h3 class="p_relative d_block fs_16 lh_30">Multiple Titration Types</h3></td>
            <td>Supports both potentiometric and colorimetric titration modes for regulatory compliance.</td>
          </tr>
          <tr>
            <td><h3 class="p_relative d_block fs_16 lh_30">Smart Distillation “IntelliDist”</h3></td>
            <td>Automatic operating temperature detection and faster, reproducible results—no preheating required.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Compare table -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="text-xl sm:text-2xl mb-4 font-semibold text-center text-[#E63946]">
      Compare the EasyKjel, BasicKjel &amp; MultiKjel
    </h3>
    <div class="min-w-[820px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate freeze-300" style="border-spacing:0;text-align:center">
        <thead class="[&>tr>td]:border [&>tr>td]:border-gray-300 [&>tr>td]:text-black [&>tr>td]:p-3">
          <tr>
            <td><b>Characteristics</b></td>
            <td><b>EasyKjel</b></td>
            <td><b>BasicKjel</b></td>
            <td><b>MultiKjel</b></td>
          </tr>
        </thead>
        <tbody class="[&>tr>td]:border [&>tr>td]:border-gray-300 [&>tr>td]:p-3 [&>tr]:even:bg-[#FAFAFA]">
          <tr><td>Measuring range</td><td>0.02 – 220 mg N</td><td>0.02 – 220 mg N</td><td>0.02 – 220 mg N</td></tr>
          <tr><td>Adjustable steam output</td><td>30 – 100 %</td><td>30 – 100 %</td><td>30 – 100 %</td></tr>
          <tr><td>Sampler positions</td><td>0</td><td>24</td><td>48</td></tr>
          <tr><td>Recovery</td><td>&gt;99.5 % (1 – 200 mg N)</td><td>&gt;99.5 % (1 – 200 mg N)</td><td>&gt;99.5 % (1 – 200 mg N)</td></tr>
          <tr><td>Screen</td><td>8.4 inch color touch</td><td>8.4 inch color touch</td><td>8.4 inch color touch</td></tr>
          <tr><td>Titration</td><td>Potentiometric / Colorimetric</td><td>Potentiometric / Colorimetric</td><td>Potentiometric / Colorimetric</td></tr>
          <tr><td>Rack compatibility</td><td>No</td><td>Yes, with K-446 / K-449</td><td>Yes, with K-446 / K-449</td></tr>
          <tr><td>User level management</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
`,

    features: [

    ],
    advantages: [

    ],
    highlights: [

    ],
    faqs: [],
    techSpecs: null
  },

  "funnel-shaker": {
    id: "funnel-shaker",
    name: "Funnel Shaker",
    image: S1,
    logo: Jeiotch,
    bannerImg: Banner3, // choose banner if available
    altText: "Jiotech",
    videoId: null,
    meta: {
      title: "Funnel Shaker in authorized Distributor And Service Provider In India | Jeiotech | Inkarp",
      description: "Buy Jeiotech Funnel Shaker in India from Inkarp, the authorized distributor and service provider. Experience high mixing efficiency, BLDC motor durability, easy funnel installation, and nationwide after-sales support.",
      keywords: [
        "Jeiotech Funnel Shaker",
        "Best Funnel Shaker in India",
        "Laboratory Shaker India",
        "Funnel Shaker Distributor India",
        "Inkarp Funnel Shaker",
        "BLDC Motor Shaker",
        "Vertical Reciprocation Shaker",
        "Laboratory Mixing Equipment India",
        "Jeiotech Distributor India",
        "Funnel Shaker in authorized Distributor In India",
        "Funnel Shaker in authorized Service Provider In India"
      ],
      altText: "Funnel Shaker_Jeiotech_Inkarp",
      internalLinks: ["Related Products"],
      externalLinks: ["Jeiotech Website"]
    },
    description: `
  <div style="font-family:Roboto, sans-serif; background-color:#F5F5F5; padding:20px; color:#000000;">
    <h2 style="font-family:MaxOT, sans-serif; color:#E63946;">Best Shakers in India – Precision, Durability, and Performance</h2>
    <p>
      When it comes to laboratory shakers, choosing the right equipment is critical for achieving consistent and reliable results. Researchers across India rely on high-quality shakers for applications such as mixing, dissolving, incubating, and homogenizing samples.
    </p>
    <p>
      Among the leading options, Jeiotech’s Funnel Shaker stands out for its enhanced mixing efficiency, durability, and flexibility—making it one of the most preferred laboratory shakers available in India today.
    </p>

    <h2 style="font-family:MaxOT, sans-serif; color:#E63946;">Jeiotech – Funnel Shaker</h2>
    <p>
      The Jeiotech Funnel Shaker is designed for precision mixing with unmatched convenience and durability. Its double-sided vertical reciprocation ensures high mixing efficiency, while the adjustable tilt up to 20º provides greater control over mixing intensity, even at lower RPMs.
    </p>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">Key Features of Jeiotech Funnel Shaker</h3>
    <ul>
      <li>Vertical reciprocation up to 300 rpm with a 40 mm stroke length</li>
      <li>Adjustable tilt up to 20º allows high efficiency at low rpm</li>
      <li>BLDC motor technology ensures smooth operation, low noise, and greater stability compared to traditional DC motors</li>
      <li>One-touch funnel installation and removal for convenience</li>
      <li>Stable center of gravity minimizes vibration, even during tilted movements</li>
      <li>Handles up to 4 × 2L funnels, plus multiple smaller funnel combinations</li>
      <li>Supplied with 4 funnel holders included</li>
      <li>Controller panel installed at a 20º angle for clear visibility and easy operation</li>
      <li>Built-in overcurrent protection and automatic resumption after power failure</li>
    </ul>
  </div>
  `,
    techSpecs: {
      overview:
        "Jeiotech Funnel Shaker RS-2 with vertical & inclined reciprocating motion (0–20° tilt), BLDC motor, high capacity handling up to 4 × 2L funnels, and user-friendly controller with safety features.",
      common: {
        "Shaking system": {
          "Motion type": "Vertical & Inclined reciprocating (0 ~ 20°)",
          "Speed range (rpm)": "Vertical 30 to 300 / Inclined 30 to 250",
          "Speed accuracy at 100rpm (± rpm)": "1"
        },
        "Timer": "999hr 59 min",
        "Dimension (minimum required space at 20º tilt, mm)": "900 × 460 × 670",
        "Electrical (AC 100~240V, 50/60Hz)": "0.88 A MAX."
      },
      perModel: {
        "RS-2": {
          "Exterior (W × D × H, mm)": "600 × 460 × 470",
          "Max. load per each side (kg)": "5",
          "Net weight (kg)": "52",
          "Cat.No. (230V)": "AAH32025K",
          "Cat.No. (120V)": "AAH32023U"
        }
      }
    },
    features: [],
    advantages: [],
    faqs: [
      {
        question: "What is a Funnel Shaker and why is the Jeiotech model considered the best in India?",
        answer:
          "A funnel shaker is a specialized laboratory instrument designed to provide uniform and efficient mixing of liquid samples in conical or cylindrical funnels. Unlike conventional orbital or platform shakers, a funnel shaker uses vertical reciprocation with adjustable tilt, making it ideal for achieving thorough mixing at different speeds and sample volumes. The Jeiotech Funnel Shaker is considered one of the best in India because it offers double-sided vertical reciprocation up to 300 rpm with a 40 mm stroke length, an adjustable tilt up to 20º for enhanced mixing, and the durability of a BLDC motor that ensures low noise and long service life. Its ability to handle multiple funnel capacities simultaneously, including up to 4 × 2L funnels, makes it a preferred choice for pharmaceutical labs, biotechnology research, and quality control facilities."
      },
      {
        question: "What are the main applications of the Jeiotech Funnel Shaker in laboratories?",
        answer:
          "The Jeiotech Funnel Shaker is widely used in applications that require precise and consistent mixing of samples in funnels. It is commonly applied in pharmaceutical testing, biotechnology research, food and beverage analysis, environmental monitoring, and clinical laboratories. Its ability to hold and mix multiple funnels at once allows researchers to process high sample volumes efficiently. With its adjustable tilt and vertical shaking motion, it achieves thorough sample homogenization, solvent extraction, separation processes, and compound mixing. This versatility makes it indispensable in research labs, industrial facilities, and educational institutions across India."
      },
      {
        question: "How does the BLDC motor in the Jeiotech Funnel Shaker improve performance?",
        answer:
          "The BLDC (Brushless DC) motor is one of the defining features of the Jeiotech Funnel Shaker. Compared to traditional DC motors, BLDC motors provide greater durability, lower noise levels, and enhanced stability. This means that even at high speeds or during tilted operations, the shaker maintains a stable center of gravity and prevents excessive vibration. The motor’s efficiency also reduces maintenance needs and extends the overall lifespan of the equipment. For laboratories in India that require long-term reliability and uninterrupted performance, the BLDC motor makes the Jeiotech Funnel Shaker a superior investment."
      },
      {
        question: "What types and sizes of funnels can be used with the Jeiotech Funnel Shaker?",
        answer:
          "The Jeiotech Funnel Shaker is designed to support multiple funnel types and capacities, making it one of the most versatile shakers in the market. It can accommodate cone or cylindrical type funnels with capacities up to 2 liters. Researchers can simultaneously install up to 10 × 0.5L funnels, 6 × 0.5–1L funnels, and 4 × 2L funnels. This scalability is particularly useful for labs that handle diverse sample sizes or require batch processing of multiple experiments at once. Four funnel holders are included in the product package, ensuring users can start operations immediately without requiring additional accessories."
      },
      {
        question: "How easy is it to install and remove samples in the Jeiotech Funnel Shaker?",
        answer:
          "The Jeiotech Funnel Shaker is designed with user convenience in mind. Its one-touch mechanism allows for quick and effortless installation and removal of funnels, reducing setup time and enhancing productivity in busy laboratory environments. This feature is particularly beneficial for labs with frequent sample changes or repetitive testing processes. The design ensures stable operation even during high-speed tilted movements, making it safe and easy to use for all researchers, including female scientists who often handle multiple setups during long lab hours."
      },
      {
        question: "What safety features are included in the Jeiotech Funnel Shaker?",
        answer:
          "Safety is a key priority in laboratory equipment, and the Jeiotech Funnel Shaker is equipped with multiple protective mechanisms. It includes an overcurrent protection system to safeguard both the user and the device. In case of power interruptions, the shaker automatically resumes operation once the power supply is restored, ensuring experimental integrity. The shaker’s stable center of gravity design also minimizes vibration and reduces risks of spillage or accidents, even when samples are loaded on one side. These features make the Jeiotech Funnel Shaker not only efficient but also one of the safest shakers for laboratory use in India."
      },
      {
        question: "Can the Jeiotech Funnel Shaker be monitored remotely?",
        answer:
          "Yes, one of the advanced features of the Jeiotech Funnel Shaker is its compatibility with LC Connected, a mobile monitoring system (optional). This allows researchers to remotely monitor and control their shaker, making experiment planning and scheduling more flexible. For laboratories that run long-term mixing processes, this feature ensures convenience, safety, and better time management. It also supports the built-in count-down timer that can run up to 999 hours 59 minutes, enabling precise control over long-duration experiments."
      },
      {
        question: "How does the adjustable tilt function improve mixing efficiency?",
        answer:
          "The adjustable tilt function of the Jeiotech Funnel Shaker is one of its most valuable features. By allowing tilt adjustment up to 20º, it enables researchers to achieve high mixing efficiency even at low rpm settings. This reduces sample stress, minimizes potential foaming, and ensures better homogenization of sensitive samples. The tilt feature is especially beneficial in pharmaceutical and biotech laboratories where controlled mixing is required for sample integrity. The combination of tilt and vertical reciprocation provides superior mixing results compared to conventional shakers."
      },
      {
        question: "Why choose Inkarp as your distributor for Jeiotech Funnel Shakers in India?",
        answer:
          "Inkarp is the authorized distributor and service provider for Jeiotech Funnel Shakers in India, with more than 40 years of experience in delivering scientific instruments. By choosing Inkarp, customers benefit from expert consultation, on-site installation, user training, preventive maintenance, and quick access to genuine Jeiotech spare parts. Inkarp’s pan-India presence ensures fast response times and reliable after-sales support, making it easier for laboratories across the country to maintain continuous operations without costly downtime."
      },
      {
        question: "Where can I buy Jeiotech Funnel Shakers in India?",
        answer:
          "Jeiotech Funnel Shakers are officially available in India through Inkarp Instruments Pvt. Ltd., the authorized distributor. Purchasing directly from Inkarp guarantees authenticity, warranty support, installation assistance, and nationwide service coverage. Customers can also get tailored recommendations to select the right shaker model based on their research needs. To buy or request a quotation, laboratories and institutions can directly contact Inkarp via their official website or through any of their regional offices across India. This ensures peace of mind, reliable delivery, and continuous service support for all your laboratory mixing needs."
      }
    ]
  },

  "shaker-dual-action": {
    id: "shaker-dual-action",
    name: "Shaker (Dual action)",
    image: S2, // e.g. import S2 from "/images/products/Jeiotech/dual-action-shaker.jpg";
    logo: Jeiotch,
    bannerImg: Banner3,
    altText: "Jiotech",
    videoId: null,
    meta: {
      title: "Dual-Action Shakers Authorized Distributor And Service Provider in India | Jeiotech  | Inkarp",
      description: "Inkarp is the authorized distributor for Jeiotech Dual-Action Shakers in India. High-capacity shakers with orbital/reciprocating motion, BLDC motor, digital controls, and nationwide service support.",
      keywords: [
        "Jeiotech Dual Action Shaker",
        "Best Laboratory Shakers in India",
        "Orbital Shaker India",
        "Reciprocating Shaker India",
        "Dual Action Laboratory Shaker",
        "BLDC Motor Shaker",
        "Laboratory Mixing Equipment",
        "Shaker Distributor India",
        "Inkarp Jeiotech Shaker",
        "High-Speed Shaker India",
        "Dual-Action Shakers Authorized Distributor And Service Provider in India"
      ],
      altText: "Shaker (Dual action)_ Jeitoech_Inkarp",
      internalLinks: ["Related Products"],
      externalLinks: ["Jeiotech Website"]
    },
    description: `
  <div style="font-family:Roboto, sans-serif; background-color:#F5F5F5; padding:20px; color:#000000;">
    <h2 style="font-family:MaxOT, sans-serif; color:#E63946;">Best Shakers in India – Reliable Mixing Solutions for Every Laboratory</h2>
    <p>
      When it comes to laboratory research, choosing the best shakers in India is critical for ensuring accurate and reproducible results. Shakers are essential for applications such as mixing, dissolving, incubation, and sample preparation in pharmaceuticals, biotechnology, food sciences, and academic research. The most reliable laboratory shakers combine powerful performance, durability, safety, and user-friendly operation to meet the rigorous demands of modern labs.
    </p>
    <p>
      Among the wide range of options available, Jeiotech’s Dual-Action Shaker stands out as one of the most advanced and versatile shakers in India. Designed with cutting-edge technology and exceptional build quality, it offers the flexibility of dual-action shaking motion along with precise digital controls and robust safety features.
    </p>

    <h2 style="font-family:MaxOT, sans-serif; color:#E63946;">Jeiotech Shaker (Dual Action)</h2>
    <p>
      The Jeiotech Dual-Action Shaker is a benchtop platform shaker designed to handle demanding laboratory applications with maximum precision and reliability. Capable of accommodating flasks up to 6 liters, it combines orbital and reciprocating motions, giving researchers complete control over their mixing methods.
    </p>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">🔹 Performance Highlights</h3>
    <ul>
      <li>Dual-action shaking motion: Choose between orbital or reciprocating movement depending on application needs.</li>
      <li>High shaking speed: Competitive performance with speeds up to 500 rpm for intensive mixing.</li>
      <li>Variable amplitudes:</li>
    </ul>
    <ul style="margin-left:18px;">
      <li>12.7mm or 19.1mm for OS-2000</li>
      <li>19.1mm or 25.4mm for OS-3000</li>
      <li>19.1mm or 25.4mm for OS-4000</li>
    </ul>
    <ul>
      <li>BLDC motor technology: Maintenance-free motor ensures smooth, quiet, and powerful shaking with enhanced durability.</li>
      <li>Wide speed range: Maintains stable operation even under heavy workloads, supported by the Best Effort Run function that adjusts intelligently to keep shaking within safe limits.</li>
      <li>Smooth acceleration/deceleration: Prevents sample spillage and reduces stress on delicate experiments.</li>
      <li>Low-profile design: Minimizes vibration and prevents sliding, even at high speeds.</li>
    </ul>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">🔹 User Convenience</h3>
    <ul>
      <li>Intuitive control panel: Features Lab Companion’s bright VFD display, durable membrane touch switch, and ergonomic control knob.</li>
      <li>Easy-set digital timer: Programmable from 1 min to 999 hr 59 min, ideal for short-term and long-term experiments.</li>
      <li>Repetitive tasks made easy: Platform automatically stops at the same position—perfect for automated dosing or sampling processes.</li>
      <li>Precision speed control: Speeds displayed in increments of 1 rpm; users can select increment intervals of 1, 5, or 10 rpm as per preference.</li>
      <li>Data connectivity: RS-232 and USB ports allow external control and data collection for advanced research needs.</li>
      <li>Smart monitoring: Compatible with LC Connected mobile app (with LC GreenBox) for remote tracking anytime, anywhere.</li>
    </ul>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">🔹 Safety Features</h3>
    <ul>
      <li>Automatic restart after power interruption, ensuring experiment continuity.</li>
      <li>Shaking speed deviation alarm to protect sample integrity.</li>
      <li>Over-current protection and stalled platform detection for safe operation.</li>
    </ul>
  </div>
  `,
    techSpecs: {
      overview: "Dual-action benchtop shakers with orbital/reciprocating motion, BLDC motor, high-speed performance up to 500 rpm, digital controls with VFD display, long-range timer, and safety features for reliable, large-capacity mixing.",
      common: {
        "Shaking system": {
          "Motion type (OS-2000)": "Orbital / Reciprocal",
          "Motion type (OS-3000)": "Orbital / Reciprocal",
          "Motion type (OS-4000)": "Orbital / Reciprocal"
        },
        "Speed range (rpm)": "OS-2000: 20–500; OS-3000: 20–500; OS-4000: Orbital 20–500 / Reciprocal 20–450",
        "Speed stability (rpm, %)": "1",
        "Timer (count-down)": "999hr 59min",
        "Notes": [
          "Best Effort Run function helps maintain target speed safely under heavy load.",
          "Platform stops at same position for repetitive tasks.",
          "Speeds viewable in 1 rpm steps; user-selectable increment step 1/5/10 rpm."
        ]
      },
      perModel: {
        "OS-2000": {
          "Amplitude size (mm / inch, dia.)": "19.1 / 0.8 (12.7 / 0.5 available)",
          "Max. speed per permissible load": [
            "500 rpm (max. 10 kg)",
            "300 rpm (max. 16 kg)"
          ],
          "Platform (W×D) (mm / inch)": "320×260 / 12.6×10.2",
          "Body (W×D×H) (mm / inch)": "354×388×146 / 13.9×15.3×5.7",
          "Net weight (kg / lbs)": "22 / 48.5",
          "Electrical requirements (230V, 50/60Hz, A)": "0.3A",
          "Electrical requirements (120V, 50/60Hz, A)": "0.6A",
          "Cat. No. (230V)": "AAH3D1115K",
          "Cat. No. (120V)": "AAH3D1165U"
        },
        "OS-3000": {
          "Amplitude size (mm / inch, dia.)": "19.1 / 0.8 (25.4 / 1 available)",
          "Max. speed per permissible load": [
            "500 rpm (max. 10 kg)",
            "300 rpm (max. 18 kg)"
          ],
          "Platform (W×D) (mm / inch)": "350×350 / 13.8×13.8",
          "Body (W×D×H) (mm / inch)": "409×508×141 / 16.1×20×5.6",
          "Net weight (kg / lbs)": "28 / 61.7",
          "Electrical requirements (230V, 50/60Hz, A)": "0.3A",
          "Electrical requirements (120V, 50/60Hz, A)": "0.6A",
          "Cat. No. (230V)": "AAH3D1215K",
          "Cat. No. (120V)": "AAH3D1265U"
        },
        "OS-4000": {
          "Amplitude size (mm / inch, dia.)": "19.1 / 0.75 (default); 25.4 / 1 (available)",
          "Max. speed per permissible load (Orbital)": [
            "500 rpm (max. 14 kg)",
            "400 rpm (max. 21 kg)"
          ],
          "Max. speed per permissible load (Reciprocal)": [
            "450 rpm (max. 10 kg)",
            "300 rpm (max. 21 kg)"
          ],
          "Platform (W×D) (mm / inch)": "450×450 / 17.7×17.7",
          "Body (W×D×H) (mm / inch)": "510×632×156 / 20.1×24.9×6.1",
          "Net weight (kg / lbs)": "43 / 94.8",
          "Electrical requirements (230V, 50/60Hz, A)": "0.3A",
          "Electrical requirements (120V, 50/60Hz, A)": "0.6A",
          "Cat. No. (230V)": "AAH3D1315K",
          "Cat. No. (120V)": "AAH3D1365U"
        }
      }
    },
    features: [],
    advantages: [],
    faqs: [
      {
        question: "What makes the Jeiotech Dual-Action Shaker one of the best laboratory shakers in India?",
        answer: "The Jeiotech Dual-Action Shaker stands out in India because it combines two shaking motions—orbital and reciprocating—in one compact platform. This dual functionality provides flexibility for a wide range of laboratory applications, from gentle mixing to high-speed agitation. With shaking speeds up to 500 rpm, variable amplitudes depending on the model, and the power of a maintenance-free BLDC motor, this shaker delivers smooth, quiet, and powerful operation. In addition, its microprocessor PID control ensures accuracy and stability, while features like automatic restart, over-current protection, and speed deviation alarms guarantee safe operation. These combined features make it a top choice for research laboratories, pharmaceutical industries, and academic institutions across India."
      },
      {
        question: "What are the key applications of the Jeiotech Dual-Action Shaker in laboratories?",
        answer: "The Jeiotech Dual-Action Shaker is widely used in pharmaceutical, biotechnology, environmental, and academic laboratories for various mixing processes. Its dual-action capability supports applications such as cell culture mixing, protein extraction, DNA/RNA preparation, microbial growth studies, solvent extraction, and compound homogenization. The ability to switch between orbital and reciprocating motion allows researchers to adapt the shaker to different experimental needs, making it a versatile solution for labs handling multiple research workflows. With its high capacity (up to 6L flasks), it is also ideal for large-scale experiments that require uniform and reproducible mixing."
      },
      {
        question: "How does the BLDC motor enhance the performance of Jeiotech Dual-Action Shakers?",
        answer: "The BLDC (Brushless DC) motor is one of the most important components in Jeiotech Dual-Action Shakers. Unlike traditional DC motors, BLDC motors provide longer durability, smoother operation, lower noise levels, and higher stability. This ensures that even during high-speed shaking or when handling heavy loads, the shaker maintains consistent performance. The BLDC motor also reduces maintenance needs, allowing laboratories to focus on research rather than equipment servicing. Its efficient design guarantees quiet operation, creating a more pleasant laboratory environment while delivering high torque and precision."
      },
      {
        question: "What are the different models of Jeiotech Dual-Action Shakers and their amplitude options?",
        answer: "Jeiotech offers different models of Dual-Action Shakers, each designed to handle varying research demands.\nOS-2000: Amplitude options of 12.7 mm or 19.1 mm.\n\nOS-3000: Amplitude options of 19.1 mm or 25.4 mm.\n\nOS-4000: Amplitude options of 19.1 mm or 25.4 mm.\n These amplitude variations provide researchers with flexibility to choose the best motion range for their applications. Smaller amplitudes are ideal for gentle mixing and cell culture, while larger amplitudes support heavy-duty shaking for complex experiments. This adaptability makes the Jeiotech Dual-Action Shaker suitable for both basic and advanced laboratory processes."
      },
      {
        question: "How easy is it to operate and control the Jeiotech Dual-Action Shaker?",
        answer: "Operating the Jeiotech Dual-Action Shaker is simple and intuitive, thanks to its user-friendly control panel. It features Lab Companion’s bright VFD display, durable membrane touch switch, and ergonomic control knob for easy adjustments. The digital timer can be set between 1 minute and 999 hours 59 minutes, making it suitable for short and long-duration experiments. Users can also program repetitive tasks with the auto-stop-at-start-position function, which ensures the platform always stops at the same location—perfect for automated sampling or dosing. Speed settings are flexible, with increments of 1, 5, or 10 rpm depending on user preference."
      },
      {
        question: "What connectivity and data features does the Jeiotech Dual-Action Shaker offer?",
        answer: "The Jeiotech Dual-Action Shaker is equipped with RS-232 and USB ports, allowing external control and data collection. This makes it easier for laboratories to integrate the shaker into automated workflows or data management systems. For advanced monitoring, it can be connected with LC Connected (via LC GreenBox), enabling users to monitor and control their shaker via a mobile app anytime, anywhere. This connectivity ensures researchers can manage experiments remotely, improving flexibility and efficiency."
      },
      {
        question: "What safety features are built into the Jeiotech Dual-Action Shaker?",
        answer: "Safety is a major strength of the Jeiotech Dual-Action Shaker. It includes an automatic restart function after power interruptions, ensuring experiments continue seamlessly without loss of data or progress. The system also features a shaking speed deviation alarm that alerts users if the platform deviates from the programmed speed, protecting sensitive samples. In addition, over-current protection and stalled platform detection safeguard both the device and the user, ensuring reliable and safe operation even during high-demand experiments."
      },
      {
        question: "What is the maximum capacity of the Jeiotech Dual-Action Shaker?",
        answer: "The Jeiotech Dual-Action Shaker is capable of handling flasks up to 6 liters, making it highly suitable for large-scale laboratory experiments. Its robust low-profile design minimizes vibration and prevents sliding, even when operating at high speeds with heavy loads. This combination of large capacity and stability allows research laboratories, biopharma companies, and industrial facilities in India to perform high-volume mixing with confidence and consistency."
      },
      {
        question: "Why should Indian laboratories buy Jeiotech Dual-Action Shakers from Inkarp?",
        answer: "Inkarp is the authorized distributor and service provider for Jeiotech in India, with more than four decades of experience in the scientific instrumentation industry. By purchasing through Inkarp, laboratories gain access to expert consultation, professional installation, user training, preventive maintenance, and genuine spare parts. Inkarp’s pan-India service network ensures timely support, reducing downtime and maximizing equipment lifespan. This makes Inkarp the trusted partner for researchers seeking reliable mixing solutions with the backing of strong after-sales service."
      },
      {
        question: "Where can I buy Jeiotech Dual-Action Shakers in India?",
        answer: "Jeiotech Dual-Action Shakers are officially available in India through Inkarp Instruments Pvt. Ltd. As the authorized distributor, Inkarp guarantees authentic products, full warranty coverage, and responsive customer support. With a strong service presence across the country, Inkarp ensures reliable delivery, seamless installation, and ongoing technical support. Laboratories can directly contact Inkarp through their website or regional offices to purchase Jeiotech Dual-Action Shakers and receive tailored recommendations for their research requirements."
      }
    ]
  },

  "shaker-general": {
    id: "shaker-general",
    name: "Shaker (General)",
    image: S3, // e.g. import S3 from "/images/products/Jeiotech/shaker-general.jpg";
    logo: Jeiotch,
    bannerImg: Banner3,
    altText: "Jiotech",
    videoId: null,
    meta: {
      title: "General Shakers Authorized Distributor And Service Provider In India | Jeiotech | Inkarp",
      description: " Buy Jeiotech General Shakers in India from Inkarp, the authorized distributor and service provider. Durable shakers with orbital motion, BLDC motor, high capacity, digital controls, and nationwide support.",
      keywords: [
        " Jeiotech General Shaker",
        " Best Laboratory Shakers in India",
        " Orbital Shaker India",
        " Laboratory Mixing Equipment India",
        " Inkarp Jeiotech Shaker",
        " High-Speed Shaker India",
        " BLDC Motor Shaker",
        " Microprocessor Controlled Shaker",
        " Laboratory Shaker Distributor India",
        " Lab Companion Shaker",
        " General Shakers Authorized Distributor And Service Provider In India"
      ],
      altText: "Shaker (General)_Jeiotech_Inkarp",
      internalLinks: ["Related Prodcuts"],
      externalLinks: ["Jeitoech Website"]
    },
    description: `
  <div style="font-family:Roboto, sans-serif; background-color:#F5F5F5; padding:20px; color:#000000;">
    <h2 style="font-family:MaxOT, sans-serif; color:#E63946;">Best Shakers in India – Precision Mixing with Jeiotech Shakers</h2>
    <p>
      When laboratories search for the best shakers in India, they look for instruments that combine precision, reliability, and durability. Shakers are essential tools for mixing, blending, dissolving, and homogenizing samples across pharmaceuticals, biotechnology, environmental research, food testing, and academic labs. A reliable shaker not only improves experimental accuracy but also enhances safety, consistency, and efficiency in day-to-day laboratory operations.
    </p>
    <p>
      Among the top laboratory shaker brands, Jeiotech has earned global recognition for its advanced technology and user-friendly designs. In India, Jeiotech Shakers (General models) are trusted by research institutions and industries alike for their high performance, durable construction, and intelligent control systems. Distributed and serviced exclusively by Inkarp Instruments, these shakers represent a perfect blend of innovation and reliability for laboratories across the country.
    </p>

    <h2 style="font-family:MaxOT, sans-serif; color:#E63946;">Jeiotech – Shaker (General)</h2>
    <p>
      The Jeiotech General Shaker series is designed to meet the diverse needs of modern laboratories with powerful performance, smooth operation, and enhanced convenience. Built with a durable body structure and high-capacity driving system, these shakers are ideal for handling heavy workloads without compromising stability or precision.
    </p>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">Performance Features</h3>
    <ul>
      <li>Microprocessor PID control ensures accurate and reproducible shaking performance, even during long runs.</li>
      <li>Intelligent speed controller with calibration enables matching displayed rpm to reference points, guaranteeing precision.</li>
      <li>High shaking speed up to 500 rpm, suitable for a wide range of experimental needs.</li>
      <li>Orbital shaking motion with variable diameters:</li>
    </ul>
    <ul style="margin-left:18px;">
      <li>25.4 mm for OS-7100</li>
      <li>50.8 mm for OS-7200</li>
    </ul>
    <ul>
      <li>Direct Drive (DD) Brushless Motor and triple cam system provide maintenance-free operation with high torque, smooth rotation, and quiet performance.</li>
      <li>Best Effort Run function automatically adjusts shaking speed in case of unbalanced loads, floor instability, or external shocks.</li>
      <li>Smooth acceleration and deceleration control prevents sample spills and ensures safe handling of sensitive materials.</li>
      <li>Low-profile design minimizes vibration and sliding, even at high speeds.</li>
    </ul>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">User Convenience</h3>
    <ul>
      <li>Bright VFD display with durable membrane touch switch and control knob for effortless operation.</li>
      <li>Digital timer programmable from 1 min to 999 hr 59 min, allowing short and extended experiments.</li>
      <li>Repetitive tasks simplified with auto-stop-at-start-position function—ideal for automated dosing and sampling processes.</li>
      <li>Speed settings adjustable in increments of 1, 5, or 10 rpm for user preference.</li>
      <li>RS-232 and USB ports for external control and data collection.</li>
      <li>Compatibility with LC Connected (mobile monitoring system) for remote monitoring when paired with LC GreenBox.</li>
      <li>Wide range of accessories available, making the shaker adaptable to various experimental setups.</li>
    </ul>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">Safety Features</h3>
    <ul>
      <li>Automatic restart after power interruptions, ensuring experiment continuity.</li>
      <li>Shaking speed deviation alarm for protecting sensitive samples.</li>
      <li>Over-current protection for long-term durability and operator safety.</li>
    </ul>
  </div>
  `,
    techSpecs: {
      overview: "Orbital general-purpose shakers with microprocessor PID control, Direct Drive BLDC motor and triple cam system, high-capacity performance up to 500 rpm, variable orbital diameters, long-range timer, RS-232/USB connectivity, and multiple safety functions.",
      common: {
        "Shaking system": { "Motion type": "Orbital" },
        "Speed stability (rpm, %)": "1",
        "Platform (W×D) (mm / inch)": "755 x 520 / 29.6 x 20.5",
        "Body (W×D×H) (mm / inch)": "755 x 627 x 151 / 29.7 x 24.7 x 5.9",
        "Net weight (Kg / lbs)": "117 / 257.9",
        "Electrical requirements (230V, 50 / 60Hz)": "0.4A",
        "Electrical requirements (120V, 50 / 60Hz)": "0.8A"
      },
      perModel: {
        "OS-7100": {
          "Speed range (rpm)": "30 to 500",
          "Max. speed per permissible load": [
            "500rpm (max. 10 kg)",
            "400rpm (max. 30 kg)"
          ],
          "Amplitude size (mm / inch, dia.)": "25.4 / 1",
          "Timer (count-down)": "9999hr 59min",
          "Cat. No. (230V)": "AAH3D1415K",
          "Cat. No. (120V)": "AAH3D1465U"
        },
        "OS-7200": {
          "Speed range (rpm)": "30 to 300",
          "Max. speed per permissible load": [
            "300rpm (max. 23 kg)",
            "250rpm (max. 35 kg)"
          ],
          "Amplitude size (mm / inch, dia.)": "50.8 / 2",
          "Timer (count-down)": "999hr 59min",
          "Cat. No. (230V)": "AAH3D1515K",
          "Cat. No. (120V)": "AAH3D1565U"
        }
      }
    },
    features: [],
    advantages: [],
    faqs: [
      {
        question: "What makes Jeiotech General Shakers the best laboratory shakers in India?",
        answer: "Jeiotech General Shakers are considered among the best in India because of their powerful driving system, durable construction, and intelligent microprocessor PID control. They deliver orbital shaking motion at variable diameters, with competitive speeds up to 500 rpm, ensuring accuracy and reproducibility for all lab applications. Equipped with a Direct Drive BLDC motor and triple cam system, these shakers offer maintenance-free operation, low noise, and high torque for heavy workloads. Features like smooth acceleration/deceleration, automatic restart, and speed deviation alarms provide safety and consistency. Combined with Inkarp’s nationwide distribution and service support, these shakers are a reliable choice for Indian laboratories."
      },
      {
        question: "What are the main applications of Jeiotech General Shakers in laboratories?",
        answer: "Jeiotech General Shakers are versatile and used in a wide range of laboratory applications. They are suitable for cell culture mixing, sample preparation, protein extraction, DNA/RNA research, microbial growth studies, and compound homogenization. Their orbital motion ensures uniform mixing, while adjustable shaking diameters support different experiment needs. With the ability to handle heavy loads smoothly and quietly, these shakers are ideal for pharmaceutical, biotechnology, food science, clinical, and academic research laboratories across India. Their reliability makes them an essential part of daily laboratory operations."
      },
      {
        question: "How does the BLDC motor in Jeiotech General Shakers improve performance?",
        answer: "The BLDC (Brushless DC) motor is a major advantage of Jeiotech General Shakers. Unlike conventional DC motors, BLDC motors provide long-lasting durability, quieter performance, and smoother operation. They deliver high torque at high speeds, ensuring stability even when handling heavy loads. The maintenance-free nature of BLDC motors reduces downtime and extends equipment life, making them cost-effective for laboratories. Additionally, they minimize vibration, which protects sensitive samples and ensures consistent, reproducible results. This makes Jeiotech General Shakers more efficient and reliable compared to traditional shakers available in India."
      },
      {
        question: "What orbital shaking diameters are available in Jeiotech General Shakers?",
        answer: "Jeiotech General Shakers provide orbital shaking motion in two diameter options, depending on the model:\n25.4 mm for OS-7100\n\n50.8 mm for OS-7200\n These variations give researchers flexibility to choose the right model for their applications. Smaller diameters are ideal for gentle mixing, while larger diameters are better suited for heavy-duty mixing and large flasks. This adaptability allows the shaker to serve both standard laboratory tasks and demanding industrial-scale experiments with equal efficiency."
      },
      {
        question: "How do Jeiotech General Shakers handle heavy workloads?",
        answer: "Jeiotech General Shakers are engineered with a Direct Drive BLDC motor and triple cam system, which enable them to handle heavy workloads smoothly. The Best Effort Run function automatically adjusts shaking speed if the load is unbalanced or if there are external shocks or vibrations from the floor. This ensures stable operation without compromising sample safety. Smooth acceleration and deceleration prevent spillage from flasks or test tubes, making them ideal for high-volume or sensitive applications. The low-profile design also minimizes vibration and sliding, even at high speeds."
      },
      {
        question: "How user-friendly are Jeiotech General Shakers?",
        answer: "Jeiotech General Shakers are designed with user convenience in mind. They feature a bright VFD display, a durable membrane touch switch, and an easy-to-use control knob. The built-in digital timer (1 min to 999 hr 59 min) supports both short and long-term experiments. For repetitive tasks, the shaker platform stops at the same position after each cycle, which is especially useful for automated dosing or sampling processes. Speed can be displayed and adjusted in increments of 1, 5, or 10 rpm based on user preference, providing precise control."
      },
      {
        question: "Do Jeiotech General Shakers support connectivity and data collection?",
        answer: "Yes, Jeiotech General Shakers are equipped with RS-232 and USB ports, allowing for external control and easy data collection. This feature helps laboratories integrate the shaker into automated systems or connect it to external devices for advanced research needs. Additionally, the shakers are compatible with LC Connected (via LC GreenBox), which allows researchers to monitor and control their shaker through a mobile app anytime, anywhere. This makes them highly adaptable to modern digital lab environments."
      },
      {
        question: "What safety features are built into Jeiotech General Shakers?",
        answer: "Safety is a priority in Jeiotech General Shakers. They come with automatic restart after power interruptions, ensuring experiments continue without disruption. The shaking speed deviation alarm notifies users of inconsistencies, protecting delicate samples. Additional over-current protection ensures the longevity of the device and safeguards laboratory personnel. Combined with the stable low-profile design, these features make Jeiotech General Shakers among the safest and most reliable laboratory shakers available in India."
      },
      {
        question: "Why should Indian laboratories buy Jeiotech General Shakers from Inkarp?",
        answer: "Inkarp is the authorized distributor and service provider for Jeiotech in India, with more than 40 years of experience in the scientific instrumentation industry. Purchasing through Inkarp ensures that laboratories receive authentic equipment, warranty protection, and access to expert consultation. Inkarp also provides on-site installation, user training, preventive maintenance, and fast access to genuine spare parts. With its nationwide service network, Inkarp guarantees minimal downtime and long-term reliability, making it the trusted partner for laboratories across India."
      },
      {
        question: "Where can I buy Jeiotech General Shakers in India?",
        answer: "Jeiotech General Shakers are officially available in India through Inkarp Instruments Pvt. Ltd., the authorized distributor. Buying directly from Inkarp guarantees product authenticity, professional installation, and ongoing technical support. With service centers across the country, Inkarp ensures reliable delivery and quick support whenever needed. Laboratories can contact Inkarp via the official website or through regional offices to purchase Jeiotech General Shakers and receive personalized recommendations for their research requirements."
      }
    ]
  },

  "shakers-program": {
    id: "shakers-program",
    name: "Shakers (Program)",
    image: S4, // e.g. import S4 from "/images/products/Jeiotech/shakers-program.jpg";
    logo: Jeiotch,
    bannerImg: Banner3,
    altText: "Jiotech",
    videoId: null,
    meta: {
      title: "Program Shakers Authorized Distributor And Service Provider In India | Jeiotech | Inkarp ",
      description: " Inkarp is the authorized distributor for Jeiotech Program Shakers in India. Advanced shakers with triple-cam mechanism, BLDC motor, orbital motion, high capacity, and nationwide after-sales support.",
      keywords: [
        " Jeiotech Program Shaker",
        " Best Laboratory Shakers in India",
        " Orbital Shaker India",
        " Triple Cam Shaker",
        " BLDC Motor Shaker",
        " High Speed Laboratory Shaker",
        " Laboratory Mixing Equipment India",
        " Inkarp Jeiotech Shaker",
        " Lab Companion Shaker",
        " Shaker Distributor India",
        " Program Shakers Authorized Distributor And Service Provider In India"
      ],
      altText: "Program Shakers_Jeiotech_Inkarp",
      internalLinks: ["Related Products"],
      externalLinks: ["Jeitoech Website"]
    },
    description: `
  <div style="font-family:Roboto, sans-serif; background-color:#F5F5F5; padding:20px; color:#000000;">
    <h2 style="font-family:MaxOT, sans-serif; color:#E63946;">Best Shakers in India – Advanced Mixing Solutions for Modern Laboratories</h2>
    <p>
      When laboratories look for the best shakers in India, they seek equipment that ensures consistent performance, robust durability, and user-friendly operation. Shakers are vital for a wide range of applications, including mixing cultures, dissolving solutes, extraction, incubation, and homogenization. The right shaker not only enhances experiment accuracy but also improves safety, efficiency, and reproducibility across industries such as pharmaceuticals, biotechnology, food sciences, and environmental research.
    </p>
    <p>
      Among the globally trusted brands, Jeiotech Shakers (Program Series) stand out for their cutting-edge technology and reliable performance. Designed with innovative mechanisms, intelligent controls, and durable engineering, these shakers are a preferred choice for laboratories that demand precision and flexibility. In India, Inkarp Instruments is proud to be the authorized distributor and service provider for Jeiotech, ensuring laboratories across the country have access to high-performance shakers with world-class after-sales support.
    </p>

    <h2 style="font-family:MaxOT, sans-serif; color:#E63946;">Jeiotech – Shakers (Program Series)</h2>
    <p>
      The Jeiotech Program Shaker series delivers exceptional mixing performance through its innovative triple-cam shaking mechanism, providing smooth orbital motion and stability across a wide speed range. These shakers are engineered for heavy workloads and high-speed operations, making them ideal for both standard laboratory tasks and advanced research applications.
    </p>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">Programming parameters</h3>
    <ul>
      <li>Max. number of segments in one(1)pattern(cycle) <strong>20</strong></li>
      <li>Max. number of patterns(cycle)saved <strong>20</strong></li>
      <li>Shaking motion- Forward &amp; Backward, Pause</li>
      <li>Time <strong>1min. to 99hr. 59min.</strong></li>
      <li>rpm <strong>30 to 500</strong></li>
    </ul>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">🔹 Performance Highlights</h3>
    <ul>
      <li>Microprocessor PID control ensures precise speed maintenance, even during extended runs.</li>
      <li>Competitive shaking speeds up to 500 rpm for powerful and efficient mixing.</li>
      <li>Orbital shaking motion available in multiple diameters to suit application needs:</li>
    </ul>
    <ul style="margin-left:18px;">
      <li>19 mm for SKC-7075</li>
      <li>25 mm for SKC-7100</li>
      <li>50 mm for SKC-7200</li>
    </ul>
    <ul>
      <li>Equipped with an ideal Direct Drive (DD) Brushless Motor and triple cam system, providing maintenance-free operation, high torque, and quiet performance.</li>
      <li>Best Effort Run function adjusts rpm intelligently under heavy or uneven loads, preventing interruptions.</li>
      <li>Automatic speed adjustments during unbalanced placement, floor vibrations, or external shocks.</li>
      <li>Smooth acceleration and deceleration to prevent sample spillage and maintain experiment integrity.</li>
      <li>Low-profile design (12 cm platform height) minimizes vibration and sliding, even during high-speed shaking.</li>
    </ul>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">🔹 User Convenience</h3>
    <ul>
      <li>Intuitive control panel featuring Lab Companion’s bright VFD display, durable membrane touch switch, and ergonomic control knob.</li>
      <li>Optional slide-type universal platform makes sample handling easier and reduces fatigue when working with heavy loads.</li>
      <li>Repetitive tasks simplified with an auto-stop-at-start-position feature, beneficial for automated dosing and sampling.</li>
      <li>Wide range of accessories available, enhancing adaptability to different laboratory applications.</li>
    </ul>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">🔹 Safety Features</h3>
    <ul>
      <li>Shaking speed deviation alarm alerts users of irregularities for added safety.</li>
      <li>Over-current protection ensures reliable and safe long-term operation.</li>
    </ul>
  </div>
  `,
    techSpecs: {
      overview: "The Jeiotech Program Shaker series delivers exceptional mixing performance through its innovative triple-cam shaking mechanism, providing smooth orbital motion and stability across a wide speed range. These shakers are engineered for heavy workloads and high-speed operations, making them ideal for both standard laboratory tasks and advanced research applications.",
      common: {
        "Control system": "PID feedback control",
        "Display": "VFD",
        "Shaking system": { "Motion type": "Orbital" },
        "Programming parameters": {
          "Max. number of segments in one(1)pattern(cycle)": "20",
          "Max. number of patterns(cycle)saved": "20",
          "Shaking motion": "Forward & Backward, Pause",
          "Time": "1min. to 99hr. 59min.",
          "rpm": "30 to 500"
        },
        "Speed range2)(rpm)": "30 to 500",
        "Accuracy at 100 rpm": "±1",
        "Dimension": {
          "Platform (W×D) (mm / inch) - Small": "755×520 / 29.7×20.5",
          "Platform (W×D) (mm / inch) - Large": "885×520 / 34.8×20.5",
          "Body1) (W×D×H) (mm / inch)": "754.8×662×122.2 / 29.7×26.1×4.8"
        },
        "Net weight (kg / Ibs)": "75 / 165.4",
        "Electric requirements(230V, 50 / 60Hz)": "0.4A",
        "Electric requirements(120V, 60Hz)": "0.8A"
      },
      perModel: {
        "SKC-7075": {
          "Amplitude size (mm / inch, dia)": "19 / 0.75",
          "Cat. No. (230V)": "AAH30205K",
          "Cat. No. (120V)": "AAH30206U"
        },
        "SKC-7100": {
          "Amplitude size (mm / inch, dia)": "25 / 1",
          "Cat. No. (230V)": "AAH30215K",
          "Cat. No. (120V)": "AAH30216U"
        },
        "SKC-7200": {
          "Amplitude size (mm / inch, dia)": "50 / 2",
          "Cat. No. (230V)": "AAH30225K",
          "Cat. No. (120V)": "AAH30226U"
        }
      }
    },
    features: [],
    advantages: [],
    faqs: [
      {
        question: "What makes Jeiotech Program Shakers different from other laboratory shakers in India?",
        answer: "Jeiotech Program Shakers stand out because of their innovative triple-cam shaking mechanism, which provides stable orbital motion across a wide speed range. Unlike conventional shakers, they are designed with a Direct Drive BLDC motor that ensures smooth, quiet, and maintenance-free operation. Capable of speeds up to 500 rpm and available in orbital diameters of 19 mm, 25 mm, and 50 mm, they are highly versatile for both standard and demanding applications. The combination of robust design, precision microprocessor PID control, and ergonomic user interface makes them a preferred choice for laboratories across India that require high performance and reliability."
      },
      {
        question: "What are the main applications of Jeiotech Program Shakers in laboratories?",
        answer: "Jeiotech Program Shakers are widely used across pharmaceutical, biotechnology, clinical, environmental, and food science laboratories. They are ideal for applications such as cell culture mixing, microbial growth studies, protein extraction, nucleic acid research, sample homogenization, and solvent extraction. Their high torque and ability to handle heavy workloads make them suitable for large-scale experiments, while the smooth orbital motion ensures uniform mixing. With features like adjustable shaking diameters and speed precision, these shakers meet the diverse requirements of modern laboratories."
      },
      {
        question: "How does the triple-cam shaking mechanism improve performance?",
        answer: "The triple-cam shaking mechanism is a key innovation in Jeiotech Program Shakers. This system ensures balanced, smooth orbital motion even at high speeds or heavy loads. It reduces vibration, minimizes wear and tear, and enhances overall stability. As a result, laboratories can run experiments with greater accuracy, less risk of sample spillage, and improved reproducibility. Combined with BLDC motor technology, the triple-cam design ensures long-term reliability and outstanding performance for demanding laboratory conditions."
      },
      {
        question: "What shaking diameters are available in Jeiotech Program Shakers?",
        answer: "The Program Shaker series offers different orbital diameters depending on the model, giving researchers flexibility to select the most suitable option for their experiments:\nSKC-7075 – 19 mm\n\nSKC-7100 – 25 mm\n\nSKC-7200 – 50 mm\n This range allows laboratories to choose smaller diameters for gentle mixing and larger diameters for more vigorous applications. Such adaptability ensures that the Program Shaker can support everything from delicate biological samples to industrial-scale mixing processes."
      },
      {
        question: "How do Jeiotech Program Shakers ensure reproducible results?",
        answer: "Reproducibility is one of the strengths of Jeiotech Program Shakers. They feature microprocessor PID control that maintains constant speed with high accuracy. The Best Effort Run function intelligently adjusts rpm if workloads exceed capacity, ensuring uninterrupted shaking performance. In addition, the shakers include automatic speed adjustment in case of uneven load placement, unstable floors, or external shocks. These smart control features make it possible to achieve reproducible and validated results in every experiment, which is critical for regulated industries like pharmaceuticals and biotech."
      },
      {
        question: "How user-friendly are Jeiotech Program Shakers?",
        answer: "Jeiotech Program Shakers are designed for operator convenience. They feature Lab Companion’s bright VFD display, a durable membrane touch switch, and an ergonomic control knob for easy operation. The optional slide-type universal platform simplifies handling of heavy load samples and reduces physical fatigue. The shakers also include an auto-stop-at-start-position function, ensuring that repetitive tasks such as automated dosing and sampling are precise and efficient. With a variety of accessories available, the Program Shakers can be customized to suit different laboratory applications."
      },
      {
        question: "What safety features are built into Jeiotech Program Shakers?",
        answer: "Safety is a priority in the design of Jeiotech Program Shakers. They are equipped with a shaking speed deviation alarm that alerts users if performance deviates from the programmed speed. In addition, over-current protection safeguards both the equipment and the operator. Smooth acceleration and deceleration prevent spills from flasks and tubes, while the exceptionally low-profile design (only 12 cm platform height) minimizes vibration and sliding during high-speed shaking. Together, these features ensure that experiments can be conducted safely and reliably."
      },
      {
        question: "What advantages does the BLDC motor provide in Jeiotech Program Shakers?",
        answer: "The Brushless DC (BLDC) motor provides multiple advantages over traditional motors. It is maintenance-free, durable, and capable of delivering high torque at high speeds. The BLDC motor reduces noise, improves energy efficiency, and ensures smooth, uniform shaking motion. Even under heavy loads, the motor maintains stability and prevents vibration. For laboratories in India that require continuous, high-performance equipment, the BLDC motor in Jeiotech Program Shakers offers long-term reliability and cost-effectiveness."
      },
      {
        question: "Why should Indian laboratories buy Jeiotech Program Shakers from Inkarp?",
        answer: "Inkarp is the authorized distributor and service provider for Jeiotech in India, with more than 40 years of experience in supplying scientific instrumentation. Purchasing through Inkarp ensures customers receive genuine products, expert consultation, on-site installation, preventive maintenance, and quick access to spare parts. Inkarp’s pan-India service network provides responsive after-sales support, minimizing downtime and maximizing productivity for laboratories. This partnership ensures that customers not only get world-class equipment but also reliable local expertise to support their operations."
      },
      {
        question: "Where can I buy Jeiotech Program Shakers in India?",
        answer: "Jeiotech Program Shakers are available exclusively through Inkarp Instruments Pvt. Ltd., the authorized distributor in India. Buying directly from Inkarp guarantees product authenticity, full warranty coverage, and professional after-sales service. With regional offices and service centers across India, Inkarp ensures reliable delivery, expert installation, and continuous technical support. Laboratories can contact Inkarp through the official website or regional branches to purchase Program Shakers and receive customized recommendations based on their application requirements."
      }
    ]
  },

  "shaker-compact": {
    id: "shaker-compact",
    name: "Shaker (Compact)",
    category: "Shakers",
    image: S5, // e.g. import S5 from "/images/products/Jeiotech/shaker-compact.jpg";
    logo: Jeiotch,
    bannerImg: Banner3,
    altText: "Jiotech",
    videoId: null,
    meta: {
      title: "Compact Shakers Authorized Distributor And Service Provider In India | Jeiotech | Inkarp",
      description: "Inkarp is the authorized distributor for Jeiotech Compact Shakers in India. Compact, space-saving design with orbital motion, BLDC motor, wide speed range, and nationwide service support.",
      keywords: [
        "Jeiotech Compact Shaker",
        "Best Laboratory Shakers in India",
        "Compact Orbital Shaker India",
        "Laboratory Mixing Equipment",
        "BLDC Motor Shaker",
        "Small Footprint Shaker India",
        "Inkarp Jeiotech Shaker",
        "Lab Companion Compact Shaker",
        "Space-Saving Shaker India",
        "Portable Laboratory Shaker",
        "Compact Shakers Authorized Distributor And Service Provider In India"
      ],
      altText: "Compact Shakers_Jeiotech_Inkarp",
      internalLinks: ["Related Products"],
      externalLinks: ["Jeitoech Website"]
    },
    description: `
  <div style="font-family:Roboto, sans-serif; background-color:#F5F5F5; padding:20px; color:#000000;">
    <h2 style="font-family:MaxOT, sans-serif; color:#E63946;">Best Shakers in India – Compact, Reliable, and Efficient Solutions for Modern Labs</h2>
    <p>
      When it comes to choosing the best shakers in India, laboratories look for instruments that deliver high precision, durability, and ease of use—without taking up unnecessary space. Shakers are essential for mixing, dissolving, incubating, and preparing samples across biosciences, pharmaceuticals, biotechnology, and research institutions.
    </p>
    <p>
      Among the most trusted options available today, the Jeiotech Shaker (Compact Series) stands out for its lightweight, space-saving design paired with powerful performance features. In India, these shakers are distributed and serviced exclusively by Inkarp Instruments, ensuring laboratories nationwide benefit from reliable products backed by strong local support.
    </p>

    <h2 style="font-family:MaxOT, sans-serif; color:#E63946;">Jeiotech – Shaker (Compact)</h2>
    <p>
      The Jeiotech Compact Shaker is specifically designed for laboratories where space optimization and portability are key. Despite its compact size, it delivers powerful and reliable shaking performance across a wide range of bioscience applications, making it one of the most practical and efficient choices for research environments.
    </p>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">🔹 Performance Features</h3>
    <ul>
      <li>Wide speed range (50–300 rpm), suitable for sensitive low-rpm applications.</li>
      <li>Ideal for hybridization, immunocytochemistry, gel staining/destaining, and other bioscience workflows.</li>
      <li>Microprocessor PID control ensures stable and reproducible shaking results.</li>
      <li>Orbital shaking motion (13 mm diameter) provides uniform sample mixing.</li>
      <li>Equipped with a maintenance-free BLDC motor, delivering smooth, quiet, uniform, and long-lasting performance.</li>
    </ul>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">🔹 User Convenience</h3>
    <ul>
      <li>Vivid VFD display with touch-sensitive keypad for clear visibility and intuitive operation.</li>
      <li>Real-time speed control knob for responsive adjustments during experiments.</li>
      <li>One-touch timer (1 min. to 99 hr. 59 min.) allows precise control for time-dependent experiments.</li>
      <li>Optional removable tray accommodates up to 6 well-plates or dishes.</li>
      <li>Compact and lightweight design enables use in cold rooms or incubators.</li>
      <li>Variety of accessories available, making it adaptable to multiple research needs.</li>
    </ul>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">🔹 Safety Features</h3>
    <ul>
      <li>Self-diagnostic function detects and identifies operational errors.</li>
      <li>Chemical-resistant polypropylene body, ensuring durability and easy cleaning.</li>
      <li>Over-current protection safeguards both the device and the user during prolonged use.</li>
    </ul>
  </div>
  `,
    techSpecs: {
      overview: "The Jeiotech Compact Shaker is a space-saving, lightweight shaker that combines portability with powerful orbital shaking performance. Ideal for bioscience workflows, it is designed for use in cold rooms, incubators, and limited bench spaces, offering reliable results and maximum flexibility.",
      common: {
        "Control system": "PID feedback control",
        "Display": "VFD",
        "Shaking system": { "Motion type": "Orbital" },
        "Speed range (rpm)": "50 to 300",
        "Accuracy at 100 rpm": "±5",
        "Timer": "1 min. to 99 hr. 59 min.",
        "Orbit size (mm / inch, dia)": "13 / 0.51",
        "Max. load (kg / lbs)": "up to 5.2 / 11.46",
        "Tray (W×D) (mm / inch)": "276×276 / 10.87×10.87",
        "Platform (W×D) (mm / inch)": "250×250 / 9.8×9.8",
        "Body (W×D×H) (mm / inch)": "249×325×109 / 9.8×12.8×4.3",
        "Net weight (kg / lbs)": "8 / 17.6",
        "Electrical requirements": "AC 100 ~ 240 V, 50 / 60 Hz"
      },
      perModel: {
        "CMS-350": {
          "Cat. No. (KR Plug)": "AAH3B1115K",
          "Cat. No. (US Plug)": "AAH3B1115U"
        }
      }
    },
    features: [],
    advantages: [],
    faqs: [
      {
        question: "What makes Jeiotech Compact Shakers the best choice for laboratories in India?",
        answer: "Jeiotech Compact Shakers combine powerful shaking performance with a compact and lightweight design, making them perfect for labs with limited space or for use inside cold rooms and incubators. With a speed range of 50–300 rpm and orbital diameter of 13 mm, they excel in low-rpm sensitive applications such as hybridization, immunocytochemistry, and gel staining. The BLDC motor ensures smooth, quiet, and maintenance-free operation while PID control maintains stable speed for reproducible results."
      },
      {
        question: "What are the main applications of Jeiotech Compact Shakers?",
        answer: "The Compact Shaker supports sensitive bioscience workflows including hybridization assays, immunocytochemistry, gel staining/destaining, enzyme reactions, and molecular biology protocols. Its orbital motion ensures uniform mixing without damaging delicate samples. The small footprint makes it ideal for cold rooms and incubators, supporting both academic and industrial research labs."
      },
      {
        question: "How does the BLDC motor improve the performance of Jeiotech Compact Shakers?",
        answer: "The BLDC motor offers maintenance-free, energy-efficient performance with stable torque at low and high speeds. This reduces noise and vibration, protecting sensitive samples while extending equipment life. Laboratories benefit from reliable long-term use, minimal downtime, and consistent shaking performance."
      },
      {
        question: "What is the speed range of Jeiotech Compact Shakers and why is it important?",
        answer: "Operating between 50 and 300 rpm, the Compact Shaker accommodates both gentle and moderate mixing applications. This range is particularly valuable for biological workflows where precise, low-rpm agitation is critical. For example, hybridization assays and gel staining require consistent orbital motion within this speed range for reproducible results."
      },
      {
        question: "How user-friendly are Jeiotech Compact Shakers?",
        answer: "Compact Shakers feature a bright VFD display with touch keypad, real-time speed control knob, and one-touch timer (1 min. to 99 hr. 59 min.). Optional removable trays and lightweight portability add convenience, allowing seamless use across lab environments."
      },
      {
        question: "Can Jeiotech Compact Shakers be used in cold rooms or incubators?",
        answer: "Yes. The compact size, light weight, and BLDC motor design make them ideal for temperature-controlled environments like cold rooms and incubators. This flexibility supports workflows requiring strict temperature conditions."
      },
      {
        question: "What safety features are built into Jeiotech Compact Shakers?",
        answer: "Safety includes self-diagnostic error detection, a chemical-resistant polypropylene body, and over-current protection. These ensure durability, easy cleaning, and safe long-term operation."
      },
      {
        question: "Why are Jeiotech Compact Shakers considered space-saving and portable?",
        answer: "They combine a small footprint with lightweight construction, allowing easy relocation between workstations, incubators, and cold rooms. Despite compact size, they deliver full shaking performance comparable to larger units."
      },
      {
        question: "Why should Indian laboratories buy Jeiotech Compact Shakers from Inkarp?",
        answer: "Inkarp provides genuine Jeiotech Compact Shakers with warranty protection, installation, training, and nationwide after-sales service. With 40+ years of experience and service centers across India, Inkarp ensures reliability and long-term operational support."
      },
      {
        question: "Where can I buy Jeiotech Compact Shakers in India?",
        answer: "They are available exclusively through Inkarp Instruments Pvt. Ltd., the authorized distributor. Contact Inkarp via the official website or regional offices for authentic purchases, warranty support, and tailored recommendations."
      }
    ]
  },

  "microplate-shaker": {
    id: "microplate-shaker",
    name: "Microplate Shaker",
    category: "Shakers",
    image: S6, // e.g. import S6 from "/images/products/Jeiotech/microplate-shaker.jpg";
    logo: Jeiotch,
    bannerImg: Banner3,
    altText: "Jiotech",
    videoId: null,
    meta: {
      title: "Microplate Shakers Authorized Distributor And Service Provider In India | Jeiotech | Inkarp ",
      description: " Inkarp is the authorized distributor for Jeiotech Microplate Shakers in India. Compact design, BLDC motor, orbital motion, and simultaneous shaking of 4 microplates with nationwide service support.",
      keywords: [
        " Jeiotech Microplate Shaker",
        " Best Laboratory Shakers in India",
        " Microplate Orbital Shaker India",
        " BLDC Motor Shaker",
        " Laboratory Mixing Equipment India",
        " High Speed Microplate Shaker",
        " Inkarp Jeiotech Shaker",
        " Lab Companion Microplate Shaker",
        " Compact Laboratory Shaker",
        " Microplate Shaker Distributor India",
        " Microplate Shakers Authorized Distributor And Service Provider In India"
      ],
      altText: "Microplate Shakers_Jeiotech_Inkarp",
      internalLinks: ["Related Products"],
      externalLinks: ["Jeiotech Website"]
    },
    description: `
  <div style="font-family:Roboto, sans-serif; background-color:#F5F5F5; padding:20px; color:#000000;">
    <h2 style="font-family:MaxOT, sans-serif; color:#E63946;">Best Shakers in India – Advanced Microplate Shakers for Precise Laboratory Applications</h2>
    <p>
      Laboratory shakers are essential for research and industrial applications where consistent and precise sample mixing is critical. From pharmaceuticals and biotechnology to food sciences and clinical diagnostics, shakers play a key role in delivering reproducible results. When researchers search for the best shakers in India, they expect equipment that combines accuracy, durability, user convenience, and safety.
    </p>
    <p>
      Among the leading options available, the Jeiotech Microplate Shaker stands out as a specialized instrument designed for high-precision applications involving microplates and microtubes. Distributed and serviced in India exclusively by Inkarp Instruments, these shakers are trusted by scientists and research professionals nationwide.
    </p>

    <h2 style="font-family:MaxOT, sans-serif; color:#E63946;">Jeiotech – Microplate Shaker</h2>
    <p>
      The Jeiotech Microplate Shaker is purpose-built to deliver reliable, simultaneous shaking of up to four microplates. Its compact design, wide speed range, and intelligent control systems make it a versatile solution for laboratories where accuracy and reproducibility are non-negotiable.
    </p>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">🔹 Performance Features</h3>
    <ul>
      <li>Optimized to shake four microplates simultaneously, ensuring consistent results across parallel experiments.</li>
      <li>Microprocessor PID control maintains constant speed and stability, even during long experimental runs.</li>
      <li>Wide speed range from 150 to 1,200 rpm, suitable for both gentle and vigorous shaking requirements.</li>
      <li>Orbital shaking motion with a 3 mm diameter, delivering uniform mixing without damaging samples.</li>
      <li>Smooth start function prevents sample spillage or contamination during initial acceleration.</li>
      <li>Equipped with a maintenance-free BLDC motor, ensuring smooth, quiet, and long-lasting performance.</li>
    </ul>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">🔹 User Convenience</h3>
    <ul>
      <li>Bright and colorful VFD display with a touch-sensitive keypad for easy operation.</li>
      <li>One-touch timer (1 min to 99 hr 59 min) for precise time-dependent shaking.</li>
      <li>Compact and lightweight design, allowing operation in cold rooms or incubators without compromising performance.</li>
      <li>Wide range of optional accessories available, including racks for 1.5 ml microtubes, 15 ml conical tubes, and 50 ml conical tubes, expanding usability beyond microplates.</li>
    </ul>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">🔹 Safety Features</h3>
    <ul>
      <li>Self-diagnostic function to quickly identify and report operational errors.</li>
      <li>Polypropylene main body, highly resistant to chemicals and easy to clean, ensuring durability and hygiene.</li>
      <li>Over-current protection, safeguarding both the shaker and the operator during prolonged or high-speed operation.</li>
    </ul>

    <p>
      The Jeiotech Microplate Shaker is the ideal solution for laboratories requiring precision, reliability, and versatility in microplate-based workflows. With features like simultaneous shaking of four microplates, advanced PID control, BLDC motor stability, and a compact, portable design, it offers exceptional value for both academic and industrial research.
    </p>
    <p>By choosing Inkarp Instruments, the authorized distributor of Jeiotech in India, customers benefit from:</p>
    <ul>
      <li>Expert consultation to select the right shaker model.</li>
      <li>Professional installation and commissioning by trained engineers.</li>
      <li>Hands-on user training to ensure safe and efficient operation.</li>
      <li>Preventive maintenance and nationwide service support.</li>
      <li>Access to genuine Jeiotech spare parts and accessories for long-term reliability.</li>
    </ul>
  </div>
  `,
    techSpecs: {
      overview: "Compact microplate shaker optimized for simultaneous shaking of four microplates; BLDC motor; orbital 3 mm motion; PID speed control; wide 150–1,200 rpm range; cold room/incubator compatible; chemical-resistant body and safety protections.",
      common: {
        "Control system": "PID feedback control",
        "Display": "VFD",
        "Shaking system": { "Motion type": "Orbital" },
        "Speed range (rpm)": "150 to 1,200",
        "Accuracy at 500 rpm": "±15",
        "Timer": "1min. to 99hr. 59min.",
        "Orbit size (mm / inch, dia)": "3 / 0.12",
        "Max. load (kg / lbs)": "4 / 8.8",
        "Tray (W×D) (mm / inch)": "269×185 / 10.6×7.3",
        "Body (W×D×H) (mm / inch)": "269×325×128 / 10.6×12.8×5.0",
        "Net weight (kg / lbs)": "7.7 / 17",
        "Electrical requirements": "AC 100 ~ 240 V, 50/60 Hz"
      },
      perModel: {
        "CPS-350": {
          "Cat. No. (KR Plug)": "AAH3C1115K",
          "Cat. No. (US Plug)": "AAH3C1115U"
        }
      }
    },
    features: [],
    advantages: [],
    faqs: [
      {
        question: "What makes Jeiotech Microplate Shakers one of the best laboratory shakers in India?",
        answer: "Jeiotech Microplate Shakers are considered among the best laboratory shakers in India because they are purpose-built for microplate applications, offering precision, reliability, and compact design. With the ability to shake four microplates simultaneously, they are ideal for high-throughput laboratories and research facilities. The shakers feature microprocessor PID control to maintain consistent speed, an orbital motion of 3 mm diameter for uniform mixing, and a BLDC motor for smooth, quiet, and maintenance-free operation. Their portability, compatibility with incubators and cold rooms, and wide range of accessories make them a versatile choice for molecular biology, clinical diagnostics, and pharmaceutical research."
      },
      {
        question: "What are the main applications of Jeiotech Microplate Shakers?",
        answer: "Jeiotech Microplate Shakers are widely used in molecular biology, immunoassays, cell culture research, enzyme kinetics, and drug discovery. They are ideal for applications requiring uniform mixing of reagents in microplates, including ELISA assays, PCR plate preparation, and staining/destaining processes. Their ability to shake multiple microplates simultaneously increases productivity in high-throughput testing environments, while optional accessories extend their use to microtubes and conical tubes. This versatility makes them indispensable in both academic research labs and industrial R&D facilities across India."
      },
      {
        question: "How many microplates can be used in a Jeiotech Microplate Shaker?",
        answer: "Jeiotech Microplate Shakers are optimized to shake up to four microplates simultaneously, ensuring consistent and repeatable results across multiple samples. This capability significantly enhances laboratory efficiency by allowing researchers to process multiple assays in parallel. With the optional tube racks, the shaker can also accommodate 1.5 ml microtubes, 15 ml conical tubes, and 50 ml conical tubes, making it a highly flexible instrument for diverse laboratory workflows."
      },
      {
        question: "What is the speed range of Jeiotech Microplate Shakers and why does it matter?",
        answer: "The Jeiotech Microplate Shaker offers a wide speed range of 150 to 1,200 rpm, enabling researchers to perform both gentle mixing and vigorous agitation depending on their experimental requirements. The orbital motion (3 mm diameter) ensures uniform mixing across wells without sample cross-contamination. This flexibility is critical for assays like ELISA, where precision and reproducibility are vital, as well as for routine workflows where consistent mixing ensures accuracy in downstream analysis."
      },
      {
        question: "How does the BLDC motor improve performance in Jeiotech Microplate Shakers?",
        answer: "The Brushless DC (BLDC) motor provides smooth, powerful, and maintenance-free performance. It eliminates the noise and wear issues of traditional DC motors, ensuring a quiet lab environment and long-term durability. The motor generates uniform shaking motion across all microplates, even under extended operation. For laboratories in India that demand reliable instruments with minimal downtime, the BLDC motor in Jeiotech Microplate Shakers offers both performance and peace of mind, reducing long-term operational costs."
      },
      {
        question: "Can Jeiotech Microplate Shakers be used in cold rooms or incubators?",
        answer: "Yes, Jeiotech Microplate Shakers are designed with a compact and lightweight body, making them suitable for use in cold rooms and incubators. This feature ensures they can support temperature-sensitive applications, such as enzyme reactions and cell culture assays. Their portability allows researchers to move them between different laboratory environments as needed, while their robust construction ensures stable operation under varying conditions."
      },
      {
        question: "What safety features are included in Jeiotech Microplate Shakers?",
        answer: "Jeiotech Microplate Shakers prioritize safety with multiple built-in features. These include a self-diagnostic function that identifies errors, over-current protection to safeguard internal components, and a chemical-resistant polypropylene body that is easy to clean and maintain. The smooth start function prevents sample contamination or spills during initial acceleration, making them especially safe for sensitive biological assays. These features ensure safe, reliable operation even in high-volume laboratories."
      },
      {
        question: "How user-friendly are Jeiotech Microplate Shakers?",
        answer: "Jeiotech Microplate Shakers are designed for ease of use. They feature a bright VFD display with a touch-sensitive keypad for clear and intuitive control, along with a one-touch timer programmable from 1 minute to 99 hours 59 minutes. Researchers benefit from real-time speed adjustments, compact design for easy placement, and optional accessories for enhanced versatility. These user-friendly features make them suitable for both routine laboratory operations and advanced research applications."
      },
      {
        question: "Why should Indian laboratories buy Jeiotech Microplate Shakers from Inkarp?",
        answer: "Inkarp is the authorized distributor and service provider for Jeiotech in India, bringing more than 40 years of experience in supplying scientific equipment. Laboratories purchasing through Inkarp receive genuine products, expert guidance, professional installation, user training, preventive maintenance, and fast access to spare parts. Inkarp’s nationwide service network ensures timely support, reducing downtime and maximizing operational efficiency. This makes Inkarp the trusted partner for Indian laboratories seeking reliable and cost-effective solutions."
      },
      {
        question: "Where can I buy Jeiotech Microplate Shakers in India?",
        answer: "Jeiotech Microplate Shakers are available exclusively through Inkarp Instruments Pvt. Ltd., the official authorized distributor in India. Buying directly from Inkarp ensures product authenticity, warranty coverage, and responsive after-sales support. With service centers across the country, Inkarp guarantees reliable delivery, expert setup, and continuous technical assistance. Laboratories can connect with Inkarp through the official website or regional offices to purchase Microplate Shakers and receive tailored recommendations for their specific applications."
      }
    ]
  },

  "rocking-shaker": {
    id: "rocking-shaker",
    name: "Rocking Shaker",
    category: "Shakers",
    image: S7, 
    logo: Jeiotch,
    bannerImg: Banner3,
    altText: "Jiotech",
    videoId: null,
    meta: {
      title: "Rocking Shakers Authorized Distributor And Service Provider In India | Jeiotech | Inkarp",
      description: "Discover the best shakers in India with Jeiotech’s Rocking Shaker. Adjustable tilt angle, precise digital speed control, and compact design for reliable lab performance. Available with full support and service.",
      keywords: [
        "Best Shakers in India",
        "Jeiotech Rocking Shaker",
        "Rocking Shaker Supplier India",
        "Laboratory Shakers India",
        "Digital Rocking Shaker",
        "Rocking Motion Shaker",
        "Lab Rocking Shaker Distributor"
      ],
      altText: "Rocking Shaker_Jeiotech_Inkarp",
      internalLinks: ["Related Products"],
      externalLinks: ["Jeitoech Website"]
    },
    description: `
  <div style="font-family:Roboto, sans-serif; background-color:#F5F5F5; padding:20px; color:#000000;">
    <h2 style="font-family:MaxOT, sans-serif; color:#E63946;">Rocking Shaker</h2>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">Best Shakers in India – Reliable Rocking Shakers for Gentle and Precise Mixing</h3>
    <p>
      When it comes to laboratory research, choosing the best shakers in India is essential for ensuring consistent, reproducible, and safe sample preparation. Shakers are indispensable across pharmaceuticals, biotechnology, life sciences, food research, and academic laboratories. Among the various types available, rocking shakers are especially popular for applications requiring gentle, yet uniform mixing—such as cell culture work, staining, hybridization, and washing processes.
    </p>
    <p>
      Among the top laboratory equipment brands, Jeiotech Rocking Shakers stand out for their precision, versatility, and durability. Distributed and supported exclusively in India by Inkarp Instruments, these shakers combine advanced technology with user-friendly design to deliver unmatched performance for sensitive laboratory tasks.
    </p>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">Jeiotech – Rocking Shaker</h3>
    <p>
      The Jeiotech Rocking Shaker is engineered to provide smooth and consistent rocking motion with adjustable tilt angles and precise digital speed control. Compact and lightweight, it is highly versatile and suitable for use in both standard lab environments and specialized setups such as cold rooms and incubators.
    </p>

    <h4 style="font-family:MaxOT, sans-serif; color:#E63946;">🔹 Performance Features</h4>
    <ul>
      <li>Microprocessor PID control ensures stable and accurate rocking performance.</li>
      <li>Digital speed control offers gentle to vigorous motion across a wide range: 5 to 100 rpm.</li>
      <li>Adjustable tilt angle (7° to 13°) allows researchers to set the optimal motion for their samples.</li>
      <li>Smooth, quiet, and uniform rocking ensures reliable results with minimal sample disturbance.</li>
    </ul>

    <h4 style="font-family:MaxOT, sans-serif; color:#E63946;">🔹 User Convenience</h4>
    <ul>
      <li>Bright and colorful VFD display with a touch-sensitive keypad for easy control and monitoring.</li>
      <li>One-touch timer for time-dependent shaking, programmable from 1 min to 99 hr 59 min.</li>
      <li>Compact and lightweight design, allowing placement inside incubators or cold rooms.</li>
      <li>Interchangeable tray system with three options:</li>
    </ul>
    <ul style="margin-left:18px;">
      <li>Standard dimpled mat (included)</li>
      <li>Optional rubber mat</li>
      <li>Universal harness for plates, dishes, and glassware</li>
    </ul>
    <ul>
      <li>Wide range of accessories available, accommodating different vessel types such as test tubes, beakers, vials, micro-well plates, culture dishes, and trays.</li>
    </ul>

    <h4 style="font-family:MaxOT, sans-serif; color:#E63946;">🔹 Safety Features</h4>
    <ul>
      <li>Self-diagnostic function quickly identifies operational errors.</li>
      <li>Polypropylene main body provides excellent chemical resistance and easy cleaning.</li>
      <li>Over-current protection safeguards the device and ensures safe operation during prolonged use.</li>
    </ul>

    <p>
      The Jeiotech Rocking Shaker is the ideal solution for laboratories that require gentle but precise mixing for sensitive biological and chemical applications. With its adjustable tilt, programmable speed, and reliable digital controls, it provides reproducible results while ensuring maximum sample safety. Its compact, portable design further enhances flexibility, making it suitable for a wide range of laboratory environments.
    </p>
    <p>By choosing Inkarp Instruments, the authorized distributor of Jeiotech in India, laboratories gain access to:</p>
    <ul>
      <li>Expert consultation for selecting the right shaker model.</li>
      <li>Professional installation and commissioning.</li>
      <li>Hands-on user training and process guidance.</li>
      <li>Preventive maintenance and responsive after-sales service.</li>
      <li>Genuine Jeiotech spare parts and accessories with fast delivery.</li>
    </ul>
  </div>
  `,
    techSpecs: {
      overview: "Digital rocking shaker with adjustable 7–13° tilt, 5–100 rpm range, PID speed control, compact/lightweight body, interchangeable trays, and safety protections for reliable gentle mixing.",
      common: {
        "Control system": "PID feedback control",
        "Display": "VFD",
        "Shaking system": { "Motion type": "Rocking" },
        "Speed range (rpm)": "5 to 100",
        "Accuracy at 100 rpm": "±5",
        "Tilt angle": "7 to 13°",
        "Max. load (kg / Ibs)": "5 / 11.02",
        "Material": {
          "Dimpled mat (standard)": "PP(polypropylene), Silicone"
        },
        "Body": "PP (polypropylene)",
        "Tray (W×D) (mm / inch)": "276×276 / 10.87×10.87",
        "Body (W×D×H) (mm / inch)": "249×325×138 / 9.8×12.8×5.4",
        "Net weight (kg / Ibs)": "3.7 / 8.16",
        "Electrical requirements": "AC 100 ~ 240 V, 50/60 Hz"
      },
      perModel: {
        "CRS-350": {
          "Cat. No. (KR Plug)": "AAH391115K",
          "Cat. No. (US Plug)": "AAH391115U"
        }
      }
    },
    features: [],
    advantages: [],
    faqs: [
      {
        question: "Q1. What makes the Jeiotech Rocking Shaker the best shaker for laboratories in India?",
        answer: "The Jeiotech Rocking Shaker is considered one of the best laboratory shakers in India because of its advanced combination of precision control, durability, and versatility. Unlike traditional manual shakers, it is powered by a microprocessor PID control system that ensures consistent and reliable performance over long experimental runs. Its digital speed range of 5 to 100 rpm allows both gentle and vigorous rocking motions, making it suitable for sensitive biological samples like gels and membranes as well as more robust mixing applications. The adjustable tilt angle (7°–13°) gives users the flexibility to optimize rocking intensity for different protocols. Its compact and lightweight design makes it compatible with cold rooms and incubators, while the chemical-resistant polypropylene body ensures longevity even in harsh laboratory environments. Added safety features like over-current protection and self-diagnostic functions further reinforce why researchers and industries regard it as the best choice among shakers in India."
      },
      {
        question: "Q2. What are the main applications of the Jeiotech Rocking Shaker in Indian laboratories?",
        answer: "The Jeiotech Rocking Shaker is used across multiple industries in India due to its ability to deliver controlled rocking motion with precision. In molecular biology and biochemistry labs, it is essential for gel staining, destaining, and blotting processes where even rocking ensures uniform reagent penetration. In pharmaceutical research and clinical diagnostics, it supports sample mixing, incubation, hybridization, and reagent preparation, critical for accuracy in drug discovery and clinical testing. Food and environmental testing labs use it to mix cultures, homogenize solutions, and perform quality control testing. Its compact design allows it to be placed in incubators for cell culture and microbiological studies, enabling researchers to mimic physiological environments. The wide range of accessories such as dimpled mats, rubber mats, and universal harnesses makes it adaptable to a variety of containers, including test tubes, beakers, vials, and culture dishes. With such versatility, it has become a go-to laboratory shaker for research and industrial applications across India."
      },
      {
        question: "Q3. How does the adjustable tilt angle in Jeiotech Rocking Shakers benefit laboratory workflows?",
        answer: "One of the most valuable features of the Jeiotech Rocking Shaker is its adjustable tilt angle, which ranges from 7° to 13°. This flexibility allows scientists and technicians to fine-tune the intensity of rocking motion based on their experimental needs. For example, a lower tilt angle is ideal for delicate samples like gels, tissues, or hybridization membranes where gentle mixing is required to avoid damaging the material. On the other hand, a higher tilt angle enhances agitation, making it suitable for dissolving reagents, mixing viscous solutions, or working with high-density samples. By providing this control, Jeiotech ensures that researchers can maintain uniform sample exposure, accurate reagent penetration, and repeatable results. In addition, the adjustable rocking motion minimizes the risk of sample separation, ensuring consistent mixing throughout the container. This adaptability makes the rocking shaker a valuable asset in biotech, pharma, food, chemical, and academic research labs across India, where precision in sample preparation directly impacts experimental outcomes."
      },
      {
        question: "Q4. Can Jeiotech Rocking Shakers be used inside incubators and cold rooms?",
        answer: "Yes, the Jeiotech Rocking Shaker is specifically designed to be compact, lightweight, and versatile, making it suitable for use in both incubators and cold rooms. This feature is particularly important for laboratories in India that require controlled environments for cell culture, microbial growth, hybridization, or biochemical reactions. Traditional shakers often fail in extreme temperature conditions, but Jeiotech’s design ensures smooth performance across a range of environments. Researchers can use it for temperature-dependent studies such as protein binding, enzyme reactions, and DNA/RNA hybridization without compromising sample stability. The shaker’s robust polypropylene body is resistant to chemical exposure and easy to clean, ensuring long service life even in demanding lab conditions. The ability to operate in incubators also supports long-term shaking experiments where maintaining both rocking motion and controlled temperature is essential. This makes the Jeiotech Rocking Shaker a preferred choice for biotechnology and pharmaceutical labs across India that focus on reproducible and reliable results."
      },
      {
        question: "Q5. How does the digital speed control enhance the performance of Jeiotech Rocking Shakers?",
        answer: "The digital speed control system in Jeiotech Rocking Shakers is a major advantage for laboratories that require high accuracy and repeatability in their mixing protocols. The shaker allows users to precisely adjust the rocking speed between 5 and 100 rpm, covering both gentle and vigorous mixing applications. Unlike analog systems, which can be inconsistent, the microprocessor-based PID controller ensures that the selected speed remains stable throughout the experiment, regardless of load variations or environmental conditions. For sensitive biological processes like gel staining or nucleic acid hybridization, maintaining a gentle, stable rocking motion is critical for consistent results. Conversely, in applications like chemical solubilization or reagent preparation, higher rocking speeds ensure faster and more efficient mixing. The digital VFD display with a touch-sensitive keypad also gives users real-time monitoring and easy control, minimizing errors. This precision-driven design makes Jeiotech Rocking Shakers one of the most reliable and accurate laboratory shakers in India."
      },
      {
        question: "Q6. What safety features make Jeiotech Rocking Shakers reliable for laboratory use?",
        answer: "Safety is a critical factor in laboratory equipment, and the Jeiotech Rocking Shaker incorporates multiple features to ensure safe operation. First, it comes with a self-diagnostic function that automatically identifies operational errors, helping users detect issues early and reduce downtime. Its polypropylene body is not only durable but also highly resistant to chemicals, making it suitable for labs that regularly handle corrosive substances. The surface is easy to clean and decontaminate, ensuring hygienic operation. Another key feature is the over-current protection mechanism, which prevents electrical overloads that could damage the shaker or pose a safety risk to operators. Combined with its stable structure and smooth rocking motion, these safety features ensure both operator security and equipment longevity. For labs in India, where long experimental runs and frequent equipment use are common, the Jeiotech Rocking Shaker’s safety standards make it a trusted choice for researchers, clinicians, and industrial users alike."
      },
      {
        question: "Q7. How do Jeiotech Rocking Shakers compare to orbital shakers?",
        answer: "Both rocking shakers and orbital shakers are widely used in laboratories, but they serve different purposes. A rocking shaker, such as the Jeiotech Rocking Shaker, provides a gentle to vigorous rocking motion with adjustable tilt angles. This is especially beneficial for applications like gel staining, destaining, hybridization, and sample incubation, where uniform exposure and controlled motion are crucial. On the other hand, orbital shakers deliver a circular mixing motion, which is better suited for tasks like aerating cultures, dissolving powders, or working with large flasks of liquid. Jeiotech Rocking Shakers stand out because they combine digital speed control, tilt adjustment, compact size, and safety features, making them more versatile in labs that require precision in sample preparation. For Indian laboratories looking for a balance between gentle and powerful mixing, the Jeiotech Rocking Shaker is an ideal option, whereas orbital shakers are recommended for applications that demand intense aeration and uniform suspension of samples."
      },
      {
        question: "Q8. What accessories are available with Jeiotech Rocking Shakers?",
        answer: "The Jeiotech Rocking Shaker is designed with flexibility in mind, offering a variety of removable trays and accessories to support diverse laboratory applications. The standard dimpled mat holds wellplates and tubes securely during rocking, while optional rubber mats and universal harnesses accommodate different vessel types. This versatility makes it possible to use the shaker with test tubes, beakers, vials, micro-well plates, culture dishes, and both plastic and glass trays. For labs in India handling multiple types of experiments, this adaptability reduces the need to purchase separate equipment. The removable trays also make sample handling and transport easier, allowing researchers to set up their samples outside the shaker and simply load them when ready. Combined with Jeiotech’s compact and lightweight design, these accessories ensure the shaker can meet specific experimental needs across pharmaceuticals, biotech, food testing, clinical research, and academic laboratories."
      },
      {
        question: "Q9. Is the Jeiotech Rocking Shaker suitable for long-duration experiments?",
        answer: "Yes, the Jeiotech Rocking Shaker is highly suitable for long-duration experiments, thanks to its robust design, precision control, and programmable timer functions. Researchers can set the built-in timer anywhere between 1 minute and 99 hours 59 minutes, allowing flexibility for both short and extended mixing protocols. The microprocessor PID control system ensures that speed and tilt remain stable throughout the entire run, minimizing variability in results. Additionally, the shaker operates with a smooth, quiet, and uniform rocking motion, reducing the risk of sample disruption over prolonged periods. Its durable polypropylene body and chemical resistance make it capable of withstanding continuous operation in demanding lab environments. Because of these features, it is widely used in applications such as overnight hybridizations, long-term staining, and biochemical incubations. This reliability makes it one of the most dependable rocking shakers available in India, especially for research labs that require uninterrupted workflows."
      },
      {
        question: "Q10. Where can I buy Jeiotech Rocking Shakers in India with service support?",
        answer: "The best place to purchase Jeiotech Rocking Shakers in India is through Inkarp Instruments, the authorized distributor and service provider for Jeiotech laboratory equipment. With more than four decades of experience in the scientific instrumentation industry, Inkarp provides not just the product but also end-to-end support including installation, training, and after-sales service. This ensures that laboratories across India can maximize the efficiency and lifespan of their rocking shaker. Inkarp offers nationwide coverage, so whether your lab is in Hyderabad, Mumbai, Delhi, Bangalore, or any other region, you can rely on timely delivery and technical support. Additionally, purchasing through an authorized distributor guarantees genuine products, manufacturer warranty, and access to official accessories. For Indian laboratories looking for the best shakers with local service assurance, Inkarp Instruments is the most trusted partner for acquiring the Jeiotech Rocking Shaker."
      }
    ]
  },

  "waving-shaker": {
    id: "waving-shaker",
    name: "Waving Shaker",
    category: "Shakers",
    image: S8, // e.g. import S8 from "/images/products/Jeiotech/waving-shaker.jpg";
    logo: Jeiotch,
    bannerImg: Banner3,
    altText: "Jiotech",
    videoId: null,
    meta: {
      title: " Waving Shaker Authorized Distributor & Service Provider In India | Jeiotech  | Inkarp",
      description: " Inkarp is the authorized distributor and service provider for Jeiotech Waving Shakers in India. Discover compact, precise, and reliable mixing solutions for biotech, pharma, and research labs. Nationwide support, expert consultation, and genuine parts guaranteed.",
      keywords: [
        " Jeiotech Waving Shaker India",
        " Waving Shaker Distributor",
        " Lab Shaker Supplier India",
        " Inkarp Jeiotech Shaker",
        " Compact Waving Shaker",
        " Laboratory Mixing Equipment",
        " Digital Waving Shaker",
        " Shaker for Biotech Labs",
        " Cell Culture Shaker India",
        " Research Lab Shakers",
        " Waving Shaker Authorized Distributor & Service Provider In India"
      ],
      altText: "Waving Shaker_Jeiotech_Inkarp",
      internalLinks: ["Related Products"],
      externalLinks: ["Jeiotech Website"]
    },
    description: `
  <div style="font-family:Roboto, sans-serif; background-color:#F5F5F5; padding:20px; color:#000000;">
    <h2 style="font-family:MaxOT, sans-serif; color:#E63946;">Waving Shaker</h2>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">Best Shakers in India – Jeiotech Waving Shaker</h3>
    <p>
      When it comes to finding the best shakers in India, laboratories, research centers, and pharmaceutical facilities increasingly trust the Jeiotech Waving Shaker for its precision, versatility, and durability. Designed for modern scientific workflows, this shaker delivers smooth, controlled motions with microprocessor-based PID control, ensuring consistent results across sensitive applications like gel staining, hybridization, and biochemical incubations.
    </p>
    <p>
      Unlike traditional laboratory shakers, the Jeiotech Waving Shaker combines gentle to vigorous rocking motion (8–100 rpm) with a fully adjustable tilt angle (0°–13°), allowing researchers to fine-tune the mixing intensity to match their protocols. This adaptability makes it ideal for a wide range of applications in pharma, biotech, life sciences, food testing, and clinical research labs across India.
    </p>
    <p>
      The shaker is compact and lightweight, making it suitable for use in incubators and cold rooms, while its polypropylene, chemical-resistant body ensures long service life even in demanding environments. Combined with digital speed control, timer functions, and removable tray options, the Jeiotech Waving Shaker is a top-rated laboratory shaker in India, providing researchers with unmatched reliability and convenience.
    </p>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">Jeiotech – Waving Shaker</h3>
    <p>Enhanced conveniences for tilt adjustment, removable tray, and digital control.</p>

    <h4 style="font-family:MaxOT, sans-serif; color:#E63946;">🔹 Performance</h4>
    <ul>
      <li>Microprocessor PID control for accurate and repeatable results.</li>
      <li>Digital speed control ensures gentle to vigorous shaking (8–100 rpm).</li>
      <li>Adjustable tilt angle between 0° and 13° for maximum flexibility.</li>
      <li>Smooth, quiet, uniform, yet powerful shaking motion for sensitive samples.</li>
    </ul>

    <h4 style="font-family:MaxOT, sans-serif; color:#E63946;">🔹 Convenience</h4>
    <ul>
      <li>Vivid and colorful vacuum fluorescent display (VFD) with a touch–sensitive keypad.</li>
      <li>One-touch timer for time-dependent operation (1 min. to 99 hr. 59 min.).</li>
      <li>Compact, lightweight design allows use in incubators and cold rooms.</li>
      <li>Removable trays for well-plates, tubes, and culture dishes.</li>
      <li>Accessories available for test tubes, beakers, vials, plates, and trays.</li>
    </ul>

    <h4 style="font-family:MaxOT, sans-serif; color:#E63946;">🔹 Safety</h4>
    <ul>
      <li>Self-diagnostic function identifies operational errors.</li>
      <li>Polypropylene main body: chemical-resistant and easy to clean.</li>
      <li>Over-current protection for safe, long-term use.</li>
    </ul>
  </div>
  `,
    techSpecs: {
      overview: "Enhanced conveniences for tilt adjustment, removable tray, and digital control.",
      common: {
        "Control system": "PID feedback control",
        "Display": "VFD",
        "Shaking system": { "Motion type": "Waving" },
        "Speed range(rpm)": "8 to 100",
        "Accuracy at 100 rpm": "±5",
        "Tilt angle": "0 to 13°",
        "Max. load(kg / Ibs)": "5 / 11.02",
        "Material": {
          "Dimpled mat(standard)": "PP(polypropylene),Silicone"
        },
        "Body": "PP(polypropylene)",
        "Tray (W×D) (mm / inch)": "276×276 / 10.87×10.87",
        "Body (W×D×H) (mm / inch)": "249×325×138 / 9.8×12.8×5.4",
        "Net weight(kg / Ibs)": "3.7 / 8.16",
        "Electrical requirements": "AC 100 ~ 240 V, 50/60 Hz"
      },
      perModel: {
        "CWS-350": {
          "Cat. No. (KR Plug)": "AAH381115K",
          "Cat. No. (US Plug)": "AAH381115U"
        }
      }
    },
    features: [],
    advantages: [],
    faqs: [
      {
        question: "1. What is a Waving Shaker and how is it different from other laboratory shakers?",
        answer: "A Waving Shaker is a specialized laboratory shaker designed to provide gentle yet effective mixing through a waving or see-saw motion. Unlike orbital or rocking shakers, it offers a smooth tilting action with an adjustable angle, making it suitable for sensitive applications such as cell culture, hybridization, staining, and immunoassays. This unique motion reduces shear stress on delicate samples, ensuring higher reproducibility. Jeiotech Waving Shakers are compact, digitally controlled, and equipped with a microprocessor PID system, offering stable, precise, and contamination-free mixing for modern laboratories."
      },
      {
        question: "2. What are the key features of Jeiotech Waving Shakers?",
        answer: "Jeiotech Waving Shakers are engineered with a digital speed control (8–100 rpm), adjustable tilt angle (0–13°), and microprocessor PID control for accuracy. They include a vacuum fluorescent display (VFD) with touch-sensitive keypad, making operation user-friendly. Their lightweight and compact design allows easy use in cold rooms or incubators. Safety features like self-diagnostics, chemical-resistant polypropylene body, and over-current protection ensure long-term reliability. The flexibility to use different trays and accessories makes them highly adaptable to diverse laboratory needs."
      },
      {
        question: "3. In which applications are Waving Shakers most useful?",
        answer: "Jeiotech Waving Shakers are widely used in biotechnology, life sciences, molecular biology, and pharmaceutical research. Their gentle waving motion is ideal for gel staining/destaining, immunocytochemistry, antibody binding, hybridization, and cell culture experiments. They are also effective for sample preparation in diagnostic testing, food analysis, and environmental labs. By minimizing mechanical stress and ensuring uniform mixing, these shakers help researchers achieve consistent and reproducible results in both routine and critical applications."
      },
      {
        question: "4. How does the tilt adjustment enhance performance in Waving Shakers?",
        answer: "The adjustable tilt angle (0–13°) in Jeiotech Waving Shakers allows researchers to fine-tune the intensity and type of mixing required for different applications. A smaller angle is suitable for gentle mixing of delicate samples, while a higher tilt creates more vigorous motion for thorough homogenization. This flexibility makes the equipment versatile for both sensitive biological assays and more demanding chemical mixing tasks. Combined with the digital control system, it ensures that every experiment achieves optimal mixing conditions without damaging samples."
      },
      {
        question: "5. Can Jeiotech Waving Shakers be used inside incubators or cold rooms?",
        answer: "Yes. The compact and lightweight design of Jeiotech Waving Shakers makes them ideal for use in specialized environments such as CO₂ incubators, cold rooms, and temperature-controlled chambers. Their chemical-resistant polypropylene body and maintenance-free BLDC motor ensure durability even under varying environmental conditions. This adaptability is particularly beneficial for cell culture experiments, hybridization processes, and temperature-sensitive bioscience applications, where maintaining stable environmental conditions is critical for reliable results."
      },
      {
        question: "6. What safety features are included in Jeiotech Waving Shakers?",
        answer: "Jeiotech Waving Shakers are designed with multiple safety measures to protect both the operator and samples. These include a self-diagnostic error detection system, over-current protection, and smooth start/stop functionality to prevent accidental sample spills. The polypropylene body is highly resistant to chemicals and easy to clean, minimizing contamination risks. Additionally, the low-noise, vibration-free operation ensures a safer and more pleasant working environment for researchers handling sensitive biological or chemical samples."
      },
      {
        question: "7. How easy is it to operate and maintain a Jeiotech Waving Shaker?",
        answer: "Jeiotech Waving Shakers are user-friendly and low-maintenance. The VFD display and touch keypad make it easy to monitor and control speed and time precisely. The removable trays simplify sample loading/unloading and cleaning, while accessories such as dimpled mats, rubber mats, and harnesses expand versatility. The brushless motor eliminates the need for frequent servicing, providing a quiet, maintenance-free experience. Regular preventive checks from Inkarp’s service team further ensure long-term reliability and minimal downtime."
      },
      {
        question: "8. What accessories are available for Jeiotech Waving Shakers?",
        answer: "To enhance usability, Jeiotech Waving Shakers come with a range of removable trays and holders. Standard dimpled mats are provided, with optional rubber mats and universal harnesses for flexible sample holding. They can accommodate well plates, test tubes, beakers, vials, microplates, and culture dishes, making them suitable for multiple experimental setups. This adaptability ensures that researchers can use one shaker for a variety of protocols, reducing the need for multiple instruments in the lab and saving space."
      },
      {
        question: "9. Why choose Inkarp as your supplier for Jeiotech Waving Shakers in India?",
        answer: "Inkarp, with over 40 years of expertise, is the authorized distributor and service provider for Jeiotech in India. Beyond supplying equipment, Inkarp provides expert consultation, installation, user training, preventive maintenance, and fast after-sales support. With a nationwide network of trained engineers and access to genuine Jeiotech spare parts, Inkarp ensures that your waving shaker operates with maximum uptime and reliability. Partnering with Inkarp means you gain a trusted long-term laboratory solutions provider for your research and industrial needs."
      },
      {
        question: "10. How do Jeiotech Waving Shakers improve efficiency in the lab?",
        answer: "By combining gentle and controlled motion, digital speed settings, and customizable tilt angles, Jeiotech Waving Shakers optimize mixing efficiency while protecting sensitive samples. Their ability to perform reproducible experiments with minimal contamination risk improves accuracy in bioscience research. The compact design saves space, while their compatibility with cold rooms and incubators enhances versatility. With long-lasting motors, safety features, and easy-to-use controls, these shakers significantly reduce operator workload, ensuring smooth, efficient, and reliable laboratory workflows."
      }
    ]
  },

  "heating-shaker": {
    id: "heating-shaker",
    name: "Heating Shakers",
    category: "Shakers",
    image: S9, // e.g. import S9 from "/images/products/Jeiotech/heating-shaker.jpg";
    logo: Jeiotch,
    bannerImg: Banner3,
    altText: "Jiotech",
    videoId: null,
    meta: {
      title: "Heating Shakers Authorized Distributor And Service Provider In India | Jeiotech | Inkarp",
      description: "Discover the best Heating Shakers in India with Inkarp – Authorized Distributor and Service Provider for Jeiotech Heating Shakers. Trusted by research labs, pharma, and biotech industries, our heating shakers deliver precision mixing, programmable functions, and reliable performance. Backed by expert support and nationwide service.",
      keywords: [
        "Heating Shakers in India",
        "Jeiotech Heating Shaker Distributor",
        "Best Heating Shakers India",
        "Laboratory Heating Shaker",
        "Programmable Heating Shaker",
        "Precision Mixing Shaker",
        "Inkarp Scientific Instruments",
        "Buy Heating Shaker India",
        "Lab Companion Heating Shaker",
        "Shakers with Heating Function",
        "Heating Shakers Authorized Distributor And Service Provider In India"
      ],
      altText: "Heating Shakers_ Jeitoech_Inkarp",
      internalLinks: ["Related Products"],
      externalLinks: ["Jeiotech website"]
    },
    description: `
  <div style="font-family:Roboto, sans-serif; background-color:#F5F5F5; padding:20px; color:#000000;">
    <h2 style="font-family:MaxOT, sans-serif; color:#E63946;">Best Shakers in India – Jeiotech Heating Shaker</h2>
    <p>
      When it comes to precision, efficiency, and versatility in laboratory mixing, the Jeiotech Heating Shaker stands out as one of the best shakers in India. Designed with advanced technology, this heating shaker not only provides accurate shaking performance but also integrates controlled heating, making it ideal for complex experiments across biotechnology, life sciences, pharmaceuticals, and chemical research.
    </p>
    <p>
      Unlike traditional shakers, the Jeiotech Heating Shaker offers a wide speed range from 150 to 1500 rpm (block dependent), ensuring stable and reproducible results for a variety of applications. Its microprocessor PID control guarantees consistent shaking motion, precision accuracy, and automatic temperature calibration—ensuring every experiment runs under optimal conditions.
    </p>
    <p>
      One of the highlights of this model is the programmable memory function, allowing up to 10 programs with 10 steps each. Researchers can store and recall parameters such as temperature, rpm, and time effortlessly, making repetitive experiments more efficient. The interval mix function adds flexibility by alternating between shaking and pausing, a feature particularly useful for protocols requiring rest phases.
    </p>
    <p>
      The bright VFD display with touch buttons makes operation simple and intuitive. With advanced dual timer modes, users can choose to start mixing immediately or only after the desired temperature is reached—making it highly adaptable for sensitive bioscience processes.
    </p>
    <p>
      Safety and durability are core to its design. Built with a polypropylene chemical-resistant body, anodized aluminum heating blocks for optimal heat transfer, and features such as self-diagnostic error detection, over-current protection, and vibration-minimized design, the heating shaker ensures long-term reliable performance.
    </p>
    <p>
      For laboratories in India seeking advanced shaking and heating solutions, Jeiotech Heating Shakers distributed by Inkarp provide the perfect balance of innovation, reliability, and after-sales support. Backed by Inkarp’s pan-India presence, expert consultation, and service network, researchers can be confident in achieving accurate results with minimized downtime.
    </p>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">Jeiotech – Heating Shaker</h3>
    <p>Interval mix function in program mode can be properly set according to user’s experimental conditions.</p>

    <h4 style="font-family:MaxOT, sans-serif; color:#E63946;">Performance</h4>
    <ul>
      <li>Microprocessor PID control ensuring consistent shaking motion and precision accuracy.</li>
      <li>Wide speed range from 150 to 1500 rpm (block dependent).</li>
      <li>Automatic temperature calibration.</li>
    </ul>

    <h4 style="font-family:MaxOT, sans-serif; color:#E63946;">Convenience</h4>
    <ul>
      <li>Bright VFD display with responsive touch buttons.</li>
      <li>Memory function of programs storing relevant parameters (temperature, rpm, time).</li>
      <li>Up to 10 programs stored.</li>
      <li>Up to 10 steps per program.</li>
      <li>Interval mix function for alternating shaking and phasing.</li>
      <li>Advanced dual wait on/off timer modes: start immediately after setting or after reaching the set temperature.</li>
      <li>Corrosion-resistant anodized aluminum blocks ensure optimal heat transfer.</li>
    </ul>

    <h4 style="font-family:MaxOT, sans-serif; color:#E63946;">Safety</h4>
    <ul>
      <li>Self-diagnostic function identifying errors.</li>
      <li>Polypropylene main body is chemical-resistant and easy to clean.</li>
      <li>Low-profile design with rubber feet for minimal vibration and noise.</li>
      <li>Over-current protection for added safety.</li>
    </ul>
  </div>
  `,
    techSpecs: {
      overview: "Interval mix function in program mode can be properly set according to user’s experimental conditions.",
      common: {
        "Control": "PID feedback control",
        "Display": "VFD (0.1℃ resolution)",
        "Temperature": {
          "Range (℃/℉)": "Amb. +5 to 100 / 41 to 212",
          "Fluctuation at 80℃ (±℃/℉)": "0.3 / 0.9",
          "Variation at 80℃ (±℃/℉)": "0.7 / 0.27",
          "Heating power (W)": "360"
        },
        "Safety": {
          "Over temp.": "Heating plate",
          "PCB": "",
          "Over current": "Current limit protection"
        },
        "Shaking system": {
          "Motion type": "Orbital",
          "Orbit size (mm / inch, dia.)": "2 / 0.08",
          "Speed range (rpm)": {
            "96-well tube block": "150 to 1500",
            "0.5㎖tube block": "150 to 1000",
            "1.5㎖tube block": "150 to 1000",
            "15㎖tube block": "150 to 900",
            "Ø12 tube block": "150 to 850",
            "Ø13 tube block": "150 to 850",
            "50㎖tube block": "150 to 800"
          }
        },
        "Dimension": {
          "Body 1) (mm / inch)": "249 x 325 x 120 / 9.8 x 12.8 x 4.7"
        },
        "Net weight (Kg / lbs)": "8.3 / 18.3",
        "Electrical requirements (230V, 50Hz / 60Hz)": "1.7A",
        "Cat. No. (230V)": "AAHJ4015K",
        "Electrical requirements (120V, 60Hz)": "3.4A",
        "Cat. No. (120V)": "AAHJ4013U"
      },
      perModel: {
        "CBS-350": {}
      }
    },
    features: [],
    advantages: [],
    faqs: [
      {
        question: "1. What is a Heating Shaker and how is it used in laboratories?",
        answer: "A Heating Shaker is a laboratory instrument that combines shaking and heating functions to provide controlled mixing and incubation of samples. It is widely used in molecular biology, biochemistry, clinical diagnostics, and pharmaceutical research. Heating Shakers maintain precise temperature and shaking speeds, making them ideal for enzyme reactions, protein studies, hybridization, and other applications where both mixing and heating are essential. Jeiotech Heating Shakers deliver consistent results with programmable functions, ensuring reproducibility and efficiency in research workflows."
      },
      {
        question: "2. Why should I choose Jeiotech Heating Shakers over other brands?",
        answer: "Jeiotech Heating Shakers are globally recognized for their precision, durability, and advanced technology. Unlike conventional shakers, they feature microprocessor PID control for accurate speed and temperature calibration, programmable memory functions for multi-step experiments, and interval mix modes for advanced experimental setups. Their corrosion-resistant design, maintenance-free BLDC motor, and high-speed range (up to 1500 rpm) make them superior to competitor products. With Inkarp as the authorized distributor, you also receive expert consultation, installation, and after-sales service across India."
      },
      {
        question: "3. What are the key applications of Jeiotech Heating Shakers?",
        answer: "Heating Shakers are used in a wide range of laboratory and industrial applications. These include enzyme kinetics, molecular biology protocols, nucleic acid hybridization, immunological studies, bacterial and yeast culture incubation, protein expression analysis, pharmaceutical testing, and biochemical assays. Their ability to combine precise heating with orbital shaking ensures accurate and reproducible results, making them essential for advanced research, clinical laboratories, and biotech companies."
      },
      {
        question: "4. How accurate are Jeiotech Heating Shakers in maintaining temperature and speed?",
        answer: "Jeiotech Heating Shakers provide exceptional accuracy thanks to microprocessor PID control and automatic calibration systems. The shaking speed ranges from 150 to 1500 rpm (block dependent) with smooth acceleration and deceleration for spill prevention. The heating system ensures uniform temperature distribution across samples, with tight coupling design between the body and anodized aluminum blocks for optimal heat transfer. These features guarantee that researchers achieve reliable, repeatable results with every experiment."
      },
      {
        question: "5. Can Jeiotech Heating Shakers store experimental programs?",
        answer: "Yes, Jeiotech Heating Shakers are designed with advanced programmable memory functions. Users can store up to 10 programs, with each program supporting up to 10 steps. This feature allows researchers to automate complex experiments that require different shaking speeds, time intervals, and temperature changes. Additionally, the interval mix function enables switching between shaking and pausing cycles, making the system highly flexible for multi-step protocols and time-sensitive experiments."
      },
      {
        question: "6. What safety features are included in Jeiotech Heating Shakers?",
        answer: "Safety is a priority in Jeiotech Heating Shakers. They are equipped with a self-diagnostic system to detect operational errors, over-current protection to prevent electrical damage, and low-profile rubber feet to minimize vibration and noise. The chemical-resistant polypropylene body ensures durability in harsh lab environments, while smooth start/stop functions reduce the risk of spills or contamination. These features collectively ensure safe and stable operation even during long experimental runs."
      },
      {
        question: "7. Can Jeiotech Heating Shakers be used inside incubators or cold rooms?",
        answer: "Yes, due to their compact and robust design, Jeiotech Heating Shakers can be used in specialized environments such as cold rooms and incubators, depending on application requirements. Their quiet BLDC motor ensures minimal disturbance in controlled environments, while their small footprint allows for efficient space utilization. This makes them an excellent choice for laboratories with limited bench space that still require advanced mixing and heating functionality."
      },
      {
        question: "8. How does Inkarp support customers using Jeiotech Heating Shakers in India?",
        answer: "As the authorized distributor and service provider, Inkarp offers end-to-end support for Jeiotech Heating Shakers across India. This includes pre-purchase consultation to recommend the right model, installation and commissioning by trained engineers, on-site training for laboratory staff, preventive maintenance services, and access to genuine spare parts. With a nationwide service network and more than 40 years of experience, Inkarp ensures seamless operation, minimal downtime, and long-term reliability of your shaker systems."
      },
      {
        question: "9. Are accessories available for Jeiotech Heating Shakers?",
        answer: "Yes, Jeiotech Heating Shakers come with a wide range of optional accessories to suit diverse laboratory needs. These include interchangeable aluminum blocks, sample holders, tube racks, and trays for various flask sizes, microplates, and vials. The accessory options make it easy to adapt the heating shaker for different experimental setups, enhancing flexibility and productivity in the lab. Inkarp ensures the availability of genuine accessories and helps configure the right setup for your research."
      },
      {
        question: "10. Where can I buy Jeiotech Heating Shakers in India?",
        answer: "You can purchase Jeiotech Heating Shakers directly from Inkarp, the authorized distributor and service provider in India. With offices and service teams across major cities, Inkarp offers nationwide coverage for product supply, installation, training, and after-sales service. By buying from Inkarp, you not only get access to authentic Jeiotech instruments but also benefit from expert guidance, fast technical support, and long-term maintenance services to maximize your lab’s performance."
      }
    ]
  },

  "incubated-shakers-tabletop": {
    id: "incubated-shakers-tabletop",
    name: "Incubated Shakers (Tabletop)",
    category: "Shakers",
    image: S10, // e.g. import S10 from "/images/products/Jeiotech/incubated-shakers-tabletop.jpg";
    logo: Jeiotch,
    bannerImg: Banner3,
    altText: "Jiotech",
    videoId: null,
    meta: {
      title: "Incubated Shakers Authorized Distributor And Service Provider In India | Jeiotech | Inkarp",
      description: "Explore the best incubated shakers in India with Inkarp – Authorized Distributor for Jeiotech Tabletop Incubated Shakers. Delivering precision temperature control, reliable orbital shaking, and sustainable eco-friendly design for research, pharma, and biotech labs. Backed by nationwide service and expert support.",
      keywords: [
        "Incubated Shakers India",
        "Jeiotech Incubated Shaker Distributor",
        "Tabletop Incubated Shakers",
        "Best Laboratory Shakers India",
        "Orbital Incubated Shaker",
        "Refrigerated Shaker India",
        "Inkarp Scientific Instruments",
        "Buy Jeiotech Shakers India",
        "Shaker Incubator India",
        "Lab Companion Incubated Shaker",
        "Incubated Shakers Authorized Distributor And Service Provider In India"
      ],
      altText: "Incubated Shakers_Jeiotech_Inkarp",
      internalLinks: ["Related Products"],
      externalLinks: ["Jeiotech Website"]
    },
    description: `
  <div style="font-family:Roboto, sans-serif; background-color:#F5F5F5; padding:20px; color:#000000;">
    <h2 style="font-family:MaxOT, sans-serif; color:#E63946;">Best Shakers in India – Jeiotech Incubated Shakers (Tabletop)</h2>
    <p>
      When it comes to reliable and precise mixing equipment, laboratories across India look for the best shakers that combine performance, flexibility, and durability. Among the many options available, Jeiotech’s Incubated Shakers (Tabletop) stand out as one of the most advanced solutions for researchers, biotech companies, and pharmaceutical laboratories. Distributed and supported exclusively in India by Inkarp Instruments, these benchtop incubated shakers are designed to deliver accurate temperature control, high-speed shaking performance, and unmatched convenience for a variety of scientific applications.
    </p>
    <p>
      Unlike standard laboratory shakers, incubated shakers offer the dual advantage of precise temperature control and consistent orbital shaking, making them indispensable for cell culture, protein expression, enzyme studies, microbial incubation, and biochemical analysis. Jeiotech’s tabletop models provide laboratories with compact yet powerful equipment that ensures uniform temperature distribution and reproducible results, even under demanding workloads.
    </p>
    <p>
      With features like microprocessor PID control, automatic temperature calibration, wide shaking range up to 500 rpm, and BLDC motor technology, these instruments guarantee reliable performance with minimal maintenance. Additionally, their eco-friendly design with R-600a refrigerant (R models) reflects Jeiotech’s commitment to sustainability.
    </p>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">Jeiotech – Incubated Shakers (Tabletop)</h3>
    <p>Digital incubating/refrigerating benchtop shakers with optional dedicated platform and universal attachment.</p>

    <h4 style="font-family:MaxOT, sans-serif; color:#E63946;">Performance</h4>
    <ul>
      <li>Temperature range:</li>
    </ul>
    <ul style="margin-left:18px;">
      <li>Ambient +5°C to 80°C for IST-3075 / 4075.</li>
      <li>Ambient -15°C (Min. 15) to 80°C for IST-3075R / 4075R.</li>
    </ul>
    <ul>
      <li>Competitive high shaking speed up to 500 rpm.</li>
      <li>Orbital shaking motion in 19 mm diameter.</li>
      <li>Microprocessor PID control with 3-point calibration.</li>
      <li>BLDC motor ensures smooth, quiet, and powerful shaking.</li>
      <li>Smooth acceleration/deceleration to prevent sample spills.</li>
      <li>High-velocity fan for uniform heating and fast recovery.</li>
      <li>Air-tight silicone door seal for excellent temperature consistency.</li>
    </ul>

    <h4 style="font-family:MaxOT, sans-serif; color:#E63946;">Design for Sustainability</h4>
    <ul>
      <li>Eco-friendly R-600a refrigerant in R models to reduce greenhouse emissions.</li>
    </ul>

    <h4 style="font-family:MaxOT, sans-serif; color:#E63946;">Convenience</h4>
    <ul>
      <li>Intuitive touch screen LCD with logical menus.</li>
      <li>Easy-set digital timer (1 min to 999 hr. 59 min).</li>
      <li>Transparent lid with LED lighting for sample monitoring.</li>
      <li>Gas spring lid supports for smooth opening/closing.</li>
      <li>Stainless steel corrosion-resistant chamber.</li>
      <li>RS-232 & USB ports for external control and data storage.</li>
      <li>Remote monitoring with LC Connected (optional).</li>
    </ul>

    <h4 style="font-family:MaxOT, sans-serif; color:#E63946;">Safety</h4>
    <ul>
      <li>Auto-run after power restoration.</li>
      <li>Alarms for temperature/speed deviations.</li>
      <li>Over-current & stalled platform protection.</li>
      <li>Mechanical over-temperature safety device.</li>
      <li>Open-door alarms with visual and audible signals.</li>
      <li>Environment-friendly CFC-free refrigerant (R models).</li>
    </ul>
  </div>
  `,
    techSpecs: {
      overview: "Digital incubating/refrigerating benchtop shakers with optional dedicated platform and universal attachment.",
      common: {
        "Shaking system": {
          "Motion type": "Orbital",
          "Amplitude size (mm / inch, dia.)": "19.1 / 0.75",
          "Speed range (RPM)": "20 to 500",
          "Accuracy": "±1% of set speed (>100rpm) / ±1 (≤100rpm)"
        },
        "Timer": "1 min. to 999 hr 59 min.",
        "Temperature": {
          "Fluctuation at 37℃ in flask (±℃ / ℉)": "0.1 / 0.18",
          "Variation at 37℃ in flask (±℃ / ℉)": "0.5 / 0.90"
        }
      },
      perModel: {
        "IST-3075": {
          "Temperature Range (℃ / ℉)": "Amb. +5 to 80 / Amb. +9 to 176",
          "Refrigerator (Hp)": "-",
          "Max. load (kg / Ibs)": "10 / 22.0 at 500 rpm  |  15 / 33.1 at 400 rpm",
          "Volume (L / cu ft)": "53 / 1.9",
          "Platform (W×D) (mm / inch)": "350×350 / 13.8×13.8",
          "Interior (W×D×H) (mm / inch)": "410×410×320 / 16.1×16.1×12.6",
          "Exterior (W×D×H) (mm / inch)": "440x785x510 / 17.3x30.9x20.1",
          "Net weight (Kg / lbs)": "65 / 143.3",
          "Electrical requirements (230V)": { "60Hz": "4A", "50Hz": "4A" },
          "Cat. No. (230V)": "AAH23422K",
          "Electrical requirements (120V)": { "60Hz": "7.5A" },
          "Cat. No. (120V)": "AAH23465U"
        },
        "IST-3075R": {
          "Temperature Range (℃ / ℉)": "Amb. -15 (Min. 15) to 80 /Amb. -27 (Min. 27) to 176",
          "Refrigerator (Hp)": "1 / 6 HBP",
          "Max. load (kg / Ibs)": "10 / 22.0 at 500 rpm  |  15 / 33.1 at 400 rpm",
          "Volume (L / cu ft)": "53 / 1.9",
          "Platform (W×D) (mm / inch)": "350×350 / 13.8×13.8",
          "Interior (W×D×H) (mm / inch)": "410×410×320 / 16.1×16.1×12.6",
          "Exterior (W×D×H) (mm / inch)": "440x785x510 / 17.3x30.9x20.1",
          "Net weight (Kg / lbs)": "73 / 160.9",
          "Electrical requirements (230V)": { "60Hz": "5.5A", "50Hz": "5.5A" },
          "Cat. No. (230V)": "AAH23526K",
          "Electrical requirements (120V)": { "60Hz": "10.1A" },
          "Cat. No. (120V)": "AAH23565U"
        },
        "IST-4075": {
          "Temperature Range (℃ / ℉)": "Amb. +5 to 80 / Amb. +9 to 176",
          "Refrigerator (Hp)": "-",
          "Max. load (kg / Ibs)": "14 / 30.9 at 500 rpm  |  21 / 46.3 at 400 rpm",
          "Volume (L / cu ft)": "83 / 2.9",
          "Platform (W×D) (mm / inch)": "450×450 / 17.7×17.7",
          "Interior (W×D×H) (mm / inch)": "510×510×320 / 20.1×20.1×12.6",
          "Exterior (W×D×H) (mm / inch)": "540x 890 x510 / 21.3x35x20.1",
          "Net weight (Kg / lbs)": "81 / 178.6",
          "Electrical requirements (230V)": { "60Hz": "4A", "50Hz": "4A" },
          "Cat. No. (230V)": "AAH23622K",
          "Electrical requirements (120V)": { "60Hz": "7.5A" },
          "Cat. No. (120V)": "AAH23665U"
        },
        "IST-4075R": {
          "Temperature Range (℃ / ℉)": "Amb. -15 (Min. 15) to 80 /Amb. -27 (Min. 27) to 176",
          "Refrigerator (Hp)": "1 / 6 HBP",
          "Max. load (kg / Ibs)": "14 / 30.9 at 500 rpm  |  21 / 46.3 at 400 rpm",
          "Volume (L / cu ft)": "83 / 2.9",
          "Platform (W×D) (mm / inch)": "450×450 / 17.7×17.7",
          "Interior (W×D×H) (mm / inch)": "510×510×320 / 20.1×20.1×12.6",
          "Exterior (W×D×H) (mm / inch)": "540x 890 x510 / 21.3x35x20.1",
          "Net weight (Kg / lbs)": "90 / 198.4",
          "Electrical requirements (230V)": { "60Hz": "5.5A", "50Hz": "5.5A" },
          "Cat. No. (230V)": "AAH23726K",
          "Electrical requirements (120V)": { "60Hz": "10.1A" },
          "Cat. No. (120V)": "AAH23765U"
        }
      }
    },
    features: [],
    advantages: [],
    faqs: [
      {
        question: "1. What is an incubated shaker and how does it work?",
        answer: "An incubated shaker is a laboratory device that combines controlled temperature regulation with orbital shaking motion, enabling researchers to grow cells, microbes, or carry out biochemical reactions under optimal and consistent conditions. It ensures precise temperature uniformity, smooth shaking speeds, and reproducibility, making it essential for cell culture, protein expression, enzyme studies, and microbiology. Jeiotech incubated shakers offer advanced features like microprocessor PID control, three-point temperature calibration, and BLDC motors for stable and accurate results."
      },
      {
        question: "2. Why choose Jeiotech Incubated Shakers over other brands?",
        answer: "Jeiotech incubated shakers stand out for their combination of innovation, reliability, and eco-friendly design. Unlike many alternatives, they feature a wide temperature range (up to 80°C and down to -15°C for refrigerated models), high-speed orbital motion (up to 500 rpm), advanced PID control, and smooth acceleration/deceleration systems to protect samples. The addition of transparent lids with LED lighting, intuitive touch-screen controls, and optional LC Connected mobile monitoring makes them user-friendly. With Inkarp’s distribution and support, customers in India benefit from world-class equipment backed by local expertise."
      },
      {
        question: "3. What are the key applications of incubated shakers?",
        answer: "Incubated shakers are widely used in life sciences, pharmaceuticals, biotechnology, and food industries. Their applications include bacterial and yeast culture growth, protein expression, enzyme kinetics, cell line incubation, DNA/RNA hybridization, drug testing, and microbial fermentation studies. By maintaining both precise shaking motion and uniform heating or cooling, Jeiotech incubated shakers ensure reproducibility, reliability, and scalability for critical research experiments."
      },
      {
        question: "4. How accurate are Jeiotech Incubated Shakers in controlling temperature and speed?",
        answer: "Jeiotech incubated shakers offer high accuracy and stability thanks to their microprocessor PID control and automatic temperature calibration system. They provide a temperature range from ambient +5°C to 80°C (non-refrigerated models) and ambient -15°C to 80°C (refrigerated models). Shaking speeds go up to 500 rpm with smooth orbital motion (19 mm). Features like three-point calibration, uniform airflow distribution, and air-tight silicone door seals ensure precise and repeatable results, even under heavy workloads."
      },
      {
        question: "5. What sustainability features do Jeiotech incubated shakers offer?",
        answer: "Sustainability is central to Jeiotech’s design. Their R-model incubated shakers use R-600a refrigerant, an eco-friendly alternative that significantly reduces greenhouse gas emissions. Combined with energy-efficient BLDC motors and corrosion-resistant stainless steel interiors, these systems not only minimize environmental impact but also deliver long-term durability. By choosing Jeiotech shakers, laboratories benefit from both high-performance incubation and sustainable operations."
      },
      {
        question: "6. What safety features are built into Jeiotech incubated shakers?",
        answer: "Jeiotech incubated shakers are designed with multiple safety mechanisms to protect both the user and the experiment. These include automatic restart after power interruptions, alarms for temperature and speed deviations, mechanical over-temperature protection devices, audible and visible open-door alarms, over-current protection, and stalled platform checks. Their smooth start/stop function prevents spills, while the chemical-resistant polypropylene body ensures durability in demanding lab conditions."
      },
      {
        question: "7. Can Jeiotech Incubated Shakers be used for both heating and cooling applications?",
        answer: "Yes. Jeiotech offers both standard incubated shakers (IST-3075 / 4075) with heating functions and refrigerated models (IST-3075R / 4075R) that provide cooling down to -15°C. This flexibility makes them ideal for a wide range of applications, from basic cell culture and incubation to temperature-sensitive biochemical and pharmaceutical research. With precise control, uniformity, and rapid recovery after door openings, these shakers ensure consistent performance across applications."
      },
      {
        question: "8. How does Inkarp support customers using Jeiotech Incubated Shakers in India?",
        answer: "As the authorized distributor and service provider, Inkarp offers comprehensive support including expert consultation, model recommendation, installation, commissioning, and user training. Additionally, Inkarp provides preventive maintenance, calibration, and genuine spare parts supply through its nationwide service network. With more than 40 years of industry expertise, Inkarp ensures that Jeiotech incubated shakers perform optimally, minimizing downtime and delivering consistent research results."
      },
      {
        question: "9. Are accessories available for Jeiotech Incubated Shakers?",
        answer: "Yes. Jeiotech incubated shakers are compatible with a variety of optional platforms, universal attachments, sample holders, racks, and trays. These accessories enable researchers to customize their equipment for different vessel types such as flasks, test tubes, microplates, culture dishes, and vials. This adaptability ensures that a single shaker can handle multiple applications, increasing efficiency and productivity in laboratories. Inkarp also helps customers choose the right accessories for their research needs."
      },
      {
        question: "10. Where can I buy Jeiotech Incubated Shakers in India?",
        answer: "You can purchase authentic Jeiotech Incubated Shakers from Inkarp Instruments, the official distributor and service provider in India. Inkarp ensures that customers receive not just the product but also end-to-end service—including installation, training, application support, and after-sales maintenance. With offices and service engineers across major Indian cities, Inkarp guarantees quick delivery, reliable technical support, and long-term partnerships for laboratories, universities, hospitals, and industrial research facilities."
      }
    ]
  },
  "incubated-shakers-floor": {
    id: "incubated-shakers-floor",
    name: "Incubated Shakers (Floor)",
    category: "Shakers",
    image: S11, // e.g. import S11 from "/images/products/Jeiotech/incubated-shakers-floor.jpg";
    logo: Jeiotch,
    bannerImg: Banner3,
    altText: "Jiotech",
    videoId: null,
    meta: {
      title: "Incubated Shakers Authorized Distributor And Service Provider In India | Jeiotech | Inkarp",
      description: "Discover the best incubated shakers in India with Inkarp – Authorized Distributor for Jeiotech Floor Model Incubated Shakers. Designed for high-capacity mixing with precise temperature control, eco-friendly refrigerants, and advanced PID technology. Ideal for pharma, biotech, and research labs with nationwide service and support.",
      keywords: [
        "Incubated Shakers India",
        "Jeiotech Floor Shakers",
        "Floor Model Incubated Shaker",
        "Large Capacity Lab Shaker",
        "Refrigerated Shaker India",
        "Orbital Shaker with Incubator",
        "Inkarp Scientific Instruments",
        "Best Shakers in India",
        "Jeiotech Shaker Distributor",
        "Laboratory Floor Incubated Shaker",
        "Incubated Shakers Authorized Distributor And Service Provider In India"
      ],
      altText: "Incubated Shakers_Jeiotech_Inkarp",
      internalLinks: ["Related Products"],
      externalLinks: ["Jeiotech Website"]
    },
    description: `
  <div style="font-family:Roboto, sans-serif; background-color:#F5F5F5; padding:20px; color:#000000;">
    <h2 style="font-family:MaxOT, sans-serif; color:#E63946;">Best Shakers in India – Jeiotech Incubated Shakers (Floor Models)</h2>
    <p>
      When laboratories require large-capacity shaking and precise incubation, the demand is for shakers that combine reliability, scalability, and advanced performance. Among the best shakers in India, Jeiotech’s Incubated Shakers (Floor models) are a standout choice for biotech, pharmaceutical, food, and industrial research laboratories. Distributed and serviced across India by Inkarp Instruments, these shakers are designed for high-volume workloads, consistent temperature control, and durable long-term operation.
    </p>
    <p>
      Unlike compact or tabletop shakers, floor incubated shakers are engineered for heavy-duty mixing. Jeiotech’s models can accommodate up to five 6L flasks simultaneously, making them ideal for large-scale microbial incubation, protein expression, fermentation, enzyme kinetics, and high-throughput sample processing.
    </p>
    <p>
      They are equipped with microprocessor PID control, BLDC direct-drive motors, three-point temperature calibration, and advanced orbital shaking systems. With features like rapid thermal recovery, airtight silicone door seals, and eco-friendly R-600a refrigerants, these shakers combine precision performance with sustainability.
    </p>

    <p><em>Control display</em></p>
    <p><em>Com. ports &amp; Temp. limiters</em></p>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">Jeiotech – Incubated Shakers (Floor Models)</h3>
    <p>Large capacity up to five 6L flasks with high-speed orbital shaking and reliable heating/cooling performance.</p>

    <h4 style="font-family:MaxOT, sans-serif; color:#E63946;">Performance</h4>
    <ul>
      <li>Temperature range:</li>
    </ul>
    <ul style="margin-left:18px;">
      <li>Ambient +5°C to 80°C for ISF-7100 / 7200.</li>
      <li>Ambient -20°C (Min. +4°C) to 80°C for ISF-7100R / 7200R.</li>
    </ul>
    <ul>
      <li>Speed range: 30 to 500 rpm with orbital motion (25.4 mm or 50.8 mm).</li>
      <li>BLDC direct-drive motor with triple cam system for durability and quiet operation.</li>
      <li>Smooth start/stop to prevent spills.</li>
      <li>Rapid thermal recovery with uniform distribution via high-velocity fans.</li>
      <li>Airtight silicone door seal with lockable door.</li>
    </ul>

    <h4 style="font-family:MaxOT, sans-serif; color:#E63946;">Design for Sustainability</h4>
    <ul>
      <li>R-600a eco-friendly refrigerant (R models).</li>
    </ul>

    <h4 style="font-family:MaxOT, sans-serif; color:#E63946;">Convenience</h4>
    <ul>
      <li>Touch screen LCD controller.</li>
      <li>Transparent viewing window with LED lighting.</li>
      <li>Gas spring-supported lid.</li>
      <li>Stainless steel corrosion-resistant chamber with quick-drain system.</li>
      <li>RS-232 &amp; USB ports for control and data collection.</li>
      <li>Foot casters for easy mobility.</li>
      <li>LC Connected mobile monitoring system (optional).</li>
    </ul>

    <h4 style="font-family:MaxOT, sans-serif; color:#E63946;">Safety</h4>
    <ul>
      <li>Automatic run after power interruptions.</li>
      <li>Alarms for speed/temperature deviations.</li>
      <li>Over-current protection.</li>
      <li>Triple independent temperature monitor system.</li>
      <li>Environment-friendly CFC-free refrigerant (R models).</li>
    </ul>
  </div>
  `,
    techSpecs: {
      overview: "Large capacity up to five 6L flasks with high-speed orbital shaking and reliable heating/cooling performance.",
      common: {
        "Shaking system": {
          "Motion type": "Orbital",
          "Amplitude size (mm / inch, dia.)": "25.4 / 1 or 50.8 / 2",
          "Speed range (rpm)": "30 to 500",
          "Speed stability 2) (rpm, %)": "±1"
        },
        "Timer (count-down)": "999 hr 59 min.",
        "Temperature": {
          "Fluctuation at 37℃ in flask (±℃ / ℉)": "0.1 / 0.18",
          "Variation at 37℃ in flask (±℃ / ℉)": "0.5 / 0.9"
        },
        "Max. speed per permissible load (rpm)": [
          "500 (max. 15 kg / 33.1 lbs)",
          "400 (max. 25 kg / 55.1 lbs)",
          "350 (max. 35 kg / 77.2 lbs)",
          "300 (max. 20 kg / 44.1 lbs)",
          "200 (max. 35 kg / 77.2 lbs)"
        ],
        "Dimension": {
          "Chamber volume (L / cu ft)": "270 / 9.5",
          "Platform (W×D) (mm / inch)": "755×520 / 29.7×20.5",
          "Interior (W×D×H) (mm / inch)": "894×634×480 / 35.2×25×18.9",
          "Exterior (W×D×H) (mm / inch)": "1128×854×1035 / 44.4×33.6×40.8"
        }
      },
      perModel: {
        "ISF-7100": {
          "Temperature Range (℃ / ℉) 1)": "Amb. +5 to 80 / Amb. +9 to 176",
          "Refrigerator (Hp)": "-",
          "Net weight (Kg / lbs)": "277 / 610.7",
          "Electrical requirements (230V, 50/60Hz)": "3.7A",
          "Cat. No. (230V)": "AAH23342K",
          "Electrical requirements (120V, 60Hz)": "7.3A",
          "Cat. No. (120V)": "AAH23375U"
        },
        "ISF-7100R": {
          "Temperature Range (℃ / ℉) 1)": "Amb. -20 (Min. 4) to 80 / Amb. -36 (Min. 7.2) to 176",
          "Refrigerator (Hp)": "1/6Hp",
          "Net weight (Kg / lbs)": "287 / 632.7",
          "Electrical requirements (230V, 50/60Hz)": "5.6A",
          "Cat. No. (230V)": "AAH23546K",
          "Electrical requirements (120V, 60Hz)": "10A",
          "Cat. No. (120V)": "AAH23575U"
        },
        "ISF-7200": {
          "Temperature Range (℃ / ℉) 1)": "Amb. +5 to 80 / Amb. +9 to 176",
          "Refrigerator (Hp)": "-",
          "Net weight (Kg / lbs)": "277 / 610.7",
          "Electrical requirements (230V, 50/60Hz)": "3.7A",
          "Cat. No. (230V)": "AAH23442K",
          "Electrical requirements (120V, 60Hz)": "7.3A",
          "Cat. No. (120V)": "AAH23475U"
        },
        "ISF-7200R": {
          "Temperature Range (℃ / ℉) 1)": "Amb. -20 (Min. 4) to 80 / Amb. -36 (Min. 7.2) to 176",
          "Refrigerator (Hp)": "1/6Hp",
          "Net weight (Kg / lbs)": "287 / 632.7",
          "Electrical requirements (230V, 50/60Hz)": "5.6A",
          "Cat. No. (230V)": "AAH23646K",
          "Electrical requirements (120V, 60Hz)": "10A",
          "Cat. No. (120V)": "AAH23675U"
        }
      }
    },
    features: [],
    advantages: [],
    faqs: [
      {
        question: "1. What is a floor incubated shaker and how is it different from tabletop models?",
        answer: "A floor incubated shaker is a high-capacity laboratory instrument that combines orbital shaking with precise temperature control, designed for large-scale experiments. Unlike tabletop shakers, floor models can accommodate larger flasks (up to five 6L simultaneously) and handle heavy workloads with stability. They are equipped with powerful BLDC motors, PID control systems, and wide temperature ranges for microbial incubation, protein expression, and fermentation studies. Their robust build and eco-friendly refrigerant systems make them suitable for industrial-scale research and production."
      },
      {
        question: "2. What applications are Jeiotech Floor Incubated Shakers commonly used for?",
        answer: "Jeiotech Floor Incubated Shakers are widely used in pharmaceutical, biotechnology, and industrial laboratories. Common applications include cell culture, microbial fermentation, protein expression, enzyme kinetics, drug testing, and biochemical assays. With their ability to maintain precise temperature control (down to -20°C in refrigerated models) and orbital shaking up to 500 rpm, they are ideal for high-throughput research, large-scale sample processing, and long-term incubation studies that require reliability and reproducibility."
      },
      {
        question: "3. How accurate are Jeiotech Floor Incubated Shakers in maintaining temperature and shaking speed?",
        answer: "These incubated shakers deliver exceptional accuracy and stability thanks to their microprocessor PID control, three-point temperature calibration, and automatic tuning. Temperature ranges extend from ambient +5°C to 80°C (standard models) and -20°C to 80°C (refrigerated models). Shaking speeds range from 30 to 500 rpm with orbital motion options of 25.4 mm or 50.8 mm. The BLDC direct-drive motor ensures smooth, quiet, and uniform shaking, while high-velocity fans guarantee consistent temperature distribution and rapid recovery after door openings."
      },
      {
        question: "4. What sustainability features do Jeiotech Floor Incubated Shakers have?",
        answer: "Jeiotech is committed to eco-friendly laboratory solutions. Their refrigerated incubated shaker models (ISF-7100R / 7200R) use R-600a refrigerant, which significantly reduces greenhouse gas emissions compared to conventional refrigerants. These shakers also include energy-efficient BLDC motors that consume less power and require minimal maintenance. Combined with stainless steel corrosion-resistant interiors and long-lasting components, these incubators are designed to deliver high performance with reduced environmental impact."
      },
      {
        question: "5. What safety systems are built into Jeiotech Floor Incubated Shakers?",
        answer: "Safety is a core feature of Jeiotech Floor Incubated Shakers. They are equipped with triple independent temperature monitoring systems, including deviation alarms, electronic limiters, and mechanical over-temperature limiters. Additional safety measures include over-current protection, stalled platform detection, automatic restart after power interruptions, and alarms for shaking speed deviations. The airtight silicone door seal with a lockable door ensures safe sample storage, while smooth start/stop functions reduce risks of spills and sample loss during high-speed shaking."
      },
      {
        question: "6. Can Jeiotech Floor Incubated Shakers be used for both heating and cooling applications?",
        answer: "Yes. Jeiotech offers standard heating models (ISF-7100 / 7200) and refrigerated models (ISF-7100R / 7200R) that provide cooling capabilities down to -20°C. This makes them suitable for applications that require both heating and cooling, such as temperature-sensitive microbial incubation, biochemical reactions, and enzyme studies. Their rapid thermal recovery ensures consistent conditions even after frequent door openings, making them highly reliable for long-term experiments."
      },
      {
        question: "7. How does Inkarp support customers using Jeiotech Floor Incubated Shakers in India?",
        answer: "As the authorized distributor and service provider in India, Inkarp provides end-to-end support for Jeiotech Floor Incubated Shakers. This includes consultation to choose the right model, installation and commissioning by trained engineers, user training for lab staff, preventive maintenance, and access to genuine spare parts. With a nationwide service network, Inkarp ensures minimal downtime, long-term reliability, and uninterrupted research workflows for customers across India."
      },
      {
        question: "8. What convenience features make Jeiotech Floor Incubated Shakers user-friendly?",
        answer: "Jeiotech Floor Incubated Shakers are designed with researchers’ comfort in mind. They feature intuitive touchscreen LCD controls, transparent top viewing windows with LED lighting, gas spring lid supports for smooth opening, corrosion-resistant stainless steel interiors, and quick-drain systems for easy cleaning. Built-in RS-232 and USB ports allow external monitoring and data collection, while sturdy foot casters make relocation easy. Optional LC Connected mobile monitoring enables remote supervision of experiments anytime, anywhere."
      },
      {
        question: "9. What accessories are available for Jeiotech Floor Incubated Shakers?",
        answer: "A wide range of optional accessories are available to enhance flexibility and performance. These include dedicated platforms, universal attachments, clamps, and trays for accommodating different flask sizes, culture bottles, and vials. Accessories allow customization for specific applications like cell culture, microbial studies, or enzyme assays. Inkarp ensures the availability of genuine accessories and helps configure the shaker system according to the laboratory’s unique requirements."
      },
      {
        question: "10. Where can I buy Jeiotech Floor Incubated Shakers in India?",
        answer: "You can purchase genuine Jeiotech Floor Incubated Shakers from Inkarp Instruments, the official distributor and service provider in India. Inkarp offers not just the product but a complete package of consultation, installation, training, and after-sales support. With offices and engineers across major Indian cities, Inkarp guarantees fast delivery, responsive technical service, and nationwide coverage, ensuring that your lab’s shaking and incubation systems remain efficient and dependable."
      }
    ]
  },
  "incubated-shaker-multi-stackable": {
    id: "incubated-shaker-multi-stackable",
    name: "Incubated Shaker (Multi-Stackable)",
    category: "Shakers",
    image: S12, // e.g. import S12 from "/images/products/Jeiotech/incubated-shaker-multi-stackable.jpg";
    logo: Jeiotch,
    bannerImg: Banner3,
    altText: "Jiotech",
    videoId: null,
    meta: {
      title: "Multi-Stackable Incubated Shakers Authorized Distributor And Service Provider In India | Jeiotech | Inkarp",
      description: "Explore the best Multi-Stackable Incubated Shakers in India with Inkarp – Authorized Distributor for Jeiotech. Featuring triple-stack design, precision PID control, and eco-friendly refrigerants, these shakers deliver scalability and reliability for biotech, pharma, and research labs. Backed by nationwide service and expert support.",
      keywords: [
        "Multi-Stackable Incubated Shaker India",
        "Jeiotech Multi-Stack Shakers",
        "Best Incubated Shakers India",
        "Laboratory Multi-Stackable Shaker",
        "Triple Stack Incubated Shaker",
        "Refrigerated Shaker India",
        "Inkarp Scientific Instruments",
        "Buy Jeiotech Shakers India",
        "High Capacity Lab Shakers",
        "Stackable Orbital Shakers",
        "Multi-Stackable Incubated Shakers Authorized Distributor And Service Provider In India"
      ],
      altText: "ulti-Stackable Incubated Shakers_Jeiotech_Inkarp",
      internalLinks: ["Related Products"],
      externalLinks: ["Jeiotech Website"]
    },
    description: `
  <div style="font-family:Roboto, sans-serif; background-color:#F5F5F5; padding:20px; color:#000000;">
    <h2 style="font-family:MaxOT, sans-serif; color:#E63946;">Best Shakers in India – Jeiotech Incubated Shaker (Multi-Stackable)</h2>
    <p>
      When laboratories demand large-capacity shaking with precise incubation and unmatched flexibility, the choice naturally shifts to multi-stackable incubated shakers. Among the best shakers in India, Jeiotech’s Incubated Shaker (Multi-Stackable) stands out as a high-performance system designed for scalability, precision, and durability. Distributed and supported by Inkarp Instruments, these stackable systems are engineered for biotechnology, pharmaceutical research, fermentation studies, microbial culture, and large-scale biochemical experiments.
    </p>
    <p>
      Unlike conventional incubated shakers, Jeiotech’s stackable design allows multiple units to be installed vertically, saving valuable laboratory floor space while increasing capacity. Each chamber offers precise temperature control up to 80°C, orbital shaking speeds up to 400 rpm, and independent operation for different experiments running simultaneously. The direct-drive motor with a 5-year warranty, smooth glide-up door, and vibration-minimized structure ensure both reliability and long-term usability.
    </p>
    <p>
      These shakers also incorporate eco-friendly refrigerants (R models), intuitive color touchscreen controls, and advanced safety systems to deliver superior performance while supporting sustainability.
    </p>

    <h3 style="font-family:MaxOT, sans-serif; color:#E63946;">Jeiotech – Incubated Shaker (Multi-Stackable)</h3>
    <p>Large-capacity, triple-stackable incubated shaker with optional accessories.</p>

    <h4 style="font-family:MaxOT, sans-serif; color:#E63946;">Structural Functional Features</h4>
    <ul>
      <li>Up to 80°C and 400 rpm for diverse applications.</li>
      <li>Three operating modes: Temperature &amp; Shaking, Temperature only, or Shaking only.</li>
      <li>Patented stable shaking design for vibration-free operation.</li>
      <li>Glide-up door for convenient access.</li>
      <li>Direct-drive motor with 5-year warranty for long-term durability.</li>
    </ul>

    <h4 style="font-family:MaxOT, sans-serif; color:#E63946;">Design for Sustainability</h4>
    <ul>
      <li>Eco-friendly R-600a refrigerant (R models).</li>
    </ul>

    <h4 style="font-family:MaxOT, sans-serif; color:#E63946;">Use Convenience Features</h4>
    <ul>
      <li>Accurate rpm and temperature control with PID auto-tuning.</li>
      <li>Color touch display with easy navigation.</li>
      <li>Countdown timer up to 999 hours 59 minutes.</li>
      <li>LED illumination for easy sample observation.</li>
      <li>Spill drain port for easy maintenance.</li>
      <li>Optional LC Connected (mobile monitoring system).</li>
    </ul>

    <h4 style="font-family:MaxOT, sans-serif; color:#E63946;">Safety</h4>
    <ul>
      <li>Dual over-temperature protection (A-OT and B-OT).</li>
      <li>Independent precision sensors for extra reliability.</li>
      <li>Controller lock to prevent accidental errors.</li>
      <li>Soft start/stop function.</li>
      <li>Overcurrent protection with automatic shutdown.</li>
      <li>Real-time self-diagnostics with error alarms.</li>
      <li>Automatic restart after power recovery.</li>
    </ul>
  </div>
  `,
    techSpecs: {
      overview: "Large-capacity, triple-stackable incubated shaker with optional accessories.",
      common: {
        "Shaking system": {
          "Motion type": "Orbital",
          "Amplitude size (mm / inch, dia.)": ["25.4 / 1", "50.8 / 2"],
          "Speed stability 2) (rpm, %)": "±1"
        },
        "Timer (count-down)": "999 hr 59 min.",
        "Dimension": {
          "Chamber volume (L / cu ft)": "198 /7.0",
          "Platform (W×D, mm / inch)": "755×520 / 29.7x20.5",
          "Interior (W×D×H, mm / inch)": "809×624×393 / 31.9×24.6×15.5",
          "Exterior (W×D×H, mm / inch)": [
            "1 unit ; 1307 x 996 x 755 / 51.5 x 39.2 x 29.7",
            "1 unit+stand-I or 2 units stacked ; 1307 x 996 x 1355 / 51.5 x 39.2 x 53.3",
            "2 units+stand-II stacked ; 1307 x 996 x 1655 / 51.5 x 39.2 x 65.2",
            "3 units stacked ; 1307 x 996 x 1955 / 51.5 x 39.2 x 77.0"
          ]
        },
        "Max. speed per permissible load (rpm)": {
          "1 unit only": "400 (max. 20 kg / 44.1 Ibs)",
          "Stacked units (25.4 mm amplitude models)": "250 (max. 15 kg / 33.1 Ibs), 150 (max. 20 kg / 44.1 Ibs)",
          "Stacked units (50.8 mm amplitude models)": "200 (max. 15 kg / 33.1 Ibs), 150 (max. 20 kg / 44.1 Ibs)"
        }
      },
      perModel: {
        "ISS-7100": {
          "Temperature Range (℃ / ℉) 1)": "Amb. +10 to 80 / Amb. +18 to 176",
          "Fluctuation at 37℃ in flask (±℃ / ℉)": "0.1 / 0.18",
          "Variation at 37℃ in flask (±℃ / ℉)": "0.6 / 1.08",
          "Refrigerator (Hp)": "-",
          "Speed range (rpm)": "30 to 400 (stackable2): 30 to 250",
          "Amplitude size (mm / inch, dia.)": "25.4 / 1",
          "Electrical requirements (230V, 50/60Hz)": "3.7A",
          "Cat. No. (230V)": "AAH238132K",
          "Electrical requirements (120V, 60Hz)": "7.1A",
          "Cat. No. (120V)": "AAH238115U",
          "Net weight (kg / Ibs)": "300 / 661.4"
        },
        "ISS-7100R": {
          "Temperature Range (℃ / ℉) 1)": "Amb. -20 (Min. 4) to 80 / Amb. -36 (Min. 7.2) to 176",
          "Fluctuation at 37℃ in flask (±℃ / ℉)": "0.1 / 0.18",
          "Variation at 37℃ in flask (±℃ / ℉)": "0.5 / 0.90",
          "Refrigerator (Hp)": "1/6Hp",
          "Speed range (rpm)": "30 to 300 (stackable2): 30 to 200",
          "Amplitude size (mm / inch, dia.)": "25.4 / 1",
          "Electrical requirements (230V, 50/60Hz)": "5.6A",
          "Cat. No. (230V)": "AAH238236K",
          "Electrical requirements (120V, 60Hz)": "10A",
          "Cat. No. (120V)": "AAH238215U",
          "Net weight (kg / Ibs)": "320 / 705.5"
        },
        "ISS-7200": {
          "Temperature Range (℃ / ℉) 1)": "Amb. +10 to 80 / Amb. +18 to 176",
          "Fluctuation at 37℃ in flask (±℃ / ℉)": "0.1 / 0.18",
          "Variation at 37℃ in flask (±℃ / ℉)": "0.6 / 1.08",
          "Refrigerator (Hp)": "-",
          "Speed range (rpm)": "30 to 400 (stackable2): 30 to 250",
          "Amplitude size (mm / inch, dia.)": "50.8 / 2",
          "Electrical requirements (230V, 50/60Hz)": "3.7A",
          "Cat. No. (230V)": "AAH239132K",
          "Electrical requirements (120V, 60Hz)": "7.1A",
          "Cat. No. (120V)": "AAH239115U",
          "Net weight (kg / Ibs)": "300 / 661.4"
        },
        "ISS-7200R": {
          "Temperature Range (℃ / ℉) 1)": "Amb. -20 (Min. 4) to 80 / Amb. -36 (Min. 7.2) to 176",
          "Fluctuation at 37℃ in flask (±℃ / ℉)": "0.1 / 0.18",
          "Variation at 37℃ in flask (±℃ / ℉)": "0.5 / 0.90",
          "Refrigerator (Hp)": "1/6Hp",
          "Speed range (rpm)": "30 to 300 (stackable2): 30 to 200",
          "Amplitude size (mm / inch, dia.)": "50.8 / 2",
          "Electrical requirements (230V, 50/60Hz)": "5.6A",
          "Cat. No. (230V)": "AAH239236K",
          "Electrical requirements (120V, 60Hz)": "10A",
          "Cat. No. (120V)": "AAH239215U",
          "Net weight (kg / Ibs)": "320 / 705.5"
        }
      }
    },
    features: [],
    advantages: [],
    faqs: [
      {
        question: "1. What is a Multi-Stackable Incubated Shaker and how does it benefit laboratories?",
        answer: "A Multi-Stackable Incubated Shaker is an advanced laboratory device that combines precise temperature control and orbital shaking in a scalable, space-saving design. Unlike traditional single-chamber shakers, multi-stackable models allow up to three units to be stacked vertically, maximizing capacity without increasing floor space. Each chamber can operate independently in temperature + shaking, temperature only, or shaking only modes, making it ideal for laboratories running multiple experiments simultaneously. These systems are widely used in biotechnology, pharmaceuticals, fermentation research, and microbial culture studies."
      },
      {
        question: "2. Why should I choose Jeiotech Multi-Stackable Shakers over other brands?",
        answer: "Jeiotech Multi-Stackable Shakers stand out for their structural durability, precision performance, and advanced safety systems. They feature direct-drive motors with a 5-year warranty, vibration-minimized shaking platforms, and PID-controlled rpm and temperature systems for accuracy. Their triple-stackable design allows labs to expand capacity cost-effectively, while eco-friendly R-600a refrigerants (in R models) reduce environmental impact. Backed by Inkarp’s nationwide service in India, these shakers deliver reliability, scalability, and sustainability, outperforming many conventional systems."
      },
      {
        question: "3. What applications are Multi-Stackable Incubated Shakers best suited for?",
        answer: "Multi-Stackable Incubated Shakers are used in cell culture, microbial incubation, protein expression, enzyme kinetics, fermentation, drug testing, and biochemical assays. Their ability to maintain stable temperatures up to 80°C and orbital speeds up to 400 rpm makes them ideal for both basic research and large-scale industrial applications. With multiple units stacked, laboratories can run different experiments simultaneously, increasing throughput and flexibility. These shakers are especially popular in biotech and pharmaceutical labs where scalability and reproducibility are crucial."
      },
      {
        question: "4. How accurate are Jeiotech Multi-Stackable Incubated Shakers in controlling rpm and temperature?",
        answer: "Jeiotech’s shakers are designed with microprocessor PID control and auto-tuning calibration to maintain precise rpm and temperature. They can achieve orbital shaking speeds up to 400 rpm with smooth acceleration and deceleration, preventing spills. The temperature range extends up to 80°C, ensuring compatibility with diverse experimental protocols. Independent sensors monitor real-time conditions, and advanced calibration ensures displayed values match actual performance. This level of control ensures reliable, repeatable results even in demanding experimental conditions."
      },
      {
        question: "5. Can Jeiotech Multi-Stackable Incubated Shakers be remotely monitored?",
        answer: "Yes. Jeiotech Multi-Stackable Shakers are compatible with the LC Connected mobile monitoring system (when purchased with the LC GreenBox). This feature allows researchers to monitor experimental parameters like rpm, temperature, and operation time remotely via smartphone or computer. Real-time alerts improve safety and convenience, especially during long-duration experiments. With this smart connectivity, laboratories can ensure continuous monitoring, reduced downtime, and improved experiment reliability from virtually anywhere."
      },
      {
        question: "6. What safety features are included in Jeiotech Multi-Stackable Shakers?",
        answer: "Safety is a top priority in Jeiotech’s design. These shakers are equipped with dual over-temperature protection systems (A-OT electronic limiter and B-OT mechanical backup limiter), overcurrent protection, controller lock functions, and alarms for rpm/temperature deviations. The soft start/stop shaking function prevents sudden spills, while real-time self-diagnostics continuously monitor for abnormalities. If power is interrupted, the shaker automatically resumes operation when restored. These features ensure safe and uninterrupted operation, even in high-demand environments."
      },
      {
        question: "7. How sustainable are Jeiotech Multi-Stackable Shakers?",
        answer: "Jeiotech is committed to eco-friendly innovation. Their R models use R-600a refrigerant, which has a lower global warming potential compared to conventional refrigerants, helping labs minimize greenhouse emissions. Combined with energy-efficient BLDC motors and long-lasting components, these shakers deliver high performance while reducing operational costs and environmental impact. By choosing Jeiotech Multi-Stackable Shakers, laboratories align with global sustainability goals without compromising on efficiency."
      },
      {
        question: "8. What convenience features make Multi-Stackable Shakers user-friendly?",
        answer: "Jeiotech Multi-Stackable Shakers are designed with researchers in mind. They include intuitive color touch displays, LED illumination for easy chamber observation, countdown timers up to 999 hours, and glide-up doors for easy sample access. Spill drain ports make cleaning and maintenance simple, while the controller lock prevents accidental changes during operation. With optional mobile app connectivity, users can enjoy real-time monitoring and control, ensuring convenience even during complex, long-term experiments."
      },
      {
        question: "9. How does Inkarp support customers using Jeiotech Multi-Stackable Shakers in India?",
        answer: "As the authorized distributor and service provider in India, Inkarp offers comprehensive support, including consultation, installation, user training, preventive maintenance, and quick access to spare parts. Our nationwide service network ensures laboratories get fast and reliable assistance whenever needed. With more than 40 years of industry expertise, Inkarp ensures Jeiotech Multi-Stackable Shakers perform at their peak, helping labs maintain maximum uptime, reproducibility, and compliance with international standards."
      },
      {
        question: "10. Where can I buy Jeiotech Multi-Stackable Incubated Shakers in India?",
        answer: "Genuine Jeiotech Multi-Stackable Incubated Shakers can be purchased through Inkarp Instruments, the official distributor in India. By choosing Inkarp, customers not only gain access to authentic Jeiotech products but also benefit from expert guidance, nationwide installation services, application support, and dependable after-sales service. With Inkarp’s presence across India, laboratories in every region can rely on fast delivery, responsive technical support, and long-term partnerships for advanced shaking solutions."
      }
    ]
  },

}