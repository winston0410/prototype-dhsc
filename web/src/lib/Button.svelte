<!-- REF https://www.joshwcomeau.com/animation/3d-button/  -->
<!--  Good usage on translate: transformY  -->
<script lang="ts" context="module">
</script>

<script lang="ts">
	export let href: string;
</script>

{#if href}
	<a {href} class="govuk__button" on:click>
		<span class="govuk__button__text">
			<slot />
		</span>
	</a>
{:else}
	<button type="button" class="govuk__button" on:click>
		<span class="govuk__button__text">
			<slot />
		</span>
	</button>
{/if}

<style lang="scss">
	.govuk__button {
		display: block;
		width: fit-content;
		color: #ffffff;
		border-radius: 5px;
		font-weight: 700;
		text-decoration: none;
		user-select: none;
		background-color: #000000;
	}

	.govuk__button__text {
		display: block;
		padding: 12px 26px;
		border-radius: 5px;
		background-color: #007f3b;
		transform: translateY(-4px);
	}
</style>
