<script lang="ts">
	export let x, y, pressed;
</script>

<div id="pointer" style="transform: translate({x}px, {y}px)">
	<span id="dot" class:pressed/>
	<!-- <span id="dot" class:pressed /> -->
</div>

<style lang="scss">
	#pointer {
		height: 80px;
		width: 80px;
		top: 0;
		left: 0;
		margin-left: -40px;
		margin-top: -40px;
		pointer-events: none;
		position: fixed;
		z-index: 10;
		mix-blend-mode: difference;
		transform: translate(-100px, -100px);
		transition: all 0.05s ease;
		#dot {
			border-radius: 100%;
			background-color: white;
			display: block;
			height: 80px;
			width: 80px;
			transform: scale(0.25);
			transition: all 0.35s cubic-bezier(0.075, 0.82, 0.165, 1);
		}
	}
	:global(.pressed) {
		transform: scale(1.25) !important;
	}
	// :global(.hovered) {
	// 	background-color: lightgreen !important;
	// }
</style>
