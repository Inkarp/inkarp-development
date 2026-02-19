// DiagonalRibbonSwiper.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

const Chevron = ({ className, color = "currentColor" }) => (
  <svg viewBox="0 0 20 20" className={className} fill={color} aria-hidden="true">
    <path d="M6 2l8 8-8 8-2-2 6-6-6-6 2-2z" />
  </svg>
);

const RibbonStrip = ({
  items,
  bg = "#BE0010",
  textColor = "white",
  chevronColor = "#0a0a17",
  height = 80,
  paddingY = 18,
  paddingX = 36,
  // FIX: remove left notch so no white shows
  clip = "polygon(0 0, 100% 0, 98% 100%, 0 100%)",
  textStrokeWidth = 1,
  textStrokeColor = "rgba(223, 223, 231, 0.65)",
}) => {
  const style = {
    clipPath: clip,
    height: `${height}px`,
    padding: `${paddingY}px ${paddingX}px`,
    background: bg,
    color: textColor,
  };

  const strokeStyle = {
    WebkitTextStrokeWidth: `${textStrokeWidth}px`,
    WebkitTextStrokeColor: textStrokeColor,
  };

  return (
    // FIX: removed invalid bg-[#BE]
    <div className="pointer-events-none select-none shadow-xl" style={style}>
      <div className="flex items-center justify-center gap-8 whitespace-nowrap font-black uppercase tracking-[0.12em]">
        {items.map((txt, i) => (
          <React.Fragment key={`${txt}-${i}`}>
            <Chevron className="w-10 h-10 shrink-0" color={chevronColor} />
            <span className="text-[18px] sm:text-[26px] md:text-[24px] leading-none" style={strokeStyle}>
              {txt}
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default function DiagonalRibbonSwiper() {
  const phrases = [
    "40 Years of Trust",
    "All-India Presence",
    "Global Partnerships",
    "Trusted by 35,000+ Customers",
    "Serving, Pharma, Academia & Industry",
    "900+ Products",
    "Top Global Brands",
    "Cutting-Edge Solutions",
    "End-to-End Workflows",
    "Automation & Innovation",
    "Sustainable Technologies",
    "People & Support",
    "250+ Employees",
    "Expert Sales & Service",
    "Nationwide Support",
    "Training & Application Support",
    "Dedicated Customer Support Engineers",
    "Customer-First Approach",
    "Achievements & Impact",
    "10,000+ Installations",
    "40 Years of Legacy",
    "India’s Trusted Distributor",
    "Driving Research Outcomes",
    "Empowering Discovery",
    "Shaping the Future of Science",
  ];

  // More slides = larger loop, less chance of seeing a seam
  const slides = new Array(8).fill(0);

  return (
    // Match parent background to ribbon (belt & suspenders)
    <div className="relative w-full overflow-hidden" style={{ height: 80, background: "#BE0010" }}>
      <div className="absolute font-[Roboto] -left-[12vw] top-0 right-0">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={"auto"}
          spaceBetween={0}
          loop
          allowTouchMove={false}
          speed={90000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true, // LEFT ➜ RIGHT
          }}
          freeMode={{ enabled: true, momentum: false }}
          className="!overflow-visible ribbon-swiper"
        >
          {slides.map((_, idx) => (
            <SwiperSlide key={idx} className="!w-auto">
              <RibbonStrip items={phrases} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
