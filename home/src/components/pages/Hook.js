import React, { useState, useEffect, useRef } from 'react';
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
	const mounted = useRef(false);

	useEffect(() => {
		if(!mounted.current){
			mounted.current = true;
		}else{
			alert(`${effectCnt}번째 클릭`);
		}
	}, [effectCnt]);

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
				<StyledH2>useEffect</StyledH2>
				<div>
					<StyledButton type="button" onClick={() => setEffectCnt(effectCnt + 1)}>클릭</StyledButton>
				</div>
			</StyledLi>
		</ul>
	);
};

export default Hook;