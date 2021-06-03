
const selectionSort = (array) => {
    const tempArrays = [];
    const activeValues = [];
    for(let i=0;i<array.length;i++){
        let minIndex = i;
        for(let j=i+1;j<array.length;j++){
            activeValues.push(minIndex);
            activeValues.push(j);
            if(array[j]<array[minIndex]){
                activeValues.push(j);
                minIndex = j;
            }else{
                activeValues.push(minIndex);
            }
            tempArrays.push([...array]);
        }
        activeValues.push(i);
        activeValues.push(minIndex);
        activeValues.push(minIndex);
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
        tempArrays.push([...array]);

    }
    return {
        tempArrays,
        activeValues
    }
}

export default selectionSort;