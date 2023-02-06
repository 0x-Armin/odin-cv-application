import React, { Component } from 'react';

class EdExpRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={this.props.id} className='edExpRow'>
        {console.log(this.props)}
        <div>School: {this.props.schoolName}</div>
        <div>Title of Study: {this.props.titleOfStudy}</div>
        <div>Date (From): {this.props.dateFrom}</div>
        <div>Date (To): {this.props.dateTo}</div>
      </div>
    )
  }
}

export default EdExpRow;