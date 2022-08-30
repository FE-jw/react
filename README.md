# **React**
단일 웹 페이지나 모바일 앱에서 사용자 인터페이스 중 화면에 표시되는 뷰 부분의 개발에 사용되는 자바스크립트 라이브러리

---

## **cra 개발환경 구성하기**
```
yarn create react-app [project]
```

## **npm 모듈 설치**
```
yarn add [module]
```

### **Router _(react-router-dom v6.3.0 기준)_**
* 모듈 설치
	```console
	yarn add react-router-dom
	```

* index.js 수정
	* BrowserRouter 추가
		```js
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

* Link, Routes, Route 추가
	```js
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

### **styled-components**
* 모듈 설치
	```console
	yarn add styled-components
	```

* styled-components 추가
	```js
	import styled from 'styled-components';
	```

* 기본
	```jsx
	const MyComponent = () => {
		const StyledButton = styled.button`
			width:250px;
			height:60px;
			...
			background-color:#282c34;
		`;

		return (
			<div>
				<StyledButton>Test Button</StyledButton>
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
* useState
	```js
	import React, { useState } from 'react';
	```

	```js
	const [cnt, setCnt] = useState(0);
	```
	
	```html
	<span>{cnt}</span>
	```

	* 배열 추가하기
		```js
		const [data, setData] = useState([
			{todo: '할 일 1'},
			{todo: '할 일 2'}
		]);

		setData([
			...data,
			{todo: val}
		]);
		```
* useEffect: 컴포넌트가 렌더링 될 때 특정 기능을 수행할 수 있도록 하는 hook.<br>index.js에 <React.StrictMode>가 있으면 2번씩 실행된다.
	```jsx
	useEffect(() => {
		console.log('렌더링 될 때 마다 실행');
	});

	useEffect(() => {
		console.log('마운트 될 때만 실행');
	}, []);

	useEffect(() => {
		console.log('cnt값이 업데이트 될 때마다 실행');
	}, [cnt]);

	// 업데이트 될 때 뿐만 아니라 마운트 될 때도 실행된다. 업데이트 될 경우에만 실행하고 싶다면..
	const mounted = useRef(false);

	useEffect(() => {
		if(!mounted.current){
			mounted.current = true;
		}else{
			// 실행하고 싶은 기능 넣기
			alert(`${cnt}번째 클릭`);
		}
	}, [cnt]);
	```


### **[React.memo](https://ko.reactjs.org/docs/react-api.html#reactmemo)**
렌더링 결과를 메모이징(Memoizing)함으로써 불필요한 리렌더링을 건너뛴다.

#### **제목 못정함**
```
<button type="button" onClick={setCnt(cnt + 1)}>틀린 방법</button>
<button type="button" onClick={() => setCnt(cnt + 1)}>옳은 방법</button>

`string 사이에 ${변수} 삽입하기`
```