import React from "react";
import { useNavigate } from "react-router-dom";

const EmailConfirmationModal = () => {
  const navigate = useNavigate();

  const handleGotoLogin = () => {
    navigate("/login");
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="card w-96 bg-base-100 rounded border gap-2 p-4">
        <p className="text-xl">
          An email has been sent to your mail. Please click on the attached link
          for confirmation
        </p>
        <button
          className="btn border-0 rounded text-white"
          onClick={handleGotoLogin}
        >
          Go to login
        </button>
      </div>
    </div>
  );
};

export default EmailConfirmationModal;
