const heapify = (array, i, n, tempArrays, activeValues) => {
    let largest = i;
    let left = 2*i+1;
    let right = 2*i+2;
    activeValues.push(i);
    if(left<n && array[left]>array[largest]){
        // activeValues.push(i);
        activeValues.push(left);
        largest = left;
    }
    if(right<n && array[right]>array[largest]){
        // activeValues.push(i);
        activeValues.push(right);
        largest = right;
    }

    if(largest!==i){
        activeValues.push(largest)
        let temp = array[largest];
        array[largest] = array[i];
        array[i] = temp;
        tempArrays.push([...array]);
        heapify(array, largest, n, tempArrays, activeValues);
    }
}

const buildMaxHeap = (array, n, tempArrays, activeValues) => {
    let m = Math.floor(n/2)-1;
    for(let i=m;i>=0;i--){
        heapify(array, i, n, tempArrays, activeValues);
    }
}

const heapSortHelper = (array, tempArrays, activeValues) => {
    let n = array.length;
    buildMaxHeap(array, n, tempArrays, activeValues);

    for(let i=n-1;i>0;i--){
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;
        heapify(array, 0, i, tempArrays, activeValues);
    }
}


const heapSort = (array) => {
    const tempArrays = [];
    const activeValues = [];
    heapSortHelper(array, tempArrays, activeValues);
    tempArrays.push(array);
    return {
        tempArrays,
        activeValues
    }
}

export default heapSort;