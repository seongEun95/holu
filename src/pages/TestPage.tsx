/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import Avatar from '../components/ui/Avatar';
import Label from '../components/ui/Label';

export default function TestPage() {
	return (
		<div css={testCss}>
			<div>
				<div css={testTitleCss}>PROJECT </div>
				<Label type="PROJECT" />
			</div>

			<div>
				<div css={testTitleCss}>STUDY </div>
				<Label type="STUDY" />
			</div>

			<div>
				<div css={testTitleCss}>DEADLINE_DATE</div>
				<Label type="DEADLINE_DATE" date={1} />
				<Label type="DEADLINE_DATE" date={2} />
				<Label type="DEADLINE_DATE" date={12} />
			</div>

			<div>
				<div css={testTitleCss}>NEW_ARTICLE</div>
				<Label type="NEW_ARTICLE" />
			</div>

			<div>
				<div css={testTitleCss}>POPULAR_ARTICLE</div>
				<Label type="POPULAR_ARTICLE" />
			</div>

			<div>
				<div css={testTitleCss}>LANGUAGE</div>
				<Label type="LANGUAGE" lang="프론트엔드" />
				<Label type="LANGUAGE" lang="데브옵스" />
			</div>

			<div>
				<div css={testTitleCss}>DEADLINE_SOON</div>
				<Label type="DEADLINE_SOON" />
			</div>
		</div>
	);
}

const testCss = css`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 30px;
	width: 100%;
	height: 100vh;
`;

const testTitleCss = css`
	font-size: 16px;
	color: #183e2a;
	margin-bottom: 20px;
`;
