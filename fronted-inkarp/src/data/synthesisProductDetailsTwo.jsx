import React, { useState } from "react";
// Logos & Images
import Heidolph from '/src/assets/PrincipalLogos/RowOne/Heidolph.svg';

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

import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";
import Banner3 from "/images/products/Banner/Banner3.jpg";

export const SynthesisProductDetailsTwo = {
  "reax-top": {
    id: "reax-top",
    name: "Reax top Shakers & Mixers",
    image: ReaxTop,
    bannerImg: Banner1,
    logo: Heidolph,
    videoId: "InJriQgw9VU",
    altText: "Heidolph Reax top Shakers & Mixers",
    meta: {
      title: "Heidolph Reax top Shakers & Mixers | Inkarp India",
      description:
        "The classic vortexer with 5 mm orbit for fast, reliable mixing up to 3,200 rpm. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Reax top",
        "vortex mixer",
        "lab shaker",
        "5 mm orbit",
        "3200 rpm",
        "Inkarp India"
      ],
      altText: "Reax top shaker"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 541-10000-00</strong></p>
    <p><strong>The classic with 5 mm shaking orbit</strong></p>
    <p>
     The Reax top series is designed for advanced laboratory and industrial use, featuring high-speed mixing, precise temperature control, and intuitive operation. As Heidolph's trusted partner in India, we provide comprehensive support, including installation, training, and maintenance, to ensure optimal performance and reliability. With Heidolph's Reax top Shakers & Mixers and Inkarp's expert service, researchers and industries can achieve accurate and reproducible results, driving innovation and discovery in various fields.
    </p>
    <p>
      This model is particularly suitable for simple mixing tasks. In short-term operation mode, the shaking motion is triggered by pressure on the test tube tray. This mode is suitable for mixing up solutions, for example.
    </p>
    <p>Persistent cell pellets can be dissolved gently but powerfully in continuous operation. With a speed of up to 3,200 rpm and a shaking orbit of 5 mm, reliable and uniform distribution of solids, and homogenization of highly viscous media are guaranteed.</p>
  </div>
  </div>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: {
      specs: {
        ' Motion': "Vibrating",
        "Rotation speed range": "200 – 3,200 rpm",
        "Operating mode": "Automatic or continuous",
        "Orbit / Stroke": "5 mm",
        ' Timer': "—",
        "Power input": "51 W",
        "Platform size": "—",
        "Max. load": "—",
        "Overheat protection": "Self-resetting",
        "Protection class (IEC 60529)": "IP 22"
      }
    }
  },

  "reax-control": {
    id: "reax-control",
    name: "Reax control Shakers & Mixers",
    image: ReaxControl,
    bannerImg: Banner1,
    logo: Heidolph,
    videoId: "InJriQgw9VU",
    altText: "Heidolph Reax control Shakers & Mixers",
    meta: {
      title: "Heidolph Reax control Shakers & Mixers | Inkarp India",
      description:
        "The precise vortex mixer with speed scaling, up to 2,500 rpm and 5 mm orbit. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Reax control",
        "vortex mixer",
        "lab shaker",
        "5 mm orbit",
        "2500 rpm",
        "Inkarp India"
      ],
      altText: "Reax control shaker"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 541-11000-00</strong></p>
    <p><strong>The precise one with speed scaling</strong></p>
    <p>
      The Reax control series features intuitive touchscreen operation, precise speed and temperature control, and advanced programming options. With Heidolph's high-quality products and our comprehensive support, including installation, training, and maintenance, customers can rely on optimal performance, accuracy, and reliability. As Heidolph's trusted partner in India, Inkarp ensures seamless integration and expert service for Reax control Shakers & Mixers, empowering researchers and industries to achieve exceptional results.
    </p>
<p>All the outstanding features of the Reax Top's "little brother" can be found in this model: a rotational speed of up to 2,500 rpm and a 5 mm shaking orbit.</p>
    <p>
    The electronic speed control and the scaling of the speed display allow precise settings. Applications that require a determined speed are thus shaken more gently. Shear force-sensitive organisms remain particularly protected by the constant speed in the low range.
    </p>
  </div>
  </div>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: {
      specs: {
        ' Motion': "Vibrating",
        "Rotation speed range": "0 – 2,500 rpm",
        "Operating mode": "Automatic or continuous",
        "Orbit / Stroke": "5 mm",
        ' Timer': "—",
        "Power input": "51 W",
        "Platform size": "—",
        "Max. load": "—",
        "Overheat protection": "Self-resetting",
        "Protection class (IEC 60529)": "IP 22"
      }
    }
  },

  "multi-reax": {
    id: "multi-reax",
    name: "Multi Reax Shakers & Mixers",
    image: MultiReax,
    bannerImg: Banner1,
    logo: Heidolph,
    videoId: "InJriQgw9VU",
    altText: "Heidolph Multi Reax Shakers & Mixers",
    meta: {
      title: "Heidolph Multi Reax Shakers & Mixers | Inkarp India",
      description:
        "The versatile multi-vortexer with 3 mm orbit, 150–2,000 rpm, large tube capacity, and 999 min timer. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Multi Reax",
        "multi vortexer",
        "shaker",
        "mixer",
        "3 mm orbit",
        "2000 rpm",
        "Inkarp India"
      ],
      altText: "Multi Reax shaker"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 545-10000-00</strong></p>
    <p><strong>The versatile model with a 3 mm shaking orbit</strong></p>

    <p>
     The Multi Reax series enables simultaneous shaking and mixing of multiple samples, saving time and increasing productivity. Heidolph's innovative technology and our comprehensive support, including installation, training, and maintenance, customers can rely on optimal performance, accuracy, and reliability. As Heidolph's trusted partner in India, Inkarp provides expert service and support for Multi Reax Shakers & Mixers.
    </p>

    <p>
     A high sample throughput is one of the daily challenges that analytical laboratories have to meet. Often several analyses have to be prepared simultaneously. To simplify these processes and the general workflow, a multi-vortexer has been developed.
    </p>

    <p>
     It can accommodate between 12 (16-32 mm diameter) and 26 (10-16 mm diameter) tubes (Falcon tubes or Greiner tubes). Reaction vessels with snap-on lids ("Eppis" or Eppendorf cups) are also safely fixed. The 3 mm shaking orbit and a speed control between 150 and 2,000 rpm guarantee excellent mixing results.
    </p>
    <p>The integrated timer (up to 999 minutes) enables the automatic termination of the shaking function. After the time has expired, a signal tone is emitted. In this way, you can be sure that your work process will proceed continuously, as several tasks have to be fulfilled at the same time.</p>
  </div>
  </div>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: {
      specs: {
        ' Motion': "Vibrating",
        "Rotation speed range": "150 – 2,000 rpm",
        "Operating mode": "Timer or continuous",
        "Orbit / Stroke": "3 mm",
        ' Timer': "Yes (max. 999 min)",
        "Power input": "50 W",
        "Platform size": "—",
        "Max. load": "1.5 kg",
        "Overheat protection": "Self-resetting",
        "Protection class (IEC 60529)": "IP 30"
      }
    }
  },
  "titramax-101": {
    id: "titramax-101",
    name: "Titramax 101 Shakers & Mixers",
    image: TitraMax101,
    bannerImg: Banner1,
    logo: Heidolph,
    videoId: "InJriQgw9VU",
    altText: "Heidolph Titramax 101 Shaker",
    meta: {
      title: "Heidolph Titramax 101 Shakers & Mixers | Inkarp India",
      description:
        "Compact, powerful shaker with 3 mm orbit, 150–1,350 rpm, 120-min timer, and 2 kg max load. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Titramax 101",
        "shaker",
        "plate shaker",
        "3 mm orbit",
        "1350 rpm",
        "Inkarp India"
      ],
      altText: "Titramax 101"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 544-11300-00</strong></p>
    <p><strong>The powerful with a 3 mm shaking orbit</strong></p>

    <p>
 The Titramax 101 is a versatile and compact shaker, ideal for mixing, shaking, and stirring various samples. With Heidolph's high-quality products and our comprehensive support, including installation, training, and maintenance, customers can rely on optimal performance, accuracy, and reliability. As Heidolph's trusted partner in India, Inkarp provides expert service and support for Titramax 101 Shakers & Mixers.
    </p>

    <p>
     With a capacity of four multi-well plates, the Titramax 101 ensures more intensive mixing results. With a 3 mm orbit, this model is particularly suitable for processes in which solids must be distributed or dissolved in the cavities.
    </p>

    <p>
    The speed setting of 150-1,350 rpm guarantees a continuously variable adjustment. Use the integrated timer with a runtime of up to 120 minutes for defined processes. The shaker can of course also be used in continuous operation.
    </p>
  </div>
  </div>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: {
      specs: {
        ' Motion': "Vibrating",
        "Rotation speed range": "150 – 1,350 rpm",
        "Operating mode": "Timer or continuous",
        "Orbit / Stroke": "3 mm",
        ' Timer': "Yes (max. 120 min)",
        "Power input": "31 W",
        "Platform size": "220 × 220 mm",
        "Max. load": "2 kg",
        "Overheat protection": "Self-resetting",
        "Protection class (IEC 60529)": "IP 30"
      }
    }
  },

  "titramax-100": {
    id: "titramax-100",
    name: "Titramax 100 Shakers & Mixers",
    image: TitraMax100,
    bannerImg: Banner1,
    logo: Heidolph,
    videoId: "InJriQgw9VU",
    altText: "Heidolph Titramax 100 Shaker",
    meta: {
      title: "Heidolph Titramax 100 Shakers & Mixers | Inkarp India",
      description:
        "Gentle plate shaker with 1.5 mm orbit, 150–1,350 rpm, and 120-min timer—ideal for cell cultures. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Titramax 100",
        "shaker",
        "microplate shaker",
        "1.5 mm orbit",
        "Inkarp India"
      ],
      altText: "Titramax 100"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 544-11200-00</strong></p>
    <p><strong>The gentle with a 1.5 mm shaking orbit</strong></p>

    <p>
     Our company prides itself on offering high-quality laboratory equipment and exceptional customer service. The Titramax 100 is a reliable and efficient shaker and mixer, ideal for various laboratory applications. With its robust design and advanced features, it ensures precise and consistent results. As an authorized distributor, we provide comprehensive support, including installation, maintenance, and repair services. The best possible experience with their Titramax 100 Shakers & Mixers.
    </p>

    <p>
     This shaker is particularly suitable for processes in which cell cultures must be kept in gentle motion.
    </p>

    <p>
     The nutrients are excellently distributed. This is guaranteed by the 1.5 mm shaker orbit and a speed range of 150-1,350 rpm.
    </p>
    <p>The integrated timer can be set for up to 120 minutes; an acoustic signal sounds when the interval has expired.</p>
  </div>
  </div>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: {
      specs: {
        ' Motion': "Vibrating",
        "Rotation speed range": "150 – 1,350 rpm",
        "Operating mode": "Timer or continuous",
        "Orbit / Stroke": "1.5 mm",
        ' Timer': "Yes (max. 120 min)",
        "Power input": "31 W",
        "Platform size": "220 × 220 mm",
        "Max. load": "2 kg",
        "Overheat protection": "Self-resetting",
        "Protection class (IEC 60529)": "IP 30",
      }
    }
  },

  "titramax-1000": {
    id: "titramax-1000",
    name: "Titramax 1000 Shakers & Mixers",
    image: TitraMax1000,
    bannerImg: Banner1,
    logo: Heidolph,
    videoId: "InJriQgw9VU",
    altText: "Heidolph Titramax 1000 Shaker",
    meta: {
      title: "Titramax 1000 Shakers & Mixers Distributor And Service Provider In India - Heidolph - Inkarp Instruments Pvt Ltd",
      description:
        "Discover the efficiency of Titramax 1000 Shakers & Mixers. Ideal for labs, ensure accurate mixing with Inkarp Instruments’ reliable solutions, backed by extensive distribution and service networks across India.",
      keywords: [
        "Heidolph",
        "Titramax 1000",
        "plate shaker",
        "temperature control",
        "1.5 mm orbit",
        "Inkarp India"
      ],
      altText: "Titramax 1000"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind + your colors & fonts)
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 544-12200-00</strong></p>
    <p><strong>The one with temperature-control</strong></p>

    <p>
     Inkarp Instruments is a leading distributor and service provider of Titramax 1000 Shakers & Mixers from Heidolph in India. We offer high-quality laboratory equipment and expert support. The Titramax 1000 is a versatile and reliable shaker and mixer, suitable for various applications. we ensure prompt and efficient support, guaranteeing optimal performance of your Titramax 1000. Trust us for your laboratory equipment needs.
    </p>
    <p>The largest model of the Titramax series contains all the features of the Titramax 100: a shaking orbit of 1.5 mm, speeds of up to 1,350 rpm, and a timer.</p>

    <p>
     With a storage capacity of up to six multi-well plates, a higher number of samples can be processed. The option to integrate the Titramax 1000 into the modular incubation system also allows temperature-controlled processes to be carried out without problems.
    </p>

    <p>
     With this model, easy loading and removal of the plates can be carried out comfortably due to the recess and the spacings in the rubber mat.
    </p>
  </div>
  </div>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: {
      specs: {
        ' Motion': "Vibrating",
        "Rotation speed range": "150 – 1,350 rpm",
        "Operating mode": "Timer or continuous",
        "Orbit / Stroke": "1.5 mm",
        ' Timer': "Yes (max. 120 min)",
        "Power input": "31 W",
        "Platform size": "290 × 258 mm",
        "Max. load": "5 kg",
        "Overheat protection": "Self-resetting",
        "Protection class (IEC 60529)": "IP 30"

      }
    }
  },

  "rotamax-120": {
    id: "rotamax-120",
    name: "Rotamax 120 Shakers & Mixers",
    image: Rotamax120,
    bannerImg: Banner1,
    logo: Heidolph,
    videoId: "InJriQgw9VU",
    altText: "Heidolph Rotamax 120",
    meta: {
      title: "Rotamax 120 Shakers & Mixers Distributor And Service Provider In India - Heidolph - Inkarp Instruments Pvt Ltd",
      description:
        "Compact orbital shaker (20 mm orbit) with up to 2 kg load, 20–300 rpm, timer to 120 min or continuous, for homogeneous mixing. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Rotamax 120",
        "orbital shaker",
        "laboratory shaker",
        "20 mm orbit",
        "Inkarp India"
      ],
      altText: "Rotamax 120"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 544-41200-00</strong></p>
    <p><strong>The compact one with a maximum loading capacity of 2 kg</strong></p>

    <p>
     Our company offers high-quality laboratory equipment and expert support. The Rotamax 120 is a robust and reliable shaker and mixer, ideal for mixing and shaking tasks. We provide comprehensive services, including installation, maintenance, and repair, ensuring optimal performance. Trust us for your laboratory equipment needs. As Heidolph's trusted partner in India.
    </p>

    <p>Space-saving and with a load weight of up to 2 kg, this shaker can perfectly master all applications.</p>

    <p>
    The variably adjustable speed control (20-300 rpm) and the orbit of 20 mm guarantee homogeneous distribution. Your applications can be carried out in continuous operation or by means of a timer (max. 120 minutes).
    </p>
  </div>
  </div>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: {
      specs: {
        ' Motion': "Orbital",
        "Rotation speed range": "20 – 300 rpm",
        "Operating mode": "Timer or continuous",
        "Orbit / Stroke": "20 mm",
        ' Timer': "Yes (max. 120 min)",
        "Power input": "33 W",
        "Platform size": "220 × 220 mm",
        "Max. load": "2 kg",
        "Overheat protection": "Self-resetting",
        "Protection class (IEC 60529)": "IP 30"
      }
    }
  },

  "unimax-1010": {
    id: "unimax-1010",
    name: "Unimax 1010 Shakers & Mixers",
    image: Unimax1010,
    bannerImg: Banner1,
    logo: Heidolph,
    videoId: "InJriQgw9VU",
    altText: "Heidolph Unimax 1010",
    meta: {
      title: "Unimax 1010 Shakers & Mixers Distributor And Service Provider In India - Heidolph - Inkarp Insrtuments Pvt Ltd",
      description:
        "Orbital shaker (10 mm orbit) with 30–500 rpm, timer to 99 h 99 min 99 s, RS-232 + Hei-PROCESS semi-automation, and incubation system compatibility. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Unimax 1010",
        "orbital shaker",
        "laboratory mixer",
        "Hei-PROCESS",
        "RS-232",
        "Inkarp India"
      ],
      altText: "Unimax 1010"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind + brand colors/fonts)
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 543-12310-00</strong></p>

    <p>
     Heidolph's Unimax 1010 is a reliable and versatile laboratory mixer, ideal for various applications. We provide comprehensive services, including installation, maintenance, and repair. Trust us for high-quality Heidolph laboratory equipment and expert support. Contact us today to learn more about Unimax 1010 and our services, and experience Heidolph's excellence in laboratory mixing and shaking solutions.
    </p>

    <p>
     This shaker can be integrated into the modular incubation system, and it is therefore ideal for all temperature-controlled shaking tasks. By means of the integrated RS 232 interface and in conjunction with the software Hei-PROCESS, processes can be realized semi-automatically. In addition, it is possible to operate several shakers of this size in one climate chamber.
    </p>

    <p>
     With a speed of 30-500 rpm and an orbit of 10 mm, samples are optimally kept in motion. Time-dependent applications can be performed without any problems by using a timer (max. 99 h 99 min 99 S). In addition, the automatic restart (e.g. after a power failures) can be regulated by means of a button.
    </p>
  </div>

    </div>
  </div>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: {
      specs: {
        ' Motion': "Orbital",
        "Rotation speed range": "30 – 500 rpm",
        "Operating mode": "Timer function / continuous operation",
        "Orbit / Stroke": "10 mm",
        ' Timer': "Yes (max. 99 h 99 min 99 s)",
        "Power input": "50 W",
        "Platform size": "—",
        "Max. load": "5 kg",
        "Overheat protection": "Self-resetting",
        "Protection class (IEC 60529)": "IP 40"
      }
    }
  },

  "unimax-2010": {
    id: "unimax-2010",
    name: "Unimax 2010 Shakers & Mixers",
    image: Unimax2010,
    bannerImg: Banner1,
    logo: Heidolph,
    videoId: "InJriQgw9VU",
    altText: "Heidolph Unimax 2010",
    meta: {
      title: "Unimax 2010 Shakers & Mixers Distributor And Service Provider In India - Heidolph - Inkarp Instruments Pvt Ltd",
      description:
        "Resilient orbital shaker with 20 mm orbit, 20–400 rpm, 10 kg max load, 390×340 mm platform, and timer up to 120 min. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Unimax 2010",
        "orbital shaker",
        "laboratory mixer",
        "Inkarp India",
        "10 kg load"
      ],
      altText: "Unimax 2010"
    },

    description: `
      <div class="font-[Roboto] text-[#333]">
        <div class="space-y-3">
          <p><strong>P/N: 542-10020-00</strong></p>
          <p><em>The resilient one with a maximum loading capacity of 10 kg</em></p>
          <p>
           Unimax 2010 is a high-performance laboratory mixer, designed for heavy-duty applications. We provide comprehensive services, including installation, maintenance, and repair. Trust us for high-quality Heidolph's laboratory equipment and expert support. Experience the Unimax 2010's exceptional mixing and shaking capabilities, backed by Heidolph's excellence and our dedicated service.
          </p>
          <p>
          The Unimax 2010 is the optimal model for increased sample throughput. With a usable area of 390 x 340 mm and the possibility of a multi-story structure, space is used effectively.
          </p>
          <p>
           The orbit of 20 mm and speeds between 20 and 400 rpm guarantee gentle mixing of all samples. This shaker can be operated either continuously or with an integrated timer (max. 120 min).
          </p>
        </div>
        </div>
      </div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: {
      specs: {
        'Motion': "Orbital",
        "Rotation speed range": "20 – 400 rpm",
        "Operating mode": "Timer or continuous",
        "Orbit / Stroke": "20 mm",
        ' Timer': "Yes (max. 120 min)",
        "Power input": "115 W",
        "Platform size": "390 × 340 mm",
        "Max. load": "10 kg",
        "Overheat protection": "Self-resetting",
        "Protection class (IEC 60529)": "IP 20"
      }
    }
  },

  "duomax-1030": {
    id: "duomax-1030",
    name: "Duomax 1030 Shakers & Mixers",
    image: DuoMax,
    bannerImg: Banner1,
    logo: Heidolph,
    videoId: "InJriQgw9VU",
    altText: "Heidolph Duomax 1030",
    meta: {
      title: "Duomax 1030 Shakers & Mixers Distributor And Service Provider In India - Heidolph - Inkarp Instruments Pvt Ltd",
      description:
        "Compact rocking shaker with 2–50 rpm, 5 kg max load, 290×258 mm platform, timer up to 120 min, and optional incubator integration. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Duomax 1030",
        "rocking shaker",
        "laboratory mixer",
        "Inkarp India",
        "5 kg load"
      ],
      altText: "Duomax 1030"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 543-32205-00</strong></p>

    <p>
    Duomax 1030 is a versatile and compact laboratory mixer, ideal for small spaces. We provide comprehensive services, including installation, maintenance, and repair. Trust us for high-quality Heidolph laboratory equipment and expert support. Experience the Duomax 1030's efficient mixing and shaking capabilities, backed by Heidolph's excellence and our dedicated service.
    </p>

    <p>
     Containers are safely fixed on the anti-slip rubber mat even at high speeds. The speed is variably adjustable between 2 and 50 rpm. The shaker can be operated in continuous operation or with a timer (max. 120 minutes).
    </p>
    <p>A tilt angle of 5° is recommended for applications for which a gentle movement amplitude is suitable.</p>
    <p>Additionally, the Duomax 1030 can be integrated into the modular incubator model.</p>
  </div>
  </div>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: {
      specs: {
        ' Motion': "Rocking",
        "Rotation speed range": "2 – 50 rpm",
        "Operating mode": "Timer or continuous",
        "Orbit / Stroke": "—",
        ' Timer': "Yes (max. 120 min)",
        "Power input": "115 W",
        "Platform size": "290 × 258 mm",
        "Max. load": "5 kg",
        "Overheat protection": "Self-resetting",
        "Protection class (IEC 60529)": "IP 20"
      }
    }
  },

  "promax-1020": {
    id: "promax-1020",
    name: "Promax 1020 Shakers & Mixers",
    image: ProMax1020,
    bannerImg: Banner1,
    logo: Heidolph,
    videoId: "InJriQgw9VU",
    altText: "Heidolph Promax 1020",
    meta: {
      title: "Promax 1020 Shakers & Mixers Distributor & Service Provider In India",
      description:
        "Temperature-controllable reciprocating shaker with 32 mm stroke, 30–250 rpm, 5 kg load, 290×258 mm platform, and timer up to 999 min. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Promax 1020",
        "reciprocating shaker",
        "temperature controlled shaker",
        "laboratory mixer",
        "Inkarp India",
        "5 kg load"
      ],
      altText: "Promax 1020"
    },
    description: `
      <div class="font-[Roboto] text-[#333]">
        <div class="space-y-3">
          <p><strong>P/N: 543-22332-00</strong></p>
          <p><em>The temperature-controlled model with load capacities of 5 kg</em></p>

          <p>
          Heidolph's Promax 1020 is a robust and reliable laboratory mixer, designed for heavy-duty applications. We provide comprehensive services, including installation, maintenance, and repair. Trust us for high-quality Heidolph laboratory equipment and expert support. Experience the Promax 1020's exceptional mixing and shaking capabilities, backed by Heidolph's excellence and our dedicated service.
          </p>

          <p>
          The 1000 series reciprocating shaker can be easily integrated into the modular incubator system. This makes it possible to successfully run temperature controlled applications. The Promax 1020 can also be used to purify proteins at 4°C. With a platform size of 290 x 258 mm, there is enough space for the vessels used.
          </p>
          <p>With a stroke of 32 mm and a speed of 30 — 250 rpm, a proper separation of the samples is guaranteed. The integrated timer function enables unattended operation so that you can concentrate on other tasks without worries. After the set time has elapsed, the acoustic signal signals the end of the shaking process.</p>
          <p>Supplemented with the appropriate holder for separatory funnels, a maximum of four pieces between 50 and 100 ml can be securely attached to the Promax 1020.</p>
        </div>
      
        </div>
      </div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: {
      specs: {
        "Motion": "Reciprocating",
        "Rotation speed range": "30 – 250 rpm",
        "Operating mode": "Timer or continuous",
        "Orbit / Stroke": "32 mm",
        "Timer": "Yes (max. 999 min)",
        "Power input": "50 W",
        "Platform size": "290 × 258 mm",
        "Max. load": "5 kg",
        "Overheat protection": "Self-resetting",
        "Protection class (IEC 60529)": "IP 40",
      }
    }
  },

  "promax-2020": {
    id: "promax-2020",
    name: "Promax 2020 Shakers & Mixers",
    image: ProMax2020,
    bannerImg: Banner1,
    logo: Heidolph,
    videoId: "InJriQgw9VU",
    altText: "Heidolph Promax 2020",
    meta: {
      title: "Promax 2020 Shakers & Mixers Distributor And Service Provider In India - Heidolph - Inkarp Insrtuments Pvt Ltd",
      description:
        "Resilient reciprocating shaker with 20 mm stroke, 20–400 rpm, 10 kg max load, 390×340 mm platform, and timer up to 120 min. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Promax 2020",
        "reciprocating shaker",
        "laboratory mixer",
        "Inkarp India",
        "10 kg load"
      ],
      altText: "Promax 2020"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 542-20020-00</strong></p>
    <p><em>The resilient one with load capacities of 10 kg</em></p>

    <p>
      Promax 2020 is a high-performance laboratory mixer, designed for demanding applications. We provide comprehensive services, including installation, maintenance, and repair. Trust us for high-quality Heidolph laboratory equipment and expert support. Experience the Promax 2020's advanced mixing and shaking capabilities, backed by Heidolph's excellence and our dedicated service.
    </p>

    <p>
     With a usable area of 390 x 340 mm, the large Promax is particularly suitable when the use of large or multiple vibrating funnels is required. In conjunction with the appropriate assembly parts, the device can be expanded by a second floor.
    </p>

    <p>
     This shaker has an integrated timer for up to 120 minutes. An acoustic warning signals the end of the set time and the shaking process is also stopped. A stroke of 20 mm combined with a speed of 20 — 400 rpm guarantees clean phase separation and efficient extraction results.
    </p>
  </div>
  </div>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: {
      specs: {
        "Motion": "Reciprocating",
        "Rotation speed range": "20 – 400 rpm",
        "Operating mode": "Timer or continuous",
        "Orbit / Stroke": "20 mm",
        "Timer": "Yes (max. 120 min)",
        "Power input": "115 W",
        "Platform size": "390 × 340 mm",
        "Max. load": "10 kg",
        "Overheat protection": "Self-resetting",
        "Protection class (IEC 60529)": "IP 20",
      }
    }

  },

  "polymax-1040": {
    id: "polymax-1040",
    name: "Polymax 1040 Shakers & Mixers",
    image: PolyMax1040,
    bannerImg: Banner1,
    logo: Heidolph,
    videoId: "InJriQgw9VU",
    altText: "Heidolph Polymax 1040",
    meta: {
      title: "Polymax 1040 Shakers & Mixers Distributor And Service Provider In India - Heidolph - Inkarp Instruments Pvt Ltd",
      description:
        "Wave-motion shaker (2–50 rpm) with 5 kg load and 290×258 mm platform. Timer up to 120 min and compatible with incubator system for temperature-controlled applications. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Polymax 1040",
        "wave shaker",
        "laboratory mixer",
        "Inkarp India",
        "5 kg load"
      ],
      altText: "Polymax 1040"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind + #BE0010 / #E63946 / #F5F5F5 with font-[MaxOT]/font-[Roboto])
    description: `
      <div class="font-[Roboto] text-[#333]">
        <div class="space-y-3">
          <p><strong>P/N: 543-42205-00</strong></p>
          <p><em>The one with temperature-control</em></p>

          <p>
        Polymax 1040 is a versatile and compact laboratory mixer, ideal for various applications. We provide comprehensive services, including installation, maintenance, and repair. Trust us for high-quality Heidolph laboratory equipment and expert support. Experience the Polymax 1040's efficient mixing and shaking capabilities, backed by Heidolph's excellence and our dedicated service.
          </p>

          <p>
           The 1000 series device can be integrated into the incubation system. This makes temperature-controlled applications with the Polymax 1040 possible.
          </p>
          <p>With a load weight of up to 5 kg, all the required samples can be moved on this platform wave shaker. The speed can be adjusted between 2 - 50 rpm and the device can be operated either continuously or with a timer (max. 120 minutes).</p>
        </div>
        </div>
      </div>
      `,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: {
      specs: {
        "Motion": "Wave",
        "Rotation speed range": "2 – 50 rpm",
        "Operating mode": "Timer or continuous",
        "Orbit / Stroke": "–",
        "Timer": "Yes (max. 120 min)",
        "Power input": "115 W",
        "Platform size": "290 × 258 mm",
        "Max. load": "5 kg",
        "Overheat protection": "Self-resetting",
        "Protection class (IEC 60529)": "IP 40",
      }
    }

  },

  "polymax-2040": {
    id: "polymax-2040",
    name: "Polymax 2040 Shakers & Mixers",
    image: PolyMax2040,
    bannerImg: Banner1,
    logo: Heidolph,
    videoId: "InJriQgw9VU",
    altText: "Heidolph Polymax 2040",
    meta: {
      title: "Polymax 2040 Shakers & Mixers Distributor And Service Provider In India - Heidolph - Inkarp Instruments Pvt Ltd",
      description:
        "Resilient wave-motion shaker (2.5–50 rpm) with 10 kg max load and 390×340 mm platform. Timer up to 120 min; stackable 2nd tier for increased throughput. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Polymax 2040",
        "wave shaker",
        "laboratory mixer",
        "Inkarp India",
        "10 kg load"
      ],
      altText: "Polymax 2040"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind + #BE0010 / #E63946 / #F5F5F5 with font-[MaxOT]/font-[Roboto])
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 542-40005-00</strong></p>
    <p><em>The resilient one</em></p>
    <p>
     Polymax 2040 is a high-performance laboratory mixer, designed for advanced applications. We provide comprehensive services, including installation, maintenance, and repair. Trust us for high-quality Heidolph laboratory equipment and expert support. Experience the Polymax 2040's exceptional mixing and shaking capabilities, precision, and durability, backed by Heidolph's excellence and our dedicated service.
    </p>
    <p>
     With a usable area of 390 x 340 mm, the Polymax 2040 is the optimal shaker for increased sample throughput. Since it can be equipped with a second storey, the area can even be doubled.
    </p>
  </div>
  </div>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: {
      specs: {
        "Motion": "Wave",
        "Rotation speed range": "2.5 – 50 rpm",
        "Operating mode": "Timer or continuous",
        "Orbit / Stroke": "–",
        "Timer": "Yes (max. 120 min)",
        "Power input": "115 W",
        "Platform size": "390 × 340 mm",
        "Max. load": "10 kg",
        "Overheat protection": "Self-resetting",
        "Protection class (IEC 60529)": "IP 20",
      }
    }

  },

  "vibramax-100": {
    id: "vibramax-100",
    name: "Vibramax 100 Shakers & Mixers",
    image: Vibramax100,
    bannerImg: Banner1,
    logo: Heidolph,
    videoId: "InJriQgw9VU",
    altText: "Heidolph Vibramax 100",
    meta: {
      title: "Vibramax 100 Shakers & Mixers Distributor And Service Provider In India - Heidolph - Inkarp Instruments Pvt Ltd",
      description:
        "Compact circular-vibrating shaker with 3 mm orbit, 150–1,350 rpm, 2 kg max load, 220×220 mm platform, and timer up to 120 min. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Vibramax 100",
        "vibrating shaker",
        "laboratory mixer",
        "Inkarp India",
        "2 kg load"
      ],
      altText: "Vibramax 100"
    },

    description: `
  <div class="font-[Roboto] text-[#333]">
    <div class="space-y-3">
      <p><strong>P/N: 544-21200-00</strong></p>
      <p><em>The compact one with a load capacity of 2 kg</em></p>
      <p>
        Heidolph's Vibramax 100 is a compact and versatile laboratory vibrator, ideal for various applications. We provide comprehensive services, including installation, maintenance, and repair. Trust us for high-quality Heidolph laboratory equipment and expert support. Experience the Vibramax 100's efficient vibration and mixing capabilities, backed by Heidolph's excellence and our dedicated service.
      </p>

      <p>
       Due to the 3 mm orbit and the speed of 150 - 1,350 rpm, this circular vibrating shaker is ideal for suspending, for solubility studies and leaching studies.
      </p>
      <p>The optional tension roller attachment offers the option of using different container sizes. In combination with the non-slip rubber mat, the vessels are shaken safely even at high speeds. In addition, a timer with up to 120 minutes is integrated, which triggers an acoustic signal after expiration.</p>
    </div>
    </div>
  </div>
  `,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: {
      specs: {
        "Motion": "Vibrating",
        "Rotation speed range": "150 – 1,350 rpm",
        "Operating mode": "Timer or continuous",
        "Orbit / Stroke": "3 mm",
        "Timer": "Yes (max. 120 min)",
        "Power input": "31 W",
        "Platform size": "220 × 220 mm",
        "Max. load": "2 kg",
        "Overheat protection": "Self-resetting",
        "Protection class (IEC 60529)": "IP 30",
      }
    }

  },

  "reax-20-1-16": {
    id: "reax-20",
    name: "Reax 20 (1–16 rpm) Shakers & Mixers",
    image: Reax20New,
    bannerImg: Banner1,
    logo: Heidolph,
    videoId: "InJriQgw9VU",
    altText: "Heidolph Reax 20 overhead shaker",
    meta: {
      title: "Reax 20 (1-16 rpm) Shakers & Mixers Distributor And Service Provider In India - Heidolph - Inkarp Instruments Pvt Ltd",
      description:
        "Overhead shaker with 1–16 rpm speed range, up to 30 kg load, and capacities for 4/8/12 bottles. Ideal for sedimenting samples across environmental, paint, and materials QA applications. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Reax 20",
        "overhead shaker",
        "laboratory mixer",
        "Inkarp India",
        "30 kg load",
        "1–16 rpm"
      ],
      altText: "Reax 20"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 541-20004-00</strong></p>
    <p><em>The resilient one with a capacity of up to 4 bottles</em></p>

    <p>
     Inkarp authorized Heidolph distributor, offers Reax 20 Shakers & Mixers in India. Heidolph's Reax 20 is a versatile laboratory shaker, providing gentle to intense mixing at 1-16 rpm. Ideal for sensitive applications. Trust us for high-quality Heidolph laboratory equipment and expert support. Experience the Reax 20's precise and controlled mixing capabilities, backed by Heidolph's excellence and our dedicated service.
    </p>

    <p>
     The Reax 20 is an ideal shaker for processing and storing samples that tend to sediment. The fields of application range from environmental technology to paint processing and quality assurance in the materials industry.
    </p>
    <p>The maximum permissible weight is 30 kg, so that samples with a high solid content can also be properly mixed. Since this device sets great forces in motion, it is equipped with an emergency stop switch for your safety.</p>
    <p>This overhead shaker can be ordered with a capacity of 4, 8 or 12 bottles. Also suitable for mixing cylinders or wide-neck bottles.</p>
  </div>

</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: {
      specs: {
        "Motion": "Overhead",
        "Rotation speed range": "1 – 16 rpm",
        "Operating mode": "—",
        "Orbit / Stroke": "—",
        "Timer": "—",
        "Power input": "280 W",
        "Platform size": "—",
        "Max. load": "30 kg",
        "Overheat protection": "Self-resetting",
        "Protection class (IEC 60529)": "IP 21",
      }
    }

  },

  "reax-20-2-32": {
    id: "reax-20-2-32",
    name: "Reax 20 (2–32 rpm) Shakers & Mixers",
    image: Reax20,
    bannerImg: Banner1,
    logo: Heidolph,
    videoId: "InJriQgw9VU",
    altText: "Heidolph Reax 20 overhead shaker (2–32 rpm)",
    meta: {
      title: "Reax 20 (2-32 rpm) Shakers & Mixers Distributor And Service Provider In India - Heidolph - Inkarp Instruments Pvt Ltd",
      description:
        "Overhead shaker with 2–32 rpm, up to 30 kg load, and bottle capacities of 4/8/12. Ideal for sedimenting samples across environmental, paint, and materials QA workflows. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Reax 20",
        "overhead shaker",
        "laboratory mixer",
        "Inkarp India",
        "2–32 rpm",
        "30 kg load"
      ],
      altText: "Reax 20 (2–32 rpm)"
    },

    // THEMED, RESPONSIVE CONTENT
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p><strong>P/N: 541-20004-01</strong></p>
    <p><em>The resilient one with a capacity of up to 4 bottles</em></p>

    <p>
     Heidolph's Reax 20 is a reliable and compact laboratory shaker, ideal for mixing and shaking applications at 2-32 rpm. We provide comprehensive services, including installation, maintenance, and repair. Trust us for high-quality Heidolph laboratory equipment and expert support. Experience the Reax 20's efficient and gentle mixing capabilities, backed by Heidolph's excellence and our dedicated service.
    </p>

    <p>
    The Reax 20 is an ideal shaker for processing and storing samples that tend to sediment. The fields of application range from environmental technology to paint processing and quality assurance in the materials industry.
    </p>
 
 <p>   The maximum permissible weight is 30 kg, so that samples with a high solid content can also be properly mixed. Since this device sets great forces in motion, it is equipped with an emergency stop switch for your safety.</p>

    <p>This overhead shaker can be ordered with a capacity of 4, 8 or 12 bottles. Also suitable for mixing cylinders or wide-neck bottles.</p>
   
  </div>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: {
      specs: {
        "Motion": "Overhead",
        "Rotation speed range": "2 – 32 rpm",
        "Operating mode": "—",
        "Orbit / Stroke": "—",
        "Timer": "—",
        "Power input": "280 W",
        "Platform size": "—",
        "Max. load": "30 kg",
        "Overheat protection": "Self-resetting",
        "Protection class (IEC 60529)": "IP 21",
      }
    }

  },

  "reax-2": {
    id: "reax-2",
    name: "Reax 2 Shakers & Mixers",
    image: Reax2,
    bannerImg: Banner1,
    logo: Heidolph,
    videoId: "InJriQgw9VU",
    altText: "Heidolph Reax 2 overhead shaker",
    meta: {
      title: "Reax 2 Shakers & Mixers Distributor And Service Provider In India - Heidolph - Inkarp Instruments Pvt Ltd",
      description:
        "Compact overhead shaker for small volumes with 20–100 rpm, up to 1 kg load. Mix up to 20 tubes (Ø10–18 mm) or use universal rack (230 mm wide, 45–160 mm height). Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Reax 2",
        "overhead shaker",
        "lab mixer",
        "test tube mixer",
        "Inkarp India",
        "small volume shaker",
        "20–100 rpm"
      ],
      altText: "Reax 2 overhead shaker"
    },

    description: `
      <div class="font-[Roboto] text-[#333]">
        <div class="space-y-3">
          <p><strong>P/N: 541-21001-00</strong></p>
          <p><em>The compact one for small volumes</em></p>

          <p>
           Inkarp Instruments authorized Heidolph distributor, offers Reax 2 Shakers & Mixers in India. Compact and reliable, Reax 2 is ideal for small-scale mixing applications. We provide installation, maintenance, and repair services. Trust us for high-quality Heidolph laboratory equipment and expert support.
          </p>

          <p>
           The Reax 2 with the optional adapter for test tubes is designed for simultaneous mixing of up to 20 vessels with diameters of 10-18 mm. This corresponds to the size of classic test tubes or 15 ml Falcon tubes. Alternatively, you can insert your complete rack into the universal adapter (width: 230 mm, height min./max.: 45 mm/160 mm) of the overhead shaker.
          </p>

          <p>
           Equipped with a solid metal frame, its design stands for extreme load capacity and reliability. Guaranteed safety during unattended continuous operation.
          </p>
        </div>
      </div>
      `,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: {
      specs: {
        "Motion": "Overhead",
        "Rotation speed range": "20 – 100 rpm",
        "Operating mode": "—",
        "Orbit / Stroke": "—",
        "Timer": "—",
        "Power input": "27 W",
        "Platform size": "—",
        "Max. load": "1 kg",
        "Overheat protection": "Self-resetting",
        "Protection class (IEC 60529)": "IP 21",
      }
    }

  },

  "titramax-package": {
    id: "titramax-package",
    name: "Titramax Package Shakers & Mixers",
    image: TitramaxPackage,
    bannerImg: Banner1,
    logo: Heidolph,
    // videoId: "InJriQgw9VU",
    altText: "Heidolph Titramax modular incubation package",
    meta: {
      title: "Heidolph Titramax Package | Modular Incubation for Shakers | Inkarp India",
      description:
        "Modular system for mixing, shaking, and tempering—no separate steam cabinet needed. Suits 1000-series shakers: Duomax 1030, Polymax 1040, Titramax 1000, Unimax 1010, Promax 1020. Distributed and serviced by Inkarp India.",
      keywords: [
        "Heidolph",
        "Titramax Package",
        "modular incubation system",
        "platform shaker incubation",
        "Duomax 1030",
        "Polymax 1040",
        "Titramax 1000",
        "Unimax 1010",
        "Promax 1020",
        "Inkarp India"
      ],
      altText: "Titramax Package modular incubation system"
    },

    // THEMED, RESPONSIVE CONTENT (Tailwind)
    description: `
<div class="font-[Roboto] text-[#333]">
  <div class="space-y-3">
    <p class="font-semibold">Adjustable temperature and visual control are key priority for you?</p>
    <p>
     Titramax is a versatile and compact laboratory shaker, ideal for titration and mixing applications. We provide comprehensive services, including installation, maintenance, and repair. Trust us for high-quality Heidolph laboratory equipment and expert support. Experience efficient and precise mixing with Titramax.
    </p>
    <p>
      The unique, modular system lets you do it all: mixing, shaking, and tempering – all without the need for an additional steaming cabinet. Suitable for the 1000-series models of the platform shakers Duomax 1030, Polymax 1040, Titramax 1000, Unimax 1010, and Promax 1020.
    </p>
  </div>

  <!-- Visual: Incubator Principle -->
  <div class="mt-6 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
    <img
      src="/images/products/heidolph/Incubator-Principle-01.webp"
      alt="Incubator principle of Heidolph modular system"
      class="w-full h-auto object-contain"
      loading="lazy"
    />
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