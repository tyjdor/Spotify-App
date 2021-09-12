export type Artist = {
	external_urls: {
		spotify: string
	},
	followers: {
		href: string,
		total: number
	},
	genres: string[],
	id: string,
	href: string,
	images: {
		height: number,
		width: number,
		url: string
	}[],
	name: string,
	popularity: number,
	type: 'artist',
};
