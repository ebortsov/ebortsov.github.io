import { ComicResponse } from './types';
import { formatDistanceToNow } from 'date-fns';

const email = 'e.bortsov@innopolis.university';
const comic_block = document.querySelector(".comic") as HTMLElement;
const comic_img = document.querySelector(".comic .comic-img") as HTMLImageElement;
const comic_title = document.querySelector(".comic .comic-img-title .placeholder") as HTMLElement;
const comic_img_upload_date = document.querySelector(".comic .comic-img-upload-date .placeholder") as HTMLElement;

function fetch_xkcd_id(): Promise<string> {
    return fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`)
        .then(r => r.text());
}

function fetch_comic(xkcd_id: string): Promise<ComicResponse> {
    return fetch(`https://fwd.innopolis.university/api/comic?id=${xkcd_id}`)
        .then(r => r.json());
}

function loadImage(comicJson: ComicResponse) {
    comic_block.style.display = 'block';
    comic_img.src = comicJson.img;
    comic_title.textContent = comicJson.safe_title;
    const upload_date = new Date(Number(comicJson.year), Number(comicJson.month) - 1, Number(comicJson.day));
    comic_img_upload_date.textContent = formatDistanceToNow(upload_date, { addSuffix: true });
}

fetch_xkcd_id().then(fetch_comic).then(loadImage);
