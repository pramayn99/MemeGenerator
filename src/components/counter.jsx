import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn-secondary btn-sm btn m-1"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn-danger btn-sm btn m-2"
        >
          -
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let badgeClass = "badge m-2 badge-";
    badgeClass += this.props.counter.value === 0 ? "warning" : "primary";
    return badgeClass;
  }

  formatCounter() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
