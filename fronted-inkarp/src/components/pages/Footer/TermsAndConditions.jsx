import React from "react";
import { Helmet } from "react-helmet";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen  text-black p-4">
      <Helmet>
        <title>Terms And Conditions - Inkarp Instruments Pvt Ltd</title>
      </Helmet>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-8 text-center bg-[#F5F5F5] p-6 rounded-lg shadow-md border border-gray-200">
          <h1 className="font-[MaxOT] text-3xl md:text-4xl text-[#E63946] mb-2">
            Terms & Conditions
          </h1>
          <p className="font-[Roboto] text-sm md:text-base text-gray-700">
            Effective Date: <strong>March 3, 2025</strong>
          </p>
        </header>

        <section className="space-y-8">
          {/* 1. Company Information */}
          <article>
            <h2 className="font-[MaxOT] text-xl text-[#E63946] mb-2">
              1. Company Information
            </h2>
            <p className="font-[Roboto] text-base leading-relaxed text-gray-800">
              <strong>1.1 Inkarp Instruments Pvt. Ltd.</strong>
              <br />
              <strong>Address:</strong> Plot No - 5A/10-11, 3rd Floor, IDA Nacharam,
              Road No. 1, Chilka Nagar Main Rd, Nacharam, Hyderabad, Telangana
              500076.
              <br />
              <strong>GST Number:</strong> 36AABCI2728R1Z4
            </p>
            <p className="font-[Roboto] text-base leading-relaxed text-gray-800 mt-4">
              <strong>1.2 Inkarp Instruments Services</strong>
              <br />
              <strong>Address:</strong> Plot No - 5A/10-11, 2nd Floor, IDA Nacharam,
              Road No. 1, Chilka Nagar Main Rd, Nacharam, Hyderabad, Telangana
              500076.
              <br />
              <strong>GST Number:</strong> 36AABFI9315B1ZQ
            </p>
          </article>

          {/* 2. Applicability */}
          <article>
            <h2 className="font-[MaxOT] text-xl text-[#E63946] mb-2">
              2. Applicability
            </h2>
            <ul className="font-[Roboto] list-disc list-inside leading-relaxed text-base text-gray-800">
              <li>
                <strong>Applies to all sales</strong> of products, spares,
                accessories, and services by Inkarp.
              </li>
              <li>
                Placing an order implies{" "}
                <strong>acknowledgement and acceptance</strong> of these T&Cs.
              </li>
              <li>
                <strong>Subject to change</strong> without prior notice. Refer to{" "}
                <a
                  href="https://www.inkarp.co.in"
                  className="underline text-blue-600"
                >
                  www.inkarp.co.in
                </a>{" "}
                for latest version.
              </li>
            </ul>
          </article>

          {/* 3. Quotations & Orders */}
          <article>
            <h2 className="font-[MaxOT] text-xl text-[#E63946] mb-2">
              3. Quotations & Orders
            </h2>
            <ul className="font-[Roboto] list-disc list-inside leading-relaxed text-base text-gray-800">
              <li>
                <strong>Quotation validity:</strong> 30 days unless stated
                otherwise.
              </li>
              <li>
                <strong>Order confirmation:</strong> Only in writing by Inkarp.
              </li>
              <li>
                Orders <strong>cannot be cancelled</strong> without Inkarp's
                written approval.
              </li>
              <li>Minimum order value requirements may apply.</li>
            </ul>
          </article>

          {/* 4. Pricing, Payment & Ownership Retention */}
          <article>
            <h2 className="font-[MaxOT] text-xl text-[#E63946] mb-2">
              4. Pricing, Payment & Ownership Retention
            </h2>
            <ul className="font-[Roboto] list-disc list-inside leading-relaxed text-base text-gray-800">
              <li>
                <strong>All prices in INR</strong> unless specified otherwise.
              </li>
              <li>
                <strong>Excludes:</strong> GST, freight, packaging, duties, and
                insurance.
              </li>
              <li>
                <strong>GST:</strong> Applied at prevailing rate during billing.
              </li>
              <li>
                <strong>SEZ GST exemption:</strong> granted only upon receiving
                valid documents <strong>before invoicing</strong>.
              </li>
              <li>
                <strong>Ownership:</strong> retained by Inkarp until full payment
                is received.
              </li>
              <li>
                <strong>Repossession right:</strong> If delayed beyond 90 days
                from due date.
              </li>
            </ul>
          </article>

          {/* 5. Delivery, Shipment & Risk of Loss */}
          <article>
            <h2 className="font-[MaxOT] text-xl text-[#E63946] mb-2">
              5. Delivery, Shipment & Risk of Loss
            </h2>
            <ul className="font-[Roboto] list-disc list-inside leading-relaxed text-base text-gray-800">
              <li>
                <strong>Estimated delivery dates</strong> may vary due to external
                factors.
              </li>
              <li>
                Supply is on <strong>Ex-Works (Hyderabad)</strong> basis unless
                agreed otherwise.
              </li>
              <li>
                <strong>Risk & title:</strong> Pass to buyer upon carrier handover.
              </li>
              <li>
                <strong>Inkarp is not liable</strong> for delays or transit damage
                after handover.
              </li>
              <li>
                Partial shipments are <strong>allowed and invoiced separately</strong>.
              </li>
            </ul>
          </article>

          {/* 6. Order Cancellation & Returns */}
          <article>
            <h2 className="font-[MaxOT] text-xl text-[#E63946] mb-2">
              6. Order Cancellation & Returns
            </h2>
            <ul className="font-[Roboto] list-disc list-inside leading-relaxed text-base text-gray-800">
              <li>
                <strong>Confirmed orders</strong> are non-cancellable without
                agreement.
              </li>
              <li>
                Returns allowed for <strong>wrong products</strong> or{" "}
                <strong>defects reported within 7 days</strong>.
              </li>
              <li>Returns require <strong>RMA approval</strong> from Inkarp.</li>
              <li>
                <strong>25% restocking fee</strong> applies to non-defective
                returns.
              </li>
            </ul>
          </article>

          {/* 7. Warranty Policy */}
          <article>
            <h2 className="font-[MaxOT] text-xl text-[#E63946] mb-2">
              7. Warranty Policy
            </h2>
            <ul className="font-[Roboto] list-disc list-inside leading-relaxed text-base text-gray-800">
              <li>
                <strong>Standard warranty:</strong> 12 months from shipment for
                manufacturing defects.
              </li>
              <li>
                <strong>Excludes:</strong> Consumables, wear & tear parts (e.g.
                seals, filters, tubing).
              </li>
              <li>
                <strong>Void if:</strong> Misused, modified, or serviced by
                unauthorized personnel.
              </li>
              <li>
                <strong>Coverage:</strong> Repair or replacement only, no refunds.
              </li>
            </ul>
          </article>

          {/* 8. Foreign Currency Orders */}
          <article>
            <h2 className="font-[MaxOT] text-xl text-[#E63946] mb-2">
              8. Foreign Currency Orders – OEM Responsibility
            </h2>
            <ul className="font-[Roboto] list-disc list-inside leading-relaxed text-base text-gray-800">
              <li>
                <strong>OEM responsible</strong> for performance, warranty, and
                service.
              </li>
              <li>
                <strong>Inkarp acts as facilitator only</strong>; not liable for
                OEM issues.
              </li>
              <li>
                <strong>Legal claims</strong> must be addressed directly to the
                OEM.
              </li>
            </ul>
          </article>

          {/* 9. Governing Law & Jurisdiction */}
          <article>
            <h2 className="font-[MaxOT] text-xl text-[#E63946] mb-2">
              9. Governing Law & Jurisdiction
            </h2>
            <p className="font-[Roboto] text-base leading-relaxed text-gray-800">
              <strong>Applicable Law:</strong> Indian Law.
              <br />
              <strong>Jurisdiction:</strong> Courts in Hyderabad, Telangana.
            </p>
          </article>

          {/* 10. Customer Data & Privacy */}
          <article>
            <h2 className="font-[MaxOT] text-xl text-[#E63946] mb-2">
              10. Customer Data & Privacy
            </h2>
            <p className="font-[Roboto] text-base leading-relaxed text-gray-800">
              <strong>Inkarp may collect and store Buyer data</strong> for
              processing orders, compliance, and customer service.
            </p>
            <p className="font-[Roboto] text-base leading-relaxed text-gray-800">
              This data <strong>may be shared with logistics partners or auditors</strong>{" "}
              for operational needs.
            </p>
          </article>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="font-[Roboto] text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Inkarp Instruments Pvt Ltd. All rights
            reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
