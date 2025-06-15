import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/logo.png";
import DarkLightToggle from "./DarkLightToggle";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isClassOpen, setIsClassOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnterCourses = () => {
    clearTimeout(timeoutRef.current);
    setIsCoursesOpen(true);
  };

  const handleMouseLeaveCourses = () => {
    timeoutRef.current = setTimeout(() => {
      setIsCoursesOpen(false);
      setIsClassOpen(false);
    }, 200);
  };

  const handleMouseEnterClass = () => {
    clearTimeout(timeoutRef.current);
    setIsClassOpen(true);
  };

  const handleMouseLeaveClass = () => {
    timeoutRef.current = setTimeout(() => {
      setIsClassOpen(false);
    }, 200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="bg-black bg-opacity-70 backdrop-blur-md shadow-xl fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center h-16">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <Link to="/" onClick={scrollToTop} className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
            <h1 className="text-[#FFD700] text-sm sm:text-lg font-[Cinzel] tracking-widest animate-pulse-glow leading-tight">
              One Roof Education
            </h1>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <DarkLightToggle />
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="text-[#FFD700] text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-white text-base font-[Cinzel]">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />

          {/* Courses Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnterCourses}
            onMouseLeave={handleMouseLeaveCourses}
          >
            <button className="hover:text-[#FFD700] transition duration-300">
              Courses ▾
            </button>

            {isCoursesOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-black text-white border border-gray-700 rounded shadow-lg z-50">
                <Link
                  to="/courses/ca-cs"
                  className="block px-4 py-2 hover:bg-[#FFD700] hover:text-black transition"
                >
                  CA / CS
                </Link>

                {/* Class Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnterClass}
                  onMouseLeave={handleMouseLeaveClass}
                >
                  <button className="w-full text-left px-4 py-2 hover:bg-[#FFD700] hover:text-black">
                    Class 6-12 ▸
                  </button>
                  {isClassOpen && (
                    <div className="absolute top-0 left-full mt-0 w-40 bg-black text-white border border-gray-700 rounded shadow-lg z-50">
                      {["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"].map((cls) => (
                        <Link
                          key={cls}
                          to={`/courses/${cls.toLowerCase().replace(" ", "-")}`}
                          className="block px-4 py-2 hover:bg-[#FFD700] hover:text-black transition"
                        >
                          {cls}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Pricing Link */}
                <HashLink
                  smooth
                  to="/#pricing"
                  className="block px-4 py-2 hover:bg-[#FFD700] hover:text-black transition"
                >
                  Pricing
                </HashLink>
              </div>
            )}
          </div>

          <NavItem to="/login" label="Login" />
          <NavItem to="/register" label="Register" />
          <DarkLightToggle />
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-4 py-6 text-white space-y-4 text-base font-[Cinzel]">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
          <NavItem to="/courses/ca-cs" label="CA / CS" />
          <div>
            <span className="block mb-2 text-[#FFD700]">Class 6–12</span>
            {["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"].map((cls) => (
              <Link
                key={cls}
                to={`/courses/${cls.toLowerCase().replace(" ", "-")}`}
                className="block px-4 py-1 hover:text-[#FFD700] transition"
              >
                {cls}
              </Link>
            ))}
          </div>

          <HashLink
            smooth
            to="/#pricing"
            className="block px-4 py-1 hover:text-[#FFD700] transition"
          >
            Pricing
          </HashLink>

          <NavItem to="/login" label="Login" />
          <NavItem to="/register" label="Register" />
        </div>
      )}
    </nav>
  );
};

// ✅ Reusable NavItem Component with scroll-to-top for Home
const NavItem = ({ to, label }) => {
  const handleClick = () => {
    if (to === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link to={to} onClick={handleClick} className="relative group block">
      <span className="group-hover:text-[#FFD700] transition duration-300">
        {label}
      </span>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFD700] group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
};

export default Navbar;
