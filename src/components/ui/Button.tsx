/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

export type ButtonKind = 'submit' | 'cancel' | 'comment' | 'normal';
export type ButtonSize = 'small' | 'medium' | 'large';

type ButtonProps = {
	kind: ButtonKind;
	children: React.ReactNode;
	size: ButtonSize;
	disabled?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

type ButtonKindCssProps = {
	[key in ButtonKind]: ReturnType<typeof css>;
};

type ButtonSizeCssProps = {
	[key in ButtonSize]: ReturnType<typeof css>;
};

export default function Button({ kind, children, size = 'medium', disabled, onClick }: ButtonProps) {
	return (
		<button css={[commonButtonCss, buttonKindCss[kind], buttonSizeCss[size]]} disabled={disabled} onClick={onClick}>
			{children}
		</button>
	);
}

const commonButtonCss = css`
	cursor: pointer;
`;

const buttonKindCss: ButtonKindCssProps = {
	submit: css`
		font-weight: 700;
		background-color: #262626;
		color: #fff;
		border-radius: 5px;
	`,
	cancel: css`
		color: #495057;
		background-color: #e9ecef;
		border-radius: 5px;
	`,
	comment: css`
		font-weight: 700;
		background-color: #333;
		color: #fff;
		border-radius: 18px;
	`,
	normal: css`
		color: #495057;
	`,
};

const buttonSizeCss: ButtonSizeCssProps = {
	large: css`
		font-size: 18px;
		padding: 8px 22px;
	`,
	medium: css`
		font-size: 16px;
		padding: 6px 20px;
	`,
	small: css`
		font-size: 14px;
		padding: 4px 18px;
	`,
};
