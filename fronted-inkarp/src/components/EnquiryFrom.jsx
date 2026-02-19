// components/common/EnquiryForm.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ⬅️ ADD THIS

export default function EnquiryForm({ isOpen, onClose, productName = "" }) {
  const navigate = useNavigate(); // ⬅️ ADD THIS

  const getMetaInfo = () => ({
    pageUrl: window.location.href,
    referrer: document.referrer || "",
  });

  const [formData, setFormData] = useState({
    productName: productName || "",
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

  useEffect(() => {
    setFormData((p) => ({ ...p, productName: productName || "" }));
  }, [productName]);

  if (!isOpen) return null;

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
        "https://inkarppersonal.vercel.app/api/enquiry/enquiry",
        formData
      );

      if (res.data?.success) {
        setStatus({
          type: "success",
          message: "Message sent successfully! Redirecting...",
        });

        // Reset but keep product name
        setFormData((p) => ({
          ...p,
          name: "",
          email: "",
          phone: "",
          company: "",
          jobTitle: "",
          city: "",
          state: "",
          inquiryType: "",
          application: "",
          ...getMetaInfo(),
        }));

        // 🔥 Quick 200ms redirect
        setTimeout(() => {
          onClose?.();     // close modal first
          navigate("/thank-you");
        }, 200);

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
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          ×
        </button>

        <h3 className="mb-1 text-2xl font-[MaxOT] text-[#E63946]">Product Enquiry</h3>
        <p className="mb-6 text-sm font-[Roboto] text-black/70">
          Fill out the form and our team will get back to you shortly. Fields marked * are required.
        </p>

        {status.message && (
          <div
            className={`mb-6 rounded-lg p-4 text-sm font-[Roboto] ${
              status.type === "success"
                ? "border border-green-200 bg-green-50 text-green-700"
                : "border border-red-200 bg-red-50 text-red-700"
            }`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Product read-only */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="productName"
              value={formData.productName}
              readOnly
              className="w-full rounded-full border border-gray-200 bg-gray-100 px-5 py-3 font-medium text-gray-700"
              title="Product"
            />
          </div>

          {/* Name + Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name *"
              required
              className="w-full rounded-full border border-gray-200 px-5 py-3 focus:ring-2 focus:ring-[#E63946]"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email *"
              required
              className="w-full rounded-full border border-gray-200 px-5 py-3 focus:ring-2 focus:ring-[#E63946]"
            />
          </div>

          {/* Phone + Designation */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone *"
              required
              className="w-full rounded-full border border-gray-200 px-5 py-3 focus:ring-2 focus:ring-[#E63946]"
            />
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="Designation *"
              required
              className="w-full rounded-full border border-gray-200 px-5 py-3 focus:ring-2 focus:ring-[#E63946]"
            />
          </div>

          {/* Company + Department */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company *"
              required
              className="w-full rounded-full border border-gray-200 px-5 py-3"
            />
            <input
              type="text"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              placeholder="Department *"
              required
              className="w-full rounded-full border border-gray-200 px-5 py-3"
            />
          </div>

          {/* City */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              required
              className="w-full rounded-full border border-gray-200 px-5 py-3"
            />
          </div>

          {/* State + Country */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              required
              className="w-full rounded-full border border-gray-200 px-5 py-3"
            />
            <input
              type="text"
              name="application"
              value={formData.application}
              onChange={handleChange}
              placeholder="Country"
              required
              className="w-full rounded-full border border-gray-200 px-5 py-3"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-2 inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white shadow ${
              isSubmitting ? "opacity-80 cursor-not-allowed" : "hover:opacity-95"
            }`}
            style={{ background: "linear-gradient(90deg,#BE0010,#E63946)" }}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="mr-2 -ml-1 h-5 w-5 animate-spin"
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
              <>Submit <span aria-hidden>→</span></>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
