import React, { useState } from "react";
import EdExpRow from "../display/EdExpRow";
import uniqid from "uniqid";

import "../../styles/style.css";

const EdExp = () => {
  const [showForm, setShowForm] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [id, setId] = useState("");
  const [EdExpArr, setEdExpArr] = useState([]);

  const showAddForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleSchoolNameChange = (e) => {
    setSchoolName(e.target.value);
  };

  const handleTitleOfStudyChange = (e) => {
    setTitleOfStudy(e.target.value);
  };

  const handleDateFromChange = (e) => {
    setDateFrom(e.target.value);
  };

  const handleDateToChange = (e) => {
    setDateTo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // add new educational exp
    if (id === "") {
      const newEdExp = new Map([
        ["schoolName", schoolName],
        ["titleOfStudy", titleOfStudy],
        ["dateFrom", dateFrom],
        ["dateTo", dateTo],
        ["id", uniqid()],
      ]);

      setEdExpArr([newEdExp, ...EdExpArr]);
      setShowForm(false);
      setSchoolName("");
      setTitleOfStudy("");
      setDateFrom("");
      setDateTo("");
    } else {
      // update existing educational exp
      const copyEdExpArr = [...EdExpArr];
      for (let i = 0; i < copyEdExpArr.length; i++) {
        if (id === copyEdExpArr[i].get("id")) {
          copyEdExpArr[i].set("schoolName", schoolName);
          copyEdExpArr[i].set("titleOfStudy", titleOfStudy);
          copyEdExpArr[i].set("dateFrom", dateFrom);
          copyEdExpArr[i].set("dateTo", dateTo);
        }
      }

      setEdExpArr(copyEdExpArr);
      setId("");
      setShowForm(false);
    }
  };

  const handleEdit = (e) => {
    const targetId = e.target.id;
    let desiredEdExp = undefined;

    for (let edExp of EdExpArr) {
      if (edExp.get("id") === targetId) {
        desiredEdExp = edExp;
        break;
      }
    }

    setSchoolName(desiredEdExp.get("schoolName"));
    setTitleOfStudy(desiredEdExp.get("titleOfStudy"));
    setDateFrom(desiredEdExp.get("dateFrom"));
    setDateTo(desiredEdExp.get("dateTo"));
    setId(desiredEdExp.get("id"));
    setShowForm(true);
  };

  return (
    <div>
      <div className="resume-body">
        <div className="section-header">Education</div>
        <ul>
          {EdExpArr.map((edExp) => (
            <li key={edExp.get("id")}>
              <div className="ed-exp-entry-div">
                {EdExpRow(
                  edExp.get("id"),
                  edExp.get("schoolName"),
                  edExp.get("titleOfStudy"),
                  edExp.get("dateFrom"),
                  edExp.get("dateTo")
                )}
                <div className="edit-btn">
                  <button id={edExp.get("id")} onClick={handleEdit}>
                    Edit
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button className="add-btn" onClick={showAddForm}>
        Add education
      </button>

      {showForm && (
        <form className="input-form" onSubmit={handleSubmit}>
          <label>
            School Name:
            <input
              type="text"
              value={schoolName}
              onChange={handleSchoolNameChange}
            />
          </label>
          <label>
            Title of Study:
            <input
              type="text"
              value={titleOfStudy}
              onChange={handleTitleOfStudyChange}
            />
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

export default EdExp;
