<script lang="ts" context="module">
	import Button from '$lib/Button.svelte';
	import Link from '$lib/Link.svelte';
    import Separator from '$lib/Separator.svelte';
</script>

<script lang="ts">
</script>

<h1>Fault location – location ID</h1>

<p>Do you know the location ID?</p>

<p>
	A way of uniquely identifying a location in your trust, sometimes called a PFI number. Help <Link>finding location IDs</Link>
</p>

<Separator size={40}/>

<Button href="./fill-location-id">Yes</Button>

<Separator size={35}/>

<Button href="./search-location-id">No</Button>
