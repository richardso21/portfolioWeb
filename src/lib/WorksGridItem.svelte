<script lang="ts">
	export let data, href: string;
</script>

<div class="works-grid-item item-parent">
	<a {href}>
		<div class="card-container">
			<img class="bg-img" src={data.image.url} alt="" />
		</div>
		<span class="reveal card-tech">{data.tech}</span>
		<span class="reveal card-date">{data.date}</span>
		<h2 class="card-title">{data.title}</h2>
	</a>
</div>

<style lang="scss">
	.item-parent {
		opacity: 0;
		margin: 2.5rem;
		a {
			text-decoration: none;
			color: white;
		}
	}
	* {
		transition: all 0.75s cubic-bezier(0.075, 0.82, 0.165, 1);
	}
	.card-container {
		height: 20rem;
		position: relative;
		overflow: hidden;
		.bg-img {
			height: 100%;
			width: 100%;
			object-fit: cover;
			background-color: rgb(20, 20, 20);
		}
	}
	.reveal {
		position: absolute;
		font-size: 1rem;
		opacity: 0;
		z-index: -1;
		color: rgb(200, 200, 200);
	}
	.card-tech {
		top: 4.5%;
		left: 0;
	}
	.card-date {
		top: 0;
		left: 91%;
		writing-mode: vertical-lr;
	}
	.card-title {
		font-size: 2rem;
		margin: 0;
	}
	.item-parent:hover {
		.bg-img {
			transform: rotate3d(-3, 2, 0, 25deg) scale(1.5);
		}
		.reveal {
			opacity: 1;
		}
		.card-tech {
			top: -6.5%;
		}
		.card-date {
			left: 101%;
		}
	}
</style>
