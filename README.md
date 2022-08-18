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
- 모듈 설치
	```
	yarn add react-router-dom
	```
- index.js 수정
	- BrowserRouter 추가
		```js
		import { BrowserRouter } from 'react-router-dom';
		```

	- BrowserRouter 감싸기
		```js
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
		```

- Link, Routes, Route 추가
	```js
	import { Route, Routes, Link } from 'react-router-dom';
	```
	
	```js
	<Link to="/">Home</Link>
	<Link to="/about">About</Link>

	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about" element={<About />} />
	</Routes>
	```

### **styled-components**
- styled-components 추가
	```js
	import styled from 'styled-components';
	```

- 기본
	```js
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

- hover 적용
	```js
	const StyledButton = styled.button`
		...
		&:hover	{
			border:1px solid #61dafb;
		}
	`;
	```

- media query 적용
	```js
	const StyledButton = styled.button`
		...
		@media all and (min-width: 800px) {
			width:400px;
			height:80px;
			font-size:2.0rem;
		}
	`;
	```