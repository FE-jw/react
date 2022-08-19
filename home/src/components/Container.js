import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import StyledComponents from './pages/StyledComponents';
import Hook from './pages/Hook';

const Container = () => {
	return (
		<section className="container">
			<div className="content">
				<nav className="nav-wrap">
					<ul className="nav">
						<li><Link to="react/styled-components">Styled Components</Link></li>
						<li><Link to="react/hook">Hook</Link></li>
					</ul>
				</nav>

				<Routes>
					<Route path="react/styled-components" element={<StyledComponents />} />
					<Route path="react/hook" element={<Hook />} />
				</Routes>
			</div>
		</section>
	);
};

export default Container;