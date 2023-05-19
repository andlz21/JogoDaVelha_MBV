import React from 'react';
import Header from './Components/Header';
import Card from './Objects/Card';
import Player from './Objects/Player';

function App() {
	return (
		<>
			<Header />
			<Card />
			<Player player="o" />
		</>
	);
}

export default App;
