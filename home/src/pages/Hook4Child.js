import React, { useContext } from 'react';
import { TestContext } from '../context/TestContext';
import CommonBtn from '../components/CommonBtn';

const Hook4Child = () => {
	const colorData = useContext(TestContext);
	console.log(colorData);

	let pointColor;
	if(colorData.color){
		pointColor = '#d33';
	}else{
		pointColor = '#fff';
	}

	const handleColor = () => {
		if(colorData.setColor){
			colorData.setColor(false);
			console.log(colorData.color);
		}else{
			colorData.setColor(true);
			console.log(colorData.color);
		}
		console.log('버튼 클릭');
	};

	return (
		<div>
			<strong style={{color:pointColor}}>Hook4 Child</strong> 컴포넌트입니다. Context를 이용해서 최상위 App 컴포넌트에서 data 전달받은 상태.
			<CommonBtn onClick={handleColor}>Color Change</CommonBtn>
		</div>
	);
};

export default Hook4Child;