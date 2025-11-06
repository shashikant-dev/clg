import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Testimonial Type
type Testimonial = {
  id: string;
  name: string;
  rank: string;
  percentage: string;
  avatar: string;
  testimonial: string;
  course: string;
};

// 🧩 Static Testimonials
const testimonialsData: Testimonial[] = [
  {
    id: "1",
    course: "LLB 3 Years",
    testimonial:
      "SGLC's supportive environment empowered me to explore my potential and build a solid foundation for my legal career. Forever grateful! #SGLC #LawEducation",
    name: "Alok",
    rank: "3rd Rank",
    percentage: "88%",
    avatar: "/alok.png",
  },
  {
    id: "2",
    course: "BA LLB 5 Years",
    testimonial:
      "SGLC has been instrumental in shaping my legal knowledge and confidence. The faculty support was exceptional throughout.",
    name: "Ruchi Sharma",
    rank: "1st Rank",
    percentage: "92%",
    avatar: "/aman1.png",
  },
  {
    id: "3",
    course: "LLM",
    testimonial:
      "The exposure, environment, and academic excellence at SGLC helped me grow immensely. Proud to be an alumna!",
    name: "Rohit Verma",
    rank: "2nd Rank",
    percentage: "90%",
    avatar: "/Ayush1.png",
  },
  {
    id: "4",
    course: "LLB 3 Years",
    testimonial:
      "SGLC's supportive environment empowered me to explore my potential and build a solid foundation for my legal career. Forever grateful! #SGLC #LawEducation",
    name: "Alok",
    rank: "3rd Rank",
    percentage: "88%",
    avatar: "/krishn1.png",
  },
  {
    id: "5",
    course: "BA LLB 5 Years",
    testimonial:
      "SGLC has been instrumental in shaping my legal knowledge and confidence. The faculty support was exceptional throughout.",
    name: "Ruchi Sharma",
    rank: "1st Rank",
    percentage: "92%",
    avatar: "/mansi.png",
  },
  {
    id: "6",
    course: "LLM",
    testimonial:
      "The exposure, environment, and academic excellence at SGLC helped me grow immensely. Proud to be an alumna!",
    name: "Rohit Verma",
    rank: "2nd Rank",
    percentage: "90%",
    avatar: "/pankaj.png",
  },
  {
    id: "7",
    course: "LLM",
    testimonial:
      "The exposure, environment, and academic excellence at SGLC helped me grow immensely. Proud to be an alumna!",
    name: "Rohit Verma",
    rank: "2nd Rank",
    percentage: "90%",
    avatar: "/parkhar.png",
  },
  {
    id: "8",
    course: "LLM",
    testimonial:
      "The exposure, environment, and academic excellence at SGLC helped me grow immensely. Proud to be an alumna!",
    name: "Rohit Verma",
    rank: "2nd Rank",
    percentage: "90%",
    avatar: "/vanshita1.png",
  },
];

// 🧱 Single Card
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-white shadow-lg flex-shrink-0 w-[90%] sm:w-[70%] md:w-[48%] lg:w-[32%] p-8 rounded-2xl">
    <h4 className="font-semibold text-lg text-gray-900 mb-2">
      {testimonial.course}
    </h4>
    <p className="text-gray-700 text-sm leading-relaxed mb-4">
      "{testimonial.testimonial}"
    </p>
    <div className="flex items-center gap-4 mt-4">
      {/* <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-14 h-14 md:w-16 md:h-16 rounded-md object-cover border"
      /> */}
      <img
    src={testimonial.avatar}
    alt={testimonial.name}
    className="w-14 h-14 md:w-16 md:h-16 rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-150"
  />
      <div>
        <p className="font-semibold text-gray-900">
          Student name : {testimonial.name.toLowerCase()}
        </p>
        <p className="text-sm font-medium text-gray-800">
          {testimonial.rank}
        </p>
        <p className="text-sm text-gray-600">{testimonial.percentage}</p>
      </div>
    </div>
  </div>
);

// 🧩 Main Component
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setTestimonials(testimonialsData);
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const children = scrollRef.current.children;
    let closestIndex = 0;
    let closestDistance = Infinity;

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      const offsetLeft = child.offsetLeft;
      const distance = Math.abs(scrollLeft - offsetLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    }

    setActiveIndex(closestIndex);
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const child = scrollRef.current.children[index] as HTMLElement;
    if (child) {
      scrollRef.current.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-10 lg:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          {/* <h2 className="font-lato font-bold text-xl md:text-2xl">TESTIMONIALS</h2> */}
          <p className="font-lato font-bold text-3xl md:text-4xl text-brand-red-darkest mb-2">
            What Our Students Say
          </p>
          <p className="font-poppins font-medium text-base md:text-lg text-gray-700">
            Hear from our students about their experiences and achievements.
          </p>
        </div>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto space-x-6 py-8 scrollbar-hide scroll-smooth"
        >
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>

        <div className="flex justify-center items-center gap-10 mt-12">
          <button
            onClick={scrollLeft}
            className="p-2 border-2 border-brand-blue-dark rounded-full text-brand-blue-dark hover:bg-brand-blue-dark hover:text-white transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-3">
            {testimonials.map((_, index) => (
              <span
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
                  activeIndex === index
                    ? "bg-brand-red scale-110"
                    : "bg-gray-300 hover:bg-brand-red/70"
                }`}
              ></span>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="p-2 border-2 border-brand-blue-dark rounded-full text-brand-blue-dark hover:bg-brand-blue-dark hover:text-white transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
