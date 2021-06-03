
const bubbleSort = (array) => {
    const tempArrays = [];
    const activeValues = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length-i-1; j++) {
            activeValues.push(j);
            activeValues.push(j+1);
            if(array[j]>array[j+1]){
                activeValues.push(j);
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }else{
                activeValues.push(j+1);
            }
            tempArrays.push([...array]);
        }
    }
    return {
        tempArrays,
        activeValues
    };
}

export default bubbleSort;