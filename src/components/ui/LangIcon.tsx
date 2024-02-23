/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

export type LangIconType =
	| 'javascript'
	| 'typescript'
	| 'react'
	| 'next'
	| 'flutter'
	| 'figma'
	| 'c'
	| 'python'
	| 'express'
	| 'nestjs'
	| 'vue'
	| 'nodejs'
	| 'spring'
	| 'java'
	| 'express'
	| 'go'
	| 'django'
	| 'swift'
	| 'kotlin'
	| 'mysql'
	| 'mongodb'
	| 'php'
	| 'graphql'
	| 'firebase'
	| 'reactnative'
	| 'unity'
	| 'aws'
	| 'kubernetes'
	| 'docker'
	| 'git'
	| 'zeplin';

export type LangIconSize = 'small' | 'medium' | 'large';

type IconCssProps = {
	[key in LangIconSize]: ReturnType<typeof css>;
};

type LangIconProps = {
	type: LangIconType;
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
