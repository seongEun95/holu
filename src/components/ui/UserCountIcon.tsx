/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { GrView } from 'react-icons/gr';
import { PiHandWavingLight } from 'react-icons/pi';
import { IoChatbubbleOutline } from 'react-icons/io5';

export type IconType = 'view' | 'bookmark' | 'comment';

type UserCountIconProps = {
	type: string;
	count: number;
};

const renderIcon = (type: string) => {
	switch (type) {
		case 'view':
			return <GrView size={20} color="#999" />;
		case 'bookmark':
			return <PiHandWavingLight size={25} color="#999" />;
		case 'comment':
			return <IoChatbubbleOutline size={20} color="#999" />;
	}
};

export default function UserCountIcon({ type, count }: UserCountIconProps) {
	return (
		<div css={iconWrapCss}>
			<span>{renderIcon(type)}</span>
			<span css={countCss}>{count}</span>
		</div>
	);
}

const iconWrapCss = css`
	display: flex;
	align-items: center;
	gap: 4px;
`;

const countCss = css`
	font-size: 14px;
	font-weight: 500;
	color: #999;
`;
