<script lang="ts" context="module">
    import 'modern-css-reset'
    import "@fontsource/karla"
    import Logo from '$lib/Logo.svelte'
</script>

<script lang="ts">
</script>

<header class="govuk__header">
    <a href="/">
        <Logo />
    </a>
    <span class="govuk__header__title">Report a fault</span>
</header>
<div class="govuk__shell">
    <slot />
</div>

<style lang="scss">
    :global(html){
        font-size: 16px;
    }
        
    :global(body){
        font-family: "Karla";
        color: $black;
    }
    :global(button){
        appearance: none;
        padding: 0;
        margin: 0;
    }
        
    :global(input, textarea){
        appearance: none;
        outline: none;
    }
        
    .govuk__header{
        background: #005EB8;
        color: $white;
        display: flex;
        align-items: center;
        padding: 16px;
        height: $headerHeight;
        max-height: $headerHeight;
    }
    .govuk__header__title{
        margin-left: 12px;
        font-weight: 700;
    }
    .govuk__shell{
        background: #F0F4F5;
        padding: 16px;
        min-height: calc(100vh - $headerHeight);
    }
</style>
