import React from "react";

const About = () => {
  return (
    <div className="relative pt-28 pb-20 px-6 md:px-16 lg:px-32 text-black dark:text-white overflow-hidden">
      
     {/* Animated Blobs */}
<div className="absolute top-0 left-0 w-full h-full z-0">
  <div className="absolute w-96 h-96 bg-fuchsia-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob top-[-10%] left-[-10%] dark:bg-purple-600"></div>

  <div className="absolute w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000 top-[30%] left-[40%] dark:bg-yellow-500"></div>

  <div className="absolute w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-4000 top-[60%] left-[0%] dark:bg-sky-600"></div>
</div>


      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-[Cinzel] text-[#FFD700] mb-4 drop-shadow-md">
            About One Roof Education
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            Empowering Students with Quality Education – Anytime, Anywhere.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-12 mb-24">
          {[
            ["🎯 Our Mission", "To provide top-tier education to every learner through a blend of live and recorded classes, innovative tech, and expert mentors – enabling success in CA, CS, and School Boards."],
            ["🌟 Our Vision", "To become India’s most trusted digital learning platform by combining affordability, expert teaching, and personalized support under one roof."]
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-[#FFD700] mb-4">{title}</h2>
              <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </section>

        {/* What Makes Us Different */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold text-center text-[#FFD700] mb-12">What Makes Us Different?</h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              ["🎓 Expert Faculty", "Top-notch educators with real-world experience"],
              ["🤝 Personal Mentorship", "One-on-one guidance tailored to student needs"],
              ["📚 100% Coverage", "CA/CS + Class 6–12 syllabus completely covered"],
              ["💰 Affordable Learning", "Premium education at pocket-friendly prices"],
              ["📱 Multi-Device Access", "Use on mobile, desktop, or tablet seamlessly"],
              ["🎯 Career Roadmaps", "Complete guidance for competitive success"],
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#FFD700] mb-2">{title}</h3>
                <p className="text-md text-gray-700 dark:text-gray-300">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="grid md:grid-cols-4 gap-10 text-center mb-24">
          {[
            ["10K+", "Students Trained"],
            ["150+", "Mock Tests Conducted"],
            ["98%", "Exam Success Rate"],
            ["24/7", "Doubt Support"],
          ].map(([num, label], i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-800"
            >
              <h4 className="text-3xl font-bold text-[#FFD700]">{num}</h4>
              <p className="text-md mt-2 text-gray-600 dark:text-gray-300">{label}</p>
            </div>
          ))}
        </section>

        {/* Video Section */}
        <section className="mb-24 text-center">
          <h2 className="text-3xl font-semibold text-[#FFD700] mb-6">🎥 Watch Our Vision</h2>
          <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/9WZi3i-VMxg"
              title="One Roof Education Vision"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Founder Message */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#FFD700] mb-4">💬 Message from the Founder</h2>
          <p className="text-lg italic leading-relaxed text-gray-700 dark:text-gray-300">
            “As a passionate educator, I believe that education should not be a luxury. One Roof Education was born out of the need to democratize learning and bring expert teachers within every student’s reach. Our mission is not just academic excellence – but lifelong empowerment.”
          </p>
          <p className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">– Founder, One Roof Education</p>
        </section>
      </div>
    </div>
  );
};

export default About;
