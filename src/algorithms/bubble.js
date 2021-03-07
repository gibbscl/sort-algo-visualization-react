//Bubble sort function for a given array, returning an array of sorting steps
export default function bubbleSort(array){
    let steps = [];
    let flag;
    let length = array.length-1;
    do {
        flag = false;
        for (let i=0; i<length; i++){
        
            if (array[i] > array[i+1]){
            
               var temp = array[i];
               array[i] = array[i+1];
               array[i+1] = temp;
               flag = true;
               steps.push(array.slice());
            }
        }
        length--;
    } while (flag);
    
    return steps; 
}