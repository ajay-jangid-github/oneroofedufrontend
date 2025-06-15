const plans = [
  {
    title: "Basic",
    price: "₹499/month",
    features: [
      "Access to Class 6–10",
      "Basic Notes & Practice Sheets",
      "Doubt Sessions (Monthly)",
    ],
  },
  {
    title: "Standard",
    price: "₹999/month",
    features: [
      "Class 6–12 Full Access",
      "Live + Recorded Classes",
      "Weekly Doubt Sessions",
      "Mock Tests",
    ],
  },
  {
    title: "Premium",
    price: "₹1499/month",
    features: [
      "All Class + CA/CS Foundation",
      "1:1 Mentorship",
      "Premium Study Materials",
      "Unlimited Doubt Clearing",
    ],
  },
];

const PricingPlans = () => {
  return (
    <section
      id="pricing"
      className="bg-white dark:bg-black py-16 px-6 md:px-12 lg:px-24 scroll-mt-28"
    >
      <h2 className="text-3xl md:text-4xl font-[Cinzel] font-bold text-center mb-12 text-gray-800 dark:text-white">
        Our <span className="text-[#FFD700]">Pricing Plans</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {plan.title}
            </h3>
            <p className="text-[#FFD700] text-2xl font-semibold mb-4">
              {plan.price}
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              {plan.features.map((f, i) => (
                <li key={i}>✓ {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
