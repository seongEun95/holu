/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Link } from 'react-router-dom';
import Avatar from './ui/Avatar';
import { CiBellOn } from 'react-icons/ci';
import Dropdown from './ui/Dropdown';
import { useRef, useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import mq from '../styles/mediaQuery';
import useOutsideClick from '../hooks/useOutsideClick';

export default function Header() {
	const [isShow, setIsShow] = useState(false);

	const handleClickChangeIsShow = () => {
		setIsShow(prev => !prev);
	};

	const liRef = useRef<HTMLLIElement>(null);
	useOutsideClick(liRef, () => setIsShow(() => false));

	return (
		<header css={headerCss}>
			<div>
				<Link to={'/'}>
					<img css={logoCss} src="/img/hola_logo_y.png" alt="img" />
				</Link>
			</div>

			<div>
				<ul css={menuCss}>
					<li>
						<Link css={newPostTextCss} to={'/register'}>
							새 글쓰기
						</Link>
					</li>
					<li>
						<button css={bellIconCss}>
							<CiBellOn size={30} />
						</button>
					</li>
					<li css={testCss} ref={liRef}>
						<button css={avatarBtnCss} onClick={handleClickChangeIsShow}>
							<Avatar
								type="iconOnly"
								size="medium"
								src="https://hola-post-image.s3.ap-northeast-2.amazonaws.com/default.PNG"
								alt="profile"
							/>
							<IoMdArrowDropdown css={downIconCss} />
						</button>
						<Dropdown isShow={isShow} onClick={handleClickChangeIsShow} />
					</li>
				</ul>
			</div>
		</header>
	);
}

const headerCss = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 1280px;
	height: 85px;
	margin: 0 auto;
	padding: 0 20px;
`;

const logoCss = css`
	width: 105px;
`;

const menuCss = css`
	display: flex;
	align-items: center;
	gap: 30px;

	${mq.mobile} {
		gap: 10px;
	}
`;

const newPostTextCss = css`
	font-size: 18px;
	font-weight: 600;
`;

const bellIconCss = css`
	padding: 0px;
	cursor: pointer;
`;

const testCss = css`
	position: relative;
`;

const avatarBtnCss = css`
	display: flex;
	align-items: center;
	padding: 0px;
	cursor: pointer;
`;

const downIconCss = css`
	margin-left: -7px;
`;
