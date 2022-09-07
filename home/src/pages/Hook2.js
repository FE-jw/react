import React, { useState, useEffect } from 'react';
import Hook2Timer from './Hook2Timer';
import CommonBtn from '../components/CommonBtn';

const Hook2 = () => {
	const [cnt, setCnt] = useState(0);
	const [name, setName] = useState('');

	const handleInputChange = (e) => {
		setName(e.target.value);
	};

	useEffect(() => {
		console.log('렌더링');
	});

	useEffect(() => {
		console.log('마운트(첫 렌더링) 될 때 실행');
	}, []);

	useEffect(() => {
		console.log('cnt 변화');
	}, [cnt]);

	useEffect(() => {
		console.log('name 변화');
	}, [name]);

	const [timerToggle, setTimerToggle] = useState(false);
	const toggleTimer = () => {
		setTimerToggle(!timerToggle);
	};

	return (
		<ul>
			<li>
				<h2>useEffect</h2>
				<p>개발자 도구 console 창 확인</p>
				<div>
					<CommonBtn onClick={() => setCnt(cnt + 1)}>클릭</CommonBtn>
					<span>클릭횟수: {cnt}</span><br />
					<input type="text" value={name} onChange={handleInputChange} placeholder="입력하는대로 우측에 나옴" />
					<span>{name}</span>
				</div>
			</li>
			<li>
				<h2>useEffect clean up</h2>
				<CommonBtn onClick={toggleTimer}>타이머 토글</CommonBtn>
				{timerToggle && <Hook2Timer />}
			</li>
		</ul>
	);
};

export default Hook2;