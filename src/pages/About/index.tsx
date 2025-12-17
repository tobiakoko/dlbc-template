import { BookOpen, Heart, Users, Target, Shield, Lightbulb, Compass } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { PastorModal } from '@/components/PastorModal';
import { PastorCard } from '@/components/cards/PastorCard';
import { PageHero } from '@/components/sections/PageHero';
import { Card } from '@/components/ui/card';

export function About() {
  const [selectedPastor, setSelectedPastor] = useState<any>(null);

  const pastors = [
    {
      name: 'Pastor John Smith',
      title: 'Senior Pastor',
      image: 'https://images.unsplash.com/photo-1624471621620-c30f427546ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0b3IlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTg3NDQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Serving since 1995, Pastor John has a heart for expository preaching and discipleship.',
      bio: 'Serving since 1995, Pastor John has a heart for expository preaching and discipleship. He holds a Master of Divinity from Dallas Theological Seminary and has dedicated his life to teaching the Word of God with clarity and conviction.\n\nUnder his leadership, Deeper Life Bible Church has grown from a small gathering to a vibrant, multi-generational community. Pastor John is passionate about equipping believers to live out their faith in practical, transformative ways.\n\nHe and his wife Sarah have been married for 30 years and have three grown children who are all actively serving in ministry.'
    },
    {
      name: 'Pastor Michael Brown',
      title: 'Associate Pastor',
      image: 'https://images.unsplash.com/photo-1624471621620-c30f427546ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0b3IlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTg3NDQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Pastor Michael oversees our youth ministry and community outreach programs.',
      bio: 'Pastor Michael oversees our youth ministry and community outreach programs. He joined the pastoral team in 2010 and has been instrumental in developing ministries that reach the next generation.\n\nWith a degree in Youth Ministry and years of experience working with young people, Pastor Michael has a unique ability to communicate biblical truth in relevant and engaging ways.\n\nHe is married to Jennifer, and they have two teenage children who are actively involved in the youth group.'
    },
    {
      name: 'Pastor David Lee',
      title: 'Worship Pastor',
      image: 'https://images.unsplash.com/photo-1624471621620-c30f427546ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0b3IlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTg3NDQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Pastor David leads our worship ministry and oversees our music teams.',
      bio: 'Pastor David leads our worship ministry and oversees our music teams. Since joining in 2015, he has cultivated a culture of heartfelt, biblically-grounded worship that draws people into the presence of God.\n\nWith a background in music education and worship theology, Pastor David is committed to training worship leaders and musicians who use their gifts to glorify God.\n\nHe and his wife Rachel lead worship together and are passionate about mentoring the next generation of worship leaders.'
    }
  ];

  const coreValues = [
    {
      icon: BookOpen,
      title: 'Biblical Authority',
      description: 'We believe the Bible is God\'s inspired, inerrant Word and the final authority for faith and practice.'
    },
    {
      icon: Users,
      title: 'Spirit-Led Community',
      description: 'We cultivate authentic relationships where believers encourage, pray for, and serve one another.'
    },
    {
      icon: Heart,
      title: 'Passionate Worship',
      description: 'We gather to exalt God through heartfelt worship, fervent prayer, and joyful celebration.'
    },
    {
      icon: Shield,
      title: 'Expository Preaching',
      description: 'We are committed to clear, faithful exposition of Scripture that applies God\'s truth to daily life.'
    },
    {
      icon: Compass,
      title: 'Intentional Discipleship',
      description: 'We invest in deep, personal mentoring relationships that help believers grow in Christlikeness.'
    },
    {
      icon: Lightbulb,
      title: 'Gospel-Centered Mission',
      description: 'We are committed to sharing the good news of Jesus Christ locally and globally.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="About Deeper Life Bible Church"
        description="A community devoted to knowing God, growing in Christ, and serving others through the power of the Holy Spirit."
      />

      {/* Our Story Section */}
      <section className="bg-white">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">Our Story</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Founded in 1995, Deeper Life Bible Church Tampa has been a beacon of biblical truth
                and spiritual transformation in the Tampa Bay community for nearly three decades.
              </p>
              <p>
                What began as a small gathering of believers committed to expository preaching and
                discipleship has grown into a vibrant, multi-generational church family united by our
                love for Christ and His Word.
              </p>
              <p>
                Through seasons of growth and challenge, our commitment has remained unchanged: to be
                a church where the Bible is taught without compromise, where believers are equipped to
                live out their faith, and where the lost can encounter the transforming power of the Gospel.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[500px] overflow-hidden rounded-[32px] border border-black/5 shadow-[0_35px_90px_rgba(10,7,20,0.15)] group"
          >
            <img
              src="https://images.unsplash.com/photo-1763219804448-84ad92cadb5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBpbnRlcmlvciUyMGNvbmdyZWdhdGlvbnxlbnwxfHx8fDE3NjU3MTI5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Church interior"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-[var(--color-rose)]/70">
        <div className="section-shell">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Mission & Vision</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We exist to glorify God by making disciples who love Christ, live by His Word, and share His love with the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="surface-card bg-white p-10">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-[var(--color-tertiary)] text-[var(--color-primary)]">
                <Target size={32} />
              </div>
              <h3 className="mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To teach the whole counsel of God's Word, equip believers for faithful service, 
                and proclaim the Gospel of Jesus Christ to our community and the world.
              </p>
            </div>

            <div className="surface-card bg-white p-10">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-[var(--color-tertiary)] text-[var(--color-primary)]">
                <Heart size={32} />
              </div>
              <h3 className="mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be a church where lives are transformed by the Gospel, where believers grow deep 
                in their faith, and where every member is equipped and mobilized for kingdom ministry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white">
        <div className="section-shell">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These foundational principles guide everything we do as a church family.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="surface-card bg-white p-10 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-[var(--color-tertiary)] text-[var(--color-primary)] transition-transform duration-300 group-hover:scale-110">
                    <value.icon size={32} />
                  </div>
                  <h3 className="mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement of Faith Section */}
      <section className="bg-[#0c0918] text-white">
        <div className="section-shell">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="mb-4">What We Believe</h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Our core doctrinal beliefs are rooted in historic, biblical Christianity.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="mb-3">The Bible</h3>
                <p className="text-slate-300 leading-relaxed">
                  We believe the Bible is the inspired, inerrant, and authoritative Word of God, 
                  fully sufficient for all matters of faith and practice.
                </p>
              </div>

              <div>
                <h3 className="mb-3">The Trinity</h3>
                <p className="text-slate-300 leading-relaxed">
                  We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit, 
                  co-equal in being, power, and glory.
                </p>
              </div>

              <div>
                <h3 className="mb-3">Salvation</h3>
                <p className="text-slate-300 leading-relaxed">
                  We believe salvation is by grace alone, through faith alone, in Christ alone. It is a 
                  free gift of God, not earned by human works, received through repentance and faith in Jesus Christ.
                </p>
              </div>

              <div>
                <h3 className="mb-3">The Church</h3>
                <p className="text-slate-300 leading-relaxed">
                  We believe the church is the body of Christ, composed of all true believers, 
                  called to worship, fellowship, discipleship, and mission.
                </p>
              </div>

              <div>
                <h3 className="mb-3">The Return of Christ</h3>
                <p className="text-slate-300 leading-relaxed">
                  We believe in the personal, visible, and glorious return of Jesus Christ to judge the 
                  living and the dead and to establish His eternal kingdom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - Enhanced with Bio Modal */}
      <section className="bg-white">
        <div className="section-shell">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Leadership</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              God has blessed us with faithful shepherds who lead with integrity and servant hearts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pastors.map((pastor, index) => (
              <PastorCard 
                key={index}
                name={pastor.name}
                title={pastor.title}
                image={pastor.image}
                description={pastor.description}
                onClick={() => setSelectedPastor(pastor)}
              />
            ))}
          </div>
        </div>
      </section>

      <PastorModal
        isOpen={!!selectedPastor}
        onClose={() => setSelectedPastor(null)}
        pastor={selectedPastor || pastors[0]}
      />
    </div>
  );
}
