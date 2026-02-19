// src/pages/Catalyst.jsx
import React, { useMemo, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// Banner
import CatalystBannerImage from "../assets/Catalyst/CatalystcueBannerVolume02Issue02.jpeg";
import CatalystBannerImage1 from "../assets/Catalyst/CatalystCueVolume2Issue3.jpg";
// Cover images
import Issue6 from "../assets/Catalyst/Images/Issue6.png";
import Issue5 from "../assets/Catalyst/Images/Issue5.png";
import Issue4 from "../assets/Catalyst/Images/Issue4.png";
import Issue3 from "../assets/Catalyst/Images/Issue3.png";
import Issue2 from "../assets/Catalyst/Images/Issue2.png";
import Issue1 from "../assets/Catalyst/Images/Issue1.png";

import Issue1V2 from "../assets/Catalyst/Images/Issue1V2.jpeg";
import Issue2V2 from "../assets/Catalyst/Images/Issue2V2.webp";
import Issue2V3 from "../assets/Catalyst/Images/Issue2V3.webp";
import Issue2V4 from "../assets/Catalyst/Images/Issue4V2.jpeg";
// PDFs
import MagazineIssue1 from "/The-Future-Of-Chemical-Synthesis.pdf";
import MagazineIssue2 from "/Innovations-In-Life-Science-Research.pdf";
import MagazineIssue3 from "/Enhancing-Laboratory-Efficiency.pdf";
import MagazineIssue4 from "/Material-Science-Battery-Research.pdf";
import MagazineIssue5 from "/Advance-Analysis-And-Purification-Solution.pdf";
import MagazineIssue6 from "/Transformative-Tools-Aiding-Biotherapies.pdf";

import MagazineIssueV2I1 from "/Explore-the-age-of-informed-automation.pdf";
import MagazineIssueV2I2 from "/Integrated-Approaches-for-modern-labs.pdf";
import MagazineIssueV2I3 from "/Mastering-The-Analytical-Lab.pdf";
import MagazineIssueV2I4 from "/Compliance-by-design.pdf";

import CatalystModal from "../components/pages/CatalystCue/CatalystModal";

// ✅ FULL CARD DATA WITH SEO
const cards = [
  {
    id: 6, Volume: "Volume-1", subTitle: "Issue 06", image: Issue6, Date: "June 2025", link: MagazineIssue6, title: "CATALYSTCue Magazine - Volume 1 - Issue 6",
    metaTitle: "",
    metaDescription:
      "",
    keywords:
      "",
  },
  {
    id: 5, Volume: "Volume-1", subTitle: "Issue 05", image: Issue5, Date: "April 2025", link: MagazineIssue5, title: "CATALYSTCue Magazine - Volume 1 - Issue 5",
    metaTitle: "",
    metaDescription:
      "",
    keywords:
      "",
  },
  {
    id: 4, Volume: "Volume-1", subTitle: "Issue 04", image: Issue4, Date: "February 2025", link: MagazineIssue4, title: "CATALYSTCue Magazine - Volume 1 - Issue 4",
    metaTitle: "",
    metaDescription:
      "",
    keywords:
      "",
  },
  {
    id: 3, Volume: "Volume-1", subTitle: "Issue 03", image: Issue3, Date: "December 2024", link: MagazineIssue3, title: "CATALYSTCue Magazine - Volume 1 - Issue 3",
    metaTitle: "",
    metaDescription:
      "",
    keywords:
      "",
  },
  {
    id: 2, Volume: "Volume-1", subTitle: "Issue 02", image: Issue2, Date: "October 2024", link: MagazineIssue2, title: "CATALYSTCue Magazine - Volume 1 - Issue 2",
    metaTitle: "",
    metaDescription:
      "",
    keywords:
      "",
  },
  {
    id: 1, Volume: "Volume-1", subTitle: "Issue 01", image: Issue1, Date: "August 2024", link: MagazineIssue1, title: "CATALYSTCue Magazine - Volume 1 - Issue 1",
    metaTitle: "",
    metaDescription:
      "",
    keywords:
      "",
  },

  {
    id: 7, Volume: "Volume-2", subTitle: "Issue 01", image: Issue1V2, Date: "August 2025", link: MagazineIssueV2I1, title: "CATALYSTCue Magazine - Volume 2 - Issue 3",
    metaTitle: "",
    metaDescription:
      "",
    keywords:
      "",
  },
  {
    id: 8, Volume: "Volume-2", subTitle: "Issue 02", image: Issue2V2, Date: "October 2025", link: MagazineIssueV2I2, title: "CATALYSTCue Magazine - Volume 2 - Issue 2",
    metaTitle: "Integrated Approaches for Modern Labs | CATALYSTCue Magazine Vol. 2 Issue 2 | Inkarp’s Scientific E-Magazine",

    metaDescription:
      "Read CATALYSTCue Volume 2, Issue 2 – Inkarp’s Scientific E-Magazine – October 2025 On Modern Laboratory Innovations, Integrated Research Approaches, And Future-Ready Lab Insights",
    keywords:
      "Catalystcue Volume 2 Issue 2, Inkarp Scientific Magazine, Integrated Approaches For Modern Labs,Laboratory Innovations India, Scientific E-Magazine, Research Insights, Future-Ready Labs, ScientificInstruments India, Laboratory Technology Trends, Life Sciences &amp; Biotechnology Applications, Cell Culture Optimization, Biopharmaceutical Analysis, Protein Expression Studies, Drug Discovery &amp; Development, Clinical Diagnostics Innovation, Analytical &amp; Chemistry Applications, Chromatography In Pharmaceuticals, Spectroscopy For Material Analysis, Flow Chemistry Process Intensification, Catalyst Screening Applications, Reaction Monitoring In Real-Time, Material Science &amp; Energy Applications, Battery Research &amp; Testing, Nanomaterials Characterization, Polymer Analysis &amp; Testing, Sustainable Materials Innovation, Renewable Energy Applications, Environmental &amp; Food Applications, Environmental Monitoring Solutions, Water Quality Analysis, Food Authenticity Testing, Nutritional Analysis Applications, Contaminant Detection In Food &amp; Water, Industrial &amp; Automation Applications, Process Automation In Labs, High-Throughput Screening Applications, Pilot Plant Scale-Up, Automation In Chemical Synthesis, Industrial Biotechnology Applications.",
  },

  {
    id: 9,
    Volume: "Volume-2",
    subTitle: "Issue 03",
    image: Issue2V3,
    Date: "December 2025",
    link: MagazineIssueV2I3,

    title: "CATALYSTCue Magazine - Volume 2 - Issue 3",
    metaTitle: "CATALYSTCue Scientific Magazine | Analytical Lab Excellence – Inkarp",
    metaDescription:
      "Explore CATLYSTCue Volume 02 Issue 03 by Inkarp—covering analytical lab precision, metrological traceability, AFM imaging, chromatography, and automation.",
    keywords:
      "CATALYSTCue magazine, Inkarp scientific magazine, analytical laboratory magazine, metrological traceability, accuracy vs precision lab, AFM imaging technology, chromatography advancements, laboratory automation India, analytical instruments magazine, scientific research magazine India, lab measurement accuracy, nanosurf AFM, radleys reactor automation, drug discovery imaging, analytical lab best practices.",
  },

  {
    id: 10,
    Volume: "Volume-2",
    subTitle: "Issue 04",
    image: Issue2V4,
    Date: "February 2026",
    link: MagazineIssueV2I4,
    title: "CATALYSTCue Magazine - Volume 2 - Issue 4",
    metaTitle: "Compliance By Design, PFAS & Lab Automation | CATALYSTCue Volume- 02 Issue- 04 | Inkarp",
    metaDescription:
      "Explore Compliance by Design, PFAS regulations in India, lab automation, spectroscopy, chromatography, and QA/QC insights in CATALYSTCue Volume- 02 Issue-04 by Inkarp.",
    keywords:
      "laboratory compliance, PFAS analysis India, analytical science magazine, lab automation India, compliance by design, PFAS regulations India, chromatography applications, spectroscopy insights, QAQC laboratories, laboratory quality systems, regulatory compliance laboratories, scientific instrumentation India, PFAS testing workflow for laboratories, compliance ready laboratory automation, analytical challenges in PFAS detection, Indian laboratory regulatory framework, lab automation for quality control, chromatography and spectroscopy applications in India, compliance driven analytical workflows",
  },
];

// ✅ CLEAN URL FUNCTION (NO PARAMS)
const flipbookHref = (pdfUrl) => {
  const clean = String(pdfUrl).replace(/^\/+/, "").replace(/\.pdf$/i, "");
  return `/catalystcue/${encodeURI(clean)}`;
};

export default function Catalyst() {
  const [showCatalystModal, setShowCatalystModal] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowCatalystModal(true), 5000);
    return () => clearTimeout(t);
  }, []);

  const groupedByVolume = useMemo(() => {
    return cards.reduce((acc, card) => {
      (acc[card.Volume] ||= []).push(card);
      return acc;
    }, {});
  }, []);

  const sortedVolumeKeys = useMemo(() => {
    return Object.keys(groupedByVolume).sort((a, b) => {
      const numA = parseInt(a.split("-")[1], 10);
      const numB = parseInt(b.split("-")[1], 10);
      return numB - numA;
    });
  }, [groupedByVolume]);

  return (
    <div className="relative">
      <Helmet>
        <title>CatalystCue - Inkarp Instruments Private Ltd</title>
        <meta
          name="keywords"
          content="CatalystCue, Catalyst Cue, CatalystCue Magazine, Catalyst Cue Magazine, Inkarp, Inkarp Instruments, Science Magazine"
        />
        <meta
          name="description"
          content="Explore CatalystCue by Inkarp Instruments Pvt Ltd. Discover scientific innovations, lab techniques, and breakthroughs."
        />
      </Helmet>

      <img
        src={CatalystBannerImage1}
        alt="CatalystCue Banner"
        className="w-full h-full object-cover object-center px-5 "
        style={{ borderRadius: "0 0 85% 85% / 30%" }}
      />

      {/* Volumes */}
      <div className="p-5">
        {sortedVolumeKeys.map((volume) => {
          const volumeCards = [...groupedByVolume[volume]].sort((a, b) => b.id - a.id);

          return (
            <div key={volume} className="mb-10">
              <div className="flex justify-center">
                <h2 className="text-xl font-bold px-4 py-1 border border-[#E63946] mb-4">
                  {volume}
                </h2>
              </div>

              <div className="flex flex-wrap justify-center gap-8">
                {volumeCards.map((card) => {
                  const href = flipbookHref(card.link);

                  return (
                    <Link
                      to={href}
                      className="hover:scale-105 transition-transform duration-500 border border-white bg-[#1A2D51] text-white"
                      state={{
                        title: card.title,
                        metaTitle: card.metaTitle,
                        metaDescription: card.metaDescription,
                        keywords: card.keywords,
                      }}
                    >
                      <img src={card.image} alt={card.subTitle} className="w-full h-[380px] object-cover" />
                      <div className="text-center p-2 flex gap-2 justify-center">
                        <h3>{card.subTitle}</h3>
                        <span>|</span>
                        <p>{card.Date}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {showCatalystModal && (
        <div className="z-[10000]">
          <CatalystModal onClose={() => setShowCatalystModal(false)} />
        </div>
      )}
    </div>
  );
}
