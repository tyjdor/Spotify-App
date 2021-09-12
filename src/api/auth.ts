import axios from 'axios';
import { stringify } from 'querystring';
import { navigate } from "svelte-navigator";

import env from '../env.json';
import { user } from '../stores/userStore';

type LoginReponse = {
	access_token: string,
	token_type: 'Bearer',
	expires_in: number,
	scope: string,
	refresh_token: string
}

const redirectAfterLogin = () => {
	navigate("/home");
}

const refreshTokens = () => {
	user.subscribe(async (userData) => {
		const res = await axios.post<LoginReponse>(env.spotfiyTokenUrl, stringify({
			grant_type: 'refresh_token',
			refresh_token: userData.refresh_token
		}), {
			headers: {
				Authorization: `Basic ${btoa(`${env.spotifyClientId}:${env.spotifyClientSecret}`)}`,
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});
		user.set({
			access_token: res.data.access_token,
			refresh_token: res.data.refresh_token
		});
		setTimeout(refreshTokens, res.data.expires_in * 1000);
	})
}

export const loginFromCode = async (code: string) => {
	const res = await axios.post<LoginReponse>(env.spotifyAuthUrl, stringify({
		grant_type: 'authorization_code',
		code: code,
		redirect_uri: env.spotifyRedirectUri
	}), {
		headers: {
			Authorization: `Basic ${btoa(`${env.spotifyClientId}:${env.spotifyClientSecret}`)}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});

	user.set({
		access_token: res.data.access_token,
		refresh_token: res.data.refresh_token
	});

	setTimeout(refreshTokens, res.data.expires_in * 1000);

	redirectAfterLogin();
};

export const redirectToSpotifyOAuth = () => {
	window.location.href = `https://accounts.spotify.com/authorize`
		+ `?response_type=code&client_id=${
		  env.spotifyClientId
		}&scope=${
		  encodeURIComponent(env.spotifyScopes.join(' '))
		}&redirect_uri=${
		  encodeURIComponent('http://localhost:3000/callback')
		}`;
}
