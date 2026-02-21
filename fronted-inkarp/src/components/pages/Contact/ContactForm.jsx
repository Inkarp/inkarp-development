import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ⬅️ ADD THIS

export default function ContactForm() {
  const navigate = useNavigate(); // ⬅️ ADD THIS

  const getMetaInfo = () => {
    if (typeof window === "undefined") {
      return {
        pageUrl: "",
        referrer: "",
        searchKeyword: "",
        searchSource: "",
      };
    }

    const pageUrl = window.location.href;
    const referrer = document.referrer || "";
    let searchKeyword = "";
    let searchSource = "";

    try {
      const currentUrl = new URL(pageUrl);
      
      // Check URL parameters first (UTM, custom params)
      const utmParams = ["utm_term", "utm_source", "keyword", "q", "search"];
      for (const param of utmParams) {
        const value = currentUrl.searchParams.get(param);
        if (value) {
          searchKeyword = value;
          searchSource = "URL Parameter";
          break;
        }
      }

      // If no URL param, check referrer for search engines & AI platforms
      if (referrer) {
        const refUrl = new URL(referrer);
        const refHostname = refUrl.hostname.toLowerCase();

        // Search Engines
        if (refHostname.includes("google.")) {
          const q = refUrl.searchParams.get("q");
          if (q && !searchKeyword) {
            searchKeyword = q;
            searchSource = "Google Search";
          }
        } else if (refHostname.includes("bing.")) {
          const q = refUrl.searchParams.get("q");
          if (q && !searchKeyword) {
            searchKeyword = q;
            searchSource = "Bing Search";
          }
        } else if (refHostname.includes("duckduckgo.")) {
          const q = refUrl.searchParams.get("q");
          if (q && !searchKeyword) {
            searchKeyword = q;
            searchSource = "DuckDuckGo";
          }
        } else if (refHostname.includes("yahoo.")) {
          const p = refUrl.searchParams.get("p");
          if (p && !searchKeyword) {
            searchKeyword = p;
            searchSource = "Yahoo Search";
          }
        } else if (refHostname.includes("yandex.")) {
          const text = refUrl.searchParams.get("text");
          if (text && !searchKeyword) {
            searchKeyword = text;
            searchSource = "Yandex Search";
          }
        } else if (refHostname.includes("baidu.")) {
          const wd = refUrl.searchParams.get("wd");
          if (wd && !searchKeyword) {
            searchKeyword = wd;
            searchSource = "Baidu Search";
          }
        }

        // AI Platforms
        else if (refHostname.includes("chatgpt.")) {
          const q = refUrl.searchParams.get("q");
          if (q && !searchKeyword) {
            searchKeyword = q;
            searchSource = "ChatGPT";
          }
        } else if (refHostname.includes("perplexity.")) {
          const q = refUrl.searchParams.get("q");
          if (q && !searchKeyword) {
            searchKeyword = q;
            searchSource = "Perplexity AI";
          }
        } else if (refHostname.includes("claude.")) {
          const q = refUrl.searchParams.get("q");
          if (q && !searchKeyword) {
            searchKeyword = q;
            searchSource = "Claude AI";
          }
        } else if (refHostname.includes("gemini.") || refHostname.includes("google.") && refUrl.pathname.includes("gemini")) {
          const q = refUrl.searchParams.get("q");
          if (q && !searchKeyword) {
            searchKeyword = q;
            searchSource = "Google Gemini";
          }
        } else if (refHostname.includes("copilot.")) {
          const q = refUrl.searchParams.get("q");
          if (q && !searchKeyword) {
            searchKeyword = q;
            searchSource = "Microsoft Copilot";
          }
        } else if (refHostname.includes("you.")) {
          const q = refUrl.searchParams.get("q");
          if (q && !searchKeyword) {
            searchKeyword = q;
            searchSource = "You.com";
          }
        } else if (refHostname.includes("kagi.")) {
          const q = refUrl.searchParams.get("q");
          if (q && !searchKeyword) {
            searchKeyword = q;
            searchSource = "Kagi Search";
          }
        }
      }
    } catch (e) {
      console.warn("Error parsing search keyword:", e);
    }

    return {
      pageUrl,
      referrer,
      searchKeyword,
      searchSource,
    };
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    company: "",
    city: "",
    state: "",
    inquiryType: "",
    isExistingCustomer: "",
    purchaseTimeline: "",
    application: "",
    message: "",
    ...getMetaInfo(),
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await axios.post(
        "https://inkarp-development-backend.vercel.app/api/contact",
        formData
      );

      if (res.data?.success) {
        setStatus({
          type: "success",
          message: "Message sent successfully! Redirecting...",
        });

        // Reset inputs but keep metadata
        setFormData({
          name: "",
          email: "",
          phone: "",
          jobTitle: "",
          company: "",
          city: "",
          state: "",
          inquiryType: "",
          isExistingCustomer: "",
          purchaseTimeline: "",
          application: "",
          message: "",
          ...getMetaInfo(),
        });

        e.target.reset();

        // 🎉 REDIRECT to /thank-you 
        setTimeout(() => navigate("/thank-you"), 200);
      } else {
        setStatus({
          type: "error",
          message:
            res.data?.message ||
            "An error occurred while sending your message",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err.response?.data?.message ||
          "An error occurred while sending your message",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-[98%] mx-auto py-10 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-2xl border border-gray-200 text-center bg-white p-6 sm:p-8">
          
          <h3 className="text-2xl text-[#E63946] font-[MaxOT] mb-1">
            Contact Our Team
          </h3>
          <p className="mb-6 text-sm font-[Roboto] text-black/70">
            Fill out the form and our team will get back to you shortly. Fields marked * are required.
          </p>

          {status.message && (
            <div
              className={`mb-6 p-4 rounded-lg text-sm font-[Roboto] ${
                status.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {status.message}
            </div>
          )}

          {(formData.searchKeyword || formData.searchSource) && (
            <div className="mb-6 p-4 rounded-lg bg-blue-50 border border-blue-200 text-sm">
              <p className="text-blue-700 font-[Roboto]">
                <span className="font-semibold">Source Detected:</span> {formData.searchSource || "Unknown"}
                {formData.searchKeyword && (
                  <span> | <strong>Keyword:</strong> {formData.searchKeyword}</span>
                )}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Your Name *"
                required
                autoComplete="name"
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:ring-2 focus:ring-[#E63946]"
              />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Your Email *"
                required
                autoComplete="email"
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:ring-2 focus:ring-[#E63946]"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                placeholder="Your Phone *"
                required
                autoComplete="tel"
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:ring-2 focus:ring-[#E63946]"
              />
              <input
                type="text"
                name="jobTitle"
                onChange={handleChange}
                placeholder="Designation *"
                required
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:ring-2 focus:ring-[#E63946]"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="company"
                onChange={handleChange}
                placeholder="Company"
                required
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:ring-2 focus:ring-[#E63946]"
              />
              <input
                type="text"
                name="inquiryType"
                onChange={handleChange}
                placeholder="Department *"
                required
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:ring-2 focus:ring-[#E63946]"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="city"
                onChange={handleChange}
                placeholder="City"
                required
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:ring-2 focus:ring-[#E63946]"
              />
              <input
                type="text"
                name="state"
                onChange={handleChange}
                placeholder="State"
                required
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:ring-2 focus:ring-[#E63946]"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="application"
                onChange={handleChange}
                placeholder="Application/Product"
                required
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:ring-2 focus:ring-[#E63946]"
              />
            </div>

            <textarea
              name="message"
              onChange={handleChange}
              placeholder="Please elaborate your requirement"
              className="w-full h-32 rounded-2xl border border-gray-200 px-5 py-4 focus:ring-2 focus:ring-[#E63946] resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-base font-semibold shadow transition ${
                isSubmitting
                  ? "opacity-80 cursor-not-allowed"
                  : "hover:opacity-95"
              }`}
              style={{ background: "linear-gradient(90deg,#BE0010,#E63946)" }}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-30"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-80"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0a12 12 0 100 24v-4a8 8 0 01-8-8z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Submit <span aria-hidden>→</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
