<script lang="ts" context="module">
	import Select from 'svelte-select';
	import { validateField } from '$lib/form';
</script>

<script lang="ts">
	type SelectItem = {
		value: string;
		label: string;
	};

	export let items: Array<SelectItem>;
	export let placeholder: string;
	export let name: string;
	// NOTE The observable for tracking state
	export let form: any;

	async function handleSelect(event: CustomEvent) {
		const { value, label } = event.detail;

		form.update((prev) => {
			return {
				...prev,
				[name]: value
			};
		});

        await validateField(name)
	}

	const handleClear = (event: CustomEvent) => {
        form.update((prev) => {
            return {
                ...prev,
                [name]: ""
            }
        })
	};
</script>

<label class="govuk__select__container">
	<span class="govuk__label"><slot /></span>
	<Select
		{items}
        on:select
        on:clear
		on:select={handleSelect}
		on:clear={handleClear}
		{placeholder}
		containerClasses={'govuk__select'}
	/>
</label>

<style lang="scss">
	// FIXME Prevent unused class from being removed and remove !important
	:global(.govuk__select input) {
		// @include input-field;
		display: block !important;
		border: 2px solid $black !important;
		background: $white !important;
        cursor: text !important;
	}

	:global(.govuk__select .item, .govuk__select .clearSelect) {
		cursor: pointer;
	}

	:global(.govuk__select .selectedItem) {
		color: $black;
		z-index: 99;
	}
</style>
