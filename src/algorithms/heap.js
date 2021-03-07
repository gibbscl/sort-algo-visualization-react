//Function to 'heapify' a parent node and its children, this is a max heapify making sure every parent node value
// is greater than both child node values
function heapify(array, length, i, steps) {
    let max = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
  
    if (left < length && array[left] > array[max])
      max = left;
  
    if (right < length && array[right] > array[max])
      max = right;
  
    if (max != i) {
      let temp = array[i]
      array[i] = array[max]
      array[max] = temp
      steps.push(array.slice());
      
  
      heapify(array, length, max, steps)
    }
  
  }
  
  //Heap sort function for a given array, returning an array of sorting steps
  export default function heapSort(array, steps) {
    for (let i = (Math.floor(array.length) / 2) - 1; i>=0; i--){
      heapify(array, array.length, i, steps)
    }
  
    for (let i = array.length - 1; i >= 0; i--) {
      let temp = array[0]
      array[0] = array[i]
      array[i] = temp
      steps.push(array.slice());
      
      heapify(array, i, 0, steps)
    }
    return steps;
  }
  