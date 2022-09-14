# **React**
단일 웹 페이지나 모바일 앱에서 사용자 인터페이스 중 화면에 표시되는 뷰 부분의 개발에 사용되는 자바스크립트 라이브러리

---

## **cra 개발환경 구성하기**
```console
yarn create react-app [project]
```

## **npm 모듈 설치**
```console
yarn add [module]
```

### **Router _(react-router-dom v6.3.0 기준)_**
* 모듈 설치
	```console
	yarn add react-router-dom
	```

* index.js 수정
	* BrowserRouter 추가
		```jsx
		import { BrowserRouter } from 'react-router-dom';
		```

	* BrowserRouter 감싸기
		```jsx
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
		```

* Link, Routes, Route
	```jsx
	import { Route, Routes, Link } from 'react-router-dom';
	```
	
	```jsx
	<Link to="/">Home</Link>
	<Link to="/about">About</Link>

	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about" element={<About />} />
	</Routes>
	```

* NavLink
	```jsx
	import { NavLink } from 'react-router-dom';

	//활성화 시 'acitive' class가 추가된다.
	<NavLink to="/home">Home</NavLink>
	<NavLink to="/about">About</NavLink>

	//활성화 class명을 바꾸고 싶다면... (공식문서 참고: https://reactrouter.com/en/v6.3.0/getting-started/tutorial#active-links)
	<NavLink to="/test" className={({ isActive }) => (isActive ? 'my-class' : '')}>Test</NavLink>
	```

### **styled-components**
* 모듈 설치
	```console
	yarn add styled-components
	```

* styled-components 추가
	```jsx
	import styled from 'styled-components';
	```

* 기본
	```jsx
	const StyledBtn = styled.button`
		width:250px;
		height:60px;
		...
		background-color:#282c34;
	`;

	const MyComponent = () => {
		//이곳에 styled-components를 선언하지 말 것 (렌더링 될 때마다 요소를 새로 만들기 때문에)

		return (
			<div>
				<StyledBtn>Test Button</StyledBtn>
			</div>
		);
	};
	```

* hover 적용
	```jsx
	const StyledButton = styled.button`
		...
		&:hover	{
			border:1px solid #61dafb;
		}
	`;
	```

* media query 적용
	```jsx
	const StyledButton = styled.button`
		...
		@media all and (min-width: 800px) {
			width:400px;
			height:80px;
			font-size:2.0rem;
		}
	`;
	```

* 자손 선택
	```jsx
	const DescDl = styled.dl`
		...
		dt	{
			font-weight:bold;
		}
	`;
	```


* 동위 선택
	```jsx
	const EditBtn = styled.button`
		...
	`;

	const DeleteBtn = styled.button`
		...

		${EditBtn} + &	{
			margin-left:10px;
		}
	`;
	```

### **Hook**
* useState: State란 컴포넌트가 가질 수 있는 상태를 의미한다.  
만약 '시계'라는 컴포넌트가 있고, 'time'이라는 State를 가지고 있다고 상상해보자.  
useState는 time State를 간편하게 생성하고 업데이트 할 수 있는 도구이다.  
	```jsx
	import React, { useState } from 'react';
	```

	```jsx
	const [cnt, setCnt] = useState(0);
	```

	```html
	<span>{cnt}</span>
	```

	* 배열 추가하기
		```jsx
		const [data, setData] = useState([
			{todo: '할 일 1'},
			{todo: '할 일 2'}
		]);

		setData([
			...data,
			{todo: val}
		]);

		//콜백 형식
		setData((prevState) => {
			return([
				...prevState,
				{todo: val}
			]);
		});
		```

	* **엄청 무거운 작업이 있는 경우 리렌더링 될 때 마다 계속 수행되기 때문에 성능에 영향을 줌. 이럴 땐 콜백 함수로 값을 return!**
		```jsx
		const [names, setNames] = useState(() => {
			return heavyWork();
		});
		```

* useEffect: 컴포넌트가 렌더링 될 때 특정 기능을 수행할 수 있도록 하는 hook.  
index.js에 <React.StrictMode>가 있으면 2번씩 실행된다.
	```jsx
	useEffect(() => {
		console.log('렌더링 될 때 마다 실행');
	});

	useEffect(() => {
		console.log('마운트(첫 렌더링) 될 때 실행');
	}, []);

	useEffect(() => {
		console.log('cnt값이 업데이트 될 때마다 실행');
	}, [cnt]);

	//업데이트 될 때 뿐만 아니라 마운트 될 때도 실행된다. 업데이트 될 경우에만 실행하고 싶다면..
	const mounted = useRef(false);

	useEffect(() => {
		if(!mounted.current){
			mounted.current = true;
		}else{
			//실행하고 싶은 기능 넣기
			alert(`${cnt}번째 클릭`);
		}
	}, [cnt]);

	//clean up
	useEffect(() => {
		const timer = setInterval(() => {
			console.log('1초 간격으로 타이머 시작!!');
		}, 1000);

		//컴포넌트 사라질 때 실행
		return () => {
			clearInterval(timer);
			console.log('타이머 종료!!');
		}
	});
	```

* useRef
	* 저장공간 용도
		* State의 변화 -> 렌더링 -> 컴포넌트 내부 변수들 초기화(Ref의 값은 유지되기 때문에 일반 변수를 사용한 것과 차이가 있음)
		* Ref의 변화 -> No 렌더링 -> 변수들의 값이 유지됨
			```jsx
			const cntRef = useRef(0);

			const increaseCntRef = () => {
				//cntRef.current는 1씩 증가하고 있지만 수정해도 컴포넌트를 리렌더링하지 않는다.
				cntRef.current = cntRef.current + 1;
				console.log('Ref값은', cntRef.current);
			};
			```
		* **변화는 감지하지만 변화가 렌더링을 발생시키면 안되는 값을 다룰 때 유용**
	* DOM 요소에 접근 용도
		```jsx
		const inputRef = useRef();

		<input type="text" placeholder="username" ref={inputRef} />
		```
* useContext: Context로 공유한 data를 쉽게 받아오는 hook.
	```jsx
	//App.js
	<ContextMain.Provider value={user}>
		<ContextSub.Provider value={{lang, theme, user_name, study}}>
			<Header />
			<Container />
			<Footer />
		</ContextSub.Provider>
	</ContextMain.Provider>

	//ContextTest.js
	import { ContextMain } from '../context/ContextMain';
	import { ContextSub } from '../context/ContextSub';
	
	const data_1 = useContext(ContextMain);
	const data_2 = useContext(ContextSub);
	```

	* Context: 전역적으로 사용되는 data를 손쉽게 전달할 수 있게 한다.  
	일일이 prop을 받아서 전달하게 되면 해당 data가 불필요한 컴포넌트에서도 전달해야 하기 떄문에 불필요한 코드가 많아진다.
	* Context는 꼭 필요할때만 사용하는 것을 권장!!
		* Context를 사용하면 컴포넌트를 재사용하기 어려워질 수 있다.
		* Prop drilling을 피하기 위한 목적이라면 Component Composition(컴포넌트 합성)을 먼저 고려해보자.

* useMemo: 최적화를 위한 Hook이다. 예를 들어 같은 값을 반환하는 함수가 있을 때 처음 반환한 값을 저장해서 사용하는 것이다. 자주 사용할 값을 처음 캐싱하는 것.  
첫 번째 인자는 콜백함수, 두 번째 인자는 배열이다.
	```jsx
	//컴포넌트가 처음 마운트 됐을 때만 메모이제이션
	const value = useMemo(() => {
		return calculate()
	}, []);

	//item이 업데이트되면 다시 메모이제이션
	const value = useMemo(() => {
		return calculate()
	}, [item]);
	```


### **[React.memo](https://ko.reactjs.org/docs/react-api.html#reactmemo)**
렌더링 결과를 메모이징(Memoizing)함으로써 불필요한 리렌더링을 건너뛴다.

#### **제목 못정함**
```
<button type="button" onClick={setCnt(cnt + 1)}>틀린 방법</button>
<button type="button" onClick={() => setCnt(cnt + 1)}>옳은 방법</button>

`string 사이에 ${변수} 삽입하기`
```