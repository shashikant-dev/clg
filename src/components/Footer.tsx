import { Facebook, Twitter, Linkedin, Youtube, Instagram, Dribbble } from 'lucide-react';

const socialIcons = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Youtube, href: '#' },
  { icon: Instagram, href: '#' },
  // { icon: Dribbble, href: '#' },
];

const footerLinks = ["Programmes", "Faculty", "Infrastructure", "Events", "Placements"];

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {socialIcons.map((social, index) => (
              <a key={index} href={social.href} className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-brand-red-dark hover:text-white transition-colors duration-300">
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
            {footerLinks.map(link => (
              <a key={link} href="#" className="font-roboto text-base hover:text-brand-red transition-colors duration-300">{link}</a>
            ))}
          </nav>

          <button className="border border-white rounded-full px-8 py-3 font-roboto text-base hover:bg-white hover:text-black transition-colors duration-300 mb-12">
            Contact Us
          </button>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
            <p className="text-center font-roboto font-light text-sm text-gray-400">
                © 2025 All Rights Reserved
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
