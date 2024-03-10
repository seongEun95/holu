/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import DropdownMenu from '../components/ui/DropdownMenu';
import { OPTIONS_LANGUAGE } from '../data/mainDropdownData';
import UserCountIcon from '../components/ui/UserCountIcon';
import { useState } from 'react';

export default function TestPage() {
	const [value, setValue] = useState({
		language: '',
	});

	const handleClickGetOption = (e: any) => {
		const { name, value } = e.target;
		console.log(name, value);
		setValue(prev => ({ ...prev, [name]: value }));
	};

	return (
		<div css={testCss}>
			<DropdownMenu
				name="language"
				placeholder="언어"
				options={OPTIONS_LANGUAGE}
				value={value.language}
				onClick={handleClickGetOption}
			/>
			<UserCountIcon type="view" count={1} />
			<UserCountIcon type="bookmark" count={71} />
			<UserCountIcon type="comment" count={1} />
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
