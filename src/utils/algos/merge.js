// const merge = (array, l, m, r, tempArrays, activeValues) => {
//     let n1 = m-l+1;
//     let n2 = r-m;

//     let left = [];
//     for(let i=0;i<n1;i++){
//         left.push(array[l+i]);
//     }
//     let right = [];
//     for(let i=0;i<n2;i++){
//         right.push(array[m+1+i]);
//     }

//     let i = 0;
//     let j = 0;
//     let k = 0;
//     while(i<n1 && j<n2){
//         activeValues.push(l+i);
//         activeValues.push(m+1+j);
//         if(left[i]<right[j]){
//             activeValues.push(l+i);
//             array[l+k] = left[i];
//             i += 1;
//             k += 1;
//         }else{
//             activeValues.push(m+1+j);
//             array[l+k] = right[j];
//             j += 1
//             k += 1
//         }
//         tempArrays.push([...array]);
//     }
//     while(i<n1){
//         activeValues.push(l+i);
//         activeValues.push(l+i);
//         activeValues.push(l+i);
//         array[l+k] = left[i];
//         i += 1;
//         k += 1;
//         tempArrays.push([...array]);
//     }
//     while(j<n2){
//         activeValues.push(m+1+j);
//         activeValues.push(m+1+j);
//         activeValues.push(m+1+j);
//         array[l+k] = right[j];
//         j += 1
//         k += 1
//         tempArrays.push([...array]);
//     }
// }

const merge = (array, l, m, r, tempArrays, activeValues) => {
    let n2 = m+1;
    if(array[m]<=array[n2]){
        return;
    }

    while(l<=m && n2<=r){
        activeValues.push(l);
        activeValues.push(n2);
        if(array[l]<=array[n2]){
            activeValues.push(l);
            l += 1
        }
        else{
            activeValues.push(n2);
            let val = array[n2];
            let index = n2;

            while(index!==l){
                array[index] = array[index-1];
                index -= 1;
            }
            array[l] = val;

            l += 1;
            m += 1;
            n2 += 1;
        }
        tempArrays.push([...array]);
    }
}


const mergeSortHelper = (array, l, r, tempArrays, activeValues) => {
    if(l<r){
        let m = Math.floor((r-l)/2)+l;
        mergeSortHelper(array, l, m, tempArrays, activeValues);
        mergeSortHelper(array, m+1, r, tempArrays, activeValues);
        merge(array, l, m, r, tempArrays, activeValues);
    }
}

const mergeSort = (array) => {
    const tempArrays = [];
    const activeValues = [];
    mergeSortHelper(array, 0, array.length-1, tempArrays, activeValues);
    tempArrays.push([...array]);
    return {
        tempArrays,
        activeValues
    };
}

export default mergeSort;