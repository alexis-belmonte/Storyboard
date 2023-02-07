<script setup lang="ts">
</script>

<template>
    <div class="container">
        <slot />
    </div>
</template>

<style scoped>
.container {
    display: grid;

    gap: 8pt;

    grid-template-columns: repeat(auto-fit, minmax(300pt, 1fr));
}

</style>