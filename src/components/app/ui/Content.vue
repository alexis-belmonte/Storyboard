<script lang="ts">
import Palettable from './Palettable.vue';

export default {
    extends: Palettable
}
</script>

<template>
    <span class="container-content" :style="palettableStyle">
        <slot />
    </span>
</template>

<style scoped>
.container-content {
    font-family: var(--sb-normal-font);
    
    color: var(--sb-dark-color);
}

.container-content:deep(p) {
    margin: 0;
    margin-top: var(--sb-smaller-spacing);
}

.container-content:deep(p):first-child {
    margin-top: 0;
} 

.container-content:deep(b) {
    color: rgb(var(--pt-color));
}

.container-content:deep(u) {
    color: rgb(var(--pt-color));
    text-decoration-color: rgb(var(--pt-color));
}
</style>
