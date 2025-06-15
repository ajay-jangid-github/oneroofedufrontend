const FeaturedCourses = () => {
  const courses = [
    {
      title: "CA Foundation",
      description: "Comprehensive course for CA beginners with video lectures, mock tests, notes.",
      image: "https://source.unsplash.com/featured/?education",
      link: "/courses/ca-foundation"
    },
    {
      title: "CS Executive",
      description: "Crash + Full syllabus with latest modules by expert teachers.",
      image: "https://source.unsplash.com/featured/?law,books",
      link: "/courses/cs-executive"
    },
    {
      title: "Class 11 & 12 Commerce",
      description: "Accountancy, Economics, BST and Maths with conceptual clarity.",
      image: "https://source.unsplash.com/featured/?commerce,classroom",
      link: "/courses/class-11"
    }
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Featured Courses</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {courses.map((course, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src={course.image} alt={course.title} className="w-full h-52 object-cover" />
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-[#FFD700]">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
              <a href={course.link} className="inline-block text-[#FFD700] font-semibold hover:underline">View Course →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default FeaturedCourses;