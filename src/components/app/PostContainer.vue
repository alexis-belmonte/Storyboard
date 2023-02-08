<script lang="ts">
import Palettable from './ui/Palettable.vue';

import FlowContainer from './ui/FlowContainer.vue';

export default {
    extends: Palettable,

    components: {
        Palettable,

        FlowContainer
    }
};
</script>

<template>
    <FlowContainer :style="palettableStyle" class="container">
        <slot />
    </FlowContainer>
</template>

<style scoped>
.container > :deep(*) {
    aspect-ratio: 1;
}
</style>
