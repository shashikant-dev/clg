import React from "react";
import { motion, Variants } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";

interface InstructorCardProps {
  name: string;
  designation: string;
  image: string;
  animation: Variants;
  facebook?: string;
  instagram?: string;
}

const InstructorCard: React.FC<InstructorCardProps> = ({
  name,
  designation,
  image,
  animation,
  facebook,
  instagram,
}) => {
  return (
    <motion.div
      className="bg-[#f2f7ff] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-transform hover:scale-105 duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={animation}
    >
      {/* Instructor Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-90 object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Instructor Info */}
      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{designation}</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-3">
          {facebook && (
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Facebook size={18} />
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 transition-colors"
            >
              <Instagram size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// 🎬 Animation Variants
const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const Instructors: React.FC = () => {
  const instructors = [
    {
      name: "Abhinav Shankhvar",
      designation: "Assistant Professor",
      image: "/Awadhesh.jpeg",
      facebook: "#",
      instagram: "#",
      animation: zoomIn,
    },
    {
      name: "Priya Sharma",
      designation: "Assistant Professor",
      image: "/prachi.jpg",
      facebook: "#",
      instagram: "#",
      animation: zoomIn,
    },
    {
      name: "Rohit Mehta",
      designation: "Associate Professor",
      image: "/teacher_2.jpeg",
      facebook: "#",
      instagram: "#",
      animation: zoomIn,
    },
    {
      name: "Neha Kapoor",
      designation: "Lecturer",
      image: "/teacher3.jpg",
      facebook: "#",
      instagram: "#",
      animation: zoomIn,
    },
    {
      name: "Vikram Singh",
      designation: "Senior Faculty",
      image: "/teacher5.jpg",
      facebook: "#",
      instagram: "#",
      animation: zoomIn,
    },
    {
      name: "Kiran Yadav",
      designation: "Faculty Member",
      image: "/techer4.jpg",
      facebook: "#",
      instagram: "#",
      animation: zoomIn,
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-poppins font-semibold text-4xl mb-10 text-brand-red-darkest text-center">
          Our Instructors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructors.map((inst, idx) => (
            <InstructorCard key={idx} {...inst} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
