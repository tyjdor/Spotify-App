import axios from 'axios';

import type { User } from '../stores/userStore';
import env from '../env.json';
import type { Album } from '../models/albums';

type GetBrowseResponse = {
    albums: {
        href: string,
        items: Album[]
        limit: number,
        next: string,
        offset: number,
        previous: string,
        total: number
    }
}

export const getBrowse = (user: User): Promise<Album[]> => {
    return axios.get<GetBrowseResponse>(
        `${env.spotifyApiBase}/browse/new-releases`, {
        headers: {
            Authorization: `Bearer ${user.access_token}`
        }
    }).then(res =>
        res.data.albums.items
    )
}

