import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  text: string;
  linkText: string;
  className?: string;
  imgOverlay?: boolean;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  text,
  linkText,
  className = "",
  imgOverlay = false,
  children,
}) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className={`relative group overflow-hidden h-full ${className}`}>
      {children && (
        <div className="overflow-hidden h-full w-full">
          {React.isValidElement(children)
            ? React.cloneElement(children, {
                className:
                  "w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105",
              } as React.ImgHTMLAttributes<HTMLImageElement>)
            : children}
        </div>
      )}

      {imgOverlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      )}

      <motion.div
        className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 lg:p-10 text-white z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h3
          className="font-poppins font-semibold text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3"
          variants={itemVariants}
        >
          {title}
        </motion.h3>
        <motion.p
          className="font-poppins text-base sm:text-lg md:text-xl mb-3 sm:mb-4"
          variants={itemVariants}
        >
          {text}
        </motion.p>
        <motion.a
          href="#"
          className="font-poppins font-semibold text-base sm:text-lg md:text-xl hover:underline"
          variants={itemVariants}
        >
          {linkText}
        </motion.a>
      </motion.div>
    </div>
  );
};

const EventsAndMore: React.FC = () => {
  const commonText =
    "I’m a paragraph. Click here to add your own text and edit me. Let your users get to know you.";

  return (
    <section className="bg-white py-10 px-4 sm:px-8 lg:px-20 xl:px-36">
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-9 
          auto-rows-[300px] 
          sm:auto-rows-[350px]
          gap-1
        "
      >
        {/* Our Approach */}
        <div className="md:col-span-2 lg:col-span-6 h-full">
          <Card title="Our Approach" text={commonText} linkText="Read More" imgOverlay>
            <img
              src="https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/7842/ba64/4ed2ceb5c9588c4374fb6fce52441eac?Expires=1760918400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jIhOiB-GkedyayUpjcNknq2YyEkxrxWH4mnRhGMlAwljzJygm54Uycy7fqE0Nw4fRTBsyLIolSvrk~7yPUIh114eQ-g8nwAED0JWhErZMA6vYEkgyPZzg10IJMaWonzd8SmLhmpAlb5e4tGrmKpigxOA7QXInLpqFzbKpdsQPlVMMr6Sn6YoeDz9tGFk63MYPm5I0zyIKGewSnyGsWY3dTO2DChqllB0uX9ITOT~7YSFwvGZ1NpRap7I-r~kYSk0xPZZMuObJcVKQBzWtnwx1Tz-MwpY-h9xYJx2CqiYojHa4RkvEnE~jtNgVGTGnnzFdRQGhgbrKUGbPt1Cyxc6ng__"
              alt="Students in a discussion"
            />
          </Card>
        </div>

        {/* Announcements */}
        <div className="md:col-span-1 lg:col-span-3 h-full">
          <Card
            title="Announcements"
            text={commonText}
            linkText="Read More"
            className="bg-brand-red-dark text-white"
          />
        </div>

        {/* Standalone Image */}
        <div className="md:col-span-3 lg:col-span-3 h-full overflow-hidden">
          <img
            src="https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/f772/696b/ea75b0487e5f550668837fa0808eacea?Expires=1760918400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BVp8t5oh6X54OG8wAKrx~omN0pB-oAxkkH0t3HSiYIAhTxyKejbyBL51Xt4dqRg2VvVGH7jrwgMadOwPzOIALYpevPpoJwlkTjSYazeLGEtejzCW2a56spjyGAWmLFPPyTHmRuC7tvTiDG8ifEY6lD~k3Ipg0Q1qqSAO-s-QCSckGv1qTiOz9AwlMfabFtyx3D~QLmqdgONXR7VslbxPIejGgWOOibhdVN-VTBAVf3Q4rDN-GlPlh1TWJSgWC1JWX-vDgZB6DdR-7ILIu2SSpmT6N~8uIhBGsr8QyOfK7jCExU-Ici8KCazZZnPSssDASO9aICqDXz2o4XF~1zMoDg__"
            alt="Students studying"
            className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>

        {/* Events */}
        <div className="md:col-span-2 lg:col-span-3 h-full">
          <Card
            title="Events"
            text={commonText}
            linkText="Read More"
            className="bg-brand-red-darker text-white"
          />
        </div>

        {/* Learning */}
        <div className="md:col-span-1 lg:col-span-3 h-full">
          <Card title="Learning" text={commonText} linkText="Read More" imgOverlay>
            <img
              src="https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/ebf3/1fe6/7915220684fba705307c9ae50d2daffd?Expires=1760918400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NlaXdc5fDfCm1nXgtaQYqkKLsg0mQnAZX8lrn-Y2Hjnuelf0d-slfjQJThQOm8rRagyyYbcaZ-iNawYTvpPBRLuZWhPBBdo6-q0mcRHav9YD5APvS2dgs5eBjV2nNfSwpDlNDG6UFleSC1l2zH8P73P57fSsep9PcDrflQZudnOCiXN4D76WnWRAtLnPeSSCEdo6Sch3tEhQIyM2ys-oh30isobaQLGyw1hfxx-LmD1QcTfps-riv5TeHPL4f6lriWa~FXOrvxDyMaSiVhIPp3XgR~5TBEbZuB0EdUWZVFMiW43CgwxeXMTmGPw0Oc~2lQbZfyCZaLTTROTZ66XX4w__"
              alt="Student reading a book"
            />
          </Card>
        </div>

        {/* About School of Law */}
        <div className="md:col-span-2 lg:col-span-3 h-full">
          <Card
            title="About School of Law"
            text={commonText}
            linkText="Read More"
            className="bg-brand-red-darkest text-white"
          />
        </div>

        {/* Main Image */}
        <div className="md:col-span-1 lg:col-span-6 h-full overflow-hidden">
          <img
            src="https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/8817/8d00/c6572cbb995e181da0cec58f1a83f50c?Expires=1760918400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oOeXNaRTvoAgzn4uHUPZq0mLjAbgIronhRVrz4zinPmdYcPGU~IdpMFqjdAatsjfBodpuhe-ilL9XNe~cQyjzHvUIr5SUUeHPItNE4L48JVBsz~3KtHGDP617h8v2IQxP0lVGEgwWbJMgPx8A4Qaz6G7KSbTPpQQhZzfQV37goV8Q2MxPV5qR6XFahlPlBZ6Utv8jKcXuc32Scobk6835zmCbw36B~qykFLVFzCUKa3Yn8iRzv6iGk8aPY2b8vwe-9HXvJt7IyDGCV4MYq6rY-j18q-bLTKf2a3~rkSrGxJIrntmXlX7pt9d6jXpaIvtgdkEkeoeJ8QrEvLiAbDw4w__"
            alt="Group of happy students"
            className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default EventsAndMore;
