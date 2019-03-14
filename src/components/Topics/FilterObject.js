import React, { Component } from "react";

class FilterObject extends Component {
    constructor() {
        super()

        this.state = {
            unFilteredArray: [
                {
                first_name: "Helene",
                last_name: "Manners",
                favThing: 'dogs',
              }, {
                first_name: "Celestia",
                title: 'CEO',
                email: "carkell1@senate.gov",
              }, {
                id: 3,
                first_name: "Penrod",
                last_name: "Prangley",
                age: 25,
              }, {
                first_name: "Nathanil",
                nickName: 'Nate',
                email: "nate@it.com",
              }],
            userInput: '',
            filteredArray: []
        }
    }
    
    handleChange = (e) => {
        this.setState({
            userInput: e
        })
    }

    handleFilter = () => {
        let arr = this.state.unFilteredArray
        let filteredEmployees = []
        let input = this.state.userInput
        
        for ( var i = 0; i < arr.length; i++ ) {
          if ( arr[i].hasOwnProperty(input) ) {
              filteredEmployees.push(arr[i]);
          }
      }
        this.setState({
            filteredArray: filteredEmployees
        })
      }
      
      
      render() {
        return(
            <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText" >{JSON.stringify( this.state.unFilteredArray)}</span>
            <input 
              className="inputLine" 
              onChange={(e) => this.handleChange(e.target.value)}
              placeholder="Filter"
            ></input>
            <button 
              className="confirmationButton" 
              onClick={() => this.handleFilter()}
            >Filter</button>
            <span className="resultsBox filterObjectRB" >{JSON.stringify(this.state.filteredArray)}</span>
        </div>
      )
    }
}

export default FilterObject
