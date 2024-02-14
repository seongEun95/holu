/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import Avatar from '../components/ui/Avatar';

export default function TestPage() {
	return (
		<div css={testCss}>
			<div>
				<div css={testTitleCss}>iconOnly | medium</div>
				<Avatar
					src="https://hola-post-image.s3.ap-northeast-2.amazonaws.com/default.PNG"
					alt="icon"
					name="AvatarName"
					size="medium"
					type="iconOnly"
				/>
			</div>

			<div>
				<div css={testTitleCss}>iconWithName | small</div>
				<Avatar
					src="https://hola-post-image.s3.ap-northeast-2.amazonaws.com/default.PNG"
					alt="icon"
					name="AvatarName"
					size="small"
					type="iconWithName"
				/>
			</div>

			<div>
				<div css={testTitleCss}>iconWithNameAndDate | large</div>
				<Avatar
					src="https://hola-post-image.s3.ap-northeast-2.amazonaws.com/default.PNG"
					alt="icon"
					name="AvatarName"
					size="large"
					type="iconWithNameAndDate"
					date={new Date()}
				/>
			</div>

			<div>
				<div css={testTitleCss}>iconWithNameAndDateTwoLines | large</div>
				<Avatar
					src="https://hola-post-image.s3.ap-northeast-2.amazonaws.com/default.PNG"
					alt="icon"
					name="AvatarName"
					size="large"
					type="iconWithNameAndDateTwoLines"
					date={new Date()}
				/>
			</div>
		</div>
	);
}

const testCss = css`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 30px;
	width: 100%;
	height: 100vh;
	background: #ededed;
`;

const testTitleCss = css`
	font-size: 16px;
	color: #183e2a;
	margin-bottom: 20px;
`;
