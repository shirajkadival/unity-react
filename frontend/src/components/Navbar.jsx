import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      // className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      //   isScrolled ? 'glass-effect shadow-md' : 'bg-transparent'
      // }`}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/10 shadow-lg"
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="relative"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">U</span>
              </div>
              <motion.div
                className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-accent"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <div>
              <h1 className="text-xl font-bold">
                <span className="text-accent">Unity</span>{' '}
                <span className="text-white">Auto Parts</span>
              </h1>
              
              <p className="text-xs text-white/80 drop-shadow-sm">
                Quality You Trust
              </p>
            </div>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant="ghost"
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-accent'
                      : 'text-primary hover:text-accent'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Button>
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+919537187262" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 9537187262</span>
            </a>
            <Link to="/contact">
              <Button className="bg-accent hover:bg-accent-dark text-white shadow-accent">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect border-t border-border"
          >
            <div className="section-container py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${
                      location.pathname === link.path
                        ? 'bg-accent/10 text-accent'
                        : 'text-foreground'
                    }`}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
              <div className="pt-4 space-y-2 border-t border-border">
                <a href="tel:+919537187262" className="flex items-center space-x-2 text-sm text-muted-foreground p-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 9537187262</span>
                </a>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-accent hover:bg-accent-dark text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};