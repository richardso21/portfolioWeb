<script lang="ts">
	export let typeArr: Array<String>;
	import { onMount } from 'svelte';
	import Typewriter from 'typewriter-effect/dist/core';

	onMount(() => {
		const typeElem = document.getElementById('typewrite');
		const delay = 4000;
		const typewriter = new Typewriter(typeElem, {
			loop: true,
			delay: 70,
			deleteSpeed: 20
		});
		typeArr.forEach((str) => {
			typewriter.typeString(str).pauseFor(delay).deleteChars(str.length);
		});
        typewriter.start();
	});
</script>

<span id="typewrite" />

<style lang="scss">
	#typewrite {
        display: block;
		color: white;
		font-weight: bold;
	}
</style>
