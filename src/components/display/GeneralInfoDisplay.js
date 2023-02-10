import React from "react";
import "../../styles/style.css";

const GeneralInfoDisplay = (name, email, phoneNum) => {
  return (
    <div className="resume-section">
      <div className="name-section">{name}</div>
      <div className="contact-info">
        <div className="contact-info-top">{email}</div>
        <div className="contact-info-btm">{phoneNum}</div>
      </div>
    </div>
  );
};

export default GeneralInfoDisplay;
