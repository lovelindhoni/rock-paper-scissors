<script>
	import logo from '$lib/svg/logo.svg';
	import { points } from '$lib/stores.js';
</script>

<div class="flex justify-center mt-8">
	<div
		class="flex justify-between border-2 border-[#606e85] rounded-lg sm:w-1/2 w-11/12 h-20 sm:h-32"
	>
		<img
			on:click={() => window.open('/')}
			on:keydown={() => window.open('/')}
			class="sm:h-32 h-16 pt-3 pl-2 sm:p-4"
			src={logo}
			alt="rock paper scissors"
		/>
		<div class="flex flex-col items-center bg-white w-1/4 h-5/6 m-2 sm:m-3 rounded-xl">
			<h1 class="text-[#2a46c0] sm:text-4xl text-lg">score</h1>
			<h1 class="text-[#3b4363] sm:text-6xl text-3xl">{$points}</h1>
		</div>
	</div>
</div>
