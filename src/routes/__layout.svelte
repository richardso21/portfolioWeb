<script lang="ts">
	import { onMount } from 'svelte';
	import VanillaTilt from 'vanilla-tilt';

	onMount(() => {
		// tilted buttons
		const button = document.querySelectorAll('.button-container');
		VanillaTilt.init(button, {
			scale: 1.1,
		});
	});

</script>

<main id="main">
	<slot />
</main>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap');

	:global(body) {
		font-family: 'Roboto Mono', monospace;
		overflow-x: hidden;
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		font-size: 62.5%;
		// background-color: black;
		background-color: rgb(20, 20, 20);
		color: white;
	}
</style>
