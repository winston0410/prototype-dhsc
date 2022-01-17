<script lang="ts" context="module">
import storage from 'svelte-use-local-storage'
</script>

<script lang="ts">
	export let type: string;
	export let name: string;
</script>

{#if type === "text"}
<label>
	<span class="govuk__label">
        <slot />
    </span>
	<input class="govuk__input" {type} {name} use:storage={name} on:input/>
</label>
{:else if type === "checkbox"}
<label class="govuk__checkbox__container">
	<span class="govuk__label">
        <span class="govuk__checkbox__label">
            <slot />
        </span>
    </span>
	<input class="govuk__checkbox" {type} {name} use:storage={name} on:input/>
</label>
{:else if type === "textarea"}
<label class="govuk__checkbox__container">
	<textarea class="govuk__textarea" {type} {name} use:storage={name} on:input/>
</label>
{/if}

<style lang="scss">
    @mixin input-field {
        display: block;
        border: 2px solid $black;
        background: $white;
    }
    
    .govuk__label{
        display: block;
    }
        
    .govuk__checkbox__label{
        margin-left: 12px;
    }

    .govuk__input{
        @include input-field;
        width: 100%;
        height: 40px;
        padding: 12px;
    }

    .govuk__checkbox__container{
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        justify-content: flex-end;
        cursor: pointer;
    }
        
    .govuk__checkbox {
        @include input-field;
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
        
    .govuk__checkbox:checked {
        background: #be132d;
    }

    .govuk__textarea {
        @include input-field;
        width: 100%;
        resize: none;
        padding: 12px;
        height: 225px;
    }
</style>
