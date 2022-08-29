import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Hook = () => {
	const StyledLi = styled.li`
		& ~ &	{
			margin-top:10px;
			padding:10px 0;
			border-top:1px solid rgba(255, 255, 255, 0.1);
		}
	`;

	const StyledH2 = styled.h2`
		margin-bottom:10px;
		font-size:2.2rem;
		font-weight:bold;
	`;

	const StyledButton = styled.button`
		margin:0 10px;
		padding:10px;
		background-color:rgba(255, 255, 255, 0.1);
	`;

	const StyledP = styled.p`
		margin-bottom:10px;
		padding:0 10px;
	`;

	const [cnt, setCnt] = useState(0);
	const [effectCnt, setEffectCnt] = useState(0);

	useEffect(() => {
		// alert('useEffect');
	}, []);

	return (
		<ul>
			<StyledLi>
				<StyledH2>useState</StyledH2>
				<div>
					<StyledButton type="button" onClick={() => setCnt(cnt - 10)}>-10</StyledButton>
					<StyledButton type="button" onClick={() => setCnt(cnt - 1)}>-1</StyledButton>
					<span>{cnt}</span>
					<StyledButton type="button" onClick={() => setCnt(cnt + 1)}>+1</StyledButton>
					<StyledButton type="button" onClick={() => setCnt(cnt + 10)}>+10</StyledButton>
				</div>
			</StyledLi>
			<StyledLi>
				<StyledH2>useEffect(테스트중)</StyledH2>
				<div>
					<StyledP>useEffect hook은 컴포넌트가 렌더링 이후에 어떤 일을 수행해야 하는지를 말한다. <a href="https://ko.reactjs.org/docs/hooks-effect.html" target="_blank" rel="noopener noreferrer">https://ko.reactjs.org/docs/hooks-effect.html</a></StyledP>
					<StyledButton type="button" onClick={() => setEffectCnt(effectCnt + 1)}>클릭</StyledButton>
				</div>
			</StyledLi>
		</ul>
	);
};

export default Hook;