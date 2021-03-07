import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ReactBootstrapSlider from 'react-bootstrap-slider'
import 'bootstrap-slider/dist/css/bootstrap-slider.css';
import './Optionbar.css';



function handleSelection(selection, props){
  switch(selection){
    case ('Merge Sort'):
      props.mergeSort();
      break;
    case ('Bubble Sort'):
      props.bubbleSort();
      break;
    case ('Quick Sort'):
      props.quickSort();
      break;
    case ('Selection Sort'):
      props.selectionSort();
      break;
    case ('Insertion Sort'):
      props.insertionSort();
      break;
    case ('Heap Sort'):
      props.heapSort();
      break;
    default:
      break; 
  }
}

export default function Optionbar(props){


    return (
    <div>
        <div class='Buttons'>
          <button onClick={props.shuffle}>Shuffle Array</button>
          <button onClick={() => handleSelection(props.algo, props)}>Sort</button>
        </div>
        <div>
          <ReactBootstrapSlider
            value={props.arraySize}
            change={event => props.setArraySize(event.target.value)}
            //slideStop={this.changeValue}
            step={100}
            max={500}
            min={100}
            orientation="horizontal"
            reversed={false}
            //disabled="false" 
            />
        </div>
        <div class='Array'>Array Size: {props.arraySize}</div>
        <div>
        <DropdownButton alignRight title={props.algo} id="dropdown-menu-align-right">
          <div>
          <Dropdown.Item eventKey='merge'>
          <button onClick={() => props.setAlgo('Merge Sort')}>Merge Sort</button>
          </Dropdown.Item>
          <Dropdown.Item eventKey='bubble'>
          <button onClick={() => props.setAlgo('Bubble Sort')}>Bubble Sort</button>
          </Dropdown.Item>
          <Dropdown.Item eventKey='quick'>
          <button onClick={() => props.setAlgo('Quick Sort')}>Quick Sort</button>
          </Dropdown.Item>
          </div>
          <div>
          <Dropdown.Item eventKey='selection'>
          <button onClick={() => props.setAlgo('Selection Sort')}>Selection Sort</button>
          </Dropdown.Item>
          <Dropdown.Item eventKey='insertion'>
          <button onClick={() => props.setAlgo('Insertion Sort')}>Insertion Sort</button>
          </Dropdown.Item>
          <Dropdown.Item eventKey='heap'>
          <button onClick={() => props.setAlgo('Heap Sort')}>Heap Sort</button>
          </Dropdown.Item>
          </div>
        </DropdownButton>
        </div>
    </div>
    );

}

//export default Optionbar