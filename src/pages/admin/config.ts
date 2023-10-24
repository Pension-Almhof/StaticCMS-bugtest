import type { Config } from "@staticcms/core";
import { locales } from '@translations/locales.json';

export const config: Config = {
	locale: 'nl',
	logo_url: '/favicon-32x32.png',
	local_backend: false,
	media_folder: 'src/assets',
	public_folder: 'src/assets',
	backend: {
		name: 'github',
		branch: 'main',
		repo: 'Pension-Almhof/StaticCMS-bugtest',
	},
	media_library: {
    max_file_size: 4000000,
    folder_support: true
  },
	i18n: {
		structure: 'multiple_folders',
		locales: locales.map(l => l.code),
		defaultLocale: 'en',
	},
	editor: {
		preview: true
	},
	collections: [
		{
			name: 'homepage_highlights',
			label: 'Hoofdpagina/highlights',
			label_singular: 'highlight',
			description: 'Dit zijn de icoontjes die je kunt zien onder het kopje "Wij bieden"',
			identifier_field: 'id',
			slug: '{{title}}',
			create: true,
			delete: true,
			i18n: true,
			format: 'frontmatter',
			folder: 'src/content/homepage_highlights',
			fields: [
				{
					name: 'id',
					label: 'id',
					i18n: 'duplicate',
					widget: 'number',
					hint: 'Dit bepaald de volgorde van de highlights'
				},
				{
					name: 'name',
					label: 'Naam',
					i18n: true,
					widget: "string"
				},
				{
					name: 'image',
					label: 'Background image',
					i18n: 'duplicate',
					widget: 'image'
				},
			]
		},
		{
			name: 'locales',
			label: 'Locales',
			label_singular: 'locale',
			i18n: false,
			format: "json",
			files: [
				{
					file: 'src/translations/locales.json',
					label: 'Languages',
					name: 'locales',
					description: 'All the translations for the website',
					fields: [
						{
							name: 'locales',
							label: 'Locales',
							label_singular: 'locale',
							widget: 'list',
							fields: [
								{
									name: 'name',
									label: 'Name',
									hint: 'Display name. E.g. English, Deutsch, Nederlands.',
									widget: 'string'
								},
								{
									name: 'code',
									label: 'Code',
									hint: 'Language code (ISO). E.g. en, de, nl.',
									widget: 'string'
								},
								{
									name: "icon",
									label: "Icon",
									hint: "De naam die wordt gebruikt om het icoontje op te halen. Dit is vrijwel altijd de volledige landnaam. Zie http://icon-sets.iconify.design/emojione/ voor opties. Vul alleen de landnaam in en niet de flag-for-",
									widget: "string"
								}
							]
						}
					]
				},
			]
		},
	],
};