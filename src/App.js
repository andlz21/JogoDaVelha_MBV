import React from 'react';
import './App.css';

import Header from './Components/Header';
import Hashtag from './Components/Hashtag';
import Label from './Objects/Label';

const App = () => {
	return (
		<main className='app'>
			<Header />
			<Hashtag />
			<Label content='Mostrar eventos' />
		</main>
	);
};

export default App;
