// import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import BlogBanner from "../../../assets/Blogs/BlogBanner.jpg";
// import Blog1 from "../../../assets/Blogs/BlogOne/revolutionizingSample1.jpeg";
// import Blog2 from "../../../assets/Blogs/BlogTwo/AdvanceApplication.jpeg";
// import Blog3 from "../../../assets/Blogs/BlogThree/Image1.jpeg";
// import Blog4 from "../../../assets/Blogs/BlogFour/Image1.jpeg";
// import Blog5 from "../../../assets/Blogs/BlogFive/Image1.jpeg";
// import Blog6 from "../../../assets/Blogs/BlogSix/Image1.jpeg";
// import Blog7 from "../../../assets/Blogs/BlogSeven/Image1.jpeg";
// import Blog8 from "../../../assets/Blogs/BlogEight/Image1.jpeg";
// import Blog9 from "../../../assets/Blogs/BlogNine/Image1.jpeg";
// import Blog10 from "../../../assets/Blogs/BlogTen/Image1.jpeg";
// import Blog11 from "../../../assets/Blogs/BlogEleven/Image1.jpeg";
// import Blog12 from "../../../assets/Blogs/BlogTwelve/Image1.jpeg";
// import Blog13 from "../../../assets/Blogs/BlogThirteen/Image1.jpg";
// import Blog14 from "../../../assets/Blogs/BlogFourteen/Image1.jpg";
// import Blog15 from "../../../assets/Blogs/BlogFifteen/Image.webp";
// import Blog16 from "../../../assets/Blogs/BlogSixteen/Image.jpg";
// import Blog17 from "../../../assets/Blogs/BlogSeventeen/Image1.jpg";
// import Blog19 from "/BlogNinteen/Image1.jpeg";
// import Blog20 from "/BlogTwenty/Image1.jpeg";
// import Blog21 from "/BlogTwentyOne/Image1.jpeg";

// export const cardData = [
//   {
//     id: 1,
//     title: "Advanced Application of Differential Scanning Calorimetry (DSC) in the Lithium-ion Battery Manufacturing Industry",
//     slug: "advanced-application-of-differential-scanning-calorimetry-dsc-in-the-lithium-ion-battery-manufacturing-industry",
//     date: "2025-07-19",
//     image: Blog2,
//     description: "",
//     category: 'battery',
//   },
//   {
//     id: 2,
//     title: "Revolutionizing Sample Preparation in Analytical Laboratories",
//     slug: "revolutionizing-sample-preparation-in-analytical-laboratories",
//     date: "2025-07-19",
//     image: Blog1,
//     description: "",
//     category: 'analytical',
//   },
//   {
//     id: 3,
//     title: "Precision Hydrogen Content in Crude Oil Analysis with NMR Spectroscopy",
//     slug: "precision-hydrogen-content-in-crude-oil-analysis-with-nmr-spectroscopy",
//     date: "2025-07-19",
//     image: Blog3,
//     description: "",
//     category: 'spectroscopy',
//   },
//   {
//     id: 4,
//     title: "Advancing Cancer Diagnostics with Precision CTC Analysis",
//     slug: "advancing-cancer-diagnostics-with-precision-ctc-analysis",
//     date: "2025-07-19",
//     image: Blog4,
//     description: "",
//     category: 'diagnostics',
//   },
//   {
//     id: 5,
//     title: "Advancing Polymer Synthesis for a Sustainable Future",
//     slug: "advancing-polymer-synthesis-for-a-sustainable-future",
//     date: "2025-07-19",
//     image: Blog5,
//     description: "",
//     category: 'polymer',
//   },
//   {
//     id: 6,
//     title: "Revolutionizing Semiconductor Failure Analysis with Nenovision's LiteScope AFM-in-SEM",
//     slug: "revolutionizing-semiconductor-failure-analysis-with-nenovisions-litescope-afm-in-sem",
//     date: "2025-07-19",
//     image: Blog6,
//     description: "",
//     category: 'nanotech',
//   },
//   {
//     id: 7,
//     title: "Streamlining Bacterial Culture Standardization with McFarland Standards and Implen OD600",
//     slug: "streamlining-bacterial-culture-standardization-with-mcfarland-standards-and-implen-od600",
//     date: "2025-07-19",
//     image: Blog7,
//     description: "",
//     category: 'analytical',
//   },
//   {
//     id: 8,
//     title: "Advancing Nanoscale Research with WaveMode NMA Technology",
//     slug: "advancing-nanoscale-research-with-wavemode-nma-technology",
//     date: "2025-07-19",
//     image: Blog8,
//     description: "",
//     category: 'nanotech',
//   },
//   {
//     id: 9,
//     title: "Exploring the Thermal Properties and Crystallinity of Polylactic Acid (PLA) through Advanced Analysis",
//     slug: "exploring-the-thermal-properties-and-crystallinity-of-polylactic-acid-pla-through-advanced-analysis",
//     date: "2025-07-19",
//     image: Blog9,
//     description: "",
//     category: 'polymer',
//   },
//   {
//     id: 10,
//     title: "Accurate Determination of Casein Content in Milk Using the Kjeldahl Method",
//     slug: "accurate-determination-of-casein-content-in-milk-using-the-kjeldahl-method",
//     date: "2025-07-19",
//     image: Blog10,
//     description: "",
//     category: 'analytical',
//   },
//   {
//     id: 11,
//     title: "Dynamic Viscoelastic Analysis of Polypropylene Homopolymer and Block Copolymer",
//     slug: "dynamic-viscoelastic-analysis-of-polypropylene-homopolymer-and-block-copolymer",
//     date: "2025-07-19",
//     image: Blog11,
//     description: "",
//     category: 'polymer',
//   },
//   {
//     id: 12,
//     title: "Advancing Edible Oil Quality Control with FT-NIR Spectroscopy",
//     slug: "advancing-edible-oil-quality-control-with-ft-nir-spectroscopy",
//     date: "2025-07-19",
//     image: Blog12,
//     description: "",
//     category: 'spectroscopy',
//   },
//   {
//     id: 13,
//     title: "Analytical Validation of an Immunofluorescence Assay for ARv7 Protein Expression on Circulating Tumor Cells Using the RareCyte Platform",
//     slug: "analytical-validation-of-an-immunofluorescence-assay-for-arv7-protein-expression-on-circulating-tumor-cells-using-the-rarecyte-platform",
//     date: "2025-07-05",
//     image: Blog13,
//     category: 'diagnostics',
//   },
//   {
//     id: 14,
//     title: "Optimizing the Lyophilisation Process for Banana Slices Using BUCHI Lyovapor™ L-200",
//     slug: "optimizing-the-lyophilisation-process-for-banana-slices-using-buchi-lyovapor-l-200",
//     date: "2025-07-05",
//     image: Blog14,
//     category: 'analytical',
//   },
//   {
//     id: 15,
//     title: "Chemspeed FLEX AUTOPLANT: Driving Innovation in Polymer Recycling",
//     slug: "chemspeed-flex-autoplant-driving-innovation-in-polymer-recycling",
//     date: "2025-10-22",
//     image: Blog15,
//     category: 'polymer',
//   },
//   {
//     id: 16,
//     title: "Rotachrom CPC Modeler: Enabling Scalable Oligonucleotide Isolation",
//     slug: "rotachrom-cpc-modeler-enabling-scalable-oligonucleotide-isolation",
//     date: "2025-10-20",
//     image: Blog16,
//     category: 'analytical',
//   },
//   {
//     id: 17,
//     title: "Small Scale Peptide and Impurity Isolation Using Waters ACQUITY UPLC H-Class and Fraction Manager Systems",
//     slug: "small-scale-peptide-and-impurity-isolation-using-waters-acquity-uplc-h-class-and-fraction-manager-systems",
//     date: "2025-11-25",
//     image: Blog17,
//     category: 'analytical',
//   },
//   {
//     id: 19,
//     title: "IIT Delhi Develops an AI Lab Assistant That Can Run AFM Experiments on Its Own",
//     slug: "iit-delhi-develops-an-ai-lab-assistant-that-can-run-afm-experiments-on-its-own",
//     date: "2026-01-21",
//     image: Blog19,
//     category: 'nanotech',
//     product: "DriveAfm",
//      link:'/verticals/lifesciences/research-afm/driveafm'
//   },
//   {
//     id: 20,
//     title: "The New Standard for Surface Roughness Measurement in Semiconductor Wafers",
//     slug: "the-new-standard-for-surface-roughness-measurement-in-semiconductor-wafers",
//     date: "2026-01-27",
//     image: Blog20,
//     category: 'nanotech',
//     product: "DriveAfm",
//      link:'/verticals/lifesciences/research-afm/driveafm'
//   },
//   {
//     id: 21,
//     title: "Metal alloys from a new perspective",
//     slug: "metal-alloys-from-a-new-perspective",
//     date: "2026-01-27",
//     image: Blog21,
//     category: 'analytical',
//     product: "DriveAfm",
//     link:'/verticals/lifesciences/research-afm/driveafm'
//   },
// ];

// Categories configuration
// const categories = [
//   { id: 'all', name: 'All Categories', active: true },
//   { id: 'battery', name: 'Battery Tech' },
//   { id: 'analytical', name: 'Analytical' },
//   { id: 'diagnostics', name: 'Diagnostics' },
//   { id: 'polymer', name: 'Polymer Science' },
//   { id: 'spectroscopy', name: 'Spectroscopy' },
//   { id: 'nanotech', name: 'Nanotechnology' },
// ];

// const BlogsPage = () => {
//   const today = new Date();
//   const navigate = useNavigate();

//   const [filterMonth, setFilterMonth] = useState('');
//   const [filterYear, setFilterYear] = useState('');
//   const [upcomingOnly, setUpcomingOnly] = useState(false);
//   const [selectedBanner, setSelectedBanner] = useState(cardData[0]);
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   const filteredCards = cardData.filter((card) => {
//     const eventDate = new Date(card.date);
//     const matchesMonth = filterMonth ? eventDate.getMonth() + 1 === parseInt(filterMonth) : true;
//     const matchesYear = filterYear ? eventDate.getFullYear() === parseInt(filterYear) : true;
//     const isUpcoming = upcomingOnly ? eventDate >= today : true;
//     const matchesCategory = selectedCategory === 'all' || card.category === selectedCategory;
//     return matchesMonth && matchesYear && isUpcoming && matchesCategory;
//   });

//   const handleCategoryClick = (categoryId) => {
//     setSelectedCategory(categoryId);
//   };

//   const handleReadMore = (card) => {
//     navigate(`/insights-and-updates/blogs/${card.slug}`, { state: { card } });
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-5">
//       <Helmet>
//         <title>Blogs - Inkarp Instruments Private Ltd</title>
//         <meta name="keywords" content='default' />
//         <meta name="description" content="Get the latest updates on laboratory instruments, equipment, and services from Inkarp Instruments Pvt Ltd. Explore our blog for expert advice, industry trends, and more." />
//       </Helmet>

//       {/* Banner */}
//       <div className="relative w-full h-auto p-2 rounded-xl overflow-hidden mb-5">
//         <img
//           src={BlogBanner}
//           alt={selectedBanner?.title}
//           className="w-full h-full object-cover rounded-xl"
//         />
//       </div>

//       {/* Main Layout: Static Sidebar + Scrollable Content */}
//       <div className="min-h-screen flex gap-8">
//         {/* Static Left Sidebar */}
//         <div className="w-64 flex-shrink-0 hidden lg:block sticky top-24 self-start">
//           <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg max-h-[calc(100vh-12rem)]">
//             <h3 className="text-xl font-bold text-gray-800 mb-6 font-[MaxOT]">Categories</h3>
//             <ul className="space-y-2">
//               {categories.map((category) => (
//                 <li key={category.id}>
//                   <button
//                     onClick={() => handleCategoryClick(category.id)}
//                     className={`w-full text-left py-3 px-4 rounded-xl transition-all duration-200 text-sm font-medium font-[MaxOT] ${selectedCategory === category.id
//                       ? 'bg-[#E63946] text-white shadow-md transform scale-105'
//                       : 'text-gray-700 hover:bg-gray-100 hover:text-[#E63946] hover:shadow-md'
//                       }`}
//                   >
//                     {category.name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Scrollable Right Content */}
//         <div className="flex-1 lg:min-w-0 min-h-screen ">
//           <div className="max-h-screen overflow-y-auto p-2 ">
//             <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 ">
//               {filteredCards
//                 .slice()
//                 .sort((a, b) => new Date(b.date) - new Date(a.date))
//                 .map((card) => (
//                   <div
//                     key={card.id}
//                     onClick={() => setSelectedBanner(card)}
//                     className="group rounded-2xl border border-gray-300 overflow-hidden transition-all duration-300 flex flex-col hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
//                   >
//                     <div className="h-48 overflow-hidden ">
//                       <img
//                         src={card.image}
//                         alt={card.title}
//                         className="w-full h-full object-fill"
//                       />
//                     </div>

//                     <div className="p-5 flex flex-col flex-grow font-[MaxOT]">
//                       {/* <h3 className="text-lg font-bold text-gray-800 leading-tight mb-2 line-clamp-2 group-hover:text-[#E63946] transition-colors">
//                         {card.title}
//                       </h3> */}
//                       <div className="flex justify-between items-start gap-3">
//                         {/* <span className=" text-[#E63946] px-3 py-1 rounded-full text-xs font-medium flex-shrink-0">
//                           {categories.find(c => c.id === card.category)?.name || 'Uncategorized'}
//                         </span> */}
//                       <Link to={card.link}><button className='hover:bg-black/80 bg-[#E63946] text-white px-4 py-2 rounded-md text-[15px] font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 hover:scale-105'> {card.product
//                           ? `About ${card.product}`
//                           : `About this product`
//                         }</button></Link>
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             handleReadMore(card);
//                           }}
//                           className="bg-black/80 hover:bg-[#E63946] text-white px-4 py-2 rounded-md text-[15px] font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 hover:scale-105"
//                         >
//                           Read More
//                         </button>
//                       </div>
//                       {/* <p className="text-xs text-gray-500 mb-2">
//                         {new Date(card.date).toLocaleDateString('en-US', { 
//                           year: 'numeric', 
//                           month: 'short', 
//                           day: 'numeric' 
//                         })}
//                       </p> */}
//                     </div>
//                   </div>
//                 ))}
//             </div>

//             {filteredCards.length === 0 && (
//               <div className="text-center py-20">
//                 <h3 className="text-2xl font-bold text-gray-500 mb-4 font-[MaxOT]">No blogs found</h3>
//                 <p className="text-gray-400">Try adjusting your category or date filters</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogsPage;


import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

import LoadingScreen from "../../../LoadingScreen";

import BlogBanner from "../../../assets/Blogs/BlogBanner.jpg";
import Blog1 from "../../../assets/Blogs/BlogOne/revolutionizingSample1.jpeg";
import Blog2 from "../../../assets/Blogs/BlogTwo/AdvanceApplication.jpeg";
import Blog3 from "../../../assets/Blogs/BlogThree/Image1.jpeg";
import Blog4 from "../../../assets/Blogs/BlogFour/Image1.jpeg";
import Blog5 from "../../../assets/Blogs/BlogFive/Image1.jpeg";
import Blog6 from "../../../assets/Blogs/BlogSix/Image1.jpeg";
import Blog7 from "../../../assets/Blogs/BlogSeven/Image1.jpeg";
import Blog8 from "../../../assets/Blogs/BlogEight/Image1.jpeg";
import Blog9 from "../../../assets/Blogs/BlogNine/Image1.jpeg";
import Blog10 from "../../../assets/Blogs/BlogTen/Image1.jpeg";
import Blog11 from "../../../assets/Blogs/BlogEleven/Image1.jpeg";
import Blog12 from "../../../assets/Blogs/BlogTwelve/Image1.jpeg";
import Blog13 from "../../../assets/Blogs/BlogThirteen/Image1.jpg";
import Blog14 from "../../../assets/Blogs/BlogFourteen/Image1.jpg";
import Blog15 from "../../../assets/Blogs/BlogFifteen/Image.webp";
import Blog16 from "../../../assets/Blogs/BlogSixteen/Image.jpg";
import Blog17 from "../../../assets/Blogs/BlogSeventeen/Image1.jpg";
import Blog19 from "/BlogNinteen/Image1.jpeg";
import Blog20 from "/BlogTwenty/Image1.jpeg";
import Blog21 from "/BlogTwentyOne/Image1.jpeg";
import Blog22 from "/BlogTwentyTwo/Image1.jpeg";
import Blog23 from "/BlogTwentyThree/Image1.jpg";
import Blog24 from "/BlogTwentyFour/Image1.jpeg";
import Blog25 from "/BlogTwentyFive/Image1.jpeg";

import Blog26 from "/BlogTwentySix/Image1.jpeg";
import Blog27 from "/BlogTwentySeven/Image1.jpeg";

export const cardData = [
  { id: 1, title: "Advanced Application of Differential Scanning Calorimetry (DSC) in the Lithium-ion Battery Manufacturing Industry", slug: "advanced-application-of-differential-scanning-calorimetry-dsc-in-the-lithium-ion-battery-manufacturing-industry", date: "2025-07-19", image: Blog2 },
  { id: 2, title: "Revolutionizing Sample Preparation in Analytical Laboratories", slug: "revolutionizing-sample-preparation-in-analytical-laboratories", date: "2025-07-19", image: Blog1 },
  { id: 3, title: "Precision Hydrogen Content in Crude Oil Analysis with NMR Spectroscopy", slug: "precision-hydrogen-content-in-crude-oil-analysis-with-nmr-spectroscopy", date: "2025-07-19", image: Blog3 },
  { id: 4, title: "Advancing Cancer Diagnostics with Precision CTC Analysis", slug: "advancing-cancer-diagnostics-with-precision-ctc-analysis", date: "2025-07-19", image: Blog4 },
  { id: 5, title: "Advancing Polymer Synthesis for a Sustainable Future", slug: "advancing-polymer-synthesis-for-a-sustainable-future", date: "2025-07-19", image: Blog5 },
  { id: 6, title: "Revolutionizing Semiconductor Failure Analysis with Nenovision’s LiteScope AFM-in-SEM", slug: "revolutionizing-semiconductor-failure-analysis-with-nenovisions-litescope-afm-in-sem", date: "2025-07-19", image: Blog6 },
  { id: 7, title: "Streamlining Bacterial Culture Standardization with McFarland Standards and Implen OD600", slug: "streamlining-bacterial-culture-standardization-with-mcfarland-standards-and-implen-od600", date: "2025-07-19", image: Blog7 },
  { id: 8, title: "Advancing Nanoscale Research with WaveMode NMA Technology", slug: "advancing-nanoscale-research-with-wavemode-nma-technology", date: "2025-07-19", image: Blog8 },
  { id: 9, title: "Exploring the Thermal Properties and Crystallinity of Polylactic Acid (PLA) through Advanced Analysis", slug: "exploring-the-thermal-properties-and-crystallinity-of-polylactic-acid-pla-through-advanced-analysis", date: "2025-07-19", image: Blog9 },
  { id: 10, title: "Accurate Determination of Casein Content in Milk Using the Kjeldahl Method", slug: "accurate-determination-of-casein-content-in-milk-using-the-kjeldahl-method", date: "2025-07-19", image: Blog10 },
  { id: 11, title: "Dynamic Viscoelastic Analysis of Polypropylene Homopolymer and Block Copolymer", slug: "dynamic-viscoelastic-analysis-of-polypropylene-homopolymer-and-block-copolymer", date: "2025-07-19", image: Blog11 },
  { id: 12, title: "Advancing Edible Oil Quality Control with FT-NIR Spectroscopy", slug: "advancing-edible-oil-quality-control-with-ft-nir-spectroscopy", date: "2025-07-19", image: Blog12 },
  { id: 13, title: "Analytical Validation of an Immunofluorescence Assay for ARv7 Protein Expression on Circulating Tumor Cells Using the RareCyte Platform", slug: "analytical-validation-of-an-immunofluorescence-assay-for-arv7-protein-expression-on-circulating-tumor-cells-using-the-rarecyte-platform", date: "2025-07-05", image: Blog13 },
  { id: 14, title: "Optimizing the Lyophilisation Process for Banana Slices Using BUCHI Lyovapor™ L-200", slug: "optimizing-the-lyophilisation-process-for-banana-slices-using-buchi-lyovapor-l-200", date: "2025-07-05", image: Blog14 },
  { id: 15, title: "Chemspeed FLEX AUTOPLANT: Driving Innovation in Polymer Recycling", slug: "chemspeed-flex-autoplant-driving-innovation-in-polymer-recycling", date: "2025-10-22", image: Blog15 },
  { id: 16, title: "Rotachrom CPC Modeler: Enabling Scalable Oligonucleotide Isolation", slug: "rotachrom-cpc-modeler-enabling-scalable-oligonucleotide-isolation", date: "2025-10-20", image: Blog16 },
  { id: 17, title: "Small Scale Peptide and Impurity Isolation Using Waters ACQUITY UPLC H-Class and Fraction Manager Systems", slug: "small-scale-peptide-and-impurity-isolation-using-waters-acquity-uplc-h-class-and-fraction-manager-systems", date: "2025-11-25", image: Blog17 },
  { id: 19, title: "IIT Delhi Develops an AI Lab Assistant That Can Run AFM Experiments on Its Own", slug: "iit-delhi-develops-an-ai-lab-assistant-that-can-run-afm-experiments-on-its-own", date: "2026-01-21", image: Blog19 },
  { id: 20, title: "The New Standard for Surface Roughness Measurement in Semiconductor Wafers", slug: "the-new-standard-for-surface-roughness-measurement-in-semiconductor-wafers", date: "2026-01-27", image: Blog20 },
  { id: 21, title: "Metal alloys from a new perspective", slug: "metal-alloys-from-a-new-perspective", date: "2026-01-27", image: Blog21 },
  { id: 22, title: "Kolbe-Schmitt Carboxylation of Resorcinol: A Benchtop NMR Spectroscopy Approach", slug: "kolbe-schmitt-carboxylation-of-resorcinol-a-benchtop-nmr-spectroscopy-approach", date: "2024-02-01", image: Blog22 },
  { id: 23, title: "Evaluation of Oxidative Stability in Polyethylene Using Differential Scanning Calorimetry", slug: "evaluation-of-oxidative-stability-in-polyethylene-using-differential-scanning-calorimetry", date: "2024-02-01", image: Blog23 },
  {
    id: 24,
    title: "Optimizing Laboratory Water Solutions for HPLC-Based Cannabis Testing",
    slug: "optimizing-laboratory-water-solutions-for-HPLC-based-cannabis-testing",
    date: "2024-02-01",
    image: Blog24
  },

  // {
  //   id: 25,
  //   title: "Metallic Grain Structures and Their Microscopic Analysis",
  //   slug: "metallic-grain-structures-and-their-microscopic-analysis",
  //   date: "2024-02-01",
  //   image: Blog25
  // },

   {
    id: 26,
    title: "The Role of Phosphorylation in Post-Translational Modification: Activating Akt/PKB",
    slug: "the-role-of-phosphorylation-in-post-translational-modification",
    date: "2024-02-01",
    image: Blog26
  },

   {
    id: 27,
    title: "Unraveling the Dynamic Viscoelastic Properties of Polytetrafluoroethylene(PTFE)",
    slug: "unraveling-the-dynamic-viscoelastic-properties-of-polytetrafluoroethylene",
    date: "2024-02-01",
    image: Blog27
  },
];

const BlogsPage = () => {
  const navigate = useNavigate();
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const images = document.images;
    let loaded = 0;

    if (images.length === 0) {
      setPageLoading(false);
      return;
    }

    for (let img of images) {
      if (img.complete) {
        loaded++;
      } else {
        img.onload = img.onerror = () => {
          loaded++;
          if (loaded === images.length) {
            setPageLoading(false);
          }
        };
      }
    }

    if (loaded === images.length) {
      setPageLoading(false);
    }
  }, []);

  if (pageLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <Helmet>
        <title>Blogs - Inkarp Instruments Private Ltd</title>
        <meta name="description" content="Latest insights, applications, and innovations in scientific instruments from Inkarp Instruments." />
      </Helmet>

      <div className="relative w-full p-3">
        <img src={BlogBanner} alt="Blog Banner" className="w-full rounded-xl object-cover" />
      </div>

      <div className="grid gap-8 p-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cardData
          .slice()
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((card) => (
            <div key={card.id} className="bg-white border border-gray-400 rounded-2xl shadow-xl overflow-hidden flex flex-col ">
              <img src={card.image} alt={card.title} className="h-48 object-fill " />
              <div className="p-5 mt-auto">
                <button
                  onClick={() => navigate(`/insights-and-updates/blogs/${card.slug}`, { state: { card } })}
                  className="bg-black/80 text-white font-[MaxOT] px-4 py-2 rounded-md hover:text-[#E63946] transition"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogsPage;
