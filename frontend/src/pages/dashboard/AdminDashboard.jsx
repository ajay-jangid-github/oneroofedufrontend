// src/pages/dashboard/AdminDashboard.jsx
import Sidebar from "../../components/dashboard/Sidebar";
import DashboardHeader from "../../components/dashboard/DashboardHeader";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar role="Admin" />
      <div className="ml-64 w-full">
        <DashboardHeader title="Admin Dashboard" />
        <div className="p-6">
          <h2 className="text-xl font-semibold">Welcome, Admin!</h2>
          <p className="mt-2 text-gray-700">Manage users, courses, and platform settings here.</p>
          {/* Add Admin cards, stats etc. later */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
