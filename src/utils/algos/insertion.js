
const insertionSort = (array) => {
    const tempArrays = [];
    const activeValues = [];

    for(let i=1;i<array.length;i++){
        let key = array[i];
        let j = i-1;
        while(j>=0 && array[j]>key){
            activeValues.push(i);
            activeValues.push(j)
            activeValues.push(j);
            array[j+1] = array[j];
            j -= 1;
            tempArrays.push([...array]);
        }
        activeValues.push(i);
        activeValues.push(j+1);
        activeValues.push(i);
        array[j+1] = key;
        tempArrays.push([...array]);
    }
    return {
        tempArrays,
        activeValues
    }
}

export default insertionSort;