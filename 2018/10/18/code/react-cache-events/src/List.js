import React, {PureComponent} from 'react';
import Button from './Button';

class List extends PureComponent {

  handleButtonClick = text => {
    console.log(text);
  }

  render() {
    const { items } = this.props;
    return (
      <ul>
        {
          
          items.map((item) =>
            <li key={item.id}>
              <Button text={item.text} title={item.title} onClick={this.handleButtonClick} />
            </li>
          )
          
        }
      </ul>
    )
  }
}

export default List;