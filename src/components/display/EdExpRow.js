import React, { Component } from 'react';

class EdExpRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={this.props.id} className='ed-exp-details'>
        <div className='ed-exp-entry-left'>
          <div className='school'>{this.props.schoolName}</div>
          <div className='title-of-study'>{this.props.titleOfStudy}</div>
        </div>
        <div className='date-section'>{this.props.dateFrom} to {this.props.dateTo}</div>
      </div>
    )
  }
}

export default EdExpRow;