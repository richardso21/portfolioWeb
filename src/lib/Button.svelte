<script lang="ts">
	export let href, text, size;
</script>

<a class="button" {href} style="font-size: {size};">
	{text}
</a>

<style lang="scss">
	a {
		font-style: normal;
		text-decoration: none;
	}
	.button {
		color: white;
		margin: 0 0.75rem;
		padding: 0.75rem;
		border: 1px solid rgb(119, 119, 119);
	}
</style>
