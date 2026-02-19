// CatalystModal.jsx
import React, { useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import axios from "axios";
import BgImg from "/HeroBgImg.png";

const CatalystModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    email: "",
    department: "",
    institutionName: "",
    mobileNumber: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(""); // "success" | "error" | ""

  const backdropRef = useRef(null);

  /* =========================
     Redirect on Success
  ========================= */
  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        window.location.href = "/thank-you";
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [status]);

  /* =========================
     ESC to close
  ========================= */
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) onClose?.();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  /* =========================
     Submit Handler
  ========================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    try {
      const res = await axios.post(
        "https://inkarppersonal.vercel.app/api/catalyst/register",
        formData,
        {
          headers: { "Content-Type": "application/json" }
        }
      );

      if (res.data?.success) {
        setStatus("success");
        setFormData({
          name: "",
          designation: "",
          email: "",
          department: "",
          institutionName: "",
          mobileNumber: ""
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Catalyst submit error:", err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >

       
        <div className="relative z-10 max-w-md mx-auto">
          <div className="rounded-xl bg-white/90 p-6 shadow-lg relative space-y-2">
            <h2 className="text-lg md:text-xl font-semibold font-[MaxOT]">
              Request a Physical Copy
            </h2>
            <p className="text-sm text-neutral-600 mb-4">
              Fill in your details and our team will contact you for delivery confirmation.
            </p>

              <button
            onClick={onClose}
            className="rounded-full p-1 hover:bg-white/20 absolute top-4 right-4 border border-black/30 hover:border-black transition cursor-pointer"
            aria-label="Close"
          >
            <MdClose className="text-2xl" />
          </button>

            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full rounded-full border border-gray-400 px-3 py-2"
              />

              <input
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="Designation"
                className="w-full rounded-full border border-gray-400 px-3 py-2"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="w-full rounded-full border border-gray-400 px-3 py-2"
              />

              <input
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Department"
                className="w-full rounded-full border border-gray-400 px-3 py-2"
              />

              <input
                name="institutionName"
                value={formData.institutionName}
                onChange={handleChange}
                required
                placeholder="Institution Name"
                className="w-full rounded-full border border-gray-400 px-3 py-2"
              />

              <input
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                placeholder="Mobile Number"
                className="w-full rounded-full border border-gray-400 px-3 py-2"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-[#BE0010] py-2.5 text-white hover:bg-[#e01b2a] disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <div className="rounded-md bg-green-50 border border-green-200 px-3 py-2 text-green-700 text-sm text-center">
                  🎉 Registration successful! Redirecting…
                </div>
              )}

              {status === "error" && (
                <div className="rounded-md bg-red-50 border border-red-200 px-3 py-2 text-red-700 text-sm text-center">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
  
  );
};

export default CatalystModal;
