// ./GTMListener.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function GTMListener() {
  const location = useLocation();

  useEffect(() => {
    const page_path = location.pathname + location.search + location.hash;
    const page_title = document.title;
    const page_location = window.location.origin + page_path;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "pageview",       // Create a GA4 tag in GTM that listens to this Custom Event
      page_path,
      page_title,
      page_location,
    });
  }, [location]);

  return null;
}
