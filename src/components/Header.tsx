import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// Map link names to paths
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "ContactUs", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-black bg-opacity-100 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-24">

          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <img
              src="/logo.png"
              alt="College Logo"
              className="h-20 w-40 object-contain"
            />
          </div>

          {/* Center: Nav */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center space-x-12">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-poppins text-lg tracking-widest-xl relative transition-opacity duration-300 ${index > 0 ? 'opacity-50 hover:opacity-100' : 'opacity-100'}`}
              >
                {link.name}
                {index === 0 && (
                  <span className="absolute bottom-[-8px] left-0 w-full h-0.5 bg-brand-red"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Right: Button (and Mobile Menu button for small screens) */}
          <div className="flex items-center gap-4">
            <button className="hidden lg:block bg-[#2B7747] text-white font-poppins text-lg px-6 py-2 hover:bg-brand-yellow transition-colors duration-300">
              Get Admission
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Open menu"
              className="lg:hidden"
            >
              <Menu className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-gray-900 bg-opacity-95 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X className="h-8 w-8 text-white" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="font-poppins text-2xl text-white hover:text-brand-red transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-[#2B7747] text-white font-poppins text-lg px-6 py-2 hover:bg-brand-yellow transition-colors duration-300">
            Get Admission
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
