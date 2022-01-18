<script lang="ts" context="module">
	import Button from '$lib/Button.svelte';
	import InputField from '$lib/InputField.svelte';
	import Separator from '$lib/Separator.svelte';
	import { errors, validateFields } from '$lib/form';
	import { onMount } from 'svelte';
</script>

<script lang="ts">
	onMount(async () => {
		await validateFields(['name', 'email', 'phone']);
	});
</script>

<h1>Contact details</h1>

<InputField name={'name'} type="text">Contact name</InputField>

<Separator size={30} />

<InputField name={'email'} type="email">
	Contact email
	<p class="govuk__remarks">Where we can send confirmation and updates as the report progresses</p>
	<Separator size={20} />
</InputField>

<Separator size={30} />

<InputField name={'phone'} type="tel">
	Phone number
	<p class="govuk__remarks">
		If we need to get in touch for more information, include extension number
	</p>
	<Separator size={20} />
</InputField>

<Separator size={30} />

<Button
	href="./summary"
	disabled={$errors['name'] !== '' || $errors['email'] !== '' || $errors['phone'] !== ''}
	>Next</Button
>

<style lang="scss"></style>
