import React from 'react';


class SystemHealth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, React!'
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default SystemHealth;
