import { ChevronRight, Download } from 'lucide-react';

const ProgramCard = ({ title }: { title: string }) => (
  <div className="bg-brand-gray p-6 lg:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
    <div className="flex items-start gap-4">
      <div className="mt-2 w-0 h-0 border-t-[14px] border-t-transparent border-l-[20px] border-l-brand-green border-b-[14px] border-b-transparent"></div>
      <h3 className="font-poppins font-medium text-xl lg:text-2xl max-w-lg">{title}</h3>
    </div>
    <button className="bg-brand-green text-white font-poppins text-base lg:text-lg px-6 py-4 flex items-center gap-4 whitespace-nowrap hover:bg-brand-yellow transition-colors duration-300 self-start md:self-center">
      <span>Curriculum & Syllabus</span>
      <Download className="w-6 h-6" />
    </button>
  </div>
);

const Programs = () => {
  return (
    <section className="py-10 lg:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-brand-red-darkest">
            Programmes Approved by Bar Council of Your Country
          </h2>
        </div>
        <div className="space-y-6">
          <ProgramCard title="B.B.A.LL.B (Hons.) R2019 (Amended upto June 2020)" />
          <ProgramCard title="B.A.LL.B (Hons.) R2019 (Amended upto June 2020)" />
        </div>
      </div>
    </section>
  );
};

export default Programs;
