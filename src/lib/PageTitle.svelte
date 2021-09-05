<script lang="ts">
</script>


<div>
<h1><slot /></h1>
</div>


<style lang="scss">
    div {
        margin: 1rem 0;
    }
	h1 {
		text-align: center;
        font-size: 6rem;
		transform: rotate3d(3, 2, 0, 25deg);
        margin: 0;
        // margin: 1rem 0 ;
	}
</style>