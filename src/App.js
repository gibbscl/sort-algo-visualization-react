import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketches/sketch.js';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import ReactBootstrapSlider from 'react-bootstrap-slider'
import "bootstrap-slider/dist/css/bootstrap-slider.css"
import './App.css';


var arrayHelper = require('./helpers/array.js');


class App extends Component {
  constructor(){
    super();
    //this.reset = this.reset.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.setAlgo = this.setAlgo.bind(this);
    this.setArraySize = this.setArraySize.bind(this);
    this.arraySize = 500;
    this.state = {currentArray: undefined, initialArray: undefined, algo: undefined, arraySize: undefined};

  }


  componentWillMount(){
    //let currentArray, initialArray;
    let arr = arrayHelper.createRandomArray(this.arraySize);
    this.setState({currentArray: arr, initialArray: arr, algo: 'Select Algorithm', arraySize: 500});
  }

  //Resets array to last shuffled array
  reset(){
    this.setState({currentArray: this.state.initialArray})
  }

  //Shuffles array to new random array
  shuffle(){
    this.setState({currentArray: arrayHelper.createRandomArray(this.state.arraySize)})
  }

  //Sets user-specified search algorithm based on dropdown button onClick 
  setAlgo(selectedAlgo){
    this.setState({algo: selectedAlgo})
  }

  setArraySize(value){
    let arr = arrayHelper.createRandomArray(value);
    this.setState({currentArray: arr, arraySize: value})
  }

  render() {
    return (
      <header class='App-header'>
        <div class='Buttons'>
          <button onClick={this.shuffle}>Shuffle Array</button>
          <button>Sort</button>
        </div>
        <div>
          <ReactBootstrapSlider
            value={this.state.arraySize}
            change={event => this.setArraySize(event.target.value)}
            //slideStop={this.changeValue}
            step={100}
            max={1000}
            min={100}
            orientation="horizontal"
            reversed={false}
            //disabled="false" 
            />
        </div>
        <div class='Array'>Array Size: {this.state.arraySize}</div>
        <div>
        <DropdownButton alignRight title={this.state.algo} id="dropdown-menu-align-right">
          <Dropdown.Item eventKey='merge'>
          <button onClick={() => this.setAlgo('Merge Sort')}>Merge Sort</button>
          </Dropdown.Item>
          <Dropdown.Item eventKey='bubble'>
          <button onClick={() => this.setAlgo('Bubble Sort')}>Bubble Sort</button>
          </Dropdown.Item>
          <Dropdown.Item eventKey='quick'>
          <button onClick={() => this.setAlgo('Quick Sort')}>Quick Sort</button>
          </Dropdown.Item>
          <Dropdown.Item eventKey='selection'>
          <button onClick={() => this.setAlgo('Selection Sort')}>Selection Sort</button>
          </Dropdown.Item>
          <Dropdown.Item eventKey='insertion'>
          <button onClick={() => this.setAlgo('Insertion Sort')}>Insertion Sort</button>
          </Dropdown.Item>
        </DropdownButton>
        </div>
        <div class='Grid'>
          <P5Wrapper sketch={sketch} 
          currentArray={this.state.currentArray} 
          arraySize={this.state.arraySize}
          ></P5Wrapper>
        </div>
      </header>
    );
  }

  
}

export default App;
