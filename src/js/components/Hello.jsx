import React from 'react';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Sam',
    };
  }

  render() {
    const { name } = this.state;

    return (
      <h3>
        Hello, {name}! I am React.
      </h3>
    );
  }
}

export default Hello;
