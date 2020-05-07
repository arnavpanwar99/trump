import React from 'react';
import "./sass/main.scss";
import Header from './ components/Header/Header';
import Path from './router';

function App() {
	return(
		<>
			<Header />
			<Path />
		</>
	)
}

export default App;
