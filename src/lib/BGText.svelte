<script lang="ts">
	export let text,
		size = '20vw';
	import { cubicOut } from 'svelte/easing';

	function animateBG(node, { duration }) {
		const style = getComputedStyle(node);
		return {
			duration,
			easing: cubicOut,
			css: (t) => {
				return `
					transform: ${style.transform} translate(-${(1 - t) * 25}%);
                    opacity: ${t};
				`;
			}
		};
	}
</script>

{#key text}
	<span class="bg-text" style="font-size: {size};" transition:animateBG={{ duration: 150 }}
		>{text}</span
	>
{/key}

<style lang="scss">
	:global(.bg-text) {
		display: block;
		position: fixed;
		z-index: -1;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(-25deg);
		font-weight: bold;
		font-style: italic;
		color: transparent;
		-webkit-text-stroke: 3px #333;
	}
</style>
