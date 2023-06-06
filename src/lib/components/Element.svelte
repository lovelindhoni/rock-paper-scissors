<script>
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	export let delay = 0;
	export let duration = 0;
	export let src;
	export let svgTheme;
	export let altText;
</script>

<div
	in:scale={{ delay, duration, easing: quintOut }}
	class="flex justify-center items-center rounded-full bg-white w-24 h-24 border-[9px] sm:w-32 sm:h-32 sm:border-[13px]"
	style:border-color={svgTheme}
	style:box-shadow="0px 4px 0px inset #00000040"
	on:click
	on:keydown
>
	<img {src} alt={altText} class="sm:w-max sm:h-max w-10 h-10" />
</div>
