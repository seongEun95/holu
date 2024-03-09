/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React from 'react';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';

type DatePickProps = {
	name: string;
	value: Dayjs;
	label: string;
	onChange: React.ChangeEventHandler;
};

export default function DatePicker({ name, value, label, onChange }: DatePickProps) {
	const handleChangeValue = (value: Dayjs | null) => {
		onChange?.({ target: { name, value } } as any);
	};

	return (
		<React.Fragment>
			<div css={labelCss}>{label}</div>
			<MuiDatePicker name={name} value={value} css={datePickerCss} format="YYYY-MM-DD" onChange={handleChangeValue} />
		</React.Fragment>
	);
}

const datePickerCss = css`
	width: 100%;
	.css-1d3z3hw-MuiOutlinedInput-notchedOutline {
		border-color: #ccc;
	}
	.css-nxo287-MuiInputBase-input-MuiOutlinedInput-input {
		padding: 13.5px 10px;
	}
`;

const labelCss = css`
	font-size: 16px;
	font-weight: 500;
	margin-bottom: 7px;
`;
