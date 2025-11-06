import {
  BookOpen,
  Building,
  Award,
  Gavel,
  FileText,
  Users,
  Mic,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const highlightsData = [
  {
    icon: BookOpen,
    text: "Curriculum designed in consultation with eminent Academicians and High Court Judges (Rtd.)",
  },
  { icon: Building, text: "Approval of Curriculum by BoS and Academic Council." },
  { icon: Award, text: "Honors degree program with academic rigour" },
  {
    icon: Gavel,
    text: "Court Craft as a course for Clinical Legal Education. MOOT court practice",
  },
  { icon: FileText, text: "20 Elective papers of Contemporary relevance" },
  { icon: Users, text: "Highly Qualified Staff - 10 Phd. Holders" },
  { icon: Gavel, text: "Court / Chamber Visits" },
  { icon: GraduationCap, text: "Right balance of Theory & Practice" },
  { icon: Briefcase, text: "Mandatory Internship in every semester" },
  { icon: Mic, text: "Special courses to enhance communication skill" },
];

const HighlightCard = ({
  icon: Icon,
  text,
  index,
}: {
  icon: React.ElementType;
  text: string;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div
      ref={ref}
      className="flex items-center gap-5 transition-transform duration-700"
    >
      {/* Icon rotates only when paragraph is in view */}
      <motion.div
        className="flex-shrink-0 w-16 h-16 bg-brand-red-dark rounded-full flex items-center justify-center"
        animate={isInView ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>

      {/* Paragraph moves up and fades in */}
      <motion.p
        className="font-poppins font-medium text-base md:text-lg lg:text-xl leading-snug"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {text}
      </motion.p>
    </div>
  );
};

const Highlights = () => {
  return (
    <section className="bg-brand-gray-light py-10 lg:py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 px-4 sm:px-6 lg:px-8">
        {highlightsData.map((item, index) => (
          <HighlightCard
            key={index}
            icon={item.icon}
            text={item.text}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Highlights;
