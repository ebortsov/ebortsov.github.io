<script lang="ts">
    import Header from "./components/Header.svelte";
    import Bio from "./components/main_pages/Bio.svelte";
    import Contacts from "./components/main_pages/Contacts.svelte";
    import Portfolio from "./components/main_pages/Portfolio.svelte";
    import Comic from "./components/main_pages/Comic.svelte";

    import { NavigationType } from "./types/navigation-type";

    let currentPage: NavigationType = NavigationType.BIO;

    function handleNavClick(event: CustomEvent<NavigationType>) {
        currentPage = event.detail;
    }
</script>

<Header on:nav-click={handleNavClick} />

<main>
    {#if currentPage == NavigationType.BIO}
        <Bio />
    {:else if currentPage == NavigationType.PORTFOLIO} 
        <Portfolio />
    {:else if currentPage == NavigationType.CONTACTS}
        <Contacts />
    {:else if currentPage == NavigationType.COMIC}
        <Comic />
    {/if}
</main>

<style>
    :global(*) {
        box-sizing: border-box;
    }
    :global(body) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding-left: calc(100vw - 100%);
        font-size: 1em;
        font-family: Garamond;
    }
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
