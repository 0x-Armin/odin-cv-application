import React, { useState } from "react";
import GeneralInfoDisplay from "../display/GeneralInfoDisplay";

import "../../styles/style.css";

const GeneralInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumChange = (event) => {
    setPhoneNum(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowForm(false);
  };

  const handleEdit = (event) => {
    setShowForm(true);
  };

  return (
    <div>
      {GeneralInfoDisplay(name, email, phoneNum)}

      {!showForm && (
        <button className="add-btn" onClick={handleEdit}>
          Add/edit general information
        </button>
      )}

      {showForm && (
        <form className="input-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
          <label>
            Phone number:
            <input
              type="tel"
              value={phoneNum}
              onChange={handlePhoneNumChange}
            />
          </label>
          <div className="form-button">
            <input type="submit" value="Submit" />
          </div>
        </form>
      )}
    </div>
  );
};

export default GeneralInfo;
