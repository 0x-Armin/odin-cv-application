import React, { Component } from "react";
import "../../styles/style.css";

class PracExpRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={this.props.id} className="prac-exp-details">
        <div className="prac-exp-details-header">
          <div className="prac-exp-details-header-left">
            <div className="entry-name">{this.props.companyName}</div>
            <div className="title">{this.props.positionTitle}</div>
          </div>
          <div className="date-section">
            {this.props.dateFrom} to {this.props.dateTo}
          </div>
        </div>

        <div className="main-tasks">{this.props.mainTasks}</div>
      </div>
    );
  }
}

export default PracExpRow;
