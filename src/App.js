import React, { Component } from 'react';
import GeneralInfo from './components/logic/GeneralInfo';
import EdExp from './components/logic/EdExp';
import PracExp from './components/logic/PracExp';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GeneralInfo />
        <EdExp />
        <PracExp />
      </div>
    );
  }
}

export default App;
