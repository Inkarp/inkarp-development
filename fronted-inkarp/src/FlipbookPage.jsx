// src/pages/FlipbookPage.jsx
import { Helmet } from "react-helmet";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import bgDefault from "/BgCatalyst.jpg";

export default function FlipbookPage() {
  // --- URL parts ---
  const { "*": restOfPath = "" } = useParams();
  const location = useLocation();

  // ✅ SEO COMES FROM ROUTER STATE (NOT QUERY PARAMS)
  const seoState = location.state || {};

  const title = seoState.title || "CATALYSTCue Magazine";
  const metaTitle = seoState.metaTitle || title;
  const metaDescription =
    seoState.metaDescription ||
    "Explore the latest edition of CATALYSTCue by Inkarp Instruments.";
  const keywords =
    seoState.keywords || "CATALYSTCue, Inkarp, Scientific Magazine";

  // ✅ CLEAN FILE PATH (NO QUERY LOGIC ANYMORE)
  let filePath = restOfPath ? decodeURI(restOfPath) : "";
  filePath = filePath.replace(/^\/+/, "");
  if (!/\.pdf$/i.test(filePath)) filePath += ".pdf";
  const file = `/${filePath}`;

  // --- Background defaults ---
  const bgUrl = bgDefault;
  const bgFit = "cover";
  const bgAlpha = 0.35;

  const [err, setErr] = useState("");
  const [fallbackMode, setFallbackMode] = useState(false);
  const shellRef = useRef(null);
  const initedRef = useRef(false);

  // ✅ Document Title Sync
  useEffect(() => {
    document.title = metaTitle;
  }, [metaTitle]);

  // --- Soft PDF precheck ---
  useEffect(() => {
    let cancelled = false;
    if (!file) return;

    fetch(file, { method: "GET", headers: { Range: "bytes=0-0" } })
      .then((res) => {
        if (!cancelled && !res.ok) {
          setErr(`Could not prefetch PDF (HTTP ${res.status}).`);
        }
      })
      .catch(() => {
        if (!cancelled) setErr("Preload blocked. Viewer will still try.");
      });

    return () => {
      cancelled = true;
    };
  }, [file]);

  // --- DearFlip init ---
  useEffect(() => {
    if (!file || initedRef.current || fallbackMode) return;

    let cancelled = false;

    const setup = () => {
      if (cancelled || initedRef.current) return;

      const shell = shellRef.current;
      if (!shell) {
        setTimeout(setup, 50);
        return;
      }

      const book = document.createElement("div");
      book.className = "_df_book w-full h-full";
      book.id = "flipbook_embed";
      book.setAttribute("source", file);

      book.addEventListener(
        "df-error",
        () => {
          if (!cancelled) {
            setErr("DearFlip failed to render the PDF.");
            setFallbackMode(true);
          }
        },
        { passive: true }
      );

      shell.replaceChildren(book);

      window.option_flipbook_embed = {
        webgl: false,
        backgroundColor: "transparent",
        duration: 800,
        singlePageMode: false,
        autoEnableOutline: true,
        maxTextureSize: 4096,
        controlsProps: {
          download: true,
          share: true,
          sound: false,
          fullscreen: true,
        },
        pdfjs: { disableRange: false, cMapPacked: true },
      };

      if (window.DFLIP && typeof window.DFLIP.parseBooks === "function") {
        window.DFLIP.parseBooks();
        initedRef.current = true;
      } else {
        setTimeout(setup, 100);
      }
    };

    setup();
    return () => {
      cancelled = true;
    };
  }, [file, fallbackMode]);

  const bgSize = bgFit === "contain" ? "contain" : "cover";

  return (
    <>
      {/* ✅ SEO META */}
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
      </Helmet>

      <div
        id="flipbook-page"
        className="fixed inset-0 flex flex-col text-white font-sans"
        style={{
          backgroundImage: bgUrl ? `url('${bgUrl}')` : undefined,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: bgSize,
          backgroundColor: bgUrl ? "transparent" : "#0b0b0b",
        }}
      >
        {bgUrl && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ backgroundColor: `rgba(0,0,0,${bgAlpha})` }}
          />
        )}

        <div className="relative w-full flex-1 grid place-items-center pb-10 z-10">
          {!fallbackMode ? (
            <div
              ref={shellRef}
              className="w-full h-full rounded-lg overflow-hidden"
            />
          ) : (
            <object data={file} type="application/pdf" className="w-full h-[80vh]">
              <iframe
                title={title}
                src={file}
                className="w-full h-full border-0"
              />
            </object>
          )}
        </div>
      </div>
    </>
  );
}
