import vcx750 from '/images/products/Sonics/750VCX.png';
import vcx500 from '/images/products/Sonics/500VCX.png';
import vcx1500 from '/images/products/Sonics/VCX1500.jpg';
import vcx2500 from '/images/products/Sonics/VCX2500.jpg';
import automizer from '/images/products/Sonics/atomizer.png';

// Sonics principal (separate object)
const Sonics = {
  vertical: "General Laboratory Instrument",
  principal: "",
  products: [
    {
      name: "Laboratory Scale (0.2 mL – 1 L)",
      slug: "laboratory-scale-models-volumn-0-2ml-1l",
      models: [
        { name: "VCX-750", slug: "vcx-750", image: vcx750 },  // uses vcx750 import
        { name: "VCX-500", slug: "vcx-500", image: vcx500 },
        { name: "VC-505",  slug: "vc-505",  image: vcx500 },
      ],
    },

    {
      name: "Laboratory Scale (0.2 mL – 0.5 mL)",
      slug: "laboratory-scale-models-volumn-0-2ml-0-5ml",
      models: [
        { name: "VCX-130",   slug: "vcx-130",   image: vcx500 }, // placeholder image
        { name: "VCX-130PB", slug: "vcx-130pb", image: vcx500 },
        { name: "VC-50",     slug: "vc-50",     image: vcx500 },
      ],
    },

    {
      name: "Production Scale (10 L – 50 L)",
      slug: "production-scale-models-volumn-10l-50l",
      models: [
        { name: "VCX-1500", slug: "vcx-1500", image: vcx1500 },
        { name: "VCX-2500", slug: "vcx-2500", image: vcx2500 },
      ],
    },

    {
      name: "Accessories",
      slug: "accessories",
      models: [
        { name: "VCX-1500", slug: "vcx-1500", image: vcx1500 },
        { name: "VCX-2500", slug: "vcx-2500", image: vcx2500 },
      ],
    },

    {
      name: "Atomizer",
      slug: "atomizer",
      models: [
        { name: "VCX 134ATA", slug: "vcx-134ata", image: automizer },
      ],
    },
  ],
};

export { Sonics };
