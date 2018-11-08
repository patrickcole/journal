import React from 'react';

class Contact extends React.Component {
  onSubmit = () => {
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <form>
          <input placeholder="name" type="text" name="user__name" />
          <input placeholder="email" type="email" name="user__email" />
          <button onClick={ this.onSubmit }>Submit</button>
        </form>
      </div>
    )
  };
}

export default Contact;

