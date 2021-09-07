<script context="module">
	import { Client, getType } from './../../utils/client';

	export async function load() {
		const works = await getType('works');
		return {
			props: {
				works
			}
		};
	}
</script>

<script lang="ts">
	import PageTitle from '$lib/PageTitle.svelte';
	import WorksGridItem from '$lib/WorksGridItem.svelte';
	import anime from 'animejs/lib/anime.es';
	import VanillaTilt from 'vanilla-tilt';
	import { onMount } from 'svelte';

	export let works;

	console.log(works[0]);
	onMount(() => {
		anime({
			targets: '.works-grid-item',
			translateY: [250, 0],
			opacity: [0, 1],
			delay: anime.stagger(100, { start: 200 }),
			easing: 'easeOutExpo',
			duration: 1000
		});
		VanillaTilt.init((document.querySelectorAll('.works-grid-item') as unknown) as HTMLElement[], {
			scale: 1.15,
			perspective: 5000
		});
	});
</script>

<svelte:head>
	<title>Works - Richard So</title>
</svelte:head>

<section id="works">
	<PageTitle>Works & Projects</PageTitle>
	<div class="container">
		<WorksGridItem title="Testing" tech="tech" imgUrl="/favicon.png" href="/works/testing1" />
		<WorksGridItem title="Testing" tech="tech" imgUrl="/favicon.png" href="/testing2" />
		<WorksGridItem title="Testing" tech="tech" imgUrl="/favicon.png" href="/testing3" />
		<WorksGridItem title="Testing" tech="tech" imgUrl="/favicon.png" href="/testing4" />
		<WorksGridItem title="Testing" tech="tech" imgUrl="/favicon.png" href="/testing5" />
	</div>
</section>

<style lang="scss">
	@import '../variables';
	.container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		margin: 1.5rem;
		// gap: 3rem;
		@media (max-width: $tablet) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: $phone) {
			grid-template-columns: repeat(1, 1fr);
		}
		animation: noClick 4s;
	}
	@keyframes noClick {
		from {
			pointer-events: none;
		}
		to {
			pointer-events: all;
		}
	}
</style>
