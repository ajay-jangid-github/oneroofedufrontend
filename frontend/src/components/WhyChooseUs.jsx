// const WhyChooseUs = () => {
//   const features = [
//     "Experienced CA/CS Faculty",
//     "Personal Mentorship & Doubt Sessions",
//     "Mock Test + PYQs + Notes",
//     "Affordable + Flexible Learning",
//   ];

//   return (
//     <section className="bg-black text-white py-16 px-6 lg:px-20">
//       <div className="max-w-4xl mx-auto text-center space-y-6">
//         <h2 className="text-3xl font-bold text-[#FFD700]">Why Choose One Roof Education?</h2>
//         <ul className="space-y-4 text-lg">
//           {features.map((item, i) => (
//             <li key={i} className="flex items-center justify-center gap-2">
//               <span className="text-[#FFD700] text-xl">✔</span> {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };
// export default WhyChooseUs;
import {
  FaChalkboard,
  FaUserFriends,
  FaCertificate,
  FaHeadset,
  FaVideo,
  FaBookOpen,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaChalkboard className="text-4xl text-yellow-400" />,
      title: "Experienced Faculty",
      description: "Get trained by top-notch educators with real teaching expertise.",
    },
    {
      icon: <FaUserFriends className="text-4xl text-yellow-400" />,
      title: "Small Batch Size",
      description: "Personal attention ensured with limited students per class.",
    },
    {
      icon: <FaCertificate className="text-4xl text-yellow-400" />,
      title: "Certificate Courses",
      description: "Get recognized certifications to boost your academic/professional journey.",
    },
    {
      icon: <FaHeadset className="text-4xl text-yellow-400" />,
      title: "Doubt Support",
      description: "Ask doubts anytime—live sessions, chat, or 1:1 help.",
    },
    {
      icon: <FaVideo className="text-4xl text-yellow-400" />,
      title: "Live + Recorded Classes",
      description: "Access recordings anytime and attend live for interaction.",
    },
    {
      icon: <FaBookOpen className="text-4xl text-yellow-400" />,
      title: "Complete Study Materials",
      description: "Well-structured notes, PYQs, mock tests & practice sheets.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">
        Why <span className="text-[#FFD700]">Choose Us?</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            {feature.icon}
            <h3 className="mt-4 text-xl font-semibold text-gray-700">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

