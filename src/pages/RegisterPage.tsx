/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import SelectBox from '../components/ui/SelectBox';
import { useState } from 'react';
import {
	OPTIONS_CATEGORY,
	OPTIONS_CONTACT_METHOD,
	OPTIONS_PERSONCOUNT,
	OPTIONS_POSITION,
	OPTIONS_PROGRESS_METHOD,
	OPTIONS_PROGRESS_PERIOD,
	OPTIONS_SKILL_STACK,
} from '../data/registerData';
import dayjs from 'dayjs';
import MultiSelectBox from '../components/ui/MultiSelectBox';
import DatePicker from '../components/ui/DatePicker';
import TextInput from '../components/ui/TextInput';
import RegisterTitle from '../components/ui/RegisterTitle';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import TextEditor from '../components/ui/TextEditor';
import { UserInput } from '../types/UserInput.type';

const CONTACT_DETAIL_TEXT_MAP: { [index: string]: string } = {
	openTalk: '오픈톡 링크를 입력해주세요',
	Email: '이메일 주소를 입력해주세요',
	googleForm: '구글 폼 링크를 입력해주세요',
};

export default function RegisterPage() {
	const navigate = useNavigate();

	const [userInput, setUserInput] = useState<UserInput>({
		category: '',
		personCount: '',
		progressMethod: '',
		progressPeriod: '',
		skillStack: [],
		deadline: dayjs(),
		position: [],
		contactMethod: '',
		contactDetail: '',
		projectTitle: '',
		contents: '',
	});

	const handleClickGetItem = (e: any) => {
		const { name, value } = e.target;
		setUserInput(prev => ({ ...prev, [name]: value }));
	};

	const handleClickSubmitForm = () => {
		console.log(userInput);
	};

	const handleClickCancel = () => {
		navigate(-1);
	};

	return (
		<div css={registerPageWrapCss}>
			<RegisterTitle number={1} text="프로젝트 기본 정보를 입력해주세요." />

			<div css={selectBoxOuterCss}>
				<div css={selectBoxWrapCss}>
					<div css={selectBoxCss}>
						<SelectBox
							name="category"
							value={userInput.category}
							label="모집 구분"
							options={OPTIONS_CATEGORY}
							placeholder="스터디/프로젝트"
							onClick={handleClickGetItem}
						/>
					</div>
					<div css={selectBoxCss}>
						<SelectBox
							name="personCount"
							value={userInput.personCount}
							label="모집 인원"
							options={OPTIONS_PERSONCOUNT}
							placeholder="인원 미정~10명 이상"
							onClick={handleClickGetItem}
						/>
					</div>
				</div>
				<div css={selectBoxWrapCss}>
					<div css={selectBoxCss}>
						<SelectBox
							name="progressMethod"
							value={userInput.progressMethod}
							label="진행 방식"
							options={OPTIONS_PROGRESS_METHOD}
							placeholder="인원 미정~10명 이상"
							onClick={handleClickGetItem}
						/>
					</div>
					<div css={selectBoxCss}>
						<SelectBox
							name="progressPeriod"
							value={userInput.progressPeriod}
							label="진행 기간"
							options={OPTIONS_PROGRESS_PERIOD}
							placeholder="기간 미정~6개월 이상"
							onClick={handleClickGetItem}
						/>
					</div>
				</div>
				<div css={selectBoxWrapCss}>
					<div css={selectBoxCss}>
						<MultiSelectBox
							name="skillStack"
							value={userInput.skillStack}
							onChange={handleClickGetItem}
							label="기술 스택"
							options={OPTIONS_SKILL_STACK}
							placeholder="프로젝트 사용 스택"
						/>
					</div>
					<div css={selectBoxCss}>
						<DatePicker name="deadline" value={userInput.deadline} label="모집 마감일" onChange={handleClickGetItem} />
					</div>
				</div>
				<div css={selectBoxWrapCss}>
					<div css={selectBoxCss}>
						<MultiSelectBox
							name="position"
							value={userInput.position}
							onChange={handleClickGetItem}
							label="모집 포지션"
							options={OPTIONS_POSITION}
							placeholder="프론트엔드, 벡엔드..."
						/>
					</div>
					<div css={selectBoxCss}>
						<SelectBox
							name="contactMethod"
							value={userInput.contactMethod}
							label="연락 방법"
							options={OPTIONS_CONTACT_METHOD}
							placeholder="연락 방법"
							onClick={handleClickGetItem}
						/>
						<TextInput
							name="contactDetail"
							value={userInput.contactDetail}
							placeholder={CONTACT_DETAIL_TEXT_MAP[userInput.contactMethod]}
							type="text"
							onChange={handleClickGetItem}
						/>
					</div>
				</div>
			</div>

			<div>
				<RegisterTitle number={2} text="프로젝트에 대해 소개해주세요." />
				<div css={textInputWrapCss}>
					<TextInput
						name="projectTitle"
						value={userInput.projectTitle}
						placeholder="글 제목을 입력해주세요!"
						type="text"
						onChange={handleClickGetItem}
					/>
				</div>
				<div>
					<TextEditor
						name="contents"
						onChange={handleClickGetItem}
						value={userInput.contents}
						placeholder="프로젝트에 대해 설명해주세요!"
					/>
				</div>
				<div css={btnWrapCss}>
					<Button kind="cancel" size="medium" onClick={handleClickCancel}>
						취소
					</Button>
					<Button kind="submit" size="medium" onClick={handleClickSubmitForm}>
						확인
					</Button>
				</div>
			</div>
		</div>
	);
}

const registerPageWrapCss = css`
	width: 100%;
	max-width: 992px;
	margin: 120px auto 0;
`;

const textInputWrapCss = css`
	margin-bottom: 20px;
`;

const selectBoxOuterCss = css`
	display: flex;
	flex-direction: column;
	gap: 40px;
	margin-bottom: 100px;
`;

const selectBoxWrapCss = css`
	display: flex;
	gap: 12px;
`;

const selectBoxCss = css`
	flex: 1 0 490px;
`;

const btnWrapCss = css`
	display: flex;
	justify-content: flex-end;
	gap: 16px;
	margin: 16px 0 100px;
`;
