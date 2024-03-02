/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import Button from '../components/ui/Button';

export default function TestPage() {
	return (
		<div css={testCss}>
			<Button kind="submit" size="medium">
				확인
			</Button>

			<Button kind="comment" size="large">
				댓글 달기
			</Button>

			<Button kind="comment" size="medium">
				댓글 달기
			</Button>

			<Button kind="comment" size="small">
				댓글 달기
			</Button>

			<Button kind="cancel" size="medium">
				취소
			</Button>

			<Button kind="normal" size="medium">
				확인
			</Button>
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
