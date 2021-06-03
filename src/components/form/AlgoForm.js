import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeSize, randomizeArray, setArray } from '../../redux/slices/arraySlice';
import { changeAlgo, changeSpeed } from '../../redux/slices/sortAlgoSlice';
import { asyncTimeout } from '../../utils/algos/asyncTimeout';

import bubbleSort from '../../utils/algos/bubble';
import selectionSort from '../../utils/algos/selection';
import insertionSort from '../../utils/algos/insertion';
import mergeSort from '../../utils/algos/merge';
import quickSort from '../../utils/algos/quick';
import heapSort from '../../utils/algos/heap';

import DropDown from './DropDown';

import { ALGO_LIST } from '../../utils/values';

function Navbar() {
    const array = useSelector(state => state.array.values);
    const size = useSelector(state => state.array.size);
    const speed = useSelector(state => state.sortalgo.speed);
    const algo = useSelector(state => state.sortalgo.algo);

    const [disableForm, setDisableForm] = useState(false);

    const dispatch = useDispatch();
    
    const [localSpeed, setLocalSpeed] = useState(55);
    const [localSize, setLocalSize] = useState(size);
    const [localAlgo, setLocalAlgo] = useState(ALGO_LIST[0][0]);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const localArray = [...array];
        let tempArrays = [];
        let activeValues = [];
        let returnValues = {};
        if(algo==='BUBBLE'){
            returnValues = bubbleSort(localArray);
            tempArrays = returnValues.tempArrays;
            activeValues = returnValues.activeValues;
        }else if(algo==='INSERTION'){
            returnValues = insertionSort(localArray);
            tempArrays = returnValues.tempArrays;
            activeValues = returnValues.activeValues;
        }else if(algo==='SELECTION'){
            returnValues = selectionSort(localArray);
            tempArrays = returnValues.tempArrays;
            activeValues = returnValues.activeValues;
        }else if(algo==='MERGE'){
            returnValues = mergeSort(localArray);
            tempArrays = returnValues.tempArrays;
            activeValues = returnValues.activeValues;
        }else if(algo==='QUICK'){
            returnValues = quickSort(localArray);
            tempArrays = returnValues.tempArrays;
            activeValues = returnValues.activeValues;
        }else if(algo==='HEAP'){
            returnValues = heapSort(localArray);
            console.log(localArray);
            tempArrays = returnValues.tempArrays;
            activeValues = returnValues.activeValues;
        }
        const graphItems = document.getElementsByClassName('bar-graph-item');
        const time = Math.floor((1000)/(speed));
        console.log(size, speed, time);
        let k = 0;
        setDisableForm(true);
        for(let i=0;i<tempArrays.length;i++){
            if(k<activeValues.length){
                graphItems[activeValues[k]].style.backgroundColor = '#0be059';
                graphItems[activeValues[k+1]].style.backgroundColor = '#0be059';
                await asyncTimeout(time);
                graphItems[activeValues[k+2]].style.backgroundColor = '#3011ab';
                k += 3;
            }
            await asyncTimeout(time);
            dispatch(setArray(tempArrays[i]));
            for(let j=0;j<graphItems.length;j++){
                graphItems[j].style.backgroundColor = '#11ab7f';
            }
        }
        setDisableForm(false);
    }

    const handleDropdownChange = (name, value) => {
        dispatch(changeAlgo(value));
        setLocalAlgo(name);
    }

    const handleChange = (event) => {
        if(event.target.name==='speed'){
            setLocalSpeed(event.target.value);
        }else if(event.target.name==='size'){
            setLocalSize(event.target.value);
        }
        console.log(localSpeed);
    }

    return (
        <div className={`w-8/12 mr-10 ${disableForm ? 'hidden' : 'flex items-center justify-end'} gap-5`}>
            <div>
                <label 
                    className="block w-full text-xs text-center"
                    htmlFor="speed"
                >{`Speed: ${localSpeed}`}</label>
                <input
                    className="appearance-none h-2 rounded-md" 
                    type="range" 
                    name="speed" 
                    id="speed" 
                    min="10"
                    max="100"
                    value={localSpeed}
                    onChange={handleChange}
                    onMouseUp={() => dispatch(changeSpeed(localSpeed))}
                />
            </div>
            <div>
                <label 
                    className="block w-full text-xs text-center"
                    htmlFor="size"
                >{`Size: ${localSize}`}</label>
                <input
                    className="appearance-none h-2 rounded-md" 
                    type="range" 
                    name="size" 
                    id="size" 
                    min="10"
                    max="30"
                    value={localSize}
                    onChange={handleChange}
                    onMouseUp={() => dispatch(changeSize(localSize))}
                />
            </div>
            <DropDown value={localAlgo} setValue={handleDropdownChange} valueList={ALGO_LIST}></DropDown>
            <input 
                className="bg-blue-700 px-3 py-1 cursor-pointer hover:bg-blue-800"
                type="button" 
                value="Randomize Array" 
                onClick={() => dispatch(randomizeArray(size))}
            />
            <input 
                className="bg-blue-700 px-3 py-1 cursor-pointer hover:bg-blue-800"
                type="button" 
                value="Start" 
                onClick={handleFormSubmit}
            />
        </div>
    )
}

export default Navbar;
