import {  useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { FaWhatsapp, FaBars } from "react-icons/fa";
import { FiBell } from 'react-icons/fi';
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link, useNavigate } from "react-router-dom";
import InkarpLogo from "/InkarpLogo.svg";

import ChristmasLogo from "/InkarpChristmasLogo.png"

import NavbarNew from "./Main/NavbarNew";
import Breadcrumbs from "./components/pages/Breadcrumb";
import LoadingScreen from "./LoadingScreen";

import Dexter from "/Dexter-2.0.gif";

import Webinar1 from '/src/assets/Webinars/WebinarImg1.jpg';
import Webinar2 from '/src/assets/Webinars/WebinarImg2.jpg';
import Webinar3 from '/src/assets/Webinars/WebinarImg3.jpg';
import Webinar4 from '/src/assets/Webinars/WebinarImg4.webp';
import Webinar5 from '/src/assets/Webinars/WebinarImg5.webp';
import Webinar6 from '/src/assets/Webinars/WebinarImg6.webp';
import Webinar7 from '/src/assets/Webinars/WebinarImg7.webp';
import Webinar8 from '/src/assets/Webinars/WebinarImg8.webp';
import Footer from "./Main/Footer";
import { ChevronUp, Facebook, Linkedin, Instagram, Youtube, Rss, PhoneCall, Phone, Sidebar } from "lucide-react"
import SidebarNew from "./Main/SidebarNew";


export default function MainLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Bell icon and popup state (from Home.jsx)
  const [showPopup, setShowPopup] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [autoShown, setAutoShown] = useState(false);
  const [iconAnimate, setIconAnimate] = useState(false);
  const [closingAnimation, setClosingAnimation] = useState(false);
  const autoCloseTimerRef = useRef(null);
  const images = [
    // Webinar8,
    // Webinar6,
    // Webinar1,
    // Webinar2,
    Webinar4,
    Webinar3,   
    Webinar5,    
    Webinar7,  
  ];

  const location = useLocation();

  // Show only once per session on home page
  const [showDexter, setShowDexter] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("dexterShown");
    const onHome = location.pathname === "/";

    if (onHome && !alreadyShown) {
      setShowDexter(true);

      // Hide after GIF plays (adjust duration to your GIF length)
      const timer = setTimeout(() => {
        setShowDexter(false);
        sessionStorage.setItem("dexterShown", "1");
      }, 4000); // 4s; tweak to match your GIF

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);


  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const calc = () => {
      const scrollTop = window.scrollY || 0;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      ) - window.innerHeight;

      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setScrollPercent(pct);
      setShowScrollTop(scrollTop > 100); // keep your visibility logic
    };

    // run once & on scroll/resize
    calc();
    window.addEventListener('scroll', calc, { passive: true });
    window.addEventListener('resize', calc);
    return () => {
      window.removeEventListener('scroll', calc);
      window.removeEventListener('resize', calc);
    };
  }, []);
  // put this near your other effects in MainLayout
  useEffect(() => {

    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "auto" });
    setScrollPercent(0);
  }, [location.pathname, location.hash]);
  // Responsive check for mobile/tablet
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth < 1024);
  useEffect(() => {
    const handleResize = () => setIsMobileOrTablet(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // WhatsApp popup every 10s (offset a bit so they don't clash with phone)
  const WHATSAPP_NUMBER = "+918125580808";
  const [showWhatsAppTip, setShowWhatsAppTip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowWhatsAppTip(true);
      const hide = setTimeout(() => setShowWhatsAppTip(false), 3000);
      return () => clearTimeout(hide);
    }, 1000000); // show every 12s so it's staggered vs phone
    return () => clearInterval(interval);
  }, []);

  // Phone popup every 10s
  const PHONE_NUMBER = "+918125580808"; // dialable; renders formatted in UI
  const [showPhoneTip, setShowPhoneTip] = useState(false);

  useEffect(() => {
    // show every 10s for ~3.5s
    const interval = setInterval(() => {
      setShowPhoneTip(true);
      const hide = setTimeout(() => setShowPhoneTip(false), 3500);
      // clear this hide timer if unmounted before it fires
      return () => clearTimeout(hide);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  // Auto show popup ONCE after 3 seconds
  useEffect(() => {
    if (location.pathname !== "/") return;
    const timer = setTimeout(() => {
      if (!autoShown) {
        setShowPopup(true);
        setAutoShown(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [autoShown, location.pathname]);

  // Set popupVisible after slide-in finishes (~500ms)
  useEffect(() => {
    if (showPopup && !closingAnimation) {
      const visibleTimer = setTimeout(() => setPopupVisible(true), 2000);
      return () => clearTimeout(visibleTimer);
    } else {
      setPopupVisible(false); // reset on close or animation
    }
  }, [showPopup, closingAnimation]);

  // Auto-close popup after 8s with animation
  useEffect(() => {
    if (showPopup && !autoCloseTimerRef.current && autoShown) {
      autoCloseTimerRef.current = setTimeout(() => {
        triggerAnimatedClose();
      }, 18000);
    }
  }, [showPopup, autoShown,]);


  // Slideshow only when popup is fully visible
  useEffect(() => {
    if (!popupVisible) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [popupVisible]);

  // Bell icon animation
  useEffect(() => {
    if (location.pathname !== "/") return;
    const interval = setInterval(() => {
      setIconAnimate(true);
      setTimeout(() => setIconAnimate(false), 1000);
    }, 6000);
    return () => clearInterval(interval);
  }, [location.pathname]);

  const triggerAnimatedClose = () => {
    setPopupVisible(false);
    setClosingAnimation(true);
    setTimeout(() => {
      setShowPopup(false);
      setClosingAnimation(false);
      autoCloseTimerRef.current = null;
    }, 500);
  };

  const handleManualOpen = () => {
    clearTimeout(autoCloseTimerRef.current);
    autoCloseTimerRef.current = null;
    setShowPopup(true);
    setClosingAnimation(false);
  };

  const handleClosePopup = () => {
    clearTimeout(autoCloseTimerRef.current);
    autoCloseTimerRef.current = null;
    triggerAnimatedClose();
  };

  // Show loading animation for 2 seconds
  useEffect(() => {
    const loadTimer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(loadTimer);
  }, []);


  useEffect(() => {
    (function (w, d) {
      w.CollectId = "672db8abf4bc76248fc52c81";
      w.CollectAutoOpen = false; // ✅ disable auto-open
      const h = d.head || d.getElementsByTagName("head")[0];
      const s = d.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://collectcdn.com/launcher.js";
      h.appendChild(s);
    })(window, document);
  }, []);


  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleCloseSidebar = () => {
      if (window.innerWidth < 1024) setIsSidebarOpen(false);
    };
    window.addEventListener("closeSidebar", handleCloseSidebar);
    return () => window.removeEventListener("closeSidebar", handleCloseSidebar);
  }, []);

  // Show scroll-to-top button only when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 10); // show only when very top
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <>
      <div className="flex min-h-screen w-full overflow-hidden">

        {/* Inkarp logo button: only on home, only at top, only on mobile/tab */}
        {location.pathname === "/" && atTop && (
          <button
            onClick={() => (window.location.href = "/")} // or use navigate("/")
            className="fixed top-3 left-16 z-30 flex items-center transition-opacity duration-300 lg:hidden"
          >
            <img
              src={InkarpLogo}
              alt="Inkarp Logo"
              className="h-12 w-auto object-contain bg-[#F5F5F5]"
            />
          </button>
        )}

        {/* Hamburger toggle: always visible */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="fixed top-3 left-4 z-30 p-2 flex items-center justify-center bg-[#F5F5F5] lg:hidden rounded-md shadow-md"
        >
          <FaBars className="w-6 h-8 text-gray-600" />
        </button>

        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 bottom-0 z-20 bg-white border-r border-gray-200 shadow-lg transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0  lg:w-[16%]`}
        >
          <NavbarNew />
          {/* <SidebarNew /> */}
        </aside>

        {/* Main Content */}
        <div
          className={`flex-1 transition-all duration-300 ease-in-out  ${isSidebarOpen ? "lg:ml-[16%]" : "ml-0"
            } w-[84%]`}
        >
          <div className="relative flex flex-col min-h-screen z-10">
            <main className="flex-grow relative">
              <Breadcrumbs />
              <Outlet />
              {/* Bell Icon and Webinar Popup (Home page only) */}
              {location.pathname === "/" && (
                <>
                  {/* Bell Icon */}
                  {!showPopup && (
                    <div
                      className={`fixed bottom-2 left-0 md:left-65 z-[10001] bg-[#E63946] text-white p-3.5 rounded-full shadow-lg cursor-pointer transition-transform hover:scale-110 ${iconAnimate ? 'animate-bounce' : ''}`}
                      onClick={handleManualOpen}
                    >
                      <FiBell className="text-xl" />
                    </div>
                  )}
                  {/* Webinar Popup */}
                  {showPopup && (
                    <div
                      className="fixed left-[17%] inset-0 z-[10002] flex items-end justify-start px-6 pb-6 bg-transparent"
                      onClick={handleClosePopup}
                    >
                      <div
                        className={`relative w-[320px] bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 ${closingAnimation ? 'animate-slide-out' : 'animate-slide-in'}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Close Button */}
                        <button
                          onClick={handleClosePopup}
                          className="absolute top-2 right-2 text-black bg-white/60 hover:bg-black hover:text-white p-1 rounded-md text-xl z-10"
                          aria-label="Close"
                        >
                          ×
                        </button>
                        {/* Slideshow + CTA Button Over Image */}
                        <div className="relative p-2 bg-gray-100 overflow-hidden">
                          <div className="relative w-full h-auto">
                            <img
                              key={currentImage}
                              src={images[currentImage]}
                              alt={`Webinar ${currentImage + 1}`}
                              className={`w-full h-auto object-contain transition-transform duration-700 ease-in-out transform ${popupVisible ? 'animate-image-slide' : ''}`}
                            />
                            <a
                              href="/insights-and-updates/webinars"
                              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-medium text-xs shadow-md"
                            >
                              Register Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Phone + WhatsApp + ScrollToTop stack (fixed, right-bottom) */}
              <div
                className="fixed right-4 bottom-25 z-[9999] flex flex-col items-end gap-3"
              >
                {/* Phone (top) */}
                <div
                  className="relative"
                  onMouseEnter={() => setShowPhoneTip(true)}
                  onMouseLeave={() => setShowPhoneTip(false)}
                >
                  {/* Bubble (to the left) */}
                  {showPhoneTip && (
                    <div className="absolute right-[60px] top-1/2 -translate-y-1/2 bg-white shadow-lg border border-gray-200 rounded-lg px-3 py-2 min-w-[120px]">
                      <div className="text-[16px] font-semibold font-[MaxOT] text-[#E63946]">Talk to us</div>
                      {/* <div className="text-[12px] font-bold leading-tight opacity-100">
                        {"+91 8125580808"}
                      </div> */}
                      {/* little pointer */}
                      <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-gray-200 rotate-45" />
                    </div>
                  )}

                  {/* Phone button */}
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-[#Be0010] text-white shadow-lg hover:scale-110 transition-transform"
                    aria-label="Call us"
                    title={`Call us: +91 8125580808`}
                  >
                    <Phone size={22} />
                  </a>
                </div>

                {/* WhatsApp */}
                <div
                  className="relative"
                  onMouseEnter={() => setShowWhatsAppTip(true)}
                  onMouseLeave={() => setShowWhatsAppTip(false)}
                >
                  {/* Bubble (to the left) */}
                  {showWhatsAppTip && (
                    <div className="absolute right-[60px] top-1/2 -translate-y-1/2 bg-white text-gray-800 shadow-lg border border-gray-200 rounded-lg px-3 py-2 min-w-[120px]">
                      <div className="text-[16px] font-semibold font-[MaxOT] text-[#E63946]">Chat with us</div>
                      {/* <div className="text-[12px] font-bold leading-tight opacity-80">
                        {"+91  8125580808"}
                      </div> */}
                      {/* little pointer */}
                      <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-gray-200 rotate-45" />
                    </div>
                  )}

                  {/* WhatsApp button */}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition-transform"
                    aria-label="Chat on WhatsApp"
                    title="WhatsApp"
                  >
                    <FaWhatsapp size={28} />
                  </a>
                </div>
                {showScrollTop && (
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="relative grid place-items-center w-12 h-12 rounded-full bg-[#BE0010] hover:bg-[#E63946] shadow-lg active:scale-95 transition"
                    aria-label="Go to top"
                    title="Go to top"
                  >
                    {/* Progress ring exactly fits 48x48 */}
                    {/* {(() => {
                      const r = 22;                 // 2*r = 44 < 48
                      const c = 2 * Math.PI * r;    // circumference
                      const offset = c - (scrollPercent / 100) * c;

                      return (
                        <svg
                          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <circle cx="24" cy="24" r={r} stroke="#BE0010" strokeWidth="3" fill="none" />
                          <circle
                            cx="24" cy="24" r={r}
                            stroke="white" strokeWidth="3" fill="none"
                            strokeDasharray={c}
                            strokeDashoffset={offset}
                            strokeLinecap="round"
                            style={{ transition: "stroke-dashoffset 120ms linear" }}
                          />
                        </svg>
                      );
                    })()} */}

                    {/* Foreground icon */}
                    <span className="pointer-events-none relative z-10 text-white leading-none">
                      <ChevronUp size={18} className="text-center" />
                    </span>
                  </button>
                )}

              </div>
            </main>
            <Footer />

            {/* Social Rail (right side) */}
            {showScrollTop && (
              <div
                className="fixed right-2 top-1/4 -translate-y-1/2 transform
      z-[9999] flex flex-col items-center jutsify-center
      w-10 rounded-md border border-gray-200 bg-white/95 shadow
      overflow-hidden"
                role="navigation"
                aria-label="Social links"
              >
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/Inkarp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid place-items-center p-2 text-gray-500 hover:bg-[#E63946] hover:text-white transition-colors"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <div className="h-px bg-gray-200 w-full" />

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/inkarpinstruments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid place-items-center p-2 text-gray-500 hover:bg-[#E63946] hover:text-white transition-colors"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <div className="h-px bg-gray-200 w-full" />

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/66182930/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid place-items-center p-2 text-gray-500 hover:bg-[#E63946] hover:text-white transition-colors"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideIn {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideOut {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
        @keyframes ping-fast {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes pulse-fast {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease forwards;
        }
        .animate-slideOut {
          animation: slideOut 0.5s ease forwards;
        }
        .animate-ping-fast {
          animation: ping-fast 1.5s infinite;
        }
        .animate-pulse-fast {
          animation: pulse-fast 2s infinite;
        }
        @keyframes slideInUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideOutToBottomRight {
          from {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          to {
            transform: translate(120px, 100px) scale(0.1);
            opacity: 0;
          }
        }
        @keyframes slideImageLeft {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0%);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slideInUp 0.5s ease-out forwards;
        }
        .animate-slide-out {
          animation: slideOutToBottomRight 0.5s ease-in forwards;
        }
        .animate-image-slide {
          animation: slideImageLeft 0.3s ease-out;
        }        
      `
      }</style>
    </>
  );
}