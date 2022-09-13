import React, { useState, useMemo, useEffect } from 'react';
import CommonBtn from '../components/CommonBtn';

const hardCalculate = (number) => {
	console.log('어려운 계산 시작');
	for(var idx = 0; idx < 999999999; idx++){}	//생각하는 시간
	console.log('어려운 계산 끝');
	return number + 10000;
};

const easyCalculate = (number) => {
	console.log('쉬운 계산 시작');
	console.log('쉬운 계산 끝');
	return number + 1;
};

const Calculate = () => {
	const [hardNumber, setHardNumber] = useState(1);
	const [easyNumber, setEasyNumber] = useState(1);

	//hardNumber 변화가 생기면 렌더링이 되고 hardSum 변수에 계속 새로운 값이 할당된다.
	// const hardSum = hardCalculate(hardNumber);
	const hardSum = useMemo(() => {
		return hardCalculate(hardNumber)
	}, [hardNumber]);	//hardNumber가 변경이 되야만 'hardCalculate(hardNumber)' 실행됨! 불필요한 작업을 피할 수 있다.
	const easySum = easyCalculate(hardNumber);

	return(
		<div>
			<h3>计算器 1</h3>
			<input
				type="number"
				value={hardNumber}
				onChange={(e) => setHardNumber(parseInt(e.target.value))}
			/>
			<span> + 10000 = {hardSum}</span>
			<hr />
			<h3>计算器 2</h3>
			<input
				type="number"
				value={easyNumber}
				onChange={(e) => setEasyNumber(parseInt(e.target.value))}
			/>
			<span> + 1 = {easySum}</span>
			{/* 计算器 2때문에 렌더링 될 때도 계산기 1도 같이 렌더링 되서 '어려운 계산'도 실행하게 됨. */}
		</div>
	);
};

const ChiFan = () => {
	const [number, setNumber] = useState(0);
	const [isKorea, setIsKorea] = useState(true);
	// const location = isKorea ? '韩国' : '中国';
	const location = useMemo(() => {
		return{
			country: isKorea ? '韩国' : '中国'
		}
	}, [isKorea]);
	
	/* {
		country: isKorea ? '韩国' : '中国'
	}; */

	useEffect(() => {
		console.log('마운트 또는 [location] 변경으로 인한 useEffect 호출');
	}, [location]);

	return(
		<div>
			<h3>你一天吃几碗饭？</h3>
			<input
				type="number"
				value={number}
				onChange={(e) => {setNumber(e.target.value)}}
			/>
			<hr />
			<h3>现在我在{location.country}。</h3>
			<CommonBtn onClick={() => {setIsKorea(!isKorea)}}>비행기 타자</CommonBtn>
		</div>
	);
};

const Hook5 = () => {
	return (
		<div>
			<Calculate />
			<ChiFan />
		</div>
	);
};

export default Hook5;