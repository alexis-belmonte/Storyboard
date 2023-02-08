<script lang="ts">
import Palettable from './Palettable.vue';

export default {
    extends: Palettable,
    props: {
        'filled': {
            type: Boolean
        }
    }
};
</script>

<template>
    <div :style="palettableStyle" class="container">
        <slot />
    </div>
</template>

<style scoped>
.container {
    padding: 24pt;

    border-width: var(--sb-primary-border-width);
    border-radius: var(--sb-primary-radius);

    box-shadow: rgba(var(--pt-color), 0.3) 0 16pt 35pt 0;
}
</style>