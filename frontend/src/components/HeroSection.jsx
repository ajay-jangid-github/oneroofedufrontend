const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-[90vh] flex items-center justify-center px-6 lg:px-20 overflow-hidden">
      
      {/* 🔮 Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob top-[-10%] left-[-10%]" />
        <div className="absolute w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob-delay-2000 top-[20%] left-[50%]" />
        <div className="absolute w-96 h-96 bg-yellow-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob-delay-4000 top-[60%] left-[20%]" />
      </div>

      {/* 🎨 Background Image Overlay */}
      <div className="absolute inset-0 z-[1]">
        <img
          src="https://images.unsplash.com/photo-1600195077072-4d4b3c41e9a0?auto=format&fit=crop&w=1950&q=80"
          alt="Education Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      {/* ✨ Hero Content */}
      <div className="relative z-10 max-w-5xl text-center space-y-6 animate-fade-in-up">
<div className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#FFD700] text-center leading-tight">
  <div className="typewriter-glow">Your Path to CA & CS Excellence</div>
</div>

<div className="text-xl md:text-3xl lg:text-4xl font-semibold text-[#FFD700] text-center mt-6">
  <div className="typewriter-glow-2">Learn from the Best – Anytime, Anywhere</div>
</div>






        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
          India's most trusted learning platform for Commerce, CA Foundation,
          CS Executive & more. Learn from top faculty under One Roof.
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <a
            href="/courses"
            className="bg-[#FFD700] text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-white transition duration-300 shadow-lg"
          >
            Explore Courses
          </a>
          <a
            href="/register"
            className="border border-[#FFD700] text-[#FFD700] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#FFD700] hover:text-black transition duration-300 shadow-lg"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
