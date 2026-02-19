import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const LABEL_OVERRIDES = {
  "alpha-ii-compact-ft-ir-spectrometer": "Alpha II compact FT-IR Spectrometer",
  "ft-ir-spectrometer": "FT-IR Spectrometer",
  "mobile-ir-ii-ft-ir-spectrometer":"Mobile-IR II FT-IR Spectrometer",
  "ft-ir-research-spectrometer":"FT-IR Research Spectrometer",
  "invenio-ft-ir-spectrometer":"Invenio FT-IR Spectrometer",
  "vertex-80-80v-ft-ir-spectrometer":"Vertex 80/80V FT-IR Spectrometer",
  "tg-ftir-thermogravimetric-analysis":"TG FT-IR Thermogravimetric Analysis",
  "ft-nir-spectrometer":"FT-NIR Spectrometer",
  "tango-ft-nir-spectrometer":"Tango FT-NIR Spectrometer",
  "mpa-iii-ft-nir-spectrometer":"MPA III FT-NIR-Spectrometer",
  "multiram-ft-raman-spectrometer":"MultiRAM FT-Raman Spectrometer",
  "bravo-handheld-raman-spectrometer":"BRAVO handheld Raman Spectrometer",
  "ft-ir-microscopes":"FT-IR Microscopes",
  "hyperion-ft-ir-microscope":"Hyperion FT-IR Microscope",
  "lumos-ii-ft-ir-microscope":"LUMOUS II FT-IR Spectrometer",
  "matrix-f-ii-ft-nir-process-spectrometer":"MATRIX-F II FT-NIR Process Spectrometer",
  "matrix-mf-ft-ir-process-reaction-monitoring":"MATRIX-MF FT-IR Process Reaction Monitoring",
  "beam-process-ft-nir-spectrometer":"BEAM-process FT-NIR Spectrometer",
  "senterra-ii-raman-microscope":"SENTERRA-II-Raman-Microscope"
};

// Load Font Awesome v3.2.1 once
const loadFontAwesome = () => {
  const link = document.createElement("link");
  link.href = "//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

const toTitle = (s) =>
  s
    .toLowerCase()
    .replace(/-/g, " ")
    .replace(/&/g, " & ")
    .replace(/\b\w/g, (ch) => ch.toUpperCase());

const getBreadcrumbLabel = (segment) => {
  const key = segment.toLowerCase(); // normalize
  if (LABEL_OVERRIDES[key]) {
    return LABEL_OVERRIDES[key];
  }
  return toTitle(segment);
};

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Show only on specific routes
  const validPaths = ["/verticals"];
  const show = validPaths.some((p) => location.pathname.startsWith(p));

  useEffect(() => {
    loadFontAwesome();
  }, []);

  if (!show) return null;

  return (
    <>
      <ul className="flat-breadcrumb sticky">
        <li>
          <Link to="/">
            <span className="icon icon-home"> </span>
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const segment = decodeURIComponent(name); // raw slug segment
          const label = getBreadcrumbLabel(segment); // ✅ override-aware label

          return (
            <li key={routeTo}>
              <Link to={routeTo}>
                <span className="icon icon-double-angle-right"></span> {label}
              </Link>
            </li>
          );
        })}
      </ul>

      <style>{`
        .flat-breadcrumb {
          list-style: none;
          display: inline-block;
          padding: 1rem 2rem;
        }
        .flat-breadcrumb li { float: left; position: relative; }
        .flat-breadcrumb li a {
          color: #fff; display: block; background: #BE0010; text-decoration: none;
          position: relative; height: 40px; line-height: 40px; padding: 0 10px 0 5px;
          text-align: center; margin-right: 23px; font-size: 16px;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }
        .flat-breadcrumb li:nth-child(even) a { background-color: #BE0010; }
        .flat-breadcrumb li:first-child a { padding-left: 15px; border-radius: 4px 0 0 4px; }
        .flat-breadcrumb li:last-child a { padding-right: 15px; border-radius: 0 4px 4px 0; }

        .flat-breadcrumb li a:before,
        .flat-breadcrumb li a:after {
          content: ""; position: absolute; top: 0; border: 0 solid #BE0010; border-width: 20px 10px; width: 0; height: 0;
        }
        .flat-breadcrumb li a:before { left: -20px; border-left-color: transparent; }
        .flat-breadcrumb li a:after { left: 100%; border-color: transparent; border-left-color: #BE0010; }
        .flat-breadcrumb li:nth-child(even) a:before { border-color: #BE0010; border-left-color: transparent; }
        .flat-breadcrumb li:nth-child(even) a:after { border-left-color: #BE0010; }

        .flat-breadcrumb li a:hover { background-color: gray; }
        .flat-breadcrumb li a:hover:before { border-color: gray; border-left-color: transparent; }
        .flat-breadcrumb li a:hover:after { border-left-color: gray; }

        .flat-breadcrumb:after { content: ""; display: table; clear: both; }
      `}</style>
    </>
  );
}
