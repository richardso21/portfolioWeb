<script lang="ts">
	import PageTitle from '$lib/PageTitle.svelte';
import WorksGridItem from '$lib/WorksGridItem.svelte';
</script>

<svelte:head>
	<title>Works - Richard So</title>
</svelte:head>

<section id="works">
    <PageTitle>Works & Projects</PageTitle>
	<div class="container">
		<WorksGridItem title="Testing" tech="tech" imgUrl="/favicon.png" href="/testing1" />
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
	}
</style>
