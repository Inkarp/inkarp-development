// src/components/NavbarNew.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ChevronDown, ArrowDownToLine } from "lucide-react";
import { createPortal } from "react-dom";

import InkarpLogo from "/InkarpLogo.svg";
import ChristmasLogo from "/InkarpChristmasLogo.png"
import InkarpDiwaliLogo from "/InkarpDiwali.webp"; // kept in case you use later
import CatalystLogo from "/CatalystNew.svg";

import SearchDialog from "../components/SearchDialog";

// 🔹 SEARCH MODULE IMPORTS (same family as Hero)
import { Heidolph } from "../components/pages/Search/SFC/Heidolph";
import { Bruker } from "../components/pages/Search/SFC/Bruker";
import { Polyscience } from "../components/pages/Search/SFC/Polyscience";
import { Radleys } from "../components/pages/Search/SFC/Radleys";
import { Rotzemeir } from "../components/pages/Search/SFC/Rotzemeir";
import { Thalesnano } from "../components/pages/Search/SFC/Thalesnano";
import { Nanalysis } from "../components/pages/Search/SFC/Nanalysis";
import { Jeiotech } from "../components/pages/Search/SFC/Jeiotech";
import { GLI } from "../components/pages/Search/SFC/GLI";
import { Sonics } from "../components/pages/Search/SFC/Sonics";
import { ChromoSolutions } from "../components/pages/Search/ACS/ChromoSolutions";
import { Homo } from "../components/pages/Search/Homogenization/Homo";
import { Rheology } from "../components/pages/Search/Rheology/Rheology";
import { Plants } from "../components/pages/Search/PilotPlants/Plants";
import { Life } from "../components/pages/Search/Lifessciences/Life";
import { Battery } from "../components/pages/Search/Battery/Battery";
import { gli } from "../components/pages/Search/GLI/gli";
import { Chemistry } from "../components/pages/Search/Chemistry/Chemistry";

/* ---------- Portal that truly covers the viewport ---------- */
function Portal({ children }) {
  const elRef = useRef(null);
  if (!elRef.current) elRef.current = document.createElement("div");

  useEffect(() => {
    const el = elRef.current;
    el.id = "search-dialog-portal";
    Object.assign(el.style, {
      position: "fixed",
      inset: "0",
      zIndex: "2147483647",
      pointerEvents: "auto",
    });
    document.body.appendChild(el);
    return () => {
      try {
        document.body.removeChild(el);
      } catch { }
    };
  }, []);

  return createPortal(children, elRef.current);
}

/* ================================================================
   🔹 SLUGIFY HELPER
================================================================ */
const slugify = (s = "") =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/* ================================================================
   🔹 ALL SEARCH MODULES (VERTICAL + PRINCIPAL + PRODUCTS)
================================================================ */
const searchModules = [
  Bruker,
  Heidolph,
  Polyscience,
  Radleys,
  Rotzemeir,
  Thalesnano,
  Nanalysis,
  Jeiotech,
  GLI,
  Sonics,
  ChromoSolutions,
  Homo,
  Rheology,
  Plants,
  Life,
  Battery,
  gli,
  Chemistry,
];

/* ================================================================
   🔹 EXPAND PRODUCTS + MODELS INTO FLAT LIST (WITH IMAGES)
================================================================ */
const expandAllProducts = ({ products = [], principal, vertical }) => {
  const list = [];

  products.forEach((p) => {
    // product as plain string
    if (typeof p === "string") {
      list.push({
        name: p,
        image: null,
        principal,
        vertical,
        productSlug: slugify(p),
      });
      return;
    }

    // product as object
    if (p && typeof p === "object" && p.name) {
      list.push({
        name: p.name,
        image: p.image || null,
        principal,
        vertical,
        productSlug: p.slug || slugify(p.name),
      });

      // models inside product
      if (Array.isArray(p.models)) {
        p.models.forEach((m) => {
          if (!m?.name) return;
          list.push({
            name: m.name,
            image: m.image || p.image || null,
            principal,
            vertical,
            productSlug: p.slug || slugify(p.name),
            modelSlug: m.slug || slugify(m.name),
          });
        });
      }
    }
  });

  return list;
};

/* ================================================================
   🔹 MAIN SEARCH ENGINE (MATCHES VERTICAL / PRODUCT / MODEL)
================================================================ */
const runSearchEngine = (query) => {
  const q = (query || "").toLowerCase().trim();
  const results = [];

  if (!q) return results;

  searchModules.forEach((mod) => {
    if (!mod) return;
    const { vertical, principal, products = [] } = mod;
    if (!vertical || !principal) return;

    /* 1️⃣ Vertical match -> return all products for that module */
    if (vertical.toLowerCase().includes(q)) {
      results.push({
        title: vertical,
        vertical,
        products: expandAllProducts(mod),
      });
      return;
    }

    /* 2️⃣ Exact/specific product match (object with name) */
    let foundProduct = null;
    products.forEach((p) => {
      if (p && typeof p === "object" && p.name && p.name.toLowerCase().includes(q)) {
        foundProduct = p;
      }
    });

    if (foundProduct) {
      const productResults = [];

      // base product entry
      productResults.push({
        name: foundProduct.name,
        image: foundProduct.image || null,
        principal,
        vertical,
        productSlug: foundProduct.slug || slugify(foundProduct.name),
      });

      // models under this product
      if (Array.isArray(foundProduct.models)) {
        foundProduct.models.forEach((m) => {
          if (!m?.name) return;
          productResults.push({
            name: m.name,
            image: m.image || foundProduct.image || null,
            principal,
            vertical,
            productSlug: foundProduct.slug || slugify(foundProduct.name),
            modelSlug: m.slug || slugify(m.name),
          });
        });
      }

      results.push({
        title: foundProduct.name,
        vertical,
        products: productResults,
      });

      return;
    }

    /* 3️⃣ Fuzzy match across all products + models */
    const matchedProducts = [];

    products.forEach((p) => {
      // product as string
      if (typeof p === "string") {
        if (p.toLowerCase().includes(q)) {
          matchedProducts.push({
            name: p,
            image: null,
            principal,
            vertical,
            productSlug: slugify(p),
          });
        }
        return;
      }

      // product as object
      if (p && typeof p === "object" && p.name) {
        if (p.name.toLowerCase().includes(q)) {
          matchedProducts.push({
            name: p.name,
            image: p.image || null,
            principal,
            vertical,
            productSlug: p.slug || slugify(p.name),
          });
        }

        if (Array.isArray(p.models)) {
          p.models.forEach((m) => {
            if (m?.name && m.name.toLowerCase().includes(q)) {
              matchedProducts.push({
                name: m.name,
                image: m.image || p.image || null,
                principal,
                vertical,
                productSlug: p.slug || slugify(p.name),
                modelSlug: m.slug || slugify(m.name),
              });
            }
          });
        }
      }
    });

    if (matchedProducts.length > 0) {
      results.push({
        title: principal,
        vertical,
        products: matchedProducts,
      });
    }
  });

  return results;
};

/* ================================================================
   🔹 NAVBAR COMPONENT
================================================================ */
export default function SidebarNew() {
  const ProductProfile = "/ProductProfile/Inkarp_product_profile_2025.pdf";
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/about" },
    { name: "Verticals", path: "/verticals" },
    // { name: "Careers", path: "/careers" },
    // { name: "Contact Us", path: "/contactUs" },
  ];

  const isActive = (path) => location.pathname === path;

  // Close dropdown on route change
  useEffect(() => {
    setInsightsOpen(false);
  }, [location.pathname]);

  // Close sidebar if click outside (except when modal open)
  useEffect(() => {
    function handleClickOutside(event) {
      if (showSearchModal) return;
      if (navRef.current && !navRef.current.contains(event.target)) {
        const hamburgerButton = document.querySelector(".hamburger-button");
        if (!hamburgerButton?.contains(event.target)) {
          const closeSidebarEvent = new CustomEvent("closeSidebar");
          window.dispatchEvent(closeSidebarEvent);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showSearchModal]);

  // Keyboard shortcut to open search
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "/" && !showSearchModal) {
        const tag = (e.target?.tagName || "").toLowerCase();
        if (tag !== "input" && tag !== "textarea") {
          e.preventDefault();
          setShowSearchModal(true);
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showSearchModal]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (!showSearchModal) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev || "";
    };
  }, [showSearchModal]);

  // 🔹 Connected to SearchDialog – uses our search engine
  const handleSearch = (query, callback) => {
    try {
      const results = runSearchEngine(query);
      callback(results);
    } catch (e) {
      console.error("Search error:", e);
      callback([]);
    }
  };

  // 🔹 When a product is selected (SearchDialog already navigates using <Link>)
  const handleSelectProduct = (item) => {
    setShowSearchModal(false);
    window.dispatchEvent(new CustomEvent("closeSidebar"));
  };

  return (
    <div className="fixed left-6 top-10 bottom-10 w-[120px] z-50">
  <div
    ref={navRef}
    className="h-full bg-white shadow-2xl border border-gray-200 rounded-r-[70px]
               flex flex-col items-center py-6 overflow-y-auto no-scrollbar"
  >
        {/* Logo (desktop only) */}
        <div className="flex items-center justify-center mb-8">

          <Link to="/" className="block">
            <img
              src={InkarpLogo}
              alt="Inkarp Logo"
              className="h-[70px] lg:h-[100px] w-auto max-w-full object-contain"
            />
          </Link>
        </div>

        <nav className="flex-1 space-y-6 font-medium w-full text-center">

          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
             className={`flex flex-col items-center justify-center py-4 w-full text-[11px]
             transition-all duration-200
             ${isActive(path)
               ? "bg-[#eaf2ff] text-[#2F4191]"
               : "text-gray-500 hover:bg-gray-50"
             }`}

              onClick={() => {
                window.dispatchEvent(new CustomEvent("closeSidebar"));
              }}
            >
              {name}
            </Link>
          ))}

          {/* Insights & Updates */}
          <div className="w-full relative">
            <button
              onClick={() => setInsightsOpen(!insightsOpen)}
              className="flex items-center justify-between w-full py-2 rounded-md text-black hover:bg-gray-300 transition-all whitespace-nowrap"
            >
              <span className="text-left pl-3">Insights & Updates</span>
              <ChevronDown
                className={`h-4 w-5 transition-transform duration-200 ${insightsOpen ? "rotate-180" : ""
                  }`}
                color="#E63946"
              />
            </button>

            {insightsOpen && (
              <div
                className="z-[10005] w-full bg-[#F5F5F5] rounded-md overflow-hidden shadow-lg font-normal
                  md:absolute md:left-0 md:top-full md:mt-1"
              >
                <div className="flex flex-col py-2">
                  <Link
                    to="/insights-and-updates/blogs"
                    className={`block px-4 py-2 transition-all ${isActive("/insights-and-updates/blogs")
                        ? "bg-[#E63946] text-white"
                        : "hover:bg-[#E63946] hover:text-white"
                      }`}
                    onClick={() => {
                      setInsightsOpen(false);
                      window.dispatchEvent(new CustomEvent("closeSidebar"));
                    }}
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/insights-and-updates/news-and-events"
                    className={`block px-4 py-2 transition-all ${isActive("/insights-and-updates/news-and-events")
                        ? "bg-[#E63946] text-white"
                        : "hover:bg-[#E63946] hover:text-white"
                      }`}
                    onClick={() => {
                      setInsightsOpen(false);
                      window.dispatchEvent(new CustomEvent("closeSidebar"));
                    }}
                  >
                    News & Events
                  </Link>
                  <Link
                    to="/insights-and-updates/webinars"
                    className={`block px-4 py-2 transition-all ${isActive("/insights-and-updates/webinars")
                        ? "bg-[#BE0010] text-white"
                        : "hover:bg-[#E63946] hover:text-white"
                      }`}
                    onClick={() => {
                      setInsightsOpen(false);
                      window.dispatchEvent(new CustomEvent("closeSidebar"));
                    }}
                  >
                    Webinars
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* CatalystCue */}
          <Link
            to="/catalystcue"
            className="block"
            onClick={() => {
              window.dispatchEvent(new CustomEvent("closeSidebar"));
            }}
          >
            <img
              src={CatalystLogo}
              alt="CatalystCue"
              className="w-32 h-12 object-contain hover:bg-gray-300 rounded-md p-2"
            />
          </Link>
          <Link
            to="/service"
            className={`block px-3 py-2 rounded-md transition-all duration-200 ${isActive("/service")
                ? "bg-[#BE0010] text-white shadow"
                : "text-black hover:bg-gray-300"
              }`}
            onClick={() => {
              window.dispatchEvent(new CustomEvent("closeSidebar"));
            }}
          >
            Service
          </Link>
           <Link
            to="/careers"
           className={`flex flex-col items-center justify-center py-4 w-full text-[11px]
             transition-all duration-200
             ${isActive(path)
               ? "bg-[#eaf2ff] text-[#2F4191]"
               : "text-gray-500 hover:bg-gray-50"
             }`}

            onClick={() => {
              window.dispatchEvent(new CustomEvent("closeSidebar"));
            }}
          >
            Careers
          </Link>
           <Link
            to="/contactUs"
           className={`flex flex-col items-center justify-center py-4 w-full text-[11px]
             transition-all duration-200
             ${isActive(path)
               ? "bg-[#eaf2ff] text-[#2F4191]"
               : "text-gray-500 hover:bg-gray-50"
             }`}

            onClick={() => {
              window.dispatchEvent(new CustomEvent("closeSidebar"));
            }}
          >
            Contact Us
          </Link>
        </nav>

        {/* Bottom Buttons */}
        <div className="space-y-2 pt-5 border-t border-gray-200 mt-4">
          <button
            onClick={() => setShowSearchModal(true)}
            className="flex items-center justify-between px-4 py-2 bg-white text-black border border-gray-300 rounded-md w-full hover:border-[#E63946] hover:bg-[#F5F5F5] transition"
          >
            <span className="inline-flex items-center gap-2">
              <Search className="w-4 h-4 text-[#E63946]" />
              Search
            </span>
          </button>

          <a
            href={ProductProfile}
            download
            onClick={() => {
              window.dispatchEvent(new CustomEvent("closeSidebar"));
            }}
          >
            <button className="w-full flex items-center justify-between gap-2 px-4 py-2 h-11 bg-[#BE0010] text-white font-medium rounded-md hover:bg-[#E63946] transition whitespace-nowrap">
              <span className="whitespace-nowrap overflow-hidden text-ellipsis tracking-tight">
                Product Profile
              </span>
              <ArrowDownToLine className="w-4 h-4 shrink-0" />
            </button>
          </a>
        </div>
      </div>

      {/* Search Dialog as a fullscreen overlay via Portal */}
      {showSearchModal && (
        <Portal>
          {/* Backdrop + centering layer, click to close */}
          <div
            className="fixed inset-0 z-[2147483646] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowSearchModal(false)}
          >
            {/* Stop click bubbling so clicks inside dialog don't close it */}
            <div onClick={(e) => e.stopPropagation()}>
              <SearchDialog
                isOpen={showSearchModal}
                onClose={() => setShowSearchModal(false)}
                onSearch={handleSearch}
                onSelect={handleSelectProduct}
              />
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
}
