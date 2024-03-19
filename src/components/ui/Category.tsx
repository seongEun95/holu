/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { provideAttr } from '../../util/provideAttr';

type CategoryProps = {
	name: string;
	value?: string;
	label: string;
	selectedTab?: string;
	onClick?: React.MouseEventHandler;
};

export default function Category({ name, value, label, selectedTab, onClick }: CategoryProps) {
	const handleClickCategory = (e: React.MouseEvent<HTMLDivElement>) => {
		onClick?.(provideAttr(name, value, e));
	};

	return (
		<div css={labelCss(name === selectedTab)} onClick={e => handleClickCategory(e)}>
			{label}
		</div>
	);
}

const labelCss = (isSelected: boolean) => css`
	font-size: 24px;
	font-weight: ${isSelected ? 900 : 500};
	color: ${isSelected ? '#444' : '#868e96'};
	cursor: pointer;
`;
