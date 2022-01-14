<script lang="ts" context="module">
    import Button from "$lib/Button.svelte"
    import Link from '$lib/Link.svelte'
    import Separator from '$lib/Separator.svelte'
</script>

<script lang="ts">
</script>

<h1>Prototype start</h1>
<p>This is a prototype intended to demonstrate a user flow of reporting a fault or requesting a service in an NHS trust.</p>
<Link href="">
    Feedback survey
</Link>
<Separator size={68}/>

<p>This prototype adds access restriction information, adds help pages to assist locating asset tags and room numbers, and changes the contact information questions so it’s clear it doesn’t have to be the reporter’s details</p>
<Separator size={24}/>

<Button href="/report-fault">
    Report a fault
</Button>
