import { createSlice } from '@reduxjs/toolkit';

const MIN_SPEED = 10;
const MAX_SPEED = 100;

export const sortSlice = createSlice({
    name: 'sortalgo',
    initialState: {
        algo: 'BUBBLE',
        speed: '55'
    },
    reducers: {
        changeSpeed: (state, action) => {
            if(action.payload>MAX_SPEED){
                state.speed = MAX_SPEED;
            }else if(action.payload<MIN_SPEED){
                state.speed = MIN_SPEED;
            }else{
                state.speed = action.payload;
            }
        },
        changeAlgo: (state, action) => {
            state.algo = action.payload;
        }
    }
});

export const { changeSpeed, changeAlgo } = sortSlice.actions;

export default sortSlice.reducer;