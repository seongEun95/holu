/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type TextEditorProps = {
	name: string;
	value?: string;
	onChange: React.ChangeEventHandler;
};

export default function TextEditor({ name, value, onChange }: TextEditorProps) {
	const handleChangeValue = (value: ReactQuill.Value) => {
		onChange({ target: { name, value } } as any);
	};

	const modules = {
		toolbar: [
			[{ font: [] }],
			[{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
			[{ header: [1, 2, 3, 4, 5, 6, false] }],
			[{ color: [] }, { background: [] }], // dropdown with defaults from theme
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
			['link', 'image'],
			['clean'],
		],
	};

	return (
		<ReactQuill
			id={name}
			value={value}
			modules={modules}
			css={textEditorCss}
			theme="snow"
			placeholder="프로젝트에 대해 소개해주세요!"
			onChange={handleChangeValue}
		/>
	);
}

const textEditorCss = css`
	.ql-editor {
		min-height: 480px;
	}
`;
