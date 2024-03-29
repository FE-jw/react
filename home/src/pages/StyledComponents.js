import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
	width:250px;
	height:60px;
	line-height:1.2;
	font-size:1.6rem;
	font-weight:bold;
	color:#61dafb;
	background-color:#282c34;

	&:hover	{
		border:1px solid #61dafb;
	}

	@media all and (min-width: 800px) {
		width:400px;
		height:80px;
		font-size:2.0rem;
	}
`;

const StyledComponents = () => {

	return (
		<div>
			<StyledBtn>Test Button</StyledBtn>
		</div>
	);
};

export default StyledComponents;