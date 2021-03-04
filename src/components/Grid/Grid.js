import P5Wrapper from 'react-p5-wrapper';
import sketch from '../sketches/sketch.js';
import './Grid.css'


export default function Grid(props){
    return (
        <div class='Grid'>
          <P5Wrapper sketch={sketch} 
          currentArray={props.currentArray} 
          arraySize={props.arraySize}
          ></P5Wrapper>
        </div>
    );
}

//export default Grid