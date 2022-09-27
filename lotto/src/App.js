import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import './assets/common.min.css';

const App = () => {
	const [buyFlag, setBuyFlag] = useState(false);
	const buyBtn = useRef();
	const lottoLine = useRef();
	const mainTit = useRef();

	//로또 라인 수 체크
	const lineCheck = (e) => {
		if(e.target.value !== ''){
			buyBtn.current.classList.add('on');
		}else{
			buyBtn.current.classList.remove('on');
		}
	};

	//구매하기 버튼 클릭 시
	const buyLotto = () => {
		if(lottoLine.current.value > 100 || Number(lottoLine.current.value) === 0){
			alert('1장 이상, 100장 이하만 구매할 수 있습니다');
			lottoLine.current.focus();
		}else{
			setBuyFlag(!buyFlag);
		}
	};

	//결과 컴포넌트
	const Result = ({ line }) => {
		let lines = [];
	
		for (let idx_1 = 0; idx_1 < line; idx_1++) {
			lines[idx_1] = [];
	
			for (let idx_2 = 0; idx_2 < 6; idx_2++) {
				while(true){
					let current_val = Math.floor(Math.random() * 45 + 1);
	
					if(!lines[idx_1].includes(current_val)){
						lines[idx_1].push(current_val);
						lines[idx_1].sort(function(a, b){
							return a - b;
						});
						break;
					}
					
				}
			}
		}
	
		return(
			<ResultWrap>
				<table>
					<thead>
						<tr>
							<th colSpan="7" scope="col">결과</th>
						</tr>
					</thead>
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
				</table>
				<button type="button" className="btn-rebuy" onClick={() => {setBuyFlag(!buyFlag)}}>다시 뽑기</button>
			</ResultWrap>
		);
	};

	useEffect(() => {
		const titColor = ['#f2b720', '#4072ac', '#13be4b', '#de4c0e', '#000'];
		let titCnt = 0;
		setInterval(() => {
			mainTit.current.style.color = titColor[titCnt];
			if(titCnt >= titColor.length - 1){
				titCnt = 0;
			}else{
				titCnt++;
			}
		}, 1500);
	}, []);

	return (
		<div className="lotto">
			<MainTit ref={mainTit}>JW 로또 번호 추출기</MainTit>
			{
				!buyFlag && (
					<BuyWrap>
						<div className="inp-wrap">
							<input
								type="number"
								className="inp-line"
								placeholder="몇 줄 구매하시겠습니까? (1~100)"
								onChange={(e) => {lineCheck(e)}}
								ref={lottoLine}
							/>
							<button type="button" className="btn-buy" ref={buyBtn} onClick={buyLotto}>구매하기</button>
						</div>
					</BuyWrap>
				)
			}
			{
				buyFlag && <Result line={lottoLine.current.value} />
			}
			<Notice>
				<li>지난 회차들을 바탕으로 번호를 추천하는 것이 아닙니다! 1부터 45까지의 숫자 중 <strong className="point">랜덤으로 추출</strong>할 뿐입니다.</li>
				<li>혹시 이 웹앱을 사용해서 당첨된다면 조금만 떼어주세요.</li>
				<li>제 연락처는 <a href="mailto:zaixu91@gmail.com" className="point">zaixu91@gmail.com</a> 입니다.</li>
			</Notice>
		</div>
	);
};

const MainTit = styled.h1`
	font-size:20px;
	text-align:center;

	@media all and (min-width: 768px) {
		font-size:25px;
	}
`;

const BuyWrap = styled.div`
	margin-top:20px;

	.inp-wrap	{display:flex;justify-contents:space-between;gap:10px;padding:0 10px;
		.inp-line	{flex:1;padding:0 10px;border:1px solid #ccc;font-size:14px;box-sizing:border-box;}
		.btn-buy	{height:40px;padding:5px 10px;font-size:14px;font-weight:bold;color:#fff;background-color:#999;}
		.btn-buy.on	{color:#fff;background-color:#d33;}
	}

	@media all and (min-width: 768px){
		margin-top:30px;

		.inp-wrap	{
			.inp-line {font-size:16px;}
			.btn-buy	{height:50px;padding:10px 20px;font-size:16px;}
		}
	}
`;

const ResultWrap = styled.div`
	margin-top:20px;
	padding:0 10px;

	table	{width:100%;border-collapse:collapse;font-family:inherit;font-size:14px;color:#000;text-align:center;
		thead	{position:sticky;top:0;}
		thead th	{height:40px;border:1px solid #333;color:#fff;background-color:#333;}
		tbody tr:nth-child(even)	{background-color:#f7f7f7;}
		tbody th	{width:50px;height:30px;border:1px solid #ccc;}
		tbody td	{border:1px solid #ccc;}
	}

	.btn-rebuy	{display:block;min-width:200px;height:40px;margin:20px auto 0;padding:5px 10px;font-size:14px;font-weight:bold;color:#fff;background-color:#d33;}

	@media all and (min-width: 768px){
		margin-top:30px;

		table	{font-size:16px;
			thead th	{height:50px;}
			tbody th	{width:60px;height:40px;}
		}

		.btn-rebuy	{min-width:250px;height:50px;margin:30px auto 0;padding:10px 20px;font-size:16px;}
	}
`;

const Notice = styled.ul`
	margin-top:20px;
	padding:0 10px;
	line-height:1.5;
	font-size:13px;
	color:#999;

	li	{padding-left:8px;position:relative;
		&:before	{content:'-';position:absolute;left:0;top:0;}
	}

	.point	{color:#d33;}

	@media all and (min-width: 768px){
		margin-top:30px;
		font-size:15px;

		li	{padding-left:10px;}
	}
`;

export default App;