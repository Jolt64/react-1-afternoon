import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      even: [],
      odd: []
    };
  }

  handleChange = e => {
    this.setState({
    userInput: e
    });
  };

  handleSplit = (userInput) => {
    let arr = userInput.split(',');
    let oddHolder = [];
    let evenHolder = [];

    for (let i = 0; i < arr.length; i++) {
        
      if (parseInt(arr[i], 10) % 2 === 0) {
        evenHolder.push(arr[i]);
      } else {
        oddHolder.push(arr[i]);
      }
    }
    this.setState({
      even: evenHolder,
      odd: oddHolder
    });
  };

  render() {
      
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
          type="text"
          placeholder="Numbers 4,5,8,32,5,2"
        />
        <button
          className="confirmationButton"
          onClick={() => this.handleSplit(this.state.userInput)}
        >
          Split even and Odd
        </button>
        <span className="resultsBox"> Evens: {JSON.stringify(this.state.even)}</span>
        <span className="resultsBox"> Odds: {JSON.stringify(this.state.odd)}</span>
      </div>
    );
  }
}

export default EvenAndOdd;


