import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PostRoute from './pages/PostRoute';

const Container = () => {
	return (
		<section className="container">
			<div className="content">
				<Link to="react/">홈</Link>
				<Link to="react/about">소개</Link>
				<Link to="react/route">라우터 소개</Link>

				<Routes>
					<Route path="react/" element={<Home />} />
					<Route path="react/about" element={<About />} />
					<Route path="react/route" element={<PostRoute />} />
				</Routes>
			</div>
		</section>
	);
};

export default Container;