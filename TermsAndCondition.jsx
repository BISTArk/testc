import React from "react";

const TermsAndCondition = () => {
  const effectiveDate = "27 December 2025";
  const lastUpdated = "27 December 2025";

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: (
        <>
          <p className="mb-4">
            Welcome to <strong>RushBee Cntrl</strong> and{" "}
            <strong>RushBee Shell</strong> (collectively referred to as
            "RushBee", "Software", "Service", "we", "us", or "our"). These Terms
            and Conditions ("Terms") govern your access to and use of our gaming
            cafe management software solutions.
          </p>
          <p className="mb-4">
            RushBee is owned and operated by{" "}
            <strong>CLUTCHCRAFT SOLUTIONS LLP</strong>, a Limited Liability
            Partnership registered under the Ministry of Corporate Affairs
            (MCA), Government of India.
          </p>
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4 mb-4">
            <p className="text-sm text-zinc-300">
              <strong className="text-amber-400">Important:</strong> By
              registering, logging in, or using RushBee Cntrl or Shell, you
              acknowledge that you have read, understood, and agree to be bound
              by these Terms and Conditions. If you do not agree to these Terms,
              you must not use our Software.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "definitions",
      title: "2. Definitions",
      content: (
        <ul className="list-disc list-inside space-y-2 text-zinc-300">
          <li>
            <strong className="text-zinc-100">"RushBee Cntrl"</strong> - A
            web-based application designed for desktop use, providing gaming
            cafe owners with comprehensive management tools including PC
            control, bookings, sessions, inventory, food management, Shell
            settings, analytics, invoicing, and user management.
          </li>
          <li>
            <strong className="text-zinc-100">"RushBee Shell"</strong> - A
            lightweight client application installed on gaming cafe PCs,
            providing gamers with a kiosk-mode gaming library to access games
            and applications permitted by the cafe owner.
          </li>
          <li>
            <strong className="text-zinc-100">"Owner"</strong> - The gaming cafe
            proprietor or authorized representative who subscribes to and
            administers the RushBee Software.
          </li>
          <li>
            <strong className="text-zinc-100">"User"</strong> - End customers
            (gamers) who use the gaming cafe PCs managed by RushBee.
          </li>
          <li>
            <strong className="text-zinc-100">"Subscription"</strong> - The
            paid access to RushBee services based on the number of PCs managed.
          </li>
          <li>
            <strong className="text-zinc-100">"Entitlements"</strong> - The
            features and services included in your subscription plan.
          </li>
        </ul>
      ),
    },
    {
      id: "services",
      title: "3. Services Provided",
      content: (
        <>
          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            3.1 RushBee Cntrl Features
          </h4>
          <ul className="list-disc list-inside space-y-1 text-zinc-300 mb-4 ml-4">
            <li>PC Control (shutdown, restart, lock, unlock)</li>
            <li>Booking and Session Management</li>
            <li>Inventory Management</li>
            <li>Food and Beverage Management</li>
            <li>Shell Settings Configuration</li>
            <li>Business Analytics and Reports</li>
            <li>Invoice Generation</li>
            <li>User and Staff Management</li>
          </ul>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            3.2 RushBee Shell Features
          </h4>
          <ul className="list-disc list-inside space-y-1 text-zinc-300 mb-4 ml-4">
            <li>Kiosk-mode gaming library interface</li>
            <li>Owner-controlled application access</li>
            <li>Session tracking and management</li>
            <li>Secure gaming environment</li>
          </ul>

          <p className="text-zinc-300">
            For more information about our services, please visit{" "}
            <a
              href="https://pos.rushbeegaming.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 underline"
            >
              pos.rushbeegaming.com
            </a>
          </p>
        </>
      ),
    },
    {
      id: "subscription",
      title: "4. Subscription and Pricing",
      content: (
        <>
          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            4.1 Subscription Model
          </h4>
          <p className="mb-4 text-zinc-300">
            RushBee operates on a subscription-based model where pricing is
            determined by the number of PCs managed through our software. We
            offer two billing cycles:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4">
              <h5 className="font-semibold text-amber-400 mb-2">
                Monthly Subscription
              </h5>
              <p className="text-sm text-zinc-300">
                Pay month-to-month with flexibility to cancel. Standard pricing
                applies.
              </p>
            </div>
            <div className="bg-zinc-800/50 border border-emerald-700/50 rounded-lg p-4">
              <h5 className="font-semibold text-emerald-400 mb-2">
                Yearly Subscription
              </h5>
              <p className="text-sm text-zinc-300">
                Pay annually and receive{" "}
                <strong>2 months free</strong> (equivalent to 17% savings).
              </p>
            </div>
          </div>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            4.2 Setup and Installation
          </h4>
          <ul className="list-disc list-inside space-y-2 text-zinc-300 mb-4">
            <li>
              <strong>No Setup Fee:</strong> There are no initial setup fees.
              Owners are responsible for self-installation.
            </li>
            <li>
              <strong>Documentation:</strong> Comprehensive documentation and
              video tutorials are provided for self-setup.
            </li>
            <li>
              <strong>Support:</strong> Our support team is available to assist
              with any issues during setup.
            </li>
            <li>
              <strong>Professional Setup (Optional):</strong> If you require the
              RushBee team to perform setup, additional charges of up to{" "}
              <strong>₹500 INR per PC</strong> will apply, depending on
              location.
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            4.3 Price Changes
          </h4>
          <p className="text-zinc-300">
            Subscription prices are subject to change annually, typically
            ranging from <strong>10-12%</strong> increase. In the event of
            significant increases in cloud service costs, additional price
            adjustments may be necessary. You will be notified{" "}
            <strong>at least 1 month in advance</strong> via email and WhatsApp
            before any price changes take effect.
          </p>
        </>
      ),
    },
    {
      id: "payment",
      title: "5. Payment Terms",
      content: (
        <>
          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            5.1 Payment Obligation
          </h4>
          <p className="mb-4 text-zinc-300">
            Owners are required to pay subscription fees on time for continued
            access to RushBee services. Payments must be made before the start
            of each billing cycle.
          </p>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            5.2 Grace Period
          </h4>
          <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 mb-4">
            <p className="text-zinc-300">
              A grace period of <strong className="text-red-400">3 days</strong>{" "}
              is provided for late payments. After this grace period:
            </p>
            <ul className="list-disc list-inside mt-2 text-zinc-300 space-y-1">
              <li>All entitlements will be disabled</li>
              <li>Owner access will be suspended</li>
              <li>Booking and session management will be unavailable</li>
              <li>Shell client functionality will be restricted</li>
            </ul>
          </div>
          <p className="text-zinc-300">
            To restore services, the outstanding balance must be cleared in
            full.
          </p>
        </>
      ),
    },
    {
      id: "refunds",
      title: "6. Refund Policy",
      content: (
        <>
          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            6.1 Eligibility for Refund
          </h4>
          <p className="mb-4 text-zinc-300">
            Refunds may be issued under the following conditions:
          </p>
          <ul className="list-disc list-inside space-y-2 text-zinc-300 mb-4">
            <li>
              Software fails to operate under normal business conditions
            </li>
            <li>Persistent glitches that prevent proper usage</li>
            <li>
              Frequent crashes affecting business operations
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            6.2 Refund Request Process
          </h4>
          <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4 mb-4">
            <p className="text-zinc-300 mb-2">
              <strong className="text-amber-400">
                Time Limit: 7 Days
              </strong>
            </p>
            <p className="text-sm text-zinc-300">
              Refund requests must be submitted within{" "}
              <strong>7 days</strong> of experiencing the issue. Requests made
              after this period will not be entertained.
            </p>
          </div>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            6.3 How to Request a Refund
          </h4>
          <p className="text-zinc-300 mb-2">
            Send an email to{" "}
            <a
              href="mailto:contact@rushbeegaming.com"
              className="text-amber-400 hover:text-amber-300"
            >
              contact@rushbeegaming.com
            </a>{" "}
            with:
          </p>
          <ul className="list-disc list-inside space-y-1 text-zinc-300">
            <li>Your registered email and cafe name</li>
            <li>Detailed description of the issues faced</li>
            <li>Supporting screenshots or screen recordings</li>
            <li>Any relevant documents or error logs</li>
          </ul>
        </>
      ),
    },
    {
      id: "support",
      title: "7. Customer Support",
      content: (
        <>
          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            7.1 Support Availability
          </h4>
          <p className="mb-4 text-zinc-300">
            Our support team operates <strong>24/7</strong>; however, support
            allocation is based on the availability of support team members.
            Response times may vary depending on the volume of requests and
            complexity of issues.
          </p>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            7.2 Support Channels
          </h4>
          <div className="grid gap-3">
            <div className="flex items-center gap-3 bg-zinc-800/50 border border-zinc-700 rounded-lg p-3">
              <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-zinc-400">Email</p>
                <a
                  href="mailto:contact@rushbeegaming.com"
                  className="text-amber-400 hover:text-amber-300"
                >
                  contact@rushbeegaming.com
                </a>
                <span className="text-zinc-500 mx-2">|</span>
                <a
                  href="mailto:rushbeegamingapp@gmail.com"
                  className="text-amber-400 hover:text-amber-300"
                >
                  rushbeegamingapp@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-zinc-800/50 border border-zinc-700 rounded-lg p-3">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-zinc-400">Phone / WhatsApp</p>
                <a
                  href="tel:+916364135086"
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  +91 6364 135 086
                </a>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "liability",
      title: "8. Limitation of Liability",
      content: (
        <>
          <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 mb-4">
            <h4 className="text-lg font-semibold text-red-400 mb-3">
              Important Disclaimer
            </h4>
            <p className="text-zinc-300 mb-4">
              To the maximum extent permitted by applicable law, CLUTCHCRAFT
              SOLUTIONS LLP and RushBee shall not be held liable for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300">
              <li>
                Any bugs, glitches, or technical issues that may cause business
                harm, loss of revenue, or operational disruption
              </li>
              <li>
                Data loss resulting from system failures, unless caused by gross
                negligence on our part
              </li>
              <li>
                Indirect, incidental, special, consequential, or punitive
                damages
              </li>
              <li>
                Loss of profits, goodwill, use, or data arising from or related
                to the use of our Software
              </li>
            </ul>
          </div>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            8.1 Bug Reporting and Resolution
          </h4>
          <p className="text-zinc-300">
            We are committed to maintaining software quality. If you encounter
            any bugs or issues:
          </p>
          <ul className="list-disc list-inside space-y-1 text-zinc-300 mt-2">
            <li>Report the issue promptly through our support channels</li>
            <li>
              We will investigate and attempt to fix reported issues in a timely
              manner
            </li>
            <li>
              Critical bugs affecting operations will be prioritized
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "data",
      title: "9. Data Collection and Privacy",
      content: (
        <>
          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            9.1 Data We Collect
          </h4>
          <p className="mb-4 text-zinc-300">
            To provide our services, we collect and store the following data as
            added by the Owner:
          </p>
          <ul className="list-disc list-inside space-y-1 text-zinc-300 mb-4">
            <li>Owner account information and business details</li>
            <li>User (gamer) profiles and session data</li>
            <li>Transaction and booking records</li>
            <li>Food and beverage item details</li>
            <li>Rate and pass configurations</li>
            <li>Application lists and PC usage data</li>
            <li>Live application monitoring data</li>
          </ul>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            9.2 Data Security
          </h4>
          <div className="bg-emerald-900/20 border border-emerald-700/50 rounded-lg p-4 mb-4">
            <p className="text-zinc-300">
              <strong className="text-emerald-400">Password Protection:</strong>{" "}
              All user passwords are encrypted. We do not store raw/plain-text
              passwords.
            </p>
          </div>
          <p className="text-zinc-300 mb-4">
            For additional data encryption beyond passwords, extra charges will
            apply. Contact us for enterprise security options.
          </p>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            9.3 Data Storage Location
          </h4>
          <p className="text-zinc-300 mb-4">
            All data is stored on secure servers located in{" "}
            <strong>Mumbai, India</strong>.
          </p>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            9.4 Third-Party Data Sharing
          </h4>
          <p className="text-zinc-300">
            We do <strong>not</strong> share your data with any third-party
            applications or services. All collected data is used exclusively for
            providing the RushBee service and generating business analytics for
            the Owner.
          </p>
        </>
      ),
    },
    {
      id: "usage",
      title: "10. Acceptable Use Policy",
      content: (
        <>
          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            10.1 Permitted Use
          </h4>
          <p className="mb-4 text-zinc-300">
            RushBee software is intended solely for legitimate gaming cafe
            management operations. Owners agree to use the software in
            compliance with all applicable laws and regulations.
          </p>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            10.2 Prohibited Activities
          </h4>
          <p className="mb-2 text-zinc-300">
            The following uses of RushBee are strictly prohibited:
          </p>
          <ul className="list-disc list-inside space-y-1 text-zinc-300 mb-4">
            <li>Facilitating illegal gambling or betting activities</li>
            <li>
              Distribution of pirated games, software, or copyrighted content
            </li>
            <li>
              Any activities that violate local, state, or national laws
            </li>
            <li>Attempting to reverse engineer, decompile, or modify the software</li>
            <li>Sharing login credentials with unauthorized parties</li>
            <li>Using the software for any illegal or unethical purposes</li>
          </ul>

          <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
            <p className="text-zinc-300">
              <strong className="text-red-400">Warning:</strong> Violation of
              these terms may result in immediate termination of your
              subscription without refund.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "termination",
      title: "11. Termination",
      content: (
        <>
          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            11.1 Termination by Owner
          </h4>
          <p className="mb-4 text-zinc-300">
            Owners may cancel their subscription at any time. For monthly
            subscriptions, cancellation will take effect at the end of the
            current billing period. For yearly subscriptions, please contact our
            support team to discuss cancellation options.
          </p>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            11.2 Termination by RushBee
          </h4>
          <p className="mb-2 text-zinc-300">
            We reserve the right to suspend or terminate your access to RushBee
            services if:
          </p>
          <ul className="list-disc list-inside space-y-1 text-zinc-300 mb-4">
            <li>Payment is not received within the grace period</li>
            <li>You violate these Terms and Conditions</li>
            <li>You engage in prohibited activities</li>
            <li>Required by law or legal process</li>
          </ul>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            11.3 Effect of Termination
          </h4>
          <p className="text-zinc-300">
            Upon termination, access to RushBee Cntrl and Shell will be
            disabled. Owners may request an export of their data within 30 days
            of termination by contacting our support team.
          </p>
        </>
      ),
    },
    {
      id: "intellectual",
      title: "12. Intellectual Property",
      content: (
        <>
          <p className="mb-4 text-zinc-300">
            All intellectual property rights in the RushBee software, including
            but not limited to trademarks, logos, design, code, and
            documentation, are owned by CLUTCHCRAFT SOLUTIONS LLP.
          </p>
          <p className="text-zinc-300">
            Your subscription grants you a limited, non-exclusive,
            non-transferable license to use the software for your gaming cafe
            business operations. This license does not transfer any ownership
            rights to you.
          </p>
        </>
      ),
    },
    {
      id: "modifications",
      title: "13. Modifications to Terms",
      content: (
        <>
          <p className="mb-4 text-zinc-300">
            We reserve the right to modify these Terms and Conditions at any
            time. Changes will be communicated via:
          </p>
          <ul className="list-disc list-inside space-y-1 text-zinc-300 mb-4">
            <li>Email notification to registered email address</li>
            <li>WhatsApp notification</li>
            <li>In-app notification within RushBee Cntrl</li>
          </ul>
          <p className="text-zinc-300">
            Continued use of the software after notification of changes
            constitutes acceptance of the modified terms.
          </p>
        </>
      ),
    },
    {
      id: "governing",
      title: "14. Governing Law and Jurisdiction",
      content: (
        <>
          <p className="mb-4 text-zinc-300">
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of India.
          </p>
          <p className="text-zinc-300">
            Any disputes arising out of or in connection with these Terms shall
            be subject to the exclusive jurisdiction of the courts in{" "}
            <strong>Bangalore, Karnataka, India</strong>.
          </p>
        </>
      ),
    },
    {
      id: "contact",
      title: "15. Contact Information",
      content: (
        <>
          <p className="mb-4 text-zinc-300">
            For any questions, concerns, or requests regarding these Terms and
            Conditions, please contact us:
          </p>
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6">
            <h5 className="font-semibold text-amber-400 mb-4">
              CLUTCHCRAFT SOLUTIONS LLP
            </h5>
            <div className="space-y-3 text-zinc-300">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-zinc-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p>
                  138, SLN Nivas, Kadabagere,
                  <br />
                  Bangalore, Karnataka, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-zinc-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <a
                    href="mailto:contact@rushbeegaming.com"
                    className="text-amber-400 hover:text-amber-300"
                  >
                    contact@rushbeegaming.com
                  </a>
                  <span className="text-zinc-500 mx-2">|</span>
                  <a
                    href="mailto:rushbeegamingapp@gmail.com"
                    className="text-amber-400 hover:text-amber-300"
                  >
                    rushbeegamingapp@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-zinc-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+916364135086"
                  className="text-amber-400 hover:text-amber-300"
                >
                  +91 6364 135 086
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-zinc-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <a
                  href="https://pos.rushbeegaming.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300"
                >
                  pos.rushbeegaming.com
                </a>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-zinc-900">R</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-zinc-100">RushBee</h1>
                <p className="text-xs text-zinc-400">Cntrl & Shell</p>
              </div>
            </div>
            <a
              href="https://pos.rushbeegaming.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-900 font-medium rounded-lg transition-colors text-sm"
            >
              Visit Website
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-100 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-6">
              Please read these terms carefully before using RushBee Cntrl and
              Shell gaming cafe management software.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-500">
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Effective Date: {effectiveDate}
              </span>
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Last Updated: {lastUpdated}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="bg-zinc-900/50 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-lg font-semibold text-zinc-100 mb-4">
            Table of Contents
          </h2>
          <nav className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm text-zinc-400 hover:text-amber-400 transition-colors py-1"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24"
            >
              <h2 className="text-2xl font-bold text-zinc-100 mb-6 pb-2 border-b border-zinc-800">
                {section.title}
              </h2>
              <div className="prose prose-invert prose-zinc max-w-none">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {/* Agreement Section */}
        <section className="mt-16 bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/30 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-amber-400 mb-4">
              Acceptance of Terms
            </h3>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              By registering for an account, logging into RushBee Cntrl, or
              installing RushBee Shell on your gaming cafe PCs, you acknowledge
              that you have read, understood, and agree to be bound by these
              Terms and Conditions.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-zinc-900">R</span>
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-300">
                  RushBee Gaming
                </p>
                <p className="text-xs text-zinc-500">
                  © {new Date().getFullYear()} CLUTCHCRAFT SOLUTIONS LLP
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-zinc-400">
              <a
                href="https://pos.rushbeegaming.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
              >
                Website
              </a>
              <a
                href="mailto:contact@rushbeegaming.com"
                className="hover:text-amber-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndCondition;
