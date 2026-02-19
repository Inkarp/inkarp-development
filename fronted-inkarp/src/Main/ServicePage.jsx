import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ServiceBannerImage from "/src/assets/Service/BannerImage.jpg";
import ServiceAbout from "../components/pages/Service/ServiceAbout";
import PickNew from "../components/pages/Service/PickNew";
import ServiceParts from "../components/pages/Service/ServiceParts";
import ServiceTabs from "../components/pages/Service/ServiceTabs";
import ServiceContactForm from "../components/pages/Service/ServiceContactForm";

export default function ServicePage() {
    return (
        <div className="relative w-full overflow-hidden">
            <Helmet>
                <title>
                    Inkarp Services | Scientific Instrument Installation, Maintenance &amp;
                    Support in India
                </title>
                <meta
                    name="description"
                    content="Discover Inkarp’s trusted service solutions for scientific instruments in India. From product installation and technical support to preventive maintenance, AMCs, and genuine spare parts, we ensure reliable performance and smooth research operations. Backed by 40+ years of expertise and nationwide service teams."
                />
                <link rel="canonical" href="https://inkarp.co.in/services" />
            </Helmet>

            {/* Banner Section */}
            <div className="relative h-full w-full rounded-2xl mb-6">
                <img
                    src={ServiceBannerImage}
                    alt="Inkarp_Service"
                    className="w-full h-full object-cover object-center p-2 rounded-2xl"
                />
            </div>
            <div className=" border-l-4 border-[#E63946] w-[95%] mx-auto p-3 rounded-xl shadow-sm mb-8">
                <p className=" text-lg leading-relaxed font-[MaxOT]">
                    At Inkarp Instruments, service is more than just support—it is the backbone of our partnership with scientists, researchers, and industries across India.
                    For over 40 years, we have delivered world-class instruments backed by one of the most trusted service networks in the country.
                    Our factory-trained engineers, application specialists, and service managers ensure smooth research journeys with quick response times, genuine spares, and expert technical care from installation to long-term maintenance.
                </p>

                <p className="text-[#E63946] text-lg leading-relaxed mt-4 font-[MaxOT]">
                    Every lab is unique, and so are its needs. That’s why our service portfolio covers installation, technical support, preventive care, long-term maintenance, and spares replacement.
                    With Inkarp, you don’t just buy an instrument—you invest in a partnership built on performance, reliability, and trust.
                </p>

                <p className="text-gray-800 text-lg leading-relaxed mt-4 font-medium">
                    Below are the five major types of services we provide, each crafted to meet the real-world demands of laboratories and industries across India.
                </p>
            </div>
            <div className="space-y-3">
                <ServiceTabs />
                <ServiceAbout />
                {/* <PickNew /> */}
                {/* <ServiceParts /> */}             
                <ServiceContactForm />
            </div>
        </div>
    );
}
