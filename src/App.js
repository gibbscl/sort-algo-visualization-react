import './App.css';
import { object } from 'prop-types';
import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketches/sketch.js';
import Selector from './components/dropdown.js';
var arrayHelper = require('./helpers/array.js');


class App extends Component {
  constructor(){
    super();
    this.reset = this.reset.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.arraySize = 500;
    this.state = {currentArray: undefined, initialArray: undefined};

  }
  componentWillMount(){
    //let currentArray, initialArray;
    let arr = arrayHelper.createRandomArray(this.arraySize);
    this.setState({currentArray: arr, initialArray: arr});
  }

  reset(){
    this.setState({currentArray: this.state.initialArray})
  }

  shuffle(){
    this.setState({currentArray: arrayHelper.createRandomArray(this.arraySize)})
  }

  render() {
    return (
      <header class='App-header'>
        <div class='Buttons'>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.shuffle}>Shuffle Array</button> 
        </div>
        <div><Selector></Selector></div>

        <div class='Grid'>
          <P5Wrapper sketch={sketch} currentArray={this.state.currentArray}></P5Wrapper>
        </div>
      </header>
    );
  }

  
}

export default App;
