//Function to merge two sorted arrays
function merge(array, left, mid, right){
    var n1 = mid - left + 1;
    var n2 = right - mid;
    var leftArray = [];
    var rightArray = [];
    for(let i=0;i<n1;i++){
        leftArray.push(array[left + i]);
    }
    for(let j=0;j<n2;j++){
        rightArray.push(array[mid + 1 + j]);
    }
    var i=0;
    var j=0;
    var k=left;
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


//Recursively called mergesort function
function mergeSort(array, left, right){
    if(left>=right){
        return;
    }
    var mid = Math.floor((left + (right-1))/2);

    mergeSort(array, left, mid);
    mergeSort(array, mid+1, right);
    merge(array, left, mid, right);
}



module.exports = {mergeSort}



