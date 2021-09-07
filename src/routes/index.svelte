<script lang="ts">
	import ButtonLink from '$lib/ButtonLink.svelte';
	import AnimatedName from '$lib/AnimatedName.svelte';
	import TypeTexts from '$lib/TypeTexts.svelte';
	import BGText from '$lib/BGText.svelte';
	import Parallax from 'parallax-js';
	import { onMount } from 'svelte';

	// background text
	let bgText: string = '';
	function toggleHoverState(event) {
		if (!event.detail.hovering) {
			bgText = '';
			return;
		}
		bgText = event.detail.ref === 'works' ? 'Works' : 'About';
	}

	// parallax
	onMount(() => {
		// disable parallax is phone/tablet screen
		if (window.innerWidth < 1300) return;

		const container = document.getElementById('index');
		new Parallax(container, {
			pointerEvents: true
		});
		const nameContainer = document.getElementById('name-scene');
		new Parallax(nameContainer);
	});
</script>

<svelte:head>
	<title>Richard So</title>
</svelte:head>

<BGText text={bgText} />
<section id="index">
	<div class="container" data-depth="0.15">
		<div class="content">
			<div class="hero">
				<div id="name-scene">
					<div data-depth=".5" class="name-container">
						<AnimatedName />
					</div>
				</div>
				<div class="hello">
					<p>Hello World, I'm a...</p>
					<TypeTexts typeArr={['programmer.', 'student.', 'researcher.']} />
				</div>
			</div>
			<div class="buttons">
				<ButtonLink href="/works" on:hover={toggleHoverState}>My Works</ButtonLink>
				<ButtonLink href="/about" on:hover={toggleHoverState}>About Me</ButtonLink>
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
			margin: 1rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			:global(.hello > *) {
				text-align: center;
				margin: 0 0 0.5rem 0;
				font-style: italic;
				font-size: 2.25vw;
				color: #afafaf;
				font-weight: lighter;
				opacity: 0;
				animation: fadeIn 0.5s ease forwards 1.25s;
				@include responsiveFont(2.25rem, 1.5rem);
			}
		}
		.buttons {
			opacity: 0;
			pointer-events: none;
			display: flex;
			animation: fadeIn 0.5s ease forwards 1.25s;
		}
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
			pointer-events: none;
		}
		to {
			opacity: 1;
			pointer-events: all;
		}
	}
</style>
