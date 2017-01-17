import React, {Component} from "react";

class TestLabel extends React.Component {
  render() {
    return (
      <div className="test-label">
        <h1>Test Label with name {this.props.name}</h1>
      </div>
    );
  }
}

export default TestLabel;