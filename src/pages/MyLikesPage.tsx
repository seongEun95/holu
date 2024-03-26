/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Bookmark } from '../redux/slice/bookmarkSlice';
import Card from '../components/ui/Card';
import mq from '../styles/mediaQuery';

export default function MyLikesPage() {
	const bookmarkItems = useSelector((state: RootState) => state.bookmark.items);

	return (
		<div css={bookmarkWrapCss}>
			{bookmarkItems.length === 0
				? '북마크 없음'
				: bookmarkItems.map((item: Bookmark) => <Card key={item.id} {...item} />)}
		</div>
	);
}

const bookmarkWrapCss = css`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
	width: 100%;
	max-width: 1320px;
	margin: 60px auto;
	padding: 0 20px;

	${mq.desktop} {
		grid-template-columns: repeat(3, 300px);
		justify-content: center;
	}

	${mq.notebook} {
		grid-template-columns: repeat(2, 300px);
	}

	${mq.tablet} {
		grid-template-columns: repeat(1, 1fr);
	}
`;
