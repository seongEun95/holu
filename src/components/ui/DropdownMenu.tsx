/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React, { useRef, useState } from 'react';
import { provideAttr } from '../../util/provideAttr';
import useOutsideClick from '../../hooks/useOutsideClick';

type Option = {
	label: string;
	value: string;
};

type DropdownMenuProps = {
	name: string;
	value: string;
	options: Option[];
	placeholder: string;
	selectedMenu?: string;
	onClick?: React.MouseEventHandler;
};

export default function DropdownMenu({ name, value, options, placeholder, selectedMenu, onClick }: DropdownMenuProps) {
	const [isShow, setIsShow] = useState(false);

	const handleClickShowOptions = () => {
		setIsShow(prev => !prev);
	};

	const divRef = useRef<HTMLDivElement>(null);
	useOutsideClick(divRef, () => setIsShow(() => false));

	const handleClickSelectOption = (selectedOption: string, e: React.MouseEvent<HTMLDivElement>) => {
		onClick?.(provideAttr(name, selectedOption, e));
		setIsShow(prev => !prev);
	};

	return (
		<div css={optionsOuterCss} ref={divRef}>
			<div css={selectedOptionCss(selectedMenu === '')} onClick={handleClickShowOptions}>
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
	);
}

const selectedOptionCss = (isSelected: boolean) => css`
	width: 125px;
	padding: 10px 20px;
	border-radius: 30px;
	color: ${isSelected ? '#646464' : 'rgb(0, 185, 174)'};
	border: 1px solid ${isSelected ? '#ccc' : 'rgb(0, 185, 174)'};
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
	z-index: 20;
`;

const itemCss = css`
	font-size: 16px;
	font-weight: 800;
	padding: 10px 20px;
	color: #646464;
	cursor: pointer;
`;
