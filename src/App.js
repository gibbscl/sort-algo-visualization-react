import React, { Component } from 'react';
import './App.css';
import Optionbar from './components/Optionbar/Optionbar.js';
import Grid from './components/Grid/Grid.js';

var arrayHelper = require('./helpers/array.js');
var sleeper = require('./helpers/sleep.js');
var mergeHelper = require('./algorithms/merge.js');

class App extends Component {
  constructor(props){
    super();
    this.state = {currentArray: undefined, initialArray: undefined, algo: undefined, arraySize: undefined};

    this.shuffleArray = this.shuffleArray.bind(this);
    this.setAlgo = this.setAlgo.bind(this);
    this.setArraySize = this.setArraySize.bind(this);
    this.mergeSort = this.mergeSort.bind(this);
    
    
  }

  componentWillMount(){
    let arr = arrayHelper.createRandomArray(500);
    this.setState({currentArray: arr, initialArray: arr, algo: 'Select Algorithm', arraySize: 500});
  }

  //Shuffles array to new random array
  shuffleArray(){
    this.setState({currentArray: arrayHelper.createRandomArray(this.state.arraySize)})
  }

  //Sets user-specified search algorithm based on dropdown button onClick 
  setAlgo(selectedAlgo){
    this.setState({algo: selectedAlgo})
  }

  //Sets the user selected array size
  setArraySize(value){
    let arr = arrayHelper.createRandomArray(value);
    this.setState({currentArray: arr, arraySize: value})
  }

  mergeSort(){
    var sortedArray = this.state.currentArray.slice();
    mergeHelper.mergeSort(sortedArray, 0, sortedArray.length-1);
    this.setState({currentArray: sortedArray});
  }

  render() {
    return (
      <header class='App-header'>
        <Optionbar 
          shuffle={this.shuffleArray} 
          setAlgo={this.setAlgo} 
          setArraySize={this.setArraySize}
          arraySize={this.state.arraySize} 
          algo={this.state.algo} 
          mergeSort={this.mergeSort}
        />
        <Grid 
          currentArray={this.state.currentArray} 
          arraySize={this.state.arraySize} 
        />
      </header>
    );
  }
}

export default App;
