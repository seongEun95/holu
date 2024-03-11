import dayjs from 'dayjs';
import { CardDataList } from '../types/Card.type';

const CardData: CardDataList = [
	{
		category: 'PROJECT',
		uploadDate: dayjs('2024-03-11'),
		deadline: dayjs('2024-03-21'),
		projectTitle: '포트폴리오용 자취생 커뮤니티 프론트 구함',
		position: ['프론트엔드', 'IOS'],
		skillStack: ['aws', 'c'],
		userId: '우멍루',
		viewCount: 16,
		commentCount: 4,
	},
	{
		category: 'STUDY',
		uploadDate: dayjs('2024-03-12'),
		deadline: dayjs('2024-03-31'),
		projectTitle: '목표 응원 SNS-partOut에서 괴짜 동료를 찾고 있어요!',
		position: ['전체', '디자이너'],
		skillStack: ['docker', 'figma'],
		userId: '파트아웃',
		viewCount: 24,
		commentCount: 2,
	},
	{
		category: 'PROJECT',
		uploadDate: dayjs('2024-03-02'),
		deadline: dayjs('2024-03-17'),
		projectTitle: '리액트 네이티브 개발자, 백엔드 개발자, 기획자, 디자이너 모집',
		position: ['기획자', '안드로이드', 'PM'],
		skillStack: ['flutter', 'express'],
		userId: 'supporty',
		viewCount: 11,
		commentCount: 1,
	},
	{
		category: 'STUDY',
		uploadDate: dayjs('2024-03-05'),
		deadline: dayjs('2024-03-14'),
		projectTitle:
			'중고사이트 구글 검색 순위 1위! 안드로이드, iOS 앱 출시. MAU 10만. 중고통합플랫폼 꿀모에서 프론트앤드, 풀스택 개발자 멤버를 모집합니다.',
		position: ['데브옵스', '프론트엔드'],
		skillStack: ['git', 'javascript', 'django'],
		userId: '붉은치약',
		viewCount: 24,
		commentCount: 5,
	},
	{
		category: 'PROJECT',
		uploadDate: dayjs('2024-03-01'),
		deadline: dayjs('2024-03-21'),
		projectTitle: '백엔드 마지막 한 분 모집! 수익이 발생하는 사이드 프로젝트(9/10)',
		position: ['IOS', '벡엔드'],
		skillStack: ['mysql', 'kubernetes', 'firebase'],
		userId: '해피푸들',
		viewCount: 224,
		commentCount: 3,
	},
];

export default CardData;
