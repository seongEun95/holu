/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React, { useState } from 'react';

type Option = {
	label: string;
	value: string;
};

type DropdownMenuProps = {
	name: string;
	value: string;
	options: Option[];
	placeholder: string;
	onClick?: React.MouseEventHandler;
};

const provideAttr = (name: string, value: any, e: any) => {
	e.target.name = name;
	e.target.value = value;
	return e;
};

export default function DropdownMenu({ name, value, options, placeholder, onClick }: DropdownMenuProps) {
	const [isShow, setIsShow] = useState(false);

	const handleClickShowOptions = () => {
		setIsShow(prev => !prev);
	};

	const handleClickSelectOption = (selectedOption: string, e: any) => {
		onClick?.(provideAttr(name, selectedOption, e));
		setIsShow(prev => !prev);
	};

	return (
		<React.Fragment>
			<div css={optionsOuterCss}>
				<div css={selectedOptionCss} onClick={handleClickShowOptions}>
					{value ? options.find(item => item.value === value)?.label : placeholder}
				</div>
				{isShow && (
					<div css={optionsWrapCss}>
						{options.map(item => (
							<div css={itemCss} key={item.value} onClick={e => handleClickSelectOption(item.value, e)}>
								{item.label}
							</div>
						))}
					</div>
				)}
			</div>
		</React.Fragment>
	);
}

const selectedOptionCss = css`
	width: 125px;
	padding: 10px 20px;
	border-radius: 30px;
	border: 1px solid #ccc;
	cursor: pointer;
`;

const optionsOuterCss = css`
	position: relative;
`;

const optionsWrapCss = css`
	position: absolute;
	width: 125px;
	margin-top: 10px;
	padding: 20px 0;
	border-radius: 30px;
	border: 1px solid #ccc;
	background-color: #fff;
`;

const itemCss = css`
	font-size: 16px;
	font-weight: 800;
	padding: 10px 20px;
	color: #646464;
	cursor: pointer;
`;
