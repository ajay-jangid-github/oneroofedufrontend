const Testimonials = () => {
  const testimonials = [
    {
      name: "Anjali Sharma",
      course: "CA Foundation",
      message: "One Roof Education helped me crack CA Foundation in first attempt. The doubt sessions and mock tests are excellent!",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Rohit Agarwal",
      course: "CS Executive",
      message: "Best platform for CS! Recorded + live classes, notes, and mentorship in one place. Highly recommended.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Priya Mehta",
      course: "Class 12 Commerce",
      message: "Concepts are explained so well. My accountancy and economics are now strong. Thank you One Roof Education!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Students Say</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full border-2 border-[#FFD700] mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{t.name}</h4>
                <span className="text-sm text-gray-500">{t.course}</span>
              </div>
            </div>
            <p className="text-gray-700 text-sm italic">“{t.message}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
