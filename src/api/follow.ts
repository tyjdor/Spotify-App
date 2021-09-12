import axios from 'axios';

import type { User } from '../stores/userStore';
import env from '../env.json';
import type { Artist } from '../models/artist';

type GetFollowedArtistsResposne = {
	artists: {
		items: Artist[],
		next: string,
		total: number,
		cursors: {
			after: string
		},
		limit: number,
		href: string
	}
}

export const getFollowedArtists = (user: User): Promise<Artist[]> => {
	return axios.get<GetFollowedArtistsResposne>(
		`${env.spotifyApiBase}/me/following?type=artist`, {
		headers: {
			Authorization: `Bearer ${user.access_token}`
		}
	}).then(res =>
		res.data.artists.items
	)
}
