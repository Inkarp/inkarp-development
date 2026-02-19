import ImgZ207MK from "/images/products/Hermle/csm_2020-12-16_20098_Kuehlzentrifuge.png";
import ImgZ216M from "/images/products/Hermle/csm_21080_Z216M_Ansicht2.png";
import ImgZ216MK from "/images/products/Hermle/csm_21080_Z216MK_Ansicht23.png";
import ImgZ327K from "/images/products/Hermle/csm_21126_Hermle_Z_327K_2.jpg";
import ImgZ307 from "/images/products/Hermle/csm_21126_Hermle_Z307_Ansicht2.jpg";
import ImgZ327 from "/images/products/Hermle/csm_21126_Hermle_Z327_Ansicht2.jpg";
import ImgOleum from "/images/products/Hermle/csm_Hermle_Oleum3.jpg";
import ImgZ167M from "/images/products/Hermle/csm_Microlitre_Centrifuge.jpg";
import ImgSieva3 from "/images/products/Hermle/csm_Sieva-3l.jpg";
import ImgZ32HK from "/images/products/Hermle/csm_Z_32_HK_01.jpg";
import ImgZ206A from "/images/products/Hermle/csm-206A.jpg";
import ImgZ366 from "/images/products/Hermle/csm-366.jpg";
import ImgZ366K from "/images/products/Hermle/csm-366K.jpg";
import ImgZ446 from "/images/products/Hermle/csm-446.jpg";
import ImgZ446K from "/images/products/Hermle/csm-446K.jpg";
import ImgCentrifuge1 from "/images/products/Hermle/csm-centrifuge.jpg";
import ImgZ36HK from "/images/products/Hermle/csm-Z36HK.jpg";
import ImgZ130M from "/images/products/Hermle/csm-Z130M.jpg";
import ImgZ207M from "/images/products/Hermle/csm-z207m.jpg";

import ImgZ287A from "/images/products/Hermle/csm-Z287.jpg";
import ImgCentrifuge2 from "/images/products/Hermle/csm-zentrifuge.jpg";

import Hermle from '/src/assets/PrincipalLogos/RowSeven/hermle.jpg';

import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";
import Banner3 from "/images/products/Banner/Banner3.jpg";

export const HermeleProducts = {
  "oleum": {
    id: "centrifuge-oleum",
    name: "Centrifuge OLEUM Oil Test Centrifuge",
    image: ImgOleum,
    bannerImg: Banner3,
    logo: Hermle,
    altText: "Hermle",
    meta: {
      title: "Centrifuge OLEUM Oil Test Centrifuge Distributor & Service Provider In India - Hermle- Inkarp Instruments Pvt Ltd",
      description:
        "Discover the Centrifuge OLEUM Oil Test Centrifuge by Hermle from Inkarp Instruments Pvt Ltd, perfect for precise oil testing and analysis, backed by extensive distribution and service networks across India.",
      keywords: [
        "Centrifuge OLEUM Oil Test Centrifuge",
        "Hermle",
        "OLEUM",
        "oil test centrifuge",
        "ASTM centrifuge",
        "petroleum testing",
        "mineral oil analysis",
        "Inkarp India"
      ],
      altText: "Centrifuge OLEUM Oil Test Centrifuge"
    },

    // THEMED, RESPONSIVE DESCRIPTION (Tailwind + your colors & fonts)
    description: `
<div class="font-[Roboto] text-[#333]">
  <!-- Intro -->
  <div class="space-y-4">
    <p>
      The <strong>Centrifuge OLEUM</strong> by <strong>Hermle</strong>, distributed in India by
      <strong>Inkarp Instruments</strong>, is a compact table-top centrifuge designed for
      <strong>oil test methods</strong>. It is primarily used for determining water content in mineral oils according to ASTM standards.
    </p>
    <p>
      Equipped with a four-place swing-out rotor, it accommodates cushions for oil test tubes in both conical and pear-shaped forms, providing
      flexibility and reliability in petroleum and mineral oil testing applications.
    </p>
  </div>
</div>
`,

    features: [
      { name: "Microprocessor with large LCD display", description: "Ensures clear visibility and easy monitoring of operational parameters for precise control." },
      { name: "Brushless induction drive", description: "Provides maintenance-free operation and enhanced durability for long-term performance." },
      { name: "Motor-driven lid lock with emergency release", description: "Offers secure operation with added safety during high-speed runs and quick access in emergencies." },
      { name: "Audible signal at the end of each run", description: "Notifies the user automatically upon completion of a cycle for convenience and workflow efficiency." },
      { name: "Quick access to samples with tool-free rotor removal", description: "Allows effortless rotor removal without special tools, minimizing downtime between runs." },
      { name: "Active imbalance detection and cut-off", description: "Enhances safety by automatically stopping the centrifuge in case of imbalance or irregular load." },
      { name: "Noise level < 55 dBA at max. speed", description: "Operates quietly, ensuring a comfortable and low-noise laboratory environment." },
      { name: "Stainless steel chamber for durability", description: "Ensures corrosion resistance and easy cleaning for long-term reliability." },
      { name: "Complies with IEC 61010 safety regulations", description: "Certified to meet international safety standards for laboratory equipment." }
    ],

    advantages: [],
    highlights: [
      { name: "Diagnostic program for easy troubleshooting", description: "Built-in diagnostic functions simplify maintenance by identifying issues quickly, ensuring minimal downtime and smooth operation." },
      { name: "Program memory for 99 programs", description: "Stores up to 99 user-defined programs for convenient recall and repeatability of frequent protocols." },
      { name: "Quick-key for short runs", description: "Allows rapid execution of short spin cycles with a single button, saving valuable setup time." },
      { name: "10 acceleration and 10 deceleration rates", description: "Provides flexible control over speed ramp-up and slowdown to protect sensitive samples and optimize separation quality." },
      { name: "Option for unbraked deceleration", description: "Ensures gentle stopping of delicate samples by allowing natural deceleration without braking force." },
      { name: "Permanent indication of preset and actual values", description: "Continuously displays both set and real-time speed, time, and RCF values for clear operational visibility." },
      { name: "Pre-selection of speed or RCF (50/10 increments)", description: "Offers fine-tuned control with adjustable speed or relative centrifugal force in precise increments for reproducible results." },
      { name: "Pre-selection of running time from 10 sec to 99h 59min or continuous", description: "Allows flexible timing options for both quick spins and long-duration runs depending on application needs." },
      { name: "Simple one-knob operation", description: "Intuitive rotary control enables quick navigation and easy adjustments, reducing setup complexity." }
    ],

    faqs: [],
    techSpecs: {
      maxSpeed: "3,000 rpm",
      maxRCF: "2,213 × g",
      maxVolume: "4 × 100 ml",
      speedRange: "200 – 3,000 rpm",
      runningTime: "59m 50s / 10s increments; up to 99h 59m / 1m increments",
      dimensions: "56 × 41 × 64 cm",
      weight: "72 kg",
      noiseLevel: "< 55 dBA",
      compliance: "IEC 61010"
    }
  },

  "sieva-3": {
    id: "centrifuge-sieva-3",
    name: "Centrifuge Sieva 3 Filtration Centrifuge",
    image: ImgSieva3,
    bannerImg: Banner3,
    logo: Hermle,
    altText: "Hermle",
    meta: {
      title: "Centrifuge Sieva 3 Filtration Centrifuge Distributor & Service Provider In India - Hermle- Inkarp Instruments Pvt Ltd",
      description:
        "Discover the Centrifuge Sieva 3 Filtration Centrifuge from Hermle at Inkarp Instruments Pvt Ltd. Efficient, reliable filtration solutions for your lab, backed by extensive distribution and service networks across India..",
      keywords: [
        "Centrifuge Sieva 3 Filtration Centrifuge",
        "Hermle",
        "Sieva 3",
        "filtration centrifuge",
        "liquid solid separation",
        "cake filtration",
        "laboratory centrifuge",
        "Inkarp India"
      ],
      altText: "Centrifuge Sieva 3 Filtration Centrifuge"
    },

    // THEMED, RESPONSIVE DESCRIPTION
    description: `
<div class="font-[Roboto] text-[#333]">
  <!-- Intro -->
  <div class="space-y-4">
    <p>
      <strong>Inkarp Instruments</strong>, a trusted
    Hermle
      partner, offers the <strong>Sieva 3 Filtration Centrifuge</strong> in India, designed for efficient liquid–solid separation
      in research, clinical, and industrial laboratories.
    </p>
    <p>
      The <strong>SIEVA-3</strong> is the advanced version of the SIEVA-2. It allows sample feeding during rotation through a lid opening,
      with solids remaining in the centrifugal basket and liquids draining via a side outlet. Its safety glass inspection window
      enables real-time monitoring.
    </p>
    <p>
      Built with a complete stainless-steel housing, the Sieva 3 resists corrosive agents, making it highly durable.
      It operates on the cake filtration principle: suspension is continuously fed, forming a filter cake inside the rotor,
      while clarified liquid drains through the perforated rotor casing.
    </p>
    <p>
      This centrifuge is especially suited for batch separation of coarse particles or crystalline substances, combining
      robust engineering with versatile applications.
    </p>
  </div>

</div>
`,

    features: [
      { name: "Brushless induction drive", description: "Provides smooth, maintenance-free operation with high reliability and long service life, ensuring consistent performance across multiple runs." },
      { name: "Microprocessor control", description: "Ensures precise regulation of speed, time, and temperature parameters for reproducible and accurate results." },
      { name: "Active imbalance detection and cut-off", description: "Automatically detects imbalance during operation and halts the run to protect the instrument and samples." },
      { name: "One-hand closing with emergency lid lock", description: "Enables quick, ergonomic closure with enhanced safety through an emergency release mechanism." },
      { name: "Quick access to samples", description: "Allows easy and rapid retrieval of samples immediately after centrifugation for improved workflow efficiency." },
      { name: "Autoclavable rotors", description: "Supports sterilization of rotors to maintain contamination-free and hygienic laboratory environments." },
      { name: "Stainless steel chamber and housing", description: "Ensures long-lasting durability and easy cleaning, resistant to corrosion and chemical wear." }
    ],

    highlights: [
      { name: "Splash-proof interface", description: "Protects the display and control panel from accidental spills, ensuring reliable operation even in demanding lab environments." },
      { name: "Memory for up to 99 runs", description: "Stores frequently used programs for quick recall, improving workflow efficiency and repeatability." },
      { name: "Quick-key for short runs", description: "Facilitates rapid execution of brief centrifugation tasks with minimal setup, ideal for quick sample processing." },
      { name: "10 acceleration and 10 deceleration rates", description: "Offers customizable speed ramp-up and slowdown profiles for optimal sample protection and separation quality." },
      { name: "Permanent indication of preset and actual values", description: "Continuously displays target and current parameters, ensuring clear visibility of all centrifugation settings." },
      { name: "Pre-selection of time from 10 sec to 99h 59min or continuous", description: "Provides wide flexibility in timing to accommodate short spins and extended protocols as needed." },
      { name: "Simple one-handed touch operation, glove-friendly", description: "Designed for ergonomic use, allowing easy navigation and control even while wearing laboratory gloves." }
    ],

    faqs: [],
    techSpecs: {
      maxSpeed: "10,000 rpm",
      maxRCF: "7,825 × g",
      maxVolume: "500 ml",
      speedRange: "200 – 10,000 rpm",
      runningTime: "59m 50s / 10s increments; up to 99h 59m / 1m increments; continuous",
      dimensions: "38 × 32 × 50 cm",
      weight: "37 kg",
      housing: "Stainless steel, resistant to corrosive agents",
      rotors: "Autoclavable"
    }
  },

  "z-446": {
    id: "centrifuge-z-446",
    name: "Centrifuge Z 446 Universal Centrifuge",
    image: ImgZ446,
    bannerImg: Banner3,
    logo: Hermle,
    altText: "Hermle",
    meta: {
      title: "Centrifuge Z 446 Centrifuge Z 446 Distributor & Service Provider In India - Hermle- Inkarp Instruments Pvt Ltd",
      description:
        "Discover the Centrifuge Z 446 by Hermle at Inkarp Instruments. Achieve superior results with our reliable, efficient, and easy-to-use centrifuge, backed by extensive distribution and service networks across India.",
      keywords: [
        "Centrifuge Z 446 Centrifuge Z 446, Hermle",
        "Hermle",
        "Z 446",
        "high-capacity centrifuge",
        "universal centrifuge",
        "laboratory centrifuge",
        "swing-out rotor centrifuge",
        "fixed-angle rotor centrifuge",
        "Inkarp India"
      ],
      altText: "Hermle Z 446 Universal Centrifuge"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <!-- Intro -->
  <div class="space-y-4">
    <p>
      <strong>Inkarp Instruments</strong>, a trusted
    Hermle partner,
      offers the <strong>Z 446 Universal Centrifuge</strong> in India. Designed for high-capacity research, clinical, and industrial labs,
      Inkarp provides expert distribution, installation, training, and after-sales support for seamless operation.
    </p>
    <p>
      The <strong>Z 446 and Z 446 K</strong> centrifuges achieve a throughput of up to
      <strong>68 × 15 ml conical tubes</strong> or <strong>28 × 50 ml conical tubes</strong> at max RCF values of 3,434 / 4,346 × g.
      For applications requiring higher speeds, a fixed-angle rotor can reach <strong>14,532 / 16,022 × g</strong> with
      <strong>10 × 50 ml</strong> tubes.
    </p>
    <p>
      The Z 446’s combination of fixed-angle and swing-out rotors makes it highly versatile, meeting the daily demands of clinical,
      industrial, and research laboratories with efficiency.
    </p>
  </div>

</div>
`,

    features: [
      { name: "Brushless induction drive", description: "Delivers powerful, maintenance-free performance with minimal vibration, ensuring reliable and quiet operation during extended use." },
      { name: "Microprocessor control", description: "Provides precise regulation of centrifugation parameters such as speed, RCF, and run time for highly reproducible results." },
      { name: "Active imbalance detection and cut-off", description: "Continuously monitors rotor balance, automatically stopping operation to prevent damage and ensure operator safety." },
      { name: "Motor-driven lid lock", description: "Ensures secure chamber closure and prevents accidental lid opening during operation for enhanced safety." },
      { name: "Automatic rotor identification with overspeed protection", description: "Recognizes installed rotors and automatically limits maximum speed to prevent overspeeding and protect samples." },
      { name: "Audible signal at end of each run", description: "Alerts the user when centrifugation is complete, improving efficiency and multitasking convenience in busy lab environments." },
      { name: "Emergency lid lock", description: "Provides a reliable manual release mechanism for safe access to samples in case of power failure or system interruption." },
      { name: "Stainless steel chamber", description: "Durable, corrosion-resistant construction ensures easy cleaning and long service life, maintaining a hygienic lab environment." },
      { name: "CFC-free refrigeration system (-20°C to +40°C)", description: "Environmentally friendly refrigeration system maintains precise temperature control for sensitive biological or chemical samples." },
      { name: "Autoclavable rotors", description: "Allows sterilization for contamination-free operation and long-term reliability, meeting stringent laboratory hygiene standards." }
    ],

    highlights: [
      { name: "Diagnostic program", description: "Performs automatic system checks to detect issues early and simplify troubleshooting, minimizing downtime and maintenance effort." },
      { name: "Program memory for 99 programs", description: "Stores frequently used centrifugation parameters for quick access, enabling consistent and repeatable workflows." },
      { name: "Quick-key for short runs", description: "Enables instant start of brief centrifugation cycles with a single touch, ideal for rapid sample processing tasks." },
      { name: "Pre-cooling program", description: "Prepares the rotor chamber to the desired temperature before centrifugation, protecting temperature-sensitive samples." },
      { name: "Standstill cooling", description: "Maintains cooling even when the centrifuge is not running, ensuring sample integrity between operations." },
      { name: "10 acceleration and 10 deceleration rates (unbraked option)", description: "Provides full control over speed ramp-up and slowdown, including gentle unbraked deceleration for delicate samples." },
      { name: "Permanent display of preset and actual values", description: "Displays real-time operating parameters alongside target settings for clear, continuous monitoring of processes." },
      { name: "Pre-selection of speed or RCF in 50/10 increments", description: "Allows fine adjustments in small increments, ensuring precise control over centrifugal force and reproducibility." },
      { name: "Running time pre-selection: 10 sec – 99 h 59 min, or continuous", description: "Offers flexible timing control for both short spins and long-term protocols according to application needs." },
      { name: "Simple one-handed operation", description: "User-friendly design enables quick setup and operation with a single hand, even while wearing lab gloves." }
    ],


    techSpecs: {
      maxSpeed: "16,000 rpm",
      maxRCF: "26,328 × g",
      maxVolume: "4 × 750 ml",
      speedRange: "200 – 16,000 rpm",
      temperature: "-20°C to +40°C",
      runningTime: "59 min 50 s / 10 s increments; 99 h 59 min / 1 min increments",
      dimensions: "73 × 39 × 67 cm",
      weight: "111 kg",
      drive: "Brushless induction motor",
      safety: "Automatic rotor ID with overspeed protection; imbalance detection; emergency lid lock",
      chamber: "Stainless steel; autoclavable rotors",
      cooling: "CFC-free refrigeration system with pre-cooling and standstill cooling"
    }
  },

  "z-446-k": {
    id: "centrifuge-z-446k",
    name: "Centrifuge Z 446 K",
    image: ImgZ446K,
    bannerImg: Banner3,
    logo: Hermle,
    altText: "Hermle",
    meta: {
      title: "Centrifuge Z 446 K Centrifuge Z 446 Distributor & Service Provider In India - Hermle- Inkarp Instruments Pvt Ltd",
      description:
        "Discover the Centrifuge Z 446 K - Hermle's trusted solution for efficient separation. Perfect for your lab needs and boosting productivity, backed by extensive distribution and service networks across India.",
      keywords: [
        "Centrifuge Z 446 K Centrifuge Z 446 K, Hermle",
        "Hermle",
        "Z 446 K",
        "laboratory centrifuge",
        "high capacity centrifuge",
        "refrigerated centrifuge",
        "blood bank centrifuge",
        "Inkarp India"
      ],
      altText: "Hermle Z 446 K High Capacity Refrigerated Centrifuge"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <!-- Intro -->
  <div class="space-y-4">
    <p>
      <strong>Inkarp Instruments</strong>, a trusted
      Hermle
      partner, offers the <strong>Z 446 K Centrifuge</strong> in India. Designed for
      <strong>high-capacity research, clinical, and industrial laboratories</strong>, it combines powerful
      refrigeration with versatile rotor options to meet demanding applications.
    </p>
    <p>
      Its huge volume of charge allows centrifugation of up to <strong>4 × 750 ml</strong> samples,
      making it suitable for blood banks, clinical labs, and high-throughput research.
      In addition to the multifunctional swing-out rotor, high-speed fixed-angle rotors
      (up to 6 × 250 ml or 4 × 500 ml) enable fast and efficient separations.
    </p>
    <p>
      The Z 446 K complements Hermle’s large-volume ZK 496 centrifuge series,
      available in floor-standing and space-saving underbench models, both equipped with powerful cooling systems.
    </p>
  </div>
</div>
`,
    features: [
      { name: "Brushless induction drive", description: "Ensures smooth, maintenance-free performance with high torque and minimal noise, offering consistent operation even during extended centrifugation runs." },
      { name: "Microprocessor control", description: "Provides precise regulation of centrifugation parameters, guaranteeing accurate speed, RCF, and time settings for reproducible experimental outcomes." },
      { name: "Active imbalance detection and cut-off", description: "Continuously monitors load balance, automatically halting operation to prevent damage, enhance safety, and protect both samples and equipment." },
      { name: "Motor-driven lid lock", description: "Securely locks the lid during operation, preventing accidental opening and ensuring maximum user safety during high-speed rotations." },
      { name: "Automatic rotor identification with overspeed protection", description: "Automatically detects installed rotors and adjusts allowable speed limits to prevent overspeed conditions and ensure safe operation." },
      { name: "Audible signal at end of each run", description: "Provides an immediate audio alert once centrifugation is complete, improving workflow awareness and operator efficiency." },
      { name: "Emergency lid lock", description: "Features an emergency release mechanism for manual access to samples in case of power failure or system malfunction." },
      { name: "Stainless steel chamber", description: "Constructed from durable stainless steel, offering corrosion resistance, easy maintenance, and long-term operational reliability." },
      { name: "CFC-free refrigeration system (-20°C to +40°C)", description: "Incorporates an eco-friendly refrigeration system that maintains precise temperature control, ideal for sensitive biological or chemical samples." },
      { name: "Autoclavable rotors", description: "Supports sterilization for contamination-free use, ensuring compliance with modern laboratory hygiene and biosafety standards." }
    ],

    highlights: [
      { name: "Diagnostic program", description: "Performs automatic system checks before and during runs, detecting operational irregularities early and simplifying troubleshooting for users." },
      { name: "Program memory for 99 programs", description: "Allows storage and recall of up to 99 frequently used protocols, streamlining routine workflows and ensuring reproducibility." },
      { name: "Quick-key for short runs", description: "Enables instant initiation of short spin cycles, saving time for rapid sample clarification or brief centrifugation tasks." },
      { name: "Pre-cooling & standstill cooling programs", description: "Maintains optimal sample temperature by cooling the rotor both before and after runs, preserving sample integrity." },
      { name: "10 acceleration & 10 deceleration rates (incl. unbraked)", description: "Offers complete control over speed ramp-up and braking profiles, including gentle unbraked deceleration for delicate samples." },
      { name: "Permanent indication of preset & actual values", description: "Displays real-time and target parameters simultaneously for easy process monitoring and enhanced user confidence." },
      { name: "Pre-selection of speed or RCF (50/10 increments)", description: "Allows precise adjustment of centrifugal force in fine increments, ensuring optimized separation and consistency." },
      { name: "Pre-selection of running time from 10 sec to 99h 59min or continuous", description: "Provides flexible time programming suitable for both rapid spins and long-duration processes." },
      { name: "Simple one-handed operation", description: "User-friendly, glove-compatible control interface allows easy operation with one hand, improving workflow convenience." }
    ],

    techSpecs: {
      maxSpeed: "16,000 rpm",
      maxRCF: "26,328 × g",
      maxVolume: "4 × 750 ml",
      speedRange: "200 – 16,000 rpm",
      temperatureRange: "-20°C to +40°C",
      runningTime: "59m 50s / 10s increments; up to 99h 59m / 1m increments",
      dimensions: "73 × 39 × 67 cm",
      weight: "111 kg",
      chamber: "Stainless steel",
      refrigeration: "CFC-free, -20°C to +40°C",
      rotors: "Autoclavable"
    }
  },

  "z-32-hk": {
    id: "centrifuge-z-32hk",
    name: "Centrifuge Z 32 HK",
    image: ImgZ32HK,
    bannerImg: Banner3,
    logo: Hermle,
    altText: "Hermle",
    meta: {
      title: "Centrifuge Z 32 HK High Speed Centrifuge Distributor & Service Provider In India - Hermle- Inkarp Instruments Pvt Ltd",
      description:
        "Discover the Centrifuge Z 32 HK High Speed Centrifuge from Hermle at Inkarp Instruments. Ideal for precision and efficiency in lab applications, backed by extensive distribution and service networks across India.",
      keywords: [
        "Centrifuge Z 32 HK High Speed Centrifuge",
        "Hermle",
        "Z 32 HK",
        "high speed centrifuge",
        "refrigerated centrifuge",
        "compact centrifuge",
        "laboratory centrifuge",
        "Inkarp India"
      ],
      altText: "Hermle Z 32 HK High Speed Refrigerated Centrifuge"
    },

    description: `
    <div class="font-[Roboto] text-[#333]">
      <!-- Intro -->
      <div class="space-y-4">
        <p>
          The <strong>Hermle Z 32 HK High Speed Centrifuge</strong> is a versatile, compact, and
          refrigerated centrifuge designed for <strong>research, clinical, and industrial labs</strong>.
          Despite its remarkably small footprint, it features a powerful cooling system that
          maintains low sample temperatures even at maximum speed.
        </p>
        <p>
          With a wide range of rotor options and accessories, the Z 32 HK provides flexibility
          for multiple applications. Its advanced microprocessor control, safety features, and
          stainless-steel chamber make it an ideal choice for high-throughput laboratories.
        </p>
      </div>
    </div>
    `,
    features: [
      { name: "Brushless induction drive", description: "Delivers reliable, maintenance-free operation with minimal vibration and noise, ensuring consistent performance and long-term durability." },
      { name: "Microprocessor control", description: "Enables precise control of all operating parameters, ensuring repeatable and accurate centrifugation conditions for sensitive applications." },
      { name: "Active imbalance detection and cut-off", description: "Automatically detects imbalance and safely stops the run to protect the samples, rotor, and instrument from potential damage." },
      { name: "Motor-driven lid lock", description: "Provides secure and automated locking during operation to enhance safety and prevent accidental access while the rotor is spinning." },
      { name: "Automatic rotor identification with overspeed protection", description: "Recognizes installed rotors and automatically adjusts the permissible speed, preventing overspeed conditions and ensuring operational safety." },
      { name: "Audible signal at end of each run", description: "Alerts users immediately when the centrifugation process is complete, improving efficiency and workflow awareness." },
      { name: "Emergency lid lock", description: "Ensures safe manual access to samples in case of power failure or system malfunction, maintaining user safety at all times." },
      { name: "Stainless steel chamber", description: "Constructed from high-grade stainless steel for corrosion resistance, easy cleaning, and long-lasting performance in demanding lab environments." },
      { name: "CFC-free refrigeration system (-20°C to +40°C)", description: "Features an eco-friendly refrigeration unit that offers precise temperature control, ideal for biological and chemical sample preservation." },
      { name: "Autoclavable rotors", description: "Allows complete sterilization for contamination-free operation, ensuring compliance with modern laboratory hygiene standards." }
    ],

    highlights: [
      { name: "Diagnostic program", description: "Performs self-check routines to detect potential operational issues early, simplifying maintenance and minimizing downtime." },
      { name: "Program memory for 99 programs", description: "Stores up to 99 user-defined protocols, making it easy to recall frequently used centrifugation settings for consistency and convenience." },
      { name: "Quick-key for short runs", description: "Facilitates fast start-up of short centrifugation cycles with a single touch, ideal for quick sample clarification tasks." },
      { name: "Pre-cooling & standstill cooling programs", description: "Ensures optimal temperature maintenance before and after runs, preserving temperature-sensitive samples even during idle periods." },
      { name: "10 acceleration & 10 deceleration rates (incl. unbraked)", description: "Provides flexible control over acceleration and deceleration profiles, including gentle unbraked deceleration for fragile samples." },
      { name: "Permanent indication of preset & actual values", description: "Displays both set and real-time parameters simultaneously, giving users full visibility over centrifugation progress." },
      { name: "Pre-selection of speed or RCF (50/10 increments)", description: "Allows precise adjustments of rotational speed or relative centrifugal force in small increments for highly controlled separations." },
      { name: "Pre-selection of running time from 10 sec to 99h 59min or continuous", description: "Offers flexible timing options suitable for both quick spins and extended continuous runs across a wide range of applications." },
      { name: "Simple one-handed operation", description: "Ergonomic and glove-friendly design enables intuitive operation with one hand, enhancing ease of use and workflow efficiency." }
    ],

    techSpecs: {
      maxSpeed: "20,000 rpm",
      maxRCF: "38,007 × g",
      maxVolume: "4 × 145 ml",
      speedRange: "200 – 20,000 rpm",
      temperatureRange: "-20°C to +40°C",
      runningTime: "59m 50s / 10s increments; up to 99h 59m / 1m increments",
      dimensions: "40 × 36 × 70 cm",
      weight: "71 kg",
      chamber: "Stainless steel",
      refrigeration: "CFC-free, -20°C to +40°C",
      rotors: "Autoclavable"
    }
  },

  "z-36-hk": {
    id: "centrifuge-z-36hk",
    name: "Centrifuge Z 36 HK",
    image: ImgZ36HK,
    bannerImg: Banner3,
    logo: Hermle,
    altText: "Hermle",
    meta: {
      title: "Centrifuge Z 36 HK High Speed Centrifuge Distributor & Service Provider In India - Hermle- Inkarp Instruments Pvt Ltd",
      description:
        "Discover the Centrifuge Z 36 HK High Speed Centrifuge by Hermle. Perfect for efficient separation and reliable results. Inkarp Instruments Pvt Ltd, backed by extensive distribution and service networks across India.",
      keywords: [
        "Centrifuge Z 36 HK High Speed Centrifuge",
        "Hermle",
        "Z 36 HK",
        "high speed centrifuge",
        "refrigerated centrifuge",
        "laboratory centrifuge",
        "Inkarp India"
      ],
      altText: "Hermle Z 36 HK High Speed Refrigerated Centrifuge"
    },

    description: `
    <div class="font-[Roboto] text-[#333]">
      <div class="space-y-4">
        <p>
          The <strong>Hermle Z 36 HK High Speed Centrifuge</strong> represents the culmination of many years of
          centrifuge design experience combined with the latest technology. It is the most capable
          centrifuge in its class, delivering speeds of up to <strong>30,000 rpm (65,395 × g)</strong>.
        </p>
        <p>
          With ten available rotor options and a maximum capacity of 6 × 250 ml, the Z 36 HK
          combines versatility, safety, and performance. Its advanced cooling system ensures stable
          operation across demanding research and clinical applications.
        </p>
      </div>
    </div>
    `,

    features: [
      { name: "Brushless induction drive", description: "Provides powerful, maintenance-free operation with smooth acceleration, minimal vibration, and low noise, ensuring durability and long-term performance for laboratory workflows." },
      { name: "Microprocessor control", description: "Enables precise control over centrifugation parameters including speed, time, and temperature, delivering highly reproducible and reliable results for every application." },
      { name: "Active imbalance detection and cut-off", description: "Monitors rotor balance in real time and automatically halts the operation if imbalance occurs, protecting the instrument and samples from potential damage." },
      { name: "Motor-driven lid lock", description: "Ensures safe and secure lid locking during operation to prevent accidental opening, enhancing operator safety and sample protection." },
      { name: "Automatic rotor identification with overspeed protection", description: "Detects installed rotors and automatically adjusts permissible speed limits to prevent overspeed, maintaining instrument integrity and safety compliance." },
      { name: "Audible signal at end of each run", description: "Alerts the operator upon completion of centrifugation, improving workflow efficiency and enabling multitasking without supervision." },
      { name: "Emergency lid lock", description: "Includes an emergency release mechanism for safe manual access to samples during power interruptions or emergency conditions." },
      { name: "Stainless steel chamber", description: "Offers corrosion resistance, easy cleaning, and long-lasting durability, ideal for high-demand laboratory environments." },
      { name: "CFC-free refrigeration system (-20°C to +40°C)", description: "Eco-friendly and efficient cooling ensures precise temperature maintenance for temperature-sensitive samples and compliance with environmental standards." },
      { name: "Autoclavable rotors", description: "Allow complete sterilization to eliminate contamination risks, ensuring hygienic, safe, and reliable centrifugation performance." }
    ],

    highlights: [
      { name: "Diagnostic program", description: "Performs automatic self-checks before and during operation to detect issues early, simplifying maintenance and ensuring reliable performance." },
      { name: "Program memory for 99 programs", description: "Stores frequently used protocols for quick access and consistent repeatability, improving workflow efficiency in busy labs." },
      { name: "Quick-key for short runs", description: "Allows rapid initiation of brief centrifugation tasks with one touch, minimizing setup time and boosting productivity." },
      { name: "Pre-cooling & standstill cooling programs", description: "Maintains precise temperature conditions before and after operation, preserving temperature-sensitive samples and ensuring reproducibility." },
      { name: "10 acceleration & 10 deceleration rates (incl. unbraked)", description: "Provides flexible control of acceleration and deceleration profiles, allowing gentle handling of delicate samples and high-speed separations when needed." },
      { name: "Permanent indication of preset & actual values", description: "Displays both target and live operational parameters continuously for clear monitoring and precise control throughout the centrifugation process." },
      { name: "Pre-selection of speed or RCF (50/10 increments)", description: "Offers fine adjustments for rotational speed or relative centrifugal force, enhancing separation precision and repeatability." },
      { name: "Pre-selection of running time from 10 sec to 99h 59min or continuous", description: "Enables versatile timing control suitable for both short spin and extended duration applications, adapting to diverse lab requirements." },
      { name: "Simple one-handed operation", description: "Features an intuitive, glove-friendly control interface for easy and ergonomic operation, simplifying routine laboratory work." }
    ],

    techSpecs: {
      maxSpeed: "30,000 rpm",
      maxRCF: "65,395 × g",
      maxVolume: "6 × 250 ml",
      speedRange: "200 – 30,000 rpm",
      temperatureRange: "-20°C to +40°C",
      runningTime: "59m 50s / 10s increments; up to 99h 59m / 1m increments",
      dimensions: "71.5 × 42 × 51 cm",
      weight: "91 kg",
      chamber: "Stainless steel",
      refrigeration: "CFC-free, -20°C to +40°C",
      rotors: "Autoclavable"
    }
  },

  "z-207-a": {
    id: "centrifuge-z-207a",
    name: "Centrifuge Z 207 A",
    image: ImgCentrifuge1,
    bannerImg: Banner3,
    logo: Hermle,
    altText: "Hermle",
    meta: {
      title: "Centrifuge Z 207 A Compact Centrifuge Distributor & Service Provider In India - Hermle- Inkarp Instruments Pvt Ltd",
      description:
        "Discover the Centrifuge Z 207 A Compact Centrifuge at Inkarp Instruments. Experience precision and efficiency for all your lab needs, backed by extensive distribution and service networks across India.",
      keywords: [
        "Centrifuge Z 207 A Compact Centrifuge",
        "Hermle",
        "Z 207 A",
        "compact centrifuge",
        "benchtop centrifuge",
        "medical centrifuge",
        "laboratory centrifuge",
        "Inkarp India"
      ],
      altText: "Hermle Z 207 A Compact Centrifuge"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <!-- Intro -->
  <div class="space-y-4">
    <p>
      The <strong>Hermle Z 207 A Compact Centrifuge</strong> is designed for medical practices and laboratories 
      with a smaller sample load. Despite its compact footprint, it delivers a max. speed of <strong>6,800 rpm 
      and 4,445 × g</strong>, making it a powerful tool for routine sample preparation.
    </p>
    <p>
      It comes with an angle rotor that accommodates up to 8 × 15 ml tubes, ensuring efficient separation in 
      clinical and research settings. The unique “Touch-Operation” control panel sets it apart in its class, 
      providing intuitive operation for busy labs.
    </p>
  </div>
</div>
`,
    features: [
      { name: "Microprocessor with large LCD display", description: "Ensures precise control and clear visualization of operating parameters such as speed, time, and temperature, allowing users to easily monitor and adjust centrifugation settings." },
      { name: "Electrical lid lock", description: "Provides automatic locking during operation to prevent accidental lid opening, ensuring maximum safety for the user and protection for samples." },
      { name: "Quick access to samples", description: "Designed for fast and effortless access to samples immediately after centrifugation, improving workflow efficiency and sample handling speed." },
      { name: "Active imbalance detection and cut-off", description: "Continuously monitors the rotor balance and automatically stops the operation when an imbalance is detected, protecting both the centrifuge and samples." },
      { name: "Air cooling system", description: "Maintains optimal operating temperature during high-speed runs, extending instrument lifespan and ensuring stable performance without overheating." },
      { name: "Quick acceleration and deceleration", description: "Provides rapid ramp-up and slowdown to reduce total processing time, ensuring smooth transitions between runs while maintaining sample integrity." },
      { name: "Noise level < 60 dBA at max. speed", description: "Operates quietly even at top speeds, minimizing noise pollution and contributing to a more comfortable laboratory environment." },
      { name: "Easy rotor removal (no tools required)", description: "Allows quick and hassle-free rotor changes without special tools, streamlining maintenance and enhancing user convenience." },
      { name: "Built to IEC 61010 international safety standards", description: "Conforms to global safety standards for laboratory equipment, ensuring reliable, compliant, and secure operation in all environments." }
    ],

    highlights: [
      { name: "Touch-operation with splash-proof foil keyboard", description: "Offers a durable, sealed interface for easy and responsive control, resistant to spills and ideal for demanding laboratory conditions." },
      { name: "Simple one-handed operation", description: "User-friendly design enables ergonomic and efficient operation using just one hand, improving workflow speed and comfort." },
      { name: "Permanent indication of pre-set and actual values", description: "Displays both set and current parameters simultaneously, allowing real-time monitoring for precise centrifugation control." },
      { name: "Speed selection in rpm or g-force (increments of 1)", description: "Provides fine-tuned control for speed or relative centrifugal force, enabling users to match exact protocol requirements." },
      { name: "10 acceleration and deceleration rates, incl. unbraked deceleration", description: "Gives users complete control over acceleration and braking profiles, protecting delicate samples from mechanical stress." },
      { name: "Pre-selection of running time: 10s to 99h 59min or continuous", description: "Allows versatile timing options suitable for short spin tests or long-duration runs, supporting diverse laboratory workflows." },
      { name: "Program memory for up to 99 runs", description: "Stores frequently used parameters for quick recall, enhancing productivity and ensuring consistency between repeated processes." },
      { name: "Quick-key for short runs", description: "Simplifies rapid spin operations with a one-touch key, perfect for brief sample clarifications and quick centrifugation tasks." }
    ],

    techSpecs: {
      maxSpeed: "6,800 rpm",
      maxRCF: "4,445 × g",
      maxVolume: "8 × 15 ml RB / 4 × 15 ml Falcon",
      speedRange: "200 – 6,800 rpm",
      runningTime: "59m 50s / 10s increments; up to 99h 59m / 1m increments",
      dimensions: "28 × 24 × 35 cm",
      weight: "8 kg",
      control: "Touch-operation panel with LCD display",
      cooling: "Air cooling system"
    }
  },

  "z-206-a": {
    id: "centrifuge-z-206a",
    name: "Centrifuge Z 206 A",
    image: ImgZ206A,
    bannerImg: Banner3,
    logo: Hermle,
    altText: "Hermle",
    meta: {
      title: "Centrifuge Z 206 A Compact Centrifuge Distributor & Service Provider In India - Hermle- Inkarp Instruments Pvt Ltd",
      description:
        "Discover the Centrifuge Z 206 A Compact Centrifuge at Inkarp Instruments. Experience precision and efficiency for all your lab needs, backed by extensive distribution and service networks across India.",
      keywords: [
        "Centrifuge Z 206 A Compact Centrifuge",
        "Hermle",
        "Z 206 A",
        "compact centrifuge",
        "clinical centrifuge",
        "benchtop centrifuge",
        "laboratory centrifuge",
        "Inkarp India"
      ],
      altText: "Hermle Z 206 A Compact Centrifuge"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <!-- Intro -->
  <div class="space-y-4">
    <p>
      The <strong>Hermle Z 206 A Compact Centrifuge</strong> is engineered for laboratories and medical practices 
      handling routine separations. It can accommodate up to <strong>12 × 15 ml conical or round-bottom tubes</strong>, 
      with adapters for smaller sizes and a dedicated angle rotor for <strong>6 × 50 ml tubes</strong>.
    </p>
    <p>
      Combining compact design with strong performance, the Z 206 A achieves a max. speed of 
      <strong>6,000 rpm</strong> and <strong>4,427 × g</strong>. Its air cooling system ensures consistent operation, 
      while autoclavable rotors provide excellent safety and hygiene.
    </p>
  </div>
</div>
`,
    features: [
      { name: "Microprocessor control", description: "Provides precise regulation of centrifugation parameters such as speed, RCF, and time, ensuring consistent and reproducible results across multiple runs." },
      { name: "Active imbalance detection and cut-off", description: "Monitors rotor balance in real-time and automatically stops the operation in case of imbalance, safeguarding both samples and equipment." },
      { name: "One-hand closing with emergency lid lock", description: "Ensures effortless operation with a single hand while maintaining maximum safety through a secure emergency lid locking mechanism." },
      { name: "Air cooling system for consistent performance", description: "Maintains optimal temperature and prevents overheating during high-speed operation, ensuring reliable performance and extended equipment life." },
      { name: "Autoclavable rotors for maximum safety", description: "Allows complete sterilization of rotors to eliminate contamination risks and maintain hygienic, safe, and dependable centrifugation cycles." }
    ],

    highlights: [
      { name: "Diagnostic program for easy troubleshooting", description: "Automatically performs internal checks to detect operational issues early, simplifying maintenance and minimizing equipment downtime." },
      { name: "10 acceleration & 10 deceleration rates, incl. unbraked deceleration", description: "Offers adjustable speed profiles to accommodate delicate or robust samples, including gentle unbraked deceleration for sensitive materials." },
      { name: "Permanent indication of preset & actual values", description: "Displays both target and real-time parameters simultaneously, providing clear operational visibility and control throughout each run." },
      { name: "Pre-selection of speed or RCF in steps of 50/10", description: "Allows precise adjustment of centrifugal force in small increments for fine-tuned control and reproducible separations." },
      { name: "Pre-selection of running time: 10s to 99h 59min or continuous", description: "Supports flexible timing options suitable for quick spins or long-term protocols, meeting a wide range of laboratory requirements." },
      { name: "Simple one-handed operation", description: "Designed for intuitive, ergonomic use, enabling operators to manage all settings and functions easily, even while wearing gloves." }
    ],

    techSpecs: {
      maxSpeed: "6,000 rpm",
      maxRCF: "4,427 × g",
      maxVolume: "6 × 50 ml / 12 × 15 ml tubes",
      speedRange: "200 – 6,000 rpm (50 rpm / 10 rcf increments)",
      runningTime: "59m 50s / 10s increments; up to 99h 59m / 1m increments",
      dimensions: "28 × 26 × 37 cm",
      weight: "12 kg",
      cooling: "Air cooling system",
      rotors: "Autoclavable"
    }
  },

  "z-207-h": {
    id: "centrifuge-z-207h",
    name: "Centrifuge Z 207 H",
    image: ImgZ207M,
    bannerImg: Banner3,
    logo: Hermle,
    altText: "Hermle",
    meta: {
      title: "Centrifuge Z 207 H Compact Centrifuge Distributor & Service Provider In India - Hermle- Inkarp Instruments Pvt Ltd",
      description:
        "Discover the Centrifuge Z 207 H, designed for optimal performance in laboratories. Explore its features and enhance your workflows with Hermle solutions, backed by extensive distribution and service networks across India.",
      keywords: [
        "Centrifuge Z 207 H Compact Centrifuge",
        "Hermle",
        "Z 207 H",
        "hematocrit centrifuge",
        "compact centrifuge",
        "blood centrifuge",
        "clinical centrifuge",
        "laboratory centrifuge",
        "Inkarp India"
      ],
      altText: "Hermle Z 207 H Compact Centrifuge"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <!-- Intro -->
  <div class="space-y-4">
    <p>
      The <strong>Hermle Z 207 H Compact Centrifuge</strong> is a dedicated hematocrit centrifuge, ideal for even the smallest laboratories. 
      It allows <strong>quick and easy determination of erythrocyte content</strong> (hematocrit level) in blood samples. 
      Up to <strong>24 capillary tubes</strong> can be accelerated to <strong>16,058 × g</strong> in just a short time.
    </p>
    <p>
      After centrifugation, the distinct separation of blood plasma and erythrocytes enables precise hematocrit measurement using a reading device. 
      A standout feature is its innovative <strong>Touch-control panel</strong>, rare in this centrifuge class.
    </p>
  </div>
</div>
`,
    features: [
      { name: "Microprocessor with large LCD display", description: "Provides precise control and easy monitoring of speed, time, and operation parameters through a clear, user-friendly LCD interface, enhancing accuracy and usability." },
      { name: "Electrical lid lock", description: "Ensures maximum operational safety by securely locking the lid during centrifugation, preventing accidental opening while the rotor is in motion." },
      { name: "Quick access to samples", description: "Allows users to retrieve samples immediately after centrifugation, minimizing downtime and improving workflow efficiency." },
      { name: "Active imbalance detection and cut-off", description: "Continuously monitors rotor balance and automatically stops the run if imbalance is detected, protecting both the centrifuge and the samples." },
      { name: "Air cooling system for reliable performance", description: "Maintains optimal operating temperature, preventing overheating and ensuring consistent performance even during extended runs." },
      { name: "Quick acceleration and deceleration", description: "Offers rapid ramp-up and slowdown for faster processing cycles, optimizing laboratory efficiency without compromising sample integrity." },
      { name: "Noise level < 60 dBA at max. speed", description: "Operates quietly even at maximum speed, creating a comfortable, low-noise working environment ideal for busy labs." },
      { name: "Easy rotor removal without tools", description: "Allows simple and fast rotor replacement or cleaning without the need for special tools, making maintenance convenient and efficient." },
      { name: "Complies with IEC 61010 international safety standards", description: "Meets globally recognized safety and performance standards for laboratory equipment, ensuring reliability, safety, and regulatory compliance." }
    ],

    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: {
      maxSpeed: "13,000 rpm",
      maxRCF: "16,058 × g",
      maxVolume: "24 capillary tubes",
      speedRange: "200 – 13,000 rpm",
      runningTime: "59m 50s / 10s increments; up to 99h 59m / 1m increments",
      dimensions: "28 × 24 × 35 cm",
      weight: "12.5 kg",
      cooling: "Air cooling system",
      control: "Touch panel with LCD display",
      compliance: "IEC 61010 safety standards"
    }
  },

  "z-130-m": {
    id: "centrifuge-z-130m",
    name: "Centrifuge Z 130 M Microliter Centrifuge",
    image: ImgZ130M,
    bannerImg: Banner3,
    logo: Hermle,
    altText: "Hermle",
    meta: {
      title: "Centrifuge Z 130 M Microliter Centrifuge Distributor & Service Provider In India - Hermle- Inkarp Instruments Pvt Ltd",
      description:
        "Explore the Centrifuge Z 130 M Microliter Centrifuge from Hermle at Inkarp Instruments. Perfect for precise and efficient sample processing, backed by extensive distribution and service networks across India.",
      keywords: [
        "Centrifuge Z 130 M Microliter Centrifuge",
        "Hermle",
        "Z 130 M",
        "microliter centrifuge",
        "microcentrifuge",
        "PCR centrifuge",
        "clinical centrifuge",
        "laboratory centrifuge",
        "Inkarp India"
      ],
      altText: "Hermle Z 130 M Microliter Centrifuge"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <!-- Intro -->
  <div class="space-y-4">

    <p>
      <strong>Inkarp Instruments</strong>, a trusted 
     Hermle partner, 
      brings the <strong>Z 130 M Microliter Centrifuge</strong> to India. It is purpose-built for quick and efficient 
      separation of small-volume samples in <strong>research, clinical, and industrial laboratories</strong>.
    </p>
    <p>
      Unlike conventional mini centrifuges, the Z 130 M eliminates the hassle of changing rotors when switching between 
      <strong>microtubes</strong> and <strong>PCR strips</strong>. Its innovative <strong>COMBI-Rotor</strong> accommodates 
      both simultaneously — up to <strong>12 microtubes and 4 PCR strips</strong>.
    </p>
    <p>
      With a fixed speed of <strong>5,500 rpm</strong>, generating <strong>2,000 × g</strong>, it is ideal for 
      <strong>quick spin downs</strong> and routine sample preparations in busy labs.
    </p>
  </div>
</div>
`,

    features: [
      { name: "Brushless induction drive for maintenance-free operation", description: "Ensures quiet, efficient, and long-lasting performance without the need for regular maintenance, reducing operational costs and downtime in laboratory environments." },
      { name: "Innovative COMBI-Rotor for both microtubes and PCR strips", description: "Allows simultaneous use of different sample formats in a single rotor, providing flexibility for various experimental protocols and saving valuable lab space." },
      { name: "Eliminates need for rotor change", description: "Simplifies workflow by accommodating multiple tube types in one rotor, removing the hassle and time associated with frequent rotor replacements." },
      { name: "One-hand closing for convenience", description: "Designed with ergonomic functionality, enabling easy and secure operation using just one hand—ideal for quick, repetitive lab tasks." },
      { name: "Compact and lightweight design (only 1.3 kg)", description: "Offers excellent portability and space efficiency, making it suitable for small laboratories, field use, or benchtops with limited space." }
    ],

    advantages: [],
    highlights: [],
    faqs: [],
    techSpecs: {
      maxSpeed: "5,500 rpm",
      maxRCF: "2,000 × g",
      maxVolume: "12 × 1.5/2.0 ml tubes, 32 × 0.2 ml PCR tubes, 4 × PCR strips",
      dimensions: "14 × 11.2 × 20 cm",
      weight: "1.3 kg",
      rotor: "Unique COMBI-Rotor (microtubes + PCR strips)",
      drive: "Brushless induction drive"
    }
  },

  "z-167-m": {
    id: "centrifuge-z-167m",
    name: "Centrifuge Z 167 M Microliter Centrifuge",
    image: ImgZ167M,
    bannerImg: Banner3,
    logo: Hermle,
    altText: "Hermle",
    meta: {
      title: "Centrifuge Z 167 M Microliter Centrifuge Distributor & Service Provider In India - Hermle- Inkarp Instruments Pvt Ltd",
      description:
        "Explore the Centrifuge Z 167 M Microliter Centrifuge by Hermle. Ideal for precision tasks in your lab, ensuring efficiency and reliability, backed by extensive distribution and service networks across India.",
      keywords: [
        "Centrifuge Z 167 M Microliter Centrifuge",
        "Hermle",
        "Z 167 M",
        "microliter centrifuge",
        "high-speed centrifuge",
        "laboratory centrifuge",
        "microcentrifuge",
        "PCR tubes centrifuge",
        "Inkarp India"
      ],
      altText: "Hermle Z 167 M Microliter Centrifuge"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <!-- Intro -->
  <div class="space-y-4">
    <p>
      <strong>Inkarp Instruments</strong>, a trusted
    Hermle partner, 
      offers the <strong>Z 167 M Microliter Centrifuge</strong> in India. Designed for high-speed separation of small sample volumes, 
      it is suitable for <strong>research, clinical, and industrial laboratories</strong>.
    </p>
    <p>
      This compact centrifuge replaces the previous Z 160 M model, delivering enhanced performance with a <strong>brushless, maintenance-free motor</strong> 
      that ensures rapid acceleration and deceleration. 
    </p>
    <p>
      Supplied with an <strong>18-place rotor</strong> for 1.5/2.0 ml tubes, the Z 167 M combines durability, reliability, and efficiency in a 
      user-friendly design.
    </p>
  </div>
</div>
`,
    features: [
      { name: "Microprocessor with large LCD display", description: "Provides intuitive control and precise monitoring of speed, time, and operational parameters through a large, easy-to-read LCD interface for enhanced user convenience." },
      { name: "Brushless, maintenance-free motor", description: "Delivers quiet, energy-efficient, and reliable operation with minimal wear, ensuring a long service life and consistent performance over extended use." },
      { name: "Electrical lid lock with quick access to samples", description: "Ensures operational safety by preventing accidental opening during centrifugation while allowing rapid access to samples once the run is complete." },
      { name: "Active imbalance detection and cut-off", description: "Continuously monitors rotor balance, automatically stopping the centrifuge in case of imbalance to protect samples and equipment integrity." },
      { name: "Air cooling system with fast acceleration & deceleration", description: "Maintains optimal temperature stability, ensures rapid run transitions, and preserves sample quality even during intensive use." },
      { name: "Noise level < 67 dBA at max. speed", description: "Operates quietly, minimizing disturbance in laboratory environments and providing a comfortable workspace for technicians." },
      { name: "Easy rotor removal without tools", description: "Allows quick and hassle-free rotor exchange for cleaning or sample changes, eliminating the need for specialized tools and simplifying maintenance." },
      { name: "Meets international safety standards (IEC 61010)", description: "Certified for compliance with global safety regulations, guaranteeing reliability, user protection, and adherence to international laboratory standards." }
    ],

    highlights: [
      { name: "Touch-operation control panel with splash-proof keyboard", description: "Offers a responsive and sealed interface resistant to spills and contamination, allowing easy navigation and control even in demanding laboratory conditions." },
      { name: "Simple one-handed operation", description: "Designed for user comfort, allowing quick setup and control with one hand, ideal for multitasking in busy lab environments." },
      { name: "Permanent indication of preset and actual values", description: "Displays real-time and target parameters simultaneously, ensuring precise control and continuous monitoring throughout operation." },
      { name: "Selection of speed in both rpm and g-force (increments of 10)", description: "Provides flexible control options, allowing users to choose between rotational speed or relative centrifugal force with fine adjustment accuracy." },
      { name: "10 acceleration and deceleration rates, with unbraked option", description: "Enables customizable speed transitions for various sample types, including gentle unbraked deceleration for delicate materials." },
      { name: "Pre-selection of time: 10 sec – 99h 59 min, or continuous", description: "Offers wide timing flexibility, accommodating both rapid spins and extended runs to suit diverse laboratory applications." },
      { name: "Memory for up to 99 runs with quick-key for short spins", description: "Stores commonly used programs for quick recall, enhancing productivity and ensuring reproducible results with minimal setup time." },
      { name: "Color-coded visual display for operating states (standstill, sleep, centrifugation)", description: "Provides clear visual indicators for different operating modes, improving user awareness and operational safety at a glance." }
    ],

    techSpecs: {
      maxSpeed: "14,000 rpm",
      maxRCF: "15,994 × g",
      maxVolume: "18 × 1.5/2.0 ml tubes",
      speedRange: "200 – 14,000 rpm",
      runningTime: "59m 50s / 10s increments; 99h 59m / 1m increments",
      dimensions: "28 × 24 × 35 cm",
      weight: "12 kg",
      drive: "Brushless induction motor",
      rotor: "18-place rotor (1.5/2.0 ml tubes)",
      display: "LCD with touch-operation"
    }
  },

  "z-207-m": {
    id: "centrifuge-z-207m",
    name: "Centrifuge Z 207 M Microliter Centrifuge",
    image: ImgZ207M,
    bannerImg: Banner3,
    logo: Hermle,
    altText: "Hermle",
    meta: {
      title: "Centrifuge Z 207 M Microliter Centrifuge Distributor & Service Provider In India - Hermle- Inkarp Instruments Pvt Ltd",
      description:
        "Discover the Centrifuge Z 207 M Microliter Centrifuge by Hermle at Inkarp Instruments Pvt Ltd. Ideal for precision in microcentrifugation, backed by extensive distribution and service networks across India.",
      keywords: [
        "Centrifuge Z 207 M Microliter Centrifuge",
        "Hermle",
        "Z 207 M",
        "microliter centrifuge",
        "laboratory centrifuge",
        "touch operation centrifuge",
        "compact centrifuge",
        "high-speed centrifuge",
        "Inkarp India"
      ],
      altText: "Hermle Z 207 M Microliter Centrifuge"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <!-- Intro -->
  <div class="space-y-4">
    <p>
      The <strong>Z 207 M Microliter Centrifuge</strong> is engineered for compact laboratory spaces while delivering
      powerful performance. With a maximum speed of <strong>13,500 rpm</strong> and rapid acceleration, it ensures
      quick and efficient separations in research, clinical, and industrial laboratories.
    </p>
    <p>
      The 24-place microlitre rotor (optional with hermetically sealed lid) provides flexible capacity, including rotor
      options for Spin Column Kits. Despite its high performance, the centrifuge remains exceptionally quiet.
    </p>
    <p>
      Its highlight is the <strong>Touch Operation control panel</strong>, which allows intuitive operation even with gloves,
      supported by an <strong>air cooling system</strong> that protects sensitive samples at maximum speed.
    </p>
  </div>
</div>
`,
    features: [
      { name: "Microprocessor with large LCD display", description: "Ensures precise control of centrifugation parameters with clear, real-time visibility on a large LCD screen for easy monitoring and reliable operation." },
      { name: "Electrical lid lock with quick access to samples", description: "Provides automatic safety locking during operation and allows quick access to samples once the cycle is complete, enhancing user safety and efficiency." },
      { name: "Active imbalance detection and cut-off", description: "Continuously monitors rotor balance and automatically stops the run if an imbalance occurs, preventing damage to the centrifuge and ensuring operator safety." },
      { name: "Air cooling system for temperature stability", description: "Maintains optimal chamber temperature during prolonged or high-speed runs, ensuring consistent results and protecting sensitive samples from heat buildup." },
      { name: "Fast acceleration and deceleration", description: "Offers rapid ramp-up and braking to shorten total spin time while maintaining smooth and controlled performance across all applications." },
      { name: "Noise level < 60 dBA at max. speed", description: "Operates quietly even under full load, ensuring a low-noise, comfortable working environment in laboratories." },
      { name: "Easy rotor removal without tools", description: "Allows quick, tool-free rotor changes and cleaning, minimizing downtime and simplifying maintenance." },
      { name: "Meets international safety standards (IEC 61010)", description: "Conforms to globally recognized safety norms, providing dependable protection and compliance for laboratory operations." }
    ],

    highlights: [
      { name: "Touch-operation control panel", description: "Features an intuitive touch interface that simplifies operation and parameter adjustments, providing smooth interaction even while wearing gloves." },
      { name: "Simple one-handed operation", description: "Ergonomic design allows easy access to all controls with one hand, supporting faster workflow in busy lab environments." },
      { name: "Splash-proof foil keyboard", description: "Designed with a sealed, spill-resistant surface to withstand harsh laboratory conditions and enable easy cleaning without compromising function." },
      { name: "Permanent indication of preset and actual values", description: "Displays both target and live values continuously, allowing precise monitoring and full operational transparency throughout centrifugation." },
      { name: "Selectable speed in rpm or g-force (increments of 10)", description: "Provides flexible configuration options to meet different experimental requirements, ensuring precise and repeatable separations." },
      { name: "10 acceleration and 10 deceleration rates, with unbraked option", description: "Offers full control over speed transitions for various sample sensitivities, including gentle unbraked deceleration for fragile materials." },
      { name: "Pre-selection of time: 10 sec – 99h 59 min, or continuous", description: "Allows wide time range adjustment, supporting both short, quick spins and extended protocols as per experimental needs." },
      { name: "Storage for up to 99 runs with quick-key for short runs", description: "Enables users to save frequently used protocols for faster access, with a one-touch shortcut for rapid centrifugation cycles." }
    ],

    techSpecs: {
      maxSpeed: "13,500 rpm",
      maxRCF: "17,317 × g",
      maxVolume: "24 × 1.5/2.0 ml",
      speedRange: "200 – 13,500 rpm",
      runningTime: "59m 50s / 10s increments; up to 99h 59m / 1m increments",
      dimensions: "28 × 24 × 35 cm",
      weight: "12.5 kg",
      display: "LCD with touch-operation",
      cooling: "Air cooling system"
    }
  },

  "z-207-mk": {
    id: "centrifuge-z-207mk",
    name: "Centrifuge Z 207 MK Microliter Centrifuge",
    image: ImgZ207MK,
    bannerImg: Banner3,
    logo: Hermle,
    altText: "Hermle",
    meta: {
      title: "Centrifuge Z 207 MK Microliter Centrifuge Distributor & Service Provider In India - Hermle- Inkarp Instruments Pvt Ltd",
      description:
        "Discover the Centrifuge Z 207 MK Microliter Centrifuge for precise microcentrifugation. Perfect for labs needing reliability and performance, backed by extensive distribution and service networks across India.",
      keywords: [
        "Centrifuge Z 207 MK Microliter Centrifuge",
        "Hermle",
        "Z 207 MK",
        "microliter centrifuge",
        "refrigerated centrifuge",
        "PCR centrifuge",
        "high-speed centrifuge",
        "laboratory centrifuge",
        "Inkarp India"
      ],
      altText: "Hermle Z 207 MK Microliter Centrifuge"
    },

    description: `
    <div class="font-[Roboto] text-[#333]">
      <!-- Intro -->
      <div class="space-y-4">
        <p>
          <strong>Inkarp Instruments</strong>, a trusted Hermle partner,
          offers the <strong>Z 207 MK Microliter Centrifuge</strong> in India. Compact yet powerful, it is designed for routine centrifugation
          of microtubes and PCR strips, with exceptional cooling performance.
        </p>
        <p>
          Despite its small footprint, the Z 207 MK maintains sample temperatures at <strong>0 °C even at maximum speed</strong>.
          It comes equipped with three rotor options, making it versatile for a wide range of laboratory applications.
        </p>
        <p>
          The highlight is its <strong>Touch Operation control panel</strong>, offering simple and intuitive operation,
          ensuring efficiency and convenience for routine use.
        </p>
      </div>
    </div>
    `,
    features: [
      { name: "Brushless induction drive", description: "Delivers powerful, quiet, and maintenance-free operation, ensuring long-lasting performance and consistent reliability for extended laboratory use." },
      { name: "Microprocessor control", description: "Offers precise regulation of speed, time, and temperature settings for accurate and reproducible centrifugation across all sample types." },
      { name: "Active imbalance detection and cut-off", description: "Continuously monitors rotor balance and automatically stops operation in case of imbalance, ensuring safety for users and protection of equipment." },
      { name: "Emergency lid lock", description: "Provides safe manual access to samples during power failure or emergency situations without compromising operational safety." },
      { name: "Stainless steel chamber", description: "Constructed from durable stainless steel for corrosion resistance, easy cleaning, and extended service life under demanding laboratory conditions." },
      { name: "CFC-free refrigeration system (-20 °C to +40 °C)", description: "Eco-friendly cooling system maintains precise temperature control over a wide range, ideal for temperature-sensitive biological or chemical samples." },
      { name: "Autoclavable rotors", description: "Allows complete sterilization of rotors to ensure contamination-free operation and long-term hygienic safety." }
    ],

    highlights: [
      { name: "Touch panel with innovative 'Touch' function", description: "Features a responsive and intuitive touch interface, allowing easy navigation and control even with gloved hands for enhanced user convenience." },
      { name: "Program memory for up to 99 programs", description: "Stores frequently used centrifugation protocols, enabling fast setup and consistent reproducibility across experiments." },
      { name: "Quick-key for short runs", description: "Simplifies rapid centrifugation tasks with one-touch operation, ideal for quick sample clarifications and short spins." },
      { name: "Pre-cooling program", description: "Prepares the chamber to the desired temperature before centrifugation, ensuring optimal conditions for temperature-sensitive samples." },
      { name: "Standstill cooling", description: "Maintains temperature stability even when the rotor is idle, preserving the integrity of samples before and after runs." },
      { name: "10 acceleration and 10 deceleration rates", description: "Offers full control over ramp-up and slowdown profiles for optimal sample protection during processing." },
      { name: "Unbraked deceleration option", description: "Provides a gentle stopping mode to protect delicate samples from disturbance or resuspension during deceleration." },
      { name: "Permanent indication of preset and actual values", description: "Displays both target and live parameters simultaneously for accurate and transparent monitoring of centrifugation conditions." },
      { name: "Pre-selection of speed or RCF in 50/10 increments", description: "Enables fine adjustment of centrifugation force or speed for precise and repeatable results in diverse applications." },
      { name: "Pre-selection of running time: 10 sec – 99h 59 min, or continuous", description: "Allows flexible operation timing to accommodate both short and long-term centrifugation needs efficiently." }
    ],

    techSpecs: {
      maxSpeed: "14,500 rpm",
      maxRCF: "17,317 × g",
      maxVolume: "24 × 1.5/2.0 ml",
      speedRange: "200 – 14,500 rpm",
      runningTime: "59m 50s / 10s increments; up to 99h 59m / 1m increments",
      dimensions: "28 × 29 × 55 cm",
      weight: "33 kg",
      cooling: "CFC-free refrigeration system (-20 °C to +40 °C)",
      rotors: "3 interchangeable rotor options; autoclavable",
      display: "Touch panel with program memory (99 runs)"
    }
  },

  "z-216-m": {
    id: "centrifuge-z-216m",
    name: "Centrifuge Z 216 M Microliter Centrifuge",
    image: ImgZ216M,
    bannerImg: Banner3,
    logo: Hermle,
    altText: "Hermle",
    meta: {
      title: "Centrifuge Z 216 M Microliter Centrifuge Distributor & Service Provider In India - Hermle- Inkarp Instruments Pvt Ltd",
      description:
        "Discover the powerful Centrifuge Z 216 M Microliter Centrifuge at Hermle- Inkarp Instruments Pvt Ltd. Perfect for precise laboratory spinning, backed by extensive distribution and service networks across India.",
      keywords: [
        "Centrifuge Z 216 M Microliter Centrifuge",
        "Hermle",
        "Z 216 M",
        "microliter centrifuge",
        "laboratory centrifuge",
        "high-speed centrifuge",
        "compact centrifuge",
        "PCR centrifuge",
        "Inkarp India"
      ],
      altText: "Hermle Z 216 M Microliter Centrifuge"
    },

    description: `
      <div class="font-[Roboto] text-[#333]">
      <!-- Intro -->
      <div class="space-y-4">
      <p>
      <strong>Inkarp Instruments</strong>, a trusted Hermle partner,
      offers the <strong>Z 216 M Microliter Centrifuge</strong> in India. 
      Compact and powerful, it is designed for high-speed separation of small sample volumes in
      <strong>research, clinical, and industrial laboratories</strong>.
      </p>
      <p>
      Capable of handling <strong>44 × 1.5/2.0 ml tubes</strong> per run, the Z 216 M combines large capacity with a quiet,
      space-saving design, making it an ideal choice for laboratories with high throughput needs.
      </p>
      <p>
      Alongside its sibling, the Z 216 MK, this centrifuge sets new standards for efficiency and convenience
      in the microliter centrifuge class.
      </p>
      </div>
      </div>
      `,
    features: [
      { name: "Brushless induction drive", description: "Ensures smooth, maintenance-free performance with high torque and minimal vibration, delivering consistent and quiet operation for extended laboratory use." },
      { name: "Microprocessor control", description: "Provides precise management of all operating parameters including speed, RCF, and time, ensuring accurate and repeatable centrifugation results." },
      { name: "Active imbalance detection and cut-off", description: "Continuously monitors the rotor’s balance and automatically halts operation if imbalance occurs, protecting both the centrifuge and samples." },
      { name: "Motor-driven lid lock", description: "Secures the lid automatically during operation to prevent accidental opening, ensuring user safety and operational reliability." },
      { name: "Emergency lid lock", description: "Allows manual access to samples in the event of power failure or system interruption while maintaining safety protocols." },
      { name: "Air cooling system", description: "Maintains optimal chamber temperature during high-speed runs, ensuring consistent performance and protecting temperature-sensitive samples." }
    ],

    highlights: [
      { name: "Diagnostic program", description: "Performs automatic system checks to identify operational issues early, simplifying maintenance and minimizing downtime." },
      { name: "Memory for up to 99 programs", description: "Allows users to store and quickly recall commonly used centrifugation settings for consistent and efficient workflows." },
      { name: "Quick-key for short runs", description: "Facilitates rapid initiation of brief centrifugation cycles with one touch, ideal for quick sample preparations." },
      { name: "10 acceleration and 10 deceleration rates with unbraked option", description: "Provides complete control over speed ramp-up and slowdown, including gentle unbraked deceleration for delicate samples." },
      { name: "Permanent indication of preset and actual values", description: "Displays both set and live operational parameters simultaneously for real-time monitoring and accuracy." },
      { name: "Pre-selection of speed or RCF in 50/10 increments", description: "Offers precise control with small step adjustments for fine-tuned centrifugal force and optimized separation." },
      { name: "Pre-selection of running time: 10 sec – 99h 59 min, or continuous", description: "Enables flexible operation duration suitable for quick spins or long-term protocols, adapting to varied lab needs." },
      { name: "Simple one-handed operation", description: "Ergonomically designed for ease of use, allowing efficient setup and control even while wearing gloves." }
    ],

    techSpecs: {
      maxSpeed: "15,000 rpm",
      maxRCF: "21,631 × g",
      maxVolume: "44 × 1.5/2.0 ml",
      speedRange: "200 – 15,000 rpm",
      runningTime: "59m 50s / 10s increments; up to 99h 59m / 1m increments",
      dimensions: "28 × 29 × 39 cm",
      weight: "17 kg",
      drive: "Brushless induction motor",
      cooling: "Air cooling system",
      lid: "Motor-driven and emergency lock"
    }
  },

  "z-216-mk": {
    id: "centrifuge-z-216mk",
    name: "Centrifuge Z 216 MK Microliter Centrifuge",
    image: ImgZ216MK,
    bannerImg: Banner3,
    logo: Hermle,
    altText: "Hermle",
    meta: {
      title: "Centrifuge Z 216 MK Microliter Centrifuge Distributor & Service Provider In India - Hermle- Inkarp Instruments Pvt Ltd",
      description:
        "Discover the Centrifuge Z 216 MK Microliter Centrifuge by Hermle. Perfect for precision tasks in labs. Explore efficiency and reliability with Inkarp Instruments, backed by extensive distribution and service networks across India.",
      keywords: [
        "Centrifuge Z 216 MK Microliter Centrifuge",
        "Hermle",
        "Z 216 MK",
        "microliter centrifuge",
        "refrigerated centrifuge",
        "laboratory centrifuge",
        "high-speed centrifuge",
        "PCR centrifuge",
        "Inkarp India"
      ],
      altText: "Hermle Z 216 MK Microliter Centrifuge"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <!-- Intro -->
  <div class="space-y-4">
    <p>
      <strong>Inkarp Instruments</strong>, a trusted
Hermle partner,
      offers the <strong>Z 216 MK Microliter Centrifuge</strong> in India. 
      Designed for high-speed separation of small volumes, it delivers reliability for
      <strong>research, clinical, and industrial laboratories</strong>.
    </p>
    <p>
      Alongside the Z 216 M, the Z 216 MK sets new standards in this centrifuge class, combining 
      high performance with compact, quiet operation. 
    </p>
    <p>
      Equipped with a <strong>powerful refrigeration system</strong>, it can maintain 
      sample temperatures as low as 4 °C even during continuous operation at 20,000 × g.
    </p>
  </div>
</div>
`,
    features: [
      { name: "Brushless induction drive", description: "Provides maintenance-free, energy-efficient operation with low noise and minimal vibration, ensuring long-term reliability and superior performance in continuous laboratory use." },
      { name: "Microprocessor control", description: "Enables precise regulation of centrifugation parameters such as speed, time, and temperature, ensuring reproducible results with user-friendly digital accuracy." },
      { name: "Active imbalance detection and cut-off", description: "Automatically detects rotor imbalance during operation and safely stops the centrifuge, protecting both equipment and samples from potential damage." },
      { name: "Motor-driven lid lock", description: "Ensures secure and automatic lid locking during centrifugation, preventing accidental opening and enhancing operator safety." },
      { name: "Emergency lid lock", description: "Allows safe manual access to samples in case of power failure or system malfunction, ensuring safety without compromising usability." },
      { name: "Stainless steel chamber", description: "Constructed from durable stainless steel, resistant to corrosion and chemicals, offering easy cleaning and extended equipment lifespan." },
      { name: "CFC-free refrigeration system (-20° to +40°C)", description: "Eco-friendly refrigeration maintains precise temperature control over a wide range, ideal for temperature-sensitive biological and chemical samples." }
    ],

    highlights: [
      { name: "Diagnostic program", description: "Performs automatic system diagnostics to identify potential operational issues early, simplifying maintenance and ensuring uninterrupted performance." },
      { name: "Program memory for 99 programs", description: "Allows users to store and quickly access up to 99 commonly used centrifugation settings, streamlining workflows and ensuring repeatable results." },
      { name: "Quick-key for short runs", description: "Facilitates rapid execution of brief centrifugation cycles with one-touch control, saving time for quick sample preparations." },
      { name: "Pre-cooling program", description: "Prepares the chamber and rotor to the desired temperature before centrifugation begins, preserving sample integrity from the start of the run." },
      { name: "Standstill cooling", description: "Maintains the set cooling temperature even when the centrifuge is idle, ensuring that sensitive samples remain stable before and after operation." },
      { name: "10 acceleration and 10 deceleration rates with unbraked option", description: "Provides adjustable acceleration and deceleration profiles, including an unbraked option for gentle handling of delicate samples." },
      { name: "Permanent indication of preset and actual values", description: "Displays both set and live centrifugation parameters simultaneously, ensuring clear and precise operational monitoring at all times." },
      { name: "Pre-selection of speed or RCF in 50/10 increments", description: "Allows fine adjustment of centrifugal force or speed for precise control, making it adaptable to various research and clinical applications." },
      { name: "Pre-selection of running time: 10 sec – 99h 59 min, or continuous", description: "Supports flexible timing options, suitable for short spins, extended separations, or continuous operation as needed." },
      { name: "Simple one-handed operation", description: "Ergonomically designed for effortless use, enabling convenient and efficient operation even while wearing laboratory gloves." }
    ],

    techSpecs: {
      maxSpeed: "15,000 rpm",
      maxRCF: "21,631 × g",
      maxVolume: "44 × 1.5/2.0 ml",
      speedRange: "200 – 15,000 rpm",
      runningTime: "59m 50s / 10s increments; up to 99h 59m / 1m increments",
      dimensions: "28 × 29 × 55 cm",
      weight: "35 kg",
      drive: "Brushless induction motor",
      cooling: "CFC-free refrigeration system (-20° to +40°C)",
      chamber: "Stainless steel"
    }
  },

  "z-287-a": {
    id: "centrifuge-z-287a",
    name: "Centrifuge Z 287 A Universal Centrifuge",
    image: ImgZ287A,
    bannerImg: Banner3,
    logo: Hermle,
    altText: "Hermle",
    meta: {
      title: "Centrifuge Z 287 A Universal Centrifuge Distributor & Service Provider In India - Hermle- Inkarp Instruments Pvt Ltd",
      description:
        "Discover the Centrifuge Z 287 A Universal Centrifuge at Inkarp Instruments Pvt Ltd. Ideal for various applications—maximize efficiency and reliability, backed by extensive distribution and service networks across India.",
      keywords: [
        "Centrifuge Z 287 A Universal Centrifuge",
        "Hermle",
        "Z 287 A",
        "universal centrifuge",
        "laboratory centrifuge",
        "swing-out rotor centrifuge",
        "hematocrit centrifuge",
        "high-speed centrifuge",
        "Inkarp India"
      ],
      altText: "Hermle Z 287 A Universal Centrifuge"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <!-- Intro -->
  <div class="space-y-4">
    <p>
      <strong>Inkarp Instruments Pvt Ltd</strong> proudly introduces the <strong>Hermle Z 287 A Universal Centrifuge</strong>. 
      Designed to maximize efficiency and reliability, it is supported by Inkarp’s wide distribution and 
      service network across India.
    </p>
    <p>
      The Z 287 A is a true <strong>all-rounder centrifuge</strong>. With eleven rotor options, it covers 
      the most common applications. Whether you require angle rotors, swing-out rotors, plate rotors, or hematocrit 
      rotors, this model ensures flexibility for every laboratory workflow.
    </p>
    <p>
      Its modern design is paired with an <strong>innovative touch-control panel</strong> and 
      LED indicators that show the current operating state, making it both efficient and user-friendly.
    </p>
  </div>
</div>
`,

    features: [
      { name: "Maintenance-free induction drive with microprocessor & large LCD", description: "Combines a powerful, maintenance-free induction motor with intelligent microprocessor control and a bright LCD display for precise parameter management and effortless monitoring during operation." },
      { name: "Electromagnetic lid lock", description: "Ensures enhanced user safety by automatically securing the lid during centrifugation and allowing smooth, controlled access to samples after completion." },
      { name: "Automatic RFID rotor identification system with overspeed protection", description: "Automatically detects and authenticates rotors via RFID technology, preventing overspeed conditions and ensuring compatibility, safety, and traceability of rotor usage." },
      { name: "Active imbalance detection and cut-off (rotor specific)", description: "Continuously monitors rotor-specific balance and automatically stops operation in the event of imbalance, protecting both the centrifuge and the samples from potential damage." },
      { name: "Easy rotor exchange system", description: "Allows tool-free rotor changes in seconds, improving workflow flexibility and minimizing setup time for multiple centrifugation tasks." },
      { name: "Wide variety of rotors & accessories", description: "Offers extensive rotor options and compatible accessories, supporting a diverse range of applications from clinical to research laboratories." },
      { name: "USB interface for software updates", description: "Provides convenient connectivity for quick software upgrades and data management, ensuring the centrifuge remains up-to-date with the latest performance features." },
      { name: "Manufactured according to international safety regulations (IEC 61010)", description: "Meets stringent international safety standards, ensuring reliable operation, electrical protection, and compliance with global laboratory requirements." },
      { name: "Improved ventilation system to keep samples cool", description: "Optimized airflow design reduces heat buildup within the rotor chamber, maintaining stable sample temperatures and protecting temperature-sensitive materials." }
    ],

    highlights: [
      { name: "Touch-operation control panel", description: "Intuitive touch interface enables seamless control and navigation of centrifugation parameters, improving user interaction and efficiency." },
      { name: "One-handed operation", description: "Designed for ergonomic convenience, allowing full operation with one hand for quicker setup and control in busy lab environments." },
      { name: "Easy to program with gloves on", description: "User-friendly control panel is fully responsive to gloved hands, ensuring safety and ease of use during sterile or hazardous sample handling." },
      { name: "Splash-proof foil keyboard", description: "Durable, sealed keyboard resists spills and contamination, maintaining long-term performance and easy cleaning." },
      { name: "Permanent indication of preset and actual values", description: "Continuously displays both target and real-time centrifugation values for accurate and confident process monitoring." },
      { name: "Speed selection in rpm & g-force (increments of 10)", description: "Provides fine-tuned control over centrifugation force or speed, ensuring precise and reproducible separations for various applications." },
      { name: "10 acceleration & deceleration rates, unbraked deceleration option", description: "Offers customizable acceleration and deceleration profiles, including gentle unbraked options for fragile or sensitive samples." },
      { name: "Pre-selection of running time: 10 sec – 99h 59 min", description: "Allows flexible time programming suitable for both short and extended runs, adapting easily to diverse laboratory procedures." },
      { name: "Storage of up to 99 runs", description: "Saves frequently used centrifugation settings for rapid recall, ensuring repeatability and workflow efficiency." },
      { name: "Quick-key for short runs", description: "Enables instant access to rapid spin cycles at the touch of a button, ideal for quick sample clarifications." },
      { name: "Color LED indication of operating state (standstill, standby, centrifugation)", description: "Visual color-coded indicators clearly display the centrifuge’s current status, improving operational awareness and safety." }
    ],

    techSpecs: {
      maxSpeed: "14,000 rpm",
      maxRCF: "16,058 × g",
      maxVolume: "6 × 50 ml",
      speedRange: "200 – 14,000 rpm",
      runningTime: "59m 50s / 10s increments; up to 99h 59m / 1m increments",
      dimensions: "35 × 26 × 43 cm",
      weight: "18 kg",
      drive: "Maintenance-free induction motor with LCD control",
      safety: "RFID rotor ID, overspeed protection, imbalance detection",
      cooling: "Improved ventilation system"
    }
  },

  "z-307": {
    id: "centrifuge-z-307",
    name: "Centrifuge Z 307 Universal Centrifuge",
    image: ImgZ307,
    bannerImg: Banner3,
    logo: Hermle,
    altText: "Hermle",
    meta: {
      title: "Centrifuge Z 307 Universal Centrifuge Distributor & Service Provider In India - Hermle- Inkarp Instruments Pvt Ltd",
      description:
        "Discover the Centrifuge Z 307 Universal Centrifuge by Hermle at Inkarp Instruments Pvt Ltd. Unlock precision and efficiency in your laboratory processes, backed by extensive distribution and service networks across India.",
      keywords: [
        "Centrifuge Z 307 Universal Centrifuge",
        "Hermle",
        "Z 307",
        "universal centrifuge",
        "laboratory centrifuge",
        "swing-out rotor centrifuge",
        "microtitre plate centrifuge",
        "blood tube centrifuge",
        "Inkarp India"
      ],
      altText: "Hermle Z 307 Universal Centrifuge"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <!-- Intro -->
  <div class="space-y-4">
    <p>
      <strong>Inkarp Instruments</strong>, a trusted
    Hermle partner,
      proudly offers the <strong>Z 307 Universal Centrifuge</strong> in India. Backed by expert distribution, installation, training, 
      and comprehensive after-sales support, it is the centrifuge of choice for laboratories seeking reliability and precision.
    </p>
    <p>
      The Z 307 is a small yet <strong>highly versatile universal centrifuge</strong> that meets clinical, research, and industrial 
      laboratory requirements. Its broad range of accessories makes it indispensable for modern lab workflows.
    </p>
    <p>
      Compatible with microtitre plate rotors, high-speed fixed-angle rotors (for reaction vessels or tubes up to 50 ml), 
      and swing-out rotors (up to 4 × 200 ml), it can process tissue culture tubes as well as all common blood tubes. 
      This flexibility ensures outstanding performance in diverse laboratory applications.
    </p>
  </div>
</div>
`,

    features: [
      { name: "Brushless induction drive", description: "Provides maintenance-free, efficient, and quiet operation with long-term durability, ensuring smooth performance even during extended centrifugation cycles." },
      { name: "Microprocessor control", description: "Offers precise management of operational parameters such as speed, RCF, and time, ensuring consistent and reproducible results for all sample types." },
      { name: "Active imbalance detection and cut-off", description: "Continuously monitors rotor balance and automatically halts the centrifuge in case of imbalance, enhancing safety and protecting samples and equipment." },
      { name: "One-hand closing mechanism", description: "Ergonomically designed for convenience, allowing easy lid closure with a single hand while ensuring secure locking during operation." },
      { name: "Motor-driven lid lock", description: "Provides automatic and secure locking during operation, preventing accidental access and ensuring operator safety." },
      { name: "Automatic rotor identification system with overspeed protection", description: "Automatically detects installed rotors and limits maximum allowable speed to prevent overspeeding, ensuring optimal safety and reliability." },
      { name: "Audible signal at end of each run", description: "Notifies users immediately upon completion of centrifugation, streamlining workflow efficiency and reducing idle time." },
      { name: "Emergency lid lock", description: "Enables manual lid opening in emergencies or power failures, providing safe access to samples without compromising system security." },
      { name: "Stainless steel chamber", description: "Built with corrosion-resistant stainless steel for enhanced durability, easy cleaning, and extended service life in laboratory environments." },
      { name: "Air cooling system", description: "Ensures stable temperature control during operation, protecting sensitive samples from heat buildup and maintaining performance consistency." },
      { name: "Autoclavable rotors", description: "Allows complete sterilization for contamination-free operation, supporting stringent hygiene and biosafety requirements in modern labs." }
    ],

    highlights: [
      { name: "Diagnostic program", description: "Runs automatic diagnostic checks to detect potential issues early, simplifying troubleshooting and ensuring reliable performance." },
      { name: "Program memory for 99 programs", description: "Stores up to 99 user-defined protocols, allowing quick recall of frequently used settings for streamlined operation." },
      { name: "Quick-key for short runs", description: "Enables rapid start of brief centrifugation cycles at the touch of a button, ideal for quick sample processing tasks." },
      { name: "10 acceleration and 10 deceleration rates (unbraked option)", description: "Provides adjustable speed profiles, including an unbraked deceleration option for gentle handling of delicate samples." },
      { name: "Permanent display of preset and actual values", description: "Displays both set and real-time centrifugation parameters, ensuring continuous monitoring and operational accuracy." },
      { name: "Pre-selection of speed or RCF in 50/10 increments", description: "Allows fine-tuned adjustment of speed or relative centrifugal force in small increments for precision control." },
      { name: "Running time pre-selection: 10 sec – 99h 59 min, or continuous", description: "Supports a wide timing range to accommodate short spin tests or extended centrifugation protocols as needed." },
      { name: "Simple one-handed operation", description: "Features an intuitive interface and ergonomic layout for effortless, single-handed control even while wearing gloves." }
    ],

    techSpecs: {
      maxSpeed: "14,000 rpm",
      maxRCF: "18,624 × g",
      maxVolume: "4 × 200 ml",
      speedRange: "200 – 14,000 rpm",
      runningTime: "59m 50s / 10s increments; up to 99h 59m / 1m increments",
      dimensions: "35 × 33 × 47 cm",
      weight: "30 kg",
      drive: "Brushless induction motor",
      safety: "Automatic rotor ID with overspeed protection, imbalance detection",
      chamber: "Stainless steel, autoclavable rotors",
      cooling: "Air cooling"
    }
  },

  "z-327": {
    id: "centrifuge-z-327",
    name: "Centrifuge Z 327 Universal Centrifuge",
    image: ImgZ327,
    bannerImg: Banner3,
    logo: Hermle,
    altText: "Hermle",
    meta: {
      title: "Centrifuge Z 327 Universal Centrifuge Distributor & Service Provider In India - Hermle- Inkarp Instruments Pvt Ltd",
      description:
        "Discover the Centrifuge Z 327 Universal Centrifuge by Hermle at Inkarp Instruments Pvt Ltd. Optimize your lab efficiency with this reliable instrument, backed by extensive distribution and service networks across India.",
      keywords: [
        "Centrifuge Z 327 Universal Centrifuge",
        "Hermle",
        "Z 327",
        "Z 327 K",
        "universal centrifuge",
        "laboratory centrifuge",
        "swing-out rotor centrifuge",
        "fixed-angle rotor",
        "microcentrifuge rotors",
        "Inkarp India"
      ],
      altText: "Hermle Z 327 Universal Centrifuge"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <!-- Intro -->
  <div class="space-y-4">
    <p>
      <strong>Inkarp Instruments</strong>, a trusted
      Hermle partner,
      offers the <strong>Z 327 Universal Centrifuge</strong> in India for research, clinical, and industrial laboratories. Our team provides
      expert distribution, installation, training, and comprehensive after-sales support for seamless integration and reliable operation.
    </p>
    <p>
      Both the table-top centrifuge <strong>Z 327</strong> and the refrigerated <strong>Z 327 K</strong> offer a wide assortment of rotor options,
      making them ideal for diverse applications. Switching between swing-out, micro, or high-volume fixed-angle rotors is quick and tool-free,
      taking only seconds.
    </p>
    <p>
      The <strong>Z 327 K</strong> places its refrigeration system at the rear of the unit and is optimized for the lab bench at only <strong>40&nbsp;cm</strong> wide.
    </p>
  </div>

  <!-- Features -->
  <div class="mt-8">
    <h3 class="font-[MaxOT] text-[#E63946] text-lg sm:text-xl font-semibold mb-3">Features &amp; Functions</h3>
    <ul class="list-disc ml-6 space-y-1 text-sm">
      <li>Brushless induction drive</li>
      <li>Microprocessor control</li>
      <li>Motor-driven lid lock</li>
      <li>Automatic rotor identification with overspeed protection</li>
      <li>Audible signal at end of run</li>
      <li>Emergency lid lock</li>
      <li>Stainless steel chamber</li>
      <li>Air cooling (Z 327); rear-mounted refrigeration (Z 327 K)</li>
      <li>Autoclavable rotors</li>
    </ul>
  </div>

  <!-- Display Functions -->
  <div class="mt-8">
    <h3 class="font-[MaxOT] text-[#E63946] text-lg sm:text-xl font-semibold mb-3">Display Functions</h3>
    <ul class="list-disc ml-6 space-y-1 text-sm">
      <li>Diagnostic program</li>
      <li>Program memory for 99 programs</li>
      <li>Quick-key for short runs</li>
      <li>10 acceleration and 10 deceleration rates (unbraked option)</li>
      <li>Permanent display of preset and actual values</li>
      <li>Pre-selection of speed or RCF in 50/10 increments</li>
      <li>Running time pre-selection: 10 sec – 99 h 59 min, or continuous</li>
      <li>Simple one-handed operation</li>
    </ul>
  </div>
</div>
`,

    features: [
      { name: "Brushless induction drive", description: "Delivers smooth, maintenance-free operation with high efficiency, minimal vibration, and quiet performance, ensuring long-lasting reliability in laboratory workflows." },
      { name: "Microprocessor control", description: "Provides precise control over centrifugation parameters such as speed, RCF, and time, enabling reproducible results and easy operation." },
      { name: "Motor-driven lid lock", description: "Automatically secures the lid during operation for enhanced user safety, preventing accidental access while the rotor is spinning." },
      { name: "Automatic rotor identification with overspeed protection", description: "Automatically detects the installed rotor and limits the maximum permissible speed to prevent overspeeding and protect both samples and instrument integrity." },
      { name: "Audible signal at end of run", description: "Alerts the operator upon completion of centrifugation, ensuring timely sample retrieval and efficient workflow management." },
      { name: "Emergency lid lock", description: "Includes an emergency release mechanism allowing manual access in the event of power failure, maintaining safety and accessibility." },
      { name: "Stainless steel chamber", description: "Features a durable, corrosion-resistant stainless steel interior for easy cleaning and long-term reliability in demanding lab environments." },
      { name: "Air cooling (Z 327); rear-mounted refrigeration (Z 327 K)", description: "Offers efficient air cooling in the standard model and rear-mounted refrigeration in the Z 327 K variant for temperature-sensitive samples." },
      { name: "Autoclavable rotors", description: "Supports rotor sterilization through autoclaving to ensure contamination-free operation and compliance with laboratory hygiene standards." }
    ],

    highlights: [
      { name: "Diagnostic program", description: "Performs self-check routines to identify potential operational issues early, minimizing downtime and simplifying maintenance." },
      { name: "Program memory for 99 programs", description: "Stores up to 99 user-defined centrifugation programs, ensuring consistent repeatability and quick access to frequently used settings." },
      { name: "Quick-key for short runs", description: "Allows immediate activation of short centrifugation cycles at the press of a button, saving time for rapid sample processing." },
      { name: "10 acceleration and 10 deceleration rates (unbraked option)", description: "Offers customizable acceleration and braking profiles, including an unbraked deceleration mode for gentle sample handling." },
      { name: "Permanent display of preset and actual values", description: "Displays both set and real-time parameters simultaneously, ensuring transparency and accuracy throughout centrifugation." },
      { name: "Pre-selection of speed or RCF in 50/10 increments", description: "Allows fine adjustment of rotational speed or relative centrifugal force in small increments for precise control." },
      { name: "Running time pre-selection: 10 sec – 99 h 59 min, or continuous", description: "Provides flexible timing options suitable for both quick spin-downs and extended centrifugation protocols." },
      { name: "Simple one-handed operation", description: "Designed for intuitive, ergonomic use, allowing operators to efficiently manage all controls even when wearing laboratory gloves." }
    ],


    techSpecs: {
      maxSpeed: "18,000 rpm",
      maxRCF: "23,542 × g",
      maxVolume: "4 × 200 ml",
      speedRange: "200 – 18,000 rpm",
      runningTime: "59 min 50 s / 10 s increments; 99 h 59 min / 1 min increments",
      dimensions: "40 × 36 × 48 cm",
      weight: "43 kg",
      drive: "Brushless induction motor",
      safety: "Automatic rotor ID with overspeed protection; emergency lid lock",
      chamber: "Stainless steel; autoclavable rotors",
      cooling: "Air cooling (Z 327); refrigerated variant available (Z 327 K, rear-mounted system)",
      notes: "Z 327 K optimized bench width ~40 cm"
    }
  },

  "z-327-k": {
    id: "centrifuge-z-327k",
    name: "Centrifuge Z 327 K Universal Centrifuge",
    image: ImgZ327K,
    bannerImg: Banner3,
    logo: Hermle,
    altText: "Hermle",
    meta: {
      title: "Centrifuge Z 327 K Universal Centrifuge Distributor & Service Provider In India - Hermle- Inkarp Instruments Pvt Ltd",
      description:
        "Discover the Centrifuge Z 327 K Universal Centrifuge by Hermle at Inkarp Instruments Pvt Ltd. Enhance your lab processes with advanced technology, backed by extensive distribution and service networks across India.",
      keywords: [
        "Centrifuge Z 327 K Universal Centrifuge",
        "Hermle",
        "Z 327 K",
        "refrigerated centrifuge",
        "universal centrifuge",
        "laboratory centrifuge",
        "swing-out rotor centrifuge",
        "fixed-angle rotor centrifuge",
        "microcentrifuge",
        "Inkarp India"
      ],
      altText: "Hermle Z 327 K Universal Centrifuge"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <!-- Intro -->
  <div class="space-y-4">
    <p>
      <strong>Inkarp Instruments</strong>, a trusted
      Hermle partner,
      offers the <strong>Z 327 K Universal Centrifuge</strong> in India. With expert distribution, installation, training, and after-sales
      support, Inkarp ensures reliable integration and operation for research, clinical, and industrial laboratories.
    </p>
    <p>
      Both the table-top centrifuge <strong>Z 327</strong> and the refrigerated <strong>Z 327 K</strong> provide a wide range of rotor
      options, making them highly versatile. Rotor exchange between swing-out, micro, or high-volume fixed-angle rotors is quick and
      effortless, taking only seconds.
    </p>
    <p>
      The <strong>Z 327 K</strong> integrates a CFC-free refrigeration system at the rear, optimized for bench use at just
      <strong>40&nbsp;cm</strong> width, while offering precise temperature control between -20°C and +40°C.
    </p>
  </div>
</div>
`,

    features: [
      { name: "Brushless induction drive", description: "Provides smooth, maintenance-free, and energy-efficient operation with minimal noise and vibration, ensuring reliability and longevity in continuous laboratory use." },
      { name: "Microprocessor control", description: "Delivers precise control over key parameters such as speed, time, and temperature, enabling reproducible and accurate centrifugation results." },
      { name: "Active imbalance detection and cut-off", description: "Continuously monitors rotor balance and automatically stops the centrifuge in case of imbalance, protecting samples and extending equipment life." },
      { name: "Motor-driven lid lock", description: "Ensures automatic and secure locking during operation, preventing accidental lid opening and enhancing safety during high-speed runs." },
      { name: "Automatic rotor identification with overspeed protection", description: "Automatically detects installed rotors and limits maximum speed to prevent overspeeding, ensuring safe and compliant centrifugation." },
      { name: "Audible signal at end of run", description: "Provides an audio alert when centrifugation completes, allowing users to efficiently manage workflow without constant monitoring." },
      { name: "Emergency lid lock", description: "Includes an emergency release mechanism for manual access to samples in the event of power loss or operational interruptions." },
      { name: "Stainless steel chamber", description: "Corrosion-resistant stainless steel construction ensures durability, easy cleaning, and reliable performance in high-demand lab environments." },
      { name: "CFC-free refrigeration system (-20°C to +40°C)", description: "Environmentally friendly cooling system maintains precise temperature control for sensitive biological and chemical samples." },
      { name: "Autoclavable rotors", description: "Allows complete sterilization for contamination-free operation and compliance with modern laboratory hygiene standards." }
    ],

    highlights: [
      { name: "Diagnostic program", description: "Performs automated self-checks to identify operational issues early, minimizing downtime and simplifying maintenance." },
      { name: "Program memory for 99 programs", description: "Stores up to 99 frequently used protocols for easy recall, ensuring reproducibility and convenience in routine workflows." },
      { name: "Quick-key for short runs", description: "Facilitates instant execution of brief centrifugation cycles with one-touch access, ideal for rapid sample processing tasks." },
      { name: "Pre-cooling program", description: "Pre-chills the rotor chamber before operation to the desired temperature, maintaining sample integrity throughout the process." },
      { name: "Standstill cooling", description: "Maintains temperature stability even when the centrifuge is idle, ensuring sample preservation between runs." },
      { name: "10 acceleration and 10 deceleration rates (unbraked option)", description: "Offers flexible control over acceleration and braking profiles, including gentle unbraked deceleration for delicate samples." },
      { name: "Permanent display of preset and actual values", description: "Simultaneously shows target and real-time operating parameters for continuous monitoring and control accuracy." },
      { name: "Pre-selection of speed or RCF in 50/10 increments", description: "Provides fine-tuned adjustment of centrifugal force or speed for precision control and reproducibility." },
      { name: "Running time pre-selection: 10 sec – 99 h 59 min, or continuous", description: "Offers versatile timing options to accommodate short spin cycles or extended experimental runs." },
      { name: "Simple one-handed operation", description: "Designed for ergonomic, glove-friendly operation, enabling efficient handling and ease of use in busy lab environments." }
    ],


    techSpecs: {
      maxSpeed: "18,000 rpm",
      maxRCF: "23,542 × g",
      maxVolume: "4 × 200 ml",
      speedRange: "200 – 18,000 rpm",
      temperature: "-20°C to +40°C",
      runningTime: "59 min 50 s / 10 s increments; 99 h 59 min / 1 min increments",
      dimensions: "40 × 36 × 70 cm",
      weight: "60 kg",
      drive: "Brushless induction motor",
      safety: "Automatic rotor ID with overspeed protection; imbalance detection; emergency lid lock",
      chamber: "Stainless steel; autoclavable rotors",
      cooling: "CFC-free refrigeration system with pre-cooling and standstill cooling"
    }
  },

  "z-366": {
    id: "centrifuge-z-366",
    name: "Centrifuge Z 366 Universal Centrifuge",
    image: ImgZ366,              // import this image from your assets
    bannerImg: Banner3,          // reuse or replace with a dedicated banner if available
    logo: Hermle,                // Hermle logo import
    altText: "Hermle",
    meta: {
      title: "Hermle Z 366 Universal Centrifuge | Inkarp India",
      description:
        "Hermle Z 366 Universal Centrifuge is a high-powered centrifuge for research, clinical, and industrial laboratories. With a max speed of 15,000 rpm, max RCF of 21,379 × g, and volume capacity up to 6 × 250 ml, it supports a broad range of rotors. Distributed & serviced by Inkarp Instruments in India.",
      keywords: [
        "Hermle",
        "Z 366",
        "universal centrifuge",
        "laboratory centrifuge",
        "swing-out rotor centrifuge",
        "high-power centrifuge",
        "blood tube centrifuge",
        "Inkarp India"
      ],
      altText: "Hermle Z 366 Universal Centrifuge"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <!-- Intro -->
  <div class="space-y-4">
    <span class="text-base font-medium text-[#BE0010] mt-1 inline-block">Distributor &amp; Service Provider In India</span>
    <p>
      <strong>Inkarp Instruments</strong>, a trusted
      <a class="underline text-[#BE0010]" href="https://www.hermle-labortechnik.de/en/" target="_blank" rel="noopener">Hermle</a> partner,
      offers the <strong>Z 366 Universal Centrifuge</strong> in India. Designed for research, clinical, and industrial labs, Inkarp provides
      expert distribution, installation, training, and after-sales support to ensure reliable operation and seamless integration.
    </p>
    <p>
      The <strong>Z 366 and Z 366 K</strong> table-top centrifuges set new benchmarks for versatility, ease of handling, and powerful
      performance. With capacities up to <strong>40 × 15 ml conical tubes</strong> and centrifugal forces reaching <strong>21,379 × g</strong>,
      the Z 366 delivers exceptional throughput for demanding laboratory workflows.
    </p>
  </div>

  <!-- Specs -->
  <div class="mt-6 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200">
    <h3 class="font-[MaxOT] text-[#E63946] text-lg sm:text-xl font-semibold mb-3">Specifications</h3>
    <ul class="list-disc ml-6 space-y-1 text-sm">
      <li>Max. Speed: 15,000 rpm</li>
      <li>Max. RCF: 21,379 × g</li>
      <li>Max. Volume: 6 × 250 ml</li>
      <li>Speed Range: 200 – 15,000 rpm</li>
      <li>Running Time: 59 min 50 s / 10 s increments; 99 h 59 min / 1 min increments</li>
      <li>Dimensions (W × H × D): 43 × 36 × 51 cm</li>
      <li>Weight: 52 kg</li>
    </ul>
  </div>

  <!-- Features -->
  <div class="mt-8">
    <h3 class="font-[MaxOT] text-[#E63946] text-lg sm:text-xl font-semibold mb-3">Features &amp; Functions</h3>
    <ul class="list-disc ml-6 space-y-1 text-sm">
      <li>Brushless induction drive</li>
      <li>Microprocessor control</li>
      <li>Motor-driven lid lock</li>
      <li>Automatic rotor identification with overspeed protection</li>
      <li>Audible signal at end of each run</li>
      <li>Emergency lid lock</li>
      <li>Stainless steel chamber</li>
      <li>Air cooling system</li>
      <li>Autoclavable rotors</li>
    </ul>
  </div>

  <!-- Display Functions -->
  <div class="mt-8">
    <h3 class="font-[MaxOT] text-[#E63946] text-lg sm:text-xl font-semibold mb-3">Display Functions</h3>
    <ul class="list-disc ml-6 space-y-1 text-sm">
      <li>Diagnostic program</li>
      <li>Program memory for 99 programs</li>
      <li>Quick-key for short runs</li>
      <li>10 acceleration and 10 deceleration rates (unbraked option)</li>
      <li>Permanent display of preset and actual values</li>
      <li>Pre-selection of speed or RCF in 50/10 increments</li>
      <li>Running time pre-selection: 10 sec – 99 h 59 min, or continuous</li>
      <li>Simple one-handed operation</li>
    </ul>
  </div>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],

    techSpecs: {
      maxSpeed: "15,000 rpm",
      maxRCF: "21,379 × g",
      maxVolume: "6 × 250 ml",
      speedRange: "200 – 15,000 rpm",
      runningTime: "59 min 50 s / 10 s increments; 99 h 59 min / 1 min increments",
      dimensions: "43 × 36 × 51 cm",
      weight: "52 kg",
      drive: "Brushless induction motor",
      safety: "Automatic rotor ID with overspeed protection; emergency lid lock",
      chamber: "Stainless steel; autoclavable rotors",
      cooling: "Air cooling system"
    }
  },

  "z-366-k": {
    id: "centrifuge-z-366k",
    name: "Centrifuge Z 366 K Universal Centrifuge",
    image: ImgZ366K,             // import this image from your assets
    bannerImg: Banner3,          // reuse or replace with a dedicated banner if available
    logo: Hermle,                // Hermle logo import
    altText: "Hermle",
    meta: {
      title: "Hermle Z 366 K Universal Centrifuge | Inkarp India",
      description:
        "Hermle Z 366 K Universal Centrifuge is a refrigerated high-powered centrifuge for research, clinical, and industrial labs. With a max speed of 16,000 rpm, max RCF of 24,325 × g, and volume capacity up to 6 × 250 ml, it supports a wide range of rotors. Featuring a CFC-free refrigeration system (-20°C to +40°C), it is distributed & serviced by Inkarp Instruments in India.",
      keywords: [
        "Hermle",
        "Z 366 K",
        "refrigerated centrifuge",
        "universal centrifuge",
        "laboratory centrifuge",
        "high-power centrifuge",
        "swing-out rotor centrifuge",
        "Inkarp India"
      ],
      altText: "Hermle Z 366 K Universal Centrifuge"
    },

    description: `
<div class="font-[Roboto] text-[#333]">
  <!-- Intro -->
  <div class="space-y-4">
    <span class="text-base font-medium text-[#BE0010] mt-1 inline-block">Distributor &amp; Service Provider In India</span>
    <p>
      <strong>Inkarp Instruments</strong>, a trusted
      <a class="underline text-[#BE0010]" href="https://www.hermle-labortechnik.de/en/" target="_blank" rel="noopener">Hermle</a> partner,
      offers the <strong>Z 366 K Universal Centrifuge</strong> in India. Designed for research, clinical, and industrial laboratories,
      Inkarp ensures seamless integration, reliable operation, and strong after-sales support.
    </p>
    <p>
      The <strong>Z 366</strong> and <strong>Z 366 K</strong> centrifuges redefine versatility, ease of use, and performance. With capacity
      for <strong>40 × 15 ml conical tubes</strong> and centrifugal forces up to <strong>24,325 × g</strong>, the Z 366 K is a universal,
      high-powered refrigerated centrifuge.
    </p>
  </div>

  <!-- Specs -->
  <div class="mt-6 bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 border border-gray-200">
    <h3 class="font-[MaxOT] text-[#E63946] text-lg sm:text-xl font-semibold mb-3">Specifications</h3>
    <ul class="list-disc ml-6 space-y-1 text-sm">
      <li>Max. Speed: 16,000 rpm</li>
      <li>Max. RCF: 24,325 × g</li>
      <li>Max. Volume: 6 × 250 ml</li>
      <li>Speed Range: 200 – 16,000 rpm</li>
      <li>Temperature Range: -20°C to +40°C</li>
      <li>Running Time: 59 min 50 s / 10 s increments; 99 h 59 min / 1 min increments</li>
      <li>Dimensions (W × H × D): 72 × 36 × 51 cm</li>
      <li>Weight: 77 kg</li>
    </ul>
  </div>

  <!-- Features -->
  <div class="mt-8">
    <h3 class="font-[MaxOT] text-[#E63946] text-lg sm:text-xl font-semibold mb-3">Features &amp; Functions</h3>
    <ul class="list-disc ml-6 space-y-1 text-sm">
      <li>Brushless induction drive</li>
      <li>Microprocessor control</li>
      <li>Active imbalance detection and cut-off</li>
      <li>Motor-driven lid lock</li>
      <li>Automatic rotor identification with overspeed protection</li>
      <li>Audible signal at end of each run</li>
      <li>Emergency lid lock</li>
      <li>Stainless steel chamber</li>
      <li>CFC-free refrigeration system (-20°C to +40°C)</li>
      <li>Autoclavable rotors</li>
    </ul>
  </div>

  <!-- Display Functions -->
  <div class="mt-8">
    <h3 class="font-[MaxOT] text-[#E63946] text-lg sm:text-xl font-semibold mb-3">Display Functions</h3>
    <ul class="list-disc ml-6 space-y-1 text-sm">
      <li>Diagnostic program</li>
      <li>Program memory for 99 programs</li>
      <li>Quick-key for short runs</li>
      <li>Pre-cooling program</li>
      <li>Standstill cooling</li>
      <li>10 acceleration and 10 deceleration rates (unbraked option)</li>
      <li>Permanent display of preset and actual values</li>
      <li>Pre-selection of speed or RCF in 50/10 increments</li>
      <li>Running time pre-selection: 10 sec – 99 h 59 min, or continuous</li>
      <li>Simple one-handed operation</li>
    </ul>
  </div>
</div>
`,

    features: [],
    advantages: [],
    highlights: [],
    faqs: [],

    techSpecs: {
      maxSpeed: "16,000 rpm",
      maxRCF: "24,325 × g",
      maxVolume: "6 × 250 ml",
      speedRange: "200 – 16,000 rpm",
      temperature: "-20°C to +40°C",
      runningTime: "59 min 50 s / 10 s increments; 99 h 59 min / 1 min increments",
      dimensions: "72 × 36 × 51 cm",
      weight: "77 kg",
      drive: "Brushless induction motor",
      safety: "Automatic rotor ID with overspeed protection; imbalance detection; emergency lid lock",
      chamber: "Stainless steel; autoclavable rotors",
      cooling: "CFC-free refrigeration system with pre-cooling and standstill cooling"
    }
  },

};
