import { useState } from "react";

const InquiryForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll contact you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-black text-white py-16 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-[#FFD700] mb-10">Have Questions? Ask Us</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white text-black rounded-lg p-8 space-y-6 shadow-xl"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded focus:outline-[#FFD700]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded focus:outline-[#FFD700]"
        />
        <textarea
          name="message"
          placeholder="Your Message or Course Inquiry..."
          value={form.message}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded h-32 focus:outline-[#FFD700]"
        ></textarea>
        <button
          type="submit"
          className="bg-[#FFD700] text-black px-6 py-3 rounded font-semibold hover:bg-yellow-400 transition"
        >
          Submit Inquiry
        </button>
      </form>
    </section>
  );
};

export default InquiryForm;
