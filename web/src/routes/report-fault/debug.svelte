<script lang="ts" context="module">
	import { form } from '$lib/form';
</script>

<script lang="ts">
	let result = JSON.stringify($form);

	const toMaximo = ({ name, email, phone, asset_id, location_id, description }) => {
		return {
            reportedbyname: name,
            reportedemail: email,
            affectedphone: phone,
            Location: location_id,
            assetsiteID: asset_id,
            globalticketclass_description: description,
            //  assetnum
            //  affecteddate
        };
	};
</script>

<div>
	<h2>Data collected from form</h2>
	<span class="json-output">{result}</span>
</div>

<div>
	<h2>Data transformed for request to Maximo</h2>
	<span class="json-output">{JSON.stringify(toMaximo($form))}</span>
</div>

<style lang="scss">
    .json-output{
        display: block;
        width: 100%;
        padding: 20px;
    }
</style>
