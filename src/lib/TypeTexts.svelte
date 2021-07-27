<script lang="ts">
	export let typeArr: Array<String>;
	import { onMount } from 'svelte';

	const delay = (n) => new Promise((resolve) => setTimeout(resolve, n));
	const ld = 3250;
	const td = 60;
	const count = typeArr.length;
	let n = 0;
	onMount(async () => {
		const typeElem = document.getElementById('typewrite');
		while (true) {
			let word = typeArr[n];
			let wordLength = word.length;
			for (let i = 0; i <= wordLength; i++) {
				typeElem.innerHTML = word.slice(0, i);
				await delay(td);
			}
			await delay(ld);
			for (let i = wordLength - 1; i >= 0; i--) {
				typeElem.innerHTML = word.slice(0, i);
				await delay(td);
			}
			if (++n >= count) n = 0;
		}
	});
</script>

<div class="typewrite-container">
	<span id="typewrite" /><span class="typewrite-cursor">|</span>
</div>

<style lang="scss">
	span {
		color: white;
		font-weight: bold;
		display: inline-block;
	}
	.typewrite-cursor {
		font-style: normal;
		transform: translate(-2px, -5px) scale(1.25);
		animation: altFade 1s ease infinite;
	}
	@keyframes altFade {
		from {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
</style>
