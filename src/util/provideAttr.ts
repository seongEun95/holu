export const provideAttr = (name: string, value: any, e: any) => {
	e.target.name = name;
	e.target.value = value;
	return e;
};
