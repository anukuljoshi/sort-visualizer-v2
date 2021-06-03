import React, { useState } from 'react'

function DropDown(props) {
    const {value, setValue, valueList } = props;

    const [dropdown, setDropdown] = useState(false);

    const DropDownList = valueList.map((val, index) => {
        return (
            <li 
                className="w-44 bg-blue-700 hover:bg-gray-900 px-3 py-1 cursor-pointer flex items-center"
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
        <div>
            <div 
                className="w-44 bg-blue-700 px-3 py-1 cursor-pointer flex justify-between items-center"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
            >
                {value} <i className="fa fa-angle-down ml-2 text-xl"></i>
            </div>
            <div 
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
                className={`absolute ${(dropdown) ? '' : 'hidden'}`}>
                { DropDownList }
            </div>
        </div>
    )
}

export default DropDown
