<script lang="ts">
	import Typewriter from 'typewriter-effect/dist/core';
	import { onMount } from 'svelte';

	onMount(() => {
		const elem = document.getElementById('typewriter');

		const delay = 4000;

		const typewriter = new Typewriter(elem, {
			loop: true,
			delay: 70,
			deleteSpeed: 20
		});
		typewriter
			.typeString('programmer.')
			.pauseFor(delay)
			.deleteChars(11)
			.typeString('student.')
			.pauseFor(delay)
			.deleteChars(9)
			.typeString('researcher.')
			.pauseFor(delay)
			.start();
	});
</script>

<div id="index">
	<div class="hero">
		<h1>Richard So</h1>
		<p class="hello">Hello World, I'm a...</p>
		<p id="typewriter" />
	</div>
	<!-- <div class="buttons">
		<button>Testing</button>
		<button>Testing</button>
	</div> -->
</div>

<style lang="scss">
	@import '../variables';
	#index {
		height: 100vh;
		background-color: black;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		color: white;

		.hero {
			margin: 2rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			h1 {
				margin: 0.5rem 0;
				font-size: 6vw;
				@include responsiveFont(4rem, 3rem);
			}
			p {
				margin: 0 0 0.5rem 0;
				font-style: italic;
				font-size: 2vw;
				@include responsiveFont(1.5rem);
			}
			.hello {
				color: rgb(175, 175, 175);
				font-weight: lighter;
			}
		}
	}
</style>
