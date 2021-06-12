import React, { useState } from 'react';

import AlgoForm from '../components/form/AlgoForm';

function Navbar() {
	const [sidebarVisible, setSidebarVisible] = useState(false);

	const sideBarToggle = () => {
		setSidebarVisible(!sidebarVisible);
	}

    return (
		<>
        <div className="flex justify-between items-center bg-gray-900 text-white h-14 px-10">
            <div className="font-semibold text-xl">
                Sorting Visualizer
            </div>
			<div onClick={sideBarToggle} className="flex flex-col gap-1 cursor-pointer">
				<div className="h-1 w-6 bg-white"></div>
				<div className="h-1 w-6 bg-white"></div>
				<div className="h-1 w-6 bg-white"></div>
			</div>
        </div>
		<AlgoForm sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}></AlgoForm>
		</>
    )
}

export default Navbar;
