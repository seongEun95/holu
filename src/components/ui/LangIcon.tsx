/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

export type LanguageType =
	| 'JAVASCRIPT'
	| 'TYPESCRIPT'
	| 'REACT'
	| 'NEXTJS'
	| 'FLUTTER'
	| 'FIGMA'
	| 'C'
	| 'PYTHON'
	| 'EXPRESS'
	| 'NESTJS'
	| 'VUE'
	| 'NODEJS'
	| 'SPRING'
	| 'JAVA'
	| 'EXPRESS'
	| 'GO'
	| 'DJANGO'
	| 'SWIFT'
	| 'KOTLIN'
	| 'MYSQL'
	| 'MONGODB'
	| 'PHP'
	| 'GRAPHQL'
	| 'FIREBASE'
	| 'REACTNATIVE'
	| 'UNITY'
	| 'AWS'
	| 'KUBERNETES'
	| 'DOCKER'
	| 'GIT'
	| 'ZEPLIN';

export type LangIconSize = 'small' | 'medium' | 'large';

type IconCssProps = {
	[key in LangIconSize]: ReturnType<typeof css>;
};

type LangIconProps = {
	type: LanguageType;
	size: LangIconSize;
};

export function LangIcon({ type, size }: LangIconProps) {
	return <img css={iconCss[size]} src={`/img/icon/${type}.svg`} alt={type} />;
}

const iconCss: IconCssProps = {
	small: css`
		width: 32px;
		height: 32px;
	`,

	medium: css`
		width: 36px;
		height: 36px;
	`,

	large: css`
		width: 40px;
		height: 40px;
	`,
};
