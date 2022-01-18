<script lang="ts" context="module">
	import Button from '$lib/Button.svelte';
	import InputField from '$lib/InputField.svelte';
	import Separator from '$lib/Separator.svelte';
	import Link from '$lib/Link.svelte';
	import { errors, validateFields } from '$lib/form';
    import { onMount } from 'svelte'
</script>

<script lang="ts">
    onMount(async () => {
        await validateFields(["asset_id"])
    })
</script>

<h1>Equipment or fitting details</h1>

<Separator size={20} />

<InputField type="text" name="asset_id">
	<h2 class="govuk__text">Asset ID</h2>
	<p class="govuk__remarks">
		If there is a visible asset tag on the equipment enter it below. Get <Link href=""
			>help finding an asset tag</Link
		>
	</p>

	<Separator size={20} />
</InputField>

<Separator size={40} />

<Button href="./upload-photo" disabled={$errors["asset_id"] !== ""}>Next</Button>

<style lang="scss">
</style>
