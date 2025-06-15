import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-[Cinzel] text-[#FFD700] mb-4">One Roof Education</h2>
          <p className="text-sm text-gray-400">
            India’s most trusted platform for CA/CS aspirants and school learners. Join us for quality education under one roof.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg text-[#FFD700] mb-3 font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#FFD700]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#FFD700]">About Us</Link></li>
            <li><Link to="/courses" className="hover:text-[#FFD700]">Courses</Link></li>
            <li><Link to="/contact" className="hover:text-[#FFD700]">Contact</Link></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-lg text-[#FFD700] mb-3 font-semibold">Our Courses</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/courses/ca-cs" className="hover:text-[#FFD700]">CA / CS</Link></li>
            <li><Link to="/courses/class-11" className="hover:text-[#FFD700]">Class 11</Link></li>
            <li><Link to="/courses/class-12" className="hover:text-[#FFD700]">Class 12</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg text-[#FFD700] mb-3 font-semibold">Get In Touch</h3>
          <p className="text-sm text-gray-400 mb-3">Email: <a href="mailto:support@oneroofedu.in" className="hover:text-[#FFD700]">support@oneroofedu.in</a></p>
          <div className="flex space-x-4 mt-2 text-xl text-[#FFD700]">
            <a href="#"><FaFacebookF className="hover:text-white transition" /></a>
            <a href="#"><FaInstagram className="hover:text-white transition" /></a>
            <a href="#"><FaWhatsapp className="hover:text-white transition" /></a>
            <a href="#"><FaEnvelope className="hover:text-white transition" /></a>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 my-6" />
      <p className="text-center text-xs text-gray-500">
        © {new Date().getFullYear()} One Roof Education. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
