import React from "react";
import { useNavigate } from "react-router-dom";

const EmailConfirmationModal = () => {
  const navigate = useNavigate();

  const handleGotoLogin = () => {
    navigate("/login");
  };
  return (
    <div className="grid place-items-center h-screen bg-primary text-neutral ">
      <div className="card w-64 sm:w-72 md:w-96 bg-base-100 rounded-lg border gap-2 p-4 shadow-lg">
        <p className=" ">
          An email with a confirmation link has been sent to your email address.
          Please click on the link to verify.
        </p>
        <p className="font-medium">
          <em>This will expire after 3 hours.</em>
        </p>
        <p className="">Remember to check your spam folder.</p>
        <button
          className="btn btn-primary border-0 rounded capitalize mt-4"
          onClick={handleGotoLogin}
        >
          Go to login
        </button>
      </div>
    </div>
  );
};

export default EmailConfirmationModal;
