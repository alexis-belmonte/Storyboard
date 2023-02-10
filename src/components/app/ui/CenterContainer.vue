<script lang="ts">
export default {};
</script>

<template>
    <div class="container">
        <div class="object">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;

    width: 100vw;
    height: 100vh;

    align-items: center;
    justify-content: center;
}

.container > .object {
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
}
</style>