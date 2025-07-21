import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogoutRoute = () => {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(true);

  const handleConfirm = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleCancel = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#20253A]">
      <div className="text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">Are you sure you want to log out?</h2>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            onClick={handleConfirm}
          >
            Yes, Log Out
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutRoute;
