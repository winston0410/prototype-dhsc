<slot />

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
        outline: 0;
        border: 0;
    }
        
    :global(input, textarea){
        appearance: none;
        outline: none;
    }
</style>
