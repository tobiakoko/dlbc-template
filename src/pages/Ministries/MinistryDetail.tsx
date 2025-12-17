import { useParams, Link } from 'react-router-dom';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useMinistry } from '@/hooks/useMinistry';
import { Calendar, Clock, MapPin, Mail, Users, ChevronLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { memo } from 'react';

/**
 * Individual Ministry Detail Page
 *
 * Displays comprehensive information about a specific ministry including:
 * - Hero section with ministry image
 * - Leader information
 * - Ministry features and details
 * - How to join information
 * - Upcoming events
 * - Resources
 *
 * Integrated with Sanity CMS with fallback data
 */
export const MinistryDetail = memo(() => {
  const { slug } = useParams<{ slug: string }>();
  const { ministry, isLoading } = useMinistry(slug || '');

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-neutral-600 text-lg">Loading ministry details...</div>
      </div>
    );
  }

  if (!ministry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display text-primary-900 mb-4">Ministry Not Found</h1>
          <p className="text-neutral-600 mb-6">The ministry you're looking for doesn't exist.</p>
          <Link to="/ministries" className="btn-primary">
            <ChevronLeft className="inline mr-2" size={20} />
            Back to Ministries
          </Link>
        </div>
      </div>
    );
  }

  const Icon = (ministry as any).icon || Users;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 bg-primary-900">
        {ministry.heroImage && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${ministry.heroImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary-900/90 via-primary-900/80 to-primary-900/90" />
          </>
        )}

        <div className="relative z-10 container-custom">
          <Link
            to="/ministries"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
          >
            <ChevronLeft size={20} />
            Back to All Ministries
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center">
                <Icon size={32} className="text-white" />
              </div>
              <span className="pill-accent bg-white/10 text-white">{ministry.targetAudience || 'All Ages'}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6">
              {ministry.name}
            </h1>

            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {ministry.description}
            </p>

            <div className="flex flex-wrap gap-6 text-white/80">
              {ministry.schedule && (
                <div className="flex items-center gap-2">
                  <Clock size={20} />
                  <span>{ministry.schedule}</span>
                </div>
              )}
              {ministry.meetingLocation && (
                <div className="flex items-center gap-2">
                  <MapPin size={20} />
                  <span>{ministry.meetingLocation}</span>
                </div>
              )}
              {ministry.leader && (
                <div className="flex items-center gap-2">
                  <Users size={20} />
                  <span>Led by {ministry.leader}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      {ministry.longDescription && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                eyebrow="About This Ministry"
                title="Our Mission & Vision"
                align="center"
              />
              <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed">
                <p>{ministry.longDescription}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Leader Section */}
      {ministry.leader && (
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {ministry.leaderImage && (
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-medium">
                    <img
                      src={ministry.leaderImage}
                      alt={ministry.leader}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <span className="pill-accent mb-4">Ministry Leader</span>
                  <h2 className="text-3xl font-display text-primary-900 mb-4">
                    {ministry.leader}
                  </h2>
                  {ministry.leaderBio && (
                    <p className="text-neutral-700 leading-relaxed mb-6">
                      {ministry.leaderBio}
                    </p>
                  )}
                  {ministry.contactEmail && (
                    <a
                      href={`mailto:${ministry.contactEmail}`}
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
                    >
                      <Mail size={20} />
                      Contact {ministry.leader.split(' ')[0]}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {ministry.features && ministry.features.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                eyebrow="What We Offer"
                title="Ministry Features"
                align="center"
                className="mb-12"
              />
              <div className="grid md:grid-cols-2 gap-6">
                {ministry.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-xl bg-primary-50 hover:bg-primary-100 transition-colors"
                  >
                    <CheckCircle className="text-accent-500 flex-shrink-0 mt-1" size={24} />
                    <span className="text-neutral-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How to Join Section */}
      {ministry.joinInfo && (
        <section className="section-padding bg-primary-900 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                eyebrow="Get Involved"
                title="How to Join"
                align="center"
                className="text-white [&_h2]:text-white [&_p]:text-white/90 [&_.pill-accent]:bg-white/10 [&_.pill-accent]:text-white mb-12"
              />

              <div className="surface-card bg-white text-neutral-900 p-8 lg:p-12 mb-8">
                <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                  {ministry.joinInfo.howToJoin}
                </p>

                {ministry.joinInfo.requirements && ministry.joinInfo.requirements.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-display text-primary-900 mb-4">Requirements</h3>
                    <ul className="space-y-2">
                      {ministry.joinInfo.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3 text-neutral-700">
                          <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {ministry.joinInfo.nextSteps && ministry.joinInfo.nextSteps.length > 0 && (
                  <div>
                    <h3 className="text-xl font-display text-primary-900 mb-4">Next Steps</h3>
                    <ol className="space-y-4">
                      {ministry.joinInfo.nextSteps.map((step, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                            {index + 1}
                          </div>
                          <span className="text-neutral-700 leading-relaxed pt-1">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>

              <div className="text-center">
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Contact Us to Get Started
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Events */}
      {ministry.upcomingEvents && ministry.upcomingEvents.length > 0 && (
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <SectionHeader
              eyebrow="What's Happening"
              title="Upcoming Events"
              align="center"
              className="mb-12"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {ministry.upcomingEvents.map((event, index) => (
                <div key={event._key || index} className="surface-card bg-white p-6">
                  <h3 className="text-xl font-display text-primary-900 mb-4">{event.title}</h3>
                  <div className="space-y-2 text-neutral-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-neutral-700 text-sm leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader
              title="Ready to Get Involved?"
              description="We'd love to have you join us! Whether you're looking to serve, grow, or connect with others, there's a place for you."
              align="center"
              className="mb-8"
            />
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link to="/ministries" className="btn-outline">
                Explore Other Ministries
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

MinistryDetail.displayName = 'MinistryDetail';
