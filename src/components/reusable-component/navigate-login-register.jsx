import React from "react";
import { NavLink } from "react-router-dom";

const NavigateLoginRegister = ({ text, btnLabel, to }) => {
  return (
    <>
      <div className="divider"></div>
      <div className="flex items-center justify-center">
        <div className="flex gap-4">
          {text && <p>{text}</p>}
          {btnLabel && to && (
            <NavLink className="pb-1 border-b-2 border-slate-600" to={to}>
              {btnLabel}
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default NavigateLoginRegister;
