import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const slideStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '200px',
	fontSize: '20px',
	fontWeight: 'bold',
	color: '#000',
	backgroundColor: 'rgba(255, 255, 255, 0.8)'
};

const Tit = styled.h1`
	padding:20px 0;
	font-size:20px;
	font-weight:bold;

	& ~ &	{
		margin-top:10px;
	}
`;

const MySwiper = () => {
	return (
		<>
			<Tit>기본</Tit>
			<Swiper
				spaceBetween={30}
				slidesPerView={3}
				// onSlideChange={() => console.log('slide change')}
				// onSwiper={(swiper) => console.log(swiper)}
				>
				<SwiperSlide style={slideStyle}>Slide 1</SwiperSlide>
				<SwiperSlide style={slideStyle}>Slide 2</SwiperSlide>
				<SwiperSlide style={slideStyle}>Slide 3</SwiperSlide>
				<SwiperSlide style={slideStyle}>Slide 4</SwiperSlide>
				<SwiperSlide style={slideStyle}>Slide 5</SwiperSlide>
				<SwiperSlide style={slideStyle}>Slide 6</SwiperSlide>
				<SwiperSlide style={slideStyle}>Slide 7</SwiperSlide>
				<SwiperSlide style={slideStyle}>Slide 8</SwiperSlide>
				<SwiperSlide style={slideStyle}>Slide 9</SwiperSlide>
				<SwiperSlide style={slideStyle}>Slide 10</SwiperSlide>
			</Swiper>
		</>
	);
};

export default MySwiper;