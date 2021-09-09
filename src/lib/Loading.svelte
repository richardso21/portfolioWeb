<script lang="ts">
    import { fade } from 'svelte/transition';
</script>

<div transition:fade class="loading-bg" />

<style lang="scss">
	.loading-bg {
		height: 100vh;
		width: 100%;
        top: 0;
        left: 0;
		position: fixed;
		z-index: 1000;
		background-color: rgb(0, 0, 0, 50%);
	}
</style>
