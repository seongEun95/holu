/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useState } from 'react';
import SelectBox from '../components/ui/SelectBox';

export default function TestPage() {
	const [selectedValue, setSelectedValue] = useState<{ [key: string]: string }>({
		category: '',
	});

	const handleClickItem = (value: any) => {
		setSelectedValue({ category: value });
	};

	const SelectItems = [
		{
			userValue: '프로젝트',
			dataValue: 'project',
		},
		{
			userValue: '스터디',
			dataValue: 'study',
		},
		{
			userValue: '기타',
			dataValue: 'etc',
		},
	];

	return (
		<div css={testCss}>
			<div>
				<SelectBox
					type="singleSelection"
					label="모집 구분"
					defaultText="스터디/프로젝트"
					selectItems={SelectItems}
					onClick={handleClickItem}
					selectedValue={selectedValue.category}
				/>
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
