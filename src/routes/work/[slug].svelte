<script context="module">
	import { Client } from './../../../utils/client';

	export async function load({ page }) {
		const doc = await Client.getByUID('works_preview', page.params.slug, {});
		const workDetails = await Client.getByID(doc.data.work_link.id, {});
		return {
			props: {
				data: doc.data,
				workDetails: workDetails.data
			}
		};
	}
</script>

<script lang="ts">
	export let data, workDetails;
	console.log(data);
	console.log(workDetails);
</script>

<style lang="scss">
</style>
