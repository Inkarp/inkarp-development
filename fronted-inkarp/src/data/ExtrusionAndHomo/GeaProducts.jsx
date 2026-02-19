import React, { useState } from "react";
import Gea from "/src/assets/PrincipalLogos/RowFive/GEA.png";
import Proscientific from "/src/assets/PrincipalLogos/RowFive/Proscientific.png";
import Evonik from "/src/assets/PrincipalLogos/RowFive/Evonik.png";
import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";
import Banner3 from "/images/products/Banner/Banner3.jpg";

// GEA images (from your screenshots / public folder)
import ImgAriete3160 from "/images/products/Gea/homogenizer-ariete-3160.jpg";
import ImgAriete5400 from "/images/products/Gea/homogenizer-Ariete-5400.jpg";
import ImgArieteSeries from "/images/products/Gea/homogenizers-ariete-series.jpg";
import ImgOneSeries from "/images/products/Gea/homogenizers-one-series.jpg";
import ImgXstreamLab from "/images/products/Gea/xstream-lab-homogenizer.jpg";
import ImgPilotPlant from "/images/products/Gea/homogenizers-pilot-plant.jpg";
import ImgTableTop from "/images/products/Gea/homogenizers-table-top.jpg";
import ImgPharmaSkid from "/images/products/Gea/homogenizers-plug-play-pharma-skid.jpg";

// ProScientific Homogenizers (public/images/products/Proscientific)
import ImgPRO200 from "/images/products/Proscientific/bio-gen-pro200-homogenizer.jpg";
import ImgPRO250 from "/images/products/Proscientific/pro250-homogenizer.jpg";
import ImgPRO25D from "/images/products/Proscientific/pro25d-digital-homogenizer.jpg";
import ImgPRO400DS from "/images/products/Proscientific/pro400ds-digital-benchtop-homogenizer.jpg";
import ImgPRO400DSEL from "/images/products/Proscientific/pro400dsel-digital-benchtop-homogenizer-extra-length.jpg";
import ImgPRO400PC from "/images/products/Proscientific/pro400pc-programmable-benchtop-homogenizer.jpg";
import ImgPRO400PCEL from "/images/products/Proscientific/pro400pcel-programmable-benchtop-homogenizer-extra-length.jpg";
import ImgMultiPrep from "/images/products/Proscientific/multi-prep-rapid-homogenizer-accessories-probes-racks.jpg";

import ImgLipexExtruders from "/images/products/Evonik/lipex-liposome-extruders.jpg";


export const GeaProducts = {
  "gea-ariete-homogenizer-3160": {
    id: "gea-ariete-homogenizer-3160",
    name: "Gea Ariete Homogenizer 3160",
    image: ImgAriete3160,
    logo: Gea,
    bannerImg: Banner3,
    altText: "Gea",
    videoId: "",
    meta: {
      title: "GEA Ariete Homogenizer 3160 | Inkarp India",
      description:
        "State-of-the-art high pressure homogenizer from the GEA Ariete Series for dairy, beverage, food, pharma, chemical and cosmetic industries. Distributed & serviced by Inkarp India.",
      keywords: [
        "GEA Ariete 3160",
        "GEA homogenizer India",
        "industrial homogenizer",
        "high pressure homogenizer",
        "Ariete Series"
      ],
      altText: "GEA Ariete Homogenizer 3160",
      internalLinks: ["industrial-homogenizers"],
      externalLinks: ["https://www.gea.com/en/products/homogenizers/"]
    },
    description: `<div class="text-[18px] leading-7 text-gray-700 font-[Roboto]">
  <p>
    Inkarp Instruments, a trusted GEA partner, presents the Ariete Homogenizer 3160 in India, a high-performance industrial homogenizer.
  </p>

  <p class="mt-3">
    State-of-the-art high pressure homogenizer from the Ariete Series which is extremely versatile and highly customized
    for a wide range of applications: dairy, beverage, food, pharmaceutical, chemical and cosmetic industries.
  </p>

  <p class="mt-3">
    Ariete Homogenizer 3160 can be customized with more than 300 options to allow high performance and reliability in
    continuous industrial production.
  </p>

  <p class="mt-3">
    All Ariete homogenizers are designed using the best materials and premium brand components, in compliance with all
    the relevant industry standards in terms of certifications and guidelines: USDA, FDA, 3-A, ATEX, EHEDG and cGMP.
  </p>

  <!-- Key Features -->
  <h3 class="font-[MaxOT] text-[#E63946] text-xl md:text-2xl mt-6 mb-2">Key Features</h3>
  <ul class="list-disc pl-5 space-y-1">
    <li>High efficiency and excellent performance at very high pressures</li>
    <li>High reliability in continuous processing (24/7)</li>
    <li>Reduced operating costs (water, lubrication oil and power supply)</li>
    <li>Suitable for abrasive and viscous products</li>
    <li>Aseptic design</li>
    <li>Fully automated and remote control option</li>
    <li>Easy maintenance</li>
  </ul>

  <!-- Performance table -->
  <h3 class="font-[MaxOT] text-[#E63946] text-xl md:text-2xl mt-8 mb-3">
    Performance of the Ariete Homogenizer 3160
  </h3>

  <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
    <div class="w-full overflow-x-auto">
      <table class="min-w-[760px] w-full text-sm">
        <thead class="bg-gray-50 text-gray-800">
          <tr class="[&>*]:border [&>*]:border-gray-200 [&>*]:p-3 text-left">
            <th>Pressure (bar)</th>
            <th>100</th>
            <th>180</th>
            <th>200</th>
            <th>250</th>
            <th>400</th>
            <th>600</th>
            <th>1,000</th>
            <th>1,200</th>
            <th>1,500</th>
          </tr>
        </thead>
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-200 [&>tr>*]:p-3">
          <tr class="even:bg-[#FAFAFA]">
            <td class="font-medium">Max Flow Rate (l/h)</td>
            <td>—</td>
            <td>22,000</td>
            <td>21,000</td>
            <td>19,000</td>
            <td>12,000</td>
            <td>7,500</td>
            <td>4,100</td>
            <td>3,100</td>
            <td>2,100</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <p class="mt-3 text-[15px] text-gray-600">
    Each line refers to a different machine, which is designed for the specified maximum pressure and capacity.
  </p>
</div>

`
  },

  "gea-ariete-homogenizer-5400": {
    id: "gea-ariete-homogenizer-5400",
    name: "Gea Ariete Homogenizer 5400",
    image: ImgAriete5400,
    logo: Gea,
    bannerImg: Banner3,
    altText: "Gea",
    videoId: "",
    meta: {
      title: "GEA Ariete Homogenizer 5400 | Inkarp India",
      description:
        "High-capacity Ariete Series industrial homogenizer (up to 80,000 l/h @120 bar) for large-scale processing across dairy, beverage, pharma and chemical sectors. Distributed & serviced by Inkarp India.",
      keywords: [
        "GEA Ariete 5400",
        "GEA homogenizer India",
        "industrial homogenizer high flow",
        "high pressure homogenizer",
        "Ariete Series 5400"
      ],
      altText: "GEA Ariete Homogenizer 5400",
      internalLinks: ["industrial-homogenizers"],
      externalLinks: ["https://www.gea.com/en/products/homogenizers/"]
    },
    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:18px;">
  <p>
    Inkarp Instruments, a trusted GEA
    partner, introduces the Ariete Homogenizer 5400 in India, a high-capacity industrial homogenizer for large-scale processing.
  </p>
  <p style="margin-bottom:10px;">Ariete Homogenizer 5400, high performance high flow-rate</p>
  <p>
    Ariete Homogenizer 5400 offers a great versatility and a wide capacity (80,000 l/h @ 120 bar); from dairy to beverage, but also in pharmaceutical and chemical sectors while maximum efficiency and safe operations are guaranteed.
  </p>

  <div style="margin-top:22px;">
    <h3 class="font-[MaxOT]" style="margin:0 0 10px;color:#E63946;font-size:20px;">Ariete Homogenizer 5400 - high performance high flow-rate</h3>
    <div style="width:100%;height:0;position:relative;padding-bottom:56.25%;border-radius:8px;overflow:hidden;">
      <iframe src="https://video.gea.com/v.ihtml/player.html?source=share&amp;photo%5fid=18077911&amp;start=1"
              style="width:100%;height:100%;position:absolute;top:0;left:0;border:0;"
              frameborder="0" scrolling="no" allowfullscreen
              allow="autoplay; fullscreen"></iframe>
    </div>
  </div>

  <div style="margin-top:22px;">
    <h3 class="font-[MaxOT]" style="margin:0 0 10px;color:#E63946;font-size:20px;">Reimagine liquids</h3>
    <div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;">
      
      <div style="flex:1 1 320px;min-width:260px;">
        <p>
          It may surprise you how many products need homogenization in their manufacturing process to make them more compatible with your daily life. Stabilization and a longer shelf life have always been among the highest priorities in many different processing industries but, especially nowadays, as lifestyles continue to change rapidly, they are becoming more and more valued.
        </p>
      </div>
    </div>
  </div>

  <div style="margin-top:22px;">
    <h3 class="font-[MaxOT]" style="margin:0 0 10px;color:#E63946;font-size:20px;">Power and versatility</h3>
    <p>
      Ariete Homogenizer 5400 offers a great versatility and a wide capacity to process all your products with the best possible reliability and safety.
      Processing parts are absolutely versatile, this in fact allows an easy flow also for viscous products, fibrous juices, dairy by-products and probiotics
      or in some case it allows to move to a completely different application. Such versatility allows Ariete Homogenizer 5400 to meet the widest market demands.
      Ariete Homogenizer 5400 is also available equipped with a smaller motor of 315 kW, in order to guarantee the best performance and efficiency for all kinds of production.
    </p>
  </div>

  <div style="margin-top:22px;">
    <h3 class="font-[MaxOT]" style="margin:0 0 10px;color:#E63946;font-size:20px;">Efficiency</h3>
    <p>
      The growing demand for high efficiency and safe operations in the dairy, beverage and pharmaceutical industries has prompted GEA to develop the only homogenizer in the world able to ensure increasing quality standards for continuous production, using less power and fewer resources compared to the other 5 pistons homogenizers on the market.
      The high pressure Ariete pump means 7% higher efficiency in its class; this coupled with the possibility to install GEA high efficiency options such as NiSoPURE, NanoVALVE and OPS allows further savings in production costs (power, water, oil).
    </p>
  </div>

  <div style="margin-top:22px;">
    <h3 class="font-[MaxOT]" style="margin:0 0 10px;color:#E63946;font-size:20px;">Safety and reliability</h3>
    <p>
      The new strengthened design confers greater steadiness and stability to the machine in any working condition preventing vibrations and allowing smooth operation and reduced pulsation also for viscous and difficult products. Thanks to GEA's expert aseptic capabilities in pharma sector:
    </p>
    <ul style="padding-left:18px;list-style:disc;">
      <li>Inside and outside design allows extreme hygiene and safety</li>
      <li>Straight pipes for inlet and outlet connection to manifold</li>
      <li>Easy cleaning due to no water stagnation areas</li>
      <li>Slope on external case for discharging</li>
      <li>Motor position allows safe and easy access for the operator</li>
    </ul>
  </div>

  <div style="margin-top:22px;">
    <h3 class="font-[MaxOT]" style="margin:0 0 10px;color:#E63946;font-size:20px;">User-friendly</h3>
    <p>
      Entirely built around customer’s needs, Ariete Homogenizer 5400 allows easy and safe accessibility to the inside minimizing service time.
      The motor position allows safe access to the operator and easy belt tensioning.
    </p>
  </div>
</div>
`
  },

  "homogenizers-ariete-series": {
    id: "homogenizers-ariete-series",
    name: "Homogenizers Ariete Series",
    image: ImgArieteSeries,
    logo: Gea,
    bannerImg: Banner3,
    altText: "Gea",
    videoId: "",
    meta: {
      title: "GEA Ariete Homogenizers Series | Inkarp India",
      description:
        "GEA Ariete® Series high pressure homogenizers for dairy, beverage, food, pharmaceutical, chemical and cosmetic industries. State-of-the-art reliability, efficiency and customizability. Distributed & serviced by Inkarp India.",
      keywords: [
        "GEA Ariete Series",
        "GEA homogenizer India",
        "industrial homogenizer",
        "high pressure homogenizer",
        "Ariete Series Homogenizers"
      ],
      altText: "GEA Ariete Series",
      internalLinks: ["industrial-homogenizers"],
      externalLinks: ["https://www.gea.com/en/products/homogenizers/"]
    },
    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:18px;">
  <p>
    Inkarp Instruments, a trusted GEA
    partner, presents the Ariete Series Homogenizers in India, high-performance industrial homogenizers for various applications.
  </p>

  <p>
    Ariete® are the state-of-the-art high pressure homogenizers for power and reliability. Homogenizers from Ariete® series are extremely versatile and customized for a wide range of applications: dairy, beverage, food, pharmaceutical, chemical and cosmetic industries.
  </p>

  <h3 class="font-[MaxOT]" style="margin:20px 0 10px;color:#E63946;font-size:24px;">The Ariete® Series stands out for Excellence, Versatility and Efficiency</h3>
  <div style="width:100%;height:0;position:relative;padding-bottom:56.25%;border-radius:8px;overflow:hidden;">
    <iframe src="https://video.gea.com/v.ihtml/player.html?source=share&amp;photo%5fid=12374842"
            style="width:100%;height:100%;position:absolute;top:0;left:0;border:0;"
            frameborder="0" scrolling="no" allowfullscreen
            allow="autoplay; fullscreen"></iframe>
  </div>

  <p>
    Each machine is manufactured internally using the best materials and premium brand components. This guarantees best quality control, customized solutions and full traceability of parts.
  </p>
  <p>
    Ariete® offers the largest capacity and the highest pressure on the market with the lowest total cost of ownership. Customers benefit from a superior pump operational efficiency and the possibility to install GEA high efficiency options such as NanoVALVE® and the Oil Purification System, allowing further savings in production cost (power, water, oil).
  </p>

  <h3 class="font-[MaxOT]" style="margin:20px 0 10px;color:#E63946;font-size:24px;">Reimagine liquids</h3>
  <div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;">
    <div style="flex:1 1 320px;min-width:260px;">
      <img src="/images/products/Gea/reimagine-liquids.jpg" alt="Reimagine liquids"
           style="width:100%;height:auto;display:block;border-radius:8px;object-fit:cover;" />
    </div>
    <div style="flex:1 1 320px;min-width:260px;">
      <p>
        It may surprise you how many products need homogenization in their manufacturing process to make them more compatible with your daily life. Stabilization and a longer shelf life have always been among the highest priorities in many different processing industries but, especially nowadays, as lifestyles continue to change rapidly, they are becoming more and more valued.
      </p>
    </div>
  </div>

  <h3 class="font-[MaxOT]" style="margin:20px 0 10px;color:#E63946;font-size:24px;">Customized High Pressure Homogenizers</h3>
  <p>
    The possibility to customize the Ariete® homogenizers with more than 300 options guarantees high performance and high reliability in continuous industrial production. Customized solutions allow diversification for process, transmission, and utilities, resulting in unique and exclusive versions of the homogenizer.
  </p>

  <h3 class="font-[MaxOT]" style="margin:20px 0 10px;color:#E63946;font-size:24px;">Certifications and Guidelines</h3>
  <p>
    Each machine is manufactured internally using the best materials and premium brand components. All Ariete® homogenizers are designed according to EU safety rules (CE standards) and in compliance with other relevant industry standards and certifications: USDA, FDA, 3-A, ATEX, EHEDG and cGMP.
  </p>

  <h3 class="font-[MaxOT]" style="margin:20px 0 10px;color:#E63946;font-size:24px;">Key Features</h3>
  <ul style="padding-left:18px;list-style:disc;margin-bottom:20px;">
    <li>High efficiency</li>
    <li>Excellent performance at very high pressures</li>
    <li>High reliability in continuous processing (24/7)</li>
    <li>Reduced operating costs (water, lubrication oil and power supply)</li>
    <li>Suitable for abrasive and viscous products</li>
    <li>Equipped with complete documentation for the pharmaceutical sector</li>
    <li>Aseptic design</li>
    <li>Fully automated and remote control option</li>
    <li>Safe and easy to use</li>
    <li>Easy maintenance</li>
  </ul>

  <h3 class="font-[MaxOT]" style="margin:20px 0 10px;color:#E63946;font-size:24px;">Ariete® Homogenizers Performance</h3>
  <div style="overflow:auto;border:1px solid #ddd;border-radius:8px;">
    <table style="border-collapse:collapse;width:100%;min-width:720px;">
      <caption style="caption-side:top;font-weight:600;margin:8px 0;">Ariete Series Models</caption>
      <tbody>
        <tr style="background:#f7f7f7;">
          <td colspan="10" style="border:1px solid #ddd;padding:8px;font-weight:600;">Max Flow Rate [l/h]</td>
        </tr>
        <tr>
          <td style="border:1px solid #ddd;padding:8px;">Models</td>
          <td style="border:1px solid #ddd;padding:8px;">100</td>
          <td style="border:1px solid #ddd;padding:8px;">180</td>
          <td style="border:1px solid #ddd;padding:8px;">200</td>
          <td style="border:1px solid #ddd;padding:8px;">250</td>
          <td style="border:1px solid #ddd;padding:8px;">400</td>
          <td style="border:1px solid #ddd;padding:8px;">600</td>
          <td style="border:1px solid #ddd;padding:8px;">1000</td>
          <td style="border:1px solid #ddd;padding:8px;">1200</td>
          <td style="border:1px solid #ddd;padding:8px;">1500</td>
        </tr>

        <tr>
          <td style="border:1px solid #ddd;padding:8px;">
            <a href="https://www.gea.com/en/binaries/ariete-NS2006-high-pressure-homogenizer-pump-datasheet_tcm11-38665.pdf" target="_blank" title="Ariete NS2006 Datasheet">GEA Ariete Homogenizer 2006</a>
          </td>
          <td style="border:1px solid #ddd;padding:8px;">650</td>
          <td style="border:1px solid #ddd;padding:8px;">450</td>
          <td style="border:1px solid #ddd;padding:8px;">450</td>
          <td style="border:1px solid #ddd;padding:8px;">400</td>
          <td style="border:1px solid #ddd;padding:8px;">200</td>
          <td style="border:1px solid #ddd;padding:8px;">100</td>
          <td style="border:1px solid #ddd;padding:8px;">80</td>
          <td style="border:1px solid #ddd;padding:8px;">80</td>
          <td style="border:1px solid #ddd;padding:8px;">35</td>
        </tr>

        <tr>
          <td style="border:1px solid #ddd;padding:8px;">
            <a href="https://www.gea.com/en/binaries/ariete-NS3006-high-pressure-homogenizer-pump-datasheet_tcm11-38666.pdf" target="_blank" title="Ariete NS3006 Datasheet">GEA Ariete Homogenizer 3006</a>
          </td>
          <td style="border:1px solid #ddd;padding:8px;">1.000</td>
          <td style="border:1px solid #ddd;padding:8px;">750</td>
          <td style="border:1px solid #ddd;padding:8px;">750</td>
          <td style="border:1px solid #ddd;padding:8px;">600</td>
          <td style="border:1px solid #ddd;padding:8px;">350</td>
          <td style="border:1px solid #ddd;padding:8px;">220</td>
          <td style="border:1px solid #ddd;padding:8px;">120</td>
          <td style="border:1px solid #ddd;padding:8px;">120</td>
          <td style="border:1px solid #ddd;padding:8px;">50</td>
        </tr>

        <tr>
          <td style="border:1px solid #ddd;padding:8px;">
            <a href="https://www.gea.com/en/binaries/ariete-NS3011-high-pressure-homogenizer-pump-datasheet_tcm11-38667.pdf" target="_blank" title="Ariete NS3011 Datasheet">GEA Ariete Homogenizer 3011</a>
          </td>
          <td style="border:1px solid #ddd;padding:8px;">3.000</td>
          <td style="border:1px solid #ddd;padding:8px;">1.800</td>
          <td style="border:1px solid #ddd;padding:8px;">1.600</td>
          <td style="border:1px solid #ddd;padding:8px;">1.300</td>
          <td style="border:1px solid #ddd;padding:8px;">800</td>
          <td style="border:1px solid #ddd;padding:8px;">550</td>
          <td style="border:1px solid #ddd;padding:8px;">/</td>
          <td style="border:1px solid #ddd;padding:8px;">/</td>
          <td style="border:1px solid #ddd;padding:8px;">/</td>
        </tr>

        <tr>
          <td style="border:1px solid #ddd;padding:8px;">
            <a href="https://www.gea.com/en/binaries/ariete-NS3015-high-pressure-homogenizer-pump-datasheet_tcm11-38668.pdf" target="_blank" title="Ariete NS3015 Datasheet">GEA Ariete Homogenizer 3015</a>
          </td>
          <td style="border:1px solid #ddd;padding:8px;">4.500</td>
          <td style="border:1px solid #ddd;padding:8px;">2.500</td>
          <td style="border:1px solid #ddd;padding:8px;">2.200</td>
          <td style="border:1px solid #ddd;padding:8px;">1.800</td>
          <td style="border:1px solid #ddd;padding:8px;">1.100</td>
          <td style="border:1px solid #ddd;padding:8px;">750</td>
          <td style="border:1px solid #ddd;padding:8px;">400</td>
          <td style="border:1px solid #ddd;padding:8px;">370</td>
          <td style="border:1px solid #ddd;padding:8px;">250</td>
        </tr>

        <tr>
          <td style="border:1px solid #ddd;padding:8px;">
            <a href="https://www.gea.com/en/binaries/ariete-NS3030-high-pressure-homogenizer-pump-datasheet_tcm11-38669.pdf" target="_blank" title="Ariete NS3030 Datasheet">GEA Ariete Homogenizer 3030</a>
          </td>
          <td style="border:1px solid #ddd;padding:8px;">7.500</td>
          <td style="border:1px solid #ddd;padding:8px;">5.000</td>
          <td style="border:1px solid #ddd;padding:8px;">4.200</td>
          <td style="border:1px solid #ddd;padding:8px;">3.300</td>
          <td style="border:1px solid #ddd;padding:8px;">1.700</td>
          <td style="border:1px solid #ddd;padding:8px;">1.100</td>
          <td style="border:1px solid #ddd;padding:8px;">650</td>
          <td style="border:1px solid #ddd;padding:8px;">500</td>
          <td style="border:1px solid #ddd;padding:8px;">330</td>
        </tr>

        <tr>
          <td style="border:1px solid #ddd;padding:8px;">
            <a href="https://www.gea.com/en/binaries/ariete-NS3037-high-pressure-homogenizer-pump-datasheet_tcm11-38670.pdf" target="_blank" title="Ariete NS3037 Datasheet">GEA Ariete Homogenizer 3037</a>
          </td>
          <td style="border:1px solid #ddd;padding:8px;">12.000</td>
          <td style="border:1px solid #ddd;padding:8px;">6.700</td>
          <td style="border:1px solid #ddd;padding:8px;">6.000</td>
          <td style="border:1px solid #ddd;padding:8px;">5.000</td>
          <td style="border:1px solid #ddd;padding:8px;">3.000</td>
          <td style="border:1px solid #ddd;padding:8px;">2.000</td>
          <td style="border:1px solid #ddd;padding:8px;">1.200</td>
          <td style="border:1px solid #ddd;padding:8px;">1.000</td>
          <td style="border:1px solid #ddd;padding:8px;">800</td>
        </tr>

        <tr>
          <td style="border:1px solid #ddd;padding:8px;">
            <a href="https://www.gea.com/en/binaries/ariete-NS3045-high-pressure-homogenizer-pump-datasheet_tcm11-38671.pdf" target="_blank" title="Ariete NS3045 Datasheet">GEA Ariete Homogenizer 3045</a>
          </td>
          <td style="border:1px solid #ddd;padding:8px;">12.000</td>
          <td style="border:1px solid #ddd;padding:8px;">8.000</td>
          <td style="border:1px solid #ddd;padding:8px;">7.300</td>
          <td style="border:1px solid #ddd;padding:8px;">5.800</td>
          <td style="border:1px solid #ddd;padding:8px;">3.600</td>
          <td style="border:1px solid #ddd;padding:8px;">/</td>
          <td style="border:1px solid #ddd;padding:8px;">/</td>
          <td style="border:1px solid #ddd;padding:8px;">/</td>
          <td style="border:1px solid #ddd;padding:8px;">/</td>
        </tr>

        <tr>
          <td style="border:1px solid #ddd;padding:8px;">
            <a href="https://www.gea.com/en/binaries/ariete-NS3055-high-pressure-homogenizer-pump-datasheet_tcm11-38672.pdf" target="_blank" title="Ariete NS3055 Datasheet">GEA Ariete Homogenizer 3055</a>
          </td>
          <td style="border:1px solid #ddd;padding:8px;">14.000</td>
          <td style="border:1px solid #ddd;padding:8px;">10.000</td>
          <td style="border:1px solid #ddd;padding:8px;">9.000</td>
          <td style="border:1px solid #ddd;padding:8px;">7.200</td>
          <td style="border:1px solid #ddd;padding:8px;">4.500</td>
          <td style="border:1px solid #ddd;padding:8px;">2.800</td>
          <td style="border:1px solid #ddd;padding:8px;">/</td>
          <td style="border:1px solid #ddd;padding:8px;">/</td>
          <td style="border:1px solid #ddd;padding:8px;">/</td>
        </tr>

        <tr>
          <td style="border:1px solid #ddd;padding:8px;">
            <a href="https://www.gea.com/en/binaries/ariete-NS3075-high-pressure-homogenizer-pump-datasheet_tcm11-38673.pdf" target="_blank" title="Ariete NS3075 Datasheet">GEA Ariete Homogenizer 3075</a>
          </td>
          <td style="border:1px solid #ddd;padding:8px;">14.000</td>
          <td style="border:1px solid #ddd;padding:8px;">12.000</td>
          <td style="border:1px solid #ddd;padding:8px;">11.000</td>
          <td style="border:1px solid #ddd;padding:8px;">8.200</td>
          <td style="border:1px solid #ddd;padding:8px;">4.900</td>
          <td style="border:1px solid #ddd;padding:8px;">3.100</td>
          <td style="border:1px solid #ddd;padding:8px;">1.400</td>
          <td style="border:1px solid #ddd;padding:8px;">1.400</td>
          <td style="border:1px solid #ddd;padding:8px;">1.000</td>
        </tr>

        <tr>
          <td style="border:1px solid #ddd;padding:8px;">
            <a href="https://www.gea.com/en/binaries/ariete-NS3090-high-pressure-homogenizer-pump-datasheet_tcm11-38674.pdf" target="_blank" title="Ariete NS3090 Datasheet">GEA Ariete Homogenizer 3090</a>
          </td>
          <td style="border:1px solid #ddd;padding:8px;">17.500</td>
          <td style="border:1px solid #ddd;padding:8px;">16.000</td>
          <td style="border:1px solid #ddd;padding:8px;">14.500</td>
          <td style="border:1px solid #ddd;padding:8px;">11.700</td>
          <td style="border:1px solid #ddd;padding:8px;">7.300</td>
          <td style="border:1px solid #ddd;padding:8px;">4.900</td>
          <td style="border:1px solid #ddd;padding:8px;">/</td>
          <td style="border:1px solid #ddd;padding:8px;">/</td>
          <td style="border:1px solid #ddd;padding:8px;">/</td>
        </tr>

        <tr>
          <td style="border:1px solid #ddd;padding:8px;">
            <a href="https://www.gea.com/en/binaries/ariete-NS3110-high-pressure-homogenizer-pump-datasheet_tcm11-38675.pdf" target="_blank" title="Ariete NS3110 Datasheet">GEA Ariete Homogenizer 3110</a>
          </td>
          <td style="border:1px solid #ddd;padding:8px;">22.000</td>
          <td style="border:1px solid #ddd;padding:8px;">20.000</td>
          <td style="border:1px solid #ddd;padding:8px;">18.000</td>
          <td style="border:1px solid #ddd;padding:8px;">15.000</td>
          <td style="border:1px solid #ddd;padding:8px;">8.700</td>
          <td style="border:1px solid #ddd;padding:8px;">5.500</td>
          <td style="border:1px solid #ddd;padding:8px;">3.400</td>
          <td style="border:1px solid #ddd;padding:8px;">2.600</td>
          <td style="border:1px solid #ddd;padding:8px;">1.800</td>
        </tr>

        <tr>
          <td style="border:1px solid #ddd;padding:8px;">
            <a href="https://www.gea.com/en/binaries/ariete-homogenizer-3160-technical-datasheet_tcm11-89815.pdf" target="_blank" title="GEA Ariete Homogenizer 3160 (data sheet)">GEA Ariete Homogenizer 3160</a>
          </td>
          <td style="border:1px solid #ddd;padding:8px;">/</td>
          <td style="border:1px solid #ddd;padding:8px;">22.000</td>
          <td style="border:1px solid #ddd;padding:8px;">21.000</td>
          <td style="border:1px solid #ddd;padding:8px;">19.000</td>
          <td style="border:1px solid #ddd;padding:8px;">12.000</td>
          <td style="border:1px solid #ddd;padding:8px;">7.500</td>
          <td style="border:1px solid #ddd;padding:8px;">4.100</td>
          <td style="border:1px solid #ddd;padding:8px;">3.100</td>
          <td style="border:1px solid #ddd;padding:8px;">2.100</td>
        </tr>

        <tr>
          <td style="border:1px solid #ddd;padding:8px;">
            <a href="https://www.gea.com/en/binaries/ariete-NS5132-high-pressure-homogenizer-pump-datasheet_tcm11-38676.pdf" target="_blank" title="Ariete NS5132 Datasheet">GEA Ariete Homogenizer 5132</a>
          </td>
          <td style="border:1px solid #ddd;padding:8px;">28.000</td>
          <td style="border:1px solid #ddd;padding:8px;">23.900</td>
          <td style="border:1px solid #ddd;padding:8px;">21.500</td>
          <td style="border:1px solid #ddd;padding:8px;">17.200</td>
          <td style="border:1px solid #ddd;padding:8px;">10.700</td>
          <td style="border:1px solid #ddd;padding:8px;">7.000</td>
          <td style="border:1px solid #ddd;padding:8px;">/</td>
          <td style="border:1px solid #ddd;padding:8px;">/</td>
          <td style="border:1px solid #ddd;padding:8px;">/</td>
        </tr>

        <tr>
          <td style="border:1px solid #ddd;padding:8px;">
            <a href="https://www.gea.com/en/binaries/DataSheet-GEA-Ariete-homogenizer-5200-LR_tcm11-41698.PDF" target="_blank" title="Ariete homogenizer 5200 Data Sheet">GEA Ariete Homogenizer 5200</a>
          </td>
          <td style="border:1px solid #ddd;padding:8px;">37.000</td>
          <td style="border:1px solid #ddd;padding:8px;">34.000</td>
          <td style="border:1px solid #ddd;padding:8px;">30.000</td>
          <td style="border:1px solid #ddd;padding:8px;">26.000</td>
          <td style="border:1px solid #ddd;padding:8px;">15.000</td>
          <td style="border:1px solid #ddd;padding:8px;">10.000</td>
          <td style="border:1px solid #ddd;padding:8px;">5.500</td>
          <td style="border:1px solid #ddd;padding:8px;">4.200</td>
          <td style="border:1px solid #ddd;padding:8px;">3.000</td>
        </tr>

        <tr>
          <td style="border:1px solid #ddd;padding:8px;">
            <a href="https://www.gea.com/en/binaries/gea-ariete-homogenizer-5315-high-pressure-homogenizer-pump-datasheet_tcm11-38678.pdf" target="_blank" title="Ariete Homogenizer 5315 Datasheet">GEA Ariete Homogenizer 5315</a>
          </td>
          <td style="border:1px solid #ddd;padding:8px;">65.000</td>
          <td style="border:1px solid #ddd;padding:8px;">47.000</td>
          <td style="border:1px solid #ddd;padding:8px;">41.000</td>
          <td style="border:1px solid #ddd;padding:8px;">34.000</td>
          <td style="border:1px solid #ddd;padding:8px;">21.000</td>
          <td style="border:1px solid #ddd;padding:8px;">14.000</td>
          <td style="border:1px solid #ddd;padding:8px;">/</td>
          <td style="border:1px solid #ddd;padding:8px;">/</td>
          <td style="border:1px solid #ddd;padding:8px;">/</td>
        </tr>

        <tr>
          <td style="border:1px solid #ddd;padding:8px;">
            <a href="https://www.gea.com/en/binaries/gea-ariete-homogenizer-5400-high-pressure-homogenizer-pump-technical-data_tcm11-38679.pdf" target="_blank" title="Ariete Homogenizer 5400 Datasheet">GEA Ariete Homogenizer 5400</a>
          </td>
          <td style="border:1px solid #ddd;padding:8px;">80.000</td>
          <td style="border:1px solid #ddd;padding:8px;">65.000</td>
          <td style="border:1px solid #ddd;padding:8px;">57.000</td>
          <td style="border:1px solid #ddd;padding:8px;">45.000</td>
          <td style="border:1px solid #ddd;padding:8px;">28.000</td>
          <td style="border:1px solid #ddd;padding:8px;">18.000</td>
          <td style="border:1px solid #ddd;padding:8px;">10.000</td>
          <td style="border:1px solid #ddd;padding:8px;">7.000</td>
          <td style="border:1px solid #ddd;padding:8px;">5.000</td>
        </tr>

      </tbody>
    </table>
  </div>

</div>
`
  },

  "homogenizers-one-series": {
    id: "homogenizers-one-series",
    name: "Homogenizers One Series",
    image: ImgOneSeries,   // <- import your One Series image
    logo: Gea,
    bannerImg: Banner3,
    altText: "Gea",
    videoId: "",
    meta: {
      title: "GEA One Series Homogenizers | Inkarp India",
      description:
        "GEA One Series compact high pressure homogenizers for small and medium productions (300–10,000 l/h, up to 250 bar). Efficient, versatile and reliable. Distributed & serviced by Inkarp India.",
      keywords: [
        "GEA One Series",
        "GEA homogenizer India",
        "compact homogenizer",
        "high pressure homogenizer",
        "One Series Homogenizers"
      ],
      altText: "GEA One Series",
      internalLinks: ["industrial-homogenizers"],
      externalLinks: ["https://www.gea.com/en/products/homogenizers/"]
    },
    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:18px;">
  <p>
    Inkarp Instruments, a trusted GEA
    partner, introduces the One Series Homogenizers in India, compact and versatile industrial homogenizers.
  </p>

  <p>
    One Series can meet any production request for small and medium productions. They offer a simple design construction, complete with all the options needed to be easily integrated into the system, as ready-to-use and low maintenance units.
  </p>

  <h3 class="font-[MaxOT]" style="margin:20px 0 10px;color:#E63946;font-size:24px;">Convenience and high quality</h3>
  <p>
    One Series homogenizers are the ideal solution for small and medium production plants (from 300 to 10,000 l/h) up to 250 bar of pressure. 
    The high efficient valve allows reduced energy consumption and guarantees excellent qualitative standards which, together with the simplicity of the components, constitute the strong points of these three-piston homogenizers.
  </p>
  <p>
    The simplicity in design and ease of maintenance make One homogenizers reliable and versatile, able to meet different productive needs of the Dairy, Food and Beverage industries: eggs, milk, yogurt, ice-cream and fruit juices.
  </p>

  <h3 class="font-[MaxOT]" style="margin:20px 0 10px;color:#E63946;font-size:24px;">Reimagine liquids</h3>
  <div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;">
   
    <div style="flex:1 1 320px;min-width:260px;">
      <p>
        It may surprise you how many products need homogenization in their manufacturing process to make them more compatible with your daily life. Stabilization and a longer shelf life have always been among the highest priorities in many different processing industries but, especially nowadays, as lifestyles continue to change rapidly, they are becoming more and more valued.
      </p>
    </div>
  </div>

  <h3 class="font-[MaxOT]" style="margin:20px 0 10px;color:#E63946;font-size:24px;">Performances</h3>
  <div style="overflow:auto;border:1px solid #ddd;border-radius:8px;">
    <table style="border-collapse:collapse;width:100%;min-width:720px;">
      <tbody>
        <tr style="background:#f7f7f7;">
          <td colspan="6" style="border:1px solid #ddd;padding:8px;font-weight:600;">Max Flow Rate [l/h]</td>
        </tr>
        <tr>
          <td style="border:1px solid #ddd;padding:8px;">Pressure Bar</td>
          <td style="border:1px solid #ddd;padding:8px;">GEA One Homogenizer 7TS</td>
          <td style="border:1px solid #ddd;padding:8px;">GEA One Homogenizer 11TS</td>
          <td style="border:1px solid #ddd;padding:8px;">GEA One Homogenizer 15TS</td>
          <td style="border:1px solid #ddd;padding:8px;">GEA One Homogenizer 37TF</td>
          <td style="border:1px solid #ddd;padding:8px;">GEA One Homogenizer 75TF</td>
        </tr>
        <tr><td style="border:1px solid #ddd;padding:8px;">100</td><td style="border:1px solid #ddd;padding:8px;">1.050</td><td style="border:1px solid #ddd;padding:8px;">3.300</td><td style="border:1px solid #ddd;padding:8px;">4.500</td><td style="border:1px solid #ddd;padding:8px;">8.000</td><td style="border:1px solid #ddd;padding:8px;">10.000</td></tr>
        <tr><td style="border:1px solid #ddd;padding:8px;">130</td><td style="border:1px solid #ddd;padding:8px;">1.050</td><td style="border:1px solid #ddd;padding:8px;">2.500</td><td style="border:1px solid #ddd;padding:8px;">3.400</td><td style="border:1px solid #ddd;padding:8px;">8.000</td><td style="border:1px solid #ddd;padding:8px;">10.000</td></tr>
        <tr><td style="border:1px solid #ddd;padding:8px;">150</td><td style="border:1px solid #ddd;padding:8px;">1.050</td><td style="border:1px solid #ddd;padding:8px;">2.200</td><td style="border:1px solid #ddd;padding:8px;">3.000</td><td style="border:1px solid #ddd;padding:8px;">7.500</td><td style="border:1px solid #ddd;padding:8px;">10.000</td></tr>
        <tr><td style="border:1px solid #ddd;padding:8px;">180</td><td style="border:1px solid #ddd;padding:8px;">1.050</td><td style="border:1px solid #ddd;padding:8px;">1.800</td><td style="border:1px solid #ddd;padding:8px;">2.500</td><td style="border:1px solid #ddd;padding:8px;">6.500</td><td style="border:1px solid #ddd;padding:8px;">10.000</td></tr>
        <tr><td style="border:1px solid #ddd;padding:8px;">200</td><td style="border:1px solid #ddd;padding:8px;">850</td><td style="border:1px solid #ddd;padding:8px;">1.650</td><td style="border:1px solid #ddd;padding:8px;">2.200</td><td style="border:1px solid #ddd;padding:8px;">6.000</td><td style="border:1px solid #ddd;padding:8px;">10.000</td></tr>
        <tr><td style="border:1px solid #ddd;padding:8px;">210</td><td style="border:1px solid #ddd;padding:8px;">850</td><td style="border:1px solid #ddd;padding:8px;">1.550</td><td style="border:1px solid #ddd;padding:8px;">2.100</td><td style="border:1px solid #ddd;padding:8px;">5.700</td><td style="border:1px solid #ddd;padding:8px;">10.000</td></tr>
        <tr><td style="border:1px solid #ddd;padding:8px;">240</td><td style="border:1px solid #ddd;padding:8px;">800</td><td style="border:1px solid #ddd;padding:8px;">1.300</td><td style="border:1px solid #ddd;padding:8px;">1.800</td><td style="border:1px solid #ddd;padding:8px;">5.000</td><td style="border:1px solid #ddd;padding:8px;">10.000</td></tr>
        <tr><td style="border:1px solid #ddd;padding:8px;">250</td><td style="border:1px solid #ddd;padding:8px;">650</td><td style="border:1px solid #ddd;padding:8px;">1.300</td><td style="border:1px solid #ddd;padding:8px;">1.800</td><td style="border:1px solid #ddd;padding:8px;">4.000 - 4.800</td><td style="border:1px solid #ddd;padding:8px;">9.800</td></tr>
        <tr>
          <td colspan="6" style="border:1px solid #ddd;padding:8px;">Technical specifications are preliminary and subject to modification without notice.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class="font-[MaxOT]" style="margin:20px 0 10px;color:#E63946;font-size:24px;">The homogenizing effects</h3>
  <p>
    Available in five models, One Series homogenizers can satisfy any kind of flow rate requests offering different advantages on the product:
  </p>
  <ul style="padding-left:18px;list-style:disc;">
    <li>Enhance the viscosity of the product</li>
    <li>Enhance the stability and the shelf life</li>
    <li>Improve the texture</li>
    <li>Avoid the use of additives</li>
    <li>Keep unchanged color and taste</li>
  </ul>

  <h3 class="font-[MaxOT]" style="margin:20px 0 10px;color:#E63946;font-size:24px;">Main features</h3>
  <ul style="padding-left:18px;list-style:disc;">
    <li>Easy maintenance</li>
    <li>Easy to use</li>
    <li>High versatility and efficiency</li>
    <li>Reduced maintenance costs</li>
    <li>Low energy consumption</li>
    <li>Pneumatic control and pressure alarm</li>
  </ul>

</div>
`
  },

  "gea-xstream-lab-homogenizer": {
    id: "gea-xstream-lab-homogenizer",
    name: "Gea Xstream Lab Homogenizer",
    image: ImgXstreamLab,   // <-- import this image in your file
    logo: Gea,
    bannerImg: Banner3,
    altText: "Gea",
    videoId: "",
    meta: {
      title: "GEA XStream Lab Homogenizer | Inkarp India",
      description:
        "Compact, powerful laboratory homogenizer with NiSoX-Valve for testing and scaling. Ergonomic tabletop design, HMI 7'' touchscreen, automatic pressure setup, cGMP/CFR21/Gamp. Distributed & serviced by Inkarp India.",
      keywords: [
        "GEA XStream Lab",
        "GEA lab homogenizer",
        "NiSoX-Valve",
        "laboratory homogenizer",
        "high pressure lab homogenizer",
        "XStream Lab 1000",
        "XStream Lab 2000"
      ],
      altText: "GEA XStream Lab Homogenizer",
      internalLinks: ["industrial-homogenizers"],
      externalLinks: ["https://www.gea.com/en/products/homogenizers/"]
    },
    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:18px;">
  <p>
    Inkarp Instruments, a trusted GEA
    partner, presents the XStream Lab Homogenizer in India, a compact and powerful laboratory homogenizer.
  </p>
  <p>
    This table top unit is dedicated to facilitate the testing and scaling of the NiSoX-Valve benefits in various applications while ensuring safe, smart and easy operating conditions.
  </p>

  <p>
    With an innovative ergonomic geometry and design, the XStream Lab Homogenizer is suitable to carry out tests in your laboratory and to ensure the scalability of obtained results in industrial scale production.
  </p>

  <h3 class="font-[MaxOT]" style="margin:20px 0 10px;color:#E63946;font-size:24px;">Distinctive features</h3>
  <ul style="padding-left:18px;list-style:disc;">
    <li>Best performance thanks to the NiSoX-Valve</li>
    <li>Ergonomic and specifically designed for a perfect fit on laboratory desks</li>
    <li>Easy operation and control through an HMI 7’’ touchscreen</li>
    <li>Automatic pressure set-up and adjustment</li>
    <li>Easy reproduction and scalability of test results</li>
    <li>cGMP, CFR21 and Gamp certifications</li>
  </ul>

  <p>Two models available with a full list of options for any specific requirements.</p>

  <div style="overflow:auto;border:1px solid #ddd;border-radius:8px;margin-top:10px;">
    <table style="border-collapse:collapse;width:100%;min-width:520px;">
      <tbody>
        <tr style="background:#f7f7f7;">
          <td style="border:1px solid #ddd;padding:8px;font-weight:600;">Model</td>
          <td style="border:1px solid #ddd;padding:8px;font-weight:600;">Max pressure (bar)</td>
          <td style="border:1px solid #ddd;padding:8px;font-weight:600;">Max flow-rate (l/h)</td>
        </tr>
        <tr>
          <td style="border:1px solid #ddd;padding:8px;">XStream Lab Homogenizer 1000</td>
          <td style="border:1px solid #ddd;padding:8px;">1000</td>
          <td style="border:1px solid #ddd;padding:8px;">20</td>
        </tr>
        <tr>
          <td style="border:1px solid #ddd;padding:8px;">XStream Lab Homogenizer 2000</td>
          <td style="border:1px solid #ddd;padding:8px;">2000</td>
          <td style="border:1px solid #ddd;padding:8px;">9</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class="font-[MaxOT]" style="margin:22px 0 10px;color:#E63946;font-size:24px;">Reimagine liquids</h3>
  <div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;">
  
    <div style="flex:1 1 320px;min-width:260px;">
      <p>
        It may surprise you how many products need homogenization in their manufacturing process to make them more compatible with your daily life. Stabilization and a longer shelf life have always been among the highest priorities in many different processing industries but, especially nowadays, as lifestyles continue to change rapidly, they are becoming more and more valued.
      </p>
    </div>
  </div>

</div>
`
  },

  "homogenizers-pilot-plant": {
    id: "homogenizers-pilot-plant",
    name: "Homogenizers Pilot Plant",
    image: ImgPilotPlant,  // <-- import your Pilot Plant image
    logo: Gea,
    bannerImg: Banner3,
    altText: "Gea",
    videoId: "",
    meta: {
      title: "GEA Pilot Plant Homogenizers | Inkarp India",
      description:
        "Standalone pilot/lab homogenizers (Pony NS2006L, Panther NS3006L) for testing and small-scale production—continuous operation up to 1500 bar, plug & play, easy maintenance. Distributed & serviced by Inkarp India.",
      keywords: [
        "GEA pilot plant homogenizer",
        "Pony NS2006L",
        "Panther NS3006L",
        "lab homogenizer",
        "high pressure homogenizer",
        "1500 bar homogenizer",
        "Inkarp India GEA"
      ],
      altText: "GEA Pilot Plant Homogenizers",
      internalLinks: ["industrial-homogenizers"],
      externalLinks: ["https://www.gea.com/en/products/homogenizers/"]
    },
    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:18px;">
  <p>
    Inkarp Instruments, a trusted GEA
    partner, introduces Pilot Plant Homogenizers in India, scalable laboratory homogenizers for process development.
  </p>

  <p>
    Pilot plant homogenizers are designed for continuous operation up to 1500 bar and limited productions, featuring easy plug &amp; play installation, simple operation and quick maintenance.
  </p>

  <p>
    Pilot plant high pressure homogenizers can operate up to 1500 bar, even with limited sample volumes, and achieve the same results as bigger size machines.
  </p>

  <h3 class="font-[MaxOT]" style="margin:20px 0 10px;color:#E63946;font-size:24px;">Lab Testing to Industrial Production gets Easier</h3>
  <p>
    Pony NS2006L and Panther NS3006L models are standalone fully equipped laboratory units for food &amp; beverage, pharmaceutical, biotechnology, cosmetic, chemical testing or small scale production, featuring the performances of the industrial scale homogenizers.
  </p>

  <h3 class="font-[MaxOT]" style="margin:20px 0 10px;color:#E63946;font-size:24px;">Reimagine liquids</h3>
  <div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;">
    <div style="flex:1 1 320px;min-width:260px;">
     
    </div>
    <div style="flex:1 1 320px;min-width:260px;">
      <p>
        It may surprise you how many products need homogenization in their manufacturing process to make them more compatible with your daily life. Stabilization and a longer shelf life have always been among the highest priorities in many different processing industries but, especially nowadays, as lifestyles continue to change rapidly, they are becoming more and more valued.
      </p>
    </div>
  </div>

  <h3 class="font-[MaxOT]" style="margin:22px 0 10px;color:#E63946;font-size:24px;">Pilot Plant Homogenizers</h3>
  <div style="overflow:auto;border:1px solid #ddd;border-radius:8px;">
    <table style="border-collapse:collapse;width:100%;min-width:560px;">
      <tbody>
        <tr style="background:#f7f7f7;">
          <td style="border:1px solid #ddd;padding:8px;font-weight:600;">Models</td>
          <td style="border:1px solid #ddd;padding:8px;font-weight:600;">Max Pressure</td>
          <td style="border:1px solid #ddd;padding:8px;font-weight:600;">Flow Rate</td>
        </tr>
        <tr>
          <td style="border:1px solid #ddd;padding:8px;">GEA Lab Homogenizer Pony 2006</td>
          <td style="border:1px solid #ddd;padding:8px;">1200 bar</td>
          <td style="border:1px solid #ddd;padding:8px;">80 l/h</td>
        </tr>
        <tr>
          <td style="border:1px solid #ddd;padding:8px;">GEA Lab Homogenizer Pony 2006</td>
          <td style="border:1px solid #ddd;padding:8px;">1500 bar</td>
          <td style="border:1px solid #ddd;padding:8px;">35 l/h</td>
        </tr>
        <tr>
          <td style="border:1px solid #ddd;padding:8px;">GEA Lab Homogenizer Panther 3006</td>
          <td style="border:1px solid #ddd;padding:8px;">1200 bar</td>
          <td style="border:1px solid #ddd;padding:8px;">120 l/h</td>
        </tr>
        <tr>
          <td style="border:1px solid #ddd;padding:8px;">GEA Lab Homogenizer Panther 3006</td>
          <td style="border:1px solid #ddd;padding:8px;">1500 bar</td>
          <td style="border:1px solid #ddd;padding:8px;">50 l/h</td>
        </tr>
      </tbody>
    </table>
  </div>

</div>
`
  },

  "homogenizers-table-top": {
    id: "homogenizers-table-top",
    name: "Homogenizers Table-top",
    image: ImgTableTop,  // <-- import your Table-top image
    logo: Gea,
    bannerImg: Banner3,
    altText: "Gea",
    videoId: "",
    meta: {
      title: "GEA Table-top Homogenizers | Inkarp India",
      description:
        "Compact GEA Table-top homogenizers (PandaPLUS & TwinPANDA) for lab-scale research and nano-processing. Ideal for nanoemulsions, dispersions, cell disruption, dairy & beverages. Distributed & serviced by Inkarp India.",
      keywords: [
        "GEA Table-top homogenizer",
        "PandaPLUS 1000",
        "PandaPLUS 2000",
        "TwinPANDA",
        "nanoemulsion homogenizer",
        "lab-scale homogenizer",
        "Inkarp India GEA"
      ],
      altText: "GEA Table-top Homogenizers",
      internalLinks: ["industrial-homogenizers"],
      externalLinks: ["https://www.gea.com/en/products/homogenizers/"]
    },
    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:18px;">
  <p>
    Inkarp Instruments, a trusted GEA 
    partner, presents Table-top Laboratory Homogenizers in India, compact and efficient solutions for research applications.
  </p>

  <p>
    Table-top Homogenizers are compact machines ideal for the treatment of nanoparticles, nanodispersions and nanoemulsions. They are suitable for cell disruption and also widely used for processing milk, dairy products, fruit juices and other food items.
  </p>

  <h3 class="font-[MaxOT]" style="margin:20px 0 10px;color:#E63946;font-size:24px;">Total scalability of results</h3>
  <p>
    These devices allow performing tests with small sample volumes (minimum 100 ml) while ensuring identical quality results as achieved with industrial homogenizers. Their design ensures ease of installation, ease of use and simple maintenance—thanks to the essential construction of components.
  </p>

  <h3 class="font-[MaxOT]" style="margin:22px 0 10px;color:#E63946;font-size:24px;">Reimagine liquids</h3>
  <div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;">
    <div style="flex:1 1 320px;min-width:260px;">
      <img src="/images/products/Gea/reimagine-liquids.jpg" alt="Reimagine liquids"
           style="width:100%;height:auto;display:block;border-radius:8px;object-fit:cover;" />
    </div>
    <div style="flex:1 1 320px;min-width:260px;">
      <p>
        It may surprise you how many products need homogenization in their manufacturing process to make them more compatible with your daily life. Stabilization and longer shelf life have always been key priorities in many industries and are increasingly valued in today’s fast-changing lifestyles.
      </p>
    </div>
  </div>

  <h3 class="font-[MaxOT]" style="margin:22px 0 10px;color:#E63946;font-size:24px;">Table-top Homogenizers</h3>
  <div style="overflow:auto;border:1px solid #ddd;border-radius:8px;">
    <table style="border-collapse:collapse;width:100%;min-width:560px;">
      <tbody>
        <tr style="background:#f7f7f7;">
          <td style="border:1px solid #ddd;padding:8px;font-weight:600;">Models</td>
          <td style="border:1px solid #ddd;padding:8px;font-weight:600;">Max Pressure</td>
          <td style="border:1px solid #ddd;padding:8px;font-weight:600;">Flow Rate</td>
        </tr>
        <tr>
          <td style="border:1px solid #ddd;padding:8px;">GEA Lab Homogenizer PandaPLUS 1000</td>
          <td style="border:1px solid #ddd;padding:8px;">1000 bar</td>
          <td style="border:1px solid #ddd;padding:8px;">20 l/h</td>
        </tr>
        <tr>
          <td style="border:1px solid #ddd;padding:8px;">GEA Lab Homogenizer PandaPLUS 2000</td>
          <td style="border:1px solid #ddd;padding:8px;">2000 bar</td>
          <td style="border:1px solid #ddd;padding:8px;">9 l/h</td>
        </tr>
        <tr>
          <td style="border:1px solid #ddd;padding:8px;">GEA Lab Homogenizer TwinPANDA 400</td>
          <td style="border:1px solid #ddd;padding:8px;">400 bar</td>
          <td style="border:1px solid #ddd;padding:8px;">55 l/h</td>
        </tr>
        <tr>
          <td style="border:1px solid #ddd;padding:8px;">GEA Lab Homogenizer TwinPANDA 600</td>
          <td style="border:1px solid #ddd;padding:8px;">600 bar</td>
          <td style="border:1px solid #ddd;padding:8px;">30 l/h</td>
        </tr>
      </tbody>
    </table>
  </div>

</div>
`
  },

  "homogenizers-plug-play-pharma-skid": {
    id: "homogenizers-plug-play-pharma-skid",
    name: "Homogenizers Plug & Play Pharma Skid",
    image: ImgPharmaSkid,  // <-- import your Pharma Skid image
    logo: Gea,
    bannerImg: Banner3,
    altText: "Gea",
    videoId: "",
    meta: {
      title: "GEA Plug & Play Pharma Skid Homogenizers | Inkarp India",
      description:
        "GEA Plug & Play Pharma Skid Homogenizers are turnkey, skid-mounted solutions for pharmaceutical and biotech industries. Pre-configured, validated to cGMP and Gamp5, capable of up to 1500 bar pressure with aseptic operation. Distributed & serviced by Inkarp India.",
      keywords: [
        "GEA Pharma Skid",
        "plug and play homogenizer",
        "pharma skid homogenizer",
        "biotech homogenizer",
        "1500 bar homogenizer",
        "cGMP homogenizer",
        "Inkarp India GEA"
      ],
      altText: "GEA Plug & Play Pharma Skid Homogenizers",
      internalLinks: ["industrial-homogenizers"],
      externalLinks: ["https://www.gea.com/en/products/homogenizers/"]
    },
    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:18px;">
  <p>
    Inkarp Instruments, a trusted GEA
    partner, introduces Plug &amp; Play Pharma Skid Homogenizers in India, pre-configured, skid-mounted solutions for pharmaceutical and biotechnology applications.
  </p>

  <p>
    GEA Pharma Skids are turnkey solutions designed for industrial production. They are capable of working at pressures up to 1500 bar, enabling efficient particle size reduction, nanoemulsion, nanodispersion production, and optimal cell rupture while ensuring aseptic operation, safety, and energy savings.
  </p>

  <h3 class="font-[MaxOT]" style="margin:20px 0 10px;color:#E63946;font-size:24px;">High pressure Pharma Skids for industrial production</h3>
  <div style="width:100%;height:0;position:relative;padding-bottom:56.25%;border-radius:8px;overflow:hidden;margin-bottom:20px;">
    <iframe src="https://video.gea.com/v.ihtml/player.html?source=share&photo%5fid=11920462"
            style="width:100%;height:100%;position:absolute;top:0;left:0;border:0;"
            frameborder="0" scrolling="no" allowfullscreen
            allow="autoplay; fullscreen"></iframe>
  </div>

  <p>
    Pharma Skids are autonomous systems customizable for any production requirement. In the standard version they consist of:
  </p>
  <ul style="padding-left:18px;list-style:disc;">
    <li>Feed pump with by-pass system</li>
    <li>Homogenizer</li>
    <li>Electrical power board</li>
  </ul>

  <p>
    A wide range of options is available to meet different production needs—heat exchangers, dust release control systems, and instrumentation for measuring flow rate, temperature, conductivity, and turbidity.
  </p>

  <h3 class="font-[MaxOT]" style="margin:22px 0 10px;color:#E63946;font-size:24px;">Reimagine liquids</h3>
  <div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;">
    <div style="flex:1 1 320px;min-width:260px;">
     
    </div>
    <div style="flex:1 1 320px;min-width:260px;">
      <p>
        It may surprise you how many products need homogenization in their manufacturing process to make them more compatible with your daily life. Stabilization and longer shelf life have always been key priorities across industries and are increasingly valued in today’s fast-changing lifestyles.
      </p>
    </div>
  </div>

  <h3 class="font-[MaxOT]" style="margin:22px 0 10px;color:#E63946;font-size:24px;">Efficiency and excellent performance guaranteed</h3>
  <p>
    Pharma Skids are available in different Ariete Series homogenizer configurations. They comply with cGMP and Gamp5 validation standards and are fully suitable for aseptic conditions, making them ideal for pharmaceutical, biotech, nutraceutical and pharma food sectors.
  </p>
  <p>
    Results are outstanding in terms of high efficiency, reproducible particle size reduction, and significant energy savings compared to other cell disruption systems. They can be configured for both continuous and batch processing.
  </p>

</div>
`
  },

  "lipex-liposome-extruders": {
    id: "drug-delivery-parental-drug-delivery",
    name: "Lipex-liposome Extruders",
    image: ImgLipexExtruders,
    logo: Evonik,
    bannerImg: Banner3,
    altText: "Evonik",
    videoId: "",
    meta: {
      title: "Evonik Lipex-Liposome Extruders | Inkarp India",
      description:
        "LIPEX® liposome extruders for reproducible, scalable liposomal drug product manufacturing—from lab to GMP. Gentle, efficient sizing with high yield.",
      keywords: [
        "Evonik Lipex",
        "LIPEX Flow",
        "liposome extruder",
        "parenteral drug delivery",
        "liposomal manufacturing",
        "nanoparticles",
        "GMP extrusion"
      ],
      altText: "Lipex-liposome Extruders",
      internalLinks: ["drug-delivery-parental-drug-delivery"],
      externalLinks: ["https://www.evonik.com/"]
    },
    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:18px;">
  <h3 class="font-[MaxOT]" style="margin:10px 0;color:#E63946;font-size:24px;">
    A PROVEN AND HIGHLY VERSATILE PORTFOLIO OF LIPOSOME EXTRUDERS
  </h3>
  <p><strong>LIPEX® LIPOSOME EXTRUDERS: YOUR EQUIPMENT OF CHOICE FOR SEAMLESS SCALE-UP FROM RESEARCH TO COMMERCIAL MANUFACTURING</strong></p>

  <p>
    Evonik’s recently launched LIPEX® Flow extruder builds on a platform of liposome extruders that have set the industry standard for liposomal
    drug product manufacturing for almost 30 years. LIPEX® liposome extruders are widely used across the pharmaceutical and biotechnology
    industry to achieve a specified vesicle size in a reproducible and scalable process. A one-step process forces aqueous suspensions of lipids
    through filters with a defined pore size. Unlike some alternative technologies, the relatively gentle pressures at controlled temperatures to
    which the formulations are exposed ensure optimal particle size reduction, a homogenous population, and high yield. To provide an integrated
    scale-up process from drug discovery through to GMP production, a range of our products are available from Evonik at the lab, pilot,
    intermediate and commercial-scale.
  </p>

  <h3 class="font-[MaxOT]" style="margin:16px 0 8px;color:#E63946;font-size:24px;">
    LIPEX® FLOW: CONTINUALLY BUILDING ON A PROVEN, ROBUST AND HIGHLY SCALABLE DESIGN FOR HIGHER THROUGHPUT AND FASTER BATCH PROCESSING TIMES
  </h3>
  <p>
    Our liposome extruders are manufactured using durable, high-quality 316 L stainless steel, have no moving parts, and require minimal maintenance
    to support the consistent, high-quality production of a range of lipid compositions at minimal operating costs. These are designed to produce a
    homogenous population of large unilamellar vesicles from a heterogenous population of multi-lamellar vesicles. The unilamellar vesicles are
    formed by applying a pressure of between 100 and 2400psi to force the vesicles through polycarbonate filters of a defined pore size.
  </p>
  <p>
    The newly designed LIPEX® Flow incorporates a novel drain cavity which increases the throughput capacity without affecting the ability to reduce
    particle size. More than a fifty percent reduction in extrusion pressure ensures higher flow rates at lower pressures. Additionally, the new
    design has increased the operating pressures up to 2450psi (170 bar). Together, this allows you to extrude more material with reduced filter
    clogging and less frequent filter changes. This leads to faster batch processing times while still ensuring quality spherical particles.
    The new model further minimizes process risks by reducing the need to open extruders which can lead to contamination or safety issues, for example
    when handling HPAPIs. Target formulations that are difficult to extrude such as hydrophobics, or concentrated lipid suspensions can benefit from
    the higher operating pressure.
  </p>

  <h3 class="font-[MaxOT]" style="margin:16px 0 8px;color:#E63946;font-size:24px;">
    LIPOSOME EXTRUDERS AVAILABLE IN A RANGE OF SIZES TO SUPPORT ANY BATCH VOLUME REQUIREMENT
  </h3>
  <p>LIPEX® liposome extruders can support production volumes from 1mL at the laboratory benchtop to hundreds of liters at commercial scale.</p>
  <p>During the initial R&amp;D and pre-clinical periods to support formulation feasibility and development activities, we can supply 10 mL benchtop units to support your small-scale batch requirements.</p>
  <p>For early-stage clinical trials, our 100 mL and 1000 mL units enable rapid scale-up.</p>
  <p>
    For large-scale GMP production to support late-stage clinical trials or commercial batch requirements, 142-mm and 293-mm stand-alone filter
    holders are integrated into turnkey, automated skid systems, which employ both nitrogen pressure and pharmaceutical-grade pumps.
  </p>
  <p>We can supply you with your own purpose-built equipment in these standard sizes and are also able to create customized products that are tailored to meet your process requirements.</p>

  <h3 class="font-[MaxOT]" style="margin:18px 0 8px;color:#E63946;font-size:24px;">
    OTHER MANUFACTURING TECHNOLOGIES FOR RAPID, REPRODUCIBLE AND SCALABLE LIPID MANUFACTURING
  </h3>
  <p>
    In addition to the development and supply of liposome extruders, Evonik also specializes in a range of other equipment utilized in the production
    of liposomes, as well as polymeric microparticles, nanoparticles and implants. For example, we have extensive expertise in the use of microfluidics
    and micro mixing equipment to create homogeneous populations of liposomes via the controlled channeling of lipids dissolved in solvent and an
    aqueous buffer. This new, fast-growing process technology for liposome manufacturing is extrusion-free, and scalable from volumes between 1 mL
    and dozens of liters.
  </p>
</div>
`
  },

  "bio-gen-pro200-homogenizer": {
    id: "hand-held-homogenizer",
    name: "Bio-Gen PRO200 Homogenizer",
    image: ImgPRO200,
    logo: Proscientific,
    bannerImg: Banner3,
    altText: "Proscientific",
    // videoId: "XuaR87Q01UA",
    meta: {
      title: "Bio-Gen PRO200 Homogenizer | Inkarp India",
      description:
        "Portable 144W high-torque handheld homogenizer (5,000–35,000 rpm) for tubes to small beakers; low noise 68 dB. Made in USA, 2-year warranty. Distributed & serviced by Inkarp India.",
      keywords: [
        "PRO Scientific",
        "Bio-Gen PRO200",
        "handheld homogenizer",
        "lab homogenizer",
        "tissue homogenizer",
        "RNA DNA homogenizer"
      ],
      altText: "Bio-Gen PRO200 Homogenizer",
      internalLinks: ["hand-held-homogenizer"],
      externalLinks: ["https://proscientific.com/"]
    },
    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:18px;">
  <p>
    Inkarp Instruments, a trusted Pro Scientific
    partner, presents the Bio-Gen PRO200 Handheld Homogenizer in India, a portable and powerful tool for laboratory sample preparation.
  </p>

  <p>
    Offering plenty of power and useful features, the Bio-Gen PRO200 homogenizer unit has a <strong>144 W, high-torque motor</strong>
    with <strong>variable speed adjustment</strong>, allowing for homogenization in mere seconds and a maximum noise level of only
    <strong>68 dB</strong> (no load). A separate ON/OFF switch conveniently allows the slide-switch speed control to remain at your ideal
    homogenizing speed.
  </p>

  <p>
    With generator probes ranging in size from <strong>5 mm to 20 mm</strong> in diameter, the PRO200 can homogenize volumes as small as
    <strong>0.05 mL</strong> or as large as <strong>500 mL*</strong>. <em>Requires a generator probe (sold separately).</em>
    PRO Homogenizing Equipment is made in the USA and includes a <strong>2-year warranty</strong>.
  </p>

  <p>The Bio-Gen PRO200 is also available in a convenient package that includes everything needed to begin homogenizing.</p>
  <p><em>*Higher volumes dependent on viscosity.</em></p>

  <h3 class="font-[MaxOT]" style="margin:20px 0 8px;color:#E63946;font-size:24px;">Key Highlights</h3>
  <ul style="padding-left:18px;list-style:disc;">
    <li>Small &amp; powerful hand-held homogenizer</li>
    <li>Homogenize within tubes to small beakers</li>
    <li>Variable speed adjustment, <strong>5,000–35,000 rpm</strong></li>
    <li>Use hand-held or post-mount to a stand</li>
    <li>Made in the USA with a <strong>2-Year Warranty</strong></li>
    <li>Generator probe not included; accessories sold separately</li>
  </ul>

  <h3 class="font-[MaxOT]" style="margin:20px 0 8px;color:#E63946;font-size:24px;">Specifications</h3>
  <p><strong>Volume Processing Range:&nbsp;</strong>0.05 mL – 500 mL*</p>
  <p><strong>Power Rating:&nbsp;</strong>144 W</p>
  <p><strong>RPM Range:&nbsp;</strong>5,000–35,000 (115 V) / 5,000–33,000 (220 V)</p>
  <p><strong>Speed Control:&nbsp;</strong>Analog; variable speed</p>
  <p><strong>Noise Rating:&nbsp;</strong>68 dB (no load)</p>
  <p><strong>Weight:&nbsp;</strong>1.4 lb</p>
  <p><strong>Dimensions:&nbsp;</strong>2.15 × 7.8 in</p>
  <p><em>*Higher volumes dependent on viscosity.</em></p>

  <h3 class="font-[MaxOT]" style="margin:20px 0 8px;color:#E63946;font-size:24px;">Accessories</h3>
  <p>
    With generator probes ranging in size from 5mm to 20mm in diameter, the Bio-Gen PRO200 homogenizer unit is able to homogenize samples with volumes as small as 0.05ml or as large as 500ml*. Requires a generator probe to use. Generator probes are sold separately.
  </p>

  <h3 class="font-[MaxOT]" style="margin:20px 0 8px;color:#E63946;font-size:24px;">Applications</h3>
  <ul style="padding-left:18px;list-style:disc;">
    <li>RNA/DNA homogenization</li>
    <li>Tissue homogenization</li>
    <li>General laboratory homogenization</li>
  </ul>
<!-- Video Embed -->
<div class="rounded-2xl overflow-hidden border border-gray-200 shadow-md mt-4">
  <iframe
    class="w-full aspect-video"
    src="https://www.youtube-nocookie.com/embed/XuaR87Q01UA?rel=0"
    title="Deluxe Micro Homogenizing Package - PRO Scientific"
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
  </iframe>
</div>

</div>
`
  },

  "pro250-homogenizer": {
    id: "hand-held-homogenizer",
    name: "PRO250 Homogenizer",
    image: ImgPRO250,
    logo: Proscientific,
    bannerImg: Banner3,
    altText: "Proscientific",
    videoId: "",
    meta: {
      title: "PRO250 Handheld Homogenizer | Inkarp India",
      description:
        "High-shear 3/4 hp (576 W) handheld/post-mounted homogenizer with variable speed (5,000–30,000 rpm). Processes 0.05 mL–5 L* with compatible probes. Made in USA.",
      keywords: [
        "PRO Scientific",
        "PRO250",
        "handheld homogenizer",
        "high shear homogenizer",
        "laboratory homogenizer"
      ],
      altText: "PRO250 Homogenizer",
      internalLinks: ["hand-held-homogenizer"],
      externalLinks: ["https://proscientific.com/"]
    },
    // Your HTML content is UNCHANGED below—only wrapped by a styled container div
    description: `
<div style="font-family:Roboto;color:#333;line-height:1.75;font-size:18px;">

    <p>Inkarp Instruments, a trusted Pro Scientific partner, introduces the PRO250 Handheld Homogenizer in India, a robust and versatile tool for laboratory sample preparation. </p>
    <p class="font_family_poppins mb_10">The PRO250 homogenizer unit is a perfect fit in between the Bio-Gen PRO200 homogenizer unit and PRO digital homogenizer units. It's lightweight enough to be used handheld, yet has extra torque for processing larger and/or difficult samples. Two optional stands are available for the PRO250 homogenizer. A separate ON/OFF switch effortlessly allows for the dial knob speed control to remain at your ideal homogenizing speed. </p>
    <p>Combining the power of a 3/4 hp, 576 watt motor with a smooth variable speed control, the PRO250 homogenizer unit handles a wide range of sample sizes. It can be used with a range of probes ranging in diameter from 5mm to 30mm, it can process samples from 0.05ml to 5L*.   Requires a generator probe to use. Generator probes and accessories are sold separately. PRO Homogenizing Equipment is made in the USA.</p>
    <p><strong> Please Note:</strong> Viscous samples will reduce max capacity.  Adding a Deflector Head to your Generator Probe will facilitate movement of your sample during homogenization and help increase max volume homogenization.</p>
    <p>The PRO250 homogenizer is also available in a convenient homogenizing package, which includes everything you need to begin homogenizing.</p>
    <p>*Higher volumes dependent on viscosity.</p>

    <ul class="prod-det" style="padding-left:18px;list-style:disc;margin:10px 0 0;">
      <li>High-shear powerful lab homogenizer</li>
      <li>Most versatile hand-held or post mounted laboratory homogenizer unit</li>
      <li>Large processing range from 0.05ml-5L* </li>
      <li>Variable speed, 5000-30000 rpm </li>
      <li>Use hand-held or post mount to a stand </li>
      <li>Made in the USA with a 2 Year Warranty</li>
      <li>Generator probe not included</li>
      <li>All accessories are sold separately</li>
    </ul>
  </div>

  </div>
</div>
</div>

<div class="product-discription p_relative d_block mb_80">
  <div class="tabs-box">
    <div class="tabs-content">
      <div class="tab active-tab" id="tab-1">
        <div class="content-box">

          <h4 class="font-[MaxOT]" style="margin:20px 0 10px;color:#E63946;font-size:24px;">Specifications</h4>

          <p><strong>Volume Processing Range:&nbsp;</strong>0.05ml - 5L*</p>
          <p><strong>Power Rating:&nbsp;</strong>576 Watts</p>
          <p><strong>RPM Range:&nbsp;</strong>5,000 - 30,000</p>
          <p><strong>Speed Control:&nbsp;</strong>Analog; Variable Speed</p>
          <p><strong>Noise rating:&nbsp;</strong>72 dB</p>
          <p><strong>Weight:&nbsp;</strong>2.1 pounds</p>
          <p><strong>Dimensions:&nbsp;</strong> 2.75 X 8.5 in.</p>
          <p>*Higher volumes dependent on viscosity.</p>

          <h4 class="font-[MaxOT]" style="margin:22px 0 10px;color:#E63946;font-size:24px;">Accessories</h4>
          <p>It can be used with a range of probes ranging in diameter from 5mm to 30mm, it can process samples from 0.05ml to 5L*.   Requires a generator probe to use. Generator probes and accessories are sold separately. PRO Homogenizing Equipment is made in the USA.</p>
          <p>The PRO250 homogenizer can be used as a handheld homogenizer or post mounted to either a small footprint stand or "U" shaped base stand (for homogenizing in larger containers). </p>
          <p>Please Note: Viscous samples will reduce max capacity.  Adding a Deflector Head to your Generator Probe will facilitate movement of your sample during homogenization and help increase max volume homogenization.</p>
          <p>*Higher volumes dependent on viscosity.</p><br>

          <h4 class="font-[MaxOT]" style="margin:0 0 10px;color:#E63946;font-size:24px;">Applications</h4>
          <p>The PRO250 homogenizer is a powerful, versatile homogenizer ideal for a wide range of lab applications, including but not limited to compounding, emulsions, and suspensions, cell disruption, protein extraction medical research or pharmaceutical processing.</p>
          <ul class="prod-det" style="padding-left:18px;list-style:disc;margin:8px 0 16px;">
            <li>Bench-Scale High-Shear Homogenizer For Food And Agricultural Laboratories</li>
            <li>Tissue Homogenizer</li>
            <li>Compounding Homogenizer</li>
            <li>Homogenizer Applications</li>
          </ul>
<!-- Video Grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
  <!-- Video 1 -->
  <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
    <iframe
      class="w-full aspect-video"
      src="https://www.youtube-nocookie.com/embed/hWN_cFqmi2Y?rel=0"
      title="Protein Powder Homogenization"
      loading="lazy"
      referrerpolicy="strict-origin-when-cross-origin"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  </div>

  <!-- Video 2 -->
  <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
    <iframe
      class="w-full aspect-video"
      src="https://www.youtube-nocookie.com/embed/4Xi6d5qu8yw?rel=0"
      title="Pine Needle Homogenization"
      loading="lazy"
      referrerpolicy="strict-origin-when-cross-origin"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  </div>

  <!-- Video 3 -->
  <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
    <iframe
      class="w-full aspect-video"
      src="https://www.youtube-nocookie.com/embed/rFM3GrfB6SQ?rel=0"
      title="PRO Deflector Head Accessories for Homogenizer Generator Probes"
      loading="lazy"
      referrerpolicy="strict-origin-when-cross-origin"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  </div>
</div>


        </div>
      </div>
    </div>
  </div>
</div>
  `
  },

  "pro25d-digital-homogenizer": {
    id: "pro25d-digital-homogenizer",
    name: "PRO25D Digital Homogenizer",
    image: ImgPRO25D, // <-- import your PRO25D image
    logo: Proscientific, // <-- import Pro Scientific logo
    bannerImg: Banner3, // <-- optional banner if available
    altText: "Proscientific",

    meta: {
      title: "PRO25D Digital Homogenizer | Inkarp India",
      description:
        "PRO25D Digital Homogenizer by Pro Scientific, distributed by Inkarp India. Compact, high-speed laboratory homogenizer with digital control, volume capacity up to 3.5L, and wide applications in pharma, biotech, and research labs.",
      keywords: [
        "PRO25D Digital Homogenizer",
        "Pro Scientific homogenizer",
        "laboratory homogenizer",
        "digital homogenizer",
        "cell disruption homogenizer",
        "Inkarp India homogenizer distributor"
      ],
      altText: "PRO25D Digital Homogenizer",
      internalLinks: ["homogenizers"],
      externalLinks: ["https://proscientific.com/"]
    },
    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:18px;">
  <p>
    Inkarp Instruments, a trusted Pro Scientific 
    partner, introduces the PRO25D Digital Homogenizer in India, a compact and advanced tool for laboratory sample preparation. 
  </p>

  <p>
    The PRO25D homogenizer has a wide volume range with a processing capability up to 3.5 Liters*. Its digital display &amp; speed control provides the ability to fine-tune speeds between 0 to 30,000 RPM, allowing its speed adjustment to be precisely controlled throughout the entire speed range.
  </p>

  <p>
    The versatile and powerful PRO25D Homogenizer is ideal for a wide range of lab applications, including but not limited to compounding, emulsions and suspensions, cell disruption, protein extractions, medical research or pharmaceutical processing. PRO generator probe range in diameter from 5mm to 30mm, it can process samples from 0.05ml to 3.5L*. Requires a generator probe to use. Generator probe sold separately.
  </p>

  <p>
    A stand is included with the Homogenizer. PRO Homogenizing Equipment is made in the USA.
  </p>

  <p>
    <strong>Please Note:</strong> Viscous samples will reduce max capacity. Adding a Deflector Head to your Generator Probe will facilitate movement of your sample during homogenization and help increase max volume homogenization.
  </p>

  <p>*Higher volumes dependent on viscosity.</p>

  <h3 class="font-[MaxOT]" style="margin:20px 0 10px;color:#E63946;font-size:24px;">Key Features</h3>
  <ul style="padding-left:18px;list-style:disc;">
    <li>Compact digital homogenizer unit with high watt motor</li>
    <li>0.05ml - 3.5L volume range</li>
    <li>Viscosity up to 50,000 mPas</li>
    <li>Bright LED display &amp; user-friendly controls</li>
    <li>Homogenize, emulsify, blend and/or mix</li>
    <li>Includes U-shape Stand Assembly</li>
    <li>Made in the USA with a 2-year warranty</li>
    <li>Generator probe not included</li>
  </ul>

  <h3 class="font-[MaxOT]" style="margin:22px 0 10px;color:#E63946;font-size:24px;">Specifications</h3>
  <p><strong>Volume Processing Range:</strong> 0.05ml - 3.5L*</p>
  <p><strong>Power Rating:</strong> 576 Watts</p>
  <p><strong>RPM Range:</strong> 0 - 30,000 (120V) / 0 - 28,000 (220V)</p>
  <p><strong>Speed Control:</strong> Digital; Variable Speed</p>
  <p><strong>Noise Rating:</strong> 68 dB</p>
  <p><strong>Weight:</strong> 18 pounds</p>
  <p><strong>Dimensions:</strong> 14 x 12 x 24 in.</p>
  <p>*Higher volumes dependent on viscosity.</p>

  <h3 class="font-[MaxOT]" style="margin:22px 0 10px;color:#E63946;font-size:24px;">Accessories</h3>
  <p>PRO generator probe range in diameter from 5mm to 30mm, it can process samples from 0.05ml to 3.5L*. Requires a generator probe to use. Generator probe sold separately.</p>
  <p>Stand is included with the Homogenizer. PRO Homogenizing Equipment is made in the USA.</p>
  <p><strong>Please Note:</strong> Viscous samples will reduce max capacity. Adding a Deflector Head to your Generator Probe will facilitate movement of your sample during homogenization and help increase max volume homogenization.</p>

 <!-- Responsive Video Embed -->
<div class="relative w-full pt-[56.25%] rounded-2xl overflow-hidden mt-6 shadow-md border border-gray-200">
  <iframe
    class="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube-nocookie.com/embed/rFM3GrfB6SQ?rel=0"
    title="PRO Deflector Head Accessories for Homogenizer Generator Probes"
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
  </iframe>
</div>
</div>
`
  },

  "pro400ds-digital-benchtop-homogenizer": {
    id: "pro400ds-digital-benchtop-homogenizer",
    name: "PRO400DS Digital Benchtop Homogenizer",
    image: ImgPRO400DS, // <-- import your PRO400DS image
    logo: Proscientific, // <-- import Pro Scientific logo
    bannerImg: Banner3, // <-- optional banner if available
    altText: "Proscientific",
    //   videoId: "PK_yDJeeHXU",
    meta: {
      title: "PRO400DS Digital Benchtop Homogenizer | Inkarp India",
      description:
        "PRO400DS Digital Benchtop Homogenizer by Pro Scientific: powerful 1305 W motor, PRO TRAC motorized stand, 0.05 ml to 30 L range, bright LED display, and digital variable speed control. Distributed & serviced by Inkarp India.",
      keywords: [
        "PRO400DS Digital Benchtop Homogenizer",
        "Pro Scientific homogenizer",
        "laboratory benchtop homogenizer",
        "digital homogenizer",
        "high watt motor homogenizer",
        "PRO TRAC stand",
        "Inkarp India homogenizer"
      ],
      altText: "PRO400DS Digital Benchtop Homogenizer",
      internalLinks: ["homogenizers"],
      externalLinks: ["https://proscientific.com/"]
    },
    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:18px;">
  <p>Inkarp Instruments, a trusted Pro Scientific partner, offers the PRO400DS Digital Benchtop Homogenizer in India, a cutting-edge solution for laboratory sample preparation. </p>
  <p class="font_family_poppins mb_10">The PRO400DS Digital Benchtop Homogenizer Unit is a perfect balance of power and superior performance. Combing a high watt motor and advanced technology in digital speed controls has resulted in the most reliable and durable laboratory benchtop homogenizer unit. Between its 3 Turn Speed Knob ability to adjust RPM in the hundreds opposed to thousands and brighter LED display provides a more user-friendly control. Additional feature such as the Dual-Power Light Indicator for simpler error/problem identification and the PRO TRAC stand, which is a motorized stand developed by PRO Scientific for effortless, accurate, and smooth motor position, forms the most advanced digital benchtop homogenizer on the market. Provides a total of 14.5 inches of length for a container.</p>
  <p>With a sample volume range capability from microliters to large vessels, it demonstrates enormous processing versatility, which is designed to homogenize, emulsify, blend, and/or mix organic and inorganic materials. The entire line of probes can be mounted to this unit, it can process samples from 0.05ml to 30L*. Requires a generator probe to use. Probes are sold separately. PRO Homogenizing Equipment is made in the USA with a 2 Year Warranty.</p>
  <p>Processing in a large container?  You might need extra height in your stand. Check out the PRO400DSEL homogenizer version as it has Extra Length stand.  </p>
  <p><strong> Please Note:</strong> Viscous samples will reduce max capacity.  Adding a Deflector Head to your Generator Probe will facilitate movement of your sample during homogenization and help increase max volume homogenization.</p>
  <p>*Higher volumes dependent on viscosity.</p>

  <h3 class="font-[MaxOT]" style="margin:20px 0 10px;color:#E63946;font-size:24px;">Key Features</h3>
  <ul style="padding-left:18px;list-style:disc;" class="prod-det">
    <li>Compact digital benchtop homogenizer unit</li>
    <li>Powerful 1305 high watt motor</li>
    <li>Bright LED display &amp; user-friendly controls</li>
    <li>Homogenize, emulsify, blend, and/or mix</li>
    <li>Large processing range, 0.05ml to 30L*</li>
    <li>Motorized PRO TRAC stand</li>
    <li>Made in the USA with a 2 Year Warranty</li>
    <li>Generator probe not included</li>
  </ul>

  <h3 class="font-[MaxOT]" style="margin:22px 0 10px;color:#E63946;font-size:24px;">Specifications</h3>
  <p><strong>Volume Processing Range:&nbsp;</strong>0.05ml - 30L*</p>
  <p><strong>Power Rating:&nbsp;</strong>1305 Watts</p>
  <p><strong>RPM Range:&nbsp;</strong>0 - 23,000</p>
  <p><strong>Speed Control:&nbsp;</strong>Digital; Variable speed</p>
  <p><strong>Noise rating:&nbsp;</strong>68 dB</p>
  <p><strong>Weight:&nbsp;</strong>39 pounds</p>
  <p><strong>Dimensions:&nbsp;</strong> 15.25 X 14 X 30 in.</p>
  <p>*Higher volumes dependent on viscosity.</p>

  <h3 class="font-[MaxOT]" style="margin:22px 0 10px;color:#E63946;font-size:24px;">Accessories</h3>
  <p>Requires a generator probe to use. Probes are sold separately. </p>
  <p><strong> Please Note:</strong> Viscous samples will reduce max capacity.  Adding a Deflector Head to your Generator Probe will facilitate movement of your sample during homogenization and help increase max volume homogenization.</p>

  <br>
  <h3 class="font-[MaxOT]" style="margin:0 0 10px;color:#E63946;font-size:24px;">Applications</h3>
  <p>US Environmental Protection Agency (EPA) method 1633. - This is the first validated laboratory method to test for PFAS in wastewater, surface water, groundwater, & soils.</p>
  <p>Tissue homogenizer – Pro Scientific PRO400DS (p/n 01-01400DS) homogenizer or equivalent with stainless steel macro-shaft and turbo-shear blade (p/n 02-30200).</p>
  <img src="/images/products/Proscientific/validated-pfas-testing-min.jpg" alt="" style="max-width:100%;height:auto;border-radius:8px;">

  <!-- Responsive Video Embed -->
<div class="relative w-full pt-[56.25%] rounded-2xl overflow-hidden mt-6 border border-gray-200 shadow-md">
  <iframe
    class="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube-nocookie.com/embed/PK_yDJeeHXU?rel=0"
    title="PRO D Series Homogenizer"
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
  </iframe>
</div>

</div>
`
  },

  "pro400dsel-digital-benchtop-homogenizer-extra-length": {
    id: "pro400dsel-digital-benchtop-homogenizer",
    name: "PRO400DSEL Digital Benchtop Homogenizer",
    image: ImgPRO400DSEL, // <-- import your PRO400DSEL image
    logo: Proscientific,  // <-- import Pro Scientific logo
    bannerImg: Banner3, // <-- optional banner if available
    altText: "Proscientific",
    //   videoId: "PK_yDJeeHXU",
    meta: {
      title: "PRO400DSEL Digital Benchtop Homogenizer | Inkarp India",
      description:
        "PRO400DSEL Digital Benchtop Homogenizer by Pro Scientific (Extra Length) – ideal for larger or taller containers, 1305 W motor, 31-inch PRO TRAC stand, 0.05 ml to 30 L range, digital controls, and bright LED display. Distributed & serviced by Inkarp India.",
      keywords: [
        "PRO400DSEL Digital Benchtop Homogenizer",
        "Pro Scientific homogenizer",
        "laboratory benchtop homogenizer",
        "digital homogenizer",
        "extra length stand homogenizer",
        "high watt homogenizer",
        "Inkarp India homogenizer"
      ],
      altText: "PRO400DSEL Digital Benchtop Homogenizer",
      internalLinks: ["homogenizers"],
      externalLinks: ["https://proscientific.com/"]
    },
    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:18px;">
  <p>
    Inkarp Instruments, a trusted Pro Scientific
    partner, presents the PRO400DSEL Digital Benchtop Homogenizer (Extra Length) in India, ideal for processing larger or harder-to-reach samples.
  </p>

  <p class="font_family_poppins mb_10">
    The PRO400DSEL D-Series Digital Benchtop Homogenizer Unit has the same perfect balance of power and superior performance as the PRO400DS. However, the EL version offers an Extra Long stand height, which provides a total of 31 inches of length for a taller container (standard model has 14.5 inches of length).
  </p>

  <p>
    Combing a high watt motor and advanced technology in digital speed controls has resulted in the most reliable and durable laboratory benchtop homogenizer unit. Between its 3 Turn Speed Knob ability to adjust RPM in the hundreds opposed to thousands and brighter LED display provides a more user-friendly control. Additional feature such as the Dual-Power Light Indicator for simpler error/problem identification and the Extra Length PRO TRAC stand, which is a motorized stand developed by PRO Scientific for effortless, accurate, and smooth motor position, forms the most advanced digital benchtop homogenizer on the market. 
  </p>

  <p>
    With a sample volume range capability from microliters to very large containers, it demonstrates enormous processing versatility, which is designed to homogenize, emulsify, blend, and/or mix organic and inorganic materials. The entire line of probes can be mounted to this unit, it can process samples from 0.03ml to 30L*.
  </p>

  <p>Requires a generator probe to use. Generator probes are sold separately. PRO Homogenizing Equipment is made in the USA with a 2 Year Warranty.</p>

  <p><strong>Please Note:</strong> Viscous samples will reduce max capacity. Adding a Deflector Head to your Generator Probe will facilitate movement of your sample during homogenization and help increase max volume homogenization.</p>

  <p>*Higher volumes dependent on viscosity.</p>

  <h3 class="font-[MaxOT]" style="margin:20px 0 10px;color:#E63946;font-size:24px;">Key Features</h3>
  <ul style="padding-left:18px;list-style:disc;">
    <li>Compact digital benchtop homogenizer unit</li>
    <li>Powerful 1305 high watt motor</li>
    <li>Extra Length stand for taller containers</li>
    <li>Bright LED display &amp; user-friendly controls</li>
    <li>Homogenize, emulsify, blend, and/or mix</li>
    <li>Large processing range, 0.05ml to 30L*</li>
    <li>Motorized PRO TRAC stand</li>
    <li>Made in the USA with a 2 Year Warranty</li>
    <li>Generator probe not included</li>
  </ul>

  <h3 class="font-[MaxOT]" style="margin:22px 0 10px;color:#E63946;font-size:24px;">Specifications</h3>
  <p><strong>Volume Processing Range:&nbsp;</strong>0.05ml - 30L*</p>
  <p><strong>Power Rating:&nbsp;</strong>1305 Watts</p>
  <p><strong>RPM Range:&nbsp;</strong>0 - 23,000</p>
  <p><strong>Speed Control:&nbsp;</strong>Digital; Variable speed</p>
  <p><strong>Noise rating:&nbsp;</strong>68 dB</p>
  <p><strong>Weight:&nbsp;</strong>41 pounds</p>
  <p><strong>Dimensions:&nbsp;</strong> 15.25 X 14 X 41 in.</p>
  <p>*Higher volumes dependent on viscosity.</p>

  <h3 class="font-[MaxOT]" style="margin:22px 0 10px;color:#E63946;font-size:24px;">Accessories</h3>
  <p>The entire line of probes can be mounted to this unit, it can process samples from 0.03ml to 30L*. Requires a generator probe to use. Generator probes are sold separately. </p>
  <p><strong>Please Note:</strong> Viscous samples will reduce max capacity. Adding a Deflector Head to your Generator Probe will facilitate movement of your sample during homogenization and help increase max volume homogenization.</p>

  <br>
  <h3 class="font-[MaxOT]" style="margin:0 0 10px;color:#E63946;font-size:24px;">Applications</h3>
  <p>US Environmental Protection Agency (EPA) method 1633. - This is the first validated laboratory method to test for PFAS in wastewater, surface water, groundwater, & soils.</p>
  <p>Tissue homogenizer – Pro Scientific PRO400DS (p/n 01-01400DS) homogenizer or equivalent with stainless steel macro-shaft and turbo-shear blade (p/n 02-30200).</p>

  <!-- Responsive Video Embed -->
<div class="relative w-full pt-[56.25%] rounded-2xl overflow-hidden mt-6 border border-gray-200 shadow-md">
  <iframe
    class="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube-nocookie.com/embed/PK_yDJeeHXU?rel=0"
    title="PRO D Series Homogenizer"
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
  </iframe>
</div>


</div>
`
  },

  "pro400pc-programmable-benchtop-homogenizer": {
    id: "pro400pc-programmable-benchtop-homogenizer",
    name: "PRO400PC Programmable Benchtop Homogenizer",
    image: ImgPRO400PC, // <-- import your PRO400PC image
    logo: Proscientific, // <-- import Pro Scientific logo
    bannerImg: Banner3, // <-- optional banner if available
    altText: "Proscientific",
    videoId: "", // no video in your provided content, leave blank
    meta: {
      title: "PRO400PC Programmable Benchtop Homogenizer | Inkarp India",
      description:
        "PRO400PC Programmable Benchtop Homogenizer by Pro Scientific – programmable, computer interface (RS232), PROgrammable® software, 23-cycle program capability, data recording, and 1305 W motor. Distributed & serviced by Inkarp India.",
      keywords: [
        "PRO400PC Programmable Benchtop Homogenizer",
        "Pro Scientific homogenizer",
        "programmable homogenizer",
        "laboratory benchtop homogenizer",
        "RS232 homogenizer",
        "Inkarp India homogenizer distributor"
      ],
      altText: "PRO400PC Programmable Benchtop Homogenizer",
      internalLinks: ["homogenizers"],
      externalLinks: ["https://proscientific.com/"]
    },
    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:18px;">
  <p>
    Inkarp Instruments, a trusted Pro Scientific
    partner, presents the PRO400PC Programmable Benchtop Homogenizer in India, a high-performance instrument for advanced laboratory sample preparation.
  </p>

  <p class="mb_10">
    The PC-Series homogenizer unit is a compact and powerful programmable unit that is designed to run repetitive homogenizing in your laboratory or industrial setting with a minimum of operator attention. It can be programmed either from the unit's keypad or from your own laptop or desktop computer (serial communication mode RS232) with the included PROgrammable® software. An infinite number of programs can be created and stored, each consisting of up to 23 unique cycles defining speed, run time and pause between each cycle. At any point, the PC-Series homogenizer can be overridden and manual control resumed.
  </p>

  <p>
    PRO PC homogenizer units meet industry requirements for verification of processing and documentation maintenance. As homogenization proceeds, data can be graphed on the computer screen. Both the programs and the data collected (set time and set speed versus actual time and actual speed) can be stored and recalled for screen display or printout. Requires a generator probe or chamber assembly to use.
  </p>

  <p>
    With a sample volume range capability from microliters to multi-liters, it demonstrates enormous processing versatility, which is designed to homogenize, emulsify, blend, and/or mix organic and inorganic materials. It comes with a PRO TRAC stand, which is a motorized stand developed by PRO Scientific, providing an effortless, accurate, and smooth motor position. Provides a total of 14.5 inches of length for a container.
  </p>

  <p>
    PRO Scientific can provide an end-user the sheer numbers based on using our units and generator probes, so you will know exactly at what speeds/time to run PRO homogenizing equipment.
  </p>

  <p>
    Processing in a large container? You might need extra height in your stand. Check out the PRO400PCEL homogenizer version as it has Extra Length stand. 
  </p>

  <p><strong>Please Note:</strong> Viscous samples will reduce max capacity. Adding a Deflector Head to your Generator Probe will facilitate movement of your sample during homogenization and help increase max volume homogenization.</p>
  <p>*Higher volumes dependent on viscosity.</p>

  <h3 class="font-[MaxOT]" style="margin:20px 0 10px;color:#E63946;font-size:24px;">Key Features</h3>
  <ul style="padding-left:18px;list-style:disc;">
    <li>Powerful programmable homogenizer unit</li>
    <li>Computer interface capability</li>
    <li>Create an infinite number of programs</li>
    <li>Recall individual data for various cycles</li>
    <li>Powerful 1305 high watt motor</li>
    <li>Homogenize, emulsify, blend, and/or mix</li>
    <li>Large processing range, 0.05ml to 30L*</li>
    <li>Motorized PRO TRAC stand</li>
    <li>Made in the USA with a 2 Year Warranty</li>
    <li>Generator probe not included</li>
  </ul>

  <h3 class="font-[MaxOT]" style="margin:22px 0 10px;color:#E63946;font-size:24px;">Specifications</h3>
  <p><strong>Volume Processing Range:&nbsp;</strong>0.05ml - 30L*</p>
  <p><strong>Power Rating:&nbsp;</strong>1305 Watts</p>
  <p><strong>RPM Range:&nbsp;</strong>0 - 23,000</p>
  <p><strong>Speed Control:&nbsp;</strong>Digital; Variable speed</p>
  <p><strong>Noise rating:&nbsp;</strong>68 dB</p>
  <p><strong>Weight:&nbsp;</strong>41 pounds</p>
  <p><strong>Dimensions:&nbsp;</strong> 15.25 X 14 X 30 in.</p>
  <p>*Higher volumes dependent on viscosity.</p>

  <h3 class="font-[MaxOT]" style="margin:22px 0 10px;color:#E63946;font-size:24px;">Accessories</h3>
  <p>Requires a generator probe or chamber assembly to use.</p>
  <p><strong>Please Note:</strong> Viscous samples will reduce max capacity. Adding a Deflector Head to your Generator Probe will facilitate movement of your sample during homogenization and help increase max volume homogenization.</p>

</div>
`
  },

  "pro400pcel-programmable-benchtop-homogenizer-extra-length": {
    id: "pro400pcel-programmable-benchtop-homogenizer",
    name: "PRO400PCEL Programmable Benchtop Homogenizer (Extra Length)",
    image: ImgPRO400PCEL, // <-- import your PRO400PCEL image
    logo: Proscientific,  // <-- import Pro Scientific logo
    bannerImg: Banner3, // <-- optional banner if available
    altText: "Proscientific",
    videoId: "",
    meta: {
      title: "PRO400PCEL Programmable Benchtop Homogenizer (Extra Length) | Inkarp India",
      description:
        "PRO400PCEL Programmable Benchtop Homogenizer (Extra Length) by Pro Scientific — 31-inch PRO TRAC stand, programmable via keypad or RS232 with PROgrammable® software, up to 23-cycle programs, and 1305 W motor. Distributed & serviced by Inkarp India.",
      keywords: [
        "PRO400PCEL Programmable Benchtop Homogenizer",
        "Pro Scientific homogenizer",
        "programmable homogenizer",
        "extra length stand homogenizer",
        "RS232 homogenizer",
        "Inkarp India homogenizer"
      ],
      altText: "PRO400PCEL Programmable Benchtop Homogenizer (Extra Length)",
      internalLinks: ["homogenizers"],
      externalLinks: ["https://proscientific.com/"]
    },
    description: `
<div style="font-family:Roboto;color:#333;line-height:1.7;font-size:18px;">
  <p class="font_family_poppins mb_10">The 400PCEL Programmable Benchtop Homogenizer Unit has the same perfect balance of power and superior performance as the PRO400PC. However, the EL version offers an Extra Long stand height, which provides a total of 31 inches of length for a taller container (standard unit height is 14.5 inches). </p>
  <p>It is a powerful programmable unit that is designed to run repetitive homogenizing in your laboratory or industrial setting with a minimum of operator attention. It can be programmed either from the unit's keypad, or from your own laptop or desktop computer (serial communication mode RS232) with the included PROgrammable® software. An infinite number of programs can be created and stored, each consisting of up to 23 unique cycles defining speed, run time and pause between each cycle. At any point, the PC-Series homogenizer can be overridden and manual control resumed.</p>
  <p>PRO PC homogenizer units meet industry requirements for verification of processing and documentation maintenance. As homogenization proceeds, data can be graphed on the computer screen. Both the programs and the data collected (set time and set speed versus actual time and actual speed) can be stored and recalled for screen display or printout. Requires a generator probe or chamber assembly to use.</p>
  <p>With a sample volume range capability from microliters to multi-liters, it demonstrates enormous processing versatility, which is designed to homogenize, emulsify, blend, and/or mix organic and inorganic materials. It comes with a Extra Length PRO TRAC stand, which is a motorized stand developed by PRO Scientific, providing an effortless, accurate, and smooth motor position.  </p>
  <p>PRO Scientific can provide an end-user the sheer numbers based on using our units and generator probes, so you will know exactly at what speeds/time to run PRO homogenizing equipment.</p>
  <p><strong> Please Note:</strong> Viscous samples will reduce max capacity.  Adding a Deflector Head to your Generator Probe will facilitate movement of your sample during homogenization and help increase max volume homogenization.</p>
  <p>*Higher volumes dependent on viscosity.</p>

  <h3 class="font-[MaxOT]" style="margin:22px 0 10px;color:#E63946;font-size:24px;">Accessories</h3>
  <p>Requires a generator probe or chamber assembly to use.</p>
  <p><strong> Please Note:</strong> Viscous samples will reduce max capacity.  Adding a Deflector Head to your Generator Probe will facilitate movement of your sample during homogenization and help increase max volume homogenization.</p>
</div>
`,
    features: [
      { name: "Powerful programmable homogenizer unit" },
      { name: "Extra Length stand for taller containers" },
      { name: "Computer interface capability" },
      { name: "Create an infinite number of programs" },
      { name: "Recall individual data for various cycles" },
      { name: "Powerful 1305 high watt motor" },
      { name: "Homogenize, emulsify, blend, and/or mix" },
      { name: "Large processing range, 0.05ml to 30L*" },
      { name: "Motorized PRO TRAC stand" },
      { name: "Made in the USA with a 2 Year Warranty" },
      { name: "Generator probe not included" }
    ],

    techSpecs: {
      "Volume Processing Range": "0.05ml - 30L*",
      "Power Rating": "1305 Watts",
      "RPM Range": "0 - 23,000",
      "Speed Control": "Digital; Variable speed",
      "Noise Rating": "68 dB",
      "Weight": "41 pounds",
      "Dimensions": "15.25 x 14 x 41 in.",
      "Note": "*Higher volumes dependent on viscosity."
    },

  }

}