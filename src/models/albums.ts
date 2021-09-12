export type Album = {
    album_type: string,
    artists: {
        external_urls: {},
        href: string,
        id: string,
        name: string,
        uri: string

    }[],
    available_markets: [],
    external_urls: {},
    href: string,
    id: string,
    images: {
        height: number,
        url: string,
        width: number
    }[],
    name: string,
    type: string,
    uri: string,
};
