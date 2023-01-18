import React from "react";
import { useNavigate } from "react-router-dom";

const NavigateLoginRegister = ({ text, btnLabel, to, dispatch }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="divider"></div>
      <div className="flex items-center justify-center">
        <div className="flex gap-4">
          {text && <p>{text}</p>}
          {btnLabel && to && (
            <button
              className="pb-1 border-b-2 border-slate-600"
              to={to}
              onClick={() => {
                dispatch({ type: "error", payload: "" });
                navigate(to);
              }}
            >
              {btnLabel}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default NavigateLoginRegister;
