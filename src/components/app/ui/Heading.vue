<script lang="ts">
import Palettable from './Palettable.vue';

export default {
    extends: Palettable,
    props: {
        size: {
            type: String,
            default: 'medium'
        }
    },
    computed: {
        componentStyle() {
            return {
                '--hd-size': `var(--sb-${this.size}-font-size)`
            }
        }
    }
};
</script>

<template>
    <span class="container" :style="[palettableStyle, componentStyle]">
        <slot />
    </span>
</template>

<style scoped>
.container {
    font-family: var(--sb-branding-font);
    font-size: var(--hd-size);

    color: rgb(var(--pt-color));
}
</style>
