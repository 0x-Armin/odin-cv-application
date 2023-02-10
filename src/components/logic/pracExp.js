import React, { useState } from "react";
import PracExpRow from "../display/PracExpRow";
import uniqid from "uniqid";

import "../../styles/style.css";

const PracExp = () => {
  const [showForm, setShowForm] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [mainTasks, setMainTasks] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [id, setId] = useState("");
  const [PracExpArr, setPracExpArr] = useState([]);

  const showAddForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handlePositionTitleChange = (e) => {
    setPositionTitle(e.target.value);
  };

  const handleMainTasksChange = (e) => {
    setMainTasks(e.target.value);
  };

  const handleDateFromChange = (e) => {
    setDateFrom(e.target.value);
  };

  const handleDateToChange = (e) => {
    setDateTo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === "") {
      const newPracExp = new Map([
        ["companyName", companyName],
        ["positionTitle", positionTitle],
        ["mainTasks", mainTasks],
        ["dateFrom", dateFrom],
        ["dateTo", dateTo],
        ["id", uniqid()],
      ]);

      setPracExpArr([newPracExp, ...PracExpArr]);
      setShowForm(false);
      setCompanyName("");
      setPositionTitle("");
      setMainTasks("");
      setDateFrom("");
      setDateTo("");
    } else {
      const copyPracExpArr = [...PracExpArr];
      for (let i = 0; i < copyPracExpArr.length; i++) {
        if (id === copyPracExpArr[i].get("id")) {
          copyPracExpArr[i].set("companyName", companyName);
          copyPracExpArr[i].set("positionTitle", positionTitle);
          copyPracExpArr[i].set("mainTasks", mainTasks);
          copyPracExpArr[i].set("dateFrom", dateFrom);
          copyPracExpArr[i].set("dateTo", dateTo);
        }
      }
      setPracExpArr(copyPracExpArr);
      setId("");
      setShowForm(false);
    }
  };

  const handleEdit = (e) => {
    const targetId = e.target.id;
    let desiredPracExp = undefined;

    for (let pracExp of PracExpArr) {
      if (pracExp.get("id") === targetId) {
        desiredPracExp = pracExp;
        break;
      }
    }

    setCompanyName(desiredPracExp.get("companyName"));
    setPositionTitle(desiredPracExp.get("positionTitle"));
    setMainTasks(desiredPracExp.get("mainTasks"));
    setDateFrom(desiredPracExp.get("dateFrom"));
    setDateTo(desiredPracExp.get("dateTo"));
    setId(desiredPracExp.get("id"));
    setShowForm(true);
  };

  return (
    <div>
      <div className="resume-body">
        <div className="section-header">Work Experience</div>
        <ul>
          {PracExpArr.map((pracExp) => (
            <li key={pracExp.get("id")}>
              <div className="prac-exp-entry-div">
                {PracExpRow(
                  pracExp.get("id"),
                  pracExp.get("companyName"),
                  pracExp.get("positionTitle"),
                  pracExp.get("dateFrom"),
                  pracExp.get("dateTo"),
                  pracExp.get("mainTasks")
                )}
                <div className="edit-btn">
                  <button id={pracExp.get("id")} onClick={handleEdit}>
                    Edit
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button className="add-btn" onClick={showAddForm}>
        Add work experience
      </button>
      {showForm && (
        <form className="input-form" onSubmit={handleSubmit}>
          <label>
            Company Name:
            <input
              type="text"
              value={companyName}
              onChange={handleCompanyNameChange}
            />
          </label>
          <label>
            Position title:
            <input
              type="text"
              value={positionTitle}
              onChange={handlePositionTitleChange}
            />
          </label>
          <label>
            Main tasks:
            <textarea
              rows="5"
              value={mainTasks}
              onChange={handleMainTasksChange}
            ></textarea>
          </label>
          <label>
            Date (From):
            <input
              type="date"
              value={dateFrom}
              onChange={handleDateFromChange}
            />
          </label>
          <label>
            Date (To):
            <input type="date" value={dateTo} onChange={handleDateToChange} />
          </label>
          <div className="form-button">
            <input type="submit" value="Submit" />
            <button onClick={closeForm}>Close</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PracExp;
