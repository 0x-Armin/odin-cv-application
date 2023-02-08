import React, { Component } from "react";
import "../../styles/style.css";

class GeneralInfoDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="resume-section">
        <div className="name-section">{this.props.name}</div>
        <div className="contact-info">
          <div className="contact-info-top">{this.props.email}</div>
          <div className="contact-info-btm">{this.props.phoneNum}</div>
        </div>
      </div>
    );
  }
}

export default GeneralInfoDisplay;
