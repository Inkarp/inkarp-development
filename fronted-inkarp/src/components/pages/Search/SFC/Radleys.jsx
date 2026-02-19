
import ImgBreeze from "/images/products/radleys/E1-Breeze-1000x1000-1.jpg";
import ImgCarousel6Plus from "/images/products/radleys/E1-Carousel-6-Plus_1000x1000.jpg";
import ImgCarousel12Plus from "/images/products/radleys/E1-Carousel-12-Pus_1000x1000.jpg";
import ImgCarouselWorkUp from "/images/products/radleys/E1-Carousel-WorkUp_1000x1000.jpg";
import ImgCoolIt from "/images/products/radleys/E1-Cool-it_1000x1000.jpg";
import ImgCooledCarousel12Plus from "/images/products/radleys/E1-Cooled-Carousel-12-Plus_1000x1000.jpg";
import ImgCustomReactionSystems from "/images/products/radleys/E1-Custom-Reaction-Systems-1000x1000-1.jpg";
import ImgFilterVessel from "/images/products/radleys/E1-Filter-Vessel.jpg";
import ImgFindenser from "/images/products/radleys/E1-Findenser_1000x1000.jpg";
import ImgGHBlowdown from "/images/products/radleys/E1-GreenHouse-Blowdown-Evaporator-1000x1000-1.jpg";
import ImgGHPlusSynthesiser from "/images/products/radleys/E1-GreenHouse-Plus-Parallel-Synthesiser-1000x1000-1.jpg";
import ImgGHWorkUp from "/images/products/radleys/E1-GreenHouse-Work-up-1000x1000-1.jpg";
import ImgHeatOn from "/images/products/radleys/E1-Heat-On_1000x1000.jpg";
import ImgMya4Glassware from "/images/products/radleys/E1-Mya-4-Glassware_1000x1000.jpg";
import ImgRRDuo from "/images/products/radleys/E1-Reactor-Ready-Duo-1000x1000-1.jpg";
import ImgRRLabReactor from "/images/products/radleys/E1-Reactor-Ready-Lab-Reactor-1000x1000-2.jpg";
import ImgRRPilot from "/images/products/radleys/E1-RR-Pilot-Front-Cover-hr_1000x1000.jpg";
import ImgStarFish from "/images/products/radleys/E1-StarFish-Work-Station-1000x1000-1.jpg";
import ImgStorm from "/images/products/radleys/E1-Storm-1000x1000-1.jpg";
import ImgTornado from "/images/products/radleys/Tornado.webp";
import ImgCarouselHotplate from "/images/products/radleys/E4-Carousel-Core-Hotplate-Hero-temp-v2.jpg";
import ImgMya4Stations from "/images/products/radleys/E4-Mya-4-reaction-stations.jpg";
import ImgMya4Control from "/images/products/radleys/E4-Mya-Control-options.jpg";

const Radleys = {
  vertical: "Synthesis and Flow Chemistry",
  principal: "Radleys",
  // logo: RadleysLogo, // uncomment when you add the logo import
  products: [
    {
      name: "Automated Reaction Stations",
      slug: "automated-reaction-stations",
      models: [
        { name: "Mya 4 Reaction Station", slug: "mya-4-reaction-station", image: ImgMya4Stations ,keywords:["reaction station", "automated synthesis"," parallel chemistry system"," jacketed reactor control"]},
        { name: "Mya 4 Control options", slug: "mya-4-control-options", image: ImgMya4Control ,keywords:["reaction station", "automated synthesis"," parallel chemistry system"," jacketed reactor control"]},
        { name: "Mya 4 vessels and accessories", slug: "mya-4-vessels-and-accessories", image: ImgMya4Glassware,keywords:["reaction station", "automated synthesis"," parallel chemistry system"," jacketed reactor control"] },
      ],
    },
    {
      name: "AVA Lab Control Software",
      slug: "ava-lab-control-software",
      models: [
        { name: "AVA Lab Control Software", slug: "ava-lab-control-software", image: ImgMya4Control ,keywords:["chemistry automation software", "reactor control software"]},
      ],
    },
    {
      name: "Parallel Reaction Stations",
      slug: "parallel-reaction-stations",
      models: [
        { name: "Carousel 12 Plus Reaction Station", slug: "carousel-12-plus", image: ImgCarousel12Plus,keywords:["parallel synthesis", "multi position reactor"," reflux station"] },
        { name: "Cooled Carousel 12 Plus Reaction Station", slug: "cooled-carousel-12-plus", image: ImgCooledCarousel12Plus ,keywords:["parallel synthesis", "multi position reactor"," reflux station"]},
        { name: "Carousel Work-Up Station", slug: "carousel-work-up-station", image: ImgCarouselWorkUp ,keywords:["parallel synthesis", "multi position reactor"," reflux station"]},
        { name: "Carousel 6 Plus Reaction Station", slug: "carousel-6-plus", image: ImgCarousel6Plus ,keywords:["parallel synthesis", "multi position reactor"," reflux station"]},
        { name: "Tornado Overhead Stirring System", slug: "tornado-overhead-stirring-system", image: ImgTornado,keywords:["parallel synthesis", "multi position reactor"," reflux station"] },
        { name: "GreenHouse Plus Parallel Synthesiser", slug: "greenhouse-plus-parallel-synthesiser", image: ImgGHPlusSynthesiser,keywords:["parallel synthesis", "multi position reactor"," reflux station"] },
        { name: "GreenHouse Blowdown Evaporator", slug: "greenhouse-blowdown-evaporator", image: ImgGHBlowdown ,keywords:["parallel synthesis", "multi position reactor"," reflux station"]},
        { name: "GreenHouse Work-Up Station", slug: "greenhouse-work-up-station", image: ImgGHWorkUp ,keywords:["parallel synthesis", "multi position reactor"," reflux station"]},
        { name: "Storm Heating/Cooling Work Station", slug: "storm-heating-cooling-work-station", image: ImgStorm ,keywords:["parallel synthesis", "multi position reactor"," reflux station"]},
        { name: "Breeze Heating/Cooling Work Station", slug: "breeze-heating-cooling-work-station", image: ImgBreeze,keywords:["parallel synthesis", "multi position reactor"," reflux station"] },
        // { name: "StarFish Work Station", slug: "starfish-work-station", image: ImgStarFish },
      ],
    },
    {
      name: "Jacketed Lab Reactors",
      slug: "jacketed-lab-reactors",
      models: [
        { name: "Reactor-Ready Lab Reactor", slug: "reactor-ready-lab-reactor", image: ImgRRLabReactor ,keywords:["jacketed glass reactor", "lab scale reactor", "chemical synthesis reactor"]},
        { name: "Reactor-Ready Filter Lab Reactor", slug: "reactor-ready-filter-lab-reactor", image: ImgFilterVessel,keywords:["jacketed glass reactor", "lab scale reactor", "chemical synthesis reactor"] },
        { name: "Reactor-Ready Duo Lab Reactor", slug: "reactor-ready-duo-lab-reactor", image: ImgRRDuo,keywords:["jacketed glass reactor", "lab scale reactor", "chemical synthesis reactor"] },
        { name: "Reactor-Ready Pilot Lab Reactor", slug: "reactor-ready-pilot-lab-reactor", image: ImgRRPilot ,keywords:["pilot scale reactor", "kilo lab reactor", "process development reactor"]},
        { name: "Custom Jacketed Reaction Systems", slug: "custom-jacketed-reaction-systems", image: ImgCustomReactionSystems ,keywords:["jacketed glass reactor", "lab scale reactor", "chemical synthesis reactor"]},
      ],
    },
    {
      name: "Benchtop and Hotplate Tools",
      slug: "benchtop-and-hotplate-tools",
      models: [
        { name: "Carousel Stirring Hotplates", slug: "carousel-stirring-hotplates", image: ImgCarouselHotplate },
        { name: "Findenser Super Air Condenser", slug: "findenser-super-air-condenser", image: ImgFindenser,keywords:["air condenser, waterless condenser"," green chemistry condenser"] },
        { name: "Heat-On Block System", slug: "heat-on-block-system", image: ImgHeatOn ,keywords:["heating block for flasks", "oil bath alternative"]},
        { name: "Cool-It Bowl – Insulated Bowls", slug: "cool-it-bowl-insulated-bowls", image: ImgCoolIt },
        { name: "StarFish Work Station", slug: "starfish-work-station", image: ImgStarFish },
      ],
    },
  ],
};

export { Radleys };
