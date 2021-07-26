<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				status,
				error
			}
		};
	}
</script>

<script lang="ts">
	import BgText from '$lib/BGText.svelte';
import ButtonLink from '$lib/ButtonLink.svelte';
	export let status, error;
</script>

<BgText text={status} size="30vw" />
<section id="error">
	<h1>Yikes, an error!</h1>
	<span>{error.message}</span>
    <ButtonLink href='/'>Go Home</ButtonLink>
</section>

<style lang="scss">
    @import '../variables';
	#error {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		h1 {
			font-size: 3vw;
			margin: 1rem 0;
            @include responsiveFont(3rem, 2rem)
		}
		span {
			display: inline-block;
			font-size: 2vw;
            font-style: italic;
            font-weight: lighter;
            @include responsiveFont(2.5rem, 1.25rem)
		}
	}
</style>
