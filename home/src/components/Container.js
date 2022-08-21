import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import StyledComponents from './pages/StyledComponents';
import Hook from './pages/Hook';
import Todo from './pages/Todo';

const Container = () => {
	return (
		<section className="container">
			<div className="content">
				<nav className="nav-wrap">
					<ul className="nav">
						<li><NavLink to="react/styled-components">Styled Components</NavLink></li>
						<li><NavLink to="react/hook">Hook</NavLink></li>
						<li><NavLink to="react/todo">Todolist</NavLink></li>
					</ul>
				</nav>

				<Routes>
					<Route path="react/styled-components" element={<StyledComponents />} />
					<Route path="react/hook" element={<Hook />} />
					<Route path="react/todo" element={<Todo />} />
				</Routes>
			</div>
		</section>
	);
};

export default Container;