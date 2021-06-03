const partition = (array, l, r, tempArrays, activeValues) => {
    let pivot = array[r];
    let start = l;
    let end = r-1;

    while(start<=end){
        activeValues.push(start);
        activeValues.push(r);
        if(array[start]>pivot){
            activeValues.push(r);
            let temp = array[start];
            array[start] = array[end];
            array[end] = temp;
            end -= 1;
        }else{
            activeValues.push(start);
            start += 1;
        }
        tempArrays.push([...array]);
    }

    array[r] = array[start];
    array[start] = pivot;
    return start;
}


const quickSortHelper = (array, l, r, tempArrays, activeValues) => {
    if(l<r){
        let pivot = partition(array, l, r, tempArrays, activeValues);
        quickSortHelper(array, l, pivot-1, tempArrays, activeValues);
        quickSortHelper(array, pivot+1, r, tempArrays, activeValues);
    }
}


const quickSort = (array) => {
    const tempArrays = [];
    const activeValues = [];
    quickSortHelper(array, 0, array.length-1, tempArrays, activeValues);
    tempArrays.push(array);
    return {
        tempArrays,
        activeValues
    }
}

export default quickSort;