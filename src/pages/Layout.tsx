/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function Layout() {
	return (
		<React.Fragment>
			<Header />
			<Outlet />
		</React.Fragment>
	);
}
