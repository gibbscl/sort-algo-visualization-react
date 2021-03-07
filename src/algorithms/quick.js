//Function to find pivot element and partition array
function partition(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)]; 
    let i = left;
    let j = right;
    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
            j--;
        }
    }
    return [i, array];
}

//Recursive insertion sort function for a given array, returning an array of sorting steps
export default function quickSort(array, left, right, steps) {
    let index;
    if (array.length > 1) {
        let res = partition(array, left, right);
        index = res[0];
        steps.push(res[1].slice());
        if (left < index - 1){
            quickSort(array, left, index - 1, steps);
        }
        if (index < right){
            quickSort(array, index, right, steps);
        }
    }
    return steps;
}