import React from 'react';

import AlgoForm from '../components/form/AlgoForm';

function Navbar() {
    return (
        <div className="flex justify-between items-center bg-gray-900 text-white h-14">
            <div className="w-4/12 ml-10 font-semibold text-xl">
                Sorting Visualizer
            </div>
            <AlgoForm></AlgoForm>
        </div>
    )
}

export default Navbar;
