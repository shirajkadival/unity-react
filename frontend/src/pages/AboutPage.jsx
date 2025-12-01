import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { teamMembers, awards, timeline } from '@/data/team';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'We never compromise on quality and ensure every product meets the highest standards.'
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Our customers are at the heart of everything we do, and we strive for their satisfaction.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'We constantly evolve and improve our products and services to stay ahead.'
    },
    {
      icon: CheckCircle2,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary opacity-95" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-accent">Unity Auto Parts</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Your trusted partner in automotive excellence since 2010. Delivering quality, reliability, and exceptional service to customers across Gujarat and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 border-accent/20 hover:border-accent transition-colors">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center mb-6 shadow-accent">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide premium quality automotive parts at competitive prices while ensuring exceptional customer service. We aim to be the preferred supplier for auto repair shops, dealers, and individual customers by maintaining the highest standards of quality and reliability.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 border-accent/20 hover:border-accent transition-colors">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the leading automotive parts distributor in India, recognized for our commitment to quality, innovation, and customer satisfaction. We envision a future where every vehicle owner has access to reliable, affordable, and high-quality auto parts.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-muted/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
              Our <span className="text-accent">Journey</span>
            </h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30" />

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-20 pb-12 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-1 w-5 h-5 rounded-full bg-accent border-4 border-background" />

                  <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                    <Badge className="bg-accent text-white mb-2">{item.year}</Badge>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Core <span className="text-accent">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our business and define who we are
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meet Our <span className="text-accent">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to your satisfaction
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="overflow-hidden border-border hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-accent font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Awards & <span className="text-accent">Recognition</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Honored for our commitment to excellence and customer satisfaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center border-border hover:border-accent hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-accent mb-2">{award.year}</h3>
                    <h4 className="font-semibold text-foreground mb-2">{award.title}</h4>
                    <p className="text-sm text-muted-foreground">{award.organization}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;