import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16 px-6 lg:px-20 text-center">
      <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Start Your CA / CS Journey Today!</h2>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
        Join thousands of successful students who trusted One Roof Education to crack the toughest exams with confidence and clarity.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link
          to="/register"
          className="bg-[#FFD700] text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition"
        >
          Enroll Now
        </Link>
        <Link
          to="/courses"
          className="border border-[#FFD700] text-[#FFD700] font-semibold px-6 py-3 rounded-full hover:bg-[#FFD700] hover:text-black transition"
        >
          Explore Courses
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;
