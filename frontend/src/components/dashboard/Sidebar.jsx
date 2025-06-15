// src/components/dashboard/Sidebar.jsx
import { Link } from "react-router-dom";

const Sidebar = ({ role }) => {
  return (
    <aside className="w-64 h-screen bg-black text-white p-6 fixed top-0 left-0">
      <h2 className="text-xl font-bold mb-6">One Roof {role}</h2>
      <nav className="space-y-4">
        <Link to="/" className="block hover:text-[#FFD700]">🏠 Home</Link>

        {role === "Student" && (
          <>
            <Link to="/student-dashboard" className="block hover:text-[#FFD700]">📚 My Courses</Link>
            <Link to="/student-dashboard/profile" className="block hover:text-[#FFD700]">👤 Profile</Link>
          </>
        )}

        {role === "Admin" && (
          <>
            <Link to="/admin-dashboard" className="block hover:text-[#FFD700]">📋 Dashboard</Link>
            <Link to="/admin-dashboard/users" className="block hover:text-[#FFD700]">👥 Manage Users</Link>
            <Link to="/admin-dashboard/courses" className="block hover:text-[#FFD700]">📦 Manage Courses</Link>
          </>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
