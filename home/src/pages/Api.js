import React, { useState } from 'react';
import CommonBtn from '../components/CommonBtn';
import styled from 'styled-components';

const ApiWrap = styled.div`
	position:relative;
`;

const Loading = styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	width:100%;
	height:100%;
	position:absolute;
	left:0;
	top:0;
	font-size:40px;
	font-weigth:bold;
	background-color:rgba(0, 0, 0, 0.7);
`;

const Dl = styled.dl`
	dt	{font-size:20px;font-weight:bold;}
	dt ~ dt	{margin-top:30px;}
	dd	{border-top:1px solid #ccc;}
`;

const Img = styled.img`
	width:200px;
	vertical-align:top;
`;

const Api = () => {
	const [answer, setAnswer] = useState();
	const [img, setImg] = useState();
	const [img2, setImg2] = useState();

	const [flag1, setFlag1] = useState(true);
	const [flag2, setFlag2] = useState(true);


	const call_api = () => {
		setFlag1(false);
		setFlag2(false);

		//https://yesno.wtf/api 로 API 테스트
		fetch('https://yesno.wtf/api')
			.then((res) => res.json())
			.then((data) => {
				setAnswer(data.answer);
				setImg('');
				setImg(data.image);
				setFlag1(true);
			})
			.catch((err) => {
				console.log("error:", err)
			});

		//unsplash 언스플래쉬 이미지 API
		fetch('https://source.unsplash.com/random')
			// .then((res) => res.json())
			.then((data) => {
				setImg2(data.url);
				setFlag2(true);
			})
			.catch((err) => {
				console.log("error:", err)
			});
	};


	return (
		<ApiWrap>
			<Dl>
				<dt>yesno API</dt>
				<dd>대답: {answer}</dd>
				<dd>이미지(용량 커서 느림): <Img src={img} alt="" /></dd>
				<dt>unsplash API</dt>
				<dd>이미지: <Img src={img2} alt="" /></dd>
			</Dl>
			<CommonBtn onClick={() => call_api()}>Call API</CommonBtn>
			{
				(!flag1 && !flag2) && <Loading>API 불러오는 중입니다...</Loading>
			}
		</ApiWrap>
	);
};

export default Api;