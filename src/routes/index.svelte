<script lang="ts">
	import Button from '$lib/Button.svelte';
	// import StyledName from '$lib/StyledName.svelte';
	import Typewriter from 'typewriter-effect/dist/core';
	import Parallax from 'parallax-js';
	import { onMount } from 'svelte';
	import AnimatedName from '$lib/AnimatedName.svelte';

	onMount(() => {
		const container = document.getElementById('index');
		const nameContainer = document.getElementById('name-scene');
		new Parallax(container, {
			pointerEvents: true
		});
		new Parallax(nameContainer);

		const typeElem = document.getElementById('typewriter');
		const delay = 4000;
		const typewriter = new Typewriter(typeElem, {
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

<svelte:head>
	<title>Richard So</title>
</svelte:head>

<section id="index">
	<div class="container" data-depth="0.15">
		<div class="content">
			<div class="hero">
				<div id="name-scene">
					<div data-depth=".5" class="name-container">
						<!-- <StyledName name="Richard So" /> -->
						<AnimatedName />
					</div>
				</div>
				<div class="hello">
					<p>Hello World, I'm a...</p>
					<p id="typewriter" />
				</div>
			</div>
			<div class="buttons">
				<Button href="/about" text="My Works" size="1.5rem" />
				<Button href="/about" text="About Me" size="1.5rem" />
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../variables';
	#index {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		.hero {
			margin: 2rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			.hello > * {
				text-align: center;
				margin: 0 0 0.5rem 0;
				font-style: italic;
				font-size: 2.1vw;
				color: #afafaf;
				font-weight: lighter;
				@include responsiveFont(1.5rem);
			}
			#typewriter {
				color: white;
				font-weight: bold;
			}
		}
	}
</style>
