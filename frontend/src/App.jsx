import { BrowserRouter, Routes, Route } from "react-router-dom";

// Global Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

// Auth Pages
import AuthPage from "./pages/AuthPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Dashboards
// import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import StudentDashboard from "./pages/dashboard/StudentDashboard";
import CaCsCourseDetail from "./pages/CaCsCourseDetail";
// import AdminDashboard from "./pages/AdminDashboard";

// 👇 You can add a NotFound page too in the future

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* 🔼 Top Navigation Bar */}
        <Navbar />

        {/* 🔽 Main Content Area */}
        <div className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />

            {/* Authentication Routes */}
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes (Dashboard etc.) */}
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />

            {/* Course Detail Routes */}
             <Route path="/courses/ca-cs" element={<CaCsCourseDetail />} />
          </Routes>
        </div>

        {/* Bottom Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
