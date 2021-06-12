import React, { useState } from 'react'

function DropDown(props) {
    const {value, setValue, valueList } = props;

    const [dropdown, setDropdown] = useState(false);

    const DropDownList = valueList.map((val, index) => {
        return (
            <li 
                className="bg-blue-700 hover:bg-gray-900 px-3 py-1 cursor-pointer flex items-center"
                onClick={
                    () => {
                        setValue(val[0], val[1]);
                        setDropdown(false);
                    }
                }
                key={index}
            >
                {val[0]}
            </li>
        )
    })

    return (        
        <div className="w-full relative">
            <div 
                className="w-full bg-blue-700 px-3 py-1 cursor-pointer flex justify-between"
				onClick={() => setDropdown(!dropdown)}
            >
                <span>{value}</span> <span className="font-bold transform rotate-180">^</span>
            </div>
			<div 
				onClick={() => setDropdown(!dropdown)}
				className={`${(dropdown) ? '' : 'hidden'} absolute w-full`}>
				{ DropDownList }
			</div>
        </div>
    )
}

export default DropDown
