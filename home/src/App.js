import React, { useState } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import './css/common.min.css';
import { TextColor } from './context/TextColor';

const App = () => {
	const [color, setColor] = useState(true);
	
	return (
		<TextColor.Provider value={{color, setColor}}>
			<Header />
			<Container />
			<Footer />
		</TextColor.Provider>
	);
};

export default App;