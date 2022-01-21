<script lang="ts" context="module">
	import { form } from '$lib/form';
	import { add, format } from 'date-fns';
	import { v4 as uuidv4 } from 'uuid';
	import DescribeFault from './describe-fault.svelte';
</script>

<script lang="ts">
	let result = JSON.stringify($form, null, 4);

	const toMaximo = ({ name, email, phone, asset_id, location_id, description }) => {
		return {
			reportedbyname: name,
			reportedemail: email,
			affectedphone: phone,
			Location: location_id,
			assetsiteID: asset_id,
			globalticketclass_description: description
			//  assetnum
			//  affecteddate
		};
	};

	const toMaximoResponse = ({ name, email, phone, asset_id, location_id, description }) => {
		return {
			affecteddate: format(new Date(), 'dd/MM/yyyy'),
			historyflag: false,
			reportedbyname: name,
			reportedemail: email,
			reportedpriority: Math.random(),
			impact: Math.random(),
			ticketuid: uuidv4(),
			globalticketclass_description: description,
			targetcontactdate: format(
				add(new Date(), {
					days: 2
				}),
				'dd/MM/yyyy'
			),
			assetsiteID: asset_id,
			externalrecid: uuidv4(),
			'...': '...'
		};
	};
</script>

<div class="debug-container">
	<h2>Data collected from form</h2>
	<span class="json-output">{result}</span>

	<h2>Data transformed for request to Maximo</h2>
	<span class="json-output">{JSON.stringify(toMaximo($form), null, 4)}</span>

	<h2>Anticipated successful response from Maximo</h2>
	<h3>Status code: 200</h3>
	<span class="json-output">{JSON.stringify(toMaximoResponse($form), null, 4)}</span>
</div>

<style lang="scss">
	.json-output {
		line-break: anywhere;
		display: block;
		width: 100%;
		padding: 20px;
	}
</style>
