/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useState } from 'react';

export type SelectBoxType = 'singleSelection' | 'multipleSelection' | 'DateSelection';

type SelectItem = {
	userValue: string;
	dataValue: string;
};

type SelectBoxProps = {
	type: SelectBoxType;
	label: string;
	defaultText: string;
	selectItems: SelectItem[];
	onClick: any;
	selectedValue: string;
};

export default function SelectBox({ type, label, defaultText, selectItems, onClick, selectedValue }: SelectBoxProps) {
	const [isShow, setIsShow] = useState(false);
	const [selectedUserValue, setSelectedUserValue] = useState(defaultText);

	const handleClickSelectItme = (selectedValue: string) => {
		console.log(`선택한 실제 값 : ${selectedValue}`);
		onClick(selectedValue);
		setIsShow(prev => !prev);
	};

	const handleClickChangeText = (selectedValue: string) => {
		setSelectedUserValue(selectedValue);
	};

	const handleClickShowItems = () => {
		setIsShow(prev => !prev);
	};

	return (
		<div>
			<div css={labelCss}>{label}</div>
			{type === 'singleSelection' && (
				<div css={selectedValueCss} onClick={handleClickShowItems}>
					{selectedValue === '' ? defaultText : selectedUserValue}
				</div>
			)}
			{isShow && (
				<ul css={itemWrapCss}>
					{selectItems.map((item, index) => (
						<li
							onClick={() => {
								handleClickSelectItme(item.dataValue);
								handleClickChangeText(item.userValue);
							}}
							css={itemCss}
							key={index}
						>
							{item.userValue}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

const labelCss = css`
	font-size: 16px;
	font-weight: 500;
`;

const selectedValueCss = css`
	width: 240px;
	margin: 10px 0;
	padding: 10px;
	color: #808080;
	border: 1px solid #ccc;
	border-radius: 5px;
`;

const itemWrapCss = css`
	position: absolute;
	width: 240px;
	border: 1px solid #ccc;
	box-shadow: 0px 0px 10px #00000011;
`;

const itemCss = css`
	width: 100%;
	padding: 10px;

	&:hover {
		background-color: #d7edff;
	}
`;
