import React, { useState } from 'react';
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

	const [cnt, setCnt] = useState(0);

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
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, veniam.
			</StyledLi>
		</ul>
	);
};

export default Hook;