<script lang="ts">
export default {}
</script>

<template>
    <div class="container">
        <slot />
    </div>
</template>

<style scoped>
.container {
    display: grid;

    gap: calc(var(--sb-spacing) * 2);

    grid-template-columns: repeat(auto-fit, minmax(300pt, 1fr));
}
</style>