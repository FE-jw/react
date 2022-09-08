import React, { useContext } from 'react';
import { TestContext } from '../context/TestContext';

const Hook4Child = () => {
	const data = useContext(TestContext);

	return (
		<div>
			<strong>Hook4 Child</strong> 컴포넌트입니다.<br />Context를 이용해서 부모 컴포넌트인 Hook4 컴포넌트에서 props를 전달받지 않고 최상위 App 컴포넌트에서 {JSON.stringify(data)} 전달받은 상태입니다.
			<ul>
				<li>Context로 전달받은 lang값은 {data.lang} 입니다.</li>
				<li>Context로 전달받은 theme값은 {data.theme} 입니다.</li>
				<li>Context로 전달받은 user_name값은 {data.user_name} 입니다.</li>
				<li>Context로 전달받은 study값은 {data.study} 입니다.</li>
			</ul>
		</div>
	);
};

export default Hook4Child;