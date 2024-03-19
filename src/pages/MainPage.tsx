/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import Category from '../components/ui/Category';
import { useState } from 'react';
import CardData from '../data/cardData';
import Card from '../components/ui/Card';
import DropdownMenu from '../components/ui/DropdownMenu';
import { OPTIONS_METHOD, OPTIONS_POSITION, OPTIONS_SKILLSTACK } from '../data/mainDropdownData';
import SearchInput from '../components/ui/SearchInput';
import { LanguageType } from '../components/ui/LangIcon';

export type SelectedTab = 'ALL' | 'PROJECT' | 'STUDY';
export type PositionType = 'ALL' | 'FRONTEND' | 'BACKEND' | 'DESIGN' | 'PM';
export type progressMethodType = 'ALL' | 'ONLINE' | 'OFFLINE';

type CategoryFilterType = {
	skillStack: LanguageType | '';
	position: PositionType | '';
	progressMethod: progressMethodType | '';
};

export default function MainPage() {
	const cardDataVariable = CardData;
	const [cardData, setCardData] = useState(cardDataVariable);
	const [selectedTab, setSelectedTab] = useState<SelectedTab>('ALL');
	const [categoryFilter, setCategoryFilter] = useState<CategoryFilterType>({
		skillStack: '',
		position: '',
		progressMethod: '',
	});
	const [input, setInput] = useState('');

	const handleChangeInput = (e: any) => {
		setInput(e.target.value);
	};

	const handleDeleteInput = () => {
		setInput('');
	};

	const handleClickCategoryFilter = (filter: SelectedTab) => {
		if (filter === 'ALL') {
			setSelectedTab('ALL');
			setCategoryFilter({
				skillStack: '',
				position: '',
				progressMethod: '',
			});
		} else {
			setSelectedTab(filter);
		}
	};

	const handleClickGetOption = (e: any) => {
		const { name, value } = e.target;
		setCategoryFilter(prev => ({ ...prev, [name]: value }));
	};

	return (
		<div css={mainWrapCss}>
			<div css={categoryWrapCss}>
				<Category label="전체" name="ALL" selectedTab={selectedTab} onClick={() => handleClickCategoryFilter('ALL')} />
				<Category
					label="프로젝트"
					name="PROJECT"
					selectedTab={selectedTab}
					onClick={() => handleClickCategoryFilter('PROJECT')}
				/>
				<Category
					label="스터디"
					name="STUDY"
					selectedTab={selectedTab}
					onClick={() => handleClickCategoryFilter('STUDY')}
				/>
			</div>
			<div css={dropdownSearchWrapCss}>
				<div css={dropdownWrapCss}>
					<DropdownMenu
						name="skillStack"
						options={OPTIONS_SKILLSTACK}
						placeholder="기술 스택"
						value={categoryFilter.skillStack}
						selectedMenu={categoryFilter.skillStack}
						onClick={handleClickGetOption}
					/>

					<DropdownMenu
						name="position"
						options={OPTIONS_POSITION}
						placeholder="포지션"
						value={categoryFilter.position}
						selectedMenu={categoryFilter.position}
						onClick={handleClickGetOption}
					/>

					<DropdownMenu
						name="progressMethod"
						options={OPTIONS_METHOD}
						placeholder="진행 방식"
						value={categoryFilter.progressMethod}
						selectedMenu={categoryFilter.progressMethod}
						onClick={handleClickGetOption}
					/>
				</div>
				<SearchInput
					name="search"
					type="text"
					onChange={handleChangeInput}
					placeholder="제목, 글 내용을 검색해보세요."
					value={input}
					onClick={handleDeleteInput}
				/>
			</div>
			<div css={cardWrapCss}>
				{cardDataVariable
					.filter(item => {
						if (selectedTab !== 'ALL') {
							return item.category === selectedTab;
						}
						return true;
					})
					.filter(item => {
						if (categoryFilter.skillStack) {
							return item.skillStack.includes(categoryFilter.skillStack);
						}
						return true;
					})
					.filter(item => {
						if (categoryFilter.position && categoryFilter.position !== 'ALL') {
							return item.position.includes(categoryFilter.position);
						}
						return true;
					})
					.filter(item => {
						if (categoryFilter.progressMethod && categoryFilter.progressMethod !== 'ALL') {
							return item.progressMethod.includes(categoryFilter.progressMethod);
						}
						return true;
					})
					.map(item => (
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
							progressMethod={item.progressMethod}
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
	margin-bottom: 30px;
`;

const dropdownSearchWrapCss = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 30px;
`;

const dropdownWrapCss = css`
	display: flex;
	gap: 12px;
`;

const cardWrapCss = css`
	display: grid;
	grid-template-columns: repeat(4, 300px);
	justify-content: space-between;
	gap: 27px;
`;
