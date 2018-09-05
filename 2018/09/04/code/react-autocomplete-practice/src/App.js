import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import { getStocks, matchStocks } from './data';
import './App.css';

class App extends Component {

  state = { value: '' };

  render(){

    return (
      <div className="stocks">
        <Autocomplete
          value = { this.state.value }
          inputProps = {{ className: 'stocks__input' }}
          wrapperProps = {{ className: 'stocks__autocomplete' }}
          items = { getStocks() }
          getItemValue = { item => item.name }
          shouldItemRender = { matchStocks }
          onChange = { (event, value) => this.setState({ value }) }
          onSelect = { value => this.setState({ value }) }
          renderMenu = { children => (
            <ul className = "stocks__list">
              { children }
            </ul>
          )}
          renderItem = { (item, isHighlighted ) => (
            <li 
              className = {`stocks__item ${isHighlighted ? 'stocks__item--hilite' : ''}`}
              key = { item.abbr }
            >
              { item.name }
            </li>
          )}
        />
      </div>
    )
  }
}

export default App;