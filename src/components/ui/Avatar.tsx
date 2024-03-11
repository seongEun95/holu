/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import moment from 'moment';

export type AvatarType = 'iconOnly' | 'iconWithName' | 'iconWithNameAndDate' | 'iconWithNameAndDateTwoLines';
export type AvatarSize = 'small' | 'medium' | 'large';

type AvatarProps = {
	type: AvatarType;
	name?: string;
	size: AvatarSize;
	src?: string;
	alt?: string;
	date?: Date;
};

export default function Avatar({
	type,
	name,
	size,
	src = 'https://hola-post-image.s3.ap-northeast-2.amazonaws.com/default.PNG',
	alt,
	date,
}: AvatarProps) {
	return (
		<div>
			<div css={avatarWrapCss}>
				<img css={[iconCss, getCssIconSize(size)]} src={src} alt={alt} />
				<div>
					<span css={getCssNameType(type)}>{name}</span>
					{type === 'iconWithNameAndDate' && <span css={dateCss}>{moment(date).format('YYYY.MM.DD')}</span>}
					{type === 'iconWithNameAndDateTwoLines' && (
						<span css={dateTimeCss}>{moment(date).format('YYYY-MM-DD HH:mm:ss')}</span>
					)}
				</div>
			</div>
		</div>
	);
}

const avatarWrapCss = css`
	display: flex;
	align-items: center;
	gap: 8px;
`;

const iconCss = css`
	border-radius: 100%;
`;

const getCssIconSize = (size: AvatarSize) => {
	switch (size) {
		case 'small':
			return smallIconCss;
		case 'medium':
			return mediumIconCss;
		case 'large':
			return largeIconCss;
	}
};

const smallIconCss = css`
	width: 32px;
`;

const mediumIconCss = css`
	width: 44px;
`;

const largeIconCss = css`
	width: 52px;
`;

const getCssNameType = (type: AvatarType) => {
	switch (type) {
		case 'iconOnly':
			return iconOnlyCss;
		case 'iconWithName':
			return iconWithNameCss;
		case 'iconWithNameAndDate':
			return iconWithNameAndDateCss;
		case 'iconWithNameAndDateTwoLines':
			return iconWithNameAndDateTwoLinesCss;
	}
};

const iconOnlyCss = css`
	display: none;
`;

const iconWithNameCss = css`
	font-size: 14px;
	font-weight: 500;
`;

const iconWithNameAndDateCss = css`
	font-size: 18px;
	font-weight: 700;
`;

const iconWithNameAndDateTwoLinesCss = css`
	display: block;
	font-size: 16px;
	font-weight: 700;
`;

const dateCss = css`
	position: relative;
	display: inline-block;
	margin-left: 15px;
	padding-left: 15px;
	font-size: 18px;
	color: var(--gray-basic);

	&::before {
		content: '';
		position: absolute;
		left: 0;
		display: block;
		width: 2px;
		height: 20px;
		background-color: var(--gray-lighter);
	}
`;

const dateTimeCss = css`
	display: inline-block;
	font-size: 14px;
	color: var(--gray-light);
	margin-top: 6px;
`;
