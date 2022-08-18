import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import StyledComponents from './pages/StyledComponents';

const Container = () => {
	return (
		<section className="container">
			<div className="content">
				<nav className="nav-wrap">
					<ul className="nav">
						<li><Link to="react/styled-components">styled components</Link></li>
					</ul>
				</nav>

				<Routes>
					<Route path="react/styled-components" element={<StyledComponents />} />
				</Routes>
			</div>
		</section>
	);
};

export default Container;