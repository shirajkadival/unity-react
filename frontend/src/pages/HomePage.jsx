import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Shield, TrendingUp, Users, Award, Package, Wrench, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { FeatureCard } from '@/components/FeatureCard';
import { ProductCard } from '@/components/ProductCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { products } from '@/data/products';
import { testimonials } from '@/data/testimonials';

const HomePage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every product undergoes rigorous quality checks to ensure premium standards and long-lasting performance.'
    },
    {
      icon: Award,
      title: 'Certified Products',
      description: 'ISO certified parts meeting international standards for automotive excellence and safety.'
    },
    {
      icon: TrendingUp,
      title: 'Competitive Pricing',
      description: 'Best wholesale and retail prices without compromising on quality. Great value for your investment.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated team of automotive experts ready to assist you with product selection and technical guidance.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '1000+', label: 'Happy Customers' },
    { number: '5000+', label: 'Products' },
    { number: '24/7', label: 'Support' }
  ];

  const topProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[40vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-10 md:pt-12 lg:pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary opacity-95" />
          {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-400 to-purple-500 opacity-95" /> */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-400 to-teal-500 opacity-95" /> */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-500 to-green-300 opacity-95" /> */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-200 opacity-95" /> */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-indigo-600 to-pink-500 opacity-95" /> */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-indigo-600 to-pink-500 opacity-95" /> */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-teal-300 via-cyan-400 to-blue-600 opacity-95" /> */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-yellow-400 to-yellow-600 opacity-95" /> */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-teal-200 to-blue-200 opacity-95" /> */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-indigo-600 to-indigo-500 opacity-95" /> */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 opacity-95" /> */}
          {/* <div class="absolute inset-0 bg-gradient-to-r from-[#1F2C47] via-[#142238] to-[#FF7A00] opacity-95"></div> */}
          {/* <div class="absolute inset-0 bg-gradient-to-r from-[#FF7A00] via-[#FF5C00] to-[#1F2C47] opacity-95"></div> */}
          {/* <div class="absolute inset-0 bg-gradient-to-b from-[#1F2C47] via-[#0E1624] to-[#FF7A00] opacity-95"></div> */}
          {/* <div class="absolute inset-0 bg-gradient-to-br from-[#1F2C47] via-[#142238] to-[#FF5C00] opacity-95"></div> */}
          {/* <div class="absolute inset-0 bg-gradient-to-b from-[#FFAA00] via-[#FF7A00] to-[#FF3E00] opacity-95"></div> */}
          {/* <div class="absolute inset-0 bg-gradient-to-br from-[#0E1624] via-[#1F2C47] to-[#FF7A00] opacity-95"></div> */}
          {/* <div class="absolute inset-0 bg-gradient-to-br from-[#142238] to-[#FF3E00] opacity-95"></div> */}
          {/* <div class="absolute inset-0 bg-gradient-to-br from-[#0F1A2E] via-[#1C2E4A] to-[#DA7A32] opacity-95"></div> */}
          {/* <div class="absolute inset-0 bg-gradient-to-br from-[#112036] via-[#1A2F45] to-[#C25A24] opacity-95"></div> */}
          {/* <div class="absolute inset-0 bg-gradient-to-br from-[#1A273A] via-[#23384F] to-[#E86A2A] opacity-90"></div> */}
          {/* <div class="absolute inset-0 bg-gradient-to-br from-[#0E1729] via-[#1C2B43] to-[#F09832] opacity-95"></div> */}
          {/* <div class="absolute inset-0 bg-gradient-to-br from-[#1B2A41] via-[#263A55] to-[#E27B43] opacity-90"></div> */}
          {/* <div class="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1B2A41] to-[#E27B43] opacity-95"></div> */}

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          />
        </div>

        <div className="section-container relative z-10">
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Trusted by 1000+ Customers</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium Auto Parts for{' '}
                <span className="text-accent">Every Vehicle</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
                Wholesaler and Retailer of high-quality car body parts, rubber parts, PVC bumpers, mechanical parts, and more. Your one-stop destination for all automotive needs.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button size="lg" className="bg-accent hover:bg-accent-dark text-white shadow-accent group">
                    Browse Products
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Get Quote
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    className="text-center"
                  >
                    <h3 className="text-3xl font-bold text-accent mb-1">{stat.number}</h3>
                    <p className="text-sm text-white/80">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden sm:block"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <img
                  src='images/hero/hero1.webp'
                  alt="Premium Auto Parts"
                  className="rounded-3xl shadow-2xl"
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-accent/30 rounded-3xl blur-3xl" />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={featuresRef} className="py-20 bg-muted/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why Choose <span className="text-accent">Unity Auto Parts</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best automotive parts with unmatched quality and service
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Selling Products */}
      <section className="py-20">
        <div className="section-container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Top Selling Products
              </h2>
              <p className="text-muted-foreground">Discover our most popular automotive parts</p>
            </div>
            <Link to="/products">
              <Button variant="outline" className="group">
                View All
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our <span className="text-accent">Customers Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from satisfied customers
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-95" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
        />

        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Package className="w-16 h-16 mx-auto mb-6 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Contact us today for the best deals on premium auto parts. Wholesale and retail options available.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent-dark text-white shadow-accent">
                    Contact Us Now
                  </Button>
                </Link>
                <Link to="/products">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Browse Catalog
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;