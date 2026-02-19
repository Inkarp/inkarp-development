import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "Technical Services",
    intro:
      "Instruments, like research, demand expertise. Our technical service division provides advanced troubleshooting, application support, and corrective maintenance when equipment requires immediate attention.",
    points: [
      "On-site support for quick issue resolution and minimal downtime",
      "Remote assistance for troubleshooting, diagnostics, and software updates",
      "Application support for method development, usage guidance, and optimization",
    ],
    note:
      "Our factory-trained engineers are certified by global manufacturers and equipped with advanced diagnostic tools.",
  },
  {
    id: 2,
    title: "Product Installation",
    intro:
      "Proper installation is the foundation for the smooth operation of any scientific instrument. Our certified engineers follow global installation and commissioning protocols.",
    points: [
      "Site readiness checks for electrical, water, gas, and environmental requirements",
      "Calibration and validation in compliance with GLP/GMP standards",
      "Hands-on user training for confident operation from day one",
    ],
    note:
      "Error-free installation ensures maximum uptime and long-term instrument reliability.",
  },
  {
    id: 3,
    title: "Preventive Maintenance",
    intro:
      "Preventive maintenance is essential for avoiding unexpected breakdowns and ensuring consistent performance in laboratory environments.",
    points: [
      "Scheduled inspections covering performance, safety, and calibration",
      "Cleaning, lubrication, and fine-tuning to extend instrument lifespan",
      "Maintenance documentation to support audits and regulatory compliance",
    ],
    note:
      "Early identification of issues helps reduce repair costs and downtime.",
  },
  {
    id: 4,
    title: "Annual Maintenance Contracts (AMC)",
    intro:
      "Our Annual Maintenance Contracts are designed to provide long-term reliability with flexible coverage options tailored to your needs.",
    points: [
      "Comprehensive AMC covering preventive maintenance, breakdowns, and parts",
      "Non-comprehensive AMC covering service visits and labor",
      "Priority response and faster turnaround times for AMC customers",
    ],
    note:
      "AMCs offer cost-effective protection for labs that cannot afford downtime.",
  },
  {
    id: 5,
    title: "Spares Support",
    intro:
      "Availability of genuine spare parts is critical for maintaining instrument accuracy and long-term performance.",
    points: [
      "100% genuine spare parts sourced directly from principal manufacturers",
      "Quick availability through regional service centers across India",
      "Consumables and accessories support for uninterrupted workflows",
    ],
    note:
      "Using genuine spares protects warranties and safeguards instrument precision.",
  },
];

export default function ServiceTabs() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div className="w-[95%] mx-auto my-10">
      <div className="bg-[#F5F5F5] border border-gray-200 rounded-2xl p-6 shadow-sm">
        {/* Heading */}
        <div className="text-center mb-6">
          <span
            className="inline-block px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
            style={{
              borderImage: "linear-gradient(90deg,#BE0010,#E63946) 1",
              borderWidth: 1,
              borderStyle: "solid",
            }}
          >
            Services We Provide
          </span>

          {/* <h2 className="text-2xl sm:text-3xl font-[MaxOT] text-[#E63946] mt-3">
            End-to-End Instrument Support
          </h2> */}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 bg-[#f5f5f5] p-2 rounded-full mb-6">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service)}
              className={`px-5 py-2 rounded-full font-[MaxOT] border transition
                ${
                  activeService.id === service.id
                    ? "bg-[#BE0010] text-white border-[#BE0010]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-xl sm:text-2xl font-[MaxOT] text-[#E63946] mb-3">
            {activeService.title}
          </h3>

          <p className="text-gray-700 mb-4 leading-relaxed">
            {activeService.intro}
          </p>

          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            {activeService.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          {activeService.note && (
            <p className="mt-4 text-gray-800 font-medium font-[MaxOT]">
              {activeService.note}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
