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

function Navbar(props) {
	const { sidebarVisible , setSidebarVisible } = props;

    const array = useSelector(state => state.array.values);
    const size = useSelector(state => state.array.size);
    const speed = useSelector(state => state.sortalgo.speed);
    const algo = useSelector(state => state.sortalgo.algo);

    const [disableForm, setDisableForm] = useState(false);

    const dispatch = useDispatch();
    
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
        const time = Math.floor((1500)/(speed));
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

	const setValues = async () => {
		dispatch(randomizeArray(size))
	}

    const handleChange = (event) => {
        if(event.target.name==='speed'){
			dispatch(changeSpeed(event.target.value));
        }else if(event.target.name==='size'){
			dispatch(changeSize(event.target.value));
        }
    }

    return (
        <div className={`bg-gray-900 text-white px-10 py-5 w-full ${(disableForm || !sidebarVisible)? 'hidden' : 'flex lg:flex-row flex-col items-center'} gap-5`}>
			<div className="flex sm:flex-row flex-col gap-5">
				<div className="lg:w-max">
					<label 
						className="block w-full text-xs text-center"
						htmlFor="speed"
					>{`Speed: ${speed}`}</label>
					<input
						className="appearance-none h-2 rounded-md" 
						type="range" 
						name="speed" 
						id="speed" 
						min="10"
						max="100"
						value={speed}
						onChange={handleChange}
					/>
				</div>
				<div className="lg:w-max">
					<label 
						className="block w-full text-xs text-center"
						htmlFor="size"
					>{`Size: ${size}`}</label>
					<input
						className="appearance-none h-2 rounded-md" 
						type="range" 
						name="size" 
						id="size" 
						min="10"
						max="30"
						value={size}
						onChange={handleChange}
					/>
				</div>
			</div>
            <DropDown value={localAlgo} setValue={handleDropdownChange} valueList={ALGO_LIST}></DropDown>
			<div className="w-full">
				<input 
					className="w-full bg-blue-700 px-3 py-1 cursor-pointer hover:bg-blue-800"
					type="button" 
					value="Randomize Array" 
					onClick={setValues}
				/>
			</div>
			<div className="w-full">
				<input 
					className="w-full bg-blue-700 px-3 py-1 cursor-pointer hover:bg-blue-800"
					type="button" 
					value="Start" 
					onClick={handleFormSubmit}
				/>
			</div>
        </div>
    )
}

export default Navbar;
