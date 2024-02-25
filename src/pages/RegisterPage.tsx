/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import SelectBox from '../components/ui/SelectBox';
import { useState } from 'react';
import { SelectItems, peopleNumbers, period, position, process, skill } from '../data/registerData';

export default function RegisterPage() {
	const [selectedValue, setSelectedValue] = useState('');

	const handleClickItem = (value: any) => {
		setSelectedValue(value);
	};

	return (
		<div css={registerPageWrapCss}>
			<h2 css={registerTitleCss}>
				<span css={numCss}>1</span>프로젝트 기본 정보를 입력해주세요.
			</h2>

			<div css={selectBoxOuterCss}>
				<div css={selectBoxWrapCss}>
					<div css={selectBoxCss}>
						<SelectBox
							label="모집 구분"
							type="singleSelection"
							selectItems={SelectItems}
							onClick={handleClickItem}
							selectedValue={selectedValue}
							defaultText="스터디/프로젝트"
						/>
					</div>
					<div css={selectBoxCss}>
						<SelectBox
							label="모집 인원"
							type="singleSelection"
							selectItems={peopleNumbers}
							onClick={handleClickItem}
							selectedValue={selectedValue}
							defaultText="인원 미정~10명 이상"
						/>
					</div>
				</div>
				<div css={selectBoxWrapCss}>
					<div css={selectBoxCss}>
						<SelectBox
							label="진행 방식"
							type="singleSelection"
							selectItems={process}
							onClick={handleClickItem}
							selectedValue={selectedValue}
							defaultText="온라인/오프라인"
						/>
					</div>
					<div css={selectBoxCss}>
						<SelectBox
							label="진행 기간"
							type="singleSelection"
							selectItems={period}
							onClick={handleClickItem}
							selectedValue={selectedValue}
							defaultText="기간 미정~6개월 이상"
						/>
					</div>
				</div>
				<div css={selectBoxWrapCss}>
					<div css={selectBoxCss}>
						<SelectBox type="multipleSelection" label="기술 스택" selectItems={skill} />
					</div>
					<div css={selectBoxCss}>
						<SelectBox type="DateSelection" label="모집 마감일" />
					</div>
				</div>
				<div css={selectBoxWrapCss}>
					<div css={selectBoxCss}>
						<SelectBox type="multipleSelection" label="모집 포지션" selectItems={position} />
					</div>
					<div css={selectBoxCss}>
						<SelectBox
							label="연락 방법"
							type="singleSelection"
							selectItems={SelectItems}
							onClick={handleClickItem}
							selectedValue={selectedValue}
							defaultText="연락 방법"
							contact={true}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

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
