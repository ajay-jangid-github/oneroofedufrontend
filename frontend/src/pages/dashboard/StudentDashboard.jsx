// src/pages/dashboard/StudentDashboard.jsx
import Sidebar from "../../components/dashboard/Sidebar";
import DashboardHeader from "../../components/dashboard/DashboardHeader";

const StudentDashboard = () => {
  return (
    <div className="flex">
      <Sidebar role="Student" />
      <div className="ml-64 w-full">
        <DashboardHeader title="Student Dashboard" />
        <div className="p-6">
          <h2 className="text-xl font-semibold">Welcome, Student!</h2>
          <p className="mt-2 text-gray-700">Here are your enrolled courses, progress, and announcements.</p>
          {/* Add more UI cards later */}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
