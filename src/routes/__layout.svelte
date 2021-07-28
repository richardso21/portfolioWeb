<script context="module">
	export const load = async ({ page }) => ({
		props: {
			key: page.path
		}
	});
</script>

<script lang="ts">
	import Cursor from '$lib/Cursor.svelte';
	import PageAnimation from '$lib/PageAnimation.svelte';
	import { onMount } from 'svelte';
	export let key;
	let x, y, pressed, desktop;
	onMount(() => {
		desktop = (window.innerWidth > 1400)
		document.addEventListener('mousemove', (e) => {
			x = e.clientX;
			y = e.clientY;
		});
		document.addEventListener('mousedown', (e) => {
			pressed = true;
		});
		document.addEventListener('mouseup', (e) => {
			pressed = false;
		});
	});
</script>

<PageAnimation refresh={key}>
	<slot />
</PageAnimation>
{#if desktop}
<Cursor {pressed} {x} {y} />
{/if}

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
	:global(*) {
		cursor: none;
	}
</style>
