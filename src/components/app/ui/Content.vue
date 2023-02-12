<script lang="ts">
import Palettable from './Palettable.vue';

export default {
    extends: Palettable
}
</script>

<template>
    <span class="content" :style="palettableStyle">
        <slot />
    </span>
</template>

<style scoped>
.content {
    font-family: var(--sb-normal-font);
    
    color: var(--sb-dark-color);
}

.content:deep(p) {
    margin: 0;
    margin-top: var(--sb-smaller-spacing);
}

.content:deep(p):first-child {
    margin-top: 0;
} 

.content:deep(b) {
    color: rgb(var(--pt-color));
}

.content:deep(u) {
    color: rgb(var(--pt-color));
    text-decoration-color: rgb(var(--pt-color));
}
</style>