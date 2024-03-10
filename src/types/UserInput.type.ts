import { Dayjs } from 'dayjs';

export type UserInput = {
	category: string;
	personCount: string;
	progressMethod: string;
	progressPeriod: string;
	skillStack: string[];
	deadline: Dayjs;
	position: string[];
	contactMethod: string;
	contactDetail: string;
	projectTitle: string;
	contents: string;
};

export type UserInputList = UserInput[];
