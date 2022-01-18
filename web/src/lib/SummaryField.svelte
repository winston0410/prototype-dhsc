<script lang="ts" context="module">
    import Link from '$lib/Link.svelte'
	import Separator from '$lib/Separator.svelte';
</script>

<script lang="ts">
    export let name: string;
    export let value: string;
    export let href: string;
</script>

<section class="govuk__summary__field">
    <span class="govuk__summary__field__title">{name}</span>
    <span class="govuk__summary__field__value">{value}</span>
    <Separator size={12} />
    <Link href={href} isExternal={false}>Change</Link>
    <Separator size={12} />
    <span class="govuk__summary__field__divider"></span>
</section>

<style lang="scss">
    .govuk__summary__field{
        display: flex;
        flex-direction: column;
    }
    
    .govuk__summary__field__title{
        font-weight: 700;
    }

    .govuk__summary__field__value{

    }

    .govuk__summary__field__divider{
        width: 100%;
        height: 1px;
        background: hsla(203, 11%, 86%, 1);
    }
</style>
