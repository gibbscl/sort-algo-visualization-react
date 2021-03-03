
//Function to merge two sorted arrays
function merge(array, l, m, r){
    let n1 = m - l + 1;
    let n2 = r - m;
    let arrayL = new Array(n1);
    let arrayR = new Array(n2);
    for(let i=0;i<n1;i++){
        arrayL[i] = array[l + i]
    }
    for(let j=0;j<n2;j++){
        arrayR[j] = array[m + 1 + j];
    }
    let i=0;
    let j=0;
    let k=l;
    while(i<n1 && j<n2){
        if (arrayL[i] <= arrayR[j]){
            array[k] = arrayL[i];
            i++;
        }
        else{
            array[k] = arrayR[j];
            j++;
        }
    }
    while(i<n1){
        array[k] = L[i];
        i++;
        k++;
    }
    while(j<n2){
        array[k] = arrayR[j];
        j++;
        k++;
    }
}


//Recursively called mergesort function
function mergeSort(array, l, r){
    if(l>=r){
        return;
    }
    let m = l + (r-1)/2;
    mergeSort(array, l, m);
    mergeSort(array, m+1, r);
    merge(array, l, m, r);
}


