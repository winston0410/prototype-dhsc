<script lang="ts" context="module">
	import Button from '$lib/Button.svelte';
	import InputField from '$lib/InputField.svelte';
	import Separator from '$lib/Separator.svelte';
	import { errors, validateFields } from '$lib/form';
	import { onMount } from 'svelte';
</script>

<script lang="ts">
</script>

<h1>Upload a photo</h1>

<Separator size={20} />

<InputField type="file" name="photo">
	<h2 class="govuk__text">Upload a photo (optional)</h2>
	<p class="govuk__remarks">
		Upload one or more photos showing the fault, the equipment and or the location
	</p>
	<Separator size={20} />
</InputField>

<Separator size={40} />

<Button href="./contact-details" disabled={false}>Next</Button>

<style lang="scss">
</style>
