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
        await validateFields(["location_id"])
    })
</script>

<h1>Fault location – location ID</h1>

<Separator size={40} />

<InputField name={'remember-choice'} type="checkbox">
    Remember my choice for next time
</InputField>

<Separator size={40} />

<Button href="./describe-fault" disabled={$errors["location_id"] !== ""}>Next</Button>
