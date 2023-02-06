import React, { Component } from 'react';
import GeneralInfo from './components/logic/GeneralInfo';
import EdExp from './components/logic/EdExp';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GeneralInfo />
        <EdExp />
      </div>
    );
  }
}

export default App;
