import React from "react";
import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen  text-black p-4 md:p-4">
      <Helmet>
        <title>Privacy Policy- Inkarp Instruments Private Ltd.</title>
      </Helmet>
      <div className="max-w-5xl mx-auto">
        <header className="mb-8 bg-[#F5F5F5]  p-6 rounded-lg shadow-md border border-gray-200">
          <h1 className="font-[MaxOT] text-3xl md:text-4xl text-[#E63946] mb-2">Privacy Policy</h1>
         
        </header>

        <section className="space-y-6">
          <article>
            <h2 className="font-[MaxOT] text-xl text-black mb-2">Overview</h2>
            <p className="font-[Roboto] text-base leading-relaxed">
              At Inkarp  we are committed to protecting the privacy and security of our website
              visitors and customers. This Privacy Policy explains how we collect, use, and safeguard your personal
              information when you visit or interact with our website (<a href="https://www.inkarp.co.in" className="underline">www.inkarp.co.in</a>)
              (the "Website").
            </p>
          </article>

          <article>
            <h3 className="font-[MaxOT] text-lg text-black mb-2">1. Information We Collect</h3>
            <ul className="font-[Roboto] list-disc list-inside leading-relaxed text-base text-gray-800">
              <li><strong>Information:</strong> Name, email address, phone number, and any other details you provide through forms or email communications.</li>
              <li><strong>Usage Data:</strong> Information related to how you use the Website, such as IP address, browser type, device information, and browsing behaviour.</li>
              <li><strong>Cookies:</strong> We use cookies to improve your browsing experience and understand user preferences. You can manage cookie preferences through your browser settings.</li>
            </ul>
          </article>

          <article>
            <h3 className="font-[MaxOT] text-lg text-[#E63946]  mb-2">2. How We Use Your Information</h3>
            <p className="font-[Roboto] text-base leading-relaxed">
              We use the collected information for purposes including but not limited to:
            </p>
            <ul className="font-[Roboto] list-disc list-inside leading-relaxed text-base text-gray-800">
              <li>Responding to inquiries and providing customer support.</li>
              <li>Improving our products, services, and the overall user experience on the Website.</li>
              <li>Sending updates, promotions, or other communications related to our services if you have opted to receive them.</li>
              <li>Analysing usage patterns and improving website functionality.</li>
            </ul>
          </article>

          <article>
            <h3 className="font-[MaxOT] text-lg text-[#E63946]  mb-2">3. Data Security</h3>
            <p className="font-[Roboto] text-base leading-relaxed text-gray-800">
              We take reasonable precautions to protect your personal information from unauthorized access, alteration,
              disclosure, or destruction. However, no method of transmission over the internet or electronic storage is
              completely secure.
            </p>
          </article>

          <article>
            <h3 className="font-[MaxOT] text-lg text-[#E63946]  mb-2">4. Sharing of Personal Information</h3>
            <p className="font-[Roboto] text-base leading-relaxed text-gray-800">
              We do not sell or rent your personal information to third parties. We may disclose your personal
              information to service providers or partners where necessary to provide services (for example: hosting,
              analytics, or customer support), and only to the extent required to perform those services.
            </p>
          </article>

          <article>
            <h3 className="font-[MaxOT] text-lg text-[#E63946]  mb-2">5. Your Rights</h3>
            <ul className="font-[Roboto] list-disc list-inside leading-relaxed text-base text-gray-800">
              <li>Request access to personal information we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of your personal information, subject to legal obligations.</li>
              <li>Opt out of receiving marketing communications at any time.</li>
            </ul>
          </article>

          <article>
            <h3 className="font-[MaxOT] text-lg text-[#E63946]  mb-2">6. Third-Party Links</h3>
            <p className="font-[Roboto] text-base leading-relaxed text-gray-800">
              Our Website may contain links to third-party websites. We are not responsible for the privacy practices or
              content of these external sites. We encourage you to review their privacy policies before providing any
              personal information.
            </p>
          </article>

          <article>
            <h3 className="font-[MaxOT] text-lg text-[#E63946]  mb-2">7. Changes to This Policy</h3>
            <p className="font-[Roboto] text-base leading-relaxed text-gray-800">
              We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on
              this page with an updated revision date. Please review this Privacy Policy periodically.
            </p>
          </article>

          <article>
            <h3 className="font-[MaxOT] text-lg text-[#E63946] mb-2">8. Contact Us</h3>
            <p className="font-[Roboto] text-base leading-relaxed text-gray-800">
              If you have any questions about this Privacy Policy or how we handle your personal information, please
              contact us at:
            </p>
            <address className="not-italic font-[Roboto] text-base leading-relaxed text-gray-800 mt-2">
              Inkarp Instruments Pvt Ltd
              <br />
              Email: <a href="mailto:info@inkarp.co.in" className="underline">info@inkarp.co.in</a>
            </address>
          </article>
        </section>

        <footer className="mt-12 text-center">
          <p className="font-[Roboto] text-sm text-gray-600">&copy; {new Date().getFullYear()} Inkarp Instruments Pvt Ltd. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
