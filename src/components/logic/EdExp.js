import React, { Component } from "react";
import EdExpRow from "../display/EdExpRow";
import uniqid from "uniqid";

import "../../styles/style.css";

class EdExp extends Component {
  constructor() {
    super();

    this.state = {
      showForm: false,
      schoolName: "",
      titleOfStudy: "",
      dateFrom: "",
      dateTo: "",
      id: "",
      EdExpArr: [],
    };

    this.showAddForm = this.showAddForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleSchoolNameChange = this.handleSchoolNameChange.bind(this);
    this.handleTitleOfStudyChange = this.handleTitleOfStudyChange.bind(this);
    this.handleDateFromChange = this.handleDateFromChange.bind(this);
    this.handleDateToChange = this.handleDateToChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  showAddForm() {
    this.setState({ showForm: true });
  }

  closeForm() {
    this.setState({ showForm: false });
  }

  handleSchoolNameChange(e) {
    this.setState({ schoolName: e.target.value });
  }

  handleTitleOfStudyChange(e) {
    this.setState({ titleOfStudy: e.target.value });
  }

  handleDateFromChange(e) {
    this.setState({ dateFrom: e.target.value });
  }

  handleDateToChange(e) {
    this.setState({ dateTo: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // add new educational exp
    if (this.state.id === "") {
      const newEdExp = new Map([
        ["schoolName", this.state.schoolName],
        ["titleOfStudy", this.state.titleOfStudy],
        ["dateFrom", this.state.dateFrom],
        ["dateTo", this.state.dateTo],
        ["id", uniqid()],
      ]);

      this.setState({
        EdExpArr: [newEdExp, ...this.state.EdExpArr],
        showForm: false,
        schoolName: "",
        titleOfStudy: "",
        dateFrom: "",
        dateTo: "",
      });
    } else {
      // update existing educational exp
      const copyEdExpArr = [...this.state.EdExpArr];
      for (let i = 0; i < copyEdExpArr.length; i++) {
        if (this.state.id === copyEdExpArr[i].get("id")) {
          copyEdExpArr[i].set("schoolName", this.state.schoolName);
          copyEdExpArr[i].set("titleOfStudy", this.state.titleOfStudy);
          copyEdExpArr[i].set("dateFrom", this.state.dateFrom);
          copyEdExpArr[i].set("dateTo", this.state.dateTo);
        }
      }
      this.setState({
        EdExpArr: copyEdExpArr,
        id: "",
        showForm: false,
      });
    }
  }

  handleEdit(e) {
    const targetId = e.target.id;
    let desiredEdExp = undefined;

    for (let edExp of this.state.EdExpArr) {
      if (edExp.get("id") === targetId) {
        desiredEdExp = edExp;
        break;
      }
    }

    this.setState({
      schoolName: desiredEdExp.get("schoolName"),
      titleOfStudy: desiredEdExp.get("titleOfStudy"),
      dateFrom: desiredEdExp.get("dateFrom"),
      dateTo: desiredEdExp.get("dateTo"),
      id: desiredEdExp.get("id"),
      showForm: true,
    });
  }

  render() {
    return (
      <div>
        <div className="resume-body">
          <div className="section-header">Education</div>
          <ul>
            {this.state.EdExpArr.map((edExp) => (
              <li key={edExp.get("id")}>
                <div className="ed-exp-entry-div">
                  <EdExpRow
                    id={edExp.get("id")}
                    schoolName={edExp.get("schoolName")}
                    titleOfStudy={edExp.get("titleOfStudy")}
                    dateFrom={edExp.get("dateFrom")}
                    dateTo={edExp.get("dateTo")}
                  />
                  <div className="edit-btn">
                    <button id={edExp.get("id")} onClick={this.handleEdit}>
                      Edit
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <button className="add-btn" onClick={this.showAddForm}>
          Add education
        </button>

        {this.state.showForm && (
          <form className="input-form" onSubmit={this.handleSubmit}>
            <label>
              School Name:
              <input
                type="text"
                value={this.state.schoolName}
                onChange={this.handleSchoolNameChange}
              />
            </label>
            <label>
              Title of Study:
              <input
                type="text"
                value={this.state.titleOfStudy}
                onChange={this.handleTitleOfStudyChange}
              />
            </label>
            <label>
              Date (From):
              <input
                type="date"
                value={this.state.dateFrom}
                onChange={this.handleDateFromChange}
              />
            </label>
            <label>
              Date (To):
              <input
                type="date"
                value={this.state.dateTo}
                onChange={this.handleDateToChange}
              />
            </label>
            <div className="form-button">
              <input type="submit" value="Submit" />
              <button onClick={this.closeForm}>Close</button>
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default EdExp;
