<script lang="ts">
	export let text;
	import { cubicOut } from 'svelte/easing';

	function animateBG(node, { duration }) {
		return {
			duration,
			css: (t) => {
				const eased = cubicOut(t);
				return `
					transform: translate(-50%, -50%) rotate(-25deg) translate(-${(1 - eased) * 25}%);
                    opacity: ${eased};
				`;
			}
		};
	}
</script>

<span class="bg-text" transition:animateBG={{ duration: 150 }}>{text}</span>

<style lang="scss">
	:global(.bg-text) {
		display: block;
		position: fixed;
		z-index: -1;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(-25deg);
		font-size: 20vw;
		font-weight: bold;
		font-style: italic;
		color: transparent;
		-webkit-text-stroke: 3px #333;
	}
</style>
