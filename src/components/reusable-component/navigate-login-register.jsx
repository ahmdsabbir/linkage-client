import React from "react";
import { useNavigate } from "react-router-dom";

const NavigateLoginRegister = ({ text, btnLabel, to }) => {
  const navigate = useNavigate();
  return (
    <>
      <hr className="self-stretch box-content my-6 h-[0.0625em] bg-gradient-to-r from-transparent via-[#aaaaaa]/20 via-[#aaaaaa]/80 to-transparent "></hr>
      <div className="flex items-center justify-center">
        <div className="flex gap-4">
          {text && <p>{text}</p>}
          {btnLabel && to && (
            <button
              className="pb-1 border-b-2 border-slate-600"
              to={to}
              onClick={() => {
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
