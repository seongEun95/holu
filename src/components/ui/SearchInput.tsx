/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { RiSearchLine } from 'react-icons/ri';
import { TiDeleteOutline } from 'react-icons/ti';

type SearchInputProps = {
	name: string;
	value?: string;
	placeholder: string;
	type: 'text' | 'search';
	onChange?: React.ChangeEventHandler;
	onClick?: React.MouseEventHandler;
};

export default function SearchInput({ name, value, placeholder, type, onChange, onClick }: SearchInputProps) {
	return (
		<div css={searchWrapCss}>
			<RiSearchLine size={14} />
			<input css={inputCss} name={name} value={value} type={type} placeholder={placeholder} onChange={onChange} />
			<div css={deleteCss} onClick={onClick}>
				<TiDeleteOutline size={20} color="#999" />
			</div>
		</div>
	);
}

const searchWrapCss = css`
	display: flex;
	align-items: center;
	gap: 10px;
	background: #f5f5f5;
	padding: 8px 14px;
	border-radius: 20px;
`;

const inputCss = css`
	width: 220px;
	border: none;
	background: transparent;

	&:focus {
		outline: none;
	}

	&::-webkit-search-cancel-button {
		display: none;
	}
`;

const deleteCss = css`
	cursor: pointer;
`;
