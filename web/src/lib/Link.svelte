<script lang="ts" context="module">
</script>

<script lang="ts">
	export let href: string;
    export let isExternal = true;
</script>

<a class="govuk__link" {href} rel={isExternal ? "exteral" : null}>
    <span>
        <slot />
    </span>
</a>


<!--  <a {href} class="govuk__link" rel="exteral">  -->
<style lang="scss">
	.govuk__link {
		color: #005EB8;
	}
</style>
