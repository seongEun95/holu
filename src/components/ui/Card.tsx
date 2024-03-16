/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import Label, { LabelType } from './Label';
import { CardData } from '../../types/Card.type';
import { PiHandWavingThin } from 'react-icons/pi';
import { LangIcon } from './LangIcon';
import Avatar from './Avatar';
import UserCountIcon from './UserCountIcon';
import dayjs from 'dayjs';

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
}: CardData) {
	const today = dayjs();
	const diffDays = today.diff(uploadDate, 'days');
	const deadlineSoon = deadline.diff(today, 'days') + 1;

	return (
		<div css={cardWrapCss}>
			<div>
				<div css={labelWrapCss}>
					<Label type={category as LabelType} />
					{diffDays <= 2 && <Label type="NEW_ARTICLE" />}
					{deadlineSoon === 1 || (deadlineSoon <= 4 && deadlineSoon > 1) ? (
						<Label type="DEADLINE_DATE" date={deadlineSoon} />
					) : deadlineSoon <= 6 && deadlineSoon > 4 ? (
						<Label type="DEADLINE_SOON" />
					) : null}
					{viewCount >= 100 && <Label type="POPULAR_ARTICLE" />}
				</div>
				<div css={bookMarkIconCss}>
					<PiHandWavingThin size={40} />
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
