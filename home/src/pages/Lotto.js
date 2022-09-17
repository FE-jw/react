import React, { useState, useRef } from 'react';
import CommonBtn from '../components/CommonBtn';
import styled from 'styled-components';

const LottoTable = styled.table`
	font-family:inherit;font-size:20px;text-align:center;
	th	{padding:5px 8px;border:1px solid rgba(255, 255, 255, 0.4);background-color:rgba(255, 255, 255, 0.2)}
	td	{padding:5px 8px;border:1px solid rgba(255, 255, 255, 0.4);}
`;

const Result = ({ line }) => {
	let lines = [];

	for (let idx_1 = 0; idx_1 < line; idx_1++) {
		lines[idx_1] = [];

		for (let idx_2 = 0; idx_2 < 6; idx_2++) {
			while (true) {
				let current_val = Math.floor(Math.random() * 45 + 1);

				if(!lines[idx_1].includes(current_val)){
					lines[idx_1].push(current_val);
					console.log(lines);
					break;
				}
			}
		}
	}

	return(
		<div>
			결과 영역
			<LottoTable>
				<tbody>
					{
						lines.map((val_1, idx_1) => {
							return(
								<tr key={idx_1}>
									<th>{idx_1 + 1}</th>
									{
										val_1.map((val_2, idx_2) => {
											return(
												<td key={idx_2}>{val_2}</td>
											)
										})
									}
								</tr>	
							)
						})
					}
				</tbody>
			</LottoTable>
		</div>
	);
};

const Lotto = () => {
	const [isResult, setIsResult] = useState(false);
	const lottoLine = useRef(0);

	const buyLotto = (line) => {
		if(line <= 0){
			alert('한 줄 이상 구매해주세요')
			lottoLine.current.focus();
		}else if(line > 5){
			alert('최대 다섯 줄 구매 가능합니다')
			lottoLine.current.focus();
		}else{
			setIsResult(!isResult);
		}
	};

	return (
		<div>
			<input
				type="number"
				placeholder="몇 줄"
				min="0"
				max="5"
				ref={lottoLine}
			/>
			<CommonBtn onClick={() => buyLotto(lottoLine.current.value)}>구매하기</CommonBtn>
			{
				isResult && <Result line={lottoLine.current.value} />
			}
		</div>
	);
};

export default Lotto;