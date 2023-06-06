<script>
	import Element from '$lib/components/Element.svelte';
	import { scale } from 'svelte/transition';
	import { media, player, computer, showResults, points } from '$lib/stores.js';
	let showVerdict = false;
	let verdict;
	if ($player.id === $computer.id) {
		verdict = 'DRAW';
	} else if ($player.id === $computer.id - 1 || $player.id === $computer.id + 2) {
		verdict = 'LOSE';
		$points--;
	} else {
		verdict = 'WIN';
		$points++;
	}
</script>

<body>
	<div class="flex items-center justify-center sm:h-96 h-72 space-x-10">
		<div
			in:scale={{ duration: 1250 }}
			class="flex flex-col-reverse sm:flex-col items-center sm:gap-y-14 gap-y-5"
		>
			<h6 class="sm:text-3xl">YOU PICKED</h6>
			<Element {...$player} />
		</div>
		{#if showVerdict == true && $media.small == false}
			<div class="flex flex-col items-center justify-center gap-y-7">
				<h1 class="text-5xl">YOU {verdict}</h1>
				<button
					on:keydown={() => ($showResults = false)}
					on:click={() => ($showResults = false)}
					class="btn no-animation w-48 bg-white text-[#1f3756]">PLAY AGAIN</button
				>
			</div>
		{/if}
		<div
			on:introend={() => (showVerdict = true)}
			in:scale={{ duration: 1250, delay: 1250 }}
			class="flex flex-col-reverse sm:flex-col items-center gap-y-5 sm:gap-y-14"
		>
			<h6 class="sm:text-3xl">THE HOUSE PICKED</h6>
			<Element {...$computer} />
		</div>
	</div>
	{#if showVerdict == true && $media.small == true}
		<div class=" flex flex-col items-center justify-center gap-y-5 relative bottom-8">
			<h1 class="text-5xl">YOU {verdict}</h1>
			<button
				on:keydown={() => ($showResults = false)}
				on:click={() => ($showResults = false)}
				class="btn w-48 bg-white text-[#1f3756] font-bold">PLAY AGAIN</button
			>
		</div>
	{/if}
</body>
