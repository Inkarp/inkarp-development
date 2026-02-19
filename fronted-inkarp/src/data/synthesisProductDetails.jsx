import React, { useState } from "react";
// Logos & Images
import Heidolph from '/src/assets/PrincipalLogos/RowOne/Heidolph.svg';
import Polyscience from "/src/assets/PrincipalLogos/RowOne/Polyscience.png";
import Radleys from "/src/assets/PrincipalLogos/RowOne/radley.svg";
import Rotzmeier from "/src/assets/PrincipalLogos/RowOne/Rotzmeier.gif";
import ThalesNano from "/src/assets/PrincipalLogos/RowOne/ThalesNano.jpg";
import Bruker from "/src/assets/PrincipalLogos/RowSeven/Bruker.svg";
import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";

import HeiVapCore from "/images/products/heidolph/Hei-VAP-HL-G3.webp";
import HeiVapExpert from "/images/products/heidolph/Hei-VAP-Expert.webp";
import HeiVapUltimate from "/images/products/heidolph/Hei-VAP-Ultimate.webp";
import HeiVapUltimateControl from "/images/products/heidolph/Hei-VAP-Ultimate-Control.webp";
import HeiVapExpertControl from "/images/products/heidolph/Hei-VAP-Expert-Control.webp";

import HeiVacValveControl from "/images/products/heidolph/hei-vac-valve-control.webp";
import HeiVacValveTec from "/images/products/heidolph/hei-vac-valve-tec.webp";
import HeiVacVarioControl from "/images/products/heidolph/hei-vac-vario-control.webp";
import HeiVacVarioStation from "/images/products/heidolph/hei-vac-vario-station.webp";

import HeiVapIndustrialBasic from "/images/products/heidolph/Hei-VAP-Industrial-Basic.webp"

import LabScaleHeiVapDismatic from "/images/products/heidolph/Lab-Scale-Hei-Vol-Distimatic.webp"
import LabScaleHeiVapDismaticPro from "/images/products/heidolph/Lab-Scale-Hei-Vol-Distimatic-Pro.webp";

import HeiConnect from "/images/products/heidolph/Hei-Connect.webp"
import HeiMixS from "/images/products/heidolph/Hei-Mix-S.webp"
import HeiPlateMix from "/images/products/heidolph/Hei-PLATE-Mix-20.webp"
import HeiPlateMixHeatCore from "/images/products/heidolph/Hei-PLATE-MixnHeat-Core.webp"
import HeiPlateMixHeatCorePlus from "/images/products/heidolph/Hei-PLATE-MixnHeat-Core-Plus.webp"
import HeiPlateMixHeatCoreUltimate from "/images/products/heidolph/hei-plate-mix-n-heat-ultimate.webp"
import HeiPlateMixHeatCoreExpert from "/images/products/heidolph/hei-plate-mix-n-heat-expert.webp"



import HeiProcessCore from "/images/products/heidolph/Hei-PROCESS-Core.webp"
import HeiProcessExpert from "/images/products/heidolph/Hei-PROCESS-Expert.webp"
import HeiProcessUltimate from "/images/products/heidolph/Hei-PROCESS-Ultimate.webp"
import HeiProcessCustomise from "/images/products/heidolph/Hei-PROCESS-Customized.webp"

import SphericalPlate from "/images/products/heidolph/Sphericalplate-5D.webp"

import ReaxTop from "/images/products/heidolph/Reax-top.webp"
import ReaxControl from "/images/products/heidolph/Reax-control.webp"
import MultiReax from "/images/products/heidolph/Multi-Reax2.webp"
import TitraMax101 from "/images/products/heidolph/Titramax-101.webp"
import TitraMax100 from "/images/products/heidolph/Titramax-100.webp"
import TitraMax1000 from "/images/products/heidolph/Titramax-1000.webp"
import Rotamax120 from "/images/products/heidolph/Rotamax-120.webp"
import Unimax1010 from "/images/products/heidolph/Unimax-1010.webp"
import Unimax2010 from "/images/products/heidolph/Unimax-2010.webp"
import DuoMax from "/images/products/heidolph/Duomax-1030.webp"
import ProMax1020 from "/images/products/heidolph/Promax-1020.webp"
import ProMax2020 from "/images/products/heidolph/Promax-2020.webp"
import PolyMax1040 from "/images/products/heidolph/Polymax-1040.webp"
import PolyMax2040 from "/images/products/heidolph/Polymax-2040.webp"
import Vibramax100 from "/images/products/heidolph/Vibramax-100.webp"
import Reax20 from "/images/products/heidolph/Reax-20.webp"
import Reax20New from "/images/products/heidolph/Reax-20-1-16.webp"
import Reax2 from "/images/products/heidolph/Reax2-with-Adapter.webp"
import TitramaxPackage from "/images/products/heidolph/titramax-package.webp"


export const SynthesisProductDetails = {

  "lab-scale-hei-volume-dismatic": {
    id: "hei-volume-distimatic-lab",
    name: "Lab Scale Hei-VOLUME Distimatic – Continuous Automatic Distillation Module",
    image: LabScaleHeiVapDismatic,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Heidolph Lab Scale Hei-VOLUME Distimatic Module",
    meta: {
      title: "Lab Scale Hei-VOLUME Distimatic | Continuous Automatic Distillation | Inkarp India",
      description:
        "Automatic, continuous distillation module for Heidolph rotary evaporators. Around-the-clock unattended operation, sensor- or time-controlled modes, valve matrix with condensate pump, optional 24/7 residue drainage, and safety sensors. Distributed & serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Hei-VOLUME",
        "Distimatic",
        "automatic distillation",
        "continuous distillation",
        "rotary evaporator",
        "Inkarp India"
      ],
      altText: "Hei-VOLUME Distimatic Lab Module"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind)
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-4">
    <p>
      This innovative technology offers laboratories and industries a precise and efficient distillation process, with continuous operation and automatic control. As Heidolph's trusted partner in India, we provide comprehensive support, including installation, training, and maintenance, to ensure optimal performance and reliability. Our expertise in laboratory and industrial processing solutions makes us the ideal partner for Heidolph's Hei-VOLUME Distimatic technology.
    </p>
    <p>In combination with the corresponding evaporator system, the Lab Scale Hei-VOLUME Distimatic automatic module enables efficient, unattended operation around the clock.</p>
    <p><strong>Efficiency through automation</strong></p>
    <ul class="list-disc ml-6 space-y-1">
      <li>Save time</li>
      <li>Multiply daily throughput</li>
      <li>Reduce costs</li>
    </ul>

    <h3 class="font-[MaxOT] text-[#E63946] text-lg sm:text-xl font-semibold mt-3">The basic model of the Lab Scale Hei-VOLUME Distimatic module consists of the following main components:</h3>
    <ul class="list-disc ml-6 space-y-1">
      <li>Control box with educt sensor vessel &amp; valve, emergency stop, condensate pump, and control panel</li>
      <li>The level sensor in the rotary flask</li>
      <li>The collector vessel with valve matrix</li>
      <li>The residue pump (only for models with automatic drainage of residue, marked "24/7")</li>
    </ul>
    <ul class="list-decimal ml-6 space-y-1">
      <li>Vacuum valve</li>
      <li>Colector valve</li>
      <li>Venting valve</li>
      <li>Distillate pump</li>
      <li>Residue pump</li>
      <li>Filling valve</li>
    </ul>

    <div class="grid sm:grid-cols-2 gap-4 mt-2">
      <figure class="rounded-xl overflow-hidden border border-gray-200">
        <img src="/images/products/heidolph/Distimatic-Functional principle-sRGB.jpg" alt="Distimatic functional principle" class="w-full h-auto">
      </figure>
      <div class="rounded-xl overflow-hidden border border-gray-200">
        <iframe
          class="w-full aspect-video"
          src="https://heidolph-instruments.com/products/03%20Automatic%20Module%20Distimatic/animations/Automatisches%20Befu%CC%88llen.mp4"
          title="Automatic filling animation"
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </div>

    <p>
   The Lab Scale Hei-VOLUME Distimatic module is operated via the control panel on the control box. In addition to selecting the mode (sensor- or time-controlled), the level sensor in the rotary flask can be calibrated to the medium to be processed by pressing a button. At the same time, the illuminated button displays a status indicator for the level sensor. In the event of an emergency situation, the system can be stopped by triggering the emergency stop switch.
    </p>

    <p>The automatic filling and refilling of the rotary flask is based on the system vacuum. Due to the negative pressure in the rotary evaporator, new medium is fed in as soon as the valve on the control box opens. A sensor detects when the educt is used up. You are free to choose the vessel from which you want to refill and simply replace it during the ongoing process.</p>

    <ul class="list-decimal ml-6 space-y-1">
    <li> Educt container</li>
    <li> Educt container sensor with measuring capsule</li>
    <li> Educt container valve</li>
    <li> Flask level sensor</li>
    <li> Residue drainage</li>
    <li> Educt supply</li>
    <li> Evapoation flask</li>
    </ul>
   <p>The condensate collects in a collector vessel with a valve matrix, which replaces the receiving flask. The valve matrix consists of a venting valve, a condensate valve and a vacuum valve. The contents of the collector are pumped out sensor-controlled via a chemical membrane pump on the control box into a container of your choice. The collector vessel is ventilated separately for this purpose. Once the collector vessel is empty, it is evacuated again before the condensate valve to the rest of the system opens again and the distillate continues to be collected. An overflow sensor on the condensate collection container detects its fill level and stops the system as soon as the container is full.</p>

    <div class="rounded-xl overflow-hidden border border-gray-200">
      <iframe
        class="w-full aspect-video"
        src="https://heidolph-instruments.com/products/03%20Automatic%20Module%20Distimatic/animations/Ventilmatrix.mp4"
        title="Valve matrix animation"
        frameborder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>

    <p>
     In the Lab Scale Hei-VOLUME Distimatic 24/7 version, the residue in the rotary flask can be automatically pumped out. To do this, the entire system is ventilated and the concentrate is pumped into a container of your choice using the residue pump. An overflow sensor detects the filling level of the vessel and stops the system as soon as the collecting container is full.
    </p>
<p>For your safety, an cut-out sensor, which is attached to the glassware, monitors the process and stops the system in the event of a fault.</p>
<p>All sensors of the Lab Scale Hei-VOLUME Distimatic module can be adjusted to the medium to be processed.</p>
<p>The Lab Scale Hei-VOLUME Distimatic automatic module is available for Heidolph benchtop and large-scale rotary evaporators.</p>

  </div>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },
  "lab-scale-hei-volume-dismatic-pro": {
    id: "hei-volume-distimatic-pro",
    name: "Large Scale Hei-VOLUME Distimatic Pro – Continuous Automatic Distillation Module",
    image: LabScaleHeiVapDismaticPro,
    bannerImg: Banner1, // or any banner you prefer
    logo: Heidolph,
    altText: "Heidolph Large Scale Hei-VOLUME Distimatic Pro Module",
    meta: {
      title: "Hei-VOLUME Distimatic Pro (Large Scale) | Continuous Automatic Distillation | Inkarp India",
      description:
        "Large-scale automatic, continuous distillation module for Heidolph rotary evaporators. Touchscreen control, data logging, sensor- or time-controlled modes, condensate-cooled collector, optional 24/7 residue discharge, Woulff bottle, and comprehensive safety. Distributed & serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Hei-VOLUME",
        "Distimatic Pro",
        "automatic distillation",
        "continuous distillation",
        "large scale",
        "rotary evaporator",
        "Inkarp India"
      ],
      altText: "Distimatic Pro – Large Scale"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-4">
    <p>
      Inkarp is the trusted distributor and service provider of Heidolph's Lab Scale Hei-VOLUME Distimatic Continuous Automatic Distillation Modules in India, offering precise and efficient distillation processes for laboratory applications. This innovative technology features continuous operation and automatic control, ensuring accurate and reproducible results.
    </p>
    <p>
     In combination with the corresponding evaporator system, the Large Scale Hei-VOLUME Distimatic Pro automatic module enables efficient, unattended operation around the clock.
    </p>

   <p><strong>Efficiency through automation</strong></p>
    <ul class="list-disc ml-6 space-y-1">
      <li>Save time</li>
      <li>Multiply daily throughput</li>
      <li>Reduce costs</li>
    </ul>

    <h3 class="font-[MaxOT] text-[#E63946] text-lg sm:text-xl font-semibold">The innovative Large Scale Hei-VOLUME Distimatic Pro module consists of the following main components:</h3>
    <ul class="list-disc ml-6 space-y-1">
      <li>The control box with integrated compressor and control panel</li>
     <li>The educt sensor vessel &amp; valve</li>
      <li>The level sensor in the rotary flask</li>
      <li>The collector with condensate cooling </li>
    </ul>

  <div style="border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
  <div style="position:relative;width:100%;padding-bottom:56.25%;">
    <iframe
      src="https://www.youtube-nocookie.com/embed/3220-VgtoX8"
      title="Distimatic Pro – Overview"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      style="position:absolute;inset:0;border:0;width:100%;height:100%;"></iframe>
  </div>
</div>

  
   <p>The Large Scale Hei-VOLUME Distimatic Pro module is operated via the removable control panel with touchscreen. The graphical representation with color scheme, in combination with the push-wheels with LED rings, shows you at any time what state and process step the system is in - even from a distance. In addition to the selection of the mode (sensor or time-controlled, manual mode for processing small batches, rinsing program), you can save your parameters for recurring processes and transfer them to other systems via USB stick. The data-logging function records all process parameters and saves them for export via USB stick. To protect against manipulation during the process, the screen can optionally be locked with a PIN code. For future-proof work, the system software is easily updatable.</p>

   <p> The automatic filling and refilling of the rotary flask is based on the system vacuum. Due to the negative pressure in the rotary evaporator, new medium is fed in as soon as the valve on the original educt sensor vessel opens. The sensor detects when the educt is empty and turns off the system.<p>
 <p>You can easily replace the vessel from which you want to refill while the process is in progress.</p>

 <p>The level sensor in the rotary flask can be adjusted with a tap via the control panel. So you can always work at full power, even with highly foaming media.</p>

 <p>The condensate collects in a collector vessel with condensate cooling, which replaces the receiving flask. The cooling prevents the undesired boil-up of volatile solvents. The contents of the collector are emptied by means of overpressure under sensor control. The collector vessel is ventilated separately for this purpose. Once the collector vessel is empty, it is evacuated again before the condensate valve to the rest of the system opens again and the distillate continues to be collected.</p>

 <p>In the Large Scale Hei-VOLUME Distimatic Pro 24/7 version, the residue can be automatically dispensed in the rotary flask. To do this, the entire system is ventilated and the concentrate is emptied by means of overpressure. A heating tape for draining off the residue is optionally available for discharging viscous media.</p>

<p>To protect the vacuum pump and stabilize the system vacuum, a Woulff bottle is integrated in which solvent vapors are separated.</p>

 <p>For your safety, an cut-out sensor, which is screwed into the glassware, monitors the process and stops the system in the event of a fault.</p>
 <p>You can also purchase overflow sensors for the condensate and residue collection containers - they switch off the system as soon as the container is full. We recommend the combination with our canisters — thanks to the specially designed screw connection, the sensors are optimally positioned.</p>


 <p>Do you operate several systems and need a better overview? Complete the Large Scale Hei-VOLUME Distimatic Pro module with the signal light from our accessories. A traffic light system shows you the status of the system and notifies you remotely.</p>

 <p>With the exception of the level sensor that can be adjusted for process optimization, no adjustment of the sensor system is necessary when changing media. The Large Scale Hei-VOLUME Distimatic Pro module reliably detects the entire spectrum, regardless of the polarity of your solvent. This makes processing a wide variety of media easy.</p>
  
  </div>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: null
  },

  "hei-process-ultimate": {
    id: "hei-process-ultimate",
    name: "Hei-PROCESS Ultimate Processing Solutions",
    image: HeiProcessUltimate,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Heidolph Hei-PROCESS Ultimate – cloud-based processing platform",
    meta: {
      title: "Hei-PROCESS Ultimate | Cloud-Based Processing Solutions | Inkarp India",
      description:
        "Plug-and-play platform connecting Heidolph devices, sensors, and third-party gear via the cloud. Build, automate, and monitor simple to complex processes; map workflows on dashboards; expand with new devices; and run asynchronous multi-process setups. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Hei-PROCESS",
        "cloud control",
        "lab automation",
        "process dashboard",
        "OSPIN",
        "Inkarp India"
      ],
      altText: "Hei-PROCESS Ultimate Processing Solutions"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind)
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-4">
    <h3 class="sr-only">Overview</h3>
    <p>
     Hei-PROCESS Ultimate Processing Solutions for India's growing industries Heidolph's innovative technology, distributed by Inkarp Instruments. Expert service and support for optimized processing efficiency Streamline your workflow with our cutting-edge solutions Inkarp - your trusted processing partner.
    </p>

    <p>
      <strong>Plug-and-play principle:</strong> Heidolph devices, sensors and third-party devices from a growing portfolio can be freely combined with each other and individually work on simple to complex processes.
    </p>

    <ul class="list-disc ml-6 space-y-1">
    <li> Cloud-based control of Heidolph devices, sensors and third-party devices, connected to a gateway</li>
    <li> Freely combine devices from the portfolio and let them interact</li>
    <li> Map processes on the dashboard individually</li>
    <li> Continuous expansion of the portfolio of compatible devices</li>
    <li> Support of process design by OSPIN</li>
    <li> Expandable: New devices can be added to the platform</li>
    <li> Connected devices can work asynchronously in multiple processes</li>
    </ul>
  </div>

  <!-- Resources (responsive + full borders) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Data / Resources</h3>
    <div class="min-w-[680px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr>
            <td>Hei-PROCESS Cloud – Quick Start Guide</td>
            <td class="text-center">
              <a href="https://heidolph-instruments.com/documents/operation%20manuals/OSPIN/QuickStart_OSPIN.pdf"
                 target="_blank" rel="noopener"
                 class="inline-block px-3 py-1 rounded bg-[#245790] text-white">Download</a>
            </td>
          </tr>
          <tr>
            <td>At-a-glance – Hei-PROCESS (EN)</td>
            <td class="text-center">
              <a href="https://heidolph-instruments.com/documents/at%20a%20glance%20charts/2022/Hei-PROCESS-Core%20Cloud%20Solution/At-a-glance-Hei-Process-EN.pdf"
                 target="_blank" rel="noopener"
                 class="inline-block px-3 py-1 rounded bg-[#245790] text-white">Download</a>
            </td>
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
  "hei-process-customized": {
    id: "hei-process-customized",
    name: "Hei-PROCESS Customized Processing Solutions",
    image: HeiProcessCustomise,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Heidolph Hei-PROCESS – Customized Processing Solutions",
    meta: {
      title: "Hei-PROCESS Customized Processing Solutions | Inkarp India",
      description:
        "Tailored, cloud-connected automation from Heidolph: freely combine devices, sensors, and third-party gear to design simple to complex workflows. Dashboard mapping, OSPIN-assisted process design, expandable portfolio, and asynchronous multi-process operation. Distributed & serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Hei-PROCESS",
        "customized processing",
        "lab automation",
        "cloud control",
        "OSPIN",
        "Inkarp India"
      ],
      altText: "Hei-PROCESS Customized"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind)
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-4">
    <p>
      Inkarp is the trusted distributor and service provider of Heidolph's Hei-PROCESS Customized Processing Solutions in India. With a deep understanding of the diverse processing needs of Indian industries, we offer tailored solutions that optimize efficiency and accuracy. Heidolph's innovative technology, combined with our expertise and reliable service, empowers laboratories and industries to transform their workflows and achieve precise results.
    </p>

    <p><strong>Plug-and-play principle:</strong> Heidolph devices, sensors and third-party devices from a growing portfolio can be freely combined with each other and individually work on simple to complex processes.</p>

    <ul class="list-disc ml-6 space-y-1" font-semibold>
     <li> Cloud-based control of Heidolph devices, sensors and third-party devices, connected to a gateway</li>
     <li> Freely combine devices from the portfolio and let them interact</li>
     <li> Map processes on the dashboard individually</li>
      <li> Continuous expansion of the portfolio of compatible devices</li>
      <li> Support of process design by OSPIN</li>
      <li> Expandable: New devices can be added to the platform</li>
      <li> Connected devices can work asynchronously in multiple processes</li>

    </ul>
  </div>

  <!-- Resources (responsive + full borders) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Data / Resources</h3>
    <div class="min-w-[680px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr>
            <td>Hei-PROCESS Cloud – Quick Start Guide</td>
            <td class="text-center">
              <a href="https://heidolph-instruments.com/documents/operation%20manuals/OSPIN/QuickStart_OSPIN.pdf"
                 target="_blank" rel="noopener"
                 class="inline-block px-3 py-1 rounded bg-[#245790] text-white">Download</a>
            </td>
          </tr>
          <tr>
            <td>At-a-glance – Hei-Process (EN)</td>
            <td class="text-center">
              <a href="https://heidolph-instruments.com/documents/at%20a%20glance%20charts/2022/Hei-PROCESS-Core%20Cloud%20Solution/At-a-glance-Hei-Process-EN.pdf"
                 target="_blank" rel="noopener"
                 class="inline-block px-3 py-1 rounded bg-[#245790] text-white">Download</a>
            </td>
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

  "sphericalplate-5d": {
    id: "sphericalplate-5d-sp5d",
    name: "Kugelmeiers cell culture plates – Sphericalplate 5D (SP5D)",
    image: SphericalPlate,
    bannerImg: Banner1,
    logo: Heidolph,
    altText: "Kugelmeiers Sphericalplate 5D (SP5D) – smart 3D cell cultivation plate",
    meta: {
      title: "Kugelmeiers Sphericalplate 5D (SP5D) | Smart 3D Cell Cultivation | Inkarp India",
      description:
        "Sphericalplate 5D (SP5D) enables uniform, size-controlled 3D spheroids with high yield—12 wells × 750 microwells (up to 9,000 spheroids/plate). Ready-to-use, automation-friendly, and ideal for translational workflows. Distributed and serviced by Inkarp India.",
      keywords: [
        "Kugelmeiers",
        "Sphericalplate 5D",
        "SP5D",
        "3D cell culture",
        "spheroids",
        "organoids",
        "uniform spheroids",
        "Inkarp India",
        "Heidolph distribution"
      ],
      altText: "Sphericalplate 5D (SP5D) 3D cell culture plate"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind)
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 549-16000-00</strong></p>
    <p>
     Revolutionize your cell culture research with Kugelmeiers' Sphericalplate 5D (SP5D) - the ultimate solution for smart cell cultivation. Inkarp Instruments, with its extensive distribution and service network across India, brings you this innovative technology. The Heidolph SP5D's unique spherical design enhances cell growth, differentiation, and viability.
    </p>

    <p>
      The Sphericalplate 5D (SP5D) is a 3D cell culture plate for the formation of uniform, standardized, and size controlled spheroids in high quality and yield. It also allows you to effortlessly scale up and further translate into diagnostic or clinical applications. Simultaneously, it increases the reproducibility of subsequent tests, as you always start your experiments with identical initial conditions due to the low size variance of the cultured cell spheroids.
    </p>

    <p>
     Per SP5D, you have twelve wells with 750 microwells each available. The patented geometry with special surface coating allows the integration of each individual cell into a 3D agglomerate in a controlled manner. Thus, up to 9,000 spheroids of uniform size grow while avoiding the formation of necrotic nuclei. In addition, you have the option to conveniently perform monolayer cell culture for the comparison studies in the twelve other wells of the same plate.
    </p>

    <p>
    Working with the ready-to-use SP5D is particularly user-friendly, so you will quickly get familiar with the handling of your new platform: The cultivation does not require any pre-treatment or centrifugation steps after seeding your cells. Changing the media is also particularly convenient by simple pipetting, as the height of the microwells has been designed to retain cell clusters. In addition, the platform is compatible with standard automation units.
    </p>
  </div>

  <!-- Resources (responsive + full borders) -->
  <div class="mt-8 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200 overflow-x-auto">
    <h3 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-4 text-center">Technical Data / Resources</h3>
    <div class="min-w-[680px]">
      <table class="w-full text-sm bg-white border border-gray-300 rounded-xl overflow-hidden border-separate" style="border-spacing:0">
        <tbody class="[&>tr>*]:border [&>tr>*]:border-gray-300 [&>tr>*]:p-3 [&>tr>*]:align-middle [&>tr]:even:bg-[#FAFAFA]">
          <tr>
            <td>Life Science Solutions – Smart cell cultivation (PDF)</td>
            <td class="text-center">
              <a href="https://heidolph-instruments.com/products/14%20Smart%20cell%20cultivation/Flyer/Folder-SK-Life%20Science-EN.pdf" target="_blank" rel="noopener" class="inline-block px-3 py-1 rounded bg-[#245790] text-white">Download</a>
            </td>
          </tr>
          <tr>
            <td>At-a-glance – Kugelmeiers (PDF)</td>
            <td class="text-center">
              <a href="https://heidolph-instruments.com/documents/at%20a%20glance%20charts/2022/At-a-glance-Kugelmeiers-EN.pdf" target="_blank" rel="noopener" class="inline-block px-3 py-1 rounded bg-[#245790] text-white">Download</a>
            </td>
          </tr>
          <tr>
            <td>Sphericalplate 5D – Technical properties (PDF)</td>
            <td class="text-center">
              <a href="https://heidolph-instruments.com/documents/Brochures-Catalogs/2022/Kugelmeiers/01-006-003-35-0-Kugelmeiers-Techn%20Manual-EN.pdf" target="_blank" rel="noopener" class="inline-block px-3 py-1 rounded bg-[#245790] text-white">Download</a>
            </td>
          </tr>
          <tr>
            <td>Flyer – How to use the SP5D (PDF)</td>
            <td class="text-center">
              <a href="https://heidolph-instruments.com/documents/Brochures-Catalogs/2022/Kugelmeiers/01-006-003-32-0-Kugelmeiers-Manual-EN.pdf" target="_blank" rel="noopener" class="inline-block px-3 py-1 rounded bg-[#245790] text-white">Download</a>
            </td>
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

}