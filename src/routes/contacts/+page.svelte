<script lang="ts">
    import MetaData from '$lib/components/MetaData.svelte';

	import EmailLogo from '$lib/assets/icons/yamail.png';
	import TelegramLogo from '$lib/assets/icons/telegram.png';
	import GithubLogo from '$lib/assets/icons/github.png';
</script>

<MetaData title="My Contacts" description="Eugene Bortsov's contacts for telegram, email, and github"/>

<h2>Contacts</h2>
<ul>
	<li>
		<a id="tg-link" class="text-link" href="https://t.me/limbo15">
			<img class="logo" src={TelegramLogo} alt="Telegram Logo" />
			<span>Telegram</span>
		</a>
	</li>
	<li>
		<a id="gh-link" class="text-link" href="https://github.com/ebortsov">
			<img class="logo" src={GithubLogo} alt="GitHub Logo" />
			<span>GitHub</span>
		</a>
	</li>
	<li>
		<a id="email" class="text-link" href="mailto:ebortsoff@yandex.ru">
			<img class="logo" src={EmailLogo} alt="Email Logo" />
			<span>Email</span>
		</a>
	</li>
</ul>

<style>
	h2 {
		font-size: 2em;
		font-weight: bold;
		padding-left: 10px;
		padding-top: 20px;
	}
	ul {
		padding-left: 20px;
		display: flex;
		flex-direction: column;
	}
	ul li {
		display: block;
		height: 50px;
	}
	ul li a {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 20px;
	}
	.text-link {
		color: rgb(40, 40, 214);
	}
	.text-link:hover {
		cursor: pointer;
		color: rgb(0, 0, 255);
	}
	main ul .logo {
		height: 1.2em;
	}
</style>
