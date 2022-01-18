<script lang="ts" context="module">
	import Button from '$lib/Button.svelte';
	import Link from '$lib/Link.svelte';
	import InputField from '$lib/InputField.svelte';
	import Separator from '$lib/Separator.svelte';
	import { handleInput } from '$lib/helper';
	import { formStore } from '$lib/store';
</script>

<script lang="ts">
</script>

<h1>Report sent</h1>
<Separator size={16} />
<p>Your report has been sent, you should expect an update within 2 working days.</p>
<Separator size={20} />
<p>A copy of your report has been sent to martin@mysociety.org</p>
<Separator size={30} />
<Button>Request a service in the same place</Button>
<Separator size={30} />
<Button>Make another report</Button>
<Separator size={30} />
<Button href="./debug">Debug JSON output</Button>
<Separator size={60} />
<ul class="govuk__link__list" role="list">
	<li>
		<Link href="/">Feedback survey</Link>
	</li>
	<li>
		<Link href="/">Back to home</Link>
	</li>
</ul>

<style lang="scss">
	.govuk__link__list {
		padding: 0;
		margin: 0;
	}
</style>
