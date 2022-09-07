import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
	margin:0 10px;
	padding:10px;
	background-color:rgba(255, 255, 255, 0.1);
`;

const CommonBtn = props => {
	return (
		<StyledBtn type="button" onClick={props.onClick}>{props.children}</StyledBtn>
	);
};

export default CommonBtn;