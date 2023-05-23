import React from 'react';
import './App.css';

import Header from './Components/Header';
import Hashtag from './Components/Hashtag';
import Checkbox from './Objects/Checkbox';

const App = () => {
	return (
		<main className='app'>
			<Header />
			<Hashtag />
			<Checkbox id="showEvents" value="showEvents" type='checkbox' content="Mostrar eventos" />
		</main>
	);
};

export default App;
