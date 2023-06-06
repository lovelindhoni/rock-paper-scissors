<script>
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>Rock Paper Scissors Game</title>
	<meta
		name="description"
		content="Play the classic Rock-Paper-Scissors game online. Test your skills against the computer and see if you can emerge as the ultimate champion."
	/>

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content="Rock Paper Scissors Game" />
	<meta
		property="twitter:description"
		content="Play the classic Rock-Paper-Scissors game online. Test your skills against the computer and see if you can emerge as the champion."
	/>
	<meta
		property="twitter:image"
		content="https://github.com/lovelindhoni/rock-paper-scissors/blob/main/design/desktop-preview.jpg"
	/>

	<meta name="keywords" content="rock paper scissors, game, online, play, challenge, strategy" />
	<meta name="robots" content="index, nofollow" />
	<meta name="author" content="Lovelin" />
</svelte:head>

<slot />
