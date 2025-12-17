import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { memo, type ReactNode } from 'react';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';

const infoItems: Array<{
  icon: typeof MapPin;
  title: string;
  description: ReactNode;
  subtext: ReactNode;
}> = [
  {
    icon: MapPin,
    title: 'Location',
    description: (
      <>
        123 Church Street
        <br />
        Tampa, FL 33602
      </>
    ),
    subtext: null,
  },
  {
    icon: Phone,
    title: 'Phone',
    description: '(813) 555-0123',
    subtext: 'Monday – Friday · 9:00 AM – 5:00 PM',
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'info@dlbctampa.org',
    subtext: 'We respond within 24 hours.',
  },
  {
    icon: Clock,
    title: 'Service Times',
    description: (
      <>
        Sunday Worship: 9:00 AM & 11:00 AM
        <br />
        Wednesday Bible Study: 7:00 PM
        <br />
        Friday Youth Service: 7:00 PM
      </>
    ),
    subtext: null,
  },
];

const visitSteps = [
  {
    title: 'Warm Welcome',
    description: 'Our connect team will walk with you from the parking lot to your seat.',
  },
  {
    title: 'Relaxed Atmosphere',
    description: 'Come as you are—whether you prefer casual or dressy, you will belong.',
  },
  {
    title: 'Biblical Worship',
    description: 'We open Scripture, worship passionately, and leave time to respond through prayer.',
  },
  {
    title: 'Kids & Students',
    description: 'Safe check-ins, joyful classrooms, and age-specific teaching every Sunday.',
  },
  {
    title: 'Stay & Connect',
    description: 'Chat with pastors and hosts afterwards—we’d love to answer every question.',
  },
];

/**
 * Contact page component with contact information, contact form, visit details, and directions.
 * Uses PageHero for consistent page header and SectionHeader for section titles.
 */
export const Contact = memo(() => {
  return (
    <div>
      <PageHero
        title="Visit Us"
        description="We'd love to meet you! Join us for worship this Sunday or reach out with any questions."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                title="Get in Touch"
                align="left"
                className="mb-8"
              />
              <div className="space-y-8">
                {infoItems.map(({ icon: Icon, title, description, subtext }) => (
                  <div key={title} className="flex gap-4">
                    <div
                      className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[var(--color-tertiary)] text-[var(--color-primary)]"
                      aria-hidden="true"
                    >
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="mb-2">{title}</h3>
                      <p className="text-slate-600 leading-relaxed">{description}</p>
                      {subtext && <p className="text-sm text-slate-500 mt-1">{subtext}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] overflow-hidden rounded-[32px] border border-black/5">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
                alt="Tampa skyline"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/70" aria-hidden="true" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center text-white">
                <MapPin size={48} className="mb-4" aria-hidden="true" />
                <p className="text-xl font-semibold">Map Integration Placeholder</p>
                <p className="mt-2 text-sm text-white/70">123 Church Street, Tampa, FL 33602</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-rose)]/70">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              title="Send Us a Message"
              description="Have a question or need prayer? Fill out the form below and we'll get back to you soon."
              className="mb-12"
            />

            <form className="surface-card bg-white p-8 lg:p-12 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-slate-700">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-[var(--color-primary)] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-2 block text-slate-700">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-[var(--color-primary)] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-slate-700">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-[var(--color-primary)] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-slate-700">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-[var(--color-primary)] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-slate-700">
                  Subject *
                </label>
                <select
                  id="subject"
                  required
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-[var(--color-primary)] focus:outline-none"
                >
                  <option value="">Select a subject</option>
                  <option value="visit">Planning a Visit</option>
                  <option value="prayer">Prayer Request</option>
                  <option value="ministry">Ministry Inquiry</option>
                  <option value="general">General Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-slate-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-[var(--color-primary)] focus:outline-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <SectionHeader
              title="What to Expect on Sunday"
              description="Planning your first visit? Here's what you can expect when you join us for worship."
              className="mb-16"
            />
            <ol className="space-y-6" aria-label="What to expect on Sunday">
              {visitSteps.map((step, index) => (
                <li key={step.title} className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white" aria-hidden="true">
                    {index + 1}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[var(--color-ink)]">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-rose)]/80">
        <div className="container-custom">
          <SectionHeader
            title="Parking & Directions"
            description="Plan ahead so your arrival is relaxed and simple."
            className="mb-10"
          />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="surface-card bg-white p-8">
              <h3 className="mb-4">Parking Information</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Free parking is available in our main lot directly behind the church, with overflow parking each weekend.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Handicap-accessible spaces sit near the main entrance. Our team is ready to help carry bags or assist your family.
              </p>
            </div>
            <div className="surface-card bg-white p-8">
              <h3 className="mb-4">Getting Here</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                <strong>From I-275 North:</strong> Take exit 45 and turn right on Church Street. We’re two miles down on the left.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>From I-275 South:</strong> Take exit 45 and turn left on Church Street. Continue two miles; the campus is on the left.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

Contact.displayName = 'Contact';
