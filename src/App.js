import React from 'react';

import Navbar from './layouts/Navbar';
import Visualizer from './components/Visualizer'

function App() {

	return (
		<div className="bg-gray-700 h-screen">
			<Navbar></Navbar>
			<Visualizer></Visualizer>
		</div>
	);
}

export default App;
