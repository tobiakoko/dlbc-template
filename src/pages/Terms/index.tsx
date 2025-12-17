import { PageHero } from '@/components/sections/PageHero';
import { motion } from 'framer-motion';

export function Terms() {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Terms of Use"
        description="Please read these terms carefully before using our website and services."
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

              <h2>Acceptance of Terms</h2>
              <p>
                Welcome to the Deeper Life Bible Church Tampa website. By accessing or using our website,
                you agree to be bound by these Terms of Use. If you do not agree with any part of these
                terms, please do not use our website.
              </p>

              <h2>Use of Website</h2>
              <h3>Permitted Use</h3>
              <p>
                You may use our website for lawful purposes only and in accordance with these Terms. You
                agree not to:
              </p>
              <ul>
                <li>Use the website in any way that violates any applicable law or regulation</li>
                <li>Impersonate or attempt to impersonate the church, church staff, or other users</li>
                <li>Interfere with or disrupt the website or servers</li>
                <li>Attempt to gain unauthorized access to any portion of the website</li>
                <li>Use automated systems to access the website without our permission</li>
                <li>Post or transmit harmful, offensive, or inappropriate content</li>
              </ul>

              <h3>User Accounts</h3>
              <p>
                If you create an account on our website, you are responsible for:
              </p>
              <ul>
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Providing accurate and complete information</li>
              </ul>

              <h2>Intellectual Property</h2>
              <h3>Ownership</h3>
              <p>
                The content on this website, including text, graphics, logos, images, audio, video, and
                software, is the property of Deeper Life Bible Church Tampa or its content suppliers and
                is protected by copyright and other intellectual property laws.
              </p>

              <h3>Limited License</h3>
              <p>
                We grant you a limited, non-exclusive, non-transferable license to access and use our
                website for personal, non-commercial purposes. This license does not include:
              </p>
              <ul>
                <li>Modifying or copying materials</li>
                <li>Using materials for commercial purposes</li>
                <li>Removing copyright or proprietary notices</li>
                <li>Transferring materials to another person</li>
                <li>Reproducing, duplicating, or copying materials without permission</li>
              </ul>

              <h3>Sermon Content</h3>
              <p>
                Sermon recordings and teaching materials are provided for personal spiritual growth and
                church ministry use. You may:
              </p>
              <ul>
                <li>Listen to or download sermons for personal use</li>
                <li>Share sermon links with others</li>
                <li>Use brief excerpts with proper attribution for educational purposes</li>
              </ul>

              <p>
                You may not:
              </p>
              <ul>
                <li>Sell or commercially distribute sermon content</li>
                <li>Alter or edit sermon recordings</li>
                <li>Use sermons in a manner that misrepresents the church's teachings</li>
              </ul>

              <h2>User-Generated Content</h2>
              <h3>Submissions</h3>
              <p>
                If you submit content to our website (such as prayer requests, comments, or testimonies),
                you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use,
                reproduce, modify, and display that content for ministry purposes.
              </p>

              <h3>Content Standards</h3>
              <p>
                All user-generated content must:
              </p>
              <ul>
                <li>Be truthful and accurate</li>
                <li>Respect the privacy and rights of others</li>
                <li>Be appropriate for a church community</li>
                <li>Not contain offensive, harmful, or inappropriate material</li>
                <li>Not promote any commercial products or services</li>
              </ul>

              <p>
                We reserve the right to remove any content that violates these standards.
              </p>

              <h2>Donations and Payments</h2>
              <p>
                Online donations are processed securely through our payment processor. All donations are
                final and non-refundable unless otherwise required by law. Donations are tax-deductible
                to the extent permitted by law, and we will provide donation receipts as appropriate.
              </p>

              <h2>Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. These links are provided for your
                convenience only. We do not endorse or control these websites and are not responsible for
                their content, privacy practices, or terms of use.
              </p>

              <h2>Disclaimer of Warranties</h2>
              <p>
                Our website is provided "as is" and "as available" without warranties of any kind, either
                express or implied. We do not warrant that:
              </p>
              <ul>
                <li>The website will be uninterrupted or error-free</li>
                <li>Defects will be corrected</li>
                <li>The website is free of viruses or harmful components</li>
                <li>Information on the website is accurate or complete</li>
              </ul>

              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Deeper Life Bible Church Tampa shall not be liable
                for any indirect, incidental, special, consequential, or punitive damages arising out of or
                related to your use of the website.
              </p>

              <h2>Spiritual Guidance Disclaimer</h2>
              <p>
                While we provide biblical teaching and spiritual resources, content on this website is not
                a substitute for personal pastoral counseling or professional advice. For specific spiritual
                guidance, please contact our pastoral team directly.
              </p>

              <h2>Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Use at any time. Changes will be effective
                immediately upon posting to the website. Your continued use of the website after changes
                are posted constitutes acceptance of the modified terms.
              </p>

              <h2>Termination</h2>
              <p>
                We may terminate or suspend your access to our website immediately, without prior notice,
                for any reason, including if you breach these Terms of Use.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms of Use are governed by the laws of the State of Florida, United States, without
                regard to its conflict of law provisions. Any legal action arising from these terms shall be
                brought in the courts of Tampa, Florida.
              </p>

              <h2>Contact Information</h2>
              <p>
                If you have questions about these Terms of Use, please contact us:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 not-prose">
                <p className="mb-2"><strong>Deeper Life Bible Church Tampa</strong></p>
                <p className="mb-2">1234 Faith Avenue</p>
                <p className="mb-2">Tampa, FL 33601</p>
                <p className="mb-2">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@dclmtampa.org" className="text-primary-600 hover:text-primary-700">
                    info@dclmtampa.org
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:8135550123" className="text-primary-600 hover:text-primary-700">
                    (813) 555-0123
                  </a>
                </p>
              </div>

              <h2>Severability</h2>
              <p>
                If any provision of these Terms of Use is found to be unenforceable or invalid, that
                provision shall be limited or eliminated to the minimum extent necessary, and the remaining
                provisions shall remain in full force and effect.
              </p>

              <h2>Entire Agreement</h2>
              <p>
                These Terms of Use, together with our Privacy Policy, constitute the entire agreement
                between you and Deeper Life Bible Church Tampa regarding the use of our website.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
