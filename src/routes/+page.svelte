<script>
	import '@fontsource/barlow-semi-condensed/600.css';
	import Element from '$lib/components/Element.svelte';
	import triangle from '$lib/svg/bg-triangle.svg';
	import Header from '$lib/components/Header.svelte';
	import Rules from '$lib/components/Rules.svelte';
	import Results from '$lib/components/Results.svelte';
	import { showResults, computer, player } from '$lib/stores.js';
	const elementData = [
		{ id: 0, src: 'src/lib/svg/icon-rock.svg', svgTheme: '#dc2e4e', altText: 'rock' },
		{ id: 1, src: 'src/lib/svg/icon-paper.svg', svgTheme: '#4865f4', altText: 'paper' },
		{ id: 2, src: 'src/lib/svg/icon-scissors.svg', svgTheme: ' #ec9e0e', altText: 'scissor' }
	];
	function getRandomn() {
		return Math.floor(Math.random() * 3);
	}
	function chooseElement(id) {
		$player = elementData[id];
		$computer = elementData[getRandomn()];
		$showResults = true;
	}
</script>

<body>
	<Header />
	{#if $showResults === false}
		<div class="  flex justify-center mt-24">
			<div class="grid items-center relative">
				<div class="sm:w-60 sm:h-60 w-44 h-44">
					<img src={triangle} alt="background" />
				</div>
				<div class="grid absolute sm:gap-14 gap-11">
					<div class="grid grid-cols-2 sm:gap-x-56 gap-x-40 relative sm:right-14 right-11">
						<Element
							{...elementData[1]}
							on:click={() => chooseElement(1)}
							on:keydown={() => chooseElement(1)}
						/>
						<Element
							{...elementData[2]}
							on:click={() => chooseElement(2)}
							on:keydown={() => chooseElement(2)}
						/>
					</div>
					<div class="flex justify-center items-center">
						<Element
							{...elementData[0]}
							on:click={() => chooseElement(0)}
							on:keydown={() => chooseElement(0)}
						/>
					</div>
				</div>
			</div>
		</div>
	{:else}
		<Results />
	{/if}
	<Rules />
</body>

<style>
	:global(body) {
		font-family: 'Barlow Semi Condensed', sans-serif;
		background-color: hsl(214, 47%, 23%);
		color: white;
	}
</style>
