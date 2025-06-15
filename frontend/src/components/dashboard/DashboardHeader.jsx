// src/components/dashboard/DashboardHeader.jsx
const DashboardHeader = ({ title }) => (
  <header className="bg-[#FFD700] text-black p-4 shadow-md sticky top-0 z-40">
    <h1 className="text-2xl font-bold">{title}</h1>
  </header>
);

export default DashboardHeader;
