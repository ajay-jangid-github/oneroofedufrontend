import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What courses do you offer for CA/CS preparation?",
    answer:
      "We offer Foundation, Intermediate, and Final level coaching for CA and CS, along with live doubt sessions and recorded classes."
  },
  {
    question: "Are the classes live or recorded?",
    answer:
      "We provide both live interactive sessions and recorded lectures that you can access anytime from your dashboard."
  },
  {
    question: "Do you provide notes and test series?",
    answer:
      "Yes, our courses include premium notes, MCQs, mock test series, and detailed solutions for better practice."
  },
  {
    question: "Can I join from a mobile device?",
    answer:
      "Absolutely! Our platform is fully responsive and works smoothly on mobile phones, tablets, and desktops."
  },
  {
    question: "Is there any refund policy?",
    answer:
      "Yes, we offer a 7-day refund policy if you’re not satisfied. Please read our refund terms on the policy page."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 lg:px-20 text-black">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-[Cinzel] font-bold text-[#FFD700] mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-700">
          Still have questions? We’re here to help you!
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow hover:shadow-lg transition-all"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-100 font-semibold hover:cursor-pointer"
            >
              {faq.question}
              <FaChevronDown
                className={`transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-white text-gray-800">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
