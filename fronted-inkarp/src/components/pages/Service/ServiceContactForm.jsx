import React, { useState } from "react";
import axios from "axios";
import { Contact, Mail } from "lucide-react";

export default function ServiceContactForm() {
    const [form, setForm] = useState({
        customerName: "",
        companyName: "",
        contactNumber: "",
        serialNumber: "",
        instrumentName: "",
        warranty: "",
        department: "",
    });

    const [status, setStatus] = useState({ type: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "contactNumber") {
            const digits = value.replace(/[^\d+()\-\s]/g, "");
            setForm((prev) => ({ ...prev, [name]: digits }));
            return;
        }
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: "", message: "" });
        setIsSubmitting(true);

        try {
            const requiredKeys = [
                "customerName",
                "companyName",
                "contactNumber",
                "serialNumber",
                "instrumentName",
                "warranty",
                "department",
            ];
            for (const k of requiredKeys) {
                if (!form[k]) {
                    setStatus({ type: "error", message: "Please fill all required fields (*)" });
                    setIsSubmitting(false);
                    return;
                }
            }

            const res = await axios.post(
                "https://inkarppersonal.vercel.app/api/service/enquiry",
                form,
                { headers: { "Content-Type": "application/json" } }
            );

            if (res?.data?.success) {
                setStatus({
                    type: "success",
                    message: "Request submitted successfully. Our Service Team will contact you shortly.",
                });
                setForm({
                    customerName: "",
                    companyName: "",
                    contactNumber: "",
                    serialNumber: "",
                    instrumentName: "",
                    warranty: "",
                    department: "",
                });
            } else {
                setStatus({
                    type: "error",
                    message: res?.data?.message || "Something went wrong. Please try again.",
                });
            }
        } catch (err) {
            setStatus({
                type: "error",
                message:
                    err?.response?.data?.message ||
                    "Server error. Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative w-[95%] mx-auto py-10 md:px-10 lg:px-20 rounded-xl">
             <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.08),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.08),transparent)]" />
            <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl text-[#E63946] font-[MaxOT] mb-2 text-center">
                    Service & Installation Request
                </h3>
                <p className="text-sm font-[Roboto] text-black/70 text-center mb-5">
                    Fill out the form and our Service Team will get back to you shortly. Fields marked * are required.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left: Contact Info */}
                    <div className="rounded-2xl p-7 flex flex-col items-center">

                        <div className="mb-8 w-full">
                            <div className="rounded-2xl bg-gradient-to-b from-gray-50 to-gray-100 border-l-4 border-[#BE0010] shadow-lg flex flex-col items-center p-7 text-center">
                                <div className="mb-5 flex flex-col gap-4 items-center">
                                    <span className="inline-flex items-center gap-3 text-base font-[Roboto]">
                                      <Mail color="#Be0010" />
                                        <span className="font-semibold font-[MaxOT] text-[#BE0010]">Email:</span>
                                        <a href="mailto:service@inkarp.co.in" className="underline hover:text-[#E63946] transition">
                                            service@inkarp.co.in
                                        </a>
                                        
                                    </span>
                                    <span className="inline-flex items-center gap-3 text-base font-[Roboto]">
                                        {/* <svg className="w-10 h-10 text-[#BE0010]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.5A2.5 2.5 0 014.5 3h15A2.5 2.5 0 0122 5.5v13A2.5 2.5 0 0119.5 21h-15A2.5 2.5 0 012 18.5v-13zM6 7h.008v.008H6V7zm0 4h.008v.008H6V11zm2 0h.008v.008H8V11zm2 0h.008v.008h-2V11zm6-8h.008v.008H16V3zm0 4h.008v.008H16V7zm0 4h.008v.008H16V11z" />
                                        </svg> */}
                                        <Contact color="#Be0010" />
                                        <span className="font-semibold font-[MaxOT] text-[#BE0010]">Contact:</span>
                                        <a href="tel:+917330731315" className="underline hover:text-[#E63946] transition">
                                            7330731315
                                        </a>
                                    </span>
                                </div>
                                <div className="w-24 h-2 bg-gradient-to-r from-[#BE0010] via-[#E63946] to-transparent opacity-60 rounded-full mb-3"></div>
                                <div className="text-xs text-[#666] italic font-[Roboto]">
                                    For urgent requests, call or email us directly.
                                </div>
                            </div>
                            {status.message && (
                                <div
                                    className={`mt-6 p-4 rounded-xl border-2 ${status.type === "success"
                                        ? "bg-gradient-to-r from-green-50 to-green-100 border-green-300 text-green-800"
                                        : "bg-gradient-to-r from-red-50 to-red-100 border-red-300 text-red-800"
                                        } font-[Roboto] text-center transition`}
                                >
                                    {status.message}
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Right: Form */}
                    <div className="rounded-2xl border border-gray-200 bg-white shadow p-7">
                        {/* <h3 className="text-2xl text-[#E63946] font-[MaxOT] mb-2 text-center">
                            Service & Installation Request
                        </h3>
                        <p className="mb-8 text-sm font-[Roboto] text-black/70 text-center">
                            Fill out the form and our Service Team will get back to you shortly. Fields marked * are required.
                        </p> */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="text"
                                    name="customerName"
                                    value={form.customerName}
                                    onChange={handleChange}
                                    placeholder="Customer Name *"
                                    required
                                    autoComplete="name"
                                    className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
                                />
                                <input
                                    type="text"
                                    name="companyName"
                                    value={form.companyName}
                                    onChange={handleChange}
                                    placeholder="Company Name *"
                                    required
                                    className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
                                />
                            </div>
                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="tel"
                                    name="contactNumber"
                                    value={form.contactNumber}
                                    onChange={handleChange}
                                    placeholder="Contact Number *"
                                    required
                                    autoComplete="tel"
                                    className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
                                />
                                <input
                                    type="text"
                                    name="serialNumber"
                                    value={form.serialNumber}
                                    onChange={handleChange}
                                    placeholder="Serial Number *"
                                    required
                                    className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
                                />
                            </div>
                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="text"
                                    name="instrumentName"
                                    value={form.instrumentName}
                                    onChange={handleChange}
                                    placeholder="Instrument Name *"
                                    required
                                    className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
                                />
                                <select
                                    name="warranty"
                                    value={form.warranty}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63946] bg-white"
                                >
                                    <option value="">Warranty *</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="text"
                                    name="department"
                                    value={form.department}
                                    onChange={handleChange}
                                    placeholder="Department *"
                                    required
                                    className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-base font-semibold shadow transition ${isSubmitting
                                    ? "opacity-80 cursor-not-allowed"
                                    : "hover:opacity-95"
                                    }`}
                                style={{
                                    background: "linear-gradient(90deg,#BE0010,#E63946)",
                                }}
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
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        Submit <span aria-hidden="true">→</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );


}
