import React from 'react';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Sam',
    };
  }

  render() {
    return (
      <h3>
        Hello, {this.state.name}! I am React.
      </h3>
    );
  }
}

export default Hello;
