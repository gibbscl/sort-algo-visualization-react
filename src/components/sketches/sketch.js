var arrayHelper = require('../../helpers/array.js');


export default function sketch(p){
    let canvas;
    let canvasWidth = 1450;
    let canvasHeight = 620;
    //let currentArray = props.currentArray;
    //let currentArray = p.currentArray;
    let currentArray = arrayHelper.createArray(500);
    

    p.setup = () => {
      canvas = p.createCanvas(canvasWidth, canvasHeight);
      p.noStroke();
    }

    p.draw = () => {
      p.background('black');
      for(let i=0; i<currentArray.length; i++){
          let barWidth = canvasWidth / currentArray.length;
          let barHeight = (currentArray[i] / currentArray.length) * (0.9 * canvasHeight);
          let x = (barWidth * i);
          let y = canvasHeight - barHeight;
          p.rect(x, y, barWidth, barHeight);
          p.stroke('gray');
          p.strokeWeight(1)
          p.fill('white')
      }  
    }

    p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
      if(canvas){ //Make sure the canvas has been created
       currentArray = props.currentArray;
      }
    }
}