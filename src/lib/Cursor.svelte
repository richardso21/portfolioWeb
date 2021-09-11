<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let x, y, pressed;
	let hovered = false;
	onMount(() => {
		const links = document.querySelectorAll('a');
		links.forEach((e) => {
			e.addEventListener('mouseover', () => {
				hovered = true;
			});
			e.addEventListener('mouseout', () => {
				hovered = false;
			});
		});
	});
</script>

<div id="pointer" style="transform: translate({x}px, {y}px)" transition:fade={{ duration: 100 }}>
	<span id="dot" class:pressed class:hovered />
</div>

<!-- {/key} -->
<style lang="scss">
	#pointer {
		height: 80px;
		width: 80px;
		top: 0;
		left: 0;
		margin-left: -40px;
		margin-top: -40px;
		pointer-events: none;
		position: fixed;
		z-index: 9999;
		mix-blend-mode: difference;
		transform: translate(-100px, -100px);
		transition: all 0.05s ease;
		#dot {
			border-radius: 100%;
			background-color: white;
			display: block;
			height: 80px;
			width: 80px;
			transform: scale(0.25);
			transition: all 0.35s cubic-bezier(0.075, 0.82, 0.165, 1);
		}
	}
	:global(.pressed) {
		transform: scale(1.25) !important;
	}
	:global(.hovered) {
		background-color: lightseagreen !important;
	}
</style>
