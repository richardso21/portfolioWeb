<script lang="ts">
	export let name;
</script>

<div id="styled-name">
	<h1 class="name-layer">{name}</h1>
	<p class="name-layer">{name}</p>
	<p class="name-layer">{name}</p>
</div>

<style lang="scss">
	@import '../variables';

	$offset2: 6px;
	$offset3: 12px;
	$padding: 2rem;
	#styled-name {
		font-style: normal;
		position: relative;
		padding: $padding;

		text-shadow: 0px 0px 2px white;
		* {
			transform: rotate3d(2, 3, 0, 30deg);
			font-weight: bold;
			font-size: 7.5vw;
			margin: 0.5rem 0;
		}
		:nth-child(1) {
			color: #555;
			position: relative;
			z-index: 1;
			animation: expandLayer1 2s ease-in-out 0s;
		}
		:nth-child(2) {
			color: #bbb;
			position: absolute;
			top: calc(2rem - #{$offset2});
			left: calc(2rem + #{$offset2});
			z-index: 2;
			animation: expandLayer2 2s ease-in-out 0s;
		}
		:nth-child(3) {
			color: white;
			position: absolute;
			top: calc(2rem - #{$offset3});
			left: calc(2rem + #{$offset3});
			z-index: 3;
			animation: expandLayer3 2s ease-in-out 0s;
		}
		@include layerExpandRotate(0, 0, 'expandLayer1');
		@include layerExpandRotate($offset2, $padding, 'expandLayer2');
		@include layerExpandRotate($offset3, $padding, 'expandLayer3');
	}
</style>
