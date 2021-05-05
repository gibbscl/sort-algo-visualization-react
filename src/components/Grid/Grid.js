import P5Wrapper from 'react-p5-wrapper';
import Sketch from '../Sketches/Sketch.js';
import React, { useEffect, useState } from 'react';
import './Grid.css';

var windowHelper = require('../../helpers/window.js');

export default function Grid(props){

  useEffect(() => { 
    if (props.updateSteps != 0){ 
      props.update();  
    }
  });

  let { height, width } = windowHelper.useWindowDimensions();
    return (
        <div class='Grid'>
          <P5Wrapper 
          sketch={Sketch} 
          currentArray={props.currentArray} 
          arraySize={props.arraySize}
          updateSteps={props.updateSteps}
          update={props.update}
          windowHeight={0.8*height}
          windowWidth={0.95*width}
          ></P5Wrapper>
        </div>
    );
}

//export default Grid