<script lang="ts" context="module">
	import Button from '$lib/Button.svelte';
    import SummaryField from '$lib/SummaryField.svelte';
	import Separator from '$lib/Separator.svelte';
	import { errors, handleSubmit, validateFields, form } from '$lib/form';
	import { onMount } from 'svelte';
    import dummy from '$lib/dummy'
</script>

<script lang="ts">
	onMount(async () => {
		await validateFields([
			'name',
			'email',
			'phone',
			'location_id',
			'description',
			'asset_id'
		]);
	});

    const getLabelById = (id: string) => {
        // TODO Handle error/ redirect when the form is not completed
        if(!id) return
        const item = dummy.find(x => x.id === id)
        return item.label
    }
</script>

<!-- TODO Make the following fields dynamic with $form  -->
<h1>Your fault report</h1>

<Separator size={12} />

<SummaryField name={"Site"} value={getLabelById($form["location_id"])} href={"./fill-location-id"}/>

<Separator size={12} />

<SummaryField name={"Ward, clinic, department or area description"} value={"abc"} href={"./fill-location-id"}/>

<Separator size={12} />

<SummaryField name={"Room number or description"} value={"abc"} href={"./fill-location-id"}/>

<Separator size={12} />

<SummaryField name={"Photo"} value={"abc"} href={"./upload-photo"}/>

<Separator size={12} />

<form on:submit={handleSubmit}>
    <Separator size={20} />
	<Button type="submit" disabled={!Object.values($errors).every(x => x === "")}>Submit</Button>
</form>
