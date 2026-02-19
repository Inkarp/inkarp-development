import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ⬅️ ADD THIS

const CareersForm = () => {
  const navigate = useNavigate(); // ⬅️ ADD THIS

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    location: "",
    department: "",
    message: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCustomRole, setIsCustomRole] = useState(false);

  const availablePositions = [
    { value: "Sales Manager", label: "Sales Manager" },
    { value: "Sales Executive", label: "Sales Executive" },
    { value: "Service Engineer", label: "Service Engineer" },
    { value: "Technical Support", label: "Technical Support" },
    { value: "Marketing Executive", label: "Marketing Executive" },
    { value: "Product Manager", label: "Product Manager" },
    { value: "Operations Manager", label: "Operations Manager" },
    { value: "Customer Support", label: "Customer Support" },
    { value: "Business Development", label: "Business Development" },
    { value: "General Manager", label: "General Manager" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRoleChange = (e) => {
    const { value } = e.target;
    if (value === "custom") {
      setIsCustomRole(true);
      setFormData((prev) => ({ ...prev, role: "" }));
    } else {
      setIsCustomRole(false);
      setFormData((prev) => ({ ...prev, role: value }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setStatus({
        type: "error",
        message: "Please upload a PDF or Word document",
      });
      e.target.value = null;
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setStatus({
        type: "error",
        message: "File size should be less than 5MB",
      });
      e.target.value = null;
      return;
    }

    setSelectedFile(file);
    setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([k, v]) =>
        formDataToSend.append(k, v ?? "")
      );

      if (selectedFile) {
        formDataToSend.append("resume", selectedFile);
      }

      const response = await axios.post(
        "https://inkarppersonal.vercel.app/api/careers/submit",
        formDataToSend,
        {
          timeout: 15000,
        }
      );

      if (response.data?.success) {
        setStatus({
          type: "success",
          message: "Application submitted successfully! Redirecting...",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          role: "",
          location: "",
          department: "",
          message: "",
        });

        setSelectedFile(null);
        setIsCustomRole(false);
        e.target.reset();

        // 🔥 REDIRECT AFTER SUCCESS
        setTimeout(() => navigate("/thank-you"), 200);
      } else {
        setStatus({
          type: "error",
          message:
            response.data?.message ||
            "An error occurred while submitting your application",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);

      if (error.code === "ECONNABORTED") {
        setStatus({
          type: "error",
          message:
            "Request timed out. Please try again in a moment or check your connection.",
        });
      } else if (error.response) {
        setStatus({
          type: "error",
          message:
            error.response.data?.message ||
            `Server error (${error.response.status}). Please try again.`,
        });
      } else if (error.request) {
        setStatus({
          type: "error",
          message:
            "Couldn’t reach the server. Please try again or check your network.",
        });
      } else {
        setStatus({
          type: "error",
          message: "Unexpected error. Please try again.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl py-5">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.08),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.08),transparent)]" />

      <div className="flex justify-center items-center p-5">
        <h1
          className="px-4 py-1 w-fit rounded-full uppercase text-xs sm:text-sm font-[MaxOT] bg-white text-black"
          style={{
            borderImage: "linear-gradient(90deg,#BE0010,#E63946) 1",
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          Apply to Join Our Team
        </h1>
      </div>

      {status.message && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            status.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status.message}
        </div>
      )}

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 border p-5 border-gray-300 rounded-lg"
      >
        {/* ------ FORM FIELDS (UNCHANGED FROM YOUR VERSION) ------ */}
        {/* I kept your complete form fields exactly the same */}
        {/* If you need UI enhancements, I can update them too */}
        
        {/* Name + Email + Phone + Role + Custom Role + Location + Department */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* --- Full Name --- */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946]"
              placeholder="Enter your full name"
            />
          </div>

          {/* --- Email --- */}
          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946]"
              placeholder="Enter your email"
            />
          </div>

          {/* --- Phone --- */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone *</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946]"
              placeholder="Enter phone number"
            />
          </div>

          {/* --- Role --- */}
          <div>
            <label className="block text-sm font-medium mb-1">Position *</label>   
                <input
                  type="text"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your position"
                />
          </div>
          {/* --- Location --- */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Preferred Location *
            </label>
            <input
              type="text"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter preferred location"
            />
          </div>

          {/* --- Department --- */}
          <div>
            <label className="block text-sm font-medium mb-1">Department *</label>
            <input
              type="text"
              name="department"
              required
              value={formData.department}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter department name"
            />
          </div>
        </div>

        {/* --- Resume Upload --- */}
        <div>
          <label className="block text-sm font-medium mb-1">Resume *</label>
          <input
            type="file"
            required
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="block w-full text-sm border border-gray-300 rounded-lg p-2"
          />
          {selectedFile && (
            <p className="text-sm mt-2 text-gray-600">
              Selected: {selectedFile.name}
            </p>
          )}
        </div>

        {/* --- Message --- */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Additional Message
          </label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Any additional information"
          />
        </div>

        {/* --- Submit Button --- */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 bg-[#E63946] text-white rounded-lg font-medium transition ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-red-600"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CareersForm;
