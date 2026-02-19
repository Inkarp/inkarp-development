import React from "react";

// Tailwind-based single-file React component
// Drop into your project (e.g., src/components/InkarpProductProfile.jsx)
// Ensure Tailwind is configured. Images/QRs can be swapped to your asset paths.

const stats = ["14+ Branches", "46+ Global Brands", "100+ Cities"];

const north = `Delhi, Chandigarh, Lucknow, Varanasi, Kanpur, Jaipur, Jodhpur, Dehradun, Roorkee, Amritsar, Ludhiana, Srinagar, Jammu, Shimla, Solan & more…`;
const east = `Kolkata, Durgapur, Siliguri, Bhubaneswar, Cuttack, Rourkela, Patna, Gaya, Muzaffarpur, Ranchi, Jamshedpur, Dhanbad, Guwahati, Dibrugarh, Gangtok, Shillong, Agartala, Imphal, Aizawl & more…`;
const central = `Bhopal, Indore, Jabalpur, Gwalior, Raipur, Bhilai, Bilaspur & more…`;
const south = `Bengaluru, Mangalore, Mysore, Chennai, Coimbatore, Madurai, Trichy, Thiruvarur, Cuddalore, Puducherry, Hyderabad, Visakhapatnam, Vijayawada, Tirupati, Nellore, Thiruvananthapuram, Kochi, Kozhikode, Kollam, Salem, Erode, Karur & more…`;
const west = `Mumbai, Pune, Nagpur, Aurangabad, Ahmedabad, Vadodara, Surat, Rajkot, Udaipur, Kota, Goa & more…`;

const SectionKicker = ({ children }) => (
  <div className="text-[#be0010] font-semibold uppercase tracking-[0.18em] text-[0.8rem]">{children}</div>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-[#111] border border-white/10 rounded-2xl p-5 ${className}`}>{children}</div>
);

const List = ({ items }) => (
  <ul className="divide-y divide-white/10">
    {items.map((li, i) => (
      <li key={i} className="py-2">{li}</li>
    ))}
  </ul>
);

const CountryItem = ({ title, badge, note }) => (
  <div className="rounded-xl border border-white/10 bg-[#1a1a1a] p-4">
    <h4 className="text-[#be0010] font-semibold">
      {title}
      {badge && (
        <span className="ml-2 inline-flex items-center gap-1 rounded-full border border-[#be0010]/35 bg-[#be0010]/15 px-2 py-0.5 text-white text-[0.8rem]">
          {badge}
        </span>
      )}
    </h4>
    {note && <div className="text-white/70">{note}</div>}
  </div>
);

const QR = ({ src, title, subtitle }) => (
  <div className="grid grid-cols-[80px,1fr] items-center gap-3">
    {/* Swap 'src' with your actual path */}
    <img src={src} alt={title} className="h-20 w-20 rounded-lg object-cover border border-white/10" />
    <div>
      <strong className="block text-white">{title}</strong>
      <div className="text-white/70">{subtitle}</div>
    </div>
  </div>
);

export default function ProductProfile() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white text-black">
      <main>
        {/* Hero */}
        <section className="py-16">
          <div className="mx-auto max-w-[1200px] px-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-black/80">
              Celebrating <strong className="text-black">40+ Years</strong> of Excellence • Since 1985
            </div>
            <h1 className="mt-3 text-[clamp(28px,4vw,52px)] font-[MaxOT] font-black leading-tight">
              Empowering Scientific Innovation <br className="sr-only" />
              with <span className="text-[#be0010]">Trusted Solutions</span>
            </h1>
            <p className="text-[clamp(16px,2vw,20px)] text-black">Premium instruments • Expert service • Nationwide presence</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {stats.map((s) => (
                <div key={s} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-1 text-white/80">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-10">
          <div className="mx-auto max-w-[1200px] px-4">
            <SectionKicker>About Inkarp</SectionKicker>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <Card>
                <p>
                  Inkarp is a leading distributor of scientific instruments, serving researchers and laboratories across India. For over
                  four decades, we have represented 46+ globally renowned brands covering analytical instruments, life science solutions,
                  and industrial technologies. Our mission is to empower scientific discovery with high‑quality instruments, excellent
                  customer support, and unmatched technical expertise. We cater to both pharmaceutical and non‑pharma sectors, enabling
                  scientists to access the latest technologies and accelerate their work.
                </p>
              </Card>
              <Card>
                <h3 className="mb-2 text-[#be0010] text-xl font-semibold">Key Highlights</h3>
                <List
                  items={[
                    "40+ years of excellence and trust",
                    "Pan‑India presence with 14 branches and 100+ cities served",
                    "46+ global brands represented in India",
                    "Diverse portfolio addressing R&D, QC, production, and academia",
                  ]}
                />
                <p className="mt-3 text-sm text-white/70">
                  “We don’t just sell instruments—<em>we enable possibilities and shape progress</em>.”
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section id="expertise" className="py-10">
          <div className="mx-auto max-w-[1200px] px-4">
            <SectionKicker>What We Do</SectionKicker>
            <h2 className="mb-3 text-[clamp(22px,2.6vw,34px)] font-extrabold">Our Core Expertise</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["Sales & Service of Scientific Instruments", "Supplying advanced research equipment for laboratories and industrial use through trusted global partnerships."],
                ["Customized Solutions", "Tailor‑made solutions aligned to specific research workflows across diverse industries."],
                ["Technical Service & Support", "End‑to‑end support: installation, qualification, maintenance, troubleshooting, and training across India."],
                ["Training & Knowledge Sharing", "Empowering scientists and Inkarp’ians with hands‑on training to enhance productivity and data quality."],
              ].map(([title, desc]) => (
                <Card key={title}>
                  <h3 className="mb-1 text-[#be0010] text-lg font-semibold">{title}</h3>
                  <p className="text-white/90">{desc}</p>
                </Card>
              ))}
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Card>
                <h3 className="mb-1 text-[#be0010] text-lg font-semibold">Our Mission</h3>
                <p>Deliver excellence in technology and service—helping researchers achieve their goals and create meaningful industry impact.</p>
              </Card>
              <Card>
                <h3 className="mb-1 text-[#be0010] text-lg font-semibold">Our Vision</h3>
                <p>Be the preferred partner for scientific and industrial solutions—known for expertise, reliability, and innovation.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Brands */}
        <section id="brands" className="py-10">
          <div className="mx-auto max-w-[1200px] px-4">
            <SectionKicker>Explore</SectionKicker>
            <h2 className="mb-3 text-[clamp(22px,2.6vw,34px)] font-extrabold">Global Brands Represented in India</h2>
            <div className="grid gap-3 md:grid-cols-2">
              <CountryItem title="Germany" badge="Heidolph, Bruker, Sartorius, Zeiss, Hermle, ECOM, NenoVision, Thermo Fisher, Implen, AP Mini Plant" note="…and more" />
              <CountryItem title="United Kingdom" badge="Radleys, BWB Technologies" note="accelerating chemistry" />
              <CountryItem title="United States & Canada" badge="PolyScience, Maccor, Sonics & Materials, ProScientific, RareCyte, Azenta" />
              <CountryItem title="France & Spain" badge="Advion Interchim Scientific, Hawk Biosystems" />
              <CountryItem title="Italy & Netherlands" badge="GEA Niro Soavi, LUMICKS" />
              <CountryItem title="Switzerland & Czech Republic" badge="Chemspeed, Nanosurf" />
              <CountryItem title="Hungary" badge="Labomatic" />
              <CountryItem title="Japan & South Korea" badge="Hohsen Corp., Hitachi High‑Tech, Kubota, Jeio Tech" />
              <CountryItem title="India" badge="Labstation i" />
            </div>
          </div>
        </section>

        {/* Products (Accordion) */}
        <section id="products" className="py-10">
          <div className="mx-auto max-w-[1200px] px-4">
            <SectionKicker>Catalogue</SectionKicker>
            <h2 className="mb-2 text-[clamp(22px,2.6vw,34px)] font-extrabold">Products by Industry</h2>
            <p className="text-white/70">Browse instruments curated for your sector. Expand an industry to view relevant solutions.</p>

            <div className="mt-4 space-y-3">
              {/* Pharmaceuticals */}
              <details className="overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a]" open>
                <summary className="cursor-pointer list-none px-4 py-3 font-semibold hover:bg-white/5 [&::-webkit-details-marker]:hidden">
                  Pharmaceuticals – R&D, QC & Production
                </summary>
                <div className="px-4 pb-4">
                  <List
                    items={[
                      "Rotary Evaporators (Heidolph)",
                      "Jacketed Lab Reactors & Parallel Synthesizers (Radleys; Starfish, Heat‑On)",
                      "HPLC / UPLC / SFC Systems (Waters, ECOM, Labomatic, Advion Interchim)",
                      "LC‑MS Systems (Waters Corporation; Advion Interchim)",
                      "Titrators, pH / Conductivity / Density / Moisture (Mettler Toledo)",
                      "FT‑IR / FT‑NIR / Raman Spectrometers & Microscopes (Bruker)",
                      "Thermal Analysis – DSC, TGA, DMA, TMA (Hitachi High‑Tech)",
                      "Incubators, Shakers, Ovens, Stability Chambers (Being, Jeio Tech)",
                      "Water Purification Systems (Sartorius)",
                      "Autoclaves & Biosafety Cabinets (Jeio Tech, Being)",
                      "Ultrasonic Processors & Baths (Sonics & Materials; Bandelin, Jeio Tech)",
                      "Fraction Collectors & Sample Prep Systems (Labomatic, ECOM, Khimod)",
                    ]}
                  />
                </div>
              </details>

              {/* Biotechnology */}
              <details className="overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a]">
                <summary className="cursor-pointer list-none px-4 py-3 font-semibold hover:bg-white/5 [&::-webkit-details-marker]:hidden">
                  Biotechnology – Molecular Biology & Bioprocess
                </summary>
                <div className="px-4 pb-4">
                  <List
                    items={[
                      "DNA/RNA & Protein Quantification (Implen NanoPhotometer; OD600)",
                      "CO₂ & Tri‑Gas Incubators, Stackable Shaking Incubators (Being, Jeio Tech)",
                      "Benchtop Centrifuges – Refrigerated & High‑Speed (Hermle, Kubota)",
                      "Laminar Flow & Biosafety Cabinets (Being)",
                      "Microscopy – Confocal, Fluorescence, Stereo Zoom (Zeiss)",
                      "Liquid Biopsy & Cell Analysis (RareCyte)",
                      "Water Baths & Shaking Water Baths (Being, PolyScience, Jeio Tech)",
                      "UV/VIS Spectrophotometers (Implen, Mettler Toledo)",
                    ]}
                  />
                </div>
              </details>

              {/* Clinical */}
              <details className="overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a]">
                <summary className="cursor-pointer list-none px-4 py-3 font-semibold hover:bg-white/5 [&::-webkit-details-marker]:hidden">
                  Clinical & Diagnostics – Pathology & Testing
                </summary>
                <div className="px-4 pb-4">
                  <List
                    items={[
                      "CO₂ / Tri‑Gas Incubators & Refrigerated Incubators (Being)",
                      "Refrigerators, Deep Freezers, ULT −86°C Freezers (Being)",
                      "Autoclaves & Sterilizers (Jeio Tech)",
                      "Water Purification (Sartorius)",
                      "Centrifuges (Hermle, Kubota)",
                      "Spectrophotometry – UV/VIS, OD600 (Implen, Mettler Toledo)",
                      "Microscopy (Zeiss)",
                    ]}
                  />
                </div>
              </details>

              {/* Battery & Energy */}
              <details className="overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a]">
                <summary className="cursor-pointer list-none px-4 py-3 font-semibold hover:bg-white/5 [&::-webkit-details-marker]:hidden">
                  Battery & Energy – Cell Fabrication & Testing
                </summary>
                <div className="px-4 pb-4">
                  <List
                    items={[
                      "Battery Testing Equipment & Test Cells (Hohsen Corp.)",
                      "Roll Press, Doctor Blade, Small Coating Machine (Hohsen Corp.)",
                      "Coin Cell Parts, Crimpers & Disassembler (Hohsen Corp.)",
                      "Resistance Welder & Digital Micrometers (Hohsen Corp.)",
                      "Environmental Chambers – Humidity & Temperature (Being)",
                    ]}
                  />
                </div>
              </details>

              {/* Materials */}
              <details className="overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a]">
                <summary className="cursor-pointer list-none px-4 py-3 font-semibold hover:bg-white/5 [&::-webkit-details-marker]:hidden">
                  Materials, Polymers & Process
                </summary>
                <div className="px-4 pb-4">
                  <List
                    items={[
                      "Thermal Analysis – DSC, TGA, DMA, TMA (Hitachi High‑Tech)",
                      "Rheometers & Viscometers (Thermo Fisher, Being)",
                      "High Pressure Homogenizers (GEA Niro Soavi)",
                      "Chillers & Cryogenic Baths (PolyScience; Being)",
                      "Muffle & Vacuum Ovens (Being, Jeio Tech)",
                      "Ultrasonic Processors (Sonics & Materials)",
                    ]}
                  />
                </div>
              </details>

              {/* Synthesis */}
              <details className="overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a]">
                <summary className="cursor-pointer list-none px-4 py-3 font-semibold hover:bg-white/5 [&::-webkit-details-marker]:hidden">
                  Synthesis & Flow Chemistry
                </summary>
                <div className="px-4 pb-4">
                  <List
                    items={[
                      "Automated Formulation & Synthesis Workstations (Chemspeed)",
                      "Flow Chemistry Instruments & H₂ Generator (ThalesNano)",
                      "Jacketed Reactors, Parallel Synthesis, Heat‑On Blocks (Radleys)",
                      "Rotary Evaporators, Overhead & Magnetic Stirrers (Heidolph)",
                      "Air‑Cooled Condensers – Findenser; Cool‑It Bowls (Radleys)",
                    ]}
                  />
                </div>
              </details>

              {/* Chromatography */}
              <details className="overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a]">
                <summary className="cursor-pointer list-none px-4 py-3 font-semibold hover:bg-white/5 [&::-webkit-details-marker]:hidden">
                  Chromatography & Sample Preparation
                </summary>
                <div className="px-4 pb-4">
                  <List
                    items={[
                      "HPLC / UPLC / Flash / TLC Systems (Waters, ECOM, Labomatic, Advion Interchim)",
                      "Chromatography Columns & Custom Systems (Labomatic, ECOM)",
                      "Autosamplers & Fraction Collectors (Labomatic, ECOM)",
                      "Sample Preparation Systems (ECOM, Khimod)",
                      "Water Purification for LC (Sartorius)",
                    ]}
                  />
                </div>
              </details>

              {/* Microscopy */}
              <details className="overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a]">
                <summary className="cursor-pointer list-none px-4 py-3 font-semibold hover:bg-white/5 [&::-webkit-details-marker]:hidden">
                  Microscopy & Imaging
                </summary>
                <div className="px-4 pb-4">
                  <List
                    items={[
                      "SEM, Confocal, Fluorescence, Stereo Zoom (Zeiss)",
                      "AFM & AFM‑in‑SEM (Nanosurf; NenoVision)",
                      "Hyperspectral Imaging (Photon Etc.)",
                      "Optical Tweezers (LUMICKS)",
                    ]}
                  />
                </div>
              </details>

              {/* Environmental */}
              <details className="overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a]">
                <summary className="cursor-pointer list-none px-4 py-3 font-semibold hover:bg-white/5 [&::-webkit-details-marker]:hidden">
                  Environmental & Remote Sensing
                </summary>
                <div className="px-4 pb-4">
                  <List items={["Remote Sensing – Atmospheric & Environmental (Bruker)", "Gas Analysers (Bruker)"]} />
                </div>
              </details>

              {/* Academics */}
              <details className="overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a]">
                <summary className="cursor-pointer list-none px-4 py-3 font-semibold hover:bg-white/5 [&::-webkit-details-marker]:hidden">
                  Academics & Education – Teaching Labs
                </summary>
                <div className="px-4 pb-4">
                  <List
                    items={[
                      "Benchtop NMR (Nanalysis)",
                      "General Lab – Incubators, Shakers, Ovens, Water Baths (Being, Jeio Tech, PolyScience)",
                      "UV/VIS & Basic Electrochemistry (Implen, Mettler Toledo)",
                      "Microscopy Suites (Zeiss)",
                    ]}
                  />
                </div>
              </details>

              {/* Safety */}
              <details className="overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a]">
                <summary className="cursor-pointer list-none px-4 py-3 font-semibold hover:bg-white/5 [&::-webkit-details-marker]:hidden">
                  Safety & Utilities
                </summary>
                <div className="px-4 pb-4">
                  <List
                    items={[
                      "Ductless Fume Hoods (Jeio Tech)",
                      "Safety Containers – Cans & Barrels (Rotzmeier)",
                      "Glovebox & Purge Box (Labstation i)",
                      "Water Purification (Sartorius)",
                      "Vacuum Pumps & Controllers (Being; Heidolph)",
                    ]}
                  />
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section id="industries" className="py-10">
          <div className="mx-auto max-w-[1200px] px-4">
            <SectionKicker>Sectors</SectionKicker>
            <h2 className="mb-3 text-[clamp(22px,2.6vw,34px)] font-extrabold">Industries We Cater To</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Pharmaceuticals", "Instruments for drug discovery, R&D, QC, and scale‑up production."],
                ["Biotechnology", "Tools for genetic research, molecular biology, bioprocessing, and innovation labs."],
                ["R&D Laboratories", "Solutions for academic and private labs focused on discovery and analysis."],
                ["Clinical & Diagnostics", "Pathology and molecular testing instrumentation for hospitals and labs."],
                ["Food & Beverage", "Quality, safety, and formulation testing solutions for F&B."],
                ["Healthcare Institutions", "Reliable instruments supporting patient care and diagnostics."],
                ["Govt. & Regulatory", "Compliance tools for public health monitoring agencies and test labs."],
                ["Educational Institutions", "Turnkey lab setups for teaching, training, and practical learning."],
                ["Environmental Testing", "Water, air, and soil testing to support sustainability goals."],
                ["Contract Research (CROs)", "Comprehensive tools for outsourced research in pharma, biotech, and diagnostics."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-xl border border-white/10 bg-[#1a1a1a] p-4">
                  <h3 className="text-lg font-semibold text-[#be0010]">{t}</h3>
                  <p className="text-white/90">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CATALYSTCue */}
        <section id="catalystcue" className="py-10">
          <div className="mx-auto max-w-[1200px] px-4">
            <SectionKicker>Community</SectionKicker>
            <h2 className="mb-3 text-[clamp(22px,2.6vw,34px)] font-extrabold">CATALYSTCue – A Platform for Scientific Exchange</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-[#be0010]/10 p-5">
                <h3 className="mb-2 text-lg font-semibold">Why It’s Relevant</h3>
                <List
                  items={[
                    "Learn from peers: credible, experience‑based insights.",
                    "Stay updated: latest innovations and techniques.",
                    "Share your work: publish achievements and use cases.",
                    "Strengthen collaboration: connect with like‑minded experts.",
                  ]}
                />
              </div>
              <Card>
                <h3 className="mb-2 text-lg font-semibold">What It Offers</h3>
                <List items={["Application Notes & Technical Insights", "Customer Success Stories", "Expert Perspectives & Interviews", "Innovation Highlights"]} />
                <p className="mt-3 text-sm text-white/70">Want to contribute? Share your story and we’ll feature it.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Reach */}
        <section id="reach" className="py-10">
          <div className="mx-auto max-w-[1200px] px-4">
            <SectionKicker>Presence</SectionKicker>
            <h2 className="mb-3 text-[clamp(22px,2.6vw,34px)] font-extrabold">Our Reach Across India</h2>
            <p className="text-white/70">Growing presence in 100+ cities and towns for timely support, delivery, and engagement.</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Card>
                <h3 className="mb-1 text-lg font-semibold text-[#be0010]">Key Locations – North India</h3>
                <p>{north}</p>
                <h3 className="mt-3 mb-1 text-lg font-semibold text-[#be0010]">East India</h3>
                <p>{east}</p>
                <h3 className="mt-3 mb-1 text-lg font-semibold text-[#be0010]">Central India</h3>
                <p>{central}</p>
              </Card>
              <Card>
                <h3 className="mb-1 text-lg font-semibold text-[#be0010]">South India</h3>
                <p>{south}</p>
                <h3 className="mt-3 mb-1 text-lg font-semibold text-[#be0010]">West India</h3>
                <p>{west}</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Connect */}
        <section id="connect" className="py-10">
          <div className="mx-auto max-w-[1200px] px-4">
            <SectionKicker>Stay Connected</SectionKicker>
            <h2 className="mb-3 text-[clamp(22px,2.6vw,34px)] font-extrabold">Get Instant Updates</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <h3 className="mb-2 text-lg font-semibold text-[#be0010]">Quick Access Links</h3>
                <List
                  items={[
                    "Explore our full range of solutions",
                    "Applications & events – get inspired",
                    "Product videos and tutorials",
                    "Follow scientific updates and innovations",
                  ]}
                />
              </Card>
              <Card>
                {/* Replace placeholder src values with your real assets */}
                <div className="space-y-3">
                  <QR src="/assets/qr/website.png" title="Website" subtitle="www.inkarp.co.in" />
                  <QR src="/assets/qr/catalog.png" title="Product Profile" subtitle="Download the latest catalogue" />
                  <QR src="/assets/qr/social.png" title="Social Channels" subtitle="Follow for updates" />
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-10">
          <div className="mx-auto max-w-[1200px] px-4">
            <SectionKicker>Contact</SectionKicker>
            <h2 className="mb-3 text-[clamp(22px,2.6vw,34px)] font-extrabold">Reach Out for Support</h2>
            <div className="grid gap-4 lg:grid-cols-2">
              <Card>
                <h3 className="mb-2 text-lg font-semibold text-[#be0010]">Head Office (Hyderabad)</h3>
                <p>
                  <strong>Address:</strong> Plot No - 5A/10-11 3rd Floor, IDA Nacharam Road No. 1, Chilka Nagar Main Rd, Nacharam, Hyderabad,
                  Telangana 500076
                </p>
                <p>
                  <strong>Phone:</strong> <a href="tel:+919966634008" className="text-[#be0010] hover:underline">9966634008</a>
                </p>
                <p>
                  <strong>Email:</strong> <a href="mailto:info@inkarp.co.in" className="text-[#be0010] hover:underline">info@inkarp.co.in</a>
                </p>
              </Card>

              <Card>
                <h3 className="mb-4 text-lg font-semibold text-[#be0010]">Enquiry Form</h3>
                {/* No backend wired; attach your handler as needed */}
                <form className="grid grid-cols-1 gap-3 md:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
                  {[
                    { id: "name", label: "Name", required: true, type: "text", autoComplete: "name" },
                    { id: "company", label: "Company Name", type: "text", autoComplete: "organization" },
                    { id: "designation", label: "Designation", type: "text", autoComplete: "job-title" },
                    { id: "department", label: "Department", type: "text", autoComplete: "organization-title" },
                    { id: "email", label: "Email", required: true, type: "email", autoComplete: "email" },
                    { id: "contact", label: "Contact", required: true, type: "tel", autoComplete: "tel" },
                    { id: "state", label: "State", type: "text", autoComplete: "address-level1" },
                    { id: "city", label: "City", type: "text", autoComplete: "address-level2" },
                  ].map(({ id, label, required, type, autoComplete }) => (
                    <label key={id} htmlFor={id} className="flex flex-col gap-1 text-white/80">
                      <span className="text-sm font-semibold text-white/70">
                        {label} {required && <span className="text-[#be0010]" aria-hidden> *</span>}
                      </span>
                      <input
                        id={id}
                        name={id}
                        type={type}
                        required={Boolean(required)}
                        autoComplete={autoComplete}
                        className="rounded-xl border border-white/10 bg-[#111] px-3 py-2 text-white outline-none focus:border-[#be0010] focus:ring-4 focus:ring-[#be0010]/35"
                      />
                    </label>
                  ))}

                  <label htmlFor="required_product" className="col-span-full flex flex-col gap-1 text-white/80">
                    <span className="text-sm font-semibold text-white/70">
                      Required Product <span className="text-[#be0010]" aria-hidden> *</span>
                    </span>
                    <input
                      id="required_product"
                      name="required_product"
                      type="text"
                      required
                      className="rounded-xl border border-white/10 bg-[#111] px-3 py-2 text-white outline-none focus:border-[#be0010] focus:ring-4 focus:ring-[#be0010]/35"
                    />
                  </label>

                  <label htmlFor="description" className="col-span-full flex flex-col gap-1 text-white/80">
                    <span className="text-sm font-semibold text-white/70">Description</span>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      placeholder="Tell us briefly about your requirement..."
                      className="rounded-xl border border-white/10 bg-[#111] px-3 py-2 text-white outline-none focus:border-[#be0010] focus:ring-4 focus:ring-[#be0010]/35"
                    />
                  </label>

                  <div className="col-span-full">
                    <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-[#be0010] px-4 py-2 font-semibold text-white transition hover:bg-white hover:text-[#be0010]">
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}