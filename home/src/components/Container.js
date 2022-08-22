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
						<li><NavLink to="react/home/styled-components">Styled Components</NavLink></li>
						<li><NavLink to="react/home/hook">Hook</NavLink></li>
						<li><NavLink to="react/home/todo">Todolist</NavLink></li>
					</ul>
				</nav>

				<Routes>
					<Route path="react/home/styled-components" element={<StyledComponents />} />
					<Route path="react/home/hook" element={<Hook />} />
					<Route path="react/home/todo" element={<Todo />} />
					<Route path="react/home" element={<Todo />} />
				</Routes>
			</div>
		</section>
	);
};

export default Container;