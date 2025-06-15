import { FaChalkboardTeacher, FaComments, FaUserGraduate } from "react-icons/fa";

const CourseCategories = () => {
  const categories = [
    {
      title: "Class 6–12 Subjects",
      icon: <FaChalkboardTeacher className="text-yellow-400 text-4xl" />,
      description: "Complete syllabus coverage with conceptual clarity for school students.",
    },
    {
      title: "CA / CS / CMA",
      icon: <FaUserGraduate className="text-yellow-400 text-4xl" />,
      description: "Expert-led coaching and test series for professional commerce exams.",
    },
    {
      title: "English Spoken",
      icon: <FaComments className="text-yellow-400 text-4xl" />,
      description: "Fluency-focused spoken English classes for beginners to advanced learners.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Top Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            {cat.icon}
            <h3 className="text-xl font-semibold mt-4 text-gray-700">{cat.title}</h3>
            <p className="text-gray-500 mt-2">{cat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseCategories;
