import { writable } from "svelte/store";

export type User = {
	access_token: string;
	refresh_token: string;
}

export const user = writable<User | null>(null);
