import { Dayjs } from 'dayjs';

export type CardData = {
	category: string;
	uploadDate: Date;
	deadline: Dayjs;
	projectTitle: string;
	position: string[];
	skillStack: string[];
	userIconSrc: string;
	userId: string;
	viewCount: number;
	commentCount: number;
};

export type CardDataList = CardData[];
