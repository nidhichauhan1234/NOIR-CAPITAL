import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    // ✅ Just navigate to the /logout route
    navigate("/logout");
  };

  return (
    <aside className="w-64 h-screen bg-white shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">NOIR Capital</h2>
      <nav className="flex flex-col gap-4">
        <Link
          to="/dashboard"
          className={`hover:text-blue-600 ${
            isActive("/dashboard") ? "font-semibold text-blue-600" : ""
          }`}
        >
          Dashboard
        </Link>

        <Link
          to="/applied-jobs"
          className={`hover:text-blue-600 ${
            isActive("/applied-jobs") ? "font-semibold text-blue-600" : ""
          }`}
        >
          Applied Jobs
        </Link>

        <button
          onClick={handleLogout}
          className="text-left text-red-500 hover:text-red-700"
        >
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
