import React, { useState } from "react";
// Logos & Images
import Polyscience from "/src/assets/PrincipalLogos/RowOne/Polyscience.png";
import ImgGPWB from "/images/products/PolyScience/GPWB_Category.png";
import ImgPolyBenchtopGroup from "/images/products/PolyScience/Benchtop_Group.jpg";
import ImgPolyChiller from "/images/products/PolyScience/chiller-cover-render4-low-res.png";
import ImgPolyGPWBCategory from "/images/products/PolyScience/GPWB_Category.png";
import ImgPolyHeatedCategory from "/images/products/PolyScience/Heated_Category.png";
import ImgPolyRCCategory from "/images/products/PolyScience/RC_Category.png";
import ImgPolyViscosityMX from "/images/products/PolyScience/Viscosity_MX.png";


import ImgLS from "/images/products/PolyScience/ls-series.png";
import ImgLM from "/images/products/PolyScience/lm-series.png";
import ImgMM from "/images/products/PolyScience/mm-series.png";
import ImgDC400 from "/images/products/PolyScience/durachill-400w.jpg";
import ImgDC1000 from "/images/products/PolyScience/durachill-1000w.jpg";


import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";
import Banner3 from "/images/products/Banner/Banner3.jpg";
import { BanknoteArrowUp } from "lucide-react";

export const PolyscienceModels = {

  "viscosity-baths": {
    id: "viscosity-bath-17l",
    name: "Viscosity Baths (17 L)",
    image: ImgPolyViscosityMX, // primary image (AD); swap if you prefer MX
    bannerImg: Banner3,
    logo: Polyscience,
    altText: "Polyscience",
    meta: {
      title: "Viscosity Baths Distributor And Service Provider In India - Polyscience - Inkarp Instruments Pvt Ltd",
      description:
        "17-liter viscosity baths with precise temperature control up to 200 °C, stability down to ±0.01 °C (AD) / ±0.07 °C (MX). Configured for capillary viscometers and ASTM D-445 (Advanced Digital only). Distributed & serviced by Inkarp India.",
      keywords: [
        "PolyScience",
        "viscosity bath",
        "ASTM D-445",
        "capillary viscometer",
        "Advanced Digital",
        "MX controller",
        "temperature stability",
        "Inkarp India"
      ],
      altText: "Viscosity Bath 17 L"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-4">
    <p><strong>Uniquely configured to accommodate specific testing and QC needs — including ASTM D-445 (Advanced Digital only).</strong></p>
    <p>
    Inkarp Instruments is a leading distributor and service provider for PolyScience Viscosity Baths in India. These baths offer precise temperature control and uniformity, ideal for viscosity measurements and calibration. Inkarp provides expert sales, service, and support for Polyscience Viscosity Baths, ensuring accurate and reliable results for laboratory and industrial applications.
    </p>

    <ul class="list-disc ml-6 space-y-1">
     <li>Working temperatures up to 200°C</li>
      <li>Temperature stabilities to ±0.01°C (AD) / ±0.07°C (MX)</li>
      <li>Advanced Digital or MX Temperature Controller</li>
      <li>Configured for use with popular capillary viscometers</li>
      <li>Glass reservoir</li>
      <li>Includes tap water cooling coil</li>
      <li>Lidded viscometer openings</li>
    </ul>
  </div>

  <!-- Variant images -->
  <div class="mt-6 grid sm:grid-cols-3 items-center gap-4">
    <div class="rounded-xl border border-gray-200 p-3 bg-white">
      <img src="/images/products/PolyScience/ad.png" alt="PolyScience Viscosity Bath 17 L — AD" class="w-full rounded-lg" />
      <div class="mt-2 text-sm text-center">17 L Viscosity Bath — <strong>AD</strong> (Advanced Digital)</div>
    </div>
    <div class="rounded-xl border border-gray-200 p-3 bg-white">
      <img src="/images/products/PolyScience/mx.png" alt="PolyScience Viscosity Bath 17 L — MX" class="w-full rounded-lg" />
      <div class="mt-2 text-sm text-center">17 L Viscosity Bath — <strong>MX</strong></div>
    </div>
  </div>

  <!-- Specs comparison -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Specifications (17&nbsp;L)</h3>
    <div class="min-w-[720px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <thead class="bg-gray-50">
        
          <tr class="[&>*]:border [&>*]:border-gray-300 [&>*]:p-3 text-left">
            <th>Specification</th>
            <th>AD (Advanced Digital)</th>
            <th>MX</th>
          </tr>
        </thead>
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr]:even:bg-[#FAFAFA]">
          <tr><td>Controller Type</td><td>Advanced Digital</td><td>MX</td></tr>
          <tr><td>Heater Wattage (60&nbsp;Hz)</td><td>1100 W</td><td>1100 W</td></tr>
          <tr><td>Pump Speed</td><td>Variable</td><td>One</td></tr>
          <tr><td>Temperature Stability</td><td>±0.01&nbsp;°C</td><td>±0.07&nbsp;°C</td></tr>
          <tr><td>Working Access</td><td>Six openings, 5.1&nbsp;cm Ø × 27.9&nbsp;cm depth</td><td>Six openings, 5.1&nbsp;cm Ø × 27.9&nbsp;cm depth</td></tr>
          <tr><td>Overall Dimensions</td><td>31.8&nbsp;cm Ø × 52.1&nbsp;cm depth</td><td>31.8&nbsp;cm Ø × 52.1&nbsp;cm depth</td></tr>
          <tr><td>Part Number (60&nbsp;Hz)</td><td><code>AD17VB6G-A11B</code></td><td><code>MX17VB6G-A11B</code></td></tr>
          <tr><td>Part Number (50&nbsp;Hz)</td><td><code>AD17VB6G-A12E</code></td><td><code>MX17VB6G-A12E</code></td></tr>
          <tr><td>ASTM D-445</td><td>Supported (AD models)</td><td>—</td></tr>
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
    techSpecs: {

    }
  },

  "digital-general-purpose-water-baths": {
    id: "water-bath-gp-digital",
    name: "Digital General Purpose Water Baths",
    image: ImgGPWB, // default hero; swap to your preferred size
    bannerImg: Banner3,
    logo: Polyscience,
    altText: "Polyscience",
    meta: {
      title: "Digital General Purpose Water Baths Distributor And Service Provider In India - Polyscience - Inkarp Instruments Pvt Ltd",
      description:
        "Ambient +5 to 100 °C, stability ±0.1 °C and uniformity ±0.2 °C. Clear hinged gable cover, TFT display, presets, alarms. Reservoirs from 2–28 L. Distributed & serviced by Inkarp India.",
      keywords: [
        "PolyScience",
        "general purpose water bath",
        "digital water bath",
        "laboratory water bath",
        "Inkarp India",
        "stability ±0.1 °C",
        "uniformity ±0.2 °C",
        "hinged gable cover",
        "TFT display"
      ],
      altText: "PolyScience Digital Water Bath"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-4">
    <p>
     Inkarp Instruments is a trusted distributor and service provider for Polyscience Digital General Purpose Water Baths in India. They offer precise temperature control, durability, and ease of use, ideal for laboratory and industrial applications. Inkarp provides expert sales, service, and support, ensuring optimal performance and customer satisfaction for PolyScience water baths.
    </p>
    <p>PolyScience water baths are the first baths on the market to utilize a full color TFT display. Our clear hinged gable cover continues to be a standard feature on all of our water baths and the intuitive plain-language user interface offers five selectable languages.</p>
    <p>Research, communication and listening to our customers' needs is what drives the innovation to make the line of PolyScience Water Baths stand out from the competition. These intelligent water baths are the perfect blend of control, convenience, safety and, of course, budget.</p>
  </div>

  <!-- ===== Specifications (multi-model comparison) ===== -->
<div class="mt-6 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
  <div class="flex items-center gap-2 mb-4">
    <span class="inline-block px-3 py-1 rounded-full bg-[#BE0010] text-white font-[MaxOT] text-sm">Technical data</span>
  </div>

  <!-- make the table wide so columns don't squish; scrolls on small screens -->
  <div class="min-w-[980px]">
    <table class="w-full text-[15px] bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
      <!-- Product-card header row (aligned with columns) -->
      <thead>
        <tr class="[&>*]:border [&>*]:border-gray-300">
          <!-- empty corner for spec names -->
          <th class="align-bottom p-0 bg-white w-[260px]"></th>

          <!-- 2 L -->
          <th class="align-bottom p-0">
            <div class="p-4">
              <div class="rounded-xl border border-gray-200 p-3 bg-white">
                <img src="/images/products/PolyScience/twoliter.png" alt="General Purpose Water Bath 2 Liter" class="w-full rounded-lg" />
                <div class="mt-3">
                  <div class="text-[13px] text-gray-500">More Options Available</div>
                  <div class="mt-2 font-semibold leading-5">General Purpose<br/>Water Bath 2&nbsp;Liter</div>
                </div>
              </div>
            </div>
          </th>

          <!-- 5 L -->
          <th class="align-bottom p-0">
            <div class="p-4">
              <div class="rounded-xl border border-gray-200 p-3 bg-white">
                <img src="/images/products/PolyScience/fiveliter.png" alt="General Purpose Water Bath 5 Liter" class="w-full rounded-lg" />
                <div class="mt-3">
                  <div class="text-[13px] text-gray-500">More Options Available</div>
                  <div class="mt-2 font-semibold leading-5">General Purpose<br/>Water Bath 5&nbsp;Liter</div>
                </div>
              </div>
            </div>
          </th>

          <!-- 10 L -->
          <th class="align-bottom p-0">
            <div class="p-4">
              <div class="rounded-xl border border-gray-200 p-3 bg-white">
                <img src="/images/products/PolyScience/tenliter.png" alt="General Purpose Water Bath 10 Liter" class="w-full rounded-lg" />
                <div class="mt-3">
                  <div class="text-[13px] text-gray-500">More Options Available</div>
                  <div class="mt-2 font-semibold leading-5">General Purpose<br/>Water Bath 10&nbsp;Liter</div>
                </div>
              </div>
            </div>
          </th>

          <!-- 20 L -->
          <th class="align-bottom p-0">
            <div class="p-4">
              <div class="rounded-xl border border-gray-200 p-3 bg-white">
                <img src="/images/products/PolyScience/twentyliter.png" alt="General Purpose Water Bath 20 Liter" class="w-full rounded-lg" />
                <div class="mt-3">
                  <div class="text-[13px] text-gray-500">More Options Available</div>
                  <div class="mt-2 font-semibold leading-5">General Purpose<br/>Water Bath 20&nbsp;Liter</div>
                </div>
              </div>
            </div>
          </th>
        </tr>

        <!-- column labels row (optional subtle header like screenshot) -->
        <tr class="bg-gray-50 text-left [&>*]:border [&>*]:border-gray-300 [&>*]:p-3">
          <th class="w-[260px]">Specification</th>
          <th>2&nbsp;L</th>
          <th>5&nbsp;L</th>
          <th>10&nbsp;L</th>
          <th>20&nbsp;L</th>
        </tr>
      </thead>

      <!-- spec rows -->
      <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr]:even:bg-[#FAFAFA]">
        <tr>
          <td class="font-medium">Temperature Stability&nbsp;°C</td>
          <td>±0.1°</td><td>±0.1°</td><td>±0.1°</td><td>±0.1°</td>
        </tr>
        <tr>
          <td class="font-medium">Reservoir Capacity (liters)</td>
          <td>2</td><td>5</td><td>10</td><td>20</td>
        </tr>
        <tr>
          <td class="font-medium">Working Temperature Range&nbsp;°C</td>
          <td>Ambient +5° to 100°</td>
          <td>Ambient +5° to 100°</td>
          <td>Ambient +5° to 100°</td>
          <td>Ambient +5° to 100°</td>
        </tr>
        <tr>
          <td class="font-medium">Heater Wattage (60&nbsp;watts)</td>
          <td>N/A</td><td>N/A</td><td>N/A</td><td>N/A</td>
        </tr>
        <tr>
          <td class="font-medium">Part Number for 60&nbsp;watts Model</td>
          <td>N/A</td><td>N/A</td><td>N/A</td><td>N/A</td>
        </tr>
        <tr>
          <td class="font-medium">Part Number for 50&nbsp;watts Model</td>
          <td>N/A</td><td>N/A</td><td>N/A</td><td>N/A</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<div class="mt-6 grid lg:grid-cols-[1fr_360px] gap-6 items-start">
  <!-- spec table -->
  <div class="bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-hidden">
    <div class="flex items-center gap-2 mb-4">
      <span class="inline-block px-3 py-1 rounded-full bg-[#BE0010] text-white font-[MaxOT] text-sm">Specifications</span>
    </div>
    <table class="w-full text-[15px] bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
      <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr]:even:bg-[#FAFAFA]">
        <tr><td class="font-medium w-[48%]">Temperature Stability&nbsp;°C</td><td>±0.1°</td></tr>
        <tr><td class="font-medium">Reservoir Capacity (liters)</td><td>28</td></tr>
        <tr><td class="font-medium">Working Temperature Range&nbsp;°C</td><td>Ambient +5° to 100°</td></tr>
        <tr><td class="font-medium">Heater Wattage (60&nbsp;watts)</td><td>N/A</td></tr>
        <tr><td class="font-medium">Part Number for 60&nbsp;watts Model</td><td>N/A</td></tr>
        <tr><td class="font-medium">Part Number for 50&nbsp;watts Model</td><td>N/A</td></tr>
      </tbody>
    </table>
  </div>

  <!-- product card on the right -->
  <aside class="rounded-2xl border border-gray-200 bg-white p-4">
    <div class="text-[13px] text-gray-500 mb-2">More Options Available</div>
    <img src="/images/products/PolyScience/twentyeightliter.png" alt="General Purpose Water Bath 28 Liter" class="w-full rounded-lg mb-4">
    <div class="font-semibold leading-5">General Purpose<br/>Water Bath 28&nbsp;Liter</div>
  </aside>
</div>

</div>
`,



    features: [
      {
        name: "Operates in five (5) languages",
    
      },
      {
        name: "User-settable High Limit Value",
        
    
      },
      {
        name: "Eco Mode aster timed run is complete",
      
      },
      {
        name: "User-settable alarms: audible, visible or both",
      
      },
      {
        name: "Displays actual and set point temperature simultaneously",
      
      },
      {
        name: "Programmable pre-sets for frequently used temperatures",
    
      },
      {
        name: "Integrated timer",
      
      },
      {
        name: "Hinged gable cover",
      
      },
      {
        name: "Calibration off-set feature",
       
      },
      {name:"Reservoir sizes from 2 to 28 liters"},
      {name:"Reservoir made of 304 Stainless Steel"},
      {name:"Reservoir drain (10 liter and larger baths)"},
      {name:"Primary and automatic safety thermostats"},
      {name:"Also compatible with waterless bath beads"},

    ],

    techSpecs: {
      specs: {
        "Temperature range": "Ambient +5 °C to 100 °C",
        "Temperature stability": "±0.1 °C",
        "Temperature uniformity": "±0.2 °C",
       
      }
    },
    advantages: [],
    highlights: [],
    faqs: [],

  },

  "benchtop-chillers": {
    id: "benchtop-chillers",
    name: "Benchtop Chillers ",
    image: ImgPolyBenchtopGroup, // default hero; swap to your preference (e.g., ImgDC400)
    bannerImg: Banner3,
    logo: Polyscience,
    altText: "Polyscience",
    meta: {
      title: "PolyScience Benchtop Chillers & Coolers | Inkarp India",
      description:
        "Compact, reliable, energy-efficient benchtop chillers for labs & industry. Working ranges down to −20 °C, stability ±0.1 °C, multiple pump options, and 400–1290 W cooling at +20 °C. Distributed & serviced by Inkarp India.",
      keywords: [
        "PolyScience",
        "benchtop chiller",
        "lab chiller",
        "DuraChill",
        "LS series",
        "LM series",
        "MM series",
        "Inkarp India",
        "cooling capacity 400W 1000W 1290W",
        "temperature stability ±0.1 °C"
      ],
      altText: "PolyScience Benchtop Chillers"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-4">
    <p>
      Inkarp Instruments is a leading distributor and service provider for PolyScience benchtop chillers in India. These compact, reliable, and energy-efficient chillers are ideal for laboratory, pharmaceutical, and industrial applications. With advanced temperature control and quiet operation, Polyscience benchtop chillers are perfect for cooling small equipment and instruments.
    </p>
<p>These powerful, low-temperature chillers are well-matched for use with rotary evaporators, vacuum systems, spectrometers, and other analytical equipment. Part of our award-winning line of chillers, these are a small and powerful option for your lab.</p>
 
  </div>

  <!-- ====== Quick gallery (responsive) ====== -->
<div class="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <div class="rounded-xl border border-gray-200 p-3 bg-white">
    <div class="text-xs text-gray-600 mb-2">More Options Available</div>
    <img src="/images/products/PolyScience/ls-series.png" alt="PolyScience LS Series Benchtop Chiller" class="w-full rounded-lg" />
    <div class="mt-3 font-medium leading-5">LS Series</div>
  </div>

  <div class="rounded-xl border border-gray-200 p-3 bg-white">
    <div class="text-xs text-gray-600 mb-2">More Options Available</div>
    <img src="/images/products/PolyScience/lm-series.png" alt="PolyScience LM Series Benchtop Chiller" class="w-full rounded-lg" />
    <div class="mt-3 font-medium leading-5">
      LM Series Chiller,<br />Centrifugal Pump<br />14.5 psi; 13.2 l/min
    </div>
  </div>

  <div class="rounded-xl border border-gray-200 p-3 bg-white">
    <div class="text-xs text-gray-600 mb-2">More Options Available</div>
    <img src="/images/products/PolyScience/mm-series.png" alt="PolyScience MM Series Benchtop Chiller" class="w-full rounded-lg" />
    <div class="mt-3 font-medium leading-5">
      MM Series Chiller,<br />Centrifugal Pump<br />5.1 psi; 7.9 l/min
    </div>
  </div>

  <div class="rounded-xl border border-gray-200 p-3 bg-white sm:col-span-2 lg:col-span-1">
    <div class="text-xs text-gray-600 mb-2">More Options Available</div>
    <img src="/images/products/PolyScience/durachill-400w.jpg" alt="PolyScience DuraChill Benchtop 400 W" class="w-full rounded-lg" />
    <div class="mt-3 font-medium leading-5">DuraChill Benchtop Chiller, 400W</div>
  </div>
</div>

<!-- ====== Model overview (Specifications tag + table) ====== -->
<div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
  <div class="inline-block bg-[#BE0010] text-white text-sm px-3 py-1 rounded-md mb-4">Specifications</div>
  <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Snapshot</h3>

  <div class="min-w-[900px]">
    <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
      <thead class="bg-gray-50">
        <tr class="[&>*]:border [&>*]:border-gray-300 [&>*]:p-3 text-left">
          <th>Model</th>
          <th>Pump</th>
          <th>Working Range (°C)</th>
          <th>Temp Stability</th>
          <th>Cooling @ +20&nbsp;°C (W)</th>
          <th>60&nbsp;Hz Part No.</th>
          <th>50&nbsp;Hz Part No.</th>
        </tr>
      </thead>
      <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr]:even:bg-[#FAFAFA]">
        <tr><td>LS Series (Turbine)</td><td>Turbine</td><td>−20 to 40</td><td>±0.1&nbsp;°C</td><td>900</td><td>LS51TX1A110C</td><td>LS52TY1A110E</td></tr>
        <tr><td>LS Series (Centrifugal, 9&nbsp;psi; 14.8&nbsp;l/min)</td><td>Centrifugal</td><td>−20 to 40</td><td>±0.1&nbsp;°C</td><td>1160</td><td>LS51M11A110C</td><td>LS52M21A110E</td></tr>
        <tr><td>LS Series (Centrifugal, 14.5&nbsp;psi; 13.2&nbsp;l/min)</td><td>Centrifugal</td><td>−20 to 40</td><td>±0.1&nbsp;°C</td><td>1290</td><td>LS51MX1A110C</td><td>LS52MY1A110E</td></tr>
        <tr><td>LM Series (Centrifugal, 5.1&nbsp;psi; 7.9&nbsp;l/min)</td><td>Centrifugal</td><td>−10 to 30</td><td>±0.1&nbsp;°C</td><td>560</td><td>LM61GX1A110C</td><td>LM62GY1A110E</td></tr>
        <tr><td>LM Series (Centrifugal, 14.5&nbsp;psi; 13.2&nbsp;l/min)</td><td>Centrifugal</td><td>−10 to 30</td><td>±0.1&nbsp;°C</td><td>420</td><td>LM61MX1A110C</td><td>LM62MY1A110E</td></tr>
        <tr><td>MM Series (Centrifugal, 5.1&nbsp;psi; 7.9&nbsp;l/min)</td><td>Centrifugal</td><td>−5 to 50</td><td>±0.1&nbsp;°C</td><td>460</td><td>MM71GX1A110C</td><td>MM72GY1A110E</td></tr>
        <tr><td>MM Series (Centrifugal, 14.5&nbsp;psi; 13.2&nbsp;l/min)</td><td>Centrifugal</td><td>−5 to 50</td><td>±0.1&nbsp;°C</td><td>435</td><td>MM71MX1A110C</td><td>MM72MY1A110E</td></tr>
        <tr><td>DuraChill Benchtop 400&nbsp;W</td><td>Centrifugal</td><td>−10 to 30</td><td>±0.1&nbsp;°C</td><td>400</td><td>BA05A1G3-310A13C</td><td>BA05A0G3-310A13E</td></tr>
        <tr><td>DuraChill Benchtop 1000&nbsp;W</td><td>Centrifugal</td><td>−20 to 30</td><td>±0.1&nbsp;°C</td><td>1000</td><td>BA06A1G3-310A13C</td><td>BA06A0G3-310A13E</td></tr>
      </tbody>
    </table>
  </div>
</div>

<!-- ====== Variants with Gallery (Specifications tag + table) ====== -->
<div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
  <div class="inline-block bg-[#BE0010] text-white text-sm px-3 py-1 rounded-md mb-4">Specifications</div>
  <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Available Variants</h3>

  <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
    <thead class="bg-[#f9fafb] text-gray-700">
      <tr>
        <th class="p-3 border border-gray-300 text-left font-[MaxOT]">Label</th>
        <th class="p-3 border border-gray-300 text-left font-[MaxOT]">Series</th>
        <th class="p-3 border border-gray-300 text-left font-[MaxOT]">Pump</th>
        <th class="p-3 border border-gray-300 text-left font-[MaxOT]">Working Temp Range (°C)</th>
        <th class="p-3 border border-gray-300 text-left font-[MaxOT]">Temp Stability</th>
        <th class="p-3 border border-gray-300 text-left font-[MaxOT]">Cooling Capacity (W at 20 °C)</th>
        <th class="p-3 border border-gray-300 text-left font-[MaxOT]">Part No (60Hz)</th>
        <th class="p-3 border border-gray-300 text-left font-[MaxOT]">Part No (50Hz)</th>
      </tr>
    </thead>
    <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
      <tr>
        <td>LS Series — Turbine Pump</td><td>LS</td><td>Turbine</td><td>-20 to 40</td><td>±0.1 °C</td><td>900</td><td>LS51TX1A110C</td><td>LS52TY1A110E</td>
      </tr>
      <tr>
        <td>LS Series — Centrifugal (9 psi; 14.8 l/min)</td><td>LS</td><td>Centrifugal</td><td>-20 to 40</td><td>±0.1 °C</td><td>1160</td><td>LS51M11A110C</td><td>LS52M21A110E</td>
      </tr>
      <tr>
        <td>LS Series — Centrifugal (14.5 psi; 13.2 l/min)</td><td>LS</td><td>Centrifugal</td><td>-20 to 40</td><td>±0.1 °C</td><td>1290</td><td>LS51MX1A110C</td><td>LS52MY1A110E</td>
      </tr>
      <tr>
        <td>LM Series — Centrifugal (5.1 psi; 7.9 l/min)</td><td>LM</td><td>Centrifugal</td><td>-10 to 30</td><td>±0.1 °C</td><td>560</td><td>LM61GX1A110C</td><td>LM62GY1A110E</td>
      </tr>
      <tr>
        <td>LM Series — Centrifugal (14.5 psi; 13.2 l/min)</td><td>LM</td><td>Centrifugal</td><td>-10 to 30</td><td>±0.1 °C</td><td>420</td><td>LM61MX1A110C</td><td>LM62MY1A110E</td>
      </tr>
      <tr>
        <td>MM Series — Centrifugal (5.1 psi; 7.9 l/min)</td><td>MM</td><td>Centrifugal</td><td>-5 to 50</td><td>±0.1 °C</td><td>460</td><td>MM71GX1A110C</td><td>MM72GY1A110E</td>
      </tr>
      <tr>
        <td>MM Series — Centrifugal (14.5 psi; 13.2 l/min)</td><td>MM</td><td>Centrifugal</td><td>-5 to 50</td><td>±0.1 °C</td><td>435</td><td>MM71MX1A110C</td><td>MM72MY1A110E</td>
      </tr>
      <tr>
        <td>DuraChill® Benchtop — 400 W</td><td>DuraChill</td><td>Centrifugal</td><td>-10 to 30</td><td>±0.1 °C</td><td>400</td><td>BA05A1G3-310A13C</td><td>BA05A0G3-310A13E</td>
      </tr>
      <tr>
        <td>DuraChill® Benchtop — 1000 W</td><td>DuraChill</td><td>Centrifugal</td><td>-20 to 30</td><td>±0.1 °C</td><td>1000</td><td>BA06A1G3-310A13C</td><td>BA06A0G3-310A13E</td>
      </tr>
    </tbody>
  </table>
</div>

</div>

</div>
`,

    variants: [
      {
        key: "ls-turbine",
        label: "LS Series — Turbine Pump",
        series: "LS",
        pump: "Turbine",
        working_temp_range_c: [-20, 40],
        temp_stability: "±0.1 °C",
        cooling_capacity_w_at_20c: 900,
        part_no_60hz: "LS51TX1A110C",
        part_no_50hz: "LS52TY1A110E",
        image: ImgLS
      },
      {
        key: "ls-centrifugal-9psi-14_8lmin",
        label: "LS Series — Centrifugal (9 psi; 14.8 l/min)",
        series: "LS",
        pump: "Centrifugal",
        working_temp_range_c: [-20, 40],
        temp_stability: "±0.1 °C",
        cooling_capacity_w_at_20c: 1160,
        part_no_60hz: "LS51M11A110C",
        part_no_50hz: "LS52M21A110E",
        image: ImgLS
      },
      {
        key: "ls-centrifugal-14_5psi-13_2lmin",
        label: "LS Series — Centrifugal (14.5 psi; 13.2 l/min)",
        series: "LS",
        pump: "Centrifugal",
        working_temp_range_c: [-20, 40],
        temp_stability: "±0.1 °C",
        cooling_capacity_w_at_20c: 1290,
        part_no_60hz: "LS51MX1A110C",
        part_no_50hz: "LS52MY1A110E",
        image: ImgLS
      },
      {
        key: "lm-centrifugal-5_1psi-7_9lmin",
        label: "LM Series — Centrifugal (5.1 psi; 7.9 l/min)",
        series: "LM",
        pump: "Centrifugal",
        working_temp_range_c: [-10, 30],
        temp_stability: "±0.1 °C",
        cooling_capacity_w_at_20c: 560,
        part_no_60hz: "LM61GX1A110C",
        part_no_50hz: "LM62GY1A110E",
        image: ImgLM
      },
      {
        key: "lm-centrifugal-14_5psi-13_2lmin",
        label: "LM Series — Centrifugal (14.5 psi; 13.2 l/min)",
        series: "LM",
        pump: "Centrifugal",
        working_temp_range_c: [-10, 30],
        temp_stability: "±0.1 °C",
        cooling_capacity_w_at_20c: 420,
        part_no_60hz: "LM61MX1A110C",
        part_no_50hz: "LM62MY1A110E",
        image: ImgLM
      },
      {
        key: "mm-centrifugal-5_1psi-7_9lmin",
        label: "MM Series — Centrifugal (5.1 psi; 7.9 l/min)",
        series: "MM",
        pump: "Centrifugal",
        working_temp_range_c: [-5, 50],
        temp_stability: "±0.1 °C",
        cooling_capacity_w_at_20c: 460,
        part_no_60hz: "MM71GX1A110C",
        part_no_50hz: "MM72GY1A110E",
        image: ImgMM
      },
      {
        key: "mm-centrifugal-14_5psi-13_2lmin",
        label: "MM Series — Centrifugal (14.5 psi; 13.2 l/min)",
        series: "MM",
        pump: "Centrifugal",
        working_temp_range_c: [-5, 50],
        temp_stability: "±0.1 °C",
        cooling_capacity_w_at_20c: 435,
        part_no_60hz: "MM71MX1A110C",
        part_no_50hz: "MM72MY1A110E",
        image: ImgMM
      },
      {
        key: "durachill-400w",
        label: "DuraChill® Benchtop — 400 W",
        series: "DuraChill",
        pump: "Centrifugal",
        working_temp_range_c: [-10, 30],
        temp_stability: "±0.1 °C",
        cooling_capacity_w_at_20c: 400,
        part_no_60hz: "BA05A1G3-310A13C",
        part_no_50hz: "BA05A0G3-310A13E",
        image: ImgDC400
      },
      {
        key: "durachill-1000w",
        label: "DuraChill® Benchtop — 1000 W",
        series: "DuraChill",
        pump: "Centrifugal",
        working_temp_range_c: [-20, 30],
        temp_stability: "±0.1 °C",
        cooling_capacity_w_at_20c: 1000,
        part_no_60hz: "BA06A1G3-310A13C",
        part_no_50hz: "BA06A0G3-310A13E",
        image: ImgDC1000
      }
    ],

    features: [
      {
        name: "Large, easy to read LED display",
  
      },
      
      {
        name: "Space-saving design",
     
      },
      {
        name: "Cooling at ambient temperatures as high as 30°C",
      
      },
      {
        name: "Low flow shutoff and alarm, high and low temperature alarms",
       
      },
      {
        name: "Front mounted fluid level gauge",
    
      },
      {
        name: "Simple setup, operation, and maintenance", 
      },
      {
        name: "Choice of pumps",
     
      }
    ],

    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

  "durachill-portable-chillers": {
    id: "durachill-portable-chillers",
    name: "DuraChill Portable Chillers ",
    image: ImgPolyChiller, // default hero; swap to your preference (e.g., ImgDC400)
    bannerImg: Banner3,
    logo: Polyscience,
    altText: "Polyscience",
    meta: {
      title: "PolyScience DuraChill Portable Chillers | Inkarp India",
      description:
        "Compact, reliable, portable chillers for labs & industry. Working ranges down to −20 °C, stability ±0.1 °C, multiple pump options, and 850–2900 W cooling at +20 °C. Distributed & serviced by Inkarp India.",
      keywords: [
        "Durachill Portable Chillers, Durachill Portable Chillers Services, Durachill Portable Chillers Chillers & Coolers Polyscience, Polyscience Application Specific , Inkarp"
      ],
      altText: "PolyScience Benchtop Chillers"
    },

    description: `
<section class="product" itemscope itemtype="https://schema.org/Product">
  <p class="text-lg py-2">
    Inkarp Instruments offers Polyscience DuraChill portable chillers in India, providing flexible and reliable temperature control solutions. These compact, lightweight chillers are designed for easy transport and use in various applications, including laboratory, industrial, and outdoor events. With advanced temperature control and rugged construction, PolyScience DuraChill portable chillers ensure precise cooling wherever needed.
  </p>

  <p>Changing the world of chillers forever is more than a tagline, it’s what we did once again with our new award-winning DuraChill portable recirculating chiller. Over three years in the making, DuraChill is the new industry standard for all others to follow. Learn about the DuraChill difference here and the many patented innovations that make DuraChill the tool you need for your application.</p>

  <!-- Models & Technical Data — THEMED TABLE ONLY -->
<div class="table-wrapper" role="region" aria-label="DuraChill technical comparison">
  <div class="bg-white border border-[#E3E8F5] rounded-xl p-4 sm:p-6 overflow-x-auto">
    <table class="w-full text-sm bg-white border  border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
      <thead class="bg-[#fff9e5]">
        <tr>
          <th scope="col" class="p-3 sm:p-4 border border-gray-500 text-left font-[MaxOT]">Cooling capacity</th>
          <th scope="col" class="p-3 sm:p-4 border  border-gray-500 text-left font-[MaxOT]">Pump type</th>
          <th scope="col" class="p-3 sm:p-4 border  border-gray-500 text-left font-[MaxOT]">MPN (50&nbsp;Hz)</th>
          <th scope="col" class="p-3 sm:p-4 border  border-gray-500 text-left font-[MaxOT]">Alt. MPN (60&nbsp;Hz)</th>
          <th scope="col" class="p-3 sm:p-4 border  border-gray-500 text-left font-[MaxOT]">Max pressure 50&nbsp;Hz</th>
          <th scope="col" class="p-3 sm:p-4 border  border-gray-500 text-left font-[MaxOT]">Max pressure 60&nbsp;Hz</th>
        </tr>
      </thead>
      <tbody class="[&>tr>*]:border [&>tr>*]: border-gray-300 [&>tr>*]:p-3 [&>tr>*]:sm:p-4 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
        <tr>
          <td>850&nbsp;W</td>
          <td>Turbine</td>
          <td>CA02A2T1-41AA1N</td>
          <td>CA02A1T1-41AA1N</td>
          <td>75&nbsp;psi</td>
          <td>90&nbsp;psi</td>
        </tr>
        <tr>
          <td>1.4&nbsp;kW</td>
          <td>Turbine</td>
          <td>CA03A2T1-41AA1N</td>
          <td>CA03A1T1-41AA1N</td>
          <td>75&nbsp;psi</td>
          <td>90&nbsp;psi</td>
        </tr>
        <tr>
          <td>1.74&nbsp;kW</td>
          <td>Turbine</td>
          <td>CA05A2T1-41AA1N</td>
          <td>CA05A1T1-41AA1N</td>
          <td>75&nbsp;psi</td>
          <td>90&nbsp;psi</td>
        </tr>
        <tr>
          <td>2.9&nbsp;kW</td>
          <td>Turbine</td>
          <td>CA10A2T1-41AA1N</td>
          <td>CA10A3T1-41AA1N</td>
          <td>75&nbsp;psi</td>
          <td>90&nbsp;psi</td>
        </tr>
        <tr>
          <td>850&nbsp;W</td>
          <td>Positive-displacement</td>
          <td>CA02A2P1-41AA1N</td>
          <td>CA02A1P1-41AA1N</td>
          <td>83&nbsp;psi</td>
          <td>100&nbsp;psi</td>
        </tr>
        <tr>
          <td>1.4&nbsp;kW</td>
          <td>Positive-displacement</td>
          <td>CA03A2P1-41AA1N</td>
          <td>CA03A1P1-41AA1N</td>
          <td>83&nbsp;psi</td>
          <td>100&nbsp;psi</td>
        </tr>
        <tr>
          <td>1.74&nbsp;kW</td>
          <td>Positive-displacement</td>
          <td>CA05A2P1-41AA1N</td>
          <td>CA05A1P1-41AA1N</td>
          <td>83&nbsp;psi</td>
          <td>100&nbsp;psi</td>
        </tr>
        <tr>
          <td>2.9&nbsp;kW</td>
          <td>Positive-displacement</td>
          <td>CA10A2P2-41AA1N</td>
          <td>CA10A3P2-41AA1N</td>
          <td>83&nbsp;psi</td>
          <td>100&nbsp;psi</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="6" class="p-3 sm:p-4 border border-[#E63946] bg-[#fff9e5]">
            Enclosure dimensions (all models): 26 × 15 × 21.8&nbsp;in (66 × 38.1 × 55.4&nbsp;cm)
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

</section>
`
    ,



    features: [
    
{name:"Large, full-color touchscreen display with intuitive interface and support for five different languages"},
{name:"Compact, portable design takes up less floor space"},
{name:"Cooling at ambient temperatures as high as 40°C"},
{name:"Choice of pumps and compressor sizes"},
{name:"DynamicFilter™ self-cleaning filter system"},
{name:"Front fill reservoir"},
{name:"Liquid level monitoring to prevent pump failure"},
{name:"Ultraviolet anti-biological light system"},
{name:"User-adjustable temperature, pressure, and flow rate alarms"},
{name:"Heat up to 70°C, without additional options; ideal for applications, such as lasers, that must be brought to a temperature above ambient before operation can begin"},
{name:"External temperature tracking and communications capability (optional)"},
{name:"Cool Command™, WhisperCool®"},
{name:"Dimensions(LxWxH) :  26 x 15 x 21.8 (66 x 38.1 x 55.4 cm)"}


    ],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

  "refrigerated-heated-circulating-baths": {
    id: "refrigerated-heated-circulating-baths",
    name: "Refrigerated/Heated Circulating Baths",
    image: ImgPolyRCCategory, // default hero; swap to your preference (e.g., ImgDC400)
    bannerImg: Banner3,
    logo: Polyscience,
    altText: "Polyscience",
    meta: {
      title: "Refrigerated/Heated Circulating Baths Distributor And Service Provider In India - Polyscience - Inkarp Instruments Pvt Ltd",
      description:
        "Compact, reliable, energy-efficient benchtop chillers for labs & industry. Working ranges down to −20 °C, stability ±0.1 °C, multiple pump options, and 400–1290 W cooling at +20 °C. Distributed & serviced by Inkarp India.",
      keywords: [
        "PolyScience",
        "benchtop chiller",
        "lab chiller",
        "DuraChill",
        "LS series",
        "LM series",
        "MM series",
        "Inkarp India",
        "cooling capacity 400W 1000W 1290W",
        "temperature stability ±0.1 °C"
      ],
      altText: "PolyScience Benchtop Chillers"
    },

    description: `
<section style="font-family: Roboto, Arial, Helvetica, sans-serif; color:#111; line-height:1.6;">
  <!-- Title -->
  <h2 style="font-family: MaxOT, Roboto, Arial, sans-serif; color:#e63946; font-size:1.75rem; margin:0 0 12px;">
    A versatile range of products to fit every need
  </h2>

 

  <p>Experience precise temperature control with Polyscience Refrigerated/Heated Circulating Baths from Inkarp Instruments. These premium baths offer exceptional stability and durability for various applications. With a temperature range of -20°C to 200°C, they cater to diverse research needs. Trust polyscience and Inkarp Instruments for premium performance and precision temperature control.</p>
  <p>Capable of reaching temperatures as low as -20°C, PolyScience Refrigerated/Heated Circulating Baths provide dependable temperature control for a wide variety of laboratory cooling applications.</p>

  <!-- Features -->
  <section style="background:#F5F5F5; border-radius:12px; padding:16px; margin:0 0 16px;">
    <h3 style="font-family: MaxOT, Roboto, Arial, sans-serif; color:#e63946; font-size:1.25rem; margin:0 0 10px;">
      Features
    </h3>
    <ul style="padding-left:18px; margin:0;" class="list-disc">
      <li>Working temperatures from −40° to +200°C</li>
      <li>Temperature stabilities to ±0.005°C</li>
      <li>Volumes from 7 to 75 liters</li>
      <li>Four controller types with large, intuitive displays and multiple communication options</li>
      <li>Large bath openings and easy-to-clean surfaces</li>
      <li>Swivel 180™ Rotating Controllers</li>
      <li>LidDock™ Lid Stowing System</li>
      <li>DuraTop™ Chemical-Resistant Deck</li>
      <li>WhisperCool® Environmental Control System</li>
      <li>Cool Command™ Technology</li>
    </ul>
  </section>

  <!-- Accessories -->
  <section style="background:#fff; border-radius:12px; padding:16px; border:1px solid #eee; margin:0 0 16px;">
    <h3 style="font-family: MaxOT, Roboto, Arial, sans-serif; color:#e63946; font-size:1.25rem; margin:0 0 10px;">
      PolyScience Refrigerated/Heated Circulators come with the following accessories:
    </h3>
    <ul style="padding-left:18px; margin:0;" class="list-disc">
      <li>Reservoir cover</li>
      <li>Bypass tubing</li>
      <li>Male inlet and outlet adapters for 3/8", 1/4", and 3/16" (0.95, 0.63, and 0.47 cm) tubing;
          1/4" to M16 adapters also included on 50 Hz units</li>
      <li>6' (1.83 m) standard grounded electrical cord with country-specific plug</li>
    </ul>
  </section>

  
</section>
<!-- ===== STYLES (once, at the top of your description) ===== -->
<style>
  .ink-spec-grid{display:grid;grid-template-columns:repeat(1,1fr);gap:16px}
  @media(min-width:768px){.ink-spec-grid{grid-template-columns:repeat(2,1fr)}}
  @media(min-width:1100px){.ink-spec-grid{grid-template-columns:repeat(4,1fr)}}
  .ink-card{background:#fff;border:1px solid #eee;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06)}
  .ink-card-head{padding:12px 12px 8px;background:#F5F5F5;border-bottom:1px solid #eee}
  .ink-chip{display:inline-block;font:600 10px/1 Roboto,Arial,sans-serif;color:#fff;background:#6b7280;border-radius:6px;padding:4px 6px;margin-right:6px;vertical-align:middle}
  .ink-chip--ap{background:#e63946}
  .ink-chip--ad{background:#0ea5e9}
  .ink-chip--sd{background:#6366f1}
  .ink-chip--mx{background:#22c55e}
  .ink-title{display:block;margin-top:6px;font-family:MaxOT,Roboto,Arial,sans-serif;color:#e63946;font-size:14px}
  .ink-img-wrap{background:#fff;display:flex;align-items:center;justify-content:center;padding:10px}
  .ink-img{max-width:100%;height:auto;display:block}
  .ink-table{width:100%;border-collapse:collapse}
  .ink-th,.ink-td{padding:10px 12px;border-top:1px solid #e5e7eb;font:500 13px/1.5 Roboto,Arial,sans-serif;color:#111}
  .ink-th{background:#F5F5F5;width:45%}
  .ink-td{background:#fff}
</style>

<!-- ====== GRID WRAPPER ====== -->
<div class="ink-spec-grid">

  <!-- ===== Card 1 (AP — 7L, -40°C) ===== -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ap">AP</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 7 Liter, AP, −40°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AP1.png" alt="Refrigerated Circulator 7L AP −40°C">
    </div>
    <table class="ink-table" role="table" aria-label="Specifications">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Programmable</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−40° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AP07R-40-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AP07R-40-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.005°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">6.18 × 5.59 × 5 in</td></tr>
    </table>
  </article>

  <!-- ===== Card 2 (AP — 7L, −20°C) ===== -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ap">AP</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 7 Liter, AP, −20°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AP2.png" alt="Refrigerated Circulator 7L AP −20°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Programmable</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−20° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AP07R-20-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AP07R-20-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.005°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">6.18 × 5.59 × 5 in</td></tr>
    </table>
  </article>

  <!-- ===== Card 3 (AP — 7L Low Profile, −20°C) ===== -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ap">AP</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 7 Liter Low Profile, AP, −20°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AP3.png" alt="Refrigerated Circulator 7L Low Profile AP −20°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Programmable</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−20° to 200°</td></tr>
      <!-- If your image shows AP07R-20-A11B/A12E for Low Profile, use those. If it's AP7LR, update accordingly. -->
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AP07R-20-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AP07R-20-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.005°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">6.18 × 5.59 × 5 in</td></tr>
    </table>
  </article>

  <!-- ===== Card 4 (AP — 15L, −40°C) ===== -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ap">AP</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 15 Liter, AP, −40°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AP4.png" alt="Refrigerated Circulator 15L AP −40°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Programmable</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−40° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AP15R-40-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AP15R-40-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.005°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">8.35 × 10.88 × 5.5 in</td></tr>
    </table>
  </article>

  <!-- ===== Card 5 (AP — 15/20/28/45L, −30/−25°C) ===== -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ap">AP</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 15 Liter, AP, −30°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AP5.png" alt="Refrigerated Circulator 15L AP −30°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Programmable</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−30° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AP15R-30-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AP15R-30-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.005°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">8.35 × 10.88 × 5.5 in</td></tr>
    </table>
  </article>

  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ap">AP</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 20 Liter, AP, −30°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AP6.png" alt="Refrigerated Circulator 20L AP −30°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Programmable</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−30° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AP20R-30-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AP20R-30-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.005°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">9.85 × 12.45 × 5.5 in</td></tr>
    </table>
  </article>

  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ap">AP</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 28 Liter, AP, −30°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AP7.png" alt="Refrigerated Circulator 28L AP −30°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Programmable</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−30° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AP28R-30-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AP28R-30-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.005°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">12.35 × 14.13 × 5.5 in</td></tr>
    </table>
  </article>

  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ap">AP</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 45 Liter, AP, −25°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AP8.png" alt="Refrigerated Circulator 45L AP −25°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Programmable</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−25° to 135°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AP45R-20-A13D</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AP45R-20-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.005°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">21.6 × 15.68 × 5.5 in</td></tr>
    </table>
  </article>

</div>
<!-- ===== END GRID ===== -->
<!-- ===== AD GRID ===== -->
<div class="ink-spec-grid">

  <!-- AD — 7L, −20°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ad">AD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 7 Liter, AD, −20°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AD1.png" alt="Refrigerated Circulator 7L AD −20°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−20° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AD07R-20-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AD07R-20-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.01°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">6.18 × 5.59 × 5 in</td></tr>
    </table>
  </article>

  <!-- AD — 7L, −40°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ad">AD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 7 Liter, AD, −40°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AD2.png" alt="Refrigerated Circulator 7L AD −40°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−40° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AD07R-40-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AD07R-40-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.01°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">6.18 × 5.59 × 5 in</td></tr>
    </table>
  </article>

  <!-- AD — 7L Low Profile, −20°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ad">AD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 7 Liter Low Profile, AD, −20°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AD3.png" alt="Refrigerated Circulator 7L Low Profile AD −20°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−20° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AD7LR-20-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AD7LR-20-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.01°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">6.18 × 5.59 × 5 in</td></tr>
    </table>
  </article>

  <!-- AD — 15L, −40°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ad">AD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 15 Liter, AD, −40°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AD4.png" alt="Refrigerated Circulator 15L AD −40°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−40° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AD15R-40-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AD15R-40-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.01°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">8.35 × 10.88 × 5.5 in</td></tr>
    </table>
  </article>

  <!-- AD — 15L, −30°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ad">AD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 15 Liter, AD, −30°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AD5.png" alt="Refrigerated Circulator 15L AD −30°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−30° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AD15R-30-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AD15R-30-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.01°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">8.35 × 10.88 × 5.5 in</td></tr>
    </table>
  </article>

  <!-- AD — 20L, −30°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ad">AD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 20 Liter, AD, −30°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AD6.png" alt="Refrigerated Circulator 20L AD −30°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−30° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AD20R-30-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AD20R-30-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.01°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">9.85 × 12.45 × 5.5 in</td></tr>
    </table>
  </article>

  <!-- AD — 28L, −30°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ad">AD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 28 Liter, AD, −30°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AD7.png" alt="Refrigerated Circulator 28L AD −30°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−30° to 200°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AD28R-30-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AD28R-30-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.01°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">12.35 × 14.13 × 5.5 in</td></tr>
    </table>
  </article>

  <!-- AD — 45L, −25°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ad">AD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 45 Liter, AD, −25°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/AD8.png" alt="Refrigerated Circulator 45L AD −25°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Advanced Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−25° to 135°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AD45R-20-A13D</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AD45R-20-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.01°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">21.6 × 15.68 × 5.5 in</td></tr>
    </table>
  </article>

</div>
<!-- ===== SD GRID ===== -->
<div class="ink-spec-grid">

  <!-- SD — 7L, −20°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--sd">SD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 7 Liter, SD, −20°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/SD1.png" alt="Refrigerated Circulator 7L SD −20°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Standard Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−20° to 170°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">SD07R-20-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">SD07R-20-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.04°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">6.18 × 5.59 × 5 in</td></tr>
    </table>
  </article>

  <!-- SD — 7L Low Profile, −20°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--sd">SD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 7 Liter Low Profile, SD, −20°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/SD2.png" alt="Refrigerated Circulator 7L Low Profile SD −20°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Standard Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−20° to 170°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">SD7LR-20-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">SD7LR-20-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.04°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">6.18 × 5.59 × 5 in</td></tr>
    </table>
  </article>

  <!-- SD — 15L, −30°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--sd">SD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 15 Liter, SD, −30°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/SD3.png" alt="Refrigerated Circulator 15L SD −30°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Standard Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−30° to 170°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">SD15R-30-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">SD15R-30-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.04°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">8.35 × 10.88 × 5.5 in</td></tr>
    </table>
  </article>

  <!-- SD — 20L, −30°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--sd">SD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 20 Liter, SD, −30°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/SD4.png" alt="Refrigerated Circulator 20L SD −30°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Standard Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−30° to 170°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">SD20R-30-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">SD20R-30-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.04°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">9.85 × 12.45 × 5.5 in</td></tr>
    </table>
  </article>

  <!-- SD — 28L, −30°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--sd">SD</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 28 Liter, SD, −30°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/SD5.png" alt="Refrigerated Circulator 28L SD −30°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">Standard Digital</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−30° to 170°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">SD28R-30-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">SD28R-30-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.04°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">12.35 × 14.13 × 5.5 in</td></tr>
    </table>
  </article>

</div>
<!-- ===== MX GRID ===== -->
<div class="ink-spec-grid">

  <!-- MX — 7L, −20°C -->


  <!-- MX — 20L, −30°C -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--mx">MX</span>
      <span class="ink-chip">More Options Available</span>
      <span class="ink-title">Refrigerated Circulator 20 Liter, MX, −30°C</span>
    </header>
    <div class="ink-img-wrap">
      <img class="ink-img" src="/images/products/PolyScience/MX1.png" alt="Refrigerated Circulator 20L MX −30°C">
    </div>
    <table class="ink-table">
      <tr><th class="ink-th">Controller Type</th><td class="ink-td">MX</td></tr>
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">−30° to 135°</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">MX20R-30-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">MX20R-30-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.07°</td></tr>
      <tr><th class="ink-th">Working Access (L × W × D) (inches)</th><td class="ink-td">9.85 × 12.45 × 5.5 in</td></tr>
    </table>
  </article>

   
  </div>
  <!-- Responsive iframe -->
  <div style="position:relative; width:100%; max-width:100%; border-radius:12px; overflow:hidden; background:#F5F5F5; border:1px solid #eee; margin:0 0 20px;">
    <div style="position:relative; padding-top:56.25%; width:100%; height:0;">
      <iframe
        src="https://polysciencestorage.z14.web.core.windows.net/Refrigeration-Bath/index.html"
        allowfullscreen
        width="100%"
        height="100%"
        style="position:absolute; inset:0; border:0;"
        marginheight="0"
        marginwidth="0"
        scrolling="no"
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
</div>

`
    ,
    features: [{name:"Working Temperatures from −40° to +200°C"}, {name:"Temperature stabilities to ±0.005°C"}, {name:"Volumes from 7 to 75 liters"}, {name:"Four controller types with large, intuitive displays and multiple communication options"}, {name:"Large bath openings and easy-to-clean surfaces"}, {name:"Swivel 180™ Rotating Controllers"}, {name:"LidDock™ Lid Stowing System"}, {name:"DuraTop™ Chemical-Resistant Deck"}, {name:"WhisperCool® Environmental Control System"}, {name:"Cool Command™ Technology"}],

    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

  "heated-circulating-baths": {
    id: "heated-circulating-baths",
    name: "Heated Circulating Baths",
    image: ImgPolyHeatedCategory, // default hero; swap to your preference (e.g., ImgDC400)
    bannerImg: Banner3,
    logo: Polyscience,
    altText: "Polyscience",
    meta: {
      title: "Heated Circulating Baths - Polyscience Distributor And Service Provider In India - Inkarp Instruments Pvt Ltd",
      description:
        "Compact, reliable, energy-efficient benchtop chillers for labs & industry. Working ranges down to −20 °C, stability ±0.1 °C, multiple pump options, and 400–1290 W cooling at +20 °C. Distributed & serviced by Inkarp India.",
      keywords: [
        "PolyScience",
        "benchtop chiller",
        "lab chiller",
        "DuraChill",
        "LS series",
        "LM series",
        "MM series",
        "Inkarp India",
        "cooling capacity 400W 1000W 1290W",
        "temperature stability ±0.1 °C"
      ],
      altText: "PolyScience Benchtop Chillers"
    },

    description: `
<section style="font-family: Roboto, Arial, Helvetica, sans-serif; color:#111; line-height:1.6;" class="space-y-3">
  <!-- Title -->
  <h2 style="font-family: MaxOT, Roboto, Arial, sans-serif; color:#e63946; font-size:1.75rem; margin:0 0 12px;">
   Heated Circulating Baths
  </h2>

  <!-- Responsive iframe -->
  
<p>The premium baths offer exceptional stability, durability, and flexibility for various applications. With a temperature range of -20°C to 200°C, they cater to diverse research needs. Advanced features like digital temperature control, programmable timers, and safety alarms ensure accurate results. Trust Polyscience and Inkarp Instruments for premium performance and precision temperature control.</p>

<p>PolyScience offers solutions for all your laboratory's liquid heating needs - Innovation with a purpose. Accurate temperature control, easy to use, PolyScience offers solutions for all your laboratory's liquid heating needs.</p>

<p>Typical applications include warming of reagents and culture media, thawing or tempering samples, biological incubation, cell culture, enzyme assays or controlling the temperature of laboratory equipment such as chromatography columns, viscometers and densitometers.</p>

<p>From a simple immersion circulator to economical open bath systems to full-featured circulating baths with ramp and soak capability.</p>
  <!-- ===== include once per description (skip if already present) ===== -->
<style>
  .ink-spec-grid{display:grid;grid-template-columns:repeat(1,1fr);gap:16px}
  @media(min-width:768px){.ink-spec-grid{grid-template-columns:repeat(2,1fr)}}
  @media(min-width:1100px){.ink-spec-grid{grid-template-columns:repeat(4,1fr)}}
  .ink-card{background:#fff;border:1px solid #eee;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06)}
  .ink-card-head{padding:12px 12px 8px;background:#F5F5F5;border-bottom:1px solid #eee}
  .ink-chip{display:inline-block;font:600 10px/1 Roboto,Arial,sans-serif;color:#fff;background:#6b7280;border-radius:6px;padding:4px 6px;margin-right:6px;vertical-align:middle}
  .ink-chip--ap{background:#e63946}
  .ink-chip--ad{background:#0ea5e9}
  .ink-chip--sd{background:#6366f1}
  .ink-chip--mx{background:#22c55e}
  .ink-title{display:block;margin-top:6px;font-family:MaxOT,Roboto,Arial,sans-serif;color:#e63946;font-size:14px}
  .ink-img-wrap{background:#fff;display:flex;align-items:center;justify-content:center;padding:10px}
  .ink-img{max-width:100%;height:auto;display:block}
  .ink-table{width:100%;border-collapse:collapse}
  .ink-th,.ink-td{padding:10px 12px;border-top:1px solid #e5e7eb;font:500 13px/1.5 Roboto,Arial,sans-serif;color:#111}
  .ink-th{background:#F5F5F5;width:45%}
  .ink-td{background:#fff}
  .ink-h{font-family:MaxOT,Roboto,Arial,sans-serif;color:#e63946;margin:0 0 10px}
  .ink-panel{background:#F5F5F5;border-radius:12px;padding:16px;border:1px solid #eee}
  .ink-two{display:grid;grid-template-columns:1fr;gap:16px}
  @media(min-width:1024px){.ink-two{grid-template-columns:380px 1fr}}
  .ink-benefit{border:1px solid #BE0010;border-radius:12px;padding:16px;background:#fff}
  .ink-benefit h4{font-family:MaxOT,Roboto,Arial,sans-serif;color:#e63946;margin:0 0 8px}
</style>

<!-- ======================== FEATURES & ACCESSORIES ======================= -->
<section class="ink-panel" style="margin:0 0 18px">
  <h3 class="ink-h" style="font-size:1.25rem">Features</h3>
  <ul style="margin:0;padding-left:18px" class="list-disc">
    <li>Working temperatures from ambient +10° to +200°C</li>
    <li>Temperature stabilities to ±0.005°C</li>
    <li>Capacities from 7 to 28 liters</li>
    <li>Four controller types with large, intuitive displays and multiple communication options</li>
    <li>Large bath openings and easy-to-clean surfaces</li>
    <li>Swivel 180™ Rotating Controllers</li>
    <li>LidDock™ Lid Stowing System</li>
    <li>DuraTop™ Chemical Resistant Deck</li>
  </ul>
  <p style="margin:14px 0 6px;font-weight:600">PolyScience Heated Circulators come with the following accessories:</p>
  <ul style="margin:0;padding-left:18px" class="list-disc">
    <li>Reservoir cover</li>
    <li>Bypass tubing</li>
    <li>Male inlet and outlet adapters for 3/8", 1/4", and 3/16" (0.95, 0.63, and 0.47&nbsp;cm) tubing; 1/4" to M16 adapters also included on 50&nbsp;Hz units</li>
    <li>6' (1.83&nbsp;m) standard grounded electrical cord with country-specific plug</li>
  </ul>
</section>

<!-- ============================ AD (Heated) ============================= -->
<div class="ink-spec-grid" style="margin:0 0 20px">
  <!-- AD — 7L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ad">AD</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 7 Liter, AD</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/ADH1.png" alt="Heated Circulator 7L AD"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 200°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AD07H200-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AD07H200-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.01°</td></tr>
    </table>
  </article>

  <!-- AD — 15L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ad">AD</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 15 Liter, AD</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/ADH2.png" alt="Heated Circulator 15L AD"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 200°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AD15H200-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AD15H200-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.01°</td></tr>
    </table>
  </article>

  <!-- AD — 20L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ad">AD</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 20 Liter, AD</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/ADH3.png" alt="Heated Circulator 20L AD"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 200°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AD20H200-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AD20H200-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.01°</td></tr>
    </table>
  </article>

  <!-- AD — 28L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ad">AD</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 28 Liter, AD</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/ADH4.png" alt="Heated Circulator 28L AD"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 200°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AD28H200-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AD28H200-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.01°</td></tr>
    </table>
  </article>
</div>

<!-- ============================ AP (Heated) ============================= -->
<div class="ink-spec-grid" style="margin:0 0 20px">
  <!-- AP — 7L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ap">AP</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 7 Liter, AP</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/ADH5.png" alt="Heated Circulator 7L AP"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 200°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AP07H200-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AP07H200-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.005°</td></tr>
    </table>
  </article>

  <!-- AP — 15L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ap">AP</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 15 Liter, AP</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/ADH6.png" alt="Heated Circulator 15L AP"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 200°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AP15H200-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AP15H200-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.005°</td></tr>
    </table>
  </article>

  <!-- AP — 20L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ap">AP</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 20 Liter, AP</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/ADH7.png" alt="Heated Circulator 20L AP"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 200°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AP20H200-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AP20H200-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.005°</td></tr>
    </table>
  </article>

  <!-- AP — 28L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--ap">AP</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 28 Liter, AP</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/ADH8.png" alt="Heated Circulator 28L AP"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 200°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">AP28H200-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">AP28H200-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.005°</td></tr>
    </table>
  </article>
</div>

<!-- ============================ MX / SD (Heated) ============================= -->
<div class="ink-spec-grid" style="margin:0 0 20px">
  <!-- MX — 7L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--mx">MX</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 7 Liter, MX</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/MXH1.png" alt="Heated Circulator 7L MX"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 135°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">MX07H135-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">MX07H135-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.07°</td></tr>
    </table>
  </article>

  <!-- MX — 15L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--mx">MX</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 15 Liter, MX</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/MXH2.png" alt="Heated Circulator 15L MX"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 135°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">MX15H135-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">MX15H135-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.07°</td></tr>
    </table>
  </article>

  <!-- MX — 20L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--mx">MX</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 20 Liter, MX</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/MXH3.png" alt="Heated Circulator 20L MX"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 135°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">MX20H135-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">MX20H135-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.07°</td></tr>
    </table>
  </article>

  <!-- SD — 7L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--sd">SD</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 7 Liter, SD</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/MXH4.png" alt="Heated Circulator 7L SD"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 170°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">SD07H170-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">SD07H170-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.04°</td></tr>
    </table>
  </article>
</div>

<!-- ============================ SD (Heated) continued ============================= -->
<div class="ink-spec-grid" style="margin:0 0 20px">
  <!-- SD — 15L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--sd">SD</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 15 Liter, SD</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/SDH1.png" alt="Heated Circulator 15L SD"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 170°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">SD15H170-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">SD15H170-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.04°</td></tr>
    </table>
  </article>

  <!-- SD — 20L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--sd">SD</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 20 Liter, SD</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/SDH2.png" alt="Heated Circulator 20L SD"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 170°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">SD20H170-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">SD20H170-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.04°</td></tr>
    </table>
  </article>

  <!-- SD — 28L -->
  <article class="ink-card">
    <header class="ink-card-head">
      <span class="ink-chip ink-chip--sd">SD</span><span class="ink-chip">More Options Available</span>
      <span class="ink-title">Heated Circulator 28 Liter, SD</span>
    </header>
    <div class="ink-img-wrap"><img class="ink-img" src="/images/products/PolyScience/SDH3.png" alt="Heated Circulator 28L SD"></div>
    <table class="ink-table">
      <tr><th class="ink-th">Working Temperature Range °C</th><td class="ink-td">Ambient +10° to 170°</td></tr>
      <tr><th class="ink-th">Heater Wattage (60Hz)</th><td class="ink-td">1100</td></tr>
      <tr><th class="ink-th">Part Number for 60 Hz Model</th><td class="ink-td">SD28H170-A11B</td></tr>
      <tr><th class="ink-th">Part Number for 50 Hz Model</th><td class="ink-td">SD28H170-A12E</td></tr>
      <tr><th class="ink-th">Temperature Stability °C</th><td class="ink-td">±0.04°</td></tr>
    </table>
  </article>
</div>
<div style="position:relative; width:100%; max-width:100%; border-radius:12px; overflow:hidden; background:#F5F5F5; border:1px solid #eee; margin:0 0 20px;">
    <div style="position:relative; padding-top:56.25%; width:100%; height:0;">
      <iframe
        src="https://polysciencestorage.z14.web.core.windows.net/SD28H/index.html"
        allowfullscreen
        width="100%"
        height="100%"
        style="position:absolute; inset:0; border:0;"
        marginheight="0"
        marginwidth="0"
        scrolling="no"
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  </div>
</div>`,
    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },
}