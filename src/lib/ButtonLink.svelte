<script lang="ts">
	export let href: string;
	import { createEventDispatcher, onMount } from 'svelte';
	import VanillaTilt from 'vanilla-tilt';

	const refId = href.replace('/', '');
	let hovering = false;

	// dispatch hover state to parent
	const dispatch = createEventDispatcher();
	function toggleHover() {
		hovering = !hovering;
		dispatch('hover', {
			ref: refId,
			hovering
		});
	}

	// tilted button
	onMount(() => {
		const button: HTMLElement = document.querySelector(`.button-${refId}`);
		VanillaTilt.init(button, { scale: 1.1 });
	});
</script>

<div class="button-container button-{refId}">
	<a class="button" {href} on:mouseenter={toggleHover} on:mouseleave={toggleHover}>
		<slot />
	</a>
</div>

<style lang="scss">
	@import '../variables';
	.button-container {
		position: relative;
		margin: 1.5rem 0;
		.button {
			margin: 0 0.75rem;
			padding: 0.75rem;
			border: 1px solid rgb(119, 119, 119);
			color: white;
			font-style: normal;
			text-decoration: none;
			font-size: 2rem;
			@include responsiveFont(2rem, 1.35rem);
		}
	}
</style>
