<script lang="ts">
	import anime from 'animejs/lib/anime.es';
	import { onMount } from 'svelte';
	let active: boolean = false;

	onMount(() => {
		const hamburger = document.querySelector('.hamburger');

		let open: boolean = false;
		const animate = anime({
			targets: '.anim',
			width: ['0%', '100%'],
			easing: 'easeInOutExpo',
			delay: anime.stagger(250),
			duration: 500,
			autoplay: false
		});

		animate.reverse();
		hamburger.addEventListener('click', () => {
			animate.reverse();
			animate.play();
		});
	});
</script>

<div class="nav-container">
	<button
		class="hamburger hamburger--shelf"
		class:active
		type="button"
		on:click={() => (active = !active)}
	>
		<div class="inner">
			<span class="bar" />
			<span class="bar" />
			<span class="bar" />
		</div>
	</button>
	<div class="nav anim">
		<div class="nav-links">testing</div>
	</div>
	<div class="wipe anim" />
</div>

<style lang="scss">
	$hamburger-color: #fff;
	$hamburger-thickness: 4px;
	@import 'node_modules/delicious-hamburgers/scss/base';
	@import 'node_modules/delicious-hamburgers/scss/animations/shelf';

	.hamburger {
		pointer-events: all;
	}

	.nav-container {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 25%;
		z-index: 1000;
		pointer-events: none;
		> * {
			height: 100%;
			width: 0;
		}
		.nav {
			position: relative;
			background-color: white;
			color: black;
			overflow: hidden;
		}
		.wipe {
			position: absolute;
			top: 0;
			left: 0;
			mix-blend-mode: difference;
			background-color: white;
			z-index: 1001;
		}
	}
</style>
