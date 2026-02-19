// src/components/search/SearchLauncher.jsx
import React, { useState } from "react";
import { Search } from "lucide-react";
import SearchDialog from "./SearchDialog";

const slugify = (s = "") =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const normalizeProduct = (vertical, product, principal) => {
  // product can be string or object
  if (typeof product === "string") {
    return {
      name: product,
      image: null,
      principal,
      verticalSlug: vertical.slug || slugify(vertical.name),
      productSlug: slugify(product),
    };
  }
  // object
  const productSlug = product.slug || slugify(product.name || "");
  const base = {
    name: product.name,
    image: product.image || null,
    principal,
    verticalSlug: vertical.slug || slugify(vertical.name),
    productSlug,
  };

  // if has models, return array [product, ...models]; else single
  if (Array.isArray(product.models) && product.models.length > 0) {
    const models = product.models
      .filter(m => !!m?.name)
      .map(m => ({
        name: m.name,
        image: m.image || null,
        principal,
        verticalSlug: vertical.slug || slugify(vertical.name),
        productSlug,
        modelSlug: m.slug || slugify(m.name),
      }));
    return [base, ...models];
  }
  return base;
};

const buildDataset = (verticals = []) => {
  const groups = [];
  verticals.forEach(v => {
    const principal = v.principal || v.brand || "";
    const products = Array.isArray(v.products) ? v.products : [];
    const normalized = products.flatMap(p => normalizeProduct(v, p, principal));
    groups.push({
      title: v.name,
      verticalSlug: v.slug || slugify(v.name),
      products: Array.isArray(normalized) ? normalized : [normalized],
    });
  });
  return groups;
};

export default function SearchLauncher({
  verticals = [],                 // [{ name, slug?, principal?, products: [...] }, ...]
  buttonVariant = "hero",         // "hero" | "navbar"
  includeModelInRoute = false,
  renderTrigger,                  // optional custom render: ({open}) => JSX
  buttonText = "Search for Products",
  badgeText = "NEW",
}) {
  const [open, setOpen] = useState(false);

  const dataset = buildDataset(verticals);

  const onSearch = (query, cb) => {
    const q = (query || "").toLowerCase();
    const results = [];

    // match vertically by name
    dataset.forEach(group => {
      const groupMatch = group.title?.toLowerCase().includes(q);
      const matched = [];

      group.products.forEach(p => {
        const hay = [p.name, p.principal, p.productSlug, p.modelSlug]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        if (groupMatch || hay.includes(q)) {
          matched.push(p);
        }
      });

      if (groupMatch && matched.length === 0) {
        // if the vertical name matched but none of the products (edge case), show all
        results.push({ title: group.title, products: group.products, verticalSlug: group.verticalSlug });
      } else if (matched.length > 0) {
        results.push({ title: group.title, products: matched, verticalSlug: group.verticalSlug });
      }
    });

    cb(results);
  };

  // default trigger buttons (match your hero style / a compact navbar style)
  const TriggerHero = (
    <button
      onClick={() => setOpen(true)}
      className="relative h-12 px-6 pr-10 min-w-[200px] lg:min-w-[300px]
                 rounded-xl backdrop-blur-md border-2 border-[#E63946] shadow-md
                 text-gray-800 flex items-center gap-2 transition-all duration-300
                 hover:ring-2 hover:ring-[#E63946] hover:bg-white/30 group bg-white/80"
    >
      <span className="absolute -top-2 -right-2 bg-[#E63946] text-white text-xs px-1.5 py-0.5 rounded-full animate-pulse shadow-lg">
        {badgeText}
      </span>
      <Search className="h-4 w-4 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
      <span className="text-gray-700 font-medium group-hover:text-[#E63946] group-hover:scale-105 transform transition-all duration-300">
        {buttonText}
      </span>
    </button>
  );

  const TriggerNavbar = (
    <button
      onClick={() => setOpen(true)}
      className="relative h-10 px-4 min-w-[150px]
                 rounded-lg border border-[#E63946] bg-white/80 text-gray-800
                 hover:bg-white transition flex items-center gap-2"
    >
      <Search className="h-4 w-4" />
      <span className="text-sm">{buttonText}</span>
    </button>
  );

  return (
    <>
      {renderTrigger
        ? renderTrigger({ open: () => setOpen(true) })
        : (buttonVariant === "navbar" ? TriggerNavbar : TriggerHero)}

      <SearchDialog
        isOpen={open}
        onClose={() => setOpen(false)}
        onSearch={onSearch}
        includeModelInRoute={includeModelInRoute}
      />
    </>
  );
}
