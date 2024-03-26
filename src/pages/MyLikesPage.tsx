/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Bookmark } from '../redux/slice/bookmarkSlice';
import Card from '../components/ui/Card';
import mq from '../styles/mediaQuery';
import { CgTrashEmpty } from 'react-icons/cg';

export default function MyLikesPage() {
	const bookmarkItems = useSelector((state: RootState) => state.bookmark.items);

	return (
		<div css={bookmarkWrapCss(bookmarkItems.length === 0)}>
			{bookmarkItems.length === 0 ? (
				<div css={emptyBookmarkCss}>
					<CgTrashEmpty size={40} />
					<div>내 관심글 없음</div>
				</div>
			) : (
				bookmarkItems.map((item: Bookmark) => <Card key={item.id} {...item} />)
			)}
		</div>
	);
}

const bookmarkWrapCss = (isBookmark: boolean) => css`
	display: ${isBookmark ? 'block' : 'grid'};
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

const emptyBookmarkCss = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	padding: 20px 0;
	border: 1px solid #ccc;
	border-radius: 20px;
`;
