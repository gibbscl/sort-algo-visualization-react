//Insertion sort function for a given array, returning an array of sorting steps
export default function insertionSort(array) {
    let steps = [];
    for (let i=1; i<array.length; i++) {
        let current = array[i];
        let j = i - 1; 
        while ((j > -1) && (current < array[j])) {
            array[j+1] = array[j];
            j--;
            steps.push(array.slice());
        }
        array[j+1] = current;
        steps.push(array.slice());
        }
    return steps;
}