import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import InkarpLogo from '/InkarpLogo.svg';
import CatalystLogo from '/CatalystNew.svg';

import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const formRef = useRef(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://inkarp-luof.onrender.com/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const contentType = response.headers.get('content-type');
      const data = contentType?.includes('application/json') ? await response.json() : {};

      if (response.ok) {
        setStatus({ type: 'success', message: data.message || 'Thank you for subscribing!' });
        setEmail('');
        formRef.current?.classList.add('done');
        setTimeout(() => formRef.current?.classList.remove('done'), 4000);
      } else {
        throw new Error(data.message || 'Subscription failed');
      }
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Failed to subscribe. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="relative w-full max-w-[1250px] mx-auto mt-2 rounded-2xl border border-[#F1F1F1] bg-white shadow-sm overflow-hidden text-gray-600">
      {/* soft background wash */}
      <div className="pointer-events-none absolute inset-0 -z/10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.05),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(190,0,16,0.05),transparent)]" />
      {/* Main Footer */}
      <div className="px-8 sm:px-6 md:px-8 py-6 md:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* About */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start">
              <img
                className="h-12 sm:h-14 md:h-16 xl:h-20 w-auto rounded-md p-1.5 sm:p-2"
                src={InkarpLogo}
                alt="Inkarp Logo"
                title="Inkarp"
              />
            </div>
            <p className="text-sm sm:text-base font-[Roboto] text-gray-600 leading-relaxed max-w-3xl mx-auto lg:mx-0 p-2">
              Established in 1985, Inkarp is a trusted name in the scientific instrument industry,
              offering comprehensive research solutions and exceptional after-sales support. With a robust presence in
              India, we're a go-to choice for a diverse range of sectors. Our enduring partnerships with major
              manufacturers globally ensure sustained customer support.
            </p>
            {/* Socials */}
            <div className="flex flex-col items-start justify-center gap-2">
              <div className='flex justify-center items-center gap-3'>
                <h3 className="text-lg  text-[#E63946] font-[MaxOT]">
                  Subscribe to our Newsletter
                </h3>
                <a
                  href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7322902933266739203"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to Inkarp on LinkedIn"
                  className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-6 sm:px-8 rounded-full text-white font-semibold shadow-sm transition-all duration-300 hover:scale-[1.015] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E63946]/40"
                  style={{ backgroundImage: 'linear-gradient(90deg,#BE0010,#E63946)' }}
                >
                  {/* LinkedIn icon (inline SVG) */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    className="w-5 h-5" aria-hidden="true" focusable="false">
                    <path fill="currentColor"
                      d="M100.28 448H7.4V149.1h92.88zm-46.44-340C24.05 108 0 83.77 0 54.5A54.5 54.5 0 0 1 108.93 54.5c0 29.27-24.05 53.5-54.09 53.5zM447.9 448h-92.38V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.6V448h-92.5V149.1h88.8v40.8h1.3c12.4-23.6 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                  <span className='whitespace-nowrap overflow-hidden text-ellipsis'>Click Here</span>
                </a>
              </div>
              <div className='flex  justify-center items-center gap-3'>
                <h3 className="text-lg  text-[#E63946] font-[MaxOT]">Follow Us</h3>
                <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
                  {[
                    { href: "https://www.instagram.com/inkarpinstruments", Icon: FaInstagram, label: 'Instagram' },
                    { href: "https://www.facebook.com/Inkarp", Icon: FaFacebookF, label: 'Facebook' },
                    { href: "https://www.linkedin.com/company/inkarp/posts/?feedView=all", Icon: FaLinkedinIn, label: 'LinkedIn' },
                    { href: "https://www.youtube.com/@InkarpInstrument/videos", Icon: FaYoutube, label: 'YouTube' },
                    { href: "https://wa.me/918125580808", Icon: FaWhatsapp, label: 'WhatsApp' },
                  ].map(({ href, Icon, label }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-[#F5F5F5] rounded-full border border-[#E63946]/40 flex items-center justify-center shadow-sm transition-all hover:scale-105 hover:bg-[#Be0010] focus:outline-none focus:ring-2 focus:ring-[#E63946]/30"
                      aria-label={label}
                    >
                      <Icon className="hover:text-white text-[#BE0010]" size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* Subscribe */}
          </div>
          {/* Links + Contact */}
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start justify-items-center md:justify-items-start max-w-5xl w-full">
              {/* Quick Links */}
              <div className="text-center md:text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl text-[#E63946] mb-3 font-[MaxOT]">
                  Quick Links
                </h3>
                <div className="w-20 h-[2px] bg-gradient-to-r from-[#BE0010] to-[#E63946] mx-auto md:mx-0 mb-3" />
                <div className="space-y-2 text-sm sm:text-base">
                  {[
                    { name: "Home", path: "/" },
                    { name: "Our Story", path: "/our-story" },
                    { name: "Verticals", path: "/verticals" },
                    { name: "Contact Us", path: "/contact" },
                    { name: "Blog", path: "/blog" },
                    { name: "News & Events", path: "/news-events" },
                    { name: "Careers", path: "/careers" },
                  ].map((link, index) => (
                    <div key={index} className="font-[Roboto]">
                      <Link
                        to={link.path}
                        className="text-gray-600 hover:text-[#E63946] transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </div>
                  ))}

                  <div className="flex justify-center md:justify-start">
                    <Link
                      to="/catalystcue"
                      className="hover:opacity-90 transition-opacity"
                    >
                      <img
                        src={CatalystLogo}
                        alt="Catalyst Cue"
                        className="w-28 h-10 object-contain"
                        loading="lazy"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="text-center md:text-left px-10">
                <h3 className="text-lg sm:text-xl md:text-2xl text-[#E63946] mb-3 font-[MaxOT]">
                  Contact Us
                </h3>
                <div className="w-20 h-[2px] bg-gradient-to-r from-[#BE0010] to-[#E63946] mx-auto md:mx-0 mb-3" />
                <ul className="space-y-3 text-sm sm:text-base font-[Roboto]">
                  <a
                    href="https://share.google/5X8PVb3EBT0Ldo02y"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li className="flex items-start justify-center md:justify-start gap-2 text-gray-600 hover:text-[#E63946] transition-colors duration-200">
                      <MapPin
                        size={18}
                        className="min-w-[18px] mt-0.5 text-[#E63946]"
                      />
                      <span className="leading-relaxed">
                        Inkarp Instruments Pvt Ltd, Plot No - 5A/10-11, 3rd Floor, IDA
                        Nacharam Road No. 1, Nacharam - Chilka Nagar Road, Hyderabad –
                        500076
                      </span>
                    </li>
                  </a>
                  <li className="flex items-center justify-center md:justify-start gap-2">
                    <Phone size={18} className="min-w-[18px] text-[#E63946]" />
                    <a
                      href="tel:+918125580808"
                      className="text-gray-600 hover:text-[#E63946] transition-colors duration-200"
                    >
                      +91 8125580808
                    </a>
                  </li>
                  <li className="flex items-center justify-center md:justify-start gap-2">
                    <Mail size={18} className="min-w-[18px] text-[#E63946]" />
                    <a
                      href="mailto:info@inkarp.co.in"
                      className="text-gray-600 hover:text-[#E63946] transition-colors duration-200"
                    >
                      info@inkarp.co.in
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black/90 text-white border-t-[3px] border-t-[#E63946] py-4 text-sm w-[96%] max-w-[1300px] mx-auto rounded-t-full shadow-inner">
        <div className="px-4 sm:px-6 md:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p className="text-gray-300">
              © {new Date().getFullYear()} <span className="text-white">Inkarp</span>. All Rights Reserved.
            </p>
            <ul className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-4 text-xs sm:text-sm">
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-gray-300 hover:text-white hover:underline hover:decoration-[#BE0010] transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-white hover:underline hover:decoration-[#BE0010] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
