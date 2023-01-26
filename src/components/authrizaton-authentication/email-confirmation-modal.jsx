import React from "react";
import { useNavigate } from "react-router-dom";

const EmailConfirmationModal = () => {
  const navigate = useNavigate();

  const handleGotoLogin = () => {
    navigate("/login");
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="card w-64 sm:w-72 md:w-96 bg-base-100 rounded border gap-2 p-4">
        <p className="text-xl mb-2 sm:mb-4">
          An email with a confirmation link has been sent to your email address.
          Please click on the link to verify.
        </p>
        <p>
          <strong>This will expire after 5 minutes.</strong>
        </p>
        <p>Remember to check your spam folder.</p>
        <button
          className="btn border-0 rounded text-white capitalize"
          onClick={handleGotoLogin}
        >
          Go to login
        </button>
      </div>
    </div>
  );
};

export default EmailConfirmationModal;
