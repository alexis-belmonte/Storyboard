<script lang="ts">
export default {};
</script>

<template>
    <div class="grid-container">
        <slot />
    </div>
</template>

<style scoped>
.grid-container {
    display: grid;

    gap: calc(var(--sb-spacing) * 2);

    grid-template-columns: repeat(auto-fit, minmax(250pt, 1fr));
}
</style>
