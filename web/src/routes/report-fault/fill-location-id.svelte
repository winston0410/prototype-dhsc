<script lang="ts" context="module">
	import Button from '$lib/Button.svelte';
	import InputField from '$lib/InputField.svelte';
	import Separator from '$lib/Separator.svelte';
	import { errors, validateFields } from '$lib/form';
    import { onMount } from 'svelte';
</script>

<script lang="ts">
    onMount(async () => {
        await validateFields(["location_id"])
    })
</script>

<h1>Fault location – location ID</h1>

<InputField
	name={'location_id'}
	type="text"
>
	Location ID
</InputField>

<Separator size={40} />

<InputField name={'restricted-location'} type="checkbox">
	Access to this location is restricted
</InputField>

<Separator size={40} />

<Button href="./describe-fault" disabled={$errors["location_id"] !== ""}>Next</Button>
