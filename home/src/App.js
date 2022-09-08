import React, { useState } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import './css/common.min.css';
import { TestContext } from './context/TestContext';

const App = () => {
	const lang = 'ko';
	const theme = 'dark';
	const user_name = 'Brad Pitt';
	const study = 'React';
	
	return (
		<TestContext.Provider value={{lang, theme, user_name, study}}>
			<Header />
			<Container />
			<Footer />
		</TestContext.Provider>
	);
};

export default App;