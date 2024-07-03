<script lang="ts">
    import type { ComicResponse } from "../../types/xkcd-api-responces";
    import { formatDistanceToNow } from "date-fns";

    const email = "e.bortsov@innopolis.university";
    let comic_block: HTMLElement;
    let comic_img: HTMLImageElement;
    let comic_title: HTMLElement;
    let comic_img_upload_date: HTMLElement;
    let comic_loading: HTMLElement;

    function fetch_xkcd_id(): Promise<string> {
        return fetch(
            `https://fwd.innopolis.university/api/hw2?email=${email}`,
        ).then((r) => r.text());
    }

    function fetch_comic(xkcd_id: string): Promise<ComicResponse> {
        return fetch(
            `https://fwd.innopolis.university/api/comic?id=${xkcd_id}`,
        ).then((r) => r.json());
    }

    let imageLoaded: boolean = false;

    function loadImage(comicJson: ComicResponse) {
        comic_block.style.display = "block";
        comic_img.src = comicJson.img;
        comic_title.textContent = comicJson.safe_title;
        const upload_date = new Date(
            Number(comicJson.year),
            Number(comicJson.month) - 1,
            Number(comicJson.day),
        );
        comic_img_upload_date.textContent = formatDistanceToNow(upload_date, {
            addSuffix: true,
        });
        imageLoaded = true;
        comic_loading.style.display = 'none';
    }

    fetch_xkcd_id().then(fetch_comic).then(loadImage);
</script>

<div class="comic-loading" bind:this={comic_loading}><p>Loading...</p></div>

<div class="comic" bind:this={comic_block}>
    <img
        src="../assets/icpcquarterfinals.jpg"
        alt="Random xkcd"
        class="comic-img"
        bind:this={comic_img}
    />
    <div class="comic-img-description">
        <p class="comic-img-title">
            <b>Image title: </b><span
                class="placeholder"
                bind:this={comic_title}
            ></span>
        </p>
        <p class="comic-img-upload-date">
            <b>Upload date: </b><span
                bind:this={comic_img_upload_date}
                class="placeholder"
            ></span>
        </p>
    </div>
</div>

<style>
    .comic {
        width: 100%;
        display: none;
    }

    .comic .comic-img {
        width: 100%;
        margin-bottom: 0px;
        display: block;
        margin-top: 10px;
    }

    .comic-img-description,
    .comic-loading {
        background-color: rgb(110, 110, 110);
        line-height: 1.5em;
        color: white;
        font-size: 1.2em;
        margin-top: 10px;
    }
    .comic-img-description p,
    .comic-loading p {
        padding: 10px;
    }
    .comic-img-description b {
        font-weight: bold;
    }
    .comic-img-title {
        border-bottom: 1px dashed black;
    }
</style>
