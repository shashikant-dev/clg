import { Facebook, Instagram, MapPin, Phone, Mail, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#1a1d3a] text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Top Section - Logo and Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 pb-12 border-b border-gray-700">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Shree Geet Law College"
              className="h-16 md:h-20 w-auto"
            />
          </div>

          {/* Newsletter */}
          <div className="w-full lg:w-auto lg:min-w-[500px]">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Newsletter</h3>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                className="flex-1 px-4 py-3 md:px-6 md:py-4 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 md:px-8 md:py-4 bg-brand-red-dark hover:bg-brand-red text-white font-semibold rounded-md transition-colors duration-300 whitespace-nowrap"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Contact Us */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-gray-400" />
                <p className="text-sm md:text-base">
                  Chandpur-Khaneepur, Sitapur Road, BKT, Lucknow
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-gray-400" />
                <a href="tel:+917408929200" className="text-sm md:text-base hover:text-brand-red transition-colors">
                  +917408929200
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-gray-400" />
                <a href="tel:+919118654498" className="text-sm md:text-base hover:text-brand-red transition-colors">
                  +919118654498
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-gray-400" />
                <a href="mailto:shreegeet59812@gmail.com" className="text-sm md:text-base hover:text-brand-red transition-colors break-all">
                  shreegeet59812@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/shreegeetlawcollege/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-transparent border-2 border-white rounded-full flex items-center justify-center hover:bg-brand-red-dark hover:border-brand-red-dark transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-transparent border-2 border-white rounded-full flex items-center justify-center hover:bg-brand-red-dark hover:border-brand-red-dark transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Our Courses */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6">Our Courses</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="/courses#llb-3-years" className="text-sm md:text-base hover:text-brand-red transition-colors flex items-center gap-2">
                  <span className="text-brand-red-dark">›</span>
                  LLB 3 Years Course
                </a>
              </li>
              <li>
                <a href="/courses#llb-5-years" className="text-sm md:text-base hover:text-brand-red transition-colors flex items-center gap-2">
                  <span className="text-brand-red-dark">›</span>
                  LLB 5 Years course
                </a>
              </li>
              <li>
                <a href="/courses#certificate" className="text-sm md:text-base hover:text-brand-red transition-colors flex items-center gap-2">
                  <span className="text-brand-red-dark">›</span>
                  Certificate
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="/privacy-policy" className="text-sm md:text-base hover:text-brand-red transition-colors flex items-center gap-2">
                  <span className="text-brand-red-dark">›</span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm md:text-base hover:text-brand-red transition-colors flex items-center gap-2">
                  <span className="text-brand-red-dark">›</span>
                  Terms & Condition
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm md:text-base hover:text-brand-red transition-colors flex items-center gap-2">
                  <span className="text-brand-red-dark">›</span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-[#13152b] py-4 md:py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="text-center sm:text-left">
              Copyright © <span className="text-white">Shree Geet Law College</span>. All Rights Reserved.
            </p>
            <p className="text-center sm:text-right">
              Designed by <span className="text-white">ITMcore</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-brand-red-dark hover:bg-brand-red text-white rounded-md shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
