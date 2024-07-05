<script lang="ts">
	import '../global_styles/reset.css';
	import '../global_styles/other.css';
	import Header from './Header.svelte';
</script>

<svelte:head>
	<title>Eugene Bortsov</title>
</svelte:head>

<Header />

<main>
	<slot />
</main>

<style>
	main {
		max-width: 1000px;
		width: 100%;
		display: flex;
		gap: 20px;
		flex-direction: column;
		font-size: 1.2em;
		line-height: 1.5em;
		padding-bottom: 50px;
	}
</style>
