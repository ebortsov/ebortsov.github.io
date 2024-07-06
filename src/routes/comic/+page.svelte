<script lang="ts">
	import type { ComicResponse } from './xkcd-api-responces';
	import { formatDistanceToNow } from 'date-fns';
	import { onMount } from 'svelte';

	const email = 'e.bortsov@innopolis.university';
	let comic_block: HTMLElement;
	let comic_img: HTMLImageElement;
	let comic_title: HTMLElement;
	let comic_img_upload_date: HTMLElement;
	let comic_loading: HTMLElement;

	async function fetch_xkcd_id(): Promise<string> {
		try {
			const response = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`);
			const text = await response.text();
			console.log('Fetched xkcd_id:', text);
			return text;
		} catch (error) {
			console.error('Error fetching xkcd_id:', error);
			throw error;
		}
	}

	async function fetch_comic(xkcd_id: string): Promise<ComicResponse> {
		try {
			const response = await fetch(`https://fwd.innopolis.university/api/comic?id=${xkcd_id}`);
			const json = await response.json();
			console.log('Fetched comic JSON:', json);
			return json;
		} catch (error) {
			console.error('Error fetching comic:', error);
			throw error;
		}
	}

	function loadImage(comicJson: ComicResponse) {
		comic_block.style.display = 'block';
		comic_img.src = comicJson.img;
		comic_title.textContent = comicJson.safe_title;
		const upload_date = new Date(
			Number(comicJson.year),
			Number(comicJson.month) - 1,
			Number(comicJson.day)
		);
		comic_img_upload_date.textContent = formatDistanceToNow(upload_date, {
			addSuffix: true
		});
		comic_loading.style.display = 'none';
	}

	onMount(async () => {
		try {
			const xkcd_id = await fetch_xkcd_id();
			const comicJson = await fetch_comic(xkcd_id);
			loadImage(comicJson);
		} catch (error) {
			console.error('Failed to fetch comic:', error);
		}
	});
</script>

<div class="comic-loading" bind:this={comic_loading}><p>Loading...</p></div>

<div class="comic" bind:this={comic_block} style="display: none;">
	<img src="" alt="Random xkcd" class="comic-img" bind:this={comic_img} />
	<div class="comic-img-description">
		<p class="comic-img-title">
			<b>Image title: </b><span class="placeholder" bind:this={comic_title}></span>
		</p>
		<p class="comic-img-upload-date">
			<b>Upload date: </b><span bind:this={comic_img_upload_date} class="placeholder"></span>
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
