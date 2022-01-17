<script lang="ts" context="module">
	import Button from '$lib/Button.svelte';
	import InputField from '$lib/InputField.svelte';
	import Separator from '$lib/Separator.svelte';
	import { handleInput } from '$lib/helper';
	import { formStore } from '$lib/store';
</script>

<script lang="ts">
</script>

<h1>Describe the fault</h1>

<h2>Describe the fault</h2>
<p>Give an accurate description of the fault, the equipment and how it is affecting your work</p>

<Separator size={20}/>

<InputField type="textarea" name="description" on:input={handleInput(formStore)}/>

<Separator size={40}/>

<Button href="./describe-fault">Next</Button>
