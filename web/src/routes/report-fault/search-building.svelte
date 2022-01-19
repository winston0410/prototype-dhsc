<script lang="ts" context="module">
	import Button from '$lib/Button.svelte';
	import InputField from '$lib/InputField.svelte';
	import SelectField from '$lib/SelectField.svelte';
	import Separator from '$lib/Separator.svelte';
	import { errors, validateFields } from '$lib/form';
	import { onMount } from 'svelte';
</script>

<script lang="ts">
	onMount(async () => {
		await validateFields(['building_id']);
	});

    let shouldRemember = false;
</script>

<h1>Fault location – building</h1>

<Separator size={40} />

<SelectField items={[{ value: '', label: 'check' }]} placeholder={'Choose a building'}>
	Building
</SelectField>

<Separator size={40} />

<InputField name={'floor_number'} type="number">Floor number</InputField>

<Separator size={40} />

<InputField name={'remember-choice'} type="checkbox">Remember my choice for next time</InputField>

<Separator size={40} />

<Button href="./describe-fault" disabled={false}>Next</Button>
<!--  <Button href="./describe-fault" disabled={$errors['location_id'] !== ''}>Next</Button>  -->
