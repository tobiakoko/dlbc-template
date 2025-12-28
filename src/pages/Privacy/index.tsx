import { PageHero } from '@/components/sections/PageHero';
import { motion } from 'framer-motion';
import { CHURCH_INFO } from '@/utils/data';

export function Privacy() {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Privacy Policy"
        description="Your privacy is important to us. Learn how we collect, use, and protect your information."
      />

      {/* Content Section */}
      <section className="bg-white">
        <div className="section-shell">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-slate-600 text-sm mb-8">
                <strong>Last Updated:</strong> December 17, 2024
              </p>

              <h2>Introduction</h2>
              <p>
                Deeper Life Bible Church Tampa ("we," "us," or "our") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website or attend our church services.
              </p>

              <h2>Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul>
                <li>Register for events or programs</li>
                <li>Submit prayer requests</li>
                <li>Subscribe to our newsletter</li>
                <li>Make online donations</li>
                <li>Contact us through our website</li>
                <li>Fill out forms on our website</li>
              </ul>

              <p>
                This information may include your name, email address, phone number, mailing address,
                and any other information you choose to provide.
              </p>

              <h3>Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect certain information about your
                device, including:
              </p>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Communicate with you about church events, programs, and activities</li>
                <li>Process your prayer requests and provide pastoral care</li>
                <li>Send newsletters and ministry updates</li>
                <li>Process donations and issue receipts</li>
                <li>Improve our website and services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Maintain our church directory (with your consent)</li>
              </ul>

              <h2>Sharing of Information</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share
                your information in the following circumstances:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> We may share information with trusted third-party
                  service providers who assist us in operating our website, conducting ministry activities,
                  or providing services (e.g., payment processors, email service providers).
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your information if required by law
                  or in response to valid legal processes.
                </li>
                <li>
                  <strong>Protection:</strong> We may share information to protect the rights, property,
                  or safety of our church, members, or others.
                </li>
              </ul>

              <h2>Donation Information</h2>
              <p>
                When you make a donation through our website, your payment information is processed
                securely by our payment processor. We do not store credit card information on our servers.
                We maintain records of donations for tax purposes and to provide you with donation receipts.
              </p>

              <h2>Email Communications</h2>
              <p>
                If you subscribe to our newsletter or email list, you may unsubscribe at any time by:
              </p>
              <ul>
                <li>Clicking the "unsubscribe" link in any email we send</li>
                <li>Contacting us directly at info@dclmtampa.org</li>
                <li>Updating your preferences in your account settings</li>
              </ul>

              <h2>Cookies and Tracking Technologies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your experience.
                You can control cookies through your browser settings. Please note that disabling cookies
                may affect the functionality of our website.
              </p>

              <h2>Data Security</h2>
              <p>
                We implement reasonable security measures to protect your personal information from
                unauthorized access, disclosure, alteration, or destruction. However, no internet
                transmission is completely secure, and we cannot guarantee absolute security.
              </p>

              <h2>Children's Privacy</h2>
              <p>
                Our website is not directed to children under 13, and we do not knowingly collect personal
                information from children under 13. If you believe we have collected information from a
                child under 13, please contact us immediately.
              </p>

              <h2>Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to certain types of processing</li>
              </ul>

              <p>
                To exercise these rights, please contact us using the information provided below.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by
                posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy or our privacy practices,
                please contact us:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 not-prose">
                <p className="mb-2"><strong>{CHURCH_INFO.name}</strong></p>
                <p className="mb-2">{CHURCH_INFO.address.street}</p>
                <p className="mb-2">{CHURCH_INFO.address.city}, {CHURCH_INFO.address.state} {CHURCH_INFO.address.zip}</p>
                <p className="mb-2">
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${CHURCH_INFO.email}`} className="text-primary-600 hover:text-primary-700">
                    {CHURCH_INFO.email}
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{' '}
                  <a href={`tel:${CHURCH_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-primary-600 hover:text-primary-700">
                    {CHURCH_INFO.phone}
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
