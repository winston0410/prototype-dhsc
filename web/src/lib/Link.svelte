<script lang="ts" context="module">
      import { getContext } from 'svelte';
      import FindLocationId from './modal/FindLocationId.svelte';
      const { open } = getContext('simple-modal');
</script>

<script lang="ts">
	export let href = "";
	export let isExternal = true;
	export let modalName = '';

	const handleClick = (e) => {
        open(FindLocationId, {})
    };
</script>

{#if href !== ""}
<a
	class="govuk__link"
	{href}
	rel={isExternal ? 'exteral' : null}
>
	<span>
		<slot />
	</span>
</a>
{:else}
<button
	class="govuk__link"
    type="button"
	on:click|preventDefault={handleClick}
>
	<span>
		<slot />
	</span>
</button>
{/if}

<style lang="scss">
	.govuk__link {
		color: #005eb8;
        text-decoration: underline;
        background: none;
	}
</style>
