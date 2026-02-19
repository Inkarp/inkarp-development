import React, { useEffect, useMemo, useRef, useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const startOfToday = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

const RegisterForm = ({ isOpen, onClose, webinars = [], preselected = null }) => {
  const navigate = useNavigate();

  const today = useMemo(() => startOfToday(), []);

  // Find correct webinar title (single)
  const selectedTitle = useMemo(() => {
    if (!preselected) return "";
    const d = new Date(preselected.date);
    d.setHours(0, 0, 0, 0);
    return d >= today ? preselected.title : "";
  }, [preselected, today]);

  const [formData, setFormData] = useState({
    webinarTitle: selectedTitle,
    name: "",
    email: "",
    contact: "",
    companyName: "",
    department: "",
    designation: "",
    country: "",
    state: "",
    city: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const backdropRef = useRef(null);

  if (!isOpen) return null;

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) onClose?.();
  };

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await axios.post(
        "https://inkarppersonal.vercel.app/api/webinar/register",
        formData
      );

      if (res.data?.success) {
        setStatus({
          type: "success",
          message: "Registration successful! Redirecting…",
        });

        // Reset except title
        setFormData({
          webinarTitle: selectedTitle,
          name: "",
          email: "",
          contact: "",
          companyName: "",
          department: "",
          designation: "",
          country: "",
          state: "",
          city: "",
        });

        // Close modal + Redirect
        setTimeout(() => {
          onClose?.();
          navigate("/thank-you");
        }, 200);
      } else {
        setStatus({
          type: "error",
          message: res.data?.message || "An error occurred.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err?.response?.data?.message ||
          "An error occurred during registration.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
    >
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-2xl rounded-2xl border border-black/10 bg-[#F5F5F5] shadow-2xl max-h-[90vh] flex flex-col">

          {/* HEADER */}
          <div className="flex items-start justify-between p-6 pb-3">
            <div>
              <h2 className="font-[MaxOT] text-2xl text-black">Register Now</h2>
              <p className="font-[Roboto] text-sm text-[#E63946] py-2">
                All fields are mandatory*
              </p>
            </div>

            <button
              onClick={onClose}
              className="h-9 w-9 rounded-full border bg-white hover:border-[#E63946]"
            >
              <X />
            </button>
          </div>

          {/* STATUS */}
          {status.message && (
            <div
              className={`mx-6 mb-3 rounded-lg px-4 py-2 text-sm ${
                status.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {status.message}
            </div>
          )}

          {/* FORM */}
          <div className="flex-1 overflow-y-auto">
            <form
              onSubmit={handleSubmit}
              className="px-5 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {/* READ-ONLY TITLE */}
              <div className="md:col-span-2 flex">
                <label className="font-[Roboto] text-md mb-1 text-bold">Webinar Title :</label>
                <input
                  type="text"
                  name="webinarTitle"
                  value={formData.webinarTitle}
                  required
                  readOnly
                  className="p-3 rounded-lg w-full bg-gray-100 border border-black/10 text-black font-medium"
                />
              </div>

              {/* NAME */}
              <div className="flex flex-col">
                <label className="font-[Roboto] text-sm">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3 rounded-lg border"
                  placeholder="Your Name"
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col">
                <label className="font-[Roboto] text-sm">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 rounded-lg border"
                  placeholder="name@company.com"
                />
              </div>

              {/* CONTACT */}
              <div className="flex flex-col">
                <label className="font-[Roboto] text-sm">Contact *</label>
                <input
                  type="tel"
                  name="contact"
                  required
                  value={formData.contact}
                  onChange={handleChange}
                  className="p-3 rounded-lg border"
                  placeholder="Phone Number"
                />
              </div>

              {/* COMPANY */}
              <div className="flex flex-col">
                <label className="font-[Roboto] text-sm">Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="p-3 rounded-lg border"
                  placeholder="Company"
                />
              </div>

              {/* DEPARTMENT */}
              <div className="flex flex-col">
                <label className="font-[Roboto] text-sm">Department *</label>
                <input
                  type="text"
                  name="department"
                  required
                  value={formData.department}
                  onChange={handleChange}
                  className="p-3 rounded-lg border"
                  placeholder="R&D / QA / QC"
                />
              </div>

              {/* DESIGNATION */}
              <div className="flex flex-col">
                <label className="font-[Roboto] text-sm">Designation *</label>
                <input
                  type="text"
                  name="designation"
                  required
                  value={formData.designation}
                  onChange={handleChange}
                  className="p-3 rounded-lg border"
                  placeholder="Manager / Scientist"
                />
              </div>

              {/* CITY */}
              <div className="flex flex-col">
                <label className="font-[Roboto] text-sm">City *</label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="p-3 rounded-lg border"
                  placeholder="City"
                />
              </div>

              {/* STATE */}
              <div className="flex flex-col">
                <label className="font-[Roboto] text-sm">State *</label>
                <input
                  type="text"
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleChange}
                  className="p-3 rounded-lg border"
                  placeholder="State"
                />
              </div>

              {/* COUNTRY */}
              <div className="md:col-span-2 flex flex-col">
                <label className="font-[Roboto] text-sm">Country *</label>
                <input
                  type="text"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="p-3 rounded-lg border"
                  placeholder="Country"
                />
              </div>

              {/* SUBMIT */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#E63946] text-white rounded-lg font-[MaxOT] shadow hover:opacity-95"
                >
                  {isSubmitting ? "Submitting…" : "Register →"}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
