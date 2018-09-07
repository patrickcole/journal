import React, { Component } from 'react';
import update from 'immutability-helper';
import math from 'mathjs';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { operations: [] }
  }

  calculateOperations = () => {
    let result = this.state.operations.join('');
    if( result ){
      result = math.eval(result);
      result = math.format(result, { precision: 14 });
      result = String(result);
      this.setState( { operations: [result] });
    }  
  }

  handleClick = e => {
    const value = e.target.getAttribute('data-value');
    switch (value) {
      case 'clear':
        this.setState({ operations: [] })
      break;
      case 'equal':
        this.calculateOperations();
      break;
      default:
        const newOperations = update(this.state.operations, {
          $push: [value]
        });
        this.setState({ operations: newOperations });
      break;
    }
  }

  render() {
    return (
      <div className="App">
        <Display data={this.state.operations} />
        <Buttons>

          <Button onClick={this.handleClick} label="C" value="clear" />
          <Button onClick={this.handleClick} label="/" value="/" />
          <Button onClick={this.handleClick} label="x" value="*" />
          <Button onClick={this.handleClick} label="=" value="equal" />

          <Button onClick={this.handleClick} label="7" value="7" />
          <Button onClick={this.handleClick} label="8" value="8" />
          <Button onClick={this.handleClick} label="9" value="9" />
          <Button onClick={this.handleClick} label="." value="." />

          <Button onClick={this.handleClick} label="4" value="4" />
          <Button onClick={this.handleClick} label="5" value="5" />
          <Button onClick={this.handleClick} label="6" value="6" />
          <Button onClick={this.handleClick} label="+" value="+" />

          <Button onClick={this.handleClick} label="1" value="1" />
          <Button onClick={this.handleClick} label="2" value="2" />
          <Button onClick={this.handleClick} label="3" value="3" />
          <Button onClick={this.handleClick} label="-" value="-" />

          <Button onClick={this.handleClick} label="0" value="0" />
        </Buttons>
      </div>
    );
  }
}

class Buttons extends Component {
  render(){
    return (<div className="Buttons">{ this.props.children }</div>)
  }
}

class Button extends Component {
  render(){
    return (
      <button 
        type="button"
        onClick={this.props.onClick}
        className="Button"
        data-size={this.props.size}
        data-value={this.props.value}
      >
        {this.props.label}
      </button>
    )
  }
}

class Display extends Component {
  render(){
    const string = this.props.data.join('');
    return (<div className="Display"> { string } </div>)
  }
}

export default App;
