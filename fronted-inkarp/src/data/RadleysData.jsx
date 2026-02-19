// Radleys images (use exact paths/names)
import ImgBreeze from "/images/products/radleys/E1-Breeze-1000x1000-1.jpg";
import ImgCarousel6Plus from "/images/products/radleys/E1-Carousel-6-Plus_1000x1000.jpg";
import ImgCarousel12Plus from "/images/products/radleys/12-plus.webp";
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
import ImgMya4Stations from "/images/products/radleys/mya-4.png";
import ImgMya4Control from "/images/products/radleys/E4-Mya-Control-options.jpg";
import ImgAvaLabSoftware from "/images/products/radleys/AvaLabSoftware.webp";


export const RadleysData = {
    "automated-reaction-stations": {
        models: [
            { heading: "Automated Reaction Stations" },
            { name: "Mya 4 Reaction Station", slug: "mya-4-reaction-station", image: ImgMya4Stations },
            { name: "Mya 4 Control options", slug: "mya-4-control-options", image: ImgMya4Control },
            { name: "Mya 4 vessels and accessories", slug: "mya-4-vessels-and-accessories", image: ImgMya4Glassware },
        ],
        meta: {
            title: "Radleys Automated Reaction Stations | Inkarp India",
            description: "Mya 4 automated parallel reaction platform, control options, and compatible vessels/accessories.",
            keywords: ["Radleys", "Mya 4", "automated reaction station", "parallel synthesis"],
            altText: "Radleys Mya 4 systems",
        },
    },

    "ava-lab-control-software": {
        models: [
            { heading: "AVA Lab Control Software" },
            { name: "AVA Lab Control Software", slug: "ava-lab-control-software", image: ImgAvaLabSoftware },
        ],
        meta: {
            title: "Radleys AVA Lab Control Software | Inkarp India",
            description: "AVA software for data logging and control of Radleys equipment and third-party devices.",
            keywords: ["Radleys", "AVA", "lab control software", "data logging"],
            altText: "AVA software",
        },
    },

    "parallel-reaction-stations": {
        models: [
            { heading: "Parallel Reaction Stations" },
            { name: "Carousel 12 Plus Reaction Station", slug: "carousel-12-plus", image: ImgCarousel12Plus },
            { name: "Cooled Carousel 12 Plus Reaction Station", slug: "cooled-carousel-12-plus", image: ImgCooledCarousel12Plus },
            { name: "Carousel Work-Up Station", slug: "carousel-work-up-station", image: ImgCarouselWorkUp },
            { name: "Carousel 6 Plus Reaction Station", slug: "carousel-6-plus", image: ImgCarousel6Plus },
            { name: "Tornado Overhead Stirring System", slug: "tornado-overhead-stirring-system", image: ImgTornado },
            { name: "GreenHouse Plus Parallel Synthesiser", slug: "greenhouse-plus-parallel-synthesiser", image: ImgGHPlusSynthesiser },
            { name: "GreenHouse Blowdown Evaporator", slug: "greenhouse-blowdown-evaporator", image: ImgGHBlowdown },
            { name: "GreenHouse Work-Up Station", slug: "greenhouse-work-up-station", image: ImgGHWorkUp },
            { name: "Storm Heating/Cooling Work Station", slug: "storm-heating-cooling-work-station", image: ImgStorm },
            { name: "Breeze Heating/Cooling Work Station", slug: "breeze-heating-cooling-work-station", image: ImgBreeze },
            //   { name: "StarFish Work Station", slug: "starfish-work-station", image: ImgStarFish },
        ],
        meta: {
            title: "Radleys Parallel Reaction Stations | Inkarp India",
            description: "Carousel and GreenHouse platforms for parallel synthesis, work-up, and process development.",
            keywords: ["Radleys", "Carousel", "GreenHouse", "Tornado", "StarFish", "parallel reaction"],
            altText: "Radleys parallel reaction stations",
        },
    },

    "jacketed-lab-reactors": {
        models: [
            { heading: "Jacketed Lab Reactors" },
            { name: "Reactor-Ready Lab Reactor", slug: "reactor-ready-lab-reactor", image: ImgRRLabReactor },
            { name: "Reactor-Ready Filter Lab Reactor", slug: "reactor-ready-filter-lab-reactor", image: ImgFilterVessel },
            { name: "Reactor-Ready Duo Lab Reactor", slug: "reactor-ready-duo-lab-reactor", image: ImgRRDuo },
            { name: "Reactor-Ready Pilot Lab Reactor", slug: "reactor-ready-pilot-lab-reactor", image: ImgRRPilot },
            { name: "Custom Jacketed Reaction Systems", slug: "custom-jacketed-reaction-systems", image: ImgCustomReactionSystems },
        ],
        meta: {
            title: "Radleys Jacketed Lab Reactors | Inkarp India",
            description: "Single and multi-vessel Reactor-Ready systems, pilot reactors, filter vessels, and custom rigs.",
            keywords: ["Radleys", "Reactor-Ready", "jacketed reactor", "pilot reactor", "filter reactor"],
            altText: "Radleys jacketed lab reactors",
        },
    },

    "benchtop-and-hotplate-tools": {
        models: [
            { heading: "Benchtop and Hotplate Tools" },
            { name: "Carousel Stirring Hotplates", slug: "carousel-stirring-hotplates", image: ImgCarouselHotplate },
            { name: "Findenser Super Air Condenser", slug: "findenser-super-air-condenser", image: ImgFindenser },
            { name: "Heat-On Block System", slug: "heat-on-block-system", image: ImgHeatOn },
            { name: "Cool-It Bowl – Insulated Bowls", slug: "cool-it-bowl-insulated-bowls", image: ImgCoolIt },
            { name: "StarFish Work Station", slug: "starfish-work-station", image: ImgStarFish },
        ],
        meta: {
            title: "Radleys Benchtop & Hotplate Tools | Inkarp India",
            description: "Hotplates, condensers, heating/cooling blocks, bowls, and modular accessories for day-to-day chemistry.",
            keywords: ["Radleys", "Findenser", "Heat-On", "Carousel hotplate", "Cool-It", "StarFish"],
            altText: "Radleys benchtop tools",
        },
    },
};
