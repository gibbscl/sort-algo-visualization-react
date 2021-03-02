//Creates an array of variable size and shuffles said array
function createRandomArray(size){
  var array = [];
  for(let i=1; i<size+1; i++){
    //var bar = {value: i, color:"white"};
    array.push(i);
  }
  array = randomizeArray(array);
  return array;
}


//Function to randomzie given array
function randomizeArray(array) {
  var currentIndex = array.length, tempVal, randomIndex;
  
  //While there are elements left to shuffle
  while (0 !== currentIndex) {
  
    //Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
  
    //Swap remaining element to shuffle with curerent element
    tempVal = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempVal;
    }
  
    return array;
  }


//Creates a sorted ascending array
function createArray(size){
  var array = []
  for(let i=1; i<=size; i++){
    //var bar = {value: i, color:"white"};
    array.push(i);
  }
  //array = randomizeArray(array);
  return array;
}


module.exports = {createRandomArray, createArray}