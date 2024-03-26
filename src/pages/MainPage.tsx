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
import mq from '../styles/mediaQuery';

export type SelectedTab = 'ALL' | 'PROJECT' | 'STUDY';
export type PositionType = 'ALL' | 'FRONTEND' | 'BACKEND' | 'DESIGN' | 'PM';
export type ProgressMethodType = 'ALL' | 'ONLINE' | 'OFFLINE';

type CategoryFilterType = {
	skillStack: LanguageType | '';
	position: PositionType | '';
	progressMethod: ProgressMethodType | '';
};

export default function MainPage() {
	const cardDataVariable = CardData;
	const [selectedTab, setSelectedTab] = useState<SelectedTab>('ALL');
	const [categoryFilter, setCategoryFilter] = useState<CategoryFilterType>({
		skillStack: '',
		position: '',
		progressMethod: '',
	});
	const [searchInput, setSearchInput] = useState('');

	const handleChangeInput = (e: any) => {
		const inputValue = e.target.value;
		setSearchInput(inputValue);
	};

	const handleDeleteInput = () => {
		setSearchInput('');
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
			setCategoryFilter({
				skillStack: '',
				position: '',
				progressMethod: '',
			});
		}
	};

	const handleClickGetOption = (e: any) => {
		const { name, value } = e.target;
		setCategoryFilter(prev => ({ ...prev, [name]: value }));
	};

	return (
		<div css={mainWrapCss}>
			<div css={categoryWrapCss}>
				<Category
					label="전체"
					name="ALL"
					isSelected={selectedTab === 'ALL'}
					onClick={() => handleClickCategoryFilter('ALL')}
				/>
				<Category
					label="프로젝트"
					name="PROJECT"
					isSelected={selectedTab === 'PROJECT'}
					onClick={() => handleClickCategoryFilter('PROJECT')}
				/>
				<Category
					label="스터디"
					name="STUDY"
					isSelected={selectedTab === 'STUDY'}
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
						onClick={handleClickGetOption}
					/>

					<DropdownMenu
						name="position"
						options={OPTIONS_POSITION}
						placeholder="포지션"
						value={categoryFilter.position}
						onClick={handleClickGetOption}
					/>

					<DropdownMenu
						name="progressMethod"
						options={OPTIONS_METHOD}
						placeholder="진행 방식"
						value={categoryFilter.progressMethod}
						onClick={handleClickGetOption}
					/>
				</div>
				<div css={searchInputWrap}>
					<SearchInput
						name="search"
						type="search"
						onChange={handleChangeInput}
						placeholder="제목, 글 내용을 검색해보세요."
						value={searchInput}
						onClick={handleDeleteInput}
					/>
				</div>
			</div>
			<div css={cardWrapCss}>
				{cardDataVariable
					.filter(item => {
						let isCategoryPassed = true;
						let isSkillPassed = true;
						let isPositionPassed = true;
						let isProgressMethodPassed = true;
						let isSearch = true;

						if (selectedTab !== 'ALL') isCategoryPassed = item.category === selectedTab;

						if (categoryFilter.skillStack) isSkillPassed = item.skillStack.includes(categoryFilter.skillStack);

						if (categoryFilter.position && categoryFilter.position !== 'ALL')
							isPositionPassed = item.position.includes(categoryFilter.position);

						if (categoryFilter.progressMethod && categoryFilter.progressMethod !== 'ALL')
							isProgressMethodPassed = item.progressMethod.includes(categoryFilter.progressMethod);

						if (searchInput !== '') isSearch = item.projectTitle.toLowerCase().includes(searchInput.toLowerCase());

						return isCategoryPassed && isSkillPassed && isPositionPassed && isProgressMethodPassed && isSearch;
					})
					.map(item => (
						<Card
							id={item.id}
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

	${mq.desktop} {
		max-width: 992px;
		padding: 0 10px;
	}
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

	${mq.mobile} {
		gap: 7px;
	}
`;

const searchInputWrap = css`
	${mq.tablet} {
		display: none;
	}
`;

const cardWrapCss = css`
	display: grid;
	grid-template-columns: repeat(4, 300px);
	justify-content: space-between;
	gap: 27px;

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
