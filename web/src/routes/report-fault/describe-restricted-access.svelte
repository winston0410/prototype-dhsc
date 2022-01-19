<script lang="ts" context="module">
	import Button from '$lib/Button.svelte';
	import InputField from '$lib/InputField.svelte';
	import Separator from '$lib/Separator.svelte';
	import { errors, validateFields } from '$lib/form';
    import { onMount } from 'svelte';
</script>

<script lang="ts">
    onMount(async () => {
        await validateFields(["restricted_access_description"])
    })
</script>

<h1>Restricted access</h1>

<Separator size={20} />

<!-- FIXME textarea is buggy when using on:input, not sure why yet  -->
<InputField
	type="textarea"
	name="description"
>
	<h2 class="govuk__text">Access restriction details</h2>
	<p class="govuk__remarks">
        Describe how to get access to the location, and when the best times to come are
	</p>

	<Separator size={20} />
</InputField>

<Separator size={40} />

<Button href="/" disabled={$errors["restricted_access_description"] !== ""}>Next</Button>

<style lang="scss"></style>
