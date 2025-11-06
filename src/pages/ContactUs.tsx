import React from "react";
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <section className="bg-[#F8F4EE] text-black min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-20 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-7xl bg-[#F8F4EE] gap-10">

        {/* Left Image */}
        <div className="w-full h-80 lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80"
            alt="Leaf background"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Center Form */}
        <div className="flex flex-col justify-center space-y-6 lg:col-span-1">
          <h2 className="font-poppins font-semibold text-4xl md:text-5xl mb-6 text-brand-red-darkest">Contact Us</h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1 text-brand-red-darkest">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border-b border-black bg-transparent outline-none py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-brand-red-darkest">E-mail</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border-b border-black bg-transparent outline-none py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-brand-red-darkest">Message</label>
              <textarea
                placeholder="Write your message"
                rows={3}
                className="w-full border-b border-black bg-transparent outline-none py-2 resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-[#2B7747] text-white font-poppins text-lg md:text-xl lg:text-2xl px-14 py-3 hover:bg-brand-yellow transition-colors duration-300 mt-6"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Info */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h3 className="font-semibold text-brand-red-darkest">Contact</h3>
            <p className="text-gray-700 flex items-center gap-2">
              <Mail size={16} /> shreegeet59812@gmail.com
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-brand-red-darkest">Location</h3>
            <p className="text-gray-700 flex items-center gap-2">
              <MapPin size={16} /> Chandpur-Khaneepur, Sitapur Road, BKT, Lucknow
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-brand-red-darkest">Mobile</h3>
            <p className="text-gray-700 flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-brand-red-darkest">Mobile</h3>
            <p className="text-gray-700 flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors"><Facebook /></a>
            <a href="#" className="text-pink-500 hover:text-pink-700 transition-colors"><Instagram /></a>
            <a href="#" className="hover:text-gray-600"><Twitter /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
