/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Link, useNavigate } from 'react-router-dom';

type DropdownProps = {
	isShow: boolean;
	onClick: () => void;
};

export default function Dropdown({ isShow, onClick }: DropdownProps) {
	const navigate = useNavigate();

	const handleClickLogout = () => {
		navigate('/');
		onClick();
	};

	const handleClickMenu = () => {
		onClick();
	};

	return (
		<div>
			{isShow && (
				<ul css={dropdownWrapCss}>
					<li>
						<Link css={listCss} to={'/myPosts'} onClick={handleClickMenu}>
							내 작성글
						</Link>
					</li>
					<li>
						<Link css={listCss} to={'/myLikes'} onClick={handleClickMenu}>
							내 관심글
						</Link>
					</li>
					<li>
						<Link css={listCss} to={'/setting'} onClick={handleClickMenu}>
							설정
						</Link>
					</li>
					<li>
						<button css={listCss} onClick={handleClickLogout}>
							로그아웃
						</button>
					</li>
				</ul>
			)}
		</div>
	);
}

const dropdownWrapCss = css`
	position: absolute;
	top: 120%;
	right: 0;
	width: 190px;
	box-shadow: 0 2px 10px #00000013;
	border: 1px solid #ccc;
	background-color: #fff;
	z-index: 10;
`;

const listCss = css`
	display: inline-block;
	width: 100%;
	font-size: 16px;
	font-weight: 500;
	text-align: left;
	padding: 16px 0 16px 20px;
	cursor: pointer;
`;
