import React, { Component } from "react";
import EdExpRow from "../display/EdExpRow";
import uniqid from "uniqid";

class EdExp extends Component {
  constructor() {
    super();

    this.state = {
      showForm: true,
      schoolName: "",
      titleOfStudy: "",
      dateFrom: "",
      dateTo: "",
      EdExpArr: [],
    };

    this.handleSchoolNameChange = this.handleSchoolNameChange.bind(this);
    this.handleTitleOfStudyChange = this.handleTitleOfStudyChange.bind(this);
    this.handleDateFromChange = this.handleDateFromChange.bind(this);
    this.handleDateToChange = this.handleDateToChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const newEdExp = new Map([
      ["schoolName", this.state.schoolName],
      ["titleOfStudy", this.state.titleOfStudy],
      ["dateFrom", this.state.dateFrom],
      ["dateTo", this.state.dateTo],
      ["id", uniqid()],
    ]);

    this.setState({
      EdExpArr: this.state.EdExpArr.concat(newEdExp),
      showForm: false,
    });
  }

  render() {
    return (
      <div>
        {this.state.showForm && (
          <form onSubmit={this.handleSubmit}>
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
            <input type="submit" value="Submit" />
          </form>
        )}

        {/* map to EdExpDisplay with an edit button */}
        <ul>
          {this.state.EdExpArr.map(edExp => 
            <li key={edExp.get('id')}>
              {console.log(edExp)}
              <EdExpRow 
                id={edExp.get('id')}
                schoolName={edExp.get('schoolName')}
                titleOfStudy={edExp.get('titleOfStudy')}
                dateFrom={edExp.get('dateFrom')}
                dateTo={edExp.get('dateTo')}
              />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default EdExp;
