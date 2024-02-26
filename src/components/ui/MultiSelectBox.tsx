/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Select, Space } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import { useState } from 'react';

type MultiSelectBoxProps = {
	name?: string;
	value?: string[];
	placeholder: string;
	onClick?: React.MouseEventHandler;
	onChange?: React.ChangeEventHandler;
	options: DefaultOptionType[];
};

export default function MultiSelectBox({ name, value, placeholder, options, onClick, onChange }: MultiSelectBoxProps) {
	const [isShow, setIsShow] = useState(false);

	const handleClickBox: React.MouseEventHandler = e => {
		setIsShow(prev => !prev);
		onClick && onClick(e);
	};

	const handleChangeValue = (value: [], option: DefaultOptionType | DefaultOptionType[]) => {
		onChange && onChange({ target: { name, value } } as any);
	};

	return (
		<Space style={{ width: '100%' }} direction="vertical">
			<Select
				mode="multiple"
				allowClear
				style={{ width: '100%' }}
				placeholder={placeholder}
				onChange={handleChangeValue}
				onClick={handleClickBox}
				options={options}
				open={isShow}
				dropdownStyle={{ padding: '10px', background: '#fff' }}
				size="large"
			/>
		</Space>
	);
}
