import React, {Component} from 'react';

class Button extends Component {

  onClick = () => {
    const { text, onClick } = this.props;
    onClick(text);
  };

  render() {
    return <button onClick={ this.onClick }>{ this.props.title }</button>
  }
}

export default Button;