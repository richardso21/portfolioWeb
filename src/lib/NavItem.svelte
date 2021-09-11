<script lang="ts">
	export let href: string;
</script>

<div class="anim-container">
	<div class="nav-item-parent">
		<a class="nav-item" {href}>
			<slot />
		</a>
	</div>
</div>

<style lang="scss">
	.nav-item-parent {
		pointer-events: all;
		box-sizing: border-box;
		text-align: center;
		.nav-item {
			color: black;
			text-decoration: none;
			font-size: 3vw;
			font-weight: 700;
		}
		.nav-item::before {
			content: '';
			position: absolute;
			display: block;
			width: 100%;
			height: 2px;
			bottom: 0;
			left: 0;
			background-color: black;
			transform: scaleX(0);
			transform-origin: top left;
			transition: transform 0.3s ease;
		}
		.nav-item:hover::before {
			transform: scaleX(1);
		}
		transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
	}
	.nav-item-parent:hover {
		transform: rotate3d(-3, 4, 0, 25deg) scale(1.5);
	}
</style>
