import React from 'react';
import './App.css';
import Keypad from './Keypad';

class App extends React.Component {
  state = {
    total:"",
    input:"",
    isClicked:false
  }
  displayOnScreen = (value)=>{
    this.setState({
      input: this.state.input.concat(value)
    })
  }
  calculateValue = ()=>{
    let inputVal = this.state.input;
    this.setState({
      total: eval(inputVal),
      isClicked: true,
      input: ""
    })
  }
  handleAllClear = ()=>{
    this.setState({
      total: "",
      input: "",
      isClicked: false
    })
  }
  render = () => {
    let {isClicked} = this.state;
    return (
      <div className="App">
        <div className="screen">
          {isClicked ? <span>{this.state.total}</span> : <span>{this.state.input}</span>}
          
        </div>
        <div className="btn-container">
           <Keypad 
            displayOnScreen={this.displayOnScreen} 
            calculateValue={this.calculateValue}
            handleAllClear={this.handleAllClear}
            />
        </div>

        
      </div>
    );
  }
}

export default App;
