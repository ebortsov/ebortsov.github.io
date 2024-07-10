<script lang="ts">
    import MetaData from '$lib/components/MetaData.svelte';

	import type { ComicResponse } from './api-responces';
	import { formatDistanceToNow } from 'date-fns';
	import { onMount } from 'svelte';

	export let data;
	const comicJson: ComicResponse = data.comicJson;
	let comicBlock: HTMLElement;
	let comicImg: HTMLImageElement;
	let comicTitle: HTMLElement;
	let comicImgUploadDate: HTMLElement;
	let comicLoading: HTMLElement;

	function loadImage(comicJson: ComicResponse) {
		comicBlock.style.display = 'block';
		comicImg.src = comicJson.img;
		comicTitle.textContent = comicJson.safe_title;
		const upload_date = new Date(
			Number(comicJson.year),
			Number(comicJson.month) - 1,
			Number(comicJson.day)
		);
		comicImgUploadDate.textContent = formatDistanceToNow(upload_date, {
			addSuffix: true
		});
		comicLoading.style.display = 'none';
	}

	onMount(() => {
		loadImage(comicJson);
	});
</script>

<MetaData title="Comic" description="A funny xkcd comic is displayed on this page" />

<div class="comic-loading" bind:this={comicLoading}><p>Loading...</p></div>

<div class="comic" bind:this={comicBlock} style="display: none;">
	<img src="" alt="Random xkcd" class="comic-img" bind:this={comicImg} />
	<div class="comic-img-description">
		<p class="comic-img-title">
			<b>Image title: </b><span class="placeholder" bind:this={comicTitle}></span>
		</p>
		<p class="comic-img-upload-date">
			<b>Upload date: </b><span bind:this={comicImgUploadDate} class="placeholder"></span>
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
