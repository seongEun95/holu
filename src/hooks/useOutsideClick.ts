import { useEffect, RefObject } from 'react';

export default function useOutsideClick(ref: RefObject<HTMLElement>, onOutsideClick: Function) {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				onOutsideClick();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref, onOutsideClick]);
}
