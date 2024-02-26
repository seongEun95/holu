/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useParams } from 'react-router-dom';

export default function StudyPage() {
	const param = useParams();
	// console.log(param.id);

	return <div>{`스터디 페이지 : ${param.id}`}</div>;
}
