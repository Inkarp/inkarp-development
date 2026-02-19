import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link, useNavigate } from "react-router-dom";
import Luzchem from '/src/assets/PrincipalLogos/RowThree/Luzchem.png';
import M500TR from '/images/products/Kubota/500TR.jpg'
import M5500 from '/images/products/Kubota/5500.jpg'
import S300 from '/images/products/Kubota/s300.jpg'
import S300TR from '/images/products/Kubota/s300tr.jpg'
import S500T from '/images/products/Kubota/s500t.jpg'
import S700T from '/images/products/Kubota/s700t.jpg'
import S700TR from '/images/products/Kubota/s700tr.jpg'
import S500FR from '/images/products/Kubota/s500fr.jpg'
import S700FR from '/images/products/Kubota/s700fr.jpg'

import M3300 from '/images/products/Kubota/M3300.jpg'
import M3520 from '/images/products/Kubota/M3520.jpg'
import M3700 from '/images/products/Kubota/M3700.jpg'
import M3740 from '/images/products/Kubota/M3740.jpg'
import M6000 from '/images/products/Kubota/M6000.jpg'
import M7000 from '/images/products/Kubota/M7000.jpg'
import PlateSpin from '/images/products/Kubota/plate-spin.jpg'

import M8730 from '/images/products/Kubota/M8730.jpg'
import M9920 from '/images/products/Kubota/M9920.jpg'
import M9942 from '/images/products/Kubota/M9942.jpg'

export const KubotaData = {
    'general-purpose-centrifuges': {
        models: [
            {
                name: "Benchtop High Speed Refrigerated Centrifuge (Model M500TR)",
                slug: "m500tr",
                image: M500TR,
            },
            {
                name: "Benchtop Centrifuge (Model S300T)",
                slug: "s300t",
                image: S300,
            },
            {
                name: "Benchtop Centrifuge (Model S500T)",
                slug: "s500t",
                image: S500T,
            },
            {
                name: "Benchtop Centrifuge (Model S700T)",
                slug: "s700t",
                image: S700T,
            },
            {
                name: "Benchtop Refrigerated Centrifuge (Model S300TR)",
                slug: "s300tr",
                image: S300TR,
            },
            {
                name: "Benchtop Refrigerated Centrifuge (Model S700TR)",
                slug: "s700tr",
                image: S700TR,
            },
            {
                name: "Tabletop Refrigerated Centrifuge (Model 5500)",
                slug: "m5500",
                image: M5500,
            },
            {
                name: "Floor Standing Refrigerated Centrifuge (S500FR)",
                slug: "s500fr",
                image: S500FR,
            },
            {
                name: "Floor Standing Refrigerated Centrifuge (S700FR)",
                slug: "s700fr",
                image: S700FR,
            },
        ],
        meta: {
            title: "Kubota General Purpose Centrifuges Distributor and Service Provider in India | Inkarp",
            description:
                "Kubota general purpose centrifuges, including benchtop and floor standing models, deliver reliable separation performance for clinical, research, and industrial applications. Available in high speed and refrigerated variants with multiple rotor options. Distributed and serviced in India by Inkarp.",
            keywords: [
                "Kubota centrifuges India",
                "Benchtop centrifuge Kubota",
                "Refrigerated centrifuge Kubota",
                "General purpose centrifuge",
                "Kubota centrifuge distributor India",
                "Inkarp centrifuge service provider"
            ],
            altText:
                "Kubota General Purpose Centrifuges – Benchtop, Refrigerated, and Floor Standing models",
            internalLinks: ["Kubota centrifuge product pages", "Service & Spares"],
            externalLinks: ["Kubota Official Website"],
        },
    },

    'laboratory-centrifuges': {
        models: [
            {
                name: "Tabletop Micro Centrifuge (Model 3300)",
                slug: "m3300",
                image: M3300,
            },
            {
                name: "Tabletop Micro Refrigerated Centrifuge (Model 3520)",
                slug: "m3520",
                image: M3520,
            },
            {
                name: "Micro Refrigerated Centrifuge (Model 3700)",
                slug: "m3700",
                image: M3700,
            },
            {
                name: "Micro Refrigerated Centrifuge (Model 3740)",
                slug: "m3740",
                image: M3740,
            },
            {
                name: "High Speed Refrigerated Centrifuge (Model 6000)",
                slug: "m6000",
                image: M6000,
            },
            {
                name: "High Speed Refrigerated Centrifuge (Model 7000)",
                slug: "m7000",
                image: M7000,
            },
            {
                name: "Benchtop Centrifuge (Plate Spin 3)",
                slug: "plate-spin-3",
                image: PlateSpin,
            },
            {
                name: "Hybrid High Speed Refrigerated Centrifuge (Model 6200)",
                slug: "m6200",
                image: M6000,
            },
        ],
        meta: {
            title: "Kubota Laboratory Centrifuges Distributor and Service Provider in India | Inkarp",
            description:
                "Kubota laboratory centrifuges, including micro and high-speed refrigerated models, are designed for precision, reliability, and safety. Ideal for clinical diagnostics, molecular biology, and routine laboratory workflows. Distributed and serviced in India by Inkarp.",
            keywords: [
                "Kubota laboratory centrifuge",
                "Kubota micro centrifuge",
                "Kubota refrigerated centrifuge",
                "Laboratory centrifuge India",
                "Kubota centrifuge distributor India",
                "Inkarp centrifuge service India"
            ],
            altText:
                "Kubota Laboratory Centrifuges – Micro, High Speed, and Refrigerated models",
            internalLinks: ["Kubota centrifuge product pages", "Service & Spares"],
            externalLinks: ["Kubota Official Website"],
        },
    },

    'large-laboratory-centrifuges': {
        models: [
            {
                name: "High Capacity Refrigerated Centrifuge (Model 8730)",
                slug: "m8730",
                image: M8730,
            },
            {
                name: "Large Capacity Refrigerated Centrifuge (Model 9942)",
                slug: "m9942",
                image: M9942,
            },
            {
                name: "Large Capacity Refrigerated Centrifuge (Model 9920)",
                slug: "m9920",
                image: M9920,
            },
        ],
        meta: {
            title: "Kubota Large Capacity Refrigerated Centrifuges Distributor and Service Provider in India | Inkarp",
            description:
                "Kubota large capacity refrigerated centrifuges provide powerful separation for high-volume samples, including blood bags, bottles, and large tubes. Designed for biopharma, clinical, and industrial applications. Distributed and serviced in India by Inkarp.",
            keywords: [
                "Kubota large capacity centrifuge",
                "Kubota refrigerated centrifuge",
                "High volume centrifuge India",
                "Blood bag centrifuge Kubota",
                "Kubota centrifuge distributor India",
                "Inkarp centrifuge service provider"
            ],
            altText:
                "Kubota Large Capacity Refrigerated Centrifuges – Models 8730, 9920, and 9942",
            internalLinks: ["Kubota centrifuge product pages", "Service & Spares"],
            externalLinks: ["Kubota Official Website"],
        },
    },
}
