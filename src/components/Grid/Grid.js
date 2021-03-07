import P5Wrapper from 'react-p5-wrapper';
import Sketch from '../Sketches/Sketch.js';
import React, { useEffect } from 'react';
import './Grid.css'


export default function Grid(props){

  useEffect(() => { 
    if (props.updateSteps != 0){ 
      props.update();  
    }
  });

    return (
        <div class='Grid'>
          <P5Wrapper 
          sketch={Sketch} 
          currentArray={props.currentArray} 
          arraySize={props.arraySize}
          updateSteps={props.updateSteps}
          update={props.update}
          ></P5Wrapper>
        </div>
    );
}

//export default Grid