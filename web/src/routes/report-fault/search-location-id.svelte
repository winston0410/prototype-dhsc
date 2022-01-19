<script lang="ts" context="module">
	import Button from '$lib/Button.svelte';
	import InputField from '$lib/InputField.svelte';
	import SelectField from '$lib/SelectField.svelte';
	import Separator from '$lib/Separator.svelte';
	import { form, errors, validateFields } from '$lib/form';
	import { onMount } from 'svelte';
	import dummy from '$lib/dummy';
	import { locationIdPersistance } from '$lib/persistance';
</script>

<script lang="ts">
	onMount(async () => {
		await validateFields(['location_id']);
	});

	// TODO Migrate to bind:checked
	const handleChange = (e: Event) => {
		const elem = e.target as HTMLInputElement;
		const value = elem.checked;
		locationIdPersistance.set(value);
	};
</script>

<h1>Fault location – location ID</h1>

<Separator size={40} />

<SelectField items={dummy} placeholder={'Choose a site'} name={'location_id'} {form}>
	Site
</SelectField>

<Separator size={40} />

<InputField name={'remember-choice'} type="checkbox" on:change={handleChange}
	>Remember my choice for next time</InputField
>

<Separator size={40} />

<Button href="./search-building" disabled={$errors['location_id'] !== ''}>Next</Button>
