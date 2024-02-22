/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import Avatar from '../components/ui/Avatar';
import Label from '../components/ui/Label';
import { LangIcon } from '../components/ui/LangIcon';

export default function TestPage() {
	return (
		<div css={testCss}>
			<div>
				<div css={testTitleCss}></div>
				<LangIcon type="aws" size="small" />
				<LangIcon type="typescript" size="medium" />
				<LangIcon type="javascript" size="large" />
			</div>

			<div>
				<div css={testTitleCss}></div>
				<LangIcon type="django" size="small" />
				<LangIcon type="django" size="medium" />
				<LangIcon type="c" size="large" />
			</div>

			<div>
				<div css={testTitleCss}></div>
				<LangIcon type="swift" size="small" />
				<LangIcon type="php" size="medium" />
				<LangIcon type="typescript" size="large" />
			</div>

			<div>
				<div css={testTitleCss}></div>
				<LangIcon type="reactnative" size="small" />
				<LangIcon type="mysql" size="medium" />
				<LangIcon type="vue" size="large" />
			</div>

			<div>
				<div css={testTitleCss}></div>
				<LangIcon type="unity" size="small" />
				<LangIcon type="git" size="medium" />
				<LangIcon type="unity" size="large" />
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
