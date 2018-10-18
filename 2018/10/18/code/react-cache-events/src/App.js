import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './List';

class App extends Component {

  render() {

    let listItems = [
      { id: "ia0001", title: "Topic A", text: "Section A" },
      { id: "ia0002", title: "Topic B", text: "Section B" },
      { id: "ia0003", title: "Topic C", text: "Section C" },
      { id: "ia0004", title: "Topic D", text: "Section D" },
      { id: "ia0005", title: "Topic E", text: "Section E" }
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <List items={listItems} />
        </header>
      </div>
    );
  }
}

export default App;
