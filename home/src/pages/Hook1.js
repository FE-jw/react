import React, { useState } from 'react';

const Component1 = () => {
	const [time, setTime] = useState(1);

	const handleClick = () => {
		let newTime;

		if(time >= 12){
			newTime = 1;
		}else{
			newTime = time + 1;
		}

		setTime(newTime);
	};

	console.log('시간 업데이트');

	return(
		<>
			<span>시간: {time}시</span>
			<button type="button" className="btn-1" onClick={handleClick}>시간 업데이트</button>
		</>
	);
};

const heavyWork = () => {
	console.log('엄청 무거운 작업');
	return ['가나다', '라마바'];
};

const Component2 = () => {
	const [names, setNames] = useState(() => {	//리렌더링 될 때 마다 엄청 무거운 작업이 계속 수행되기 때문에 성능에 영향을 줌. 이럴 땐 콜백 함수로 값을 return 해라!
		return heavyWork();
	});
	const [input, setInput] = useState('');

	const handleInputChange = (e) => {
		setInput(e.target.value);
	};

	const handleUpload = () => {
		setNames((prevState) => {
			console.log('prevState:', prevState);
			return([...prevState, input]);
		});
	};

	console.log(input);

	return(
		<div>
			<input type="text" value={input} onChange={handleInputChange} />
			<button type="button" className="btn-1" onClick={handleUpload}>업로드</button>
			{
				names.map((value, idx) => {
					return <p key={idx}>{value}</p>;
				})
			}
		</div>
	);
};

const Hook1 = () => {
	const [cnt, setCnt] = useState(0);

	return (
		<ul>
			<li>
				<h2>useState</h2>
				<div>
					<button type="button" className="btn-1" onClick={() => setCnt(cnt - 10)}>-10</button>
					<button type="button" className="btn-1" onClick={() => setCnt(cnt - 1)}>-1</button>
					<span>{cnt}</span>
					<button type="button" className="btn-1" onClick={() => setCnt(cnt + 1)}>+1</button>
					<button type="button" className="btn-1" onClick={() => setCnt(cnt + 10)}>+10</button>
				</div>
			</li>
			<li>
				<Component1 />
			</li>
			<li>
				<Component2 />
			</li>
		</ul>
	);
};

export default Hook1;