import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StyledComponents from '../pages/StyledComponents';
import Hook1 from '../pages/Hook1';
import Hook2 from '../pages/Hook2';
import Hook3 from '../pages/Hook3';
import Hook4 from '../pages/Hook4';
import Hook5 from '../pages/Hook5';
import Hook6 from '../pages/Hook6';
import Hook7 from '../pages/Hook7';
import Lotto from '../pages/Lotto';
import MySwiper from '../pages/MySwiper';
import Googlesheet from '../pages/Googlesheet';
import Api from '../pages/Api';
import Todo from '../pages/Todo';

import Nav from './Nav';

const Container = () => {
	return (
		<section className="container">
			<div className="content">
				<Nav />
				<Routes>
					<Route path="react/home/styled-components" element={<StyledComponents />} />
					<Route path="react/home/todo" element={<Todo />} />
					<Route path="react/home/hook1" element={<Hook1 />} />
					<Route path="react/home/hook2" element={<Hook2 />} />
					<Route path="react/home/hook3" element={<Hook3 />} />
					<Route path="react/home/hook4" element={<Hook4 />} />
					<Route path="react/home/hook5" element={<Hook5 />} />
					<Route path="react/home/hook6" element={<Hook6 />} />
					<Route path="react/home/hook7" element={<Hook7 />} />
					{/* <Route path="react/home/lotto" element={<Lotto />} /> */}
					<Route path="react/home/api" element={<Api />} />
					{/* <Route path="react/home/googlesheet" element={<Googlesheet />} /> */}
					<Route path="react/home/myswiper" element={<MySwiper />} />
				</Routes>
			</div>
		</section>
	);
};

export default Container;