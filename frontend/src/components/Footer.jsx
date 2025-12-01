import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' }
  ];

  const productCategories = [
    'Car Body Parts',
    'Rubber Parts',
    'PVC Bumper',
    'Mechanical Parts',
    'Side Mirrors',
    'Lighting'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-2xl font-bold text-white">U</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">
                  <span className="text-accent">Unity</span>
                  <span className="text-white"> Auto Parts</span>
                  </h3>
                <p className="text-xs text-primary-foreground/80">Quality You Trust</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Wholesaler and Retailer of premium car accessories, body parts, and mechanical components. Your trusted partner for quality auto parts.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <Link
                    to="/products"
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  Near Tirupati Timber Mart,<br />
                  Ahmedabad-Palanpur Highway,<br />
                  Kanodar-385520, B.k., Gujarat
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="text-sm text-primary-foreground/70">
                  <a href="tel:+919537187262" className="hover:text-accent transition-colors block">
                    +91 9537187262
                  </a>
                  <a href="tel:+919157200308" className="hover:text-accent transition-colors block">
                    +91 9157200308
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:unityautoparts110@gmail.com"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  unityautoparts110@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-primary-foreground/10 rounded-lg">
              <p className="text-xs text-primary-foreground/70">
                <span className="font-semibold">GSTIN:</span> 248ZEPA8547C1ZP
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Unity Auto Parts. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-primary-foreground/60">
              <Link to="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};