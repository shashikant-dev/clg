import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'LLB - 3 Years Course',
      description: 'Comprehensive program focusing on legal foundations, justice system, and professional practice.',
    },
    {
      id: 2,
      title: 'LLB - 5 Years Course',
      description: 'Comprehensive program focusing on legal foundations, justice system, and professional practice.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with gradient background */}
      <div className="bg-gradient-to-br from-[#3d6d54] via-[#4a7a5f] to-[#5a8a70] pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-white text-4xl md:text-5xl font-poppins font-semibold text-center mb-4">
            Courses
          </h1>
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-white text-sm md:text-base">
            <Home className="w-4 h-4" />
            <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-200">Course</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Course Cards Container */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 lg:p-16">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-gradient-to-br from-[#1a1d2e] via-[#252839] to-[#1a1d2e] rounded-2xl p-8 md:p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[280px] md:min-h-[320px]"
                >
                  <div>
                    <h2 className="text-white text-2xl md:text-3xl font-poppins font-semibold mb-4 md:mb-6">
                      {course.title}
                    </h2>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                      {course.description}
                    </p>
                  </div>
                  <div>
                    <button className="bg-transparent text-white border border-white px-6 py-2.5 rounded-md font-poppins text-sm md:text-base hover:bg-white hover:text-gray-900 transition-all duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

