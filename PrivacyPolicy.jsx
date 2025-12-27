import React from "react";

const PrivacyPolicy = () => {
  const effectiveDate = "27 December 2025";
  const lastUpdated = "27 December 2025";

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: (
        <>
          <p className="mb-4">
            Welcome to the Privacy Policy of <strong>RushBee Cntrl</strong> and{" "}
            <strong>RushBee Shell</strong> (collectively referred to as
            "RushBee", "Software", "Service", "we", "us", or "our").
          </p>
          <p className="mb-4">
            RushBee is owned and operated by{" "}
            <strong>CLUTCHCRAFT SOLUTIONS LLP</strong>, a Limited Liability
            Partnership registered under the Ministry of Corporate Affairs
            (MCA), Government of India, located at 138, SLN Nivas, Kadabagere,
            Bangalore, Karnataka, India.
          </p>
          <p className="mb-4">
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you use our gaming cafe management
            software. Please read this policy carefully to understand our
            practices regarding your data.
          </p>
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4 mb-4">
            <p className="text-sm text-zinc-300">
              <strong className="text-amber-400">Acceptance:</strong> By
              registering, logging in, or using RushBee Cntrl or Shell, you
              consent to the data practices described in this Privacy Policy. If
              you do not agree with this policy, please do not use our services.
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
            <strong className="text-zinc-100">"Owner"</strong> - The gaming cafe
            proprietor or authorized representative who subscribes to and
            administers the RushBee Software.
          </li>
          <li>
            <strong className="text-zinc-100">"User"</strong> - End customers
            (gamers) whose profiles and session data are managed through RushBee
            by the Owner.
          </li>
          <li>
            <strong className="text-zinc-100">"Personal Data"</strong> - Any
            information that can be used to identify an individual, such as
            name, email address, phone number, etc.
          </li>
          <li>
            <strong className="text-zinc-100">"Usage Data"</strong> - Data
            collected automatically, such as session information, booking
            records, and transaction logs.
          </li>
        </ul>
      ),
    },
    {
      id: "data-collection",
      title: "3. Information We Collect",
      content: (
        <>
          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            3.1 Information Provided by Owners
          </h4>
          <p className="mb-4 text-zinc-300">
            When Owners register and use RushBee Cntrl, we collect information
            that is voluntarily provided, including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-zinc-300 mb-4 ml-4">
            <li>Owner account information (name, email, phone number)</li>
            <li>Business details (cafe name, address)</li>
            <li>Zone and PC configuration details</li>
            <li>Rate cards and pass configurations</li>
            <li>Food and beverage item details</li>
            <li>Application lists for Shell</li>
          </ul>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            3.2 User Data (Managed by Owners)
          </h4>
          <p className="mb-4 text-zinc-300">
            Owners add and manage User (gamer) data through RushBee Cntrl. This
            data may include:
          </p>
          <ul className="list-disc list-inside space-y-1 text-zinc-300 mb-4 ml-4">
            <li>User profiles (name, contact details)</li>
            <li>Session and booking records</li>
            <li>Transaction history and ledger entries</li>
            <li>Wallet balances and payment records</li>
          </ul>
          <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4 mb-4">
            <p className="text-sm text-zinc-300">
              <strong className="text-amber-400">Note:</strong> User data is
              added and managed by the Owner. RushBee acts as a data processor
              on behalf of the Owner, who is the data controller for their
              customers' information.
            </p>
          </div>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            3.3 Device and Technical Information
          </h4>
          <p className="mb-4 text-zinc-300">
            To provide our services, we collect certain technical information:
          </p>
          <ul className="list-disc list-inside space-y-1 text-zinc-300 mb-4 ml-4">
            <li>
              <strong>MAC Address:</strong> Stored and used to uniquely identify
              PCs running RushBee Shell
            </li>
            <li>
              <strong>IP Address:</strong> Stored only if manually added by the
              Owner for PC identification
            </li>
            <li>
              <strong>Zone Details:</strong> PC grouping and zone configurations
              as set by the Owner
            </li>
          </ul>
          <div className="bg-emerald-900/20 border border-emerald-700/50 rounded-lg p-4 mb-4">
            <p className="text-zinc-300">
              <strong className="text-emerald-400">PC Specifications:</strong>{" "}
              PC hardware specifications (CPU, RAM, GPU, etc.) are fetched live
              via PowerShell for display purposes only and are{" "}
              <strong>not stored</strong> in our databases or servers.
            </p>
          </div>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            3.4 Session and Transaction Data
          </h4>
          <p className="text-zinc-300">
            We store operational data necessary for the functioning of your
            gaming cafe:
          </p>
          <ul className="list-disc list-inside space-y-1 text-zinc-300 mt-2">
            <li>Session start and end times</li>
            <li>Booking records and schedules</li>
            <li>Transaction ledgers and invoices</li>
            <li>Inventory transactions</li>
            <li>Food and beverage orders</li>
          </ul>
        </>
      ),
    },
    {
      id: "cookies",
      title: "4. Cookies and Authentication",
      content: (
        <>
          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            4.1 Cookies We Use
          </h4>
          <p className="mb-4 text-zinc-300">
            RushBee Cntrl uses cookies to maintain your login session and
            enhance your experience. The cookies we use include:
          </p>
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4 mb-4">
            <h5 className="font-semibold text-amber-400 mb-2">
              Essential/Authentication Cookies
            </h5>
            <ul className="list-disc list-inside space-y-1 text-zinc-300 text-sm">
              <li>
                <strong>Entitlements:</strong> Stores your subscription and
                feature access information
              </li>
              <li>
                <strong>Auth Tokens:</strong> Maintains your login session so
                you don't have to log in repeatedly
              </li>
            </ul>
          </div>
          <p className="text-zinc-300 mb-4">
            These cookies are strictly necessary for the operation of RushBee
            Cntrl and cannot be disabled. They allow you to remain logged in for
            as long as you choose.
          </p>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            4.2 Third-Party Analytics
          </h4>
          <p className="text-zinc-300">
            We use basic website traffic monitoring for our marketing website.
            However, <strong>no login/logout sessions are tracked</strong>, and{" "}
            <strong>no user activity data is stored or shared</strong> with
            third-party analytics services. We do not use any third-party
            analytics tools within the RushBee Cntrl or Shell applications.
          </p>
        </>
      ),
    },
    {
      id: "data-use",
      title: "5. How We Use Your Information",
      content: (
        <>
          <p className="mb-4 text-zinc-300">
            We use the collected information for the following purposes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-zinc-300 mb-4">
            <li>
              <strong>Service Delivery:</strong> To provide, maintain, and
              improve RushBee Cntrl and Shell functionality
            </li>
            <li>
              <strong>Account Management:</strong> To manage your subscription,
              authenticate access, and process entitlements
            </li>
            <li>
              <strong>Business Operations:</strong> To enable session tracking,
              bookings, inventory management, and invoicing
            </li>
            <li>
              <strong>Customer Support:</strong> To respond to inquiries,
              troubleshoot issues, and provide technical assistance
            </li>
            <li>
              <strong>Business Analytics:</strong> To generate reports and
              analytics exclusively for the Owner's business insights
            </li>
            <li>
              <strong>Communications:</strong> To send important service
              updates, billing reminders, and promotional messages
            </li>
            <li>
              <strong>Security:</strong> To detect, prevent, and address
              technical issues, fraud, or security breaches
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "payment",
      title: "6. Payment Information",
      content: (
        <>
          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            6.1 No Third-Party Payment Processing
          </h4>
          <p className="mb-4 text-zinc-300">
            RushBee does not integrate with any third-party payment gateways or
            APIs. All payments between gaming cafe owners and their customers
            are handled independently by the Owner.
          </p>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            6.2 Ledger and Transaction Records
          </h4>
          <p className="text-zinc-300">
            We maintain transaction ledgers and records as entered by the Owner
            for their business tracking purposes. This includes:
          </p>
          <ul className="list-disc list-inside space-y-1 text-zinc-300 mt-2">
            <li>Session charges and payments</li>
            <li>Food and beverage transactions</li>
            <li>Wallet top-ups and balances</li>
            <li>Invoice records</li>
          </ul>
          <p className="text-zinc-300 mt-4">
            These records are stored securely and are accessible only to the
            respective Owner.
          </p>
        </>
      ),
    },
    {
      id: "data-sharing",
      title: "7. Data Sharing and Disclosure",
      content: (
        <>
          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            7.1 No Third-Party Sharing
          </h4>
          <div className="bg-emerald-900/20 border border-emerald-700/50 rounded-lg p-4 mb-4">
            <p className="text-zinc-300">
              <strong className="text-emerald-400">Our Commitment:</strong> We
              do <strong>not</strong> sell, trade, rent, or share your personal
              data or business information with any third-party applications,
              services, or advertisers.
            </p>
          </div>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            7.2 When We May Disclose Information
          </h4>
          <p className="mb-2 text-zinc-300">
            We may disclose information only in the following circumstances:
          </p>
          <ul className="list-disc list-inside space-y-2 text-zinc-300">
            <li>
              <strong>Legal Requirements:</strong> When required by law, court
              order, or government authority
            </li>
            <li>
              <strong>Protection of Rights:</strong> To protect our rights,
              property, or safety, or that of our users
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger,
              acquisition, or sale of assets, with notice to affected users
            </li>
            <li>
              <strong>With Consent:</strong> When you have explicitly consented
              to the disclosure
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "data-storage",
      title: "8. Data Storage and Security",
      content: (
        <>
          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            8.1 Data Storage Location
          </h4>
          <p className="mb-4 text-zinc-300">
            All data is stored on secure servers located in{" "}
            <strong>Mumbai, India</strong>. We use industry-standard security
            measures to protect your data.
          </p>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            8.2 Security Measures
          </h4>
          <ul className="list-disc list-inside space-y-2 text-zinc-300 mb-4">
            <li>
              <strong>Password Encryption:</strong> All user passwords are
              encrypted. We do not store raw/plain-text passwords.
            </li>
            <li>
              <strong>Secure Transmission:</strong> Data is transmitted using
              secure protocols (HTTPS)
            </li>
            <li>
              <strong>Access Controls:</strong> Restricted access to data based
              on role and necessity
            </li>
          </ul>
          <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4 mb-4">
            <p className="text-zinc-300 text-sm">
              <strong className="text-amber-400">Enterprise Security:</strong>{" "}
              For additional data encryption beyond passwords, extra charges
              apply. Contact us at{" "}
              <a
                href="mailto:contact@rushbeegaming.com"
                className="text-amber-400 hover:text-amber-300"
              >
                contact@rushbeegaming.com
              </a>{" "}
              for enterprise security options.
            </p>
          </div>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            8.3 Security Limitations
          </h4>
          <p className="text-zinc-300">
            While we implement reasonable security measures, no method of
            transmission over the Internet or electronic storage is 100% secure.
            We cannot guarantee absolute security of your data. Owners are
            responsible for implementing appropriate security measures on their
            end, including firewalls, antivirus software, and regular system
            updates.
          </p>
        </>
      ),
    },
    {
      id: "data-retention",
      title: "9. Data Retention",
      content: (
        <>
          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            9.1 Retention Period
          </h4>
          <p className="mb-4 text-zinc-300">
            We retain your data for as long as your account is active or as
            needed to provide you services. Currently, we do not have a specific
            data retention period for cancelled subscriptions. Your data remains
            in our systems until you request deletion.
          </p>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            9.2 Data After Subscription Cancellation
          </h4>
          <p className="text-zinc-300">
            If your subscription is cancelled or expires, your data will remain
            stored in our systems. If you wish to have your data permanently
            deleted, you must submit a deletion request (see Section 10 - Your
            Rights).
          </p>
        </>
      ),
    },
    {
      id: "user-rights",
      title: "10. Your Rights",
      content: (
        <>
          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            10.1 Right to Access and Export Data
          </h4>
          <p className="mb-4 text-zinc-300">
            Owners have the right to access and export their data at any time.
            RushBee Cntrl provides built-in data export functionality:
          </p>
          <ul className="list-disc list-inside space-y-1 text-zinc-300 mb-4">
            <li>Export user data, sessions, bookings, and inventory transactions</li>
            <li>Apply filters to customize your export</li>
            <li>Data is provided in CSV format for easy use</li>
          </ul>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            10.2 Right to Deletion
          </h4>
          <p className="mb-4 text-zinc-300">
            Owners have the right to request complete deletion of their account
            and all associated data.
          </p>
          <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 mb-4">
            <p className="text-zinc-300 mb-2">
              <strong className="text-red-400">
                Account Deletion Process:
              </strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-zinc-300 text-sm">
              <li>
                Send an email to{" "}
                <a
                  href="mailto:contact@rushbeegaming.com"
                  className="text-amber-400 hover:text-amber-300"
                >
                  contact@rushbeegaming.com
                </a>{" "}
                requesting account deletion
              </li>
              <li>Include your registered email and cafe name</li>
              <li>Our team will verify your identity and process the request</li>
              <li>
                Upon acknowledgment, your POS and all related data will be{" "}
                <strong>permanently erased</strong>
              </li>
              <li>This is not a soft delete - data cannot be recovered</li>
            </ul>
          </div>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            10.3 Right to Correction
          </h4>
          <p className="text-zinc-300">
            You can update or correct your account information at any time
            through RushBee Cntrl. For assistance with data corrections, contact
            our support team.
          </p>
        </>
      ),
    },
    {
      id: "communications",
      title: "11. Communications and Marketing",
      content: (
        <>
          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            11.1 Types of Communications
          </h4>
          <p className="mb-2 text-zinc-300">We may send you:</p>
          <ul className="list-disc list-inside space-y-1 text-zinc-300 mb-4">
            <li>
              <strong>Service Communications:</strong> Important updates about
              your subscription, billing reminders, and system notifications
              (cannot be opted out)
            </li>
            <li>
              <strong>Promotional Messages:</strong> Information about new
              features, offers, and updates
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-zinc-100 mb-3">
            11.2 Opting Out of Promotional Messages
          </h4>
          <p className="mb-4 text-zinc-300">
            You can opt out of promotional communications at any time by:
          </p>
          <div className="grid gap-3">
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-zinc-400">WhatsApp</p>
                <p className="text-zinc-300">
                  Reply to our WhatsApp messages requesting to opt out
                </p>
              </div>
            </div>
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
                <p className="text-zinc-300">
                  Send an opt-out request to{" "}
                  <a
                    href="mailto:contact@rushbeegaming.com"
                    className="text-amber-400 hover:text-amber-300"
                  >
                    contact@rushbeegaming.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "children",
      title: "12. Children's Privacy",
      content: (
        <>
          <p className="mb-4 text-zinc-300">
            RushBee Cntrl is designed for use by gaming cafe owners who are 18
            years of age or older. We do not knowingly collect personal
            information directly from children.
          </p>
          <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4 mb-4">
            <p className="text-zinc-300">
              <strong className="text-amber-400">Owner Responsibility:</strong>{" "}
              The Owner is solely responsible for ensuring that appropriate
              games and applications are made available to Users of all ages.
              RushBee does not have a child mode feature, and the Owner must
              exercise discretion in managing content accessible through Shell.
            </p>
          </div>
          <p className="text-zinc-300">
            If a parent or guardian becomes aware that their child has provided
            personal information through a gaming cafe using RushBee, they
            should contact the cafe Owner directly to address any concerns.
          </p>
        </>
      ),
    },
    {
      id: "geographic",
      title: "13. Geographic Scope",
      content: (
        <>
          <p className="mb-4 text-zinc-300">
            RushBee services are currently available only within{" "}
            <strong>India</strong>. We do not serve customers outside of India
            at this time.
          </p>
          <p className="text-zinc-300">
            This Privacy Policy is governed by and construed in accordance with
            the laws of India, including the Information Technology Act, 2000
            and its associated rules. As we expand to other regions in the
            future, this policy will be updated to reflect applicable data
            protection regulations.
          </p>
        </>
      ),
    },
    {
      id: "changes",
      title: "14. Changes to This Privacy Policy",
      content: (
        <>
          <p className="mb-4 text-zinc-300">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons.
          </p>
          <p className="mb-4 text-zinc-300">
            When we make changes, we will:
          </p>
          <ul className="list-disc list-inside space-y-1 text-zinc-300 mb-4">
            <li>Update the "Last Updated" date at the top of this policy</li>
            <li>Notify you via email for significant changes</li>
            <li>Send WhatsApp notifications when applicable</li>
            <li>Provide in-app notifications within RushBee Cntrl</li>
          </ul>
          <p className="text-zinc-300">
            Your continued use of RushBee after any changes indicates your
            acceptance of the updated Privacy Policy.
          </p>
        </>
      ),
    },
    {
      id: "contact",
      title: "15. Contact Us",
      content: (
        <>
          <p className="mb-4 text-zinc-300">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please contact us:
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-full mb-6">
              <svg
                className="w-8 h-8 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-100 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-6">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your data when using RushBee Cntrl and
              Shell.
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
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-zinc-100 mb-6 pb-2 border-b border-zinc-800">
                {section.title}
              </h2>
              <div className="prose prose-invert prose-zinc max-w-none">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {/* Summary Section */}
        <section className="mt-16 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-500/30 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-emerald-400 mb-4">
              Your Privacy Matters
            </h3>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              We are committed to protecting your privacy and handling your data
              responsibly. We do not sell or share your data with third parties.
              If you have any questions about our privacy practices, please
              don't hesitate to contact us.
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

export default PrivacyPolicy;
