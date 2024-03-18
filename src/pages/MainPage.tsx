/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import Category from '../components/ui/Category';
import { useState } from 'react';
import CardData from '../data/cardData';
import Card from '../components/ui/Card';

export default function MainPage() {
	const [cardData, setCardData] = useState(CardData);
	const [categoryFilter, setCategoryFilter] = useState({
		all: '',
		project: '',
		study: '',
	});

	const handleClickCategoryFilter = (filter: string) => {
		setCardData(cardData.filter(item => item.category === filter));
	};

	return (
		<div css={mainWrapCss}>
			<div css={categoryWrapCss}>
				<Category label="전체" name="all" value={categoryFilter.all} onClick={() => handleClickCategoryFilter('ALL')} />
				<Category
					label="프로젝트"
					name="project"
					value={categoryFilter.project}
					onClick={() => handleClickCategoryFilter('PROJECT')}
				/>
				<Category
					label="스터디"
					name="study"
					value={categoryFilter.study}
					onClick={() => handleClickCategoryFilter('STUDY')}
				/>
			</div>
			<div css={cardWrapCss}>
				{cardData.map(item => (
					<Card
						category={item.category}
						uploadDate={item.uploadDate}
						deadline={item.deadline}
						projectTitle={item.projectTitle}
						position={item.position}
						skillStack={item.skillStack}
						userId={item.userId}
						viewCount={item.viewCount}
						commentCount={item.commentCount}
						key={item.userId}
					/>
				))}
			</div>
		</div>
	);
}

const mainWrapCss = css`
	width: 100%;
	max-width: 1320px;
	margin: 60px auto;
	padding: 0 20px;
`;

const categoryWrapCss = css`
	display: flex;
	gap: 20px;
`;

const cardWrapCss = css`
	display: grid;
	grid-template-columns: repeat(4, 300px);
	justify-content: space-between;
	gap: 27px;
`;
