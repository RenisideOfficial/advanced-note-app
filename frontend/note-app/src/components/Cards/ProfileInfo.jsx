import React from "react";
import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ userInfo, onLogout }) => {
  // Add a check for userInfo before accessing its properties
  if (!userInfo) {
    return <></>; // Or return null, or some other placeholder
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex w-12 h-12 justify-center items-center rounded-full text-slate-950 font-bold text-center bg-slate-100">
        {getInitials(userInfo.fullName)}
      </div>
      <div>
        <p className="text-sm font-medium">{userInfo.fullName}</p>
        <button className="text-sm text-slate-700 underline" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
