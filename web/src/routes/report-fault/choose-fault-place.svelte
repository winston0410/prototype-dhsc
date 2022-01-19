<script lang="ts" context="module">
	import Button from '$lib/Button.svelte';
	import InputField from '$lib/InputField.svelte';
	import SelectField from '$lib/SelectField.svelte';
	import Separator from '$lib/Separator.svelte';
	import Link from '$lib/Link.svelte';
	import { errors, validateFields } from '$lib/form';
	import { onMount } from 'svelte';
</script>

<script lang="ts">
	//  onMount(async () => {
	//  await validateFields(['location_id']);
	//  });
</script>

<h1>Fault location – place</h1>

<Separator size={40} />

<p class="govuk__remarks">
	Reporting a fault at <b>Site A, building B</b>(<Link href="/">change</Link>)
</p>

<Separator size={40} />

<Button href="./search-building" disabled={false}>Next</Button>

<style lang="scss"></style>
