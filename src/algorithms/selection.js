//Insertion sort function for a given array, returning an array of sorting steps
export default function selectionSort(array){
    let steps = [];
    for (let i = 0; i < array.length; i++) {
        let min = i
        for (let j=i+1; j<array.length; j++) {
            if (array[min] > array[j]) {
                min = j
            }
        }
        if (min != i) {
            let temp = array[min];
            array[min] = array[i];
            array[i] = temp;
            steps.push(array.slice());
        }
    }
    return steps;
}