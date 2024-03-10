/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

type CategoryProps = {
	name: string;
	value: string;
	label: string;
	onClick?: React.MouseEventHandler;
};

const provideAttr = (name: string, value: any, e: any) => {
	e.target.name = name;
	e.target.value = value;
	return e;
};

export default function Category({ name, value, label, onClick }: CategoryProps) {
	const handleClickCategory = (e: any) => {
		onClick?.(provideAttr(name, value, e));
	};

	return (
		<div css={labelCss} onClick={e => handleClickCategory(e)}>
			{label}
		</div>
	);
}

const labelCss = css`
	font-size: 24px;
	font-weight: 700;
	color: #868e96;
	cursor: pointer;
`;
