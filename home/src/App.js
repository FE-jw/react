import React, { useState } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import './css/common.min.css';
import { TestContext } from './context/TestContext';

const App = () => {
	const [color, setColor] = useState(true);
	
	return (
		<TestContext.Provider value={{color, setColor}}>
			<Header />
			<Container />
			<Footer />
		</TestContext.Provider>
	);
};

export default App;