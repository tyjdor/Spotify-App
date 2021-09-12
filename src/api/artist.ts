import axios from 'axios';

import type { User } from '../stores/userStore';
import env from '../env.json';
import type { Artist } from '../models/artist';

export const getArtistById = (id: string, user: User) => {
	return axios.get<Artist>(`${env.spotifyApiBase}/artists/${id}`, {
		headers: {
			Authorization: `Bearer ${user.access_token}`
		}
	})
}
