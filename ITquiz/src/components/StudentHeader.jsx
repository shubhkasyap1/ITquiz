import React, { useState } from "react";
import LogoSection from "./LogoSection";
import UserMenu from "./UserMenu";

const StudentHeader = ({ bgColor }) => {
  return (
    <div className={`flex justify-between items-center p-4 shadow-sm ${bgColor}`}>
      <LogoSection />
      <UserMenu />
    </div>
  );
};

export default StudentHeader;
