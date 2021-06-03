import { createSlice } from '@reduxjs/toolkit';

import bubbleSort from '../../utils/algos/bubble';

const MIN_SIZE = 10;
const MAX_SIZE = 100;

const generateRandomArray = (size) => {
    if(size<0){
        size = 20;
    }
    const array = [];
    for(let i=0;i<size;i++){
        array.push(Math.floor(Math.random()*(MAX_SIZE-MIN_SIZE)+MIN_SIZE))
    }
    return array;
}

export const arraySlice = createSlice({
    name: "array",
    initialState: {
        size: 20,
        values: generateRandomArray(-1)
    },
    reducers: {
        changeSize: (state, action) => {
            state.size = action.payload;
            state.values = generateRandomArray(state.size);
        },
        randomizeArray: (state, action) => {
            // return generateRandomArray(state.size);
            state.values = generateRandomArray(action.payload);
        },
        setArray: (state, action) => {
            state.values = action.payload
        }
    }
});

export const { changeSize, randomizeArray, setArray } = arraySlice.actions;

export default arraySlice.reducer;