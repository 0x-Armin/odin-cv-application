import React, { Component } from 'react';

class GeneralInfoDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Name: {this.props.name}</h3>
        <p>Email: {this.props.email}</p>
        <p>Phone number: {this.props.phoneNum}</p>
      </div>
    );
  }
}

export default GeneralInfoDisplay;