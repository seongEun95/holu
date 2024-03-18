import dayjs, { Dayjs } from 'dayjs';
import { PositionType, SelectedTab, progressMethodType } from '../pages/MainPage';
import { LanguageType } from '../components/ui/LangIcon';
import { CategoryType } from '../components/ui/Card';

type CardProps = {
	category: CategoryType;
	uploadDate: Dayjs;
	deadline: Dayjs;
	projectTitle: string;
	position: PositionType[];
	skillStack: LanguageType[];
	userId: string;
	viewCount: number;
	commentCount: number;
	progressMethod: progressMethodType[];
};

const CardData: CardProps[] = [
	{
		category: 'PROJECT',
		uploadDate: dayjs('2024-03-01'),
		deadline: dayjs('2024-03-12'),
		projectTitle: '포트폴리오용 자취생 커뮤니티 프론트 구함',
		position: ['FRONTEND', 'BACKEND'],
		skillStack: ['REACT', 'C'],
		userId: '우멍루',
		viewCount: 16,
		commentCount: 4,
		progressMethod: ['ALL'],
	},
	{
		category: 'STUDY',
		uploadDate: dayjs('2024-03-12'),
		deadline: dayjs('2024-03-31'),
		projectTitle: '목표 응원 SNS-partOut에서 괴짜 동료를 찾고 있어요!',
		position: ['ALL', 'DESIGN'],
		skillStack: ['DOCKER', 'JAVA'],
		userId: '파트아웃',
		viewCount: 24,
		commentCount: 2,
		progressMethod: ['OFFLINE'],
	},
	{
		category: 'PROJECT',
		uploadDate: dayjs('2024-03-02'),
		deadline: dayjs('2024-03-17'),
		projectTitle: '리액트 네이티브 개발자, 백엔드 개발자, 기획자, 디자이너 모집',
		position: ['BACKEND', 'FRONTEND', 'PM'],
		skillStack: ['NEXTJS', 'EXPRESS'],
		userId: 'supporty',
		viewCount: 11,
		commentCount: 1,
		progressMethod: ['ONLINE'],
	},
	{
		category: 'STUDY',
		uploadDate: dayjs('2024-03-05'),
		deadline: dayjs('2024-03-14'),
		projectTitle:
			'중고사이트 구글 검색 순위 1위! 안드로이드, iOS 앱 출시. MAU 10만. 중고통합플랫폼 꿀모에서 프론트앤드, 풀스택 개발자 멤버를 모집합니다.',
		position: ['BACKEND', 'FRONTEND'],
		skillStack: ['GIT', 'REACT', 'DJANGO'],
		userId: '붉은치약',
		viewCount: 124,
		commentCount: 5,
		progressMethod: ['OFFLINE'],
	},
	{
		category: 'PROJECT',
		uploadDate: dayjs('2024-03-01'),
		deadline: dayjs('2024-03-21'),
		projectTitle: '백엔드 마지막 한 분 모집! 수익이 발생하는 사이드 프로젝트(9/10)',
		position: ['BACKEND'],
		skillStack: ['MYSQL', 'KUBERNETES', 'FIREBASE'],
		userId: '해피푸들',
		viewCount: 24,
		commentCount: 3,
		progressMethod: ['OFFLINE'],
	},
	{
		category: 'STUDY',
		uploadDate: dayjs('2024-03-01'),
		deadline: dayjs('2024-03-21'),
		projectTitle: '[사이드 프로젝트] 프론트엔드 개발자분을 모십니다!',
		position: ['PM', 'DESIGN'],
		skillStack: ['NEXTJS', 'JAVA', 'DOCKER'],
		userId: 'bootlebook',
		viewCount: 24,
		commentCount: 3,
		progressMethod: ['ALL'],
	},
];

export default CardData;
