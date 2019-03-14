import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super()

    this.state = {
      unFilteredArray: ['This is a string','goldFish','My Truck','House'],
      userInput: '',
      filteredArray: [],
    }
  }


    render() {
      return(
        <div className="puzzleBox filterStringPB" >
            <h4>Filter String</h4>
            <span className="puzzleText" ></span>
            <input 
            className="inputLine" 
            // onChange=
            ></input>
            <button className="confirmationButton" ></button>
            <span className="resultsBox filterStringRB" ></span>
        </div>
      )
    }
}

export default FilterString