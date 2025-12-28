import { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Quote } from 'lucide-react';

// Simple Portable Text renderer for basic blocks
const SimplePortableText = ({ value }: { value: any[] }) => {
  if (!value || !Array.isArray(value)) return null;

  return (
    <>
      {value.map((block, index) => {
        if (block._type !== 'block') return null;

        const isQuote = block.style === 'blockquote';
        const children = block.children?.map((child: any, childIndex: number) => {
          if (!child.text) return null;

          let text = child.text;
          const marks = child.marks || [];

          if (marks.includes('strong')) {
            return (
              <strong key={childIndex} className="font-semibold text-[var(--color-primary)]">
                {text}
              </strong>
            );
          }

          if (marks.includes('em')) {
            return <em key={childIndex} className="italic">{text}</em>;
          }

          return <span key={childIndex}>{text}</span>;
        });

        if (isQuote) {
          return (
            <blockquote
              key={index}
              className="border-l-4 border-[var(--color-secondary)] pl-6 italic my-6 text-slate-600"
            >
              {children}
            </blockquote>
          );
        }

        return (
          <p key={index} className="mb-4 text-base lg:text-lg leading-relaxed">
            {children}
          </p>
        );
      })}
    </>
  );
};

interface PastorWelcomeProps {
  title?: string;
  subtitle?: string;
  pastorName: string;
  pastorTitle: string;
  pastorImage: string;
  welcomeMessage: any[];
  signature?: string;
  callToAction?: {
    enabled: boolean;
    label: string;
    href: string;
  };
}

/**
 * Pastor Welcome Section Component
 *
 * Displays a personal welcome message from the church pastor with their photo.
 * Features side-by-side layout on desktop, stacked on mobile.
 * Includes rich text support via Portable Text for the welcome message.
 *
 * Professional design following church website best practices:
 * - Personal connection through pastor's photo and message
 * - Trust-building through leadership visibility
 * - Clear call-to-action for visitors
 * - Responsive layout with proper spacing
 */
export const PastorWelcome = memo(({
  title = "A Message from Our Pastor",
  subtitle,
  pastorName,
  pastorTitle,
  pastorImage,
  welcomeMessage,
  signature,
  callToAction
}: PastorWelcomeProps) => {
  // Import fallback content from data.ts
  const DEFAULT_PASTOR_MESSAGE = [
    {
      _type: 'block',
      children: [
        {
          _type: 'span',
          text: 'Welcome to Deeper Life Bible Church Tampa! We are so glad you are here. Whether you are visiting for the first time or have been part of our church family for years, it is our prayer that you encounter the living God as we gather to worship Him together.'
        }
      ]
    },
    {
      _type: 'block',
      children: [
        {
          _type: 'span',
          text: 'Our church is committed to the faithful teaching of God\'s Word, passionate worship, and authentic community. We believe that the Bible is God\'s revealed truth, and we are dedicated to living according to its principles in holiness and love.'
        }
      ]
    },
    {
      _type: 'block',
      children: [
        {
          _type: 'span',
          text: 'I invite you to join us this Sunday as we study the Scriptures together, lift our voices in praise, and fellowship with other believers. May the Lord bless you richly as you seek to know Him more deeply and serve Him more faithfully.'
        }
      ]
    }
  ];

  const messageContent = welcomeMessage && welcomeMessage.length > 0
    ? welcomeMessage
    : DEFAULT_PASTOR_MESSAGE;

  return (
    <section className="bg-gradient-to-br from-[var(--color-tertiary)] via-white to-[var(--color-rose)]/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-secondary)]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="section-shell relative">
        {/* Section Header */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--color-secondary)] font-semibold tracking-wide uppercase text-sm mb-3 text-center"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
        >
          {title}
        </motion.h2>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Pastor Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] lg:h-[600px] overflow-hidden rounded-[32px] border-4 border-white shadow-[0_35px_90px_rgba(10,7,20,0.15)] group">
              <img
                src={pastorImage}
                alt={`${pastorName}, ${pastorTitle}`}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay with Pastor Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-primary)]/95 via-[var(--color-primary)]/80 to-transparent p-8">
                <h3 className="text-white font-display text-2xl font-bold mb-1">
                  {pastorName}
                </h3>
                <p className="text-white/80 text-lg font-medium">
                  {pastorTitle}
                </p>
              </div>

              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Quote className="text-white" size={32} />
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--color-secondary)] rounded-full opacity-20 blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[var(--color-primary)] rounded-full opacity-15 blur-2xl -z-10" />
          </motion.div>

          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <div className="text-slate-700 leading-relaxed space-y-4">
                <SimplePortableText value={messageContent} />
              </div>
            </div>

            {/* Signature */}
            {signature && (
              <div className="pt-4 border-t border-slate-200">
                <p className="font-accent text-xl text-slate-600 italic">
                  {signature}
                </p>
              </div>
            )}

            {/* Call to Action */}
            {callToAction?.enabled && (
              <div className="pt-6">
                <Link
                  to={callToAction.href}
                  className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-full hover:bg-[var(--color-primary)]/90 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
                >
                  {callToAction.label}
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
});

PastorWelcome.displayName = 'PastorWelcome';

export default PastorWelcome;
