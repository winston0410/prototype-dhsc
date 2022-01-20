<script lang="ts" context="module">
	import Button from '$lib/Button.svelte';
	import InputField from '$lib/InputField.svelte';
	import SelectField from '$lib/SelectField.svelte';
	import Separator from '$lib/Separator.svelte';
	import { errors, validateFields, form } from '$lib/form';
	import { onMount } from 'svelte';
</script>

<script lang="ts">
	onMount(async () => {
		await validateFields(['service_description']);
	});
</script>

<h1>What service is required?</h1>

<Separator size={20} />

<SelectField
	items={[
		{
			value: 'clearning',
			label: 'Cleaning'
		}
	]}
	placeholder="Choose service"
    name="required_service"
    {form}
>
	Service
</SelectField>

<Separator size={32} />

<InputField type="textarea" name="service_description">
	<h2 class="govuk__text">Describe the service</h2>
	<p class="govuk__remarks">Give accurate details of the service required</p>

	<Separator size={20} />
</InputField>

<Separator size={40} />

<Button href="./request-service-summary" disabled={$errors['service_description'] !== ''}>Next</Button>

<style lang="scss"></style>
