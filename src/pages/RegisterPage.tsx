/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import SelectBox from '../components/ui/SelectBox';
import { useState } from 'react';
import { CONTACT, OPTIONS_CATEGORY, peopleNumbers, period, position, process, skill } from '../data/registerData';
import TextInput from '../components/ui/TextInput';
import dayjs, { Dayjs } from 'dayjs';
import DatePicker from '../components/ui/DatePicker';
import MultiSelectBox from '../components/ui/MultiSelectBox';

type UserInput = {
	category: string;
	number: string;
	process: string;
	period: string;
	skill: string[];
	deadline: Dayjs;
	position: string[];
	contact: string;
	contactDetail: string;
};

export default function RegisterPage() {
	const [userInput, setUserInput] = useState<UserInput>({
		category: '',
		number: '',
		process: '',
		period: '',
		skill: [],
		deadline: dayjs(),
		position: [],
		contact: '',
		contactDetail: '',
	});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		// console.log(name, value);
		setUserInput(prev => ({ ...prev, [name]: value }));
	};

	const handleClcikAPI = () => {
		console.log(userInput);

		// 유효성검사

		// api 연결
	};

	return (
		<div css={registerPageWrapCss}>
			<h2 css={registerTitleCss}>
				<span css={numCss}>1</span>프로젝트 기본 정보를 입력해주세요.
			</h2>
			<button css={buttonCss} onClick={handleClcikAPI}>
				API
			</button>
			<div css={selectBoxOuterCss}>
				<div css={selectBoxWrapCss}>
					<div css={selectBoxCss}>
						<SelectBox
							label="모집 구분"
							name="category"
							value={userInput.category}
							options={OPTIONS_CATEGORY}
							onClick={handleChange}
							placehoder="스터디/프로젝트"
						/>
					</div>
					<div css={selectBoxCss}>
						<SelectBox
							name="number"
							value={userInput.number}
							label="모집 인원"
							options={peopleNumbers}
							onClick={handleChange}
							placehoder="인원 미정~10명 이상"
						/>
					</div>
				</div>
				<div css={selectBoxWrapCss}>
					<div css={selectBoxCss}>
						<SelectBox
							name="process"
							value={userInput.process}
							label="진행 방식"
							options={process}
							onClick={handleChange}
							placehoder="온라인/오프라인"
						/>
					</div>
					<div css={selectBoxCss}>
						<SelectBox
							label="진행 기간"
							name="period"
							value={userInput.period}
							options={period}
							onClick={handleChange}
							placehoder="기간 미정~6개월 이상"
						/>
					</div>
				</div>
				<div css={selectBoxWrapCss}>
					<div css={selectBoxCss}>
						<MultiSelectBox
							name="skill"
							value={userInput.skill}
							options={skill}
							placeholder="프로젝트 사용 스택"
							onChange={handleChange}
						/>
					</div>
					<div css={selectBoxCss}>
						<DatePicker name="deadline" value={userInput.deadline} onChange={handleChange} />
					</div>
				</div>
				<div css={selectBoxWrapCss}>
					<div css={selectBoxCss}>
						<MultiSelectBox
							name="position"
							value={userInput.position}
							options={position}
							placeholder=""
							onChange={handleChange}
						/>
					</div>
					<div css={selectBoxCss}>
						<SelectBox
							name="contact"
							value={userInput.contact}
							label="연락 방법"
							options={CONTACT}
							onClick={handleChange}
							placehoder="연락 방법"
						/>
						<TextInput
							name="contactDetail"
							value={userInput.contactDetail}
							onChange={handleChange}
							type="text"
							placeholder={CONTACT_DETAIL_TEXT_MAP[userInput.contact]}
						/>
					</div>
				</div>
				bu
			</div>
		</div>
	);
}

const CONTACT_DETAIL_TEXT_MAP: { [idx: string]: string } = {
	openTalk: '오픈톡 링크를 입력해주세요.',
	email: '이메일 주소를 입력해주세요.',
	googleForm: '구글폼 링크를 입력해주세요.',
};

const buttonCss = css`
	background-color: yellowgreen;
`;

const registerTitleCss = css`
	font-size: 24px;
	font-weight: 700;
	margin-bottom: 40px;
	padding: 20px;
	border-bottom: 3px solid #f1f1f1;
`;

const numCss = css`
	display: inline-block;
	width: 28px;
	height: 28px;
	line-height: 32px;
	margin-right: 10px;
	text-align: center;
	border-radius: 100%;
	background: #ffcd00;
	color: #fff;
`;

const registerPageWrapCss = css`
	width: 100%;
	max-width: 1024px;
	margin: 120px auto 0;
`;

const selectBoxOuterCss = css`
	display: flex;
	flex-direction: column;
	gap: 40px;
`;

const selectBoxWrapCss = css`
	display: flex;
	gap: 12px;
`;

const selectBoxCss = css`
	flex: 1 0 506px;
`;
