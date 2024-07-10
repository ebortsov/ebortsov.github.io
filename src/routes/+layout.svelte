<script lang="ts">
	import '$lib/global_styles/reset.css';
    import '$lib/global_styles/other.css';
	import Header from '$lib/components/Header.svelte';
    import Favicon from '$lib/assets/favicon.ico';
</script>

<svelte:head>
	<meta name="author" content="Eugene Bortsov" />
    <link rel="icon" href="{Favicon}" />
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
