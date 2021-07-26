<script context="module">
	export const load = async ({ page }) => ({
		props: {
			key: page.path
		}
	});
</script>

<script lang="ts">
	import PageAnimation from '$lib/PageAnimation.svelte';
	export let key;
</script>

<PageAnimation refresh={key}>
	<slot />
</PageAnimation>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap');

	:global(body) {
		font-family: 'Roboto Mono', monospace;
		overflow-x: hidden;
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		font-size: 62.5%;
		background-color: rgb(20, 20, 20);
		color: white;
	}
</style>
