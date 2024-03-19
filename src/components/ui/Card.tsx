/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import Label from './Label';
import { PiHandWavingThin } from 'react-icons/pi';
import { LangIcon, LanguageType } from './LangIcon';
import Avatar from './Avatar';
import UserCountIcon from './UserCountIcon';
import dayjs, { Dayjs } from 'dayjs';
import { PositionType } from '../../pages/MainPage';

export type CategoryType = 'PROJECT' | 'STUDY';

type CardProps = {
	category: CategoryType;
	uploadDate: Dayjs;
	deadline: Dayjs;
	projectTitle: string;
	position: PositionType[];
	skillStack: LanguageType[];
	userIconSrc?: string;
	userId: string;
	viewCount: number;
	commentCount: number;
	progressMethod: string[];
};

export default function Card({
	category,
	uploadDate,
	deadline,
	projectTitle,
	position,
	skillStack,
	userId,
	viewCount,
	commentCount,
}: CardProps) {
	const today = dayjs().set('hour', 0).set('minute', 0).set('second', 0).set('millisecond', 0);
	const diffDays = today.diff(uploadDate, 'days');
	const deadlineSoon = deadline.diff(today, 'days') + 1;

	return (
		<div css={cardWrapCss}>
			<div>
				<div css={labelWrapCss}>
					<Label type={category} />
					{diffDays <= 2 && <Label type="NEW_ARTICLE" />}
					{deadlineSoon > 0 && deadlineSoon <= 6 && <Label type="DEADLINE_SOON" />}
					{viewCount >= 100 && <Label type="POPULAR_ARTICLE" />}
				</div>
				<div css={bookMarkIconCss}>
					<img css={bookmarkCss} src="/img/bookmark-1.png" alt="bookmark" />
				</div>
			</div>
			<div css={deadlineCss}>
				<span>마감일 | {deadline.format('YYYY.MM.DD')}</span>
			</div>
			<div css={cardTitleCss}>{projectTitle}</div>
			<div css={positionWrapCss}>
				{position.map(pos => (
					<Label key={pos} type="POSITION" position={pos} />
				))}
			</div>
			<div css={skillIconWrapCss}>
				{skillStack.map(skill => (
					<LangIcon key={skill} type={skill} size={'medium'} />
				))}
			</div>
			<div css={cardBottomWrapCss}>
				<div>
					<Avatar type="iconWithName" size="medium" name={userId} />
				</div>
				<div css={userIconWrapCss}>
					<UserCountIcon type="view" count={viewCount} />
					<UserCountIcon type="comment" count={commentCount} />
				</div>
			</div>
		</div>
	);
}

const cardWrapCss = css`
	position: relative;
	width: 300px;
	padding: 40px 25px 20px;
	border: 2px solid #d1d1d1;
	border-radius: 30px;
`;

const labelWrapCss = css`
	display: flex;
	gap: 4px;
`;

const bookMarkIconCss = css`
	position: absolute;
	top: 32px;
	right: 20px;
	z-index: 10;
	cursor: pointer;
`;

const bookmarkCss = css`
	width: 28px;
`;

const deadlineCss = css`
	font-size: 14px;
	color: #999;
	font-weight: 500;
	margin: 20px 0 14px;
`;

const cardTitleCss = css`
	font-size: 17px;
	font-weight: 500;
	line-height: 1.5;
	min-height: 51px;
	margin-bottom: 16px;
	display: -webkit-box;
	text-overflow: ellipsis;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
`;

const positionWrapCss = css`
	display: flex;
	gap: 4px;
	margin-bottom: 20px;
`;

const skillIconWrapCss = css`
	display: flex;
	gap: 8px;
	margin-bottom: 24px;
`;

const cardBottomWrapCss = css`
	display: flex;
	justify-content: space-between;
	padding-top: 12px;
	border-top: 2px solid #f2f2f2;
`;

const userIconWrapCss = css`
	display: flex;
	gap: 8px;
`;
