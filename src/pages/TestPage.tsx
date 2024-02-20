/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import Dropdown from '../components/ui/Dropdown';
import { useState } from 'react';

export default function TestPage() {
	const [isShow, setIsShow] = useState(false);

	const handleClickChangeIsShow = () => {
		setIsShow(prev => !prev);
	};

	return (
		<div css={testCss}>
			<div>
				<div css={testTitleCss}>드랍다운</div>
				<div css={dropdownTestCss}>
					<div css={openDropdownCss} onClick={handleClickChangeIsShow}>
						드랍다운 열기
					</div>
					<Dropdown isShow={isShow} />
				</div>
			</div>
		</div>
	);
}

const testCss = css`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 30px;
	width: 100%;
	height: 100vh;
`;

const testTitleCss = css`
	font-size: 16px;
	color: #183e2a;
	margin-bottom: 20px;
`;

const dropdownTestCss = css`
	position: relative;
`;

const openDropdownCss = css`
	width: 200px;
	margin: 0 auto;
	padding: 10px 20px;
	border: 1px solid #ccc;
	cursor: pointer;
`;
