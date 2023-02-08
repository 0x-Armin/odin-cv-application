import React, { Component } from 'react';
import '../../styles/prac-exp-style.css'

class PracExpRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={this.props.id} className='pracExpRow'>
        <div>Company: {this.props.companyName}</div>
        <div>Position: {this.props.positionTitle}</div>
        <div>Main tasks:</div>
        <div className='main-tasks'>{this.props.mainTasks}</div>
        <div>Date (From): {this.props.dateFrom}</div>
        <div>Date (To): {this.props.dateTo}</div>
      </div>
    )
  }
}

export default PracExpRow;