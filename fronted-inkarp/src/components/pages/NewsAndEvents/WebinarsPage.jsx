import React, { useState } from "react";
import { X } from "lucide-react";
import Heidolph from "/src/assets/PrincipalLogos/RowOne/Heidolph.svg";
import Radleys from "/src/assets/PrincipalLogos/RowOne/radley.svg";
import Waters from '/src/assets/PrincipalLogos/RowTwo/waters.svg';
import Metller from '/src/assets/PrincipalLogos/RowTwo/Metller.png';
import Rotachrom from '/src/assets/PrincipalLogos/RowFour/Rotochrome.png';
import Chemspeed from '/src/assets/PrincipalLogos/RowSix/Chemspeed.jpg';
import Buchi from '/src/assets/PrincipalLogos/RowSeven/BUCHI.svg';
import Bruker from '/src/assets/PrincipalLogos/RowSeven/Bruker.svg';
import Zeiss from '/src/assets/PrincipalLogos/RowSix/zeiss.png';
import Nenovision from '/src/assets/PrincipalLogos/RowFive/Nenovision.svg';

import RegisterForm from "./RegisterForm";
import { Helmet } from "react-helmet";
import WebinarBanner from "/src/assets/Events/WebinarBanner.jpg";
import Webinars from "./Webinars";
const webinarLinks = [

]

const webinars = [
  {
    id: 1,
    title: "Challenges and Opportunities for Site-Specific Failure Analysis",
    description:
      "Explore challenges and opportunities in site-specific failure analysis and learn how advanced nanoscale techniques are transforming reliability studies.",
    date1: "February 03 | 09:30 PM IST",
    date: "2026-02-03",
    img: Nenovision, // replace with your failure analysis / webinar banner image import
    details: `
    <div className="space-y-3">
      <p className="font-[MaxOT] text-lg sm:text-xl">
        <strong>🔍 Failure analysis is no longer about where it failed—but why it failed there.</strong>
      </p>

      <p className="mt-2 text-sm sm:text-base text-gray-800">
        Join our upcoming webinar to explore the challenges and opportunities of site-specific failure analysis, and learn how advanced nanoscale techniques are transforming reliability studies in electronics, materials, and advanced R&amp;D.
      </p>

      <p className="mt-2 text-sm sm:text-base text-gray-800">
        From pinpointing hidden defects to gaining actionable insights at the exact failure site, this session is designed for scientists and engineers who demand precision, clarity, and confidence in their analysis.
      </p>

      <p className="mt-4 font-semibold text-sm sm:text-base text-gray-900">
        📅 Event Details:
      </p>

      <ul className="list-disc list-inside mt-2 space-y-1 text-sm sm:text-base text-gray-800">
        <li>🗓 <strong>03 February 2026</strong></li>
        <li>⏰ <strong>09:30 PM IST</strong></li>
        <li>🎧 <strong>Live Webinar</strong></li>
      </ul>
    </div>
  `
  },

  {
    id: 2,
    title: "Secure Your Lab’s Data. Simplify Your Informatics.",
    description:
      "Modern laboratories demand more than performance—they demand data integrity, security, and compliance.",
    date1: "February 03 | 09:30 PM IST",
    date: "2026-02-03",
    img: Waters,
    details: `
    <div className="space-y-5">
      <p className="font-[MaxOT] text-lg sm:text-xl">
        <strong> Secure Your Lab’s Data. Simplify Your Informatics.</strong>
      </p>

        <p className="mt-2 text-sm sm:text-base text-gray-800">
       Modern laboratories demand more than performance—they demand data integrity, security, and compliance.
      </p>

      <p className="mt-2 text-sm sm:text-base text-gray-800">
     Join this insightful webinar to explore how the Waters OneLab Secure Deployment Solution creates a protected, compliant, and centrally managed informatics environment for analytical labs. Discover how secure deployment and smart infrastructure strengthen your lab’s digital backbone while enabling confident, audit-ready operations.
      </p>
      <p className="mt-4 font-semibold text-sm sm:text-base text-gray-900">
        📅 Event Details:
      </p>

      <ul className="list-disc list-inside mt-2 space-y-1 text-sm sm:text-base text-gray-800">
        <li>🗓 <strong>03 February 2026</strong></li>
        <li>⏰ <strong>09:30 PM IST</strong></li>
        <li>🎧 <strong>Live Webinar</strong></li>
      </ul>
    </div>
  `
  },

  {
    id: 3,
    title: "Closing the Loop with Agentic Workflows in the Laboratory",
    description:
      "Autonomy, intelligence, and connectivity are transforming modern laboratories.",
    date1: "February 04 | 09:30 PM IST",
    date: "2026-02-04",
    img: Chemspeed,
    details: `
    <div className="space-y-5">
      <p className="font-[MaxOT] text-lg sm:text-xl">
        <strong>Closing the Loop with Agentic Workflows in the Laboratory</strong>
      </p>

      <p className="mt-2 text-sm sm:text-base text-gray-800">
   Autonomy, intelligence, and connectivity are transforming modern laboratories.
This live session explores how agentic workflows integrate automation, data analytics, and decision-making to close the loop between experimentation and outcomes—enabling faster optimization and smarter research execution.
      </p>
      <p className="mt-4 font-semibold text-sm sm:text-base text-gray-900">
        📅 Event Details:
      </p>

      <ul className="list-disc list-inside mt-2 space-y-1 text-sm sm:text-base text-gray-800">
        <li>🗓 <strong>04 February 2026</strong></li>
        <li>⏰ <strong>09:30 PM IST</strong></li>
        <li>🎧 <strong>Live Webinar</strong></li>
      </ul>
    </div>
  `
  },

  {
    id: 5,
    title: "Accelerating Sample to Decision with Automated LC-MS Workflows",
    description:
      "Automation, precision, and data integrity are redefining how RNA therapeutics and vaccines are developed.",
    date1: "February 05 | 08:30 PM IST",
    date: "2026-02-05",
    img: Waters,
    details: `
    <div className="space-y-5">
      <p className="font-[MaxOT] text-lg sm:text-xl">
        <strong>Accelerating Sample to Decision with Automated LC-MS Workflows</strong>
      </p>

      <p className="mt-2 text-sm sm:text-base text-gray-800">
   Automation, precision, and data integrity are redefining how RNA therapeutics and vaccines are developed.
This live session explores advanced LC-MS workflows designed to streamline sample preparation, reduce variability, and deliver reproducible, high-quality results across critical analytical stages.
      </p>
      <p className="mt-4 font-semibold text-sm sm:text-base text-gray-900">
        📅 Event Details:
      </p>

      <ul className="list-disc list-inside mt-2 space-y-1 text-sm sm:text-base text-gray-800">
        <li>🗓 <strong>05 February 2026</strong></li>
        <li>⏰ <strong>08:30 PM IST</strong></li>
        <li>🎧 <strong>Live Webinar</strong></li>
      </ul>
    </div>
  `
  },

  {
    id: 7,
    title: "🔐 Managing computerized system risks is essential to maintaining data integrity in regulated environments.",
    description:
      "As reliance on computerized systems increases, laboratories and manufacturing teams must address data integrity risks aligned with regulatory expectations.",
    date1: "February 19 |09:30 PM IST",
    date: "2026-02-19",
    img: Waters,
    details: `
    <div className="space-y-5">
      <p className="font-[MaxOT] text-lg sm:text-xl">
        <strong>🔐 Managing computerized system risks is essential to maintaining data integrity in regulated environments.</strong>
      </p>

      <p className="mt-2 text-sm sm:text-base text-gray-800">
   As reliance on computerized systems increases, laboratories and manufacturing teams must address data integrity risks aligned with regulatory expectations.

      </p>
       <p className="mt-2 text-sm sm:text-base text-gray-800">
 Join this Ask Me Anything webinar to gain practical insights into managing computerized system risks, common compliance challenges, and real-world approaches to protecting data integrity.

      </p>
      <p className="mt-4 font-semibold text-sm sm:text-base text-gray-900">
        📅 Event Details:
      </p>

      <ul className="list-disc list-inside mt-2 space-y-1 text-sm sm:text-base text-gray-800">
        <li>🗓 <strong>19 February 2026</strong></li>
        <li>⏰ <strong>09:30 PM IST</strong></li>
        <li>🎧 <strong>Live Webinar</strong></li>
      </ul>
    </div>
  `
  },

  {
    id: 6,
    title: "Solving (Re-)Formulation Challenges through Smart, Science-Driven Workflows",
    description:
      "Speed, accuracy, and scalability are reshaping formulation development.",
    date1: "February 24 | 01:30 PM & 09:30 PM IST",
    date: "2026-02-24",
    img: Chemspeed,
    details: `
    <div className="space-y-5">
      <p className="font-[MaxOT] text-lg sm:text-xl">
        <strong>Solving (Re-)Formulation Challenges through Smart, Science-Driven Workflows</strong>
      </p>

      <p className="mt-2 text-sm sm:text-base text-gray-800">
   Speed, accuracy, and scalability are reshaping formulation development.
This live session highlights how science-based formulation approaches, combined with web applications and high-throughput screening, help overcome complex (re-)formulation challenges with greater efficiency and confidence.

      </p>
      <p className="mt-4 font-semibold text-sm sm:text-base text-gray-900">
        📅 Event Details:
      </p>

      <ul className="list-disc list-inside mt-2 space-y-1 text-sm sm:text-base text-gray-800">
        <li>🗓 <strong>24 February 2026</strong></li>
        <li>⏰ <strong>01:30 PM & 09:30 PM IST</strong></li>
        <li>🎧 <strong>Live Webinar</strong></li>
      </ul>
    </div>
  `
  },

  {
    id: 8,
    title: "⚖️ Accurate weighing is the foundation of reliable results.",
    description:
      "Join our upcoming webinar, Introduction to Good Weighing Practice (GWP), to understand how proper weighing principles help reduce errors, improve consistency, and support compliance in laboratory and industrial environments.",
    date1: "February 24 |02:30 PM IST",
    date: "2026-02-24",
    img: Metller,
    details: `
    <div className="space-y-5">
      <p className="font-[MaxOT] text-lg sm:text-xl">
        <strong>⚖️ Accurate weighing is the foundation of reliable results.</strong>
      </p>

      <p className="mt-2 text-sm sm:text-base text-gray-800">
  Join our upcoming webinar, Introduction to Good Weighing Practice (GWP), to understand how proper weighing principles help reduce errors, improve consistency, and support compliance in laboratory and industrial environments.

      </p>
       <p className="mt-2 text-sm sm:text-base text-gray-800">
 This session will introduce the core concepts of GWP and how they can be applied to achieve confidence in everyday weighing tasks.

      </p>
      <p className="mt-4 font-semibold text-sm sm:text-base text-gray-900">
        📅 Event Details:
      </p>

      <ul className="list-disc list-inside mt-2 space-y-1 text-sm sm:text-base text-gray-800">
        <li>🗓 <strong>24 February 2026</strong></li>
        <li>⏰ <strong>02:30 PM IST</strong></li>
        <li>🎧 <strong>Live Webinar</strong></li>
      </ul>
    </div>
  `
  },

  {
    id: 9,
    title: "🔬 Regulatory-aligned biosimilarity assessment demands more than routine characterization.",
    description:
      "Understanding molecular weight, aggregation, and structural comparability is critical for building confidence in biosimilar development. In this upcoming live webinar, we explore how SEC-MALS plays a key role in delivering robust, regulator-ready data for biosimilarity assessment.",
    date1: "February 26 |09:30 PM IST",
    date: "2026-02-26",
    img: Waters,
    details: `
    <div className="space-y-5">
      <p className="font-[MaxOT] text-lg sm:text-xl">
        <strong>🔬 Regulatory-aligned biosimilarity assessment demands more than routine characterization.</strong>
      </p>

      <p className="mt-2 text-sm sm:text-base text-gray-800">
 Understanding molecular weight, aggregation, and structural comparability is critical for building confidence in biosimilar development. In this upcoming live webinar, we explore how SEC-MALS plays a key role in delivering robust, regulator-ready data for biosimilarity assessment.

      </p>
       <p className="mt-2 text-sm sm:text-base text-gray-800">
Join experts as they discuss best practices, real-world considerations, and analytical strategies that support accurate comparability studies across biopharmaceutical workflows.

      </p>
      <p className="mt-4 font-semibold text-sm sm:text-base text-gray-900">
        📅 Event Details:
      </p>

      <ul className="list-disc list-inside mt-2 space-y-1 text-sm sm:text-base text-gray-800">
        <li>🗓 <strong>26 February 2026</strong></li>
        <li>⏰ <strong>09:30 PM IST</strong></li>
        <li>🎧 <strong>Live Webinar</strong></li>
      </ul>
    </div>
  `
  },


  // {
  //   id: 6,
  //   title: "Tackling (re-)formulating issues via science-based formulation combined with webapps and high throughput (HT) screening",
  //   description:
  //     "Learn how science-based formulation strategies and high-throughput screening help tackle complex (re-)formulation challenges while accelerating development.",
  //   date1: "January 29 | 01:30 PM & 09:30 PM IST",
  //   date: "2026-01-29",
  //   img: Chemspeed, 
  //   details: `
  //   <div className="space-y-3">
  //     <p className="font-[MaxOT] text-lg sm:text-xl">
  //       <strong>🧪 Formulation challenges demand smarter, faster solutions.</strong>
  //     </p>

  //     <p className="mt-2 text-sm sm:text-base text-gray-800">
  //       Join our upcoming webinar to learn how science-based formulation strategies and high-throughput screening can effectively tackle complex (re-)formulation challenges—accelerating development while improving robustness and reproducibility.
  //     </p>

  //     <p className="mt-2 text-sm sm:text-base text-gray-800">
  //       From early screening to data-driven decision-making, discover how advanced automation enables confident optimization, reduced risk, and faster pathways from concept to scalable formulations.
  //     </p>

  //     <p className="mt-4 font-semibold text-sm sm:text-base text-gray-900">
  //       📅 Event Details:
  //     </p>

  //     <ul className="list-disc list-inside mt-2 space-y-1 text-sm sm:text-base text-gray-800">
  //       <li>🗓 <strong>29 January 2026</strong></li>
  //       <li>⏰ <strong>01:30 PM & 09:30 PM IST</strong></li>
  //     </ul>
  //   </div>
  // `
  // },


];

function getDaysLeft(dateString) {
  const today = new Date();
  const target = new Date(dateString);
  // Zero out the time for accurate day difference
  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);
  const diff = target - today;
  if (diff < 0) return 0;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export default function WebinarsNew() {
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseModal = () => {
    setSelectedWebinar(null);
    setShowRegister(false);
  };

  return (
    <>
      <div className="w-full">
        {/* Banner */}
        <Helmet>
          <title>Webinars - Inkarp Instruments Private Ltd</title>
          <meta name="keywords" content='default' />
          <meta name="description" content="Join Inkarp's Expert-LED Webinars to stay informed on Industry Trends, Best Practices, and Innovative Solutions. Explore upcoming webinars and access on-demand recordings for professional growth." />
        </Helmet>
        <div className="relative w-full">
          <img src={WebinarBanner} alt="Webinar Banner" className="w-full h-auto object-cover" />
        </div>
        {/* Webinar List */}
        <div className="space-y-6 max-w-7xl mx-auto px-4 py-10 ">
          {webinars.map((webinar) => (
            <div
              key={webinar.id}
              className="p-4 rounded-xl shadow flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border border-gray-300 bg-[#F5F5F5]"
            >
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <img src={webinar.img} alt="Logo" className="w-24 h-16 object-contain bg-white rounded-xl" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm lg:w-[180px] w-full">
                  <p className="font-[Roboto] text-sm">{webinar.date1}</p>
                  <div className="flex items-center text-[#E63946] px-3 py-1 rounded-xl text-md font-semibold font-[Roboto] ">
                    {getDaysLeft(webinar.date)} days left
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-md font-[MaxOT] text-[#E63946]">{webinar.title}</h3>
                <p className="text-sm font-[Roboto]">{webinar.description}</p>
              </div>
              <div className="flex gap-3 flex-col">
                {getDaysLeft(webinar.date) > 0 && (
                  <button
                    onClick={() => setSelectedWebinar(webinar)}
                    className="text-sm px-4 py-2 bg-[#E63946] text-white rounded hover:bg-red-700 transition font-[MaxOT] hover:text-black"
                  >
                    Register Here
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Webinar Detail Modal */}
        {selectedWebinar && !showRegister && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto relative p-6">
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
                onClick={handleCloseModal}
              >
                <X className="w-5 h-5" />
              </button>
              {/* <h3 className="text-2xl font-bold text-[#E63946] font-[MaxOT] mb-2">{selectedWebinar.title}</h3> */}
              {/* <img
              src={selectedWebinar.image}
              alt={selectedWebinar.title}
              className="w-full h-full object-cover mb-4 border rounded-lg"
            /> */}
              <div className="font-[Roboto]  mb-3 text-md space-y-2">
                <div dangerouslySetInnerHTML={{ __html: selectedWebinar.details }} />
              </div>
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowRegister(true)}
                  className="bg-[#BE0010] text-white px-6 py-2 rounded hover:[#E63946] text-sm"
                >
                  Register Now →
                </button>
              </div>
            </div>
          </div>
        )}

        {showRegister && (
          <RegisterForm
            isOpen={true}
            onClose={handleCloseModal}
            webinars={webinars}
            preselected={selectedWebinar}
            webinarLink={webinarLinks[selectedWebinar.id]}
          />
        )}

      </div>
    </>
  );
}
