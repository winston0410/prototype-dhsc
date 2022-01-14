<script lang="ts">
    export let size: number = 20;
    export let horizontal = true;

    let direction = horizontal ? "height" : "width"
</script>

<div style={`${direction}: ${size}px`}></div>
