import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: [
        'Near Tirupati Timber Mart',
        'Ahmedabad-Palanpur Highway',
        'Kanodar-385520, B.k., Gujarat'
      ]
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+91 9537187262',
        '+91 9157200308',
        '+91 8200729901 (WhatsApp)'
      ]
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'unityautoparts110@gmail.com'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Saturday: 9:00 AM - 8:00 PM',
        'Sunday: 10:00 AM - 6:00 PM'
      ]
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Message sent successfully!', {
      description: 'We\'ll get back to you within 24 hours.'
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
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
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
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
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 pb-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-2 border-accent/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Fill out the form below and we'll get back to you shortly
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell us about your requirements..."
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-2 min-h-32"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent-dark text-white shadow-accent group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="sticky top-24">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-square lg:aspect-auto lg:h-[600px] bg-muted relative">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.234567890123!2d72.5!3d24.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDMwJzAwLjAiTiA3MsKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Unity Auto Parts Location"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact Card */}
                <Card className="mt-6 bg-gradient-to-br from-primary to-primary-light text-white border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                    <div className="space-y-3">
                      <a
                        href="tel:+919537187262"
                        className="flex items-center space-x-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
                      >
                        <Phone className="w-5 h-5 text-accent" />
                        <div>
                          <p className="text-sm text-white/70">Call Now</p>
                          <p className="font-semibold group-hover:text-accent transition-colors">+91 9537187262</p>
                        </div>
                      </a>
                      <a
                        href="https://wa.me/918200729901"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
                      >
                        <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                          <Phone className="w-3 h-3 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-white/70">WhatsApp</p>
                          <p className="font-semibold group-hover:text-accent transition-colors">+91 8200729901</p>
                        </div>
                      </a>
                      <a
                        href="mailto:unityautoparts110@gmail.com"
                        className="flex items-center space-x-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
                      >
                        <Mail className="w-5 h-5 text-accent" />
                        <div>
                          <p className="text-sm text-white/70">Email</p>
                          <p className="font-semibold group-hover:text-accent transition-colors break-all">unityautoparts110@gmail.com</p>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GSTIN Info */}
      <section className="py-12 bg-muted/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-2">GST Registered Business</p>
                <p className="text-lg font-semibold text-foreground">
                  GSTIN: <span className="text-accent">248ZEPA8547C1ZP</span>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;