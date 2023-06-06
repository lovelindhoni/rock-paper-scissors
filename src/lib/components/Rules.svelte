<script>
	import Rules from '$lib/svg/image-rules.svg';
	let rulesModal;
</script>

<div class="flex sm:justify-end justify-center mt-24 sm:mt-12">
	<button
		class="btn btn-md lg:btn-lg text-white border-[#606e85] border-2 rounded-xl mx-16 w-24"
		on:click={() => rulesModal.showModal()}>Rules</button
	>
</div>
<dialog id="rules" class="modal" bind:this={rulesModal}>
	<form method="dialog" class="modal-box sm:w-[26rem] sm:h-[26rem] w-screen h-screen bg-white">
		<button
			for="rules"
			class="invisible sm:visible btn btn-sm btn-circle btn-ghost absolute right-2 top-6">✕</button
		>

		<h3 class="font-black sm:text-3xl text-4xl text-[#3b4363] text-center sm:text-left">RULES</h3>
		<div class="flex flex-col items-center sm:mt-7 py-14 sm:py-0">
			<img src={Rules} alt="rules" />
			<button for="rules" class="sm:pt-0 pt-12 visible sm:invisible btn btn-sm btn-circle btn-ghost"
				>✕</button
			>
		</div>
	</form>
</dialog>
