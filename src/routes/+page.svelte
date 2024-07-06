<script lang="ts">
	import { base } from '$app/paths';
	import ICPCPhoto from '../lib/images/icpcquarterfinals.jpg';
</script>

<h2>Bio</h2>

<!-- TODO: Add a separate component for the block -->
<div class="block">
	<p>
		Hi, I am Evgenii Bortsov! My key skills are Python, SQL, git. My journey in learning python
		began when Yandex launched "CodeRun" - a 3-month competition for 5 tracks (I chose the backend
		track) where the participants had to solve a lot of tasks related to the chosen track (backend
		track contained 54 tasks). During the "CodeRun", I was learning Python and SQL as many tasks
		were aimed to using some API, deploying local server or writing some tricky SQL queries. As a
		result, I ended on the 30th place with 51 solved problems.
		<br />
		I have quite good skills in creating Telegram bots and I had a lot of experience with the aiogram
		library. So far I have only implemented pet-projects, like
		<a href="https://github.com/ebortsov/simple-image-storage-bot" class="text-link"
			>Image Saver Bot</a
		>, or
		<a href="https://github.com/ebortsov/tasker" class="text-link">bot</a>
		for manaing tasks. Also as a school project, I created a simple
		<a class="text-link" href="https://strugovatrain.github.io/">website</a>
		to memorize words, kanji, and kana for the Japanese language textbook "Читаем, пишем, говорим по-японски".
	</p>
</div>

<div class="block competitive">
	<p>
		I have over 5+ years experience in competitive programming. My main achievments are:
		<a href="https://codeforces.com/profile/limbo16" class="cf-link">highest rating</a>
		of International Master on Codeforces, 2nd degree diploma on the student Olympiad in programming
		(one of the toughest all-Russian competitive programming Olympiad). <br /> In the university, my
		team managed to take 2nd place on ICPC quarterfinals and get 3rd degree diploma on ICPC semifinals.
		Unfortunately, we didn't get to the finals. But I am only first-year student, so I hope on continue
		polishing my competitive programming skills along with working on my projects.
	</p>
	<div class="photo">
		<img src={ICPCPhoto} alt="I on ICPC NERC 2022/23" />
		<p class="desc">Me on ICPC NERC 2023</p>
	</div>
</div>

<div class="block">
	<p>
		Currently, I am studying on the first course of Innopolis University on the track "Data analysis
		and Artificial Intelligence". As a part of Software Course, I work in a team on developing
		Telegram Bot for calculating Zakat - a special type of payment for wealthy Muslims.
	</p>
</div>

<div class="block">
	<p>
		This year, I also managed to get enrolled at Yandex Summer Backend School. Additionaly, I
		applied at Tinkoff Scholarship and got accepted!
	</p>
</div>

<div class="block">
	<p>
		In my free time, I enjoy cycling and running. In May 2024, I completed my first half-marathon in
		1:55, an event that inspired me to work further personal and professional growth. I believe in
		the value of endeavor, appreciating those who work modestly and diligently towards their goals
	</p>
</div>

<style>
	h2 {
		font-size: 2em;
		font-weight: bold;
		padding-left: 10px;
		padding-top: 20px;
	}
	p {
		text-align: justify;
	}
	.block {
		padding: 20px;
		display: flex;
		flex-direction: row;
		background-color: rgb(245, 245, 245);
		gap: 20px;
	}
	.block.competitive .photo {
		display: flex;
		flex-direction: column;
	}
	.block.competitive .photo .desc {
		height: 30px;
		line-height: 30px;
		color: white;
		font-size: 0.8em;
		background-color: rgb(110, 110, 110);
		padding-left: 5px;
		font-family: Arial, Helvetica, sans-serif;
	}
	.block.competitive img {
		display: block;
		width: 300px;
	}
	.text-link {
		color: rgb(40, 40, 214);
	}
	.text-link:hover {
		cursor: pointer;
		color: rgb(0, 0, 255);
	}
	.cf-link {
		color: #ff8c00;
		font-weight: bold;
		cursor: pointer;
	}
</style>
