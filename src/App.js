import React, { Component } from "react";
import Apps from "./App.css"
export default class CounterAppClass extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
    };
  }

  handleIncrease() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  handleDecrease() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  handleReset() {
    this.setState({
      count: this.state.count = 0,
    });
  }

  render() {
    return (
    <div id= "container"  className="h-screen flex flex-col justify-center items-center text-center">
        <div id="content" className="bg-stone-700 p-36 rounded-lg">
        <div className="card-body">
          <h1 className="text-7xl font-bold text-white">COUNTER APP</h1>
          <h5 className="text-7xl my-10 text-white font-bold">{this.state.count}</h5>
        </div>
        <div className="mt-20">
          <button
            className="bg-green-500 px-12 py-3 mx-10 text-white text-2xl"
            onClick={this.handleIncrease.bind(this)}
          >
            Add
          </button>
          <button
            className="bg-yellow-500 px-12 py-3 text-white text-2xl"
            onClick={this.handleDecrease.bind(this)}
          >
            Reduce
          </button>
        </div>
        <div>
          <button
            className="bg-blue-500 px-12 py-3 mt-10 text-white text-2xl"
            onClick={this.handleReset.bind(this)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
    );
  }
}
