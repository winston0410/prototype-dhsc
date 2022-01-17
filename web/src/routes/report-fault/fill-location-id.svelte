<script lang="ts" context="module">
	import Button from '$lib/Button.svelte';
    import InputField from '$lib/InputField.svelte'
    import Separator from '$lib/Separator.svelte'
    import { handleInput } from '$lib/helper'
    import { formStore } from '$lib/store'
</script>

<script lang="ts">
</script>

<h1>Fault location – location ID</h1>

<InputField name={"location-id"} type="text" on:input={handleInput(formStore)}>
    Location ID
</InputField>

<Separator size={40}/>

<InputField name={"restricted-location"} type="checkbox" on:input={handleInput(formStore)}>
    Access to this location is restricted
</InputField>

<Separator size={40}/>

<Button href="./describe-fault">Next</Button>
