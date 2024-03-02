/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

type TextInputProps = {
	name: string;
	value: string;
	placeholder: string;
	type: 'text' | 'password';
	onChange: React.ChangeEventHandler;
};

export default function TextInput({ name, value, placeholder, type, onChange }: TextInputProps) {
	return <input css={inputCss} name={name} value={value} type={type} placeholder={placeholder} onChange={onChange} />;
}

const inputCss = css`
	width: 100%;
	margin-top: 12px;
	padding: 16px 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
`;
