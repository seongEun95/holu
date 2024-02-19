/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

export type LabelType =
	| 'PROJECT'
	| 'STUDY'
	| 'NEW_ARTICLE'
	| 'POPULAR_ARTICLE'
	| 'LANGUAGE'
	| 'DEADLINE_SOON'
	| 'DEADLINE_DATE';

export type LangType =
	| '전체'
	| '프론트엔드'
	| '벡엔드'
	| '안드로이드'
	| '디자이너'
	| '기획자'
	| 'IOS'
	| '데브옵스'
	| 'PM';

type LabelProps = {
	type: LabelType;
	lang?: LangType;
	date?: number;
};

interface LabelCssProps {
	[key: string]: ReturnType<typeof css>;
}

export default function Label({ type, lang, date }: LabelProps) {
	switch (type) {
		case 'PROJECT':
			return <div css={[labelCommonCss, labelCss[type]]}>🗂 프로젝트</div>;
		case 'STUDY':
			return <div css={[labelCommonCss, labelCss[type]]}>✏️ 스터디</div>;
		case 'NEW_ARTICLE':
			return <div css={[labelCommonCss, labelCss[type]]}>🍞 따끈따끈 새 글</div>;
		case 'POPULAR_ARTICLE':
			return <div css={[labelCommonCss, labelCss[type]]}>💙 인기</div>;
		case 'LANGUAGE':
			return <div css={[labelCommonCss, labelCss[type]]}>{lang}</div>;
		case 'DEADLINE_SOON':
			return <div css={[labelCommonCss, labelCss[type]]}>🔥 마감코앞</div>;
		case 'DEADLINE_DATE':
			return (
				<div css={[labelCommonCss, labelCss[type]]}>
					{date === 1 ? <span>🚨 오늘 마감</span> : date ? <span>🚨 마감 {date}일전</span> : null}
				</div>
			);
	}
}

const labelCommonCss = css`
	display: inline-block;
	font-size: 12px;
	border-radius: 20px;
	font-weight: 700;
	padding: 6px 12px 4px;
`;

const labelCss: LabelCssProps = {
	PROJECT: css`
		color: #656565;
		background: #efefef;
	`,

	STUDY: css`
		color: #656565;
		background: #efefef;
	`,

	DEADLINE_DATE: css`
		color: #ea762f;
		border: 1px solid #ea762f;
	`,

	NEW_ARTICLE: css`
		color: #fdb900;
		background: #fff9d5;
	`,

	POPULAR_ARTICLE: css`
		color: #74a0e2;
		background: #f1f7ff;
	`,

	LANGUAGE: css`
		color: #3e86f5;
		background: #f2f4f8;
	`,

	DEADLINE_SOON: css`
		color: #ea726f;
		background: #ffe8e8;
	`,
};
