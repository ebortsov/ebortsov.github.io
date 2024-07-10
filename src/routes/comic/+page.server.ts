import type { ComicResponse } from './api-responces';

type Fetch = (arg0: string) => Promise<Response>;

async function fetch_xkcd_id(fetch: Fetch): Promise<string> {
	const email = 'e.bortsov@innopolis.university';
    const response = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`);
    const text = await response.text();
    return text;
}

async function fetch_comic(xkcd_id: string, fetch: Fetch): Promise<ComicResponse> {
    const response = await fetch(`https://fwd.innopolis.university/api/comic?id=${xkcd_id}`);
    const json = await response.json();
    return json;
}

export async function load({ fetch }) {
	const xkcd_id = await fetch_xkcd_id(fetch);
	const comicJson = await fetch_comic(xkcd_id, fetch);
	return { comicJson };
}
