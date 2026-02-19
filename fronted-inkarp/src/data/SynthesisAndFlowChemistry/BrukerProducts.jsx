import React, { useState } from "react";
// Logos & Images
import Bruker from "/src/assets/PrincipalLogos/RowSeven/Bruker.svg";
import AtrLibrary from "/images/products/Bruker/atr-library.jpeg";
import BannerAlpha from "/images/products/Bruker/banner-alpha.png";
import BannerFtNir from "/images/products/Bruker/banner-ft-nir.png";
import BannerFtirFtNir from "/images/products/Bruker/banner-ftir-ft-nir.png";
import BravoHandheld from "/images/products/Bruker/BRAVO-handheld.jpeg";
import DrugPille from "/images/products/Bruker/drug-pille.jpeg";
import HtsXtBanner from "/images/products/Bruker/hts-xt-banner.png";
import HyperionFtirMicroscope from "/images/products/Bruker/hyperion-FTIR-microscope.jpeg";
import InvenioFtirSpectrometer from "/images/products/Bruker/invenio-ft-ir-spectrometer.png";
import LumosMicroscope from "/images/products/Bruker/lumous-microscope.jpeg";
import MatrixFiiBannerBruker from "/images/products/Bruker/matrix-f-ii-banner-bruker.png";
import MobileIriiBannerAward from "/images/products/Bruker/mobile-ir-ii-banner-award.png";
import MpaIiAnalyzer from "/images/products/Bruker/mpa-ii-multi-purpose-analyzer.png";
import MultiRAMFTRamanSpectrometer from "/images/products/Bruker/MultiRAM-FT-Raman-Spectrometer.jpeg";
import SenterraIiRamanMicroscope from "/images/products/Bruker/senterra-ii-raman-microscope.png";
import TangoFtNirSpectrometer from "/images/products/Bruker/tango-ft-nir-spectrometer.png";
import TgFtirThermogravimetricAnalysis from "/images/products/Bruker/tg-ftir-thermogravimetric-analysis.png";
import VertexResearchFtirSpectrometer from "/images/products/Bruker/vertex-research-ft-ir-spectrometer.png";


import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";
import Banner3 from "/images/products/Banner/Banner3.jpg";


export const BrukerProducts = {


    // "hts-xt-ftir-microplate-reader": {
    //     id: "hts-xt-ftir-microplate-reader",
    //     name: "HTS-XT FTIR Microplate Reader",
    //     image: HtsXtBanner, // replace with actual import
    //     logo: Bruker, // replace with actual import
    //     bannerImg: Banner1, // replace with actual import
    //     altText: "Bruker",
    //     videoId: "",

    //     meta: {
    //         title: "HTS-XT FTIR Microplate Reader Distributor and Service Provider in India | Bruker | Inkarp",
    //         description: "Explore the Bruker HTS-XT FTIR Microplate Reader – a compact, automated infrared-based solution for high-throughput screening of liquid and solid samples. Distributed and supported by Inkarp Instruments across India.",
    //         keywords: [
    //             "HTS-XT FTIR Microplate Reader",
    //             "Bruker HTS-XT Distributor India",
    //             "High-throughput FTIR Analysis",
    //             "FTIR Microplate Reader India",
    //             "Infrared Microplate Screening",
    //             "Inkarp Bruker HTS-XT",
    //             "Mid-IR Microplate Reader",
    //             "FTIR Screening Solid Liquid Samples",
    //             "Automated Spectral Analysis",
    //             "FTIR Spectroscopy India"
    //         ],
    //         altText: "HTS-XT FTIR Microplate Reader Distributor in India",
    //         internalLinks: ["Internal Product Pages Links"],
    //         externalLinks: ["https://www.bruker.com/"]
    //     },

    //     description: `The HTS-XT FTIR Microplate Reader by Bruker is a compact and high-performance solution for infrared-based high-throughput screening. Designed for fast and automated analysis, the HTS-XT is compatible with standardized 96-, 384-, and 1536-well microplates. This versatile module supports both reflection and transmission modes, making it ideal for rapid screening of solid and liquid samples in a wide range of research and industrial applications. We are a trusted HTS-XT FTIR Microplate Reader Distributor and Service Provider in India.`,

    //     features: [
    //         {
    //             name: "Supports Multiple Microplate Formats",
    //             description: "Compatible with 96-, 384-, and 1536-well microplates, ensuring flexibility for a wide range of high-throughput applications.",
    //         },
    //         {
    //             name: "Wide Spectral Range Coverage",
    //             description: "Enables mid-IR, near-IR, and visible (VIS) spectral measurements for thorough sample analysis.",
    //         },
    //         {
    //             name: "Dual Measurement Modes",
    //             description: "Equipped to perform both transmission and reflection measurements for solid and liquid samples.",
    //         },
    //         {
    //             name: "Motorized Drawer System",
    //             description: "Automated plate insertion and scanning for efficient and unattended sample analysis.",
    //         },
    //         {
    //             name: "Reusable and Easy-Clean Plates",
    //             description: "Microplates are designed for repeated use and simple cleaning, reducing operational costs.",
    //         },
    //         {
    //             name: "Precise Sample Volume Compatibility",
    //             description: "Accommodates 1–20 µL samples, ideal for resource-sensitive or trace-level applications.",
    //         },
    //     ],

    //     advantages: [
    //         {
    //             name: "Automated Workflow with OPUS/LAB",
    //             description: "Simplifies operation with intuitive automation for spectral acquisition, evaluation, and export.",
    //         },
    //         {
    //             name: "Advanced Quantification Algorithms",
    //             description: "Supports PLS, PCA, and ANN for multicomponent analysis and pattern recognition.",
    //         },
    //         {
    //             name: "Robust Data Management",
    //             description: "All settings and results are logged and can be integrated into LIMS and external systems.",
    //         },
    //         {
    //             name: "Marker-Free Measurement",
    //             description: "Unlike conventional methods, captures complete spectral information without needing markers or dyes.",
    //         },
    //         {
    //             name: "Versatile Research Applications",
    //             description: "Used in soil analysis, polymer kinetics, cell line screening, and gemstone identification.",
    //         },
    //         {
    //             name: "Inkarp India Support",
    //             description: "Comprehensive support from consultation to training, delivered by experienced engineers.",
    //         },
    //     ]
    // },

    // "bruker-fm-mir-fir-thz-spectroscopy": {
    //     id: "bruker-fm-mir-fir-thz-spectroscopy",
    //     name: "Bruker FM: MIR-FIR/THz Spectroscopy",
    //     image: AtrLibrary, // replace with correct import
    //     logo: Bruker,
    //     bannerImg: Banner3, // replace with correct import
    //     altText: "Bruker",
    //     videoId: "",

    //     meta: {
    //         title: "Bruker FM MIR-FIR/THz Spectroscopy in One Step | Distributor and Service Provider in India | Inkarp",
    //         description: "Experience full-spectrum FT-IR analysis from MIR to FIR/THz with Bruker FM. One scan, no optical changes. Distributed and supported by Inkarp Instruments across India.",
    //         keywords: [
    //             "Bruker FM Spectroscopy",
    //             "MIR FIR THz FTIR Analyzer",
    //             "Full Spectrum FTIR in One Scan",
    //             "VERTEX 70v Spectroscopy India",
    //             "INVENIO FTIR System",
    //             "FTIR Spectrometer with MIR FIR THz",
    //             "FTIR Inkarp Distributor",
    //             "Mid IR to Terahertz Spectroscopy",
    //             "FTIR Spectroscopy India",
    //             "One Step FTIR Analysis Bruker"
    //         ],
    //         altText: "Bruker FM MIR-FIR/THz Spectroscopy in One Step",
    //         internalLinks: ["Internal Product Pages Links"],
    //         externalLinks: ["https://www.bruker.com/"]
    //     },

    //     description: `The Bruker FM technology is a revolutionary solution for FT-IR spectroscopy, enabling researchers and scientists to capture mid-IR (MIR) to far-IR (FIR)/terahertz (THz) spectral data in a single measurement—without the need for manual optical changes or interruptions in purge or vacuum. Designed for the VERTEX 70v and INVENIO research-grade FT-IR spectrometers, this innovation eliminates the traditional requirement of switching multiple beamsplitters or detectors. We are your trusted Bruker FM: MIR-FIR/THz Spectroscopy in One Step Distributor and Service Provider in India.`,

    //     features: [
    //         {
    //             name: "One Scan for Full Spectrum (MIR–FIR/THz)",
    //             description: "Captures mid-IR to terahertz data in a single uninterrupted measurement—saving time and preserving optical integrity.",
    //         },
    //         {
    //             name: "Wide Spectral Range",
    //             description: "6000 cm⁻¹ to 50 cm⁻¹ (VERTEX 70v) and 6000 cm⁻¹ to 80 cm⁻¹ (INVENIO), enabling full material characterization.",
    //         },
    //         {
    //             name: "Universal Measurement Modes",
    //             description: "Performs transmission, reflection, and ATR analysis across the entire infrared spectrum.",
    //         },
    //         {
    //             name: "No Optical Reconfiguration",
    //             description: "No need to swap beamsplitters or detectors. Eliminates venting and purge interruptions.",
    //         },
    //         {
    //             name: "Humidity-Resistant Optics",
    //             description: "Ideal for long-term, stable measurements, even in non-ideal lab conditions.",
    //         },
    //         {
    //             name: "Compatible with All Sample Types",
    //             description: "Works with solids, powders, and liquids without compromising spectral accuracy.",
    //         }
    //     ],

    //     advantages: [
    //         {
    //             name: "Time-Efficient Workflow",
    //             description: "Reduces setup time and eliminates the need for manual changes between spectral regions.",
    //         },
    //         {
    //             name: "Ideal for Polymer & Pigment Analysis",
    //             description: "Capture both organic matrix (MIR) and inorganic filler (FIR/THz) details in one scan.",
    //         },
    //         {
    //             name: "Pharmaceutical Polymorph Screening",
    //             description: "Quickly differentiate polymorphic forms using both fundamental vibrations (MIR) and lattice modes (FIR).",
    //         },
    //         {
    //             name: "Advanced Mineral & Geological Analysis",
    //             description: "Detect FIR-active modes in inorganic materials like calcium carbonate using Platinum ATR.",
    //         },
    //         {
    //             name: "Bruker MIR-FIR/THz ATR Library",
    //             description: "Access the first full-range ATR spectral library covering 4000–30 cm⁻¹ for unmatched material ID.",
    //         },
    //         {
    //             name: "Trusted Support from Inkarp",
    //             description: "Inkarp provides end-to-end solutions—from system selection and training to post-sale service.",
    //         }
    //     ]
    // },

    // "drug-checking-and-harm-reduction": {
    //     id: "drug-checking-and-harm-reduction",
    //     name: "Drug Checking and Harm Reduction",
    //     image: DrugPille, // replace with actual import showing Alpha II and MOBILE-IR II
    //     logo: Bruker,
    //     bannerImg: Banner3, // replace with actual import
    //     altText: "Bruker",
    //     videoId: "",

    //     meta: {
    //         title: "Drug Checking and Harm Reduction with FT-IR Spectroscopy | Bruker | Inkarp",
    //         description: "Explore Bruker's ALPHA II and MOBILE-IR II FT-IR spectrometers for drug checking and harm reduction. Ensure public safety with reliable, on-site chemical analysis. Distributed by Inkarp Instruments across India.",
    //         keywords: [
    //             "Drug Checking FTIR",
    //             "Harm Reduction Analyzer",
    //             "Bruker ALPHA II for Drug Testing",
    //             "MOBILE-IR II Portable FTIR",
    //             "FTIR Drug Analyzer India",
    //             "Inkarp Bruker Drug Checking",
    //             "Public Safety Drug Screening",
    //             "On-site Drug Analyzer India",
    //             "Mobile Harm Reduction FTIR",
    //             "Recreational Drug Analysis India"
    //         ],
    //         altText: "FT-IR for Drug Checking and Harm Reduction",
    //         internalLinks: ["Internal Product Pages Links"],
    //         externalLinks: ["https://www.bruker.com/"]
    //     },

    //     description: `FT-IR (Fourier-Transform Infrared) Spectroscopy is a powerful, non-destructive technique used for the rapid identification of chemical substances, making it a valuable tool in the field of drug checking. By analyzing the composition of recreational drugs, FT-IR instruments help identify harmful adulterants and impurities—providing users with crucial safety information. Whether used in fixed drug counseling centers or mobile outreach units at music festivals, FT-IR spectroscopy enables quick and accurate substance identification in real-world settings. This proven technology plays a vital role in Drug Checking and Harm Reduction.`,

    //     features: [
    //         {
    //             name: "ALPHA II FT-IR – Fixed Site Solution",
    //             description: "Compact, lab-grade spectrometer ideal for drug counseling centers, public health labs, pharmacies, and clinics. Offers fast scans, minimal maintenance, and reliable analysis for continuous use.",
    //         },
    //         {
    //             name: "MOBILE-IR II – Field-Ready Mobile Analyzer",
    //             description: "Rugged and portable for on-site drug testing at festivals, events, or emergency situations. Includes battery operation, IP65/IP67 protection, and intuitive OPUS TOUCH software.",
    //         },
    //         {
    //             name: "Non-Destructive Analysis",
    //             description: "Preserves samples during testing while still providing accurate, high-resolution results.",
    //         },
    //         {
    //             name: "Immediate Results",
    //             description: "Delivers substance identification in less than one minute, enabling real-time decision-making.",
    //         },
    //         {
    //             name: "Minimal Sample Prep",
    //             description: "Requires very little preparation, making it efficient and easy to deploy in the field or lab.",
    //         },
    //         {
    //             name: "Broad Substance Detection",
    //             description: "Identifies known and unknown compounds—critical for detecting adulterants, contaminants, or dangerous substances.",
    //         }
    //     ],

    //     advantages: [
    //         {
    //             name: "Supports Public Health Initiatives",
    //             description: "Plays a vital role in community education and harm prevention programs by providing accessible chemical screening tools.",
    //         },
    //         {
    //             name: "Easy to Use for Non-Experts",
    //             description: "OPUS TOUCH interface allows even non-specialists to operate the system with ease during outreach programs.",
    //         },
    //         {
    //             name: "Cryogen-Free Detector Design",
    //             description: "Advanced TE-MCT detector in MOBILE-IR II ensures sensitivity and speed without the need for liquid nitrogen.",
    //         },
    //         {
    //             name: "ATR Heatable Crystal",
    //             description: "Improves measurement of difficult or viscous substances by maintaining optimal contact with the sample.",
    //         },
    //         {
    //             name: "Trusted in Real-World Conditions",
    //             description: "Successfully deployed across Europe and now increasingly adopted by Indian public health programs for substance checking.",
    //         },
    //         {
    //             name: "Complete Support from Inkarp",
    //             description: "From device selection to training and long-term service, Inkarp ensures seamless operation across your harm reduction programs.",
    //         }
    //     ]
    // },

    "alpha-II-compact-FT-IR-Spectrometer": {
        id: "alpha-ii-compact-ft-ir-spectrometer",
        name: "ALPHA II Compact FT-IR Spectrometer",
        image: BannerAlpha, // Replace with actual image of ALPHA II
        logo: Bruker,
        bannerImg: Banner3, // Replace with correct banner image
        altText: "Bruker",
        videoId: "",

        meta: {
            title: "ALPHA II Compact FT-IR Spectrometer | Bruker | Inkarp",
            description: "Experience compact and powerful FT-IR analysis with Bruker ALPHA II. Versatile, robust, and user-friendly—ideal for all industries. Distributed and supported by Inkarp Instruments across India.",
            keywords: [
                "ALPHA II FTIR",
                "Compact FTIR Spectrometer",
                "Bruker ALPHA II Distributor India",
                "FTIR Spectrometer for Drug Testing",
                "RockSolid Interferometer",
                "FTIR for Quantification and QC",
                "Bruker FTIR India",
                "Portable FTIR Spectroscopy",
                "OPUS TOUCH Interface",
                "ALPHA II Applications"
            ],
            altText: "ALPHA II Compact FT-IR Spectrometer",
            internalLinks: [""],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `  <div class="space-y-3">
        <p>The ALPHA II FT-IR Spectrometer by Bruker is a highly compact and reliable instrument built for fast and accurate chemical analysis. With a footprint no larger than a standard laptop, it is ideal for laboratories where space and performance both matter. Whether you're performing raw material verification, quantitative analysis, or quality control, the ALPHA II delivers robust results across all routine and advanced applications. We are a trusted ALPHA II Compact FT-IR Spectrometer Distributor and Service Provider in India.</p>
        <h2 class="text-xl font-[MaxOT] text-[#E63946]">Why the ALPHA II is Known as the Swiss-Knife of FT-IR Spectroscopy</h2>
        <p>The ALPHA II stands out for its versatility and performance. It is designed to handle all standard FT-IR spectroscopy tasks across industries—be it quantification, identification of unknown substances, raw material authentication, or basic research. Its compact build and robust features make it a go-to choice for both seasoned professionals and first-time users.</p>
        </div>`,

        content: ` <div class="space-y-3 px-3">
            <h2 class="text-xl font-[MaxOT] text-[#E63946]">ALPHA II Compact FT-IR Spectrometer – Easy to Use, Reliable, and Versatile</h2>
         <p>The ALPHA II Compact FT-IR Spectrometer by Bruker is designed for effortless chemical analysis—ideal for quality control, quantification, and raw material verification. Its compact design, intuitive interface, and advanced performance features make it suitable for every industry and application, from routine analysis to advanced R&D.</p>
        <h2 class="text-xl font-[MaxOT] text-[#E63946]">Simplicity Meets High Performance</h2>
        <p>Operating the ALPHA II is seamless—whether using the integrated touch PC or an external desktop. The user-friendly OPUS TOUCH software minimizes training time, enabling even new users to generate accurate results in minutes. For advanced users, the external PC interface unlocks a broader range of features, including guided workflows ideal for standard FT-IR procedures.</p>
        <ul class="list-disc list-inside">
        <li><strong>Touchscreen Option:</strong> Reduces instrument footprint and improves portability</li>
        <li><strong>Desktop Option:</strong> Offers full software functionality for advanced users</li>
        <li><strong>Demo Version Available:</strong> Test the OPUS TOUCH interface before you buy</li>
        </ul>

        <h2 class="text-xl font-[MaxOT] text-[#E63946]">RockSolid™ Technology You Can Trust</h2>
        <p> The ALPHA II features the RockSolid™ interferometer, built to last over 10 years, and designed to resist shocks, vibrations, and wear. Combined with a long-life IR source (CenterGlow™) and a durable diode laser, the system delivers unmatched spectral stability and wavenumber accuracy over time..</p>
        <ul class="list-disc list-inside">
        <li><strong>Shock-resistant & wear-free:</strong> Reduces instrument footprint and improves portability</li>
        <li><strong>Diode laser with >10-year lifespan</strong> Offers full software functionality for advanced users</li>
        <li><strong>Consistent results under all conditions</strong> Test the OPUS TOUCH interface before you buy</li>
        </ul>
         <h2 class="text-xl font-[MaxOT] text-[#E63946]">Adaptable by Design</h2>
         <p>The ALPHA II adapts to your application with QuickSnap™ sampling modules that make it easy to switch between different sample types—solids, liquids, gases, or even delicate artifacts. From diamonds to pharmaceuticals, the ALPHA II is ready for any analytical challenge. And if your needs evolve, it can be upgraded or reconfigured on-site with ease.<p>
        </div>`,

        features: [
            { overview: "", },
            {
                name: "Ultra-Compact Design",
                description: "Saves valuable lab space while maintaining high-performance FT-IR capabilities."
            },
            {
                name: "Universal Sample Compatibility",
                description: "Supports analysis of solids, liquids, and gases—making it adaptable to varied lab workflows."
            },
            {
                name: "RockSolid™ Interferometer",
                description: "Vibration-resistant, wear-free design with over 10 years of lifespan for consistent spectral accuracy."
            },
            {
                name: "CenterGlow™ Source",
                description: "Stable and long-lasting IR source with a 5+ year operational life for reduced downtime."
            },
            {
                name: "Long-Life Diode Laser",
                description: "Reliable performance with more than 10 years of continuous use expected."
            },
            {
                name: "User-Friendly Operation",
                description: "Intuitive OPUS or OPUS TOUCH software ensures minimal training time and high productivity."
            },
            {
                name: "Optional Touchscreen Integration",
                description: "Integrated touch PC for standalone use, or external PC support for advanced operation."
            },
            {
                name: "Humidity-Resistant Option",
                description: "Ideal for high-humidity environments where conventional FTIR systems may fail."
            }
        ],

        advantages: [
            { overview: "", },
            {
                name: "Analyze All Sample Types",
                description: "Easily analyze powders, liquids, and gases using switchable sampling modules."
            },
            {
                name: "Space-Saving Footprint",
                description: "Designed to fit even in the most space-constrained lab environments."
            },
            {
                name: "Low Maintenance",
                description: "Built to minimize servicing needs with long-life optical components."
            },
            {
                name: "Ease of Training",
                description: "New users can begin using the system confidently with just minutes of instruction."
            },
            {
                name: "Energy Efficient",
                description: "Low power consumption enables sustainable lab operation."
            },
            {
                name: "Adaptable and Modular",
                description: "Supports future upgrades or new applications through QuickSnap™ module swapping."
            }
        ],

        applications: [
            { name: "Polymers", description: "Raw material verification, surface testing, and coated film analysis,Ready-to-use methods for modern polymers and filler identification" },
            { name: "Industrial Manufacturing & Automotive", description: "Quality checks for used oils, coatings, and cleanliness testing of technical surfaces" },
            { name: "Quantitative Analysis", description: "Measure water in oil, API concentration, ammonia in flooring, and more,Accessory toolkits and predefined methods for fast, accurate reporting" },
            { name: "Hydrocarbons & Petrochemicals", description: "Additive quantification, degradation product tracking, and fuel testing,Helps optimize combustion and prevent mechanical failure" },
            { name: "Food & Beverage", description: "Analyze wine, juices, and must for alcohol and sugar content,Identify contaminants (FOA) in processed foods" },
            { name: "Pharmaceuticals", description: "Fully compliant with 21 CFR Part 11 and ALCOA+ data integrity principles,Quality control for raw materials and finished pharmaceutical products" },
            { name: "Education & Teaching", description: "Rugged and low-maintenance design perfect for student labs,Interactive touch interface helps students engage with spectroscopy" },
            { name: "Forensic Drug Analysis", description: "Portable and reliable tool for identifying illegal substances using the TICTAC spectral library,Ideal for police, customs, and forensic labs" },
            { name: "Environmental Testing", description: "Analyze microplastics, soil, water pollutants (oil and grease), and more,Specialized accessories for high-pressure sample measurement" },
            { name: "Art Restoration, Artefacts & Jewelry", description: "Analyze valuable art pieces, historical objects, and gemstones,Ideal for museums, restoration experts, and jewelry authentication" }
        ],

    },

    "mobile-IR-II-FT-IR-Spectrometer": {
        id: "mobile-ir-ii-ft-ir-spectrometer",
        name: "MOBILE-IR II FT-IR Spectrometer",
        image: MobileIriiBannerAward,
        logo: Bruker,
        bannerImg: Banner1,
        altText: "Bruker",
        videoId: "",

        meta: {
            title: "MOBILE-IR II FT-IR Spectrometer Distributor and Service Provider in India | Bruker | Inkarp",
            description:
                "Discover the MOBILE-IR II FT-IR Spectrometer by Bruker – a rugged, portable spectrometer delivering lab-grade performance in the field. Ideal for first responders, environmental testing, and industrial QC. Distributed by Inkarp Instruments with nationwide service and support.",
            keywords: [
                "MOBILE-IR II FT-IR Spectrometer",
                "Bruker FTIR Distributor India",
                "Portable FTIR for field use",
                "Inkarp Bruker MOBILE-IR",
                "Hazmat field spectroscopy",
                "Environmental FTIR Bruker",
                "Handheld FTIR analyzer India",
                "TE-MCT Detector Spectrometer",
                "Mobile spectroscopy for QC",
                "Rugged FTIR system Bruker"
            ],
            altText: "MOBILE-IR II FT-IR Spectrometer Distributor in India",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `
        <div class="space-y-3">
        <p>The MOBILE-IR II by Bruker is a next-generation portable FT-IR spectrometer that brings true laboratory performance into the field. Built for mobility without compromising on spectral quality or durability, this compact system is engineered for rapid, high-quality analysis in challenging environments—making it ideal for on-the-go professionals in industrial, environmental, and security applications. We are your trusted MOBILE-IR II FT-IR Spectrometer Distributor and Service Provider in India.</p>
        </div>
        `,
        content: `
            <div class="space-y-6 text-[18px] font-[Roboto] px-3">
            <!-- Existing Section -->
            <div class="space-y-3">
                <h2 class="text-xl font-[MaxOT] text-[#E63946]">Unmatched Portability with Lab-Grade Performance</h2>
                <p>
                The MOBILE-IR II eliminates the compromise between performance and portability. Whether you're in a warehouse, a construction site, or a remote field station, this spectrometer maintains consistent, reliable measurements even in harsh conditions. Its TE-MCT detector doubles the signal-to-noise ratio and halves measurement time compared to standard DTGS detectors.
                </p>
            </div>

            <!-- NEW CONTENT FROM IMAGE -->
            <div class="space-y-4">
                <h2 class="text-xl font-[MaxOT] text-[#E63946]">Flexible Sampling and Connectivity</h2>
                <ul class="list-disc list-inside space-y-1">
                <li><strong>Heatable ATR Crystal:</strong> Ideal for liquid samples and thermal studies</li>
                <li><strong>Optional flat ATR:</strong> For large, flat solid samples</li>
                <li><strong>Multiple connectivity modes:</strong> USB, Ethernet, Wi-Fi, and cloud-based transfer</li>
                <li><strong>Secure data integration</strong> with LIMS/MES systems via MS SQL</li>
                </ul>

                <h2 class="text-xl font-[MaxOT] text-[#E63946] mt-4">Durable Design for Real-World Use</h2>
                <ul class="list-disc list-inside space-y-1">
                <li><strong>Tablet PC with IP65 rating</strong> for rugged mobile computing</li>
                <li><strong>Protective metal casing</strong> on the spectrometer to resist environmental impact</li>
                <li><strong>Power indicators</strong> for easy battery monitoring (100/75/50/25%)</li>
                <li><strong>Carry-all trolley case:</strong> Spacious, protective, and easy to transport</li>
                </ul>

                <p>
                Whether you're standing, sitting, or squatting, the <strong>OPUS TOUCH software</strong>
                enables quick and easy operation via tablet or PC, with just 10 minutes of training needed—
                even for beginners.
                </p>

                <h2 class="text-xl font-[MaxOT] text-[#E63946] mt-4">Field-Ready Applications of the MOBILE-IR II</h2>
                <p>The MOBILE-IR II is ideal for:</p>
                <ul class="list-disc list-inside space-y-1">
                <li><strong>First responders and law enforcement:</strong> On-site chemical identification</li>
                <li><strong>Hazmat and emergency services:</strong> Real-time hazardous substance analysis</li>
                <li><strong>Environmental agencies:</strong> In-field soil, water, and material testing</li>
                <li><strong>Industrial QC teams:</strong> Raw material verification and product inspection on the production line</li>
                <li><strong>Pharmaceutical field audits:</strong> Quick, mobile material checks</li>
                <li><strong>Forensic investigations:</strong> Drug analysis and unknown substance detection</li>
                </ul>

                <p>
                As an official <strong>Bruker partner</strong>, <strong>Inkarp Instruments</strong> offers end-to-end support for the MOBILE-IR II—from consultation and demonstration to installation, training, and long-term service. With a team experienced in analytical instrumentation and mobile spectroscopy, we ensure that your field operations are powered by reliable performance and expert support.
                </p>
            </div>

            </div>
            `,


        features: [
            { overview: "", },
            { name: "Cryogen-free TE-MCT detector", description: "for faster scans and improved sensitivity" },
            { name: "Rugged IP65-rated design", description: " with vibration-damping support" },
            { name: "Heatable ATR crystal", description: " for fast liquid evaporation and thermal experiments" },
            { name: "Internal high-capacity battery", description: " for full-day off-grid operation" },
            { name: "Robust, IP67-rated carry case with wheels", description: " for safe transport" },
            { name: "RockSolid™ interferometer", description: " – trusted performance and longevity (>10 years)" },
            { name: "CenterGlow™ source and long-life diode laser", description: " (>10 years)" },
            { name: "OPUS TOUCH software", description: " – intuitive and beginner-friendly" },
        ],



        advantages: [
            { overview: "", },
            {
                name: "Lab Performance in the Field",
                description:
                    "Delivers precise and reliable measurements with the same accuracy expected in laboratory settings, even in rugged outdoor environments.",
            },
            {
                name: "Flexible Sampling Options",
                description:
                    "Use with heatable ATR or optional flat ATR to accommodate solids, liquids, and thermal analysis on the go.",
            },
            {
                name: "Multiple Connectivity Options",
                description:
                    "Connect via USB, Ethernet, Wi-Fi, or cloud-based systems. Integrates with LIMS/MES platforms using MS SQL.",
            },
            {
                name: "Rugged Tablet Interface",
                description:
                    "Includes IP65-rated tablet PC with durable casing, readable under sunlight, and operable with gloves.",
            },
            {
                name: "Real-World Readiness",
                description:
                    "Power level indicators, heavy-duty case, and fast setup make it ideal for emergency responders and QC teams.",
            },
            {
                name: "Versatile Field Applications",
                description:
                    "Perfect for chemical ID, forensic drug analysis, raw material inspection, and environmental monitoring.",
            },
            {
                name: "Trusted Support from Inkarp",
                description:
                    "Inkarp Instruments provides complete support—from demo to installation and training—backed by expert service engineers nationwide.",
            },
        ],
    },

    "invenio-ft-ir-spectrometer": {
        id: "invenio-ft-ir-spectrometer",
        name: "INVENIO® FT-IR Research Spectrometers",
        image: InvenioFtirSpectrometer, // Replace with actual INVENIO product image import
        logo: Bruker,
        bannerImg: Banner3, // Replace with correct INVENIO banner image import
        altText: "Bruker",
        videoId: "",

        meta: {
            title: "INVENIO® FT-IR Spectrometers | Bruker | Inkarp Instruments India",
            description:
                "Explore the INVENIO® FT-IR Spectrometer by Bruker—designed for high-end research and routine analysis. Inkarp Instruments is your trusted distributor and service provider for Bruker INVENIO® FTIR systems in India.",
            keywords: [
                "INVENIO FTIR India",
                "Bruker INVENIO Distributor",
                "FTIR Spectrometer for R&D",
                "INVENIO Spectrometer Supplier India",
                "High-resolution FTIR Bruker",
                "INVENIO RockSolid Interferometer",
                "INVENIO OPUS Software",
                "FTIR with Multi Detector System",
                "INVENIO Time-Resolved Spectroscopy",
                "Inkarp Bruker India"
            ],
            altText: "INVENIO® FT-IR Spectrometers",
            internalLinks: ["FTIR Instruments Product Pages"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `The INVENIO® FT-IR Spectrometer from Bruker is an advanced analytical instrument engineered to meet the diverse needs of modern laboratories. With its state-of-the-art design, high spectral resolution, and extensive detector options, INVENIO® is ideal for applications ranging from routine quality control to sophisticated research and development. Whether you're working in pharmaceuticals, chemicals, materials science, or environmental analysis, INVENIO® offers unmatched performance, flexibility, and ease of use — making it the ideal choice for laboratories that demand reliability and innovation. We are a leading INVENIO® FT-IR Spectrometers Distributor and Service Provider in India.`,

        content: `
        <div class="space-y-3 text-[18px] font-[Roboto] px-3">
        <div>
            <h2 class="text-2xl font-[MaxOT] text-[#E63946]">Reliable. Efficient. Productive.</h2>
            <p>
            INVENIO® is a robust, 24/7 spectroscopy workstation tailored for high-throughput labs. 
            With advanced features like the <strong>RockSolid™ interferometer</strong>, you get vibration and 
            temperature-resistant performance—ensuring consistent and trustworthy results.
            </p>
            <p>
            Thanks to intelligent software monitoring and durable construction, INVENIO® maximizes uptime 
            and productivity while delivering precise, reproducible data.
            </p>
        </div>

        <div>
            <h2 class="text-2xl font-[MaxOT] text-[#E63946]">Double the Productivity with Transit™</h2>
            <p>
            The <strong>Transit™ channel</strong> is an independent second measurement compartment, allowing you to prepare 
            and run two setups in parallel—whether for ATR or transmission analysis. This saves time and supports 
            high-throughput demands without compromising on quality.
            </p>
            <ul class="list-disc list-inside space-y-1">
            <li>
                <strong>QuickLock Accessory Mount:</strong> Effortlessly accommodates even large sampling accessories with a simple lock-and-release button.
            </li>
            <li>
                <strong>Simultaneous FIR/MIR Measurements:</strong> Analyze both mid- and far-infrared ranges without swapping components using 
                <strong>Bruker FM technology</strong>.
            </li>
            </ul>
        </div>

        <div>
            <h2 class="text-2xl font-[MaxOT] text-[#E63946]">High Performance Meets Flexibility</h2>
            <p>INVENIO® is built for laboratories that need:</p>
            <ul class="list-disc list-inside space-y-1">
            <li><strong>Exceptional spectral resolution</strong> down to &lt; 0.085 cm⁻¹</li>
            <li><strong>High signal-to-noise ratio</strong> for clear, detailed spectra</li>
            <li><strong>Custom detector configurations</strong> with up to 7 internal, software-controlled detectors</li>
            <li><strong>Field-upgradable architecture</strong> to adapt to evolving lab requirements</li>
            </ul>
        </div>

        <div>
            <p>
            Use the <strong>DigiTect™ slot</strong> for specialty detectors like LN₂ cooled ones, and expand with 
            <strong>MultiTect™</strong> — a 5-in-1 detector unit supporting room temperature and thermostabilized options.
            </p>
        </div>

        <div>
            <h2 class="text-2xl font-[MaxOT] text-[#E63946]">Broadest Spectral Range – Automatically</h2>
            <p>
            The <strong>INTEGRAL™ interferometer</strong> includes an automated 3-position beam splitter changer, enabling fully automated 
            single-click measurements across the full spectral range (28,000 cm⁻¹ to 15 cm⁻¹). No manual component changes required—ideal 
            for demanding research workflows.
            </p>
        </div>

        <div>
            <h2 class="text-2xl font-[MaxOT] text-[#E63946]">Software That Makes Analysis Simple</h2>
            <p>
            The OPUS software provides a self-explanatory and intuitive user interface, making the INVENIO® equally accessible to beginners 
            and seasoned professionals.
            </p>
            <ul class="list-disc list-inside space-y-1">
            <li>Run the software on an embedded touchscreen or an external PC</li>
            <li>Use built-in spectral libraries and advanced method creation tools</li>
            <li>Create guided workflows for repeatable, standardized tasks</li>
            </ul>
        </div>

        <div>
            <h2 class="text-2xl font-[MaxOT] text-[#E63946]">Built to Evolve with Your Needs</h2>
            <p>
            The INVENIO® is fully customizable and field-upgradable, meaning it adapts as your analytical requirements grow. Whether you're 
            expanding capabilities, adding new accessories, or optimizing workflows, this system is designed for long-term value.
            </p>
            <p>
            At <strong>Inkarp Instruments</strong>, we ensure seamless integration, expert consultation, and reliable service support across India for 
            all INVENIO® systems. Trust us for your needs as a certified 
            <strong>INVENIO® FT-IR Spectrometers Distributor and Service Provider in India.</strong>
            </p>
        </div>
        </div>
        `,

        features: [
            { overview: "", },
            {
                name: "Extended Spectral Range",
                description: "Covers FIR to UV/VIS for broad application coverage"
            },
            {
                name: "Multi-Detector Configuration",
                description: "Supports up to 7 software-controlled detectors"
            },
            {
                name: "Ultra-High Resolution",
                description: "Delivers spectral resolution down to < 0.085 cm⁻¹"
            },
            {
                name: "Time-Resolved Spectroscopy",
                description: "Enables nanosecond-scale measurements for dynamic processes"
            },
            {
                name: "Dual Sample Compartments",
                description: "Perform two parallel analyses simultaneously"
            },
            {
                name: "Simultaneous FIR/MIR Capability",
                description: "Increase efficiency with combined measurements"
            },
            {
                name: "Quick-Swap Accessory Mount",
                description: "Compatible with a wide range of accessories"
            },
            {
                name: "Intuitive Software Interface",
                description: "Guided workflows for user-friendly operation"
            }
        ],


    },

    "vertex-80-80v-ft-ir-spectrometer": {
        id: "vertex-80-80v-ft-ir-spectrometer",
        name: "VERTEX 80/80v FT-IR Research Spectrometers",
        image: VertexResearchFtirSpectrometer, // Replace with actual product image import
        logo: Bruker,
        bannerImg: Banner3, // Replace with correct banner image import
        altText: "Bruker",
        videoId: "",

        meta: {
            title: "VERTEX 80/80v FT-IR Spectrometers | Bruker | Inkarp Instruments India",
            description: "Experience highest-resolution FT-IR analysis with Bruker VERTEX 80/80v. Vacuum optics, UltraScan™ interferometer, and modular flexibility make it ideal for advanced research. Distributed and supported in India by Inkarp Instruments.",
            keywords: [
                "VERTEX 80 FTIR India",
                "VERTEX 80v Vacuum Spectrometer",
                "UltraScan Interferometer",
                "High-Resolution FTIR Spectroscopy",
                "Bruker Research FTIR",
                "FTIR for Semiconductor Analysis",
                "Bruker VERTEX Distributor India",
                "THz FTIR Spectroscopy",
                "FTIR with Cryogenic Detectors",
                "FTIR Beamline Synchrotron"
            ],
            altText: "VERTEX 80/80v FT-IR Spectrometers",
            internalLinks: ["FTIR Instruments Product Pages"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `<p>The VERTEX 80 and VERTEX 80v FT-IR spectrometers from Bruker represent the highest standard in research-grade infrared spectroscopy. Equipped with the advanced UltraScan™ interferometer, these systems deliver PEAK spectral resolution and ultimate signal stability. The VERTEX 80v offers a vacuum-sealed optics bench, eliminating atmospheric interference to enable highly sensitive and demanding measurements including step-scan, rapid-scan, UV, and high-resolution spectroscopy.</p>
        <p>We are your trusted VERTEX 80/80v FT-IR Spectrometers Distributor and Service Provider in India.</p>`,

        content: `
<div class="space-y-3 text-[18px] font-[Roboto] text-gray-700 px-3">

  <h2 class="text-2xl font-[MaxOT] text-[#E63946]">Spectral Range Extension – From Far-IR to UV/VIS</h2>
  <p>
    The <strong>VERTEX 80/80v FT-IR Spectrometers</strong> are designed to provide unparalleled spectral coverage for
    advanced research applications. With optional optical components, these systems can span a wide spectral range—from
    <strong>far-infrared (THz)</strong> through <strong>mid-IR, near-IR, visible</strong>, and into the <strong>ultraviolet</strong> region.
    This broad coverage is supported by <strong>pre-aligned optics</strong> and the <strong>UltraScan™ actively aligned interferometer</strong>,
    ensuring effortless range switching and minimal maintenance downtime.
  </p>

  <p>
    For enhanced automation and efficiency, the <strong>VERTEX 80v</strong> supports the <strong>BMS-c beamsplitter exchange system</strong>—a
    high-precision, remote-controlled mechanism that allows <strong>automatic switching of up to four beamsplitters</strong> without
    breaking the vacuum seal. This eliminates the need to manually vent the optics bench, preserving vacuum conditions and
    significantly improving workflow continuity.
  </p>

  <p>
    With this configuration, users can seamlessly <strong>perform measurements across the full spectral range—from UV/VIS to far-IR/THz</strong>—making
    the VERTEX 80/80v an ideal solution for spectroscopy in advanced materials science, semiconductor analysis, and other
    demanding research environments.
  </p>

  <h2 class="text-2xl font-[MaxOT] text-[#E63946]">Optical Resolution at Research-Grade Precision</h2>
  <p>
    The <strong>VERTEX 80 and VERTEX 80v FT-IR Spectrometers</strong> deliver unmatched spectral resolution, making them ideal for
    high-precision gas-phase studies and advanced material analysis. In their standard configuration, these systems provide
    <strong>apodized spectral resolution better than 0.2 cm⁻¹</strong>, suitable for most ambient pressure and room-temperature experiments.
  </p>

  <p>
    For more demanding applications—such as <strong>low-temperature semiconductor analysis</strong> or <strong>low-pressure gas phase measurements</strong>—
    the VERTEX 80 series offers <strong>PEAK resolution better than 0.06 cm⁻¹</strong>, the highest resolution available in any commercial
    benchtop FT-IR spectrometer. In the visible spectral range, the system achieves a resolving power exceeding <strong>300,000:1</strong>,
    demonstrating its capability for ultra-fine spectral detail.
  </p>

  <h2 class="text-2xl font-[MaxOT] text-[#E63946]">Engineered for Maximum Versatility</h2>
  <p>
    With a state-of-the-art optics design, the <strong>VERTEX 80v vacuum FT-IR spectrometer</strong> offers PEAK sensitivity across
    the mid-, near-, and far-infrared regions—free from interference by atmospheric water vapor. This enables the detection
    of extremely weak spectral features, critical for nanoscale research down to <strong>10⁻³ monolayers</strong>.
  </p>

  <p>
    The system provides <strong>unparalleled flexibility</strong> with five beam exit ports (left, right, and front) and two beam input ports
    (rear and right side), allowing simultaneous integration with a wide range of accessories, including:
  </p>

  <ul class="list-disc list-inside space-y-1">
    <li>Synchrotron light sources</li>
    <li>PMA 50 for polarization modulation spectroscopy</li>
    <li>FT-IR microscopes (HYPERION Series)</li>
    <li>Fiber optic probes</li>
    <li>Bolometer detectors</li>
  </ul>

  <p>
    Such adaptability makes the VERTEX 80/80v an ideal platform for cutting-edge R&amp;D across multiple scientific disciplines.
  </p>

  <h2 class="text-2xl font-[MaxOT] text-[#E63946]">Cutting-Edge Optical Technologies</h2>
  <p>
    The <strong>VERTEX 80/80v</strong> stands as Bruker’s flagship FT-IR platform, featuring:
  </p>

  <ul class="list-disc list-inside space-y-1">
    <li><strong>UltraScan™ Interferometer</strong> with highest spectral and temporal resolution</li>
    <li><strong>PEAK technology</strong> for optimal performance in vacuum and purge configurations</li>
    <li><strong>Spectral coverage from 50,000 cm⁻¹ (UV/VIS) down to 5 cm⁻¹ (FIR/THz)</strong></li>
    <li>Integrated support for advanced beamsplitters and automated switching via <strong>BMS-c</strong></li>
  </ul>

  <p>
    Whether you're conducting <strong>step-scan</strong>, <strong>rapid-scan</strong>, or <strong>interleaved time-resolved spectroscopy (TRS)</strong>,
    the VERTEX 80/80v enables reliable results and future-proof flexibility.
  </p>

  <h2 class="text-2xl font-[MaxOT] text-[#E63946]">Research & Development Applications</h2>
  <p>
    The VERTEX 80/80v is a preferred solution for high-level research in:
  </p>

  <ul class="list-disc list-inside space-y-1">
    <li>High-resolution gas-phase spectroscopy (&lt; 0.06 cm⁻¹)</li>
    <li>Amplitude/phase modulation via step and continuous scan modes</li>
    <li>FT-IR beamline installations in synchrotron facilities</li>
    <li>Enzyme catalysis studies using stopped-flow methods</li>
    <li>Spectroelectrochemistry for electrode/electrolyte investigations</li>
  </ul>
<!-- RELIABLE. EFFICIENT. PRODUCTIVE. -->
  <h2 class="text-2xl font-[MaxOT] text-[#E63946]">Reliable. Efficient. Productive.</h2>
  <p>
    INVENIO® is a robust, 24/7 spectroscopy workstation tailored for high-throughput labs. With advanced features like the
    <strong>RockSolid™ interferometer</strong>, you get vibration and temperature-resistant performance—ensuring consistent and trustworthy results.
  </p>
  <p>
    Thanks to intelligent software monitoring and durable construction, INVENIO® maximizes uptime and productivity while delivering
    precise, reproducible data.
  </p>

  <!-- DOUBLE PRODUCTIVITY WITH TRANSIT -->
  <h2 class="text-2xl font-[MaxOT] text-[#E63946]">Double the Productivity with Transit™</h2>
  <p>
    The <strong>Transit™ channel</strong> is an independent second measurement compartment, allowing you to prepare and run two setups in parallel—
    whether for ATR or transmission analysis. This saves time and supports high-throughput demands without compromising on quality.
  </p>
  <ul class="list-disc list-inside space-y-1">
    <li><strong>QuickLock Accessory Mount:</strong> Effortlessly accommodates even large sampling accessories with simple lock-and-release.</li>
    <li><strong>Simultaneous FIR/MIR Measurements:</strong> Analyze both mid- and far-infrared ranges without swapping components via Bruker FM technology.</li>
  </ul>

  <!-- HIGH PERFORMANCE MEETS FLEXIBILITY -->
  <h2 class="text-2xl font-[MaxOT] text-[#E63946]">High Performance Meets Flexibility</h2>
  <p>INVENIO® is built for laboratories that need:</p>
  <ul class="list-disc list-inside space-y-1">
    <li><strong>Exceptional spectral resolution</strong> down to &lt; 0.085 cm⁻¹</li>
    <li><strong>High signal-to-noise ratio</strong> for clear, detailed spectra</li>
    <li><strong>Custom detector configurations</strong> with up to 7 internal, software-controlled detectors</li>
    <li><strong>Field-upgradable architecture</strong> to adapt to evolving lab requirements</li>
  </ul>

  <!-- INTEGRAL INTERFEROMETER -->
  <h2 class="text-2xl font-[MaxOT] text-[#E63946]">Broadest Spectral Range – Automatically</h2>
  <p>
    The <strong>INTEGRAL™ interferometer</strong> features a 3-position automated beam splitter changer, enabling fully automated measurements
    from <strong>28,000 cm⁻¹ to 15 cm⁻¹</strong>. No manual adjustments needed — ideal for demanding research workflows.
  </p>

  <!-- SOFTWARE THAT MAKES ANALYSIS SIMPLE -->
  <h2 class="text-2xl font-[MaxOT] text-[#E63946]">Software That Makes Analysis Simple</h2>
  <p>
    The OPUS software provides intuitive, guided workflows, making the INVENIO® equally user-friendly for beginners and experts.
  </p>
  <ul class="list-disc list-inside space-y-1">
    <li>Run software on embedded touchscreen or external PC</li>
    <li>Built-in spectral libraries and method creation tools</li>
    <li>Create automated, standardized workflows</li>
  </ul>

  <!-- BUILT TO EVOLVE WITH YOUR NEEDS -->
  <h2 class="text-2xl font-[MaxOT] text-[#E63946]">Built to Evolve with Your Needs</h2>
  <p>
    The INVENIO® is fully customizable and field-upgradeable — whether adding new detectors, expanding accessories, or optimizing workflows,
    this platform is designed for long-term value.
  </p>

  <!-- INDUSTRY USE CASES -->
  <h2 class="text-2xl font-[MaxOT] text-[#E63946]">Industry-Specific Use Cases</h2>

  <h3 class="text-xl font-semibold">Pharmaceuticals</h3>
  <ul class="list-disc list-inside space-y-1">
    <li>Vibrational Circular Dichroism (VCD) for molecular configuration</li>
    <li>TG-FT-IR for stability testing and volatile compound detection</li>
    <li>Polymorph differentiation using far-IR analysis</li>
  </ul>

  <h3 class="text-xl font-semibold">Polymers & Chemistry</h3>
  <ul class="list-disc list-inside space-y-1">
    <li>Inorganic filler identification</li>
    <li>TGA-FT-IR reaction monitoring</li>
    <li>MIR fiber probe analysis</li>
  </ul>

  <h3 class="text-xl font-semibold">Surface Analysis</h3>
  <ul class="list-disc list-inside space-y-1">
    <li>Ultra-thin/monolayer surface detection</li>
    <li>PM-IRRAS for polarization-based surface characterization</li>
  </ul>

  <h3 class="text-xl font-semibold">Material Science</h3>
  <ul class="list-disc list-inside space-y-1">
    <li>Reflectivity/emittance behavior</li>
    <li>Photo-acoustic spectroscopy (PAS) depth profiling</li>
  </ul>

  <h3 class="text-xl font-semibold">Semiconductors</h3>
  <ul class="list-disc list-inside space-y-1">
    <li>Oxygen/carbon concentration in silicon wafers</li>
    <li>Photoluminescence at cryogenic temperatures</li>
    <li>Low-temperature impurity analysis</li>
  </ul>

  <!-- EXTERNAL ACCESSORIES -->
  <h2 class="text-2xl font-[MaxOT] text-[#E63946]">External Accessories, Sources & Detectors</h2>
  <p>The modular INVENIO® platform integrates with a wide range of external modules:</p>

  <ul class="list-disc list-inside space-y-1">
    <li>PMA 50 – Polarization modulation</li>
    <li>PL II – Photoluminescence module</li>
    <li>RAM II – FT-Raman, RamanScope III</li>
    <li>HYPERION Series – FT-IR microscopy</li>
    <li>HTS-XT – High-throughput screening</li>
    <li>IMAC – Array imaging</li>
    <li>TGA-FT-IR thermal analysis coupling</li>
    <li>UHV chambers</li>
    <li>LN₂ cryostats</li>
    <li>Fiber optic coupling</li>
    <li>FIR/MIR high-performance sources</li>
    <li>Solid-state beamsplitters</li>
    <li>MIR-FIR detectors & bolometers</li>
    <li>Auto-samplers & integrating spheres</li>
  </ul>

  <p>
    <strong>Inkarp Instruments</strong> is your trusted INVENIO® FT-IR Spectrometers Distributor & Service Provider in India,
    offering consultation, installation, and technical support for research, pharma, materials science, and more.
  </p>

</div>
`,


        // features: [
        //     {
        //         name: "UltraScan™ Interferometer",
        //         description: "Achieves outstanding spectral resolution with linear air-bearing scanning"
        //     },
        //     {
        //         name: "Vacuum Optics (VERTEX 80v)",
        //         description: "Eliminates moisture and CO₂ interferences for ultra-sensitive measurements"
        //     },
        //     {
        //         name: "PEAK Stability & Sensitivity",
        //         description: "Ensures reliable data over long experiment durations"
        //     },
        //     {
        //         name: "Flexible Configuration",
        //         description: "Supports a wide variety of demanding applications, from THz to UV"
        //     },
        //     {
        //         name: "DigiTect™ Detector System",
        //         description: "Internal digitization at the detector eliminates external noise and allows easy detector exchange"
        //     },
        //     {
        //         name: "External Detector Ports",
        //         description: "Compatible with cryogenic detectors like bolometers and hot electron devices"
        //     },
        //     {
        //         name: "THz Access with Room Temp Detectors",
        //         description: "Access terahertz frequencies even with standard DTGS detectors and high-power Hg-arc source"
        //     }
        // ],

        advantages: [
            { overview: "", },
            {
                name: "UltraScan™ Interferometer",
                description: "Achieves outstanding spectral resolution with linear air-bearing scanning"
            },
            {
                name: "Vacuum Optics (VERTEX 80v)", description: "Eliminates moisture and CO₂ interferences for ultra-sensitive measurements"
            },
            {
                name: "PEAK Stability & Sensitivity", description: "Ensures reliable data over long experiment durations"
            },
            {
                name: "Flexible Configuration", description: "Supports a wide variety of demanding applications, from THz to UV"
            },
            {
                name: "DigiTect™ Detector System", description: "Internal digitization at the detector eliminates external noise and allows easy detector exchange"
            },
            { name: "External Detector Ports", description: "Compatible with cryogenic detectors like bolometers and hot electron devices" },
            {
                name: "THz Access with Room Temp Detectors", description: "Access terahertz frequencies even with standard DTGS detectors and high-power Hg-arc source"
            }
        ],

    },

    "tg-ftir-thermogravimetric-analysis": {
        id: "tg-ftir-thermogravimetric-analysis",
        name: "TG-FTIR Thermogravimetric Analysis",
        image: TgFtirThermogravimetricAnalysis, // Replace with actual product image import
        logo: Bruker,
        bannerImg: Banner3, // Replace with correct banner image import
        altText: "Bruker",
        videoId: "",

        meta: {
            title: "TG FT-IR Thermogravimetric Analysis | Bruker | Inkarp Instruments India",
            description: "TG FT-IR combines thermogravimetric analysis with FT-IR spectroscopy for simultaneous mass loss tracking and gas identification. Distributed and supported by Inkarp Instruments across India.",
            keywords: [
                "TG-FTIR India",
                "Thermogravimetric FTIR Analysis",
                "Bruker TG-FTIR Distributor",
                "PERSEUS Coupling FTIR",
                "FTIR Gas Analysis",
                "TG Coupled FTIR India",
                "FTIR Thermal Decomposition",
                "Bruker Thermo Analysis",
                "Evolved Gas Analysis India",
                "FTIR Polymer Testing"
            ],
            altText: "TG FT-IR Thermogravimetric Analysis",
            internalLinks: ["Thermal Analysis Instruments", "FTIR Solutions"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `<div class="space-y-4 px-3 text-[18px] font-[Roboto]">
 
  <p class="text-gray-800 mb-4">
  TG FT-IR (Thermogravimetric Analysis coupled with Fourier-Transform Infrared Spectroscopy) is a powerful hyphenated technique designed for advanced thermal characterization of both organic and inorganic materials—whether in solid or liquid form. This integrated system enables precise measurement of thermodynamic transitions, thermal stability, decomposition behavior, and chemical reactions across a wide temperature range.

We are your trusted TG FT-IR Thermogravimetric Analysis Distributor and Service Provider in India.
  </p>

  <!-- Why Combine Section -->
  <div class="">
  <h2 class="font-[MaxOT] text-[#E63946] text-xl sm:text-2xl mb-3">Why Combine TG with FT-IR?</h2>
  <p class="text-gray-800 mb-4">
 While thermogravimetric analysis (TG) provides valuable quantitative insights into mass changes during thermal processes, it lacks the ability to identify the nature of the gases evolved. This limitation is overcome by coupling TG with FT-IR spectroscopy, a technique that excels at identifying gaseous decomposition products in real-time.
  </p>
  <p class="text-gray-800 mb-6">
  FT-IR spectroscopy works by analyzing the interaction of infrared radiation with molecular dipole vibrations. With the exception of homonuclear diatomic molecules and noble gases, every compound produces a unique infrared spectrum—making it ideal for compound-specific gas identification.
  </p>

  </div>
<div>
        `,

        content: `
<div class="space-y-4 px-3 text-[18px] font-[Roboto] text-gray-700">

  <div class="space-y-3">
    <h2 class="text-xl font-[MaxOT] text-[#E63946]">TG FT-IR Coupling Configurations</h2>
    <p>
      Bruker provides flexible coupling solutions to integrate TG systems with FT-IR spectroscopy, including:
    </p>
    <ul class="list-disc list-inside space-y-1">
      <li>
        <strong>External Gas Cell Coupling:</strong> Via transfer line for maximum FT-IR system adaptability and
        standalone operation.
      </li>
      <li>
        <strong>Internal Gas Cell Coupling:</strong> Utilizes the FT-IR sample chamber and transfer line for fully
        integrated measurements.
      </li>
      <li>
        <strong>Direct PERSEUS® Coupling:</strong> Offers a compact and highly efficient configuration without transfer
        lines, ideal for streamlined, high-throughput workflows.
      </li>
    </ul>
  </div>

  <div class="space-y-3">
    <h2 class="text-xl font-[MaxOT] text-[#E63946]">TG FT-IR Coupling Options for Enhanced Flexibility</h2>
    <p>
      Coupling Thermogravimetric Analysis (TG) with Fourier-Transform Infrared Spectroscopy (FT-IR) offers significant
      analytical advantages, and the configuration of the coupling system plays a central role in optimizing
      performance. Bruker and NETZSCH offer multiple TG-FTIR coupling setups—external, internal, and PERSEUS—to match
      diverse analytical needs and laboratory environments.
    </p>
  </div>

  <!-- External Coupling -->
  <div class="space-y-3">
    <h3 class="text-lg font-[MaxOT] text-[#111827]">External Coupling – Flexible and High-Performance</h3>
    <p>
      The external TG FT-IR coupling module provides maximum flexibility and is compatible with different detector
      configurations. Depending on sensitivity requirements, it can be equipped with either:
    </p>
    <ul class="list-disc list-inside space-y-1">
      <li><strong>DLaTGS detector:</strong> Room-temperature detector for robust, routine measurements.</li>
      <li>
        <strong>Liquid nitrogen-cooled MCT detector:</strong> High-sensitivity option for demanding trace-level
        detection.
      </li>
    </ul>
    <p>
      This module enables easy, computer-controlled switching between standard FT-IR sample compartment measurements and
      TG FT-IR analysis, making it ideal for laboratories that require multi-mode flexibility without compromising
      performance.
    </p>
  </div>

  <!-- Internal Coupling -->
  <div class="space-y-3">
    <h3 class="text-lg font-[MaxOT] text-[#111827]">Internal Coupling – Optimized Gas Detection</h3>
    <p>
      In internal coupling, gas detection sensitivity is closely linked to Beer’s Law, which relates absorption to the
      path length of the cell, the molecular concentration, and the analyte’s absorptivity. While absorptivity is
      constant, detection efficiency can be optimized by adjusting path length and minimizing gas cell volume.
    </p>
    <ul class="list-disc list-inside space-y-1">
      <li>
        <strong>Longer path length</strong> increases interaction between IR radiation and analyte, enhancing detection
        limits.
      </li>
      <li>
        <strong>Smaller gas cell volumes</strong> reduce gas exchange times and dilution effects, improving sensitivity.
      </li>
      <li>
        <strong>Lower sample quantities</strong> are required, making the setup ideal when sample availability is
        limited.
      </li>
    </ul>
    <p>
      Internal coupling offers an excellent balance of high sensitivity and compact design, making it well suited for
      both routine QA/QC and advanced research applications.
    </p>
  </div>

  <!-- PERSEUS Coupling -->
  <div class="space-y-3">
    <h2 class="text-xl font-[MaxOT] text-[#E63946]">PERSEUS® Coupling – Compact and Integrated Design</h2>
    <p>
      PERSEUS® is Bruker’s patented solution for direct TG-FTIR integration, combining the compact ALPHA II FT-IR
      spectrometer with NETZSCH thermoanalyzers. This configuration removes the need for external transfer lines,
      minimizing gas loss and maximizing transfer efficiency.
    </p>
    <p class="font-semibold">Key benefits include:</p>
    <ul class="list-disc list-inside space-y-1">
      <li><strong>Minimal footprint:</strong> Ideal for space-limited laboratories and compact benchtop layouts.</li>
      <li><strong>Fast response time:</strong> Enables immediate detection of evolved gases during thermal events.</li>
      <li><strong>Ease of use:</strong> Simple integration, straightforward operation, and low maintenance.</li>
    </ul>
    <p>
      PERSEUS® coupling delivers an efficient, space-saving, and high-throughput solution for laboratories that require
      seamless thermal analysis and gas identification with maximum productivity.
    </p>
    <p>
      At <strong>Inkarp Instruments</strong>, we offer complete TG-FTIR solutions—from system selection and installation
      to application support and long-term servicing. Partner with us for reliable performance, expert consultation, and
      dedicated support as a leading TG-FTIR Thermogravimetric Analysis Distributor and Service Provider in India.
    </p>
  </div>

</div>
        `,

        advantages: [
            { overview: "", },
            { name: "Simultaneous Quantification and Identification", description: "Analyze mass loss events and immediately identify the released gases." },
            { name: "Broad Temperature Capability", description: "Reliable data across a wide thermal range." },
            { name: "Real-Time Monitoring", description: "Observe chemical changes as they occur during heating or cooling cycles." },
            { name: "High Sensitivity and Resolution", description: "Detect trace gases and subtle spectral changes." },
        ],

        applications: [
            { name: "Polymer and Plastic Analysis", description: "Decomposition profiling and additive identification" },
            { name: "Pharmaceuticals", description: "Stability testing and volatile content detection" },
            { name: "Chemicals and Catalysts", description: "Monitoring reaction pathways and residue analysis" },
            { name: "Environmental Testing", description: "Identification of emissions and pollutants" },
            { name: "Materials Science", description: "Studying thermal degradation and composite behavior" },
        ],
    },

    "tango-ft-nir-spectrometer": {
        id: "tg-ftir-thermogravimetric-analysis",
        name: "Tango FT-NIR Spectrometer",
        image: TangoFtNirSpectrometer, // Replace with actual product image import
        logo: Bruker,
        bannerImg: Banner3, // Replace with correct banner image import
        altText: "Bruker",
        videoId: "",

        meta: {
            title: "TG-FTIR Thermogravimetric Analysis | Bruker | Inkarp Instruments India",
            description: "TG-FTIR combines thermogravimetric analysis with FT-IR spectroscopy for simultaneous mass loss tracking and gas identification. Distributed and supported by Inkarp Instruments across India.",
            keywords: [
                "TG-FTIR India",
                "Thermogravimetric FTIR Analysis",
                "Bruker TG-FTIR Distributor",
                "PERSEUS Coupling FTIR",
                "FTIR Gas Analysis",
                "TG Coupled FTIR India",
                "FTIR Thermal Decomposition",
                "Bruker Thermo Analysis",
                "Evolved Gas Analysis India",
                "FTIR Polymer Testing"
            ],
            altText: "TG-FTIR Thermogravimetric Analysis",
            internalLinks: ["Thermal Analysis Instruments", "FTIR Solutions"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `<!-- TANGO FT-NIR Spectrometer Block -->
            <div class="space-y-3 px-3">
            <p class="mt-3 text-[18px] leading-relaxed text-gray-800">
                The <b>TANGO FT-NIR Spectrometer</b>by Bruker is a powerful, compact, and user-friendly solution for routine analysis in industrial environments. Designed for speed, accuracy, and operational simplicity, TANGO provides fast and reliable results with minimal user training. With its intuitive touchscreen interface, low energy consumption, and robust housing, it delivers lab-quality performance in at-line and production settings—helping users enhance efficiency and reduce operating costs. We are your trusted TANGO FT-NIR Spectrometer Distributor and Service Provider in India.
            </p>
            </div>
            `,

        content: `
<div class="space-y-3 px-3 text-[18px] font-[Roboto] text-gray-700">

  <h3 class="text-xl font-[MaxOT] text-[#E63946]">Zero Prep, Zero Errors – Effortless Sample Handling</h3>
  <p>
    TANGO eliminates the need for chemicals, solvents, or sample prep. Operators simply fill the vial or measuring cup,
    and the analysis is performed directly through the glass—saving time and reducing the risk of human error.
  </p>

  <h3 class="text-xl font-[MaxOT] text-[#E63946]">The system is designed for both solids and liquids:</h3>

  <!-- Transmission Module -->
  <div class="space-y-2">
    <h3 class="text-lg font-semibold">Transmission Module – For Liquids</h3>
    <ul class="list-disc list-inside space-y-1">
      <li><strong>Built-in active sample heater/cooler</strong> (+20°C to +80°C)</li>
      <li>Integrated temperature sensor ensures accurate, stable readings</li>
    </ul>
  </div>

  <!-- Reflection Module -->
  <div class="space-y-2">
    <h3 class="text-lg font-semibold">Reflection Module – For Solids</h3>
    <ul class="list-disc list-inside space-y-1">
      <li><strong>Gold-coated integrating sphere</strong> for diffuse reflection</li>
      <li>Ideal for analyzing inhomogeneous samples</li>
      <li>Compatible with <strong>sample rotators</strong> for enhanced surface coverage</li>
    </ul>
  </div>

  <!-- Long Term Precision -->
  <h3 class="text-xl font-[MaxOT] text-[#E63946]">Built for Long-Term Precision</h3>
  <p>
    The TANGO leverages Bruker’s trusted FT-NIR technology and robust components,
    such as the RockSolid™ interferometer and easily replaceable desiccant cartridges.
    Key maintenance actions—like light source replacement—take just seconds and require no tools,
    minimizing downtime and maximizing lab productivity.
  </p>

   <div class="space-y-2">
    <h3 class="text-lg font-semibold">Key Use Cases</h3>
    <ul class="list-disc list-inside space-y-1">
      <li>Testing of<strong> incoming raw materials</strong></li>
      <li>In-process analytics for real-time control</li>
      <li>Final product inspection and release testing</li>
      <li>Ready-to-use calibration packages for standardized industries like food and feed</li>
      <li>With Bruker’s global application support and ready-to-deploy calibration models, TANGO ensures maximum reliability with minimum training.</li>
    </ul>
<p>At Inkarp Instruments, we offer complete support for TANGO—from consultation and product selection to training, integration, and technical service. Partner with us as your dedicated TANGO FT-NIR Spectrometer Distributor and Service Provider in India.</p>
  </div>

</div>
`,



        features: [
            { overview: "" },
            { name: "Touchscreen Operation", description: "12.2 interface available in over 17 langauges" },
            { name: "Automatic Background Alignment:", description: " No user intervention required" },
            { name: "Compact Design:", description: "Ideal for labs with limited space" },
            { name: "Rugged Housing:", description: "Easy to clean, dust-resistant, and fit for industrial use" },
            { name: "Energy Efficient:", description: " Typical power consumption of just 40W" }
        ],

        applications: [
            { name: "Food & Beverage:", description: "Analyze moisture, fat, protein, sugar content" },
            { name: "Feed Manufacturing:", description: "Determine ADF, NDF, oil, ash, amino acids" },
            { name: "Pharma & Biotech:", description: "Monitor blending, granulation, and product release" },
            { name: "Chemical & Petrochemical:", description: " Quality control and release testing" },
            { name: "Polymer Industry:", description: "Track additives, blends, and raw materials" },

        ]
    },

    "mpa-iii-ft-nir-spectrometer": {
        id: "mpa-iii-ft-nir-spectrometer",
        name: "MPA III FT-NIR Spectrometer",
        image: MpaIiAnalyzer, // Replace with actual image import
        logo: Bruker,
        bannerImg: Banner3, // Replace with actual banner image import
        altText: "Bruker",
        videoId: "",

        meta: {
            title: "BMPA III FT-NIR Spectrometer | Bruker | Inkarp Instruments India",
            description:
                "Discover the BEAM Process FT-NIR Spectrometer by Bruker – a compact, single-point spectrometer for real-time solid and semi-solid material analysis. Distributed by Inkarp Instruments, India.",
            keywords: [
                "BEAM FT-NIR Spectrometer",
                "Process NIR Spectrometer India",
                "Bruker BEAM Distributor India",
                "Single-Point NIR Monitoring",
                "Solid Material NIR Analysis",
                "Real-Time Process Spectroscopy",
                "FT-NIR Conveyor Belt Monitoring",
                "NIR in Food and Feed Industry",
                "Pharma In-line NIR Monitoring",
                "Inkarp Instruments Bruker India"
            ],
            altText: "BEAM FT-NIR Spectrometer",
            internalLinks: ["FT-NIR Technology", "Real-Time Process Monitoring", "Solid Material Spectroscopy"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `<section class="w-full">
  <div class=" px-4 md:px-6">
    <div class="">
     
      <p class="mt-3 text-gray-800 leading-relaxed">
       The MPA III FT-NIR Spectrometer from Bruker is a versatile, high-performance analyzer designed for both routine QA/QC tasks and advanced method development. Its modular architecture, robust construction, and intuitive interface make it ideal for laboratories and production environments alike. With flexible sampling options and industry-leading OPUS software, the MPA III adapts easily to your needs—whether you're testing raw materials, monitoring processes, or validating final products. 
        <span class="font-medium">We are your reliable MPA III FT-NIR Spectrometer Distributor and Service Provider in India.</span>
      </p>

      <!-- Quick Meta Info line (optional visual helpers) -->
     
    </div>

    <!-- One Analyzer – Multiple Possibilities -->
    <div class="">
      <h2 class="text-xl md:text-2xl font-[MaxOT] text-[#E63946]">One Analyzer – Multiple Possibilities</h2>
      <p class="mt-2 text-gray-800 leading-relaxed">
       The MPA III offers unmatched flexibility with its modular design, supporting a wide variety of sampling modules. Whether you're working with solids, liquids, or semi-solids, the MPA III provides accurate, non-destructive analysis and supports direct comparisons of various sampling methods—all in one compact system.
      </p>
      <ul class="mt-3 list-disc pl-5 space-y-1 text-gray-800">
        <li>Lab and at-line ready</li>
        <li>Can be mounted on carts for mobile use</li>
        <li>Handles method development and routine QC with ease</li>
      </ul>
    </div>

    
    </div>
  </div>
</section>
`,

        content: `
<div class="space-y-3 px-3">
<!-- OPUS Software -->
    <div class="">
      <h2 class="text-xl md:text-2xl font-semibold font-[MaxOT] text-[#E63946]">Effortless Operation with OPUS Software</h2>
      <p class="mt-2 text-gray-800 leading-relaxed">
        With OPUS spectroscopy software, even first-time users can confidently operate the MPA III. Customizable workspaces and user access levels streamline everyday use while maintaining full control and data integrity.
      </p>

      <h2 class="mt-4 text-lg text-gray-900">Available software modules include:</h2>
      <ul class="mt-2 list-disc pl-5 space-y-1 text-gray-800">
        <li><b>OPUS/LAB</b> – Intuitive workflow for routine analysis</li>
        <li><b>OPUS/IDENT</b> – Raw material identification with spectral libraries</li>
        <li><b>OPUS/CONFO</b> – Conformity analysis for production validation</li>
        <li><b>OPUS/QUANT2</b> – Multivariate calibration and prediction (PLS-based)</li>
        <li><b>ONET</b> – Web-based software for remote instrument management and network administration</li>
      </ul>
      <p class="mt-2 text-gray-800">All methods developed on the MPA III are fully transferable to other Bruker instruments.</p>
    </div>

    <!-- Maintenance -->
    <div class="">
      <h2 class="text-xl md:text-2xl font-semibold font-[MaxOT] text-[#E63946]">Hassle-Free Maintenance</h2>
      <ul class="mt-2 list-disc pl-5 space-y-1 text-gray-800">
        <li>Pre-aligned consumables for quick user replacement</li>
        <li>Automated service alerts with step-by-step replacement guides</li>
        <li>Remote support capability via Ethernet/intranet/cloud</li>
        <li>10-year warranty on interferometer moving parts and laser</li>
      </ul>
    </div>

    <!-- Compliance -->
    <div class="">
      <h2 class="text-xl md:text-2xl font-[MaxOT] text-[#E63946]">Compliance & Validation</h2>
      <p class="mt-2 text-gray-800 leading-relaxed">
        MPA III is equipped with an internal validation unit housing certified reference materials and filters for automated OQ/PQ checks via the OPUS Validation Program (OVP). Full support for regulatory compliance under USP, Ph. Eur., JP, and validation documentation is included.
      </p>
      <p class="mt-3 text-gray-800 leading-relaxed">
        At Inkarp Instruments, we offer complete support for the MPA III—covering pre-sales consultation, installation, application support, software training, and service. Whether for food, pharma, chemical, or polymer applications, we ensure your FT-NIR workflows run smoothly and efficiently.
        <span class="font-medium">Partner with us as your trusted MPA III FT-NIR Spectrometer Distributor and Service Provider in India.</span>
      </p>
</div>
`,


        features: [
            {
                overview: ""
            },
            {
                name: "Permanently aligned RockSolid™ interferometer",
                description: "for maximum stability"
            },
            {
                name: "Gold-coated cube corner mirrors",
                description: "for superior precision"
            },
            {
                name: "Solid-state laser",
                description: "with a 10-year warranty"
            },
            {
                name: "InGaAs detectors",
                description: "with linear response across the full NIR spectrum"
            },
            {
                name: "Long-life light source",
                description: "for reduced downtime"
            },
            {
                name: "Internal online diagnostics",
                description: "providing real-time status updates"
            },
            {
                name: "Automated internal validation unit",
                description: "for compliance with USP, Ph. Eur., and JP"
            }
        ],

        applications: [
            { overview: "" },
            {
                name: "Food & Agriculture",
                description:
                    "Dairy, meat, beverages, edible oils, bakery ingredients; Grains, seeds, feed and forage"
            },
            {
                name: "Pharma & Biopharma",
                description:
                    "Raw material ID, tablet testing; Drying and blending process monitoring"
            },
            {
                name: "Chemical & Polymer",
                description:
                    "Component analysis in petrochemicals; Monitoring polymer properties like viscosity, monomer content, etc."
            },
            {
                name: "General QA/QC",
                description:
                    "Raw material inspection, In-process analytics, Final product and release testing"
            }
        ],



    },

    "bravo-handheld-raman-spectrometer": {
        id: "bravo-handheld-raman-spectrometer",
        name: "BRAVO Handheld Raman Spectrometer",
        image: BravoHandheld, // Replace with actual image import
        logo: Bruker,
        bannerImg: Banner3, // Replace with correct banner image import
        altText: "Bruker",
        videoId: "",

        meta: {
            title: "BRAVO Handheld Raman Spectrometer | Bruker | Inkarp Instruments India",
            description: "Explore the BRAVO Handheld Raman Spectrometer by Bruker – a powerful portable Raman device for non-destructive material identification. Distributed and supported by Inkarp Instruments across India.",
            keywords: [
                "BRAVO Raman India",
                "Handheld Raman Spectrometer",
                "Bruker Raman Distributor",
                "Portable Raman for Pharma",
                "Raw Material Identification",
                "Raman Spectroscopy Device",
                "SSETM Raman Technology",
                "Bruker Raman Compliance",
                "BRAVO OPUS Software",
                "Inkarp Bruker Distributor India"
            ],
            altText: "BRAVO Handheld Raman Spectrometer",
            internalLinks: ["Raman Spectroscopy Products", "Pharmaceutical Raw Material Analysis"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `The BRAVO Handheld Raman Spectrometer by Bruker is a cutting-edge portable Raman device designed for rapid, non-destructive material identification and raw material verification. With unmatched performance, intuitive software, and compliance-ready features, BRAVO stands out as the ideal solution for regulated environments like pharmaceuticals, law enforcement, research labs, and field analysis. Engineered with industry-first features such as SSETM fluorescence mitigation, DuoLaser™ excitation, and Laser Class 1 safety, BRAVO empowers users to perform accurate and reliable measurements through packaging or glass—anytime, anywhere. We are your trusted BRAVO Handheld Raman Spectrometer Distributor and Service Provider in India.`,


        content: `
<div class="space-y-3 px-3 text-[18px] font-[Roboto] text-gray-700">

  <h3 class="text-xl font-[MaxOT] text-[#E63946]">
    Adaptable Accessories for Any Workflow
  </h3>
  <p>
    The BRAVO comes equipped with various <strong>custom measurement tips</strong>, including:
  </p>
  <ul class="list-disc list-inside space-y-1">
    <li><strong>Bag tip and vial tip</strong> – For measurement through transparent packaging and glass vials</li>
    <li><strong>Bottle adapter</strong> – Ensures easy handling of various glass bottle sizes, including amber</li>
    <li><strong>Tripod mount adapter</strong> – For stable positioning in delicate field applications</li>
  </ul>
  <p>
    Additional accessories and <strong>custom-designed adaptations</strong> are available to meet industry-specific requirements.
  </p>

  <h3 class="text-xl font-[MaxOT] text-[#E63946]">
    BRAVO SyncService and Remote Operation
  </h3>
  <p>
    The <strong>SyncService</strong> ensures all BRAVO measurement data, including audit trails, are 
    <strong>automatically backed up</strong> to a secure location. With 
    <strong>WiFi and Ethernet</strong> connectivity, users can remotely operate BRAVO like a benchtop spectrometer, 
    enabling flexibility for both lab-based and on-the-go use.
  </p>

  <h3 class="text-xl font-[MaxOT] text-[#E63946]">
    Compliance-Ready for Regulated Environments
  </h3>
  <p>
    Bruker’s BRAVO offers complete qualification packages and validation documentation, ensuring compliance with:
  </p>
  <ul class="list-disc list-inside space-y-1">
    <li>21 CFR Part 11</li>
    <li>Data Integrity regulations</li>
    <li>USP &amp; Ph. Eur. standards</li>
    <li>GMP guidelines</li>
  </ul>

  <p>
    Whether you're verifying incoming raw materials or performing forensic analysis, BRAVO delivers exceptional Raman performance 
    with confidence and compliance.
  </p>

  <p>
    As a leading provider of analytical solutions, <strong>Inkarp Instruments</strong> delivers full-service support for the BRAVO Raman Spectrometer—from 
    consultation and demo to installation, validation, training, and after-sales service. Partner with us as your authorized 
    BRAVO Handheld Raman Spectrometer Distributor and Service Provider in India.
  </p>

</div>
`,


        features: [
            { overview: "" },
            { name: "SSETM Technology", description: "Patented fluorescence mitigation for broader material compatibility" },

            { name: "DuoLaser™ Excitation", description: "Dual-laser system (785 nm and 852 nm) ensures superior spectral coverage" },

            { name: "Laser Class 1", description: "Operable without laser safety training or PPE – safe for any user" },

            { name: "OPUS TOUCH GUI", description: "Intuitive, touchscreen-based operation with guided workflows" },

            { name: "IntelliTip™", description: "Automatic recognition of measurement tips for consistent ID results" },

            { name: "WiFi & Ethernet Connectivity", description: "Fast data transfer and remote control capabilities" },

            { name: "SyncService", description: "Automated data sync and audit trail backup to secure systems" },

            { name: "Pharma-Ready Compliance", description: "Meets 21 CFR Part 11, USP, Ph. Eur., and cGMP standards" }
        ],

        applications: [
            { overview: "" },
            {
                name: "Pharmaceuticals",
                description:
                    "Raw material ID and verification through transparent packaging; supports IQ/OQ/PQ validation with OPUS software; includes extensive reference libraries and custom method creation"
            },
            {
                name: "Narcotics & Law Enforcement",
                description:
                    "Fast and accurate identification of drugs and illicit substances; supports the TicTac Raman Drug Library updated for new designer drugs"
            },
            {
                name: "Art Restoration & Heritage Conservation",
                description:
                    "Non-invasive analysis of pigments, minerals, and gems; extended spectral range down to 170 cm⁻¹ for complex compounds; optional tripod mount for stable positioning"
            },
            {
                name: "Laboratory & R&D",
                description:
                    "Use as a portable or benchtop device via docking station; supports remote operation and method transfer using OPUS software suite"
            },
            {
                name: "Polymers & Plastics",
                description:
                    "Analyze base polymers, additives, and blends for QC and sustainability; ideal for recycling and biodegradable polymer development"
            }
        ]



    },

    "multiram-ft-raman-spectrometer": {
        id: "multiram-ft-raman-spectrometer",
        name: "MultiRAM FT-Raman Spectrometer",
        image: MultiRAMFTRamanSpectrometer, // Replace with actual image import
        logo: Bruker, // Replace with actual logo import
        bannerImg: Banner3, // Replace with actual banner image import
        altText: "Bruker",
        videoId: "",

        meta: {
            title: "MultiRAM FT-Raman Spectrometer | Bruker | Inkarp Instruments India",
            description: "Discover the MultiRAM FT-Raman Spectrometer by Bruker – a robust Raman system for advanced emission studies and research. Distributed and supported by Inkarp Instruments in India.",
            keywords: [
                "MultiRAM FT-Raman Spectrometer",
                "Bruker Raman India",
                "FT-Raman Spectrometer",
                "Material Analysis Raman",
                "1064 nm Raman Spectroscopy",
                "Low Fluorescence Raman",
                "Bruker RockSolid Interferometer",
                "High-Performance Raman System",
                "Raman for Polymers and Pharma",
                "Inkarp Bruker Distributor India"
            ],
            altText: "MultiRAM FT-Raman Spectrometer",
            internalLinks: ["Raman Spectroscopy Instruments", "Material Science Raman Applications"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `The MultiRAM FT-Raman Spectrometer by Bruker is a high-performance, stand-alone Raman solution designed for advanced research and emission studies. With unmatched spectral sensitivity, superior optical stability, and a flexible sampling setup, the MultiRAM is ideal for applications demanding precision, reliability, and analytical versatility. Its robust build and gold-coated optics, combined with Bruker’s RockSolid™ interferometer, make it the preferred choice for scientists and analysts working in material science, pharmaceuticals, polymers, and more. We are your trusted MultiRAM FT-Raman Spectrometer Distributor and Service Provider in India.
        
        `,

        content: `
        <div class="space-y-3 px-3 text-[18px] font-[Roboto] text-gray-700">
  <h3 class="text-xl font-[MaxOT] text-[#E63946]">
    Why Choose the MultiRAM?
  </h3>
  <p>The MultiRAM system is engineered for researchers who require both analytical power and modular adaptability. Whether you're studying thermally sensitive materials, low-intensity Raman bands, or combining macro and micro Raman techniques, the MultiRAM offers unmatched sensitivity, stability, and scalability in a single platform.</p>
  <p>At Inkarp Instruments,we provide comprehensive support for the MultiRAM FT-Raman Spectrometer—covering everything from consultation and system configuration to installation, application training, and regulatory compliance support. Our experience across industries ensures you receive tailored solutions and responsive service. Choose Inkarp Instruments as your trusted MultiRAM FT-Raman Spectrometer Distributor and Service Provider in India.</p>
  </div>
        `,

        features: [
            { overview: "" },
            {
                name: "High Performance & Spectral Range",
                description: "Spectral range: 3600 – 50 cm⁻¹ (Stokes shift); Equipped with Nd:YAG laser excitation at 1064 nm; Ideal for fluorescence-free Raman analysis in complex or colored samples; Built with gold-coated optics for enhanced throughput and emission stability"
            },
            {
                name: "RockSolid™ Stability & Sensitivity",
                description: "Patented RockSolid™ interferometer for lifetime optical alignment; Frictionless design ensures maximum sensitivity and long-term spectral precision; Liquid nitrogen cooled Ge detector and room-temperature InGaAs detector options; Long cryogen hold time provides week-long uninterrupted operation"
            },
            {
                name: "Flexible Sampling Configuration",
                description: "Accommodates dual laser/detector setups; Integrated automated polarization accessory; Two fiber optic coupling ports; Large sample compartment with 90° scattering geometry and defocusing optics; Includes motorized sample positioning stage and white light source; Compatible with RamanScope III FT-Raman microscope, SENTERRA II compact Raman microscope, high/low temperature stages, auto sample changers, and more"
            }
        ],



        advantages: [
            {
                name: "Fluorescence-Free Raman Analysis",
                description: "The 1064 nm laser excitation enables clear Raman spectra even from highly fluorescent or colored materials—ideal for complex sample analysis."
            },
            {
                name: "Unmatched Optical Stability",
                description: "Bruker’s RockSolid™ design ensures long-term optical alignment, reducing the need for recalibration and minimizing downtime."
            },
            {
                name: "Extended Cryogen Hold Time",
                description: "The liquid nitrogen cooled detector offers week-long operation without refilling—ideal for uninterrupted research workflows."
            },
            {
                name: "Modular and Scalable Platform",
                description: "Expandable system architecture allows integration of accessories like auto sample changers, heating/cooling stages, and polarization analyzers."
            },
            {
                name: "Wide Application Versatility",
                description: "From polymorph detection in pharmaceuticals to reaction monitoring in chemical labs, MultiRAM supports a broad range of Raman applications."
            },
            {
                name: "Spectral Correction with White Light Source",
                description: "Integrated calibration options and white light reference support precise spectral correction and reproducibility."
            },
            {
                name: "Research-Grade Data Quality",
                description: "High SNR, low baseline drift, and advanced spectral range ensure high-quality spectra required for academic and industrial R&D."
            }
        ],

        applications: [
            { overview: "" },
            {
                name: "Material Science",
                description: "Crystallinity analysis, stress mapping, and polymorph detection for advanced materials research"
            },
            {
                name: "Pharmaceuticals",
                description: "API verification, excipient identification, and formulation-level quality control"
            },
            {
                name: "Polymers & Plastics",
                description: "Rapid composition checks, filler identification, and additive characterization"
            },
            {
                name: "Chemical Research",
                description: "Reaction monitoring, intermediate tracking, and quality control in chemical R&D workflows"
            },
            {
                name: "Academic Research",
                description: "High-sensitivity FT-Raman spectroscopy for emission studies and advanced scientific investigations"
            }
        ]

    },

    "hyperion-ft-ir-microscope": {
        id: "hyperion-ft-ir-microscope",
        name: "Hyperion FT-IR Microscope",
        image: HyperionFtirMicroscope, // Replace with actual image import
        logo: Bruker, // Replace with actual logo import
        bannerImg: Banner3, // Replace with actual banner image import
        altText: "Bruker",
        videoId: "",

        meta: {
            title: "Hyperion FT-IR Microscope | Bruker | Inkarp Instruments India",
            description: "Explore the Bruker Hyperion FT-IR Microscope – advanced infrared microscopy system integrating FT-IR and QCL imaging. Distributed and supported by Inkarp Instruments in India.",
            keywords: [
                "Hyperion FT-IR Microscope",
                "Bruker FT-IR Microscope",
                "QCL Imaging FTIR",
                "Infrared Microscopy India",
                "ATR FTIR Microscope",
                "FTIR for Microplastics",
                "Bruker Hyperion India",
                "Infrared Spectroscopy Microscope",
                "FTIR Microscope for Pharma",
                "Inkarp Bruker Distributor India"
            ],
            altText: "Hyperion FT-IR Microscope",
            internalLinks: ["FT-IR vs QCL Imaging", "Advanced Microscopy Instruments"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `<section class="w-full">
  <div class=" px-4 md:px-6">
    <div class="">
     
      <p class="mt-3 text-gray-800 leading-relaxed">
       The Hyperion FT-IR Microscope (HYPERION II) is a cutting-edge solution for advanced research and development, seamlessly integrating FT-IR microscopy with Infrared Laser Imaging (QCL). Designed for maximum flexibility, it supports a wide range of accessories and delivers unparalleled performance in material analysis.
      </p>
      <h2 class="text-xl md:text-2xl font-[MaxOT] text-[#E63946]">Innovation in Infrared Microscopy</h2>
      <p class="mt-2 text-gray-800 leading-relaxed">
       The Bruker Hyperion II FT-IR Microscope sets new standards in infrared microscopy. It delivers high-resolution IR imaging down to the diffraction limit and offers exceptional capabilities in ATR (Attenuated Total Reflectance) microscopy. As the first system to combine FT-IR and Infrared Laser Imaging (ILIM) in one instrument, it enables all three core measurement modes—transmission, reflection, and ATR—in a single, powerful platform.
      </p>
    </div>

    
    </div>
  </div>
</section>
`,

        content: `<div class="space-y-3 px-3 text-[18px] font-[Roboto] text-gray-700">

  <h2 class="text-[24px] font-semibold text-[#E63946]">The FT-IR Research Microscope for Pioneers and Innovators</h2>
  <p>
    The Hyperion FT-IR Microscope (HYPERION II) is designed for researchers who demand more—from their tools and from their results. 
    With unmatched flexibility, precision, and configurability, the HYPERION II is more than a microscope—it's an extension of your expertise and innovation.
  </p>

  <h3 class="text-[20px] font-semibold text-[#E63946]">Take Full Control of Your Infrared Microscopy</h3>
  <p>
    What truly sets the Bruker Hyperion II FT-IR Microscope apart is the freedom it gives to its users. From the sample to the settings, 
    every aspect of your experiment is in your hands.
  </p>
  <p>With the HYPERION II, you have complete access:</p>
  <ul class="list-disc list-inside space-y-2">
    <li>To your samples and the parameters that define your experiment</li>
    <li>To advanced imaging modes like single point, mapping, or full-field imaging</li>
    <li>To a wide selection of detectors, objectives, and sample stages</li>
    <li>To powerful techniques such as ATR or Grazing Angle microscopy</li>
  </ul>
  <p>
    At every stage, you can make real-time adjustments that influence and improve your results.
  </p>

  <h3 class="text-[20px] font-semibold text-[#E63946]">Made for the Demanding Researcher</h3>
  <p>
    Unlike the LUMOS II, which is optimized for automation and ease of use, the HYPERION II is built for expert users who want to control every detail of the measurement process. 
    It’s a precision instrument that follows your commands—no more, no less.
  </p>
  <p>
    If you are a researcher who thrives on flexibility, values precision, and seeks the highest level of experimental control, 
    the HYPERION II is your ideal FT-IR microscopy solution.
  </p>

  <h2 class="text-[24px] font-semibold text-[#E63946]">A Legacy Reinvented: Building on Two Decades of Innovation</h2>
  <p>
    The Hyperion FT-IR Microscope (HYPERION I) proudly continues the legacy of its renowned predecessor, trusted by researchers worldwide for nearly 20 years. 
    Known for precision, reliability, and innovation, the original HYPERION set the benchmark in FT-IR microscopy and imaging—and the HYPERION II takes it even further.
  </p>
  <p>
    Every proven feature that made the HYPERION iconic is still here—liquid nitrogen and thermoelectrically cooled MCT detectors, focal plane array imaging, 
    visual and IR enhancement tools, and an extensive range of accessories—only now, they’re faster, smarter, and more powerful than ever before.
  </p>
  <p>
    We’ve reimagined the HYPERION platform to once again lead the field, combining time-tested methods with cutting-edge technology to empower researchers across industries.
  </p>

  <h2 class="text-[24px] font-semibold text-[#E63946]">Augmenting FT-IR with Infrared Laser Imaging (QCL)</h2>

  <h3 class="text-[20px] font-semibold text-[#E63946]">FT-IR and QCL in One Revolutionary Instrument</h3>
  <p>
    For the first time, researchers can harness the combined power of Fourier-transform infrared (FT-IR) spectroscopy and Quantum Cascade Laser (QCL) technology 
    in a single microscope—the HYPERION II.
  </p>
  <p>
    This integration opens entirely new possibilities in life sciences, materials science, and chemical imaging. Collect a traditional FT-IR spectrum, 
    select key wavelengths, and create high-contrast chemical images with QCL—all within one seamless workflow.
  </p>

  <h3 class="text-[20px] font-semibold text-[#E63946]">A New Standard in QCL Microscopy</h3>
  <p>
    The HYPERION II is not just an FT-IR microscope with a laser—it is a true QCL microscope. With a patented coherence reduction technology, 
    it eliminates artifacts caused by spatial coherence (like fringes and speckles), delivering clean, reliable chemical imaging without the need for digital correction.
  </p>
  <p>
    In classical FT-IR, coherence isn’t an issue. But in QCL-based IR microscopy, spatial coherence can distort your data. The HYPERION II solves this with smart hardware engineering—so your images reflect chemistry, not interference patterns.
  </p>
  <p>
    This means researchers can now obtain artifact-free IR laser images at unprecedented speed and clarity, even in challenging microscopic environments.
  </p>

  <h3 class="text-[20px] font-semibold text-[#E63946]">Why Choose Between FT-IR and QCL When You Can Have Both?</h3>
  <ul class="list-disc list-inside space-y-2">
    <li>FT-IR offers broad spectral coverage and unmatched versatility.</li>
    <li>QCL delivers rapid imaging and high signal-to-noise within selected mid-IR bands.</li>
  </ul>
  <p>
    With the Bruker Hyperion II FT-IR Microscope, you no longer need to compromise. It’s both an exceptional FT-IR imaging system and a high-performance QCL microscope, 
    giving you the flexibility to choose the right tool for each task—with complete control at every step.
  </p>

  <h3 class="text-[20px] font-semibold text-[#E63946]">OPUS 8.7 Software Update | HYPERION II | Released Q3 2021</h3>
  <p>
    Take your chemical imaging and FT-IR microscopy to the next level with the latest OPUS 8.7 software release. 
    Designed to fully unlock the potential of the Bruker Hyperion II FT-IR Microscope, this update introduces powerful new features that make analysis faster, 
    smarter, and more autonomous.
  </p>

  <h3 class="text-[20px] font-semibold text-[#E63946]">New Feature: Adaptive K-Means Clustering for High-Performance Chemical Imaging</h3>
  <p>
    The new Adaptive K-means Clustering function builds upon Bruker’s trusted cluster analysis tools, introducing a next-generation algorithm for unsupervised, 
    intelligent classification of spectral data.
  </p>

  <h3 class="text-[20px] font-semibold text-[#E63946]">New Feature: “Cluster ID” for 3D Spectral Data Classification</h3>
  <p>
    Identify and interpret chemical clusters more easily with the new Cluster ID functionality. This tool integrates seamlessly with OPUS’s powerful 
    spectral comparison functions (Library Searches, Quick Compare, Identity Tests).
  </p>
  <p>Use Cases:</p>
  <ul class="list-disc list-inside space-y-2">
    <li>Particle and fiber analysis</li>
    <li>Layer classification in laminates</li>
    <li>Component analysis in pharmaceuticals and inhomogeneous materials</li>
  </ul>

  <h3 class="text-[20px] font-semibold text-[#E63946]">Updated Feature: Enhanced “Find Particles” with Advanced Detection</h3>
  <ul class="list-disc list-inside space-y-2">
    <li><strong>Improved Detection Accuracy:</strong> Identify particles with low contrast or on challenging backgrounds.</li>
    <li><strong>Post-Run Particle Analysis:</strong> Quantify particle size based on high-resolution chemical maps.</li>
  </ul>
  <p>
    This update significantly improves particle detection reliability in environmental analysis, forensics, and industrial cleanliness applications.
  </p>

  <h3 class="text-[20px] font-semibold text-[#E63946]">Inkarp – Trusted Distributor & Service Provider for Hyperion II - FT-IR Microscope in India</h3>
  <p>
    When it comes to sourcing and supporting the Hyperion II - FT-IR Microscope in India, <strong>Inkarp</strong> stands as a trusted and experienced partner in scientific 
    instrument distribution and service excellence. With a strong, all-India presence, Inkarp delivers seamless accessibility, expert support, and fast service—tailored specifically 
    to the needs of scientists, laboratories, academic institutions, and research organizations across the country.
  </p>
  <p>
    With over 40 years of experience in the Indian scientific community, Inkarp has been instrumental in empowering research and development by providing 
    direct access to advanced FT-IR solutions like the Hyperion II. We proudly support India’s scientific progress by pairing state-of-the-art technology with local expertise 
    and responsive service.
  </p>

</div>
    `,

        features: [
            { overview: "" },
            {
                name: "Detector Options for μ-FT-IR",
                description:
                    "Broad-, mid-, and narrow-band LN2-cooled MCTs; thermoelectrically cooled (TE) MCT for flexibility and performance."
            },
            {
                name: "Infrared Imaging Detector",
                description:
                    "Focal-plane array (FPA) detector with 64 × 64 or 128 × 128 pixel resolution for high-speed, high-resolution imaging."
            },
            {
                name: "QCL Imaging (Optional)",
                description:
                    "Laser Infrared Imaging Module (ILIM, laser class 1) for integrating QCL technology with FT-IR."
            },
            {
                name: "Objective Lens Selection",
                description:
                    "IR: 3.5x, 15x, 36x; ATR: 20x; GIR: 15x; VIS: 4x, 40x – optimized for different applications and magnifications."
            },
            {
                name: "Spectral Range Extension",
                description:
                    "Extends measurable range from Near-Infrared (NIR) to Far-Infrared (FIR) for broader application compatibility."
            },
            {
                name: "Aperture Options",
                description:
                    "Manual and automated knife-edge aperture wheel; metal apertures for precise NIR imaging."
            },
            {
                name: "Accessory & Stage Options",
                description:
                    "Includes macro IR imaging accessory, cooling/heating stages, flexible sample compartments, etc."
            },
            {
                name: "Optical Tools",
                description:
                    "Darkfield illumination, fluorescence illumination, visual and IR polarizers to enhance sample visualization and analysis."
            }
        ],
        applications: [
            {
                name: "Life Sciences",
                description: "Cellular imaging and biochemical analysis."
            },
            {
                name: "Pharmaceuticals",
                description: "Tablet mapping, contaminant detection, and material verification."
            },
            {
                name: "Emissivity Studies",
                description: "Ideal for LED characterization and thermal property evaluation."
            },
            {
                name: "Failure & Root Cause Analysis",
                description: "Identify defects or material inconsistencies in various components."
            },
            {
                name: "Forensics",
                description: "Trace evidence analysis and forensic material identification."
            },
            {
                name: "Microplastics",
                description: "Detection and identification of microplastic particles in environmental samples."
            },
            {
                name: "Industrial R&D",
                description: "Material development, surface engineering, and innovation studies."
            },
            {
                name: "Polymers & Plastics",
                description: "Analyze chemical composition, phase separation, and additive dispersion."
            },
            {
                name: "Surface Characterization",
                description: "Study coatings, films, and surface treatments at the microscale."
            },
            {
                name: "Semiconductors",
                description: "Micro-contaminant detection and quality assurance in semiconductor materials."
            }
        ],

        advantages: [
            { overview: "" },
            {
                name: "No Pre-Defined Classes Needed",
                description:
                    "Automatically detects all chemical classes present within your sample."
            },
            {
                name: "Time-Saving Automation",
                description:
                    "Eliminates the need for manual estimation or forecasting of chemical components."
            },
            {
                name: "Ideal for Unknown or Complex Samples",
                description:
                    "Perfect for distribution analysis and imaging of minute structures within large datasets."
            },
            {
                name: "Streamlined Workflow",
                description:
                    "Simplifies evaluation, reduces effort, and saves valuable time."
            }
        ]

    },

    "lumos-ii-ft-ir-microscope": {
        id: "lumos-ii-ft-ir-microscope",
        name: "LUMOS II - FT-IR Microscope",
        image: LumosMicroscope, // Replace with actual image import
        logo: Bruker,
        bannerImg: Banner3, // Replace with actual banner image import
        altText: "Bruker",
        videoId: "",

        meta: {
            title: "LUMOS II - FT-IR Microscope | Bruker | Inkarp Instruments India",
            description: "Discover the LUMOS II - FT-IR Microscope by Bruker – high-resolution, user-friendly FT-IR microscopy with ultrafast imaging, automated modes, and powerful ATR capabilities. Distributed and supported by Inkarp Instruments across India.",
            keywords: [
                "LUMOS II FT-IR Microscope",
                "Bruker FT-IR Imaging India",
                "Infrared Microscope Distributor India",
                "Chemical Imaging Microscope",
                "FT-IR Spectroscopy India",
                "LUMOS II ATR Imaging",
                "Bruker FTIR India",
                "FT-IR Microscopy Pharma",
                "Inkarp Bruker India",
                "Infrared Spectroscopy Imaging"
            ],
            altText: "LUMOS II - FT-IR Microscope",
            internalLinks: ["FT-IR product range", "Microscopy for failure analysis", "Pharma analysis tools"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `<div class="space-y-3 ">
        <p>Looking for a powerful yet user-friendly solution for infrared microscopy and chemical imaging? The LUMOS II - FT-IR Microscope combines exceptional IR performance with ultrafast imaging, precise automation, and intuitive software—making it the perfect tool for materials science, failure analysis, particle identification, and more.

Whether you're an expert or a beginner, the LUMOS II helps you achieve accurate, reproducible results in less time.</p>

 <h2 class="text-xl font-[MaxOT] text-[#E63946]">What Is the LUMOS II - FT-IR Microscope?</h2>
<ul class="list-disc">
The LUMOS II - FT-IR Microscope is a stand-alone infrared microscope that integrates Fourier-transform infrared (FT-IR) spectroscopy with visual microscopy. It offers:

<li>Chemical imaging in seconds</li>
<li>High-resolution FT-IR data at each pixel</li>
<li>Fully automated measurement modes (ATR, reflection, transmission)</li>

It’s compact, fully motorized, and requires no purge gas or liquid nitrogen, making it ideal for busy labs
</ul>
        </div>

`,

        content: `
        <div class="space-y-3 px-3">
<h2 style="color:#E63946; font-family:MaxOT;">The Anywhere / Anyone FT-IR Microscope</h2>

<h3 style="color:#E63946; font-family:MaxOT;">Advanced Infrared Microscopy Made Easy for Everyone</h3>
<p>At Bruker, we believe that cutting-edge technology should be accessible to all—regardless of experience level. The LUMOS II – FT-IR Microscope was created with this vision in mind: to make FT-IR microscopy and imaging faster, easier, and more reliable than ever before.</p>
<p>Too often, powerful techniques are locked behind complicated hardware and software. The LUMOS II breaks down those barriers with a streamlined, user-centric design—so whether you're a first-time user or a seasoned expert, you can achieve outstanding results with confidence.</p>

<h3 style="color:#E63946; font-family:MaxOT;">Engineered for Simplicity. Built for Performance.</h3>
<p>From the very beginning, the LUMOS II was designed to be both intuitive and powerful. We combined proven innovations with new advancements in hardware, software, and automation to deliver an instrument that’s as fun to use as it is capable.</p>
<ul>
<li>Beginners benefit from guided workflows and automatic settings that deliver perfect results in minutes</li>
<li>Experts enjoy full control of every parameter, from measurement settings to data evaluation</li>
</ul>

<h3 style="color:#E63946; font-family:MaxOT;">Exceptional FT-IR Microscopy with Unmatched ATR Capabilities</h3>
<p>When it comes to attenuated total reflectance (ATR) microscopy, nothing compares to the LUMOS II. Whether you're using transmission, reflection, or ATR mode, this system delivers consistent, high-quality data every time.</p>
<p>Thanks to FPA technology and a high-precision, retractable ATR crystal, measurements occur exactly where you want—without obstructing your view. The crystal is seamlessly integrated into the lens and controlled by piezoelectric motors, giving you precision, clarity, and ease of use in one compact solution.</p>
<p>If you're doing failure analysis, product development, or microanalysis, the LUMOS II offers unrivaled ATR performance—making it a must-have for modern labs.</p>
<p>Don’t settle for manual, outdated ATR accessories. Get the best. Get the LUMOS.</p>

<h3 style="color:#E63946; font-family:MaxOT;">Where Innovation Meets Endurance</h3>
<p>Innovation is in every detail of the LUMOS II – FT-IR Microscope. Built with Bruker’s proprietary RockSolid™ interferometer, the system ensures maximum stability and long-term performance—no matter your application.</p>
<ul>
<li>Consistent performance across thousands of scans</li>
<li>Mechanically precise, low-energy design powered by modern electronics</li>
<li>Software intelligence that constantly monitors performance and ensures optimal functionality</li>
</ul>
<p>This means you get reliable, accurate results every time—without the hassle.</p>

<h3 style="color:#E63946; font-family:MaxOT;">Why Choose LUMOS II?</h3>
<ul class="list-disc">
<li>Truly accessible FT-IR microscopy—perfect for anyone, anywhere</li>
<li>Industry-leading ATR performance with FPA imaging</li>
<li>Intuitive software and seamless automation</li>
<li>Built for long-term performance and low energy consumption</li>
<li>Supported by Inkarp in India for expert service and distribution</li>
</ul>

<h3 style="color:#E63946; font-family:MaxOT;">Inkarp – Trusted Distributor & Service Provider for LUMOS II - FT-IR Microscope in India</h3>
<p>When it comes to sourcing and supporting the LUMOS II – FT-IR Microscope in India, <strong>Inkarp</strong> stands as a leading name in distribution and service excellence. With a strong, nationwide presence, Inkarp ensures seamless access, reliable support, and fast service delivery—all tailored to the specific needs of your laboratory or research facility within India.</p>
<p>With over 40 years of experience in the Indian scientific community, Inkarp has been a key partner to scientists, laboratories, and research institutions across the country. We are proud to play a vital role in accelerating research by providing direct access to advanced FT-IR microscopy solutions like the LUMOS II, backed by expert technical assistance and responsive after-sales service.</p>
<p>From installation and training to routine maintenance and troubleshooting, Inkarp’s team is committed to ensuring that your LUMOS II – FT-IR Microscope operates at peak performance—empowering you to focus on your research without interruptions.</p>
<div>
`,



        features: [
            {
                name: "TE-MCT Detector (Standard)",
                description: "Delivers high IR sensitivity with no need for liquid nitrogen, simplifying operation and reducing costs."
            },
            {
                name: "Optional FPA Imaging Detector",
                description: "Provides ultrafast chemical imaging with full FT-IR spectral data at each pixel for high-throughput analysis."
            },
            {
                name: "Fully Motorized and Automated",
                description: "Automated ATR, reflection, and transmission modes with smart positioning for minimal user input."
            },
            {
                name: "Integrated ATR with Piezo Control",
                description: "Retractable crystal built into the objective lens enables precise, automated contact with the sample surface."
            },
            {
                name: "PermaSure+ Calibration",
                description: "Built-in calibration for reliable performance over time with minimal maintenance or requalification."
            },
            {
                name: "Compact, Plug-and-Play Design",
                description: "Stand-alone system with small footprint, low power needs, and no external purging required."
            },
            {
                name: "High-Resolution Visual Imaging",
                description: "Offers sub-micrometer spatial resolution (0.6 µm/pixel) and a wide field of view (1490 x 1118 µm²)."
            },
            {
                name: "ZnSe Optics",
                description: "Humidity-resistant optical path ensures long-lasting performance in diverse lab conditions."
            }
        ],

        advantages: [
            { overview: "" },
            {
                name: "Unmatched Infrared Imaging Performance",
                description:
                    "With FPA detector technology, the LUMOS II captures a full IR spectrum at every pixel. Create detailed false-color chemical maps in seconds—perfect for analyzing tablets, polymers, coatings, and more.",
            },
            {
                name: "High-Speed, High-Resolution FT-IR Microscopy",
                description:
                    "Reveal material properties down to the micron. The LUMOS II provides a submicron spatial resolution (0.6 µm/pixel) and a generous field of view (1490 x 1118 µm²).",
            },
            {
                name: "Easy to Use – No Experience Needed",
                description:
                    "The system is designed to be intuitive. Smart automation and guided workflows mean anyone in your lab can generate expert-level results—fast.",
            },
            {
                name: "No Maintenance Hassles",
                description:
                    "No purge gas. No liquid nitrogen. The TE-MCT detector delivers high sensitivity without the operational overhead.",
            },

            // Capability → Benefit table
            {
                name: "Software-Guided Measurements",
                description: "Simplified workflows for all user levels.",
            },
            {
                name: "High-Definition Spectral & Visual Data",
                description: "Clear, accurate imaging and analysis.",
            },
            {
                name: "No Liquid Nitrogen Required",
                description: "Lower cost, easier operation.",
            },
            {
                name: "Sub-Micrometer Visual Resolution",
                description: "Ultra-fine imaging for microscopic features.",
            },
            {
                name: "Ultrafast FPA Imaging",
                description: "Speed and precision in data acquisition.",
            },
            {
                name: "Multi-Mode Imaging",
                description: "ATR, transmission, and reflection compatibility.",
            },
            {
                name: "Easy Sample Access",
                description: "Ergonomic design for fast handling.",
            },
            {
                name: "Regulatory Compliance",
                description: "cGMP & FDA 21 CFR Part 11 ready.",
            },
            {
                name: "Automated Validation Testing",
                description: "OQ/PQ/pharmacopoeia protocols built-in.",
            },
            {
                name: "Scalable Design",
                description: "Upgrade-ready for future research needs.",
            },
        ],

        applications: [
            { overview: "" },
            {
                name: "Failure Analysis",
                description: "Detecting defects and contamination"
            },
            {
                name: "Particle & Surface Analysis",
                description: "Analyzing coatings, particles, and surfaces"
            },
            {
                name: "Industrial Manufacturing",
                description: "Quality control and process optimization"
            },
            {
                name: "Forensic Science",
                description: "Material identification in criminal investigations"
            },
            {
                name: "Life Sciences",
                description: "Biomaterial and tissue characterization"
            },
            {
                name: "Polymers & Plastics",
                description: "Additive detection, polymer structure analysis"
            },
            {
                name: "Environmental Science",
                description: "Microplastic detection and pollutant analysis"
            },
            {
                name: "Pharmaceuticals",
                description: "Drug formulation, purity checks, regulatory compliance"
            }
        ],

        techSpecs: {
            overview: "",

            specs: {
                "Standard TE-MCT Detector": "High IR sensitivity for precise spectral data",
                "Plug & Play Operation": "No liquid nitrogen or dry-air purge required",
                "Optional FPA Imaging Detector": "Enables ultrafast, high-resolution imaging",
                "PermaSure+ Calibration": "Ensures long-term measurement accuracy and reliability",
                "Fully Motorized Hardware": "Automated system with minimal user intervention",
                "Maximum Sample Size Supported": "Up to 40 mm – accommodates large or varied sample types",
                "Long Component Lifetime": "Durable laser and optics reduce maintenance costs",
                "ZnSe Optics": "Resistant to high humidity for reliable long-term use",
                "Compact, Stand-Alone Design": "Small footprint ideal for space-limited labs",
                "Low Power Consumption": "Energy-efficient operation for sustainable laboratory workflows"
            }
        }

    },

    "senterra-ii-raman-microscope": {
        id: "senterra-ii-raman-microscope",
        name: "SENTERRA II Raman Microscope",
        image: SenterraIiRamanMicroscope, // Replace with actual image import
        logo: Bruker,
        bannerImg: Banner3, // Replace with actual banner image import
        altText: "Bruker",
        videoId: "",

        meta: {
            title: "SENTERRA II Raman Microscope | Bruker | Inkarp Instruments India",
            description: "Explore the SENTERRA II Raman Microscope by Bruker – a fully automated, high-precision Raman system designed for failure analysis, QA/QC, material characterization, and advanced research. Distributed and supported by Inkarp Instruments across India.",
            keywords: [
                "SENTERRA II Raman Microscope",
                "Confocal Raman India",
                "Bruker Raman India",
                "Automated Raman Spectrometer",
                "SureCal Calibration Raman",
                "Raman Mapping Microscope",
                "Material Science Raman",
                "Pharma Raman Spectroscopy",
                "Inkarp Bruker Distributor",
                "21 CFR Raman Compliance"
            ],
            altText: "SENTERRA II Raman Microscope",
            internalLinks: ["Raman spectroscopy applications", "Confocal Raman microscopy", "Bruker automated systems"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `<p>The SENTERRA II by Bruker is a high-performance confocal Raman microscope engineered for streamlined, continuous operation in both research and industrial environments. Designed with maximum automation, it enables users to focus on what matters most—accurate Raman analysis and meaningful results. With intuitive software, robust hardware, and advanced imaging capabilities, the SENTERRA II simplifies Raman spectroscopy for applications like failure analysis, quality assurance, material identification, and scientific research. We are your trusted SENTERRA II Raman Microscope Distributor and Service Provider in India.</p>

        <h2 class="text-2xl font-[MaxOT] text-[#E63946]">Simplifying Raman Microscopy with Intelligent Automation</h2>

        <p>The SENTERRA II stands out for its fully automated operation, which significantly reduces user intervention while enhancing reproducibility and throughput. From laser switching and focus adjustment to spectral acquisition and mapping, the system takes care of complex tasks, enabling faster and more efficient analysis across multiple samples.</p>`,

        content: `
        <div class="space-y-3 px-3 ">
        <h2 class="text-2xl font-[MaxOT] text-[#E63946]">
            Reproducibility, Precision, and User Safety – Core Design Principles
        </h2>
        <p>
            SENTERRA II is built around three key pillars: reproducible results, high spectral precision, and safe, user-friendly operation. These principles make it an excellent platform for academic labs, industrial QA/QC, and routine analytical workflows.
        </p>
        <ul class="list-disc list-inside space-y-1">
            <li>
            <strong>Full automation with self-diagnostics:</strong> laser, grating, and filter settings are switched automatically, while integrated OQ/PQ routines and self-tests help maintain long-term stability.
            </li>
            <li>
            <strong>SureCal™ continuous calibration:</strong> Bruker’s patented technology recalibrates the spectrometer in real time, keeping wavenumber precision stable even during long sessions or component changes.
            </li>
            <li>
            <strong>Class 1 laser safety housing:</strong> the enclosed, interlocked design protects students and non-expert users from accidental laser exposure without compromising performance.
            </li>
        </ul>

        <h2 class="text-2xl font-[MaxOT] text-[#E63946]">
            SureCal™ – Always Calibrated, Always Ready
        </h2>
        <p>
            Temperature drift, vibration, and mechanical adjustments can slowly degrade spectral accuracy in many Raman systems. SENTERRA II overcomes this with SureCal™, which keeps the instrument calibrated continuously so it is always ready for precise measurements—whether you are running occasional samples or high-throughput batches.
        </p>
        <ul class="list-disc list-inside space-y-1">
            <li>No manual recalibration steps are required.</li>
            <li>Sub-wavenumber precision is maintained during routine and long-duration experiments.</li>
            <li>Ideal for material ID, spectral mapping, and advanced chemometric methods such as PCA.</li>
            <li>Delivers consistent spectral quality across changing conditions and high sample loads.</li>
        </ul>

        <h2 class="text-2xl font-[MaxOT] text-[#E63946]">
            Life Science-Ready: Inverted Microscope Configuration
        </h2>
        <p>
            For biomedical and life-science applications, the SENTERRA II can be supplied in an inverted configuration without sacrificing any Raman performance. This setup offers open access to the sample stage, making it easier to work with delicate and live specimens while retaining full confocal capability.
        </p>
        <ul class="list-disc list-inside space-y-1">
            <li>Live cell and tissue characterization on accessible sample stages.</li>
            <li>In&nbsp;vitro pharmaceutical and biomedical studies requiring gentle handling.</li>
            <li>In situ Raman measurements where flexible sample manipulation is critical.</li>
        </ul>

        <p>
            At <strong>Inkarp Instruments</strong>, we provide end-to-end support for SENTERRA II users in India—from system selection and demonstrations to installation, user training, and long-term maintenance. Whether your focus is research, pharma, materials science, or industrial QA/QC, our team ensures that your SENTERRA II Raman Microscope runs at peak performance with local, responsive service.
        </p>
        </div>
        `,


        features: [
            { overview: "" },
            {
                name: "Confocal design",
                description: "for high spatial resolution and depth profiling"
            },
            { name: "Fully automated laser, filter, and grating switching", description: "" },
            { name: "Motorized XYZ stage", description: "for high-speed Raman imaging" },
            { name: "Advanced spectral performance", description: "with minimal user adjustment" },
            { name: "Compatible with multiple excitation wavelengths", description: "" },
            { name: "FRobust software with intuitive workflows", description: " for new and expert users alike" }

        ],

        advantages: [
            { overview: "" },
            {
                name: "Pre-aligned, factory-calibrated system ensures plug-and-play usability",

            },
            {
                name: "Full automation eliminates tedious setup and minimizes operator error",
                description: ""
            },
            {
                name: "Compact footprint and robust construction make it suitable for both lab and manufacturing environments",

            },
            {
                name: "Automation & Usability",
                description: "Fully automated hardware for effortless operation; One-click switching between 4 built-in excitation lasers; User-defined workflow automation in minutes; Smooth, intuitive user interface"
            },
            {
                name: "Performance & Technology",
                description: "Research-grade spectral performance;  SureCal™ automatic calibration technology;  Fast 3D Raman imaging with motorized XYZ stage; Superb wavenumber precision and high spatial resolution"
            },
            {
                name: "Data Analysis & Integration",
                description: "Advanced spectral analysis and compound identification tools; Compatible with FT-Raman for reduced fluorescence interference; Seamless integration with Bruker FTIR instrumentation"
            },
            {
                name: "Maintenance & Compliance",
                description: "Self-diagnosis with automated OQ/PQ;  Virtually maintenance-free design;  Fully compliant with GMP & 21 CFR Part 11"
            },

        ],

        applications: [
            { overview: "" },
            {
                name: "Failure Analysis",
                description: "Detect microscopic defects or contaminations"
            },
            {
                name: "Quality Control",
                description: "Rapid verification of material composition in production"
            },
            {
                name: "Pharmaceuticals",
                description: "Polymorph detection, content uniformity, coating uniformity, and contaminant detection"
            },
            {
                name: "Semiconductors and Electronics",
                description: "Layer thickness, stress, and crystallinity analysis"
            },
            {
                name: "Scientific Research",
                description: "Academic material studies and molecular characterization"
            },
            {
                name: "Material Science",
                description: "Crystallinity and lattice stress analysis"
            },
            {
                name: "Polymers & Plastics",
                description: "Additives analysis and structural integrity evaluation"
            },
            {
                name: "Environmental",
                description: "Microplastic detection and pollutant analysis"
            },
            {
                name: "Forensics",
                description: "Drug identification and trace material analysis"
            }
        ]


    },

    "matrix-f-ii-ft-nir-process-spectrometer": {
        id: "matrix-f-ii-ft-nir-process-spectrometer",
        name: "MATRIX-F II FT-NIR Process Spectrometer",
        image: MatrixFiiBannerBruker, // Replace with actual image import
        logo: Bruker,
        bannerImg: Banner3, // Replace with actual banner image import
        altText: "Bruker",
        videoId: "",

        meta: {
            title: "MATRIX-F II FT-NIR Process Spectrometer | Bruker | Inkarp Instruments India",
            description:
                "Discover the MATRIX-F II FT-NIR Process Spectrometer by Bruker – an advanced real-time, in-line monitoring solution for production environments. Distributed by Inkarp Instruments, India.",
            keywords: [
                "MATRIX-F II FT-NIR Spectrometer",
                "FT-NIR Process Monitoring India",
                "Bruker MATRIX-F II India",
                "In-line NIR Spectroscopy",
                "Real-time Process Analysis India",
                "Industrial NIR Analyzer",
                "Contactless NIR Measurement",
                "Bruker FT-NIR India",
                "Process Spectrometer Distributor",
                "Inkarp Instruments FT-NIR"
            ],
            altText: "MATRIX-F II FT-NIR Process Spectrometer",
            internalLinks: ["FT-NIR technology", "In-line process monitoring", "Real-time spectroscopy"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `
            <div  class="">

            <p class="text-gray-800 mb-4">
                The MATRIX-F II FT-NIR Process Spectrometer from Bruker is a powerful solution for real-time, in-line process monitoring and control. Built to meet the demands of modern production environments, this spectrometer offers laboratory-grade precision in rugged industrial conditions. Its fiber-optic technology enables direct and contactless measurements inside reactors, pipelines, or on conveyor systems—ensuring accurate, non-destructive analysis for a wide range of process parameters. We are your trusted MATRIX-F II FT-NIR Process Spectrometer Distributor and Service Provider in India.
            </p>
            <h2 class="font-[MaxOT] text-2xl text-[#E63946]"></h2>
            <p class="text-gray-800 mb-4">
            The MATRIX-F II enables fast, direct monitoring of chemical reactions, material compositions, and blending processes. It reduces waste, improves product consistency, and minimizes the need for off-spec material reprocessing.
            </p>
            <ul class="text-gray-800 list-disc px-3">
            <li>In-line measurements in pipelines or reactors</li>
            <li>Non-destructive and highly accurate results in seconds</li>
                <li>Ideal for liquids, solids, and slurries</li>
                <li>Remote monitoring over long distances using fiber-optic probes</li>
                <li>Minimal maintenance and easy integration with process systems</li> 
            </ul>
            </div>

            </div>

            `,

        content: `
                    <div class="space-y-3 px-3">
            <h2 class="text-2xl font-[MaxOT] text-[#E63946]">Versatile Configurations for Every Process</h2>

            <h3 class="text-xl font-semibold mt-4">Standard Configuration</h3>
            <ul class="list-disc list-inside space-y-1 text-[17px] font-[Roboto]">
            <li>Classic FT-NIR spectrometer with fiber-optic coupling</li>
            <li>Compatible with various contact probes and process flow cells</li>
            </ul>

            <h3 class="text-xl font-semibold mt-4">Emission Configuration</h3>
            <ul class="list-disc list-inside space-y-1 text-[17px] font-[Roboto]">
            <li>Designed for contactless measurements using NIR fiber-optic heads</li>
            <li>Ideal for moving samples or remote installations</li>
            </ul>

            <h3 class="text-xl font-semibold mt-4">Duplex Configuration</h3>
            <ul class="list-disc list-inside space-y-1 text-[17px] font-[Roboto]">
            <li>Dual-mode setup enabling both contact and non-contact measurements</li>
            </ul>

            <h3 class="text-xl font-semibold mt-4">Exproof Configuration</h3>
            <ul class="list-disc list-inside space-y-1 text-[17px] font-[Roboto]">
            <li>ATEX-rated version for hazardous area installations</li>
            <li>II 2G Ex px II T6 Gb</li>
            <li>II (1) G [Ex op is T4 Ga] II C</li>
            </ul>

            <h2 class="text-2xl font-[MaxOT] text-[#E63946] mt-6">Designed for Reliability and Longevity</h2>
            <ul class="list-disc list-inside space-y-1 text-[17px] font-[Roboto]">
            <li><strong>10-year warranty</strong> on key moving parts and solid-state laser</li>
            <li><strong>Tool-free maintenance</strong> of light source and optical components</li>
            <li><strong>Self-diagnostics and performance tracking</strong> supported via OPUS software</li>
            <li><strong>Easy method transfer</strong> from lab to production using identical technology</li>
            </ul>

            <h2 class="text-2xl font-[MaxOT] text-[#E63946] mt-6">Seamless Integration with Process Control Systems</h2>
            <p class="text-[17px] font-[Roboto]">
            With CMET software and support for major industrial communication protocols, the system integrates effortlessly with existing plant control setups.
            </p>

            <ul class="list-disc list-inside space-y-1 text-[17px] font-[Roboto]">
            <li>OPC</li>
            <li>4–20 mA</li>
            <li>Modbus</li>
            <li>Profibus DP</li>
            </ul>

            <p class="text-[17px] font-[Roboto] mt-4">
            At <strong>Inkarp Instruments</strong>, we provide expert consultation, installation, training, and technical support for this system—ensuring reliable performance and seamless integration for your analytical and process applications.
            </p>
            </div>
            `,


        applications: [
            {},
            {
                name: "Chemical and Petrochemical Industries",
                description: "Reaction monitoring and endpoint detection; Quality control of raw materials, intermediates, and final products"
            },
            {
                name: "Pharmaceuticals",
                description: "Compliance-ready instrument validation (21 CFR Part 11); Continuous manufacturing and PAT implementations"
            },
            {
                name: "Polymers and Plastics",
                description: "Polymerization state control; Additive concentration and blending uniformity"
            },
            {
                name: "Food and Feed",
                description: "Nutrient profiling and ingredient blending; Real-time moisture, fat, and protein analysis"
            }
        ],

        features: [
            {},
            {
                name: "Smart Analyzer",
                description: "Integrated PC and process-ready software for seamless operation"
            },
            {
                name: "IoT-enabled for Industry 4.0",
                description: "Supports condition monitoring and modern industrial integration"
            },
            {
                name: "Long-life NIR source",
                description: ">3 years average lifespan for stable, long-term performance"
            },
            {
                name: "Pre-aligned, user-replaceable optical components",
                description: "Ensures easy maintenance and minimal downtime"
            },
            {
                name: "Built-in performance validation system",
                description: "Automated filter wheel enables reliable validation"
            },
            {
                name: "Compact, rugged design",
                description: "IP65 splash-proof housing for harsh industrial environments"
            },
            {
                name: "Industrial communication compatibility",
                description: "Ethernet, OPC, Modbus, and Profibus DP supported"
            },
            {
                name: "Optional 6-port fiber-optic multiplexer",
                description: "Enables multi-point analysis for increased efficiency"
            }
        ],


        advantages: [
            {
                name: "Real-Time In-Line Analysis",
                description: "Enables continuous monitoring and control of manufacturing processes without sample collection."
            },
            {
                name: "Non-Destructive Measurement",
                description: "Performs contact or contactless analysis without altering or consuming the sample."
            },
            {
                name: "Supports Liquids, Solids & Slurries",
                description: "Versatile applications across various materials and states, from chemicals to food and polymers."
            },
            {
                name: "Reduced Waste & Rework",
                description: "Immediate feedback prevents off-spec production, improving batch yield and consistency."
            },
            {
                name: "Low Cost of Ownership",
                description: "Minimal maintenance, long-lasting components, and modular upgrades reduce total lifecycle costs."
            },
            {
                name: "Built for Harsh Environments",
                description: "Rugged enclosure and compliance with ATEX safety standards allow deployment in hazardous zones."
            },
            {
                name: "Integrated Compliance Tools",
                description: "Built-in validation tools support 21 CFR Part 11 and GMP documentation requirements."
            },
            {
                name: "Remote Monitoring Capability",
                description: "Fiber-optic probes enable analysis in hard-to-reach or hazardous zones from a safe location."
            },
            {
                name: "Trusted Across Industries",
                description: "Used widely in chemicals, petrochemicals, pharmaceuticals, food/feed, and polymers."
            },
            {
                name: "Seamless Plant Integration",
                description: "Compatible with all standard industrial communication systems and SCADA integration via CMET."
            }
        ]
    },

    "matrix-mf-ft-ir-process-reaction-monitoring": {
        id: "matrix-mf-ft-ir-process-reaction-monitoring",
        name: "MATRIX-MF FT-IR Process Reaction Monitoring",
        image: BannerFtirFtNir, // Replace with actual image import
        logo: Bruker,
        bannerImg: Banner3, // Replace with actual banner image import
        altText: "Bruker",
        videoId: "",

        meta: {
            title: "MATRIX-MF FT-IR Process Reaction Monitoring | Bruker | Inkarp Instruments India",
            description:
                "Explore the MATRIX-MF FT-IR Process Reaction Monitoring spectrometer by Bruker – a compact, rugged system for real-time, in-situ analysis of chemical and biological reactions. Distributed by Inkarp Instruments, India.",
            keywords: [
                "MATRIX-MF FT-IR Spectrometer",
                "Bruker MATRIX-MF India",
                "FT-IR Reaction Monitoring",
                "Process Spectroscopy India",
                "Bruker FT-IR Distributor India",
                "Real-time Reaction Analysis",
                "Mid-IR Spectroscopy",
                "ATEX FT-IR Spectrometer",
                "Fiber-optic ATR Probe",
                "Inkarp Instruments FT-IR"
            ],
            altText: "MATRIX-MF FT-IR Spectrometer",
            internalLinks: ["FT-IR spectroscopy", "Real-time process monitoring", "In-situ reaction analysis"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `
        <div>
        The MATRIX-MF by Bruker is a compact, rugged FT-IR spectrometer designed for real-time monitoring and analysis of chemical and biological reactions in both laboratory and industrial environments. It leverages the information-rich mid-infrared (mid-IR) spectral range and can be fiber-optically coupled for in-situ measurements—making it an essential tool for efficient reaction tracking and control.
        </div>

        <div class="mt-6 space-y-4 text-[18px] font-[Roboto] text-gray-700">
          <h2 class="text-2xl font-[MaxOT] text-[#E63946]">Designed for Reliability and Performance</h2>
          <p>
            The MATRIX-MF is part of Bruker's proven MATRIX series and features a sealed optical compartment that protects sensitive components from harsh environments.
            With its RockSolid™ interferometer and DigiTect™ detector electronics, the system delivers high-quality, stable spectra even in demanding industrial conditions.
            Despite its rugged construction, the compact footprint makes it ideal for both laboratory installations and mobile analysis stations.
          </p>

          <ul class="list-disc list-inside space-y-2">
            <li>Compact and rugged industrial-grade design</li>
            <li>Sealed optics optimized for harsh and high-moisture environments</li>
            <li>RockSolid™ alignment-free interferometer</li>
            <li>Quick probe exchange using Bruker Quick Connector (BQC)</li>
            <li>Automated multiplexer support for monitoring up to 6 independent reactions</li>
          </ul>

          <h2 class="text-2xl font-[MaxOT] text-[#E63946] mt-6">Flexible Fiber-Optic Probe Options</h2>
          <p>
            The MATRIX-MF supports a wide range of infrared fiber-optic ATR probes for real-time, in-situ analysis of liquids, slurries, emulsions, and reactive mixtures—without interrupting the process.
          </p>

          <h3 class="text-xl font-[MaxOT] mt-4">Available Probe Options:</h3>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>IN350-T:</strong> Diamond ATR probe (6 mm), ATEX compliant</li>
            <li><strong>IN351:</strong> Diamond Micro ATR probe (3.17 mm)</li>
            <li><strong>IN355:</strong> Diamond ATR probe (6.3 mm)</li>
            <li><strong>IN356-EX:</strong> Diamond ATR probe (12 mm), ATEX compliant</li>
            <li><strong>Additional ATR Crystals:</strong> Including silicon for specialized chemical conditions</li>
          </ul>

          <h2 class="text-2xl font-[MaxOT] text-[#E63946] mt-6">Easy Industrial Process Integration</h2>
          <p>
            The MATRIX-MF is engineered for seamless integration into modern industrial control systems. 
            Its compact rack-mount design and wide protocol compatibility make it ideal for both controlled lab setups 
            and harsh industrial environments.
          </p>

          <ul class="list-disc list-inside space-y-2">
            <li>4–20 mA</li>
            <li>OPC</li>
            <li>Modbus</li>
            <li>Profibus DP</li>
          </ul>

          <h2 class="text-2xl font-[MaxOT] text-[#E63946] mt-6">Maintenance, Validation & Compliance</h2>
          <p>
            Designed for low maintenance and long-term operational reliability, the MATRIX-MF features pre-aligned,
            user-exchangeable components to minimize downtime. For pharmaceutical and regulated industries,
            the OPUS Validation Program (OVP) ensures the spectrometer remains compliant with international standards.
          </p>
          <p>
            An automated filter wheel and standardized testing routines further enhance measurement accuracy and system qualification.
          </p>

          <h2 class="text-2xl font-[MaxOT] text-[#E63946] mt-6">MATRIX-MF Ex-Proof Option</h2>
          <p>
            For hazardous industrial environments, the MATRIX-MF is available in an ATEX-certified ex-proof version,
            ideal for explosive atmospheres where safety and reliability are paramount.
          </p>

          <ul class="list-disc list-inside space-y-2">
            <li>II 2G Ex px II T4 (T6)</li>
            <li>II (1) G [Ex op is T6] IIC</li>
          </ul>

          <p class="mt-6">
            At <strong>Inkarp Instruments</strong>, we provide expert consultation, installation support, 
            application training, and long-term service for the MATRIX-MF. 
            As your authorized MATRIX-MF FT-IR Process Spectrometer Distributor and Service Provider in India, 
            we ensure reliable performance and tailored solutions for your industrial process needs.
          </p>
        </div>
        `,

        applications: [
            {},
            { name: "Real-time reaction monitoring in chemical synthesis" },
            { name: "Bioprocess monitoring and fermentation control" },
            { name: "Polymerization control in plastic manufacturing" },
            { name: "API tracking in pharmaceutical production" },
            { name: "Monitoring of blending processes and material uniformity" },
            { name: "In-situ analysis in hazardous or remote areas" }
        ]

    },

    "beam-process-ft-nir-spectrometer": {
        id: "beam-process-ft-nir-spectrometer",
        name: "BEAM – Process FT-NIR Spectrometer",
        image: BannerFtNir, // Replace with actual image import
        logo: Bruker,
        bannerImg: Banner3, // Replace with actual banner image import
        altText: "Bruker",
        videoId: "",

        meta: {
            title: "BEAM – Process FT-NIR Spectrometer | Bruker | Inkarp Instruments India",
            description:
                "Discover the BEAM Process FT-NIR Spectrometer by Bruker – a compact, single-point spectrometer for real-time solid and semi-solid material analysis. Distributed by Inkarp Instruments, India.",
            keywords: [
                "BEAM FT-NIR Spectrometer",
                "Process NIR Spectrometer India",
                "Bruker BEAM Distributor India",
                "Single-Point NIR Monitoring",
                "Solid Material NIR Analysis",
                "Real-Time Process Spectroscopy",
                "FT-NIR Conveyor Belt Monitoring",
                "NIR in Food and Feed Industry",
                "Pharma In-line NIR Monitoring",
                "Inkarp Instruments Bruker India"
            ],
            altText: "BEAM FT-NIR Spectrometer",
            internalLinks: ["FT-NIR Technology", "Real-Time Process Monitoring", "Solid Material Spectroscopy"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `
<div> 

<p>The BEAM is Bruker’s first dedicated single-point FT-NIR spectrometer designed to revolutionize real-time in-process analysis. With the full spectral power of FT-NIR technology, BEAM enables precision monitoring of solid and semi-solid materials directly on pipelines, hoppers, and conveyor belts. It enhances process control, minimizes variability, and improves product consistency across multiple production stages—ultimately driving operational efficiency and cost savings. We are your trusted BEAM - Process FT-NIR Spectrometer Distributor and Service Provider in India.</p>

<h2 class="text-2xl font-[MaxOT] text-[#E63946] py-3">Single-Point FT-NIR Power — On the Production Line</h2>

<ul class="list-disc list-inside space-y-2">
  <li>Real-time analysis at over 250 scans/min</li>
  <li>Improved product quality and consistency</li>
  <li>Lower rework and waste rates</li>
  <li>Faster ROI and minimized energy consumption</li>
</ul>

<p>From <strong>incoming raw material inspection</strong> to <strong>in-line monitoring</strong> and <strong>final product verification</strong>, the BEAM integrates seamlessly at any stage of the production chain.</p>

<h2 class="text-2xl font-[MaxOT] text-[#E63946] mt-6 py-3">Advanced Technology Highlights</h2>

<h3 class="text-xl font-semibold mt-4">Full FT-NIR Spectral Range</h3>
<p>Covers the complete near-infrared spectrum, enabling a broader range of applications compared to conventional single-point analyzers.</p>

<h3 class="text-xl font-semibold mt-4">High Resolution & Accuracy</h3>
<p>FT-NIR resolution ensures precise, repeatable results even in complex production environments.</p>

<h3 class="text-xl font-semibold mt-4">RockSolid™ Stability</h3>
<p>Bruker’s proven <strong>RockSolid™ interferometer</strong> with cube corner mirrors guarantees durability, vibration resistance, and long-term spectral stability.</p>

<h3 class="text-xl font-semibold mt-4">Dual Source Mode</h3>
<p>Automatically switches to a backup light source to maintain uptime during extended operations.</p>

<p>Automatically switches to a backup light source to maintain uptime during extended operations.</p>
<div class="space-y-3">

<h2 class="text-2xl font-[MaxOT] text-[#E63946] py-3">Mounting & Integration Options</h2>

<p><strong>Tri-Clamp Flanges:</strong> Ideal for hygienic installations in food, beverage, and pharmaceutical industries.</p>
<p><strong>Mounting Brackets:</strong> Supports flexible alignment on pipelines, hoppers, conveyors, and process vessels.</p>
<p><strong>Laboratory Stand:</strong> Simplifies method development and validation before full industrial deployment.</p>
</div>
<p>At Inkarp Instruments we offer complete support for the BEAM FT-NIR solution—from product selection to installation, training, and after-sales service. Whether you’re operating in food, feed, pharma, or polymers, rely on us as your expert BEAM - Process FT-NIR Spectrometer Distributor and Service Provider in India.</p>
</div>
`,

        advnatages: [
            {},
            { name: "Real-time single-point Monitoring for solid and semi-solid samples" },
            { name: "Seamless process integration across production lines" },
            { name: "Rugged construction for 24/7 industrial use" },
            { name: "Full compatibility with existing Bruker FT-NIR systems and OPUS software" },
            { name: "RScalable installation with rapid method transfer from lab to plant" },
        ],
        applications: [
            {},
            {
                name: "Food Industry",
                description:
                    "Monitor moisture, protein, and fat content during spray drying, cheese production, or snack manufacturing to ensure consistent quality and yield."
            },
            {
                name: "Feed Manufacturing",
                description:
                    "Analyze critical parameters like moisture, fiber (ADF, NDF), oil, ash, and amino acids in raw materials and finished feed—helping optimize nutrition and reduce ingredient costs."
            },
            {
                name: "Polymer Production",
                description:
                    "Use real-time FT-NIR analysis to track viscosity, cross-linking degree, monomer concentration, and more during polymerization."
            },
            {
                name: "Pharmaceuticals",
                description:
                    "Support lean manufacturing with enhanced monitoring of blending, granulation, and API drying processes, improving compliance and minimizing material waste."
            }
        ]

    },

}