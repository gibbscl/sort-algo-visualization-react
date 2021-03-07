//Function to merge two sorted arrays
function merge(array, left, mid, right){
    let n1 = mid - left + 1;
    let n2 = right - mid;
    let leftArray = [];
    let rightArray = [];
    for(let i=0;i<n1;i++){
        leftArray.push(array[left + i]);
    }
    for(let j=0; j<n2; j++){
        rightArray.push(array[mid + 1 + j]);
    }
    let i=0;
    let j=0;
    let k=left;
    while(i<n1 && j<n2){
        if (leftArray[i] <= rightArray[j]){
            array[k] = leftArray[i];
            i++;
        }
        else{
            array[k] = rightArray[j];
            j++;
        }
        k++;
    }
    while(i<n1){
        array[k] = leftArray[i];
        i++;
        k++;
    }
    while(j<n2){
        array[k] = rightArray[j];
        j++;
        k++;
    }

    return array;
}


//Recursive merge sort function for a given array, returning an array of sorting steps
export default function mergeSort(array, left, right, steps){
    if(left>=right){
        return;
    }
    let mid = Math.floor((left + (right - 1)) / 2);

    mergeSort(array, left, mid, steps);
    mergeSort(array, mid + 1, right, steps);
    steps.push(merge(array, left, mid, right).slice());

    return steps;
}






