import { locales } from '../translations/locales.json';

export function getLocalePaths() {
	const params = locales.map((l) => {
		return {
			params: {
				locale: l.code,
			},
		};
	});
	
	return params;
}

export async function getAlternateLocales(locale: string) {
	return locales.filter((l) => l.code != locale)
}
