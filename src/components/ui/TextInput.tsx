/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

type TextInputProps = {
	name: string;
	value: string;
	type: 'text' | 'password';
	placeholder?: string;
	onChange?: React.ChangeEventHandler;
};

export default function TextInput({ placeholder, type, name, value, onChange }: TextInputProps) {
	return <input css={inputCss} type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} />;
}

const inputCss = css`
	width: 100%;
	margin-top: 12px;
	padding: 10px;
	border: 1px solid #ccc;
`;
