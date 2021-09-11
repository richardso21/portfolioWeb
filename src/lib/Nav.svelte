<script lang="ts">
	import anime from 'animejs/lib/anime.es';
	import { onMount } from 'svelte';
	import NavItem from '$lib/NavItem.svelte';
	let active: boolean = false;

	onMount(() => {
		const hamburger = document.querySelector('.hamburger');
		const links = document.querySelectorAll('.nav-item');

		anime({
			targets: '.nav-container',
			opacity: [0, 1],
			easing: 'easeOutSine',
			duration: 500,
			delay: 1250
		});

		const anim = anime.timeline({
			autoplay: false
		});
		anim.add({
			targets: '.anim',
			width: ['0%', '100%'],
			easing: 'easeInOutExpo',
			delay: anime.stagger(250),
			duration: 500
		});
		anim.add(
			{
				targets: '.anim-container',
				translateX: [-500, 0],
				easing: 'easeInOutExpo',
				delay: anime.stagger(75),
				duration: 500
			},
			'-=750'
		);

		anim.reverse();
		function toggle() {
			anim.reverse();
			anim.play();
		}

		hamburger.addEventListener('click', toggle);
		links.forEach((e) => {
			e.addEventListener('click', () => {
				active = !active;
				toggle();
			});
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
		<div class="nav-links">
			<NavItem href="/">Home</NavItem>
			<NavItem href="/works">My Works</NavItem>
			<NavItem href="/about">About Me</NavItem>
			<NavItem href="/">Contact</NavItem>
		</div>
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
		margin: 1rem 1.5rem;
		position: absolute;
		z-index: 10000;
	}

	.nav-container {
		opacity: 0;
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
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
			.nav-links {
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				align-items: center;
			}
		}
		.overlay {
			position: absolute;
			top: 0;
			left: 0;
			background: transparent;
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
