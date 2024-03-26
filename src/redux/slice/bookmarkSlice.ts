import { Dayjs } from 'dayjs';
import { CategoryType } from '../../components/ui/Card';
import { PositionType } from '../../pages/MainPage';
import { LanguageType } from '../../components/ui/LangIcon';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type Bookmark = {
	id: number;
	category: CategoryType;
	uploadDate: Dayjs;
	deadline: Dayjs;
	projectTitle: string;
	position: PositionType[];
	skillStack: LanguageType[];
	userIconSrc?: string;
	userId: string;
	viewCount: number;
	commentCount: number;
	progressMethod: string[];
};

export type BookmarkList = Bookmark[];

type BookmarkState = {
	items: BookmarkList;
};

const initialState: BookmarkState = {
	items: [],
};

const bookmarkSlice = createSlice({
	name: 'bookmark',
	initialState,
	reducers: {
		addItems: (state, action: PayloadAction<Bookmark>) => {
			const isItemExist = state.items.find(item => item.id === action.payload.id);
			if (!isItemExist) {
				state.items.push(action.payload);
			}
		},

		removeItems: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter(item => item.id !== action.payload);
		},
	},
});

export const { addItems, removeItems } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
