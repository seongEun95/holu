/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useState } from 'react';
import Card from '../components/ui/Card';
import DropdownMenu from '../components/ui/DropdownMenu';
import { OPTIONS_LANGUAGE } from '../data/mainDropdownData';
import dayjs from 'dayjs';

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
			<Card
				category="PROJECT"
				uploadDate={dayjs('2024-03-07')}
				deadline={dayjs('2024-03-14')}
				projectTitle="포트폴리오용 자취생 커뮤니티 프론트 구함"
				position={['프론트엔드', 'IOS']}
				skillStack={['aws', 'c']}
				userId="우멍루"
				viewCount={16}
				commentCount={4}
			/>
			<DropdownMenu
				name="language"
				placeholder="언어"
				value={value.language}
				options={OPTIONS_LANGUAGE}
				onClick={handleClickGetOption}
			/>
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
