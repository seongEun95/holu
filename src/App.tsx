/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import React from 'react';
import './App.css';
import './reset.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p css={testCss}>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

const testCss = css`
	color: red;
`;

export default App;
