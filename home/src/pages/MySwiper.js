import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Tit = styled.h1`
	padding:20px 0;
	font-size:20px;
	font-weight:bold;

	& ~ &	{
		margin-top:10px;
	}
`;

const SlideStyle = styled(SwiperSlide)`
	display:flex;
	justify-content:center;
	align-items:center;
	height:200px;
	font-size:20px;
	font-weight:bold;
	color:#000;
	background-color:rgba(255, 255, 255, 0.8);
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
				<SlideStyle>Slide 1</SlideStyle>
				<SlideStyle>Slide 2</SlideStyle>
				<SlideStyle>Slide 3</SlideStyle>
				<SlideStyle>Slide 4</SlideStyle>
				<SlideStyle>Slide 5</SlideStyle>
				<SlideStyle>Slide 6</SlideStyle>
				<SlideStyle>Slide 7</SlideStyle>
				<SlideStyle>Slide 8</SlideStyle>
				<SlideStyle>Slide 9</SlideStyle>
				<SlideStyle>Slide 10</SlideStyle>
			</Swiper>
		</>
	);
};

export default MySwiper;