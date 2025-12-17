import { Calendar, Clock, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

/**
 * Events page component displaying upcoming events, weekly schedule, and annual events.
 * Enhanced with homepage design patterns for professional look and feel.
 */
export const Events = memo(() => {
  const { ref: upcomingRef, isInView: upcomingInView } = useInView({ threshold: 0.1 });
  const { ref: weeklyRef, isInView: weeklyInView } = useInView({ threshold: 0.1 });
  const { ref: annualRef, isInView: annualInView } = useInView({ threshold: 0.1 });

  const upcomingEvents = [
    {
      title: "Christmas Candlelight Service",
      date: "December 24, 2024",
      time: "7:00 PM",
      location: "Main Sanctuary",
      description: "Join us for a special evening of worship as we celebrate the birth of our Savior with candlelight, carols, and the Christmas story.",
      category: "Special Service",
      image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80"
    },
    {
      title: "New Year's Prayer Service",
      date: "December 31, 2024",
      time: "10:00 PM - 12:30 AM",
      location: "Main Sanctuary",
      description: "End the year in prayer and begin the new year seeking God's face. A powerful time of worship, reflection, and intercession.",
      category: "Prayer Meeting",
      image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&q=80"
    },
    {
      title: "Winter Bible Conference",
      date: "January 12-14, 2025",
      time: "Various Times",
      location: "Church Campus",
      description: "Three days of intensive Bible teaching, worship, and fellowship. Guest speakers will expound on the theme 'Standing Firm in Christ.'",
      category: "Conference",
      image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80"
    },
    {
      title: "Men's Prayer Breakfast",
      date: "January 18, 2025",
      time: "7:00 AM - 9:00 AM",
      location: "Fellowship Hall",
      description: "Men, join us for a hearty breakfast and a powerful time of prayer as we seek God's guidance and strength for the year ahead.",
      category: "Men's Ministry",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
    },
    {
      title: "Women's Bible Study Launch",
      date: "January 20, 2025",
      time: "10:00 AM",
      location: "Room 201",
      description: "Begin the new year diving deep into God's Word. This semester we'll be studying the book of Philippians: Joy in Christ.",
      category: "Women's Ministry",
      image: "https://images.unsplash.com/photo-1609234656388-0ff363383899?w=800&q=80"
    },
    {
      title: "Youth Winter Retreat",
      date: "February 2-4, 2025",
      time: "Weekend",
      location: "Camp Shiloh",
      description: "An unforgettable weekend for our youth filled with worship, teaching, outdoor activities, and life-changing fellowship.",
      category: "Youth Ministry",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80"
    }
  ];

  const recurringEvents = [
    {
      title: "Sunday Morning Worship",
      time: "9:00 AM & 11:00 AM",
      description: "Join us for biblical preaching, passionate worship, and corporate prayer.",
      icon: "worship"
    },
    {
      title: "Wednesday Bible Study",
      time: "7:00 PM",
      description: "Midweek Bible study where we dig deeper into God's Word together.",
      icon: "study"
    },
    {
      title: "Friday Youth Service",
      time: "7:00 PM",
      description: "High-energy worship and relevant teaching designed for young people.",
      icon: "youth"
    },
    {
      title: "Saturday Prayer Meeting",
      time: "6:00 AM",
      description: "Early morning intercession for our church, community, and world.",
      icon: "prayer"
    }
  ];

  const annualEvents = [
    {
      title: "Easter Services",
      description: "Celebrate the resurrection of our Lord with special sunrise service and worship celebration.",
      icon: "🌅"
    },
    {
      title: "Vacation Bible School",
      description: "A week of fun, games, and Bible learning for children in our community each summer.",
      icon: "📚"
    },
    {
      title: "Fall Harvest Festival",
      description: "Community celebration with food, games, and fellowship for the whole family.",
      icon: "🍂"
    },
    {
      title: "Women's Conference",
      description: "Annual gathering for women featuring worship, teaching, and meaningful connections.",
      icon: "💐"
    },
    {
      title: "Men's Retreat",
      description: "Weekend away for men to be challenged, equipped, and refreshed in their faith.",
      icon: "⛰️"
    },
    {
      title: "Mission Conference",
      description: "Annual focus on global missions with guest missionaries and special speakers.",
      icon: "🌍"
    }
  ];

  const formatDate = (dateString: string) => {
    const parts = dateString.replace(',', '').split(' ');
    const month = parts[0];
    const day = parts[1];
    return {
      month: month.slice(0, 3),
      day: day.replace(/[^0-9]/g, ''),
    };
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Special Service': 'bg-accent-500',
      'Prayer Meeting': 'bg-purple-500',
      'Conference': 'bg-primary-500',
      'Men\'s Ministry': 'bg-blue-600',
      'Women\'s Ministry': 'bg-pink-500',
      'Youth Ministry': 'bg-green-500',
    };
    return colors[category] || 'bg-neutral-500';
  };

  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519167758481-83f29da8c835?w=1920&q=80)' }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/70 to-primary-900/85" />

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              {/* Decorative Line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="h-1 bg-accent-500 mb-6 rounded-full"
              />

              {/* Title */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Events & Calendar
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-white/90 mb-8 font-light max-w-2xl">
                Join us for worship services, special events, and ministry gatherings throughout the year. Experience community and grow in faith together.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a href="#upcoming" className="btn-primary text-base px-8 py-4">
                  View Upcoming Events
                </a>
                <a href="#weekly" className="btn-secondary text-base px-8 py-4">
                  Weekly Schedule
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="upcoming" className="section-padding bg-white relative" ref={upcomingRef}>
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={upcomingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-accent-500 rounded-full" />
              <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">
                Don't Miss Out
              </span>
              <div className="w-12 h-0.5 bg-accent-500 rounded-full" />
            </div>
            <h2 className="text-primary-800 mb-4">Upcoming Events</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Mark your calendar for these special services and ministry events. Come experience the presence of God with us.
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => {
              const date = formatDate(event.date);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={upcomingInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="card overflow-hidden group h-full flex flex-col">
                    {/* Image with Overlay */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />

                      {/* Date Badge */}
                      <div className="absolute top-4 left-4 bg-white rounded-xl shadow-md overflow-hidden text-center min-w-[70px]">
                        <div className="bg-accent-500 text-white text-xs font-bold py-1 px-3 uppercase">
                          {date.month}
                        </div>
                        <div className="py-2 px-3">
                          <div className="text-2xl font-display font-bold text-primary-800">
                            {date.day}
                          </div>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 ${getCategoryColor(event.category)} text-white text-xs font-semibold rounded-full`}>
                          {event.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-display font-semibold text-primary-800 mb-3 group-hover:text-primary-600 transition-colors">
                        {event.title}
                      </h3>

                      <p className="text-neutral-600 text-sm mb-4 line-clamp-2 flex-1">
                        {event.description}
                      </p>

                      <div className="space-y-2 text-sm text-neutral-500 mb-4">
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-accent-500 flex-shrink-0" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-accent-500 flex-shrink-0" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <button className="inline-flex items-center gap-2 text-primary-700 font-semibold text-sm hover:text-accent-600 transition-colors group/link">
                        Learn More
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Weekly Schedule Section */}
      <section id="weekly" className="section-padding bg-primary-800 text-white relative overflow-hidden" ref={weeklyRef}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />

        <div className="container-custom relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={weeklyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-accent-500 rounded-full" />
              <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">
                Join Us Weekly
              </span>
              <div className="w-12 h-0.5 bg-accent-500 rounded-full" />
            </div>
            <h2 className="text-white mb-4">Weekly Schedule</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Our regular gatherings for worship, prayer, and Bible study. Everyone is welcome.
            </p>
          </motion.div>

          {/* Schedule Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {recurringEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={weeklyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-accent-500/50 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-accent-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-500 transition-colors duration-300">
                  <Calendar className="w-7 h-7 text-accent-400 group-hover:text-white transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-semibold text-white mb-2">
                  {event.title}
                </h3>

                {/* Time */}
                <div className="flex items-center gap-2 text-accent-400 mb-3">
                  <Clock size={16} />
                  <span className="font-medium">{event.time}</span>
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm">{event.description}</p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/0 to-primary-500/0 group-hover:from-accent-500/5 group-hover:to-primary-500/5 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Events Section */}
      <section className="section-padding bg-white" ref={annualRef}>
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={annualInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-accent-500 rounded-full" />
              <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                <Sparkles size={14} />
                Special Occasions
              </span>
              <div className="w-12 h-0.5 bg-accent-500 rounded-full" />
            </div>
            <h2 className="text-primary-800 mb-4">Annual Events</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Special events we look forward to throughout the year that bring our community together.
            </p>
          </motion.div>

          {/* Annual Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {annualEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={annualInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card text-center p-8 group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {event.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-primary-800 mb-3 group-hover:text-primary-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="w-16 h-16 bg-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-accent-400" />
            </div>
            <h2 className="mb-6 text-white">Stay Connected</h2>
            <p className="text-xl mb-8 text-white/80 leading-relaxed max-w-2xl mx-auto">
              Never miss an event! Subscribe to our newsletter to receive updates about upcoming services, special events, and ministry gatherings.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="btn-primary px-8 py-4">
                Subscribe to Newsletter
              </button>
              <a href="/contact" className="btn-secondary px-8 py-4">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
});

Events.displayName = 'Events';
