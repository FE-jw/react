import React, { useEffect } from 'react';

const Hook2Timer = () => {
	useEffect(() => {
		const timer = setInterval(() => {
			console.log('1초 간격으로 타이머 시작!!');
		}, 1000);

		//clean up
		return () => {
			clearInterval(timer);
			console.log('타이머 종료!!');
		}
	});
	return (
		<div>
			Timer가 시작됐습니다. 개발자도구 console 창 확인
		</div>
	);
};

export default Hook2Timer;