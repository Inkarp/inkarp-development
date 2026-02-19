import React, { useMemo, useState } from "react";

// ServiceParts (JS only, React) — Inkarp Theme
// - Principal tabs (scrollable)
// - Search/filter, result count
// - Sticky header table with zebra rows
// - Copy part number / copy row
// - Export CSV of current view
// - Mobile-friendly card layout fallback
// - Tailwind only, no external libs

export default function ServiceParts() {
  // Brand tokens
  const INKARP_RED = "#BE0010";
  const INKARP_BLUE = "#04517f";

  const principals = [
    "Heidolph",
    "Bruker",
    "Inkarp",
    "Hitachi",
    "Sonics",
    "Mettler",
    "Being",
    "Radleys",
    "PXI",
    "ThalesNano",
    "Labstation",
    "BDS",
    "Kubota",
    "Innova",
    "Hermle",
    "HSN",
  ];

  // --- DATA (10 each) -------------------------------------------------------
  const productData = {
    Heidolph: [
      { partNumber: "02-01-19-05-01-0", name: "Screw M5x12 ISO4762 DINA2-70" },
      { partNumber: "02-01-20-05-02-0", name: "Threaded pin screw M5x16" },
      { partNumber: "02-01-39-03-12-0", name: "Screw K30x8 A2 Torx" },
      { partNumber: "02-01-52-03-00-0", name: "Screw M3x8-A2 DIN34805-2 Torx" },
      { partNumber: "02-01-52-03-01-0", name: "Screw M3x6" },
      { partNumber: "02-01-52-04-00-0", name: "Screw M4x8-A2 DIN34805-2 Torx" },
      { partNumber: "02-01-55-04-05-0", name: "Screw M4x10-A2 ISO14583 TORX" },
      { partNumber: "02-01-55-04-07-0", name: "Screw M4x60-A2 ISO14583 Torx" },
      { partNumber: "02-01-56-04-03-1", name: "Screw M4x8-A2 ISO14581 TORX" },
      { partNumber: "02-01-62-03-02-0", name: "Screw M3x12-A2 ISO14583 Torx" },
    ],
    Radleys: [
      { partNumber: "RAD-001", name: "PTFE Stirrer Guide, M16" },
      { partNumber: "RAD-002", name: "Quick-Release Clamp 24/29" },
      { partNumber: "RAD-003", name: "Thermocouple Pocket 6mm" },
      { partNumber: "RAD-004", name: "Hose Tail 10 mm (Pair)" },
      { partNumber: "RAD-005", name: "Manifold Cap for Reactor-Ready" },
      { partNumber: "RAD-006", name: "Vapour Tube 24/40" },
      { partNumber: "RAD-007", name: "PTFE Stopcock Plug 2-ways" },
      { partNumber: "RAD-008", name: "Baffle Insert 1 L" },
      { partNumber: "RAD-009", name: "Lid O-Ring Viton 7" },
      { partNumber: "RAD-010", name: "Support Rod M10 x 250" },
    ],
    Bruker: [
      { partNumber: "CSPD-101", name: "Pipetting Tip Rack 200 µL" },
      { partNumber: "CSPD-102", name: "Vial Holder 20 mL" },
      { partNumber: "CSPD-103", name: "Syringe 5 mL, Luer-Lock" },
      { partNumber: "CSPD-104", name: "Seal Kit for Deck Plate" },
      { partNumber: "CSPD-105", name: "Needle Assembly 22G" },
      { partNumber: "CSPD-106", name: "Stir Bar PTFE 10 mm" },
      { partNumber: "CSPD-107", name: "Heater Block 24-well" },
      { partNumber: "CSPD-108", name: "Filter Plate 0.2 µm" },
      { partNumber: "CSPD-109", name: "Waste Bottle 2 L" },
      { partNumber: "CSPD-110", name: "Magnet Carrier, Medium" },
    ],
    ThalesNano: [
      { partNumber: "LZC-201", name: "UV Lamp 365 nm" },
      { partNumber: "LZC-202", name: "Safety Goggles UV" },
      { partNumber: "LZC-203", name: "Lamp Starter Kit" },
      { partNumber: "LZC-204", name: "Quartz Cuvette 10 mm" },
      { partNumber: "LZC-205", name: "Cooling Fan Module" },
      { partNumber: "LZC-206", name: "Timer PCB Assembly" },
      { partNumber: "LZC-207", name: "Lamp Holder Bracket" },
      { partNumber: "LZC-208", name: "Shutter Blade Set" },
      { partNumber: "LZC-209", name: "Interlock Key Switch" },
      { partNumber: "LZC-210", name: "Gasket Set for LZC-4" },
    ],
    Hermle: [
      { partNumber: "BRK-301", name: "ATR Crystal Diamond/ZnSe" },
      { partNumber: "BRK-302", name: "Desiccant Cartridge INVENIO" },
      { partNumber: "BRK-303", name: "HeNe Laser Module" },
      { partNumber: "BRK-304", name: "Beam Splitter KBr" },
      { partNumber: "BRK-305", name: "Detector DTGS" },
      { partNumber: "BRK-306", name: "Purge Hose Kit" },
      { partNumber: "BRK-307", name: "Window KBr 38 mm" },
      { partNumber: "BRK-308", name: "Fiber Probe FT-NIR" },
      { partNumber: "BRK-309", name: "Firmware SD Card" },
      { partNumber: "BRK-310", name: "Power Supply 24 V" },
    ],
    Sonics: [
      { partNumber: "SAR-401", name: "Balance Pan Ø120 mm" },
      { partNumber: "SAR-402", name: "Draft Shield Glass Set" },
      { partNumber: "SAR-403", name: "Power Adapter 12 V" },
      { partNumber: "SAR-404", name: "Calibration Weight 200 g F1" },
      { partNumber: "SAR-405", name: "Filter Membrane 0.22 µm" },
      { partNumber: "SAR-406", name: "Pipette Seal Kit" },
      { partNumber: "SAR-407", name: "Pump Tubing 6 mm" },
      { partNumber: "SAR-408", name: "Display Cover Arium" },
      { partNumber: "SAR-409", name: "Door Handle Cubis" },
      { partNumber: "SAR-410", name: "USB Cable Type-B" },
    ],
    Hitachi: [
      { partNumber: "SAR-401", name: "Balance Pan Ø120 mm" },
      { partNumber: "SAR-402", name: "Draft Shield Glass Set" },
      { partNumber: "SAR-403", name: "Power Adapter 12 V" },
      { partNumber: "SAR-404", name: "Calibration Weight 200 g F1" },
      { partNumber: "SAR-405", name: "Filter Membrane 0.22 µm" },
      { partNumber: "SAR-406", name: "Pipette Seal Kit" },
      { partNumber: "SAR-407", name: "Pump Tubing 6 mm" },
      { partNumber: "SAR-408", name: "Display Cover Arium" },
      { partNumber: "SAR-409", name: "Door Handle Cubis" },
      { partNumber: "SAR-410", name: "USB Cable Type-B" },
    ],
    Mettler: [
      { partNumber: "SAR-401", name: "Balance Pan Ø120 mm" },
      { partNumber: "SAR-402", name: "Draft Shield Glass Set" },
      { partNumber: "SAR-403", name: "Power Adapter 12 V" },
      { partNumber: "SAR-404", name: "Calibration Weight 200 g F1" },
      { partNumber: "SAR-405", name: "Filter Membrane 0.22 µm" },
      { partNumber: "SAR-406", name: "Pipette Seal Kit" },
      { partNumber: "SAR-407", name: "Pump Tubing 6 mm" },
      { partNumber: "SAR-408", name: "Display Cover Arium" },
      { partNumber: "SAR-409", name: "Door Handle Cubis" },
      { partNumber: "SAR-410", name: "USB Cable Type-B" },
    ],

    Being: [
      { partNumber: "SAR-401", name: "Balance Pan Ø120 mm" },
      { partNumber: "SAR-402", name: "Draft Shield Glass Set" },
      { partNumber: "SAR-403", name: "Power Adapter 12 V" },
      { partNumber: "SAR-404", name: "Calibration Weight 200 g F1" },
      { partNumber: "SAR-405", name: "Filter Membrane 0.22 µm" },
      { partNumber: "SAR-406", name: "Pipette Seal Kit" },
      { partNumber: "SAR-407", name: "Pump Tubing 6 mm" },
      { partNumber: "SAR-408", name: "Display Cover Arium" },
      { partNumber: "SAR-409", name: "Door Handle Cubis" },
      { partNumber: "SAR-410", name: "USB Cable Type-B" },
    ],

    Labstation: [
      { partNumber: "SAR-401", name: "Balance Pan Ø120 mm" },
      { partNumber: "SAR-402", name: "Draft Shield Glass Set" },
      { partNumber: "SAR-403", name: "Power Adapter 12 V" },
      { partNumber: "SAR-404", name: "Calibration Weight 200 g F1" },
      { partNumber: "SAR-405", name: "Filter Membrane 0.22 µm" },
      { partNumber: "SAR-406", name: "Pipette Seal Kit" },
      { partNumber: "SAR-407", name: "Pump Tubing 6 mm" },
      { partNumber: "SAR-408", name: "Display Cover Arium" },
      { partNumber: "SAR-409", name: "Door Handle Cubis" },
      { partNumber: "SAR-410", name: "USB Cable Type-B" },
    ],

     Innova: [
      { partNumber: "SAR-401", name: "Balance Pan Ø120 mm" },
      { partNumber: "SAR-402", name: "Draft Shield Glass Set" },
      { partNumber: "SAR-403", name: "Power Adapter 12 V" },
      { partNumber: "SAR-404", name: "Calibration Weight 200 g F1" },
      { partNumber: "SAR-405", name: "Filter Membrane 0.22 µm" },
      { partNumber: "SAR-406", name: "Pipette Seal Kit" },
      { partNumber: "SAR-407", name: "Pump Tubing 6 mm" },
      { partNumber: "SAR-408", name: "Display Cover Arium" },
      { partNumber: "SAR-409", name: "Door Handle Cubis" },
      { partNumber: "SAR-410", name: "USB Cable Type-B" },
    ],

     Inkarp: [
      { partNumber: "SAR-401", name: "Balance Pan Ø120 mm" },
      { partNumber: "SAR-402", name: "Draft Shield Glass Set" },
      { partNumber: "SAR-403", name: "Power Adapter 12 V" },
      { partNumber: "SAR-404", name: "Calibration Weight 200 g F1" },
      { partNumber: "SAR-405", name: "Filter Membrane 0.22 µm" },
      { partNumber: "SAR-406", name: "Pipette Seal Kit" },
      { partNumber: "SAR-407", name: "Pump Tubing 6 mm" },
      { partNumber: "SAR-408", name: "Display Cover Arium" },
      { partNumber: "SAR-409", name: "Door Handle Cubis" },
      { partNumber: "SAR-410", name: "USB Cable Type-B" },
    ],

     Kubota: [
      { partNumber: "SAR-401", name: "Balance Pan Ø120 mm" },
      { partNumber: "SAR-402", name: "Draft Shield Glass Set" },
      { partNumber: "SAR-403", name: "Power Adapter 12 V" },
      { partNumber: "SAR-404", name: "Calibration Weight 200 g F1" },
      { partNumber: "SAR-405", name: "Filter Membrane 0.22 µm" },
      { partNumber: "SAR-406", name: "Pipette Seal Kit" },
      { partNumber: "SAR-407", name: "Pump Tubing 6 mm" },
      { partNumber: "SAR-408", name: "Display Cover Arium" },
      { partNumber: "SAR-409", name: "Door Handle Cubis" },
      { partNumber: "SAR-410", name: "USB Cable Type-B" },
    ],


  };

  // state
  const [selectedPrincipal, setSelectedPrincipal] = useState(principals[0]);
  const [query, setQuery] = useState("");

  // derived list
  const products = useMemo(() => {
    const manual = productData[selectedPrincipal] || [];
    if (!query) return manual;
    const q = query.toLowerCase();
    return manual.filter((p) =>
      p.partNumber.toLowerCase().includes(q) || p.name.toLowerCase().includes(q)
    );
  }, [selectedPrincipal, query]);

  // actions
  function copy(text) {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement("textarea");
      ta.value = text; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (e) { }
      document.body.removeChild(ta);
    }
  }

  function toCSV(rows) {
    const header = ["S.No", "Part Number", "Product Name"];
    const lines = rows.map((r, i) => [i + 1, r.partNumber, escapeCSV(r.name)]);
    return [header, ...lines].map((arr) => arr.join(",")).join("\n");
  }

  function escapeCSV(val) {
    if (val == null) return "";
    const s = String(val);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  }

  function downloadCSV() {
    const csv = toCSV(products);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedPrincipal}-service-parts.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // UI helpers
  const Tab = ({ label, active, onClick, count }) => (
    <button
      onClick={onClick}
      className={
        "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all border " +
        (active
          ? "bg-white border-[#BE0010] text-[#BE0010] shadow-sm"
          : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-white")
      }
      aria-pressed={active}
    >
      <span>{label}</span>
      <span className="ml-2 inline-flex items-center justify-center rounded-full bg-gray-200 text-gray-800 text-[10px] px-2 py-0.5 align-middle">
        {count}
      </span>
    </button>
  );

  return (
    <div className="w-[95%] mx-auto bg-[#F5F5F5] border border-gray-200 rounded-2xl ">
      {/* Banner / Heading */}
      <div className="relative isolate overflow-hidden bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-6 pb-3">
          <div className="flex items-center justify-center gap-3">
            {/* <div className="h-9 w-1.5 rounded-full" style={{background: INKARP_RED}} /> */}
            <h1 className="text-2xl  font-[MaxOT] tracking-tight text-[#E63946]" >
              Service Parts — Principals & Spares
            </h1>
          </div>
          {/* <p className="mt-2 text-sm text-gray-600 max-w-3xl">
            Browse spare parts for our global principals. Use search to filter by part number or keyword.
          </p> */}
        </div>

        {/* Tabs */}
        <div className="mx-auto max-w-6xl p-5 border border-gray-200 rounded-xl">
          <div className="py-1 grid grid-cols-6 sm:grid-cols-4 gap-2 font-[MaxOT]">
            {principals.map((p) => (
              <Tab
                key={p}
                label={p}
                count={(productData[p] || []).length}
                active={p === selectedPrincipal}
                onClick={() => { setSelectedPrincipal(p); setQuery(""); }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tools Bar */}
      {/* <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${selectedPrincipal} parts...`}
                className="w-72 max-w-[90vw] rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#BE0010]"
              />
              {query && (
                <button onClick={() => setQuery("")} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-xs hover:text-gray-700">✕</button>
              )}
            </div>
            <span className="text-xs text-gray-600">{products.length} result{products.length !== 1 ? 's' : ''}</span>
          </div>
         
        </div>
      </div> */}

      {/* Table/Card Area */}
      <div className="mx-auto max-w-6xl p-5">
        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <div className="overflow-y-auto max-h-[520px]">
            <table className="min-w-full border-collapse">
              <thead className="sticky top-0 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70" style={{ borderBottom: '1px solid #eee' }}>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold ">Number</th>
                  <th className="px-4 py-3 text-left text-xl font-semibold font-[MaxOT]">Part Number</th>
                  <th className="px-4 py-3 text-left text-xl font-semibold font-[MaxOT]">Product Name</th>
                  {/* <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 w-32">Actions</th> */}
                </tr>
              </thead>
              <tbody>
                {products.map((prod, i) => (
                  <tr key={prod.partNumber} className="odd:bg-white even:bg-gray-50 hover:bg-[#fff6f6] transition-colors">
                    <td className="px-4 py-3 text-sm text-gray-700" style={{ borderBottom: '1px solid #f0f0f0' }}>{i + 1}</td>
                    <td className="px-4 py-3 text-sm font-mono text-[#1f2937]" style={{ borderBottom: '1px solid #f0f0f0' }}>{prod.partNumber}</td>
                    <td className="px-4 py-3 text-sm text-gray-800" style={{ borderBottom: '1px solid #f0f0f0' }}>{prod.name}</td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: '1px solid #f0f0f0' }}>
                      {/* <div className="flex gap-2">
                        <button
                          onClick={() => copy(prod.partNumber)}
                          className="rounded-md border border-gray-300 bg-white px-2.5 py-1 text-xs hover:shadow-sm"
                          title="Copy part number"
                        >Copy PN</button>
                        <button
                          onClick={() => copy(`${prod.partNumber} — ${prod.name}`)}
                          className="rounded-md border border-gray-300 bg-white px-2.5 py-1 text-xs hover:shadow-sm"
                          title="Copy row"
                        >Copy Row</button>
                      </div> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden grid grid-cols-1 gap-3">
          {products.map((prod, i) => (
            <div key={prod.partNumber} className="rounded-xl border border-gray-200 shadow-sm bg-white p-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs text-gray-500">#{i + 1}</div>
                  <div className="font-mono text-sm mt-0.5">{prod.partNumber}</div>
                  <div className="text-sm text-gray-800 mt-1">{prod.name}</div>
                </div>
                {/* <div className="flex flex-col gap-2">
                  <button onClick={() => copy(prod.partNumber)} className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs">Copy PN</button>
                  <button onClick={() => copy(`${prod.partNumber} — ${prod.name}`)} className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs">Copy Row</button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accent rule */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-6">
        <div className="h-[3px] w-24 rounded-full" style={{ background: INKARP_RED }} />
      </div>
    </div>
  );
}
