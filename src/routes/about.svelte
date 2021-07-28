<script lang="ts">
	import Button from '$lib/ButtonLink.svelte';
</script>

<svelte:head>
	<title>Richard So | About</title>
</svelte:head>

<h1>Hello!</h1>
<div class="test">
	<Button href="/">Go Back</Button>
</div>
<!-- <div class="space"></div> -->

<style lang="scss">
	h1 {
		text-align: center;
		transform: rotate3d(3, 2, 0, 25deg);
	}
	.test {
		display: flex;
	}
	// .space {
	// 	height: 200vh;
	// 	background-color: blue;
	// }
</style>
