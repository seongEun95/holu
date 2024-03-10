/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { provideAttr } from '../../util/provideAttr';

type CategoryProps = {
	name: string;
	value: string;
	label: string;
	onClick?: React.MouseEventHandler;
};

export default function Category({ name, value, label, onClick }: CategoryProps) {
	const handleClickCategory = (e: React.MouseEvent<HTMLDivElement>) => {
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
