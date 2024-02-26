/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useState } from 'react';
import SelectBox from '../components/ui/SelectBox';

export default function TestPage() {
	const [selectedValue, setSelectedValue] = useState({
		category: '',
	});

	const handleClickItem = (value: any) => {
		setSelectedValue({ category: value });
	};

	const SelectItems = [
		{
			label: '프로젝트',
			value: 'project',
		},
		{
			label: '스터디',
			value: 'study',
		},
		{
			label: '기타',
			value: 'etc',
		},
	];

	return (
		<div css={testCss}>
			<div>
				{/* <SelectBox
					type="singleSelection"
					label="모집 구분"
					defaultText="스터디/프로젝트"
					selectItems={SelectItems}
					onClick={handleClickItem}
					selectedValue={selectedValue.category}
				/> */}
				{/* <SelectBox
					type="singleSelection"
					label="모집 인원"
					defaultText="인원 미정~10명 이상"
					selectItems={SelectItems}
					onClick={handleClickItem}
					selectedValue={selectedValue.category}
				/>
				<SelectBox type="multipleSelection" label="기술 스택" selectItems={SelectItems} />
				<SelectBox type="DateSelection" label="모집 마감일" />
				<SelectBox
					type="singleSelection"
					label="모집 구분"
					defaultText="스터디/프로젝트"
					selectItems={SelectItems}
					onClick={handleClickItem}
					selectedValue={selectedValue.category} */}
				{/* // contact={true} */}
				{/* /> */}
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
