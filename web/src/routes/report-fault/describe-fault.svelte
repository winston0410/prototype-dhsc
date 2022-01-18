<script lang="ts" context="module">
	import Button from '$lib/Button.svelte';
	import InputField from '$lib/InputField.svelte';
	import Separator from '$lib/Separator.svelte';
	import { errors, validateFields } from '$lib/form';
    import { onMount } from 'svelte';
</script>

<script lang="ts">
    onMount(async () => {
        await validateFields(["description"])
    })
</script>

<h1>Describe the fault</h1>

<Separator size={20} />

<!-- FIXME textarea is buggy when using on:input, not sure why yet  -->
<InputField
	type="textarea"
	name="description"
>
	<h2 class="govuk__text">Describe the fault</h2>
	<p class="govuk__remarks">
		Give an accurate description of the fault, the equipment and how it is affecting your work
	</p>

	<Separator size={20} />
</InputField>

<Separator size={40} />

<Button href="./fitting-details" disabled={$errors["description"] !== ""}>Next</Button>

<style lang="scss"></style>
