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

const SearchZone = () => {
	const [lottoResult, setLottoResult] = useState();
	const [resultFlag, setResultFlag] = useState(false);
	const round = useRef();
	
	const search = lottoRound => {
		let url = 'https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=' + lottoRound;

		fetch(url)
		.then((res) => res.json())
		.then((data) => {
			if(data.returnValue === 'success'){
				let lotto = [
					data.drwNo,			//회차
					data.drwNoDate,	//추첨 날짜
					data.drwtNo1,	//첫번째 공
					data.drwtNo2,	//두번째 공
					data.drwtNo3,	//세번째 공
					data.drwtNo4,	//네번째 공
					data.drwtNo5,	//다섯번째 공
					data.drwtNo6,	//여섯번째 공
					data.bnusNo		//2등 보너스 공
				];

				setLottoResult(lotto);
				setResultFlag(true);
			}else if(data.returnValue === 'fail'){
				alert('아직 추첨하지 않은 회차인가요? 값을 가져오지 못했어요.');
			}
		})
		.catch((err) => {
			alert('에러 발생! 잠시 후에 다시 시도해주세요.');
		});
	};

	return(
		<div>
			<h2>지난 회차 번호 가져오기</h2>
			<input
				type="number"
				placeholder="몇 회차"
				ref={round}
			/>
			{<CommonBtn onClick={() => search(round.current.value)}>가져오기</CommonBtn>}
			{
				resultFlag && (
					<>
						<div>{lottoResult[0]} 회차 결과입니다.</div>
						<div>{lottoResult[1]} 에 추첨했습니다.</div>
						<div>첫번째 공은 <strong>{lottoResult[2]}</strong>입니다.</div>
						<div>두번째 공은 <strong>{lottoResult[3]}</strong>입니다.</div>
						<div>세번째 공은 <strong>{lottoResult[4]}</strong>입니다.</div>
						<div>네번째 공은 <strong>{lottoResult[5]}</strong>입니다.</div>
						<div>다섯번째 공은 <strong>{lottoResult[6]}</strong>입니다.</div>
						<div>여섯번째 공은 <strong>{lottoResult[7]}</strong>입니다.</div>
						<div>2등 보너스 공은 <strong>{lottoResult[8]}</strong>입니다.</div>
					</>
				)
			}
		</div>
	);
};

const Lotto = () => {
	const [isResult, setIsResult] = useState(false);
	const lottoLine = useRef();

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
			<hr />
			<SearchZone></SearchZone>
		</div>
	);
};

export default Lotto;