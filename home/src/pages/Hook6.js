import React, { useState, useEffect, useCallback } from 'react';
import CommonBtn from '../components/CommonBtn';

const Box = ({ createBoxStyle }) => {
	const [style, setStyle] = useState({});

	useEffect(() => {
		console.log('Change Box Size');
		setStyle(createBoxStyle());
	}, [createBoxStyle]);

	return(
		<div style={style}></div>
	);
};

const Component3 = () => {
	const [size, setSize] = useState(100);
	const [isDark, setIsDark] = useState(false);

	//size가 바뀔 때만
	const createBoxStyle = useCallback(() => {
		return{
			backgroundColor: '#d33',
			width: `${size}px`,
			height: `${size}px`
		};
	}, [size]);

	return(
		<div style={{backgroundColor: isDark ? 'black' : 'white'}}>
			<input
				type="number"
				value={size}
				onChange={(e) => setSize(e.target.value)}
			/>
			<CommonBtn onClick={() => setIsDark(!isDark)}>Change Theme</CommonBtn>
			<Box createBoxStyle={createBoxStyle}>{`${size}px`}</Box>
		</div>
	);
};

const Component2 = () => {
	const [number, setNumber] = useState(0);
	const [toggle, setToggle] = useState(true);

	const someFunc = useCallback(() => {
		console.log(`someFuc: number: ${number}`);
		return;
	}, [number]);
	
	useEffect(() => {
		console.log('someFunction 변경됨');
	}, [someFunc]);

	return(
		<div>
			<input
				type="number"
				value={number}
				onChange={(e) => {setNumber(e.target.value)}}
			/>
			<CommonBtn onClick={() => setToggle(!toggle)}>{toggle.toString()}</CommonBtn>
			<br />
			<CommonBtn onClick={someFunc}>Call someFunc</CommonBtn>
		</div>
	);
};

const Component1 = () => {
	const [number, setNumber] = useState(0);

	const someFunc = () => {
		console.log(`someFuc: number: ${number}`);
		return;
	};

	useEffect(() => {
		//state 'number'가 변경되면 Component1이 리렌더링되고 const someFunc 변수도 값이 재할당되기 때문에 또 호출됨
		console.log('someFunction 변경됨');
	}, [someFunc]);

	return(
		<div>
			<input
				type="number"
				value={number}
				onChange={(e) => {setNumber(e.target.value)}}
			/>
			<br />
			<CommonBtn onClick={someFunc}>Call someFunc</CommonBtn>
		</div>
	);
};

const Hook6 = () => {
	return (
		<div>
			<Component1 />
			<Component2 />
			<Component3 />
		</div>
	);
};

export default Hook6;