// src/components/Canonical.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// set this in .env.production → VITE_SITE_URL=https://inkarp.co.in
const PROD_ORIGIN = import.meta.env.VITE_SITE_URL ?? window.location.origin;

const stripTrailingSlash = (p) => (p === "/" ? "/" : p.replace(/\/+$/, ""));

export default function Canonical() {
  const { pathname } = useLocation();

  useEffect(() => {
    const href = `${PROD_ORIGIN}${stripTrailingSlash(pathname)}`;

    // canonical
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);

    // (optional) og:url
    let og = document.querySelector('meta[property="og:url"]');
    if (!og) {
      og = document.createElement("meta");
      og.setAttribute("property", "og:url");
      document.head.appendChild(og);
    }
    og.setAttribute("content", href);
  }, [pathname]);

  return null;
}
