var arrayHelper = require('../../helpers/array.js');
var windowHelper = require('../../helpers/window.js');


export default function sketch(p){
    let canvas;
    let canvasWidth = 0.95*windowHelper.getWindowDimensions().width;
    let canvasHeight = 0.8*windowHelper.getWindowDimensions().height;
    let currentArray = arrayHelper.createArray(250);

  
    p.setup = () => {
      canvas = p.createCanvas(canvasWidth, canvasHeight);
      p.noStroke();
    }

    p.draw = () => {
      //Recreates canvas based on resized canvas width and height
      canvas = p.createCanvas(canvasWidth, canvasHeight);
      p.noStroke();

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
       canvasWidth = props.windowWidth;
       canvasHeight  = props.windowHeight;
      }
    }
}