<script lang="ts" context="module">
	import Button from '$lib/Button.svelte';
	import SummaryField from '$lib/SummaryField.svelte';
	import Separator from '$lib/Separator.svelte';
	import { errors, handleSubmit, validateFields, form } from '$lib/form';
	import { onMount } from 'svelte';
	import dummySiteData from '$lib/dummy';
</script>

<script lang="ts">
	onMount(async () => {
		await validateFields([
			'name',
			'email',
			'phone',
			'photo',
			'location_id',
			'description',
            'restricted_access_description',
			'asset_id'
		]);
	});

	//  const getLabelById = (id: string, data) => {
		//  // TODO Handle error/ redirect when the form is not completed
		//  if (!id) return '';
		//  const item = data.find((x) => x.value === id);
		//  return item.label;
	//  };
    //  getLabelById($form['location_id'], dummySiteData)
</script>

<!-- TODO Make the following fields dynamic with $form  -->
<h1>Your fault report</h1>

<Separator size={12} />

<SummaryField
	name={'Site'}
	value={"Site A"}
	href={'./fill-location-id'}
/>

<Separator size={12} />

<SummaryField
	name={'Ward, clinic, department or area description'}
	value={$form.description}
	href={'./fill-location-id'}
/>

<Separator size={12} />

<SummaryField name={'Room number or description'} value={$form.description} href={'./fill-location-id'} />

<Separator size={12} />

<SummaryField name={'Photo'} value={$form.photo || "N/A"} href={'./upload-photo'} />

<Separator size={12} />

<form on:submit={handleSubmit}>
	<Separator size={20} />
	<Button type="submit" disabled={!Object.values($errors).every((x) => x === '')}>Submit</Button>
	<Separator size={20} />
	<Button href="/email" disabled={!Object.values($errors).every((x) => x === '')}>Submit Via Email</Button>
</form>
