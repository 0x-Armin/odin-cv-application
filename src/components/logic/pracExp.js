import React, { Component } from "react";
import PracExpRow from "../display/PracExpRow";
import uniqid from "uniqid";

import "../../styles/style.css";

class PracExp extends Component {
  constructor() {
    super();

    this.state = {
      showForm: false,
      companyName: "",
      positionTitle: "",
      mainTasks: "",
      dateFrom: "",
      dateTo: "",
      id: "",
      PracExpArr: [],
    };

    this.showAddForm = this.showAddForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
    this.handlePositionTitleChange = this.handlePositionTitleChange.bind(this);
    this.handleMainTasksChange = this.handleMainTasksChange.bind(this);
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

  handleCompanyNameChange(e) {
    this.setState({ companyName: e.target.value });
  }

  handlePositionTitleChange(e) {
    this.setState({ positionTitle: e.target.value });
  }

  handleMainTasksChange(e) {
    this.setState({ mainTasks: e.target.value });
  }

  handleDateFromChange(e) {
    this.setState({ dateFrom: e.target.value });
  }

  handleDateToChange(e) {
    this.setState({ dateTo: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.id === "") {
      const newPracExp = new Map([
        ["companyName", this.state.companyName],
        ["positionTitle", this.state.positionTitle],
        ["mainTasks", this.state.mainTasks],
        ["dateFrom", this.state.dateFrom],
        ["dateTo", this.state.dateTo],
        ["id", uniqid()],
      ]);

      this.setState({
        PracExpArr: [newPracExp, ...this.state.PracExpArr],
        showForm: false,
        companyName: "",
        positionTitle: "",
        mainTasks: "",
        dateFrom: "",
        dateTo: "",
      });
    } else {
      const copyPracExpArr = [...this.state.PracExpArr];
      for (let i = 0; i < copyPracExpArr.length; i++) {
        if (this.state.id === copyPracExpArr[i].get("id")) {
          copyPracExpArr[i].set("companyName", this.state.companyName);
          copyPracExpArr[i].set("positionTitle", this.state.positionTitle);
          copyPracExpArr[i].set("mainTasks", this.state.mainTasks);
          copyPracExpArr[i].set("dateFrom", this.state.dateFrom);
          copyPracExpArr[i].set("dateTo", this.state.dateTo);
        }
      }
      this.setState({
        PracExpArr: copyPracExpArr,
        id: "",
        showForm: false,
      });
    }
  }

  handleEdit(e) {
    const targetId = e.target.id;
    let desiredPracExp = undefined;

    for (let pracExp of this.state.PracExpArr) {
      if (pracExp.get("id") === targetId) {
        desiredPracExp = pracExp;
        break;
      }
    }

    this.setState({
      companyName: desiredPracExp.get("companyName"),
      positionTitle: desiredPracExp.get("positionTitle"),
      mainTasks: desiredPracExp.get("mainTasks"),
      dateFrom: desiredPracExp.get("dateFrom"),
      dateTo: desiredPracExp.get("dateTo"),
      id: desiredPracExp.get("id"),
      showForm: true,
    });
  }

  render() {
    return (
      <div>
        <div className="resume-body">
          <div className="section-header">Work Experience</div>
          <ul>
            {this.state.PracExpArr.map((pracExp) => (
              <li key={pracExp.get("id")}>
                <div className="prac-exp-entry-div">
                  <PracExpRow
                    id={pracExp.get("id")}
                    companyName={pracExp.get("companyName")}
                    positionTitle={pracExp.get("positionTitle")}
                    mainTasks={pracExp.get("mainTasks")}
                    dateFrom={pracExp.get("dateFrom")}
                    dateTo={pracExp.get("dateTo")}
                  />
                  <div className="edit-btn">
                    <button id={pracExp.get("id")} onClick={this.handleEdit}>
                      Edit
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <button className="add-btn" onClick={this.showAddForm}>
          Add work experience
        </button>
        {this.state.showForm && (
          <form className="input-form" onSubmit={this.handleSubmit}>
            <label>
              Company Name:
              <input
                type="text"
                value={this.state.companyName}
                onChange={this.handleCompanyNameChange}
              />
            </label>
            <label>
              Position title:
              <input
                type="text"
                value={this.state.positionTitle}
                onChange={this.handlePositionTitleChange}
              />
            </label>
            <label>
              Main tasks:
              <textarea
                rows="5"
                value={this.state.mainTasks}
                onChange={this.handleMainTasksChange}
              ></textarea>
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

export default PracExp;
