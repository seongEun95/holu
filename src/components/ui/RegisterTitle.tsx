/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

type RegisterTitleProps = {
	number: number;
	text: string;
};

export default function RegisterTitle({ number, text }: RegisterTitleProps) {
	return (
		<h2 css={registerTitleCss}>
			<span css={numCss}>{number}</span>
			{text}
		</h2>
	);
}

const registerTitleCss = css`
	font-size: 24px;
	font-weight: 700;
	margin-bottom: 40px;
	padding: 20px;
	border-bottom: 3px solid #f1f1f1;
`;

const numCss = css`
	display: inline-block;
	width: 28px;
	height: 28px;
	line-height: 32px;
	margin-right: 10px;
	text-align: center;
	border-radius: 100%;
	background: #ffcd00;
	color: #fff;
`;
