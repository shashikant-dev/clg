import { motion, Variants } from "framer-motion";

const Hero = () => {
  const lines = ["Looking for a", "Successful", "legal career?"];

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, x: -50, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative h-[400px] lg:h-[600px] xl:h-[800px] text-white overflow-hidden">
      {/* Background Image + Gradients */}
      <div className="absolute inset-0">
        <img
          src="https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/4893/dea0/0050223f7ce05af8904ebc88332005c4?Expires=1760918400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Qt7y~GzPg2zTlUnnO93lM9XXdSjTKPZLFgwntrvbu~BNClV49iRRyys52kO5HGhQuHq8wKjF09~D-DpnUvSdm2qSoeAwmYfZbKnDWfXVRvmwZ~g0fP8NNZz3R0iPPsZ5Izm25at~vGAVpbWXR4TuB8kVQCRxHVu4akOPD5PSTpkE5TznRQZBn5CIT3WJoCvIFgzoDz9uaca5dW~~q2ieDQENWqp7YeiUQajKEcMMAkibqASVBrZITYM07xeUhCjRVWC3~MPM4dy6N-Tej6KODwTOKNmWQHltF7-ZZMBfBxb7SRqJsalFxLh4YOKALnrsavTshLYXwASMcPBVMwFJIw__"
          alt="College building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/50 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl space-y-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }} // 👈 Re-animates when scrolled back into view
        >
          {/* Staggered Heading */}
          <motion.h1
            className="font-poppins font-medium text-4xl md:text-5xl lg:text-[80px] leading-tight"
            variants={container}
          >
            {lines.map((line, i) => (
              <motion.span key={i} variants={item} className="block">
                {line}
              </motion.span>
            ))}
          </motion.h1>

          {/* Button */}
          <motion.button
            className="bg-[#2B7747] text-white font-poppins text-lg md:text-xl lg:text-2xl px-14 py-3 hover:bg-brand-yellow transition-colors duration-300 mt-6"
            variants={item}
          >
            Enroll Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
