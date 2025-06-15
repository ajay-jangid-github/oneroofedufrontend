import CourseCategories from "../components/CourseCategories";
import DarkLightToggle from "../components/DarkLightToggle";

import FeaturedCourses from "../components/FeaturedCourses";
import FinalCTA from "../components/FinalCTA";
import HeroSection from "../components/HeroSection";
import InquiryForm from "../components/InquiryForm";
import Newsletter from "../components/Newsletter";
import PricingPlans from "../components/PricingPlans";
import Testimonials from "../components/Testimonials";
import TrustedBy from "../components/TrustedBy";
import WhatsAppButton from "../components/WhatsAppButton";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQSection from "./FAQSection";

const Home = () => {
  return (
    <>
      {/* <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Welcome to EduSite</h1>
        <p className="mt-4 text-gray-600">
          Your gateway to quality online education.
        </p>
      </div> */}
      <DarkLightToggle />
      <HeroSection />
       <TrustedBy />
      <FeaturedCourses />
      <WhyChooseUs />
      <FinalCTA />
      <CourseCategories />
      <Testimonials />
      <InquiryForm />
      <FAQSection />
      <Newsletter />
      <WhatsAppButton />
      <PricingPlans />
    </>
  );
};

export default Home;
