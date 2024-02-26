/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React, { useRef, useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';

export type SelectBoxType = 'singleSelection' | 'multipleSelection' | 'DateSelection';

type SelectItem = {
	label: string;
	value: string;
};

type SelectBoxProps = {
	name: string;
	value: string;
	label: string;
	options: SelectItem[];
	placehoder?: string;
	onClick?: React.MouseEventHandler;
};

export default function SelectBox({ label, options, placehoder = '', onClick, name, value }: SelectBoxProps) {
	const [isShow, setIsShow] = useState(false);

	const ulRef = useRef<HTMLDivElement>(null);
	useOutsideClick(ulRef, () => setIsShow(() => false));

	const handleClickSelectItem = (selectedValue: string, e: any) => {
		onClick && onClick(provideAttr(name, selectedValue, e));
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
					{value === '' ? placehoder : options.find(item => item.value === value)?.label}
				</div>
				<div css={selectBoxWrapCss}>
					{isShow && (
						<div css={itemWrapCss} ref={ulRef}>
							{options.map(item => (
								<div key={item.value} onClick={e => handleClickSelectItem(item.value, e)}>
									<div css={itemCss}>{item.label}</div>
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

const provideAttr = (name: string, value: any, e: any) => {
	e.target.name = name;
	e.target.value = value;
	return e;
};
