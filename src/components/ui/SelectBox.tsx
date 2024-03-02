/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React, { useRef, useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';

type Option = {
	label: string;
	value: string;
};

type SelectBoxProps = {
	name: string;
	value: string;
	label: string;
	options: Option[];
	placeholder: string;
	onClick?: React.MouseEventHandler;
};

export default function SelectBox({ name, value, label, options, placeholder, onClick }: SelectBoxProps) {
	const [isShow, setIsShow] = useState(false);

	const divRef = useRef<HTMLDivElement>(null);
	useOutsideClick(divRef, () => setIsShow(() => false));

	const provideAttr = (name: string, value: any, e: any) => {
		e.target.name = name;
		e.target.value = value;
		return e;
	};

	const handleClickSelectItme = (selectedValue: string, e: any) => {
		onClick?.(provideAttr(name, selectedValue, e));
		setIsShow(prev => !prev);
	};

	const handleClickShowItems = () => {
		setIsShow(prev => !prev);
	};

	return (
		<div>
			<div css={labelCss}>{label}</div>
			<React.Fragment>
				<div css={selectedValueCss} onClick={handleClickShowItems}>
					{value ? options.find(item => item.value === value)?.label : placeholder}
				</div>
				<div css={selectBoxWrapCss}>
					{isShow && (
						<div css={itemWrapCss} ref={divRef}>
							{options.map(item => (
								<div css={itemCss} key={item.value} onClick={e => handleClickSelectItme(item.value, e)}>
									{item.label}
								</div>
							))}
						</div>
					)}
				</div>
			</React.Fragment>
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
