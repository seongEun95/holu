/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { DateValidationError, PickerChangeHandlerContext } from '@mui/x-date-pickers';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

type DatePickerProps = {
	name: string;
	value: Dayjs;
	onChange?: React.ChangeEventHandler;
};

export default function DatePicker({ name, value, onChange }: DatePickerProps) {
	const handleChangeValue = (value: dayjs.Dayjs | null, context: PickerChangeHandlerContext<DateValidationError>) => {
		onChange && onChange({ target: { name, value } } as any);
	};

	return (
		<div>
			<MuiDatePicker css={datePickerCss} name={name} format="YYYY-MM-DD" value={value} onChange={handleChangeValue} />
		</div>
	);
}

const datePickerCss = css`
	width: 100%;
`;
