import React from "react";

class Component extends React.Component {
  constructor(props) {
    super();
    this.state = { name: "shubham", age: 18 };
  }

  render() {
    return <h1>My Name is {this.state.name}</h1>;
  }
}

export default Component;
