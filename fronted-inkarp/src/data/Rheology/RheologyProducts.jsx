import React, { useState } from "react";
import Waters from '/src/assets/PrincipalLogos/RowTwo/waters.svg';
import Labomatic from '/src/assets/PrincipalLogos/RowTwo/Labomatic.svg';
import ECom from '/src/assets/PrincipalLogos/RowTwo/ECom.png';

import Thermofisher from '/src/assets/PrincipalLogos/RowFive/thermofisher.png';
import Hitachi from '/src/assets/PrincipalLogos/RowSix/hitachi.png';

import FallingBallViscometer from "/images/products/Thermofisher/falling-ball-viscometers.jpg";
import OnlineRheometers from "/images/products/Thermofisher/online-rheometers.jpg";
import RotationalRheometers from "/images/products/Thermofisher/rotational-rheometers.jpg";
import RotationalViscometers from "/images/products/Thermofisher/rotational-viscometers.jpg";
import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";
import Banner3 from "/images/products/Banner/Banner3.jpg";


export const RheologyProducts = {
  "online-rheometers": {
    id: "online-rheometers",
    name: "Online Rheometers",
    image: OnlineRheometers, // replace with your imported image
    logo: Thermofisher,
    bannerImg: Banner3,
    altText: "ThermoFisherScientific",
    videoId: "",
    meta: {
      title: "Online Rheometers Rheometers & Viscometers Distributor & Service Provider In India - Thermo Fisher - Inkarp Instruments Pvt Ltd",
      description:
        "Discover top Online Rheometers & Viscometers from Thermo Fisher. Enhance your fluid analysis with precision tools tailored for your needs, backed by extensive distribution and service networks across India.",
      keywords: [
        "Online Rheometers Rheometers & Viscometers",
        "Thermo Scientific Online Rheometers",
        "HAAKE PCR",
        "Melt Index Measurement",
        "Viscosity Measurement",
        "Process Control Rheometer",
        "Online Polymer Testing",
        "HAAKE PCR 620",
        "HAAKE PCR 630",
        "Inkarp Thermo Scientific Distributor",
        "Rheology Testing Equipment"
      ],
      altText: "Thermo Scientific™ HAAKE PCR Online Rheometer",
      internalLinks: ["rheometers-and-viscometers", "thermo-scientific-products"],
      externalLinks: ["https://www.thermofisher.com/"]
    },
    "description": `
<div style="display:flex;flex-wrap:wrap;gap:20px;font-family:Roboto;color:#333;">
    <div style="flex:1 1 60%;min-width:300px;">
        <div style="">
            <div style="margin-bottom:10px;font-size:18px;line-height:1.6;">
                <p>Thermo Scientific™ HAAKE PCR (Process Control Rheometer) measures the melt index at standard ASTM loads and (HAAKE PCR 630) still maintains a minimum lag time which remains almost constant over the wide melt index measurement range. The HAAKE PCR online rheometer features innovative process control technology for online rheological measurements of melt index and melt viscosity.</p>
                <p>The HAAKE PCR's bypass design makes it possible to measure the viscosity at low shear rates without compromising residence time, resulting in much higher sensitivity when comparing different molecular weight materials. The die exit pressure control feature allows the HAAKE PCR to operate at pre-defined pressures ensuring operation in the linear region of the transducers and preventing degassing of ingredients with high gas pressure. This also allows covering a wide melt index range and product transitions with a single die, eliminating costly and time-consuming die changes common to other systems.</p>
                <p>All HAAKE PCR systems have independent motor control for each pump, allowing fast and flexible control. The HAAKE PCR 620 is a 2-pump system giving fast response for products with medium and high melt index. The HAAKE PCR 630 is a 3-pump bypass system, enabling even shorter response times for low melt index products.</p>
            </div>
        </div>
    </div>
</div>

<div style="margin-top:30px;">
    <h4 class="text-xl font-[MaxOT] text-[#E63946]">Product Overview</h4>
    <table style="border-collapse:collapse;width:100%;border:1px solid #999;font-size:15px;">
        <thead>
            <tr style="background:#f5f5f5;">
                <th style="border:1px solid #999;padding:8px;"></th>
                <th style="border:1px solid #999;padding:8px;">Catalog Number</th>
                <th style="border:1px solid #999;padding:8px;">Specifications</th>
                <th style="border:1px solid #999;padding:8px;">Unit Size</th>
                <th style="border:1px solid #999;padding:8px;">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="border:1px solid #999;padding:8px;text-align:center;">✔</td>
                <td style="border:1px solid #999;padding:8px;">550-0030</td>
                <td style="border:1px solid #999;padding:8px;">
                    <strong>Description:</strong> PCR 630 online rheometer<br>
                    <strong>Unit Size:</strong> Each
                </td>
                <td style="border:1px solid #999;padding:8px;">Each</td>
                <td style="border:1px solid #999;padding:8px;">PCR 630 online rheometer</td>
            </tr>
        </tbody>
    </table>
<div class="mt-6 bg-gray-50 border border-gray-300 p-5 rounded-lg shadow-sm">
  <h4 class="text-[#BE0010] text-lg font-semibold mb-3">Recommended for:</h4>
  
  <p class="font-medium text-gray-900">Applications:</p>
  <ul class="list-disc pl-6 text-gray-700 space-y-1 marker:text-[#BE0010]">
    <li>Online melt index measurement</li>
    <li>Online viscosity measurement</li>
  </ul>

  <p class="font-medium text-gray-900 mt-4">Materials:</p>
  <ul class="list-disc pl-6 text-gray-700 space-y-1 marker:text-[#BE0010] grid grid-cols-1 md:grid-cols-2 gap-x-6">
    <li>Polypropylene (PP)</li>
    <li>Polyethylene (LDPE/HDPE/LLDPE)</li>
    <li>Polyester (PET)</li>
    <li>Ethylen Vinyl Acetate (EVA)</li>
    <li>Polymethyl-methacrylate (PMMA)</li>
    <li>Polystyrene (PS)</li>
    <li>Polyamide / Nylon (PA)</li>
    <li>Polycarbonate (PC)</li>
  </ul>
</div>


    <div style="margin-top:20px;">
        <iframe src='//players.brightcove.net/665001591001/I9XluuSon_default/index.html?videoId=6313725570112' width="100%" height="450" allowfullscreen frameborder="0"></iframe>
    </div>
</div>
`

  },
  "rotational-rheometers": {
    id: "rotational-rheometers",
    name: "Rotational Rheometers",
    image: RotationalRheometers, // your imported image
    logo: Thermofisher,
    bannerImg: Banner3,
    altText: "ThermoFisherScientific",
    videoId: "",
    meta: {
      title: "Rotational Rheometers Rheometers & Viscometers Distributor & Service Provider In India - Thermo Fisher - Inkarp Instruments Pvt Ltd",
      description:
        "Explore Rotational Rheometers & Viscometers by Thermo Fisher at Inkarp Instruments. Discover advanced solutions for precise viscosity measurements, backed by extensive distribution and service networks across India.",
      keywords: [
        "Rotational Rheometers Rheometers & Viscometers",
        "Rotational Rheometers",
        "HAAKE MARS iQ",
        "Thermo Scientific Rheometer",
        "Rheology QC",
        "Air bearing rheometer",
        "Ball bearing rheometer",
        "RheoWin software",
        "Inkarp Thermo distributor",
        "Rheology testing India"
      ],
      altText: "Thermo Scientific HAAKE MARS iQ rotational rheometer",
      internalLinks: ["rheometers-and-viscometers", "thermo-scientific-products"],
      externalLinks: ["https://www.thermofisher.com/"]
    },
    description: `
  <div class="font-[Roboto] text-[#333] max-w-full">

  <!-- Intro + Benefits -->
  <div class="flex flex-wrap gap-5">
    <div class="flex-1 min-w-[280px] max-w-full">
      <div class="px-5 box-border">
        <div class="mb-3.5 text-[17px] leading-7">
          <p><strong>Thermo Scientific™ HAAKE™ MARS™ iQ Rotational Rheometers</strong> ensure intuitive, reliable and flexible rheological measurements. A sophisticated touchscreen lets SOPs run right from the instrument, while <em>Connect Assist</em> guides users for failure-free measurements.</p>
          <p>Choose air-bearing or ball-bearing systems to suit your lab. A broad range of accessories meets demanding QC and R&amp;D applications. <strong>MARS iQ</strong> replaces the discontinued <em>HAAKE™ RheoStress™ 1</em> and <em>HAAKE™ RotoVisco™ 1</em>.</p>
        </div>

        <!-- Highlight Card -->
        <div class="bg-[#fff6f7] border border-[#f2b7bf] rounded-lg py-3.5 px-4 my-4.5">
          <h3 class="m-0 mb-2 text-[#E63946] text-[18px] font-bold">Why MARS™ iQ</h3>
          <ul class="m-0 pl-5 list-disc marker:text-[#BE0010] space-y-1.5 text-[15px]">
            <li>7” multi-function touchscreen for instrument control &amp; SOP execution</li>
            <li>“Assist” &amp; “Connect Assist” features to simplify setup and prevent errors</li>
            <li>Color-coded connectors for quick, correct module selection</li>
            <li>HAAKE™ RheoWin™ software; optional 21 CFR Part 11 module</li>
            <li>Folded-H frame for stiffness and ultra-precise lift control</li>
            <li>Mineral composite frame: high damping, low thermal expansion, chemical resistance</li>
            <li>Next-gen EC motor; choice of mechanical (ball) or air bearing</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- Product Overview -->
  <div class="mt-5 max-w-full">
    <h3 class="text-[#E63946] font-bold mb-2 px-5">Product Overview</h3>

    <div class="w-full overflow-x-auto will-change-scroll border border-neutral-400 rounded-md">
      <table class="w-full min-w-[720px] border-collapse text-[15px]">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-neutral-400 p-2.5 w-10"></th>
            <th class="border border-neutral-400 p-2.5 text-left">Catalog Number</th>
            <th class="border border-neutral-400 p-0 text-left">Specifications</th>
            <th class="border border-neutral-400 p-2.5 text-left">Unit Size</th>
            <th class="border border-neutral-400 p-2.5 text-left">Description</th>
          </tr>
        </thead>
        <tbody class="align-top">
          <!-- Air-bearing -->
          <tr class="odd:bg-white even:bg-gray-50">
            <td class="border border-neutral-400 p-2.5 text-center">✔</td>
            <td class="border border-neutral-400 p-2.5">379-0700</td>
            <td class="border border-neutral-400 p-0">
              <table class="w-full border-collapse text-[14px]">
                <tbody>
                  <tr>
                    <td class="border border-neutral-300 p-2 w-[45%]">Angular Resolution</td>
                    <td class="border border-neutral-300 p-2">0.63 μrad</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-2">Description</td>
                    <td class="border border-neutral-300 p-2">HAAKE MARS iQ Rheometer - air-bearing</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-2">Dimensions (L x W x H)</td>
                    <td class="border border-neutral-300 p-2">480 × 390 × 670 mm</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-2">Frequency Range</td>
                    <td class="border border-neutral-300 p-2">0.0001 to 100 Hz</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-2">Lift Speed Range</td>
                    <td class="border border-neutral-300 p-2">0.05 μm/s to 20 mm/s</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-2">Normal Force</td>
                    <td class="border border-neutral-300 p-2">0.01–50 N; resolution 0.001 N</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-2">Rotational Speed Range</td>
                    <td class="border border-neutral-300 p-2">0.001 to 2000 rpm</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-2">Temperature Range</td>
                    <td class="border border-neutral-300 p-2">-60 °C to +400 °C</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-2">Torque Range</td>
                    <td class="border border-neutral-300 p-2">Min rot: 0.001 mNm; Max rot: 150 mNm; Min osc: 0.001 mNm; Max osc: 150 mNm; Resolution: 0.007 μNm</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-2">Velocity Range</td>
                    <td class="border border-neutral-300 p-2">0.0001 to 209.4 rad/s</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-2">Weight</td>
                    <td class="border border-neutral-300 p-2">57 kg</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-2">Unit Size</td>
                    <td class="border border-neutral-300 p-2">Each</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="border border-neutral-400 p-2.5">Each</td>
            <td class="border border-neutral-400 p-2.5">HAAKE MARS iQ Rheometer - air-bearing</td>
          </tr>

          <!-- Ball-bearing -->
          <tr class="odd:bg-white even:bg-gray-50">
            <td class="border border-neutral-400 p-2.5 text-center">✔</td>
            <td class="border border-neutral-400 p-2.5">379-0800</td>
            <td class="border border-neutral-400 p-0">
              <table class="w-full border-collapse text-[14px]">
                <tbody>
                  <tr>
                    <td class="border border-neutral-300 p-2 w-[45%]">Angular Resolution</td>
                    <td class="border border-neutral-300 p-2">0.63 μrad</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-2">Description</td>
                    <td class="border border-neutral-300 p-2">HAAKE MARS iQ Rheometer - ball-bearing</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-2">Dimensions (L x W x H)</td>
                    <td class="border border-neutral-300 p-2">480 × 390 × 670 mm</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-2">Frequency Range</td>
                    <td class="border border-neutral-300 p-2">0.01 to 20 Hz</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-2">Lift Speed Range</td>
                    <td class="border border-neutral-300 p-2">0.05 μm/s to 20 mm/s</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-2">Rotational Speed Range</td>
                    <td class="border border-neutral-300 p-2">0.01 to 2000 rpm</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-2">Temperature Range</td>
                    <td class="border border-neutral-300 p-2">-60 °C to +400 °C</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-2">Torque Range</td>
                    <td class="border border-neutral-300 p-2">Min/Max rot: 0.2 / 125 mNm; Min/Max osc: 0.2 / 125 mNm; Resolution: 2.0 μNm</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-2">Velocity Range</td>
                    <td class="border border-neutral-300 p-2">0.001 to 209.4 rad/s</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-2">Weight</td>
                    <td class="border border-neutral-300 p-2">57 kg</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-2">Unit Size</td>
                    <td class="border border-neutral-300 p-2">Each</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="border border-neutral-400 p-2.5">Each</td>
            <td class="border border-neutral-400 p-2.5">HAAKE MARS iQ Rheometer - ball-bearing</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Feature Sections -->
  <div class="mt-4 px-5 box-border text-[15px] leading-7">
    <p class="font-bold text-[16px] mb-1.5">Intuitive Operations</p>
    <ul class="pl-5 mt-1 mb-4 list-disc marker:text-[#BE0010] space-y-1.5">
      <li>Multifunctional 7’’ touchscreen for instrument operation and SOP execution right at your fingertips</li>
      <li>‘‘Assist‘‘ functionalities to simplify operation and prevent mistakes</li>
      <li>‘‘Connect Assist‘‘ quick coupling of measuring geometries and temperature modules with automatic recognition</li>
      <li>‘‘Color Assist‘‘ color-coded plugs for quick, correct selection of temperature modules</li>
      <li>HAAKE™ RheoWin™ Rheology Software for extensive measuring flexibility with free updates (Optional 21 CFR part 11 module available)</li>
    </ul>

    <p class="font-bold text-[16px] mb-1.5">Intelligent Design</p>
    <ul class="pl-5 mt-1 mb-4 list-disc marker:text-[#BE0010] space-y-1.5">
      <li>Folded H frame concept for greater stiffness and ultra-precise lift control with a wide travel range</li>
      <li>Durable material: high-performance mineral composite casting with high vibrational damping, minimal temperature expansion and high chemical resistance</li>
      <li>Next generation of highly dynamic, powerful EC motor with a mechanical or air bearing.</li>
    </ul>

    <p class="font-bold text-[16px] mb-1.5">Individualized Configurations</p>
    <ul class="pl-5 mt-1 mb-4 list-disc marker:text-[#BE0010] space-y-1.5">
      <li>Folded H frame concept for greater stiffness and ultra-precise lift control with a wide travel range</li>
      <li>Durable material: high-performance mineral composite casting with high vibrational damping, minimal temperature expansion and high chemical resistance</li>
      <li>Next generation of highly dynamic, powerful EC motor with a mechanical or air bearing.</li>
    </ul>

    <p class="font-bold text-[16px] mb-1.5">Application solutions</p>
    <p class="mb-2">The HAAKE MARS iQ Rheometers are well-suited for the rheological characterization of a broad range of samples from low-viscous or water-like up to stiff and paste-like semisolids:</p>
    <ul class="pl-5 mt-1 mb-4 list-disc marker:text-[#BE0010] space-y-1.5">
      <li>Investigation of paints, coatings and inks: shear viscosity, thixotropy, yield stress, shear recovery, levelling and sagging behavior</li>
      <li>Rheology and textural properties of foods and foodstuffs: shear viscosity, yield stress, tribology, texture analysis (axial bending, breaking, squeezing tests), phase transition</li>
      <li>Rheology of cosmetics and pharmaceuticals: viscosity, yield stress, viscoelastic properties, stability tests</li>
      <li>Rheology of polymer (e.g. polymer melts and solutions): viscoelasticity, phase transitions (glass transition, crystallization, melting), processing behavior (hot melt extrusion, molding, spinning), molecular weight, curing</li>
      <li>Rheology of petrochemicals (crude oils, fracking liquids and drilling fluids): viscosity, yield stress, pressure dependent properties, stability tests, wax deposition, wax appearance temperature (WAT)</li>
      <li>Dynamic shear rheometer (DSR) tests according to AASHTO, ASTM and DIN used for bitumen and asphalt</li>
      <li>Construction and building material (cement paste and slurries): flow properties of suspensions with large particles</li>
    </ul>
  </div>

  <!-- Videos -->
  <div class="mt-4 w-full px-5 box-border">
    <div class="flex flex-wrap gap-3">
      <div class="flex-1 min-w-[240px] basis-[280px]">
        <iframe src="//players.brightcove.net/665001591001/8aOc5YfdB_default/index.html?videoId=6039517097001"
                class="w-full h-52 border-0 block rounded-md shadow-sm"
                allowfullscreen></iframe>
      </div>
      <div class="flex-1 min-w-[240px] basis-[280px]">
        <iframe src="//players.brightcove.net/665001591001/8aOc5YfdB_default/index.html?videoId=6158093179001"
                class="w-full h-52 border-0 block rounded-md shadow-sm"
                allowfullscreen></iframe>
      </div>
      <div class="flex-1 min-w-[240px] basis-[280px]">
        <iframe src="//players.brightcove.net/665001591001/8aOc5YfdB_default/index.html?videoId=6233085376001"
                class="w-full h-52 border-0 block rounded-md shadow-sm"
                allowfullscreen></iframe>
      </div>
    </div>
  </div>

</div>


`
  },
  "falling-ball-viscometer": {
    id: "falling-ball-viscometer",
    name: "Falling Ball Viscometer",
    image: FallingBallViscometer, // replace with your imported image
    logo: Thermofisher,
    bannerImg: Banner3,
    altText: "ThermoFisherScientific",
    videoId: "",
    meta: {
      title: "Falling Ball Viscometer Rheometers & Viscometers Distributor & Service Provider In India - Thermo Fisher - Inkarp Instruments Pvt Ltd",
      description:
        "Discover the precision of Falling Ball Viscometers from Thermo Fisher & Inkarp Instruments. Achieve accurate viscosity measurements for your projects, backed by extensive distribution and service networks across India.",
      keywords: [
        "Falling Ball Viscometer Rheometers & Viscometers",
        "Falling Ball Viscometer",
        "HAAKE Falling Ball",
        "Thermo Scientific Viscometer",
        "DIN 53015",
        "ISO 12058",
        "Newtonian liquids viscosity",
        "Reference viscometer",
        "Viscosity measurement India",
        "Inkarp Thermo Scientific Distributor",
        "Laboratory viscometers"
      ],
      altText: "Thermo Scientific™ HAAKE Falling Ball Viscometer C",
      internalLinks: ["rheometers-and-viscometers", "thermo-scientific-products"],
      externalLinks: ["https://www.thermofisher.com/"]
    },
    description: `
        <div class="font-['Roboto'] text-[#333]">

  <!-- Intro -->
  <div class="flex flex-wrap gap-5">
    <div class="flex-1 basis-[60%] min-w-[300px]">
      <div class="pl-5">
        <div class="mb-2.5 text-[18px] leading-7">
          <p class="!m-0 mb-2.5 font-semibold">Measure viscosity precisely using only a stop watch and no power connection with the Thermo Scientific™ HAAKE™ Falling Ball Viscometer C.</p>
          <p class="!m-0 mb-2.5">
            The measuring accuracy of the HAAKE Falling Ball Viscometer C is among the highest available in any type of viscometer, particularly when supported with the precise temperature control of a circulator. It provides accurate measurement of the viscosity of transparent Newtonian liquids and gases. The HAAKE Falling Ball Viscometer C also meets the requirements of the German DIN 53015 and ISO 12058 standard, and it is accepted as an official reference instrument.
          </p>
          <p class="!m-0">
            HAAKE MARS iQ Rotational Rheometers are the replacements for the discontinued Thermo Scientific™ HAAKE™ RheoStress™ 1 Rheometer and Thermo Scientific™ HAAKE™ RotoVisco™ 1 Rotational Rheometer.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Product Overview -->
  <div class="mt-7">
    <h4 class="m-0 mb-2.5 text-[20px] font-bold text-[#E63946]">Product Overview</h4>

    <div class="w-full overflow-x-auto">
      <table class="w-full min-w-[760px] border border-neutral-500 text-[15px] border-collapse">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-neutral-500 p-2"></th>
            <th class="border border-neutral-500 p-2 text-left">Catalog Number</th>
            <th class="border border-neutral-500 p-2 text-left">Specifications</th>
            <th class="border border-neutral-500 p-2 text-left">Unit Size</th>
            <th class="border border-neutral-500 p-2 text-left">Temperature Range (Metric)</th>
            <th class="border border-neutral-500 p-2 text-left">Viscosity Range</th>
          </tr>
        </thead>
        <tbody>
          <tr class="odd:bg-white even:bg-gray-50 align-top">
            <td class="border border-neutral-500 p-2 text-center">
              <span class="inline-block w-4 h-4 bg-[#28a745] rounded"></span>
            </td>
            <td class="border border-neutral-500 p-2">3560001</td>

            <!-- Nested specs table -->
            <td class="border border-neutral-500 p-0">
              <table class="w-full text-[14px] border border-neutral-300 border-collapse">
                <tbody>
                  <tr>
                    <td class="border border-neutral-300 p-1.5 font-semibold w-[40%]">Product Type</td>
                    <td class="border border-neutral-300 p-1.5">Falling Ball Viscometer</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-1.5 font-semibold">Viscosity Range</td>
                    <td class="border border-neutral-300 p-1.5">0.5 to 1,000,000 cSt</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-1.5 font-semibold">Certifications/Compliance</td>
                    <td class="border border-neutral-300 p-1.5">The HAAKE Falling Ball viscometer meets the requirements of the DIN 53015/ISO 12058 standards</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-1.5 font-semibold">Material</td>
                    <td class="border border-neutral-300 p-1.5">Falling Tube, Balls 1, 2 and G, Borosilicate Glass; Balls 3, 4, 5 and 6, Nickel Iron Alloy</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-1.5 font-semibold">Reproducibility</td>
                    <td class="border border-neutral-300 p-1.5">&lt;0.5%</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-1.5 font-semibold">Temperature Range (Metric)</td>
                    <td class="border border-neutral-300 p-1.5">-20°C to +150°C</td>
                  </tr>
                  <tr>
                    <td class="border border-neutral-300 p-1.5 font-semibold">Unit Size</td>
                    <td class="border border-neutral-300 p-1.5">Each</td>
                  </tr>
                </tbody>
              </table>
            </td>

            <td class="border border-neutral-500 p-2">Each</td>
            <td class="border border-neutral-500 p-2">-20°C to +150°C</td>
            <td class="border border-neutral-500 p-2">0.5 to 1,000,000 cSt</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Includes / Requires / Applications -->
    <div class="mt-4">
      <p class="font-bold mb-1.5">Falling Ball Viscometer type C</p>
      <p class="mb-1.5"><strong>Includes:</strong></p>
      <ul class="mb-3 pl-5 list-disc marker:text-[#BE0010] space-y-1.5">
        <li>Falling ball tube with holder</li>
        <li>Set of 6 balls (No 1-6)</li>
        <li>Instrument Case</li>
        <li>Thermometer -1 °C bis +26 °C in 0,1 °C steps</li>
        <li>Cleaning tools, calibration sheet, instruction manual</li>
      </ul>

      <p class="mb-2"><strong>Requires:</strong> Stopwatch</p>

      <p class="mb-1.5"><strong>For transparent Newtonian liquids and gases for instance:</strong></p>
      <ul class="mb-4 pl-5 list-disc marker:text-[#BE0010] space-y-1.5">
        <li>Chemical industry (polymer solution, solvents)</li>
        <li>Pharmaceutical industry (raw materials, glycerine)</li>
        <li>Food industry (sugar solutions)</li>
        <li>Mineral oil industry (oils)</li>
      </ul>
    </div>

    <!-- Videos -->
    <div class="w-full overflow-x-auto overflow-y-hidden">
      <div class="flex gap-3 min-w-[780px]">
        <iframe
          src="//players.brightcove.net/665001591001/8aOc5YfdB_default/index.html?videoId=6039517097001"
          class="flex-[1_0_33%] min-w-[260px] w-full h-52 border-0 rounded-md shadow-sm"
          allowfullscreen loading="lazy"></iframe>

        <iframe
          src="//players.brightcove.net/665001591001/8aOc5YfdB_default/index.html?videoId=6158093179001"
          class="flex-[1_0_33%] min-w-[260px] w-full h-52 border-0 rounded-md shadow-sm"
          allowfullscreen loading="lazy"></iframe>

        <iframe
          src="//players.brightcove.net/665001591001/8aOc5YfdB_default/index.html?videoId=6233085376001"
          class="flex-[1_0_33%] min-w-[260px] w-full h-52 border-0 rounded-md shadow-sm"
          allowfullscreen loading="lazy"></iframe>
      </div>
    </div>
  </div>

</div>
`

  },
  "rotational-viscometers": {
    id: "falling-ball-viscometer",
    name: "Falling Ball Viscometer",
    image: RotationalViscometers, // imported image
    logo: Thermofisher,
    bannerImg: Banner3,
    altText: "ThermoFisherScientific",
    videoId: "",
    meta: {
      title: "Rotational Viscometers Rheometers & Viscometers Distributor & Service Provider In India - Thermo Fisher - Inkarp Instruments Pvt Ltd",
      description:
        "Explore high-quality Rotational Viscometers from Thermo Fisher at Inkarp Instruments. Achieve accurate viscosity measurements for your applications, backed by extensive distribution and service networks across India.",
      keywords: [
        "Rotational Viscometers Rheometers & Viscometers",
        "Falling Ball Viscometer",
        "Thermo Scientific HAAKE Viscometer",
        "Viscosity Measurement",
        "DIN 53015",
        "ISO 12058",
        "Transparent Liquids Viscosity",
        "Newtonian Liquids Testing",
        "Inkarp Thermo Scientific Distributor",
        "HAAKE Falling Ball Viscometer",
        "Industrial Viscosity Measurement"
      ],
      altText: "Thermo Scientific™ HAAKE™ Falling Ball Viscometer C",
      internalLinks: ["rheometers-and-viscometers", "thermo-scientific-products"],
      externalLinks: ["https://www.thermofisher.com/"]
    },
    description: `
       <div class="font-[Roboto] text-[#333]">
  <!-- Intro -->
  <div class="flex flex-wrap gap-5">
    <div class="flex-1 basis-[60%] min-w-[300px]">
      <div class="pl-5">
        <div class="mb-2.5 text-[18px] leading-7">
          <p class="!m-0 mb-2.5 font-semibold">
            Perform viscosity measurements with ease. The Thermo Scientific™ HAAKE™ Viscotester™ 3 rotational viscometer ensures quick, reliable tests for QC applications.
          </p>
          <p class="!m-0 mb-2.5">
            Use it as a handheld viscometer or on a lab stand. Color coding ensures measuring geometries match the analysis, the display is readable in any lighting, and the viscometer remembers the reference point measurement for you. All that comes in a ready-to-go carrying case.
          </p>
          <p class="!m-0">
            HAAKE Viscotester 3 Rotational Viscometer is the replacement for the discontinued Thermo Scientific™ HAAKE™ Viscotester™ 1 plus and 2 plus Rotational Viscometers.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Tabs / Title -->
  <div class="mt-3.5">
    <div class="mb-4">
      <ul class="list-none m-0 p-0">
        <h2
          class="inline-block text-[20px] leading-5 font-semibold text-[#E63946] mr-9"
          data-tab="#tab-1"
        >
          Product Overview
        </h2>
      </ul>
    </div>

    <!-- Tab Content -->
    <div id="tab-1">
      <div>
        <!-- Table wrapper -->
        <div class="w-full overflow-x-auto">
          <table class="w-full min-w-[900px] border border-neutral-500 border-collapse">
            <thead>
              <tr class="bg-gray-100">
                <th class="border border-neutral-500 p-2.5"></th>
                <th class="border border-neutral-500 p-2.5 text-left">Catalog Number</th>
                <th class="border border-neutral-500 p-2.5 text-left">Specifications</th>
                <th class="border border-neutral-500 p-2.5 text-left">Unit Size</th>
                <th class="border border-neutral-500 p-2.5 text-left">Description</th>
                <th class="border border-neutral-500 p-2.5 text-left">Viscosity Range</th>
              </tr>
            </thead>
            <tbody class="align-top">
              <!-- Row 1 -->
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="border border-neutral-500 p-2.5 text-center">
                  <span class="inline-block w-4 h-4 bg-[#28a745] rounded"></span>
                </td>
                <td class="border border-neutral-500 p-2.5">
                  <span>399-0111</span>
                </td>
                <td class="border border-neutral-500 p-0">
                  <!-- Nested specs -->
                  <table class="w-full text-[14px] border-x border-neutral-300 border-collapse">
                    <tbody>
                      <tr>
                        <td class="border border-neutral-300 p-2 w-[40%] font-semibold">Description</td>
                        <td class="border border-neutral-300 p-2">HAAKE Viscotester 3 Rotational Viscometer for low viscosity measurements</td>
                      </tr>
                      <tr>
                        <td class="border border-neutral-300 p-2 font-semibold">Includes</td>
                        <td class="border border-neutral-300 p-2">
                          Base viscometer comes in carrying case with instrument holder (for lab stand), two measuring cups (A and B), three rotors (No. 3, 4 and 5), four rechargeable batteries and one power supply adapter. Easily upgrade your Thermo Scientific HAAKE Viscotester 1 Plus viscometer to this model; the results are compatible.
                        </td>
                      </tr>
                      <tr>
                        <td class="border border-neutral-300 p-2 font-semibold">Measuring Accuracy</td>
                        <td class="border border-neutral-300 p-2">
                          ± 5% FSD (rotors R1, R2, R3)
                          <div>± 7.5% FSD (rotor R5)</div>
                          <div>± 10% FSD (rotor R4)</div>
                        </td>
                      </tr>
                      <tr>
                        <td class="border border-neutral-300 p-2 font-semibold">Power Supply</td>
                        <td class="border border-neutral-300 p-2">Operable by battery or power supply.</td>
                      </tr>
                      <tr>
                        <td class="border border-neutral-300 p-2 font-semibold">Rotational Speed Range</td>
                        <td class="border border-neutral-300 p-2">62.5 rpm</td>
                      </tr>
                      <tr>
                        <td class="border border-neutral-300 p-2 font-semibold">Temperature Range (Metric)</td>
                        <td class="border border-neutral-300 p-2">Up to 150°C</td>
                      </tr>
                      <tr>
                        <td class="border border-neutral-300 p-2 font-semibold">Viscosity Range</td>
                        <td class="border border-neutral-300 p-2">1.5 to 1300 mPas</td>
                      </tr>
                      <tr>
                        <td class="border border-neutral-300 p-2 font-semibold">Unit Size</td>
                        <td class="border border-neutral-300 p-2">Each</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td class="border border-neutral-500 p-2.5">Each</td>
                <td class="border border-neutral-500 p-2.5">HAAKE Viscotester 3 Rotational Viscometer for low viscosity measurements</td>
                <td class="border border-neutral-500 p-2.5">1.5 to 1300 mPas</td>
              </tr>

              <!-- Row 2 -->
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="border border-neutral-500 p-2.5 text-center">
                  <span class="inline-block w-4 h-4 bg-[#28a745] rounded"></span>
                </td>
                <td class="border border-neutral-500 p-2.5">
                  <span>399-0112</span>
                </td>
                <td class="border border-neutral-500 p-0">
                  <!-- Nested specs -->
                  <table class="w-full text-[14px] border-x border-neutral-300 border-collapse">
                    <tbody>
                      <tr>
                        <td class="border border-neutral-300 p-2 w-[40%] font-semibold">Description</td>
                        <td class="border border-neutral-300 p-2">HAAKE Viscotester 3 Rotational Viscometer for higher viscosity measurements</td>
                      </tr>
                      <tr>
                        <td class="border border-neutral-300 p-2 font-semibold">Includes</td>
                        <td class="border border-neutral-300 p-2">
                          Base viscometer comes in carrying case with instrument holder (for lab stand), one measuring cup (No. 3), three rotors (No. 1, 2 and 3), four rechargeable batteries and one power supply adapter. Easily upgrade your Thermo Scientific HAAKE Viscotester 2 Plus viscometer to this model; the results are compatible.
                        </td>
                      </tr>
                      <tr>
                        <td class="border border-neutral-300 p-2 font-semibold">Measuring Accuracy</td>
                        <td class="border border-neutral-300 p-2">
                          ± 5% FSD (rotors R1, R2, R3)
                          <div>± 7.5% FSD (rotor R5)</div>
                          <div>± 10% FSD (rotor R4)</div>
                        </td>
                      </tr>
                      <tr>
                        <td class="border border-neutral-300 p-2 font-semibold">Power Supply</td>
                        <td class="border border-neutral-300 p-2">Operable by battery or power supply</td>
                      </tr>
                      <tr>
                        <td class="border border-neutral-300 p-2 font-semibold">Rotational Speed Range</td>
                        <td class="border border-neutral-300 p-2">62.5 rpm</td>
                      </tr>
                      <tr>
                        <td class="border border-neutral-300 p-2 font-semibold">Temperature Range (Metric)</td>
                        <td class="border border-neutral-300 p-2">Up to 150°C</td>
                      </tr>
                      <tr>
                        <td class="border border-neutral-300 p-2 font-semibold">Viscosity Range</td>
                        <td class="border border-neutral-300 p-2">30 to 400 000 mPas</td>
                      </tr>
                      <tr>
                        <td class="border border-neutral-300 p-2 font-semibold">Unit Size</td>
                        <td class="border border-neutral-300 p-2">Each</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td class="border border-neutral-500 p-2.5">Each</td>
                <td class="border border-neutral-500 p-2.5">HAAKE Viscotester 3 Rotational Viscometer for higher viscosity measurements</td>
                <td class="border border-neutral-500 p-2.5">30 to 400 000 mPas</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Text blocks -->
        <p class="font-bold mt-4 mb-2">
          <strong>Designed for simplicity – The HAAKE Viscotester 3 Rotational Viscometer is built for ease of use to get you quickly to the right viscosity measurements:</strong>
        </p>
        <ul class="pl-5 mb-4 list-disc marker:text-[#BE0010] space-y-1.5">
          <li>Smart alignment given by design and visualized by an electronic level</li>
          <li>Quick coupling of measuring geometries for fast and easy adaptation</li>
          <li>Color coded geometries and a geometry range indicator ensure correct rotor selection every time</li>
          <li>Adaptable display brightness ensures ideal readability in any environment</li>
          <li>Battery and power supply options allow the viscometer to be run anywhere</li>
          <li>Memory assist functionality allows you to quickly and easily compare measured viscosities with the reference point</li>
          <li>Selectable viscosity units (mPa s or dPa s)</li>
          <li>Compatibility with previous viscometer models</li>
        </ul>

        <p class="font-bold mt-2 mb-2">
          <strong>Recommended for: your entire process, from accepting the delivery of goods, to sampling during production and quality control (QC).</strong>
        </p>
        <ul class="pl-5 mb-4 list-disc marker:text-[#BE0010] space-y-1.5">
          <li>Printing inks, paints, inks and other coatings</li>
          <li>Shampoos, creams, lotions, and similar personal care products</li>
          <li>Oil, greases, pastes and similar substances</li>
          <li>Sauces, thickeners, and similar food products</li>
        </ul>

        <!-- Video -->
        <div class="mt-3 w-full">
          <div class="w-full max-w-full overflow-hidden">
            <iframe
              src="//players.brightcove.net/665001591001/I9XluuSon_default/index.html?videoId=6029198431001"
              class="w-full h-[658px] border-0 block"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
`

  },
}