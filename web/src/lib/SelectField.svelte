<script lang="ts" context="module">
	import Select from 'svelte-select';
</script>

<script lang="ts">
	type SelectItem = {
		value: string;
		label: string;
	};

	export let items: Array<SelectItem>;

	function handleSelect(event) {
		console.log('selected item', event.detail);
		// .. do something here 🙂
	}
</script>

<Select {items} on:select={handleSelect} />
