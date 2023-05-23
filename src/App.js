import React from 'react';
import './App.css';

import Header from './Components/Header';
import Hashtag from './Components/Hashtag';
import InputCheckbox from './Objects/Input_Checkbox';

const App = () => {
	return (
		<main className='app'>
			<Header />
			<Hashtag />
			<InputCheckbox id="showEvents" value="showEvents" content="Mostrar eventos" />
		</main>
	);
};

export default App;
