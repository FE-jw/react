import React, { useState, useRef, useEffect } from 'react';
import CommonBtn from '../components/CommonBtn';

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
			<CommonBtn onClick={increaseCntState}>Increase State</CommonBtn>
			<CommonBtn onClick={increaseCntRef}>Increase Ref</CommonBtn>
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
			<CommonBtn onClick={increaseRef}>Increase Ref</CommonBtn>
			<CommonBtn onClick={increaseVar}>Increase Var</CommonBtn>
			<CommonBtn onClick={doRendering}>Component2 렌더링 하기</CommonBtn>
		</>
	);
};

const Component3 = () => {
	const inputRef = useRef();

	useEffect(() => {
		console.log(inputRef);
		inputRef.current.focus();
	}, []);

	const login = () => {
		alert(`환영합니다 ${inputRef.current.value}!`);
		inputRef.current.focus();
	};

	return (
		<div>
			<input type="text" placeholder="username" ref={inputRef} />
			<CommonBtn onClick={login}>로그인</CommonBtn>
		</div>
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
			<CommonBtn onClick={() => setCnt(cnt + 1)}>Increase Count</CommonBtn>
			<hr />
			<p>DOM 요소에 접근</p>
			<p>최초에 포커스 가도록 구현. alert 이후 다시 포커스 가도록 구현</p>
			<Component3 />
		</div>
	);
};

export default Hook3;