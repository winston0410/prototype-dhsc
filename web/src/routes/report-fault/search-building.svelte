<script lang="ts" context="module">
	import Button from '$lib/Button.svelte';
	import InputField from '$lib/InputField.svelte';
	import SelectField from '$lib/SelectField.svelte';
	import Separator from '$lib/Separator.svelte';
	import { form, errors, validateFields } from '$lib/form';
	import { onMount } from 'svelte';
    import { dummyBuildingData } from '$lib/dummy'
</script>

<script lang="ts">
	onMount(async () => {
		await validateFields(['building_id']);
	});
</script>

<h1>Fault location – building</h1>

<Separator size={40} />

<SelectField
	items={dummyBuildingData}
	placeholder={'Choose a building'}
	name={'building_id'}
    {form}
>
	Building
</SelectField>

<Separator size={40} />

<InputField name={'floor_id'} type="number">Floor number</InputField>

<Separator size={40} />

<InputField name={'remember-choice'} type="checkbox">Remember my choice for next time</InputField>

<Separator size={40} />

<!-- TODO building_id is optional right now  -->
<Button href="./describe-fault" disabled={$errors['building_id'] !== ''}>Next</Button>
