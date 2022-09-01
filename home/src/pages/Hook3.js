import React, { useState, useRef, useEffect } from 'react';

const Component1 = () => {
	const [cnt, setCnt] = useState(0);
	const cntRef = useRef(0);

	console.log('Component1 렌더링...');

	const increaseCntState = () => {
		setCnt(cnt + 1);
	};
	
	const increaseCntRef = () => {
		//cntRef.current는 1씩 증가하고 있지만 수정해도 컴포넌트를 리렌더링하지 않는다.
		cntRef.current = cntRef.current + 1;
		console.log('Ref값은', cntRef.current);
	};

	return (
		<>
			<div>State: {cnt}</div>
			<div>Ref: {cntRef.current}</div>
			<p>Increase Ref 값은 렌더링 후에만 반영된다.</p>
			<button type="button" className="btn-1" onClick={increaseCntState}>Increase State</button>
			<button type="button" className="btn-1" onClick={increaseCntRef}>Increase Ref</button>
		</>
	);
};

const Component2 = () => {
	const [render, setRender] = useState(0);
	const cntRef = useRef(0);
	let cntVar = 0;
	
	const doRendering = () => {
		setRender(render + 1);
		console.log('Component2 렌더링 완료');
	};

	const increaseRef = () => {
		cntRef.current = cntRef.current + 1;
		console.log('Ref 값은', cntRef.current);
	};
	
	const increaseVar = () => {
		cntVar = cntVar + 1;
		console.log('Var 값은', cntVar);
	};

	return (
		<>
			<div>Ref: {cntRef.current}</div>
			<div>Var: {cntVar}</div>
			<p>일반 변수는 렌더링 시 값이 초기화 되기 때문에 계속 초기값 상태</p>
			<button type="button" className="btn-1" onClick={increaseRef}>Increase Ref</button>
			<button type="button" className="btn-1" onClick={increaseVar}>Increase Var</button>
			<button type="button" className="btn-1" onClick={doRendering}>Component2 렌더링 하기</button>
		</>
	);
};

const Hook3 = () => {
	const [cnt, setCnt] = useState(0);
	const renderCnt = useRef(0);

	useEffect(() => {
		renderCnt.current = renderCnt.current + 1;
		console.log('렌더링 수:', renderCnt.current);
	});
	
	return (
		<div>
			<Component1 />
			<hr />
			<Component2 />
			<hr />
			<div>Count: {cnt}</div>
			<p>개발자 도구 console 창에서 렌더링 수 확인</p>
			<button type="button" className="btn-1" onClick={() => setCnt(cnt + 1)}>Increase Count</button>
		</div>
	);
};

export default Hook3;