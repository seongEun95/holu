/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Select, Space } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import React, { useRef, useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';

type MultiSelectBoxProps = {
	name: string;
	value: string[];
	label: string;
	placeholder: string;
	onClick?: React.MouseEventHandler;
	onChange: React.ChangeEventHandler;
	options: DefaultOptionType[];
};

export default function MultiSelectBox({
	name,
	value,
	label,
	placeholder,
	onClick,
	onChange,
	options,
}: MultiSelectBoxProps) {
	const [isShow, setIsShow] = useState(false);

	const handleClickItems: React.MouseEventHandler = e => {
		setIsShow(prev => !prev);
		onClick?.(e);
	};

	const handleChangeValue = (value: string[]) => {
		onChange({ target: { name, value } } as any);
	};

	return (
		<React.Fragment>
			<div css={labelCss}>{label}</div>
			<Space style={{ width: '100%' }} direction="vertical">
				<Select
					mode="multiple"
					allowClear
					style={{ width: '100%' }}
					placeholder={placeholder}
					onChange={handleChangeValue}
					onClick={handleClickItems}
					options={options}
					open={isShow}
					dropdownStyle={{ padding: '10px', background: '#fff' }}
					size="large"
					css={inputCss}
				/>
			</Space>
		</React.Fragment>
	);
}

const labelCss = css`
	font-size: 16px;
	font-weight: 500;
	margin-bottom: 7px;
`;

const inputCss = css`
	:where(.css-dev-only-do-not-override-1k979oh).ant-select-outlined:not(.ant-select-customize-input)
		.ant-select-selector {
		padding: 6px 10px;
	}
`;
