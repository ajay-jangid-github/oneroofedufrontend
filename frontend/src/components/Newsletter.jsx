const Newsletter = () => {
  return (
    <section className="bg-[#1a1a1a] text-white py-16 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-[Cinzel] text-[#FFD700] mb-4">
          Subscribe for Free Study Resources & Updates!
        </h2>
        <p className="text-gray-300 mb-6">
          Join thousands of CA/CS aspirants and school students who receive our curated notes, test updates, and expert tips directly in their inbox.
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg w-full sm:w-2/3 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-[#FFD700] hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
