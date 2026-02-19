import React, { useState } from "react";
// Logos & Images
import Mettler from '/src/assets/PrincipalLogos/RowTwo/Metller.png';
import C10sx from "/images/products/Mettler/c10sx.jpg";
import Densito from "/images/products/Mettler/densito.jpg";
import DensityMeterExcellenceD4 from "/images/products/Mettler/density-meter-excellence-d4.jpg";
import EasyKfv from "/images/products/Mettler/easy-kfv.jpg";
import EasyPh from "/images/products/Mettler/easy-ph.jpg";
import EasyPro from "/images/products/Mettler/easy-pro.jpg";
import ExcellenceR4 from "/images/products/Mettler/Rrefractometer-excellence-r4.jpg";
import HandheldRefractometerMybrix from "/images/products/Mettler/handheld-refractometer-mybrix.jpg";


import MeltingPointSystemMp80 from "/images/products/Mettler/melting-point-System-mp80.jpg";
import MeltingPointSystemMp30 from "/images/products/Mettler/melting-point-System-mp30.jpg";

// import Rrefract from "/images/products/Mettler/Rrefract.jpg";
import S400bio from "/images/products/Mettler/s400bio.jpg";
import S470StdKit from "/images/products/Mettler/s470-std-kit.jpg";
import S700StdKit from "/images/products/Mettler/s700-std-kit.jpg";
import Sd20Kit from "/images/products/Mettler/sd20-kit.jpg";
import Sd23 from "/images/products/Mettler/sd23.jpg";
import Sd30Kit from "/images/products/Mettler/sd30-kit.jpg";
import Sd50Kit from "/images/products/Mettler/sd50-kit.jpg";

import TitratorExcellenceT5 from "/images/products/Mettler/titrator-excellence-t5.jpg";
import V20s from "/images/products/Mettler/v20s.jpg";

import Fp20biokit from "/images/products/Mettler/FP20-bio-kit.jpg";
import Fp30stdkit from "/images/products/Mettler/FP30-std-kit.jpg";

import EasyUV from "/images/products/Mettler/easy-uv.jpg";

import EvaV1 from "/images/products/Mettler/eva-v1.jpg";
import EvaC1 from "/images/products/Mettler/eva-c1.jpg";

import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";
import Banner3 from "/images/products/Banner/Banner3.jpg";

export const AnalyticalInstruments = {
    "ph-meter-sevendirect-sd20-kit": {
        id: "ph-meter-sevendirect-sd20-kit",
        name: "pH Meter SevenDirect SD20 Kit",
        image: Sd20Kit, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner3,
        altText: "MettlerToledo",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "pH meter SevenDirect SD20 Kit Analytical Instruments Distributor & Service Provider In India - Mettler Toledo - Inkarp Instruments Pvt Ltd",
            description: "Explore the pH Meter SevenDirect SD20 Kit for accurate measurements. Ideal for laboratories and research. Discover quality instruments at Inkarp, backed by extensive distribution and service networks across India.",
            keywords: [
                "pH meter SevenDirect SD20 Kit, pH meter SevenDirect SD20 Kit Services, Analytical Instruments, pH meter SevenDirect SD20 Kit Mettler Toledo, Mettler Toledo"
            ],
            altText: "pH Meter SevenDirect SD20 Kit",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {

                description: "With the SevenDirect SD20 Kit, Mettler Toledo sets the standard for pH measurement excellence, combining precision, durability, and ease of use. Inkarp Instruments, Mettler Toledo's trusted distributor in India, helps customers enhance their research, quality control, and process monitoring applications with expert support and seamless service."
            },
            {
                heading: "Straight to the Point",
                description: "SD20 pH meter with all-rounder InLab Expert-Pro ISM pH/temperature sensor featuring automatic sensor recognition. The kit includes an efficient electrode arm and pH buffer sachets for initial calibration."
            },
            {
                heading: "Mastered in No Time",
                description: "Large color touchscreen provides direct measurement and easy data entry. Instructions guide users through the sensor calibration process."
            },
            {
                heading: "Tracks Your Records",
                description: "The instrument stores data like timestamp, sample and sensor ID with every measurement and prints or exports records automatically."
            },
            {
                heading: "Tough Enough",
                description: "Closed connector compartment and replaceable cover keep the instrument safe from dust and spills, even with sensors attached (IP54 in-use)."
            }
        ],
        specs: {
            "Parameter": "pH, ORP",
            "Channel": "Single-channel",
            "Version kit": "Ready-to-measure kit",
            "Sensor": "InLab® Expert Pro-ISM",
            "pH resolution": "0.1, 0.01, 0.001",
            "pH accuracy (±)": "0.002",
            "mV resolution": "1, 0.1",
            "mV accuracy (±)": "0.1",
            "mV measuring range": "-2000..2000 mV",
            "Temperature Range": "-30 °C – 130 °C",
            "Temperature resolution": "0.1 °C",
            "Temperature accuracy (±)": "±0.1 °C between 0 °C and 100 °C",
            "Ease of Use": "Touch screen",
            "Calibration Support": "Guided Verification, Simple Methods, Multilingual Menu",
            "Security and compliance": "GLP, User management",
            "Memory size": "2000 standard measurements",
            "Data Transfer": "PC, Printer, USB stick",
            "Flexibility and modularity": "Stirrer, Barcode reader",
            "Protection Rating": "Watertight and dustproof (IP54)",
            "Sensor Included": "Generalist Sensor",
            "Display Type": "7\" Color TFT",
            "Meter Type": "Benchtop Single-Channel",
            "Dimensions": "195x205x65 mm",
            "Weight": "850 g",
            "Connectors": "BNC, RCA / Cinch, USB A, USB B, Mini-DIN for stirrer",
            "Compatible with Intelligent Sensor Management (ISM)": "Yes",
            "Portable Meter": "No",
            "Product Line": "SevenDirect"
        }
    },
    "cond-meter-sevendirect-sd30-kit": {
        id: "cond-meter-sevendirect-sd30-kit",
        name: "Cond Meter SevenDirect SD30 Kit",
        image: Sd30Kit, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner3,
        altText: "MettlerToledo",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "Cond meter Seven Direct SD30 Kit Analytical Instruments Distributor & Service Provider In India - Mettler Toledo - Inkarp Instruments Pvt Ltd",
            description: "Discover the Cond meter Seven Direct SD30 Kit Analytical Instruments from Mettler Toledo. Enhance your analytical precision and reliability today, backed by extensive distribution and service networks across India.",
            keywords: [
                "Cond meter Seven Direct SD30 Kit, Cond meter Seven Direct SD30 Kit Services, Analytical Instruments, Mettler Toledo"
            ],
            altText: "Cond Meter SevenDirect SD30 Kit",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {

                description: "Mettler Toledo's SevenDirect SD30 Kit, distributed by Inkarp Instruments in India, embodies precision conductivity measurement. This conductivity meter kit is a testament to Mettler Toledo's commitment to excellence, providing trusted results and confident decision-making in critical applications across various industries."
            },
            {
                heading: "Straight to the Point",
                description: "SD30 conductivity meter with InLab 731-ISM conductivity/temperature sensor for measurements of medium and high conductivities. The kit includes an efficient electrode arm and conductivity standards for initial calibration."
            },
            {
                heading: "Mastered in No Time",
                description: "Large color touchscreen provides direct measurement and easy data entry. Instructions guide users through the sensor calibration process."
            },
            {
                heading: "Tracks Your Records",
                description: "The instrument stores data like timestamp, sample and sensor ID with every measurement and prints or exports records automatically."
            },
            {
                heading: "Tough Enough",
                description: "Closed connector compartment and replaceable cover keep the instrument safe from dust and spills, even with sensors attached (IP54 in-use)."
            }
        ],
        specs: {
            "Parameter": "Conductivity",
            "Channel": "Single-channel",
            "Version kit": "Ready-to-measure kit",
            "Sensor": "InLab 731-ISM",
            "Conductivity measuring range": "0.001 μS/cm – 2000 mS/cm",
            "Conductivity resolution": "0.001 – 2",
            "Conductivity accuracy (±)": "0.5 %",
            "Temperature Range": "-30 °C – 130 °C",
            "Temperature resolution": "0.1 °C",
            "Temperature accuracy (±)": "±0.1 °C between 0 °C and 100 °C",
            "Ease of Use": "Touch screen",
            "Calibration Support": "Guided Verification, Simple Methods, Multilingual Menu",
            "Security and compliance": "GLP, User management",
            "Memory size": "2000 standard measurements",
            "Data Transfer": "PC, Printer, USB stick",
            "Flexibility and modularity": "Stirrer, Barcode reader",
            "Protection Rating": "Watertight and dustproof (IP54)",
            "Sensor Included": "Generalist Sensor",
            "Display Type": "7\" Color TFT",
            "Meter Type": "Benchtop Single-Channel",
            "Dimensions": "195x205x65 mm",
            "Weight": "850 g",
            "Connectors": "Mini-DIN (Conductivity), USB A (x2), USB B, Mini-DIN for stirrer",
            "Compatible with Intelligent Sensor Management (ISM)": "Yes",
            "Portable Meter": "No",
            "Product Line": "SevenDirect"
        }
    },

    "ph-cond-meter-sevendirect-sd23-kit": {
        id: "ph-cond-meter-sevendirect-sd23-kit",
        name: "pH/Cond Meter SevenDirect SD23 Kit",
        image: Sd23, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner3,
        altText: "MettlerToledo",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "pH/Cond meter SevenDirect SD23 Kit Analytical Instruments Distributor & Service Provider In India - Mettler Toledo - Inkarp Instruments Pvt Ltd",
            description: "Explore the pH/Cond Meter SevenDirect SD23 Kit Analytical Instruments for precise measurements. Perfect for labs and quality control, backed by extensive distribution and service networks across India.",
            keywords: [
                "pH/Cond meter SevenDirect SD23 Kit Analytical, Mettler Toledo, Analytical Kit, Service"
            ],
            altText: "pH/Cond Meter SevenDirect SD23 Kit",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {

                description: "SevenDirect SD23 Kit, distributed by Inkarp Instruments in India, showcases Mettler Toledo’s innovation in multi-parameter instrumentation. This pH and conductivity meter offers precision, flexibility, and ease of use for laboratories and quality control teams. With Inkarp's trusted service and support, users gain reliable and consistent performance."
            },
            {
                heading: "Straight to the Point",
                description: "SD23 pH/conductivity meter with InLab Expert-Pro ISM pH/temperature sensor and InLab 731 ISM conductivity/temperature sensor with automatic sensor recognition. Includes electrode arm and standards for calibration."
            },
            {
                heading: "Mastered in No Time",
                description: "The large color touchscreen enables direct measurement and user-friendly data entry. Step-by-step calibration guidance enhances accuracy and speed."
            },
            {
                heading: "Tracks Your Records",
                description: "Every measurement is recorded with timestamp, sample, and sensor ID, and can be exported or printed automatically for easy documentation."
            },
            {
                heading: "Tough Enough",
                description: "Built with a closed connector compartment and replaceable cover, the SD23 remains dustproof and splash-proof even during use (IP54 protection)."
            }
        ],
        specs: {
            "Parameter": "pH, Conductivity, ORP",
            "Channel": "Dual-channel",
            "Version kit": "Ready-to-measure kit",
            "Sensor": "InLab® Expert Pro-ISM, InLab® 731-ISM",
            "pH resolution": "0.1, 0.01, 0.001",
            "pH accuracy (±)": "0.002",
            "Conductivity measuring range": "0.001 μS/cm – 2000 mS/cm",
            "Conductivity resolution": "0.001 – 2",
            "Conductivity accuracy (±)": "0.5 %",
            "mV resolution": "1, 0.1",
            "mV accuracy (±)": "0.1",
            "mV measuring range": "-2000..2000 mV",
            "Temperature Range": "-30 °C – 130 °C",
            "Temperature resolution": "0.1 °C",
            "Temperature accuracy (±)": "±0.1 °C between 0 °C and 100 °C",
            "Ease of Use": "Touch screen",
            "Calibration Support": "Guided Verification, Simple Methods, Multilingual Menu",
            "Security and compliance": "GLP, User management",
            "Memory size": "2000 standard measurements",
            "Data Transfer": "PC, Printer, USB stick",
            "Flexibility and modularity": "Stirrer, Barcode reader",
            "Protection Rating": "Watertight and dustproof (IP54)",
            "Sensor Included": "Generalist Sensor",
            "Display Type": "7\" Color TFT",
            "Meter Type": "Benchtop Dual-Channel",
            "Dimensions": "195x205x65 mm",
            "Weight": "850 g",
            "Connectors": "BNC, RCA / Cinch, Mini-DIN (conductivity), USB A (x2), USB B, Mini-DIN (for stirrer)",
            "Compatible with Intelligent Sensor Management (ISM)": "Yes",
            "Portable Meter": "No",
            "Product Line": "SevenDirect"
        }
    },

    "ph-ion-meter-sevendirect-sd50-kit": {
        id: "ph-ion-meter-sevendirect-sd50-kit",
        name: "pH/Ion Meter SevenDirect SD50 Kit",
        image: Sd50Kit, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner3,
        altText: "MettlerToledo",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "pH/Ion meter SevenDirect SD50 Kit Analytical Instruments Distributor & Service Provider In India - Mettler Toledo - Inkarp Instruments Pvt Ltd",
            description: "Discover the pH/Ion Meter SevenDirect SD50 Kit Analytical Instruments for precise measurements. Optimal choice for professionals by Inkarp Instruments Pvt Ltd, backed by extensive distribution and service networks across India.",
            keywords: [
                "pH/Ion meter SevenDirect SD50, pH/Ion meter SevenDirect SD50 Kit Analytical Service , Mettler Toledo, Analytical Kit"
            ],
            altText: "pH/Ion Meter SevenDirect SD50 Kit",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {

                description: "SevenDirect SD50 Kit, distributed by Inkarp Instruments in India, represents the pinnacle of pH and ion measurement technology. With advanced features and robust design, this instrument ensures exceptional accuracy, making it a trusted choice for researchers and quality assurance professionals across industries."
            },
            {
                heading: "Straight to the Point",
                description: "SD50 pH/ion meter with all-rounder InLab Expert-Pro ISM pH/temperature sensor featuring automatic sensor recognition. The kit includes an efficient electrode arm and pH buffer sachets for initial calibration."
            },
            {
                heading: "Mastered in No Time",
                description: "Large color touchscreen provides direct measurement and easy data entry. Instructions guide users through the sensor calibration process."
            },
            {
                heading: "Tracks Your Records",
                description: "The instrument stores data like timestamp, sample and sensor ID with every measurement and prints or exports records automatically."
            },
            {
                heading: "Tough Enough",
                description: "Closed connector compartment and replaceable cover keep the instrument safe from dust and spills, even with sensors attached (IP54 in-use)."
            }
        ],
        specs: {
            "Parameter": "pH, Ion, ORP",
            "Channel": "Single-channel",
            "Version kit": "Ready-to-measure kit",
            "Sensor": "InLab® Expert Pro-ISM",
            "pH resolution": "0.1, 0.01, 0.001",
            "pH accuracy (±)": "0.002",
            "Ion concentration measuring range": "0 – 999 999 mg/L (ppm), -2.000 – 20.000 pX",
            "Ion concentration resolution": "3 or 4 digits (auto-range)",
            "Ion concentration accuracy (±)": "0.5 %",
            "mV resolution": "1, 0.1",
            "mV accuracy (±)": "0.1",
            "mV measuring range": "-2000..2000 mV",
            "Temperature Range": "-30 °C – 130 °C",
            "Temperature resolution": "0.1 °C",
            "Temperature accuracy (±)": "±0.1 °C between 0 °C and 100 °C",
            "Ease of Use": "Touch screen",
            "Calibration Support": "Guided Verification, Simple Methods, Multilingual Menu",
            "Security and compliance": "Password protection, GLP",
            "Memory size": "2000 standard measurements",
            "Data Transfer": "PC, Printer, USB stick",
            "Flexibility and modularity": "Stirrer, Barcode reader",
            "Protection Rating": "IP54",
            "Sensor Included": "Generalist Sensor",
            "Display Type": "7\" Color TFT",
            "Meter Type": "Benchtop Single-Channel",
            "Dimensions": "195x205x65 mm",
            "Weight": "850 g",
            "Connectors": "BNC, RCA / Cinch, 2 mm Reference, USB A (x2), USB B, Mini DIN (for stirrer)",
            "Compatible with Intelligent Sensor Management (ISM)": "Yes",
            "Portable Meter": "No",
            "Product Line": "SevenDirect"
        }
    },

    "seven-excellence-ph-meter-s400-bio-kit": {
        id: "seven-excellence-ph-meter-s400-bio-kit",
        name: "SevenExcellence pH meter S400-Bio-Kit",
        image: S400bio, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner3,
        altText: "MettlerToledo",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "SevenExcellence pH meter S400-Bio-Kit Analytical Instruments Distributor & Service Provider In India - Mettler Toledo - Inkarp Instruments Pvt Ltd",
            description: "Discover the SevenExcellence pH Meter S400-Bio-Kit Analytical Instruments for precise measurements. Ideal for labs and research, order yours today, backed by extensive distribution and service networks across India.",
            keywords: [
                "SevenExcellence pH meter S400-Bio-Kit Analytical, Mettler Toledo, Analytical Kit, SevenExcellence pH meter S400 Service ,Mettler Toledo"
            ],
            altText: "SevenExcellence pH meter S400-Bio-Kit",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {

                description: "SevenExcellence S400-Bio-Kit, distributed by Inkarp Instruments in India, exemplifies Mettler Toledo's commitment to delivering high-performance pH measurement solutions for the life sciences. Trusted by researchers and QC specialists, it ensures precision, accuracy, and regulatory compliance."
            },
            {
                heading: "Unmatched Lab Performance",
                description: "SevenExcellence S400-Bio is a benchtop pH/mV meter kit equipped with InLab Routine Pro-ISM sensor. It is engineered for demanding lab workflows where data integrity and reproducibility matter most."
            },
            {
                heading: "Professional and Flexible",
                description: "Supports pH, ORP, and ISFET measurements with method-based operation and wide calibration and measurement configurations. Easily adaptable to changing application needs."
            },
            {
                heading: "Professional pH Calibration",
                description: "Enhances calibration integrity using guided methods and slope/offset monitoring for maximum accuracy. Ideal for regulated environments with strict SOPs."
            },
            {
                heading: "Efficient Workflow Support",
                description: "Simplifies the complete measurement cycle—from setup to result documentation—with intuitive touch interface and workflow-friendly features."
            }
        ],
        specs: {
            "Parameter": "pH, ORP",
            "Channel": "Single-channel",
            "Sensor": "InLab Routine Pro-ISM",
            "pH measuring range": "-2 – 20",
            "pH resolution": "0.001, 0.01, 0.1",
            "pH accuracy (±)": "0.002",
            "mV measuring range": "-2,000.000 – 2,000.000",
            "mV resolution": "0.1, 1",
            "mV accuracy (±)": "0.1",
            "Temperature Range": "-30 °C – 130 °C",
            "Temperature resolution": "0.1 °C",
            "Temperature accuracy (±)": "0.1 °C",
            "Security and compliance": "Password protection, GLP, 21 CFR part 11 support, User management, Program SOPs into methods",
            "Memory size": "250 analyses (20,000 data points)",
            "Data Transfer": "PC, Printer, USB stick",
            "Flexibility and modularity": "Upgrade for additional parameters, Stirrer, Automation, Barcode reader, LabX software",
            "Sensor Included": "Generalist (chemical resistant glass)",
            "Languages": "English, Italian, French, Russian, Portuguese, Chinese, Korean, German, Spanish, Japanese",
            "Display Type": "Color TFT Touchscreen",
            "Meter Type": "Benchtop Single-Channel",
            "Dimensions": "235 x 188 x 75 mm",
            "Weight": "1510 g",
            "Connectors": "LAN, USB A, USB B, RS232, Mini-DIN, BNC, Cinch/RCA, Mini-LTW",
            "Compatible with Intelligent Sensor Management (ISM)": "Yes",
            "Portable Meter": "No",
            "Product Line": "SevenExcellence"
        }
    },

    "seven-excellence-ph-cond-meter-s700-std-kit": {
        id: "seven-excellence-cond-meter-s700-std-kit",
        name: "SevenExcellence Cond meter S700-Std-Kit",
        image: S700StdKit, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner3,
        altText: "MettlerToledo",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "SevenExcellence Cond meter S700-Std-Kit Analytical Instruments Distributor & Service Provider In India - Mettler Toledo - Inkarp Instruments Pvt Ltd",
            description: "Discover the SevenExcellence Cond meter S700-Std-Kit from Mettler Toledo. Enhance your analytical testing with cutting-edge precision and reliability, backed by extensive distribution and service networks across India.",
            keywords: [
                "SevenExcellence Cond meter S700-Std-Kit Analytical, Mettler Toledo, SevenExcellence Cond meter S700-Std-Kit Analytical Service"
            ],
            altText: "SevenExcellence Cond meter S700-Std-Kit",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description: "Mettler Toledo's SevenExcellence S700-Std-Kit, distributed by Inkarp Instruments in India, is a high-performance conductivity meter designed for exceptional accuracy and reliability. Trusted by researchers and QC labs across industries, it supports a wide range of conductivity applications with compliance-ready features."
            },
            {
                heading: "Unmatched Lab Performance",
                description: "SevenExcellence S700-Kit is a benchtop conductivity meter bundled with the InLab 731-ISM sensor. It enables precise measurements of conductivity, TDS, salinity, and resistivity across broad ranges."
            },
            {
                heading: "Professional and Contemporary",
                description: "This meter delivers accurate and consistent results, supporting conductivity, resistivity, salinity, and total dissolved solids. Designed for use in both routine and advanced laboratory applications."
            },
            {
                heading: "Ready for Immediate Deployment",
                description: "The S700-Std-Kit includes a high-quality sensor and is ready to measure out-of-the-box, streamlining conductivity testing and improving operational efficiency."
            },
            {
                heading: "Efficient Workflow Support",
                description: "From data entry to results, the user-friendly touchscreen interface ensures a smooth and intuitive measurement experience tailored for regulated environments."
            }
        ],
        specs: {
            "Parameter": "Conductivity",
            "Channel": "Single-channel",
            "Sensor": "InLab 731-ISM",
            "Conductivity measuring range": "0.001 μS/cm – 2000 mS/cm",
            "Conductivity resolution": "0.001 – 2",
            "Conductivity accuracy (±)": "0.5 %",
            "Temperature Range": "-30 °C – 130 °C",
            "Temperature resolution": "0.1 °C",
            "Temperature accuracy (±)": "0.1 °C",
            "Security and compliance": "Password protection, GLP, 21 CFR part 11 support, User management, Program SOPs into methods",
            "Memory size": "250 analyses (20,000 data points)",
            "Data Transfer": "PC, Printer, USB stick",
            "Flexibility and modularity": "Upgrade for additional parameters, Stirrer, Automation, Barcode reader, LabX software",
            "Sensor Included": "Generalist Sensor",
            "Dimensions": "235 x 188 x 75 mm",
            "Languages": "English, Italian, French, Russian, Portuguese, Chinese, Korean, German, Spanish, Japanese",
            "Weight": "1510 g",
            "Connectors": "LAN, USB A, USB B, RS232, Mini-DIN, Cinch/RCA, Mini-LTW",
            "Display Type": "Color TFT Touchscreen",
            "Meter Type": "Benchtop Single-Channel",
            "Portable Meter": "No",
            "Compatible with Intelligent Sensor Management (ISM)": "Yes",
            "Product Line": "SevenExcellence"
        }
    },

    "seven-excellence-ph-cond-meter-s470-std-k": {
        id: "seven-excellence-ph-cond-meter-s470-std-k",
        name: "SevenExcellence pH/Cond meter S470-Std-K",
        image: S470StdKit, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner3,
        altText: "MettlerToledo",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "SevenExcellence pH/Cond meter S470-Std-K Analytical Instruments Distributor & Service Provider In India - Mettler Toledo - Inkarp Instruments Pvt Ltd",
            description: "Discover the SevenExcellence pH/Cond meter S470-Std-K for precise measurements. Perfect for labs needing reliable analytical instruments, backed by extensive distribution and service networks across India.",
            keywords: [
                "SevenExcellence pH/Cond meter S470-Std-K Analytica, Mettler Toledo, SevenExcellence pH/Cond meter S470-Std-K Analytica, Analytical Service"
            ],
            altText: "SevenExcellence pH/Cond meter S470-Std-K",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {

                description: "SevenExcellence S470-Std-K, distributed by Inkarp Instruments in India, is a dual-channel high-performance meter that supports both pH and conductivity measurements. With advanced features, intuitive workflows, and exceptional accuracy, it's ideal for research and regulated labs alike."
            },
            {
                heading: "Unmatched Lab Performance",
                description: "SevenExcellence S470-Kit is a benchtop meter bundled with InLab Expert Pro-ISM (for pH) and InLab 731-ISM (for conductivity), offering powerful capabilities for multi-parameter analysis in a single device."
            },
            {
                heading: "Professional and Contemporary",
                description: "Two professional meters in one: pH, ORP, ISFET supplemented with conductivity, resistivity, salinity, total dissolved solids and conductivity ash – all in one seamless instrument."
            },
            {
                heading: "Ready for Immediate Deployment",
                description: "The S470-Std-Kit includes high-quality sensors and is pre-configured for pH and conductivity measurements, making it ideal for immediate implementation into laboratory workflows."
            },
            {
                heading: "Efficient Workflow Support",
                description: "From sample input to result documentation, the S470 offers intuitive navigation, fast data access, and streamlined user experience – ideal for GLP and 21 CFR Part 11 compliant environments."
            }
        ],
        specs: {
            "Parameter": "pH, Conductivity, ORP",
            "Channel": "Dual-channel",
            "Sensor": "InLab 731-ISM, InLab Expert Pro-ISM",
            "pH measuring range": "-2 – 20",
            "pH resolution": "0.001, 0.01, 0.1",
            "pH accuracy (±)": "0.002",
            "Conductivity measuring range": "0.001 μS/cm – 2000 mS/cm",
            "Conductivity resolution": "0.001 – 2",
            "Conductivity accuracy (±)": "0.5 %",
            "mV measuring range": "-2,000.000 – 2,000.000",
            "mV resolution": "0.1, 1",
            "mV accuracy (±)": "0.1",
            "Temperature Range": "-30 °C – 130 °C",
            "Temperature resolution": "0.1 °C",
            "Temperature accuracy (±)": "0.1 °C",
            "Security and compliance": "Password protection, GLP, 21 CFR part 11 support, User management, Program SOPs into methods",
            "Memory size": "250 analyses (20,000 data points)",
            "Data Transfer": "PC, Printer, USB stick",
            "Flexibility and modularity": "Upgrade for additional parameters, Stirrer, Automation, Barcode reader, LabX software",
            "Languages": "English, Italian, French, Russian, Portuguese, Chinese, Korean, German, Spanish, Japanese",
            "Display Type": "Color TFT Touchscreen",
            "Meter Type": "Benchtop Dual-Channel",
            "Dimensions": "235 x 188 x 75 mm",
            "Weight": "1510 g",
            "Connectors": "LAN, USB A, USB B, RS232, Mini-DIN, BNC, Cinch/RCA, Mini-LTW",
            "Compatible with Intelligent Sensor Management (ISM)": "Yes",
            "Portable Meter": "No",
            "Product Line": "SevenExcellence"
        }
    },

    "titrator-easyplus-easy-ph": {
        id: "titrator-easyplus-easy-ph",
        name: "Titrator EasyPlus Easy pH",
        image: EasyPh, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner3,
        altText: "MettlerToledo",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "Titrator EasyPlus Easy pH Analytical Instruments Distributor & Service Provider In India - Mettler Toledo - Inkarp Instruments Pvt Ltd",
            description: "Discover the SevenExcellence pH/Cond meter S470-Std-K for precise measurements. Perfect for labs needing reliable analytical instruments, backed by extensive distribution and service networks across India.",
            keywords: [
                "Titrator EasyPlus Easy pH Analytical, Mettler Toledo, Analytical Service"
            ],
            altText: "Titrator EasyPlus Easy pH",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {

                description: "EasyPlus Titrator and Easy pH meter, available from Inkarp Instruments, offer a powerful and user-friendly solution for titration and pH measurement. With its intuitive interface, automated procedures, and precise results, the EasyPlus Titrator streamlines titration processes, while the Easy pH meter provides accurate and reliable pH measurements. Together, they form a comprehensive solution for quality control, research, and development in various industries, including pharmaceuticals, food and beverage, and environmental monitoring, showcasing Mettler Toledo's expertise in analytical instrumentation."
            },
            {
                heading: "The Acid/Base Titrator",
                description: "Everything you need for automated acid/base titrations. Determine acidity in juices, milk, and wine, p-and m-values in water, and much more.."
            },
            {
                heading: "Simple & Affordable",
                description: "Swiss-engineered with high-quality components, this compact titrator offers excellent value and reliability – a perfect addition to any quality control laboratory."
            },
            {
                heading: "Quick and Easy Titration",
                description: "The iTitrate™ intelligence system requires only minimal input to start your titration, making setup fast and reducing chances of error."
            },
            {
                heading: "Intuitive iTitrate™ User Interface",
                description: "Operate with ease using the app-style UI. Save training time and boost operational efficiency with its simplified, icon-based navigation."
            }
        ],
        specs: {
            "Options": "EasyPump, USB-P25 printer, Temperature sensor, EasyDirect™ Titration PC Software",
            "PC Software": "EasyDirect",
            "Application Type": "Potentiometric",
            "Measurement Type": "Potentiometric",
            "Acid/Base": "Yes",
            "If…Then Conditions": "No",
            "Burette": "EasyPlus burette 20mL (included)",
            "User Interface": "iTitrate",
            "Flexibility and Modularity": "Sample weight transfer, PC software",
            "User Rights and Management": "No",
            "Parallel Titration": "No",
            "Connectivity and Software": "EasyDirect, USB export",
            "Parameter": "Acid/base",
            "Supported Stirrer Motors": "EasyStir GT (included)",
            "Number of Titration Methods": "1",
            "Sensor": "EG11-BNC sensor pH aqueous (included)"
        }
    },

    "titrator-easyplus-easy-pro": {
        id: "titrator-easyplus-easy-pro",
        name: "Titrator EasyPlus Easy Pro",
        image: EasyPro, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner3,
        altText: "MettlerToledo",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "Titrator EasyPlus Easy Pro Analytical Instruments Distributor & Service Provider In India - Mettler Toledo - Inkarp Instruments Pvt Ltd",
            description: "Discover Titrator EasyPlus Easy Pro Analytical Instruments by Mettler Toledo at Inkarp Instruments. Enhance your lab's efficiency and accuracy today, backed by extensive distribution and service networks across India.",
            keywords: [
                " Titrator EasyPlus Easy Pro Analytical, Mettler Toledo, Analytical Service, Mettler Toledo EasyPlus Pro India, Easy Pro Titrator, EasyPlus all-in-one titrator, acid base redox titration, Inkarp Instruments titration system, multiparameter titrator India, lab titration Mettler Toledo, EasyDirect titration software"
            ],
            altText: "Titrator EasyPlus Easy Pro",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {

                description: "EasyPlus Titrator Easy Pro, available from Inkarp Instruments, is a advanced titration system designed for precise and efficient determination of various parameters in diverse industries. With its intuitive interface, automated procedures, and precise results, the EasyPlus Titrator Easy Pro streamlines titration processes, saving time and increasing productivity. Showcasing Mettler Toledo's expertise in analytical instrumentation and reinforcing its position as a global leader in technology."
            },
            {
                heading: "The All-in-One Titrator",
                description: "Combining the three main types of titrations: acid/base, precipitation, and redox, this instrument determines the most common parameters in food, beverage and chemical products."
            },
            {
                heading: "Simple & Affordable",
                description: "Backed by Swiss engineering and high-quality materials, this compact titrator delivers robust and affordable performance, making it an asset in any lab focused on quality assurance and control."
            },
            {
                heading: "Quick and Easy Titration",
                description: "The built-in iTitrate™ intelligence system guides users through setup with minimal input, allowing for seamless operation and time-saving efficiency across multiple titration types."
            },
            {
                heading: "One Titrator for Many Needs",
                description: "Whether your analysis involves acid/base titrations, pH endpoints, or redox/precipitation indicators, the Easy Pro adapts to varied methods with exceptional accuracy."
            }
        ],
        specs: {
            "Options": "EasyPump, USB-P25 printer, Temperature sensor, EasyDirect™ Titration PC Software",
            "PC Software": "EasyDirect",
            "Application Type": "Potentiometric",
            "Measurement Type": "Potentiometric",
            "Precipitation": "Yes",
            "Redox": "Yes",
            "Acid/Base": "Yes",
            "Direct Measurement (Ion Selective)": "Yes",
            "If…Then Conditions": "No",
            "Burette": "EasyPlus burette 20mL (included)",
            "User Interface": "iTitrate",
            "Flexibility and Modularity": "Sample weight transfer, PC software",
            "User Rights and Management": "No",
            "Parallel Titration": "No",
            "Compliance and Data Security": "Password protection",
            "Connectivity and Software": "EasyDirect, USB export",
            "Parameter": "Precipitation, Redox, Acid/base",
            "Supported Stirrer Motors": "EasyStir GT (included)",
            "Number of Titration Methods": "3",
            "Sensor": "EG11-BNC sensor pH aqueous (included)"
        }
    },

    "titrator-easyplus-easy-kfv": {
        id: "titrator-easyplus-easy-kfv",
        name: "Titrator EasyPlus Easy KFV",
        image: EasyKfv, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner3,
        altText: "Titrator EasyPlus Easy KFV",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "Titrator EasyPlus Easy KFV Analytical Instruments Distributor & Service Provider In India - Mettler Toledo - Inkarp Instruments Pvt Ltd",
            description: "Discover the Titrator EasyPlus Easy KFV Analytical Instruments by Mettler Toledo at Inkarp Instruments. Enhance your analytical precision today, backed by extensive distribution and service networks across India.",
            keywords: [
                "Titrator EasyPlus Easy KFV Analytical, Mettler Toledo, Analytical Service,Mettler Toledo Easy KFV India, EasyPlus Karl Fischer Titrator, water content titration India, EasyPlus Easy KFV, KF titrator Inkarp, volumetric KF titration meter, moisture analysis food chemical, compact Karl Fischer titrator"
            ],
            altText: "Titrator EasyPlus Easy KFV",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {

                description: "EasyPlus Easy KFV, available from Inkarp Instruments, is a specialized titration system designed for precise and efficient Karl Fischer titration of water content in various samples. With its intuitive interface, automated procedures, and precise results, the EasyPlus Easy KFV streamlines moisture analysis, saving time and increasing productivity. showcasing Mettler Toledo's expertise in analytical instrumentation and reinforcing its position as a global leader in technology."
            },
            {
                heading: "Water Determination Made Easy",
                description: "Everything needed for routine Karl Fischer volumetric titration is included – from 100 ppm to 100% water determination in a wide variety of sample matrices."
            },
            {
                heading: "Simple & Affordable",
                description: "Backed by Swiss engineering and premium materials, Easy KFV provides dependable, precise results in a compact and cost-effective footprint – ideal for QC and R&D labs."
            },
            {
                heading: "Quick and Easy Titration",
                description: "iTitrate™ technology ensures a smooth and quick titration setup – users only need to input minimal parameters to begin reliable water content measurement."
            },
            {
                heading: "Intuitive iTitrate™ User Interface",
                description: "Featuring a modern, app-style user interface, Easy KFV simplifies operation and shortens training time, improving lab efficiency and throughput."
            }
        ],
        specs: {
            "Options": "USB-P25 printer, EasyDirect™ Titration PC Software",
            "PC Software": "EasyDirect",
            "Application Type": "Karl Fischer (Volumetric)",
            "Measurement Type": "Karl Fischer (Volumetric)",
            "If…Then Conditions": "No",
            "Burette": "EasyPlus burette 10mL (included)",
            "User Interface": "iTitrate",
            "User Rights and Management": "No",
            "Pump": "EasyPump (included)",
            "Parallel Titration": "No",
            "Connectivity and Software": "EasyDirect, USB export",
            "Parameter": "Karl Fischer volumetric",
            "Supported Stirrer Motors": "EasyStir KF (included)",
            "Number of Titration Methods": "1",
            "Sensor": "EM43-BNC sensor redox ipol (included)"
        }
    },

    "titrator-excellence-t5": {
        id: "titrator-excellence-t5",
        name: "Titrator Excellence T5",
        image: TitratorExcellenceT5, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner3,
        altText: "MettlerToledo",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "Titrator Excellence T5 Analytical Instruments Distributor & Service Provider In India - Mettler Toledo - Inkarp Instruments Pvt Ltd",
            description: "Discover Titrator Excellence T5 Analytical Instruments by Mettler Toledo at Inkarp Instruments. Precision, reliability, and advanced technology await you, backed by extensive distribution and service networks across India.",
            keywords: [
                "Titrator Excellence T5 Analytical, Mettler Toledo, Analytical Service,Mettler Toledo Excellence T5, T5 titrator India, T5 Karl Fischer titration, Titrator Excellence distributor Inkarp, LabX compliance titrator, InMotion automation titrator, advanced titration system, T5 potentiometric titrator"
            ],
            altText: "Titrator Excellence T5",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {

                description: "The Mettler Toledo Titrator Excellence T5, available from Inkarp Instruments, represents the pinnacle of titration technology, offering unparalleled precision, accuracy, and reliability. Designed for demanding applications in pharmaceuticals, food and beverage, and environmental monitoring, this advanced titrator features a user-friendly interface, showcasing Mettler Toledo's expertise in analytical instrumentation and reinforcing its position as a global leader in titration solutions."
            },
            {
                heading: "Versatile Titrator for All Applications",
                description: "The T5 supports both potentiometric and Karl Fischer titrations, and is expandable with additional burettes and compatible with InMotion automation systems for high-throughput workflows."
            },
            {
                heading: "One Click User Interface",
                description: "Simplify operations with a customizable touchscreen UI. Operators can run frequent workflows with just one tap, reducing errors and improving speed."
            },
            {
                heading: "Fully Flexible Automation",
                description: "Seamlessly integrates with Mettler Toledo’s InMotion autosamplers. Enables automatic rinsing, titration, and result recording without manual intervention."
            },
            {
                heading: "Solid Compliance",
                description: "LabX software enables complete compliance with 21 CFR Part 11 and EU Annex 11, providing secure data handling, electronic signatures, and audit trails."
            }
        ],
        specs: {
            "Additional Burette Drives (Optional)": "3 max. (1 for titration, 2 for dosing only)",
            "Method Functions per Method": "15 max.",
            "LabX Software": "Express and server (not included)",
            "Optional Extra Sensor Boards": "None",
            "Automation Option(s)": "InMotion, Rondolino",
            "PC Software": "LabX® PC Software",
            "Application Type": "Potentiometric, Karl Fischer (Coulometric), Karl Fischer (Volumetric)",
            "Hot Plug & Play": "Yes",
            "Measurement Type": "Chromatometric, Amperometric indication, Diazotitration, Redox, Complexometry, Conductometric, Thermometric, Iodometric, Direct measurement (ion selective), Multiple standard addition, Potentiometric, Precipitation, Voltametric indication, Single-phase & two-phase (surfactants), Photometric, Cerimetric, Bromatometric, Acid/base, Arsenometric",
            "If…Then Conditions": "No",
            "Shortcuts per user": "24",
            "Karl Fischer titration": "Yes",
            "User Rights and Management": "Fully flexible role definitions",
            "Solvent Manager Option": "Yes",
            "Parallel Titration": "No",
            "Max. number of methods": "150",
            "Samples per Analysis (Max.)": "303",
            "Barcode Reader Connection": "Yes (USB)",
            "Predefined methods": "60",
            "User-Defined Calculations": "Yes",
            "Tasks Running Simultaneously (Max.)": "0",
            "EQP titration": "Yes",
            "Generator Cell": "Diaphragm optional",
            "Task List (Max.)": "10",
            "One Click® User Interface": "Yes",
            "Flexibility and Modularity": "Automation, Diaphragm (KF), KF upgrade options, PC software, One-click user interface, User-defined calculations, Pre-installed methods, SmartSample, Additional burettes, Plug-and-play accessories, Sample weight transfer, SmartChemicals, Solvent manager, User management",
            "End point titration": "Yes",
            "Plug & Play Features": "Burettes and Sensors",
            "Terminal": "Color touch screen with StatusLight",
            "Drying Oven Option": "DO308 (manual)",
            "Upgradeability": "No",
            "Compliance and Data Security": "Password protection, 21 CFR Part 11, EudraLex, Volume 4, Annex 11 (with LabX software), User management (fully configurable)",
            "Printer Connection": "Yes (USB)",
            "Connectivity and Software": "LabX software, Network export, USB export",
            "Languages": "Chinese, English, French, German, Italian, Korean, Polish, Portuguese, Russian, Spanish"
        }
    },

    "titrator-compact-v20s": {
        id: "titrator-compact-v20s",
        name: "Titrator Compact V20S",
        image: V20s, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner3,
        altText: "MettlerToledo",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "Titrator Compact V20S Analytical Instruments Distributor & Service Provider In India - Mettler Toledo - Inkarp Instruments Pvt Ltd",
            description: "Discover Titrator Compact V20S Analytical Instruments at Inkarp Instruments Pvt Ltd. Enhance your lab efficiency with top-notch technology today, backed by extensive distribution and service networks across India.",
            keywords: [
                " Titrator Compact V20S Analytical Instruments, Analytical Instruments, Mettler Toledo, Inkarp",
                "Mettler Toledo V20S India",
                "Compact V20S titrator",
                "V20S Karl Fischer titrator",
                "Mettler Toledo Compact Titration",
                "LabX titrator",
                "Volumetric KF titration India",
                "Inkarp Instruments V20S",
                "Compact KF titrator India"
            ],
            altText: "Titrator Compact V20S",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {

                description: "The V20S extends usability with the same space saving design as the Compact Volumetric KF line. Accurate results from 100 ppm to 100% water. Supports 12 shortcuts per user + 5 analysis methods and LabX full lab data management."
            },
            {
                heading: "Solid Compliance",
                description: "In regulated environments, LabX software provides full support for your compliance needs to 21 CFR Part 11 and EU Annex 11."
            },
            {
                heading: "Robust Design, Accurate Results",
                description: "Special titration cell design minimizes ambient moisture interference for a low background drift value, ensuring accurate and repeatable measurements."
            },
            {
                heading: "One Click User Interface",
                description: "With the intuitive One Click touchscreen interface, you may customize the home screen to run your workflows quickly and easily with a single tap on the screen."
            }
        ],
        specs: {
            "Max. number of methods": "5",
            "Additional Burette Drives (Optional)": "None",
            "LabX Software": "Express and server (not included)",
            "Shortcuts per user": "12",
            "User-Defined Calculations": "No",
            "Application Type": "Karl Fischer (Volumetric)",
            "Measurement Type": "Karl Fischer (Volumetric)",
            "User Rights and Management": "Predefined Expert\" and \"Routine\" roles\"",
            "Solvent Manager Option": "Yes",
            "Parallel Titration": "No",
            "Samples per Analysis (Max.)": "120",
            "Barcode Reader Connection": "Yes (USB)",
            "Task List (Max.)": "0",
            "One Click® User Interface": "Yes",
            "Flexibility and Modularity": "Plug-and-play accessories, Sample weight transfer, SmartChemicals, PC software, Solvent manager, User-defined calculations, Pre-installed methods, User management",
            "Plug & Play Features": "Burettes and Sensors",
            "Drying Oven Option": "DO308 (manual)",
            "Compliance and Data Security": "Password protection, 21 CFR Part 11, EudraLex, Volume 4, Annex 11 (with LabX software), User management (fixed groups)",
            "Printer Connection": "Yes (USB)",
            "Connectivity and Software": "LabX software, Network export, USB export",
            "Measurement Range": "100 ppm – 100 %",
            "Automation Option(s)": "None",
            "Display": "Full-color 5.7 in VGA, touch screen",
            "Languages": "Chinese, English, French, German, Italian, Korean, Polish, Portuguese, Russian, Spanish"
        }
    },

    "titrator-compact-c10sx": {
        id: "titrator-compact-c10sx",
        name: "Titrator Compact C10SX",
        image: C10sx, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner3,
        altText: "MettlerToledo",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "Titrator Compact C10SX Analytical Instruments Distributor & Service Provider In India - Mettler Toledo - Inkarp Instruments Pvt Ltd",
            description: "TDiscover the Titrator Compact C10SX Analytical Instruments from Mettler Toledo for precision and reliability in your lab processes, backed by extensive distribution and service networks across India.",
            keywords: [
                "Titrator Compact C10SX Analytical Instruments, Analytical Instruments, Mettler Toledo, Inkarp",
                "Mettler Toledo C10SX India",
                "Compact C10SX titrator",
                "C10SX coulometric titrator",
                "Mettler Toledo Compact Titration",
                "Coulometric KF titration India",
                "Inkarp Instruments C10SX",
                "Lab titrator Mettler Toledo",
                "Compact KF titrator India"
            ],
            altText: "Titrator Compact C10SX",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description: "Mettler Toledo's Titrator Compact C10SX, distributed and serviced by Inkarp Instruments in India, is a reliable and compact solution for precise pH, redox, and ion measurements. This user-friendly titrator is designed for simplicity and accuracy, making it ideal for routine laboratory applications. With Mettler Toledo's renowned quality and Inkarp Instruments' dedicated support, the C10SX ensures effortless operation, data integrity, and compliance with laboratory regulations, empowering laboratories to achieve accurate results with confidence."
            },
            {
                heading: "The c10sx extends usability",
                description: "The c10sx extends usability with the same space saving design as the Compact Volumetric KF line. Accurate results from 100 ppm to 100% water. Supports 12 shortcuts per user + 5 analysis methods and LabX full lab data management."
            },
            {
                heading: "Robust Design, Accurate Results",
                description: "Special titration cell design minimizes ambient moisture interference for a low background drift value, ensuring accurate and repeatable measurements."
            },
            {
                heading: "One Click User Interface",
                description: "With the intuitive One Click touchscreen interface, customize home screens to run your workflows quickly and easily with a single tap on the screen."
            },
            {
                heading: "Safe Chemical Handling",
                description: "Reduce user contact with chemicals by automatically draining and refilling the titrator cell and preventing waste overflow with dedicated accessories"
            }
        ],
        specs: {
            "Max. number of methods": "5",
            "Additional Burette Drives (Optional)": "None",
            "LabX Software": "Not compatible",
            "Shortcuts per user": "4",
            "User-Defined Calculations": "No",
            "PC Software": "No",
            "Application Type": "Karl Fischer (Coulometric)",
            "Measurement Type": "Karl Fischer (Coulometric)",
            "Karl Fischer titration": "Yes",
            "User Rights and Management": "Predefined Expert\" and \"Routine\" roles\"",
            "Solvent Manager Option": "No",
            "Parallel Titration": "No",
            "Samples per Analysis (Max.)": "120",
            "Barcode Reader Connection": "Yes (USB)",
            "Generator Cell": "Without diaphragm",
            "Automation": "No",
            "Task List (Max.)": "0",
            "One Click® User Interface": "Yes",
            "Flexibility and Modularity": "Plug-and-play accessories, Sample weight transfer, One-click user interface, Pre-installed methods, User management",
            "Plug & Play Features": "Sensors",
            "Drying Oven Option": "DO308 (manual)",
            "Compliance and Data Security": "Password protection, User management (fixed groups)",
            "Printer Connection": "Yes (USB)",
            "Connectivity and Software": "Network export, USB export",
            "Measurement Range": "1 ppm – 5 %",
            "Automation Option(s)": "None",
            "Display": "Full-color 5.7 in VGA, touch screen",
            "Languages": "Chinese, English, French, German, Italian, Korean, Polish, Portuguese, Russian, Spanish"
        }
    },

    "handheld-density-meter-densito": {
        id: "handheld-density-meter-densito",
        name: "Handheld Density Meter Densito",
        image: Densito, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner3,
        altText: "MettlerToledo",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "Handheld Density Meter Densito Analytical Instruments Distributor & Service Provider In India - Mettler Toledo - Inkarp Instruments Pvt Ltd",
            description: "Discover Handheld Density Meter Densito Analytical Instruments from Mettler Toledo at Inkarp Instruments. Achieve accurate measurements effortlessly, backed by extensive distribution and service networks across India.",
            keywords: [
                "Handheld Density Meter Densito Analytical Instruments, Analytical Instruments, Mettler Toledo, Inkarp",
                "Mettler Toledo Densito India",
                "Handheld Density Meter",
                "Portable Density Meter",
                "Densito distributor India",
                "Density testing on-the-go",
                "Mettler Toledo portable measurement",
                "Brix and specific gravity tester",
                "Inkarp Instruments density meter"
            ],
            altText: "Handheld Density Meter Densito",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {

                description: "Experience the power of precision density measurement with the Densito Handheld Density Meter from Mettler Toledo, distributed and serviced by Inkarp Instruments in India. This compact and user-friendly instrument is designed for swift and accurate density determination in various industries, including chemicals, pharmaceuticals, and food. Trust Mettler Toledo's expertise and Inkarp Instruments' dedicated support for expert distribution and service, empowering you to achieve accurate and efficient density measurements anywhere, anytime."
            },
            {
                heading: "Light, intuitive, and rugged.",
                description: "Designed to fit comfortably, the lightweight Densito allows for one-handed operation in the lab or on-the-go. Results are temperature-compensated and can be delivered in specific gravity, Brix, API units, and other formats."
            },
            {
                heading: "Analyze on the go",
                description: "With its ergonomic design, this lightweight instrument fits neatly into your hand"
            },
            {
                heading: "Easy sampling",
                description: "Comfortable measuring, using the joystick to control the automatic sampling pump, and avoid the added strain of manual sampling"
            },
            {
                heading: "Result range limits",
                description: "Set up a range of acceptable limits for your products: results outside this range are color-coded for instant identification"
            }
        ],
        specs: {
            "Measurement range (g/cm³)": "0 g/cm3 – 3 g/cm3",
            "Accuracy ± (g/cm³)": "0.001 g/cm3",
            "Repeatability (g/cm³)": "0.0005",
            "Resolution (g/cm³)": "0.0001 g/cm3",
            "Sample Temperature Range": "0 °C – 50 °C",
            "Temperature resolution": "0.1 °C",
            "Temperature accuracy (±)": "0.2 °C",
            "Minimum sample volume": "2.00 mL (2 mL)",
            "Ambient Temperature Range": "-10 °C – 50 °C",
            "Measurement scales": "Brix, Ethanol (Alcohol), H2SO4, Proof (US and IP), Specific gravity, User-defined concentration, Plato, API, Baumé, Density",
            "Temperature compensation": "Automatic",
            "Methods": "30",
            "Results Storage": "1100",
            "Languages": "English, Italian, Polish, Russian, French, Portuguese, Bahasa Indonesia, Korean, Chinese, German, Spanish, Thai",
            "Built-in Measurement Scales": "Density / Specific gravity, Alcohol tables, Acids / bases and chemical tables, User programmable tables / functions, Brix / Sugar tables",
            "Display / User interface": "2.4\" color screen, buttons and joystick",
            "Display": "2.4 color screen\"",
            "Navigation": "Buttons and joystick",
            "PC Software": "EasyDirect Density and Refractometry PC Software",
            "Connectivity": "USB-A, USB-C",
            "Password Protection": "Yes",
            "Security": "Password protection",
            "Color-coded result identification": "Yes",
            "Power": "Lithium ion battery",
            "Rechargable and removable battery": "Yes",
            "Weight": "355 g",
            "Product Type": "Portable Density Meter",
            "User management": "No (only password protection)",
            "LIMS connectivity": "No",
            "Norms and Standards": "ASTM D 1250"
        }
    },

    "density-meter-excellence-d4": {
        id: "density-meter-excellence-d4",
        name: "Density meter Excellence D4",
        image: DensityMeterExcellenceD4, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner3,
        altText: "MettlerToledo",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "Density meter Excellence D4 Analytical Instruments Distributor & Service Provider In India - Mettler Toledo - Inkarp Instruments Pvt Ltd",
            description: "Discover the Density Meter Excellence D4 Analytical Instruments by Mettler Toledo. Achieve precise density measurements with Inkarp Instruments Pvt Ltd, backed by extensive distribution and service networks across India.",
            keywords: [
                "Density meter Excellence D4 Analytical Instruments, Analytical Instruments, Mettler Toledo, Inkarp",
                "Mettler Toledo D4 India",
                "Density meter Excellence D4",
                "Benchtop density meter",
                "High accuracy density meter",
                "D4 lab density meter",
                "Inkarp Instruments Mettler D4",
                "Density testing equipment India",
                "LabX density meter D4"
            ],
            altText: "Density meter Excellence D4",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {

                description: "Achieve unparalleled density measurement excellence with the Excellence D4 Density Meter from Mettler Toledo, distributed and serviced by Inkarp Instruments in India. This premium instrument sets new standards in accuracy, precision, and user experience, making it ideal for demanding applications in research, quality control, and process monitoring."
            },
            {
                heading: "The all-rounder for daily routines.",
                description: "Accurate, intuitive, and modular, the Excellence D4 offers fast measurements with automatic temperature control, a real-time video view of the measuring cell and automatic viscosity correction. Everything via an incredibly easy-to-use user interface."
            },
            {
                heading: "Simple One Click™ Operation",
                description: "The One Click™ user interface enables users to start a complete workflow with one click including sampling, measuring, rinsing, drying, and SOPs."
            },
            {
                heading: "Smart Error Detection",
                description: "Measurements can be observed in real time via video, and sampling errors can be avoided with the automatic bubble detection algorithm."
            },
            {
                heading: "Result Limits",
                description: "Measurement limits can be set for color-coded pass/fail information for accepted and rejected samples."
            }
        ],
        specs: {
            "Measurement range (g/cm³)": "0 g/cm3 – 3 g/cm3",
            "Accuracy ± (g/cm³)": "0.0001 g/cm3",
            "Repeatability (g/cm³)": "0.00005 g/cm3",
            "Resolution (g/cm³)": "0.0001 g/cm3",
            "Temperature control range": "0 °C – 95 °C",
            "Temperature control": "Yes",
            "Measurement scales": "Density, Specific gravity, Alcohol, Acid, API, Sugar, Urea, User-defined concentration\nUp to 30 user-defined concentration tables (can be entered as tables or formulas).",
            "Minimum sample volume": "1.50 mL (1.5 mL)",
            "Integrated drying pump": "No",
            "Video view": "Yes",
            "Integrated pressure sensor": "Yes",
            "Automatic sample detection": "Yes",
            "Clean check": "Yes",
            "Automatic bubble detection (BubbleCheck™)": "Yes",
            "Automatic viscosity correction": "Yes",
            "Color-coded result identification": "Yes",
            "Built-in Measurement Scales": "Density / Specific gravity, Alcohol tables, Acids / bases and chemical tables, User programmable tables / functions, Brix / Sugar tables",
            "On-screen help texts": "Yes",
            "User management": "Yes",
            "Barcode reader connectivity": "Yes",
            "Languages": "English, Italian, French, Russian, Polish, Portuguese, Chinese, Korean, German, Spanish",
            "Display / User interface": "7\" display with color touchscreen",
            "Product Type": "Benchtop Density Meter",
            "Connectivity": "HDMI (Terminal), USB client (PC Software), Ethernet (Network and PC Software), 3 × USB host (printer, memory stick, barcode reader, hub, keyboard, mouse), RS232 (Automation units), CAN (Multiple LevelSens)",
            "PC Software": "LabX Express and Server",
            "Dimensions (Width x Height x Depth)": "267 x 226 x 256 mm",
            "Weight": "17.5 kg",
            "Standard compliance": "www.mt.com/dere-norms",
            "Note": "Accuracy valid under ideal conditions and for samples with low densities and viscosities",
            "User Management": "Yes",
            "Norms and Standards": "Ph. Eur. 2.2.5, DIN EN ISO 3675, ISO 2811-3, AOAC Official Method 988.06, IP 200/52, GBT 11540-2008, ASTM D 4806, API Std 2540, ASTM D 1475, USP chapter 841 (as of USP 29), GB/T 2013-2010, ISO 18301, EN 14214:2003, ASTM D 2501, ASTM D 6448, ASTM D 1250, DIN 51757, Chinese pharmacopoeia 0601, GB/T 13531.4-2013, ISO/EN 15212-1, ISO 12185-2, Pharm. Eu. (2005) JP (2005) USP (2006), IP 365, ASTM D 5002, ISO 91, ANSI 1250, GB5009.225—2016, ASTM D 4052, OIV Analysis method for density measurement in wine and musts, ASTM D5931, OIV MA-BS-03 and/or MA-BS-03, JJF1070-2005",
            "LIMS connectivity": "Yes",
            "Automation for Enhanced Workflow": "Autosampler (up to 303 samples), Multiparameter (refractive index, color, pH, etc), Sampling and cleaning (1 sample)",
            "Compliance / Data Security": "Audit Trail (requires LabX software), Data integrity (requires LabX software), 21 CFR part 11 / EU Annex 11 (requires LabX software)"
        }
    },

    "refractometer-excellence-r4": {
        id: "refractometer-excellence-r4",
        name: "Refractometer Excellence R4",
        image: ExcellenceR4, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner3,
        altText: "MettlerToledo",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "Refractometer Excellence R4 Analytical Instruments Distributor & Service Provider In India - Mettler Toledo - Inkarp Instruments Pvt Ltd",
            description: "Discover the Refractometer Excellence R4 Analytical Instruments by Mettler Toledo at Inkarp Instruments Pvt Ltd. Elevate your analysis with precision, backed by extensive distribution and service networks across India.",
            keywords: [
                "Refractometer Excellence R4 Analytical Instruments, Analytical Instruments, Mettler Toledo, Inkarp",
                "Mettler Toledo R4 India",
                "Refractometer Excellence R4",
                "Benchtop refractometer",
                "High accuracy refractometer",
                "R4 lab refractometer",
                "Inkarp Instruments Mettler R4",
                "Brix and refractive index measurement",
                "LabX refractometer R4"
            ],
            altText: "Refractometer Excellence R4",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {

                description: "Experience the pinnacle of refractive index measurement with the Excellence R4 Refractometer from Mettler Toledo, distributed and serviced by Inkarp Instruments in India. This cutting-edge instrument offers unparalleled accuracy, precision, and user experience, making it perfect for demanding applications in pharmaceuticals, food, and chemical industries. Trust Mettler Toledo's expertise and Inkarp Instruments' dedicated support for expert distribution and service."
            },
            {
                heading: "Accurate, Intuitive, and Modular.",
                description: "The all-rounder for daily routines: The Excellence R4 refractometer offers fast refractive index measurements in the range from 1.32 to 1.70, with automatic temperature control from 0 to 100°C."
            },
            {
                heading: "Simple One Click™ Operation",
                description: "The One Click™ user interface enables users to start a complete workflow with one click including sampling, measuring, rinsing, drying, and SOPs."
            },
            {
                heading: "User Management",
                description: "The user management system allows for different levels of access to be defined, with each user having their own personalized home screen and language."
            },
            {
                heading: "Result Limits",
                description: "Measurement limits can be set for color-coded pass/fail information for accepted and rejected samples."
            }
        ],
        specs: {
            "Measurement range nD": "1.3200 - 1.7000",
            "Accuracy nD (±)": "0.0001",
            "Repeatability nD (±)": "5e-005",
            "Measurement range Brix": "0-100 % w/w",
            "Accuracy Brix": "0.05 % w/w",
            "Temperature control range": "5 °C – 100 °C",
            "Temperature control accuracy (±)": "0.1 °C",
            "Minimum sample volume": "0.50 mL (0.5 mL)",
            "Measurement scales": "Refractive Index, Sugar (Brix and more), Acid/Base, Chemical, Freezing Point, Salt, Others\nUp to 30 user-defined concentration tables (can be entered as tables or formulas).",
            "Color-coded result identification": "Yes",
            "Accuracy Brix % w/w": "0.05",
            "On-screen help texts": "Yes",
            "Barcode reader connectivity": "Yes",
            "User management": "Yes",
            "Built-in Measurement Scales": "Others, Chemicals, acids, bases and freezing point tables, Refractive Index, Brix / Sugar tables",
            "Password Protection": "Yes",
            "Languages": "English, Italian, French, Russian, Polish, Portuguese, Chinese, Korean, German, Spanish",
            "Display / User interface": "7\" display with color touchscreen",
            "Connectivity": "HDMI (Terminal), USB client (PC Software), Ethernet (Network and PC Software), 3 × USB host (printer, memory stick, barcode reader, hub, keyboard, mouse), RS232 (Automation units), CAN (Multiple LevelSens)",
            "PC Software": "LabX Express and Server",
            "Dimensions (Width x Height x Depth)": "226 x 193 x 208 mm",
            "Product Type": "Benchtop refractometer",
            "Weight": "4.8 kg",
            "Standard compliance": "www.mt.com/dere-norms",
            "Dimensions (HxWxD)": "193 mm x 208 mm x 226 mm",
            "User Management": "Yes",
            "Funnel for Easy Sampling": "No",
            "LIMS connectivity": "Yes",
            "Main norms and standards": "AOAC 969.18, AOAC 943.05, OIV MA-AS2-02, UOP 816, AOAC 932.14, Section C, ICUMSA SPS-3 (2000), ASTM D3321, Ph. Eur. 2.2.6, AOAC 983.01, AOAC 948.10, AOAC 945.102, AOAC 969.38, ASTM D4095, ASTM D1747, AOAC 905.01, AOAC 976.20, AOAC 920.141, AOAC 896.02, AOAC 898.02, ASTM D5006, AOAC 950.13, ISO 280, GBT 10786-2006, USP 831, AOAC 921.08, AOAC 970.15, AOAC 970.59, ASTM D2140, AOAC 920.78, ASTM D4542, ASTM D 1807, A.O.C.S. Official method Cc7-25, OIML R 108, AOAC 983.17, OIV MA-AS312-01B, AOAC 953.16, AOAC 2000.19, AOAC 950.04, AOAC 940.09, AOAC 932.12, ASTM D524, GB/T 12143-2008, ICUMSA GS4/3 – 13 (2004), ISI 06-1e, ASTM D1218",
            "Compliance / Data Security": "Audit Trail (requires LabX software), Data integrity (requires LabX software), 21 CFR part 11 / EU Annex 11 (requires LabX software)"
        }
    },

    "handheld-refractometer-mybrix": {
        id: "handheld-refractometer-mybrix",
        name: "Handheld Refractometer MyBrix",
        image: HandheldRefractometerMybrix, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner3,
        altText: "MettlerToledo",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "Handheld Refractometer MyBrix Analytical Instruments Distributor & Service Provider In India - Mettler Toledo - Inkarp Instruments Pvt Ltd",
            description: "Explore the Handheld Refractometer MyBrix Analytical Instruments by Mettler Toledo at Inkarp Instruments. Perfect for precise and portable analysis, backed by extensive distribution and service networks across India.",
            keywords: [
                "Handheld Refractometer MyBrix Analytical Instruments, Analytical Instruments, Mettler Toledo, Inkarp",
                "Mettler Toledo MyBrix India",
                "MyBrix Handheld Refractometer",
                "Portable Brix meter",
                "Handheld refractometer",
                "Sugar content analyzer",
                "Inkarp Instruments MyBrix",
                "Food and beverage Brix testing",
                "Pocket refractometer Mettler"
            ],
            altText: "Handheld Refractometer MyBrix",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {

                description: "You can rely on Inkarp Instruments for the distribution and servicing of Mettler Toledo's MyBrix Handheld Refractometer in India. This portable device is perfect for measuring refractive index, Brix, and temperature in various industries like food, beverages, and pharmaceuticals. With Mettler Toledo's expertise and Inkarp Instruments' dedicated support, you can trust the MyBrix Handheld Refractometer for reliable results and exceptional service."
            },
            {
                heading: "Instant and affordable sugar analysis..",
                description: "With a full Brix range and 10 integrated sugar-related scales, the MyBrix offers fast measurements of almost any food and beverage sample. A compact, robust, and weatherproof design makes this portable device ideal for field and on-site measurements."
            },
            {
                heading: "Measurements within seconds",
                description: "The MyBrix measures refractive index and sugar content instantly and precisely: Results are received within just 2 seconds in the desired scale."
            },
            {
                heading: "Fits in any pocket",
                description: "The MyBrix pocket refractometer is compact, lightweight, and designed to fit comfortably in the hand."
            },
            {
                heading: "Robust and durable",
                description: "With a weatherproof design (IP65 rated) and the rubberized keypad, MyBrix is ideal for measurements in the field and near the production line."
            }
        ],
        specs: {
            "Measurement range Brix": "0 - 95% w/w",
            "Accuracy Brix": "0.2 % w/w",
            "Measurement scales": "Refractive Index, Brix, Brix compensated 20 °C, HFCS 42 / 55 / 90, °Baumé, KMW, Oechsle German / Swiss, °Plato, Wort",
            "Measurement duration": "2 s",
            "Weight": "115 g",
            "IP rating": "IP65",
            "User management": "No",
            "Measurement range nD": "1.33 - 1.53",
            "Accuracy nD (±)": "0.0003",
            "Temperature compensation range": "5 - 60 °C",
            "Built-in Measurement Scales": "Refractive Index, Brix / Sugar tables",
            "Minimum sample volume": "0.3 mL",
            "Product Type": "Portable refractometer",
            "Measuring cell materials": "Glass and stainless steel",
            "Dimensions (LxHxW)": "115 mm x 30 mm x 54 mm",
            "Display / User interface": "1.8\" digital LCD",
            "Battery type": "3V, 2 x AAA (Alkaline batteries)",
            "Battery Life": "10,000 readings",
            "PC Software": "No",
            "Printout": "No",
            "Funnel for Easy Sampling": "No",
            "LIMS connectivity": "No"
        }
    },

    "melting-point-system-mp30": {
        id: "melting-point-system-mp30",
        name: "Melting Point System MP30",
        image: MeltingPointSystemMp30, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner3,
        altText: "MettlerToledo",
        videoId: "DBJ_Gs5H76Y", // Replace with actual video ID if available
        meta: {
            title: "Melting Point System MP30 Analytical Instruments Distributor & Service Provider In India - Mettler Toledo - Inkarp Instruments Pvt Ltd",
            description: "Discover the Melting Point System MP30 Analytical Instruments by Mettler Toledo. Enhance your lab efficiency and precision with innovative technology, backed by extensive distribution and service networks across India.",
            keywords: [
                "Melting Point System MP30 Analytical Instruments, Analytical Instruments, Mettler Toledo, Inkarp",
                "Mettler Toledo MP30 India",
                "Melting Point System MP30",
                "MP30 Melting Point Meter",
                "Mettler Toledo Melting Point Instrument",
                "Inkarp Instruments MP30",
                "MP30 Melting Range System",
                "Lab Melting Point Analysis",
                "Pharma QC Melting Point System"
            ],
            altText: "Melting Point System MP30",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {

                description: "Determine melting points with precision and ease using the MP30 Melting Point System from Mettler Toledo, distributed and serviced by Inkarp Instruments in India. This advanced instrument offers accurate and reproducible results, making it perfect for quality control, research, and development in pharmaceuticals, chemicals, and food industries. Trust Mettler Toledo's expertise and Inkarp Instruments' dedicated support for expert distribution and service, empowering you to achieve accurate and reliable results."
            },
            {
                heading: "For Simple Analyses.",
                description: "The MP30 is the ideal starter model for melting point and melting range determination, offering simultaneous determination of up to 3 melting point/melting range samples up to a maximum temperature of 570°F/300°C."
            },
            {
                heading: "Simple One Click™ Operation",
                description: "The One Click™ user interface enables users to start measurements with a single click of the button."
            },
            {
                heading: "Color video recording",
                description: "With the high resolution on-screen video, measurements can be observed in real time or conveniently replayed to verify the results."
            },
            {
                heading: "Trusted performance",
                description: "With the automatic detection of transmission intensity, highly accurate melting points or melting range temperatures are obtained."
            }
        ],
        specs: {
            "Temp. Range": "RT – 300°C",
            "Number of One Clicks™": "4",
            "Application Type": "Melting Point",
            "Min. Number of Melting Point Capillaries": "3 Melting Point Capillaries",
            "Min. Cooling Time (Tmax to 50°C)": "4 min",
            "User management": "Multiple Users",
            "Min. Heating Time (50°C to Tmax)": "3",
            "Data Export": "to USB Stick",
            "Heating Rate (/min)": "0.1 °C – 20 °C",
            "Stored Methods": "0",
            "Number of Capillaries/Cups": "3 Melting Point Capillaries",
            "PDF Reports": "Yes",
            "Stored Results": "1",
            "Substances in database": "0",
            "Video": "color, 1 video stored",
            "Languages": "English, Chinese, German, Spanish, French, Italian, Portuguese, Russian, Japanese, Korean",
            "Display / User interface": "7\" color display with touchscreen",
            "PC Software": "No",
            "Dimensions (Width x Height x Depth)": "18 x 35 x 19 cm",
            "Weight": "4 kg",
            "Standard compliance": "www.mt.com/mpdp-norms"
        }
    },

    "melting-point-system-mp80": {
        id: "melting-point-system-mp80",
        name: "Melting Point System MP80",
        image: MeltingPointSystemMp80, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner3,
        altText: "MettlerToledo",
        videoId: "DBJ_Gs5H76Y", // Replace with actual video ID if available
        meta: {
            title: "Melting Point System MP80 Analytical Instruments Distributor & Service Provider In India - Mettler Toledo - Inkarp Instruments Pvt Ltd",
            description: "Discover the Melting Point System MP80 Analytical Instruments by Mettler Toledo at Inkarp Instruments. Elevate your research with precision tools, backed by extensive distribution and service networks across India.",
            keywords: [
                "Melting Point System MP80 Analytical Instruments, Analytical Instruments, Mettler Toledo, Inkarp",
                "Mettler Toledo MP80 India",
                "Melting Point System MP80",
                "Boiling Point Analyzer MP80",
                "Cloud Point Analyzer MP80",
                "Slip Melting Point Instrument",
                "MP80 Mettler Toledo Inkarp",
                "Advanced Melting Point Device",
                "Lab Melting Boiling Point System"
            ],
            altText: "Melting Point System MP80",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {

                description: "Climb to new heights of melting point determination with the MP80 Melting Point System from Mettler Toledo, distributed and serviced by Inkarp Instruments in India. This cutting-edge instrument sets new standards in accuracy, precision, and user experience, making it ideal for demanding applications in pharmaceuticals, chemicals, and research. Trust Mettler Toledo's expertise and Inkarp Instruments' dedicated support for expert distribution and service, empowering you to achieve unparalleled melting point determination."
            },
            {
                heading: "Maximum Flexibility.",
                description: "Optimized for diverse tasks, the MP80 offers One Click™ melting, boiling, cloud, and slip melting point determination up to a maximum temperature of 660°F/350°C."
            },
            {
                heading: "Simple One Click™ Operation",
                description: "The One Click™ user interface enables users to start measurements with a single click of the button."
            },
            {
                heading: "Color video recording",
                description: "With the high resolution on-screen video, measurements can be observed in real time or conveniently replayed to verify the results."
            },
            {
                heading: "Trusted performance",
                description: "The instrument offers automatic detection of melting, boiling, cloud, and slip melting points all in one."
            }
        ],
        specs: {
            "Temp. Range": "RT – 350°C",
            "Number of One Clicks™": "12 Per User",
            "Application Type": "Boiling Point, Cloud Point, Slip Melting Point, Melting Point",
            "Min. Number of Melting Point Capillaries": "3 Melting Point Capillaries",
            "Min. Cooling Time (Tmax to 50°C)": "5.5 min",
            "User management": "Password protection",
            "Protection of Settings": "Multiple Users",
            "Min. Heating Time (50°C to Tmax)": "4",
            "Data Export": "to SD Card, USB Stick or PC",
            "Heating Rate (/min)": "0.1 °C – 20 °C",
            "Stored Methods": "20",
            "Number of Capillaries/Cups": "3 Melting Point Capillaries, 2 Cloud Point Capillaries, 2 Boiling Point Capillaries, 2 Slip Melting Point Capillaries",
            "PDF Reports": "Yes",
            "Stored Results": "50",
            "Compliance / Data Security": "Audit Trail (requires LabX software), 21 CFR part 11 / EU Annex 11 (requires LabX software)",
            "Substances in database": "12",
            "Video": "color, 300 minutes",
            "Languages": "English, Chinese, German, Spanish, French, Italian, Portuguese, Russian, Japanese, Korean",
            "PC Software": "LabX Express and Server",
            "LIMS Connectivity": "Yes",
            "Display / User interface": "7\" color display with touchscreen",
            "PC Software (optional)": "Yes",
            "Dimensions (Width x Height x Depth)": "18 x 35 x 19 cm",
            "Weight": "4 kg",
            "Standard compliance": "www.mt.com/mpdp-norms"
        }
    },

    "pH-meter-fp20-bio-Kit": {
        id: "FiveEasy Plus pH meter FP20-Bio-Kit",
        name: "FiveEasy Plus pH meter FP20-Bio-Kit",
        image: Fp20biokit, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner3,
        altText: "MettlerToledo",
        videoId: "DBJ_Gs5H76Y", // Replace with actual video ID if available
        meta: {
            title: "FiveEasy Plus pH meter FP20-Bio-Kit Distributor And Service Provider In India",
            description: "FiveEasy Plus FP20-Bio-Kit benchtop pH meter delivers accurate pH, mV & temperature measurement with LE410 electrode and USB/RS232 data export.",
            keywords: [
                "FiveEasy Plus pH meter FP20-Bio-Kit, FP20 pH meter, benchtop pH meter, pH mV meter laboratory, FiveEasy Plus FP20, LE410 pH electrode, pH meter for biotechnology labs, laboratory pH meter with USB RS232, pH ORP meter benchtop, routine pH measurement instrument, quality control pH meter, Mettler Toledo FiveEasy Plus, FiveEasy Plus pH meter FP20-Bio-Kit Distributor In India, FiveEasy Plus pH meter FP20-Bio-Kit Service Provider In India"
            ],
            altText: "Melting Point System MP80",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [

            {
                // heading: "FiveEasy Plus pH meter FP20-Bio-Kit Distributor And Service Provider In India",
                description: "The FiveEasy Plus pH meter FP20-Bio-Kit is a benchtop, single-channel pH/mV meter designed for laboratories that value ease of use, accuracy, and efficient data handling. Supplied with the LE410 generalist pH electrode, this Bio Kit is ideal for routine pH and ORP measurements in life science, biotechnology, and general laboratory workflows."
            },
            {

                description: "With a large, well-structured display, intuitive keys, and a straightforward menu, the FP20 lets users complete measurements in just a few clicks. Its compact footprint saves bench space, while RS232 and USB connectivity enable secure, flexible data export to a PC or printer for documentation and reporting."
            },

        ],
        benefits: [
            {
                name: "Measurement Made Easy",
                description: "A 4.3\" segmented LCD, logical key layout, and guided calibration support ensure fast setup and confident operation—even for new users."
            },
            {
                name: "Compact, Bench-Friendly Design",
                description: "The removable sensor holder can be stored neatly on the side of the meter, minimizing bench clutter without sacrificing stability."
            },
            {
                name: "Simple & Secure Data Transfer",
                description: "Export results directly to a PC or printer via RS232 or USB, supporting traceable documentation and efficient reporting."
            },
            {
                name: "Accurate pH, mV & Temperature Readings",
                description: "Reliable performance across a wide pH range (-2 to 16), precise mV/ORP measurement, and integrated temperature compensation deliver dependable results for daily lab work."
            },
            {
                name: "Ready-to-Use Bio Kit",
                description: "Includes the LE410 chemical-resistant glass pH electrode, suitable for a broad range of aqueous and biological samples."
            }
        ],

        specs: {
            "Meter Type": "Benchtop, Single-Channel",
            "Parameters": "pH, ORP (mV), Temperature",
            "Sensor Included": "LE410 (Generalist, chemical-resistant glass)",
            "pH Measuring Range": "-2 to 16",
            "pH Resolution": "0.01 / 0.1",
            "pH Accuracy (±)": "0.01",
            "mV Measuring Range": "-2,000 to 2,000 mV",
            "mV Resolution": "1 mV",
            "mV Accuracy (±)": "1 mV",
            "Temperature Range": "-5 °C to 105 °C",
            "Temperature Resolution": "0.1 °C",
            "Temperature Accuracy (±)": "0.3 °C",
            "Calibration Support": "Yes",
            "Memory Capacity": "200 measurements",
            "Data Transfer": "USB, RS232; PC & Printer",
            "Display": "4.3\" Segmented LCD",
            "Languages": "English",
            "Dimensions (W × D × H)": "227 × 147 × 70 mm",
            "Weight": "0.63 kg",
            "ISM Compatibility": "No",
            "Portable": "No",
            "Product Line": "FiveEasy"
        },

        faqs: [
            {
                question: "What is the FiveEasy Plus pH Meter FP20-Bio-Kit used for?",
                answer: "The FiveEasy Plus FP20-Bio-Kit is a benchtop pH/mV meter used for routine pH, ORP (mV), and temperature measurements in biotechnology, life science, quality control, and academic laboratories. It is ideal for laboratories that require simple operation, reliable accuracy, and secure data handling."
            },
            {
                question: "What parameters can the FP20-Bio-Kit measure?",
                answer: "The FP20-Bio-Kit measures pH, ORP (mV), and temperature using a single-channel configuration. This makes it suitable for general laboratory analysis and routine testing applications."
            },
            {
                question: "What pH range and accuracy does the FP20 offer?",
                answer: "The FP20 supports a pH measuring range of –2 to 16 with a resolution of 0.01 or 0.1 pH units and an accuracy of ±0.01 pH, ensuring reliable and repeatable results for everyday laboratory use."
            },
            {
                question: "Which electrode is included in the FP20-Bio-Kit?",
                answer: "The Bio Kit includes the LE410 generalist pH electrode, made from chemical-resistant glass. It is suitable for a wide range of aqueous and biological samples, making it ideal for routine lab applications."
            },
            {
                question: "How easy is the FiveEasy Plus FP20 to operate?",
                answer: "The FP20 is designed for maximum ease of use with a large, well-structured 4.3\" LCD display, intuitive buttons, and a simple menu structure. Measurements and calibration can be completed in just a few clicks, even by new users."
            },
            {
                question: "Does the FP20 support data export and documentation?",
                answer: "Yes. The FiveEasy Plus FP20 allows secure data transfer to a PC or printer via USB or RS232 ports. This supports proper documentation, traceability, and reporting in laboratory workflows."
            },
            {
                question: "How many measurements can the FP20 store?",
                answer: "The FP20 has an internal memory capacity of 200 measurements, allowing users to store and review results directly on the meter before exporting data."
            },
            {
                question: "Is the FP20 suitable for laboratories with limited bench space?",
                answer: "Yes. The FP20 features a compact benchtop design and a removable sensor holder that can be stored on the side of the instrument, helping laboratories save valuable bench space."
            },
            {
                question: "Can the FP20 measure temperature along with pH?",
                answer: "Yes. The FP20 measures temperature in the range of –5 °C to 105 °C, with a resolution of 0.1 °C and accuracy of ±0.3 °C, supporting temperature-compensated pH measurements."
            },
            {
                question: "Why is the FiveEasy Plus FP20-Bio-Kit a cost-effective choice?",
                answer: "The FP20-Bio-Kit combines reliable measurement accuracy, simple operation, durable design, and efficient data transfer at an affordable price point. Its low maintenance needs and long service life result in a low total cost of ownership, making it ideal for routine laboratories."
            }
        ]


    },

    "cond-meter-fp30-std-kit": {
        id: "FiveEasy Plus Cond meter FP30-Std-Kit",
        name: "FiveEasy Plus Cond meter FP30-Std-Kit",
        image: Fp30stdkit, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner3,
        altText: "FiveEasy Plus Cond meter FP30-Std-Kit_Mettler Toledo_Inkarp",
        videoId: "",

        meta: {
            title: "FiveEasy Plus Cond meter FP30-Std-Kit Distributor And Service Provider In India",
            description: "FiveEasy Plus FP30 benchtop conductivity meter offers accurate measurement from 0.01 µS/cm to 500 mS/cm with LE703 sensor and USB/RS232 data export.",
            keywords: [
                "FiveEasy Plus Conductivity Meter FP30",
                "FP30 conductivity meter",
                "benchtop conductivity meter",
                "laboratory conductivity meter",
                "FiveEasy Plus FP30 Std Kit",
                "LE703 conductivity sensor",
                "conductivity meter for water testing",
                "USB RS232 conductivity meter",
                "routine conductivity measurement",
                "quality control conductivity meter",
                "Mettler Toledo FiveEasy Plus conductivity",
                "FiveEasy Plus Conductivity Meter FP30 Distributor In India",
                "FiveEasy Plus Conductivity Meter FP30 Service Provider In India"
            ],
            altText: "FiveEasy Plus Cond meter FP30-Std-Kit_Mettler Toledo_Inkarp",
            internalLinks: ["Related Products"],
            externalLinks: [
                "https://www.mt.com/in/en/home/products/Laboratory_Analytics_Browse/pH-meter/pH-meters/FP30-Standard-Kit.html"
            ]
        },

        description: [
            {
                description:
                    "The FiveEasy Plus Conductivity Meter FP30-Std-Kit is a benchtop, single-channel conductivity meter designed for laboratories that need accurate, repeatable conductivity measurements with simple operation. Supplied with the LE703 generalist conductivity sensor, this standard kit is ideal for routine analysis in quality control, academic, environmental, and general laboratory applications."
            },
            {
                description:
                    "With its large, well-structured 4.3″ LCD display, intuitive button layout, and clear menu structure, the FP30 allows users to complete measurements in just a few clicks. The compact design helps save valuable bench space, while USB and RS232 connectivity ensure secure and efficient data transfer to a PC or printer."
            }
        ],

        benefits: [
            {
                name: "Measurement Made Easy",
                description:
                    "The FP30 is built for ease of use, featuring a clear display, guided calibration support, and intuitive controls that reduce training time and minimize user errors."
            },
            {
                name: "Compact, Space-Saving Design",
                description:
                    "Its slim benchtop footprint and removable sensor holder—which can be conveniently stored on the side of the meter—help keep workspaces organized and clutter-free."
            },
            {
                name: "Wide Conductivity Measurement Range",
                description:
                    "With a range of 0.01 µS/cm to 500 mS/cm, the FP30 is suitable for measuring ultrapure water, drinking water, process samples, and high-conductivity solutions."
            },
            {
                name: "Simple & Secure Data Transfer",
                description:
                    "Measurement data can be exported directly to a PC or printer via USB-B or RS232, supporting traceable documentation and efficient reporting."
            },
            {
                name: "Ready-to-Use Standard Kit",
                description:
                    "The included LE703 generalist conductivity sensor provides dependable performance for a wide variety of routine laboratory samples."
            }
        ],

        specs: {
            "Meter Type": "Benchtop, Single-Channel",
            "Parameter": "Conductivity",
            "Sensor Included": "LE703 (Generalist Sensor)",
            "Conductivity Measuring Range": "0.01 µS/cm – 500 mS/cm",
            "Conductivity Resolution": "0.01 – 1",
            "Conductivity Accuracy (±)": "0.5%",
            "Temperature Range": "−5 °C to 105 °C",
            "Temperature Resolution": "0.1 °C",
            "Temperature Accuracy (±)": "0.3 °C",
            "Calibration Support": "Yes",
            "Memory Capacity": "200 measurements",
            "Data Transfer": "USB-B, RS232; PC & Printer",
            "Connectors": "USB-B, RS232, Mini-DIN",
            "Display": "4.3″ Segmented LCD",
            "Languages": "English",
            "Dimensions (W × D × H)": "227 × 147 × 70 mm",
            "Weight": "0.63 kg",
            "ISM Compatibility": "No",
            "Portable": "No",
            "Product Line": "FiveEasy"
        },

        faqs: [
            {
                question: "What is the FiveEasy Plus Conductivity Meter FP30-Std-Kit used for?",
                answer:
                    "The FiveEasy Plus FP30-Std-Kit is a benchtop conductivity meter designed for routine conductivity measurements in quality control, environmental, academic, and general laboratory applications. It is ideal for testing water, aqueous solutions, and process samples with reliable accuracy and simple operation."
            },
            {
                question: "What conductivity range does the FP30 meter support?",
                answer:
                    "The FP30 supports a wide conductivity measuring range from 0.01 µS/cm to 500 mS/cm, making it suitable for ultrapure water, drinking water, wastewater, and high-conductivity industrial samples."
            },
            {
                question: "Which sensor is included with the FP30-Std-Kit?",
                answer:
                    "The standard kit includes the LE703 generalist conductivity sensor, designed for dependable performance across a wide range of routine laboratory conductivity measurements."
            },
            {
                question: "How accurate is the FiveEasy Plus FP30 conductivity meter?",
                answer:
                    "The FP30 offers a conductivity accuracy of ±0.5%, providing reliable and repeatable results for everyday laboratory testing and quality control workflows."
            },
            {
                question: "Is the FiveEasy Plus FP30 easy to operate for new users?",
                answer:
                    "Yes. The FP30 is designed for maximum ease of use, featuring a large 4.3″ segmented LCD, intuitive button layout, and guided calibration support—allowing even inexperienced users to perform measurements confidently."
            },
            {
                question: "Can data be transferred from the FP30 to a PC or printer?",
                answer:
                    "Yes. The FP30 supports secure data transfer via USB-B or RS232 directly to a PC or printer, ensuring traceable documentation and efficient reporting."
            },
            {
                question: "How many measurements can the FP30 store internally?",
                answer:
                    "The FiveEasy Plus FP30 has an internal memory capacity of 200 measurements, allowing users to store results before exporting or printing them."
            },
            {
                question: "Is the FP30 suitable for laboratories with limited bench space?",
                answer:
                    "Yes. The FP30 features a compact benchtop design and a removable sensor holder that can be stored on the side of the instrument, helping save valuable bench space."
            },
            {
                question: "Does the FP30 measure temperature along with conductivity?",
                answer:
                    "Yes. The FP30 measures temperature in the range of –5 °C to 105 °C with a resolution of 0.1 °C, enabling accurate temperature-compensated conductivity measurements."
            },
            {
                question: "Why is the FiveEasy Plus FP30-Std-Kit a cost-effective solution?",
                answer:
                    "The FP30 combines wide measurement range, reliable accuracy, durable design, and simple data export at an affordable price. Its low maintenance requirements and long service life result in a low total cost of ownership, making it ideal for routine laboratories."
            }
        ]
    },

    "spectrometer-easy-uv": {
        id: "Spectrophotometer Easy UV",
        name: "Spectrophotometer Easy UV",
        image: EasyUV, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner3,
        altText: "Mettler Toledo",
        videoId: "",

        meta: {
            title: "Spectrophotometer Easy UV Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "Easy UV spectrophotometer delivers fast UV-VIS scanning, color measurement, and water testing with xenon flash lamp and intuitive touchscreen operation.",
            keywords: [
                "Spectrophotometer Easy UV",
                "Easy UV VIS spectrophotometer",
                "UV VIS spectrophotometer benchtop",
                "xenon flash lamp spectrophotometer",
                "compact UV VIS spectrophotometer",
                "color measurement spectrophotometer",
                "water testing spectrophotometer",
                "EasyPlus UV VIS",
                "laboratory spectrophotometer 190–1000 nm",
                "UV VIS scanning spectrophotometer",
                "APHA color measurement instrument",
                "CIELAB spectrophotometer",
                "LIMS compatible spectrophotometer",
                "Spectrophotometer Easy UV Distributor In India",
                "Spectrophotometer Easy UV Service Provider In India"
            ],
            altText: "Spectrophotometer Easy UV_Mettler Toledo_Inkarp",
            internalLinks: ["Related Products"],
            externalLinks: [
                "https://www.mt.com/in/en/home/products/Laboratory_Analytics_Browse/uv-vis-spectrometers/spectrophotometer/easy-uv.html"
            ]
        },

        description: [
            {
                description:
                    "The Spectrophotometer Easy UV is a compact UV/VIS spectrophotometer designed for laboratories that require reliable scanning performance, intuitive operation, and low maintenance. Built on advanced scanning technology and powered by a xenon flash lamp, Easy UV delivers long lamp life, consistent performance, and reduced downtime—making it ideal for routine and multi-application analysis."
            },
            {
                description:
                    "With support for conventional spectrophotometry, color measurement, and water testing, Easy UV streamlines daily workflows through smart automation features such as SmartLid™, ScanStart™, and LongClick™. Its small footprint—similar to a lab journal—helps keep benches organized while still providing robust analytical capability."
            }
        ],

        benefits: [
            {
                name: "Conventional Spectrophotometry",
                description:
                    "Perform photometric measurements at multiple wavelengths or scan full spectra with customizable parameters. Built-in peak-finding simplifies data interpretation and accelerates method development."
            },
            {
                name: "Standard-Compliant Color Measurement",
                description:
                    "Access 30 ready-to-use color scales (e.g., CIELAB, APHA, Gardner) to shorten time-to-result and eliminate calculation errors—ideal for QC environments."
            },
            {
                name: "Integrated Water Testing",
                description:
                    "The SQKitReader™ option reads barcodes on Spectroquant® water test kits and automatically launches built-in methods, ensuring fast, error-free analysis."
            },
            {
                name: "Compact & Bench-Friendly",
                description:
                    "The slim, journal-like design reduces clutter and fits easily into space-limited labs."
            },
            {
                name: "Versatile Path Lengths",
                description:
                    "Exchangeable XPathHolders™ enable quick switching among seven path lengths (10–50 mm, plus 1 inch) to cover a wide concentration range. PathDetect™ automatically recognizes the selected path length."
            },
            {
                name: "Efficient, One-Touch Workflows",
                description:
                    "Closing the SmartLid™ automatically starts measurements, while favorites and LongClick™ reduce repetitive clicks—boosting productivity."
            },
            {
                name: "Intuitive, Guided Operation",
                description:
                    "A 4.3\" capacitive touchscreen, workflow guidance, and integrated tutorials enable true plug-and-measure operation. ScanStart™ can trigger methods by scanning SOP-defined barcodes."
            },
            {
                name: "Lean Data Management",
                description:
                    "EasyDirect™ UV/VIS PC software handles acquisition, storage, display, and export—and integrates seamlessly with LIMS for centralized data management."
            },
            {
                name: "Always Up-to-Date & Easy to Clean",
                description:
                    "Regular software updates, verified methods, and application support keep your instrument current. A washable drip tray enables fast, hygienic cleaning."
            }
        ],

        specs: {
            "Optics": "Scanning",
            "Light Source": "Xenon flash lamp",
            "Wavelength Range": "190 – 1000 nm",
            "Wavelength Accuracy": "±1.5 nm",
            "Photometric Accuracy (K₂Cr₂O₇)": "±0.005 A",
            "Stray Light (KCl, 198 nm)": "≤ 2.5",
            "Display": "4.3\" Capacitive Touchscreen",
            "Applications": "Quant, Scan, Color, Water",
            "Color Scales": "30 standard-compliant (e.g., CIELAB, APHA, Gardner)",
            "Path Lengths": "10, 16, 20, 30, 40, 50 mm; 1 inch",
            "Path Detection": "PathDetect™ (automatic)",
            "Max. Number of Methods": "80",
            "Shortcuts per User": "10",
            "Connectivity": "USB interface",
            "Options": "Handheld barcode scanner, USB Printer (P25), SQKitReader™",
            "Languages": "EN, DE, FR, IT, ES, PT, PL, ZH, TH, ID",
            "Dimensions (H × W × D)": "176 × 201 × 362 mm",
            "Weight (incl. terminal)": "4.25 kg",
            "Cuvette Changer": "No",
            "Pharmacopeia Compliant": "No",
            "Product Line": "EasyPlus UV/VIS"
        },

        faqs: [
            {
                question: "What is the Spectrophotometer Easy UV used for?",
                answer:
                    "The Spectrophotometer Easy UV is used for UV/VIS quantitative analysis, spectral scanning, color measurement, and water testing. It is suitable for routine laboratory applications in quality control, environmental testing, academic labs, and industrial analysis where reliable, fast measurements are required."
            },
            {
                question: "What wavelength range does the Easy UV spectrophotometer cover?",
                answer:
                    "The Easy UV operates across a wide wavelength range of 190 nm to 1000 nm, enabling analysis in both the ultraviolet and visible regions for diverse chemical, biological, and colorimetric applications."
            },
            {
                question: "What type of light source is used in the Easy UV?",
                answer:
                    "The Easy UV uses a xenon flash lamp, which is long-lasting, low-maintenance, and highly stable. This reduces downtime, lowers operating costs, and ensures consistent performance over time."
            },
            {
                question: "Can the Easy UV perform full spectral scans?",
                answer:
                    "Yes. The Easy UV supports full spectral scanning with customizable parameters and a peak-finding function, making it ideal for method development, compound identification, and spectral comparison."
            },
            {
                question: "How does the Easy UV support color measurement?",
                answer:
                    "The Easy UV includes 30 standard-compliant color scales, such as CIELAB, APHA, and Gardner, allowing fast, accurate color analysis without manual calculations—ideal for QC and production environments."
            },
            {
                question: "Is the Easy UV suitable for water testing applications?",
                answer:
                    "Yes. With the SQKitReader™ option, the Easy UV can read barcodes on Spectroquant® water test kits and automatically launch built-in methods, ensuring fast, error-free water analysis."
            },
            {
                question: "What makes the Easy UV easy to use for routine analysis?",
                answer:
                    "Features such as SmartLid™ (auto-start on lid closure), ScanStart™ (barcode-based method launch), LongClick™ shortcuts, and an intuitive 4.3″ touchscreen interface significantly reduce user interaction and simplify daily workflows."
            },
            {
                question: "What path lengths are supported by the Easy UV spectrophotometer?",
                answer:
                    "The Easy UV supports seven interchangeable path lengths (10, 16, 20, 30, 40, 50 mm, and 1 inch). The PathDetect™ function automatically detects the selected path length, minimizing setup errors."
            },
            {
                question: "How is data managed and exported from the Easy UV?",
                answer:
                    "Data acquisition, storage, and export are handled via EasyDirect™ UV/VIS PC software, which supports automatic data export and integration with LIMS for centralized data management."
            },
            {
                question: "Why is the Easy UV a cost-effective UV/VIS spectrophotometer?",
                answer:
                    "The Easy UV combines low-maintenance xenon lamp technology, compact design, versatile applications, and efficient digital workflows. Its reliability, reduced manual effort, and long service life result in a low total cost of ownership, making it ideal for routine laboratories."
            }
        ]
    },

    "titrator-eva-v1": {
        id: "Volumetric KF Titrator EVA V1",
        name: "Volumetric KF Titrator EVA V1",
        image: EvaV1, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner3,
        altText: "Mettler Toledo",
        videoId: "",

        meta: {
            title: "Volumetric KF Titrator EVA V1 Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "Volumetric KF Titrator EVA V1 ensures fast, precise water determination in liquids and soluble solids with LabX software and secure digital workflows.",
            keywords: [
                "Volumetric KF Titrator EVA V1",
                "Karl Fischer titrator",
                "volumetric Karl Fischer titration",
                "water content analysis instrument",
                "KF titrator for liquids",
                "KF titrator for soluble solids",
                "LabX KF titrator",
                "21 CFR Part 11 KF titration",
                "water determination laboratory instrument",
                "EVA V1 Karl Fischer titrator",
                "volumetric moisture analyzer",
                "pharmaceutical water content analysis",
                "Volumetric KF Titrator EVA V1 Distributor In India",
                "Volumetric KF Titrator EVA V1 Service Provider In India"
            ],
            altText: "Volumetric KF Titrator EVA V1_Mettler Toledo_Inkarp",
            internalLinks: ["Related Products"],
            externalLinks: [
                "https://www.mt.com/in/en/home/products/Laboratory_Analytics_Browse/Product_Family_Browse_titrators_main/titrators/titrator-volumetric-kf-eva-v1.html"
            ]
        },

        description: [
            {
                description:
                    "The Volumetric KF Titrator EVA V1 is a reliable and efficient solution for precise water content determination in liquids and soluble solids using volumetric Karl Fischer titration. Designed for routine and quality-critical laboratories, the EVA V1 combines fast analysis, secure digital workflows, and robust performance to deliver consistent, audit-ready results."
            },
            {
                description:
                    "With Fast Forecasting Amperometric control (FFA™), the EVA V1 maintains high reagent concentration to accelerate reaction rates—reducing time-to-result without sacrificing accuracy. Its user-friendly interface, automated solvent exchange, and LabX™ software integration ensure safer operation, reduced chemical exposure, and full data integrity."
            }
        ],

        benefits: [
            {
                name: "Efficient & Secure Operation",
                description:
                    "Customizable shortcuts streamline daily workflows, while automated solvent exchange minimizes operator exposure to chemicals—improving safety and consistency."
            },
            {
                name: "Digital Workflows with LabX™",
                description:
                    "LabX™ software enables secure data management, network export, user rights control, and 21 CFR Part 11–ready data integrity, supporting regulated environments and paperless laboratories."
            },
            {
                name: "Fast Time-to-Result (FFA™)",
                description:
                    "The Fast Forecasting Amperometric (FFA™) algorithm keeps reagent concentration high, increasing reaction speed and delivering rapid, reliable results."
            },
            {
                name: "High Reliability & Precision",
                description:
                    "Engineered for durability and accuracy, the EVA V1 features an exceptional burette dispensing resolution of 120,000 steps, ensuring precise titrant delivery and repeatable measurements."
            },
            {
                name: "Versatile Sample Handling",
                description:
                    "Optimized for liquids and soluble solids, with support for single drying oven workflows where required."
            }
        ],

        specs: {
            "Technique": "Upol DC, Amperometric",
            "Application Type": "Karl Fischer (Volumetric)",
            "Measurement Type": "Karl Fischer (Volumetric)",
            "Generator Cell": "N/A",
            "Sample Type": "Liquids, Soluble Solids",
            "Limit of Quantification (LOQ)": "0.2 mg water per sample (RSD = 1%)",
            "Burette Dispensing Resolution": "120,000 steps",
            "Burette Dispensing Accuracy & Precision": "According to DIN/ISO 8655-3",
            "Sample Handling Technique": "Single drying oven possibility",
            "Automation Options": "None",
            "Data Management": "LabX™ software",
            "Data Integrity & Compliance": "21 CFR Part 11 support",
            "Data Transfer": "Network export, Printer, USB export",
            "User Rights Management": "Yes (fully configurable)",
            "SmartChemicals": "Barcode reader supported",
            "Automatic Sample Weight Transfer": "Yes",
            "Product Line": "Titrator EVA"
        },

        faqs: [
            {
                question: "What is the Volumetric KF Titrator EVA V1 used for?",
                answer:
                    "The Volumetric KF Titrator EVA V1 is used for accurate determination of water content in liquids and soluble solids using volumetric Karl Fischer titration. It is widely applied in pharmaceutical, chemical, food, and petrochemical laboratories for routine quality control and compliance testing."
            },
            {
                question: "What type of Karl Fischer titration does the EVA V1 perform?",
                answer:
                    "The EVA V1 performs volumetric Karl Fischer titration using amperometric endpoint detection (Upol DC). This method is ideal for samples with low to moderate moisture content and delivers precise, reproducible results."
            },
            {
                question: "How accurate is the EVA V1 for water content measurement?",
                answer:
                    "The EVA V1 offers high accuracy with a limit of quantification (LOQ) of 0.2 mg water per sample (RSD = 1%). Its burette dispensing resolution of 120,000 steps ensures precise titrant delivery and excellent repeatability."
            },
            {
                question: "What is Fast Forecasting Amperometric control (FFA™)?",
                answer:
                    "FFA™ (Fast Forecasting Amperometric control) is an intelligent algorithm that maintains a high reagent concentration during titration. This increases the reaction rate, resulting in faster time-to-result without compromising accuracy."
            },
            {
                question: "Is the EVA V1 suitable for regulated laboratories?",
                answer:
                    "Yes. When used with LabX™ software, the EVA V1 supports 21 CFR Part 11 compliant data integrity, including secure user management, audit trails, and electronic records—making it suitable for regulated pharmaceutical and QA/QC laboratories."
            },
            {
                question: "How does LabX™ software improve workflows with EVA V1?",
                answer:
                    "LabX™ enables digital, paperless workflows by automatically storing results and metadata in a secure database. It supports network export, USB transfer, printer output, and centralized user rights management, improving traceability and reducing manual errors."
            },
            {
                question: "What types of samples can be analyzed using the EVA V1?",
                answer:
                    "The EVA V1 is designed for liquid samples and soluble solids. It also supports workflows involving a single drying oven, allowing indirect water determination for samples that cannot be titrated directly."
            },
            {
                question: "How does the EVA V1 improve operator safety?",
                answer:
                    "The instrument features automated solvent exchange, which minimizes operator exposure to Karl Fischer reagents and solvents. This improves laboratory safety while ensuring consistent and repeatable operation"
            },
            {
                question: "Does the EVA V1 support automatic data transfer?",
                answer:
                    "Yes. The EVA V1 supports automatic sample weight transfer, network export, USB export, printer connectivity, and barcode-based SmartChemicals data transfer—ensuring error-free documentation and traceability."
            },
            {
                question: "Why is the EVA V1 a cost-effective Karl Fischer titrator?",
                answer:
                    "The EVA V1 combines fast titration, high dispensing precision, durable design, and digital compliance support. Its reliability, low reagent waste, and reduced rework result in a low total cost of ownership, making it ideal for routine and regulated labs alike."
            }
        ]
    },

    "titrator-eva-c1": {
        id: "Coulometric KF Titrator Base EVA C1",
        name: "Coulometric KF Titrator Base EVA C1",
        image: EvaC1, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner3,
        altText: "Mettler Toledo",
        videoId: "",

        meta: {
            title: "Coulometric KF Titrator Base EVA C1 Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "Coulometric KF Titrator EVA C1 delivers precise low-level water analysis in liquids and solids with LabX software and 21 CFR Part 11 data integrity.",
            keywords: [
                "Coulometric KF Titrator EVA C1",
                "EVA C1 Karl Fischer titrator",
                "coulometric Karl Fischer titration",
                "low water content analysis",
                "trace moisture analyzer",
                "Karl Fischer coulometric titrator",
                "LabX KF titrator",
                "21 CFR Part 11 KF titration",
                "water determination for liquids and solids",
                "pharmaceutical moisture analysis",
                "chemical moisture analyzer",
                "KF titrator for low ppm water",
                "EVA titrator base system",
                "Coulometric KF Titrator EVA C1 Distributor In India",
                "Coulometric KF Titrator EVA C1 Service Provider In India"
            ],
            altText: "Coulometric KF Titrator Base EVA C1_Mettler Toledo_Inkarp",
            internalLinks: ["Related Products"],
            externalLinks: [
                "https://www.mt.com/in/en/home/products/Laboratory_Analytics_Browse/Product_Family_Browse_titrators_main/titrators/coulometric-kf-titrator-base-eva-c1.html"
            ]
        },

        description: [
            {
                description:
                    "The Coulometric KF Titrator Base EVA C1 is a reliable and flexible solution for accurate determination of very low water content in simple liquids and soluble solids using coulometric Karl Fischer titration. Designed as a base configuration, the EVA C1 allows laboratories to customize the system with additional components to match specific application needs—making it ideal for both routine QC and regulated environments."
            },
            {
                description:
                    "Powered by advanced Fast Forecasting Amperometric control (FFA™) and a digital sensor, the EVA C1 delivers fast, precise, and repeatable results. Its innovative cell design simplifies cleaning, minimizes cross-contamination, and improves workflow efficiency. With LabX™ software integration, the EVA C1 supports secure, paperless data management and 21 CFR Part 11–ready compliance."
            }
        ],

        benefits: [
            {
                name: "High Reliability with FFA™ Technology",
                description:
                    "Enhanced by FFA™ control and a digital sensor, the EVA C1 ensures rapid endpoint detection and consistent accuracy—ideal for trace moisture analysis at microgram levels."
            },
            {
                name: "Optimized Workflow Efficiency",
                description:
                    "An innovative generator cell design simplifies cleaning and reduces carryover risk, saving time and ensuring reliable results across consecutive measurements."
            },
            {
                name: "Efficient & Secure Operation",
                description:
                    "A user-friendly interface with customizable shortcuts streamlines daily tasks, while automated solvent exchange reduces operator exposure to chemicals and improves lab safety."
            },
            {
                name: "Digital Workflows with LabX™",
                description:
                    "LabX™ software enables secure data handling, network export, user rights management, and data integrity support for 21 CFR Part 11, helping laboratories meet regulatory requirements."
            },
            {
                name: "Flexible Base Configuration",
                description:
                    "The Base EVA C1 package allows you to select optional components (e.g., diaphragm cell) and accessories to tailor the system to your specific sample types and workflows."
            }
        ],

        specs: {
            "Technique": "Upol DC, Amperometric",
            "Measurement Type": "Karl Fischer (Coulometric)",
            "Measurement Range": "0.01 – 200 mg water",
            "Limit of Detection": "2 µg",
            "Resolution (Water)": "0.001 µg",
            "Precision": "±0.3%",
            "Generator Cell": "Diaphragm optional",
            "Sample Type": "Liquids, Soluble Solids",
            "Data Management": "LabX™ software",
            "Data Integrity & Compliance": "Supports 21 CFR Part 11",
            "Data Transfer": "Network export, Printer, USB export",
            "Automatic Sample Weight Transfer": "Yes",
            "SmartChemicals": "Barcode reader supported",
            "User Rights Management": "Fully configurable",
            "Product Line": "Titrator EVA"
        },

        faqs: [
            {
                question: "What is the Coulometric KF Titrator Base EVA C1 used for?",
                answer:
                    "The Coulometric KF Titrator Base EVA C1 is used for precise determination of very low water content in simple liquids and soluble solids. It is ideal for applications where moisture levels are in the microgram (µg) range, such as pharmaceuticals, chemicals, solvents, and specialty materials."
            },
            {
                question: "What is coulometric Karl Fischer titration and when is it preferred?",
                answer:
                    "Coulometric Karl Fischer titration is a method where iodine is generated electrochemically and consumed proportionally to the water present. It is preferred for trace moisture analysis, typically below 1% or ppm levels, where volumetric KF titration is less sensitive."
            },
            {
                question: "How sensitive is the EVA C1 coulometric KF titrator?",
                answer:
                    "The EVA C1 offers a limit of detection of 2 µg of water with an exceptional resolution of 0.001 µg, making it highly suitable for ultra-low moisture measurements with excellent repeatability and confidence."
            },
            {
                question: "What role does FFA™ technology play in EVA C1?",
                answer:
                    "Fast Forecasting Amperometric control (FFA™) optimizes the titration process by accelerating endpoint detection while maintaining accuracy. This results in faster analysis times, improved workflow efficiency, and consistent results."
            },
            {
                question: "Is the EVA C1 suitable for regulated laboratories?",
                answer:
                    "Yes. When used with LabX™ software, the EVA C1 supports 21 CFR Part 11 compliant data integrity, including secure user management, audit trails, electronic records, and traceability—ideal for pharmaceutical and QA/QC laboratories."
            },
            {
                question: "What types of samples can be analyzed using EVA C1?",
                answer:
                    "The EVA C1 is designed for liquid samples and soluble solids. It is especially effective for solvents, reagents, APIs, excipients, and other materials requiring trace-level water determination."
            },
            {
                question: "How does the EVA C1 improve laboratory safety?",
                answer:
                    "The titrator features automated solvent exchange, which minimizes operator exposure to Karl Fischer reagents and solvents. This enhances laboratory safety while ensuring consistent and repeatable titration conditions."
            },
            {
                question: "Can the EVA C1 system be customized?",
                answer:
                    "Yes. The Base EVA C1 is a modular system that allows laboratories to add optional components, such as a diaphragm generator cell, and accessories to tailor the system to specific applications and workflows."
            },
            {
                question: "How does LabX™ software enhance EVA C1 workflows?",
                answer:
                    "LabX™ enables digital, paperless workflows by automatically storing results and metadata in a secure database. It supports network export, USB transfer, printer output, barcode-based SmartChemicals, and centralized user rights management."
            },
            {
                question: "Why is the EVA C1 a cost-effective solution for trace moisture analysis?",
                answer:
                    "The EVA C1 combines high sensitivity, fast titration, easy cleaning, digital compliance support, and long-term durability. Its precision reduces rework and sample waste, resulting in a low total cost of ownership over the instrument’s lifetime."
            }
        ]
    }



}