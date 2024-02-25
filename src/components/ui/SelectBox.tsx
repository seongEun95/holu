/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React, { useState } from 'react';
import { Select, Space } from 'antd';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export type SelectBoxType = 'singleSelection' | 'multipleSelection' | 'DateSelection';

type SelectItem = {
	label: string;
	value: string;
};

type SelectBoxProps = {
	type: SelectBoxType;
	label: string;
	defaultText?: string;
	selectItems?: SelectItem[];
	onClick?: any;
	selectedValue?: string;
	contact?: boolean;
};

export default function SelectBox({
	type,
	label,
	defaultText,
	selectItems,
	onClick,
	selectedValue,
	contact,
}: SelectBoxProps) {
	const [isShow, setIsShow] = useState(false);
	const [selectedLabelValue, setSelectedLabelValue] = useState(defaultText);

	const handleClickSelectItme = (selectedValue: string) => {
		console.log(`선택한 실제 값 : ${selectedValue}`);
		onClick(selectedValue);
		setIsShow(prev => !prev);
	};

	const handleClickChangeText = (selectedValue: string) => {
		setSelectedLabelValue(selectedValue);
	};

	const handleClickShowItems = () => {
		setIsShow(prev => !prev);
	};

	const handleChangeSelectedMultiSelection = (value: string[]) => {
		console.log(`selected ${value}`);
	};

	const handleClickShowMultiSelection = () => {
		setIsShow(prev => !prev);
	};

	return (
		<div>
			<div css={labelCss}>{label}</div>
			{type === 'singleSelection' && (
				<React.Fragment>
					<div css={selectedValueCss} onClick={handleClickShowItems}>
						{selectedValue === '' ? defaultText : selectedLabelValue}
					</div>
					<div css={selectBoxWrapCss}>
						{isShow && (
							<ul css={itemWrapCss}>
								{selectItems &&
									selectItems.map((item, index) => (
										<li
											onClick={() => {
												handleClickSelectItme(item.value);
												handleClickChangeText(item.label);
											}}
											css={itemCss}
											key={index}
										>
											{item.label}
										</li>
									))}
							</ul>
						)}
					</div>
					{contact && <input css={inputCss} type="text" placeholder={`${selectedLabelValue} 주소`} />}
				</React.Fragment>
			)}
			{type === 'multipleSelection' && (
				<Space style={{ width: '100%' }} direction="vertical">
					<Select
						mode="multiple"
						allowClear
						style={{ width: '100%' }}
						placeholder="프로젝트 사용 스택"
						onChange={handleChangeSelectedMultiSelection}
						onClick={handleClickShowMultiSelection}
						options={selectItems}
						open={isShow}
						dropdownStyle={{ padding: '10px', background: '#fff' }}
						size="large"
					/>
				</Space>
			)}
			{type === 'DateSelection' && (
				<div>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker css={datePickerCss} format="YYYY-MM-DD" />
					</LocalizationProvider>
				</div>
			)}
		</div>
	);
}
const selectBoxWrapCss = css`
	position: relative;
`;

const labelCss = css`
	font-size: 16px;
	font-weight: 500;
	margin-bottom: 7px;
`;

const selectedValueCss = css`
	width: 100%;
	padding: 16px 0px 16px 10px;
	color: #808080;
	border: 1px solid #ccc;
	border-radius: 5px;
`;

const itemWrapCss = css`
	position: absolute;
	width: 100%;
	margin-top: 12px;
	z-index: 1060;
	border: 1px solid #ccc;
	box-shadow: 0px 0px 10px #00000011;
`;

const itemCss = css`
	padding: 10px;
	background-color: #fff;

	&:hover {
		background-color: #d7edff;
	}
`;

const inputCss = css`
	width: 100%;
	margin-top: 12px;
	padding: 10px;
	border: 1px solid #ccc;
`;

const datePickerCss = css`
	width: 100%;
`;
