import { Home, Scale, TrendingUp, Gavel } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AboutUs = () => {
  const [students, setStudents] = useState(0);
  const [alumni, setAlumni] = useState(0);
  const [awards, setAwards] = useState(0);

  useEffect(() => {
    const animateNumber = (setter: (value: number) => void, target: number, duration: number = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 16);
    };

    animateNumber(setStudents, 2500);
    animateNumber(setAlumni, 5000);
    animateNumber(setAwards, 50);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with gradient background */}
      <div className="bg-gradient-to-br from-[#3d6d54] via-[#4a7a5f] to-[#5a8a70] pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-white text-4xl md:text-5xl font-poppins font-semibold text-center mb-4">
            About Us
          </h1>
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-white text-sm md:text-base">
            <Home className="w-4 h-4" />
            <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-200">About</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* College Info Section */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 lg:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left side - placeholder for image */}
              <div className="hidden md:block">
                <div className="w-full h-[400px] bg-gray-100 rounded-2xl flex items-center justify-center">
                  <img src="/college-image.png" alt="Shree Geet Law College" className="object-cover w-full h-full rounded-2xl" />
                </div>
              </div>

              {/* Right side - Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#3d6d54] mb-6 font-poppins">
                  SHREE GEET LAW COLLEGE
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                  Shree Geet Law College stands as a beacon of legal education,
                  committed to nurturing the finest legal minds of tomorrow.
                  Established with a vision to provide comprehensive legal
                  education, we combine traditional values with modern teaching
                  methodologies.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                  Our institution is dedicated to developing skilled legal
                  professionals who are not only well-versed in law but also
                  equipped with ethical values, critical thinking abilities, and a deep
                  sense of social responsibility.
                </p>

                {/* Statistics Cards */}
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  {/* Students */}
                  <div className="bg-gradient-to-br from-green-100 to-green-50 border-l-4 border-green-600 rounded-lg p-4 md:p-6">
                    <div className="text-2xl md:text-3xl font-bold text-green-700 mb-1">{students.toLocaleString()}+</div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium">Students</div>
                  </div>

                  {/* Alumni */}
                  <div className="bg-gradient-to-br from-red-100 to-pink-50 border-l-4 border-red-500 rounded-lg p-4 md:p-6">
                    <div className="text-2xl md:text-3xl font-bold text-red-600 mb-1">{alumni.toLocaleString()}+</div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium">Alumni</div>
                  </div>

                  {/* Awards */}
                  <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 border-l-4 border-yellow-600 rounded-lg p-4 md:p-6">
                    <div className="text-2xl md:text-3xl font-bold text-yellow-700 mb-1">{awards}+</div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium">Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message from Chairman Section */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 lg:p-16 mt-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d6d54] mb-8 font-poppins">
              Message from Chairman
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left side - Message */}
              <div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                  Welcome to Shree Geet Law College. It gives me immense
                  pleasure to address the aspiring legal professionals who have
                  chosen our institution to shape their careers. Our college has
                  always been committed to excellence in legal education.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                  We believe in holistic development of our students, ensuring they
                  not only excel academically but also develop strong ethical
                  foundations and leadership qualities. Our experienced faculty and
                  state-of-the-art facilities provide the perfect environment for
                  learning and growth.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  I encourage all students to make the most of the opportunities
                  provided and strive to become exemplary legal professionals who
                  contribute positively to society.
                </p>
              </div>

              {/* Right side - Chairman Photo */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-80 h-80 rounded-full border-4 border-yellow-500 overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  <img
                    src="/chairman.png"
                    alt="Chairman Dr. Rajesh Kumar"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">Dr. Rajesh Kumar</h3>
                <p className="text-gray-600 text-base">Chairman</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {/* Law Leaders Card */}
            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Scale className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Law Leaders
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Nurturing law leaders for tomorrow with comprehensive legal education
                and practical training.
              </p>
            </div>

            {/* Empowering Future Card */}
            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-red-600 mb-4">
                Empowering Future
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Unlocking potential for professionals through innovative teaching methods
                and mentorship.
              </p>
            </div>

            {/* Legal Minds Card */}
            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <Gavel className="w-8 h-8 text-yellow-700" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Legal Minds
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Developing sharp legal minds equipped with analytical thinking and
                ethical values.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

