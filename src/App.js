import React, { Component } from 'react';
import './App.css';
import Optionbar from './components/Optionbar/Optionbar.js';
import Grid from './components/Grid/Grid.js';

import mergeSort from './algorithms/merge.js';
import bubbleSort from './algorithms/bubble.js';
import quickSort from './algorithms/quick.js';
import selectionSort from './algorithms/selection.js';
import insertionSort from './algorithms/insertion.js';

var arrayHelper = require('./helpers/array.js');

class App extends Component {
  
  constructor(props){
    super();
    this.state = {
      currentArray: arrayHelper.createRandomArray(250), 
      algo: 'Select Algorithm', 
      arraySize: 250, 
      updateSteps: [],
      flag: false
    };

    this.shuffleArray = this.shuffleArray.bind(this);
    this.setAlgo = this.setAlgo.bind(this);
    this.setArraySize = this.setArraySize.bind(this);
    this.update = this.update.bind(this);

    this.mergeSortHandler = this.mergeSortHandler.bind(this);
    this.bubbleSortHandler = this.bubbleSortHandler.bind(this);
    this.quickSortHandler = this.quickSortHandler.bind(this);
    this.selectionSortHandler = this.selectionSortHandler.bind(this);
    this.insertionSortHandler = this.insertionSortHandler.bind(this);
    this.heapSortHandler = this.heapSortHandler.bind(this);
    
  }

  //Shuffles array to new random array
  shuffleArray(){
    this.setState({currentArray: arrayHelper.createRandomArray(this.state.arraySize), updateSteps: [], flag:false})
  }

  //Sets user-specified search algorithm based on dropdown button onClick 
  setAlgo(selectedAlgo){
    this.setState({algo: selectedAlgo})
  }

  //Sets the user selected array size based on the slider
  setArraySize(value){
    let arr = arrayHelper.createRandomArray(value);
    this.setState({currentArray: arr, arraySize: value})
  }

  //Updates the array to display as the next step in the returned sorting algorithm steps
  update(){
    if (this.state.updateSteps.length >= 1 && this.state.flag==true){
      let temp = this.state.updateSteps.slice(1);
      this.setState({currentArray: this.state.updateSteps[0],updateSteps: temp});
    }
    else{
      this.setState({updateSteps: []});
      this.shuffleArray();
    }
  }

  //Function to take care of Merge Sort
  mergeSortHandler(){
    let copiedArray = this.state.currentArray.slice();
    let steps = mergeSort(copiedArray, 0, copiedArray.length-1, []);
    this.setState({updateSteps: steps, flag: true});
  }

  //Handler function to take care of Bubble Sort
  bubbleSortHandler(){
    let copiedArray = this.state.currentArray.slice();
    let steps = bubbleSort(copiedArray);
    this.setState({updateSteps: steps, flag: true});
  }

  //Function to take care of Quick Sort
  quickSortHandler(){
    let copiedArray = this.state.currentArray.slice();
    let steps = quickSort(copiedArray, 0, copiedArray.length-1, []);
    this.setState({updateSteps: steps, flag: true});
  }

  //Function to take care of Selection Sort
  selectionSortHandler(){
    let copiedArray = this.state.currentArray.slice();
    let steps = selectionSort(copiedArray);
    this.setState({updateSteps: steps, flag: true});
  }

  //Function to take care of Insertion Sort
  insertionSortHandler(){
    let copiedArray = this.state.currentArray.slice();
    let steps = insertionSort(copiedArray);
    this.setState({updateSteps: steps, flag: true});
  }

  //Function to take care of Heap Sort
  heapSortHandler(){
    let copiedArray = this.state.currentArray.slice();
    let steps = insertionSort(copiedArray);
    this.setState({updateSteps: steps, flag: true});
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
          mergeSort={this.mergeSortHandler}
          bubbleSort={this.bubbleSortHandler}
          quickSort={this.quickSortHandler}
          selectionSort={this.selectionSortHandler}
          insertionSort={this.insertionSortHandler}
          heapSort={this.heapSortHandler}
        />
        <Grid 
          currentArray={this.state.currentArray} 
          arraySize={this.state.arraySize} 
          updateSteps={this.state.updateSteps}
          update={this.update}
          flag={this.flag}
        />
      </header>
    );
  }
}

export default App;
