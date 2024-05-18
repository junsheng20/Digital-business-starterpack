import React from "react";
import "./EmailBox.css";
import { LuMail } from "react-icons/lu";

const EmailBox = () => {
  return (
    <div className="emailBox">
      {/* icon */}
      <div>
        <LuMail size={30} color="grey" />
      </div>

      {/* input */}
      <input type="email" placeholder="Enter Email" />

      {/* get funded button */}
      <div className="getFunded">Get Started</div>
    </div>
  );
};

export default EmailBox;
