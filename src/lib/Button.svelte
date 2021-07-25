<script lang="ts">
	export let href: string, text: string, size: string;
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let hovering = false;
	function toggleHover() {
		hovering = !hovering;
		console.log(hovering);
		dispatch('hover', {
			text,
			hovering
		});
	}
</script>

<div class="button-container">
	<a
		class="button"
		{href}
		style="font-size: {size};"
		on:mouseenter={toggleHover}
		on:mouseleave={toggleHover}
	>
		{text}
	</a>
</div>

<style lang="scss">
	a {
		font-style: normal;
		text-decoration: none;
	}
	.button-container .button {
		color: white;
		margin: 0 0.75rem;
		padding: 0.75rem;
		border: 1px solid rgb(119, 119, 119);
	}
</style>
