import { Dayjs } from 'dayjs';
import { PositionType } from '../components/ui/Label';
import { LangIconType } from '../components/ui/LangIcon';

export type CardData = {
	category: string;
	uploadDate: Dayjs;
	deadline: Dayjs;
	projectTitle: string;
	position: PositionType[];
	skillStack: LangIconType[];
	userIconSrc?: string;
	userId: string;
	viewCount: number;
	commentCount: number;
};

export type CardDataList = CardData[];
