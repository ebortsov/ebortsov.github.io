<script lang="ts">
	import { base } from '$app/paths';
	import MyPhoto from '../lib/images/myphoto.jpg';
</script>

<header>
	<!-- I KNOW I CAN USE background-image, BUT DAMN GITHUB WON'T SHOW ME THE IMAGE THEN -->
	<div class="image-container">
		<img class="image" alt="Profile" src={MyPhoto} />
	</div>
	<h1>Evgenii Bortsov</h1>
	<nav>
		<a href="{base}/">About</a>
		<a href="{base}/portfolio">Portfolio</a>
		<a href="{base}/contacts">Contact Me</a>
		<a href="{base}/comic" class="comic-link">Comic</a>
	</nav>
</header>

<style>
	header {
		font-family: Garamond;
	}
	.image-container {
		position: relative;
		grid-area: photo;
		border-radius: 100%;
		margin-right: 20px;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
	.image {
		position: absolute;
		height: auto;
		height: 187px;
		top: -5px;
	}
	header {
		padding: 20px;
		padding-left: 0;
		width: 100%;
		max-width: 1000px;
		border-bottom: 1px solid gray;
		display: grid;
		grid-template-areas:
			'photo name'
			'photo nav';
		grid-template-columns: 150px 1fr;
		grid-template-rows: 100px 50px;
		column-gap: 20px;
	}
	h1 {
		font-style: Garamond;
		padding-left: 10px;
		display: flex;
		align-items: center;
		grid-area: name;
		font-size: 3em;
		font-weight: bold;
		height: 100%;
	}
	nav {
		grid-area: nav;
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 100%;
		gap: 10px;
	}
	nav a {
		padding-left: 10px;
		display: flex;
		align-items: center;
		width: 150px;
		text-decoration: none;
		height: 100%;
		transition-duration: 0.05s;
		color: rgb(40, 40, 214);
		font-size: 1.5em;
	}
	.comic-link {
		font-family: 'Comic Sans MS', 'Comic Sans', cursive;
		transition-duration: 0s;
	}
	.comic-link:hover {
		color: white;
		background: linear-gradient(
			to right,
			rgba(255, 0, 0, 1) 0%,
			rgba(255, 154, 0, 1) 10%,
			rgba(208, 222, 33, 1) 20%,
			rgba(79, 220, 74, 1) 30%,
			rgba(63, 218, 216, 1) 40%,
			rgba(47, 201, 226, 1) 50%,
			rgba(28, 127, 238, 1) 60%,
			rgba(95, 21, 242, 1) 70%,
			rgba(186, 12, 248, 1) 80%,
			rgba(251, 7, 217, 1) 90%,
			rgba(255, 0, 0, 1) 100%
		);
		box-shadow: inset 0 0 5px 5px white;
	}
	nav a:hover {
		color: blue;
		cursor: pointer;
	}
</style>
